/*
 * Prüfungsschema: Maßnahmen der Staatsaufsicht / Kommunalaufsicht (§§ 117 ff. GemO)
 * Fach: Kommunalrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS I):
 *  - "08-09 PLE Staatsaufsicht: Kommunalaufsicht/Sonderaufsicht/Fachaufsicht"
 *  - "10-12 PLE Aufsichtsbehörden, Mittel der Kommunalaufsicht" (inkl. Prüfschemata
 *    Beanstandung/Anordnung/Ersatzvornahme nach Kommunalverfassungsrecht RLP)
 *  - "13 PLE Rechtsschutz gegen Maßnahmen der Staatsaufsicht"
 *  - Gesetze: GemO RLP §§ 117-126 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-kommunalaufsicht",
  subject: "Kommunalrecht",
  fs: ["FS1"],
  area: "Staatsaufsicht",
  title: "Maßnahmen der Kommunalaufsicht (§§ 117 ff. GemO)",
  description: "Aufsichtsart bestimmen (Kommunal-, Sonder-, Fachaufsicht), zuständige Behörde (§ 118 GemO), das richtige Aufsichtsmittel (§§ 119–125 GemO) mit Tatbestand und Ermessen prüfen und den Rechtsschutz der Gemeinde darstellen.",
  start: "start",
  stations: [
    { id: "art", label: "Aufsichtsart" },
    { id: "behoerde", label: "Behörde" },
    { id: "mittel", label: "Aufsichtsmittel" },
    { id: "rm", label: "Rechtmäßigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Maßnahme rechtmäßig",
    neg: "Ergebnis: Maßnahme rechtswidrig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  resultExtras: function (flags, node) {
    var namen = {
      "120": "Unterrichtungsrecht (§ 120 GemO)",
      "121": "Beanstandung (§ 121 GemO)",
      "122": "Anordnung (§ 122 GemO)",
      "123": "Aufhebung / Ersatzvornahme (§ 123 GemO)",
      "124": "Bestellung eines Beauftragten (§ 124 GemO)",
      "125": "Auflösung des Gemeinderats (§ 125 GemO)"
    };
    var out = [];
    if (flags.mittel && namen[flags.mittel] && node.kind === "ergebnis") {
      out.push("Geprüftes Aufsichtsmittel: " + namen[flags.mittel]);
    }
    return out;
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "Art. 49 III, IV LV",
      title: "Um welche Aufgabenart handelt es sich?",
      text: "Umfang und Intensität der Staatsaufsicht richten sich nach der Aufgabenart. Die Aufsicht obliegt dem Land; dem Bund steht keine Aufsicht über die Kommunen zu.",
      def: "<b>Kommunalaufsicht (Rechtsaufsicht):</b> bei Selbstverwaltungsaufgaben – nur Rechtmäßigkeitskontrolle (Art. 49 III 2 LV, §§ 117 ff. GemO).<br><b>Sonderaufsicht:</b> bei besonderen Pflichtaufgaben der Selbstverwaltung – spezialgesetzlich geregelte Aufsicht durch „sonstige staatliche Stellen“ (z. B. Bauleitplanung §§ 6, 10 II BauGB; Schulaufsicht SchulG).<br><b>Fachaufsicht:</b> bei Auftragsangelegenheiten – Kontrolle von Recht- UND Zweckmäßigkeit (Art. 49 IV LV, § 2 II GemO i. V. m. Spezialgesetz).",
      options: [
        { label: "Selbstverwaltungsaufgabe (frei oder Pflicht)", detail: "→ Kommunalaufsicht, §§ 117 ff. GemO", next: "q_behoerde", tone: "neutral" },
        { label: "Besondere Pflichtaufgabe mit Sonderaufsicht", next: "e_sonder", tone: "neutral" },
        { label: "Auftragsangelegenheit", detail: "→ Fachaufsicht", next: "e_fach", tone: "neutral" }
      ]
    },

    q_behoerde: {
      station: "behoerde",
      kind: "frage",
      norm: "§ 118 GemO, § 3 I Nr. 3b VwVfG",
      title: "Welche Behörde ist zuständige Kommunalaufsichtsbehörde?",
      def: "<b>§ 118 I GemO (sachlich):</b> Kreisverwaltung als untere Behörde der allgemeinen Landesverwaltung; für kreisfreie und große kreisangehörige Städte die ADD; ebenso, wenn der Landkreis selbst als Gebietskörperschaft beteiligt ist.<br><b>Obere Aufsichtsbehörde:</b> ADD, für kreisfreie/große kreisangehörige Städte das Ministerium (§ 118 II). <b>Oberste:</b> das fachlich zuständige Ministerium (§ 118 III).<br><b>Örtlich:</b> § 3 I Nr. 3b VwVfG.",
      hint: "Die Kreisverwaltung handelt hier als untere staatliche Verwaltungsbehörde („Januskopf“) – Rechtsträger ist das Land Rheinland-Pfalz.",
      options: [
        { label: "Kreisverwaltung", detail: "Regelfall bei kreisangehörigen Gemeinden und Verbandsgemeinden (§ 118 I 1 GemO)", next: "q_mittel", tone: "neutral" },
        { label: "ADD", detail: "kreisfreie/große kreisangehörige Stadt oder Beteiligung des Landkreises (§ 118 I GemO)", next: "q_mittel", tone: "neutral" }
      ]
    },

    q_mittel: {
      station: "mittel",
      kind: "frage",
      norm: "§§ 119–125 GemO",
      title: "Welches Aufsichtsmittel kommt in Betracht?",
      text: "Die repressiven Mittel stehen in einer Stufenfolge (Verhältnismäßigkeit!): Unterrichtung → Beanstandung/Anordnung → Aufhebung/Ersatzvornahme → Beauftragter → Auflösung des Gemeinderats. Präventive Mittel: Beratung, Anzeige-/Vorlagepflichten, Genehmigungsvorbehalte (§ 119 GemO, z. B. § 95 IV GemO Haushaltssatzung, § 103 GemO Kredite).",
      def: "<b>Grundsätze des § 117 GemO:</b> Rechtsaufsicht – Kontrolle nur der (formellen und materiellen) Rechtmäßigkeit, nicht der Zweckmäßigkeit. Die Aufsicht ist so zu führen, dass Entschlusskraft und Verantwortungsfreude der Gemeindeorgane gefördert werden (§ 117 S. 2).",
      options: [
        { label: "Unterrichtung, § 120 GemO", detail: "Berichte, Akteneinsicht, Sitzungsteilnahme, Prüfung vor Ort", next: "q_tb120", set: { mittel: "120" }, tone: "neutral" },
        { label: "Beanstandung, § 121 GemO", detail: "Rechtswidrige Beschlüsse/Maßnahmen rügen und Aufhebung verlangen", next: "q_tb121", set: { mittel: "121" }, tone: "neutral" },
        { label: "Anordnung, § 122 GemO", detail: "Pflichtwidriges Unterlassen: das Erforderliche binnen Frist veranlassen", next: "q_tb122", set: { mittel: "122" }, tone: "neutral" },
        { label: "Schärfere Mittel: §§ 123–125 GemO", detail: "Aufhebung/Ersatzvornahme, Beauftragter, Auflösung des Rates", next: "q_scharf", tone: "warn" }
      ]
    },

    q_tb120: {
      station: "rm",
      kind: "frage",
      norm: "§ 120 GemO",
      title: "Liegen die Voraussetzungen des Unterrichtungsrechts vor?",
      def: "<b>Tatbestand:</b><br>1. Kommunalaufsicht ist die richtige Aufsichtsart,<br>2. hinreichender <b>Anlass</b>, der Bedenken gegen die Rechtmäßigkeit eines bestimmten Verhaltens der Gemeinde begründet,<br>3. Unterrichtung ist zur Aufgabenerfüllung <b>erforderlich</b>.<br><b>Rechtsfolge:</b> jederzeitige Unterrichtung – Prüfung vor Ort, Sitzungsteilnahme, Berichte, Akteneinsicht. Die Maßnahme ist ein Verwaltungsakt.",
      hint: "Klassischer Fehler: Die Aufsicht verlangt ohne konkreten Anlass die dauerhafte Vorlage ALLER Sitzungsniederschriften – vom § 120 GemO nicht gedeckt und ermessensfehlerhaft (§ 40 VwVfG).",
      options: [
        { label: "Ja, Anlass und Erforderlichkeit (+)", next: "q_formell", tone: "pos" },
        { label: "Nein", next: "e_rw_tb", tone: "neg" }
      ]
    },

    q_tb121: {
      station: "rm",
      kind: "frage",
      norm: "§ 121 GemO",
      title: "Liegen die Voraussetzungen der Beanstandung vor?",
      def: "<b>Tatbestand:</b><br>1. Kommunalaufsicht ist die richtige Aufsichtsart,<br>2. <b>Handeln</b> der Gemeinde: Beschlüsse des Gemeinderats oder seiner Ausschüsse, Maßnahmen der Gemeindeverwaltung,<br>3. <b>Rechtswidrigkeit</b> des Handelns – volle formelle und materielle Rechtmäßigkeitsprüfung des Gemeindehandelns (geltendes Recht: GG, LV, Bundes-/Landesrecht, RVOen, Satzungen, Gewohnheitsrecht).<br><b>Rechtsfolge:</b> Beanstandung + Aufhebungsverlangen mit Frist + ggf. Rückgängigmachung des Veranlassten; beanstandete Beschlüsse dürfen nicht ausgeführt werden (§ 121 S. 3). Widerspruch und Anfechtungsklage haben KEINE aufschiebende Wirkung (§ 121 S. 4).",
      hint: "Die Rechtswidrigkeit des Ratsbeschlusses prüfst du mit dem Schema „Rechtmäßigkeit eines Ratsbeschlusses (Vollprüfung)“. Bürgerlich-rechtliche Verpflichtungen der Gemeinde unterliegen NICHT der Aufsicht nach §§ 121–123 (§ 127 II GemO).",
      options: [
        { label: "Ja, rechtswidriges Handeln der Gemeinde (+)", next: "q_formell", tone: "pos" },
        { label: "Nein, Handeln ist rechtmäßig", next: "e_rw_tb", tone: "neg" },
        { label: "Nur unzweckmäßig, nicht rechtswidrig", detail: "z. B. zweites Schwimmbad einer reichen Gemeinde", next: "e_rw_zweck", tone: "neg" }
      ]
    },

    q_tb122: {
      station: "rm",
      kind: "frage",
      norm: "§ 122 GemO",
      title: "Liegen die Voraussetzungen der Anordnung vor?",
      def: "<b>Tatbestand:</b><br>1. Kommunalaufsicht ist die richtige Aufsichtsart,<br>2. <b>Nichthandeln</b> der Gemeinde,<br>3. <b>Rechtswidrigkeit des Nichthandelns</b>: Verletzung einer gesetzlichen Handlungspflicht (öffentlich-rechtliche Pflichten aus Gesetz, RVO, Satzung, VA oder öffentlich-rechtlichem Vertrag – z. B. Pflichtaufgaben nach § 2 I 2 GemO, Bestellung einer Gleichstellungsbeauftragten nach §§ 18, 19 LGG, Bereitstellung von Personal/Mitteln für Auftragsangelegenheiten).<br><b>Rechtsfolge:</b> Anordnung, dass die Gemeinde binnen bestimmter Frist das Erforderliche veranlasst (VA).",
      options: [
        { label: "Ja, pflichtwidriges Unterlassen (+)", next: "q_formell", tone: "pos" },
        { label: "Nein, keine gesetzliche Handlungspflicht", next: "e_rw_tb", tone: "neg" }
      ]
    },

    q_scharf: {
      station: "rm",
      kind: "frage",
      norm: "§§ 123–125 GemO",
      title: "Welches der schärferen Mittel soll eingesetzt werden?",
      text: "Die schärferen Mittel setzen regelmäßig voraus, dass mildere Mittel erfolglos geblieben oder unzureichend sind (Stufenfolge, Verhältnismäßigkeit).",
      options: [
        { label: "Aufhebung / Ersatzvornahme, § 123 GemO", next: "q_tb123", set: { mittel: "123" }, tone: "neutral" },
        { label: "Bestellung eines Beauftragten, § 124 GemO", next: "q_tb124", set: { mittel: "124" }, tone: "warn" },
        { label: "Auflösung des Gemeinderats, § 125 GemO", next: "q_tb125", set: { mittel: "125" }, tone: "warn" }
      ]
    },

    q_tb123: {
      station: "rm",
      kind: "frage",
      norm: "§ 123 GemO",
      title: "Liegen die Voraussetzungen von Aufhebung / Ersatzvornahme vor?",
      def: "<b>Tatbestand:</b><br>1. Kommunalaufsicht ist die richtige Aufsichtsart,<br>2. vorherige(s) <b>Anordnung oder Verlangen nach §§ 120–122 GemO</b>,<br>3. <b>Nichtbefolgung</b> innerhalb der gesetzten Frist (ganz oder teilweise),<br>4. <b>Vollstreckbarkeit</b> der Ausgangsverfügung: bestandskräftig oder sofort vollziehbar (vgl. § 2 LVwVG).<br><b>Rechtsfolge:</b> Aufhebung beanstandeter Beschlüsse (nach § 121) bzw. Ersatzvornahme – Durchführung anstelle und auf Kosten der Gemeinde, auch durch Dritte (nach §§ 120, 122).",
      hint: "Bei der Ersatzvornahme handelt die Aufsichtsbehörde als gesetzlicher Vertreter der Gemeinde (Aufsichtsvertretung): Ihre Ausführung wirkt für und gegen die Gemeinde; Rechtsbehelfe Dritter richten sich gegen die GEMEINDE; die Kosten trägt die Gemeinde.",
      options: [
        { label: "Ja, alle Voraussetzungen (+)", next: "q_formell", tone: "pos" },
        { label: "Nein", detail: "z. B. Ausgangsverfügung noch nicht vollstreckbar", next: "e_rw_tb", tone: "neg" }
      ]
    },

    q_tb124: {
      station: "rm",
      kind: "frage",
      norm: "§ 124 GemO",
      title: "Liegen die Voraussetzungen für die Bestellung eines Beauftragten vor?",
      def: "<b>Zwangsbeauftragter (§ 124 I Nr. 1):</b> Gemeindeorgan erfüllt gesetzliche Verpflichtungen nicht UND führt Weisungen nicht aus UND die Befugnisse nach §§ 120–123 reichen nicht aus (schärfstes Mittel – nur bei erheblicher Abweichung von gesetzmäßiger Verwaltung).<br><b>Fürsorgebeauftragter (§ 124 I Nr. 2):</b> Gemeindeorgan ist rechtlich oder tatsächlich an der Ausübung seiner Befugnisse gehindert UND die Aufgabenerfüllung erfordert die Bestellung.<br><b>Rechtsfolge:</b> Beauftragter nimmt alle oder einzelne Aufgaben der Gemeindeorgane auf Kosten der Gemeinde wahr (VA).",
      options: [
        { label: "Ja, Nr. 1 oder Nr. 2 erfüllt (+)", next: "q_formell", tone: "pos" },
        { label: "Nein", detail: "mildere Mittel §§ 120–123 reichen aus", next: "e_rw_tb", tone: "neg" }
      ]
    },

    q_tb125: {
      station: "rm",
      kind: "frage",
      norm: "§ 125 GemO",
      title: "Liegen die Voraussetzungen der Auflösung des Gemeinderats vor?",
      def: "<b>Tatbestand:</b> Der Gemeinderat weigert sich <b>beharrlich</b>, den Anordnungen und Maßnahmen der Aufsichtsbehörde trotz <b>unanfechtbarer</b> Entscheidung nachzukommen, ODER er entzieht sich <b>fortgesetzt</b> der Erfüllung seiner Aufgaben.<br><b>Zuständig:</b> die Aufsichts- und Dienstleistungsdirektion (ADD).<br><b>Rechtsfolge:</b> Auflösung; innerhalb von drei Monaten sind Neuwahlen durchzuführen.",
      options: [
        { label: "Ja (+)", next: "q_formell", tone: "pos" },
        { label: "Nein", next: "e_rw_tb", tone: "neg" }
      ]
    },

    q_formell: {
      station: "rm",
      kind: "frage",
      norm: "§§ 28, 37, 39 VwVfG",
      title: "Ist die Maßnahme formell rechtmäßig?",
      def: "<b>Formelle Rechtmäßigkeit der Aufsichtsverfügung:</b><br>1. <b>Zuständigkeit:</b> sachlich § 118 GemO (bzw. § 61 LKO), örtlich § 3 I Nr. 3b VwVfG,<br>2. <b>Verfahren:</b> Anhörung der Gemeinde (§ 28 I VwVfG i. V. m. § 1 LVwVfG),<br>3. <b>Form:</b> grundsätzlich formfrei (§ 37 VwVfG), Begründung bei schriftlichem VA (§ 39 VwVfG).",
      options: [
        { label: "Ja, formell rechtmäßig", next: "q_ermessen", tone: "pos" },
        { label: "Nein", detail: "z. B. unzuständige Behörde oder fehlende Anhörung", next: "e_rw_formell", tone: "neg" }
      ]
    },

    q_ermessen: {
      station: "rm",
      kind: "frage",
      norm: "§ 40 VwVfG",
      title: "Hat die Behörde ihr Ermessen fehlerfrei ausgeübt?",
      text: "Das Einschreiten der Kommunalaufsicht steht in ihrem pflichtgemäßen Ermessen (Opportunitätsprinzip – Entschließungs- und Auswahlermessen). Entsprechend der Schwere der Rechtsverletzung kann von Maßnahmen abgesehen werden.",
      def: "<b>Grenzen:</b><br>• Eingreifen nur im Interesse des öffentlichen Wohls – nicht, um einem Einzelnen zu seinem Recht zu verhelfen, wenn dieser den Rechtsweg beschreiten kann.<br>• Stufenfolge/Verhältnismäßigkeit der Mittel beachten.<br>• Ein Anspruch Dritter auf Einschreiten besteht grundsätzlich NICHT (Ausnahmen: gesetzliche Pflicht zum Einschreiten, Ermessensreduzierung auf Null).",
      options: [
        { label: "Ja, ermessensfehlerfrei", next: "e_rechtmaessig", tone: "pos" },
        { label: "Nein, Ermessensfehler", detail: "Ermessensausfall, -überschreitung oder -fehlgebrauch", next: "e_rw_ermessen", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 117 ff. GemO",
      title: "Aufsichtsmaßnahme rechtmäßig",
      text: "Die kommunalaufsichtliche Maßnahme ist formell und materiell rechtmäßig. Sie ist ein Verwaltungsakt (§ 35 VwVfG) mit Außenwirkung gegenüber der Gemeinde.\n\nRechtsschutz der Gemeinde (§ 126 GemO – deklaratorisch, § 40 I VwGO):\n• Anfechtungswiderspruch (§ 68 I VwGO) und Anfechtungsklage (§ 42 I Alt. 1 VwGO) gegen belastende Verfügungen; bei versagter Genehmigung Verpflichtungswiderspruch/-klage (§ 42 I Alt. 2 VwGO).\n• Widerspruchs-/klagebefugt ist die Gemeinde als juristische Person des öffentlichen Rechts (§ 42 II VwGO – Selbstverwaltungsrecht).\n• Klagegegner: das Land Rheinland-Pfalz als Rechtsträger der Aufsichtsbehörde (§ 78 I Nr. 1 VwGO), auch wenn die Kreisverwaltung gehandelt hat („Januskopf“).\n• Widerspruchsbehörde: die nächsthöhere Behörde (§ 73 I 2 Nr. 1 VwGO; bei Verfügungen der Kreisverwaltung die ADD, § 6 AGVwGO beachten).\n• Beachte bei § 121: Widerspruch und Klage ohne aufschiebende Wirkung (§ 121 S. 4 GemO) → Antrag nach § 80 V VwGO."
    },

    e_rw_tb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 120–125 GemO",
      title: "Maßnahme rechtswidrig: Tatbestand nicht erfüllt",
      text: "Die Tatbestandsvoraussetzungen des gewählten Aufsichtsmittels liegen nicht vor. Die Verfügung ist rechtswidrig und auf Widerspruch/Anfechtungsklage der Gemeinde hin aufzuheben (§ 113 I 1 VwGO).\n\nDie Gemeinde kann die Verletzung ihres Selbstverwaltungsrechts (Art. 28 II GG, Art. 49 LV) geltend machen."
    },

    e_rw_zweck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 117 GemO, Art. 49 III 2 LV",
      title: "Maßnahme rechtswidrig: nur Zweckmäßigkeitskontrolle",
      text: "Die Kommunalaufsicht ist REINE Rechtsaufsicht: Sie prüft, ob die Verwaltung im Einklang mit den Gesetzen geführt wird (Art. 49 III 2 LV, § 117 S. 1 GemO). Bloß unzweckmäßiges, aber rechtmäßiges Handeln darf sie nicht beanstanden.\n\nBeispiel: Der Bau eines zweiten Schwimmbads durch eine finanzstarke Gemeinde mag unzweckmäßig sein – rechtswidrig ist er nicht. Anders, wenn eine leistungsschwache Gemeinde damit gegen die Haushaltsgrundsätze (§ 93 GemO) verstößt."
    },

    e_rw_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 28, 45, 46 VwVfG",
      title: "Maßnahme formell rechtswidrig",
      text: "Die Aufsichtsverfügung leidet an einem formellen Fehler (Zuständigkeit, Anhörung, Begründung). Beachte aber die Heilungs- und Unbeachtlichkeitsvorschriften der §§ 45, 46 VwVfG – insbesondere kann die Anhörung bis zum Abschluss des verwaltungsgerichtlichen Verfahrens nachgeholt werden (§ 45 I Nr. 3, II VwVfG)."
    },

    e_rw_ermessen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwVfG, § 114 VwGO",
      title: "Maßnahme rechtswidrig: Ermessensfehler",
      text: "Die Behörde hat die gesetzlichen Grenzen des Ermessens überschritten oder vom Ermessen in einer dem Zweck der Ermächtigung nicht entsprechenden Weise Gebrauch gemacht (§ 40 VwVfG, § 114 S. 1 VwGO) – etwa durch Übergehen der Stufenfolge (sofort schärfstes Mittel), Einschreiten allein im Individualinteresse eines Dritten oder Unverhältnismäßigkeit.\n\nDie Verfügung ist auf die Anfechtungsklage der Gemeinde hin aufzuheben."
    },

    e_sonder: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Spezialgesetz",
      title: "Sonderaufsicht – spezialgesetzliche Prüfung",
      text: "Bei besonderen Pflichtaufgaben der Selbstverwaltung tritt die spezialgesetzlich geregelte Sonderaufsicht an die Stelle der Kommunalaufsicht; es werden „sonstige staatliche Stellen“ tätig.\n\nBeispiele:\n• Bauleitplanung: §§ 6 I, 10 II BauGB – höhere Verwaltungsbehörde (SGD bzw. Kreisverwaltung), Rechtskontrolle.\n• Schulwesen: SchulG – ADD.\n• Forstaufsicht: LWaldG – Forstbehörden (Recht- UND Zweckmäßigkeit).\n\nDie Durchsetzung der Maßnahmen erfolgt grundsätzlich durch die Kommunalaufsicht mit deren Mitteln."
    },

    e_fach: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 2 II GemO, Art. 49 IV LV",
      title: "Fachaufsicht – Weisung statt Aufsichtsverfügung",
      text: "Bei Auftragsangelegenheiten wird die Gemeinde funktionell wie eine staatliche Behörde tätig. Aufsichtsmittel ist die innerorganisatorische WEISUNG (§ 2 II 1 GemO) – Verwaltungsvorschriften, Runderlasse, Einzelweisungen.\n\n• Umfang: Recht- UND Zweckmäßigkeit.\n• Rechtsnatur: innerdienstliche Weisung, KEIN Verwaltungsakt (keine Außenwirkung).\n• Rechtsbehelfe: nur Gegenvorstellung und Fachaufsichtsbeschwerde – kein Widerspruch, keine Anfechtungsklage.\n• Keine Instanzenbindung: jede Fachaufsichtsbehörde kann nachgeordneten Behörden Weisungen erteilen.\n• Durchsetzung der Weisung: durch die Kommunalaufsicht mit ihren Mitteln (§§ 120 ff. GemO).\n• Zuständiges Organ in der Gemeinde: der Bürgermeister (§ 47 I 2 Nr. 4 GemO)."
    }
  },

  routers: {}
});
