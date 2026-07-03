/*
 * Prüfungsschema: Amtshaftung (§ 839 BGB i. V. m. Art. 34 GG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema Amtshaftung" (Weil – vollständiges Schema mit
 *    Haftungsausschlüssen)
 *  - "AVR – FS II Recht der staatlichen Ersatzleistungen" (Weil – Beamtenbegriff,
 *    Drittbezogenheit, objektivierter Fahrlässigkeitsmaßstab, Organisationsverschulden)
 *  - "OLE 33 / OLE 36 – Recht der staatlichen Ersatzleistungen"
 *  - Gesetze: BGB §§ 839, 249 ff., 254, 276; GG Art. 34; VwGO § 40 II
 *    (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-amtshaftung",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Staatliche Ersatzleistungen",
  title: "Amtshaftung (§ 839 BGB i. V. m. Art. 34 GG)",
  description: "Der Amtshaftungsanspruch: haftungsrechtlicher Beamtenbegriff (Beliehene, Verwaltungshelfer), drittbezogene Amtspflichtverletzung, objektiviertes Verschulden, kausaler Schaden und die drei Haftungsausschlüsse des § 839 I 2, II, III BGB – mit Rechtsweghinweis (ordentliche Gerichte!).",
  start: "start",
  stations: [
    { id: "amt", label: "Öffentl. Amt" },
    { id: "pflicht", label: "Amtspflicht" },
    { id: "verschulden", label: "Verschulden" },
    { id: "schaden", label: "Schaden" },
    { id: "ausschluss", label: "Ausschlüsse" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "amt",
      kind: "frage",
      norm: "§ 839 BGB, Art. 34 GG",
      title: "Handelte jemand in Ausübung eines öffentlichen Amtes?",
      text: "Konstruktion: § 839 BGB begründet die persönliche Haftung des Beamten; Art. 34 GG leitet sie auf den Staat über (befreiende Schuldübernahme). Anspruchsgegner ist die Körperschaft, deren Aufgaben der Amtswalter wahrgenommen hat (Anvertrauenstheorie).",
      def: "<b>Beamter im HAFTUNGSRECHTLICHEN Sinne</b> = jeder, dem ein funktionell öffentliches Amt anvertraut wurde: Beamte, Richter, Angestellte, Arbeiter, Soldaten, Minister, Ratsmitglieder – auch <b>Beliehene</b> (z. B. TÜV-Prüfer, Bezirksschornsteinfeger) und <b>Verwaltungshelfer</b>, wenn sie bei Gesamtbetrachtung weisungsabhängig als „Werkzeug“ der Verwaltung handeln (Rspr. inzwischen auch beim beauftragten Abschleppunternehmer).<br><br><b>Öffentlich-rechtliches Handeln:</b> Abgrenzung wie bei § 40 I VwGO (mod. Subjektstheorie); bei neutralem Handeln: Funktionszusammenhang und Zielsetzung.<br><br><b>„In Ausübung“</b> – nicht nur „bei Gelegenheit“ des Amtes (innerer Zusammenhang mit der Amtstätigkeit).",
      options: [
        { label: "Ja, Amtswalter handelte hoheitlich in Ausübung", next: "q_pflicht", tone: "pos" },
        { label: "Nein, privatrechtliches/fiskalisches Handeln", next: "e_kein_anspruch_amt", tone: "neg" },
        { label: "Nur „bei Gelegenheit“ (Privathandeln)", next: "e_kein_anspruch_amt", tone: "neg" }
      ]
    },

    q_pflicht: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 839 I 1 BGB",
      title: "Wurde eine drittbezogene Amtspflicht verletzt?",
      def: "<b>Amtspflichten</b> (aus Gesetz, RVO, Satzung, VV, Weisungen, Dienstpflichten):<br>• Pflicht zu <b>rechtmäßigem</b> Verwaltungshandeln (wichtigste!),<br>• Pflicht zur Vermeidung unerlaubter Handlungen (§§ 823 ff. BGB),<br>• Pflicht zu <b>richtigen und vollständigen Auskünften</b>,<br>• Pflicht zu zügigem und konsequentem Handeln (Amtsermittlung § 24 VwVfG!).<br><br><b>Drittbezogenheit:</b> Der Geschädigte muss zu dem Personenkreis gehören, dessen Belange die Amtspflicht (auch) schützen soll – Kriterien wie bei der Schutznormtheorie des § 42 II VwGO:<br>• persönlicher Schutzbereich: zumindest auch Individualschutz,<br>• sachlicher Schutzbereich: Schutz gerade des betroffenen Interesses.<br><br><b>Verletzung</b> = Rechtswidrigkeit der Maßnahme.",
      options: [
        { label: "Ja, drittbezogene Amtspflicht verletzt", next: "q_verschulden", tone: "pos" },
        { label: "Amtspflicht nur ggü. der Allgemeinheit", next: "e_kein_anspruch_dritt", tone: "neg" },
        { label: "Keine Pflichtverletzung (Handeln rechtmäßig)", next: "e_kein_anspruch_pflicht", tone: "neg" }
      ]
    },

    q_verschulden: {
      station: "verschulden",
      kind: "frage",
      norm: "§ 276 BGB",
      title: "Handelte der Amtswalter schuldhaft?",
      def: "<b>Verschulden:</b> Vorsatz oder Fahrlässigkeit (§ 276 BGB).<br><br><b>Erleichterungen durch die Rspr.:</b><br>• <b>objektivierter Fahrlässigkeitsmaßstab:</b> Es kommt auf die Kenntnisse und Fähigkeiten an, die für die Führung des Amtes im Durchschnitt erforderlich sind (der „pflichtgetreue Durchschnittsbeamte“),<br>• kein konkreter Schuldiger nötig, wenn das <b>Gesamtverhalten</b> der Verwaltung amtspflichtwidrig ist,<br>• <b>Organisationsverschulden:</b> Verstoß gegen die Pflicht, die Behörde sachlich und personell so auszustatten, dass sie ihre Amtspflichten erfüllen kann,<br>• prima-facie-Beweis – im Ergebnis fast Beweislastumkehr.<br><br><b>Kollegialgerichtsrichtlinie:</b> Kein Verschulden i. d. R., wenn ein Kollegialgericht das Verhalten als rechtmäßig gebilligt hat.",
      options: [
        { label: "Ja, Vorsatz", next: "q_schaden", set: { vorsatz: true }, tone: "pos" },
        { label: "Ja, (objektivierte) Fahrlässigkeit", next: "q_schaden", tone: "pos" },
        { label: "Nein, kein Verschulden", next: "e_kein_anspruch_verschulden", tone: "neg" }
      ]
    },

    q_schaden: {
      station: "schaden",
      kind: "frage",
      norm: "§§ 249 ff. BGB",
      title: "Ist kausal ein Schaden entstanden?",
      def: "<b>Schaden:</b> Vermögensschaden und Nichtvermögensschaden (§ 253 II BGB – Schmerzensgeld).<br><b>Kausalität:</b> Die Amtspflichtverletzung muss den Schaden adäquat verursacht haben. Zu verneinen, wenn der Schaden auch bei pflichtGEMÄSSEM Verhalten eingetreten wäre (rechtmäßiges Alternativverhalten).",
      options: [
        { label: "Ja, kausaler Schaden", next: "q_ausschluss", tone: "pos" },
        { label: "Nein (wäre auch bei rechtmäßigem Handeln entstanden)", next: "e_kein_anspruch_kausal", tone: "neg" }
      ]
    },

    q_ausschluss: {
      station: "ausschluss",
      kind: "frage",
      norm: "§ 839 I 2, II, III BGB",
      title: "Greift ein Haftungsausschluss?",
      def: "<b>1. Subsidiaritätsklausel (§ 839 I 2 BGB) – nur bei FAHRLÄSSIGKEIT:</b> Keine Haftung, wenn der Verletzte anderweitig Ersatz erlangen kann (durchsetzbarer Anspruch gegen Dritte). NICHT als anderweitige Ersatzmöglichkeit gelten: Ansprüche gegen andere öffentlich-rechtliche Körperschaften, Sozialversicherungsleistungen, selbst verdiente private Versicherungen, Lohnfortzahlung; nicht anwendbar bei Teilnahme am allgemeinen Straßenverkehr.<br><br><b>2. Richterprivileg (§ 839 II BGB):</b> Bei einem Urteil nur Haftung, wenn die Pflichtverletzung eine Straftat ist (Rechtsbeugung).<br><br><b>3. Rechtsmittelversäumung (§ 839 III BGB):</b> Keine Ersatzpflicht, wenn der Verletzte es vorsätzlich oder fahrlässig unterlassen hat, den Schaden durch Gebrauch eines Rechtsmittels (jeder Rechtsbehelf, auch Widerspruch und § 80 V!) abzuwenden – Verschärfung des § 254 BGB.",
      options: [
        { label: "Kein Ausschluss", next: "e_anspruch", tone: "pos" },
        { label: "§ 839 I 2: anderweitige Ersatzmöglichkeit (Fahrlässigkeit)", next: "e_kein_anspruch_subsid", tone: "neg" },
        { label: "§ 839 III: Rechtsmittel schuldhaft nicht eingelegt", next: "e_kein_anspruch_rechtsmittel", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 839 BGB i. V. m. Art. 34 GG",
      title: "Amtshaftungsanspruch besteht",
      text: "Alle Voraussetzungen liegen vor. Es haftet der Staat bzw. die Körperschaft, in deren Dienst der Amtswalter steht (Art. 34 S. 1 GG) – nicht der Beamte persönlich.\n\nRechtsfolge: Ersatz des zurechenbar verursachten Schadens in GELD (§§ 249 ff. BGB) – keine Naturalrestitution (die Verwaltung kann nicht über die Amtshaftung zu hoheitlichem Handeln verurteilt werden; dafür: Folgenbeseitigungsanspruch). Mitverschulden mindert den Anspruch (§ 254 BGB).\n\nRückgriff: Bei Vorsatz oder grober Fahrlässigkeit kann der Dienstherr beim Amtswalter Regress nehmen (Art. 34 S. 2 GG, § 48 BeamtStG).\n\nRECHTSWEG: ordentliche Gerichte – Art. 34 S. 3 GG, § 40 II 1 VwGO (Landgericht, § 71 II Nr. 2 GVG)!"
    },

    e_kein_anspruch_amt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 839 BGB, Art. 34 GG",
      title: "Kein Amtshaftungsanspruch: kein hoheitliches Handeln",
      text: "Der Handelnde hat nicht in Ausübung eines öffentlichen Amtes gehandelt (privatrechtliches/fiskalisches Handeln oder reines Privathandeln „bei Gelegenheit“). In Betracht kommen stattdessen die allgemeine Deliktshaftung (§§ 823 ff., 831 BGB) der Körperschaft nach Privatrecht."
    },

    e_kein_anspruch_dritt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 839 I 1 BGB",
      title: "Kein Anspruch: Amtspflicht nicht drittbezogen",
      text: "Die verletzte Amtspflicht dient nur dem öffentlichen Interesse bzw. der Allgemeinheit – der Geschädigte gehört nicht zum geschützten Personenkreis. Der Amtshaftungsanspruch scheidet aus."
    },

    e_kein_anspruch_pflicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 839 I 1 BGB",
      title: "Kein Anspruch: keine Amtspflichtverletzung",
      text: "Das Handeln des Amtswalters war rechtmäßig – eine Amtspflicht wurde nicht verletzt. Bei rechtmäßigen Eingriffen mit Sonderopfer kommen Entschädigungsansprüche aus enteignendem/enteignungsgleichem Eingriff bzw. Aufopferung in Betracht."
    },

    e_kein_anspruch_verschulden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 276 BGB",
      title: "Kein Anspruch: kein Verschulden",
      text: "Dem Amtswalter fällt weder Vorsatz noch (objektivierte) Fahrlässigkeit zur Last – etwa weil ein Kollegialgericht das Verhalten gebilligt hat. Verschuldensunabhängige Institute (enteignungsgleicher Eingriff, FBA) sind gesondert zu prüfen."
    },

    e_kein_anspruch_kausal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 249 ff. BGB",
      title: "Kein Anspruch: kein kausaler Schaden",
      text: "Der Schaden wäre auch bei pflichtgemäßem Verhalten eingetreten (rechtmäßiges Alternativverhalten) oder ist der Amtspflichtverletzung nicht adäquat zurechenbar."
    },

    e_kein_anspruch_subsid: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 839 I 2 BGB",
      title: "Kein Anspruch: anderweitige Ersatzmöglichkeit",
      text: "Bei nur fahrlässiger Amtspflichtverletzung ist die Amtshaftung subsidiär: Der Verletzte muss zunächst den durchsetzbaren Ersatzanspruch gegen den Dritten verfolgen (Verweisungsprivileg). Beachte die Ausnahmen (Straßenverkehr, Versicherungen, Ansprüche gegen andere Hoheitsträger)."
    },

    e_kein_anspruch_rechtsmittel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 839 III BGB",
      title: "Kein Anspruch: Rechtsmittel schuldhaft versäumt",
      text: "Der Verletzte hat es vorsätzlich oder fahrlässig unterlassen, den Schaden durch Gebrauch eines Rechtsmittels (Widerspruch, Klage, Eilantrag) abzuwenden – die Ersatzpflicht tritt nicht ein (§ 839 III BGB). „Dulde und liquidiere“ gilt nicht!"
    }
  },

  routers: {}
});
