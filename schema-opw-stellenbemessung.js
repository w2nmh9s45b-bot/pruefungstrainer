/*
 * OPW-Schema: Stellenbemessung – Personalbedarfs-Rechner
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 * Tool-Knoten: Fallzahlen × mittlere Bearbeitungszeiten für bis zu drei Aufgaben,
 * Statusgruppe (JAM Beamte 97.860 / Beschäftigte 95.400 Minuten) und
 * Verteilzeiten (pauschal 9 % der JAM) → benötigte Vollzeitkräfte (VZÄ/NAK).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - OPW 12_PLE (Aufgabe/Ziele der Bemessung, Erhebungsverfahren, JAM-Werte,
 *    Verteilzeiten 9 %, "vor der Bemessung Prozessanalyse!")
 *  - KGSt-Bericht 11/2022 (Normalarbeitszeit 1.590/1.631 Stunden)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-stellenbemessung",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Stellenwirtschaft",
  title: "Stellenbemessung (Personalbedarfs-Rechner)",
  description: "Wie viele Stellen braucht das Sachgebiet? Fallzahlen und mittlere Bearbeitungszeiten eingeben, Verteilzeiten abziehen – der Rechner liefert die Vollzeitäquivalente nach KGSt-Werten.",
  start: "start",
  stations: [
    { id: "grundlagen", label: "Grundlagen" },
    { id: "rechner", label: "Rechner" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Bedarf ermittelt",
    neg: "Ergebnis: Vorarbeit fehlt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundlagen",
      kind: "frage",
      norm: "Personalbedarfsermittlung",
      title: "Was leistet die methodische Stellenbemessung?",
      def: "Die <b>Stellenbemessung</b> (Personalbedarfsermittlung) dient der Feststellung des <b>Arbeitsaufwandes</b>, der Identifikation der angemessenen <b>Arbeitsmenge je Mitarbeiter</b> und der Berechnung der <b>benötigten Stellen</b> je Organisationseinheit. Dafür werden Tätigkeiten erfasst und <b>Fallzahlen</b> sowie <b>mittlere Bearbeitungszeiten (mBz)</b> geschätzt oder gemessen.<br><br><b>Erhebungsverfahren:</b> Selbstaufschreibung, Multimomentaufnahme, Laufzettelverfahren.<br><br><b>Ziele:</b> Gewährleistung der Aufgabenerledigung UND Wirtschaftlichkeit; Grundlage der Personalplanung; optimaler Personaleinsatz.<br><br>⚠️ <b>Beachte (Skript):</b> VOR der Bemessung immer Prozessanalyse und ggf. -optimierung – sonst wird für schlechte Prozesse zu viel Personal bemessen (redundante Tätigkeiten)!",
      options: [
        { label: "Zum Rechner: Bedarf ermitteln", next: "q_rechner", tone: "pos" },
        { label: "Warum zuerst die Prozesse?", next: "e_prozess", tone: "warn" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "KGSt-Werte",
      title: "Rechne den Personalbedarf deines Aufgabengebiets!",
      def: "Trage bis zu drei Aufgaben mit Jahres-Fallzahl und mittlerer Bearbeitungszeit ein. Jahresarbeitsminuten je Normalarbeitskraft (KGSt): <b>Beamte 97.860</b>, <b>Beschäftigte 95.400</b>; die <b>Verteilzeiten</b> (persönliche/sachliche Nebenzeiten) werden pauschal mit <b>9 % der JAM</b> angesetzt:",
      tool: '<div class="tool"><div class="tool-title">🧮 Personalbedarfs-Rechner (VZÄ)</div>' +
        '<div class="tool-row"><label for="sb-f1">Aufgabe 1: Fälle/Jahr × mBz (Min.)</label><input type="number" id="sb-f1" value="2400" step="100" min="0"> <input type="number" id="sb-z1" value="45" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="sb-f2">Aufgabe 2: Fälle/Jahr × mBz (Min.)</label><input type="number" id="sb-f2" value="900" step="50" min="0"> <input type="number" id="sb-z2" value="90" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="sb-f3">Aufgabe 3: Fälle/Jahr × mBz (Min.)</label><input type="number" id="sb-f3" value="0" step="50" min="0"> <input type="number" id="sb-z3" value="0" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="sb-st">Statusgruppe</label><select id="sb-st"><option value="95400">Beschäftigte (95.400 JAM)</option><option value="97860">Beamte (97.860 JAM)</option></select></div>' +
        '<div class="tool-row"><label for="sb-vz">Verteilzeiten (% der JAM)</label><input type="number" id="sb-vz" value="9" step="1" min="0" max="30"></div>' +
        '<div class="tool-read" id="sb-out">…</div></div>',
      setup: function (root) {
        var ids = ["sb-f1", "sb-z1", "sb-f2", "sb-z2", "sb-f3", "sb-z3", "sb-vz"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var st = root.querySelector("#sb-st"), out = root.querySelector("#sb-out");
        function f(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
        function upd() {
          var menge = (+el["sb-f1"].value || 0) * (+el["sb-z1"].value || 0) +
            (+el["sb-f2"].value || 0) * (+el["sb-z2"].value || 0) +
            (+el["sb-f3"].value || 0) * (+el["sb-z3"].value || 0);
          var jam = parseInt(st.value, 10);
          var vz = (+el["sb-vz"].value || 0) / 100;
          var netto = jam * (1 - vz);
          if (!netto) { out.innerHTML = "Bitte Werte eingeben."; return; }
          var vzae = menge / netto;
          var txt = "Jahresarbeitsmenge = Σ (Fallzahl × mBz) = <b>" + f(menge) + " Minuten</b><br>" +
            "Verfügbare Zeit je Vollzeitkraft = " + f(jam) + " JAM − " + f(jam * vz) + " Verteilzeiten (" + (vz * 100).toFixed(0) + " %) = <b>" + f(netto) + " Minuten</b><br>" +
            "Personalbedarf = " + f(menge) + " ÷ " + f(netto) + " = <b>" + f(vzae, 2) + " VZÄ</b><br>";
          var rund = Math.ceil(vzae * 2) / 2;
          txt += '<span class="tool-flag ok">Stellenplan-Vorschlag</span> ' + f(rund, 1) + " Stellen (auf halbe Stellen gerundet); Rest ggf. über Teilzeit, Aufgabenkritik oder Prozessoptimierung abfangen.";
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        st.addEventListener("change", upd);
        upd();
      },
      hint: "Beispielwerte: 2.400 Anträge à 45 Min. + 900 Widersprüche à 90 Min. = 189.000 Min. ÷ 86.814 (Beschäftigte netto) ≈ 2,18 VZÄ. NAK-Richtwerte und Kostenwerte liefert der KGSt-Bericht „Kosten eines Arbeitsplatzes“.",
      options: [
        { label: "Bedarf steht – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_prozess: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Prozess vor Personal",
      title: "Erst Prozessanalyse, dann Stellenbemessung",
      text: "Die Warnung des Skripts: Ohne vorherige Prozessanalyse und -optimierung besteht die Gefahr, UNNÖTIGERWEISE zu viel Personal einzusetzen, weil die Prozesse nicht optimal ausgestaltet sind – redundante Tätigkeiten erfordern sonst „unnötiges Mehrpersonal“.\n\nDie Logik: Die Bemessung multipliziert Fallzahlen mit MITTLEREN BEARBEITUNGSZEITEN. Sind die Abläufe schlecht (Doppelarbeit, Medienbrüche, überflüssige Prüfschritte), sind die mBz zu hoch – und die Rechnung schreibt den schlechten Zustand als „Bedarf“ fest.\n\nRichtige Reihenfolge: (1) Aufgabenkritik (muss die Aufgabe überhaupt sein – und so?), (2) Prozessaufnahme und -optimierung (BMI-Leitfäden), (3) DANN Zeiten erheben (Selbstaufschreibung, Multimomentaufnahme, Laufzettel) und bemessen.\n\nDas ist exakt die Reihenfolge deiner Aufgabengebiete in Lahnstein: Prozessmanagement vor Personalbedarfsermittlung."
    },

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "VZÄ ermittelt",
      title: "Vom Mengengerüst zur Stelle im Stellenplan",
      text: "Die Grundformel der analytischen Stellenbemessung: Personalbedarf (VZÄ) = Jahresarbeitsmenge (Σ Fallzahl × mittlere Bearbeitungszeit) ÷ verfügbare Jahresarbeitszeit je Normalarbeitskraft (JAM abzüglich Verteilzeiten).\n\nDie KGSt-Bausteine: JAM Beamte 97.860 Minuten (40 Std./W. ≙ 1.631 h), Beschäftigte 95.400 Minuten (39 Std./W. ≙ 1.590 h) – allgemeine Verwaltung; Verteilzeiten pauschal 9 % der JAM.\n\nQualität der Eingangsdaten entscheidet: Fallzahlen aus Fachverfahren/Statistik, mBz gemessen oder sauber geschätzt (Erhebungsverfahren!), Sonderfälle (Leitungsanteile von Mischstellen, Projektarbeit) getrennt ausweisen.\n\nDas Ergebnis wandert in den STELLENPLAN (Haushaltsplan!) und liefert die Basis für Wirtschaftlichkeitsbetrachtungen – zusammen mit den Kosten je Arbeitsplatz (nächstes Schema) wird aus VZÄ ein Eurobetrag."
    }
  }
});
