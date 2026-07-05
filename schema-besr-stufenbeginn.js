/*
 * Prüfungsschema: Beginn des Stufenaufstiegs und Vorverlegung (§ 29 II, § 30 I LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 59-97
 *    (Erfahrungszeiten, Regelbeginn, Vorverlegung, § 30 I im Einzelnen)
 *  - Gesetze: LBesG §§ 29 I-II, 30 I; § 20 LBesG (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-stufenbeginn",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundgehalt",
  title: "Beginn des Stufenaufstiegs und Vorverlegung (§§ 29 II, 30 I LBesG)",
  description: "Zweiter Faktor des Grundgehalts: Regelbeginn des Stufenaufstiegs (erste Ernennung mit Anspruch auf Dienstbezüge, § 29 II 1) und die Vorverlegung um berücksichtigungsfähige Zeiten (§ 29 II 2 i. V. m. § 30 I LBesG) – der Klausurschwerpunkt im Besoldungsrecht.",
  start: "start",
  stations: [
    { id: "einstieg", label: "Erfahrungszeit" },
    { id: "regel", label: "Regelbeginn" },
    { id: "vorverlegung", label: "Vorverlegung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stufe festgesetzt",
    neg: "Ergebnis: keine Anrechnung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "einstieg",
      kind: "frage",
      norm: "§ 29 I LBesG",
      title: "Einstieg: Erfahrungsprinzip und Erfahrungszeiten",
      def: "Das Grundgehalt wird (in der LBesO A) <b>nach Stufen</b> bemessen (§ 29 I 1 LBesG). Das Aufsteigen bestimmt sich nach Zeiten mit dienstlicher Erfahrung – <b>Erfahrungszeiten</b> (§ 29 I 2 LBesG); das <b>Erfahrungsprinzip</b> löste zum 01.07.2013 das Senioritätsprinzip (Lebensalter) ab.<br><br><b>Erfahrungszeiten (§ 29 I 3 LBesG)</b> sind Zeiten<br>• im Dienst eines <b>öffentlich-rechtlichen Dienstherrn</b> (§ 20 LBesG: Bund, Länder, Gemeinden/GV, andere KdöR/AdöR/SdöR – ohne Religionsgesellschaften),<br>• in einem <b>Beamten- oder Richterverhältnis</b> (kein Arbeits-, kein Soldatenverhältnis – die können aber über § 30 I berücksichtigt werden),<br>• mit Anspruch auf <b>DIENSTbezüge</b> (§ 3 I LBesG) – Zeiten als Beamter auf Widerruf (Sonstige Bezüge!) und als Ehrenbeamter zählen NICHT.<br><br><b>Klausurtipp:</b> § 29 I 1–3 LBesG ist immer der Einstieg ins Thema Stufe – nur <b>zitieren</b>, nicht subsumieren; danach direkt weiter mit § 29 II 1 LBesG. Die LBesO B hat keine Stufen; hier geht es nur um die LBesO A.",
      options: [
        { label: "Weiter: Regelbeginn bestimmen", next: "q_regelbeginn", tone: "pos" }
      ]
    },

    q_regelbeginn: {
      station: "regel",
      kind: "frage",
      norm: "§ 29 II 1 LBesG",
      title: "Regelbeginn: Wann war die ERSTE Ernennung mit Anspruch auf DIENSTBEZÜGE?",
      def: "Das Aufsteigen beginnt <b>mit dem Anfangsgrundgehalt der jeweiligen Besoldungsgruppe</b> mit Wirkung <b>vom Ersten des Monats</b>, in dem die <b>erste Ernennung mit Anspruch auf Dienstbezüge</b> bei einem öffentlich-rechtlichen Dienstherrn wirksam wird (§ 29 II 1 LBesG).<br><br><b>Tatbestand:</b><br>• I. d. R. die Ernennung zum <b>Beamten auf Probe</b> (erste Amtsverleihung, § 8 III BeamtStG); ausnahmsweise BaL/BaZ, wenn keine Probezeit nötig (§ 20 LBG).<br>• Die Ernennung zum <b>Anwärter ist NIE die erste Ernennung</b> i. S. d. Norm (Anwärterbezüge = Sonstige Bezüge, § 3 II LBesG)!<br>• Auch Ernennungen <b>außerhalb von RLP</b> zählen (Bund, anderes Land, Kommune eines anderen Landes) – nur ein Beamten-/Richterverhältnis muss es sein.<br><br><b>Rechtsfolge:</b><br>• Beginn <b>am Monatsersten</b> (auch bei Ernennung mitten im Monat – nicht mit dem Besoldungsbeginn nach § 4 II 1 verwechseln!),<br>• mit dem <b>Anfangsgrundgehalt</b> = erste betraglich besetzte Stufe der Tabelle (Anlage 6): A 5–A 7 seit 01.01.2022 <b>Stufe 2</b>; A 9 <b>Stufe 2</b>; A 12–A 14 seit 01.07.2024 <b>Stufe 4</b> (A 13: Jurist nach 2. Examen).<br>• Der Regelbeginn gilt „<b>ein Leben lang</b>“ – er ändert sich auch bei neuen Beamtenverhältnissen oder Dienstherrnwechseln nicht.<br>• Die Festsetzung wird schriftlich/elektronisch mitgeteilt (§ 29 II 4 LBesG) – ein <b>VA</b>: kontrollieren, ggf. Widerspruch!",
      options: [
        { label: "Regelbeginn steht – Vorverlegung prüfen", next: "q_vorverlegung", tone: "pos" }
      ]
    },

    q_vorverlegung: {
      station: "vorverlegung",
      kind: "frage",
      norm: "§ 29 II 2, § 30 I LBesG",
      title: "Vorverlegung: Liegen berücksichtigungsfähige Zeiten VOR dem Regelbeginn vor?",
      def: "Der Beginn wird um die zum Einstellungszeitpunkt vorliegenden, nach <b>§ 30 I</b> berücksichtigungsfähigen Zeiten <b>vorverlegt</b> (§ 29 II 2 LBesG). Der Beamte wird so gestellt, als wäre er früher eingetreten → Einstieg ggf. in einer <b>höheren Stufe</b> und/oder frühere Stufensteigerungen. <b>Häufiger Klausurschwerpunkt!</b><br><br>§ 30 I LBesG unterscheidet drei Kategorien:<br>• <b>S. 1: zwingende Anrechnung</b> (Nr. 1–8, „werden berücksichtigt“),<br>• <b>S. 2: fakultative Anrechnung auf Antrag</b> (Ermessen),<br>• <b>S. 3: keine Anrechnung</b> (Zeiten, die schon zur Einstellung im Beförderungsamt geführt haben, § 19 II LBG – Verbot der Doppelverwendung).<br><br><b>Berechnung (§ 30 I 5 LBesG):</b> Zeiten nach Jahren und Monaten; mehrere Zeiten erst addieren, dann <b>auf volle Monate AUFrunden</b> (30 Tage = 1 Monat; FSJ von 11 Monaten und 15 Tagen → 12 Monate). Die Zeiten werden durch Unterbrechungen nach § 30 II nicht vermindert (2. Hs. – z. B. Elternzeit innerhalb einer anrechenbaren Beschäftigung: dann bis zu 3 Jahre Kinderbetreuung statt nur 1 Jahr).",
      options: [
        { label: "Welche Zeit liegt vor?", next: "q_zeitart", tone: "pos" },
        { label: "Keine Vorzeiten", next: "e_regelbeginn", tone: "neutral" }
      ]
    },

    q_zeitart: {
      station: "vorverlegung",
      kind: "frage",
      norm: "§ 30 I LBesG",
      title: "Um welche Art von Vorzeit handelt es sich?",
      def: "<b>Zwingend (§ 30 I 1):</b><br>• <b>Nr. 1:</b> hauptberufliche Tätigkeit als <b>Kirchenbeamter/Pfarrer</b> (weiterlesen! NICHT die Anwärterzeit hierunter subsumieren),<br>• <b>Nr. 2:</b> <b>gleichwertige</b> hauptberufliche Tätigkeit im <b>privatrechtlichen Arbeitsverhältnis bei einem öffentlich-rechtlichen Dienstherrn</b> (§ 20), die nicht Voraussetzung für die Laufbahnzulassung ist – die wichtigste Alternative!,<br>• <b>Nr. 3:</b> Zeiten als <b>Soldat auf Zeit/Berufssoldat</b> (komplett, Dienstgrad egal),<br>• <b>Nr. 4:</b> <b>Wehr-/Zivil-/Bundesfreiwilligendienst, Entwicklungsdienst, FSJ/FÖJ</b> – mind. 6 Monate, zusammen max. 2 Jahre,<br>• <b>Nr. 5:</b> <b>Kinderbetreuung bis 1 Jahr pro Kind</b> (Zusammenwohnen genügt, Berufstätigkeit unschädlich; Verbot der Doppelanrechnung),<br>• <b>Nr. 6:</b> <b>Pflege</b> naher Angehöriger (ärztl. Gutachten) bis 1 Jahr je Angehörigem,<br>• Nr. 7: Eignungsübung; Nr. 8: Verfolgungszeiten (BerRehaG).<br><br><b>Auf Antrag (§ 30 I 2):</b> weitere hauptberufliche Zeiten (auch <b>außerhalb</b> des öD, auch <b>selbstständig</b>), nicht laufbahnnotwendig, <b>förderlich</b> für die Verwendung, auf Qualifikationsebene eines Ausbildungsberufs, mind. 6 Monate ununterbrochen → <b>Ermessen</b> (ganz/teilweise).",
      options: [
        { label: "Gleichwertige öD-Beschäftigung (Nr. 2)", next: "q_nr2", tone: "pos" },
        { label: "Andere zwingende Zeit (Nr. 1, 3-8)", next: "e_zwingend", tone: "pos" },
        { label: "Förderliche Zeit auf Antrag (S. 2)", next: "q_satz2", tone: "neutral" },
        { label: "Schon fürs Beförderungsamt verbraucht", next: "e_keine", tone: "neg" }
      ]
    },

    q_nr2: {
      station: "vorverlegung",
      kind: "frage",
      norm: "§ 30 I 1 Nr. 2 LBesG",
      title: "Nr. 2 durchprüfen: gleichwertig – hauptberuflich – öffentlicher Dienst – nicht laufbahnnotwendig",
      def: "Alle vier Merkmale sauber prüfen:<br><br>• <b>Hauptberuflich:</b> die Tätigkeit prägt den Beruf (kein Minijob/keine studentische Aushilfe),<br>• <b>privatrechtliches Arbeitsverhältnis bei einem öffentlich-rechtlichen Dienstherrn</b> (§ 20 LBesG) – z. B. Beschäftigter nach TVöD bei Land/Kommune,<br>• <b>GLEICHWERTIG:</b> die frühere Tätigkeit muss der Schwierigkeit des Einstiegsamtes entsprechen (gleichartig nicht nötig!). <b>Anhaltspunkt</b> (akzeptiert, vgl. § 47 II 2 Nr. 2 GemO, VV): Eingruppierung ab <b>E 9b ≙ drittes EA (A 9)</b>; für A 6 genügt <b>E 5</b>. Eine E-6-Beschäftigung ist also gleichwertig zu A 6, aber NICHT zu A 9!,<br>• <b>nicht Voraussetzung für die Zulassung zur Laufbahn:</b> Bei Laufbahnbewerbern <b>mit Vorbereitungsdienst stets erfüllt</b> – Formulierung: „Aufgrund des geleisteten Vorbereitungsdienstes ist die in Rede stehende Zeit nicht Voraussetzung für die Zulassung zur Laufbahn.“ (Anders bei Ersatz des Vorbereitungsdienstes durch hauptberufliche Zeiten, § 15 IV/V LBG, § 18 LbVO.)",
      options: [
        { label: "Alle Merkmale (+) – zwingende Anrechnung", next: "e_zwingend", tone: "pos" },
        { label: "Nicht gleichwertig / außerhalb öD", next: "q_satz2", tone: "neutral" }
      ]
    },

    q_satz2: {
      station: "vorverlegung",
      kind: "frage",
      norm: "§ 30 I 2 LBesG",
      title: "Auffangtatbestand: förderliche hauptberufliche Zeiten (Antrag + Ermessen)",
      def: "Scheitert Nr. 2 (nicht gleichwertig oder außerhalb des öD), bleibt § 30 I 2 LBesG:<br><br><b>Tatbestand:</b><br>• weitere <b>hauptberufliche</b> Zeiten (innerhalb ODER außerhalb des öD, auch <b>selbstständige</b> Tätigkeit),<br>• <b>nicht Voraussetzung</b> für den Erwerb der Laufbahnbefähigung,<br>• für die Verwendung <b>förderlich</b> (nützlich für die jetzige Tätigkeit),<br>• auf der <b>Qualifikationsebene eines Ausbildungsberufs</b>,<br>• über <b>mind. 6 Monate ohne Unterbrechung</b>,<br>• <b>Antrag</b> des Beamten.<br><br><b>Rechtsfolge:</b> Die Zeiten <b>können ganz oder teilweise</b> anerkannt werden – pflichtgemäßes <b>Ermessen der obersten Dienstbehörde</b> (§ 30 I 4; je förderlicher, desto umfangreicher). In Klausuren werden Antrag und Ermessensausübung vorgegeben.<br><br><b>Skript-Beispiele:</b> 4 Jahre Verwaltungsfachangestellter in E 6 vor Einstellung in A 9 → Nr. 2 scheitert an der Gleichwertigkeit, aber über S. 2 werden 2 Jahre (50 %) anerkannt. – 6 Jahre Bankkaufmann (Privatwirtschaft) vor Einstellung in A 6 → 100 % als förderlich anerkannt → Einstieg in A 6 Stufe 5.",
      options: [
        { label: "Antrag + Ermessen zugunsten", next: "e_antrag", tone: "pos" },
        { label: "Tatbestand scheitert", next: "e_keine", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_regelbeginn: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 II 1 LBesG",
      title: "Regelbeginn ohne Vorverlegung",
      text: "Der Stufenaufstieg beginnt am Ersten des Monats der ersten Ernennung mit Anspruch auf Dienstbezüge – mit dem Anfangsgrundgehalt (erste betraglich besetzte Stufe, z. B. A 9 Stufe 2).\n\nFormulierungsbaustein (Skript):\n\"Nach § 29 II 1 LBesG beginnt das Aufsteigen in den Stufen mit dem Anfangsgrundgehalt der jeweiligen Besoldungsgruppe mit Wirkung vom Ersten des Monats, in dem die erste Ernennung mit Anspruch auf Dienstbezüge bei einem öffentlich-rechtlichen Dienstherrn wirksam wird. Die Ernennung zum Anwärter am [Datum] stellt nicht die erste Ernennung in diesem Sinne dar, da der Beamte im Beamtenverhältnis auf Widerruf Anspruch auf Anwärterbezüge (§§ 57 ff. LBesG) und damit auf Sonstige Bezüge (§ 3 II LBesG) hatte. Mit der Ernennung in das Beamtenverhältnis auf Probe am [Datum] beim öffentlich-rechtlichen Dienstherrn ... (§ 20 LBesG) hat der Beamte erstmals Anspruch auf Dienstbezüge (§ 3 I LBesG). Der Stufenaufstieg beginnt somit an diesem Tag [= am Ersten dieses Monats].\"\n\nAb dem Beginn laufen die Stufenlaufzeiten des § 29 III 1 LBesG (§ 29 II 3 LBesG) – Schema \"Stufenaufstieg und Hemmung\"."
    },

    e_zwingend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 II 2, § 30 I 1 LBesG",
      title: "Zwingende Vorverlegung",
      text: "Die Zeiten nach § 30 I 1 LBesG MÜSSEN angerechnet werden: Der Regelbeginn wird um die (addierten, auf volle Monate aufgerundeten) Zeiten vorverlegt. Ausgehend vom neuen Beginndatum bestimmen sich die Stufenlaufzeiten nach § 29 III 1 LBesG (§ 29 II 3 LBesG) – daraus ergibt sich die Beginnstufe.\n\nRechenbeispiele (Stufenlaufzeiten: Stufen 1-4 je 2 Jahre, 5-8 je 3 Jahre):\n• Regelbeginn 01.07.2025 in A 9 Stufe 2 + 6 Jahre Vorzeiten → Beginn 01.07.2019 → Einstieg am 01.07.2025 in A 9 Stufe 5.\n• Regelbeginn 01.07.2023 in A 6 Stufe 2 + 1 Jahr → Beginn 01.07.2022 → Einstieg in Stufe 2, aber Aufstieg in Stufe 3 schon nach einem weiteren Jahr.\n• 12 Jahre Soldat auf Zeit + 8-jährige Tochter → 13 Jahre (Nr. 3 + Nr. 5; gleichzeitiger Vorbereitungsdienst während der Kinderbetreuung unschädlich).\n\nMerke: Auch Lücken in der alten Tabelle sind egal – gerechnet wird mit den heutigen Stufenlaufzeiten ab dem (fiktiven) Beginn."
    },

    e_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 II 2, § 30 I 2 LBesG",
      title: "Vorverlegung auf Antrag (Ermessen)",
      text: "Die oberste Dienstbehörde erkennt die förderlichen hauptberuflichen Zeiten ganz oder teilweise an (§ 30 I 2, 4 LBesG); der Regelbeginn wird entsprechend vorverlegt und die Beginnstufe nach den Stufenlaufzeiten des § 29 III 1 LBesG (§ 29 II 3 LBesG) ermittelt.\n\nPrüfungsaufbau in der Klausur:\n1. Regelbeginn nach § 29 II 1 LBesG feststellen (ausformulieren!),\n2. Vorverlegung prüfen: erst § 30 I 1 Nr. 2 (scheitert z. B. an Gleichwertigkeit oder öD), dann § 30 I 2 – ALLE Tatbestandsmerkmale gründlich (hauptberuflich, nicht laufbahnnotwendig, förderlich, Qualifikationsebene Ausbildungsberuf, 6 Monate ununterbrochen, Antrag),\n3. Ermessensentscheidung (in der Klausur vorgegeben) übernehmen,\n4. neues Beginndatum + Beginnstufe berechnen.\n\nBeachte § 30 I 5 2. Hs.: Liegt INNERHALB der anerkannten Zeit eine Unterbrechung (z. B. Elternzeit), vermindert sie die Anrechnung nicht – für Kinderbetreuung innerhalb einer berücksichtigungsfähigen Zeit gelten dann bis zu 3 Jahre (§ 30 II Nr. 2) statt nur 1 Jahr (§ 30 I 1 Nr. 5)."
    },

    e_keine: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 30 I 3 LBesG",
      title: "Keine Anrechnung",
      text: "Die Zeit wird nicht berücksichtigt. Wichtigster Fall (§ 30 I 3 LBesG): Zeiten, die nach § 19 II LBG bereits zu einer EINSTELLUNG IM BEFÖRDERUNGSAMT geführt haben – die berufliche Erfahrung ist dann \"verbraucht\" und darf nicht doppelt (auch noch für die Stufe) verwendet werden.\n\nWeitere Nicht-Fälle aus dem Besoldungsquiz (Übung 16):\n• studentische Hilfskraft (nicht hauptberuflich),\n• Entwicklungshelfer unter 6 Monaten (§ 30 I 1 Nr. 4 verlangt mind. 6 Monate),\n• Pflege der Großmutter (Großeltern stehen NICHT im abschließenden Angehörigenkatalog der Nr. 6: Eltern, Schwiegereltern, Ehegatten, Lebenspartner, Geschwister, Kinder),\n• Anwärterzeit (weder Nr. 1 noch sonst anrechenbar – Sonstige Bezüge).\n\nEs bleibt beim Regelbeginn nach § 29 II 1 LBesG.\n\nPraxis-Tipp aus dem Skript: Bei Einstellung im Beförderungsamt ggf. Vergleichsberechnung mit einer Einstellung im Einstiegsamt + Vorverlegung + vorzeitiger Beförderung (§ 21 II 1 Nr. 1 LBG) anstellen, um den Beamten nicht schlechter zu stellen."
    }
  }
});
