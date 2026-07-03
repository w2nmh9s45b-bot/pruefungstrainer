/*
 * Prüfungsschema: Menschenwürde (Art. 1 I GG) und Leben/körperliche Unversehrtheit (Art. 2 II 1 GG)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "06. LE 06 - Art. 1 I GG - Menschenwürde und Art. 2 II S. 1 GG" (Weidenbach, FS I)
 *    – Fälle: „Zwergenweitwurf“ (Art. 1 I) und Blutentnahme § 81a StPO (Art. 2 II 1)
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: auswahl → schutz → eingriff → rechtfertigung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-menschenwuerde",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte – Einzelgrundrechte",
  title: "Menschenwürde und Leben, Art. 1 I / 2 II 1 GG",
  description: "Art. 1 I GG als oberstes Verfassungsprinzip (Objektsformel, keine Rechtfertigung, kein Verzicht) und Art. 2 II 1 GG (Leben und körperliche Unversehrtheit) mit einfachem Gesetzesvorbehalt und Erst-Recht-Schluss aus Art. 104 I 1 GG.",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "auswahl", label: "Grundrecht" },
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Grundrecht verletzt",
    neg: "Keine Grundrechtsverletzung",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "auswahl",
      kind: "frage",
      norm: "Art. 1 I, 2 II 1 GG",
      title: "Welches Grundrecht ist betroffen?",
      text: "Die Menschenwürde ist oberstes Verfassungsprinzip und wichtigste Wertentscheidung des GG. Ob sie selbst ein Grundrecht ist, ist umstritten (dafür: Überschrift „I. Die Grundrechte“; dagegen: Art. 1 III GG „nachfolgende Grundrechte“) – der Streit muss meist nicht entschieden werden, da Art. 1 I GG i. d. R. in Verbindung mit anderen Grundrechten geprüft wird.",
      options: [
        { label: "Menschenwürde, Art. 1 I GG", detail: "z. B. Fall „Zwergenweitwurf“", next: "q_wuerde_pers", set: { gr: "wuerde" }, tone: "neutral" },
        { label: "Leben / körperliche Unversehrtheit, Art. 2 II 1 GG", detail: "z. B. Blutentnahme nach § 81a StPO", next: "q_leben_pers", set: { gr: "leben" }, tone: "neutral" }
      ]
    },

    /* ================= Art. 1 I GG ================= */

    q_wuerde_pers: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 1 I GG",
      title: "Persönlicher Schutzbereich der Menschenwürde?",
      def: "Geschützt ist <b>jeder Mensch</b> – unabhängig von Alter, Fähigkeiten, sozialem Status oder Staatsangehörigkeit. Das BVerfG gewährt auch dem Embryo objektiven Würdeschutz; der Schutz wirkt über den Tod hinaus (Mephisto-Beschluss). <b>Nicht erfasst:</b> juristische Personen und Personenmehrheiten/Gruppen.",
      options: [
        { label: "Mensch (natürliche Person)", next: "q_wuerde_sach", tone: "pos" },
        { label: "Juristische Person / Gruppe", next: "e_wuerde_kein_traeger", tone: "neg" }
      ]
    },

    q_wuerde_sach: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 1 I GG",
      title: "Sachlicher Schutzbereich: sozialer Wert- und Achtungsanspruch tangiert?",
      def: "Der Gehalt der Menschenwürde konzentriert sich auf den <b>sozialen Wert- und Achtungsanspruch</b>, der jedem Menschen wegen seines Menschseins zukommt: Die Freiheit des Individuums ist zu respektieren, seine Subjektqualität darf nicht angetastet werden.",
      options: [
        { label: "Ja", detail: "z. B. Mensch als „lebendes Wurfobjekt“", next: "q_wuerde_eingriff", tone: "pos" },
        { label: "Nein", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_wuerde_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 1 I GG",
      title: "Eingriff nach der Objektsformel des BVerfG?",
      def: "<b>Objektsformel:</b> Die Subjektqualität ist verletzt (Eingriff +), wenn der Mensch zum bloßen Objekt staatlichen Handelns herabgewürdigt wird (Folter, menschenunwürdige Haftbedingungen, Demütigung, Erniedrigung) oder eine Behandlung – auch von Privaten – erlebt, die seine Subjektqualität prinzipiell in Frage stellt.",
      hint: "Zwergenweitwurf: Der Kleinwüchsige wird wie ein Sportgerät gehandhabt – entwürdigende, objekthafte Rolle → Eingriff (+).",
      options: [
        { label: "Ja, Objektsformel erfüllt", next: "q_wuerde_verzicht", tone: "pos" },
        { label: "Nein", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_wuerde_verzicht: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 1 I 1 GG",
      title: "Entfällt die Würdeverletzung durch Einwilligung des Betroffenen?",
      text: "„Die Würde des Menschen ist unantastbar.“ Eine Rechtfertigung von Eingriffen in Art. 1 I GG ist schlechterdings ausgeschlossen – und auch ein Grundrechtsverzicht scheidet aus.",
      def: "Könnte der Einzelne über die Menschenwürde verfügen, verlöre sie ihre normative Kraft und ihre Bedeutung als oberstes Verfassungsprinzip. Die Menschenwürde steht <b>nicht zur Disposition des Einzelnen</b> – auch nicht, wenn er mit der Behandlung Geld verdient und darauf angewiesen ist.",
      options: [
        { label: "Nein – Verzicht stets ausgeschlossen", next: "e_wuerde_verletzt", tone: "pos" }
      ]
    },

    /* ================= Art. 2 II 1 GG ================= */

    q_leben_pers: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 2 II 1 GG",
      title: "Persönlicher Schutzbereich des Art. 2 II 1 GG?",
      def: "<b>Jedermannsrecht</b> – steht allen Menschen zu, auch Ausländern. Auf juristische Personen ist das Grundrecht dem Wesen nach nicht anwendbar (Art. 19 III GG). Der nasciturus ist bzgl. Art. 2 II 1 GG grundrechtsfähig (Fristenlösungsurteil).",
      options: [
        { label: "Natürliche Person", next: "q_leben_sach", tone: "pos" },
        { label: "Juristische Person", next: "e_wuerde_kein_traeger", tone: "neg" }
      ]
    },

    q_leben_sach: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 2 II 1 GG",
      title: "Sachlicher Schutzbereich: Leben oder körperliche Unversehrtheit?",
      def: "<b>Leben</b> (Var. 1) = das körperliche Dasein. <b>Körperliche Unversehrtheit</b> (Var. 2) = Gesundheit im biologisch-physiologischen Sinne, aber auch im geistig-seelischen Bereich.",
      options: [
        { label: "Leben betroffen (Var. 1)", next: "q_leben_eingriff", tone: "pos" },
        { label: "Körperliche Unversehrtheit betroffen (Var. 2)", detail: "z. B. Blutentnahme", next: "q_leben_eingriff", tone: "pos" },
        { label: "Weder noch", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_leben_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 2 II 1 GG",
      title: "Eingriff (klassischer Eingriffsbegriff)?",
      def: "<b>Klassischer Eingriffsbegriff:</b> staatliches Handeln, das unmittelbar, final und imperativ in die Rechtssphäre des Bürgers eingreift (z. B. richterlich angeordnete Blutentnahme nach § 81a StPO).",
      options: [
        { label: "Ja", next: "q_leben_schranke", tone: "pos" },
        { label: "Nein", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_leben_schranke: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 2 II 3, 104 I 1 GG",
      title: "Taugliche Schranke: formelles Gesetz?",
      text: "Art. 2 II 3 GG enthält einen einfachen Gesetzesvorbehalt („durch Gesetz oder aufgrund eines Gesetzes“). Aus Art. 104 I 1 GG folgt per Erst-Recht-Schluss, dass für Eingriffe in Art. 2 II GG ein formelles Gesetz erforderlich ist.",
      options: [
        { label: "Ja, formelles Gesetz (z. B. § 81a StPO)", next: "q_leben_formell", tone: "pos" },
        { label: "Nein, nur materielles Gesetz / keine Grundlage", next: "e_leben_verletzt", tone: "neg" }
      ]
    },

    q_leben_formell: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 70 ff., 76 ff. GG",
      title: "Schranken-Schranke: Gesetz formell verfassungsgemäß?",
      options: [
        { label: "Ja / laut Bearbeitervermerk", next: "q_leben_vhm", tone: "pos" },
        { label: "Nein", next: "e_leben_verletzt", tone: "neg" }
      ]
    },

    q_leben_vhm: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Materiell: Ist Gesetz und Einzelakt verhältnismäßig?",
      text: "Legitimes Ziel – geeignet – erforderlich – angemessen. Beispiel Blutentnahme: Strafverfolgung als legitimes Ziel; § 81a StPO verlangt selbst, dass kein Nachteil für die Gesundheit zu befürchten ist und die Regeln der ärztlichen Kunst eingehalten werden; richterliche Anordnung (§ 81a II StPO) sichert das Verfahren.",
      options: [
        { label: "Ja, verhältnismäßig", next: "e_leben_nicht_verletzt", tone: "pos" },
        { label: "Nein", next: "e_leben_verletzt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wuerde_kein_traeger: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Persönlicher Schutzbereich nicht eröffnet",
      text: "Juristische Personen und Personenmehrheiten können sich nicht auf den individualisierten Schutzgehalt der Menschenwürde bzw. auf Art. 2 II GG berufen (Art. 19 III GG – dem Wesen nach nicht anwendbar)."
    },
    e_kein_schutz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Sachlicher Schutzbereich nicht eröffnet",
      text: "Der soziale Wert- und Achtungsanspruch bzw. Leben/Gesundheit sind nicht betroffen. Ggf. anderes Grundrecht (z. B. allgemeines Persönlichkeitsrecht oder Art. 2 I GG) prüfen."
    },
    e_kein_eingriff: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff",
      text: "Die Maßnahme erfüllt die Objektsformel nicht bzw. greift nicht unmittelbar, final und imperativ in die Rechtssphäre ein. Eine Grundrechtsverletzung scheidet aus."
    },
    e_wuerde_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verletzung der Menschenwürde, Art. 1 I GG",
      text: "Der Mensch wird zum bloßen Objekt herabgewürdigt; eine Rechtfertigung ist schlechterdings ausgeschlossen und ein Verzicht unwirksam. Es liegt eine Verletzung des Art. 1 I GG vor. Merke für die Verfassungsänderung: Die in Art. 1 GG niedergelegten Grundsätze sind über Art. 79 III GG jeder Änderung entzogen (Ewigkeitsgarantie)."
    },
    e_leben_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verletzung des Art. 2 II 1 GG",
      text: "Der Eingriff in Leben bzw. körperliche Unversehrtheit ist nicht gerechtfertigt: Es fehlt an einem (formellen) verfassungsgemäßen Schrankengesetz oder an der Verhältnismäßigkeit."
    },
    e_leben_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Verletzung des Art. 2 II 1 GG",
      text: "Der Eingriff ist durch ein formelles, verfassungsgemäßes und verhältnismäßiges Gesetz gedeckt (vgl. Blutentnahme-Fall: B ist durch die Blutentnahme nach § 81a StPO nicht in Art. 2 II 1 Var. 2 GG verletzt)."
    }
  }
});
