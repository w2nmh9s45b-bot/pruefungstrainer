/*
 * Prüfungsschema: Zulässigkeit des Widerspruchs (§§ 68 ff. VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Thema 5 Widerspruchsverfahren" (Schmitt – ausführliches Prüfschema mit
 *    allen sieben Zulässigkeitspunkten und Klausurformulierungen)
 *  - "AVR OLE 25/26" (Rechtsbehelfe, Überblick WS-Verfahren)
 *  - Gesetze: VwGO §§ 40, 42, 68–70, 73; §§ 6 ff. AGVwGO (Rechtsausschüsse);
 *    VwVfG §§ 31, 79 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-ws-zulaessigkeit",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Widerspruchsverfahren",
  title: "Zulässigkeit des Widerspruchs (§§ 68 ff. VwGO)",
  description: "Die sieben Zulässigkeitsstationen: Verwaltungsrechtsweg (analog), Statthaftigkeit (Anfechtungs-/Verpflichtungswiderspruch), Widerspruchsbefugnis (Adressaten-/Möglichkeits-/Schutznormtheorie), Frist mit Fristberechnung, Form, Widerspruchsbehörde (Rechtsausschüsse RLP) und Rechtsschutzbedürfnis.",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "befugnis", label: "Befugnis" },
    { id: "frist", label: "Frist" },
    { id: "form", label: "Form" },
    { id: "rsb", label: "RSB" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Widerspruch zulässig",
    neg: "Ergebnis: Widerspruch unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 40 I 1 VwGO analog",
      title: "Ist der Verwaltungsrechtsweg eröffnet?",
      text: "Das Widerspruchsverfahren (Vorverfahren) ist Sachurteilsvoraussetzung für die spätere Anfechtungs- und Verpflichtungsklage. Es dient dem Rechtsschutz des Bürgers, der Selbstkontrolle der Verwaltung und der Entlastung der Gerichte.",
      def: "<b>Prüfung (analog zur Klage):</b> Zunächst aufdrängende Spezialzuweisung (z. B. § 54 I BeamtStG); sonst § 40 I 1 VwGO analog:<br>• <b>öffentlich-rechtliche Streitigkeit:</b> Streitgegenstand festlegen, streitentscheidende Norm zuordnen, Qualifikation nach der modifizierten Subjektstheorie (Norm berechtigt/verpflichtet ausschließlich einen Hoheitsträger); bei Zugang zu öffentlichen Einrichtungen: Zwei-Stufen-Theorie,<br>• <b>nichtverfassungsrechtlicher Art:</b> keine doppelte Verfassungsunmittelbarkeit,<br>• <b>keine abdrängende Zuweisung</b> (z. B. § 68 OWiG → Amtsgericht).",
      options: [
        { label: "Ja, öffentlich-rechtlich, nichtverfassungsrechtlich", next: "q_statthaft", tone: "pos" },
        { label: "Nein, privatrechtliche Streitigkeit / abdrängende Zuweisung", next: "e_unzulaessig_rechtsweg", tone: "neg" }
      ]
    },

    q_statthaft: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 68 I, II i. V. m. § 42 I VwGO",
      title: "Welcher Widerspruch ist statthaft?",
      def: "Die Statthaftigkeit richtet sich nach dem <b>Begehren</b> des Widerspruchsführers (§ 88 VwGO analog):<br>• <b>Anfechtungswiderspruch</b> (§ 68 I 1 i. V. m. § 42 I Alt. 1 VwGO): Ziel ist die AUFHEBUNG eines belastenden VA,<br>• <b>Verpflichtungswiderspruch</b> (§ 68 II i. V. m. § 42 I Alt. 2 VwGO): Ziel ist der ERLASS eines abgelehnten oder unterlassenen begünstigenden VA.<br><br>Es muss also ein VA i. S. d. § 35 VwVfG vorliegen bzw. begehrt werden (ggf. Merkmale prüfen – eigenes Schema).",
      options: [
        { label: "Anfechtungswiderspruch (Aufhebung eines VA)", next: "q_ausschluss", tone: "pos" },
        { label: "Verpflichtungswiderspruch (Erlass eines VA)", next: "q_ausschluss", set: { verpflichtung: true }, tone: "pos" },
        { label: "Kein VA betroffen/begehrt", next: "e_unzulaessig_statthaft", tone: "neg" }
      ]
    },

    q_ausschluss: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 68 I 2 VwGO",
      title: "Ist das Vorverfahren ausgeschlossen?",
      def: "<b>Der Widerspruch ist ausgeschlossen (§ 68 I 2 VwGO), wenn:</b><br>• ein <b>Gesetz</b> dies bestimmt,<br>• der VA von einer <b>obersten Bundes- oder Landesbehörde</b> erlassen wurde (außer bei gesetzlicher Anordnung),<br>• der Abhilfe- oder Widerspruchsbescheid <b>erstmalig eine Beschwer</b> enthält (§ 68 I 2 Nr. 2 VwGO).",
      options: [
        { label: "Nein, kein Ausschluss", next: "q_befugnis", tone: "pos" },
        { label: "Ja, Widerspruch ausgeschlossen", detail: "dann unmittelbar Klage erheben", next: "e_unzulaessig_ausschluss", tone: "neg" }
      ]
    },

    q_befugnis: {
      station: "befugnis",
      kind: "frage",
      norm: "§ 42 II VwGO analog",
      title: "Ist der Widerspruchsführer widerspruchsbefugt?",
      def: "Zur Vermeidung von Popularwidersprüchen muss der WS-Führer geltend machen können, in einem <b>subjektiv-öffentlichen Recht</b> verletzt zu sein – die MÖGLICHKEIT der Rechtsverletzung genügt.<br><br>• <b>Anfechtungswiderspruch – Adressatentheorie:</b> Der Adressat eines belastenden VA ist möglicherweise zumindest in Art. 2 I GG verletzt → Befugnis stets (+).<br>• <b>Verpflichtungswiderspruch – Möglichkeitstheorie:</b> Ein Anspruch (mindestens auf ermessensfehlerfreie Entscheidung) darf nicht von vornherein ausgeschlossen sein; die Anspruchsnorm muss zumindest auch seinen Interessen dienen.<br>• <b>Drittwiderspruch – Schutznormtheorie:</b> Die verletzte Norm muss gerade auch den Schutz des Dritten bezwecken (z. B. nachbarschützende Normen im Baurecht, § 8 LBauO).",
      options: [
        { label: "Ja, Möglichkeit der Rechtsverletzung gegeben", next: "q_frist", tone: "pos" },
        { label: "Nein, Rechtsverletzung von vornherein ausgeschlossen", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§ 70 I VwGO",
      title: "Wurde die Widerspruchsfrist gewahrt?",
      def: "<b>Grundsatz (§ 70 I VwGO):</b> ein <b>Monat</b> nach Bekanntgabe des VA (Bekanntgabe ggf. ausführlich prüfen – eigenes Schema „Wirksamkeit und Bekanntgabe“!).<br><br><b>Fristberechnung:</b> § 79 VwVfG, § 31 I VwVfG i. V. m. §§ 187 ff. BGB – Fristbeginn am Tag NACH der Bekanntgabe (§ 187 I BGB), Fristende mit Ablauf des entsprechenden Tages des Folgemonats (§ 188 II BGB); fällt das Ende auf Samstag/Sonntag/Feiertag, endet die Frist am nächsten Werktag (§ 31 III VwVfG).<br><br><b>Ausnahmen:</b><br>• <b>Jahresfrist</b> (§ 70 II i. V. m. § 58 II VwGO) bei fehlender oder falscher Rechtsbehelfsbelehrung,<br>• <b>keine Frist</b> bei nichtigem oder nicht wirksam bekannt gegebenem VA (aber Verwirkung möglich),<br>• <b>Wiedereinsetzung</b> in den vorigen Stand bei unverschuldeter Versäumung (§ 70 II i. V. m. § 60 VwGO).",
      options: [
        { label: "Ja, innerhalb der Monatsfrist", next: "q_form", tone: "pos" },
        { label: "Ja, Jahresfrist läuft noch (RBB fehlte/falsch)", next: "q_form", tone: "warn" },
        { label: "Verfristet, aber Wiedereinsetzung (§ 60 VwGO)", detail: "Antrag binnen zwei Wochen nach Wegfall des Hindernisses", next: "q_form", tone: "warn" },
        { label: "Nein, Frist versäumt", next: "e_unzulaessig_frist", tone: "neg" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "§ 70 I VwGO",
      title: "Wurde der Widerspruch formgerecht erhoben?",
      def: "<b>Form (§ 70 I VwGO):</b> schriftlich, in elektronischer Form nach § 3a II VwVfG oder <b>zur Niederschrift</b> bei der Behörde, die den VA erlassen hat.<br><br>• <b>Schriftlich:</b> schriftlich verkörperte Erklärung; der Urheber muss hinreichend sicher erkennbar sein (BVerwG – Unterschrift nicht zwingend, Fax genügt),<br>• <b>zur Niederschrift:</b> persönliche Anwesenheit, Vermerk des Sachbearbeiters mit dessen Unterschrift,<br>• <b>NICHT ausreichend:</b> telefonischer Widerspruch (auch nicht mit Aktenvermerk!).<br><br>Einlegung bei der AUSGANGSbehörde (§ 70 I 1); die Frist wird auch durch Einlegung bei der Widerspruchsbehörde gewahrt (§ 70 I 2 VwGO).",
      options: [
        { label: "Ja, schriftlich oder zur Niederschrift", next: "q_rsb", tone: "pos" },
        { label: "Nein, nur telefonisch / formlos", next: "e_unzulaessig_form", tone: "neg" }
      ]
    },

    q_rsb: {
      station: "rsb",
      kind: "frage",
      norm: "§ 73 VwGO, §§ 6 ff. AGVwGO",
      title: "Besteht ein allgemeines Rechtsschutzbedürfnis?",
      text: "Zur Widerspruchsbehörde (meist nur Zusatzfrage): Über den Widerspruch entscheidet, wenn die Ausgangsbehörde nicht abhilft (§ 72 VwGO), die Widerspruchsbehörde (§ 73 VwGO). In RLP entscheiden weitgehend die RECHTSAUSSCHÜSSE der Kreise und kreisfreien/großen kreisangehörigen Städte (§§ 6 ff. AGVwGO) – Besetzung: Vorsitzender und zwei Beisitzer (§ 7 II AGVwGO).",
      def: "<b>Das Rechtsschutzbedürfnis fehlt nur ausnahmsweise:</b><br>• wenn ein einfacherer, schnellerer und effektiverer Rechtsschutz besteht (selten),<br>• wenn der WS-Führer des Widerspruchs nicht bedarf (Behörde lenkt erkennbar ein; Erlaubnis beantragt, obwohl keine nötig),<br>• bei rechtsmissbräuchlichem Verhalten.<br><br><b>Klausurformulierung:</b> „Das Rechtsschutzbedürfnis ist zu bejahen, da für den WS-Führer kein einfacherer und effektiverer Rechtsschutz erkennbar und sein Verhalten nicht rechtsmissbräuchlich ist.“",
      options: [
        { label: "Ja, RSB gegeben", next: "e_zulaessig", tone: "pos" },
        { label: "Nein, RSB fehlt", next: "e_unzulaessig_rsb", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_zulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 68 ff. VwGO",
      title: "Der Widerspruch ist zulässig",
      text: "Alle Zulässigkeitsvoraussetzungen liegen vor: Verwaltungsrechtsweg (analog), Statthaftigkeit, Widerspruchsbefugnis, Frist, Form und Rechtsschutzbedürfnis.\n\nWeiter geht die Prüfung mit der Begründetheit (eigenes Schema „Begründetheit des Widerspruchs“): Beim Anfechtungswiderspruch kommt es auf Rechtswidrigkeit des VA und Rechtsverletzung an (§ 113 I 1 VwGO analog), beim Verpflichtungswiderspruch auf den Anspruch auf den begehrten VA (§ 113 V VwGO analog). Die Widerspruchsbehörde prüft zusätzlich die ZWECKMÄSSIGKEIT (§ 68 I 1 VwGO)."
    },

    e_unzulaessig_rechtsweg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I VwGO analog",
      title: "Unzulässig: kein Verwaltungsrechtsweg",
      text: "Die Streitigkeit ist nicht öffentlich-rechtlich (oder einer anderen Gerichtsbarkeit zugewiesen). Ein Widerspruch nach §§ 68 ff. VwGO ist nicht eröffnet – bei privatrechtlichen Streitigkeiten sind die ordentlichen Gerichte zuständig (§ 13 GVG)."
    },

    e_unzulaessig_statthaft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 68 VwGO",
      title: "Unzulässig: Widerspruch nicht statthaft",
      text: "Es geht weder um die Aufhebung noch um den Erlass eines VA i. S. d. § 35 VwVfG. Gegen Realakte oder schlichtes Verwaltungshandeln ist kein Widerspruch, sondern ggf. die allgemeine Leistungsklage gegeben (FS II)."
    },

    e_unzulaessig_ausschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 68 I 2 VwGO",
      title: "Unzulässig: Vorverfahren ausgeschlossen",
      text: "Das Vorverfahren ist gesetzlich ausgeschlossen. Der Betroffene muss unmittelbar Klage vor dem Verwaltungsgericht erheben (Frist: ein Monat ab Bekanntgabe, § 74 I 2 VwGO)."
    },

    e_unzulaessig_befugnis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO analog",
      title: "Unzulässig: keine Widerspruchsbefugnis",
      text: "Eine Verletzung eigener subjektiv-öffentlicher Rechte des WS-Führers ist von vornherein ausgeschlossen (Popularwiderspruch). Beim Drittwiderspruch fehlt es an einer Schutznorm, die gerade auch seine Individualinteressen schützt."
    },

    e_unzulaessig_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 70 VwGO",
      title: "Unzulässig: Widerspruchsfrist versäumt",
      text: "Die Frist des § 70 I VwGO (bzw. die Jahresfrist des § 58 II VwGO) ist abgelaufen; Wiedereinsetzungsgründe liegen nicht vor. Der VA ist formell bestandskräftig.\n\nDer WS-Führer kann nur noch bei der Behörde anregen, den VA nach §§ 48, 49 VwVfG aufzuheben (Rücknahme/Widerruf – Schema in FS II) oder das Wiederaufgreifen des Verfahrens nach § 51 VwVfG beantragen.\n\nBeachte: Die Widerspruchsbehörde KANN einem unzulässigen, aber begründeten Widerspruch gleichwohl abhelfen (Abhilfe „kann“, § 72 VwGO) – ein Anspruch darauf besteht nicht."
    },

    e_unzulaessig_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 70 I VwGO",
      title: "Unzulässig: Formmangel",
      text: "Der Widerspruch wurde nicht schriftlich und nicht zur Niederschrift erhoben (z. B. nur telefonisch). Er ist unzulässig – innerhalb der noch laufenden Frist kann er aber formgerecht nachgeholt werden."
    },

    e_unzulaessig_rsb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Allg. Rechtsschutzbedürfnis",
      title: "Unzulässig: kein Rechtsschutzbedürfnis",
      text: "Dem WS-Führer steht ein einfacherer und effektiverer Weg offen, er bedarf des Widerspruchs nicht oder sein Verhalten ist rechtsmissbräuchlich. Der Widerspruch ist unzulässig und wird zurückgewiesen."
    }
  },

  routers: {}
});
