/*
 * Prüfungsschema: Antrag nach § 80 V VwGO (vorläufiger Rechtsschutz)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema s 80 V VwGO" (Schmitt – Statthaftigkeit, RSB,
 *    Begründetheit mit § 80 III und Interessenabwägung)
 *  - "FS II – 7. Vorlaeufiger Rechtsschutz", "Grundlagen vorlaeufiger Rechtsschutz",
 *    "Erfolgsaussichten eines Antrages nach ss 80a i.V.m. ... VwGO"
 *  - Gesetze: VwGO § 80, § 80a (Volltext geprüft); § 20 AGVwGO (Abgaben)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-80v",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Vorläufiger Rechtsschutz",
  title: "Antrag nach § 80 V VwGO",
  description: "Anordnung und Wiederherstellung der aufschiebenden Wirkung: Grundsatz des § 80 I, die Ausnahmen des § 80 II 1 Nr. 1–4, Zulässigkeit des Antrags, formelle Prüfung der Vollziehungsanordnung (§ 80 III) und die Interessenabwägung nach den Erfolgsaussichten der Hauptsache – inkl. § 80a VwGO bei VA mit Drittwirkung.",
  start: "start",
  stations: [
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "zulaessig", label: "Zulässigkeit" },
    { id: "formell", label: "§ 80 III" },
    { id: "abwaegung", label: "Interessenabwägung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Antrag erfolgreich",
    neg: "Ergebnis: Antrag ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 80 I, II VwGO",
      title: "Hat der Rechtsbehelf aufschiebende Wirkung?",
      text: "Grundsatz: Widerspruch und Anfechtungsklage haben AUFSCHIEBENDE WIRKUNG (§ 80 I VwGO) – der VA darf nicht vollzogen werden. Der Antrag nach § 80 V VwGO ist nur nötig, wenn die aufschiebende Wirkung ausnahmsweise entfällt.",
      def: "<b>Die aufschiebende Wirkung entfällt (§ 80 II 1 VwGO):</b><br><b>Nr. 1:</b> Anforderung von <b>öffentlichen Abgaben und Kosten</b>,<br><b>Nr. 2:</b> unaufschiebbare Anordnungen und Maßnahmen von <b>Polizeivollzugsbeamten</b>,<br><b>Nr. 3:</b> in anderen <b>durch Bundes- oder Landesgesetz</b> vorgeschriebenen Fällen (z. B. § 212a BauGB – Baugenehmigung ggü. dem Nachbarn; § 20 AGVwGO),<br><b>Nr. 4:</b> Anordnung der <b>SOFORTIGEN VOLLZIEHUNG</b> durch die Behörde im besonderen öffentlichen Interesse.<br><br>Verwaltungsrechtsweg: wie in der Hauptsache (§ 40 I VwGO); zuständig ist das Gericht der Hauptsache (§ 80 V 1 VwGO).",
      options: [
        { label: "AW entfällt kraft Gesetzes (Nr. 1–3)", next: "q_zulaessig", tone: "neutral" },
        { label: "Sofortige Vollziehung angeordnet (Nr. 4)", next: "q_zulaessig", set: { nr4: true }, tone: "neutral" },
        { label: "Rechtsbehelf hat aufschiebende Wirkung", next: "e_kein_antrag", tone: "neg" }
      ]
    },

    q_zulaessig: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 80 V, § 42 II VwGO analog",
      title: "Ist der Antrag zulässig?",
      def: "<b>Statthaftigkeit:</b> Antrag auf<br>• <b>ANORDNUNG</b> der aW in den Fällen des § 80 II 1 Nr. 1–3 (§ 80 V 1 Alt. 1),<br>• <b>WIEDERHERSTELLUNG</b> der aW im Fall der Nr. 4 (§ 80 V 1 Alt. 2),<br>• bei bereits vollzogenem VA: <b>Aufhebung der Vollziehung</b> (§ 80 V 3).<br>Abgrenzung: § 123 V VwGO – die einstweilige Anordnung ist subsidiär (Anfechtungsfälle → § 80 V!). Bei VA mit Drittwirkung (z. B. Nachbar gegen Baugenehmigung): § 80a i. V. m. § 80 V VwGO.<br><br><b>Antragsbefugnis</b> (§ 42 II analog): mögliche Verletzung eigener Rechte durch den Vollzug.<br><b>Rechtsschutzbedürfnis:</b> Der Rechtsbehelf (Widerspruch/Klage) muss EINGELEGT sein (str., h. M. bei Nr. 1: Form/Frist prüfen!), darf nicht offensichtlich unzulässig sein; bei Abgaben (Nr. 1) verlangt § 80 VI VwGO zwingend den vorherigen Aussetzungsantrag bei der Behörde!<br><b>Frist:</b> grundsätzlich keine; Form §§ 81, 82 VwGO analog.",
      options: [
        { label: "Zulässig", next: "@begruendet_weiche", tone: "pos" },
        { label: "Hauptsacherechtsbehelf nicht eingelegt / offens. unzulässig", next: "e_unzulaessig", tone: "neg" },
        { label: "Abgabenfall ohne vorherigen Behördenantrag (§ 80 VI)", next: "e_unzulaessig_80_6", tone: "neg" }
      ]
    },

    q_formell_80_3: {
      station: "formell",
      kind: "frage",
      norm: "§ 80 III 1 VwGO",
      title: "Nr. 4: Ist die Vollziehungsanordnung formell ordnungsgemäß?",
      def: "<b>Nur im Fall des § 80 II 1 Nr. 4 zu prüfen!</b><br><br>• <b>Zuständigkeit:</b> Ausgangs- oder Widerspruchsbehörde,<br>• <b>Verfahren:</b> Anhörung nach § 28 VwVfG? h. M.: NICHT erforderlich – die Vollziehungsanordnung ist kein VA, § 80 III VwGO ist abschließend,<br>• <b>Form (§ 80 III 1):</b> Das besondere Interesse an der sofortigen Vollziehung ist SCHRIFTLICH zu begründen – einzelfallbezogen! Die bloße Wiederholung des Gesetzestextes oder der Hinweis auf die Rechtmäßigkeit des VA genügt NICHT.<br><br>Ausnahme: bei Gefahr im Verzug (§ 80 III 2 VwGO) keine besondere Begründung nötig.",
      options: [
        { label: "Formell ordnungsgemäß (Begründung einzelfallbezogen)", next: "q_abwaegung", tone: "pos" },
        { label: "Begründung fehlt / nur formelhaft", next: "e_begruendet_formell", tone: "neg" }
      ]
    },

    q_abwaegung: {
      station: "abwaegung",
      kind: "frage",
      norm: "§ 80 V VwGO",
      title: "Interessenabwägung: Wie sind die Erfolgsaussichten der Hauptsache?",
      text: "Obersatz: Der Antrag nach § 80 V 1 VwGO ist begründet, wenn eine Interessenabwägung ergibt, dass das Aussetzungsinteresse des Antragstellers das öffentliche Vollzugsinteresse überwiegt. Dies richtet sich in erster Linie nach den Erfolgsaussichten in der Hauptsache – ausgehend von § 113 I 1 VwGO ist summarisch zu prüfen, ob der VA rechtswidrig ist.",
      def: "<b>Faustregeln:</b><br>• VA <b>offensichtlich rechtswidrig</b> / ernstliche Zweifel an der Rechtmäßigkeit → Antrag begründet (kein öffentliches Interesse am Vollzug rechtswidriger VA!),<br>• VA <b>offensichtlich rechtmäßig</b> → Antrag unbegründet (bei Nr. 4 zusätzlich: besonderes Vollzugsinteresse erforderlich),<br>• <b>offene Erfolgsaussichten</b> → reine Folgenabwägung (Vollzugsfolgen vs. Suspensivfolgen).",
      options: [
        { label: "VA (offensichtlich) rechtswidrig", next: "e_begruendet", tone: "pos" },
        { label: "VA offensichtlich rechtmäßig", next: "e_unbegruendet", tone: "neg" },
        { label: "Offen → Folgenabwägung zugunsten des Antragstellers", next: "e_begruendet_abwaegung", tone: "warn" },
        { label: "Offen → Folgenabwägung zugunsten des Vollzugs", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 80 V VwGO",
      title: "Antrag begründet – aW wird angeordnet/wiederhergestellt",
      text: "Es bestehen ernstliche Zweifel an der Rechtmäßigkeit des VA – am Vollzug eines (voraussichtlich) rechtswidrigen VA besteht kein öffentliches Interesse. Das Gericht ordnet die aufschiebende Wirkung an (Nr. 1–3) bzw. stellt sie wieder her (Nr. 4).\n\nIst der VA bereits vollzogen, kann das Gericht die Aufhebung der Vollziehung anordnen (§ 80 V 3 VwGO). Die Entscheidung ergeht durch Beschluss; dagegen ist die Beschwerde zum OVG statthaft (§ 146 VwGO)."
    },

    e_begruendet_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: formeller Fehler",
      norm: "§ 80 III VwGO",
      title: "Antrag begründet: Begründungsmangel der Vollziehungsanordnung",
      text: "Die Anordnung der sofortigen Vollziehung genügt nicht den Anforderungen des § 80 III 1 VwGO (fehlende oder bloß formelhafte Begründung). Der Antrag ist schon deshalb begründet – das Gericht hebt die Vollziehungsanordnung auf.\n\nBeachte: Die Behörde kann die sofortige Vollziehung danach mit ordnungsgemäßer Begründung ERNEUT anordnen; eine Nachholung im gerichtlichen Verfahren heilt den Mangel nach h. M. nicht."
    },

    e_begruendet_abwaegung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Folgenabwägung",
      norm: "§ 80 V VwGO",
      title: "Antrag nach Folgenabwägung begründet",
      text: "Bei offenen Erfolgsaussichten überwiegen die Nachteile, die dem Antragsteller bei sofortigem Vollzug drohen (irreparable Folgen), das öffentliche Interesse an der sofortigen Durchsetzung. Die aufschiebende Wirkung wird angeordnet bzw. wiederhergestellt – ggf. gegen Auflagen (§ 80 V 4 VwGO)."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 80 V VwGO",
      title: "Antrag unbegründet",
      text: "Der VA erweist sich bei summarischer Prüfung als (offensichtlich) rechtmäßig bzw. das öffentliche Vollzugsinteresse überwiegt. Der Antrag wird abgelehnt; der VA bleibt sofort vollziehbar.\n\nIm Fall der Nr. 4 ist neben der Rechtmäßigkeit auch das BESONDERE Vollzugsinteresse zu bejahen gewesen – es muss über das Interesse am Erlass des VA hinausgehen."
    },

    e_kein_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 80 I VwGO",
      title: "Kein § 80 V nötig: Rechtsbehelf hat aufschiebende Wirkung",
      text: "Widerspruch bzw. Anfechtungsklage entfalten aufschiebende Wirkung (§ 80 I VwGO) – der VA darf nicht vollzogen werden. Eines gerichtlichen Eilantrags bedarf es nicht.\n\nVollzieht die Behörde dennoch („faktischer Vollzug“), kann analog § 80 V VwGO die Feststellung der aufschiebenden Wirkung beantragt werden."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 80 V VwGO",
      title: "Antrag unzulässig",
      text: "Es fehlt am Rechtsschutzbedürfnis: Der Hauptsacherechtsbehelf (Widerspruch/Anfechtungsklage) wurde nicht eingelegt oder ist offensichtlich unzulässig (z. B. verfristet – dann ist der VA bestandskräftig und der Eilantrag nutzlos)."
    },

    e_unzulaessig_80_6: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 80 VI VwGO",
      title: "Abgabenfall: erst Aussetzungsantrag bei der Behörde",
      text: "Bei der Anforderung von öffentlichen Abgaben und Kosten (§ 80 II 1 Nr. 1 VwGO) ist der gerichtliche Antrag nur zulässig, wenn die Behörde zuvor einen Antrag auf Aussetzung der Vollziehung ganz oder teilweise abgelehnt hat (§ 80 VI 1 VwGO – echte Zugangsvoraussetzung!). Ausnahmen: drohende Vollstreckung oder Nichtentscheidung in angemessener Frist (§ 80 VI 2 VwGO)."
    }
  },

  routers: {
    /* Nur im Fall des § 80 II 1 Nr. 4 wird die formelle Rechtmäßigkeit
       der Vollziehungsanordnung nach § 80 III geprüft. */
    "@begruendet_weiche": function (flags) {
      return flags.nr4 ? "q_formell_80_3" : "q_abwaegung";
    }
  }
});
