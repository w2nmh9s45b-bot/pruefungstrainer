/*
 * OPW-Schema: Leitungsspanne & Gliederungstiefe – Hierarchie-Simulator
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 * Tool-Knoten: Regler für Mitarbeiterzahl und Leitungsspanne; live werden die
 * Instanzenebenen, die Zahl der Leitungsstellen und die Gliederungstiefe
 * berechnet – Prinzip des organisatorischen Minimums zum Anfassen.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.3/2.4 (Leitungsspanne/Gliederungsbreite, Faustwert
 *    6–10, Gliederungstiefe, organisatorisches Minimum, VG 3 Ebenen vs. KV 5)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-leitungsspanne",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Leitungsspanne (Simulator)",
  description: "Wie viele Chefs braucht die Verwaltung? Mitarbeiterzahl und Leitungsspanne einstellen – der Simulator baut die Hierarchie und zeigt Instanzen, Leitungsstellen und Gliederungstiefe live.",
  start: "start",
  stations: [
    { id: "begriffe", label: "Messgrößen" },
    { id: "simulator", label: "Simulator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Struktur steht",
    neg: "Ergebnis: Strukturproblem",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "Messgrößen",
      title: "Leitungsspanne und Gliederungstiefe",
      def: "<b>Leitungsspanne (Gliederungsbreite)</b>: die Zahl der Ausführungsstellen, die einer Leitungsstelle UNMITTELBAR nachgeordnet sind – der Bereich, den eine durchschnittlich qualifizierte Führungskraft bei weitgehender Entlastung von Ausführungsaufgaben noch überschauen und verantwortlich leiten kann. <b>Faustwert: 6 bis 10</b>; der individuelle Umfang hängt u. a. von Aufgabenart, Qualifikation der Mitarbeitenden, räumlicher Verteilung und Führungsstil ab – eine einheitliche Festlegung ist nicht möglich.<br><br><b>Gliederungstiefe</b>: die Anzahl der Instanzen. Zusammenhang: Wird die Leitungsspanne bei gleicher Mitarbeiterzahl verringert, wächst die Gliederungstiefe (zusätzliche Instanzen).",
      options: [
        { label: "Zum Simulator: Hierarchie bauen", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "Hierarchie-Rechner",
      title: "Baue die Hierarchie deiner Verwaltung!",
      def: "Stelle die Zahl der Ausführungsstellen und die durchschnittliche Leitungsspanne ein – der Simulator schichtet die Instanzen bis zur Verwaltungsspitze:",
      tool: '<div class="tool"><div class="tool-title">🏛 Leitungsspannen-Simulator</div>' +
        '<div class="tool-row"><label for="ls-n">Ausführungsstellen (Mitarbeitende)</label><span class="tool-val" id="ls-nv">60</span></div>' +
        '<input type="range" id="ls-n" min="10" max="400" step="10" value="60">' +
        '<div class="tool-row"><label for="ls-l">Leitungsspanne (je Führungskraft)</label><span class="tool-val" id="ls-lv">8</span></div>' +
        '<input type="range" id="ls-l" min="3" max="15" step="1" value="8">' +
        '<div class="tool-read" id="ls-out">…</div></div>',
      setup: function (root) {
        var sn = root.querySelector("#ls-n"), sl = root.querySelector("#ls-l");
        var nv = root.querySelector("#ls-nv"), lv = root.querySelector("#ls-lv"), out = root.querySelector("#ls-out");
        function upd() {
          var N = parseInt(sn.value, 10), L = parseInt(sl.value, 10);
          nv.textContent = N; lv.textContent = L;
          var ebenen = [N], units = N;
          while (units > 1) { units = Math.ceil(units / L); ebenen.push(units); }
          var tiefe = ebenen.length;
          var leitung = 0;
          for (var i = 1; i < ebenen.length; i++) leitung += ebenen[i];
          var txt = "Ebenen (von unten nach oben): <b>" + ebenen.join(" → ") + "</b><br>" +
            "Gliederungstiefe: <b>" + tiefe + " Ebenen</b> · Leitungsstellen gesamt: <b>" + leitung + "</b> (auf " + N + " Ausführungsstellen)<br>" +
            "Verhältnis: 1 Leitungsstelle je " + (leitung ? (N / leitung).toFixed(1) : "–") + " Ausführungsstellen<br>";
          if (L >= 6 && L <= 10) {
            txt += '<span class="tool-flag ok">✓ Faustwert eingehalten</span> Leitungsspanne im Korridor 6–10 – ';
          } else if (L < 6) {
            txt += '<span class="tool-flag bad">Spanne sehr klein</span> Unter 6: viele Instanzen, lange Dienstwege, hohe Leitungskosten – nur bei komplexen, heterogenen Aufgaben gerechtfertigt. ';
          } else {
            txt += '<span class="tool-flag bad">Spanne sehr groß</span> Über 10: Führungskraft kann kaum noch alle überschauen – nur bei gleichartigen Routineaufgaben, qualifizierten Mitarbeitenden und räumlicher Nähe vertretbar. ';
          }
          txt += tiefe <= 3 ? "Flache Struktur (wie eine Verbandsgemeindeverwaltung: BM – Fachbereich – Stelle)." : (tiefe >= 5 ? "Tiefe Struktur (wie eine Kreisverwaltung: Landrat – Dezernat – Abteilung – Referat – Stelle) – organisatorisches Minimum prüfen!" : "Mittlere Struktur (typisch: Verwaltung mittlerer Größe).");
          out.innerHTML = txt;
        }
        [sn, sl].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      hint: "Skript-Regel: „So viele Stellen wie nötig, dabei aber so wenig wie möglich.“ Probiere: 60 Mitarbeitende mit Spanne 4 vs. Spanne 10 – die Gliederungstiefe und die Zahl der Leitungsstellen ändern sich deutlich.",
      options: [
        { label: "Was sagt das organisatorische Minimum?", next: "e_minimum", tone: "pos" },
        { label: "Wovon hängt die richtige Spanne ab?", next: "e_faktoren", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_minimum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Organisatorisches Minimum",
      title: "Prinzip des organisatorischen Minimums",
      text: "Der Umfang der Aufbauorganisation richtet sich nach Art und Menge der Aufgaben – dabei gilt: Gliederungsbreite UND Gliederungstiefe möglichst gering halten. Die allgemeine Formel des Skripts: „So viele Stellen wie nötig, dabei aber so wenig wie möglich.“\n\nBesonders eine zu große GLIEDERUNGSTIEFE (zu viele Instanzen) verhindert effektives Arbeiten: Jede zusätzliche Ebene verlängert die Dienstwege, filtert Informationen und verteuert die Leitung.\n\nVergleichsmaßstäbe: Eine Verbandsgemeindeverwaltung kommt mit DREI Ebenen aus (Bürgermeister – Fachbereich – Stelle), eine Kreisverwaltung hat oft FÜNF (Landrat – Dezernat – Abteilung – Referat – Stelle) – die Aufgabenstellung rechtfertigt den Unterschied.\n\nPraxisbrücke Lahnstein: Leitungsspannen-Analysen gegen das Organisationsmodell für Städte 10.000–20.000 Einwohner gehören zu deinen Kernaufgaben – der Simulator zeigt die Mechanik dahinter."
    },

    e_faktoren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Einflussfaktoren",
      title: "Die richtige Spanne ist eine Einzelfallfrage",
      text: "Der Faustwert 6–10 ist ein Korridor, keine Norm. Der individuelle Umfang der Leitungsspanne hängt ab von:\n\n• AUFGABEN: gleichartige Routineaufgaben erlauben große Spannen, komplexe/heterogene verlangen kleine\n• MITARBEITENDEN: Qualifikation und Selbstständigkeit vergrößern die mögliche Spanne\n• FÜHRUNGSKRAFT: Entlastung von Ausführungsaufgaben ist Voraussetzung („bei weitgehender Entlastung von Ausführungsaufgaben“)\n• RAUM UND TECHNIK: räumliche Nähe und gute Kommunikationsmittel vergrößern die Spanne\n• FÜHRUNGSSTIL: kooperative Selbststeuerung trägt mehr Spanne als enge Kontrolle\n\nDeshalb: Bei Organisationsuntersuchungen nie mechanisch auf die Zahl schauen, sondern die Faktoren würdigen – und Mischstellen (Leitung + eigene Sachbearbeitung) gesondert betrachten."
    }
  }
});
