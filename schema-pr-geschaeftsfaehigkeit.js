/*
 * Prüfungsschema: Geschäftsfähigkeit / Minderjährigenrecht, §§ 104 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff, FS I) – Geschäftsfähigkeit, §§ 104–113
 *  - "Planungsstruktur PR FS I" (Geschäftsfähigkeit, 5 Lehreinheiten)
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 2, 104–113, 131, 182–184, 1626, 1629)
 *
 * Stationen: einordnung → vorteil → zustimmung → schwebe → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-geschaeftsfaehigkeit",
  subject: "Privatrecht",
  area: "Geschäftsfähigkeit",
  title: "Wirksamkeit bei Minderjährigkeit, §§ 104 ff. BGB",
  description: "Geschäftsunfähigkeit (§§ 104, 105), beschränkte Geschäftsfähigkeit (§§ 106 ff.): lediglich rechtlicher Vorteil, Einwilligung, Taschengeldparagraf, schwebende Unwirksamkeit, Genehmigung, Widerruf und einseitige Rechtsgeschäfte.",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "einordnung", label: "Einordnung" },
    { id: "vorteil", label: "§ 107: Rechtlicher Vorteil" },
    { id: "zustimmung", label: "Zustimmung / § 110" },
    { id: "schwebe", label: "Schwebende Unwirksamkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "einordnung",
      kind: "frage",
      norm: "§§ 2, 104, 106 BGB",
      title: "Wie alt ist die handelnde Person?",
      text: "Einordnung in die Fallprüfung: Die Geschäftsfähigkeit ist eine rechtshindernde Einwendung – sie wird bei „Anspruch entstanden“ nach der Einigung geprüft („Der Vertrag könnte aber gem. § 105 I / § 108 I BGB unwirksam sein …“).",
      def: "<b>Geschäftsunfähig (§ 104 BGB):</b> wer das 7. Lebensjahr nicht vollendet hat (Nr. 1) oder sich in einem die freie Willensbestimmung ausschließenden, dauerhaften Zustand krankhafter Störung der Geistestätigkeit befindet (Nr. 2). <b>Beschränkt geschäftsfähig (§ 106 BGB):</b> Minderjährige, die das 7. Lebensjahr vollendet haben. <b>Voll geschäftsfähig:</b> ab Vollendung des 18. Lebensjahres (§ 2 BGB).",
      options: [
        { label: "Unter 7 Jahre oder dauerhaft geisteskrank", detail: "§ 104 Nr. 1 / Nr. 2 BGB – geschäftsunfähig", next: "e_105", tone: "neg" },
        { label: "7 bis 17 Jahre", detail: "§ 106 BGB – beschränkt geschäftsfähig", next: "q_einseitig", tone: "neutral" },
        { label: "18 Jahre oder älter", detail: "§ 2 BGB – voll geschäftsfähig", next: "e_wirksam_voll", tone: "pos" },
        { label: "Vorübergehende Störung / Bewusstlosigkeit bei Abgabe", detail: "§ 105 II BGB – Erklärung nichtig", next: "e_105", tone: "neg" }
      ]
    },

    q_einseitig: {
      station: "einordnung",
      kind: "frage",
      norm: "§ 111 BGB",
      title: "Vertrag oder einseitiges Rechtsgeschäft?",
      text: "Bei einseitigen Rechtsgeschäften (z. B. Kündigung, Anfechtung, Rücktritt) eines Minderjährigen gilt § 111 BGB: Ohne vorherige Einwilligung des gesetzlichen Vertreters ist das Geschäft unwirksam – eine Genehmigung ist ausgeschlossen (Rechtssicherheit!).",
      options: [
        { label: "Vertrag (zwei Willenserklärungen)", next: "q_vorteil", tone: "neutral" },
        { label: "Einseitiges Rechtsgeschäft mit vorheriger Einwilligung", detail: "Wirksam (§ 111 S. 1 BGB e contrario); Zurückweisung nach § 111 S. 2 BGB beachten", next: "e_wirksam_111", tone: "pos" },
        { label: "Einseitiges Rechtsgeschäft ohne Einwilligung", next: "e_111", tone: "neg" }
      ]
    },

    /* ================= § 107: lediglich rechtlicher Vorteil ================= */

    q_vorteil: {
      station: "vorteil",
      kind: "frage",
      norm: "§ 107 BGB",
      title: "Ist das Geschäft für den Minderjährigen lediglich rechtlich vorteilhaft?",
      text: "Der Minderjährige bedarf zu einer Willenserklärung, durch die er nicht lediglich einen rechtlichen Vorteil erlangt, der Einwilligung seines gesetzlichen Vertreters (§ 107 BGB). Prüfungseinstieg in der Klausur: § 108 I BGB – die Erforderlichkeit der Einwilligung (§ 107) ist faktisch dessen erstes Tatbestandsmerkmal.",
      def: "<b>Lediglich rechtlich vorteilhaft:</b> Maßgeblich sind allein die <i>rechtlichen</i> (nicht wirtschaftlichen) Folgen, die sich unmittelbar aus dem Geschäft ergeben. Beispiel: Schenkung (+), Kaufvertrag (–) wegen der Pflicht zur Kaufpreiszahlung. <b>Neutrale Geschäfte</b> (berühren das Vermögen des Minderjährigen nicht, z. B. Verfügung über fremde Sachen, Handeln als Vertreter, § 165 BGB) sind nach Sinn und Zweck des § 107 BGB zustimmungsfrei.",
      options: [
        { label: "Ja, lediglich rechtlich vorteilhaft", detail: "z. B. Annahme einer Schenkung, Eigentumserwerb", next: "e_wirksam_107", tone: "pos" },
        { label: "Neutrales Geschäft", detail: "Analog § 107 BGB zustimmungsfrei wirksam", next: "e_wirksam_107", tone: "pos" },
        { label: "Nein, auch rechtlich nachteilig", detail: "z. B. Kaufvertrag (Zahlungspflicht) – Zustimmung erforderlich", next: "q_einwilligung", tone: "neutral" }
      ]
    },

    /* ================= Zustimmung / § 110 ================= */

    q_einwilligung: {
      station: "zustimmung",
      kind: "frage",
      norm: "§§ 107, 183 BGB",
      title: "Liegt die vorherige Einwilligung des gesetzlichen Vertreters vor?",
      text: "Einwilligung = vorherige Zustimmung (§ 183 S. 1 BGB). Gesetzliche Vertreter sind regelmäßig die Eltern gemeinsam (§§ 1626 I, 1629 I BGB); bei Alltagsgeschäften ist von gegenseitiger Ermächtigung zur Alleinvertretung auszugehen.",
      def: "<b>Reichweite durch Auslegung (§§ 133, 157 BGB):</b> Regelfall Einzeleinwilligung; ein <b>beschränkter Generalkonsens</b> für ein klar umrissenes Vorhaben (z. B. Reise, Universitäts-Einschreibung) ist zulässig, ein unbeschränkter Generalkonsens nicht. Die Einwilligung ist bis zur Vornahme des Geschäfts frei widerruflich (§ 183 S. 1 BGB).",
      options: [
        { label: "Ja, Einwilligung erteilt und nicht widerrufen", next: "e_wirksam_einwilligung", tone: "pos" },
        { label: "Nein, keine (wirksame) Einwilligung", detail: "Weiter mit § 110 BGB", next: "q_110", tone: "neg" }
      ]
    },

    q_110: {
      station: "zustimmung",
      kind: "frage",
      norm: "§ 110 BGB",
      title: "Greift der „Taschengeldparagraf“ (§ 110 BGB)?",
      text: "Der Vertrag gilt als von Anfang an wirksam, wenn der Minderjährige die vertragsmäßige Leistung mit Mitteln bewirkt, die ihm zu diesem Zweck oder zu freier Verfügung vom Vertreter (oder mit dessen Zustimmung von einem Dritten) überlassen worden sind.",
      hint: "„Bewirken“ = vollständige Erfüllung. Ratenkäufe sind erst mit Zahlung der letzten Rate wirksam! § 110 BGB ist ein gesetzlich normierter beschränkter Generalkonsens.",
      options: [
        { label: "Ja, Leistung vollständig mit überlassenen Mitteln bewirkt", next: "e_wirksam_110", tone: "pos" },
        { label: "Nein", detail: "Nicht oder nicht vollständig bewirkt bzw. Mittel nicht dafür überlassen", next: "q_genehmigung", tone: "neg" }
      ]
    },

    /* ================= Schwebende Unwirksamkeit ================= */

    q_genehmigung: {
      station: "schwebe",
      kind: "frage",
      norm: "§ 108 I BGB",
      title: "Hat der gesetzliche Vertreter das Geschäft genehmigt?",
      text: "Der ohne die erforderliche Einwilligung geschlossene Vertrag ist schwebend unwirksam; seine Wirksamkeit hängt von der Genehmigung ab (§ 108 I BGB).",
      def: "<b>Genehmigung (§ 184 I BGB):</b> nachträgliche Zustimmung, wirkt auf den Zeitpunkt der Vornahme zurück (ex tunc). Sie kann gegenüber dem Minderjährigen oder dem Geschäftspartner erklärt werden (§ 182 I BGB) und ist eine empfangsbedürftige Willenserklärung.",
      options: [
        { label: "Ja, genehmigt", next: "e_wirksam_genehmigt", tone: "pos" },
        { label: "Genehmigung ausdrücklich verweigert", next: "e_unwirksam", tone: "neg" },
        { label: "Noch keine Entscheidung (Schwebezustand)", next: "q_aufforderung", tone: "warn" },
        { label: "Minderjähriger inzwischen volljährig", detail: "Dann tritt seine eigene Genehmigung an die Stelle (§ 108 III BGB)", next: "q_108iii", tone: "neutral" }
      ]
    },

    q_aufforderung: {
      station: "schwebe",
      kind: "frage",
      norm: "§ 108 II BGB",
      title: "Hat der Vertragspartner den Vertreter zur Genehmigung aufgefordert?",
      text: "Nach Aufforderung kann die Genehmigung nur noch gegenüber dem Vertragspartner erklärt werden; eine vorher gegenüber dem Minderjährigen erklärte Genehmigung oder Verweigerung wird unwirksam (§ 108 II 1 BGB). Wird die Genehmigung nicht binnen zwei Wochen erklärt, gilt sie als verweigert (§ 108 II 2 BGB).",
      options: [
        { label: "Ja – Genehmigung binnen 2 Wochen erklärt", next: "e_wirksam_genehmigt", tone: "pos" },
        { label: "Ja – Frist verstrichen: Genehmigung gilt als verweigert", next: "e_unwirksam", tone: "neg" },
        { label: "Nein – prüfe Widerruf des Vertragspartners", next: "q_widerruf", tone: "neutral" }
      ]
    },

    q_widerruf: {
      station: "schwebe",
      kind: "frage",
      norm: "§ 109 BGB",
      title: "Hat der Vertragspartner widerrufen?",
      text: "Bis zur Genehmigung ist der Vertragspartner zum Widerruf berechtigt (§ 109 I BGB). Kannte er die Minderjährigkeit, kann er nur widerrufen, wenn der Minderjährige der Wahrheit zuwider die Einwilligung behauptet hat (§ 109 II BGB).",
      options: [
        { label: "Ja, wirksam widerrufen", next: "e_widerrufen", tone: "neg" },
        { label: "Nein – der Schwebezustand dauert an", next: "e_schwebend", tone: "warn" }
      ]
    },

    q_108iii: {
      station: "schwebe",
      kind: "frage",
      norm: "§ 108 III BGB",
      title: "Genehmigt der (nun volljährige) Vertragspartner selbst?",
      text: "Ist der Minderjährige unbeschränkt geschäftsfähig geworden, tritt seine Genehmigung an die Stelle der Genehmigung des Vertreters (§ 108 III BGB).",
      options: [
        { label: "Ja, er genehmigt selbst", next: "e_wirksam_genehmigt", tone: "pos" },
        { label: "Nein, er verweigert", next: "e_unwirksam", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_105: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 105 BGB",
      title: "Willenserklärung nichtig (–)",
      text: "Die Willenserklärung des Geschäftsunfähigen ist nichtig (§ 105 I BGB); ebenso die im Zustand der Bewusstlosigkeit oder vorübergehender Störung der Geistestätigkeit abgegebene Erklärung (§ 105 II BGB). Ein Vertrag kommt nicht zustande.\n\nDer Geschäftsunfähige kann nur durch seinen gesetzlichen Vertreter handeln (§§ 1626 I, 1629 I BGB). Merke: Bote kann auch ein Geschäftsunfähiger sein."
    },

    e_111: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 111 S. 1 BGB",
      title: "Einseitiges Rechtsgeschäft unwirksam (–)",
      text: "Ein einseitiges Rechtsgeschäft, das der Minderjährige ohne die erforderliche vorherige Einwilligung vornimmt, ist unwirksam – endgültig, denn eine Genehmigung ist hier ausgeschlossen (Rechtssicherheit für den Empfänger)."
    },

    e_wirksam_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 2 BGB",
      title: "Volle Geschäftsfähigkeit – Geschäft wirksam (+)",
      text: "Die Person ist unbeschränkt geschäftsfähig; das Rechtsgeschäft scheitert nicht an den §§ 104 ff. BGB. Weiter mit den übrigen Wirksamkeitsvoraussetzungen (Form, Inhalt) im Grundschema."
    },

    e_wirksam_111: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 111 BGB",
      title: "Einseitiges Rechtsgeschäft wirksam (+)",
      text: "Mit vorheriger Einwilligung des gesetzlichen Vertreters ist auch das einseitige Rechtsgeschäft des Minderjährigen wirksam. Beachte § 111 S. 2, 3 BGB: Der Empfänger kann das Geschäft unverzüglich zurückweisen, wenn die Einwilligung nicht in schriftlicher Form vorgelegt wird."
    },

    e_wirksam_107: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 107 BGB",
      title: "Wirksam – lediglich rechtlich vorteilhaft (+)",
      text: "Das Geschäft ist ohne Zustimmung wirksam, weil der Minderjährige lediglich einen rechtlichen Vorteil erlangt (bzw. sein Vermögen nicht berührt wird).\n\nKlassiker (Abstraktionsprinzip!): Der Kaufvertrag des Minderjährigen ist ohne Zustimmung unwirksam, die Übereignung der Kaufsache AN ihn aber wirksam – lediglich rechtlich vorteilhaft. Rückabwicklung dann über §§ 812 ff. BGB."
    },

    e_wirksam_einwilligung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 107, 183 BGB",
      title: "Wirksam – Einwilligung liegt vor (+)",
      text: "Der Minderjährige hat mit vorheriger Zustimmung seines gesetzlichen Vertreters gehandelt; der Vertrag ist von Anfang an wirksam."
    },

    e_wirksam_110: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 110 BGB",
      title: "Wirksam – Bewirken mit eigenen Mitteln (+)",
      text: "Der Vertrag gilt als von Anfang an wirksam: Der Minderjährige hat die vertragsmäßige Leistung vollständig mit Mitteln bewirkt, die ihm zu diesem Zweck oder zu freier Verfügung überlassen waren („Taschengeldparagraf“)."
    },

    e_wirksam_genehmigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 108 I, 184 I BGB",
      title: "Wirksam – Genehmigung erteilt (+)",
      text: "Die Genehmigung beendet den Schwebezustand; der Vertrag ist rückwirkend auf den Zeitpunkt seiner Vornahme (ex tunc) wirksam (§ 184 I BGB)."
    },

    e_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 108 BGB",
      title: "Endgültig unwirksam – Genehmigung verweigert (–)",
      text: "Mit der Verweigerung (oder dem fruchtlosen Ablauf der Zwei-Wochen-Frist des § 108 II 2 BGB) ist der Vertrag endgültig unwirksam. Aus ihm können keine Rechte und Pflichten hergeleitet werden.\n\nBereits ausgetauschte Leistungen sind zurückabzuwickeln: Herausgabe nach § 985 BGB (soweit kein Eigentum übergegangen ist) bzw. nach §§ 812 ff. BGB."
    },

    e_widerrufen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 109 BGB",
      title: "Vertrag durch Widerruf beseitigt (–)",
      text: "Der Vertragspartner hat den schwebend unwirksamen Vertrag wirksam widerrufen; er ist damit endgültig unwirksam geworden."
    },

    e_schwebend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 108 I BGB",
      title: "Schwebende Unwirksamkeit dauert an",
      text: "Der Vertrag ist (noch) schwebend unwirksam. Handlungsmöglichkeiten: Genehmigung/Verweigerung durch den Vertreter, Aufforderung nach § 108 II BGB (Zwei-Wochen-Frist), Widerruf des Vertragspartners nach § 109 BGB.\n\nParallele merken: §§ 177–179 BGB (Vertreter ohne Vertretungsmacht) sind den §§ 108–111 BGB nachgebildet."
    }
  }
});
