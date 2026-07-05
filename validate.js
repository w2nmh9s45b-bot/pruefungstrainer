/* Validator für Prüfungstrainer-Schemata: lädt alle schema-*.js mit fake window,
   prüft Struktur, next-Ziele, Router (BFS über Knoten×Flag-Zustände),
   Erreichbarkeit, Stationen, verdict/tone-Enums sowie index.html/sw.js-Abgleich. */
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const DIR = "/Users/moritzschmidt/Brain/Apps/Pruefungstrainer";
const VERDICTS = ["pos", "neg", "warn", "frei"];
const TONES = ["pos", "neg", "warn", "neutral"];

let errors = [], warnings = [];
const err = (m) => errors.push(m);
const warn = (m) => warnings.push(m);

// --- Schemata laden ---
const sandbox = { window: { SCHEMATA: [] } };
vm.createContext(sandbox);
const files = fs.readdirSync(DIR).filter((f) => /^schema-.*\.js$/.test(f)).sort();
for (const f of files) {
  const code = fs.readFileSync(path.join(DIR, f), "utf8");
  try {
    vm.runInContext(code, sandbox, { filename: f });
  } catch (e) {
    err(`${f}: Ladefehler – ${e.message}`);
  }
}
const schemata = sandbox.window.SCHEMATA;
console.log(`Geladen: ${files.length} Dateien, ${schemata.length} Schemata`);

// --- Duplikate ---
const ids = {};
for (const s of schemata) {
  if (ids[s.id]) err(`Doppelte Schema-id: ${s.id}`);
  ids[s.id] = true;
}

// --- Flag-Kombinationen sammeln (alle in set{} vorkommenden Werte je Key) ---
function flagDomains(schema) {
  const dom = {};
  for (const nid in schema.nodes) {
    const n = schema.nodes[nid];
    (n.options || []).forEach((o) => {
      if (o.set) for (const k in o.set) {
        dom[k] = dom[k] || new Set();
        dom[k].add(JSON.stringify(o.set[k]));
      }
    });
  }
  for (const k in dom) dom[k] = [...dom[k]].map((v) => JSON.parse(v));
  return dom;
}
function combos(dom) {
  const keys = Object.keys(dom);
  let out = [{}];
  for (const k of keys) {
    const next = [];
    for (const c of out) {
      next.push({ ...c }); // Flag nicht gesetzt
      for (const v of dom[k]) next.push({ ...c, [k]: v });
    }
    out = next;
    if (out.length > 4096) { out = out.slice(0, 4096); break; }
  }
  return out;
}

