/*
 * Prüfungsschema: Zugang zur Laufbahn (§§ 14-18 LBG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 2 - Laufbahnrecht" (Minor) 2024/2025
 *  - Gesetze: LBG §§ 14, 15, 18, 19; LbVO §§ 16-25; LBesG § 25
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-laufbahnbewerber",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Grundlagen und Laufbahn",
  title: "Zugang zur Laufbahn: Laufbahn- und andere Bewerber (§§ 15, 18 LBG)",
  description: "Laufbahn, Fachrichtungen und Einstiegsämter (§ 14 LBG, § 25 LBesG), die Zugangsvoraussetzungen der Laufbahnbewerber je Einstiegsamt (§ 15 LBG: Bildungsvoraussetzung + sonstige Voraussetzung, § 18 LbVO) und der andere Bewerber (§ 18 LBG – Feststellung durch den LPA).",
  start: "start",
  stations: [
    { id: "begriffe", label: "Grundbegriffe" },
    { id: "zugang", label: "Zugang" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zugang eröffnet",
    neg: "Ergebnis: kein Zugang",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderweg"
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "§ 14 LBG, § 25 LBesG",
      title: "Grundbegriffe: Laufbahn, Fachrichtung, Einstiegsamt",
      def: "• <b>Laufbahn (§ 14 I 1 LBG):</b> alle Ämter derselben <b>Fachrichtung</b>; dazu gehören auch Vorbereitungsdienst und Probezeit.<br>• <b>Sechs Fachrichtungen (§ 14 II LBG):</b> Verwaltung und Finanzen · Bildung und Wissenschaft · Justiz und Justizvollzug · Polizei und Feuerwehr · Gesundheit und Soziales · Naturwissenschaft und Technik.<br>• <b>Einstiegsämter:</b> nicht im Laufbahnrecht, sondern im <b>Besoldungsrecht</b> geregelt (§ 25 LBesG): 1. EA → A 5, 2. EA → A 6 (technisch A 7), 3. EA → A 9 (technisch A 10), 4. EA → A 13.<br>• Die Laufbahn <b>beginnt</b> grundsätzlich im Einstiegsamt (§ 19 II 1 LBG); Ausnahme: Einstellung im ersten <i>und seit 20.06.2024 auch im zweiten</i> Beförderungsamt (§ 19 II 2 Nr. 1 LBG i. V. m. § 9 LbVO).<br><br>Wer in das BV berufen werden will, muss die nach Landesrecht vorgeschriebene <b>Befähigung</b> besitzen (§ 7 I Nr. 3 BeamtStG) – entweder als <b>Laufbahnbewerber</b> (§ 15 LBG) oder als <b>anderer Bewerber</b> (§ 18 LBG).",
      options: [
        { label: "Laufbahnbewerber (§ 15 LBG)", next: "q_ea", tone: "pos" },
        { label: "Anderer Bewerber (§ 18 LBG)", next: "e_anderer", tone: "warn" }
      ]
    },

    q_ea: {
      station: "zugang",
      kind: "frage",
      norm: "§ 15 II–V LBG",
      title: "Welches Einstiegsamt wird angestrebt? (Bildungs- + sonstige Voraussetzung)",
      def: "§ 15 LBG verlangt je Einstiegsamt <b>zwei Komponenten</b> (jeweils Nr. 1: Bildungsvoraussetzung, Nr. 2: sonstige Voraussetzung):<br><br>• <b>1. EA (§ 15 II):</b> Berufsreife + (a) Berufsausbildung oder (b) Vorbereitungsdienst,<br>• <b>2. EA (§ 15 III):</b> qualifizierter Sekundarabschluss I (oder Berufsreife + Ausbildung) + (a) Berufsausbildung <b>und</b> hauptberufliche Tätigkeit oder (b) <b>Vorbereitungsdienst</b> (2 Jahre, Laufbahnprüfung z. B. an der ZVS),<br>• <b>3. EA (§ 15 IV):</b> <b>Bachelor</b> oder gleichwertiger Hochschulabschluss + (a) hauptberufliche Tätigkeit oder (b) <b>Vorbereitungsdienst</b> (3 Jahre – z. B. duales Studium an der HöV),<br>• <b>4. EA (§ 15 V):</b> <b>Master</b> oder gleichwertig + (a) hauptberufliche Tätigkeit oder (b) Vorbereitungsdienst.<br><br>Konkretisierung in der <b>LbVO</b>: §§ 20–24 (Vorbereitungsdienst + Prüfung), §§ 16–19 (Berufsbefähigung + hauptberufliche Tätigkeit), § 25 (qualifizierter Hochschulabschluss).",
      options: [
        { label: "Mit Vorbereitungsdienst", next: "e_vd", tone: "pos" },
        { label: "Ohne VD – hauptberufliche Zeit", next: "q_hauptberuflich", tone: "neutral" }
      ]
    },

    q_hauptberuflich: {
      station: "zugang",
      kind: "frage",
      norm: "§ 18 LbVO",
      title: "Ersatz des Vorbereitungsdienstes: Genügt die hauptberufliche Tätigkeit?",
      def: "Statt des Vorbereitungsdienstes genügt eine <b>hauptberufliche Tätigkeit</b> – Anforderungen nach § 18 LbVO:<br><br><b>Dauer (§ 18 I):</b><br>• 2. EA: mindestens <b>2 Jahre</b>,<br>• 3. EA: mindestens <b>2 Jahre und 6 Monate</b> (bei Promotion Verkürzung bis auf 2 Jahre möglich),<br>• 4. EA: mindestens <b>3 Jahre und 6 Monate</b> (§ 18 I 1 Nr. 3).<br><br><b>Qualität (§ 18 II):</b> Die Tätigkeit muss<br>• <b>nach Abschluss</b> der zum Beruf befähigenden Ausbildung geleistet sein (Nr. 1 – Zeiten davor zählen nicht!),<br>• <b>fachlich</b> an die Ausbildung anknüpfen und den Anforderungen der Laufbahn entsprechen,<br>• nach <b>Art und Schwierigkeit</b> mindestens der Tätigkeit im angestrebten <b>Einstiegsamt</b> entsprechen (Nr. 3 – Gleichwertigkeit!) und<br>• zu fachlich <b>selbstständiger</b> Berufsausübung befähigen.<br><br><b>Skript-Beispiel (Übungsfall 2):</b> Bachelor „Soziale Arbeit“ + über 2,5 Jahre als Bezirkssozialarbeiterin (S 11b) → Zugang zum 3. EA (+). <b>Gegenbeispiel (Praxisfall O):</b> Master + Tätigkeit „nur“ im 3. EA → nicht gleichwertig zum 4. EA (§ 18 II Nr. 3); die 3,5 Jahre laufen erst ab Übernahme der A-14-wertigen Funktion.",
      options: [
        { label: "Dauer + Qualität erfüllt", next: "e_hauptberuflich", tone: "pos" },
        { label: "Nicht erfüllt", next: "e_kein_zugang", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vd: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 15 LBG, §§ 20–24 LbVO",
      title: "Laufbahnbefähigung über den Vorbereitungsdienst",
      text: "Mit bestandener Laufbahnprüfung nach dem Vorbereitungsdienst ist die Laufbahnbefähigung erworben (§ 15 LBG i. V. m. §§ 20-24 LbVO; Feststellung § 24 I 2 LbVO).\n\nSkript-Beispiel (Übungsfall 1): Duales Studium beim Landkreis als Kreisinspektoranwärter mit Abschluss \"Bachelor of Arts\" → erfüllt beide Komponenten des § 15 IV LBG: Bildungsvoraussetzung (Bachelor, Nr. 1) und sonstige Voraussetzung (Vorbereitungsdienst, Nr. 2 Bst. b) → Zugang zum 3. EA (+).\n\nWeiter geht es mit der Einstellung: grundsätzlich nur im Einstiegsamt (§ 19 II 1 LBG), Ernennungsfall \"Begründung\" (§ 8 I Nr. 1 BeamtStG), Besoldungsgruppe über § 25 LBesG (A 9 beim 3. EA).\n\nBeachte für die Stufe (Besoldungsrecht): Die Anwärterzeit ist keine Erfahrungszeit – der Stufenaufstieg beginnt erst mit der Ernennung zum Beamten auf Probe (§ 29 II 1 LBesG)."
    },

    e_hauptberuflich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 15 LBG, §§ 16–19 LbVO",
      title: "Laufbahnbefähigung über die hauptberufliche Tätigkeit",
      text: "Bildungsvoraussetzung + ausreichende hauptberufliche Tätigkeit (§ 18 LbVO) → die Befähigung wird von der Behörde festgestellt (§ 19 LbVO) und der Zugang zum Einstiegsamt ist eröffnet.\n\nWichtige Folgewirkung für die BESOLDUNG: Wer seinen Vorbereitungsdienst durch hauptberufliche Zeiten ersetzt hat, hat diese Zeiten \"für die Laufbahn verbraucht\" – sie sind bei der Stufenfestsetzung NICHT mehr berücksichtigungsfähig (§ 30 I 1 Nr. 2 LBesG: \"die nicht Voraussetzung für die Zulassung zu der Laufbahn sind\"; Schema \"Beginn des Stufenaufstiegs\" im Besoldungsrecht).\n\nPraxis-Merkposten aus dem Skript: Erst mit Erfüllung der Zeitvorgabe kann die Befähigung festgestellt werden – vorher ist weder Einstellung im höheren EA noch die zugehörige Beförderung möglich; ggf. ist die Fortbildungsqualifizierung (§ 21 III Nr. 2 LBG) der schnellere Weg (Schema \"Beförderung und Qualifizierung\")."
    },

    e_anderer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 18 LBG, § 45 Nr. 1 LbVO",
      title: "Anderer Bewerber: Feststellung durch den LPA",
      text: "Von ANDEREN BEWERBERN wird die für die Laufbahn vorgeschriebene Vorbildung und Ausbildung NICHT gefordert (§ 18 S. 1 LBG): Sie erwerben die Befähigung durch ihre persönliche LEBENS- UND BERUFSERFAHRUNG (innerhalb oder außerhalb des öffentlichen Dienstes).\n\nVerfahren: Die Befähigung ist durch den LANDESPERSONALAUSSCHUSS (LPA) oder einen von ihm bestimmten Unterausschuss FESTZUSTELLEN (§ 18 II LBG i. V. m. § 99 II Nr. 2 LBG, § 45 Nr. 1 LbVO). Die Geschäftsstelle des LPA ist beim Ministerium des Innern eingerichtet (§ 104 LBG).\n\nDer Weg des anderen Bewerbers ist die Ausnahme – praktisch relevant für Quereinsteiger mit besonderer Berufserfahrung, wenn die formalen Laufbahnvoraussetzungen fehlen."
    },

    e_kein_zugang: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 LBG, § 18 LbVO",
      title: "Kein Laufbahnzugang",
      text: "Die Voraussetzungen des § 15 LBG sind (noch) nicht erfüllt – typische Gründe:\n\n• hauptberufliche Zeit zu kurz (2 / 2,5 / 3,5 Jahre je EA, § 18 I LbVO),\n• Tätigkeit VOR dem Ausbildungsabschluss geleistet (§ 18 II Nr. 1),\n• Tätigkeit nicht gleichwertig mit dem Einstiegsamt (§ 18 II Nr. 3 – z. B. Tätigkeit im 3. EA qualifiziert nicht für das 4. EA),\n• Bildungsvoraussetzung fehlt.\n\nAlternativen prüfen:\n• Vorbereitungsdienst ableisten (§ 15 Nr. 2 Bst. b der jeweiligen Absätze),\n• Zulassung als anderer Bewerber über den LPA (§ 18 LBG),\n• bei bereits vorhandenem Beamtenstatus: Qualifizierung nach § 21 III LBG (Ausbildungs-/Fortbildungsqualifizierung – Schema \"Beförderung und Qualifizierung\").\n\nWird trotz fehlender Voraussetzungen ernannt, ist die Ernennung NICHT nichtig (kein Fall des § 11 BeamtStG!) – sie ist fehlerhaft, aber wirksam; § 12 BeamtStG greift nur in dessen engen Fällen."
    }
  }
});
