/*
 * Prüfungsschema: Verletzung der Gleichheitsgrundrechte, Art. 3 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "20. LE 20 - Einführung in die Gleichheitsgrundrechte" (Weidenbach, FS I)
 *  - Methodik: Gutachtenstil aus Modul 1
 *  - Normen verifiziert an Gesetze/md/Verfassungsrecht/Grundgesetz.md
 *
 * Stationen: vorpruefung → traeger → ungleich → rechtfertigung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-gleichheitsgrundrechte",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte",
  title: "Gleichheitsgrundrechte, Art. 3 GG",
  description: "Prüfung von Art. 3 I GG (allgemeines Gleichheitsrecht) und der speziellen Diskriminierungsverbote aus Art. 3 II, III GG: Vorprüfung, Grundrechtsträger und -verpflichteter, Ungleichbehandlung in drei Schritten, Rechtfertigung über Differenzierungsziel und Verhältnismäßigkeit („Neue Formel“).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "vorpruefung", label: "Vorprüfung" },
    { id: "traeger", label: "Träger/Verpflichteter" },
    { id: "ungleich", label: "Ungleichbehandlung" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Art. 3 GG verletzt",
    neg: "Keine Verletzung des Art. 3 GG",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= Vorprüfung ================= */

    start: {
      station: "vorpruefung",
      kind: "frage",
      norm: "Art. 3 I–III, 33, 38 I, 21 GG",
      title: "Vorprüfung: Ist ein spezielles Gleichheitsrecht einschlägig?",
      text: "Obersatz: X ist in Art. 3 I GG verletzt, wenn taugliche Grundrechtsträger und Grundrechtsverpflichtete vorliegen, eine Ungleichbehandlung von wesentlich Gleichem (oder Gleichbehandlung von wesentlich Ungleichem) vorliegt und diese verfassungsrechtlich nicht gerechtfertigt ist.",
      def: "Die <b>speziellen Gleichheitsrechte</b> verdrängen in ihrem Anwendungsbereich als leges speciales das allgemeine Gleichheitsrecht: Art. 3 II, III GG (Diskriminierungsverbote), Art. 33 I–III GG (Zugang zu öffentlichen Ämtern), Wahlgleichheit Art. 38 I GG, Chancengleichheit der Parteien Art. 21 GG (i. V. m. Art. 3 I GG).",
      hint: "Beispiel: Beförderung scheitert an politischer Anschauung → Art. 33 II GG verdrängt Art. 3 I GG.",
      options: [
        { label: "Kein spezielles Gleichheitsrecht einschlägig", detail: "Prüfungsmaßstab ist Art. 3 I GG (Auffanggleichheitsrecht)", next: "q_traeger", set: { basis: "art3I" }, tone: "neutral" },
        { label: "Geschlecht: Art. 3 II, III 1 Var. 1 GG", detail: "Gleichberechtigung von Mann und Frau – absolutes Differenzierungsverbot", next: "q_traeger", set: { basis: "geschlecht" }, tone: "neutral" },
        { label: "Merkmal des Art. 3 III GG", detail: "Abstammung, Rasse, Sprache, Heimat, Herkunft, Glauben, Anschauungen, Behinderung", next: "q_traeger", set: { basis: "art3III" }, tone: "neutral" },
        { label: "Anderes spezielles Gleichheitsrecht", detail: "z. B. Art. 33 II, 38 I, 21 GG", next: "e_speziell", tone: "warn" }
      ]
    },

    /* ================= Träger / Verpflichteter ================= */

    q_traeger: {
      station: "traeger",
      kind: "frage",
      norm: "Art. 19 III GG, § 1 BGB",
      title: "Grundrechtsträger (persönlicher Schutzbereich)?",
      text: "Die Prüfung entspricht dem persönlichen Schutzbereich der Freiheitsgrundrechte: Grundrechtsfähigkeit, ggf. Sonderstatusverhältnis und Grundrechtsmündigkeit.",
      def: "Art. 3 I GG ist <b>Jedermann-Grundrecht</b>: natürliche Personen (rechtsfähig, vgl. § 1 BGB) und juristische Personen des Privatrechts nach Art. 19 III GG (kollektive Ausübung bei Art. 3 I GG möglich). <b>Nicht</b> auf juristische Personen anwendbar: Art. 3 II und III GG (nur individuell betätigbar).",
      options: [
        { label: "Natürliche Person", next: "q_verpflichteter", tone: "pos" },
        { label: "Juristische Person des Privatrechts – Art. 3 I GG", detail: "über Art. 19 III GG grundrechtsfähig", next: "q_verpflichteter", tone: "pos" },
        { label: "Juristische Person – Art. 3 II/III GG", detail: "dem Wesen nach nicht anwendbar", next: "e_kein_traeger", tone: "neg" }
      ]
    },

    q_verpflichteter: {
      station: "traeger",
      kind: "frage",
      norm: "Art. 1 III GG",
      title: "Grundrechtsverpflichteter: Handelt derselbe Hoheitsträger?",
      text: "Art. 3 I GG bindet die gesetzesanwendende Staatsgewalt (Exekutive, Judikative – „vor dem Gesetz“, Rechtsanwendungsgleichheit) und nach ganz h. M. über Art. 1 III GG auch den Gesetzgeber (Rechtssetzungsgleichheit). Festzustellen ist, wer für die Regelung zuständig ist (Gesetzgebungskompetenz!).",
      def: "<b>Merke:</b> Gleichheitsrechte binden immer nur den jeweiligen Hoheitsträger in seinem Zuständigkeitsbereich. Ungleichbehandlungen durch verschiedene Kompetenzträger (Land A/Land B, Bund/Land, Gemeinde A/Gemeinde B) sind nicht vergleichbar – keine unzulässige Ungleichbehandlung.",
      hint: "Beispiel: Gemeinde A erhebt Hundesteuer, Gemeinde B nicht → kein Anspruch aus Art. 3 I GG, da zwei verschiedene Hoheitsträger.",
      options: [
        { label: "Ja, derselbe Träger öffentlicher Gewalt", detail: "z. B. der Bundesgesetzgeber besteuert Katzenhalter, Hundehalter nicht", next: "q_schritt1", tone: "pos" },
        { label: "Nein, verschiedene Hoheitsträger", next: "e_hoheitstraeger", tone: "neg" }
      ]
    },

    /* ================= Ungleichbehandlung ================= */

    q_schritt1: {
      station: "ungleich",
      kind: "frage",
      norm: "Art. 3 I GG",
      title: "Ungleichbehandlung – Schritt 1 und 2: Zwei Gruppen, zwei Regelungen?",
      text: "Grundthese: „Wesentlich Gleiches ist gleich zu behandeln.“ Schritt 1: Wird eine Person/Gruppe/Situation in bestimmter Weise rechtlich geregelt („behandelt“)? Schritt 2: Wird eine andere Person/Gruppe in anderer Weise behandelt?",
      hint: "Bsp. Katzensteuerfall: Katzenhalter steuerpflichtig (Schritt 1), Hundehalter nicht (Schritt 2).",
      options: [
        { label: "Ja, zwei unterschiedlich behandelte Vergleichsgruppen", next: "q_schritt3", tone: "pos" },
        { label: "Nein, keine unterschiedliche Behandlung", detail: "ggf. subsidiär: Gleichbehandlung von wesentlich Ungleichem prüfen", next: "e_keine_ungleich", tone: "neg" }
      ]
    },

    q_schritt3: {
      station: "ungleich",
      kind: "frage",
      norm: "Art. 3 I GG",
      title: "Schritt 3: Gemeinsamer Oberbegriff (Bezugspunkt) vorhanden?",
      text: "Beide Gruppen müssen unter einen gemeinsamen Oberbegriff subsumiert werden können – nur dann liegt „wesentlich Gleiches“ und damit eine rechtfertigungsbedürftige Ungleichbehandlung vor.",
      def: "<b>Beispiel (+):</b> Katzenhalter/Hundehalter → Oberbegriff „Tierhalter“ → Ungleichbehandlung. <b>Gegenbeispiel (−):</b> Motorradfahrer mit Helmpflicht / Jogger ohne → kein gemeinsamer Bezugspunkt → keine rechtfertigungsbedürftige Ungleichbehandlung.",
      options: [
        { label: "Ja, gemeinsamer Oberbegriff", detail: "Relevante Ungleichbehandlung i. S. d. Art. 3 I GG liegt vor", next: "@rechtfertigung", tone: "pos" },
        { label: "Nein, kein gemeinsamer Bezugspunkt", next: "e_keine_ungleich", tone: "neg" }
      ]
    },

    /* ================= Rechtfertigung ================= */

    q_formell: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 30, 70 ff., 76 ff. GG",
      title: "Formelle Verfassungsmäßigkeit des Gesetzes?",
      text: "Zwischenergebnis: Eine relevante Ungleichbehandlung liegt vor. ✓\n\nStaatsorganisatorische Fragen: (a) Gesetzgebungskompetenz (ausschließlich Art. 71, 73 GG; konkurrierend Art. 72, 74 GG), (b) Gesetzgebungsverfahren (Einleitung Art. 76, Hauptverfahren Art. 77–79, Abschluss Art. 82 GG).",
      options: [
        { label: "Ja / laut Bearbeitervermerk zu unterstellen", next: "@materiell", tone: "pos" },
        { label: "Nein, formell verfassungswidrig", next: "e_verletzt_formell", tone: "neg" }
      ]
    },

    q_ziel: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Legitimes Differenzierungsziel (sachlicher Grund)?",
      text: "Materiell muss die Ungleichbehandlung durch einen sachlichen Grund gerechtfertigt sein: (1) legitimes Differenzierungsziel, (2) Verhältnismäßigkeit des Differenzierungskriteriums im Hinblick auf das Ziel.",
      def: "<b>Legitim</b> ist grundsätzlich jeder Zweck, der nicht ausdrücklich verboten ist; er ist der Intention des Gesetzgebers zu entnehmen und lässt sich fast immer finden.",
      options: [
        { label: "Ja, legitimes Differenzierungsziel", next: "q_geeignet", tone: "pos" },
        { label: "Nein, verbotenes Ziel", next: "e_verletzt_materiell", tone: "neg" }
      ]
    },

    q_geeignet: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Ungleichbehandlung geeignet?",
      def: "<b>Geeignet</b>, wenn mit ihrer Hilfe das angestrebte Ziel erreicht oder zumindest gefördert wird – Förderung genügt.",
      options: [
        { label: "Ja", next: "q_erforderlich", tone: "pos" },
        { label: "Nein", next: "e_verletzt_materiell", tone: "neg" }
      ]
    },

    q_erforderlich: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Ungleichbehandlung erforderlich?",
      def: "<b>Erforderlich</b>, wenn es kein milderes Mittel als die Ungleichbehandlung gibt, das zur Zielerreichung ebenso geeignet ist.",
      options: [
        { label: "Ja, kein milderes Mittel", next: "q_angemessen", tone: "pos" },
        { label: "Nein, milderes Mittel vorhanden", next: "e_verletzt_materiell", tone: "neg" }
      ]
    },

    q_angemessen: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Ungleichbehandlung angemessen?",
      text: "Abwägung: Bedeutung des Ziels der Ungleichbehandlung gegen deren Intensität – die Ungleichbehandlung muss in einem angemessenen Verhältnis zum Wert des verfolgten Ziels stehen (rechtsgüterbezogene Abwägung).",
      def: "<b>Verschärfte Prüfung</b> bei gesteigerter Intensität: personenbezogene Ungleichbehandlung, für den Betroffenen nicht verfügbares Merkmal (kein zumutbares Ausweichen), Annäherung an Merkmale des Art. 3 III GG, negative Auswirkungen auf Freiheitsrechte. <b>Geringere Intensität:</b> sach-/verhaltensbezogen, verfügbares Merkmal, freiwillige staatliche Leistungen, komplexe Lebenssachverhalte.",
      hint: "Bsp. JVA-Cremes-Fall: Differenzierung allein nach dem Geschlecht, kein Ausweichen möglich, weitere Freiheitsrechte betroffen → strenge Kontrolle → unangemessen, Art. 3 I GG verletzt.",
      options: [
        { label: "Ja, angemessen", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein, außer Verhältnis zum Ziel", next: "e_verletzt_materiell", tone: "neg" }
      ]
    },

    q_geschlecht: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 3 II, III 1 Var. 1 GG",
      title: "Ausnahme vom absoluten Diskriminierungsverbot (Geschlecht)?",
      text: "Zwischenergebnis: Ungleichbehandlung wegen des Geschlechts liegt vor (erfasst ist auch die mittelbare Diskriminierung, z. B. Ausschluss Teilzeitbeschäftigter, die überwiegend Frauen sind). ✓\n\nGrundsatz: absolutes Differenzierungsverbot – nur wenige Ausnahmen.",
      def: "<b>Ausnahme:</b> Die Ungleichbehandlung beruht auf biologischen oder funktionalen Unterschieden der Geschlechter (Bsp.: Mutterschutzgesetz).",
      options: [
        { label: "Ja, biologische/funktionale Unterschiede", next: "q_formell_abs", tone: "pos" },
        { label: "Nein, keine Ausnahme", next: "e_verletzt_absolut", tone: "neg" }
      ]
    },

    q_art3iii: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 3 III GG",
      title: "Ausnahme vom Diskriminierungsverbot des Art. 3 III GG?",
      text: "Zwischenergebnis: Anknüpfung an ein Merkmal des Art. 3 III GG liegt vor. ✓\n\nAuch hier gilt ein absolutes Differenzierungsverbot. Nach h. M. sind Nach- oder Vorteile nicht erfasst, die Folge einer ganz anders intendierten Regelung sind (Bsp.: Deutsch als Gerichtssprache, § 184 GVG).",
      def: "<b>Ausnahme:</b> Die Ungleichbehandlung ist zur Lösung von Problemen notwendig, die ihrer Natur nach nur bei der betroffenen Gruppe auftreten können. <b>Achtung Art. 3 III 2 GG (Behinderung):</b> Benachteiligungen sind immer verboten – Bevorzugungen sind zulässig.",
      options: [
        { label: "Ja, gruppenspezifisches Problem", next: "q_formell_abs", tone: "pos" },
        { label: "Anders intendierte Regelung (kein Verstoß)", detail: "bloßer Reflex, z. B. § 184 GVG", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein – bzw. Benachteiligung wegen Behinderung", next: "e_verletzt_absolut", tone: "neg" }
      ]
    },

    q_formell_abs: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 70 ff., 76 ff., 20 III GG",
      title: "Gesetz im Übrigen formell und materiell verfassungsgemäß?",
      text: "Auch bei gerechtfertigter Differenzierung muss das Gesetz formell (Kompetenz, Verfahren) und materiell (insb. verhältnismäßig) verfassungsgemäß sein.",
      options: [
        { label: "Ja", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein", next: "e_verletzt_formell", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_speziell: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Spezielles Gleichheitsrecht prüfen",
      text: "Ein spezielles Gleichheitsrecht (z. B. Art. 33 II GG beim Zugang zu öffentlichen Ämtern, Art. 38 I GG Wahlgleichheit, Art. 3 I i. V. m. Art. 21 GG Chancengleichheit der Parteien) verdrängt Art. 3 I GG in seinem Anwendungsbereich. Prüfe das speziellere Recht – bei der Wahlgleichheit hilft das Schema „Wahlrechtsgrundsätze“."
    },
    e_kein_traeger: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein tauglicher Grundrechtsträger",
      text: "Art. 3 II und III GG sind auf juristische Personen ihrem Wesen nach nicht anwendbar (Art. 19 III GG), da sie nur individuell betätigt werden können. Der persönliche Anwendungsbereich ist nicht eröffnet."
    },
    e_hoheitstraeger: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verschiedene Hoheitsträger – kein Gleichheitsverstoß",
      text: "Die Ungleichbehandlung erfolgt nicht durch denselben Träger öffentlicher Gewalt (z. B. Gemeinde A vs. Gemeinde B, Bund vs. Land). Gleichheitsrechte binden jeden Hoheitsträger nur in seinem Zuständigkeitsbereich (Begrenzung durch die Kompetenzordnung) – ein Anspruch auf Gleichbehandlung besteht nicht."
    },
    e_keine_ungleich: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine relevante Ungleichbehandlung",
      text: "Die Vergleichsgruppen lassen sich nicht unter einen gemeinsamen Oberbegriff fassen bzw. es fehlt an einer unterschiedlichen Behandlung. Die unterschiedliche Behandlung (z. B. Motorradfahrer/Jogger) ist nachvollziehbar und nicht rechtfertigungsbedürftig – Art. 3 I GG ist nicht verletzt."
    },
    e_verletzt_formell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 3 GG verletzt – Gesetz formell verfassungswidrig",
      text: "Das differenzierende Gesetz ist bereits formell verfassungswidrig (Kompetenz oder Verfahren). Die Ungleichbehandlung ist damit nicht gerechtfertigt."
    },
    e_verletzt_materiell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 3 I GG verletzt – Ungleichbehandlung nicht gerechtfertigt",
      text: "Die Ungleichbehandlung hält der Verhältnismäßigkeitsprüfung (legitimes Differenzierungsziel – geeignet – erforderlich – angemessen) nicht stand. Sie ist verfassungsrechtlich nicht gerechtfertigt; der Betroffene ist in Art. 3 I GG verletzt (vgl. JVA-Cremes-Fall)."
    },
    e_verletzt_absolut: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 3 II/III GG verletzt – absolutes Diskriminierungsverbot",
      text: "Die Anknüpfung an das verbotene Merkmal (Geschlecht bzw. Merkmal des Art. 3 III GG) ist durch keine anerkannte Ausnahme gedeckt. Es liegt ein Verstoß gegen das absolute Differenzierungsverbot vor – bei Benachteiligungen wegen einer Behinderung (Art. 3 III 2 GG) gibt es überhaupt keine Rechtfertigungsmöglichkeit."
    },
    e_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Verletzung des Art. 3 GG",
      text: "Die Ungleichbehandlung ist verfassungsrechtlich gerechtfertigt: legitimes Differenzierungsziel und verhältnismäßiges Differenzierungskriterium (bzw. anerkannte Ausnahme vom absoluten Diskriminierungsverbot). Art. 3 GG ist nicht verletzt."
    }
  },

  routers: {
    "@rechtfertigung": function (flags) {
      if (flags.basis === "geschlecht") return "q_geschlecht";
      if (flags.basis === "art3III") return "q_art3iii";
      return "q_formell";
    },
    "@materiell": function (flags) {
      return "q_ziel";
    }
  }
});
