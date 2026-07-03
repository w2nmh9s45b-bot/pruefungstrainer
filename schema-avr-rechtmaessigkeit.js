/*
 * Prüfungsschema: Rechtmäßigkeit eines Verwaltungsakts (Vollprüfung)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1 + 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Rechtmaessigkeit VA - Uebersicht" (Klein)
 *  - "OLE 15 Das Verwaltungsverfahren" (Hering – Grobschema, Zuständigkeit, Anhörung)
 *  - "OLE 16 Formelle Rechtmaessigkeit - Form", "Fehlerfolgen bei der formellen Rechtmäßigkeit"
 *  - "Die Rechtmäßigkeit des VA – Tatbestand" / "Rechtsfolge (1)-(4)" (Bestimmtheit,
 *    Möglichkeit, Verhältnismäßigkeit, Ermessen)
 *  - Gesetze: VwVfG §§ 3, 9 ff., 20, 21, 24, 26, 28, 37, 39, 40, 44, 45, 46 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-rechtmaessigkeit",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1", "FS2"],
  area: "Der Verwaltungsakt",
  title: "Rechtmäßigkeit eines Verwaltungsakts (Vollprüfung)",
  description: "Das zentrale Schema des AVR: Ermächtigungsgrundlage, formelle Rechtmäßigkeit (Zuständigkeit, Verfahren, Form – mit Fehlerfolgen und Heilung) und materielle Rechtmäßigkeit (Tatbestand, Rechtsfolge: Bestimmtheit, Möglichkeit, Verhältnismäßigkeit, Ermessen).",
  start: "start",
  stations: [
    { id: "egl", label: "EGL" },
    { id: "zust", label: "Zuständigkeit" },
    { id: "verf", label: "Verfahren" },
    { id: "form", label: "Form" },
    { id: "tb", label: "Tatbestand" },
    { id: "rf", label: "Rechtsfolge" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: VA rechtmäßig",
    neg: "Ergebnis: VA rechtswidrig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  resultExtras: function (flags, node) {
    var out = [];
    if (flags.geheilt && node.verdict === "pos") {
      out.push("Hinweis: Der ursprüngliche Verfahrens- oder Formfehler wurde nach § 45 VwVfG geheilt. Die Heilung wirkt ex tunc – der VA gilt als von Anfang an rechtmäßig.");
    }
    if (flags.unbeachtlich && node.verdict === "pos") {
      out.push("Achtung: Der VA bleibt trotz § 46 VwVfG formell rechtswidrig – nur der Aufhebungsanspruch ist ausgeschlossen. Im Gutachten sauber formulieren: „Die Aufhebung kann nicht allein deshalb beansprucht werden“ (§ 46 VwVfG).");
    }
    return out;
  },

  nodes: {

    start: {
      station: "egl",
      kind: "frage",
      norm: "Art. 20 III GG (Vorbehalt des Gesetzes)",
      title: "Auf welche Ermächtigungsgrundlage kann der VA gestützt werden?",
      text: "Obersatz: Der Verwaltungsakt ist rechtmäßig, wenn er auf einer wirksamen Ermächtigungsgrundlage beruht und diese in formeller und materieller Hinsicht ordnungsgemäß angewendet worden ist.",
      def: "<b>Vorbehalt des Gesetzes:</b> Jedes staatliche Handeln, das in Rechte des Bürgers eingreift, bedarf einer gesetzlichen Ermächtigungsgrundlage (Art. 20 III GG).<br><br><b>Prüfreihenfolge</b> („lex specialis derogat legi generali“):<br>1. spezialgesetzliche EGL (z. B. § 81 LBauO, § 15 II GastG, § 2a StVG),<br>2. Standardmaßnahmen (bei Gefahrenabwehr, §§ 9a ff. POG),<br>3. Generalklauseln (z. B. § 9 I 1 POG),<br>4. allgemeine Vorschriften (z. B. §§ 48, 49 VwVfG für die Aufhebung).<br><br>Die EGL ist an dieser Stelle nur mit kurzer Begründung zu benennen.",
      options: [
        { label: "Taugliche EGL vorhanden", next: "q_zust", tone: "pos" },
        { label: "Begünstigender VA ohne Eingriff – EGL entbehrlich", detail: "str.; jedenfalls Anspruchsgrundlage benennen", next: "q_zust", tone: "warn" },
        { label: "Eingriffs-VA ohne EGL", next: "e_rw_egl", tone: "neg" }
      ]
    },

    /* ---------- Formelle Rechtmäßigkeit ---------- */

    q_zust: {
      station: "zust",
      kind: "frage",
      norm: "Fachgesetz, § 3 VwVfG",
      title: "War die handelnde Behörde zuständig?",
      def: "<b>Sachliche Zuständigkeit:</b> Aufgabenbereich der Behörde – ergibt sich aus dem Fachgesetz (z. B. §§ 103–105 POG i. V. m. ZuVO).<br><b>Örtliche Zuständigkeit:</b> Einzugsbereich/Bezirk – Fachgesetz, sonst § 3 VwVfG.<br><b>Instanzielle Zuständigkeit:</b> welche Verwaltungsebene (untere, obere, oberste Behörde).",
      options: [
        { label: "Ja, sachlich, örtlich und instanziell zuständig", next: "q_verfahren", tone: "pos" },
        { label: "Nein, sachlich unzuständig", next: "e_rw_zust_sachlich", tone: "neg" },
        { label: "Nein, örtlich unzuständig", next: "q_zust_oertlich", tone: "neg" }
      ]
    },

    q_zust_oertlich: {
      station: "zust",
      kind: "frage",
      norm: "§ 44 II Nr. 3, § 46 VwVfG",
      title: "Wie wiegt der örtliche Zuständigkeitsfehler?",
      def: "<b>Absolute örtliche Unzuständigkeit</b> (§ 44 II Nr. 3 VwVfG): Der VA bezieht sich auf ein Grundstück oder ortsgebundenes Recht/Rechtsverhältnis außerhalb des Bezirks, ohne dass die Behörde dazu ermächtigt ist → <b>Nichtigkeit</b>.<br><b>Einfache örtliche Unzuständigkeit:</b> nur Rechtswidrigkeit (vgl. § 44 III Nr. 1 VwVfG) – aber ggf. unbeachtlich nach § 46 VwVfG, wenn offensichtlich ist, dass die Verletzung die Entscheidung in der Sache nicht beeinflusst hat.",
      options: [
        { label: "Absolute örtliche Unzuständigkeit (§ 44 II Nr. 3)", next: "e_nichtig", tone: "neg" },
        { label: "Einfache örtliche Unzuständigkeit – § 46 greift", detail: "gebundene Entscheidung, Ergebnis offensichtlich unbeeinflusst", next: "q_verfahren", set: { unbeachtlich: true }, tone: "warn" },
        { label: "Einfache örtliche Unzuständigkeit – § 46 greift nicht", next: "e_rw_formell", tone: "neg" }
      ]
    },

    q_verfahren: {
      station: "verf",
      kind: "frage",
      norm: "§§ 9 ff., 22, 24, 28 VwVfG",
      title: "Wurde das Verwaltungsverfahren ordnungsgemäß durchgeführt?",
      def: "<b>Prüfpunkte:</b><br>• Verfahrenseinleitung: von Amts wegen oder auf Antrag (§ 22 VwVfG),<br>• ausgeschlossene Personen (§ 20 VwVfG) und Besorgnis der Befangenheit (§ 21 VwVfG),<br>• Untersuchungsgrundsatz (§ 24 VwVfG), Beweismittel (§ 26 VwVfG),<br>• <b>Anhörung (§ 28 I VwVfG):</b> vor Erlass eines VA, der in Rechte eines Beteiligten (§ 13 VwVfG) eingreift, ist Gelegenheit zur Äußerung zu geben.<br><br><b>Entbehrlichkeit der Anhörung:</b> § 28 II VwVfG (Ermessen, z. B. Gefahr im Verzug, Allgemeinverfügung), § 28 III VwVfG (zwingende öffentliche Interessen).",
      options: [
        { label: "Ja, Verfahren fehlerfrei (insb. Anhörung erfolgt/entbehrlich)", next: "q_form", tone: "pos" },
        { label: "Nein, Anhörung fehlt und war nicht entbehrlich", next: "q_heilung_anhoerung", tone: "neg" },
        { label: "Nein, ausgeschlossene Person / Befangenheit (§§ 20, 21 VwVfG)", next: "q_mitwirkung", tone: "neg" }
      ]
    },

    q_heilung_anhoerung: {
      station: "verf",
      kind: "frage",
      norm: "§ 45 I Nr. 3, II VwVfG",
      title: "Ist der Anhörungsfehler geheilt worden?",
      text: "Prüfungsreihenfolge: (1) Anhörungspflicht nach § 28 I VwVfG, (2) keine Entbehrlichkeit nach § 28 II/III, (3) VA dadurch zunächst formell rechtswidrig, (4) keine Nichtigkeit nach § 44 VwVfG (kurz feststellen), (5) Heilung nach § 45 I Nr. 3 VwVfG durch Nachholung.",
      def: "<b>Heilung (§ 45 VwVfG):</b> Die erforderliche Anhörung kann nachgeholt werden (§ 45 I Nr. 3). Zeitliche Grenze: bis zum Abschluss der letzten Tatsacheninstanz eines verwaltungsgerichtlichen Verfahrens (§ 45 II VwVfG).<br><b>Wirkung:</b> Die Heilung wirkt ex tunc – der VA gilt als von Anfang an rechtmäßig.<br><b>Beachte:</b> § 45 ist gegenüber § 46 vorrangig zu prüfen; die Aufzählung in § 45 I ist abschließend.",
      options: [
        { label: "Ja, Anhörung nachgeholt – Fehler geheilt", next: "q_form", set: { geheilt: true }, tone: "warn" },
        { label: "Nein, aber Unbeachtlichkeit nach § 46 VwVfG", detail: "offensichtlich keine Beeinflussung der Sachentscheidung (v. a. bei gebundenen Entscheidungen)", next: "q_form", set: { unbeachtlich: true }, tone: "warn" },
        { label: "Nein, weder Heilung noch § 46", next: "e_rw_formell", tone: "neg" }
      ]
    },

    q_mitwirkung: {
      station: "verf",
      kind: "frage",
      norm: "§ 20, § 44 I, III Nr. 2, § 46 VwVfG",
      title: "Wer hat mitgewirkt – und mit welcher Folge?",
      def: "<b>Handeln in eigener Sache</b> (§ 20 I 1 Nr. 1 VwVfG – Beteiligter selbst entscheidet): Nichtigkeit nach § 44 I VwVfG (Umkehrschluss aus § 44 III Nr. 2).<br><b>Mitwirkung einer nach § 20 I 1 Nr. 2–6 ausgeschlossenen Person</b> (z. B. Angehöriger): nur Rechtswidrigkeit (§ 44 III Nr. 2 VwVfG) – ggf. unbeachtlich nach § 46 VwVfG.<br><b>Befangenheit</b> (§ 21 VwVfG): Rechtswidrigkeit, ggf. § 46 VwVfG.",
      options: [
        { label: "Beteiligter hat in eigener Sache entschieden", next: "e_nichtig", tone: "neg" },
        { label: "Ausgeschlossene Person / Befangener – § 46 greift", detail: "gebundene Entscheidung, Ergebnis offensichtlich unbeeinflusst", next: "q_form", set: { unbeachtlich: true }, tone: "warn" },
        { label: "Ausgeschlossene Person / Befangener – § 46 greift nicht", next: "e_rw_formell", tone: "neg" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "§§ 37 II–IV, 39 VwVfG",
      title: "Sind die Formvorschriften eingehalten?",
      def: "<b>Grundsatz:</b> Der VA kann schriftlich, elektronisch, mündlich oder in anderer Weise erlassen werden – Formfreiheit (§ 37 II 1 VwVfG).<br><br><b>Bei schriftlichem/elektronischem VA:</b><br>• Erkennbarkeit der erlassenden Behörde, Unterschrift oder Namenswiedergabe (§ 37 III VwVfG) – bei Nichterkennbarkeit der Behörde: <b>Nichtigkeit</b> (§ 44 II Nr. 1 VwVfG!),<br>• <b>Begründungspflicht</b> (§ 39 I VwVfG): wesentliche tatsächliche und rechtliche Gründe; bei Ermessensentscheidungen auch die Ermessensgesichtspunkte; Ausnahmen in § 39 II VwVfG,<br>• Rechtsbehelfsbelehrung (§ 37 VI VwVfG): ihr Fehlen macht den VA NICHT rechtswidrig, sondern verlängert nur die Rechtsbehelfsfrist auf ein Jahr (§ 58 II VwGO).",
      options: [
        { label: "Ja, Form gewahrt", next: "q_tatbestand", tone: "pos" },
        { label: "Begründung fehlt (§ 39 I VwVfG)", next: "q_heilung_begruendung", tone: "neg" },
        { label: "Erlassbehörde nicht erkennbar (§ 44 II Nr. 1 VwVfG)", next: "e_nichtig", tone: "neg" },
        { label: "Nur Rechtsbehelfsbelehrung fehlt/fehlerhaft", detail: "kein Rechtmäßigkeitsmangel – Jahresfrist § 58 II VwGO", next: "q_tatbestand", tone: "warn" }
      ]
    },

    q_heilung_begruendung: {
      station: "form",
      kind: "frage",
      norm: "§ 45 I Nr. 2, II VwVfG",
      title: "Ist der Begründungsmangel geheilt worden?",
      def: "<b>Heilung:</b> Die erforderliche Begründung kann nachträglich gegeben werden (§ 45 I Nr. 2 VwVfG), bis zum Abschluss der letzten Tatsacheninstanz (§ 45 II VwVfG), Wirkung ex tunc.<br><b>Abzugrenzen:</b> das Nachschieben von Gründen (materielle Ebene) und § 46 VwVfG (Unbeachtlichkeit).",
      options: [
        { label: "Ja, Begründung nachgeholt – geheilt", next: "q_tatbestand", set: { geheilt: true }, tone: "warn" },
        { label: "Nein, aber Unbeachtlichkeit nach § 46 VwVfG", next: "q_tatbestand", set: { unbeachtlich: true }, tone: "warn" },
        { label: "Nein, weder Heilung noch § 46", next: "e_rw_formell", tone: "neg" }
      ]
    },

    /* ---------- Materielle Rechtmäßigkeit ---------- */

    q_tatbestand: {
      station: "tb",
      kind: "frage",
      norm: "Tatbestand der EGL",
      title: "Sind die Tatbestandsvoraussetzungen der EGL erfüllt?",
      text: "Obersatz: Der VA ist materiell rechtmäßig, wenn die Tatbestandsvoraussetzungen der Ermächtigungsgrundlage erfüllt sind, keine sonstigen Rechtsverstöße vorliegen und die Behörde eine zulässige Rechtsfolge gewählt hat.",
      def: "<b>Vorgehen (Methodik Modul 1):</b> Jedes Tatbestandsmerkmal der EGL im Gutachtenstil prüfen – Obersatz, Definition, Subsumtion, Ergebnis.<br><b>Unbestimmte Rechtsbegriffe</b> (z. B. „Gefahr“, „Zuverlässigkeit“) sind auszulegen und voll gerichtlich überprüfbar; nur ausnahmsweise besteht ein Beurteilungsspielraum der Behörde (z. B. Prüfungsentscheidungen).",
      options: [
        { label: "Ja, alle Tatbestandsmerkmale erfüllt", next: "q_rf_art", tone: "pos" },
        { label: "Nein, Tatbestand nicht erfüllt", next: "e_rw_tatbestand", tone: "neg" }
      ]
    },

    q_rf_art: {
      station: "rf",
      kind: "frage",
      norm: "Rechtsfolge der EGL",
      title: "Gebundene Entscheidung oder Ermessensentscheidung?",
      def: "<b>Gebundene Entscheidung:</b> Die Norm ordnet bei erfülltem Tatbestand eine bestimmte Rechtsfolge zwingend an („ist zu erteilen“, „muss“). Beispiel: § 70 I LBauO – Anspruch auf Baugenehmigung.<br><b>Ermessensentscheidung:</b> Die Norm stellt die Rechtsfolge in das Ermessen der Behörde („kann“, „darf“). Zu unterscheiden: <b>Entschließungsermessen</b> („Ob“) und <b>Auswahlermessen</b> („Wie“ – Mittel und Adressat), vgl. § 9 I 1 POG.<br><b>Soll-Vorschriften:</b> im Regelfall gebunden, nur in atypischen Fällen darf abgewichen werden (intendiertes Ermessen).",
      options: [
        { label: "Gebundene Entscheidung", next: "q_allgfehler", set: { gebunden: true }, tone: "neutral" },
        { label: "Ermessensentscheidung", next: "q_allgfehler", set: { ermessen: true }, tone: "neutral" }
      ]
    },

    q_allgfehler: {
      station: "rf",
      kind: "frage",
      norm: "§ 37 I VwVfG, Grundsatz der VHM",
      title: "Liegen allgemeine Rechtsfehler der Rechtsfolge vor?",
      def: "<b>1. Bestimmtheit (§ 37 I VwVfG):</b> Der VA muss inhaltlich hinreichend bestimmt sein – der Adressat muss erkennen können, was von ihm verlangt wird; der VA muss vollstreckungsfähig sein.<br><b>2. Möglichkeit:</b> Das Verlangte muss tatsächlich und rechtlich möglich sein (sonst ggf. Nichtigkeit nach § 44 II Nr. 4 VwVfG bei tatsächlicher Unmöglichkeit, die niemand ausführen kann).<br><b>3. Verhältnismäßigkeit:</b><br>• <b>Geeignetheit</b> – Mittel fördert den legitimen Zweck,<br>• <b>Erforderlichkeit</b> – kein milderes, gleich geeignetes Mittel,<br>• <b>Angemessenheit</b> – Zweck-Mittel-Relation zumutbar.<br><br>Bei gebundenen Entscheidungen wird die VHM nur sehr eingeschränkt geprüft (der Gesetzgeber hat die Abwägung bereits getroffen).",
      options: [
        { label: "Keine allgemeinen Rechtsfehler", next: "@rf_weiter", tone: "pos" },
        { label: "VA unbestimmt (§ 37 I VwVfG)", next: "e_rw_materiell", tone: "neg" },
        { label: "Verlangtes unmöglich", next: "q_unmoeglich", tone: "neg" },
        { label: "VA unverhältnismäßig", next: "e_rw_materiell", tone: "neg" }
      ]
    },

    q_unmoeglich: {
      station: "rf",
      kind: "frage",
      norm: "§ 44 II Nr. 4 VwVfG",
      title: "Welche Art von Unmöglichkeit liegt vor?",
      def: "<b>Tatsächliche Unmöglichkeit für jedermann</b> (§ 44 II Nr. 4 VwVfG): Den VA kann aus tatsächlichen Gründen niemand ausführen → Nichtigkeit.<br><b>Rechtliche oder subjektive Unmöglichkeit:</b> führt (nur) zur Rechtswidrigkeit.",
      options: [
        { label: "Tatsächlich für jedermann unmöglich", next: "e_nichtig", tone: "neg" },
        { label: "Rechtlich/subjektiv unmöglich", next: "e_rw_materiell", tone: "neg" }
      ]
    },

    q_ermessen: {
      station: "rf",
      kind: "frage",
      norm: "§ 40 VwVfG, § 114 VwGO",
      title: "Hat die Behörde ihr Ermessen fehlerfrei ausgeübt?",
      def: "<b>Pflichtgemäßes Ermessen (§ 40 VwVfG):</b> entsprechend dem Zweck der Ermächtigung und innerhalb der gesetzlichen Grenzen.<br><br><b>Ermessensfehler:</b><br>• <b>Ermessensnichtgebrauch/-ausfall:</b> Behörde verkennt, dass sie Ermessen hat, oder übt es nicht aus,<br>• <b>Ermessensfehlgebrauch:</b> sachfremde Erwägungen oder wesentliche Gesichtspunkte nicht berücksichtigt,<br>• <b>Ermessensüberschreitung:</b> Rechtsfolge außerhalb des gesetzlichen Rahmens,<br>• Verstoß gegen Grundrechte, VHM oder Selbstbindung der Verwaltung (Art. 3 I GG i. V. m. ständiger Praxis).<br><br><b>Ermessensreduzierung auf Null:</b> Nur eine Entscheidung ist rechtsfehlerfrei möglich → Anspruch des Bürgers.",
      hint: "Vertiefung im eigenen Schema „Ermessen und Ermessensfehler“. Gerichtliche Kontrolle nur nach § 114 S. 1 VwGO; Ergänzen von Ermessenserwägungen im Prozess nach § 114 S. 2 VwGO.",
      options: [
        { label: "Ermessen fehlerfrei ausgeübt", next: "e_rechtmaessig", tone: "pos" },
        { label: "Ermessensfehler festgestellt", next: "e_rw_ermessen", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Art. 20 III GG",
      title: "Der Verwaltungsakt ist rechtmäßig",
      text: "Der VA beruht auf einer wirksamen Ermächtigungsgrundlage, ist formell rechtmäßig (Zuständigkeit, Verfahren, Form) und materiell rechtmäßig (Tatbestand erfüllt, zulässige und fehlerfreie Rechtsfolge).\n\nEin Widerspruch oder eine Anfechtungsklage gegen diesen VA wäre unbegründet – der Betroffene ist durch einen rechtmäßigen VA nicht in seinen Rechten verletzt (§ 113 I 1 VwGO)."
    },

    e_rw_egl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 20 III GG",
      title: "VA rechtswidrig: keine Ermächtigungsgrundlage",
      text: "Der Eingriffs-VA kann auf keine gesetzliche Grundlage gestützt werden. Nach dem Vorbehalt des Gesetzes (Art. 20 III GG) ist er bereits deshalb rechtswidrig. Der Betroffene kann den VA mit Widerspruch und Anfechtungsklage angreifen."
    },

    e_rw_zust_sachlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 44 I, § 45, § 46 VwVfG",
      title: "VA rechtswidrig: sachliche Unzuständigkeit",
      text: "Die fehlende sachliche Zuständigkeit führt grundsätzlich zur Rechtswidrigkeit des VA; bei Offenkundigkeit (absolute sachliche Unzuständigkeit) kommt sogar Nichtigkeit nach § 44 I VwVfG in Betracht.\n\nZuständigkeitsfehler sind NICHT nach § 45 VwVfG heilbar (abschließender Katalog!); § 46 VwVfG gilt nur für die örtliche Zuständigkeit, nicht für die sachliche."
    },

    e_rw_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 44–46 VwVfG",
      title: "VA formell rechtswidrig – Fehler weder geheilt noch unbeachtlich",
      text: "Der Verfahrens- bzw. Formfehler führt zur formellen Rechtswidrigkeit des VA. Eine Heilung nach § 45 VwVfG ist nicht (mehr) erfolgt, § 46 VwVfG greift nicht.\n\nFolge: Der VA ist rechtswidrig, aber wirksam (§ 43 II, III VwVfG) und damit anfechtbar. Ein Widerspruch bzw. eine Anfechtungsklage des belasteten Adressaten hätte in der Sache Erfolg.\n\nVertiefung: Schema „Fehlerfolgen: Nichtigkeit, Heilung, Unbeachtlichkeit (§§ 44–46 VwVfG)“."
    },

    e_rw_tatbestand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Tatbestand der EGL",
      title: "VA materiell rechtswidrig: Tatbestand nicht erfüllt",
      text: "Die tatbestandlichen Voraussetzungen der Ermächtigungsgrundlage liegen nicht vor. Die Behörde durfte die Rechtsfolge nicht setzen – der VA ist materiell rechtswidrig und auf Widerspruch/Anfechtungsklage hin aufzuheben (§ 113 I 1 VwGO)."
    },

    e_rw_materiell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 37 I VwVfG / VHM-Grundsatz",
      title: "VA materiell rechtswidrig: allgemeiner Rechtsfehler",
      text: "Der VA verstößt gegen allgemeine Rechtmäßigkeitsanforderungen der Rechtsfolge (Bestimmtheitsgrundsatz § 37 I VwVfG, Möglichkeit oder Verhältnismäßigkeit). Er ist materiell rechtswidrig; der belastete Adressat ist dadurch in seinen Rechten verletzt (mindestens Art. 2 I GG)."
    },

    e_rw_ermessen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwVfG, § 114 VwGO",
      title: "VA materiell rechtswidrig: Ermessensfehler",
      text: "Die Behörde hat die gesetzlichen Grenzen des Ermessens überschritten oder von ihrem Ermessen nicht in einer dem Zweck der Ermächtigung entsprechenden Weise Gebrauch gemacht (§ 40 VwVfG, § 114 S. 1 VwGO). Der VA ist rechtswidrig.\n\nBeachte: Im gerichtlichen Verfahren kann die Behörde ihre Ermessenserwägungen nach § 114 S. 2 VwGO ergänzen – ein völliger Ermessensausfall kann so aber nicht nachgeholt werden."
    },

    e_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      kicker: "Ergebnis: VA nichtig",
      norm: "§ 44, § 43 III VwVfG",
      title: "Der Verwaltungsakt ist nichtig",
      text: "Es liegt ein absoluter Nichtigkeitsgrund (§ 44 II VwVfG) oder ein besonders schwerwiegender, offenkundiger Fehler (§ 44 I VwVfG) vor. Der nichtige VA ist unwirksam (§ 43 III VwVfG) und entfaltet keinerlei Rechtswirkungen – er muss nicht angefochten werden.\n\nRechtsschutz: Feststellung der Nichtigkeit durch die Behörde (§ 44 V VwVfG) oder Nichtigkeitsfeststellungsklage (§ 43 I Alt. 2 VwGO); wegen des Rechtsscheins bleibt nach h. M. auch die Anfechtungsklage zulässig."
    }
  },

  routers: {
    /* Nach den allgemeinen Rechtsfehlern: bei Ermessens-VA weiter zur
       Ermessensprüfung, bei gebundener Entscheidung direkt zum Ergebnis. */
    "@rf_weiter": function (flags) {
      return flags.ermessen ? "q_ermessen" : "e_rechtmaessig";
    }
  }
});
