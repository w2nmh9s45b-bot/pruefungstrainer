/*
 * Prüfungsschema: Allgemeine Leistungsklage (ALK)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Erfolgsaussichten einer Allgemeinen Leistungsklage" (Dr. Konrad)
 *  - "3.Leistungsklage", "allgemeine Leistungsklage"
 *  - Gesetze: VwGO §§ 40, 43 II, 111, 113 IV (Erwähnungen der ALK), § 42 II analog
 *    (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-leistungsklage",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Klagearten",
  title: "Allgemeine Leistungsklage",
  description: "Klage auf Vornahme oder Unterlassen schlichten Verwaltungshandelns (Realakte): Statthaftigkeit, Klagebefugnis analog § 42 II VwGO, kein Vorverfahren und keine Frist, qualifiziertes Rechtsschutzbedürfnis bei der vorbeugenden Unterlassungsklage und Begründetheit.",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "befugnis", label: "Befugnis & RSB" },
    { id: "begruendet", label: "Begründetheit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Klage hat Erfolg",
    neg: "Ergebnis: Klage ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 40 I 1, § 40 II VwGO",
      title: "Ist der Verwaltungsrechtsweg eröffnet?",
      def: "Die ALK zielt auf Erbringen oder Unterlassen einer Leistung, die kein VA ist. Die Zuordnung ist oft nicht eindeutig – öffentlich-rechtlich ist die Streitigkeit, wenn der zugrunde liegende Lebenssachverhalt öffentlich-rechtlicher Natur ist: Zweck ist die Wahrnehmung öffentlicher Aufgaben oder es besteht ein enger Funktionszusammenhang mit hoheitlicher Aufgabenwahrnehmung (<b>Akzessorietätstheorie</b>).<br><br><b>Beachte § 40 II VwGO:</b> Schadensersatz- und Entschädigungsansprüche gegen den Staat (Amtshaftung!) gehören vor die ORDENTLICHEN Gerichte.",
      options: [
        { label: "Ja, öffentlich-rechtlicher Sachverhalt", next: "q_statthaft", tone: "pos" },
        { label: "Nein (privatrechtlich / § 40 II VwGO)", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_statthaft: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 88 VwGO; Art. 19 IV GG",
      title: "Ist die allgemeine Leistungsklage statthaft?",
      def: "Die ALK ist in der VwGO nicht ausdrücklich geregelt, aber wegen Art. 19 IV GG unstreitig anerkannt (vorausgesetzt in § 43 II, § 111, § 113 IV VwGO).<br><br><b>Statthaft für jede Leistung, die kein VA ist:</b><br>• <b>Leistungsvornahmeklage:</b> tatsächliches Handeln (Auskunft, Akteneinsicht, Zahlung, Beseitigung),<br>• <b>Unterlassungsklage (Abwehrklage):</b> Unterlassen schlichten Verwaltungshandelns (ehrverletzende Äußerung, Immissionen aus öffentlicher Einrichtung),<br>• auch: Bürgerverurteilungsklage der Verwaltung (selten – z. B. aus örV, § 61 VwVfG beachten),<br>• str.: vorbeugende Unterlassung eines künftigen VA (nur bei Unzumutbarkeit des Abwartens).",
      options: [
        { label: "Ja, Leistung ≠ VA begehrt", next: "q_befugnis", tone: "pos" },
        { label: "Vorbeugende Unterlassungsklage", next: "q_befugnis", set: { vorbeugend: true }, tone: "warn" },
        { label: "In Wahrheit VA begehrt", next: "e_vk_verweis", tone: "neg" }
      ]
    },

    q_befugnis: {
      station: "befugnis",
      kind: "frage",
      norm: "§ 42 II VwGO analog",
      title: "Klagebefugnis und Rechtsschutzbedürfnis?",
      def: "<b>Klagebefugnis (§ 42 II VwGO analog):</b> Zum Ausschluss von Popularklagen muss ein Anspruch auf die Leistung bzw. auf das Unterlassen MÖGLICH sein.<br><br><b>Kein Vorverfahren</b> (nur falls gesetzlich angeordnet, z. B. § 54 II BeamtStG), <b>keine Klagefrist</b> (aber Verwirkung nach § 242 BGB analog möglich).<br><br><b>Rechtsschutzbedürfnis:</b> Ein vorheriger Antrag bei der Behörde ist nach h. M. nicht zwingend (vgl. § 156 VwGO), aber regelmäßig sinnvoll.<br><b>Qualifiziertes RSB bei der VORBEUGENDEN Unterlassungsklage:</b> konkrete Anhaltspunkte für das befürchtete Handeln UND (bei VA/Normen) Unzumutbarkeit des Abwartens (irreparable Schäden, Rechtsvereitelung).",
      options: [
        { label: "Befugnis und RSB gegeben", next: "q_begruendet", tone: "pos" },
        { label: "Anspruch von vornherein ausgeschlossen", next: "e_unzulaessig_befugnis", tone: "neg" },
        { label: "Vorbeugend ohne qualifiziertes RSB", next: "e_unzulaessig_rsb", tone: "neg" }
      ]
    },

    q_begruendet: {
      station: "begruendet",
      kind: "frage",
      norm: "Rechtsgedanke §§ 113 I, V VwGO",
      title: "Begründetheit: Anspruch bzw. Unterlassungsrecht?",
      def: "Passivlegitimation: Rechtsträger der Behörde, die für die Leistung bzw. die abzuwehrende Handlung zuständig ist.<br><br><b>Leistungsvornahmeklage:</b> begründet, wenn eine <b>Anspruchsgrundlage</b> besteht, deren Voraussetzungen erfüllt sind (Gesetz, örV, Zusicherung, Folgenbeseitigungsanspruch, öffentlich-rechtlicher Erstattungsanspruch, Richtlinie i. V. m. Art. 3 I GG). Bei Ermessensverwaltung: Anspruch auf ermessensfehlerfreie Entscheidung (ähnlich § 113 V VwGO).<br><br><b>Unterlassungsklage:</b> begründet, wenn die abzuwehrende Handlung <b>rechtswidrig</b> ist und den Kläger in einem subjektiv-öffentlichen Recht verletzt (öffentlich-rechtlicher Unterlassungsanspruch aus den Grundrechten bzw. analog § 1004 BGB).",
      options: [
        { label: "Anspruch besteht / Handlung rechtswidrig", next: "e_begruendet", tone: "pos" },
        { label: "Kein Anspruch / Handlung rechtmäßig", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Rechtsgedanke § 113 V VwGO",
      title: "Allgemeine Leistungsklage zulässig und begründet",
      text: "Der Kläger hat einen Anspruch auf die begehrte Leistung bzw. ein Recht auf Unterlassen der rechtswidrigen Handlung. Das Gericht verurteilt den Beklagten zur Leistung bzw. zum Unterlassen.\n\nVollstreckung: nach § 172 VwGO (Zwangsgeld gegen die Behörde) bzw. §§ 167 ff. VwGO i. V. m. ZPO."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Rechtsgedanke § 113 V VwGO",
      title: "Klage zulässig, aber unbegründet",
      text: "Es fehlt an einer Anspruchsgrundlage bzw. deren Voraussetzungen, oder die abzuwehrende Handlung ist rechtmäßig. Die Klage wird abgewiesen."
    },

    e_vk_verweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 42 I Alt. 2 VwGO",
      title: "VA begehrt → Verpflichtungsklage",
      text: "Richtet sich das Begehren in Wahrheit auf den Erlass eines VA, ist die Verpflichtungsklage statthaft (mit Vorverfahren und Klagefrist!) – eigenes Schema. Die ALK darf nicht zur Umgehung dieser besonderen Voraussetzungen genutzt werden."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwGO",
      title: "Klage unzulässig: falscher Rechtsweg",
      text: "Die Streitigkeit ist privatrechtlicher Natur oder nach § 40 II VwGO den ordentlichen Gerichten zugewiesen (insb. Amtshaftung, Entschädigungsansprüche). Verweisung nach § 17a II GVG."
    },

    e_unzulaessig_befugnis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO analog",
      title: "Klage unzulässig: keine Klagebefugnis",
      text: "Ein Anspruch des Klägers auf die Leistung bzw. das Unterlassen ist offensichtlich ausgeschlossen (Popularklage)."
    },

    e_unzulaessig_rsb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Qualifiziertes RSB",
      title: "Vorbeugende Unterlassungsklage unzulässig",
      text: "Für vorbeugenden Rechtsschutz fehlt das qualifizierte Rechtsschutzbedürfnis: Es fehlen konkrete Anhaltspunkte für das befürchtete Handeln oder dem Kläger ist das Abwarten und der nachträgliche Rechtsschutz (Anfechtung, § 80 V VwGO) zumutbar."
    }
  },

  routers: {}
});