for (const s of schemata) {
  const pre = `[${s.id}]`;
  if (!s.subject) err(`${pre} subject fehlt`);
  if (!s.title) err(`${pre} title fehlt`);
  if (!s.nodes || !s.nodes[s.start]) { err(`${pre} start-Knoten "${s.start}" fehlt`); continue; }
  if (s.fs && !Array.isArray(s.fs)) err(`${pre} fs muss Array sein`);
  (s.fs || []).forEach((f) => { if (!["FS1","FS2","FS3"].includes(f)) err(`${pre} unbekanntes fs "${f}"`); });

  const stationIds = new Set((s.stations || []).map((st) => st.id));
  const routerNames = Object.keys(s.routers || {});
  const dom = flagDomains(s);
  const allCombos = combos(dom);

  // Knoten prüfen
  for (const nid in s.nodes) {
    const n = s.nodes[nid];
    const np = `${pre} ${nid}:`;
    if (n.station && !stationIds.has(n.station)) err(`${np} unbekannte station "${n.station}"`);
    if (n.kind === "ergebnis") {
      if (!VERDICTS.includes(n.verdict)) err(`${np} ungültiges verdict "${n.verdict}"`);
      if (!n.text) err(`${np} ergebnis ohne text`);
      if (n.options) warn(`${np} ergebnis mit options`);
    } else if (n.kind === "frage") {
      if (!n.options || !n.options.length) { err(`${np} frage ohne options`); continue; }
      n.options.forEach((o, i) => {
        if (o.tone && !TONES.includes(o.tone)) err(`${np} opt ${i}: ungültiger tone "${o.tone}"`);
        if (!o.label) err(`${np} opt ${i}: label fehlt`);
        const t = o.next;
        if (!t) { err(`${np} opt ${i}: next fehlt`); return; }
        if (t.charAt(0) === "@") {
          if (!routerNames.includes(t)) err(`${np} opt ${i}: Router "${t}" nicht definiert`);
        } else if (!s.nodes[t]) err(`${np} opt ${i}: next-Ziel "${t}" existiert nicht`);
      });
    } else err(`${np} unbekannter kind "${n.kind}"`);
  }

  // Router mit allen Flag-Kombis testen (inkl. Verkettung)
  for (const rn of routerNames) {
    for (const c of allCombos) {
      let target;
      try { target = s.routers[rn]({ ...c }); }
      catch (e) { err(`${pre} Router ${rn} wirft mit flags ${JSON.stringify(c)}: ${e.message}`); continue; }
      let depth = 0;
      while (typeof target === "string" && target.charAt(0) === "@" && depth < 10) {
        if (!s.routers[target]) { err(`${pre} Router ${rn} → unbekannter Router "${target}"`); break; }
        target = s.routers[target]({ ...c }); depth++;
      }
      if (typeof target !== "string" || (target.charAt(0) !== "@" && !s.nodes[target]))
        err(`${pre} Router ${rn} liefert ungültiges Ziel "${target}" (flags ${JSON.stringify(c)})`);
    }
  }

  // Erreichbarkeit: BFS über Knoten×Flags
  const seen = new Set();
  const q = [{ node: s.start, flags: {} }];
  const seenNodes = new Set();
  while (q.length) {
    const { node, flags } = q.shift();
    const key = node + "|" + JSON.stringify(flags, Object.keys(flags).sort());
    if (seen.has(key)) continue;
    seen.add(key);
    seenNodes.add(node);
    const n = s.nodes[node];
    if (!n || n.kind === "ergebnis") continue;
    for (const o of n.options || []) {
      const nf = o.set ? { ...flags, ...o.set } : flags;
      let t = o.next;
      let depth = 0;
      while (typeof t === "string" && t.charAt(0) === "@" && depth < 10) {
        if (!s.routers || !s.routers[t]) { t = null; break; }
        t = s.routers[t]({ ...nf }); depth++;
      }
      if (t && s.nodes[t]) q.push({ node: t, flags: nf });
    }
  }
  for (const nid in s.nodes) {
    if (!seenNodes.has(nid)) warn(`${pre} Knoten "${nid}" unerreichbar`);
  }
  // Stationen genutzt?
  const usedStations = new Set();
  for (const nid of seenNodes) { const st = s.nodes[nid].station; if (st) usedStations.add(st); }
  for (const st of stationIds) if (!usedStations.has(st)) warn(`${pre} Station "${st}" ungenutzt`);
}

// --- index.html / sw.js Abgleich ---
const html = fs.readFileSync(path.join(DIR, "index.html"), "utf8");
const sw = fs.readFileSync(path.join(DIR, "sw.js"), "utf8");
for (const f of files) {
  if (!html.includes(`src="${f}"`)) err(`index.html: ${f} nicht eingebunden`);
  if (!sw.includes(`"./${f}"`)) err(`sw.js: ${f} fehlt in ASSETS`);
}
// Skripte in index.html, die es nicht gibt
(html.match(/src="(schema-[^"]+)"/g) || []).forEach((m) => {
  const f = m.slice(5, -1);
  if (!files.includes(f)) err(`index.html verweist auf fehlende Datei ${f}`);
});
(sw.match(/"\.\/(schema-[^"]+)"/g) || []).forEach((m) => {
  const f = m.slice(3, -1);
  if (!files.includes(f)) err(`sw.js ASSETS verweist auf fehlende Datei ${f}`);
});
// app.js: SUBJECT_META deckt alle subjects ab
const appjs = fs.readFileSync(path.join(DIR, "app.js"), "utf8");
const subjects = [...new Set(schemata.map((s) => s.subject))];
for (const sub of subjects) {
  if (!appjs.includes(`"${sub}"`)) warn(`app.js: subject "${sub}" nicht in SUBJECT_META`);
}

console.log(`\nFehler: ${errors.length}, Warnungen: ${warnings.length}`);
errors.forEach((e) => console.log("  ERROR " + e));
warnings.forEach((w) => console.log("  WARN  " + w));
process.exit(errors.length ? 1 : 0);
