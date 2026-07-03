/*
 * Prüfungsschema: Berufsfreiheit, Art. 12 I GG (mit Dreistufentheorie)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "17. LE 17 - Art. 12 GG Berufsfreiheit" (Weidenbach, FS I) – Apothekenfall
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: schutz → eingriff → schranke → stufen → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-berufsfreiheit",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte – Einzelgrundrechte",
  title: "Berufsfreiheit, Art. 12 GG",
  description: "Einheitliches Grundrecht der Berufsfreiheit (BVerfGE 7, 377 – Apothekenurteil): Berufsbegriff, berufsregelnde Tendenz beim Eingriff und die Dreistufentheorie als Abwägungsregel in der Verhältnismäßigkeitsprüfung.",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "schranke", label: "Schranke" },
    { id: "stufen", label: "Dreistufentheorie" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Art. 12 I GG verletzt",
    neg: "Keine Verletzung des Art. 12 I GG",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= I. Schutzbereich ================= */

    start: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 12 I, 116 I, 19 III GG",
      title: "Persönlicher Schutzbereich: Wer beruft sich auf Art. 12 I GG?",
      text: "Obersatz: X könnte durch das Gesetz in seiner Berufsfreiheit aus Art. 12 I GG verletzt sein – wenn der Schutzbereich eröffnet ist, ein Eingriff vorliegt und dieser nicht gerechtfertigt ist.",
      def: "Art. 12 I GG ist <b>Deutschengrundrecht</b> (Art. 116 I GG). EU-Bürger sind über das Diskriminierungsverbot (Art. 18, 20 AEUV) einbezogen; Nicht-EU-Ausländer über Art. 2 I GG. Juristische Personen des Privatrechts nach Art. 19 III GG.",
      options: [
        { label: "Deutscher / natürliche Person", next: "q_beruf", tone: "pos" },
        { label: "EU-Bürger", detail: "Über Art. 18, 20 AEUV wie Deutsche", next: "q_beruf", tone: "pos" },
        { label: "Juristische Person des Privatrechts", detail: "Art. 19 III GG – Berufsfreiheit kollektiv ausübbar", next: "q_beruf", tone: "pos" },
        { label: "Nicht-EU-Ausländer", next: "e_auslaender", tone: "warn" }
      ]
    },

    q_beruf: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 12 I GG",
      title: "Sachlicher Schutzbereich: Liegt ein Beruf vor?",
      text: "Das BVerfG leitet aus den Teilgarantien (S. 1: Berufswahl, Arbeitsplatzwahl, Wahl der Ausbildungsstätte – das „Ob“; S. 2: Berufsausübung – das „Wie“) das einheitliche Grundrecht der Berufsfreiheit ab: Die Teilgarantien sind untrennbar verbunden – wer täglich seinen Beruf ausübt, bestätigt täglich seine Berufswahl.",
      def: "<b>Beruf:</b> eine (1) auf Dauer angelegte, (2) der Schaffung und Erhaltung einer Lebensgrundlage dienende und (3) nicht schlechthin gemeinschaftsschädliche Tätigkeit. Auch Nebentätigkeiten und Gelegenheitsjobs; selbstständig oder unselbstständig. Ausgenommen: sozial nicht hinnehmbare Tätigkeiten (Auftragsmörder, Rauschgifthändler).",
      options: [
        { label: "Ja, alle drei Merkmale erfüllt", detail: "z. B. selbstständiger Betrieb einer Apotheke", next: "q_eingriff", tone: "pos" },
        { label: "Nein, gemeinschaftsschädliche Tätigkeit", next: "e_kein_beruf", tone: "neg" }
      ]
    },

    /* ================= II. Eingriff ================= */

    q_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "—",
      title: "Eingriff: Wird die Berufsausübung erschwert oder unmöglich gemacht?",
      def: "<b>Eingriff:</b> jedes staatliche Handeln, das die Ausübung des geschützten Verhaltens erschwert oder unmöglich macht (z. B. Zulassungsvoraussetzungen durch Gesetz).",
      options: [
        { label: "Ja", next: "q_tendenz", tone: "pos" },
        { label: "Nein", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_tendenz: {
      station: "eingriff",
      kind: "frage",
      norm: "—",
      title: "Hat der Eingriff eine berufsregelnde Tendenz?",
      text: "Da der Schutzbereich sonst ausufern würde (Bsp.: Tempolimit hindert Versicherungsvertreter an Kundenterminen), ist zusätzlich eine berufsregelnde Tendenz erforderlich.",
      def: "<b>Subjektiv berufsregelnd:</b> Eingriff zielt final und unmittelbar auf die Berufsfreiheit (z. B. Abschlussprüfung, Altersgrenzen für Notare). <b>Objektiv berufsregelnd:</b> berufsneutrale Zielsetzung, aber typischerweise mit engem Berufsbezug und gewichtigen Auswirkungen (z. B. Dosenpfand, Apotheken-Zulassungsregeln). <b>Keine Tendenz:</b> Berufsfolgen nur bloßer Reflex (Tempolimit).",
      options: [
        { label: "Subjektiv berufsregelnde Tendenz", next: "q_schranke", tone: "pos" },
        { label: "Objektiv berufsregelnde Tendenz", next: "q_schranke", tone: "pos" },
        { label: "Keine berufsregelnde Tendenz", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    /* ================= III. Schranke ================= */

    q_schranke: {
      station: "schranke",
      kind: "frage",
      norm: "Art. 12 I 2 GG",
      title: "Taugliche Schranke: Gesetz oder aufgrund eines Gesetzes?",
      text: "Nach Art. 12 I 2 GG kann die Berufsausübung durch Gesetz oder aufgrund eines Gesetzes geregelt werden (einfacher Gesetzesvorbehalt). Da das BVerfG von einem einheitlichen Grundrecht ausgeht, unterliegt der gesamte Art. 12 I GG diesem Vorbehalt.",
      hint: "Typische Schrankengesetze: arbeits- und beamtenrechtliche Vorschriften, Laufbahnverordnung, Ladenschlussgesetz, GewO, GastG, Handwerksordnung.",
      options: [
        { label: "Formelles Gesetz („durch Gesetz“)", next: "q_formell", tone: "pos" },
        { label: "RVO/Satzung auf gesetzlicher Grundlage („aufgrund eines Gesetzes“)", next: "q_formell", tone: "pos" },
        { label: "Keine gesetzliche Grundlage", next: "e_verletzt_schranke", tone: "neg" }
      ]
    },

    q_formell: {
      station: "schranke",
      kind: "frage",
      norm: "Art. 70 ff., 76 ff. GG",
      title: "Formelle Verfassungsmäßigkeit des Schrankengesetzes?",
      text: "Kompetenz (Art. 70 ff. GG – für viele Berufsregelungen: Recht der Wirtschaft, Art. 74 I Nr. 11 GG) und Gesetzgebungsverfahren (Art. 76 ff. GG).",
      options: [
        { label: "Ja / laut Bearbeitervermerk zu unterstellen", next: "q_stufe", tone: "pos" },
        { label: "Nein", next: "e_verletzt_formell", tone: "neg" }
      ]
    },

    /* ================= IV. Dreistufentheorie ================= */

    q_stufe: {
      station: "stufen",
      kind: "frage",
      norm: "Art. 20 III GG (BVerfGE 7, 377)",
      title: "Dreistufentheorie: Auf welcher Stufe greift die Regelung ein?",
      text: "Materiell gilt der Verhältnismäßigkeitsgrundsatz – für Art. 12 I GG konkretisiert durch die Dreistufentheorie des BVerfG: Je intensiver der Eingriff (Berufsausübung → subjektive → objektive Berufswahl), desto höhere Anforderungen an die Rechtfertigung.",
      def: "<b>1. Stufe – Berufsausübungsregelung („Wie“):</b> z. B. Ladenschlusszeiten. <b>2. Stufe – subjektive Berufswahlregelung:</b> Zulassung von persönlichen Eigenschaften/Fähigkeiten abhängig (z. B. Abschlussprüfung, 10-Jahre-Anstellung im Apothekenfall). <b>3. Stufe – objektive Berufswahlregelung:</b> Zulassung von Kriterien abhängig, auf die der Einzelne keinen Einfluss hat (z. B. Bedürfnisprüfung, Kontingente).",
      options: [
        { label: "1. Stufe: Berufsausübungsregelung", next: "q_ziel", set: { stufe: 1 }, tone: "neutral" },
        { label: "2. Stufe: subjektive Berufswahlregelung", next: "q_ziel", set: { stufe: 2 }, tone: "neutral" },
        { label: "3. Stufe: objektive Berufswahlregelung", next: "q_ziel", set: { stufe: 3 }, tone: "neutral" }
      ]
    },

    q_ziel: {
      station: "stufen",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Legitimes Ziel: Genügt der Zweck den Anforderungen der Stufe?",
      def: "<b>1. Stufe:</b> vernünftige Erwägungen des Allgemeinwohls genügen. <b>2. Stufe:</b> Schutz wichtiger Gemeinschaftsgüter erforderlich. <b>3. Stufe:</b> nur die Abwehr schwerer, nachweisbarer und höchstwahrscheinlicher Gefahren für ein überragend wichtiges Gemeinschaftsgut.",
      hint: "Apothekenfall: Schutz der geordneten Arzneimittelversorgung = wichtiges Gemeinschaftsgut; bloßer Konkurrentenschutz genügt nie.",
      options: [
        { label: "Ja, Zweck erfüllt die Stufenanforderungen", next: "q_geeignet", tone: "pos" },
        { label: "Nein", next: "e_verletzt_stufe", tone: "neg" }
      ]
    },

    q_geeignet: {
      station: "stufen",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Regelung geeignet?",
      def: "<b>Geeignet</b>, wenn das Ziel erreicht oder zumindest gefördert wird.",
      options: [
        { label: "Ja", next: "q_erforderlich", tone: "pos" },
        { label: "Nein", next: "e_verletzt_stufe", tone: "neg" }
      ]
    },

    q_erforderlich: {
      station: "stufen",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Regelung erforderlich – auch auf der gewählten Stufe?",
      text: "Kein milderes, gleich geeignetes Mittel. Besonderheit: Eine Regelung auf höherer Stufe ist immer unzulässig, wenn eine Regelung auf einer niedrigeren Stufe genügen würde – die niedrigere Stufe ist stets das mildere Mittel!",
      options: [
        { label: "Ja, keine mildere Stufe/Maßnahme möglich", next: "q_angemessen", tone: "pos" },
        { label: "Nein, niedrigere Stufe hätte genügt", next: "e_verletzt_stufe", tone: "neg" }
      ]
    },

    q_angemessen: {
      station: "stufen",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Regelung angemessen?",
      text: "Abwägung zwischen geschütztem und beeinträchtigtem Rechtsgut mit Pro-/Contra-Argumentation – die Schwere des Eingriffs (Stufe!) gegen das Gewicht der verfolgten Gemeinwohlbelange.",
      options: [
        { label: "Ja, Abwägung geht für das Gesetz aus", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein, unzumutbar", next: "e_verletzt_stufe", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_auslaender: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Art. 12 GG nicht anwendbar – Art. 2 I GG prüfen",
      text: "Art. 12 I GG ist ein Deutschengrundrecht. Nicht-EU-Ausländer können sich über das Auffanggrundrecht des Art. 2 I GG auf die Einhaltung des einfachen Rechts und des Verhältnismäßigkeitsgrundsatzes berufen."
    },
    e_kein_beruf: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Beruf – Schutzbereich nicht eröffnet",
      text: "Die Tätigkeit erfüllt die Berufsdefinition nicht (insb. schlechthin gemeinschaftsschädliche bzw. sozial nicht hinnehmbare Tätigkeiten wie Auftragsmord oder Rauschgifthandel). Art. 12 I GG schützt sie nicht."
    },
    e_kein_eingriff: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff in Art. 12 I GG",
      text: "Die Maßnahme hat keine berufsregelnde Tendenz – die Folgen für den Beruf sind bloßer Reflex einer berufsneutralen Regelung (Bsp.: Tempolimit). Ein Eingriff in die Berufsfreiheit liegt nicht vor; ggf. Art. 2 I GG prüfen."
    },
    e_verletzt_schranke: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 12 I GG verletzt – keine taugliche Schranke",
      text: "Der Eingriff erfolgt ohne gesetzliche Grundlage. Der einfache Gesetzesvorbehalt des Art. 12 I 2 GG ist nicht gewahrt – die Berufsfreiheit ist verletzt."
    },
    e_verletzt_formell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 12 I GG verletzt – Gesetz formell verfassungswidrig",
      text: "Das Schrankengesetz ist formell verfassungswidrig (Kompetenz oder Verfahren) und damit keine taugliche Schranke."
    },
    e_verletzt_stufe: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 12 I GG verletzt – Regelung unverhältnismäßig",
      text: "Die Regelung hält den Anforderungen der Dreistufentheorie nicht stand: Der Zweck genügt nicht den Anforderungen der betroffenen Stufe, eine mildere Stufe hätte genügt oder die Abwägung fällt gegen das Gesetz aus. Die Berufsfreiheit aus Art. 12 I GG ist verletzt."
    },
    e_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Verletzung des Art. 12 I GG",
      text: "Der Eingriff ist gerechtfertigt: taugliche Schranke (Art. 12 I 2 GG), formell verfassungsgemäßes Gesetz und verhältnismäßige Regelung unter Beachtung der Dreistufentheorie. Die Berufsfreiheit ist nicht verletzt."
    }
  }
});
