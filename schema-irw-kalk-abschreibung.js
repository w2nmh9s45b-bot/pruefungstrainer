/*
 * IRW-Schema: Kalkulatorische Abschreibung – AfA-Simulator (AW / WZW / WBW)
 * Fach: Internes Rechnungswesen (FS 2)
 * Zwei Tool-Knoten: (1) Regler-Simulator auf dem RTW-Beispiel (200.000 €, 8 Jahre,
 * 2,5 % Preissteigerung) mit Deckungslücken-Vergleich der drei Methoden,
 * (2) WZW-Rechner mit Preisindizes für den EDV-Arbeitsauftrag (15.000 €, Indizes).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 04-08 (Lutz): kalk. Abschreibung – Finanzierungsfunktion, lineare Methode,
 *    AW/WBW/WZW, Preisindex-Exkurs, Bewertungstabelle (Deckungslücken 43.681 €
 *    bzw. 19.817 € bzw. 0 €), bilanzielle vs. kalk. Abschreibung, EDV-Arbeitsauftrag
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kalk-abschreibung",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kalkulatorische Kosten",
  title: "Kalkulatorische Abschreibung (AfA-Simulator)",
  description: "AW, WZW oder WBW? Mit Reglern für Anschaffungswert, Nutzungsdauer und Preissteigerung die Deckungslücke der drei Methoden vergleichen – plus WZW-Rechner mit Preisindizes (EDV-Übung des Skripts).",
  start: "start",
  stations: [
    { id: "grundlagen", label: "Grundlagen" },
    { id: "simulator", label: "Simulator" },
    { id: "wzw", label: "WZW-Übung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Substanzerhaltung",
    neg: "Ergebnis: Deckungslücke",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundlagen",
      kind: "frage",
      norm: "Finanzierungsfunktion",
      title: "Warum eine EIGENE Abschreibung für die Kostenrechnung?",
      def: "Die <b>bilanzielle</b> Abschreibung (ext. Rewe) ist gesetzlich geregelt und hat steuerrechtliche Funktion: Nutzungsdauer nach AfA-Tabelle, Basis nur der Anschaffungswert.<br><br>Die <b>kalkulatorische</b> Abschreibung ist gesetzlich NICHT geregelt und hat <b>Finanzierungsfunktion</b>: Über die (Gebühren-)Kalkulation soll die Wiederbeschaffung angespart werden. Deshalb gilt:<br>• Methode: immer <b>linear</b> (konstante Beträge → stabile Gebühren)<br>• Nutzungsdauer: die <b>tatsächliche/wirtschaftliche</b> (Erfahrungswerte, Hersteller – nicht die AfA-Tabelle)<br>• Basis: AW, WZW oder WBW<br><br>Gebühren-Beispiel Erdbestattung: Personalkosten 170 € + Material 60 € + kalk. Abschreibung Minibagger 120 € (nicht auszahlungswirksam!) = Gebühr 350 €.",
      options: [
        { label: "Zum Simulator: Welche Basis deckt die Wiederbeschaffung?", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "RTW-Beispiel",
      title: "AW, WZW oder WBW – wie groß bleibt die Deckungslücke?",
      def: "Skript-Beispiel Rettungstransportwagen: AW <b>200.000 €</b>, Nutzungsdauer <b>8 Jahre</b>, Preissteigerung <b>2,5 % p. a.</b> Stelle die Regler und vergleiche, was am Ende der Nutzungsdauer angespart ist:",
      tool: '<div class="tool"><div class="tool-title">🚑 AfA-Simulator: drei Abschreibungsbasen</div>' +
        '<div class="tool-row"><label for="ab-aw">Anschaffungswert (€)</label><span class="tool-val" id="ab-awv">200.000</span></div>' +
        '<input type="range" id="ab-aw" min="50000" max="500000" step="10000" value="200000">' +
        '<div class="tool-row"><label for="ab-nd">Nutzungsdauer (Jahre)</label><span class="tool-val" id="ab-ndv">8</span></div>' +
        '<input type="range" id="ab-nd" min="4" max="15" step="1" value="8">' +
        '<div class="tool-row"><label for="ab-i">Jährliche Preissteigerung (%)</label><span class="tool-val" id="ab-iv">2,5 %</span></div>' +
        '<input type="range" id="ab-i" min="0" max="6" step="0.5" value="2.5">' +
        '<div class="tool-read" id="ab-out">…</div></div>',
      setup: function (root) {
        var saw = root.querySelector("#ab-aw"), snd = root.querySelector("#ab-nd"), si = root.querySelector("#ab-i");
        var vaw = root.querySelector("#ab-awv"), vnd = root.querySelector("#ab-ndv"), vi = root.querySelector("#ab-iv");
        var out = root.querySelector("#ab-out");
        function eur(n) { return Math.round(n).toLocaleString("de-DE") + " €"; }
        function upd() {
          var AW = parseFloat(saw.value), n = parseInt(snd.value, 10), i = parseFloat(si.value) / 100;
          vaw.textContent = AW.toLocaleString("de-DE");
          vnd.textContent = n;
          vi.textContent = (i * 100).toLocaleString("de-DE", { maximumFractionDigits: 1 }) + " %";
          var WBW = AW * Math.pow(1 + i, n);
          var afaAW = AW / n, afaWBW = WBW / n;
          var sumWZW = 0;
          for (var j = 1; j <= n; j++) sumWZW += (AW * Math.pow(1 + i, j)) / n;
          var txt = "WBW = AW × (1 + i)<sup>n</sup> = <b>" + eur(WBW) + "</b><br>" +
            "• Basis <b>AW</b>: AfA " + eur(afaAW) + "/Jahr → angespart " + eur(AW) + " → Lücke <b>" + eur(WBW - AW) + "</b><br>" +
            "• Basis <b>WZW</b> (jährlich aufgezinst): AfA steigend → angespart " + eur(sumWZW) + " → Lücke <b>" + eur(WBW - sumWZW) + "</b><br>" +
            "• Basis <b>WBW</b>: AfA " + eur(afaWBW) + "/Jahr → angespart " + eur(WBW) + " → <b>Lücke 0</b><br>";
          if (i === 0) {
            txt += '<span class="tool-flag ok">✓ Ohne Preissteigerung</span> Alle drei Basen fallen zusammen – nominelle Kapitalerhaltung genügt.';
          } else {
            txt += '<span class="tool-flag ok">Substanzerhaltung nur beim WBW</span> Beim AW bleibt die größte Lücke (nominelle Kapitalerhaltung), der WZW verkleinert sie, nur der WBW finanziert die Neuanschaffung komplett aus Abschreibungen.';
          }
          out.innerHTML = txt;
        }
        [saw, snd, si].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      hint: "Skript-Werte (200.000 € / 8 J. / 2,5 %): WBW 243.681 €, AfA vom WBW 30.460 €; WZW-Summe 223.864 € → Lücke 19.817 €; AW-Summe 200.000 € → Lücke 43.681 €.",
      options: [
        { label: "Zur WZW-Übung mit echten Preisindizes", next: "q_wzw", tone: "pos" },
        { label: "Ergebnis: Wann nehme ich welche Basis?", next: "e_vergleich", tone: "pos" }
      ]
    },

    q_wzw: {
      station: "wzw",
      kind: "frage",
      norm: "EDV-Arbeitsauftrag",
      title: "WZW-Abschreibung mit Preisindizes (Arbeitsauftrag)",
      def: "Rechenzentrum: EDV-Anlage, Kauf Ende 2016 (<b>AW 15.000 €</b>, Preisindex 2016 = <b>108,0</b>), Nutzung ab Anfang 2017, ND <b>10 Jahre</b>. Formel: <b>WZW = AW × (PI<sub>Bewertungsjahr</sub> ÷ PI<sub>Anschaffungsjahr</sub>)</b>, AfA = WZW ÷ ND. Gib die Indizes ein:",
      tool: '<div class="tool"><div class="tool-title">💻 WZW-Rechner (Abschreibung 2017–2020)</div>' +
        '<div class="tool-row"><label for="wz-aw">Anschaffungswert (€)</label><input type="number" id="wz-aw" value="15000" step="500" min="1"></div>' +
        '<div class="tool-row"><label for="wz-nd">Nutzungsdauer (Jahre)</label><input type="number" id="wz-nd" value="10" step="1" min="1"></div>' +
        '<div class="tool-row"><label for="wz-p0">Preisindex Anschaffungsjahr 2016</label><input type="number" id="wz-p0" value="108.0" step="0.1" min="1"></div>' +
        '<div class="tool-row"><label for="wz-p1">Preisindex 2017</label><input type="number" id="wz-p1" value="112.4" step="0.1" min="1"></div>' +
        '<div class="tool-row"><label for="wz-p2">Preisindex 2018</label><input type="number" id="wz-p2" value="117.4" step="0.1" min="1"></div>' +
        '<div class="tool-row"><label for="wz-p3">Preisindex 2019</label><input type="number" id="wz-p3" value="122.3" step="0.1" min="1"></div>' +
        '<div class="tool-row"><label for="wz-p4">Preisindex 2020</label><input type="number" id="wz-p4" value="128.0" step="0.1" min="1"></div>' +
        '<div class="tool-read" id="wz-out">…</div></div>',
      setup: function (root) {
        var ids = ["wz-aw", "wz-nd", "wz-p0", "wz-p1", "wz-p2", "wz-p3", "wz-p4"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var out = root.querySelector("#wz-out");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function upd() {
          var AW = parseFloat(el["wz-aw"].value) || 0, nd = parseFloat(el["wz-nd"].value) || 1, p0 = parseFloat(el["wz-p0"].value) || 1;
          var jahre = ["2017", "2018", "2019", "2020"];
          var pis = [parseFloat(el["wz-p1"].value) || 0, parseFloat(el["wz-p2"].value) || 0, parseFloat(el["wz-p3"].value) || 0, parseFloat(el["wz-p4"].value) || 0];
          var txt = "", summe = 0;
          for (var j = 0; j < 4; j++) {
            var wzw = AW * (pis[j] / p0);
            var afa = wzw / nd;
            summe += afa;
            txt += jahre[j] + ": WZW = " + f2(wzw) + " € → AfA = <b>" + f2(afa) + " €</b><br>";
          }
          txt += "Summe der aufgelaufenen Abschreibungen 2017–2020: <b>" + f2(summe) + " €</b><br>" +
            '<span class="tool-flag ok">Merke</span> Der WZW steigt mit dem Index, also steigt auch der jährliche AfA-Betrag – anders als beim konstanten AW-Betrag.';
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        upd();
      },
      hint: "Mit den Skript-Indizes: 2017 → 15.611,11/10 = 1.561,11 €; 2018 → 1.630,56 €; 2019 → 1.698,61 €; 2020 → 1.777,78 €; Summe 6.668,06 €.",
      options: [
        { label: "Zum Methodenvergleich (Ergebnis)", next: "e_vergleich", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vergleich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "AW / WZW / WBW",
      title: "Die richtige Abschreibungsbasis für die Substanzerhaltung",
      text: "Bewertung des Skripts:\n\n• ANSCHAFFUNGSWERT: nominelle Kapitalerhaltung – es fließt nur der alte AW zurück; bei Preissteigerungen bleibt die GRÖSSTE Deckungslücke (RTW: 43.681 €), die per Kredit oder aus allgemeinen Deckungsmitteln geschlossen werden müsste.\n\n• WIEDERBESCHAFFUNGSZEITWERT (WZW = AW × PI-Bewertungsjahr ÷ PI-Anschaffungsjahr): sinnvoll, wenn der WBW schlecht schätzbar ist; die Beträge steigen mit dem Index, es bleibt aber eine KLEINERE Lücke (RTW: 19.817 €), weil die frühen Jahre zu niedrig abschreiben.\n\n• WIEDERBESCHAFFUNGSWERT (WBW = AW × (1+i)ⁿ): erfüllt den Grundsatz der SUBSTANZERHALTUNG – die Neuanschaffung ist komplett aus den Abschreibungen finanzierbar (Lücke 0). Voraussetzung: Die jährliche Preissteigerung ist realistisch absehbar; sonst WZW.\n\nImmer gilt: linear abschreiben (stabile Gebühren!), tatsächliche Nutzungsdauer (Erfahrung/Hersteller), und die kalk. Abschreibung ist nicht auszahlungswirksam – sie „verdient“ das Geld für die Ersatzbeschaffung über die Gebühren."
    }
  }
});
