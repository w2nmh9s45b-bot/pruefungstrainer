/*
 * Prüfungsschema: Rechtsstaatsprinzip, Art. 20 III, 28 I 1 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic) – A.II.4 Rechtsstaatsprinzip
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: herleitung → gewaltenteilung → gesetz → rueckwirkung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-rechtsstaat",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsstrukturprinzipien",
  title: "Rechtsstaatsprinzip, Art. 20 III GG",
  description: "Elemente des Rechtsstaatsprinzips: Gewaltenteilung (horizontal/vertikal/personell, Gewaltenverschränkung und Kernbereichslehre), Vorrang und Vorbehalt des Gesetzes (Wesentlichkeitstheorie), Rückwirkungsverbot (echte/unechte Rückwirkung) und Verhältnismäßigkeit.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "herleitung", label: "Herleitung" },
    { id: "gewaltenteilung", label: "Gewaltenteilung" },
    { id: "gesetz", label: "Vorrang/Vorbehalt" },
    { id: "rueckwirkung", label: "Rückwirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verstoß gegen das Rechtsstaatsprinzip",
    neg: "Kein Verstoß",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "herleitung",
      kind: "frage",
      norm: "Art. 20 III, 28 I 1, III GG",
      title: "Welches Element des Rechtsstaatsprinzips ist betroffen?",
      text: "Das Rechtsstaatsprinzip verhindert willkürliches, für den Bürger unvorhersehbares und gerichtlich nicht überprüfbares Staatshandeln. Herleitung: In Art. 20 I GG nicht genannt – aber nach Art. 28 I 1 GG muss die Ordnung in den Ländern den Grundsätzen des Rechtsstaates genügen; was der Bund für die Länder gewährleistet (Art. 28 III GG), muss erst recht für ihn selbst gelten. Kernelemente stehen in Art. 20 III GG.",
      hint: "In RLP: Art. 77 LV entspricht Art. 20 III GG. Jedes Element eigenständig im Gutachtenstil prüfen!",
      options: [
        { label: "Gewaltenteilung", next: "q_gewalt", tone: "neutral" },
        { label: "Vorrang des Gesetzes", next: "q_vorrang", tone: "neutral" },
        { label: "Vorbehalt des Gesetzes", next: "q_vorbehalt", tone: "neutral" },
        { label: "Rückwirkungsverbot", next: "q_rueck_anwendung", tone: "neutral" },
        { label: "Verhältnismäßigkeit", next: "e_vhm", tone: "neutral" }
      ]
    },

    /* ================= Gewaltenteilung ================= */

    q_gewalt: {
      station: "gewaltenteilung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Welche Dimension der Gewaltenteilung ist betroffen?",
      def: "<b>Horizontal:</b> Gesetzgebung (Legislative), vollziehende Gewalt (Exekutive), Rechtsprechung (Judikative). <b>Vertikal:</b> Aufteilung der Staatsgewalt zwischen Bund und Ländern. <b>Personell (Inkompatibilität):</b> aus speziellen Vorschriften (Art. 55, 66, 94 I 3 GG) und aus der Gewaltenteilung selbst – z. B. Bundes-/Landesbeamte nicht zugleich Abgeordnete, Kommunalbeamte nicht zugleich Ratsmitglied (KWG); vermeidbar durch Ruhendstellung (§ 30 I BeamtStG, §§ 5, 29 AbgG).",
      options: [
        { label: "Eine Gewalt nimmt Aufgaben einer anderen wahr", detail: "Gewaltenverschränkung", next: "q_verschraenkung", tone: "neutral" },
        { label: "Person gehört zwei Gewalten an", next: "q_personell", tone: "neutral" }
      ]
    },

    q_verschraenkung: {
      station: "gewaltenteilung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Gewaltenverschränkung: Bleibt der Kernbereich unangetastet?",
      text: "Die Gewalten sind nicht strikt getrennt; Verschränkungen sind zulässig, wenn der Kernbereich der betroffenen Gewalt unangetastet bleibt. Kriterien: Wird der Funktionsbereich der Staatsgewalt nicht wesentlich reduziert – oder gibt es gute Gründe für die Verschränkung?",
      def: "<b>Zulässige Regelbeispiele:</b> Untersuchungsausschüsse (Art. 44 GG, Legislative ↔ Judikative), Gesetzesinitiative der BReg (Art. 76 I GG), Regierungsmitglieder als Abgeordnete, Rechtsverordnungen (Art. 80 GG, Art. 110 LV), Bußgeldbescheide der Verwaltung, richterliche Rechtsfortbildung (Analogien), Justizverwaltung.",
      options: [
        { label: "Kernbereich bleibt unangetastet / gute Gründe", next: "e_kein_verstoss", tone: "pos" },
        { label: "Funktionsbereich wesentlich reduziert", next: "e_verstoss_gewalt", tone: "neg" }
      ]
    },

    q_personell: {
      station: "gewaltenteilung",
      kind: "frage",
      norm: "Art. 55, 66, 94 I 3 GG",
      title: "Personelle Gewaltenteilung verletzt?",
      options: [
        { label: "Beamten-/Angestelltenverhältnis ruht während des Mandats", detail: "§ 30 I BeamtStG, § 5 AbgG – zulässig", next: "e_kein_verstoss", tone: "pos" },
        { label: "Regierungsmitglied zugleich Abgeordneter", detail: "Zulässig – innerhalb der Exekutive nicht weisungsgebunden (auch parlamentarische Staatssekretäre)", next: "e_kein_verstoss", tone: "pos" },
        { label: "Aktiver Beamter zugleich Abgeordneter (ohne Ruhen)", next: "e_verstoss_gewalt", tone: "neg" }
      ]
    },

    /* ================= Vorrang / Vorbehalt ================= */

    q_vorrang: {
      station: "gesetz",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Vorrang des Gesetzes: Widerspricht das Handeln einer höherrangigen Norm?",
      text: "Rechtsprechung und vollziehende Gewalt sind an „Gesetz und Recht“ gebunden (bei Gesetzen spricht man von Verfassungs-, sonst von Rechtmäßigkeit). Der Vorrang gilt für jedes staatliche Handeln – keine Voraussetzungen.",
      def: "Aus der <b>Normenpyramide</b> folgen: <b>Anwendungsvorrang</b> des nachrangigen/spezielleren Rechts (lex specialis), <b>Geltungsvorrang</b> des höherrangigen Rechts (widersprechendes niederrangiges Recht ist grundsätzlich nichtig) und das <b>Handlungs- und Anwendungsgebot</b>: Vorhandene Gesetze müssen vollumfänglich angewandt werden – auch die Nichtanwendung ist verfassungswidrig.",
      options: [
        { label: "Handeln verstößt gegen höherrangiges Recht", next: "e_verstoss_vorrang", tone: "neg" },
        { label: "Norm wird schlicht nicht angewendet", next: "e_verstoss_vorrang", tone: "neg" },
        { label: "Kein Widerspruch", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    q_vorbehalt: {
      station: "gesetz",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Vorbehalt des Gesetzes: Liegt rechtsförmliches staatliches Handeln vor?",
      text: "Voraussetzung für die Geltung des Vorbehalts ist rechtsförmliches staatliches Handeln (VA, Urteil). Grundsatz: Der Gesetzgeber hat die Wahl zwischen formellem und materiellem Gesetz als Grundlage.",
      options: [
        { label: "Ja – welche Grundlage ist nötig?", next: "q_wesentlich", tone: "neutral" },
        { label: "Nein, schlichtes Verwaltungshandeln", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    q_wesentlich: {
      station: "gesetz",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Welche Anforderung an die Rechtsgrundlage gilt?",
      def: "<b>Grundsatz:</b> formelles oder materielles Gesetz. <b>Ausnahme 1 (Leistungsverwaltung):</b> Mittelansatz im Haushaltsplan i. V. m. Verwaltungsvorschrift genügt (Subventionen). <b>Ausnahme 2 (Wesentlichkeitstheorie):</b> Bei erheblichen Grundrechtseingriffen und sonst für die Gesellschaft wesentlichen Fragen ist ein formelles Gesetz erforderlich. <b>Ausnahme 3:</b> Staatliches Informationshandeln braucht nach BVerfG kein Gesetz – die Zuständigkeitsnorm genügt.",
      options: [
        { label: "Wesentlicher Grundrechtseingriff mit formellem Gesetz", next: "e_kein_verstoss", tone: "pos" },
        { label: "Wesentlicher Eingriff OHNE formelles Gesetz", next: "e_verstoss_vorbehalt", tone: "neg" },
        { label: "Begünstigung mit Haushaltsansatz + VV", next: "e_kein_verstoss", tone: "pos" },
        { label: "Informationshandeln ohne Gesetz", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Rückwirkung ================= */

    q_rueck_anwendung: {
      station: "rueckwirkung",
      kind: "frage",
      norm: "Art. 103 II GG",
      title: "Rückwirkungsverbot: Straf- oder Ordnungswidrigkeitenrecht betroffen?",
      text: "Voraussetzungen: Die Rechtslage wird durch Gesetz im Nachhinein geändert, indem nachträglich ungünstige/belastende Rechtsfolgen normiert werden.",
      options: [
        { label: "Ja, Strafrecht/OWi", detail: "Art. 103 II GG: Rückwirkung stets unzulässig", next: "e_verstoss_103", tone: "neg" },
        { label: "Nein, sonstiges Recht", next: "q_rueck_art", tone: "neutral" }
      ]
    },

    q_rueck_art: {
      station: "rueckwirkung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Echte oder unechte Rückwirkung?",
      def: "<b>Echte Rückwirkung:</b> Das Gesetz greift in einen in der Vergangenheit liegenden und abgeschlossenen Sachverhalt ein – grundsätzlich unzulässig (der Bürger kann sein Verhalten nicht mehr anpassen, sein Vertrauensschutz überwiegt). <b>Unechte Rückwirkung:</b> Eingriff in einen begonnenen, aber noch nicht abgeschlossenen Sachverhalt – grundsätzlich zulässig (Anpassung möglich; der Staat muss auf Wandel reagieren können).",
      options: [
        { label: "Abgeschlossener Sachverhalt (echte Rückwirkung)", next: "e_verstoss_rueck", tone: "neg" },
        { label: "Noch laufender Sachverhalt (unechte Rückwirkung)", next: "e_unechte", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vhm: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Verhältnismäßigkeit als Element des Rechtsstaatsprinzips",
      text: "Nach dem Rechtsstaatsprinzip (Art. 20 III GG) muss jedes staatliche Handeln verhältnismäßig sein: legitimes Ziel – geeignet – erforderlich – angemessen. Die vollständige Prüfung mit Definitionen findet sich im Schema „Prüfung eines Freiheitsgrundrechts“ (Station Schranken-Schranke)."
    },
    e_verstoss_gewalt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen die Gewaltenteilung",
      text: "Der Kernbereich der betroffenen Staatsgewalt wird angetastet (Funktionsbereich wesentlich reduziert, keine tragfähigen Gründe) bzw. die personelle Gewaltenteilung (Inkompatibilität) ist verletzt. Es liegt ein Verstoß gegen das Rechtsstaatsprinzip aus Art. 20 III GG vor."
    },
    e_verstoss_vorrang: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen den Vorrang des Gesetzes",
      text: "Das staatliche Handeln widerspricht höherrangigem Recht (Geltungsvorrang) bzw. missachtet das Handlungs- und Anwendungsgebot. Es ist rechtswidrig – bei Normen führt der Widerspruch grundsätzlich zur Nichtigkeit des niederrangigen Rechts."
    },
    e_verstoss_vorbehalt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen den Vorbehalt des Gesetzes",
      text: "Für den wesentlichen (Grundrechts-)Eingriff fehlt die erforderliche formell-gesetzliche Grundlage (Wesentlichkeitstheorie). Das Handeln verletzt das Rechtsstaatsprinzip aus Art. 20 III GG."
    },
    e_verstoss_103: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen Art. 103 II GG",
      text: "Im Straf- und Ordnungswidrigkeitenrecht ist jede Rückwirkung ausnahmslos unzulässig („nulla poena sine lege“). Das rückwirkende Gesetz ist verfassungswidrig."
    },
    e_verstoss_rueck: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Echte Rückwirkung – grundsätzlich unzulässig",
      text: "Das Gesetz greift belastend in einen abgeschlossenen Sachverhalt ein. Der Bürger konnte sein Verhalten nicht mehr anpassen; sein Vertrauensschutz überwiegt. Die echte Rückwirkung verstößt grundsätzlich gegen das Rechtsstaatsprinzip (enge Ausnahmen: z. B. kein schutzwürdiges Vertrauen)."
    },
    e_unechte: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Unechte Rückwirkung – grundsätzlich zulässig",
      text: "Das Gesetz wirkt nur auf einen begonnenen, noch nicht abgeschlossenen Sachverhalt ein. Der Bürger kann sein Verhalten anpassen, und der Staat muss auf Veränderungen reagieren können – der Vertrauensschutz überwiegt grundsätzlich nicht. Kein Verstoß gegen das Rechtsstaatsprinzip (Ausnahme: Abwägung im Einzelfall)."
    },
    e_kein_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Verstoß gegen das Rechtsstaatsprinzip",
      text: "Das geprüfte Element (Gewaltenteilung, Vorrang/Vorbehalt des Gesetzes) ist gewahrt – die Gewaltenverschränkung lässt den Kernbereich unangetastet bzw. die erforderliche Rechtsgrundlage liegt vor. Kein Verstoß gegen Art. 20 III GG."
    }
  }
});
