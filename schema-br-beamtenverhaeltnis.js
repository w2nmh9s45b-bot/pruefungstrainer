/*
 * Prüfungsschema: Arten des Beamtenverhältnisses und Probezeit
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - Lehrplan "FS II 2024/2025 Beamtenrecht I" (Becker/Wagner), Blöcke 1-2
 *  - PP-Skripte Laufbahnrecht/Ernennungsrecht (Minor) 2024/2025
 *  - Gesetze: BeamtStG §§ 3-6, 10, 22 IV; LBG §§ 20, 30 IV; LbVO § 11
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-beamtenverhaeltnis",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Grundlagen und Laufbahn",
  title: "Arten des Beamtenverhältnisses und Probezeit (§ 4 BeamtStG)",
  description: "Das Beamtenverhältnis als öffentlich-rechtliches Dienst- und Treueverhältnis (§ 3 BeamtStG), die vier Arten des § 4 BeamtStG plus Ehrenbeamte (§ 5) und die Probezeit (§ 10 BeamtStG, § 20 LBG: regelmäßig drei Jahre, Mindestprobezeit ein Jahr).",
  start: "start",
  stations: [
    { id: "wesen", label: "Wesen" },
    { id: "art", label: "BV-Art" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: BV-Art bestimmt",
    neg: "Ergebnis: kein Beamter",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "wesen",
      kind: "frage",
      norm: "§ 3 I BeamtStG, Art. 33 IV, V GG",
      title: "Das Wesen des Beamtenverhältnisses – Abgrenzung zum Arbeitsverhältnis",
      def: "Beamte stehen zu ihrem Dienstherrn in einem <b>öffentlich-rechtlichen Dienst- und Treueverhältnis</b> (§ 3 I BeamtStG) – kein Vertrag, sondern Begründung durch <b>Ernennung</b> (§ 8 BeamtStG).<br><br><b>Abgrenzung zum ATR (Beschäftigte):</b><br>• Beschäftigte: privatrechtlicher <b>Arbeitsvertrag</b>, TVöD, Austauschprinzip (Entgelt für Arbeit), Kündigung, Arbeitsgerichte;<br>• Beamte: <b>Ernennung</b>, Gesetz (BeamtStG/LBG), <b>Alimentationsprinzip</b>, gesetzliche Beendigungsgründe, <b>Verwaltungsrechtsweg</b> (§ 54 BeamtStG), Streikverbot.<br><br><b>Funktionsvorbehalt (Art. 33 IV GG, § 3 II BeamtStG):</b> Die Ausübung <b>hoheitsrechtlicher Befugnisse</b> ist als ständige Aufgabe i. d. R. Beamten zu übertragen.<br><br>Die <b>hergebrachten Grundsätze des Berufsbeamtentums</b> (Art. 33 V GG) prägen das Statusrecht: Lebenszeitprinzip, Alimentation, Treuepflicht, Laufbahnprinzip, Hauptberuflichkeit.",
      options: [
        { label: "Welche BV-Art liegt vor?", next: "q_art", tone: "pos" }
      ]
    },

    q_art: {
      station: "art",
      kind: "frage",
      norm: "§§ 4, 5 BeamtStG",
      title: "Welche Art von Beamtenverhältnis ist einschlägig?",
      def: "§ 4 BeamtStG unterscheidet <b>vier Arten</b> (abschließend), dazu § 5 die Ehrenbeamten:<br><br>• <b>Lebenszeit (§ 4 I):</b> dauernde Wahrnehmung der Aufgaben – der <b>Regelfall</b> (Art. 126 I LV: Berufsbeamte werden i. d. R. auf Lebenszeit ernannt),<br>• <b>Zeit (§ 4 II):</b> befristete Wahrnehmung – v. a. hauptamtliche <b>kommunale Wahlbeamte</b> (Bürgermeister 8 Jahre, § 52 I GemO; Beigeordnete),<br>• <b>Probe (§ 4 III):</b> Ableistung einer <b>Probezeit</b> zur späteren Verwendung auf Lebenszeit oder zur Übertragung eines Amtes mit leitender Funktion,<br>• <b>Widerruf (§ 4 IV):</b> <b>Vorbereitungsdienst</b> (Anwärter) oder nur vorübergehende Aufgabenwahrnehmung,<br>• <b>Ehrenbeamte (§ 5):</b> unentgeltliche Wahrnehmung von Aufgaben (Ortsbürgermeister, ehrenamtliche Beigeordnete); Umwandlung in ein anderes BV (und umgekehrt) ist <b>unzulässig</b> (§ 5 III).",
      options: [
        { label: "Probe – Probezeit prüfen", next: "q_probezeit", tone: "pos" },
        { label: "Lebenszeit / Zeit", next: "e_lebenszeit", tone: "neutral" },
        { label: "Widerruf (Anwärter)", next: "e_widerruf", tone: "neutral" },
        { label: "Ehrenbeamter", next: "e_ehrenamt", tone: "warn" }
      ]
    },

    q_probezeit: {
      station: "art",
      kind: "frage",
      norm: "§ 10 BeamtStG, § 20 LBG, § 11 LbVO",
      title: "Die Probezeit: Dauer, Anrechnung, Verzicht",
      def: "Die Ernennung auf <b>Lebenszeit</b> ist nur zulässig, wenn sich der Beamte in einer <b>Probezeit von mindestens sechs Monaten und höchstens fünf Jahren bewährt</b> hat (§ 10 S. 1 BeamtStG; Ausnahmen von der Mindestprobezeit durch Landesrecht, S. 2).<br><br><b>Landesrecht RLP (§ 20 LBG):</b><br>• Probezeit = Zeit im BV auf Probe, in der sich der Beamte bewähren soll (I),<br>• <b>regelmäßige Dauer: DREI Jahre</b> (II 1),<br>• <b>Anrechnung</b> gleichwertiger Tätigkeiten (innerhalb oder außerhalb des öD) bis zu einer <b>Mindestprobezeit von EINEM Jahr</b> (II 2),<br>• auf die Mindestprobezeit kann <b>verzichtet</b> werden, wenn mind. ein Jahr der anrechenbaren Zeiten bei der Behörde zurückgelegt wurde, die die Bewährung feststellt (II 3),<br>• Bewährungsmaßstab: <b>Eignung, Befähigung, fachliche Leistung</b> (III; § 11 LbVO – dienstliche Beurteilung).<br><br><b>Bezug zur Beförderung:</b> Während der Probezeit und im ersten Jahr danach ist eine Beförderung grundsätzlich unzulässig (§ 21 II LBG – Schema „Beförderung“).",
      options: [
        { label: "Bewährung festgestellt", next: "e_bewaehrt", tone: "pos" },
        { label: "Nichtbewährung", next: "e_nichtbewaehrt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_lebenszeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 I, II BeamtStG",
      title: "Beamter auf Lebenszeit / auf Zeit",
      text: "BEAMTER AUF LEBENSZEIT (§ 4 I BeamtStG): der Regelfall des Berufsbeamtentums – volle Geltung der Pflichten und Rechte, Dienstbezüge (§ 3 I LBesG), Beendigung nur aus den gesetzlichen Gründen (§ 21 BeamtStG), bei Dienstunfähigkeit i. d. R. Ruhestand statt Entlassung.\n\nBEAMTER AUF ZEIT (§ 4 II BeamtStG): befristete Wahrnehmung – in der Kommunalverwaltung die hauptamtlichen Wahlbeamten (Bürgermeister: 8 Jahre Amtszeit, § 52 I GemO; hauptamtliche Beigeordnete). Besonderheiten:\n• Ernennung setzt die (wirksame!) Wahl voraus (§ 11 I Nr. 3 Bst. c BeamtStG – Nichtigkeit bei unwirksamer Wahl),\n• Umwandlung in ein BV anderer Art und umgekehrt ist unzulässig (§ 22 II, III BeamtStG) – wird der eigene Büroleiter zum Bürgermeister gewählt, endet sein bisheriges BV kraft Gesetzes (§ 22 III; Fortdauer-Anordnung durch oberste Dienstbehörde möglich, § 30 III LBG),\n• Besoldung nach LKomBesVO (§ 24 LBesG), Abwahl: Weiterzahlung § 4 VI LBesG."
    },

    e_widerruf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 4 IV BeamtStG, § 22 IV BeamtStG, § 30 IV LBG",
      title: "Beamter auf Widerruf (Anwärter)",
      text: "Das BV auf Widerruf dient v. a. der Ableistung des VORBEREITUNGSDIENSTES (§ 4 IV Bst. a BeamtStG) – die Anwärter (Dienstbezeichnung mit Zusatz \"-anwärter\", § 21 LbVO).\n\nBesonderheiten:\n• Bezüge: Anwärterbezüge = Sonstige Bezüge (§ 3 II, §§ 57 ff. LBesG – Schema im Fach Besoldungsrecht),\n• Dauer: 2. EA zwei Jahre, 3. EA drei Jahre (§§ 8, 23 APOVwD-E2/3),\n• ENDE KRAFT GESETZES mit der Laufbahnprüfung (§ 22 IV BeamtStG i. V. m. § 30 IV LBG): beim BESTEHEN mit Ablauf des Prüfungsmonats, frühestens mit Ablauf der festgesetzten Vorbereitungsdienstzeit; beim endgültigen NICHTBESTEHEN mit Ablauf des Prüfungstages (Anwärterbezüge laufen bis Monatsende weiter, § 58 LBesG),\n• jederzeitige Entlassung möglich (§ 23 IV BeamtStG – aber sachlicher Grund nötig; Gelegenheit zur Beendigung des Vorbereitungsdienstes soll gegeben werden),\n• keine Versetzung in den Ruhestand möglich (bei Dienstunfähigkeit: Entlassung § 23 I Nr. 3),\n• die Übernahme nach bestandener Prüfung ist eine BEGRÜNDUNG (§ 8 I Nr. 1), keine Umwandlung!"
    },

    e_bewaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 10 BeamtStG, § 8 I Nr. 2 BeamtStG",
      title: "Bewährung: Umwandlung in das BV auf Lebenszeit",
      text: "Nach erfolgreich abgeleisteter Probezeit (Eignung, Befähigung, fachliche Leistung bestätigt) wird das BV auf Probe in das BV auf Lebenszeit UMGEWANDELT – Ernennungsfall des § 8 I Nr. 2 BeamtStG (Urkundenformel: \"... berufe ich ... in das Beamtenverhältnis auf Lebenszeit\", § 8 II 2 Nr. 2).\n\nZeitliche Leitplanken:\n• Mindestprobezeit 6 Monate, Höchstdauer 5 Jahre (§ 10 BeamtStG),\n• Regel-Probezeit in RLP: 3 Jahre (§ 20 II 1 LBG), Verlängerung bei nicht feststellbarer Bewährung möglich,\n• Anrechnung/Verzicht nach § 20 II 2, 3 LBG.\n\nMerke für die Besoldung: Die Umwandlung ändert nichts an Besoldungsgruppe und Stufe – sie ist keine Beförderung."
    },

    e_nichtbewaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 23 III 1 Nr. 2 BeamtStG",
      title: "Nichtbewährung: Entlassung aus dem BV auf Probe",
      text: "Bewährt sich der Probebeamte hinsichtlich Eignung, Befähigung oder fachlicher Leistung nicht, ist er zu entlassen (§ 23 III 1 Nr. 2 BeamtStG – \"kann\" bedeutet hier intendiertes Ermessen = \"soll\").\n\n• Auch mangelnde GESUNDHEITLICHE Eignung ist Nichtbewährung (Prognose: Dienstunfähigkeit vor der Altersgrenze überwiegend wahrscheinlich); bei ALLEIN gesundheitlicher Nichteignung ist vorher die anderweitige Verwendung zu prüfen (§ 23 III 2 i. V. m. § 26 II BeamtStG).\n• Entlassungsfristen: § 31 II 2 LBG (bis 3 Monate Beschäftigungszeit: 2 Wochen zum Monatsschluss; darüber: 6 Wochen zum Schluss des Kalendervierteljahres) – die Frist darf über das Probezeitende hinausgehen (Schutzvorschrift)!\n• Verfahren: Anhörung, Begründung, Zustellung, Personalrat (§ 79 II Nr. 14 LPersVG), ggf. Rat/Kreistag ab dem 3. EA (§ 47 II 2 Nr. 1 GemO).\n\nDetails im Schema \"Entlassung durch Verwaltungsakt\"."
    },

    e_ehrenamt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 5 BeamtStG",
      title: "Ehrenbeamte: Sonderstatus",
      text: "Ehrenbeamte (§ 5 I BeamtStG) nehmen Aufgaben UNENTGELTLICH wahr – kommunale Beispiele: Ortsbürgermeister, ehrenamtliche Beigeordnete (Wahl-Ehrenbeamte, §§ 53 III, 53a I GemO – Mindestalter 18 Jahre).\n\nBesonderheiten:\n• keine Besoldung (§ 1 I LBesG nimmt Ehrenbeamte aus), nur Aufwandsentschädigung,\n• UMWANDLUNG in ein BV anderer Art (und umgekehrt) ist UNZULÄSSIG (§ 5 III BeamtStG) – der ehrenamtliche Beigeordnete, der Beamter der VG werden soll, wird neu ernannt (Begründung § 8 I Nr. 1),\n• Nebentätigkeitsrecht: NebVO gilt nicht (§ 1 S. 3 NebVO, § 7 I Nr. 3 LBG),\n• Disziplinarrecht: nur Verweis, Geldbuße und Entfernung aus dem Dienst (§ 3 III 1 LDG)."
    }
  }
});
