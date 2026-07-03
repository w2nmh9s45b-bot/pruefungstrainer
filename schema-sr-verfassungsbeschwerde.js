/*
 * Prüfungsschema: Verfassungsbeschwerde, Art. 94 I Nr. 4a GG, §§ 13 Nr. 8a, 90 ff. BVerfGG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "2.1.1 StVR 43-44 - OLE Verfassungsbeschwerde" (Eckhardt, FS I)
 *  - Normen verifiziert an Gesetze/md/Verfassungsrecht/Grundgesetz.md und BVerfGG.md
 *  - Beachte: Seit der GG-Novelle 2024 steht der Zuständigkeitskatalog des BVerfG in
 *    Art. 94 I GG (zuvor Art. 93 I GG a.F.) – ältere Skripte zitieren Art. 93 I Nr. 4a GG.
 *
 * Stationen: zulaessig1 → zulaessig2 → begruendet → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-verfassungsbeschwerde",
  subject: "Staatsrecht / Europarecht",
  area: "Verfassungsprozessrecht",
  title: "Verfassungsbeschwerde, §§ 90 ff. BVerfGG",
  description: "Der Prüfungsklassiker: Zulässigkeit (Zuständigkeit, Beschwerdefähigkeit, Prozessfähigkeit, Beschwerdegegenstand, Beschwerdebefugnis mit selbst/gegenwärtig/unmittelbar, Rechtswegerschöpfung, Form und Frist) und Begründetheit (vollständige Grundrechtsprüfung).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "zulaessig1", label: "Zulässigkeit I" },
    { id: "zulaessig2", label: "Zulässigkeit II" },
    { id: "begruendet", label: "Begründetheit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "VB hat Aussicht auf Erfolg",
    neg: "VB ohne Erfolg",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= Zulässigkeit I ================= */

    start: {
      station: "zulaessig1",
      kind: "frage",
      norm: "Art. 94 I Nr. 4a GG, §§ 13 Nr. 8a, 90 ff. BVerfGG",
      title: "Zuständigkeit des BVerfG / Eröffnung des Verfassungsgerichtswegs?",
      text: "Obersatz: Die Verfassungsbeschwerde hat Aussicht auf Erfolg, wenn sie zulässig und begründet ist.\n\nDas BVerfG ist für die Verfassungsbeschwerde zuständig nach Art. 94 I Nr. 4a GG, §§ 13 Nr. 8a, 90 ff. BVerfGG.",
      hint: "Seit der GG-Änderung 2024 steht der Katalog in Art. 94 I GG – ältere Skripte und Literatur zitieren noch Art. 93 I Nr. 4a GG a.F. Die VB ist kein zusätzlicher Instanzenzug, sondern außerordentlicher Rechtsbehelf: geprüft wird nur die Verletzung spezifischen Verfassungsrechts.",
      options: [
        { label: "Zuständigkeit gegeben – weiter", detail: "Probleme treten hier selten auf", next: "q_faehig", tone: "pos" }
      ]
    },

    q_faehig: {
      station: "zulaessig1",
      kind: "frage",
      norm: "Art. 94 I Nr. 4a GG, § 90 I BVerfGG",
      title: "Beschwerdefähigkeit („jedermann“)?",
      def: "<b>Beschwerdefähig</b> ist „jedermann“, der grundrechtsfähig ist, d. h. Träger von Grundrechten sein kann: natürliche Personen sowie inländische juristische Personen des Privatrechts nach Art. 19 III GG.",
      options: [
        { label: "Natürliche Person", next: "q_prozess", tone: "pos" },
        { label: "Inländische juristische Person des Privatrechts", detail: "Art. 19 III GG – Grundrecht muss dem Wesen nach anwendbar sein", next: "q_prozess", tone: "pos" },
        { label: "Juristische Person des öffentlichen Rechts", detail: "Grundsätzlich nicht grundrechtsfähig (Konfusionsargument)", next: "e_unzulaessig_faehig", tone: "neg" }
      ]
    },

    q_prozess: {
      station: "zulaessig1",
      kind: "frage",
      norm: "—",
      title: "Prozessfähigkeit?",
      def: "<b>Prozessfähigkeit:</b> die Fähigkeit, Prozesshandlungen selbst oder durch Vertreter vorzunehmen. Bei Erwachsenen i. d. R. unproblematisch. Bei Minderjährigen kommt es auf die <b>Grundrechtsmündigkeit</b> an: Einsichtsfähigkeit in Inhalt und Tragweite des gerügten Grundrechts (keine starre Altersgrenze – z. B. können Jugendliche bzgl. Art. 4 GG prozessfähig sein).",
      options: [
        { label: "Ja, prozessfähig", next: "q_gegenstand", tone: "pos" },
        { label: "Minderjähriger ohne Einsichtsfähigkeit", detail: "Vertretung durch die Eltern erforderlich (§§ 1626, 1629 I BGB)", next: "e_unzulaessig_prozess", tone: "neg" }
      ]
    },

    q_gegenstand: {
      station: "zulaessig1",
      kind: "frage",
      norm: "Art. 94 I Nr. 4a GG, § 90 I BVerfGG",
      title: "Beschwerdegegenstand: Akt der öffentlichen Gewalt?",
      text: "Tauglich ist jeder Akt der inländischen öffentlichen Gewalt – Legislative, Exekutive und Judikative. Genau prüfen, welche Staatsgewalt als letzte gehandelt hat!",
      hint: "Klausurtypisch: VB gegen Gesetze oder gegen letztinstanzliche Urteile. VB direkt gegen einen VA sind selten (Rechtsweg meist nicht erschöpft).",
      options: [
        { label: "Gesetz (Legislativakt)", next: "q_befugnis", set: { gegenstand: "gesetz" }, tone: "neutral" },
        { label: "Letztinstanzliches Urteil (Judikativakt)", next: "q_befugnis", set: { gegenstand: "urteil" }, tone: "neutral" },
        { label: "Verwaltungsakt (Exekutivakt)", next: "q_befugnis", set: { gegenstand: "va" }, tone: "neutral" },
        { label: "Kein Akt inländischer öffentlicher Gewalt", next: "e_unzulaessig_gegenstand", tone: "neg" }
      ]
    },

    q_befugnis: {
      station: "zulaessig1",
      kind: "frage",
      norm: "§ 90 I BVerfGG",
      title: "Beschwerdebefugnis: Möglichkeit einer Grundrechtsverletzung?",
      text: "Der Beschwerdeführer muss behaupten, in einem seiner Grundrechte oder grundrechtsgleichen Rechte (Art. 20 IV, 33, 38, 101, 103, 104 GG) verletzt zu sein. Es genügt, dass er die Möglichkeit einer Verletzung überzeugend dartut – ob sie wirklich vorliegt, ist Frage der Begründetheit.",
      options: [
        { label: "Verletzung möglich", detail: "z. B. Art. 2 I GG bei Verboten mit Strafandrohung", next: "q_selbst", tone: "pos" },
        { label: "Verletzung offensichtlich ausgeschlossen", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_selbst: {
      station: "zulaessig1",
      kind: "frage",
      norm: "§ 90 I BVerfGG",
      title: "Selbstbetroffenheit?",
      def: "<b>Selbst betroffen</b>, wenn der Beschwerdeführer in eigenen Grundrechten verletzt sein kann – er darf nicht fremde Grundrechte im eigenen Namen geltend machen. Damit ist die <b>Popularbeschwerde</b> ausgeschlossen.",
      options: [
        { label: "Ja, eigene Grundrechte betroffen", next: "q_gegenwaertig", tone: "pos" },
        { label: "Nein, fremde Rechte (Popularbeschwerde)", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_gegenwaertig: {
      station: "zulaessig1",
      kind: "frage",
      norm: "§ 90 I BVerfGG",
      title: "Gegenwärtige Betroffenheit („schon und noch“)?",
      def: "<b>Gegenwärtig</b> betroffen, wer <b>schon</b> (keine vorbeugende VB gegen erst erwartete Beeinträchtigungen) <b>und noch</b> (Beschwer nicht erledigt) betroffen ist.",
      options: [
        { label: "Ja, schon und noch betroffen", next: "q_unmittelbar", tone: "pos" },
        { label: "Nein, erst zukünftig betroffen", detail: "vorbeugende VB unzulässig", next: "e_unzulaessig_befugnis", tone: "neg" },
        { label: "Nein, Beschwer bereits erledigt", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_unmittelbar: {
      station: "zulaessig1",
      kind: "frage",
      norm: "§ 90 I BVerfGG",
      title: "Unmittelbare Betroffenheit?",
      text: "Unmittelbar betroffen, wenn der angegriffene Hoheitsakt selbst beschwert und es keines weiteren Vollzugsakts bedarf, um die Grundrechtsbeeinträchtigung herbeizuführen.",
      def: "<b>Bei Gesetzen problematisch:</b> Eine <b>selbstvollziehende Norm</b> (self-executing) ändert die Rechtsstellung ohne weiteren Vollzugsakt (Bsp.: § 22 BeamtStG – Entlassung kraft Gesetzes; Gegensatz § 23 BeamtStG – Entlassung durch VA). Bei Ermächtigungsgrundlagen muss der Betroffene grundsätzlich den VA abwarten – außer das Abwarten ist unzumutbar (hohe Straf-/Sanktionsdrohung).",
      options: [
        { label: "Exekutiv-/Judikativakt (VA, Urteil)", detail: "Unmittelbarkeit unproblematisch (+)", next: "@rechtsweg", tone: "pos" },
        { label: "Selbstvollziehendes Gesetz", next: "@rechtsweg", set: { selfexec: true }, tone: "pos" },
        { label: "Gesetz mit unzumutbarem Abwarten", detail: "z. B. hohe Strafandrohung bei Verstoß", next: "@rechtsweg", set: { selfexec: true }, tone: "pos" },
        { label: "Ermächtigungsgrundlage, VA noch nicht ergangen", next: "e_unzulaessig_unmittelbar", tone: "neg" }
      ]
    },

    /* ================= Zulässigkeit II ================= */

    q_rechtsweg: {
      station: "zulaessig2",
      kind: "frage",
      norm: "§ 90 II BVerfGG",
      title: "Rechtswegerschöpfung / Subsidiarität?",
      text: "Die VB ist nur zulässig, wenn der Beschwerdeführer den Rechtsweg erschöpft hat – er muss alles Zumutbare getan haben, die Grundrechtsverletzung fachgerichtlich abzuwehren (alle Instanzen).",
      options: [
        { label: "Rechtsweg erschöpft (letztinstanzliche Entscheidung)", next: "q_form", set: { frist: "monat" }, tone: "pos" },
        { label: "Rechtsweg nicht erschöpft", next: "e_unzulaessig_rechtsweg", tone: "neg" }
      ]
    },

    q_rechtsweg_gesetz: {
      station: "zulaessig2",
      kind: "frage",
      norm: "§ 90 II BVerfGG",
      title: "Rechtswegerschöpfung bei VB gegen Parlamentsgesetze",
      text: "Gegen ein Parlamentsgesetz ist grundsätzlich kein Rechtsweg gegeben – ein Rechtsweg, der nicht existiert, kann auch nicht erschöpft werden. § 90 II BVerfGG steht der Zulässigkeit dann nicht entgegen.",
      options: [
        { label: "Kein Rechtsweg gegeben – Voraussetzung entfällt", next: "q_form", set: { frist: "jahr" }, tone: "pos" }
      ]
    },

    q_form: {
      station: "zulaessig2",
      kind: "frage",
      norm: "§§ 23 I, 92 BVerfGG",
      title: "Form gewahrt?",
      text: "Die VB ist schriftlich beim BVerfG einzureichen (§ 23 I 1 BVerfGG) und zu begründen (§ 23 I 2, § 92 BVerfGG): Bezeichnung des verletzten Rechts und der Handlung oder Unterlassung des Organs/der Behörde.",
      options: [
        { label: "Ja / keine gegenteiligen Angaben im Sachverhalt", next: "@frist", tone: "pos" },
        { label: "Nein, Form-/Begründungsmangel", next: "e_unzulaessig_form", tone: "neg" }
      ]
    },

    q_frist_monat: {
      station: "zulaessig2",
      kind: "frage",
      norm: "§ 93 I BVerfGG",
      title: "Monatsfrist eingehalten?",
      text: "Grundsätzlich beträgt die Einlegungsfrist einen Monat ab Zustellung/Verkündung der letztinstanzlichen Entscheidung (§ 93 I BVerfGG). Fristberechnung nach §§ 187 I, 188 II 1. Alt. BGB.",
      options: [
        { label: "Ja, innerhalb eines Monats", next: "q_rsb", tone: "pos" },
        { label: "Nein, Frist versäumt", next: "e_unzulaessig_frist", tone: "neg" }
      ]
    },

    q_frist_jahr: {
      station: "zulaessig2",
      kind: "frage",
      norm: "§ 93 III BVerfGG",
      title: "Jahresfrist eingehalten?",
      text: "Bei VB gegen Gesetze, gegen die kein Rechtsweg offensteht (selbstvollziehende Gesetze), gilt die Jahresfrist: Erhebung innerhalb eines Jahres nach Inkrafttreten des Gesetzes (§ 93 III BVerfGG). Fristberechnung nach §§ 187 II, 188 II 2. Alt. BGB.",
      hint: "Übungsfall Alkoholverbotsgesetz: VB sechs Wochen nach Verkündung → Jahresfrist gewahrt.",
      options: [
        { label: "Ja, innerhalb eines Jahres nach Inkrafttreten", next: "q_rsb", tone: "pos" },
        { label: "Nein, Frist versäumt", next: "e_unzulaessig_frist", tone: "neg" }
      ]
    },

    q_rsb: {
      station: "zulaessig2",
      kind: "frage",
      norm: "—",
      title: "Allgemeines Rechtsschutzbedürfnis?",
      text: "Ein schutzwürdiges Interesse an der Entscheidung ist bei Vorliegen aller anderen Zulässigkeitsvoraussetzungen in der Regel zu bejahen (keine einfachere, effektivere Rechtsschutzmöglichkeit ersichtlich).",
      options: [
        { label: "Ja – Zulässigkeit insgesamt (+)", next: "q_begr_start", tone: "pos" },
        { label: "Nein, einfacherer Weg vorhanden", next: "e_unzulaessig_rsb", tone: "neg" }
      ]
    },

    /* ================= Begründetheit ================= */

    q_begr_start: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 90 I BVerfGG",
      title: "Begründetheit: vollständige Grundrechtsprüfung",
      text: "Zwischenergebnis: Die Verfassungsbeschwerde ist zulässig. ✓\n\nBegründet ist sie, wenn der Beschwerdeführer in seinen Grundrechten oder grundrechtsgleichen Rechten verletzt ist: Schutzbereich – Eingriff – Rechtfertigung (Schranken, Schranken-Schranken: formelle und materielle Verfassungsmäßigkeit inkl. Verhältnismäßigkeit).",
      hint: "Details im Schema „Prüfung eines Freiheitsgrundrechts“ bzw. „Gleichheitsgrundrechte“.",
      options: [
        { label: "VB richtet sich (nur) gegen eine Rechtsnorm", detail: "Norm auf Vereinbarkeit mit den Grundrechten prüfen", next: "q_begr_norm", tone: "neutral" },
        { label: "VB richtet sich gegen ein letztinstanzliches Urteil", detail: "Zweistufige Prüfung: Gesetz + Einzelmaßnahme", next: "q_begr_urteil", tone: "neutral" }
      ]
    },

    q_begr_norm: {
      station: "begruendet",
      kind: "frage",
      norm: "Grundrechte",
      title: "Verletzt die Norm den Beschwerdeführer in seinen Grundrechten?",
      text: "Die selbstvollziehende Rechtsnorm ist auf ihre Vereinbarkeit mit den Grundrechten des Beschwerdeführers zu prüfen (Schutzbereich – Eingriff – verfassungsrechtliche Rechtfertigung).",
      options: [
        { label: "Ja, Grundrechtsverletzung liegt vor", next: "e_erfolg", tone: "pos" },
        { label: "Nein, Eingriff gerechtfertigt", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_begr_urteil: {
      station: "begruendet",
      kind: "frage",
      norm: "Grundrechte",
      title: "Stufe 1: Ist die gesetzliche Grundlage verfassungsgemäß?",
      text: "Zunächst wird im Rahmen der Schranken-Schranken die Verfassungsmäßigkeit der Ermächtigungsgrundlage geprüft (formell i. d. R. gegeben; materiell abstrakt, noch ohne Einzelfallbezug).",
      options: [
        { label: "Ja, Gesetz verfassungsgemäß", next: "q_begr_einzelakt", tone: "pos" },
        { label: "Nein, Gesetz verfassungswidrig", next: "e_erfolg", tone: "pos" }
      ]
    },

    q_begr_einzelakt: {
      station: "begruendet",
      kind: "frage",
      norm: "—",
      title: "Stufe 2: Verletzt die Einzelmaßnahme spezifisches Verfassungsrecht?",
      text: "Das BVerfG ist keine Superrevisionsinstanz: Auslegung und Anwendung einfachen Rechts prüft es nicht. Ein letztinstanzliches Urteil wird nur daraufhin überprüft, ob das Gericht Bedeutung und Tragweite von Grundrechten verkannt und insbesondere den Verhältnismäßigkeitsgrundsatz verletzt hat.",
      options: [
        { label: "Ja, spezifische Grundrechtsverletzung", next: "e_erfolg", tone: "pos" },
        { label: "Nein, nur (behauptete) einfachrechtliche Fehler", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_unzulaessig_faehig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – nicht beschwerdefähig",
      text: "Der Beschwerdeführer ist nicht grundrechtsfähig und damit nicht „jedermann“ i. S. d. Art. 94 I Nr. 4a GG, § 90 I BVerfGG. Die Verfassungsbeschwerde ist unzulässig."
    },
    e_unzulaessig_prozess: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – nicht prozessfähig",
      text: "Dem minderjährigen Beschwerdeführer fehlt die Grundrechtsmündigkeit bezüglich des gerügten Grundrechts; er kann die Prozesshandlung nicht selbst vornehmen. Die Eltern müssen ihn vertreten (§§ 1626, 1629 I BGB)."
    },
    e_unzulaessig_gegenstand: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – kein tauglicher Beschwerdegegenstand",
      text: "Es fehlt an einem Akt der inländischen öffentlichen Gewalt (Legislative, Exekutive oder Judikative). Die Verfassungsbeschwerde ist unzulässig."
    },
    e_unzulaessig_befugnis: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – keine Beschwerdebefugnis",
      text: "Der Beschwerdeführer ist nicht selbst, gegenwärtig und unmittelbar in eigenen Grundrechten betroffen bzw. eine Grundrechtsverletzung erscheint von vornherein ausgeschlossen. Insbesondere die Popularbeschwerde (fremde Rechte im eigenen Namen) und die vorbeugende VB sind unzulässig."
    },
    e_unzulaessig_unmittelbar: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – keine unmittelbare Betroffenheit",
      text: "Die angegriffene Ermächtigungsgrundlage beschwert erst über einen weiteren Vollzugsakt (VA). Der Beschwerdeführer muss den Vollzugsakt abwarten und dagegen den Fachrechtsweg beschreiten – es sei denn, das Abwarten wäre wegen schwerer Sanktionen unzumutbar."
    },
    e_unzulaessig_rechtsweg: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – Rechtsweg nicht erschöpft",
      text: "Nach § 90 II BVerfGG ist die VB erst nach Erschöpfung des Rechtswegs zulässig. Der Beschwerdeführer muss zunächst alle fachgerichtlichen Instanzen ausschöpfen."
    },
    e_unzulaessig_form: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – Formmangel",
      text: "Die VB genügt nicht den Anforderungen der §§ 23 I, 92 BVerfGG (Schriftform, Begründung mit Bezeichnung des verletzten Rechts und der angegriffenen Handlung)."
    },
    e_unzulaessig_frist: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – Frist versäumt",
      text: "Die Einlegungsfrist ist abgelaufen: Monatsfrist des § 93 I BVerfGG (nach Rechtswegerschöpfung) bzw. Jahresfrist des § 93 III BVerfGG (bei Gesetzen ohne Rechtsweg, ab Inkrafttreten)."
    },
    e_unzulaessig_rsb: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB unzulässig – kein Rechtsschutzbedürfnis",
      text: "Es besteht eine einfachere, effektivere Rechtsschutzmöglichkeit; das allgemeine Rechtsschutzbedürfnis fehlt."
    },
    e_unbegruendet: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "VB zulässig, aber unbegründet",
      text: "Der Beschwerdeführer ist nicht in seinen Grundrechten oder grundrechtsgleichen Rechten verletzt: Der Eingriff ist verfassungsrechtlich gerechtfertigt bzw. es liegt keine Verletzung spezifischen Verfassungsrechts vor. Die Verfassungsbeschwerde bleibt ohne Erfolg."
    },
    e_erfolg: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "VB zulässig und begründet",
      text: "Der Beschwerdeführer ist durch den Akt der öffentlichen Gewalt in seinen Grundrechten verletzt. Die Verfassungsbeschwerde hat Aussicht auf Erfolg – das BVerfG hebt die Maßnahme auf bzw. erklärt die Norm für nichtig (§ 95 BVerfGG). Praxishinweis: Nur ca. 2 % aller VB sind erfolgreich; zusätzlich gelten die Annahmevoraussetzungen der §§ 93a ff. BVerfGG."
    }
  },

  routers: {
    "@rechtsweg": function (flags) {
      return flags.selfexec ? "q_rechtsweg_gesetz" : "q_rechtsweg";
    },
    "@frist": function (flags) {
      return flags.frist === "jahr" ? "q_frist_jahr" : "q_frist_monat";
    }
  }
});
