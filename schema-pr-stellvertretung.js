/*
 * Prüfungsschema: Stellvertretung, §§ 164 ff. BGB (inkl. falsus procurator, § 179 BGB)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "PR OLE 27-28 – Einführung in die rechtlichen Grundlagen der Stellvertretung" (FS I)
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff) – Duldungs-/Anscheinsvollmacht, §§ 177–179
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 164–181, 1626, 1629)
 *
 * Stationen: zulaessig → we → name → vmacht → falsus → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-stellvertretung",
  subject: "Privatrecht",
  area: "Stellvertretung",
  title: "Wirksame Stellvertretung, § 164 I 1 BGB",
  description: "Zulässigkeit, eigene Willenserklärung (Abgrenzung zum Boten), Handeln im fremden Namen (Offenkundigkeitsprinzip), Vertretungsmacht (Vollmacht, gesetzlich, organschaftlich, Rechtsschein) und die Haftung des Vertreters ohne Vertretungsmacht (§§ 177–179 BGB).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "zulaessig", label: "Zulässigkeit" },
    { id: "we", label: "Eigene WE" },
    { id: "name", label: "Fremder Name" },
    { id: "vmacht", label: "Vertretungsmacht" },
    { id: "falsus", label: "Falsus procurator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 164 I 1 BGB",
      title: "Ist die Stellvertretung zulässig?",
      text: "Obersatz: „Die Willenserklärung des V könnte gem. § 164 I 1 BGB unmittelbar für und gegen den Vertretenen wirken.“ Die Stellvertretung ist nur bei rechtsgeschäftlichem Handeln möglich – nicht bei höchstpersönlichen Rechtsgeschäften.",
      def: "<b>Höchstpersönliche Geschäfte</b> (vertretungsfeindlich): z. B. Eheschließung (§ 1311 BGB), Testamentserrichtung. <b>Kein Rechtsgeschäft:</b> Realakte (z. B. Übergabe) – hier hilft ggf. der Besitzdiener/Besitzmittler, nicht § 164 BGB.",
      options: [
        { label: "Ja, gewöhnliches Rechtsgeschäft", detail: "z. B. Kaufvertrag – Stellvertretung zulässig", next: "q_we", tone: "pos" },
        { label: "Nein, höchstpersönliches Rechtsgeschäft", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_we: {
      station: "we",
      kind: "frage",
      norm: "§ 164 I 1 BGB",
      title: "Gibt der Handelnde eine eigene Willenserklärung ab?",
      text: "Der Vertreter gibt eine eigene Willenserklärung ab – der Bote übermittelt lediglich eine fremde. Abgrenzung nach dem äußeren Auftreten aus Sicht eines objektiven Empfängers (§§ 133, 157 BGB); ein eigener Entscheidungsspielraum ist typisch, aber nicht zwingend.",
      def: "<b>Merksatz:</b> „Ist das Kind auch noch so klein, kann es doch schon Bote sein.“ – Der Bote kann geschäftsunfähig sein; der Vertreter muss mindestens beschränkt geschäftsfähig sein (§ 165 BGB), denn die Rechtsfolgen treffen nicht ihn, sondern den Vertretenen (neutrales Geschäft).",
      options: [
        { label: "Ja, eigene Willenserklärung (Vertreter)", next: "q_minderjaehrig", tone: "pos" },
        { label: "Nein, nur Übermittlung einer fremden Erklärung (Bote)", next: "e_bote", tone: "warn" }
      ]
    },

    q_minderjaehrig: {
      station: "we",
      kind: "frage",
      norm: "§ 165 BGB",
      title: "Ist der Vertreter (mindestens) beschränkt geschäftsfähig?",
      text: "Die Wirksamkeit der vom Vertreter abgegebenen Willenserklärung wird nicht dadurch beeinträchtigt, dass der Vertreter in der Geschäftsfähigkeit beschränkt ist (§ 165 BGB). Ein Geschäftsunfähiger kann dagegen kein Vertreter sein (§ 105 I BGB).",
      options: [
        { label: "Ja, voll oder beschränkt geschäftsfähig", next: "q_name", tone: "pos" },
        { label: "Nein, geschäftsunfähig (§ 104 BGB)", next: "e_geschaeftsunfaehig", tone: "neg" }
      ]
    },

    q_name: {
      station: "name",
      kind: "frage",
      norm: "§ 164 I 1, 2 BGB",
      title: "Handelt der Vertreter im fremden Namen (Offenkundigkeit)?",
      text: "Das Handeln im Namen des Vertretenen muss ausdrücklich erfolgen oder sich aus den Umständen ergeben (§ 164 I 2 BGB). Grund: Der Geschäftspartner soll wissen, wer sein Vertragspartner wird (Offenkundigkeitsprinzip).",
      def: "<b>Unternehmensbezogenes Geschäft:</b> Bei Geschäften mit erkennbarem Unternehmensbezug wird im Zweifel der Unternehmensinhaber Vertragspartei (Auslegungsregel der Rspr.). <b>Geschäft für den, den es angeht:</b> Bei Bargeschäften des täglichen Lebens ist dem Partner die Person des Vertretenen gleichgültig – Ausnahme vom Offenkundigkeitsprinzip.",
      options: [
        { label: "Ja, ausdrücklich im fremden Namen", next: "q_vmacht", tone: "pos" },
        { label: "Ja, aus den Umständen erkennbar", detail: "z. B. Verkäuferin im Laden – unternehmensbezogenes Geschäft, § 164 I 2 BGB", next: "q_vmacht", tone: "pos" },
        { label: "Nicht erkennbar – aber Bargeschäft des täglichen Lebens", detail: "Verdecktes Geschäft für den, den es angeht: Offenkundigkeit ausnahmsweise entbehrlich", next: "q_vmacht", tone: "warn" },
        { label: "Nein, tritt im eigenen Namen auf", detail: "Eigengeschäft des Handelnden (§ 164 II BGB: kein Anfechtungsrecht bei fehlendem Vertretungswillen)", next: "e_eigengeschaeft", tone: "neg" }
      ]
    },

    q_vmacht: {
      station: "vmacht",
      kind: "frage",
      norm: "§§ 164, 166 II, 167 BGB",
      title: "Worauf könnte die Vertretungsmacht beruhen?",
      text: "Vertretungsmacht = die rechtliche Befugnis, mit unmittelbarer Wirkung für einen anderen Willenserklärungen abzugeben oder zu empfangen.",
      def: "<b>Arten:</b> (1) <b>gesetzliche</b> Vertretungsmacht (Eltern, §§ 1626 I, 1629 I BGB), (2) <b>rechtsgeschäftliche</b> Vertretungsmacht = Vollmacht (§ 166 II 1 BGB), (3) <b>organschaftliche</b> Vertretungsmacht (z. B. Vorstand, Geschäftsführer, Bürgermeister für die Gemeinde).",
      options: [
        { label: "Vollmacht (rechtsgeschäftlich)", next: "q_vollmacht", tone: "neutral" },
        { label: "Gesetzliche Vertretungsmacht", detail: "z. B. Eltern für das Kind, §§ 1626 I, 1629 I BGB", next: "q_umfang", tone: "pos" },
        { label: "Organschaftliche Vertretungsmacht", detail: "Organ einer juristischen Person", next: "q_umfang", tone: "pos" },
        { label: "Keine erkennbare Vertretungsmacht", detail: "Prüfe Rechtsscheinvollmachten", next: "q_rechtsschein", tone: "neg" }
      ]
    },

    q_vollmacht: {
      station: "vmacht",
      kind: "frage",
      norm: "§ 167 BGB",
      title: "Wurde die Vollmacht wirksam erteilt und besteht sie noch?",
      text: "Die Vollmacht wird durch einseitige, empfangsbedürftige Willenserklärung erteilt – gegenüber dem Vertreter (Innenvollmacht) oder dem Geschäftspartner (Außenvollmacht), § 167 I BGB. Sie ist grundsätzlich formfrei (§ 167 II BGB).",
      def: "<b>Erlöschen:</b> mit Beendigung des Grundverhältnisses (§ 168 S. 1 BGB) · durch Widerruf (§ 168 S. 2 BGB) · durch Zeitablauf (§ 163 BGB) · bei der Spezialvollmacht mit Abschluss des Geschäfts. <b>§§ 170–172 BGB:</b> Fortwirkung kundgegebener Vollmachten zum Schutz des Rechtsverkehrs.",
      options: [
        { label: "Ja, wirksam erteilt und nicht erloschen", next: "q_umfang", tone: "pos" },
        { label: "Erloschen, aber Rechtsschein nach §§ 170–172 BGB", detail: "Kundgegebene Vollmacht gilt gegenüber Gutgläubigen fort (§ 173 BGB beachten)", next: "q_umfang", tone: "warn" },
        { label: "Nein, nie erteilt oder erloschen", next: "q_rechtsschein", tone: "neg" }
      ]
    },

    q_rechtsschein: {
      station: "vmacht",
      kind: "frage",
      norm: "§ 173 BGB analog",
      title: "Greift eine Rechtsscheinvollmacht (Duldungs-/Anscheinsvollmacht)?",
      text: "Ohne erteilte Vollmacht kann sich der Vertretene kraft zurechenbaren Rechtsscheins behandeln lassen müssen, als hätte er bevollmächtigt.",
      def: "<b>Gemeinsame Voraussetzungen:</b> (1) Rechtsschein – wiederholtes Auftreten des Unbefugten für den Geschäftsherrn (Faustregel: mindestens dreimal), (3) Gutgläubigkeit des Geschäftspartners (§ 173 BGB analog). Unterschied bei (2) Zurechenbarkeit: <b>Duldungsvollmacht</b> – der Geschäftsherr <i>kennt</i> das Auftreten und schreitet nicht ein, obwohl er könnte; <b>Anscheinsvollmacht</b> – er kennt es <i>nicht</i>, hätte es bei pflichtgemäßer Sorgfalt aber erkennen und verhindern können.",
      options: [
        { label: "Duldungsvollmacht", detail: "Wissen und Dulden des Geschäftsherrn", next: "q_umfang", set: { rechtsschein: true }, tone: "warn" },
        { label: "Anscheinsvollmacht", detail: "Kennenmüssen bei pflichtgemäßer Sorgfalt", next: "q_umfang", set: { rechtsschein: true }, tone: "warn" },
        { label: "Keine Rechtsscheinvollmacht", detail: "Vertreter ohne Vertretungsmacht (falsus procurator)", next: "q_177", tone: "neg" }
      ]
    },

    q_umfang: {
      station: "vmacht",
      kind: "frage",
      norm: "§ 164 I 1 BGB",
      title: "Hält sich das Geschäft im Rahmen der Vertretungsmacht?",
      text: "Der Vertreter muss „innerhalb der ihm zustehenden Vertretungsmacht“ gehandelt haben. Auch das Überschreiten einer bestehenden Vertretungsmacht macht ihn zum Vertreter ohne Vertretungsmacht.",
      hint: "Beachte § 181 BGB: Insichgeschäft (Selbstkontrahieren/Mehrfachvertretung) ist grundsätzlich unzulässig, es sei denn, es ist gestattet oder erfolgt ausschließlich zur Erfüllung einer Verbindlichkeit.",
      options: [
        { label: "Ja, im Rahmen der Vertretungsmacht", next: "e_wirksam", tone: "pos" },
        { label: "Nein, Vertretungsmacht überschritten", next: "q_177", tone: "neg" }
      ]
    },

    /* ================= Falsus procurator ================= */

    q_177: {
      station: "falsus",
      kind: "frage",
      norm: "§ 177 I BGB",
      title: "Genehmigt der Vertretene den Vertrag?",
      text: "Schließt jemand ohne Vertretungsmacht im Namen eines anderen einen Vertrag, hängt die Wirksamkeit für und gegen den Vertretenen von dessen Genehmigung ab (§ 177 I BGB) – der Vertrag ist schwebend unwirksam (Parallele zu §§ 108 ff. BGB!).",
      def: "<b>Möglichkeiten des Geschäftspartners in der Schwebezeit:</b> Aufforderung zur Genehmigung mit Zwei-Wochen-Frist (§ 177 II BGB, Parallele § 108 II BGB) · Widerruf (§ 178 BGB, Parallele § 109 BGB). <b>Einseitige Rechtsgeschäfte</b> ohne Vertretungsmacht sind grundsätzlich unwirksam (§ 180 BGB, Parallele § 111 BGB).",
      options: [
        { label: "Ja, Genehmigung erteilt", detail: "Wirkt ex tunc, § 184 I BGB", next: "e_wirksam_genehmigt", tone: "pos" },
        { label: "Nein, verweigert oder Frist des § 177 II BGB abgelaufen", detail: "Haftung des falsus procurator nach § 179 BGB prüfen", next: "q_179_1", tone: "neg" },
        { label: "Geschäftspartner widerruft (§ 178 BGB)", next: "e_widerrufen", tone: "neg" }
      ]
    },

    q_179_1: {
      station: "falsus",
      kind: "frage",
      norm: "§ 179 III BGB",
      title: "Ist die Haftung des Vertreters ausgeschlossen?",
      text: "Eigene Anspruchsgrundlage gegen den Vertreter: § 179 I BGB. Prüfung: (1) Vertragsschluss durch Vertreter ohne Vertretungsmacht, (2) Verweigerung der Genehmigung, (3) kein Haftungsausschluss, (4) Anspruchsinhalt.",
      def: "<b>Haftungsausschluss (§ 179 III BGB):</b> S. 1 – der andere Teil kannte den Mangel der Vertretungsmacht oder musste ihn kennen; S. 2 – der Vertreter war beschränkt geschäftsfähig und handelte ohne Zustimmung seines gesetzlichen Vertreters.",
      options: [
        { label: "Kein Ausschluss – Haftung besteht", next: "q_179_2", tone: "pos" },
        { label: "Geschäftspartner kannte den Mangel / musste ihn kennen", detail: "§ 179 III 1 BGB", next: "e_179_ausgeschlossen", tone: "neg" },
        { label: "Vertreter minderjährig ohne Zustimmung", detail: "§ 179 III 2 BGB – Minderjährigenschutz geht vor", next: "e_179_ausgeschlossen", tone: "neg" }
      ]
    },

    q_179_2: {
      station: "falsus",
      kind: "frage",
      norm: "§ 179 I, II BGB",
      title: "Kannte der Vertreter den Mangel seiner Vertretungsmacht?",
      text: "Der Anspruchsinhalt hängt von der Kenntnis des Vertreters ab.",
      options: [
        { label: "Ja, Kenntnis", detail: "§ 179 I BGB: Wahlrecht des Geschäftspartners – Erfüllung oder Schadensersatz", next: "e_179_1", tone: "neg" },
        { label: "Nein, keine Kenntnis", detail: "§ 179 II BGB: nur Vertrauensschaden, begrenzt auf das Erfüllungsinteresse", next: "e_179_2", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 164 I 1 BGB",
      title: "Wirksame Stellvertretung (+)",
      text: "Die Willenserklärung des Vertreters wirkt unmittelbar für und gegen den Vertretenen. Der Vertretene wird Vertragspartner – der Vertreter wird weder berechtigt noch verpflichtet.\n\nBeachte § 166 I BGB: Für Willensmängel und Kenntnis kommt es grundsätzlich auf die Person des Vertreters an."
    },

    e_wirksam_genehmigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 177 I, 184 I BGB",
      title: "Wirksam durch Genehmigung (+)",
      text: "Mit der Genehmigung des Vertretenen wird der schwebend unwirksame Vertrag rückwirkend (ex tunc) wirksam. Der Vertretene ist Vertragspartner geworden."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 164 I 1 BGB",
      title: "Stellvertretung unzulässig (–)",
      text: "Bei höchstpersönlichen Rechtsgeschäften ist eine Stellvertretung ausgeschlossen. Die Erklärung des „Vertreters“ entfaltet für den Vertretenen keine Wirkung."
    },

    e_bote: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 164 ff. BGB",
      title: "Botenschaft – keine Stellvertretung",
      text: "Der Handelnde überbringt nur eine fremde Willenserklärung; die §§ 164 ff. BGB finden keine Anwendung. Die übermittelte Erklärung ist eine solche des Geschäftsherrn selbst und wirkt für ihn mit Zugang.\n\nBei Falschübermittlung: Anfechtung nach § 120 BGB möglich."
    },

    e_geschaeftsunfaehig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 104, 105 I BGB",
      title: "Keine wirksame Vertretung – Vertreter geschäftsunfähig (–)",
      text: "Ein Geschäftsunfähiger kann keine eigene wirksame Willenserklärung abgeben (§ 105 I BGB) und daher nicht Vertreter sein. Er könnte allenfalls Bote sein."
    },

    e_eigengeschaeft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 164 II BGB",
      title: "Eigengeschäft des Handelnden (–)",
      text: "Tritt der Wille, in fremdem Namen zu handeln, nicht erkennbar hervor, kommt das Geschäft mit dem Handelnden selbst zustande. Der Mangel des Vertretungswillens berechtigt nicht zur Anfechtung (§ 164 II BGB)."
    },

    e_widerrufen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 178 BGB",
      title: "Vertrag durch Widerruf beseitigt (–)",
      text: "Der Geschäftspartner hat den schwebend unwirksamen Vertrag vor der Genehmigung widerrufen (möglich, wenn er den Mangel der Vertretungsmacht nicht kannte, § 178 S. 1 BGB). Der Vertrag ist endgültig unwirksam."
    },

    e_179_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Haftung des falsus procurator",
      norm: "§ 179 I BGB",
      title: "Vertreter haftet auf Erfüllung oder Schadensersatz (+)",
      text: "Der Vertreter, der seinen Mangel an Vertretungsmacht kannte, ist dem Geschäftspartner nach dessen Wahl zur Erfüllung oder zum Schadensersatz verpflichtet (§ 179 I BGB).\n\nDer Anspruch ist sofort fällig (§ 271 I BGB) und verjährt regelmäßig in drei Jahren (§§ 195, 199 I BGB) – nicht später als der vertragliche Anspruch."
    },

    e_179_2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Haftung des falsus procurator",
      norm: "§ 179 II BGB",
      title: "Vertreter haftet nur auf den Vertrauensschaden",
      text: "Kannte der Vertreter den Mangel der Vertretungsmacht nicht, haftet er nur auf Ersatz des Vertrauensschadens – begrenzt auf das Interesse, das der andere Teil an der Wirksamkeit des Vertrags hat (Kappungsgrenze, § 179 II BGB)."
    },

    e_179_ausgeschlossen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 179 III BGB",
      title: "Keine Haftung des Vertreters (–)",
      text: "Die Haftung des Vertreters ohne Vertretungsmacht ist ausgeschlossen: Der Geschäftspartner kannte den Mangel oder musste ihn kennen (§ 179 III 1 BGB) bzw. der Vertreter war minderjährig und handelte ohne Zustimmung seines gesetzlichen Vertreters (§ 179 III 2 BGB)."
    }
  }
});
