/*
 * VWL-Schema: Verbraucherpreisindex & Inflationsrate – Warenkorb-Rechner
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 * Tool-Knoten: editierbarer Mini-Warenkorb (Aufgabe 1 aus dem Inflations-Skript);
 * Laspeyres-Index und Preissteigerung werden live berechnet.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 2.1–2.4 (VPI, Warenkorb,
 *    Wägungsschema, Laspeyres, Geldwert 1/P, Messprobleme, HVPI; Aufgabe 1)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-vpi-inflationsrate",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Inflation & Geld",
  title: "VPI & Inflationsrate (Warenkorb-Rechner)",
  description: "Die Skript-Aufgabe zum Anfassen: Warenkorb 2020 vs. 2022 – Preise ändern und live sehen, wie Laspeyres-Index, Preissteigerung und Kaufkraft reagieren. Dazu Warenkorb, Wägungsschema und die Messprobleme des VPI.",
  start: "start",
  stations: [
    { id: "konzept", label: "Messkonzept" },
    { id: "rechner", label: "Warenkorb" },
    { id: "probleme", label: "Grenzen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Index berechnet",
    neg: "Ergebnis: Sonderfall",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "konzept",
      kind: "frage",
      norm: "VPI · 3 Stufen",
      title: "Wie misst die amtliche Statistik das Preisniveau?",
      def: "Statt eines einheitlichen Preisniveaus berechnet die amtliche Statistik den <b>Verbraucherpreisindex für Deutschland (VPI)</b> – in drei Stufen:<br><br><b>I. Warenkorb</b>: ca. <b>700 Waren und Dienstleistungen</b>, die stellvertretend Verbrauch und Preisentwicklung repräsentieren; ständig an die Verbrauchsgewohnheiten angepasst.<br><b>II. Wägungsschema</b>: bestimmt das Gewicht der Preisrepräsentanten im Gesamtindex (z. B. Anteil der Mietausgaben); wird i. d. R. nur <b>alle fünf Jahre</b> aktualisiert.<br><b>III. Preisanstieg zum Basisjahr</b>: Berechnung mit dem <b>Laspeyres-Index auf fester Basis</b> (Mengen des Basisjahres!).<br><br>Merke: <b>Geldwert (Kaufkraft) = 1 ÷ Preisniveau</b> – steigt der Index, sinkt der Geldwert (reziprok).",
      options: [
        { label: "Zum Warenkorb-Rechner (Skript-Aufgabe 1)", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "Laspeyres-Index",
      title: "Preissteigerung 2022 gegenüber Basisjahr 2020 ermitteln",
      def: "<b>Laspeyres:</b> P = Σ(p₁ · q₀) ÷ Σ(p₀ · q₀) × 100 – die Preise des Berichtsjahres werden mit den <b>Mengen des Basisjahres</b> gewichtet.<br><b>Inflationsrate</b> = Preisindex ÷ Preisindex der Vorperiode × 100 − 100.<br><br>Ändere die Preise und beobachte den Index (Mengen = Basisjahr 2020, fest):",
      tool: '<div class="tool"><div class="tool-title">🎛 Warenkorb-Rechner (Aufgabe 1)</div>' +
        '<table><tr><th>Gut</th><th>Menge q₀</th><th>Preis 2020</th><th>Preis 2022</th></tr>' +
        '<tr><td>Schaumwein</td><td>2.320.000</td><td><input type="number" id="vpi-a0" value="6.95" step="0.05" min="0"></td><td><input type="number" id="vpi-a1" value="8.49" step="0.05" min="0"></td></tr>' +
        '<tr><td>Eistee (l)</td><td>1.275.000</td><td><input type="number" id="vpi-b0" value="1.80" step="0.05" min="0"></td><td><input type="number" id="vpi-b1" value="1.95" step="0.05" min="0"></td></tr>' +
        '<tr><td>Pommes (kg)</td><td>1.130.000</td><td><input type="number" id="vpi-c0" value="4.20" step="0.05" min="0"></td><td><input type="number" id="vpi-c1" value="4.50" step="0.05" min="0"></td></tr>' +
        '<tr><td>Zigaretten</td><td>2.400.000</td><td><input type="number" id="vpi-d0" value="4.00" step="0.05" min="0"></td><td><input type="number" id="vpi-d1" value="5.00" step="0.05" min="0"></td></tr>' +
        '<tr><td>Damenjacke</td><td>85.000</td><td><input type="number" id="vpi-e0" value="98" step="1" min="0"></td><td><input type="number" id="vpi-e1" value="128" step="1" min="0"></td></tr>' +
        '</table><div class="tool-read" id="vpi-out">…</div></div>',
      setup: function (root) {
        var Q = [2320000, 1275000, 1130000, 2400000, 85000];
        var ids = ["a", "b", "c", "d", "e"];
        var out = root.querySelector("#vpi-out");
        function fmt0(n) { return Math.round(n).toLocaleString("de-DE"); }
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function upd() {
          var s0 = 0, s1 = 0, ok = true;
          ids.forEach(function (id, i) {
            var p0 = parseFloat(root.querySelector("#vpi-" + id + "0").value);
            var p1 = parseFloat(root.querySelector("#vpi-" + id + "1").value);
            if (!(p0 >= 0) || !(p1 >= 0)) { ok = false; return; }
            s0 += p0 * Q[i];
            s1 += p1 * Q[i];
          });
          if (!ok || s0 <= 0) { out.innerHTML = "Bitte gültige Preise eingeben."; return; }
          var idx = s1 / s0 * 100;
          var infl = idx - 100;
          var kaufkraft = 100 / idx * 100;
          out.innerHTML =
            "Konsumsumme Basisjahr Σ(p₀·q₀) = <b>" + fmt0(s0) + " €</b><br>" +
            "Konsumsumme Berichtsjahr Σ(p₁·q₀) = <b>" + fmt0(s1) + " €</b><br>" +
            "Preisindex P = " + fmt0(s1) + " ÷ " + fmt0(s0) + " × 100 = <b>" + f2(idx) + "</b><br>" +
            '<span class="tool-flag ' + (infl > 2 ? "bad" : infl >= 0 ? "ok" : "mid") + '">Preissteigerung: ' + (infl >= 0 ? "+" : "") + f1(infl) + " %</span> " +
            "Kaufkraft des Geldes (1/P): nur noch <b>" + f1(kaufkraft) + " %</b> des Basisjahres.";
        }
        ids.forEach(function (id) {
          root.querySelector("#vpi-" + id + "0").addEventListener("input", upd);
          root.querySelector("#vpi-" + id + "1").addEventListener("input", upd);
        });
        upd();
      },
      hint: "Skript-Lösung mit den Startwerten: Index ≈ 122,03 → Preissteigerung ≈ +22,0 % gegenüber 2020; die Kaufkraft sinkt auf ≈ 81,9 %.",
      options: [
        { label: "Weiter: Wo liegen die Grenzen der Messung?", next: "q_probleme", tone: "pos" }
      ]
    },

    q_probleme: {
      station: "probleme",
      kind: "frage",
      norm: "Messprobleme · HVPI",
      title: "Probleme der Geldwertmessung – und wozu der Index dient",
      def: "<b>Probleme</b> der Geldwertmessung durch einen VPI:<br>• Problem aller <b>Durchschnittswerte</b> (individuelle Warenkörbe weichen ab → „gefühlte Inflation“)<br>• Korrektheit der Angaben (statistisches Ermittlungsproblem)<br>• <b>Qualitätsänderungen</b> werden möglicherweise unzureichend berücksichtigt (Qualitätssteigerung vs. Preissteigerung kaum trennbar)<br>• reiner <b>Konsum</b>preisindex<br><br><b>Anwendungen:</b> Inflationsrate, Kaufkraftentwicklung (1/P), Reallohn-Beurteilung, Preisbereinigung des BIP, Geldmengensteuerung der EZB, Preisgleitklauseln in Verträgen, Zielkontrolle des magischen Vierecks.<br><br><b>HVPI:</b> Der Harmonisierte Verbraucherpreisindex macht Inflation <b>europäisch vergleichbar</b>; die EZB nutzt den Index der Eurozone (VPI-EWU) für ihre Währungspolitik. EZB-Ziel: Inflation <b>nahe 2 %</b>.",
      options: [
        { label: "Alles klar – Ergebnis anzeigen", next: "e_vpi", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vpi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "VPI beherrscht",
      title: "VPI & Inflationsrate: Rechenweg sitzt",
      text: "Der Dreisatz der Preismessung:\n1. Warenkorb (ca. 700 Güter, laufend angepasst),\n2. Wägungsschema (Gewichte, alle 5 Jahre aktualisiert – damit innerhalb der 5 Jahre die REINE Preisentwicklung sichtbar bleibt),\n3. Laspeyres-Index: P = Σ(p₁·q₀) ÷ Σ(p₀·q₀) × 100 – Berichtspreise zu BASISJAHRES-Mengen.\n\nInflationsrate = Index der Periode ÷ Index der Vorperiode × 100 − 100.\nGeldwert/Kaufkraft = 1 ÷ Preisniveau (reziprok!).\n\nBegriffe: INFLATION = nicht nur kurzfristige Steigerung des PreisNIVEAUS (einzelne Güter genügen nicht!); DEFLATION = über längere Zeit fallende Preise; Ziel der EZB: Inflation nahe 2 % im Jahr.\n\nWeiter mit den Schemata 'Inflationsursachen', 'Inflationsarten' und 'Wirkungen der Inflation'."
    }
  }
});
