/*
 * Prüfungsschema: Besoldung für einen Teilmonat (§ 4 III LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 22-24, 28
 *    (Teilmonatsberechnung, Rundungsregelung, Zahlungsweise)
 *  - Gesetze: LBesG §§ 4 III, 8 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-teilmonat",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Anspruch und Zahlung",
  title: "Besoldung für einen Teilmonat (§ 4 III LBesG)",
  description: "Beginnt oder endet der Besoldungsanspruch im Laufe eines Kalendermonats, wird tagegenau gerechnet: Anspruchstage ÷ Kalendertage des Monats × Monatsbetrag – je Bezügebestandteil einzeln, mit kaufmännischer Rundung (§ 8 II LBesG).",
  start: "start",
  stations: [
    { id: "anlass", label: "Anlass" },
    { id: "rechnung", label: "Berechnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Berechnung steht",
    neg: "Ergebnis: keine Kürzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenschritt"
  },

  nodes: {

    start: {
      station: "anlass",
      kind: "frage",
      norm: "§ 8 I LBesG",
      title: "Besteht der Anspruch für den vollen Kalendermonat?",
      def: "Die Bezüge werden <b>monatlich im Voraus</b> gezahlt (§ 8 I 1 LBesG) – eine Konkretisierung des Alimentationsprinzips: Der Beamte soll spätestens zum Monatsbeginn über die Bezüge des Monats verfügen können.<br><br>Eine <b>Teilmonatsberechnung nach § 4 III LBesG</b> ist nötig, wenn der Anspruch nicht für den vollen Kalendermonat besteht, z. B.:<br>• Einstellung im Laufe des Monats (Ernennung wirksam am 15.04.),<br>• Beendigung im Laufe des Monats (Ruhestand zum 15.05.),<br>• Verlusttage nach § 15 LBesG (schuldhaftes Fernbleiben – entsprechende Anwendung).<br><br><i>Nebenbei (§ 8 I 2 LBesG): Für verspätet gezahlte Bezüge gibt es <b>keine Verzugszinsen</b> – umgekehrt schuldet auch der Beamte bei Überzahlungen keine Zinsen.</i>",
      options: [
        { label: "Nein – Anspruch nur für Teil des Monats", next: "q_tage", tone: "pos" },
        { label: "Ja – voller Kalendermonat", next: "e_voll", tone: "neg" }
      ]
    },

    q_tage: {
      station: "rechnung",
      kind: "frage",
      norm: "§ 4 III LBesG",
      title: "Anspruchstage und Kalendertage bestimmen",
      def: "„Besteht der Anspruch auf Besoldung nicht für einen vollen Kalendermonat, so wird nur der Teil der Bezüge gezahlt, der auf den <b>Anspruchszeitraum</b> entfällt“ (§ 4 III LBesG).<br><br><b>Formel:</b> Monatsbetrag × Anspruchstage ÷ Kalendertage des Monats<br><br>• <b>Zähler:</b> Zahl der Tage mit Besoldungsanspruch – am besten <b>am Kalender abzählen</b> (häufigste Fehlerquelle!). Bei Einstellung am 15.04.: 15.–30.04. = <b>16 Tage</b>.<br>• <b>Nenner:</b> die Kalendertage des betreffenden Monats (<b>28/29/30/31</b>) – nicht pauschal 30!<br><br><b>Wichtig:</b> JEDER Bezügebestandteil (Grundgehalt, Familienzuschlag, Allgemeine Zulage …) ist <b>einzeln</b> nach dieser Formel zu berechnen und einzeln zu runden.",
      options: [
        { label: "Weiter zur Rundung", next: "q_rundung", tone: "pos" }
      ]
    },

    q_rundung: {
      station: "rechnung",
      kind: "frage",
      norm: "§ 8 II LBesG",
      title: "Rundungsregelung anwenden",
      def: "Bei der Berechnung von Bezügen sind Bruchteile eines Cents <b>unter 0,5 abzurunden</b>, solche <b>von 0,5 und mehr aufzurunden</b> (§ 8 II 1 LBesG) – kaufmännische Rundung.<br><br>• Zwischenrechnungen werden auf zwei Dezimalstellen durchgeführt (§ 8 II 2 LBesG),<br>• <b>jeder Bezügebestandteil wird einzeln gerundet</b> (§ 8 II 3 LBesG),<br>• die Rundung erfolgt beim <b>Abschluss</b> der jeweiligen Berechnung, nicht nach jedem Rechenschritt.<br><br><b>Skript-Beispiel:</b> Einstellung am 15.04.2025, A 6 Stufe 2, Tabellenwert 3.008,47 € (§ 23 II 3 LBesG, Anlage 6):<br>3.008,47 € × 16/30 = 1.604,5173 € → gerundet <b>1.604,52 €</b>.",
      options: [
        { label: "Berechnung abschließen", next: "e_teil", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_teil: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 III, § 8 II LBesG",
      title: "Tagegenaue Teilmonatsbesoldung",
      text: "Der Beamte erhält für den Teilmonat: Monatsbetrag × Anspruchstage ÷ Kalendertage des Monats – je Bezügebestandteil einzeln gerechnet und einzeln kaufmännisch gerundet (§ 4 III, § 8 II LBesG).\n\nKlausur-Checkliste:\n1. Beginn/Ende des Anspruchs exakt bestimmen (§ 4 II bzw. IV LBesG – Wirksamkeit der Ernennung! Schema „Beginn und Ende des Besoldungsanspruchs\"),\n2. Anspruchstage am Kalender abzählen (Ein-/Austrittstag zählt mit),\n3. Kalendertage des konkreten Monats in den Nenner (28/29/30/31),\n4. jeden Bestandteil (Grundgehalt, Familienzuschlag, Allgemeine Zulage) einzeln rechnen,\n5. erst am Schluss jeder Einzelberechnung runden (§ 8 II LBesG).\n\nBeachte den Zusammenhang mit § 15 LBesG: Auch beim Verlust der Bezüge wegen schuldhaften Fernbleibens wird für jeden Verlusttag 1/28 bis 1/31 einbehalten (entsprechend § 4 III LBesG)."
    },

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 8 I LBesG",
      title: "Keine Teilmonatsberechnung",
      text: "Besteht der Anspruch für den vollen Kalendermonat, wird der volle Monatsbetrag gezahlt – monatlich im Voraus (§ 8 I 1 LBesG), unbar auf ein Konto des Empfängers (§ 8 III LBesG; Kontoführungsgebühren trägt der Empfänger).\n\nDenke daran: Auch wenn die Ernennung mitten im Monat nur ZUSAMMEN mit einer rückwirkenden Planstelleneinweisung zum Monatsersten erfolgt (§ 4 II 2 LBesG, § 49 II LHO), gibt es die vollen Monatsbezüge – die Teilmonatsberechnung entfällt dann (vgl. Übung 2 Nr. 5 im Skript)."
    }
  }
});
