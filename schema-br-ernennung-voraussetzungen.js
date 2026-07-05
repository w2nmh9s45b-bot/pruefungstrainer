/*
 * Prüfungsschema: Ernennungsvoraussetzungen (formell und materiell)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor) 2024/2025, Ziff. 3.3, 3.6.2
 *  - Gesetze: BeamtStG §§ 2, 3 II, 7, 8, 9, 10; LBG §§ 10, 11, 19, 125;
 *    GG Art. 33 II, IV; LPersVG § 79; GemO § 47 II; LHO § 49 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-ernennung-voraussetzungen",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Ernennung",
  title: "Ernennungsvoraussetzungen (§§ 7 ff. BeamtStG)",
  description: "Die formellen Voraussetzungen der Ernennung (Dienstherrnfähigkeit, Ernennungsberechtigung, Urkundsform, Verfahren mit Ausschreibung und Beteiligungen) und die materiellen (Staatsangehörigkeit, Verfassungstreue, Eignung/Befähigung, Höchstalter, Laufbahn-Zugang, Funktionsvorbehalt, Planstelle).",
  start: "start",
  stations: [
    { id: "formell", label: "Formell" },
    { id: "materiell", label: "Materiell" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ernennung rechtmäßig",
    neg: "Ergebnis: Voraussetzung fehlt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Fehlerfolge prüfen"
  },

  nodes: {

    start: {
      station: "formell",
      kind: "frage",
      norm: "§ 2 BeamtStG, §§ 10, 125 LBG",
      title: "Formell (1): Dienstherrnfähigkeit und Ernennungsberechtigung",
      def: "Wie jeder VA muss die Ernennung <b>formell und materiell rechtmäßig</b> sein.<br><br><b>a) Dienstherrnfähigkeit (§ 2 BeamtStG, § 2 LBG):</b> das Recht, Beamte zu haben – und damit zu ernennen. Sie fehlt <b>privaten Unternehmen</b> und Körperschaften ohne Verleihung. Fehlt sie → <b>Nichternennung</b> („Nullum“)!<br><br><b>b) Ernennungsberechtigung</b> (aus der Personalhoheit):<br>• <b>unmittelbare Landesbeamte:</b> Ministerpräsident, mit Delegation durch RVO auf andere Stellen – meist der Behördenleiter (§ 10 I LBG),<br>• <b>Kommunalbeamte (§ 125 I 1 LBG):</b> die nach den Kommunalverfassungsgesetzen zuständigen Organe – <b>Bürgermeister</b> (§ 47 II 1 GemO, auch VG: § 64 GemO), <b>Oberbürgermeister</b> (§ 28 II 2 GemO), <b>Landrat</b> (§ 41 II 1 LKO), jeweils i. V. m. § 4 II LBG.<br><br>Ernennung durch eine <b>sachlich unzuständige</b> Behörde → nichtig (§ 11 I Nr. 2 BeamtStG; heilbar durch Bestätigung, § 11 II Nr. 2); bloß <b>örtliche</b> Unzuständigkeit schadet nicht.",
      options: [
        { label: "Weiter: Form und Verfahren", next: "q_form", tone: "pos" }
      ]
    },

    q_form: {
      station: "formell",
      kind: "frage",
      norm: "§ 8 II BeamtStG, § 11 LBG, LPersVG",
      title: "Formell (2): Form (Urkundsprinzip) und Verfahren",
      def: "<b>c) Form:</b> Die Formwahlfreiheit des allgemeinen Verwaltungsrechts ist durch das <b>Urkundsprinzip</b> (§ 8 II 1 BeamtStG) stark eingeschränkt: Schriftlichkeit, <b>eigenhändige Unterschrift</b> des Ernennungsberechtigten, Angabe des Adressaten, Rechtsgestaltungsverfügung („ernenne/berufe ich“), die <b>verbindlichen Formulierungen des § 8 II 2 BeamtStG</b> je nach Ernennungsfall (Schema „Ernennungsurkunde“).<br><br><b>d) Verfahren:</b><br>• Bekanntgabe durch <b>Aushändigung</b> (§ 8 II 1 – lex specialis zu § 41 VwVfG),<br>• <b>Mitwirkung</b> des zu Ernennenden (Einwilligung),<br>• vorherige <b>Stellenausschreibung</b> (§ 11 I LBG; Ausnahmen S. 3–5),<br>• Zustimmung des <b>Personalrats</b> bei Einstellungen und Beförderungen (§ 79 II Nr. 1, 3 i. V. m. § 74 I 1 LPersVG),<br>• ggf. Beteiligung von <b>Gemeinderat/Stadtrat/Kreistag ab dem 3. EA</b> (§ 47 II 2 Nr. 1 GemO, § 41 II 2 Nr. 1 LKO),<br>• ggf. Gleichstellungsbeauftragte, Schwerbehindertenvertretung,<br>• <b>Negativmitteilung</b> an unterlegene Bewerber (Konkurrentenschutz).",
      options: [
        { label: "Weiter: materielle Voraussetzungen", next: "q_materiell", tone: "pos" },
        { label: "Formmangel entdeckt", next: "e_formfehler", tone: "warn" }
      ]
    },

    q_materiell: {
      station: "materiell",
      kind: "frage",
      norm: "§§ 7, 9 BeamtStG, Art. 33 II, IV GG, § 19 LBG",
      title: "Materiell: Sind alle persönlichen und sachlichen Voraussetzungen erfüllt?",
      def: "<b>Allgemeine Voraussetzungen:</b><br>• <b>Funktionsvorbehalt</b> (Art. 33 IV GG, § 3 II BeamtStG): Übertragung hoheitlicher Aufgaben,<br>• <b>besetzbare Planstelle</b> (§ 49 LHO, § 20 GemHVO),<br>• <b>Staatsangehörigkeit</b> (§ 7 I 1 Nr. 1 BeamtStG): deutsch (Art. 116 GG), EU-Mitgliedstaat oder EWR-Vertragsstaat/anerkannter Drittstaat (Island, Liechtenstein, Norwegen, Schweiz),<br>• <b>Verfassungstreue</b> (§ 7 I 1 Nr. 2, § 33 I 3 BeamtStG; Art. 126 I LV): Gewähr, jederzeit für die fdGO einzutreten,<br>• <b>Eignung, Befähigung, fachliche Leistung</b> (Art. 33 II GG, § 9 BeamtStG): körperlich, geistig, gesundheitlich, charakterlich; Bestenauslese,<br>• Erscheinungsbild (§§ 7 I 2, 34 II BeamtStG), Geschäftsfähigkeit,<br>• <b>Höchstaltersgrenzen</b> (§ 19 I LBG): BaW <b>40.</b>, Probe/Lebenszeit <b>45. Lebensjahr</b> (Ausnahmen § 8 LbVO); Mindestalter grundsätzlich keines – kommunale Wahlbeamte: 18 Jahre (§ 119 LBG, §§ 53 III, 53a I GemO).<br><br><b>Besondere Voraussetzungen je nach Ernennungsart:</b><br>• Einstellung nur im <b>Einstiegsamt</b> (§ 19 II 1 LBG) + <b>Zugangsvoraussetzungen</b> (§ 15 bzw. § 18 LBG),<br>• Lebenszeit: <b>Probezeit</b> (§ 10 BeamtStG, § 20 LBG),<br>• Beförderung: § 21 II, III LBG (Beförderungsreife, Grenzen, Sprungverbot).",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "e_rechtmaessig", tone: "pos" },
        { label: "Eine Voraussetzung fehlt", next: "e_mangel", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 7 ff. BeamtStG",
      title: "Ernennung rechtmäßig",
      text: "Formelle und materielle Voraussetzungen liegen vor – die Ernennung kann durch Aushändigung der (korrekt formulierten) Urkunde vollzogen werden.\n\nCheckliste zum Abschluss:\n1. Urkunde nach dem 7-Schritte-Schema fertigen (Schema \"Ernennungsurkunde\"),\n2. Aushändigung von Hand zu Hand gegen Empfangsbekenntnis (oder eigenhändig zuzustellender Einschreibebrief mit Rückschein / PZU unter Ausschluss der Ersatzzustellung),\n3. Einwilligung des zu Ernennenden (widerspruchslose Entgegennahme),\n4. Planstelleneinweisung (§ 49 LHO/§ 20 GemHVO) – Besoldungsbeginn!,\n5. Diensteid unverzüglich nach Begründung (§ 38 BeamtStG, § 51 LBG),\n6. Stufenfestsetzung fürs Grundgehalt (§ 29 II LBesG – Fach Besoldungsrecht)."
    },

    e_formfehler: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 8, 11, 12 BeamtStG",
      title: "Formmangel: Fehlerfolge differenzieren",
      text: "Bei Fehlern im Zustandekommen ist nach der Fehlerfolge zu unterscheiden (Schema \"Fehlerfolgen der Ernennung\"):\n\n• fehlende DIENSTHERRNFÄHIGKEIT, fehlende eigenhändige UNTERSCHRIFT, fehlende EINWILLIGUNG, fehlerhafte AUSHÄNDIGUNG (einfacher Brief, Briefkasten!) → NICHTERNENNUNG (Nullum),\n• Verstoß gegen die FORMULIERUNGEN des § 8 II 2 oder fehlerhafte Urkundenform → NICHTIGKEIT (§ 11 I Nr. 1; heilbar § 11 II Nr. 1),\n• SACHLICH unzuständige Behörde → Nichtigkeit (§ 11 I Nr. 2; heilbar durch Bestätigung),\n• unterbliebene AUSSCHREIBUNG, fehlende PERSONALRATS- oder GREMIENbeteiligung → weder Nichtigkeits- noch Rücknahmegrund (KEIN Fall des § 12 I Nr. 4 – dort zählt nur LPA/Aufsichtsbehörde!): Die Ernennung ist fehlerhaft, aber WIRKSAM,\n• reine SCHREIBFEHLER/offenbare Unrichtigkeiten → jederzeit korrigierbar (Rechtsgedanke § 42 VwVfG)."
    },

    e_mangel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 7, 9 BeamtStG, § 19 LBG",
      title: "Materieller Mangel: Rechtsfolge nach Speziellrecht",
      text: "Fehlt eine materielle Voraussetzung, ist die Ernennung rechtswidrig – die RECHTSFOLGE richtet sich aber ausschließlich nach den §§ 11, 12, 8 BeamtStG (abschließend, verdrängen §§ 44 ff. VwVfG):\n\n• fehlende STAATSANGEHÖRIGKEIT (§ 7 I 1 Nr. 1) → NICHTIG (§ 11 I Nr. 3 Bst. a; Heilung nur über nachträgliche Ausnahme § 7 III),\n• keine Fähigkeit zur BEKLEIDUNG ÖFFENTLICHER ÄMTER (§ 45 StGB) → nichtig (§ 11 I Nr. 3 Bst. b, keine Heilung),\n• durch TÄUSCHUNG über Eignung/Verfassungstreue herbeigeführt → Rücknahme (§ 12 I Nr. 1),\n• ohne LPA-Mitwirkung (z. B. Einstellung im höheren Amt, § 19 II Nr. 4 LBG) → Rücknahme (§ 12 I Nr. 4),\n• Überschreitung des HÖCHSTALTERS, fehlende Laufbahnbefähigung, fehlende Planstelle, unterbliebene Probezeit → weder nichtig noch rücknehmbar: fehlerhaft, aber WIRKSAM (Ämterstabilität!).\n\nMerke: Andere als die in §§ 11, 12 BeamtStG genannten Mängel berühren die Gültigkeit der Ernennung nicht."
    }
  }
});
