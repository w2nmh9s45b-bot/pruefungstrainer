/*
 * IRW-Schema: Fixe & variable Kosten – Auslastungs-Simulator (Krankenhaus)
 * Fach: Internes Rechnungswesen (FS 2)
 * Tool-Knoten: zwei Regler (Auslastung, Fixkostenanteil) auf dem Original-
 * Krankenhaus-Beispiel der OLE 02 (43.800 Betttage, 15.330.000 €, 85 % fix);
 * live: Kf, Kv, K, Stückkosten und die Fixkostendegression.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 02 (Lutz): Fixkosten, variable Kosten, Fixkostendegression,
 *    Gesamtkostenfunktion K = x·kv + Kf, Krankenhaus-Aufgaben 1–3 mit Lösungen
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-fix-variabel",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenartenrechnung",
  title: "Fixe & variable Kosten (Auslastungs-Simulator)",
  description: "Das Krankenhaus-Beispiel des Skripts zum Anfassen: Auslastung und Fixkostenanteil einstellen, Gesamt- und Stückkosten live beobachten – und die Fixkostendegression verstehen.",
  start: "start",
  stations: [
    { id: "begriffe", label: "Begriffe" },
    { id: "simulator", label: "Simulator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Degression verstanden",
    neg: "Ergebnis: Unterauslastung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "Beschäftigung",
      title: "Fix oder variabel – wovon hängt das ab?",
      def: "„<b>Beschäftigung</b>“ meint NICHT die Mitarbeiterzahl, sondern die Kapazitätsauslastung/Ausbringungsmenge (gefahrene km, Besucherzahl, Zahl der Bauanträge).<br><br>• <b>Fixkosten</b>: beschäftigungsUNabhängig – „Kosten der Betriebsbereitschaft“, fallen auch ohne Produktion an (Mieten, zeitabhängige kalk. Abschreibung, Steuern, Versicherungen, Verwaltungsgehälter, FK-Zinsen)<br>• <b>Variable Kosten</b>: hängen von der Leistungsmenge ab, fallen nur bei Produktion an (Füllsand, Streusalz, leistungsabhängige Abschreibung); unterstellt wird ein LINEARER (proportionaler) Verlauf<br><br>Gesamtkostenfunktion: <b>K = x · k<sub>v</sub> + K<sub>f</sub></b>",
      options: [
        { label: "Zum Simulator: Krankenhaus auslasten", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "OLE-02-Aufgabe",
      title: "Stelle die Auslastung des Krankenhauses ein!",
      def: "Skript-Sachverhalt: Kapazität <b>43.800 Betttage</b> (120 Betten × 365 Tage), Gesamtkosten bei Vollauslastung <b>15.330.000 €</b>, Fixkostenanteil <b>85 %</b>.<br><br>Beobachte beim Schieben: Die GESAMTEN Fixkosten bleiben stehen, die fixen STÜCKkosten je Betttag ändern sich – warum?",
      tool: '<div class="tool"><div class="tool-title">🏥 Auslastungs-Simulator Krankenhaus</div>' +
        '<div class="tool-row"><label for="fv-a">Kapazitätsauslastung</label><span class="tool-val" id="fv-av">100 %</span></div>' +
        '<input type="range" id="fv-a" min="50" max="100" step="5" value="100">' +
        '<div class="tool-row"><label for="fv-f">Fixkostenanteil (Skript: 85 %)</label><span class="tool-val" id="fv-fv">85 %</span></div>' +
        '<input type="range" id="fv-f" min="60" max="95" step="5" value="85">' +
        '<div class="tool-read" id="fv-out">…</div></div>',
      setup: function (root) {
        var sa = root.querySelector("#fv-a"), sf = root.querySelector("#fv-f");
        var av = root.querySelector("#fv-av"), fv = root.querySelector("#fv-fv"), out = root.querySelector("#fv-out");
        var KAP = 43800, KGES = 15330000;
        function eur(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d === undefined ? 0 : d, maximumFractionDigits: d === undefined ? 0 : d }) + " €"; }
        function upd() {
          var a = parseInt(sa.value, 10) / 100, f = parseInt(sf.value, 10) / 100;
          av.textContent = Math.round(a * 100) + " %";
          fv.textContent = Math.round(f * 100) + " %";
          var Kf = KGES * f, Kv100 = KGES * (1 - f);
          var Kv = Kv100 * a, K = Kf + Kv;
          var tage = KAP * a;
          var kv = Kv100 / KAP, kf = Kf / tage, k = kv + kf;
          var txt = "Fixkosten K<sub>f</sub> = <b>" + eur(Kf) + "</b> (konstant!) · variable Kosten K<sub>v</sub> = <b>" + eur(Kv) + "</b><br>" +
            "Gesamtkosten K = <b>" + eur(K) + "</b> bei <b>" + Math.round(tage).toLocaleString("de-DE") + "</b> Betttagen<br>" +
            "Stückkosten je Betttag: k<sub>v</sub> = " + eur(kv, 2) + " (konstant) + k<sub>f</sub> = <b>" + eur(kf, 2) + "</b> → k = <b>" + eur(k, 2) + "</b><br>";
          if (a >= 1) {
            txt += '<span class="tool-flag ok">✓ VOLLAUSLASTUNG</span> Die fixen Stückkosten sind am geringsten (bei 85 % fix: 297,50 € + 52,50 € = 350,00 € je Betttag) – das eingesetzte Kapital verursacht die geringsten Kosten je Einheit.';
          } else {
            txt += '<span class="tool-flag bad">Fixkostendegression umgekehrt</span> Sinkende Auslastung → dieselben Fixkosten verteilen sich auf weniger Betttage, die Stückkosten steigen (Skript: 90 % → 383,06 € · 80 % → 424,38 € · 70 % → 477,50 € bei 85 % Fixanteil).';
          }
          out.innerHTML = txt;
        }
        sa.addEventListener("input", upd);
        sf.addEventListener("input", upd);
        upd();
      },
      hint: "Skript-Lösung bei 85 % fix: Kf = 13.030.500 €, Kv(100 %) = 2.299.500 €, kv = 52,50 €/Betttag; Gesamtkosten 90 % = 15.100.050 €, 80 % = 14.870.100 €, 70 % = 14.640.150 €.",
      options: [
        { label: "Warum sinken die Stückkosten bei mehr Auslastung?", next: "e_degression", tone: "pos" },
        { label: "Was heißt das für eine unterausgelastete Einrichtung?", next: "e_unterauslastung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_degression: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Fixkostendegression",
      title: "Fixkostendegression: volle Kapazität, kleinste Stückkosten",
      text: "Gesamtfixkosten Kf fallen in gleicher Höhe an, egal ob 10, 100 oder gar keine Einheiten produziert werden. Die STÜCKfixkosten kf = Kf : x nehmen dagegen mit steigender Ausbringungsmenge ab, weil sich die konstante Summe auf mehr Einheiten verteilt (10.000 € : 2.000 Stück = 5 €; : 5.000 Stück = 2 €).\n\nDie variablen Stückkosten kv bleiben konstant (linearer Verlauf unterstellt: jede weitere Einheit kostet z. B. 2 € mehr), die variablen Gesamtkosten Kv steigen proportional.\n\nLehre des Skripts: Für Betriebe und Verwaltungen ist es am wirtschaftlichsten, die Kapazitäten VOLL auszunutzen – dann sind die Stückfixkosten am geringsten und das eingesetzte Kapital verursacht die geringsten Kosten. Gesamtkostenfunktion: K = x · kv + Kf."
    },

    e_unterauslastung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Leerkosten",
      title: "Unterauslastung: Die Fixkosten bleiben – die Stückkosten explodieren",
      text: "Sinkt die Belegung des Krankenhauses von 100 % auf 70 %, sparen wir nur die variablen Kosten der wegfallenden Betttage (52,50 € je Tag) – die 13.030.500 € Fixkosten laufen als Kosten der Betriebsbereitschaft ungerührt weiter.\n\nFolge: Die Kosten je belegtem Betttag steigen von 350,00 € (100 %) über 383,06 € (90 %) und 424,38 € (80 %) auf 477,50 € (70 %).\n\nGenau deshalb braucht die Teilkostenrechnung die Trennung fix/variabel: Bei Programmentscheidungen (Sauna schließen?) zählen nur die abbaubaren variablen Kosten – und für Gebühren gilt: Wer Kapazitäten vorhält, muss sie auslasten, sonst zahlen die verbleibenden Nutzer (oder der Haushalt) die Leerkosten mit."
    }
  }
});
