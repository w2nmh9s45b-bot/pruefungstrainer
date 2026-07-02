/*
 * Prüfungsschema: Anspruch auf Erteilung einer Baugenehmigung, § 70 I 1 LBauO RLP
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "1 Uebersicht Anspruch auf Baugenehmigung" (Lenk, FS II)
 *  - "OLE 11 FS II BauR Zulaessigkeitsvoraussetzungen" (Lenk, FS II)
 *  - "OLE 11 FS II BauR Gebietsvertraeglichkeit" (Lenk, FS II)
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff, FS III)
 *
 * Stationen: agl → formell → beduerftig → planung → bauord → sonst → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "baugenehmigung-70-lbauo",
  subject: "Baurecht",
  area: "Genehmigungsverfahren",
  title: "Anspruch auf Baugenehmigung, § 70 I 1 LBauO",
  description: "Vollprüfung von der Anspruchsgrundlage über formelle Voraussetzungen, Genehmigungsbedürftigkeit (§ 61 LBauO), Bauplanungsrecht (§§ 29–36 BauGB), Bauordnungsrecht bis zu sonstigen öffentlich-rechtlichen Vorschriften.",
  start: "start",
  stations: [
    { id: "agl", label: "Anspruchsgrundlage" },
    { id: "formell", label: "Formell" },
    { id: "beduerftig", label: "Genehmigungsbedürftigkeit" },
    { id: "planung", label: "Bauplanungsrecht" },
    { id: "bauord", label: "Bauordnungsrecht" },
    { id: "sonst", label: "Sonstiges ö. Recht" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    /* ================= A. Anspruchsgrundlage ================= */

    start: {
      station: "agl",
      kind: "frage",
      norm: "§ 70 I 1 LBauO",
      title: "Was wird begehrt?",
      text: "Obersatz: Der Bauherr könnte einen Anspruch auf Erteilung der Baugenehmigung nach § 70 I 1 LBauO haben. Dann müssten die formellen und materiellen Voraussetzungen vorliegen.",
      def: "<b>Anspruchsgrundlage Baugenehmigung:</b> § 70 I 1 LBauO. <b>Bauvorbescheid</b> (z. B. nur über die bauplanungsrechtliche Zulässigkeit): § 72 i. V. m. § 70 I 1 LBauO.",
      hint: "Methodik aus Modul 1 beachten: Gutachtenstil – Obersatz, Definition, Subsumtion, Ergebnis.",
      options: [
        { label: "Baugenehmigung", detail: "Vollgenehmigung des Vorhabens, § 70 I 1 LBauO", next: "q_sachlich", tone: "neutral" },
        { label: "Bauvorbescheid", detail: "Vorabentscheidung über einzelne Fragen, § 72 i. V. m. § 70 I 1 LBauO", next: "q_sachlich", set: { vorbescheid: true }, tone: "neutral" }
      ]
    },

    /* ================= B. Formelle Voraussetzungen ================= */

    q_sachlich: {
      station: "formell",
      kind: "frage",
      norm: "§§ 60, 58 I LBauO",
      title: "Sachliche Zuständigkeit: Wo liegt das Baugrundstück?",
      text: "Der Anspruch setzt formell einen ordnungsgemäßen Bauantrag an die sachlich und örtlich zuständige Behörde voraus. Sachlich zuständig ist die untere Bauaufsichtsbehörde, § 60 i. V. m. § 58 I LBauO.",
      options: [
        { label: "Kreisfreie oder große kreisangehörige Stadt", detail: "Untere Bauaufsichtsbehörde ist die Stadtverwaltung (z. B. Lahnstein als große kreisangehörige Stadt)", next: "q_oertlich", set: { babIstGemeinde: true }, tone: "neutral" },
        { label: "Sonstige kreisangehörige Gemeinde", detail: "Untere Bauaufsichtsbehörde ist die Kreisverwaltung", next: "q_oertlich", tone: "neutral" },
        { label: "Verbandsgemeinde mit Aufgabenübertragung", detail: "Ausnahmsweise die VG-Verwaltung (z. B. VG Diez, VG Konz)", next: "q_oertlich", tone: "neutral" }
      ]
    },

    q_oertlich: {
      station: "formell",
      kind: "frage",
      norm: "§ 1 I LVwVfG i. V. m. § 3 I Nr. 1 VwVfG",
      title: "Örtliche Zuständigkeit gegeben?",
      text: "Örtlich zuständig ist die Behörde, in deren Bezirk das Baugrundstück liegt (Lage des Grundstücks maßgeblich).",
      options: [
        { label: "Ja, Grundstück liegt im Bezirk der Behörde", next: "q_antrag", tone: "pos" },
        { label: "Nein, andere Behörde angegangen", next: "e_unzustaendig", tone: "neg" }
      ]
    },

    q_antrag: {
      station: "formell",
      kind: "frage",
      norm: "§ 63 LBauO",
      title: "Ordnungsgemäßer Bauantrag gestellt?",
      text: "Erforderlich ist ein vom Bauherrn elektronisch in Textform oder schriftlich gestellter Bauantrag mit vollständigen Bauunterlagen. Einzureichen ist er bei der Gemeindeverwaltung – bei verbandsangehörigen Ortsgemeinden und Städten bei der Verbandsgemeindeverwaltung (§ 63 I LBauO). Diese leitet ihn mit Stellungnahme unverzüglich an die Bauaufsichtsbehörde weiter (§ 63 IV LBauO).",
      options: [
        { label: "Ja, Antrag ordnungsgemäß und vollständig", next: "q_gebaeude", tone: "pos" },
        { label: "Nein, Antrag fehlt / Unterlagen unvollständig", next: "e_kein_antrag", tone: "neg" }
      ]
    },

    q_gebaeude: {
      station: "formell",
      kind: "frage",
      norm: "§ 64 LBauO",
      title: "Errichtung oder Änderung eines genehmigungsbedürftigen Gebäudes?",
      text: "Bei der Errichtung oder Änderung genehmigungsbedürftiger Gebäude muss der Bauantrag durch einen Bauvorlageberechtigten verantwortet werden.",
      options: [
        { label: "Ja, Gebäude wird errichtet oder geändert", detail: "Dann ist die Bauvorlageberechtigung zu prüfen", next: "q_vorlage", tone: "neutral" },
        { label: "Nein, kein Gebäude betroffen", detail: "z. B. sonstige bauliche Anlage – Bauvorlageberechtigung nicht erforderlich", next: "q_massnahme", tone: "neutral" }
      ]
    },

    q_vorlage: {
      station: "formell",
      kind: "frage",
      norm: "§ 64 LBauO",
      title: "Bauantrag von einem Bauvorlageberechtigten verantwortet?",
      text: "Bauvorlageberechtigt sind insbesondere Architektinnen/Architekten und bestimmte Ingenieurinnen/Ingenieure.",
      options: [
        { label: "Ja, Bauvorlageberechtigter verantwortet den Antrag", next: "q_massnahme", tone: "pos" },
        { label: "Nein", next: "e_vorlage", tone: "neg" }
      ]
    },

    /* ================= C.I. Genehmigungsbedürftigkeit ================= */

    q_massnahme: {
      station: "beduerftig",
      kind: "frage",
      norm: "§ 61 LBauO",
      title: "Welche Maßnahme liegt vor?",
      text: "Zwischenergebnis: Die formellen Voraussetzungen liegen vor. ✓\n\nMateriell muss zunächst ein genehmigungsbedürftiges Vorhaben vorliegen. Genehmigungsbedürftig sind nach § 61 LBauO die Errichtung, die Änderung, die Nutzungsänderung und der Abbruch baulicher Anlagen.",
      options: [
        { label: "Errichtung", detail: "Neuherstellung einer baulichen Anlage", next: "q_anlage", tone: "neutral" },
        { label: "Änderung", detail: "Umbau / bauliche Veränderung des Bestands", next: "q_anlage", tone: "neutral" },
        { label: "Nutzungsänderung", detail: "Änderung der Funktion, z. B. Lager → Unterkunft", next: "q_anlage", tone: "neutral" },
        { label: "Abbruch", detail: "Beseitigung einer baulichen Anlage", next: "q_anlage", set: { abbruch: true }, tone: "neutral" },
        { label: "Keine dieser Maßnahmen", next: "e_keine_massnahme", tone: "neg" }
      ]
    },

    q_anlage: {
      station: "beduerftig",
      kind: "frage",
      norm: "§ 2 I, § 1 I 2 LBauO",
      title: "Worauf bezieht sich die Maßnahme?",
      text: "Die Maßnahme muss eine bauliche Anlage (§ 2 I LBauO) oder eine andere Anlage oder Einrichtung i. S. d. § 1 I 2 LBauO betreffen.",
      def: "<b>Bauliche Anlage (§ 2 I LBauO):</b> aus Bauprodukten (§ 2 X LBauO) künstlich hergestellt und mit dem Erdboden verbunden – unmittelbar (§ 2 I 1), durch eigene Schwere auf dem Boden ruhend (§ 2 I 2) oder dazu bestimmt, überwiegend ortsfest benutzt zu werden (§ 2 I 2).",
      options: [
        { label: "Bauliche Anlage (§ 2 I 1, 2 LBauO)", detail: "Aus Bauprodukten hergestellt und mit dem Erdboden verbunden / eigene Schwere / ortsfeste Benutzung", next: "q_ausnahme", tone: "pos" },
        { label: "Fiktive bauliche Anlage (§ 2 I 3 Nr. 1–8 LBauO)", detail: "Kraft Gesetzes gleichgestellt, z. B. Aufschüttungen, Lager-, Abstell- und Campingplätze", next: "q_ausnahme", tone: "pos" },
        { label: "Andere Anlage/Einrichtung (§ 1 I 2 LBauO)", detail: "An die die LBauO Anforderungen stellt, z. B. Werbeanlagen (§ 52 LBauO), Einfriedungen (§ 12 LBauO)", next: "q_ausnahme", tone: "pos" },
        { label: "Keine davon", next: "e_keine_anlage", tone: "neg" }
      ]
    },

    q_ausnahme: {
      station: "beduerftig",
      kind: "frage",
      norm: "§§ 62, 67, 76, 84 LBauO",
      title: "Greift eine Ausnahme von der Genehmigungspflicht?",
      text: "Die Genehmigungsbedürftigkeit entfällt, wenn eine Ausnahme nach §§ 62, 67, 76 oder 84 LBauO eingreift.",
      options: [
        { label: "Keine Ausnahme einschlägig", detail: "Das Vorhaben bleibt genehmigungsbedürftig", next: "q_verfahren", tone: "pos" },
        { label: "§ 62 LBauO – genehmigungsfreies Vorhaben", detail: "z. B. Nutzungsänderung, für die keine anderen bedeutsamen öffentlich-rechtlichen Anforderungen gelten", next: "e_frei62", tone: "warn" },
        { label: "§ 67 LBauO – freigestelltes Vorhaben", detail: "z. B. Wohngebäude im Geltungsbereich eines qualifizierten Bebauungsplans (Freistellungsverfahren)", next: "e_frei67", tone: "warn" },
        { label: "§ 76 LBauO – Fliegender Bau", detail: "Eigenes Regime der Ausführungsgenehmigung", next: "e_frei76", tone: "warn" },
        { label: "§ 84 LBauO – nicht der Bauaufsicht unterliegend", detail: "Vorhaben außerhalb der Bauaufsicht", next: "e_frei84", tone: "warn" }
      ]
    },

    q_verfahren: {
      station: "beduerftig",
      kind: "frage",
      norm: "§ 66 LBauO",
      title: "In welchem Verfahren wird geprüft?",
      text: "Zwischenergebnis: Das Vorhaben ist genehmigungsbedürftig. ✓\n\nIm vereinfachten Genehmigungsverfahren (§ 66 LBauO) ist der Prüfungsumfang eingeschränkt: Das Bauordnungsrecht wird nicht geprüft (§ 66 IV LBauO).",
      hint: "Beispiel für das vereinfachte Verfahren: Wohngebäude/Einfamilienhaus im unbeplanten Innenbereich, § 66 I 1 Nr. 1 LBauO.",
      options: [
        { label: "Volles Genehmigungsverfahren", detail: "Prüfung: Bauplanungsrecht + Bauordnungsrecht + sonstiges öffentliches Recht", next: "q_vorhaben29", tone: "neutral" },
        { label: "Vereinfachtes Genehmigungsverfahren, § 66 LBauO", detail: "Bauordnungsrecht ist nicht Prüfungsmaßstab (§ 66 IV LBauO)", next: "q_vorhaben29", set: { vereinfacht: true }, tone: "warn" }
      ]
    },

    /* ================= C.II.1 Bauplanungsrecht ================= */

    q_vorhaben29: {
      station: "planung",
      kind: "frage",
      norm: "§ 29 I BauGB",
      title: "Vorhaben i. S. d. § 29 I BauGB?",
      text: "Die §§ 30 ff. BauGB gelten nur für Vorhaben i. S. d. § 29 I BauGB: Errichtung, Änderung oder Nutzungsänderung einer baulichen Anlage.",
      def: "<b>Bauliche Anlage (§ 29 BauGB, bundesrechtlich – nicht identisch mit § 2 I LBauO!):</b> in einer auf Dauer gedachten Weise künstlich mit dem Erdboden verbundene Anlage mit <b>bodenrechtlicher Relevanz</b>. Diese liegt vor, wenn das Vorhaben die Belange der §§ 1 V, VI, 1a BauGB so berührt oder berühren kann, dass das Bedürfnis nach verbindlicher Bauleitplanung hervorgerufen wird.",
      options: [
        { label: "Ja, Vorhaben i. S. d. § 29 I BauGB", next: "q_bereich", tone: "pos" },
        { label: "Nein (z. B. reiner Abbruch, keine bodenrechtliche Relevanz)", detail: "Bauplanungsrecht ist dann nicht Prüfungsmaßstab", next: "@bauordnung", set: { kein29: true }, tone: "neutral" }
      ]
    },

    q_bereich: {
      station: "planung",
      kind: "frage",
      norm: "§§ 30, 33, 34, 35 BauGB",
      title: "In welchem Bereich liegt das Baugrundstück?",
      text: "Formulierungshilfe: „Das Vorhaben beurteilt sich nach § … BauGB, wenn …“ – maßgeblich ist der räumliche Anwendungsbereich.",
      options: [
        { label: "Geltungsbereich eines Bebauungsplans", detail: "§§ 30 ff. BauGB – beplanter Innenbereich", next: "q_bplan_art", tone: "neutral" },
        { label: "Im Zusammenhang bebauter Ortsteil ohne B-Plan", detail: "§ 34 BauGB – unbeplanter Innenbereich", next: "q34_ortsteil", set: { bereich: "34" }, tone: "neutral" },
        { label: "Außenbereich", detail: "§ 35 BauGB – weder beplant noch im Bebauungszusammenhang", next: "q35_priv", set: { bereich: "35" }, tone: "neutral" },
        { label: "Gebiet, für das ein B-Plan in Aufstellung ist", detail: "§ 33 BauGB; ggf. Veränderungssperre (§ 14) oder Zurückstellung (§ 15 BauGB)", next: "q33_sicherung", set: { bereich: "33" }, tone: "neutral" }
      ]
    },

    /* ---------- § 30 BauGB – beplanter Innenbereich ---------- */

    q_bplan_art: {
      station: "planung",
      kind: "frage",
      norm: "§ 30 BauGB",
      title: "Welche Art von Bebauungsplan liegt vor?",
      def: "<b>Qualifizierter B-Plan (§ 30 I BauGB):</b> enthält mindestens Festsetzungen über (1) Art der baulichen Nutzung, (2) Maß der baulichen Nutzung, (3) überbaubare Grundstücksflächen und (4) örtliche Verkehrsflächen.",
      options: [
        { label: "Qualifizierter Bebauungsplan", detail: "Alle vier Mindestfestsetzungen vorhanden → § 30 I BauGB", next: "q30_widerspruch", set: { bereich: "30" }, tone: "neutral" },
        { label: "Vorhabenbezogener Bebauungsplan", detail: "§ 30 II i. V. m. § 12 BauGB – Zulässigkeit nach dem Plan", next: "q30_widerspruch", set: { bereich: "30" }, tone: "neutral" },
        { label: "Einfacher Bebauungsplan", detail: "Mindestfestsetzungen fehlen → § 30 III BauGB: im Übrigen gelten §§ 34, 35 BauGB", next: "q30iii_widerspruch", set: { bereich: "30iii" }, tone: "neutral" }
      ]
    },

    q30iii_widerspruch: {
      station: "planung",
      kind: "frage",
      norm: "§ 30 III BauGB",
      title: "Widerspricht das Vorhaben den vorhandenen Festsetzungen des einfachen B-Plans?",
      text: "Beim einfachen Bebauungsplan sind die getroffenen Festsetzungen verbindlich; die Zulässigkeit richtet sich im Übrigen nach § 34 oder § 35 BauGB.",
      options: [
        { label: "Nein, kein Widerspruch", next: "q30iii_rest", tone: "pos" },
        { label: "Ja, Widerspruch zu einer Festsetzung", detail: "Dann kommt nur eine Befreiung in Betracht", next: "q31_befreiung", tone: "neg" }
      ]
    },

    q30iii_rest: {
      station: "planung",
      kind: "frage",
      norm: "§ 30 III i. V. m. §§ 34, 35 BauGB",
      title: "Wo liegt das Grundstück im Übrigen?",
      text: "Soweit der einfache B-Plan keine Festsetzungen enthält, beurteilt sich die Zulässigkeit nach § 34 BauGB (innerhalb der im Zusammenhang bebauten Ortsteile) oder § 35 BauGB (Außenbereich).",
      options: [
        { label: "Innerhalb eines im Zusammenhang bebauten Ortsteils", next: "q34_ortsteil", set: { bereich: "34" }, tone: "neutral" },
        { label: "Im Außenbereich", next: "q35_priv", set: { bereich: "35" }, tone: "neutral" }
      ]
    },

    q30_widerspruch: {
      station: "planung",
      kind: "frage",
      norm: "§ 30 I BauGB",
      title: "Widerspricht das Vorhaben den Festsetzungen des Bebauungsplans?",
      text: "Das Vorhaben ist zulässig, wenn es den Festsetzungen nicht widerspricht und die Erschließung gesichert ist. Maßgeblich sind insbesondere Art der baulichen Nutzung (Regelbebauung: §§ 2–9 Abs. 2, 12, 13, 14 I BauNVO), Maß der baulichen Nutzung, überbaubare Grundstücksflächen und ggf. weitere Festsetzungen.",
      def: "<b>Art der baulichen Nutzung:</b> Setzt der Plan ein Baugebiet fest (WS, WR, WA, WB, MD, MI, MU, MK, GE, GI, SO), werden die §§ 2–14 BauNVO Bestandteil des Plans (§ 1 III BauNVO). Abs. 1 = Gebietscharakter, Abs. 2 = Regelbebauung, Abs. 3 = Ausnahmebebauung.",
      options: [
        { label: "Nein – Vorhaben entspricht allen Festsetzungen", detail: "Insb. als Regelbebauung nach Abs. 2 des jeweiligen Baugebiets zulässig", next: "q_gebietsv30", tone: "pos" },
        { label: "Art der Nutzung nur als Ausnahme (Abs. 3) vorgesehen", detail: "Ausnahmebebauung → § 31 I BauGB", next: "q31_ausnahme", tone: "warn" },
        { label: "Ja – Widerspruch zu einer Festsetzung", detail: "Art (ohne Ausnahmemöglichkeit), Maß, überbaubare Fläche o. a. → nur Befreiung § 31 II BauGB", next: "q31_befreiung", tone: "neg" }
      ]
    },

    q_gebietsv30: {
      station: "planung",
      kind: "frage",
      norm: "§§ 2–9, 15 I BauNVO",
      title: "Ist das Vorhaben gebietsverträglich?",
      text: "Auch eine regelhaft zulässige Nutzung ist unzulässig, wenn sie den Gebietscharakter (jeweiliger Abs. 1 der §§ 2–9 BauNVO) gefährdet. Prüfschritte: (1) Gebietscharakter ermitteln, (2) typische Auswirkungen des Vorhabens erörtern, (3) feststellen, ob es sich um für das Baugebiet atypische Störungen handelt.",
      def: "<b>Gebietsverträglichkeit:</b> Relevant sind alle mit der Zulassung typischerweise verbundenen Auswirkungen auf die nähere Umgebung – Art und Weise der Betriebsvorgänge, Umfang, Häufigkeit und Zeitpunkte, An- und Abfahrtsverkehr, Einzugsbereich (BVerwG, 4 B 8/13). Auch <b>störempfindliche</b> Vorhaben können gebietsunverträglich sein (z. B. Seniorenpflegeheim im Gewerbegebiet). Zusätzlich: § 15 I BauNVO (Gebietserhaltungsanspruch, Rücksichtnahmegebot).",
      options: [
        { label: "Ja, gebietsverträglich", detail: "Keine atypischen Störungen, kein Verstoß gegen § 15 I BauNVO", next: "q30_erschliessung", tone: "pos" },
        { label: "Nein, gebietsunverträglich", detail: "Atypische Störungen bzw. atypische Störempfindlichkeit", next: "e_unvertraeglich", tone: "neg" }
      ]
    },

    q31_ausnahme: {
      station: "planung",
      kind: "frage",
      norm: "§ 31 I BauGB",
      title: "Kann eine Ausnahme zugelassen werden?",
      text: "Von den Festsetzungen können Ausnahmen zugelassen werden, die im Bebauungsplan nach Art und Umfang ausdrücklich vorgesehen sind (insb. Ausnahmebebauung nach Abs. 3 der §§ 2–9 BauNVO). Die Entscheidung steht im pflichtgemäßen Ermessen der Behörde und erfordert das Einvernehmen der Gemeinde. Wegen des städtebaulichen Gesamtkonzepts ist eine enge Auslegung geboten; das Vorhaben muss zudem gebietsverträglich sein.",
      options: [
        { label: "Ja, Ausnahme nach Art und Umfang vorgesehen und gebietsverträglich", next: "q30_erschliessung", set: { ermessen: true, ausnahmeBefreiung: true }, tone: "pos" },
        { label: "Nein, Ausnahme scheidet aus", detail: "Dann bleibt nur die Befreiung nach § 31 II BauGB", next: "q31_befreiung", tone: "neg" }
      ]
    },

    q31_befreiung: {
      station: "planung",
      kind: "frage",
      norm: "§ 31 II BauGB",
      title: "Liegen die Voraussetzungen einer Befreiung vor?",
      text: "Von den Festsetzungen kann befreit werden, wenn:\n1. die Grundzüge der Planung nicht berührt werden,\n2. ein Befreiungsgrund vorliegt – Wohl der Allgemeinheit (Nr. 1), städtebauliche Vertretbarkeit (Nr. 2) oder offenbar nicht beabsichtigte Härte (Nr. 3) – und\n3. die Abweichung auch unter Würdigung nachbarlicher Interessen mit den öffentlichen Belangen vereinbar ist.",
      hint: "Die Befreiung steht im Ermessen der Behörde und erfordert das Einvernehmen der Gemeinde (§ 36 I BauGB).",
      options: [
        { label: "Ja, alle Befreiungsvoraussetzungen erfüllt", next: "q30_erschliessung", set: { ermessen: true, ausnahmeBefreiung: true }, tone: "pos" },
        { label: "Nein", next: "e_befreiung_nein", tone: "neg" }
      ]
    },

    q30_erschliessung: {
      station: "planung",
      kind: "frage",
      norm: "§ 30 BauGB",
      title: "Ist die Erschließung gesichert?",
      def: "<b>Erschließung (§§ 30 f. BauGB, grundstücksbezogen):</b> mindestens Anschluss an das öffentliche Straßennetz, Versorgung mit Elektrizität und Wasser sowie Abwasserbeseitigung. <b>„Gesichert“</b>: Die Anlagen müssen nicht schon bei der Entscheidung vorhanden sein – es genügt, dass sie spätestens bei Fertigstellung des Vorhabens benutzbar sind. Bei bereits bebauten Gebieten kann von der Erschließung ausgegangen werden.",
      options: [
        { label: "Ja, Erschließung gesichert", next: "@einvernehmen", tone: "pos" },
        { label: "Nein", next: "e_erschliessung", tone: "neg" }
      ]
    },

    /* ---------- § 33 BauGB / Plansicherung ---------- */

    q33_sicherung: {
      station: "planung",
      kind: "frage",
      norm: "§§ 14, 15 BauGB",
      title: "Bestehen plansichernde Instrumente?",
      text: "Während der Planaufstellung kann die Gemeinde die Planung sichern: Veränderungssperre (§§ 14, 16–18 BauGB) oder Zurückstellung von Baugesuchen (§ 15 BauGB). Daneben besteht ggf. ein gemeindliches Vorkaufsrecht (§§ 24 f. BauGB).",
      options: [
        { label: "Keine Sicherungsinstrumente", detail: "Dann kommt eine Zulässigkeit nach § 33 BauGB in Betracht", next: "q33_reife", tone: "pos" },
        { label: "Veränderungssperre (§ 14 BauGB)", detail: "Vorhaben dürfen grundsätzlich nicht durchgeführt werden", next: "q14_ausnahme", tone: "warn" },
        { label: "Zurückstellung (§ 15 BauGB)", detail: "Entscheidung über den Bauantrag wird ausgesetzt (bis zu 12 Monate)", next: "e_zurueckstellung", tone: "neg" }
      ]
    },

    q14_ausnahme: {
      station: "planung",
      kind: "frage",
      norm: "§ 14 II BauGB",
      title: "Wird eine Ausnahme von der Veränderungssperre zugelassen?",
      text: "Wenn überwiegende öffentliche Belange nicht entgegenstehen, kann von der Veränderungssperre eine Ausnahme zugelassen werden (Einvernehmen der Gemeinde erforderlich).",
      options: [
        { label: "Ja, Ausnahme wird zugelassen", detail: "Weiter mit der Zulässigkeitsprüfung nach geltendem Recht", next: "q33_reife", set: { ermessen: true, ausnahmeBefreiung: true }, tone: "warn" },
        { label: "Nein", next: "e_sperre", tone: "neg" }
      ]
    },

    q33_reife: {
      station: "planung",
      kind: "frage",
      norm: "§ 33 BauGB",
      title: "Zulässigkeit nach § 33 BauGB (Planreife)?",
      text: "Im Gebiet eines in Aufstellung befindlichen B-Plans ist ein Vorhaben zulässig, wenn:\n1. die Öffentlichkeits- und Behördenbeteiligung durchgeführt ist (formelle Planreife),\n2. anzunehmen ist, dass das Vorhaben den künftigen Festsetzungen nicht entgegensteht (materielle Planreife),\n3. der Bauherr die künftigen Festsetzungen schriftlich anerkennt und\n4. die Erschließung gesichert ist.",
      options: [
        { label: "Ja, alle Voraussetzungen des § 33 BauGB erfüllt", next: "@einvernehmen", set: { par33: true }, tone: "pos" },
        { label: "Nein – dann gilt das bisherige Recht", detail: "Zulässigkeit richtet sich nach § 30, § 34 oder § 35 BauGB", next: "q33_bisher", tone: "neutral" }
      ]
    },

    q33_bisher: {
      station: "planung",
      kind: "frage",
      norm: "§§ 30, 34, 35 BauGB",
      title: "Nach welcher Norm beurteilt sich das Vorhaben nach bisherigem Recht?",
      options: [
        { label: "Bestehender Bebauungsplan", next: "q_bplan_art", tone: "neutral" },
        { label: "Unbeplanter Innenbereich", next: "q34_ortsteil", set: { bereich: "34" }, tone: "neutral" },
        { label: "Außenbereich", next: "q35_priv", set: { bereich: "35" }, tone: "neutral" }
      ]
    },

    /* ---------- § 34 BauGB – unbeplanter Innenbereich ---------- */

    q34_ortsteil: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I BauGB",
      title: "Liegt das Grundstück innerhalb eines im Zusammenhang bebauten Ortsteils?",
      text: "Es bietet sich an, die Prüfung in „Ortsteil“ und „Bebauungszusammenhang“ zu trennen.",
      def: "<b>Ortsteil:</b> Bebauungskomplex im Gebiet einer Gemeinde, der nach der Zahl der vorhandenen Bauten ein gewisses Gewicht besitzt und Ausdruck einer organischen Siedlungsstruktur ist. Abzugrenzen von der <b>Splittersiedlung</b> (zusammenhanglose Streubebauung ohne Ortsteilqualität).<br><br><b>Bebauungszusammenhang:</b> aufeinanderfolgende Bebauung, die trotz vorhandener Baulücken den Eindruck der Geschlossenheit vermittelt. Geländehindernisse (Damm, Fluss, Straße, Bahnlinie) lassen den Zusammenhang nicht zwingend entfallen.",
      options: [
        { label: "Ja, im Zusammenhang bebauter Ortsteil", next: "q34_faktisch", tone: "pos" },
        { label: "Nein", detail: "Dann liegt das Grundstück im Außenbereich → § 35 BauGB", next: "q35_priv", set: { bereich: "35" }, tone: "neutral" }
      ]
    },

    q34_faktisch: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I, II BauGB",
      title: "Entspricht die nähere Umgebung einem Baugebiet der BauNVO?",
      text: "Für die Art der baulichen Nutzung gilt: Ist die nähere Umgebung mit einem Baugebiet der BauNVO vergleichbar („faktisches Baugebiet“), beurteilt sich die Art allein nach § 34 II BauGB i. V. m. §§ 2–14 BauNVO (Ausnahme: urbanes Gebiet MU, § 245c III BauGB). Andernfalls liegt eine Gemengelage vor.",
      options: [
        { label: "Ja – faktisches Baugebiet", detail: "Prüfung wie bei einem qualifizierten B-Plan: § 34 II BauGB i. V. m. BauNVO", next: "q34_2_art", tone: "neutral" },
        { label: "Nein – Gemengelage", detail: "Einfügen nach § 34 I BauGB anhand des prägenden Rahmens", next: "q34_1_art", tone: "neutral" }
      ]
    },

    q34_2_art: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 II BauGB i. V. m. §§ 2–14 BauNVO",
      title: "Ist das Vorhaben seiner Art nach im faktischen Baugebiet zulässig?",
      text: "Abs. 2 der jeweiligen Baugebietsnorm: als Regelbebauung zulässig? Abs. 3: als Ausnahme möglich (§ 34 II i. V. m. § 31 I BauGB)? Sonst: Befreiung (§ 34 II i. V. m. § 31 II BauGB).",
      options: [
        { label: "Regelbebauung (jeweiliger Abs. 2)", next: "q34_gebietsv", tone: "pos" },
        { label: "Nur als Ausnahme (jeweiliger Abs. 3)", detail: "§ 34 II i. V. m. § 31 I BauGB – Ermessen, Einvernehmen", next: "q34_31_1", tone: "warn" },
        { label: "Weder Regel- noch Ausnahmebebauung", detail: "Nur Befreiung § 34 II i. V. m. § 31 II BauGB", next: "q34_31_2", tone: "neg" }
      ]
    },

    q34_31_1: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 II i. V. m. § 31 I BauGB",
      title: "Kann die Ausnahme zugelassen werden?",
      text: "Die ausnahmsweise zulässigen Nutzungsarten (Abs. 3 der Baugebietsnorm) können nach pflichtgemäßem Ermessen zugelassen werden; enge Auslegung, Gebietsverträglichkeit erforderlich.",
      options: [
        { label: "Ja", next: "q34_gebietsv", set: { ermessen: true, ausnahmeBefreiung: true }, tone: "pos" },
        { label: "Nein", detail: "Dann bleibt die Befreiung", next: "q34_31_2", tone: "neg" }
      ]
    },

    q34_31_2: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 II i. V. m. § 31 II BauGB",
      title: "Liegen die Voraussetzungen einer Befreiung vor?",
      text: "Befreiung, wenn (1) die Grundzüge der „Planung“ (hier: der faktischen Gebietsprägung) nicht berührt werden, (2) ein Befreiungsgrund (Wohl der Allgemeinheit / städtebauliche Vertretbarkeit / unbillige Härte) vorliegt und (3) die Abweichung unter Würdigung nachbarlicher Interessen mit öffentlichen Belangen vereinbar ist.",
      options: [
        { label: "Ja", next: "q34_gebietsv", set: { ermessen: true, ausnahmeBefreiung: true }, tone: "pos" },
        { label: "Nein", next: "e_34_unzul", tone: "neg" }
      ]
    },

    q34_gebietsv: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 II BauGB i. V. m. § 15 I BauNVO",
      title: "Gebietsverträglich und kein Verstoß gegen § 15 I BauNVO?",
      text: "Wie im beplanten Gebiet: (1) Gebietscharakter ermitteln, (2) typische Auswirkungen des Vorhabens (Betriebsvorgänge, Umfang, Zeiten, An-/Abfahrtsverkehr, Einzugsbereich), (3) atypische Störungen? Zudem sind Rücksichtnahmegebot und Gebietserhaltungsanspruch (§ 34 II BauGB i. V. m. § 15 I 1 BauNVO) zu prüfen.",
      options: [
        { label: "Ja", next: "q34_uebrige", tone: "pos" },
        { label: "Nein, gebietsunverträglich", next: "e_unvertraeglich", tone: "neg" }
      ]
    },

    q34_1_art: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I BauGB",
      title: "Fügt sich das Vorhaben seiner Art nach ein (Gemengelage)?",
      text: "Bei fehlender Vergleichbarkeit mit einem BauNVO-Baugebiet ist das Vorhaben zulässig, wenn keine bodenrechtlich relevanten Spannungen entstehen – bringt das Vorhaben „Unruhe“ in das Gebiet?",
      def: "<b>Einfügen:</b> zu bejahen, wenn sich das Vorhaben in dem für die nähere Umgebung prägenden Rahmen bewegt, ihn also weder über- noch unterschreitet. Der prägende Rahmen wird durch die tatsächlich vorhandenen Baulichkeiten und Nutzungen definiert.",
      options: [
        { label: "Ja, hält den prägenden Rahmen ein / keine Spannungen", next: "q34_uebrige", tone: "pos" },
        { label: "Nein", next: "e_34_unzul", tone: "neg" }
      ]
    },

    q34_uebrige: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I BauGB",
      title: "Einfügen nach Maß, Bauweise und überbaubarer Grundstücksfläche?",
      text: "Das Vorhaben muss sich auch hinsichtlich des Maßes der baulichen Nutzung, der Bauweise (vgl. § 22 BauNVO) und der überbaubaren Grundstücksfläche (vgl. § 23 BauNVO) in die Eigenart der näheren Umgebung einfügen.",
      hint: "Eine Rahmenüberschreitung kann ausnahmsweise zulässig sein, wenn sie keine städtebaulichen Spannungen auslöst und keine negative Vorbildwirkung hat.",
      options: [
        { label: "Ja, fügt sich ein", next: "q34_wohn", tone: "pos" },
        { label: "Nein", next: "e_34_unzul", tone: "neg" }
      ]
    },

    q34_wohn: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I 2 BauGB",
      title: "Gesunde Wohn- und Arbeitsverhältnisse gewahrt, Ortsbild nicht beeinträchtigt?",
      text: "Die Anforderungen an gesunde Wohn- und Arbeitsverhältnisse müssen gewahrt bleiben; das Ortsbild darf nicht beeinträchtigt werden.",
      options: [
        { label: "Ja", next: "q34_erschliessung", tone: "pos" },
        { label: "Nein", next: "e_34_unzul", tone: "neg" }
      ]
    },

    q34_erschliessung: {
      station: "planung",
      kind: "frage",
      norm: "§ 34 I BauGB",
      title: "Ist die Erschließung gesichert?",
      def: "<b>Erschließung:</b> Anschluss an das öffentliche Straßennetz, Versorgung mit Elektrizität und Wasser, Abwasserbeseitigung; benutzbar spätestens bei Fertigstellung. Bei bereits bebauten Gebieten kann von der Erschließung ausgegangen werden.",
      options: [
        { label: "Ja", next: "@einvernehmen", tone: "pos" },
        { label: "Nein", next: "e_erschliessung", tone: "neg" }
      ]
    },

    /* ---------- § 35 BauGB – Außenbereich ---------- */

    q35_priv: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 I, II BauGB",
      title: "Ist das Vorhaben privilegiert (§ 35 I Nr. 1–8 BauGB)?",
      text: "Der Außenbereich ist negativ definiert: alles, was nicht (beplanter oder unbeplanter) Innenbereich ist. Er soll grundsätzlich von Bebauung freigehalten werden – etwas anderes gilt nur für privilegierte Vorhaben.",
      def: "<b>Privilegierte Vorhaben (Auswahl):</b> Nr. 1 land-/forstwirtschaftlicher Betrieb (Landwirtschaft: § 201 BauGB; Betrieb = auf Dauer angelegtes, auf Gewinnerzielung gerichtetes, lebensfähiges Unternehmen – keine Hobbyhaltung; Futter überwiegend auf eigenen Flächen erzeugbar), Nr. 2 Gartenbau, Nr. 3 öffentliche Versorgung, Nr. 4 ortsgebundene Vorhaben mit besonderen Anforderungen an den Außenbereich, Nr. 5 Wind-/Wasserenergie, Nr. 6 Biomasse, Nr. 7 Kernenergie (nicht: Neuerrichtung von Anlagen zur Kernbrennstoffspaltung), Nr. 8 Solarenergie.",
      options: [
        { label: "Ja, privilegiertes Vorhaben (Nr. 1–8)", next: "q35_belange_priv", set: { privilegiert: true }, tone: "pos" },
        { label: "Nein, sonstiges (nicht privilegiertes) Vorhaben", detail: "Zulässigkeit nur im Einzelfall, § 35 II BauGB", next: "q35_belange_sonst", tone: "neutral" }
      ]
    },

    q35_belange_priv: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 I, III BauGB",
      title: "Stehen öffentliche Belange entgegen?",
      text: "Privilegierte Vorhaben sind zulässig, wenn öffentliche Belange nicht entgegenstehen und die ausreichende Erschließung gesichert ist. Wegen der Privilegierung haben sie ein erhöhtes Durchsetzungsvermögen gegenüber den Belangen des § 35 III BauGB (nachvollziehende Abwägung).",
      def: "<b>Öffentliche Belange (§ 35 III BauGB, Auswahl):</b> Widerspruch zur Darstellung des Flächennutzungsplans, schädliche Umwelteinwirkungen, Belange des Naturschutzes und der Landschaftspflege, Verunstaltung des Orts- und Landschaftsbilds, Entstehung/Verfestigung/Erweiterung einer Splittersiedlung.",
      options: [
        { label: "Nein, keine entgegenstehenden Belange", next: "q35_erschl", tone: "pos" },
        { label: "Ja, öffentliche Belange stehen entgegen", next: "e_35_unzul", tone: "neg" }
      ]
    },

    q35_belange_sonst: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 II, III BauGB",
      title: "Werden öffentliche Belange beeinträchtigt?",
      text: "Sonstige Vorhaben können im Einzelfall zugelassen werden, wenn ihre Ausführung oder Benutzung öffentliche Belange nicht beeinträchtigt. Hier genügt – anders als bei privilegierten Vorhaben – bereits eine bloße Beeinträchtigung (strengerer Maßstab!).",
      options: [
        { label: "Nein, keine Beeinträchtigung", next: "q35_erschl", tone: "pos" },
        { label: "Ja, Beeinträchtigung liegt vor", detail: "Dann ggf. Teilprivilegierung nach § 35 IV BauGB prüfen", next: "q35_4", tone: "neg" }
      ]
    },

    q35_4: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 IV BauGB",
      title: "Greift eine Teilprivilegierung (begünstigtes Vorhaben)?",
      text: "Bestimmten Vorhaben (z. B. Nutzungsänderung erhaltenswerter Bausubstanz, Neuerrichtung eines gleichartigen Wohngebäudes, maßvolle Erweiterung) kann nicht entgegengehalten werden, dass sie dem Flächennutzungsplan widersprechen, die natürliche Eigenart der Landschaft beeinträchtigen oder die Entstehung/Verfestigung einer Splittersiedlung befürchten lassen.",
      options: [
        { label: "Ja, begünstigtes Vorhaben – nur 'gesperrte' Belange betroffen", detail: "Die übrigen Belange sind nicht beeinträchtigt", next: "q35_erschl", set: { teilpriv: true }, tone: "warn" },
        { label: "Nein bzw. andere Belange bleiben beeinträchtigt", next: "e_35_unzul", tone: "neg" }
      ]
    },

    q35_erschl: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 I, II BauGB",
      title: "Ist die ausreichende Erschließung gesichert?",
      text: "Im Außenbereich gelten geringere Anforderungen an die Erschließung als in den §§ 30, 34 BauGB („ausreichende“ Erschließung, abhängig vom konkreten Vorhaben).",
      options: [
        { label: "Ja", next: "q35_rueckbau", tone: "pos" },
        { label: "Nein", next: "e_erschliessung", tone: "neg" }
      ]
    },

    q35_rueckbau: {
      station: "planung",
      kind: "frage",
      norm: "§ 35 V BauGB",
      title: "Schonungsgebot und Rückbauverpflichtung beachtet?",
      text: "Vorhaben sind in flächensparender, die Bodenversiegelung auf das notwendige Maß begrenzender und den Außenbereich schonender Weise auszuführen (§ 35 V 1 BauGB). Für bestimmte Vorhaben (insb. § 35 I Nr. 2–6 BauGB) ist eine Verpflichtungserklärung zum Rückbau nach dauerhafter Nutzungsaufgabe abzugeben (§ 35 V 2 BauGB).",
      options: [
        { label: "Ja bzw. nicht einschlägig", next: "@einvernehmen", tone: "pos" },
        { label: "Nein, Verpflichtungserklärung fehlt", next: "e_35_unzul", tone: "neg" }
      ]
    },

    /* ---------- § 36 BauGB – Einvernehmen der Gemeinde ---------- */

    q36_identisch: {
      station: "planung",
      kind: "frage",
      norm: "§ 36 I BauGB",
      title: "Ist die Bauaufsichtsbehörde mit der Gemeinde identisch?",
      text: "Zwischenergebnis: Das Vorhaben ist bauplanungsrechtlich zulässig. ✓\n\nBei Vorhaben nach §§ 31, 33–35 BauGB ist das Einvernehmen der (Orts-)Gemeinde erforderlich – aber nur, wenn die Bauaufsichtsbehörde nicht mit der Gemeinde identisch ist (z. B. erforderlich, wenn die Kreisverwaltung für eine Ortsgemeinde entscheidet).",
      options: [
        { label: "Ja, identisch (z. B. kreisfreie/große kreisangehörige Stadt)", detail: "Einvernehmen entbehrlich – die Gemeinde entscheidet selbst", next: "@bauordnung", tone: "pos" },
        { label: "Nein, Bauaufsichtsbehörde ≠ Gemeinde", detail: "Einvernehmen nach § 36 I BauGB erforderlich", next: "q36_status", tone: "neutral" }
      ]
    },

    q36_status: {
      station: "planung",
      kind: "frage",
      norm: "§ 36 II BauGB",
      title: "Hat die Gemeinde ihr Einvernehmen erteilt?",
      text: "Das Einvernehmen gilt als erteilt, wenn es nicht binnen zwei Monaten nach Eingang des Ersuchens verweigert wird (Einvernehmensfiktion, § 36 II 2 BauGB). Verweigern darf die Gemeinde nur aus den sich aus §§ 31, 33–35 BauGB ergebenden Gründen (§ 36 II 1 BauGB).",
      options: [
        { label: "Einvernehmen erteilt", next: "@bauordnung", tone: "pos" },
        { label: "Frist von 2 Monaten verstrichen – Fiktion", detail: "§ 36 II 2 BauGB: Einvernehmen gilt als erteilt", next: "@bauordnung", tone: "pos" },
        { label: "Einvernehmen verweigert", next: "q36_recht", tone: "neg" }
      ]
    },

    q36_recht: {
      station: "planung",
      kind: "frage",
      norm: "§ 36 II 3 BauGB, § 71 LBauO",
      title: "Ist die Verweigerung des Einvernehmens rechtmäßig?",
      text: "Die Gemeinde darf das Einvernehmen nur aus den sich aus §§ 31, 33–35 BauGB ergebenden Gründen versagen. Ist die Versagung rechtswidrig (Vorhaben ist planungsrechtlich zulässig), kann das Einvernehmen durch die Bauaufsichtsbehörde oder die Widerspruchsbehörde ersetzt werden (§ 36 II 3 BauGB i. V. m. § 71 LBauO).",
      options: [
        { label: "Verweigerung rechtswidrig → Ersetzung nach § 71 LBauO", detail: "Das fehlende Einvernehmen wird ersetzt; die Prüfung geht weiter", next: "@bauordnung", set: { ersetzung: true }, tone: "warn" },
        { label: "Verweigerung rechtmäßig", detail: "Das Vorhaben ist planungsrechtlich nicht zulässig", next: "e_36", tone: "neg" }
      ]
    },

    /* ================= C.II.2 Bauordnungsrecht ================= */

    info_bo_skip: {
      station: "bauord",
      kind: "frage",
      norm: "§ 66 IV LBauO",
      title: "Bauordnungsrecht: im vereinfachten Verfahren nicht zu prüfen",
      text: "Da das vereinfachte Genehmigungsverfahren gewählt wurde, ist das Bauordnungsrecht nicht Prüfungsmaßstab der Genehmigung (§ 66 IV LBauO).",
      hint: "Achtung: Die materiellen Anforderungen des Bauordnungsrechts gelten trotzdem! Der Bauherr bleibt für ihre Einhaltung verantwortlich – die Behörde prüft sie nur nicht im Genehmigungsverfahren.",
      options: [
        { label: "Verstanden – weiter zu den sonstigen Vorschriften", next: "q_sonstige", tone: "neutral" }
      ]
    },

    q_bo: {
      station: "bauord",
      kind: "frage",
      norm: "LBauO",
      title: "Verstößt das Vorhaben gegen Bauordnungsrecht?",
      text: "Das Vorhaben darf keinen bauordnungsrechtlichen Vorschriften widersprechen. Praktisch wichtige Prüffelder:",
      def: "<b>Abstandsflächen</b> (§ 8 LBauO) · <b>Verunstaltungsverbot</b> (§ 5 LBauO) · <b>Brandschutz</b> (§ 15 LBauO) · <b>Stellplatzpflicht</b> (§ 47 LBauO) · <b>Werbeanlagen</b> (§ 52 LBauO)",
      options: [
        { label: "Kein Verstoß", next: "q_sonstige", tone: "pos" },
        { label: "Verstoß gegen Abstandsflächen (§ 8 LBauO)", next: "q_bo_abw", tone: "neg" },
        { label: "Verstoß gegen das Verunstaltungsverbot (§ 5 LBauO)", next: "q_bo_abw", tone: "neg" },
        { label: "Verstoß gegen Brandschutz (§ 15 LBauO)", next: "q_bo_abw", tone: "neg" },
        { label: "Verstoß gegen die Stellplatzpflicht (§ 47 LBauO)", next: "q_bo_abw", tone: "neg" },
        { label: "Verstoß bei Werbeanlagen (§ 52 LBauO)", next: "q_bo_abw", tone: "neg" }
      ]
    },

    q_bo_abw: {
      station: "bauord",
      kind: "frage",
      norm: "§ 69 LBauO",
      title: "Kann eine Abweichung zugelassen werden?",
      text: "Von bauordnungsrechtlichen Vorschriften kann die Bauaufsichtsbehörde Abweichungen zulassen, wenn dies mit den öffentlichen Belangen, insbesondere dem Schutzzweck der jeweiligen Anforderung, vereinbar ist (bei der Stellplatzpflicht kommt auch eine Ablösung in Betracht).",
      options: [
        { label: "Ja, Abweichung wird zugelassen", next: "q_sonstige", set: { ermessen: true }, tone: "warn" },
        { label: "Nein", next: "e_bo", tone: "neg" }
      ]
    },

    /* ================= C.II.3 Sonstige ö.-r. Vorschriften ================= */

    q_sonstige: {
      station: "sonst",
      kind: "frage",
      norm: "Schlusspunkttheorie",
      title: "Stehen sonstige öffentlich-rechtliche Vorschriften entgegen?",
      text: "Die Baugenehmigung ergeht als „Schlusspunkt“ der öffentlich-rechtlichen Prüfung: Auch sonstige öffentlich-rechtliche Vorschriften dürfen dem Vorhaben nicht entgegenstehen.",
      def: "<b>Beispiele:</b> Bauverbote nach §§ 22 ff. LStrG · §§ 9, 9a FStrG (Anbauverbot, 20 m zur Bundesstraße) · § 78 IV WHG (Bauen im Überschwemmungsgebiet) · § 30 BNatSchG, § 15 LNatSchG (geschützte Biotope) · Immissionsschutzrecht (§§ 22 ff. BImSchG, §§ 4 ff. LImSchG)",
      options: [
        { label: "Nein, keine entgegenstehenden Vorschriften", next: "e_erteilen", tone: "pos" },
        { label: "Ja, eine sonstige Vorschrift steht entgegen", next: "q_sonst_ausnahme", tone: "neg" }
      ]
    },

    q_sonst_ausnahme: {
      station: "sonst",
      kind: "frage",
      norm: "Fachrecht",
      title: "Lässt das Fachrecht eine Ausnahme oder Befreiung zu?",
      text: "Viele Fachgesetze sehen eigene Ausnahme- oder Befreiungstatbestände vor (z. B. Ausnahmegenehmigung im Überschwemmungsgebiet nach § 78 WHG, naturschutzrechtliche Ausnahme/Befreiung).",
      options: [
        { label: "Ja, Ausnahme/Befreiung wird erteilt", next: "e_erteilen", set: { ermessen: true }, tone: "warn" },
        { label: "Nein", next: "e_sonst", tone: "neg" }
      ]
    },

    /* ================= D. Ergebnisse ================= */

    e_erteilen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 70 I LBauO",
      title: "Anspruch auf Erteilung der Baugenehmigung (+)",
      text: "Dem Vorhaben stehen keine baurechtlichen oder sonstigen öffentlich-rechtlichen Vorschriften entgegen. Die Erteilung der Baugenehmigung ist eine gebundene Entscheidung – der Bauherr hat einen Rechtsanspruch.\n\nDie Baugenehmigung ergeht schriftlich (§ 70 I 4 LBauO, sog. „Bauschein“) und ist zuzustellen (§ 70 III LBauO)."
    },

    e_unzustaendig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 3 I Nr. 1 VwVfG",
      title: "Formelle Voraussetzungen (–): Behörde unzuständig",
      text: "Der Antrag wurde nicht an die örtlich zuständige Behörde gerichtet. Die formellen Anspruchsvoraussetzungen liegen nicht vor.\n\nPraxis: Die unzuständige Behörde gibt den Antrag an die zuständige Behörde ab bzw. der Antrag ist dort neu zu stellen."
    },

    e_kein_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 63 LBauO",
      title: "Formelle Voraussetzungen (–): kein ordnungsgemäßer Bauantrag",
      text: "Ohne ordnungsgemäßen, vollständigen Bauantrag besteht (derzeit) kein Anspruch auf Erteilung der Baugenehmigung.\n\nPraxis: Die Behörde fordert fehlende Unterlagen nach; nach Vervollständigung kann die Prüfung fortgesetzt werden."
    },

    e_vorlage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 64 LBauO",
      title: "Formelle Voraussetzungen (–): Bauvorlageberechtigung fehlt",
      text: "Bei der Errichtung oder Änderung genehmigungsbedürftiger Gebäude muss der Bauantrag von einem Bauvorlageberechtigten (Architekt, Ingenieur) verantwortet werden. Fehlt diese Verantwortung, ist der Antrag nicht ordnungsgemäß."
    },

    e_keine_massnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 61 LBauO",
      title: "Keine genehmigungsbedürftige Maßnahme",
      text: "Es liegt keine Errichtung, Änderung, Nutzungsänderung und kein Abbruch vor. Das Vorhaben ist nicht genehmigungsbedürftig – ein Anspruch nach § 70 I 1 LBauO scheidet mangels Genehmigungserfordernis aus."
    },

    e_keine_anlage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 2 I LBauO",
      title: "Keine bauliche Anlage",
      text: "Die Maßnahme betrifft weder eine bauliche Anlage (§ 2 I LBauO) noch eine andere Anlage oder Einrichtung i. S. d. § 1 I 2 LBauO. Das Vorhaben unterfällt nicht der Genehmigungspflicht des § 61 LBauO."
    },

    e_frei62: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 62 LBauO",
      title: "Genehmigungsfreies Vorhaben",
      text: "Das Vorhaben ist nach § 62 LBauO genehmigungsfrei. Eine Baugenehmigung ist weder erforderlich noch zu erteilen.\n\nAchtung: Die materiellen Anforderungen des Bau- und sonstigen öffentlichen Rechts gelten trotzdem – der Bauherr bleibt selbst verantwortlich."
    },

    e_frei67: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 67 LBauO",
      title: "Freigestelltes Vorhaben",
      text: "Das Vorhaben ist nach § 67 LBauO von der Genehmigungspflicht freigestellt (z. B. Wohngebäude im Geltungsbereich eines qualifizierten Bebauungsplans). Statt des Genehmigungsverfahrens gilt das Freistellungsverfahren mit den dort geregelten Anforderungen und Fristen."
    },

    e_frei76: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 76 LBauO",
      title: "Fliegender Bau",
      text: "Für Fliegende Bauten gilt ein eigenes Regime (Ausführungsgenehmigung). Eine Baugenehmigung nach § 70 LBauO ist nicht erforderlich."
    },

    e_frei84: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 84 LBauO",
      title: "Nicht der Bauaufsicht unterliegendes Vorhaben",
      text: "Das Vorhaben unterliegt nach § 84 LBauO nicht der Bauaufsicht. Ein bauaufsichtliches Genehmigungsverfahren findet nicht statt."
    },

    e_unvertraeglich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 2–9, 15 BauNVO",
      title: "Bauplanungsrechtlich unzulässig: gebietsunverträglich",
      text: "Das Vorhaben gefährdet den Gebietscharakter durch atypische Störungen bzw. atypische Störempfindlichkeit und ist daher trotz (formaler) Subsumierbarkeit unter eine Nutzungsart unzulässig.\n\nDie Baugenehmigung ist zu versagen. (Beispiele aus der Rspr.: Stundenhotel im WA, Zustellstützpunkt im WA, Seniorenpflegeheim im GE, Krematorium im GE.)"
    },

    e_befreiung_nein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 30, 31 II BauGB",
      title: "Bauplanungsrechtlich unzulässig: Widerspruch zum B-Plan, keine Befreiung",
      text: "Das Vorhaben widerspricht den Festsetzungen des Bebauungsplans und kann mangels Befreiungsvoraussetzungen nicht zugelassen werden. Die Baugenehmigung ist zu versagen."
    },

    e_erschliessung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 30, 34, 35 BauGB",
      title: "Bauplanungsrechtlich unzulässig: Erschließung nicht gesichert",
      text: "Die Erschließung des Baugrundstücks ist nicht gesichert. Das Vorhaben ist bauplanungsrechtlich unzulässig; die Baugenehmigung ist zu versagen.\n\nHinweis: Wird die Erschließung später gesichert (spätestens benutzbar bei Fertigstellung), kann erneut entschieden werden."
    },

    e_sperre: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 BauGB",
      title: "Unzulässig: Veränderungssperre",
      text: "Im Geltungsbereich der Veränderungssperre dürfen Vorhaben i. S. d. § 29 BauGB nicht durchgeführt werden; eine Ausnahme nach § 14 II BauGB wurde nicht zugelassen. Die Baugenehmigung ist zu versagen."
    },

    e_zurueckstellung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 15 BauGB",
      title: "Entscheidung ausgesetzt: Zurückstellung",
      text: "Die Entscheidung über den Bauantrag wird auf Antrag der Gemeinde für bis zu zwölf Monate ausgesetzt. Es ergeht derzeit weder Genehmigung noch Ablehnung; nach Ablauf der Zurückstellung wird nach der dann geltenden Rechtslage entschieden."
    },

    e_34_unzul: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 BauGB",
      title: "Bauplanungsrechtlich unzulässig (§ 34 BauGB)",
      text: "Das Vorhaben fügt sich nicht in die Eigenart der näheren Umgebung ein bzw. erfüllt die Voraussetzungen des § 34 BauGB nicht. Die Baugenehmigung ist zu versagen."
    },

    e_35_unzul: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 BauGB",
      title: "Bauplanungsrechtlich unzulässig (§ 35 BauGB)",
      text: "Das Außenbereichsvorhaben ist unzulässig: Öffentliche Belange stehen entgegen bzw. werden beeinträchtigt (oder die Anforderungen des § 35 V BauGB sind nicht erfüllt). Die Baugenehmigung ist zu versagen.\n\nGrundgedanke: Der Außenbereich soll von nicht privilegierter Bebauung grundsätzlich freigehalten werden."
    },

    e_36: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 BauGB",
      title: "Versagung: Einvernehmen rechtmäßig verweigert",
      text: "Die Gemeinde hat ihr Einvernehmen aus Gründen der §§ 31, 33–35 BauGB rechtmäßig verweigert – das Vorhaben ist danach planungsrechtlich unzulässig. Eine Ersetzung nach § 36 II 3 BauGB i. V. m. § 71 LBauO scheidet aus; die Baugenehmigung ist zu versagen."
    },

    e_bo: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "LBauO",
      title: "Versagung: Verstoß gegen Bauordnungsrecht",
      text: "Das Vorhaben verstößt gegen bauordnungsrechtliche Vorschriften; eine Abweichung nach § 69 LBauO kommt nicht in Betracht. Die Baugenehmigung ist zu versagen."
    },

    e_sonst: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Sonstiges ö. Recht",
      title: "Versagung: sonstige öffentlich-rechtliche Vorschrift steht entgegen",
      text: "Dem Vorhaben steht eine sonstige öffentlich-rechtliche Vorschrift entgegen (z. B. straßenrechtliches Bauverbot, Hochwasserschutz, Naturschutz); eine fachrechtliche Ausnahme/Befreiung wurde nicht erteilt. Die Baugenehmigung ist als Schlusspunkt der öffentlich-rechtlichen Prüfung zu versagen."
    }
  },

  /* Dynamische Weichen – abhängig von vorherigen Antworten */
  routers: {
    /* Einvernehmen nur bei Vorhaben nach §§ 31, 33–35 BauGB erforderlich */
    "@einvernehmen": function (flags) {
      var noetig = flags.bereich === "34" || flags.bereich === "35" ||
        flags.par33 || flags.ausnahmeBefreiung;
      return noetig ? "q36_identisch" : "@bauordnung";
    },
    /* Im vereinfachten Verfahren wird das BauOR nicht geprüft (§ 66 IV LBauO) */
    "@bauordnung": function (flags) {
      return flags.vereinfacht ? "info_bo_skip" : "q_bo";
    }
  },

  /* Beschriftung des Ergebnis-Banners je Verdict */
  verdictLabels: {
    pos: "Ergebnis: Anspruch besteht",
    neg: "Ergebnis: kein Anspruch / Versagung",
    frei: "Ergebnis: keine Genehmigung erforderlich",
    warn: "Ergebnis: Verfahren ausgesetzt"
  },

  /* Zusatztexte für das positive Ergebnis, abhängig vom Prüfungsverlauf */
  resultExtras: function (flags, node) {
    var extras = [];
    if (node.verdict !== "pos") return extras;
    if (flags.ermessen) {
      extras.push("Besonderheit Ermessen: Soweit eine Ausnahme, Befreiung (§ 31 BauGB) oder Abweichung (§ 69 LBauO) erforderlich war, steht die Zulassung im Ermessen der Bauaufsichtsbehörde. Insoweit besteht ein Anspruch auf ermessensfehlerfreie Entscheidung; nur bei Ermessensreduzierung auf Null ein Anspruch auf Erteilung.");
    }
    if (flags.vereinfacht) {
      extras.push("Hinweis vereinfachtes Verfahren: Das Bauordnungsrecht war nicht Prüfungsmaßstab (§ 66 IV LBauO). Seine materiellen Anforderungen gelten gleichwohl – der Bauherr bleibt verantwortlich.");
    }
    if (flags.ersetzung) {
      extras.push("Hinweis Einvernehmen: Das rechtswidrig verweigerte Einvernehmen der Gemeinde ist nach § 36 II 3 BauGB i. V. m. § 71 LBauO zu ersetzen.");
    }
    if (flags.vorbescheid) {
      extras.push("Bauvorbescheid: Es ergeht kein Bauschein, sondern ein Bauvorbescheid (§ 72 i. V. m. § 70 I 1 LBauO) über die zur Entscheidung gestellten Fragen – mit Bindungswirkung für das spätere Baugenehmigungsverfahren.");
    }
    return extras;
  }
});
