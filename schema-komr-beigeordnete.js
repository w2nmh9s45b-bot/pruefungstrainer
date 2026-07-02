/*
 * Prüfungsschema: Wahl eines Beigeordneten (§§ 53a, 40 GemO)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "Schema Wahl eines Beigeordneten (§§ 53a, 40 GemO)" (vollständiges Vault-Schema)
 *  - "FS III - KomR - 05. Teilorgan Beigeordnete - Skript"
 *  - "KomR - FS III - LV_20 - PLE 14 Teilorgan_Beigeordnete - Bildung - Wahl und Ernennung"
 *  - Gesetze: GemO RLP §§ 40, 50-55 (Volltext geprüft); KWG § 4 II
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-beigeordnete",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Teilorgan Beigeordnete · Wahlen",
  title: "Wahl eines Beigeordneten (§§ 53a, 40 GemO)",
  description: "Vollprüfung der Beigeordnetenwahl: Zuständigkeit des Rates, Sitzungsverfahren, das dreistufige Wahlverfahren des § 40 III (Wiederholungswahl – Stichwahl – Los), allgemeine Wahlvoraussetzungen (Ausschreibung, Hauptsatzung), persönliche Wählbarkeit, Fehlerfolgen, Ernennung und Wahlbeschwerde.",
  start: "start",
  stations: [
    { id: "zust", label: "Zuständigkeit" },
    { id: "sitzung", label: "Sitzungsverfahren" },
    { id: "wahl", label: "Wahlverfahren § 40" },
    { id: "matr", label: "Materiell" },
    { id: "folge", label: "Fehlerfolgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Wahl rechtmäßig",
    neg: "Ergebnis: Wahl fehlerhaft/ungültig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zust",
      kind: "frage",
      norm: "§ 53a I 1 i. V. m. § 40 GemO",
      title: "Wer hat den Beigeordneten gewählt?",
      text: "Einleitungssatz: „Die Wahl des Beigeordneten ist rechtmäßig, wenn sie nicht an formellen oder materiellen Fehlern leidet.“ Der Beigeordnete ist Teilorgan des Organs Bürgermeister (§§ 50 ff. GemO); seine Bestellung vollzieht sich zweistufig: Wahl durch den Rat, dann Ernennung zum Beamten (§ 54 GemO). Die Wahl ist ein personenbezogener Beschluss (VV Nr. 2 zu § 40 GemO).",
      def: "<b>Zuständigkeit:</b><br>• Verbandskompetenz: Personalhoheit der Gemeinde (Art. 28 II GG, Art. 49 LV, § 2 I GemO).<br>• Organkompetenz: AUSSCHLIESSLICH der Gemeinderat (§ 53a I 1 i. V. m. § 40 GemO – spezialgesetzlich; zudem Ratsvorbehalt § 32 II Nr. 7). Nicht delegierbar – kein Ausschuss, kein Bürgermeister.",
      options: [
        { label: "Der Gemeinderat", next: "q_sitzung", tone: "pos" },
        { label: "Ein Ausschuss oder der Bürgermeister", next: "e_unzustaendig", tone: "neg" }
      ]
    },

    q_sitzung: {
      station: "sitzung",
      kind: "frage",
      norm: "§§ 34, 35, 39 GemO",
      title: "Sitzungsverfahren: Einberufung, Tagesordnung, Öffentlichkeit, Beschlussfähigkeit?",
      def: "<b>Prüfpunkte (wie beim Sachbeschluss):</b><br>• Einberufung § 34 (Zuständigkeit, Personenkreis, Form, Frist – 4 volle Kalendertage –, öffentliche Bekanntmachung),<br>• TOP „Wahl des/der Beigeordneten“ hinreichend konkret; bei mehreren Beigeordneten je Vertretungsrang GETRENNTE Wahlgänge; die Vertretungsreihenfolge ist VOR der Wahl festzusetzen (§ 50 II 4), Hauptamtliche vor Ehrenamtlichen (§ 50 II 5); der Erste Beigeordnete ist stets eigens zu wählen (VV Nr. 2 zu § 53a),<br>• ÖFFENTLICHE Sitzung – ausdrücklich § 40 V GemO (geheim ist nur die Stimmabgabe!),<br>• Beschlussfähigkeit § 39 (gesetzliche Zahl vorab bestimmen).",
      hint: "Mitwirkungsverbot: Bei Wahlen gilt § 22 GemO NICHT (§ 22 III) – auch der Kandidat aus der Ratsmitte darf mitstimmen, sogar für sich selbst. In der Klausur genügt ein Satz.",
      options: [
        { label: "Ja, Sitzungsverfahren ordnungsgemäß", next: "q_vorschlag", tone: "pos" },
        { label: "Nein, Fehler im Sitzungsverfahren", detail: "Fehlerfolge über die Vollprüfung Ratsbeschluss klären; bei Wahlen zusätzlich tatsächliche Ergebnisauswirkung nötig", next: "q_kausal", set: { fehler: "sitzung" }, tone: "neg" }
      ]
    },

    q_vorschlag: {
      station: "wahl",
      kind: "frage",
      norm: "§ 40 II GemO",
      title: "Wahlvorschlag: Wurden nur vorgeschlagene Personen gewählt?",
      def: "Wählbar ist nur, wer dem Gemeinderat VOR der Wahl vorgeschlagen wurde (§ 40 II GemO). Ein Ratsmandat ist nicht erforderlich – auch Außenstehende sind wählbar.<br><b>Eventualität „Rücktritt“:</b> Ein Bewerber kann seine Kandidatur nicht einfach zurückziehen, um den Wahlgang zu verengen – wird er im Wiederholungswahlgang weggelassen, liegt ein Wahlverfahrensfehler vor.",
      options: [
        { label: "Ja", next: "q_form_stimmabgabe", tone: "pos" },
        { label: "Nein, nicht vorgeschlagene Person gewählt / Bewerber übergangen", next: "q_kausal", set: { fehler: "vorschlag" }, tone: "neg" }
      ]
    },

    q_form_stimmabgabe: {
      station: "wahl",
      kind: "frage",
      norm: "§ 40 V GemO",
      title: "Form der Stimmabgabe: geheime Wahl durch Stimmzettel?",
      text: "Beigeordnete werden in öffentlicher Sitzung durch Stimmzettel in GEHEIMER Abstimmung gewählt (§ 40 V GemO). Anders als bei „sonstigen Wahlen“ kann der Rat hier NICHT offen abstimmen – eine offene Abstimmung über einen Beigeordneten ist stets ein Verfahrensfehler.",
      options: [
        { label: "Ja, geheime Wahl per Stimmzettel", next: "q_mehrheit", tone: "pos" },
        { label: "Nein, offen abgestimmt", next: "q_kausal", set: { fehler: "form" }, tone: "neg" }
      ]
    },

    q_mehrheit: {
      station: "wahl",
      kind: "frage",
      norm: "§ 40 III GemO",
      title: "Wurde das dreistufige Mehrheitsverfahren eingehalten?",
      def: "<b>Die Stufen des § 40 III GemO (nie überspringen!):</b><br>1. <b>1. Wahlgang:</b> gewählt, wer MEHR ALS DIE HÄLFTE der Stimmen erhält.<br>2. <b>Wiederholungswahl</b> (S. 2): erreicht niemand die Mehrheit, ist die Wahl zu wiederholen – als VOLLER Wahlgang mit ALLEN Vorgeschlagenen (nicht auf zwei verengt!).<br>3. <b>Stichwahl</b> (S. 3): erst wenn auch dann niemand die Mehrheit erhält – zwischen den beiden Stimmhöchsten; bei Gleichstand um Platz 2 entscheidet das Los, wer in die Stichwahl kommt.<br>4. <b>Losentscheid</b> (S. 4, 5): bei erneutem Gleichstand entscheidet das Los, wer gewählt ist – gezogen durch den Vorsitzenden.<br><b>Auszählung (§ 40 IV):</b> Enthaltungen und ungültige Stimmen zählen NICHT mit; unbeschriebener Stimmzettel = Enthaltung; Zusatz/Verwahrung/Vorbehalt = ungültig; nicht vorgeschlagene Person = ungültig.",
      hint: "Typische Fehler: Stichwahl statt Wiederholungswahl im 2. Wahlgang · Los statt Stichwahl · Stichwahl verweigert. Das Gesamtverfahren ist ein EINHEITLICHES Verfahren (Unterbrechung/Vertagung möglich); das Ergebnis stellt der Vorsitzende fest.",
      options: [
        { label: "Ja, Stufenfolge und Auszählung korrekt", next: "q_ausschreibung", tone: "pos" },
        { label: "Nein, Stufenfolge verletzt oder falsch ausgezählt", next: "q_kausal", set: { fehler: "mehrheit" }, tone: "neg" }
      ]
    },

    q_ausschreibung: {
      station: "matr",
      kind: "frage",
      norm: "§ 53a IV, V; § 50 I 2; § 51 II GemO",
      title: "Allgemeine (bewerberunabhängige) Wahlvoraussetzungen erfüllt?",
      def: "<b>1. Stellenausschreibung – nur bei HAUPTAMTLICHEN Beigeordneten (§ 53a IV):</b> rechtzeitig vor der Wahl öffentlich; wählbar nur, wer sich fristgerecht beworben hat; keine Wahl binnen 9 Monaten oder wesentliche Änderung → erneute Ausschreibung. VERZICHT durch Beschluss mit 2/3 der gesetzlichen Zahl möglich (§ 53a V). Ehrenamtliche: keine Ausschreibung.<br><b>2. Hauptsatzungsregelung (muss bei der Wahl in Kraft sein):</b> mehr als zwei Beigeordnete → § 50 I 2 (Einwohnerstaffel, max. 7); Hauptamtlichkeit → § 51 II (bzw. § 64 II VG).<br><b>3. Vertretungsreihenfolge</b> vor der Wahl festgesetzt (§ 50 II 4).<br><b>4. Zeitpunkt (§ 53a II, III):</b> ehrenamtlich „soll“ binnen 8 Wochen; hauptamtlich frühestens 9 / spätestens 3 Monate vor Freiwerden bzw. 3 Monate danach – ORDNUNGSFRISTEN (Verstoß unschädlich).",
      options: [
        { label: "Ja, alle allgemeinen Voraussetzungen (+)", next: "q_person", tone: "pos" },
        { label: "Nein", detail: "z. B. fehlende Ausschreibung, Hauptsatzung nicht in Kraft, vierter Beigeordneter unter 25.000 EW", next: "e_matr_allg", tone: "neg" },
        { label: "Nur eine Ordnungsfrist (§ 53a II/III) versäumt", next: "q_person", tone: "warn" }
      ]
    },

    q_person: {
      station: "matr",
      kind: "frage",
      norm: "§ 53a I 2 i. V. m. § 53 III GemO",
      title: "Persönliche (bewerberabhängige) Wählbarkeitsvoraussetzungen erfüllt?",
      def: "<b>Zum Wahltag (kumulativ):</b><br>• Deutscher (Art. 116 GG) oder Unionsbürger mit Wohnsitz im Bundesgebiet,<br>• 18. Lebensjahr vollendet,<br>• hauptamtlich: nicht das 65. Lebensjahr vollendet (§ 53 III 2),<br>• kein Wählbarkeitsausschluss nach § 4 II KWG,<br>• Gewähr für das Eintreten für die fdGO,<br>• Bürgerstatus (§ 18 GemO) – NUR für EHRENAMTLICHE Beigeordnete (Dauervoraussetzung bis Amtsende).<br><b>Abgrenzung:</b> Die Inkompatibilitäten des § 53 IV Nr. 2–6 sind KEINE Wählbarkeits-, sondern ERNENNUNGSHINDERNISSE (nach der Wahl beseitigbar); nur der Bürgerstatus (Nr. 1) ist zugleich Wählbarkeitsvoraussetzung.",
      options: [
        { label: "Ja, wählbar", next: "e_rechtmaessig", tone: "pos" },
        { label: "Nein", next: "e_matr_person", tone: "neg" }
      ]
    },

    q_kausal: {
      station: "folge",
      kind: "frage",
      norm: "Fehlerfolgen bei Wahlen",
      title: "Hat sich der Verfahrensfehler TATSÄCHLICH auf das Wahlergebnis ausgewirkt?",
      def: "<b>Fehlerfolgenlehre bei Wahlen:</b><br>1. Spezialgesetzliche Regelung? (§ 22 VI – hier wegen § 22 III regelmäßig nicht einschlägig.)<br>2. Allgemein: Verstoß gegen wesentliche Verfahrensvorschrift → grundsätzlich Ungültigkeit; bloße Ordnungsvorschrift (z. B. Ordnungsfristen § 53a II/III) → unschädlich.<br>3. <b>Besonderheit:</b> Bei Wahlbeschlüssen genügt die EIGNUNG des Fehlers nicht – erforderlich ist die TATSÄCHLICHE Auswirkung auf das Wahlergebnis.",
      options: [
        { label: "Ja, tatsächliche Auswirkung", next: "e_ungueltig", tone: "neg" },
        { label: "Nein, keine Auswirkung", next: "e_gueltig_trotz", tone: "warn" },
        { label: "Es war ohnehin nur eine Ordnungsvorschrift verletzt", detail: "Prüfung wird an der Fehlerstelle fortgesetzt", next: "@weiter_nach_fehler", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 53a, 40 GemO",
      title: "Wahl des Beigeordneten rechtmäßig",
      text: "Die Wahl ist formell (Zuständigkeit, Sitzungs- und Wahlverfahren) und materiell (allgemeine Wahlvoraussetzungen, persönliche Wählbarkeit) rechtmäßig.\n\nEs folgt die ERNENNUNG (§ 54 GemO): hauptamtlich → Beamter auf Zeit (Amtszeit 8 Jahre, § 52), ehrenamtlich → Ehrenbeamter (Amtszeit = Wahlzeit des Rates, 5 Jahre). Ernennungshindernisse des § 53 IV Nr. 1–6 (via § 53a I 2) beachten – eine dennoch vorgenommene Ernennung ist nichtig (§ 7 II LBG). Amtsübergabe: Urkunde, Vereidigung und Einführung in öffentlicher Sitzung (§ 54 I 2; entfällt bei Wiederwahl).\n\nRechtsschutz gegen die Wahl: Wahlbeschwerde jedes Ratsmitglieds binnen zwei Wochen bei der Aufsichtsbehörde (§ 43 GemO)."
    },

    e_unzustaendig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 53a I 1, § 32 II Nr. 7 GemO",
      title: "Wahl unwirksam: falsches Organ",
      text: "Die Wahl der Beigeordneten obliegt ausschließlich dem Gemeinderat (§ 53a I 1 i. V. m. § 40 GemO; Ratsvorbehalt § 32 II Nr. 7). Eine „Wahl“ durch Ausschuss oder Bürgermeister ist kompetenzwidrig und unwirksam; eine darauf gestützte Ernennung wäre nichtig (§ 11 I Nr. 3c BeamtStG)."
    },

    e_ungueltig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 GemO, § 43 GemO",
      title: "Wahl ungültig: Verfahrensfehler mit Ergebnisauswirkung",
      text: "Der Verstoß gegen eine wesentliche Verfahrensvorschrift hat sich tatsächlich auf das Wahlergebnis ausgewirkt – die Wahl ist rechtswidrig und ungültig.\n\nFolgen:\n• Eine gleichwohl vorgenommene Ernennung ist nichtig (§ 11 I Nr. 3c BeamtStG).\n• Rechtsschutz: Wahlbeschwerde jedes Ratsmitglieds binnen zwei Wochen bei der Aufsichtsbehörde (§ 43 GemO); daneben Aussetzung durch den BM (§ 42) und Beanstandung durch die Aufsichtsbehörde (§ 121).\n• Die Wahl ist fehlerfrei zu wiederholen."
    },

    e_gueltig_trotz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Fehlerfolgen bei Wahlen",
      title: "Wahl trotz Verfahrensfehlers gültig",
      text: "Der Verfahrensfehler hat sich nicht tatsächlich auf das Wahlergebnis ausgewirkt – anders als beim Sachbeschluss bleibt die Wahl deshalb gültig (nur fehlerhaft zustande gekommen).\n\nEine Wahlbeschwerde (§ 43 GemO) wäre unbegründet."
    },

    e_matr_allg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 50 I 2, 51 II, 53a IV GemO",
      title: "Wahl materiell rechtswidrig: allgemeine Wahlvoraussetzungen fehlen",
      text: "Die von der Gemeinde erst zu schaffenden (bewerberunabhängigen) Wahlvoraussetzungen fehlen – z. B. keine (wirksame) Hauptsatzungsregelung für mehr als zwei Beigeordnete oder für die Hauptamtlichkeit, unterbliebene Ausschreibung ohne 2/3-Verzichtsbeschluss (§ 53a V), oder die Einwohnerstaffel des § 50 I 2 GemO ist überschritten (Klassiker: vierter Beigeordneter in einer Gemeinde unter 25.000 Einwohnern).\n\nMaterielle Fehler führen stets zur Rechtswidrigkeit und Unwirksamkeit – keine Heilung. Die allgemeinen Wahlvoraussetzungen sind als „verfahrensrechtliche Gründe“ auch mit der Wahlbeschwerde (§ 43 GemO) rügefähig."
    },

    e_matr_person: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 53a I 2, § 53 III GemO",
      title: "Wahl materiell rechtswidrig: Bewerber nicht wählbar",
      text: "Der Gewählte erfüllt die persönlichen Wählbarkeitsvoraussetzungen (§ 53a I 2 i. V. m. § 53 III GemO, § 18 GemO) nicht. Die Wahl ist materiell rechtswidrig; eine Ernennung wäre nichtig.\n\nACHTUNG für die Wahlbeschwerde: Die persönlichen Wählbarkeitsvoraussetzungen sind KEINE verfahrensrechtlichen Gründe – sie können mit der Wahlbeschwerde nach § 43 GemO NICHT gerügt werden. Korrektur erfolgt über die Kommunalaufsicht (§ 121 GemO) bzw. das Ernennungsverfahren."
    }
  },

  routers: {
    "@weiter_nach_fehler": function (flags) {
      switch (flags.fehler) {
        case "sitzung": return "q_vorschlag";
        case "vorschlag": return "q_form_stimmabgabe";
        case "form": return "q_mehrheit";
        case "mehrheit": return "q_ausschreibung";
        default: return "q_vorschlag";
      }
    }
  }
});
