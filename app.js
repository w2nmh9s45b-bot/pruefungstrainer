/* Prüfungstrainer – generische Engine für Entscheidungsbaum-Schemata */
(function () {
  "use strict";

  var STORAGE_KEY = "pruefungstrainer-state-v1";

  /* Module (Überordner) – auf oberster Ebene der Startseite. */
  var MODULE_META = {
    "Modul 2": {
      icon: "⚖️",
      desc: "Rechtliche Grundlagen – Privatrechtliches Handeln der Verwaltung (BGB)"
    },
    "Modul 5": {
      icon: "🏛️",
      desc: "Besonderes Verwaltungsrecht – Baurecht und Kommunalrecht"
    }
  };
  var MODULE_ORDER = ["Modul 2", "Modul 5"];

  /* Optionale Metadaten je Fach (Ordner). Neue Fächer entstehen automatisch,
     sobald ein Schema mit neuem subject registriert wird; module ordnet das
     Fach einem Überordner zu. */
  var SUBJECT_META = {
    "Baurecht": {
      module: "Modul 5",
      icon: "🏗️",
      desc: "Baugenehmigung, Maßnahmen der Bauaufsicht, Nachbarschutz und Bauleitplanung – LBauO RLP, BauGB, BauNVO"
    },
    "Kommunalrecht": {
      module: "Modul 5",
      icon: "🏛️",
      desc: "Selbstverwaltung, Aufsicht, Satzungen, Ratsbeschlüsse, Wahlen und Rechtsschutz – GemO RLP, KWG, GG/LV"
    },
    "Privatrecht": {
      module: "Modul 2",
      icon: "📜",
      desc: "BGB: Vertragslehre, Geschäftsfähigkeit, Stellvertretung, Fristen, Sachen-, Bereicherungs- und Deliktsrecht, Leistungsstörungen, Kaufrecht, Grundstücksrecht"
    }
  };

  /* Fachstudienjahre: Schemata mit fs:["FS1","FS2","FS3"] werden in der
     Fach-Ansicht nach Studienjahren gruppiert; ein Schema kann in mehreren
     Jahren erscheinen. Fächer ohne fs-Angaben (z. B. Baurecht) bleiben eine
     flache Liste. */
  var FS_GROUPS = [
    { id: "FS1", label: "Fachstudium 1", sub: "1. Studienjahr" },
    { id: "FS2", label: "Fachstudium 2", sub: "2. Studienjahr" },
    { id: "FS3", label: "Fachstudium 3", sub: "3. Studienjahr" }
  ];

  var el = {
    screen: document.getElementById("screen"),
    stations: document.getElementById("stations"),
    title: document.getElementById("topbar-title"),
    btnBack: document.getElementById("btn-back"),
    btnHome: document.getElementById("btn-home"),
    btnRestart: document.getElementById("btn-restart"),
    btnTrail: document.getElementById("btn-trail"),
    trailSheet: document.getElementById("trail-sheet"),
    trailList: document.getElementById("trail-list"),
    btnTrailClose: document.getElementById("btn-trail-close")
  };

  /* state = null → Navigation; sonst { schemaId, nodeId, flags, trail, history } */
  var state = null;
  /* aktuell geöffneter Modul-/Fach-Ordner (nur Navigation, nicht persistiert) */
  var currentModule = null;
  var currentSubject = null;

  function save() {
    try {
      if (state) localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      else localStorage.removeItem(STORAGE_KEY);
    } catch (e) { /* private mode etc. */ }
  }

  function load() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var s = JSON.parse(raw);
      if (s && getSchema(s.schemaId) && getSchema(s.schemaId).nodes[s.nodeId]) return s;
    } catch (e) { }
    return null;
  }

  function getSchema(id) {
    for (var i = 0; i < window.SCHEMATA.length; i++) {
      if (window.SCHEMATA[i].id === id) return window.SCHEMATA[i];
    }
    return null;
  }

  function getSubjects() {
    var seen = {}, list = [];
    window.SCHEMATA.forEach(function (s) {
      var sub = s.subject || "Sonstige";
      if (!seen[sub]) { seen[sub] = true; list.push(sub); }
    });
    return list;
  }

  function schemataOf(subject) {
    return window.SCHEMATA.filter(function (s) { return (s.subject || "Sonstige") === subject; });
  }

  function moduleOf(subject) {
    return (SUBJECT_META[subject] && SUBJECT_META[subject].module) || "Weitere";
  }

  function getModules() {
    var seen = {}, list = [];
    getSubjects().forEach(function (sub) {
      var m = moduleOf(sub);
      if (!seen[m]) { seen[m] = true; list.push(m); }
    });
    list.sort(function (a, b) {
      var ia = MODULE_ORDER.indexOf(a), ib = MODULE_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
    return list;
  }

  function subjectsOf(mod) {
    return getSubjects().filter(function (sub) { return moduleOf(sub) === mod; });
  }

  function resolveNext(schema, next, flags) {
    var guard = 0;
    while (typeof next === "string" && next.charAt(0) === "@") {
      if (++guard > 10) throw new Error("Router-Schleife: " + next);
      next = schema.routers[next](flags);
    }
    return next;
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* ---------------- Startseite: Modul-Ordner ---------------- */

  function renderHome() {
    /* state nur verlassen, nicht löschen – angefangene Prüfung bleibt fortsetzbar */
    state = null;
    currentModule = null;
    currentSubject = null;
    el.title.textContent = "Prüfungstrainer";
    el.stations.innerHTML = "";
    el.btnBack.disabled = true;

    var saved = load();
    var savedSubject = saved && getSchema(saved.schemaId) ? (getSchema(saved.schemaId).subject || "Sonstige") : null;
    var html = '<div class="home-hero">' +
      '<div class="para">§</div>' +
      "<h1>Prüfungstrainer</h1>" +
      "<p>Wähle ein Modul – darin findest du die Fächer mit ihren Prüfungsschemata zum interaktiven Durchklicken.</p>" +
      "</div>";

    getModules().forEach(function (mod) {
      var meta = MODULE_META[mod] || {};
      var subs = subjectsOf(mod);
      var n = 0;
      subs.forEach(function (sub) { n += schemataOf(sub).length; });
      var resume = savedSubject && moduleOf(savedSubject) === mod;
      html += '<button class="folder-card" data-module="' + esc(mod) + '">' +
        '<span class="fc-icon">' + (meta.icon || "📁") + "</span>" +
        '<span class="fc-body"><span class="fc-name">' + esc(mod) + "</span>" +
        '<span class="fc-count">' + subs.length + (subs.length === 1 ? " Fach" : " Fächer") + " · " + n + " Schema" + (n === 1 ? "" : "ta") + (meta.desc ? " · " + esc(meta.desc) : "") + "</span>" +
        (resume ? '<span class="sc-resume">▸ Angefangene Prüfung fortsetzen</span>' : "") +
        "</span>" +
        '<span class="fc-chev">›</span>' +
        "</button>";
    });

    html += '<button class="folder-card disabled" disabled>' +
      '<span class="fc-icon">＋</span>' +
      '<span class="fc-body"><span class="fc-name">Weitere Module</span>' +
      '<span class="fc-count">Hier ist Platz für künftige Module und Fächer (z. B. AVR in Modul 2).</span></span>' +
      "</button>";

    el.screen.innerHTML = html;
    el.screen.querySelectorAll(".folder-card[data-module]").forEach(function (card) {
      card.addEventListener("click", function () {
        renderModule(card.getAttribute("data-module"));
      });
    });
    window.scrollTo(0, 0);
  }

  /* ---------------- Modul-Ansicht: Fach-Ordner ---------------- */

  function renderModule(mod) {
    state = null;
    currentModule = mod;
    currentSubject = null;
    el.title.textContent = mod;
    el.stations.innerHTML = "";
    el.btnBack.disabled = false;

    var saved = load();
    var savedSubject = saved && getSchema(saved.schemaId) ? (getSchema(saved.schemaId).subject || "Sonstige") : null;
    var meta = MODULE_META[mod] || {};
    var html = '<div class="subject-head">' +
      '<span class="sh-icon">' + (meta.icon || "📁") + "</span>" +
      "<div><h1>" + esc(mod) + "</h1>" +
      (meta.desc ? "<p>" + esc(meta.desc) + "</p>" : "") +
      "</div></div>";

    subjectsOf(mod).forEach(function (sub) {
      var smeta = SUBJECT_META[sub] || {};
      var n = schemataOf(sub).length;
      var resume = savedSubject === sub;
      html += '<button class="folder-card" data-subject="' + esc(sub) + '">' +
        '<span class="fc-icon">' + (smeta.icon || "📚") + "</span>" +
        '<span class="fc-body"><span class="fc-name">' + esc(sub) + "</span>" +
        '<span class="fc-count">' + n + " Schema" + (n === 1 ? "" : "ta") + (smeta.desc ? " · " + esc(smeta.desc) : "") + "</span>" +
        (resume ? '<span class="sc-resume">▸ Angefangene Prüfung fortsetzen</span>' : "") +
        "</span>" +
        '<span class="fc-chev">›</span>' +
        "</button>";
    });

    el.screen.innerHTML = html;
    el.screen.querySelectorAll(".folder-card[data-subject]").forEach(function (card) {
      card.addEventListener("click", function () {
        renderSubject(card.getAttribute("data-subject"));
      });
    });
    window.scrollTo(0, 0);
  }

  /* ---------------- Fach-Ansicht: Schemata-Auswahl ---------------- */

  function renderSubject(subject) {
    state = null;
    currentModule = moduleOf(subject);
    currentSubject = subject;
    el.title.textContent = subject;
    el.stations.innerHTML = "";
    el.btnBack.disabled = false;

    var saved = load();
    var meta = SUBJECT_META[subject] || {};
    var html = '<div class="subject-head">' +
      '<span class="sh-icon">' + (meta.icon || "📚") + "</span>" +
      "<div><h1>" + esc(subject) + "</h1>" +
      (meta.desc ? "<p>" + esc(meta.desc) + "</p>" : "") +
      "</div></div>";

    function schemaCard(s) {
      var resume = saved && saved.schemaId === s.id;
      var also = "";
      if (s.fs && s.fs.length > 1) {
        also = '<span class="sc-fs">Gilt für Fachstudium ' + s.fs.map(function (y) {
          return y.replace("FS", "");
        }).join(" und ") + "</span>";
      }
      return '<button class="schema-card" data-schema="' + s.id + '">' +
        '<div class="sc-area">' + esc(s.area) + "</div>" +
        "<h2>" + esc(s.title) + "</h2>" +
        "<p>" + esc(s.description) + "</p>" +
        also +
        (resume ? '<span class="sc-resume">▸ Angefangene Prüfung fortsetzen</span>' : "") +
        "</button>";
    }

    var list = schemataOf(subject);
    var grouped = list.some(function (s) { return s.fs && s.fs.length; });

    if (grouped) {
      FS_GROUPS.forEach(function (g) {
        var inYear = list.filter(function (s) { return s.fs && s.fs.indexOf(g.id) !== -1; });
        if (!inYear.length) return;
        html += '<div class="fs-group">' + esc(g.label) +
          '<span>' + esc(g.sub) + " · " + inYear.length + " Schema" + (inYear.length === 1 ? "" : "ta") + "</span></div>";
        inYear.forEach(function (s) { html += schemaCard(s); });
      });
      var rest = list.filter(function (s) { return !s.fs || !s.fs.length; });
      if (rest.length) {
        html += '<div class="fs-group">Weitere Schemata<span>ohne Jahreszuordnung</span></div>';
        rest.forEach(function (s) { html += schemaCard(s); });
      }
    } else {
      list.forEach(function (s) { html += schemaCard(s); });
    }

    el.screen.innerHTML = html;
    el.screen.querySelectorAll(".schema-card[data-schema]").forEach(function (card) {
      card.addEventListener("click", function () {
        var id = card.getAttribute("data-schema");
        var savedNow = load();
        if (savedNow && savedNow.schemaId === id) {
          state = savedNow;
          render();
        } else {
          startSchema(id);
        }
      });
    });
    window.scrollTo(0, 0);
  }

  function startSchema(id) {
    var schema = getSchema(id);
    state = { schemaId: id, nodeId: schema.start, flags: {}, trail: [], history: [] };
    save();
    render();
  }

  /* ---------------- Prüfungsansicht ---------------- */

  function renderStations(schema, node) {
    var current = node.station;
    var order = schema.stations.map(function (s) { return s.id; });
    var idx = order.indexOf(current);
    el.stations.innerHTML = schema.stations.map(function (s, i) {
      var cls = "station" + (i < idx ? " done" : i === idx ? " active" : "");
      return '<div class="' + cls + '">' + (i < idx ? "✓ " : "") + esc(s.label) + "</div>";
    }).join("");
    var active = el.stations.querySelector(".station.active");
    if (active && active.scrollIntoView) {
      active.scrollIntoView({ inline: "center", block: "nearest" });
    }
  }

  function render() {
    if (!state) {
      if (currentSubject) renderSubject(currentSubject);
      else if (currentModule) renderModule(currentModule);
      else renderHome();
      return;
    }
    var schema = getSchema(state.schemaId);
    var node = schema.nodes[state.nodeId];
    el.title.textContent = schema.title;
    el.btnBack.disabled = state.history.length === 0;
    renderStations(schema, node);

    if (node.kind === "ergebnis") renderResult(schema, node);
    else renderQuestion(schema, node);
    window.scrollTo(0, 0);
  }

  function cardHtml(node) {
    var h = '<div class="card">';
    if (node.norm) h += '<span class="norm-badge">' + esc(node.norm) + "</span>";
    h += "<h1>" + esc(node.title) + "</h1>";
    if (node.text) h += '<div class="lawtext">' + esc(node.text) + "</div>";
    if (node.def) h += '<div class="def">' + node.def + "</div>";
    if (node.hint) h += '<div class="hint">' + esc(node.hint) + "</div>";
    h += "</div>";
    return h;
  }

  function renderQuestion(schema, node) {
    var html = cardHtml(node) + '<div class="options">';
    node.options.forEach(function (opt, i) {
      html += '<button class="opt tone-' + (opt.tone || "neutral") + '" data-opt="' + i + '">' +
        '<span class="opt-label">' + esc(opt.label) + "</span>" +
        (opt.detail ? '<span class="opt-detail">' + esc(opt.detail) + "</span>" : "") +
        "</button>";
    });
    html += "</div>";
    el.screen.innerHTML = html;

    el.screen.querySelectorAll(".opt").forEach(function (btn) {
      btn.addEventListener("click", function () {
        choose(schema, node, parseInt(btn.getAttribute("data-opt"), 10));
      });
    });
  }

  function choose(schema, node, optIndex) {
    var opt = node.options[optIndex];

    state.history.push({
      nodeId: state.nodeId,
      flags: JSON.parse(JSON.stringify(state.flags)),
      trailLen: state.trail.length
    });

    state.trail.push({
      q: node.title,
      norm: node.norm || "",
      a: opt.label,
      tone: opt.tone || "neutral"
    });

    if (opt.set) {
      Object.keys(opt.set).forEach(function (k) { state.flags[k] = opt.set[k]; });
    }

    state.nodeId = resolveNext(schema, opt.next, state.flags);
    save();
    render();
  }

  function goBack() {
    if (state) {
      if (state.history.length === 0) return;
      var prev = state.history.pop();
      state.nodeId = prev.nodeId;
      state.flags = prev.flags;
      state.trail = state.trail.slice(0, prev.trailLen);
      save();
      render();
    } else if (currentSubject) {
      renderModule(moduleOf(currentSubject));
    } else if (currentModule) {
      renderHome();
    }
  }

  /* ---------------- Ergebnis ---------------- */

  var DEFAULT_KICKER = {
    pos: "Ergebnis: positiv",
    neg: "Ergebnis: negativ",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  };

  function renderResult(schema, node) {
    var kicker = node.kicker ||
      (schema.verdictLabels && schema.verdictLabels[node.verdict]) ||
      DEFAULT_KICKER[node.verdict] || "Ergebnis";

    var html = '<div class="verdict v-' + node.verdict + '">' +
      '<div class="v-kicker">' + esc(kicker) + "</div>" +
      "<h1>" + esc(node.title) + "</h1>" +
      "<p>" + esc(node.text) + "</p>";

    if (schema.resultExtras) {
      schema.resultExtras(state.flags, node).forEach(function (x) {
        html += '<p style="margin-top:10px">' + esc(x) + "</p>";
      });
    }
    html += "</div>";

    html += '<div class="summary-title">Dein Prüfungsweg (' + state.trail.length + " Schritte)</div>";
    state.trail.forEach(function (t, i) {
      var sym = { pos: "✓", neg: "✕", warn: "▲", neutral: (i + 1) }[t.tone];
      html += '<div class="sumstep">' +
        '<div class="dot ' + t.tone + '">' + sym + "</div>" +
        "<div>" +
        '<div class="s-q">' + esc(t.q) + "</div>" +
        '<div class="s-a">' + esc(t.a) + "</div>" +
        (t.norm ? '<div class="s-norm">' + esc(t.norm) + "</div>" : "") +
        "</div></div>";
    });

    html += '<button class="bigbtn" id="btn-again">Schema erneut prüfen</button>' +
      '<button class="bigbtn secondary" id="btn-copy">Prüfungsweg kopieren</button>' +
      '<button class="bigbtn secondary" id="btn-tohome">Zur Schema-Auswahl</button>';

    el.screen.innerHTML = html;
    document.getElementById("btn-again").addEventListener("click", function () { startSchema(schema.id); });
    document.getElementById("btn-tohome").addEventListener("click", function () {
      state = null; save();
      renderSubject(schema.subject || "Sonstige");
    });
    document.getElementById("btn-copy").addEventListener("click", function () {
      var lines = [schema.title, "Ergebnis: " + node.title, ""];
      state.trail.forEach(function (t, i) {
        lines.push((i + 1) + ". " + t.q + (t.norm ? " [" + t.norm + "]" : ""));
        lines.push("   → " + t.a);
      });
      var text = lines.join("\n");
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          document.getElementById("btn-copy").textContent = "✓ Kopiert";
        });
      }
    });
  }

  /* ---------------- Verlauf-Sheet ---------------- */

  function showTrail() {
    if (!state || state.trail.length === 0) {
      el.trailList.innerHTML = "<li>Noch keine Schritte beantwortet.</li>";
    } else {
      el.trailList.innerHTML = state.trail.map(function (t) {
        return "<li><b>" + esc(t.q) + "</b><span class=\"t-" + t.tone + "\">→ " + esc(t.a) + "</span>" +
          (t.norm ? " · " + esc(t.norm) : "") + "</li>";
      }).join("");
    }
    el.trailSheet.classList.remove("hidden");
  }

  /* ---------------- Wiring ---------------- */

  el.btnBack.addEventListener("click", goBack);
  el.btnHome.addEventListener("click", function () {
    if (state) {
      /* laufende Prüfung bleibt gespeichert und kann über die Karte fortgesetzt werden */
      var sub = getSchema(state.schemaId).subject || "Sonstige";
      renderSubject(sub);
    } else {
      renderHome();
    }
  });
  el.btnRestart.addEventListener("click", function () {
    if (state) startSchema(state.schemaId);
  });
  el.btnTrail.addEventListener("click", showTrail);
  el.btnTrailClose.addEventListener("click", function () {
    el.trailSheet.classList.add("hidden");
  });
  el.trailSheet.addEventListener("click", function (e) {
    if (e.target === el.trailSheet) el.trailSheet.classList.add("hidden");
  });

  /* Service Worker für Offline-Betrieb */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () {
      navigator.serviceWorker.register("sw.js").catch(function () { });
    });
  }

  /* Start: gespeicherte Prüfung fortsetzen oder Startseite */
  var saved = load();
  if (saved) { state = saved; render(); }
  else renderHome();
})();
