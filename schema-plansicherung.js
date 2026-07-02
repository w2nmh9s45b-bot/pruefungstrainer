/*
 * Prüfungsschema: Sicherung der Bauleitplanung
 * (Veränderungssperre §§ 14, 16–18 BauGB, Zurückstellung § 15 BauGB,
 *  Vorkaufsrecht §§ 24 ff. BauGB, Zulässigkeit nach § 33 BauGB)
 *
 * Quelle (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff), Folien 197 ff.
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "plansicherung",
  subject: "Baurecht",
  area: "Bauleitplanung",
  title: "Plansicherung: Veränderungssperre & Co.",
  description: "Wirksamkeit der Veränderungssperre (§§ 14, 16–18 BauGB) mit Ausnahmen und Geltungsdauer, Zurückstellung von Baugesuchen (§ 15 BauGB), gemeindliches Vorkaufsrecht (§§ 24 ff. BauGB) und Zulässigkeit von Vorhaben bei Planreife (§ 33 BauGB).",
  start: "start",
  stations: [
    { id: "instrument", label: "Instrument" },
    { id: "formell", label: "Formell" },
    { id: "materiell", label: "Materiell" },
    { id: "folgen", label: "Rechtsfolgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Instrument greift",
    neg: "Ergebnis: Instrument greift nicht",
    frei: "Ergebnis: Ausnahme / Hinweis",
    warn: "Ergebnis: Ausnahme greift"
  },

  nodes: {

    start: {
      station: "instrument",
      kind: "frage",
      norm: "§§ 14–28, 33 BauGB",
      title: "Welches Instrument steht in Rede?",
      text: "Während der Planaufstellung kann die Gemeinde ihre Planung sichern. Die Klausur- und Praxisrelevanz nimmt von § 14 bis § 28 BauGB stetig ab.",
      def: "<b>Veränderungssperre</b> (§§ 14, 16–18 BauGB): Satzung · <b>Zurückstellung</b> (§ 15 BauGB): Verwaltungsakt – überbrückt die Zeit bis zur Veränderungssperre · <b>Vorkaufsrecht</b> (§§ 24 ff. BauGB) · <b>§ 33 BauGB</b>: positiver Zulässigkeitstatbestand bei Planreife (keine plansichernde Funktion!).",
      options: [
        { label: "Veränderungssperre", detail: "§§ 14, 16–18 BauGB – Satzung", next: "q_vs_formell", tone: "neutral" },
        { label: "Zurückstellung eines Baugesuchs", detail: "§ 15 BauGB – Verwaltungsakt, max. 12 Monate", next: "q_zs", tone: "neutral" },
        { label: "Gemeindliches Vorkaufsrecht", detail: "§§ 24 ff. BauGB", next: "q_vk", tone: "neutral" },
        { label: "Zulässigkeit eines Vorhabens nach § 33 BauGB", detail: "Vorhaben trotz fehlender Zulässigkeit nach §§ 30, 34, 35 BauGB", next: "q_33_vor", tone: "neutral" }
      ]
    },

    /* ================= Veränderungssperre ================= */

    q_vs_formell: {
      station: "formell",
      kind: "frage",
      norm: "§ 16 I BauGB",
      title: "Ist die Veränderungssperre formell ordnungsgemäß erlassen?",
      text: "Die Veränderungssperre ergeht als Satzung (§ 16 I BauGB). Erforderlich: 1. Satzungsbeschluss (kommunalrechtlich, Gemeinderat), 2. Ausfertigung, 3. ortsübliche Bekanntmachung.",
      hint: "Ausfertigung und Bekanntmachung sind landesrechtliche Erfordernisse, für die §§ 214, 215 BauGB nicht gelten – § 214 IV BauGB (ergänzendes Verfahren) ist aber anwendbar.",
      options: [
        { label: "Ja, formell ordnungsgemäß", next: "q_vs_aufstellung", tone: "pos" },
        { label: "Nein, Fehler bei Beschluss, Ausfertigung oder Bekanntmachung", next: "q_vs_heilung", tone: "neg" }
      ]
    },

    q_vs_heilung: {
      station: "formell",
      kind: "frage",
      norm: "§ 214 IV BauGB",
      title: "Wurde der Fehler im ergänzenden Verfahren behoben?",
      options: [
        { label: "Ja, behoben und (rückwirkend) in Kraft gesetzt", next: "q_vs_aufstellung", tone: "warn" },
        { label: "Nein", next: "e_vs_formell", tone: "neg" }
      ]
    },

    q_vs_aufstellung: {
      station: "materiell",
      kind: "frage",
      norm: "§§ 14 I, 16 I, 2 I 2 BauGB",
      title: "Lag bei Erlass ein ortsüblich bekannt gemachter Aufstellungsbeschluss vor?",
      text: "Die Veränderungssperre setzt voraus, dass die Gemeinde zuvor ein Bebauungsplanverfahren durch bekannt gemachten Planaufstellungsbeschluss (§ 2 I 2 BauGB) eingeleitet hat. Die zeitliche Abfolge ist zwingend.",
      def: "<b>Merke:</b> Der bekannt gemachte Aufstellungsbeschluss ist <u>materielle Wirksamkeitsvoraussetzung</u> der Veränderungssperre – ein Rückgriff auf § 214 I BauGB (Unbeachtlichkeit) ist hier nicht möglich.",
      options: [
        { label: "Ja", next: "q_vs_minimum", tone: "pos" },
        { label: "Nein", next: "e_vs_aufstellung", tone: "neg" }
      ]
    },

    q_vs_minimum: {
      station: "materiell",
      kind: "frage",
      norm: "§§ 1 III, 9, 14 I BauGB",
      title: "Planerisches Minimum und Sicherungsbedürfnis vorhanden?",
      text: "Die zu sichernde Planung muss ein Mindestmaß an (positiver) Planung erkennen lassen (Maßstab: §§ 1 III, 9 BauGB), und es muss ein Sicherungsbedürfnis – eine abstrakte Gefährdung der eingeleiteten Planung – bestehen.",
      options: [
        { label: "Ja", next: "q_vs_inhalt", tone: "pos" },
        { label: "Nein, reine Verhinderungsplanung ohne Konzept", next: "e_vs_minimum", tone: "neg" }
      ]
    },

    q_vs_inhalt: {
      station: "materiell",
      kind: "frage",
      norm: "§ 14 I BauGB",
      title: "Hält sich der Regelungsinhalt im Rahmen des § 14 I BauGB?",
      text: "Die Veränderungssperre verbietet insbesondere die Durchführung von Vorhaben i. S. d. § 29 I BauGB. Sie wirkt auch in anderen Genehmigungsverfahren, soweit die §§ 30 ff. BauGB dort Prüfungsmaßstab sind (z. B. Anlagen an Gewässern, § 31 LWG).",
      options: [
        { label: "Ja", next: "q_vs_dauer", tone: "pos" },
        { label: "Nein, Inhalt geht über § 14 I BauGB hinaus", next: "e_vs_inhalt", tone: "neg" }
      ]
    },

    q_vs_dauer: {
      station: "folgen",
      kind: "frage",
      norm: "§ 17 BauGB",
      title: "Ist die Geltungsdauer gewahrt?",
      def: "<b>§ 17 I 1:</b> Geltung zwei Jahre.<br><b>§ 17 I 2:</b> Anrechnung der Zeit einer Zurückstellung (§ 15 BauGB) – auch einer <u>faktischen</u> Zurückstellung (verzögerte Bearbeitung des Bauantrags vor Inkrafttreten der Sperre).<br><b>§ 17 I 3:</b> Verlängerung um ein Jahr.<br><b>§ 17 II:</b> nochmals bis zu ein Jahr bei besonderen Umständen.<br><b>§ 17 V:</b> Außerkrafttreten, sobald die Bauleitplanung abgeschlossen ist.",
      options: [
        { label: "Ja, Sperre gilt noch", next: "q_vs_ausnahme", tone: "pos" },
        { label: "Nein, abgelaufen bzw. außer Kraft", next: "e_vs_dauer", tone: "neg" }
      ]
    },

    q_vs_ausnahme: {
      station: "folgen",
      kind: "frage",
      norm: "§ 14 II, III BauGB",
      title: "Greift für das konkrete Vorhaben eine Ausnahme?",
      text: "Die wirksame Veränderungssperre ist ein materieller Versagungsgrund für die Baugenehmigung – außer es greift eine Ausnahme.",
      def: "<b>§ 14 II BauGB:</b> Ausnahme im Einvernehmen mit der Gemeinde, wenn überwiegende öffentliche Belange nicht entgegenstehen. Rechtsprechung: stets zu erteilen, wenn der Planentwurf Planreife nach § 33 BauGB erlangt hat und das Vorhaben plankonform ist.<br><b>§ 14 III BauGB (Bestandsschutz):</b> Vor Inkrafttreten erteilte Baugenehmigungen bleiben unberührt (Bestandskraft nicht erforderlich); auch ein Bauvorbescheid behält seine Bindungswirkung.",
      options: [
        { label: "Nein, keine Ausnahme", next: "e_vs_greift", tone: "pos" },
        { label: "Ausnahme nach § 14 II BauGB wird erteilt", next: "e_vs_ausnahme", tone: "warn" },
        { label: "Bestandsschutz nach § 14 III BauGB", next: "e_vs_bestand", tone: "warn" }
      ]
    },

    /* ================= Zurückstellung ================= */

    q_zs: {
      station: "materiell",
      kind: "frage",
      norm: "§ 15 I BauGB",
      title: "Liegen die Voraussetzungen der Zurückstellung vor?",
      text: "Die Zurückstellung (Rechtsform: Verwaltungsakt) setzt die Entscheidung über die Zulässigkeit des Vorhabens für höchstens zwölf Monate aus. Sie überbrückt insbesondere die Zeit, die der Erlass einer Veränderungssperre erfordert.",
      def: "<b>Voraussetzungen:</b> 1. Antrag der Gemeinde, 2. die materiellen Voraussetzungen einer Veränderungssperre i. S. d. § 14 BauGB liegen vor (bekannt gemachter Aufstellungsbeschluss, planerisches Minimum), 3. ein konkret erforderliches Sicherungsbedürfnis.",
      options: [
        { label: "Ja, alle Voraussetzungen erfüllt", next: "e_zs_rechtmaessig", tone: "pos" },
        { label: "Nein", next: "e_zs_rechtswidrig", tone: "neg" }
      ]
    },

    /* ================= Vorkaufsrecht ================= */

    q_vk: {
      station: "materiell",
      kind: "frage",
      norm: "§§ 24–28 BauGB",
      title: "Liegen die Voraussetzungen des Vorkaufsrechts vor?",
      text: "Zweck: Grundstücksbeschaffung für städtebauliche Zwecke ohne Enteignungsverfahren. Die Ausübung erfolgt durch Verwaltungsakt gegenüber dem Verkäufer innerhalb von zwei Monaten nach Mitteilung des Kaufvertrags (§ 28 II BauGB).",
      def: "<b>Voraussetzungen:</b> 1. Vorkaufsfall (Verkauf eines Grundstücks im Gemeindegebiet) · 2. kein Ausschluss (§ 26 BauGB) · 3. allgemeines (§ 24 I BauGB) oder besonderes Vorkaufsrecht (Satzung, § 25 I BauGB) · 4. Rechtfertigung durch das Wohl der Allgemeinheit (§ 24 III BauGB) · 5. keine Abwendung durch den Käufer (§ 27 BauGB).",
      options: [
        { label: "Ja, alle fünf Voraussetzungen und Zwei-Monats-Frist gewahrt", next: "e_vk_pos", tone: "pos" },
        { label: "Nein, mindestens eine Voraussetzung fehlt oder Frist versäumt", next: "e_vk_neg", tone: "neg" }
      ]
    },

    /* ================= § 33 BauGB ================= */

    q_33_vor: {
      station: "materiell",
      kind: "frage",
      norm: "§ 33 BauGB",
      title: "Vorprüfung: Ist das Vorhaben derzeit nach §§ 30, 34, 35 BauGB unzulässig?",
      text: "§ 33 BauGB ist subsidiär: Er kommt nur zur Anwendung, wenn das Vorhaben zurzeit nicht nach §§ 30, 34, 35 BauGB zulässig ist. Er hebt deren negative Beurteilung durch einen positiven Zulässigkeitstatbestand auf – und steht zulässigen Vorhaben nie entgegen (keine plansichernde Funktion).",
      options: [
        { label: "Ja, derzeit unzulässig – § 33 BauGB prüfen", next: "q_33_beschluss", tone: "neutral" },
        { label: "Nein, schon nach §§ 30/34/35 BauGB zulässig", next: "e_33_unnoetig", tone: "neutral" }
      ]
    },

    q_33_beschluss: {
      station: "materiell",
      kind: "frage",
      norm: "§ 2 I 2 BauGB",
      title: "Liegt ein ortsüblich bekannt gemachter Aufstellungsbeschluss vor?",
      options: [
        { label: "Ja", next: "q_33_formell", tone: "pos" },
        { label: "Nein", next: "e_33_neg", tone: "neg" }
      ]
    },

    q_33_formell: {
      station: "materiell",
      kind: "frage",
      norm: "§ 33 I Nr. 1 BauGB",
      title: "Formelle Planreife: Beteiligung durchgeführt?",
      text: "Die Öffentlichkeits- und Behördenbeteiligung (§ 3 II, § 4 II, § 4a II–V BauGB) muss ordnungsgemäß durchgeführt und die Prüfung der eingegangenen Stellungnahmen abgeschlossen sein.",
      hint: "Die formelle Planreife ist ein Durchgangsstadium: Lässt die Gemeinde das Verfahren danach ruhen, liegen die Voraussetzungen nicht (mehr) vor. Sonderfall § 33 II BauGB: Zulassung schon vor erneuter Beteiligung nach § 4a III BauGB, wenn die Änderung sich nicht auf das Vorhaben auswirkt (Ermessen meist auf Null reduziert).",
      options: [
        { label: "Ja, formelle Planreife", next: "q_33_materiell", tone: "pos" },
        { label: "Nein", next: "e_33_neg", tone: "neg" }
      ]
    },

    q_33_materiell: {
      station: "materiell",
      kind: "frage",
      norm: "§ 33 I Nr. 2 BauGB",
      title: "Materielle Planreife: steht das Vorhaben den künftigen Festsetzungen nicht entgegen?",
      text: "Die Planung muss inhaltlich und zeitlich so weit fortgeschritten sein, dass ein unverändertes Inkrafttreten des Plans hinreichend sicher voraussehbar ist – und das Vorhaben darf den künftigen Festsetzungen nicht entgegenstehen.",
      options: [
        { label: "Ja", next: "q_33_rest", tone: "pos" },
        { label: "Nein", next: "e_33_neg", tone: "neg" }
      ]
    },

    q_33_rest: {
      station: "materiell",
      kind: "frage",
      norm: "§ 33 I Nr. 3, 4 BauGB",
      title: "Anerkenntnis und Erschließung?",
      text: "Der Antragsteller muss die künftigen Festsetzungen für sich und seine Rechtsnachfolger schriftlich anerkennen (Nr. 3, vgl. § 126 BGB – meist unproblematisch), und die plangemäße Erschließung muss gesichert sein (Nr. 4, Prüfung wie bei § 30 I BauGB).",
      options: [
        { label: "Ja, beides erfüllt", next: "e_33_pos", tone: "pos" },
        { label: "Nein", next: "e_33_neg", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vs_greift: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 14 I BauGB",
      title: "Veränderungssperre wirksam – Vorhaben gesperrt",
      text: "Die Veränderungssperre ist formell und materiell wirksam; eine Ausnahme greift nicht. Sie ist ein materieller Versagungsgrund: Die Baugenehmigung wird nicht erteilt.\n\nRechtsschutz: Normenkontrolle gegen die Satzung (§ 47 I Nr. 1 VwGO); gegen die Ablehnung der Baugenehmigung Verpflichtungsklage in Gestalt der Versagungsgegenklage (§ 42 I Alt. 2 VwGO)."
    },

    e_vs_ausnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 14 II BauGB",
      title: "Ausnahme von der Veränderungssperre",
      text: "Überwiegende öffentliche Belange stehen nicht entgegen; die Ausnahme wird im Einvernehmen mit der Gemeinde zugelassen. Bei Planreife (§ 33 BauGB) und plankonformem Vorhaben ist die Ausnahme nach der Rechtsprechung stets zu erteilen. Das Vorhaben kann trotz Sperre genehmigt werden."
    },

    e_vs_bestand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 14 III BauGB",
      title: "Bestandsschutz: Sperre berührt das Vorhaben nicht",
      text: "Der Bauherr war vor Inkrafttreten der Veränderungssperre im Besitz einer Baugenehmigung (oder eines Bauvorbescheids mit fortdauernder Bindungswirkung). Die nachträgliche Veränderungssperre berührt sein Vorhaben nicht."
    },

    e_vs_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 16 I BauGB",
      title: "Veränderungssperre formell unwirksam",
      text: "Satzungsbeschluss, Ausfertigung oder ortsübliche Bekanntmachung sind fehlerhaft, und der Mangel wurde nicht im ergänzenden Verfahren (§ 214 IV BauGB) behoben. Die Sperre ist unwirksam und steht dem Vorhaben nicht entgegen."
    },

    e_vs_aufstellung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 14 I, 2 I 2 BauGB",
      title: "Unwirksam: kein bekannt gemachter Aufstellungsbeschluss",
      text: "Bei Erlass der Veränderungssperre fehlte der ortsüblich bekannt gemachte Planaufstellungsbeschluss – eine materielle Wirksamkeitsvoraussetzung, die nicht über § 214 I BauGB unbeachtlich werden kann. Die Sperre ist unwirksam."
    },

    e_vs_minimum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 1 III, 14 I BauGB",
      title: "Unwirksam: kein planerisches Minimum",
      text: "Der zu sichernden Planung fehlt das Mindestmaß an positiver Planung bzw. das Sicherungsbedürfnis (z. B. reine Verhinderungsplanung). Die Veränderungssperre ist unwirksam."
    },

    e_vs_inhalt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I BauGB",
      title: "Unwirksam: unzulässiger Regelungsinhalt",
      text: "Der Inhalt der Veränderungssperre geht über den von § 14 I BauGB vorgegebenen Rahmen hinaus. Sie ist insoweit unwirksam."
    },

    e_vs_dauer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 17 BauGB",
      title: "Veränderungssperre außer Kraft",
      text: "Die Geltungsdauer (zwei Jahre, ggf. verlängert; Anrechnung auch faktischer Zurückstellungszeiten) ist abgelaufen oder die Bauleitplanung ist abgeschlossen (§ 17 V BauGB). Die Sperre steht dem Vorhaben nicht mehr entgegen."
    },

    e_zs_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 15 BauGB",
      title: "Zurückstellung rechtmäßig",
      text: "Die Entscheidung über den Bauantrag wird für bis zu zwölf Monate ausgesetzt.\n\nRechtsschutz des Bauherrn: Die Zurückstellung ist ein Verwaltungsakt und anfechtbar. Rechtsschutz der Gemeinde bei Ablehnung ihres Antrags: Versagungsgegenklage; wird die Baugenehmigung trotz Antrags erteilt, kann die Gemeinde sie anfechten (keine aufschiebende Wirkung, § 212a BauGB)."
    },

    e_zs_rechtswidrig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 BauGB",
      title: "Zurückstellung rechtswidrig",
      text: "Es fehlt am Antrag der Gemeinde, an den materiellen Voraussetzungen einer Veränderungssperre oder am konkreten Sicherungsbedürfnis. Die Zurückstellung ist rechtswidrig und auf Anfechtung des Bauherrn aufzuheben."
    },

    e_vk_pos: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 24 ff., 28 II BauGB",
      title: "Vorkaufsrecht wirksam ausgeübt",
      text: "Alle Voraussetzungen liegen vor; die Ausübung erfolgte fristgerecht durch Verwaltungsakt gegenüber dem Verkäufer.\n\nRechtsbehelf: Antrag auf gerichtliche Entscheidung bei der Kammer für Baulandsachen (§ 217 BauGB, Zivilgericht); auch der Käufer ist antragsbefugt (Eigentumsverschaffungsanspruch).\n\nPraxis-Tipp für Käufer: Vorab ein Negativzeugnis der Gemeinde über die Nichtausübung verlangen (§ 28 I 3 BauGB)."
    },

    e_vk_neg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 24 ff. BauGB",
      title: "Vorkaufsrecht nicht (wirksam) ausgeübt",
      text: "Mindestens eine Voraussetzung der §§ 24 ff. BauGB fehlt (Vorkaufsfall, kein Ausschluss, Vorkaufsrechtstatbestand, Wohl der Allgemeinheit, keine Abwendung) oder die Zwei-Monats-Frist des § 28 II BauGB ist versäumt. Der Kaufvertrag wird ungestört abgewickelt."
    },

    e_33_pos: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 33 I BauGB",
      title: "Vorhaben nach § 33 BauGB zulässig",
      text: "Aufstellungsbeschluss, formelle und materielle Planreife, schriftliches Anerkenntnis und gesicherte Erschließung liegen vor. Das Inkrafttreten des Planentwurfs wird im Verhältnis zum Antragsteller faktisch vorverlegt – das Vorhaben ist bauplanungsrechtlich zulässig."
    },

    e_33_neg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 33 I BauGB",
      title: "Keine Zulässigkeit nach § 33 BauGB",
      text: "Mindestens eine Voraussetzung des § 33 I BauGB fehlt. Es bleibt bei der Beurteilung nach §§ 30, 34, 35 BauGB – das Vorhaben ist (derzeit) bauplanungsrechtlich unzulässig."
    },

    e_33_unnoetig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 33 BauGB",
      title: "§ 33 BauGB nicht erforderlich",
      text: "Das Vorhaben ist bereits nach §§ 30, 34 oder 35 BauGB zulässig. § 33 BauGB steht zulässigen Vorhaben nicht entgegen – er hat keine plansichernde Funktion. Will die Gemeinde das Vorhaben verhindern, braucht sie Veränderungssperre oder Zurückstellung."
    }
  },

  routers: {}
});
