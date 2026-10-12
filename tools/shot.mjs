#!/usr/bin/env node
// Render the dashboard in headless Chromium and save screenshots, so an agent
// can see the page. No npm packages: node 22+ (built-in fetch and WebSocket) and
// podman. The browser runs in a container (chromedp/headless-shell) that sees
// this repo read-only at /site and loads it from file://, the same way the app
// must work for the owner.
//
// Usage: node tools/shot.mjs [options and steps, run in the order given]
//
//   --size WxH        viewport, default 1280x1440 (set before the first step)
//   --state JSON      saved state to start from, the shape the app stores in
//                     localStorage, e.g. '{"level":10,"done":["t_1_03"]}'
//   --url URL         page to load instead of file:///site/index.html
//   --click SEL       click the first element matching the CSS selector
//   --hover SEL       move the mouse over the first match
//   --eval JS         run JavaScript in the page and print its result
//   --wait MS         pause
//   --shot FILE.png   save a screenshot of the viewport
//
// Example:
//   node tools/shot.mjs --shot out/all.png --click '#lockBtn' --shot out/unlocked.png
//
// Console messages and page errors are printed as they happen. Exit code is 1
// if a step fails or the page threw an error.
//
// Not covered: native tooltips (title attributes) and file dialogs do not show
// in a screenshot, and the container has only basic fonts.

import { spawnSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const IMAGE = process.env.SHOT_IMAGE || "docker.io/chromedp/headless-shell:stable";
const PORT = Number(process.env.SHOT_PORT || 9333);
const REPO = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const NAME = "forever-lvl-shot-" + process.pid;

const args = process.argv.slice(2);
if (!args.length || args.includes("--help")) {
  console.log("See the comment at the top of tools/shot.mjs for usage.");
  process.exit(args.length ? 0 : 1);
}

let size = [1280, 1440], url = "file:///site/index.html", saved = null;
const steps = [];
for (let i = 0; i < args.length; i += 2) {
  const key = args[i], value = args[i + 1];
  if (value === undefined) fail("Missing value for " + key);
  if (key === "--size") size = value.split("x").map(Number);
  else if (key === "--url") url = value;
  else if (key === "--state") saved = JSON.stringify(JSON.parse(value));
  else if (["--click", "--hover", "--eval", "--wait", "--shot"].includes(key)) steps.push([key.slice(2), value]);
  else fail("Unknown option " + key);
}

function fail(message) { console.error(message); process.exit(1); }
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
function podman(...a) { return spawnSync("podman", a, { encoding: "utf8" }); }

let pageErrors = 0;

async function main() {
  const run = podman("run", "-d", "--rm", "--name", NAME,
    "-p", "127.0.0.1:" + PORT + ":9222", "-v", REPO + ":/site:ro", IMAGE);
  if (run.status !== 0) fail("podman run failed:\n" + run.stderr);

  const base = "http://127.0.0.1:" + PORT;
  let up = false;
  for (let i = 0; i < 50 && !up; i++) {
    try { up = (await fetch(base + "/json/version")).ok; } catch (e) { await sleep(200); }
  }
  if (!up) throw new Error("Browser did not start on port " + PORT);

  const target = await (await fetch(base + "/json/new?about:blank", { method: "PUT" })).json();
  const ws = new WebSocket(target.webSocketDebuggerUrl);
  await new Promise((ok, bad) => { ws.onopen = ok; ws.onerror = () => bad(new Error("WebSocket failed")); });

  let nextId = 0;
  const pending = new Map(), waiters = [];
  ws.onmessage = (m) => {
    const msg = JSON.parse(m.data);
    if (msg.id && pending.has(msg.id)) {
      const [ok, bad] = pending.get(msg.id);
      pending.delete(msg.id);
      if (msg.error) bad(new Error(msg.error.message)); else ok(msg.result);
    } else if (msg.method === "Runtime.consoleAPICalled") {
      console.log("[console." + msg.params.type + "] " + msg.params.args.map((a) => a.value ?? a.description ?? "").join(" "));
    } else if (msg.method === "Runtime.exceptionThrown") {
      pageErrors++;
      const d = msg.params.exceptionDetails;
      console.log("[page error] " + ((d.exception && d.exception.description) || d.text));
    } else if (msg.method === "Log.entryAdded") {
      console.log("[" + msg.params.entry.level + "] " + msg.params.entry.text + " " + (msg.params.entry.url || ""));
    }
    for (let i = waiters.length - 1; i >= 0; i--) if (waiters[i][0] === msg.method) waiters.splice(i, 1)[0][1]();
  };
  const send = (method, params) => new Promise((ok, bad) => {
    const id = ++nextId;
    pending.set(id, [ok, bad]);
    ws.send(JSON.stringify({ id, method, params: params || {} }));
  });
  const event = (method) => new Promise((ok) => waiters.push([method, ok]));
  const evaluate = async (expression) => {
    const r = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
    if (r.exceptionDetails) throw new Error((r.exceptionDetails.exception && r.exceptionDetails.exception.description) || r.exceptionDetails.text);
    return r.result.value;
  };
  // Centre of the first match, scrolled into view; throws when nothing matches.
  const point = async (sel) => {
    const p = await evaluate("(() => { const n = document.querySelector(" + JSON.stringify(sel) + ");" +
      "if (!n) return null; n.scrollIntoView({ block: 'center' }); const r = n.getBoundingClientRect();" +
      "return [r.left + r.width / 2, r.top + r.height / 2]; })()");
    if (!p) throw new Error("No element matches " + sel);
    return p;
  };

  await send("Page.enable");
  await send("Runtime.enable");
  await send("Log.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: size[0], height: size[1], deviceScaleFactor: 1, mobile: false });
  if (saved) {
    await send("Page.addScriptToEvaluateOnNewDocument", {
      source: "try { if (!localStorage.getItem('forever-lvl.v1')) localStorage.setItem('forever-lvl.v1', " + JSON.stringify(saved) + "); } catch (e) {}"
    });
  }
  const loaded = event("Page.loadEventFired");
  await send("Page.navigate", { url });
  await loaded;
  // The app loads its data files after the page; wait for the first render.
  for (let i = 0; i < 25; i++) {
    if (await evaluate("!!document.querySelector('.task, .empty, .error')")) break;
    await sleep(200);
  }

  for (const [kind, value] of steps) {
    if (kind === "click") {
      const [x, y] = await point(value);
      for (const type of ["mousePressed", "mouseReleased"]) {
        await send("Input.dispatchMouseEvent", { type, x, y, button: "left", clickCount: 1 });
      }
    } else if (kind === "hover") {
      const [x, y] = await point(value);
      await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y });
    } else if (kind === "eval") {
      console.log("[eval] " + JSON.stringify(await evaluate(value)));
    } else if (kind === "wait") {
      await sleep(Number(value));
    } else if (kind === "shot") {
      await sleep(150);
      const png = await send("Page.captureScreenshot", { format: "png" });
      const file = resolve(value);
      mkdirSync(dirname(file), { recursive: true });
      writeFileSync(file, Buffer.from(png.data, "base64"));
      console.log("[shot] " + file);
    }
  }
  ws.close();
}

main().then(() => 0, (e) => { console.error("FAILED: " + e.message); return 1; }).then((code) => {
  podman("stop", "-t", "1", NAME);
  process.exit(code || (pageErrors ? 1 : 0));
});
