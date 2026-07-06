/*
 * VWL-Schema: Transformationskurve (Produktionsmöglichkeitenkurve) – interaktiv
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 * Tool-Knoten: zwei Schieberegler bewegen einen Punkt im Diagramm; die App sagt live,
 * ob er unterhalb / auf / oberhalb der Kurve liegt (Stützwerte aus der Skript-Tabelle).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 2.4 (Produktionsmöglichkeiten,
 *    Beispieltabelle A–G, Rationierung/Rationalisierung)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-transformationskurve",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Grundlagen des Wirtschaftens",
  title: "Transformationskurve (interaktiv)",
  description: "Mit zwei Reglern einen Produktionspunkt setzen und live sehen: unterhalb der Kurve (Unterauslastung), auf der Kurve (effizient, Opportunitätskosten) oder oberhalb (nicht realisierbar)? Zahlen aus der Skript-Tabelle (Punkte A–G).",
  start: "start",
  stations: [
    { id: "experiment", label: "Experiment" },
    { id: "deutung", label: "Deutung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: effizient",
    neg: "Diagnose: Unterauslastung",
    frei: "Diagnose: Einordnung",
    warn: "Diagnose: nicht realisierbar"
  },

  nodes: {

    start: {
      station: "experiment",
      kind: "frage",
      norm: "Produktionsmöglichkeitenkurve",
      title: "Setze einen Produktionspunkt – wo liegt er?",
      def: "Die <b>Transformationskurve</b> gibt alle Güterkombinationen (Mengen) an, die eine Volkswirtschaft mit <b>gegebenem Bestand an Produktionsfaktoren und gegebener Technik maximal</b> produzieren kann. Die Mehrproduktion eines Gutes geht immer zu Lasten des anderen Gutes (Verzicht).<br><br>Modellannahmen: nur 2 Güter, rein mengenmäßige Betrachtung – Darstellung der begrenzten Produktionskapazität.",
      tool: '<div class="tool"><div class="tool-title">🎛 Experiment: Punkt im Diagramm bewegen</div>' +
        '<div class="tool-row"><label for="tk-x">Konsumgüter (ME)</label><span class="tool-val" id="tk-xv">1.200</span></div>' +
        '<input type="range" id="tk-x" min="0" max="2200" step="10" value="1200">' +
        '<div class="tool-row"><label for="tk-y">Investitionsgüter (ME)</label><span class="tool-val" id="tk-yv">400</span></div>' +
        '<input type="range" id="tk-y" min="0" max="900" step="10" value="400">' +
        '<svg viewBox="0 0 320 212" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<line x1="30" y1="182" x2="312" y2="182" stroke="currentColor" opacity=".35"></line>' +
        '<line x1="30" y1="8" x2="30" y2="182" stroke="currentColor" opacity=".35"></line>' +
        '<text x="306" y="196" font-size="9" text-anchor="end" fill="currentColor" opacity=".65">Konsumgüter →</text>' +
        '<text x="36" y="16" font-size="9" fill="currentColor" opacity=".65">↑ Investitionsgüter</text>' +
        '<polyline points="30,12 132,33.3 181,54.5 212,75.8 243,97 269,139.5 285,182" fill="none" stroke="var(--accent)" stroke-width="2.5"></polyline>' +
        '<circle id="tk-dot" cx="183" cy="97" r="6" fill="var(--warn)" stroke="#fff" stroke-width="1.5"></circle>' +
        '</svg>' +
        '<div class="tool-read" id="tk-out">…</div></div>',
      setup: function (root) {
        var PTS = [[0, 800], [800, 700], [1200, 600], [1450, 500], [1690, 400], [1900, 200], [2000, 0]];
        function f(x) {
          if (x >= 2000) return 0;
          for (var i = 1; i < PTS.length; i++) {
            if (x <= PTS[i][0]) {
              var a = PTS[i - 1], b = PTS[i];
              return a[1] + (b[1] - a[1]) * (x - a[0]) / (b[0] - a[0]);
            }
          }
          return 0;
        }
        function slope(x) {
          for (var i = 1; i < PTS.length; i++) {
            if (x <= PTS[i][0]) {
              var a = PTS[i - 1], b = PTS[i];
              return Math.abs((b[1] - a[1]) / (b[0] - a[0]));
            }
          }
          return Math.abs((PTS[PTS.length - 1][1] - PTS[PTS.length - 2][1]) / (PTS[PTS.length - 1][0] - PTS[PTS.length - 2][0]));
        }
        var sx = root.querySelector("#tk-x"), sy = root.querySelector("#tk-y");
        var dot = root.querySelector("#tk-dot"), out = root.querySelector("#tk-out");
        var xv = root.querySelector("#tk-xv"), yv = root.querySelector("#tk-yv");
        function fmt(n) { return Math.round(n).toLocaleString("de-DE"); }
        function upd() {
          var x = +sx.value, y = +sy.value, fy = f(x);
          xv.textContent = fmt(x);
          yv.textContent = fmt(y);
          dot.setAttribute("cx", (30 + Math.min(x, 2200) / 2200 * 282).toFixed(1));
          dot.setAttribute("cy", (182 - Math.min(y, 900) / 900 * 174).toFixed(1));
          var d = y - fy, status;
          if (x > 2000 || d > 25) {
            dot.style.fill = "var(--neg)";
            status = '<span class="tool-flag bad">OBERHALB der Kurve</span> Diese Kombination ist mit den vorhandenen Produktionsfaktoren und der gegebenen Technik <b>nicht realisierbar</b>.';
          } else if (Math.abs(d) <= 25) {
            dot.style.fill = "var(--pos)";
            status = '<span class="tool-flag ok">AUF der Kurve</span> Produktionsmöglichkeiten <b>voll ausgeschöpft</b> (effizient). Opportunitätskosten in diesem Abschnitt: <b>' + slope(x).toFixed(2).replace(".", ",") + '</b> ME Investitionsgüter je zusätzlicher ME Konsumgüter.';
          } else {
            dot.style.fill = "var(--warn)";
            status = '<span class="tool-flag mid">UNTERHALB der Kurve</span> Produktionsfaktoren sind <b>nicht ausgelastet</b> (z. B. Arbeitslosigkeit, stillstehende Maschinen) – Mehrproduktion BEIDER Güter wäre möglich.';
          }
          out.innerHTML = "Punkt (" + fmt(x) + " | " + fmt(y) + ") · maximal möglich bei dieser Konsumgütermenge: <b>" + fmt(fy) + "</b> ME Investitionsgüter.<br>" + status;
        }
        sx.addEventListener("input", upd);
        sy.addEventListener("input", upd);
        upd();
      },
      options: [
        { label: "Punkt liegt unterhalb – was heißt das?", next: "e_unter", tone: "warn" },
        { label: "Punkt liegt auf der Kurve – was heißt das?", next: "e_auf", tone: "pos" },
        { label: "Punkt liegt oberhalb – was heißt das?", next: "e_ober", tone: "neg" },
        { label: "Wie reagiert die Volkswirtschaft auf Knappheit?", detail: "Rationierung oder Rationalisierung", next: "q_reaktion", tone: "neutral" }
      ]
    },

    q_reaktion: {
      station: "deutung",
      kind: "frage",
      norm: "Knappheitsreaktion",
      title: "Rationierung oder Rationalisierung?",
      def: "Auf die Güterknappheit kann man grundsätzlich auf <b>zwei Wegen</b> reagieren:<br><br>• <b>Rationierung</b> = Bedarfsbegrenzung: Verzicht auf Konsum- und/oder Investitionsgüter.<br>• <b>Rationalisierung</b> = Produktivitätssteigerung: mehr aus den vorhandenen Faktoren herausholen – die Kurve verschiebt sich <b>nach außen</b>.",
      options: [
        { label: "Bedarf wird begrenzt → Rationierung", detail: "Zuteilung nach Algorithmus, Bezugsscheine, Wartelisten", next: "e_rationierung", tone: "neg" },
        { label: "Produktivität wird gesteigert → Rationalisierung", detail: "Spezialisierung, Investierung, Ökonomisierung", next: "e_rationalisierung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_unter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Unterauslastung",
      title: "Punkt unterhalb der Kurve: Faktoren nicht ausgelastet",
      text: "Die Volkswirtschaft produziert weniger, als sie könnte – Produktionsfaktoren liegen brach (Arbeitslosigkeit, ungenutzte Kapazitäten). Eine Mehrproduktion BEIDER Güter ist gleichzeitig möglich, ohne auf irgendetwas zu verzichten.\n\nTypische Situation: Rezession/Depression im Konjunkturzyklus (→ Schema 'Konjunkturphase diagnostizieren', FS 2).\n\nWirtschaftspolitische Antwort: Auslastung erhöhen (Beschäftigungspolitik, Stabilisierungspolitik) – erst AUF der Kurve beginnt das eigentliche Verteilungsproblem."
    },

    e_auf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Effizienz & Opportunitätskosten",
      title: "Punkt auf der Kurve: effiziente Produktion",
      text: "Alle Produktionsfaktoren sind voll ausgelastet. Jetzt gilt das Transformationsgesetz: Die Mehrproduktion eines Gutes ist NUR zu Lasten (auf Kosten) des anderen Gutes möglich – gemessen in Mengeneinheiten (Verzicht = Opportunitätskosten).\n\nBeachte den KONKAVEN Verlauf der Kurve: Je mehr Konsumgüter bereits hergestellt werden, desto schwieriger wird es, die verbliebenen Faktoren umzuwidmen – der Verzicht je zusätzlicher Einheit steigt (im Skript-Beispiel: von Punkt zu Punkt wächst der Investitionsgüter-Verzicht).\n\nWELCHER Punkt auf der Kurve gewählt wird (mehr Konsum heute oder mehr Investition = mehr Wachstum morgen), ist die Grundfrage 'Was soll produziert werden?'."
    },

    e_ober: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Wachstum nötig",
      title: "Punkt oberhalb der Kurve: heute nicht realisierbar",
      text: "Diese Kombination übersteigt die Produktionskapazität – mit gegebenem Faktorbestand und gegebener Technik unerreichbar.\n\nErreichbar wird sie nur, wenn sich die KURVE SELBST nach außen verschiebt:\n• mehr/bessere Produktionsfaktoren (Bevölkerungswachstum, Qualifizierung, Kapitalbildung durch Investitionen),\n• technischer Fortschritt (Zunahme des technischen Wissens erhöht die Produktivität aller Faktoren).\n\nDas ist nichts anderes als Wirtschaftswachstum – gemessen am realen BIP (→ Schemata 'Nominales vs. reales BIP' und 'Magisches Viereck', FS 2)."
    },

    e_rationierung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Rationierung",
      title: "Rationierung: Bedarfsbegrenzung",
      text: "Rationierung bedeutet Verzicht auf Konsumgüter, Investitionsgüter oder eine Kombination von beiden – typisch für die Planwirtschaft sozialistischer Staaten.\n\nErscheinungsformen laut Skript: Zuteilung der beschränkt verfügbaren Güter nach einem definierten Zuteilungsalgorithmus (Bezugsscheinsystem, z. B. Lebensmittelkarten oder Raucherkarten), Warteschlangen, lange Lieferzeiten/Wartelisten oder Inflation.\n\nDas Güterangebot reicht nicht aus, um die Nachfrage zu befriedigen – die Ursachen der Knappheit werden nicht beseitigt."
    },

    e_rationalisierung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Rationalisierung",
      title: "Rationalisierung: Produktivität erhöhen",
      text: "Rationalisierung heißt Erhöhung der Produktivität – auf drei Wegen:\n\na) SPEZIALISIERUNG (Arbeitsteilung): gesellschaftlich, betrieblich, international,\nb) INVESTIERUNG: Einsatz von Realkapital (→ Produktionsfaktor Kapital),\nc) ÖKONOMISIERUNG: Handeln nach dem ökonomischen Prinzip (→ Schema 'Ökonomisches Prinzip bestimmen').\n\nErgebnis: Die Transformationskurve wandert nach außen – die Volkswirtschaft kann von beiden Gütern mehr produzieren."
    }
  }
});
