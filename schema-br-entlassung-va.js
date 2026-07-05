/*
 * Prüfungsschema: Entlassung durch Verwaltungsakt (§ 23 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 4 - Beendigung von Beamtenverhältnissen" (Minor), Ziff. 4.3.2-4.3.6
 *  - Gesetze: BeamtStG §§ 23, 26 II, 28, 38; LBG §§ 31, 32, 123; LPersVG § 79;
 *    GemO § 47 II (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-entlassung-va",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Beendigung",
  title: "Entlassung durch Verwaltungsakt (§ 23 BeamtStG)",
  description: "Die Entlassungstatbestände des § 23 BeamtStG (Diensteidverweigerung, fehlende Wartezeit, Dienstunfähigkeit ohne Ruhestand, eigener Antrag mit Rücknahmefenster, Probe- und Widerrufsbeamte) samt Verfahren, Entlassungsfristen (§ 31 II LBG) und Wirkung (§ 32 LBG).",
  start: "start",
  stations: [
    { id: "tatbestand", label: "Tatbestand" },
    { id: "verfahren", label: "Verfahren" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Entlassung",
    neg: "Ergebnis: keine Entlassung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Fristen beachten"
  },

  nodes: {

    start: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 23 BeamtStG",
      title: "Welcher Entlassungstatbestand des § 23 BeamtStG?",
      def: "„… sind zu entlassen …“ (gebundene Verwaltung) bzw. „… können entlassen werden …“ (Ermessen) – die Entlassung wird <b>durch VA verfügt</b>:<br><br>• <b>Abs. 1 Nr. 1:</b> Verweigerung des <b>Diensteides</b>/Gelöbnisses (§ 38 BeamtStG, § 51 LBG) – zwingend,<br>• <b>Abs. 1 Nr. 2:</b> Nichterfüllung der versorgungsrechtlichen <b>Wartezeit</b> (5 Jahre, § 11 I Nr. 1 LBeamtVG) bei sonst möglicher Ruhestandsversetzung – zwingend,<br>• <b>Abs. 1 Nr. 3:</b> dauernde <b>Dienstunfähigkeit ohne Ruhestandsversetzung</b> – zwingend (Hauptfälle: Widerrufs- und Probebeamte),<br>• <b>Abs. 1 Nr. 4:</b> <b>eigener Antrag</b> – zwingend,<br>• Abs. 1 Nr. 5: Berufung nach Erreichen der Altersgrenze (in RLP ohne Bedeutung),<br>• <b>Abs. 2:</b> Verlust der „Deutscheneigenschaft“ bei sicherheitsrelevanter Stelle (§ 7 II) – Ermessen, vorrangig andere Verwendung,<br>• <b>Abs. 3:</b> Beamte auf <b>Probe</b> (intendiertes Ermessen: „kann“ = „soll“!),<br>• <b>Abs. 4:</b> Beamte auf <b>Widerruf</b> – „jederzeit“, aber sachlicher Grund nötig.",
      options: [
        { label: "Eigener Antrag (Nr. 4)", next: "q_antrag", tone: "pos" },
        { label: "Probebeamter (Abs. 3)", next: "q_probe", tone: "neutral" },
        { label: "Widerrufsbeamter (Abs. 4)", next: "e_widerruf", tone: "neutral" },
        { label: "Diensteid / DU / Wartezeit", next: "q_verfahren", tone: "neutral" }
      ]
    },

    q_antrag: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 23 I 1 Nr. 4 BeamtStG, § 31 I LBG",
      title: "Entlassung auf eigenen Antrag: Verlangen und Rücknahmefenster",
      def: "Beamte <b>sind</b> auf ihr schriftliches Verlangen hin zu entlassen – für <b>jeden Zeitpunkt</b> beantragbar, eine Kündigungsfrist gibt es nicht.<br><br><b>Verfahren (§ 31 I LBG):</b><br>• Das Verlangen ist gegenüber dem <b>Dienstvorgesetzten</b> zu erklären,<br>• <b>Rücknahme des Antrags:</b> solange die Entlassungsverfügung noch nicht zugegangen ist – <b>ohne Genehmigung</b> aber nur <b>innerhalb von zwei Wochen</b> nach Zugang des Verlangens beim Dienstvorgesetzten (§ 31 I 2 LBG); danach nur <b>mit Genehmigung</b> der Entlassungsbehörde (Schutz vor emotionalem Handeln),<br>• die Entlassung ist für den <b>beantragten Zeitpunkt</b> auszusprechen (§ 31 I 3),<br>• <b>Hinausschieben</b> möglich, bis die Amtsgeschäfte ordnungsgemäß erledigt sind – <b>längstens drei Monate</b> (§ 31 I 4; Lehrkräfte: bis Schulhalbjahresende).<br><br><b>Skript-Beispiele:</b> Verlangen 05.08., Reue am 12.08. → Rücknahme ohne Genehmigung möglich (keine zwei Wochen um, keine Verfügung zugegangen). – Übungsfall R: Verlangen 17.09. (durch Ehefrau überbracht), Rücknahme-Fax 01.10., Entlassungsverfügung erst 02.10. zugestellt → Rücknahme VOR Zugang der Verfügung, aber nach zwei Wochen → nur mit <b>Genehmigung</b> wirksam.",
      options: [
        { label: "Wirksames Verlangen", next: "e_antrag", tone: "pos" },
        { label: "Verlangen wirksam zurückgenommen", next: "e_ruecknahme_antrag", tone: "neg" }
      ]
    },

    q_probe: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 23 III BeamtStG",
      title: "Probebeamte: Welcher Entlassungsgrund?",
      def: "Trotz „kann“ besteht <b>intendiertes Ermessen</b> („soll“). Gründe (§ 23 III 1):<br><br>• <b>Nr. 1:</b> Handlung, die im BV auf Lebenszeit mindestens eine <b>Kürzung der Dienstbezüge</b> als Disziplinarmaßnahme zur Folge hätte (§ 7 LDG – „fiktive Disziplinarprüfung“) → Entlassung <b>ohne Frist</b> (§ 31 II 1 LBG; vorher Sachverhaltsaufklärung entsprechend §§ 16, 27–35 LDG),<br>• <b>Nr. 2: Nichtbewährung</b> in der Probezeit (Eignung, Befähigung, fachliche Leistung) – auch <b>gesundheitliche</b> Nichteignung (Prognose!); bei ALLEIN mangelnder gesundheitlicher Eignung vorher anderweitige Verwendung prüfen (§ 23 III 2 i. V. m. § 26 II BeamtStG). Beispiele: dauerhaft halbe Erledigungszahlen trotz verlängerter Probezeit; fehlende charakterliche Eignung (ständiger Streit),<br>• <b>Nr. 3:</b> Auflösung/Umbau/Verschmelzung der Behörde oder Umbildung der Körperschaft (§ 31 BeamtStG) ohne andere Verwendungsmöglichkeit; Entlassene sind bei Bewerbungen vorrangig zu berücksichtigen (§ 31 III LBG).<br><br><b>Fristen (Nr. 2, 3 sowie § 23 I Nr. 3):</b> § 31 II 2 LBG – Beschäftigungszeit bis 3 Monate: <b>2 Wochen zum Monatsschluss</b>; über 3 Monate: <b>6 Wochen zum Schluss des Kalendervierteljahres</b>. Die Frist darf über das <b>Probezeitende hinausgehen</b> (Schutzvorschrift; Skript-Fall W: Feststellung 05.12., Zustellung 16.12., Probezeit endet 31.12. → Entlassung erst zum 31.03.).",
      options: [
        { label: "Grund liegt vor – Verfahren", next: "q_verfahren", tone: "pos" },
        { label: "Kein Grund", next: "e_keine", tone: "neg" }
      ]
    },

    q_verfahren: {
      station: "verfahren",
      kind: "frage",
      norm: "§§ 31, 32 LBG, § 123 LBG",
      title: "Entlassungsverfahren: Zuständigkeit, Form, Beteiligungen, Fristen",
      def: "<b>Zuständigkeit:</b> die Stelle, die für die <b>Ernennung</b> zuständig wäre (§ 32 I 1 LBG).<br><b>Form:</b> schriftliche Verfügung (§ 32 I 1), <b>Begründung</b> (§ 39 VwVfG), <b>Anhörung</b> (§ 28 VwVfG), <b>Zustellung</b> (§ 123 LBG i. V. m. LVwZG/VwZG).<br><b>Beteiligungen:</b> Personalrat bei Entlassung von Probe-/Widerrufsbeamten ohne eigenen Antrag (§ 79 II Nr. 14 LPersVG – <b>nicht</b> bei Entlassung kraft Gesetzes!); Rat/Kreistag bei Probebeamten ab dem 3. EA gegen deren Willen (§ 47 II 2 Nr. 1 GemO, § 41 II 2 Nr. 1 LKO).<br><br><b>Fristen-Übersicht:</b><br>• <b>fristlos</b> (mit Zustellung): Diensteidverweigerung (§ 23 I Nr. 1; § 32 I 2 Alt. 1 LBG) und schweres Dienstvergehen des Probebeamten (§ 23 III 1 Nr. 1; § 31 II 1 LBG),<br>• <b>§ 31 II 2 LBG</b> (2 Wochen zum Monatsschluss / 6 Wochen zum Quartalsschluss): Nichtbewährung, Behördenauflösung, Dienstunfähigkeit ohne Ruhestand,<br>• <b>im Übrigen:</b> Ablauf des auf die Zustellung <b>folgenden Monats</b> (§ 32 I 2 Alt. 2 LBG – z. B. Nr. 2, Nr. 5).",
      options: [
        { label: "Verfahren eingehalten", next: "e_entlassung", tone: "pos" },
        { label: "Verfahrensfehler", next: "e_fehler", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_entlassung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 23 BeamtStG, § 32 LBG",
      title: "Entlassung wirksam verfügt",
      text: "Die Entlassung wird mit der Zustellung (fristlose Fälle) bzw. nach Ablauf der jeweiligen Frist wirksam (§ 32 I 2, § 31 II LBG).\n\nWIRKUNG (§ 32 II LBG):\n• keine Ansprüche mehr gegen den früheren Dienstherrn (keine Besoldung, keine Versorgung) – Nachversicherung §§ 181 ff. SGB VI,\n• Erlaubnis zum Führen der Amtsbezeichnung \"a. D.\" kann erteilt (und bei Unwürdigkeit zurückgenommen) werden,\n• Rückforderung von Ausbildungskosten (§ 34 LBG) bei Entlassung auf Antrag binnen fünf Jahren nach der Probe-Ernennung nach Studium an landeseigener Hochschule – in RLP mangels RVO derzeit nicht praktiziert; beachte aber die besoldungsrechtliche Rückzahlungspflicht aus den Auflagen des § 57 V LBesG!\n\nRechtsschutz: Widerspruch/Anfechtungsklage (§ 54 BeamtStG) mit aufschiebender Wirkung (§ 80 I VwGO)."
    },

    e_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 23 I 1 Nr. 4 BeamtStG, § 31 I LBG",
      title: "Entlassung auf Antrag",
      text: "Dem wirksamen Verlangen ist zu entsprechen: Entlassung zum beantragten Zeitpunkt (§ 31 I 3 LBG); Hinausschieben nur zur ordnungsgemäßen Erledigung der Amtsgeschäfte, längstens drei Monate (§ 31 I 4 LBG – Skript-Beispiel: wichtige Arbeiten, die nur X erledigen kann → Verschiebung um einen Monat zulässig).\n\nTypische Konstellation (Skript): Hauptsekretär (2. EA) will das Studium für das 3. EA beginnen → Entlassungsantrag; ALTERNATIV wäre mit Einverständnis des Dienstherrn die Umwandlung in ein BV auf Widerruf denkbar (§ 8 I Nr. 2 BeamtStG – dann kein Statusverlust \"dazwischen\").\n\nBesoldungshinweis: Mit der Entlassung enden die Bezüge (§ 4 IV LBesG); bei HöV-Absolventen droht innerhalb der 5-Jahres-Bindung die Teilrückforderung der Anwärterbezüge (§ 57 V LBesG)."
    },

    e_ruecknahme_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 31 I 2 LBG",
      title: "Antrag wirksam zurückgenommen: keine Entlassung",
      text: "Das Entlassungsverlangen wurde wirksam zurückgenommen – das BV besteht fort.\n\nDie Rücknahme-Regeln (§ 31 I 2 LBG):\n• VOR Zugang der Entlassungsverfügung UND innerhalb von ZWEI WOCHEN seit dem Verlangen: Rücknahme frei,\n• VOR Zugang der Verfügung, aber NACH zwei Wochen: nur mit GENEHMIGUNG der Entlassungsbehörde,\n• NACH Zugang der Entlassungsverfügung: Rücknahme ausgeschlossen – dann bleibt nur der Rechtsbehelf gegen die Verfügung.\n\nÜbungsfall R: Rücknahme per Fax am 01.10. (nach 2 Wochen, Verfügung erst am 02.10. zugestellt) → nur mit Genehmigung wirksam; verweigert die Behörde sie, wird die Entlassung mit Zustellung am 02.10. \"scharf\" – R kann nur noch Widerspruch einlegen (was er tat)."
    },

    e_widerruf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 23 IV BeamtStG, § 31 IV LBG",
      title: "Widerrufsbeamte: jederzeit – mit sachlichem Grund",
      text: "Beamte auf Widerruf können JEDERZEIT entlassen werden (§ 23 IV 1 BeamtStG) – besondere Tatbestandsvoraussetzungen nennt das Gesetz nicht, aber das WILLKÜRVERBOT verlangt einen SACHLICHEN GRUND (z. B. tadelhafte Führung, mangelhafte Leistungen, die das Erreichen des Ausbildungsziels infrage stellen).\n\n• Anwärtern SOLL Gelegenheit gegeben werden, den Vorbereitungsdienst zu beenden und die Prüfung abzulegen (§ 23 IV 2 BeamtStG – Ermessen),\n• Entlassungsfristen: über § 31 IV LBG gelten die Fristen des § 31 II LBG entsprechend (Sachverhaltsaufklärung bei \"Disziplinarfällen\" analog Abs. 2),\n• Personalratsbeteiligung bei Entlassung ohne eigenen Antrag (§ 79 II Nr. 14 LPersVG),\n• Abgrenzung: Das Nichtbestehen der Prüfung führt schon KRAFT GESETZES zum Ende (§ 22 IV BeamtStG, § 30 IV LBG – Schema \"Entlassung kraft Gesetzes\")."
    },

    e_keine: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 23 III BeamtStG",
      title: "Kein Entlassungsgrund",
      text: "Ohne Tatbestand des § 23 BeamtStG keine Entlassung – der Beamte bleibt im Dienst.\n\nBesonders beim Probebeamten gilt:\n• bloße durchschnittliche (statt guter) Leistungen sind keine Nichtbewährung – der Maßstab ist, ob der Beamte den Anforderungen des Amtes voraussichtlich gerecht wird,\n• bei gesundheitlichen Zweifeln: erst anderweitige Verwendung prüfen (§ 23 III 2 i. V. m. § 26 II BeamtStG); bei dienstlich verursachter Dienstunfähigkeit ist der Probebeamte in den Ruhestand zu versetzen (§ 28 I BeamtStG), sonst \"kann\" (§ 28 II),\n• Alternative zur Entlassung: Verlängerung der Probezeit, wenn die Bewährung noch nicht abschließend feststellbar ist.\n\nBleibt der Dienstherr untätig und läuft die Probezeit ab, wandelt sich das BV nicht automatisch um – aber der Beamte hat bei Bewährung einen Anspruch auf Umwandlung in das BV auf Lebenszeit (§ 10 BeamtStG)."
    },

    e_fehler: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 31, 32 LBG",
      title: "Verfahrensfehler: Entlassung angreifbar",
      text: "Fehler im Entlassungsverfahren machen die Verfügung rechtswidrig und im Widerspruchs-/Klageverfahren aufhebbar:\n\n• falsche Behörde (richtig: die Ernennungsbehörde, § 32 I 1 LBG),\n• fehlende Schriftform, Anhörung oder Begründung (Heilung nach § 45 VwVfG möglich),\n• Zustellungsmangel (§ 123 LBG; Heilung § 8 VwZG),\n• FRISTVERSTOSS: falsche oder gar keine Entlassungsfrist (§ 31 II LBG) – die Verfügung wirkt dann jedenfalls nicht zum verfügten Termin,\n• unterbliebene PERSONALRATSBETEILIGUNG (§ 79 II Nr. 14 LPersVG) oder Gremienbeteiligung (§ 47 II 2 Nr. 1 GemO) – beachtlicher Verfahrensfehler.\n\nRechtsschutz des Beamten: Widerspruch (§ 54 II, III BeamtStG – Widerspruchsbescheid der obersten Dienstbehörde, bei Kommunalbeamten des Dienstvorgesetzten) und Anfechtungsklage; beide haben AUFSCHIEBENDE WIRKUNG (§ 80 I VwGO – die Ausnahme des § 54 IV BeamtStG betrifft nur Abordnung/Versetzung)."
    }
  }
});
