/*
 * Prüfungsschema: Eingriff in die kommunale Selbstverwaltungsgarantie
 * (Art. 28 II GG, Art. 49 LV RLP)
 * Fach: Kommunalrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS I):
 *  - "02 PLE Selbstverwaltungsgarantie" (Garantiebereiche, Kernbereich/Randbereich,
 *    Hoheitsrechte, Rechtsschutz; BVerfGE 79, 127 – Rastede)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-selbstverwaltung",
  subject: "Kommunalrecht",
  fs: ["FS1"],
  area: "Grundlagen · Verfassungsrecht",
  title: "Eingriff in die Selbstverwaltungsgarantie (Art. 28 II GG)",
  description: "Verletzt eine staatliche Maßnahme (Gesetz, Aufgabenentzug, Organisationsvorgabe) das Selbstverwaltungsrecht der Gemeinde? Schutzbereich, Eingriff, Rechtfertigung (Kernbereich/Randbereich, Rastede) und Rechtsschutz.",
  start: "start",
  stations: [
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "rechtf", label: "Rechtfertigung" },
    { id: "rschutz", label: "Rechtsschutz" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Selbstverwaltungsrecht verletzt",
    neg: "Ergebnis: keine Verletzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 28 II GG, Art. 49 LV",
      title: "Wer beruft sich auf die Selbstverwaltungsgarantie?",
      text: "Art. 28 II 1 GG gewährleistet den Gemeinden das Recht, alle Angelegenheiten der örtlichen Gemeinschaft im Rahmen der Gesetze in eigener Verantwortung zu regeln. Das Land RLP hat diesen Auftrag mit Art. 49 LV umgesetzt. Die Vorschrift statuiert zugleich ein verfassungsrechtliches Aufgabenverteilungsprinzip zugunsten der Gemeinden.",
      options: [
        { label: "Eine Gemeinde", detail: "Allzuständigkeit für Angelegenheiten der örtlichen Gemeinschaft", next: "q_schutzbereich", set: { wer: "gemeinde" }, tone: "neutral" },
        { label: "Ein Gemeindeverband (VG, Landkreis, Bezirksverband Pfalz)", detail: "Art. 28 II 2 GG, Art. 49 II LV: Selbstverwaltung nur im Rahmen des gesetzlichen Aufgabenbereichs", next: "q_schutzbereich", set: { wer: "verband" }, tone: "neutral" }
      ]
    },

    q_schutzbereich: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 28 II GG, Art. 49 LV",
      title: "Ist ein Garantiebereich der Selbstverwaltung betroffen?",
      def: "<b>Drei Garantiebereiche:</b><br>1. <b>Einrichtungsgarantie:</b> die Institution Gemeinde ist garantiert – aber keine Bestandsgarantie für die einzelne Gemeinde (Fusionen/Auflösungen nach § 10 GemO möglich).<br>2. <b>Aufgabengarantie:</b> alle Angelegenheiten der örtlichen Gemeinschaft (BVerfGE 79, 127 – Rastede) ohne besonderen Kompetenztitel.<br>3. <b>Eigenverantwortlichkeitsgarantie:</b> Gestaltungs-, Ermessens- und Weisungsfreiheit – konkretisiert durch die <b>Hoheitsrechte</b>: Gebiets-, Organisations-, Personal-, Finanz-, Planungs-, Abgaben-/Steuer- und Satzungshoheit.",
      hint: "Beim Gemeindeverband gilt der Schutz nur im Rahmen des gesetzlich zugewiesenen Aufgabenbereichs – die Aufgabengarantie ist dort schwächer.",
      options: [
        { label: "Ja, Aufgabengarantie betroffen", detail: "Entzug oder Hochzonung einer örtlichen Aufgabe", next: "q_eingriff", set: { bereich: "aufgabe" }, tone: "pos" },
        { label: "Ja, Eigenverantwortlichkeit / Hoheitsrecht betroffen", detail: "z. B. Organisations-, Personal- oder Planungshoheit", next: "q_eingriff", set: { bereich: "eigenverantwortung" }, tone: "pos" },
        { label: "Ja, Bestand/Gebiet der Gemeinde betroffen", detail: "Auflösung, Fusion, Gebietsänderung, Namensänderung", next: "q_eingriff", set: { bereich: "bestand" }, tone: "pos" },
        { label: "Nein, kein Garantiebereich betroffen", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 28 II GG",
      title: "Liegt ein Eingriff in das Selbstverwaltungsrecht vor?",
      def: "<b>Eingriff</b> ist jedes Handeln, das nicht auf autonomer Entschließung der betroffenen Gemeinde beruht und ihr Selbstverwaltungsrecht verkürzt, beschneidet oder sonst einengt.<br><b>Beispiele:</b> gesetzlicher Aufgabenentzug (Hochzonung auf den Kreis), verpflichtende Organisationsvorgaben, Genehmigungsvorbehalte, Gebietsänderung gegen den Willen der Gemeinde.",
      options: [
        { label: "Ja, Eingriff (+)", next: "q_gesetz", tone: "pos" },
        { label: "Nein, kein Eingriff", detail: "z. B. freiwillige Vereinbarung, bloße Anregung", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_gesetz: {
      station: "rechtf",
      kind: "frage",
      norm: "Art. 28 II GG („im Rahmen der Gesetze“)",
      title: "Beruht der Eingriff auf einer gesetzlichen Grundlage?",
      text: "Das Selbstverwaltungsrecht steht unter Gesetzesvorbehalt: Es besteht „im Rahmen der Gesetze“ (Art. 28 II GG, Art. 49 LV). Der Gesetzgeber ist zur Ausgestaltung und zu Eingriffen ermächtigt. Gesetze sind alle formellen und materiellen Gesetze des Bundes, der Länder und der EU.",
      options: [
        { label: "Ja, gesetzliche Grundlage vorhanden", next: "q_kern", tone: "pos" },
        { label: "Nein", detail: "Eingriff ohne gesetzliche Grundlage", next: "q_rechtsschutz", set: { verletzt: "ja", grund: "ohne_gesetz" }, tone: "neg" }
      ]
    },

    q_kern: {
      station: "rechtf",
      kind: "frage",
      norm: "Art. 28 II GG – Kernbereich",
      title: "Tastet der Eingriff den Kernbereich (Wesensgehalt) an?",
      text: "Der Kernbereich genießt ABSOLUTEN Schutz – er darf unter keinen Umständen angetastet werden. Außerhalb des Kernbereichs (Randbereich) gilt nur relativer Schutz.",
      def: "<b>Kernbereich</b> (nicht abstrakt definierbar, aus geschichtlicher Entwicklung und Erscheinungsformen der Selbstverwaltung zu bestimmen – BVerfGE 17, 172; 26, 172):<br>• kein fester Aufgabenkatalog, aber die <b>Befugnis, sich aller Angelegenheiten der örtlichen Gemeinschaft ohne besonderen Kompetenztitel anzunehmen</b> (BVerfGE 79, 127 – Rastede),<br>• Namensänderung nur nach vorheriger Anhörung (BVerfGE 59, 216),<br>• organisatorische Gestaltungsfähigkeit darf nicht „erstickt“ werden (BVerfGE 91, 228),<br>• VerfGH RLP: verletzt, wenn die Kommune die Gelegenheit zur kraftvollen Betätigung verliert und nur noch ein Schattendasein führen kann (NVwZ 1993, 159).",
      options: [
        { label: "Ja, Kernbereich angetastet", next: "q_rechtsschutz", set: { verletzt: "ja", grund: "kern" }, tone: "neg" },
        { label: "Nein, nur Randbereich betroffen", next: "q_rand", tone: "neutral" }
      ]
    },

    q_rand: {
      station: "rechtf",
      kind: "frage",
      norm: "Art. 28 II GG – Randbereich",
      title: "Ist der Eingriff in den Randbereich gerechtfertigt?",
      def: "<b>Voraussetzungen eines zulässigen Randbereichseingriffs:</b><br>1. <b>Gründe des Gemeinwohls</b> – beim Entzug örtlicher Aufgaben gilt das verfassungsrechtliche Aufgabenverteilungsprinzip: bloße Gründe der Wirtschaftlichkeit oder Verwaltungsvereinfachung genügen NICHT (BVerfGE 79, 127 – Rastede),<br>2. <b>Verhältnismäßigkeit</b> (geeignet, erforderlich, angemessen),<br>3. <b>Anhörung</b> der betroffenen Gemeinde vor der Maßnahme.",
      options: [
        { label: "Ja, alle Voraussetzungen erfüllt", next: "e_gerechtfertigt", tone: "pos" },
        { label: "Nein", detail: "Gemeinwohlgründe fehlen, unverhältnismäßig oder keine Anhörung", next: "q_rechtsschutz", set: { verletzt: "ja", grund: "rand" }, tone: "neg" }
      ]
    },

    q_rechtsschutz: {
      station: "rschutz",
      kind: "frage",
      norm: "Art. 93 I Nr. 4b GG / Art. 130 I LV",
      title: "Wogegen richtet sich der Angriff der Gemeinde?",
      text: "Das Selbstverwaltungsrecht ist verletzt. Für die Durchsetzung kommt es auf die Art des Eingriffsakts an.",
      options: [
        { label: "Bundesgesetz", detail: "Kommunalverfassungsbeschwerde zum BVerfG", next: "e_vb_bund", tone: "neutral" },
        { label: "Landesgesetz (RLP)", detail: "Normenkontrolle/kommunale Verfassungsbeschwerde zum VerfGH RLP", next: "e_vgh", tone: "neutral" },
        { label: "Einzelmaßnahme einer Behörde (VA)", detail: "z. B. kommunalaufsichtliche Verfügung", next: "e_vg_klage", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vb_bund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Art. 93 I Nr. 4b GG, § 91 BVerfGG",
      title: "Selbstverwaltungsrecht verletzt – Kommunalverfassungsbeschwerde",
      text: "Gegen das Bundesgesetz kann die Gemeinde (oder der Gemeindeverband) Kommunalverfassungsbeschwerde beim Bundesverfassungsgericht erheben (Art. 93 I Nr. 4b GG, §§ 13 Nr. 8a, 91 BVerfGG) und die Verletzung des Rechts auf Selbstverwaltung aus Art. 28 II GG rügen.\n\nPrüfungsmaßstab: Schutzbereich → Eingriff → verfassungsrechtliche Rechtfertigung (Gesetzesvorbehalt, Kernbereich absolut, Randbereich: Gemeinwohlgründe + Verhältnismäßigkeit + Anhörung)."
    },

    e_vgh: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Art. 130 I, Art. 135 I Nr. 1 LV",
      title: "Selbstverwaltungsrecht verletzt – Verfahren vor dem VerfGH RLP",
      text: "Gegen das Landesgesetz kann sich die Gemeinde an den Verfassungsgerichtshof Rheinland-Pfalz wenden (Normenkontrollverfahren, Art. 130 I und Art. 135 I Nr. 1 LV) und die Verletzung des Art. 49 LV geltend machen.\n\nBeachte: Gegen Landesrecht ist der Weg zum BVerfG nach Art. 93 I Nr. 4b GG nur eröffnet, soweit nicht Beschwerde zum Landesverfassungsgericht erhoben werden kann (Subsidiarität)."
    },

    e_vg_klage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 42 I VwGO",
      title: "Selbstverwaltungsrecht verletzt – Verwaltungsrechtsweg",
      text: "Gegen belastende Einzelmaßnahmen (Verwaltungsakte, z. B. der Kommunalaufsicht) stehen der Gemeinde Widerspruch (§ 68 VwGO) und Anfechtungsklage (§ 42 I Alt. 1 VwGO) offen; gegen die Versagung einer Genehmigung Verpflichtungswiderspruch und -klage (§ 42 I Alt. 2 VwGO).\n\nDie Gemeinde ist als juristische Person des öffentlichen Rechts widerspruchs- und klagebefugt (§ 42 II VwGO – Verletzung ihres Selbstverwaltungsrechts aus Art. 28 II GG möglich).\n\nDetails: Schema „Maßnahmen der Kommunalaufsicht“."
    },

    e_gerechtfertigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 28 II GG",
      title: "Eingriff gerechtfertigt – keine Verletzung",
      text: "Der Eingriff betrifft nur den Randbereich und ist durch Gemeinwohlgründe getragen, verhältnismäßig und nach Anhörung der Gemeinde erfolgt. Das Selbstverwaltungsrecht ist nicht verletzt.\n\nBeispiel: gesetzliche Pflicht zur Bestellung einer hauptamtlichen Gleichstellungsbeauftragten verletzt den Kernbereich nicht (BVerfGE 91, 228)."
    },

    e_kein_schutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 28 II GG",
      title: "Schutzbereich nicht eröffnet",
      text: "Die Maßnahme berührt weder die Aufgaben- noch die Eigenverantwortlichkeits- oder Einrichtungsgarantie. Auf Art. 28 II GG / Art. 49 LV kann sich die Kommune nicht berufen.\n\nMerke: Gemeindeverbände (VG, Landkreis) genießen Selbstverwaltung nur im Rahmen ihres GESETZLICHEN Aufgabenbereichs (Art. 28 II 2 GG) – außerhalb davon fehlt der Schutz von vornherein."
    },

    e_kein_eingriff: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 28 II GG",
      title: "Kein Eingriff",
      text: "Es fehlt an einer Verkürzung des Selbstverwaltungsrechts durch nicht-autonomes Handeln. Beruht die „Belastung“ auf einer eigenen Entscheidung der Gemeinde (z. B. freiwillige Aufgabenübertragung nach § 67 V GemO), liegt kein Eingriff vor."
    }
  },

  routers: {}
});
