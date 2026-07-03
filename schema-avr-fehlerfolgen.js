/*
 * Prüfungsschema: Fehlerfolgen beim VA – Nichtigkeit, Heilung, Unbeachtlichkeit
 * (§§ 42, 44, 45, 46 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Fehlerfolgen bei der Formellen Rechtmäßigkeit" (inkl. Fehlerfolgen-Tabelle
 *    und Prüfungsreihenfolge § 44 II → III → I)
 *  - "OLE 15 Das Verwaltungsverfahren", "OLE 16 Form des VA; Fehlerfolgen"
 *  - Gesetze: VwVfG §§ 42, 44, 45, 46, 47, § 43 III (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-fehlerfolgen",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Der Verwaltungsakt",
  title: "Fehlerfolgen: Nichtigkeit, Heilung, Unbeachtlichkeit (§§ 44–46 VwVfG)",
  description: "Vom festgestellten Fehler zur richtigen Rechtsfolge: bloße Unrichtigkeit (§ 42), Nichtigkeitsprüfung in der Reihenfolge § 44 II → III → I, Heilung nach § 45, Unbeachtlichkeit nach § 46 und Umdeutung nach § 47 VwVfG.",
  start: "start",
  stations: [
    { id: "typ", label: "Fehlertyp" },
    { id: "n44", label: "§ 44 (Nichtigkeit)" },
    { id: "n45", label: "§ 45 (Heilung)" },
    { id: "n46", label: "§ 46 (Unbeachtlich)" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: VA bleibt bestehen",
    neg: "Ergebnis: Fehler beachtlich",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "typ",
      kind: "frage",
      norm: "§ 42 VwVfG, § 37 VI VwVfG",
      title: "Liegt überhaupt ein Rechtsverstoß vor – oder nur eine Unrichtigkeit?",
      text: "Fehler können auf jeder Stufe der Rechtmäßigkeitsprüfung auftreten. Bevor die Fehlerfolgen der §§ 44 ff. VwVfG geprüft werden, ist die geringste Form der Fehlerhaftigkeit auszuscheiden: der bloß unrichtige VA.",
      def: "<b>Unrichtiger VA (kein Rechtsverstoß!):</b><br>• <b>Offenbare Unrichtigkeiten</b> (§ 42 VwVfG): Schreibfehler, Rechenfehler und ähnliche offenbare Unrichtigkeiten – die Behörde kann jederzeit berichtigen; bei berechtigtem Interesse MUSS sie berichtigen (§ 42 S. 2). Die Berichtigung ist selbst kein VA.<br>• <b>Fehlende/fehlerhafte Rechtsbehelfsbelehrung</b> (§ 37 VI VwVfG): macht den VA nicht rechtswidrig, verlängert aber die Rechtsbehelfsfrist auf ein Jahr (§ 58 II VwGO).<br><br><b>Wichtig:</b> § 42 gilt nur für Abweichungen zwischen Gewolltem und Erklärtem – nicht für inhaltlich falsche Entscheidungen (die sind rechtswidrig, nicht „unrichtig“)!",
      options: [
        { label: "Nur offenbare Unrichtigkeit (§ 42 VwVfG)", next: "e_unrichtig", tone: "warn" },
        { label: "Nur Rechtsbehelfsbelehrung fehlt/falsch", next: "e_rbb", tone: "warn" },
        { label: "Echter Rechtsverstoß (Verfahren, Form, Inhalt)", next: "q_44_2", tone: "neg" }
      ]
    },

    q_44_2: {
      station: "n44",
      kind: "frage",
      norm: "§ 44 II VwVfG",
      title: "Prüfschritt 1: Liegt ein absoluter Nichtigkeitsgrund vor (§ 44 II)?",
      text: "Die Prüfungsreihenfolge des § 44 VwVfG weicht von der Absatzfolge ab: zuerst Absatz 2 (absolute Nichtigkeitsgründe), dann Absatz 3 (Negativkatalog), zuletzt Absatz 1 (Generalklausel).",
      def: "<b>Absolute Nichtigkeitsgründe (§ 44 II VwVfG – abschließend):</b><br>Nr. 1: schriftlicher/elektronischer VA, bei dem die <b>Erlassbehörde nicht erkennbar</b> ist,<br>Nr. 2: fehlende, aber vorgeschriebene Aushändigung einer Urkunde,<br>Nr. 3: <b>absolute örtliche Unzuständigkeit</b> bei Grundstücks-/ortsgebundenen Rechtsverhältnissen,<br>Nr. 4: <b>tatsächliche Unmöglichkeit</b> für jedermann,<br>Nr. 5: VA verlangt die Begehung einer <b>Straftat oder Ordnungswidrigkeit</b>,<br>Nr. 6: Verstoß gegen die <b>guten Sitten</b>.<br><br>Liegt ein Fall vor, ist der VA ohne weitere Prüfung nichtig – §§ 45, 46 sind ausgeschlossen.",
      options: [
        { label: "Ja, absoluter Nichtigkeitsgrund", next: "e_nichtig", tone: "neg" },
        { label: "Nein", next: "q_44_3", tone: "neutral" }
      ]
    },

    q_44_3: {
      station: "n44",
      kind: "frage",
      norm: "§ 44 III VwVfG",
      title: "Prüfschritt 2: Greift der Negativkatalog (§ 44 III)?",
      def: "<b>Negativkatalog (§ 44 III VwVfG – abschließend):</b> Ein VA ist NICHT schon deshalb nichtig, weil<br>Nr. 1: Vorschriften über die <b>örtliche Zuständigkeit</b> nicht eingehalten wurden (außer § 44 II Nr. 3),<br>Nr. 2: eine nach § 20 I 1 <b>Nr. 2–6 ausgeschlossene Person</b> mitgewirkt hat,<br>Nr. 3: ein vorgeschriebener <b>Ausschuss</b> den Beschluss nicht gefasst hat,<br>Nr. 4: die vorgeschriebene <b>Mitwirkung einer anderen Behörde</b> unterblieben ist.<br><br><b>Umkehrschluss aus Nr. 2:</b> Hat der Beteiligte SELBST in eigener Sache entschieden (§ 20 I 1 Nr. 1), bleibt Nichtigkeit nach § 44 I möglich!",
      options: [
        { label: "Ja, Fehler steht im Negativkatalog", detail: "nur Rechtswidrigkeit – weiter zur Heilung/Unbeachtlichkeit", next: "q_45", tone: "warn" },
        { label: "Nein, Fehler nicht im Katalog", next: "q_44_1", tone: "neutral" }
      ]
    },

    q_44_1: {
      station: "n44",
      kind: "frage",
      norm: "§ 44 I VwVfG",
      title: "Prüfschritt 3: Nichtigkeit nach der Generalklausel (§ 44 I)?",
      def: "<b>Relative Nichtigkeit (§ 44 I VwVfG) – zwei kumulative Merkmale:</b><br>1. <b>besonders schwerwiegender Fehler:</b> Verstoß gegen zwingende gesetzliche Verbote/Gebote oder grundlegende rechtsethische und rechtslogische Grundsätze (z. B. absolute sachliche Unzuständigkeit, Entscheidung in eigener Sache),<br>2. <b>Offenkundigkeit:</b> bei verständiger Würdigung aller Umstände offensichtlich – Maßstab ist der rechtsunkundige, objektive Dritte (nicht der konkrete Empfänger!).",
      options: [
        { label: "Ja, besonders schwerwiegend UND offenkundig", next: "e_nichtig", tone: "neg" },
        { label: "Nein, (mindestens) ein Merkmal fehlt", detail: "VA ist „nur“ rechtswidrig – weiter mit § 45", next: "q_45", tone: "warn" }
      ]
    },

    q_45: {
      station: "n45",
      kind: "frage",
      norm: "§ 45 I, II VwVfG",
      title: "Ist der Fehler nach § 45 VwVfG heilbar und geheilt?",
      def: "<b>Heilbare Verfahrens- und Formfehler (§ 45 I VwVfG – abschließend):</b><br>Nr. 1: der erforderliche <b>Antrag</b> wird nachträglich gestellt,<br>Nr. 2: die erforderliche <b>Begründung</b> wird nachträglich gegeben,<br>Nr. 3: die erforderliche <b>Anhörung</b> wird nachgeholt,<br>Nr. 4: der <b>Ausschussbeschluss</b> wird nachgeholt,<br>Nr. 5: die <b>Mitwirkung einer anderen Behörde</b> wird nachgeholt.<br><br><b>Zeitgrenze (§ 45 II):</b> bis zum Abschluss der letzten Tatsacheninstanz des verwaltungsgerichtlichen Verfahrens.<br><b>Wirkung:</b> ex tunc – der VA gilt als von Anfang an rechtmäßig.<br><b>Nicht heilbar:</b> Zuständigkeitsfehler und materielle Fehler!",
      options: [
        { label: "Ja, Heilungstatbestand erfüllt", next: "e_geheilt", tone: "pos" },
        { label: "Nein, nicht (oder nicht mehr) geheilt", next: "q_46", tone: "neg" },
        { label: "Fehler steht nicht im Katalog des § 45 I", detail: "z. B. sachliche Unzuständigkeit, materieller Fehler", next: "q_46", tone: "neg" }
      ]
    },

    q_46: {
      station: "n46",
      kind: "frage",
      norm: "§ 46 VwVfG",
      title: "Ist der Fehler nach § 46 VwVfG unbeachtlich?",
      def: "<b>Unbeachtlichkeit (§ 46 VwVfG) – drei Voraussetzungen:</b><br>1. Verletzung von Vorschriften über <b>Verfahren, Form oder örtliche Zuständigkeit</b> (nicht: sachliche Zuständigkeit, nicht: materielle Fehler),<br>2. der VA ist <b>nicht nach § 44 nichtig</b>,<br>3. es ist <b>offensichtlich</b>, dass die Verletzung die Entscheidung <b>in der Sache nicht beeinflusst</b> hat – praktisch v. a. bei gebundenen Entscheidungen (bei Ermessen kaum je offensichtlich!).<br><br><b>Rechtsfolge:</b> Die Aufhebung kann nicht allein wegen dieses Fehlers beansprucht werden – der VA bleibt aber rechtswidrig!",
      hint: "Klausurklassiker: Der Bruder des Sachbearbeiters erhält die (gebundene) Baugenehmigung nach § 70 I LBauO – Mitwirkung einer ausgeschlossenen Person (§ 20 I 1 Nr. 4), aber jeder andere Sachbearbeiter hätte genauso entscheiden müssen → § 46 VwVfG.",
      options: [
        { label: "Ja, alle Voraussetzungen des § 46", next: "e_unbeachtlich", tone: "warn" },
        { label: "Nein", next: "q_umdeutung", tone: "neg" }
      ]
    },

    q_umdeutung: {
      station: "n46",
      kind: "frage",
      norm: "§ 47 VwVfG",
      title: "Kommt eine Umdeutung in Betracht?",
      def: "<b>Umdeutung (§ 47 VwVfG):</b> Ein fehlerhafter VA kann in einen anderen VA umgedeutet werden, wenn<br>• er auf das gleiche Ziel gerichtet ist,<br>• von der erlassenden Behörde in der geschehenen Verfahrensweise und Form rechtmäßig hätte erlassen werden können und<br>• die Voraussetzungen für dessen Erlass erfüllt sind.<br><b>Grenzen (§ 47 II, III):</b> nicht bei Widerspruch zur erkennbaren Absicht der Behörde, ungünstigeren Rechtsfolgen für den Betroffenen, Unzulässigkeit der Rücknahme oder wenn eine Ermessensentscheidung an die Stelle einer gebundenen träte. Anhörung vor Umdeutung (§ 47 IV).",
      options: [
        { label: "Ja, Umdeutung möglich", next: "e_umdeutung", tone: "warn" },
        { label: "Nein", next: "e_rechtswidrig", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_unrichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 42 VwVfG",
      title: "Bloß unrichtiger VA – Berichtigung, keine Rechtswidrigkeit",
      text: "Offenbare Unrichtigkeiten (Schreib-, Rechenfehler u. Ä.) sind keine Rechtsverstöße – der VA ist und bleibt rechtmäßig. Die Behörde kann jederzeit von Amts wegen oder auf Antrag berichtigen (§ 42 VwVfG); bei berechtigtem Interesse besteht ein Berichtigungsanspruch.\n\nAchtung: Eine inhaltlich falsche Entscheidung (z. B. VA zu Unrecht für gebührenfrei erklärt) ist NICHT nach § 42 berichtigungsfähig – sie ist rechtswidrig und nur über §§ 48, 49 VwVfG korrigierbar."
    },

    e_rbb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 37 VI VwVfG, § 58 II VwGO",
      title: "Fehlende Rechtsbehelfsbelehrung – VA rechtmäßig, Frist verlängert",
      text: "Das Fehlen oder die Fehlerhaftigkeit der Rechtsbehelfsbelehrung berührt die Rechtmäßigkeit des VA nicht. Folge ist allein, dass die Monatsfrist nicht zu laufen beginnt – der Rechtsbehelf ist innerhalb eines JAHRES seit Bekanntgabe zulässig (§ 58 II VwGO)."
    },

    e_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      kicker: "Ergebnis: VA nichtig",
      norm: "§ 44, § 43 III VwVfG",
      title: "Der VA ist nichtig – unwirksam von Anfang an",
      text: "Der Fehler führt zur Nichtigkeit. Der nichtige VA ist unwirksam (§ 43 III VwVfG) und zieht keinerlei Rechtsfolgen nach sich: Er muss nicht befolgt, nicht angefochten und von der Behörde nicht aufgehoben werden. Heilung (§ 45) und Unbeachtlichkeit (§ 46) scheiden aus – beide setzen voraus, dass der VA nicht nichtig ist.\n\nTeilnichtigkeit: Betrifft die Nichtigkeit nur einen Teil, ist der VA im Ganzen nichtig, wenn er ohne den nichtigen Teil nicht erlassen worden wäre (§ 44 IV VwVfG).\n\nRechtsschutz: Feststellung durch die Behörde (§ 44 V) oder Nichtigkeitsfeststellungsklage (§ 43 I Alt. 2 VwGO); wegen des Rechtsscheins nach h. M. auch Anfechtungsklage möglich."
    },

    e_geheilt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 45 VwVfG",
      title: "Fehler geheilt – VA gilt als von Anfang an rechtmäßig",
      text: "Der Verfahrens- bzw. Formfehler wurde nach § 45 I VwVfG durch Nachholung der versäumten Handlung geheilt (möglich bis zum Abschluss der letzten Tatsacheninstanz, § 45 II VwVfG).\n\nDie Heilung wirkt ex tunc auf den Erlasszeitpunkt zurück. Ein Widerspruch oder eine Klage, die allein auf den geheilten Fehler gestützt wird, bleibt erfolglos."
    },

    e_unbeachtlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 46 VwVfG",
      title: "Fehler unbeachtlich – kein Aufhebungsanspruch",
      text: "Die Verletzung der Verfahrens-, Form- oder örtlichen Zuständigkeitsvorschrift ist nach § 46 VwVfG unbeachtlich, weil offensichtlich ist, dass sie die Entscheidung in der Sache nicht beeinflusst hat.\n\nWICHTIG für das Gutachten: Die Unbeachtlichkeit lässt die RECHTSWIDRIGKEIT des VA unberührt – ausgeschlossen ist nur der ANSPRUCH auf Aufhebung. Ein allein auf diesen Fehler gestützter Widerspruch wäre daher erfolglos."
    },

    e_umdeutung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 47 VwVfG",
      title: "Umdeutung: fehlerhafter VA wird als anderer VA aufrechterhalten",
      text: "Der fehlerhafte VA kann nach § 47 VwVfG in einen rechtmäßigen VA mit gleicher Zielrichtung umgedeutet werden. Der umgedeutete VA gilt dann als erlassen; für den Betroffenen dürfen sich keine ungünstigeren Rechtsfolgen ergeben (§ 47 II VwVfG)."
    },

    e_rechtswidrig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 II VwVfG",
      title: "VA rechtswidrig, aber wirksam – anfechtbar",
      text: "Der Fehler ist beachtlich: Der VA ist rechtswidrig, mangels Nichtigkeit aber wirksam (§ 43 II VwVfG). Er kann und muss mit Widerspruch (§§ 68 ff. VwGO) bzw. Anfechtungsklage (§ 42 I VwGO) angegriffen werden, bevor Bestandskraft eintritt.\n\nNach Eintritt der Bestandskraft kommt nur noch die Aufhebung durch die Behörde nach §§ 48 ff. VwVfG in Betracht (Schema „Rücknahme und Widerruf“ in FS II)."
    }
  },

  routers: {}
});
