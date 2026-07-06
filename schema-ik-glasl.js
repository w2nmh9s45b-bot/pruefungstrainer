/*
 * IK-Schema: Konflikteskalation nach Glasl – 9-Stufen-Simulator
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 * Tool-Knoten: Eskalations-Slider über die neun Stufen; live werden Hauptphase,
 * Stufenmerkmale, Lösungsweg und die Hauptschwellen angezeigt (Abwärts-Treppe als SVG).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Hintergrundinformationen Konflikteskalationsmodell von Glasl (9 Stufen,
 *    3 Hauptphasen win-win/win-lose/lose-lose, 2 Hauptschwellen, Regression,
 *    Chronifizierung, Lösungswege je Phase; Tabelle nach Glasl 2013)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-glasl",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Konflikte & Mobbing",
  title: "Glasl: Eskalations-Simulator (9 Stufen)",
  description: "Die Abwärts-Treppe der Konflikteskalation zum Schieben: Stufe einstellen, Hauptphase (win-win, win-lose, lose-lose), Merkmale und den noch möglichen Lösungsweg ablesen – inklusive der beiden Hauptschwellen.",
  start: "start",
  stations: [
    { id: "modell", label: "Modell" },
    { id: "simulator", label: "Simulator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stufe bestimmt",
    neg: "Ergebnis: Eskalationsgefahr",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modell",
      kind: "frage",
      norm: "Abwärts-Treppe",
      title: "Warum führt die Treppe bei Glasl nach UNTEN?",
      def: "Glasls Modell ist ein <b>absteigendes</b> Stufenmodell: Jeder Eskalationsschritt führt in die Tiefe und bedeutet <b>Regression</b> – den Rückfall auf bereits überwundene kindliche Verhaltensmuster; die Selbststeuerung geht verloren.<br><br>Für die Zuordnung einer Stufe gilt: Mehrere Merkmale ergeben ein <b>Gesamtmuster</b>, und es muss eine <b>Chronifizierung</b> vorliegen (die Muster wiederholen sich dauerhaft).<br><br>Neun Stufen in drei Hauptphasen, getrennt durch zwei <b>Hauptschwellen</b>.",
      options: [
        { label: "Zum Simulator: Stufe einstellen", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "9 Stufen",
      title: "Wie weit ist der Konflikt eskaliert?",
      def: "Schiebe den Regler auf die Stufe, deren Gesamtmuster zum Fall passt – und beobachte, welcher Lösungsweg noch offen ist:",
      tool: '<div class="tool"><div class="tool-title">🌋 Eskalations-Simulator nach Glasl</div>' +
        '<div class="tool-row"><label for="gl-s">Eskalationsstufe</label><span class="tool-val" id="gl-sv">1</span></div>' +
        '<input type="range" id="gl-s" min="1" max="9" step="1" value="1">' +
        '<svg viewBox="0 0 320 130" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<line x1="106" y1="8" x2="106" y2="122" stroke="var(--warn)" stroke-width="1.5" stroke-dasharray="4 3"></line>' +
        '<line x1="212" y1="8" x2="212" y2="122" stroke="var(--neg)" stroke-width="1.5" stroke-dasharray="4 3"></line>' +
        '<text x="53" y="14" font-size="8" text-anchor="middle" fill="var(--pos)">win-win</text>' +
        '<text x="159" y="14" font-size="8" text-anchor="middle" fill="var(--warn)">win-lose</text>' +
        '<text x="265" y="14" font-size="8" text-anchor="middle" fill="var(--neg)">lose-lose</text>' +
        '<g id="gl-treppe"></g>' +
        '</svg>' +
        '<div class="tool-read" id="gl-out">…</div></div>',
      setup: function (root) {
        var stufen = [
          { n: 1, name: "Verhärtung", phase: 1, txt: "Spannungen in der alltäglichen Interaktion; Standpunkte verhärten sich und prallen aufeinander." },
          { n: 2, name: "Debatte und Polemik", phase: 1, txt: "Polarisation und Schwarz-Weiß-Denken, Festhalten am eigenen Standpunkt, verbale Auseinandersetzungen." },
          { n: 3, name: "Taten statt Worte", phase: 1, txt: "Reden hilft nicht mehr: Interessen werden ohne Abstimmung durchgesetzt, vollendete Tatsachen – die Empathie geht verloren." },
          { n: 4, name: "Images und Koalitionen", phase: 2, txt: "Imagekampagnen und Gerüchte; man manövriert einander in negative Rollen und zieht Unbeteiligte hinein." },
          { n: 5, name: "Gesichtsverlust", phase: 2, txt: "Öffentliche, direkte Gesichtsangriffe verletzen die öffentlich wahrgenommene Integrität des anderen." },
          { n: 6, name: "Drohstrategien", phase: 2, txt: "Drohungen und Gegendrohungen forcieren die Eskalation stark." },
          { n: 7, name: "Begrenzte Vernichtungsschläge", phase: 3, txt: "Gewaltandrohung; eigene Verluste werden hingenommen, wenn der Schaden des Gegners größer ist." },
          { n: 8, name: "Zersplitterung des Feindes", phase: 3, txt: "Gegenseitige Vernichtung der Existenzgrundlagen – eigene Verluste werden noch minimiert." },
          { n: 9, name: "Gemeinsam in den Abgrund", phase: 3, txt: "Totale Vernichtung des Gegners – egal, ob man selbst dabei zugrunde geht." }
        ];
        var phasen = [
          { label: "Hauptphase I: win-win", weg: "Lösung durch SELBST- oder NACHBARSCHAFTSHILFE – die Beteiligten können sich aus eigener Initiative auf eine Lösung verständigen, die beiden Interessen gerecht wird.", cls: "ok" },
          { label: "Hauptphase II: win-lose", weg: "Einvernehmliche Lösung kaum noch möglich – eine Partei setzt sich auf Kosten der anderen durch, ES SEI DENN, eine neutrale Vermittlung (MEDIATION) arbeitet die Verletzungen auf.", cls: "bad" },
          { label: "Hauptphase III: lose-lose", weg: "Beide Parteien „lassen Federn“. Vermittlung eignet sich nicht mehr – nur noch ein MACHTEINGRIFF VON AUSSEN klärt (Gericht, Führungskraft mit arbeitsorganisatorischer Trennung).", cls: "bad" }
        ];
        var sl = root.querySelector("#gl-s"), sv = root.querySelector("#gl-sv"), out = root.querySelector("#gl-out"), g = root.querySelector("#gl-treppe");
        function zeichne(akt) {
          var html = "";
          for (var i = 0; i < 9; i++) {
            var x = 4 + i * 35, y = 20 + i * 10;
            var farbe = i < 3 ? "var(--pos)" : (i < 6 ? "var(--warn)" : "var(--neg)");
            html += '<rect x="' + x + '" y="' + y + '" width="33" height="' + (122 - y) + '" fill="' + farbe + '" opacity="' + (i + 1 === akt ? "0.95" : "0.28") + '"></rect>' +
              '<text x="' + (x + 16.5) + '" y="' + (y + 12) + '" font-size="9" font-weight="700" text-anchor="middle" fill="#fff">' + (i + 1) + "</text>";
          }
          g.innerHTML = html;
        }
        function upd() {
          var n = parseInt(sl.value, 10);
          var st = stufen[n - 1], ph = phasen[st.phase - 1];
          sv.textContent = n;
          zeichne(n);
          var txt = "<b>Stufe " + n + ": " + st.name + "</b> · " + ph.label + "<br>" + st.txt + "<br>" +
            '<span class="tool-flag ' + ph.cls + '">Lösungsweg</span> ' + ph.weg;
          if (n === 3) txt += "<br><i>Achtung: Direkt vor der 1. Hauptschwelle – danach ist eine kooperative Lösung auf der Sachebene unwahrscheinlich.</i>";
          if (n === 6) txt += "<br><i>Achtung: Direkt vor der 2. Hauptschwelle – danach lassen sich die Beteiligten von keinen moralischen Skrupeln mehr leiten.</i>";
          out.innerHTML = txt;
        }
        sl.addEventListener("input", upd);
        upd();
      },
      hint: "Merkhilfe zu den Schwellen: nach Stufe 3 keine kooperative Sachlösung mehr (win-win → win-lose), nach Stufe 6 keine moralischen Skrupel mehr (→ lose-lose).",
      options: [
        { label: "Stufe bestimmt – was folgt daraus?", next: "e_intervention", tone: "pos" },
        { label: "Wie verändert sich das Verhalten über die Stufen?", next: "e_dynamik", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_intervention: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Stufengerechte Hilfe",
      title: "Die Stufe bestimmt den Lösungsweg",
      text: "Hauptphase I (Stufen 1–3, win-win): Die Beteiligten können den Konflikt noch SELBST lösen – durch eigene Initiative oder Nachbarschaftshilfe; hier setzt das Konfliktgespräch an (eigenes Schema).\n\nHauptphase II (Stufen 4–6, win-lose): Ohne Hilfe setzt sich eine Partei auf Kosten der anderen durch. Eine NEUTRALE VERMITTLUNG (Mediation) kann die Verletzungen aufarbeiten und eine akzeptierte Lösung entwickeln.\n\nHauptphase III (Stufen 7–9, lose-lose): Die Parteien wollen keine gemeinsame Lösung mehr – nur ein MACHTEINGRIFF VON AUSSEN klärt (Gerichtsentscheidung; Führungskraft trennt die Beteiligten arbeitsorganisatorisch).\n\nFür Führungskräfte heißt das: Eskalationsstufe diagnostizieren, BEVOR man interveniert – gut gemeinte Vermittlung wirkt in Phase III nicht mehr, und ein Machtwort in Phase I zerstört die Chance auf Selbstklärung."
    },

    e_dynamik: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Eskalationsdynamik",
      title: "Die Abwärts-Dynamik: vom Gewinnenwollen zur Selbstvernichtung",
      text: "Glasl beschreibt, wie sich zentrale Größen über die Stufen verschieben (nach Schreyögg):\n\n• EINSTELLUNG: erst kooperativ → gewinnen wollen → nichts mehr zu gewinnen → dem Gegner maximalen Schaden zufügen, auch um den Preis der Selbstvernichtung\n• BEZIEHUNG: Vorsicht → Dominanz demonstrieren (wird selbst zum Streitpunkt) → den Gegner abschütteln, Alleingang\n• STRATEGIEN: Argumente (zunehmend verhärtet) → vollendete Tatsachen → gezielte Schwächung → Drohspiralen, die die eigenen Handlungsräume beschneiden → Elimination\n• NORMEN: Normtreue → den Gegner zu Normverletzungen provozieren → alle Normen fallen\n• LÖSUNGSERWARTUNG: Lösung möglich → nur wenn der andere sich ändert → keine Lösung mit dem Gegner denkbar\n\nGenau deshalb gilt: FRÜH ansprechen (Stufen 1–2 sind Alltag und lösbar!) – je tiefer die Treppe, desto teurer die Lösung. Sonderform mit System: Mobbing → eigenes Schema."
    }
  }
});
