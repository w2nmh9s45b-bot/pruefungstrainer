/*
 * Prüfungsschema: Aufgaben der Gemeinden und Verbandskompetenz (§§ 2, 67, 68 GemO)
 * Fach: Kommunalrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS I):
 *  - "04-07 PLE Aufgaben der Gemeinden, Verbandsgemeinden und Landkreise"
 *  - "2023_FS2V_04_05 PLE Organkompetenzen" (Verbandskompetenz-Rückblick)
 *  - Gesetze: GemO RLP §§ 2, 67, 68 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-aufgaben",
  subject: "Kommunalrecht",
  fs: ["FS1"],
  area: "Grundlagen · Aufgaben",
  title: "Aufgabenart & Verbandskompetenz (§§ 2, 67, 68 GemO)",
  description: "Qualifikation einer Aufgabe (freie Selbstverwaltungsaufgabe, Pflichtaufgabe, Auftragsangelegenheit) und Bestimmung des zuständigen Trägers – Ortsgemeinde, Verbandsgemeinde oder Landkreis – mit den Folgen für Weisungsrechte und Aufsicht.",
  start: "start",
  stations: [
    { id: "art", label: "Aufgabenart" },
    { id: "traeger", label: "Verbandskompetenz" },
    { id: "wahrnehmung", label: "Wahrnehmung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zuständigkeit geklärt",
    neg: "Ergebnis: keine Gemeindeaufgabe",
    frei: "Ergebnis: Einordnung",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§ 2 I GemO, Art. 28 II GG, Art. 49 LV",
      title: "Betrifft die Aufgabe eine Angelegenheit der örtlichen Gemeinschaft?",
      text: "Ausgangspunkt jeder kommunalrechtlichen Prüfung ist die Aufgabenart. Die Gemeinden können in ihrem Gebiet jede öffentliche Aufgabe der örtlichen Gemeinschaft übernehmen, soweit sie nicht durch Gesetz ausdrücklich anderen Stellen im dringenden öffentlichen Interesse ausschließlich zugewiesen ist (§ 2 I 1 GemO – Allzuständigkeit).",
      def: "<b>Angelegenheiten der örtlichen Gemeinschaft</b> (BVerfGE 79, 127 – Rastede) sind Bedürfnisse und Interessen, die in der örtlichen Gemeinschaft wurzeln oder auf sie einen spezifischen Bezug haben, die also den Gemeindeeinwohnern gerade als solchen gemeinsam sind, indem sie das Zusammenleben und -wohnen der Menschen in der politischen Gemeinde betreffen.<br><b>Prüfe:</b> örtlicher Aspekt (Bezug zum Gemeindegebiet) + sachlicher Aspekt (dient den Belangen der Bevölkerung dieses Gebiets).",
      options: [
        { label: "Ja, Angelegenheit der örtlichen Gemeinschaft", detail: "z. B. Dorfgemeinschaftshaus, Grillhütte, Friedhof, Feste, örtliche Einrichtungen", next: "q_pflicht", set: { art: "sv" }, tone: "pos" },
        { label: "Nein, Vollzug staatlicher Aufgaben", detail: "z. B. Bauaufsicht (§ 58 LBauO), Gefahrenabwehr (§ 75 POG), Meldewesen", next: "q_auftrag", set: { art: "staat" }, tone: "neutral" }
      ]
    },

    q_auftrag: {
      station: "art",
      kind: "frage",
      norm: "§ 2 II GemO",
      title: "Ist die staatliche Aufgabe der Gemeinde durch Gesetz übertragen?",
      text: "Soweit den Gemeinden durch Gesetz oder auf Grund eines Gesetzes staatliche Aufgaben übertragen sind (Auftragsangelegenheiten), erfüllen sie diese nach Weisung der zuständigen Behörden (§ 2 II 1 GemO). Neue Aufgaben können den Gemeinden nur durch Gesetz übertragen werden; dabei ist die Aufbringung der Mittel zu regeln (§ 2 III GemO, Konnexitätsprinzip Art. 49 V LV).",
      options: [
        { label: "Ja, gesetzlich übertragen", detail: "Auftragsangelegenheit i. S. d. § 2 II GemO", next: "e_auftrag", tone: "pos" },
        { label: "Nein", detail: "Aufgabe verbleibt bei der staatlichen Behörde", next: "e_keine", tone: "neg" }
      ]
    },

    q_pflicht: {
      station: "art",
      kind: "frage",
      norm: "§ 2 I GemO",
      title: "Besteht eine gesetzliche Pflicht zur Wahrnehmung der Aufgabe?",
      def: "<b>Freie Selbstverwaltungsaufgabe</b> (§ 2 I 1 GemO): Gemeinde entscheidet über das OB und das WIE (z. B. Theater, Museum, Schwimmbad, Märkte und Feste).<br><b>Pflichtaufgabe der Selbstverwaltung</b> (§ 2 I 2 GemO): das OB ist gesetzlich vorgegeben, das WIE bleibt eigenverantwortlich (z. B. Wasserversorgung § 48 I LWG, Abwasserbeseitigung § 57 I LWG, Brandschutz § 2 II 1 LBKG, Friedhofswesen § 2 I BestG, Kita § 5 IV KitaG).",
      options: [
        { label: "Nein – freie Selbstverwaltungsaufgabe", detail: "§ 2 I 1 GemO: OB und WIE frei", next: "q_struktur", set: { pflicht: "frei" }, tone: "neutral" },
        { label: "Ja – Pflichtaufgabe der Selbstverwaltung", detail: "§ 2 I 2 GemO: OB Pflicht, WIE frei", next: "q_struktur", set: { pflicht: "pflicht" }, tone: "neutral" }
      ]
    },

    q_struktur: {
      station: "traeger",
      kind: "frage",
      norm: "§§ 1, 64 GemO, § 2 LKO",
      title: "In welcher kommunalen Struktur stellt sich die Frage?",
      text: "Träger der kommunalen Selbstverwaltung in RLP: Ortsgemeinden, verbandsfreie Gemeinden, große kreisangehörige Städte, kreisfreie Städte sowie als Gemeindeverbände die Verbandsgemeinden, Landkreise und der Bezirksverband Pfalz. Gemeindeverbände haben Selbstverwaltung nur im Rahmen ihres gesetzlichen Aufgabenbereichs (Art. 28 II 2 GG, Art. 49 II LV).",
      hint: "Überörtliche Aufgaben, die die Leistungsfähigkeit der Gemeinden übersteigen, nimmt der Landkreis wahr (§ 2 LKO – Ergänzungs- und Ausgleichsfunktion).",
      options: [
        { label: "Verbandsfreie Gemeinde / große kreisangehörige oder kreisfreie Stadt", detail: "Die Gemeinde nimmt die Aufgabe selbst wahr", next: "@ende_gemeinde", tone: "neutral" },
        { label: "Ortsgemeinde in einer Verbandsgemeinde", detail: "Aufgabenabgrenzung nach §§ 67, 68 GemO prüfen", next: "q_vg_eigen", tone: "neutral" },
        { label: "Aufgabe ist überörtlich (Kreisebene)", detail: "Leistungsfähigkeit der Gemeinden überschritten", next: "e_kreis", tone: "neutral" }
      ]
    },

    q_vg_eigen: {
      station: "traeger",
      kind: "frage",
      norm: "§ 67 GemO",
      title: "Nimmt die Verbandsgemeinde die Aufgabe anstelle der Ortsgemeinden wahr?",
      text: "Verbandsgemeinden haben keine originären Aufgaben kraft Selbstverwaltungsgarantie – sie nehmen nur die ihnen ausdrücklich durch Gesetz übertragenen Aufgaben wahr.",
      def: "<b>Eigene Aufgaben der VG anstelle der Ortsgemeinden (§ 67 I GemO):</b> 1. Schulträgerschaft, 2. Brandschutz und technische Hilfe, 3. zentrale Sport-, Spiel- und Freizeitanlagen, 4. überörtliche Sozialeinrichtungen, 5. Wasserversorgung, 6. Abwasserbeseitigung, 7. Ausbau/Unterhaltung von Gewässern 3. Ordnung.<br><b>Dazu:</b> Flächennutzungsplanung (§ 67 II), Wirtschafts-/Tourismusförderung von überörtlicher Bedeutung (§ 67 III, „kann“), Übernahme weiterer Aufgaben (§ 67 IV) oder Übertragung durch einzelne Ortsgemeinden (§ 67 V).",
      options: [
        { label: "Ja, Aufgabe des § 67 GemO", next: "e_vg", tone: "pos" },
        { label: "Nein, Aufgabe der Ortsgemeinde", detail: "Allzuständigkeit der Ortsgemeinde (§ 2 I GemO)", next: "q_geschaeft", tone: "neutral" }
      ]
    },

    q_geschaeft: {
      station: "wahrnehmung",
      kind: "frage",
      norm: "§ 68 I GemO",
      title: "Ist die konkrete Tätigkeit ein Verwaltungsgeschäft für die Ortsgemeinde?",
      text: "Ortsgemeinden sind ehrenamtlich verwaltet – das hauptamtliche Personal sitzt bei der Verbandsgemeindeverwaltung. Diese führt die Verwaltungsgeschäfte der Ortsgemeinden in deren Namen und in deren Auftrag; sie ist an Beschlüsse der Ortsgemeinderäte und Entscheidungen der Ortsbürgermeister gebunden (§ 68 I 1 GemO – offenes Organleihverhältnis).",
      def: "<b>Prüfungsreihenfolge:</b><br>1. <b>Positivkatalog</b> § 68 I 2 Nr. 1–4: Abgabenverwaltung, Rechnungswesen/Haushaltserstellung/Kassenanordnungen, Vollstreckungsgeschäfte, gerichtliche Vertretung.<br>2. <b>Negativkatalog</b> § 68 I 3 Nr. 1–3: Aufgaben des Ortsbürgermeisters als Vertreter nach außen und Ratsvorsitzender, Ausfertigung von Satzungen, Unterzeichnung von Verpflichtungserklärungen (§ 49).<br>3. Sonst <b>Definition</b>: alle fachlichen und bürotechnischen Arbeiten zur Vorbereitung und zum Vollzug von Entscheidungen der Organe der Ortsgemeinden.",
      options: [
        { label: "Ja, Verwaltungsgeschäft", detail: "z. B. Erstellung des Hundesteuerbescheids, Veröffentlichung einer Satzung", next: "e_geschaeft", tone: "pos" },
        { label: "Nein, vorbehaltene Aufgabe / Entscheidung", detail: "z. B. Satzungsausfertigung durch den Ortsbürgermeister, Ratsbeschluss", next: "e_og", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_frei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Freie Selbstverwaltungsaufgabe",
      norm: "§ 2 I 1 GemO",
      title: "Freie Selbstverwaltungsaufgabe der Gemeinde",
      text: "Die Gemeinde entscheidet über das OB und das WIE der Aufgabenwahrnehmung in eigener Verantwortung (eigener Wirkungskreis, Art. 49 I, III LV).\n\nFolgen:\n• Keine staatlichen Weisungen – der Staat führt nur Rechtsaufsicht (Kommunalaufsicht, §§ 117 ff. GemO).\n• Zuständiges Organ: grundsätzlich der Gemeinderat (§ 32 I 2 GemO), soweit nicht übertragen oder der Bürgermeister kraft Gesetzes zuständig ist.\n• Grenze: Leistungsfähigkeit der Gemeinde und Haushaltsgrundsätze (§ 93 GemO)."
    },

    e_pflichtsv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Pflichtaufgabe der Selbstverwaltung",
      norm: "§ 2 I 2 GemO",
      title: "Pflichtaufgabe der Selbstverwaltung",
      text: "Die Gemeinde MUSS die Aufgabe wahrnehmen (OB gesetzlich vorgegeben), entscheidet aber eigenverantwortlich über das WIE.\n\nFolgen:\n• Rechtsaufsicht (Kommunalaufsicht, §§ 117 ff. GemO); bei besonderen Pflichtaufgaben ggf. Sonderaufsicht durch spezialgesetzlich bestimmte Stellen (z. B. Bauleitplanung, Schulwesen).\n• Bei Nichterfüllung: Anordnungsrecht der Aufsichtsbehörde (§ 122 GemO), notfalls Ersatzvornahme (§ 123 GemO).\n• Zuständiges Organ: grundsätzlich der Gemeinderat (§ 32 I 2 GemO)."
    },

    e_auftrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      kicker: "Auftragsangelegenheit",
      norm: "§ 2 II GemO",
      title: "Auftragsangelegenheit (übertragener Wirkungskreis)",
      text: "Die Gemeinde erfüllt die staatliche Aufgabe nach Weisung der zuständigen Behörden (§ 2 II 1 GemO).\n\nFolgen:\n• Fachaufsicht: Kontrolle von Recht- UND Zweckmäßigkeit; Aufsichtsmittel ist die innerdienstliche Weisung (kein VA mangels Außenwirkung); Rechtsbehelfe nur Gegenvorstellung und Fachaufsichtsbeschwerde. Durchsetzung der Weisungen erfolgt über die Kommunalaufsicht.\n• Zuständiges Organ: der Bürgermeister (§ 47 I 2 Nr. 4 GemO) – der Gemeinderat hat keine Befassungskompetenz, nur Unterrichtungsrechte (§ 33 GemO).\n• In der Verbandsgemeinde: die VG erfüllt die den Ortsgemeinden übertragenen staatlichen Aufgaben im EIGENEN Namen (§ 68 III Nr. 1 GemO).\n• Bereitstellung von Personal, Einrichtungen und Mitteln ist dagegen Selbstverwaltung (§ 2 II 2 GemO) – insoweit entscheidet der Rat."
    },

    e_vg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Aufgabe der Verbandsgemeinde",
      norm: "§ 67 GemO",
      title: "Eigene Selbstverwaltungsaufgabe der Verbandsgemeinde",
      text: "Die Verbandsgemeinde nimmt die Aufgabe ANSTELLE der Ortsgemeinden als eigene Selbstverwaltungsaufgabe wahr (§ 67 GemO). Zuständig sind die Organe der Verbandsgemeinde (Verbandsgemeinderat und Bürgermeister, § 64 GemO).\n\nRückübertragung auf eine Ortsgemeinde ist nach § 67 VI GemO möglich (Antrag, Zustimmung der VG mit jeweils 2/3 der gesetzlichen Zahl, keine entgegenstehenden Gemeinwohlgründe).\n\nMerke: Bei der Flächennutzungsplanung (§ 67 II GemO) bedarf die endgültige Entscheidung des Verbandsgemeinderats der Zustimmung der Ortsgemeinden (Mehrheit der Ortsgemeinden mit mehr als 2/3 der Einwohner)."
    },

    e_geschaeft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Verwaltungsgeschäft",
      norm: "§ 68 I GemO",
      title: "Verwaltungsgeschäft: VG-Verwaltung handelt für die Ortsgemeinde",
      text: "Die Verbandsgemeindeverwaltung führt die Tätigkeit im NAMEN und im AUFTRAG der Ortsgemeinde aus (§ 68 I 1 GemO). Sie ist an die Beschlüsse des Ortsgemeinderats und die Entscheidungen des Ortsbürgermeisters gebunden.\n\nEs handelt sich um ein offenes Organleihverhältnis: Nach außen erscheint das Handeln als das der Ortsgemeinde – z. B. ergeht der Hundesteuerbescheid der Ortsgemeinde, erstellt durch die VG-Verwaltung.\n\nAufgabenträger (und damit „Behörde“ im Rechtssinn) bleibt die Ortsgemeinde."
    },

    e_og: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Aufgabe der Ortsgemeinde",
      norm: "§ 2 I, § 68 I 3 GemO",
      title: "Die Ortsgemeinde bzw. ihre Organe handeln selbst",
      text: "Die Tätigkeit ist kein Verwaltungsgeschäft – sie bleibt den Organen der Ortsgemeinde vorbehalten:\n\n• Entscheidungen trifft der Ortsgemeinderat (§ 32 GemO),\n• der Ortsbürgermeister vertritt die Ortsgemeinde nach außen und führt den Vorsitz im Rat (§ 68 I 3 Nr. 1 GemO),\n• er fertigt Satzungen aus (§ 68 I 3 Nr. 2 GemO) und\n• unterzeichnet Verpflichtungserklärungen nach § 49 GemO (§ 68 I 3 Nr. 3 GemO)."
    },

    e_kreis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      kicker: "Kreisaufgabe",
      norm: "§ 2 LKO",
      title: "Aufgabe des Landkreises",
      text: "Übersteigt die Aufgabe die Leistungsfähigkeit der kreisangehörigen Gemeinden oder ist sie überörtlich, nimmt sie der Landkreis wahr (§ 2 LKO – Ergänzungs- und Ausgleichsfunktion).\n\nDer Landkreis ist Gemeindeverband: Selbstverwaltung nur im Rahmen des gesetzlichen Aufgabenbereichs (Art. 28 II 2 GG, Art. 49 II LV). Die Kreisverwaltung ist zugleich untere staatliche Verwaltungsbehörde („Januskopf“) – etwa als Kommunalaufsicht (§ 118 I GemO) oder Bauaufsicht."
    },

    e_keine: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 GemO",
      title: "Keine Aufgabe der Gemeinde",
      text: "Die Aufgabe ist weder eine Angelegenheit der örtlichen Gemeinschaft noch der Gemeinde durch Gesetz übertragen. Sie verbleibt beim staatlichen Aufgabenträger (Land/Bund). Ein Tätigwerden der Gemeinde wäre kompetenzwidrig (ultra vires) und könnte von der Kommunalaufsicht beanstandet werden (§ 121 GemO)."
    }
  },

  routers: {
    "@ende_gemeinde": function (flags) {
      return flags.pflicht === "pflicht" ? "e_pflichtsv" : "e_frei";
    }
  }
});
