/*
 * Prüfungsschema: Besoldung bei Teilzeitbeschäftigung (§ 9 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 25-27, 155-158
 *    (zeitratierliche Kürzung, Ausnahmen, Zuschläge §§ 42-44)
 *  - Gesetze: LBesG §§ 9, 42, 43, 43a, 44; ArbZVO § 2 I (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-teilzeit",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Anspruch und Zahlung",
  title: "Besoldung bei Teilzeitbeschäftigung (§ 9 LBesG)",
  description: "Zeitratierliche Kürzung der Dienst- und Anwärterbezüge im Verhältnis der Arbeitszeit (§ 9 I LBesG) und die Ausnahmen: Altersteilzeit (§ 42), begrenzte Dienstfähigkeit (§ 44), FALTER-Modell (§ 43a) und die Sonderregeln im Familienzuschlag.",
  start: "start",
  stations: [
    { id: "fallart", label: "Fallgruppe" },
    { id: "rechnung", label: "Berechnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Besoldung bestimmt",
    neg: "Ergebnis: keine Kürzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "fallart",
      kind: "frage",
      norm: "§ 9 LBesG",
      title: "Welche Form der reduzierten Arbeitszeit liegt vor?",
      def: "Beamte können ihre wöchentliche Arbeitszeit (<b>40 Std./Woche</b> bei Vollzeit, § 2 I ArbZVO) auf Antrag reduzieren (§ 43 BeamtStG, §§ 75 ff. LBG, FS-II-Wissen).<br><br><b>Grundsatz (§ 9 I LBesG):</b> Bei Teilzeitbeschäftigung werden die <b>Dienst- und Anwärterbezüge im gleichen Verhältnis wie die Arbeitszeit</b> gekürzt, soweit gesetzlich nichts anderes bestimmt ist.<br><br><b>Sonderfälle mit eigenen Regeln:</b><br>• <b>Altersteilzeit</b> (§§ 75a–75c LBG): Kürzung nach § 9 I/II + <b>Altersteilzeitzuschlag § 42 LBesG</b>,<br>• <b>begrenzte Dienstfähigkeit</b> (§ 27 BeamtStG): Kürzung nach § 9 III + <b>Zuschlag § 44 LBesG</b>,<br>• <b>FALTER-Modell</b> (§ 38 IV LBG): hälftige Besoldung + Zuschlag § 43a LBesG,<br>• <b>Familienzuschlag</b>: eigene Konkurrenz-/Teilzeitregeln (§ 41 II 3, 4; IV 5, 6 LBesG – Schemata Familienzuschlag).",
      options: [
        { label: "Normale Teilzeit", next: "q_rechnung", tone: "pos" },
        { label: "Altersteilzeit", next: "e_atz", tone: "warn" },
        { label: "Begrenzte Dienstfähigkeit", next: "e_bdf", tone: "warn" },
        { label: "Weiterarbeit nach Altersgrenze", next: "e_altersgrenze", tone: "warn" }
      ]
    },

    q_rechnung: {
      station: "rechnung",
      kind: "frage",
      norm: "§ 9 I LBesG",
      title: "Zeitratierliche Berechnung durchführen",
      def: "<b>Formel:</b> Monatsbetrag (Vollzeit) × individuelle Wochenarbeitszeit ÷ 40 Std.<br><br><b>Skript-Beispiel:</b> Stadtsekretärin, A 6 Stufe 5, Teilzeit 24 Std./Woche wegen Kinderbetreuung. Tabellenwert (Anlage 6, § 23 II 3 LBesG, Stand 02/2025): 3.228,17 €.<br><br>3.228,17 € × 24/40 = 1.936,902 € → gerundet <b>1.936,90 €</b> (§ 8 II LBesG).<br><br><b>Wichtig:</b> Die Berechnung ist mit <b>jedem Bezügebestandteil einzeln</b> zu wiederholen (Familienzuschlag, Allgemeine Zulage) – jeweils einzeln runden. Beim Familienzuschlag vorher prüfen, ob eine Ausnahme von § 9 I greift (§ 41 II 3, IV 5 LBesG)!",
      options: [
        { label: "Berechnung abschließen", next: "e_teilzeit", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_teilzeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 9 I LBesG",
      title: "Zeitratierlich gekürzte Bezüge",
      text: "Der teilzeitbeschäftigte Beamte erhält die Dienstbezüge im Verhältnis seiner Arbeitszeit zur Vollzeit (§ 9 I LBesG): Monatsbetrag × Teilzeitstunden ÷ 40.\n\nJeder Bezügebestandteil wird einzeln gerechnet und einzeln kaufmännisch gerundet (§ 8 II LBesG).\n\nAusnahmen von der zeitratierlichen Kürzung merken:\n• Altersteilzeit (§ 9 II, § 42 LBesG),\n• begrenzte Dienstfähigkeit (§ 9 III, § 44 LBesG),\n• personenstandsabhängiger Zuschlag im Konkurrenzfall (§ 41 II 3 LBesG) und kinderbezogener Zuschlag im Konkurrenzfall (§ 41 IV 5 LBesG),\n• Sockelbetrag von 5,46 € beim kbZ für das 1. und 2. Kind (Anlage 7.1 Nr. 2, Sternchen-Regelung aus § 3 S. 2 LBVAnpG 2009/2010 – von der Kürzung ausgenommen)."
    },

    e_atz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 42 LBesG, §§ 75a, 75b LBG",
      title: "Altersteilzeit: Kürzung + Altersteilzeitzuschlag",
      text: "Während der Altersteilzeit erhält der Beamte die entsprechend § 9 LBesG gekürzte Besoldung PLUS einen Altersteilzeitzuschlag (§ 42 LBesG):\n\n• 20 % der auf die Verminderung der Arbeitszeit entfallenden Dienstbezüge in den Fällen des § 75a LBG,\n• 40 % in den Fällen des § 75b LBG.\n\nBei ungleichmäßig verteilter Arbeitszeit (Beschäftigungs- und Freistellungsphase, Blockmodell) gilt § 9 II LBesG: Grundgehalt, Familienzuschlag, Amtszulagen und Allgemeine Zulage werden durchgehend anteilig gezahlt; Stellenzulagen dagegen nach der tatsächlich geleisteten Arbeitszeit der Beschäftigungsphase.\n\nDer Zuschlag nach § 43 LBesG bleibt bei der Ermittlung unberücksichtigt (§ 42 S. 2 LBesG)."
    },

    e_bdf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 9 III, § 44 LBesG",
      title: "Begrenzte Dienstfähigkeit: Kürzung + 50 %-Zuschlag",
      text: "Begrenzt dienstfähige Beamte (§ 27 BeamtStG, § 44 VI LBG) erhalten Dienstbezüge entsprechend § 9 I LBesG (anteilig nach der reduzierten Arbeitszeit), ergänzt um einen Zuschlag nach § 44 LBesG (§ 9 III LBesG):\n\n• Höhe: 50 % des Unterschiedsbetrags zwischen den gekürzten Dienstbezügen und den Dienstbezügen bei Vollbeschäftigung (§ 44 I LBesG).\n• Dienstbezüge hierfür: Grundgehalt & Co. nach § 3 I Nr. 1–3, daneben Familienzuschlag, Allgemeine Zulage, Amts- und Stellenzulagen, Ausgleichs-/Überleitungszulagen (§ 44 III LBesG).\n• Reduziert der Beamte FREIWILLIG über die begrenzte Dienstfähigkeit hinaus (z. B. 80 % dienstfähig, arbeitet nur 50 %), verringert sich der Zuschlag entsprechend (§ 44 II LBesG).\n• Kein Zuschlag, wenn bereits ein Zuschlag nach §§ 42, 43 oder 43a zusteht (§ 44 IV LBesG)."
    },

    e_altersgrenze: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 43, § 43a LBesG",
      title: "Dienst über die Altersgrenze hinaus / FALTER",
      text: "Zwei Sonderkonstellationen am Ende des Berufslebens:\n\n• HINAUSGESCHOBENER RUHESTAND (§ 38 LBG, bis längstens drei Jahre): Zuschlag von 8 % des Grundgehalts ab dem Monat nach Erreichen der gesetzlichen Altersgrenze, längstens für drei Jahre (§ 43 LBesG); gilt nicht für Beamte auf Zeit.\n\n• FALTER-ARBEITSZEITMODELL (§ 38 IV LBG – Teilzeit 50 % über die Altersgrenze hinweg): zusätzlich zur hälftigen Besoldung nach § 9 I ein nicht ruhegehaltfähiger Zuschlag von 50 % des Ruhegehalts, das bei Ruhestandsversetzung am Vortag zustünde – ohne Versorgungsabschlag (§ 43a LBesG). Die Zuschläge nach §§ 42 und 43 sind daneben ausgeschlossen (§ 43a S. 2 LBesG)."
    }
  }
});
