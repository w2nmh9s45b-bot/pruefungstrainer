/*
 * Prüfungsschema: Anspruch aus Kaufvertrag, § 433 BGB – Grundschema der Anspruchsprüfung
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff, FS I) – Grundschema, WE, Angebot/Annahme, Zugang, Form
 *  - "Planungsstruktur PR FS I" (Vertragslehre)
 *  - Methodik: Modul 1 "Einführung in den Gutachtenstil"
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 104 ff., 125, 130, 133, 145 ff., 157, 214, 275, 320, 323, 362, 433)
 *
 * Stationen: agl → entstanden → hindernd → untergegangen → durchsetzbar → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-anspruch-grundschema",
  subject: "Privatrecht",
  area: "Vertragslehre / Anspruchsprüfung",
  title: "Anspruch aus Vertrag – Grundschema (z. B. § 433 BGB)",
  description: "Vollprüfung nach dem Grundschema: Anspruch entstanden (Einigung durch Angebot und Annahme, keine rechtshindernden Einwendungen) – nicht untergegangen (Erfüllung, Unmöglichkeit, Rücktritt) – durchsetzbar (Einreden).",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "agl", label: "Anspruchsgrundlage" },
    { id: "entstanden", label: "Anspruch entstanden" },
    { id: "hindernd", label: "Rechtshindernde Einwendungen" },
    { id: "untergegangen", label: "Nicht untergegangen" },
    { id: "durchsetzbar", label: "Durchsetzbar" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    /* ================= A. Anspruchsgrundlage ================= */

    start: {
      station: "agl",
      kind: "frage",
      norm: "§ 433 BGB",
      title: "Wer will was von wem woraus?",
      text: "Obersatz bilden: „A könnte gegen B einen Anspruch auf … aus § 433 Abs. 1 S. 1 BGB (Übergabe und Übereignung) bzw. § 433 Abs. 2 BGB (Kaufpreiszahlung) haben.“",
      def: "<b>Anspruch (§ 194 I BGB):</b> das Recht, von einem anderen ein Tun oder Unterlassen zu verlangen. <b>Grundschema:</b> I. Anspruch entstanden – II. Anspruch nicht untergegangen – III. Anspruch durchsetzbar.",
      hint: "Methodik aus Modul 1: Gutachtenstil – Obersatz, Definition, Subsumtion, Ergebnis. Anspruchsgrundlage immer vollständig zitieren.",
      options: [
        { label: "Anspruch des Verkäufers auf Kaufpreiszahlung", detail: "§ 433 II BGB", next: "q_angebot", tone: "neutral" },
        { label: "Anspruch des Käufers auf Übergabe und Übereignung", detail: "§ 433 I 1 BGB", next: "q_angebot", tone: "neutral" },
        { label: "Anspruch aus anderem Vertragstyp", detail: "z. B. Miete (§ 535), Werkvertrag (§ 631), Darlehen (§ 488) – Prüfung verläuft parallel", next: "q_angebot", tone: "neutral" }
      ]
    },

    /* ================= B. Anspruch entstanden: Einigung ================= */

    q_angebot: {
      station: "entstanden",
      kind: "frage",
      norm: "§ 145 BGB",
      title: "Liegt ein wirksames Angebot vor?",
      text: "Der Vertrag kommt durch zwei übereinstimmende Willenserklärungen zustande: Angebot (§ 145 BGB) und Annahme (§§ 147 ff. BGB).",
      def: "<b>Angebot:</b> empfangsbedürftige Willenserklärung, die alle wesentlichen Vertragsbestandteile (essentialia negotii) enthält und den Vertragsschluss so anträgt, dass das Zustandekommen nur noch vom Einverständnis des anderen abhängt. <b>Willenserklärung:</b> private Willensäußerung, die unmittelbar auf den Eintritt einer Rechtsfolge auf dem Gebiet des Privatrechts gerichtet ist – objektiver Tatbestand (Kundgabe eines Rechtsbindungswillens) + subjektiver Tatbestand (Handlungswille, Erklärungsbewusstsein, Geschäftswille).",
      options: [
        { label: "Ja, verbindliches Angebot", detail: "Alle essentialia negotii, Rechtsbindungswille nach objektivem Empfängerhorizont (§§ 133, 157 BGB)", next: "q_zugang_angebot", tone: "pos" },
        { label: "Nur invitatio ad offerendum", detail: "Schaufensterauslage, Katalog, Online-Shop-Anzeige – Aufforderung zur Abgabe von Angeboten ohne Rechtsbindungswillen", next: "q_invitatio", tone: "warn" },
        { label: "Offerte ad incertas personas", detail: "Warenautomat, Zapfsäule, Parkhaus – verbindliches Angebot an unbestimmten Personenkreis (begrenzt auf den Vorrat, § 158 I BGB)", next: "q_zugang_angebot", tone: "pos" },
        { label: "Nein, keine Willenserklärung", detail: "z. B. reine Gefälligkeit ohne Rechtsbindungswillen", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_invitatio: {
      station: "entstanden",
      kind: "frage",
      norm: "§§ 133, 157 BGB",
      title: "Hat dann der Kunde das Angebot abgegeben?",
      text: "Bei der invitatio ad offerendum gibt erst der Kunde das Angebot ab (z. B. Vorlegen der Ware an der Kasse); der Verkäufer nimmt an. Maßgeblich ist die Auslegung nach dem objektiven Empfängerhorizont.",
      options: [
        { label: "Ja, Kunde gibt Angebot ab", next: "q_zugang_angebot", tone: "pos" },
        { label: "Nein, es fehlt an einem Angebot", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_zugang_angebot: {
      station: "entstanden",
      kind: "frage",
      norm: "§ 130 I BGB",
      title: "Ist das Angebot wirksam geworden (Abgabe und Zugang)?",
      text: "Eine empfangsbedürftige Willenserklärung unter Abwesenden wird wirksam, wenn sie mit Wissen und Wollen des Erklärenden in den Rechtsverkehr gebracht (Abgabe) und dem Empfänger zugegangen ist.",
      def: "<b>Zugang:</b> Die Erklärung ist so in den Machtbereich des Empfängers gelangt, dass dieser unter gewöhnlichen Umständen von ihr Kenntnis nehmen kann. Widerruf möglich, wenn er vorher oder gleichzeitig zugeht (§ 130 I 2 BGB).",
      options: [
        { label: "Ja, abgegeben und zugegangen", next: "q_annahme", tone: "pos" },
        { label: "Unter Anwesenden abgegeben", detail: "Zugang mit Vernehmung (Vernehmungstheorie) – regelmäßig unproblematisch", next: "q_annahme", tone: "pos" },
        { label: "Nein, nicht zugegangen oder rechtzeitig widerrufen", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_annahme: {
      station: "entstanden",
      kind: "frage",
      norm: "§§ 147 ff. BGB",
      title: "Wurde das Angebot wirksam angenommen?",
      text: "Die Annahme ist die vorbehaltlose Einverständniserklärung mit dem Angebot. Unter Anwesenden kann das Angebot nur sofort angenommen werden (§ 147 I BGB), unter Abwesenden bis zu dem Zeitpunkt, in dem der Antragende den Eingang der Antwort unter regelmäßigen Umständen erwarten darf (§ 147 II BGB).",
      def: "<b>Verspätete oder abändernde Annahme (§ 150 BGB):</b> gilt als Ablehnung verbunden mit neuem Antrag. <b>§ 151 BGB:</b> Zugang der Annahmeerklärung entbehrlich, wenn nach der Verkehrssitte nicht zu erwarten oder darauf verzichtet wurde – die Annahme selbst (Annahmewille) bleibt erforderlich.",
      options: [
        { label: "Ja, rechtzeitig und inhaltsgleich angenommen", next: "q_konsens", tone: "pos" },
        { label: "Annahme verspätet oder mit Änderungen", detail: "§ 150 BGB: neuer Antrag – wurde dieser angenommen?", next: "q_annahme150", tone: "warn" },
        { label: "Nein, Angebot abgelehnt oder erloschen (§ 146 BGB)", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_annahme150: {
      station: "entstanden",
      kind: "frage",
      norm: "§ 150 BGB",
      title: "Wurde der neue Antrag (§ 150 BGB) angenommen?",
      text: "Die verspätete (§ 150 I) oder abändernde (§ 150 II) Annahme gilt als neues Angebot, das seinerseits der Annahme bedarf.",
      options: [
        { label: "Ja, der ursprünglich Antragende nimmt an", next: "q_konsens", tone: "pos" },
        { label: "Nein", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_konsens: {
      station: "entstanden",
      kind: "frage",
      norm: "§§ 133, 157 BGB",
      title: "Decken sich Angebot und Annahme (Konsens)?",
      text: "Die Erklärungen müssen sich inhaltlich decken. Der Inhalt ist durch Auslegung nach dem objektiven Empfängerhorizont zu ermitteln (§§ 133, 157 BGB): Wie durfte ein verständiger Empfänger die Erklärung nach Treu und Glauben mit Rücksicht auf die Verkehrssitte verstehen?",
      options: [
        { label: "Ja, Konsens – Einigung liegt vor", detail: "Zwischenergebnis: Ein Vertrag ist zustande gekommen. ✓", next: "q_stellvertretung", tone: "pos" },
        { label: "Nein, versteckter Dissens (§ 155 BGB)", detail: "Bei fehlender Einigung über wesentliche Punkte kein Vertrag", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_stellvertretung: {
      station: "entstanden",
      kind: "frage",
      norm: "§ 164 BGB",
      title: "Hat eine Partei durch einen Stellvertreter gehandelt?",
      text: "Handelt ein Dritter, wirkt seine Willenserklärung nur bei wirksamer Stellvertretung (§ 164 I 1 BGB) für und gegen den Vertretenen.",
      options: [
        { label: "Nein, beide handelten selbst", next: "q_geschaeftsfaehig", tone: "neutral" },
        { label: "Ja – Stellvertretung wirksam", detail: "Eigene WE, im fremden Namen, mit Vertretungsmacht (Detailprüfung: eigenes Schema „Stellvertretung“)", next: "q_geschaeftsfaehig", tone: "pos" },
        { label: "Ja – Vertreter ohne Vertretungsmacht", detail: "§ 177 I BGB: Vertrag schwebend unwirksam, Genehmigung?", next: "q_falsus", tone: "warn" }
      ]
    },

    q_falsus: {
      station: "entstanden",
      kind: "frage",
      norm: "§ 177 I BGB",
      title: "Hat der Vertretene das Geschäft genehmigt?",
      text: "Beim Handeln ohne Vertretungsmacht hängt die Wirksamkeit des Vertrags von der Genehmigung des Vertretenen ab (§ 177 I BGB; Genehmigung = nachträgliche Zustimmung, § 184 I BGB, wirkt ex tunc).",
      options: [
        { label: "Ja, genehmigt", next: "q_geschaeftsfaehig", tone: "pos" },
        { label: "Nein, Genehmigung verweigert oder Frist des § 177 II BGB abgelaufen", detail: "Denke an die Haftung des falsus procurator, § 179 BGB (eigenes Schema „Stellvertretung“)", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    /* ================= C. Rechtshindernde Einwendungen ================= */

    q_geschaeftsfaehig: {
      station: "hindernd",
      kind: "frage",
      norm: "§§ 104 ff. BGB",
      title: "Sind beide Parteien (voll) geschäftsfähig?",
      text: "Rechtshindernde Einwendungen verhindern, dass der Anspruch wirksam entsteht – zu prüfen sind insbesondere Geschäftsunfähigkeit (§ 105 BGB) und beschränkte Geschäftsfähigkeit (§§ 106 ff. BGB).",
      options: [
        { label: "Ja, beide voll geschäftsfähig", detail: "Natürliche Personen ab vollendetem 18. Lebensjahr (§ 2 BGB)", next: "q_form", tone: "pos" },
        { label: "Eine Partei ist geschäftsunfähig (§ 104 BGB)", detail: "Kind unter 7 Jahren oder dauerhaft Geisteskranker – WE nichtig, § 105 I BGB", next: "e_nichtig_105", tone: "neg" },
        { label: "Eine Partei ist minderjährig (7–17 Jahre, § 106 BGB)", detail: "Wirksamkeit nach §§ 107 ff. BGB – Detailprüfung im Schema „Geschäftsfähigkeit“", next: "q_minderjaehrig", tone: "warn" }
      ]
    },

    q_minderjaehrig: {
      station: "hindernd",
      kind: "frage",
      norm: "§§ 107, 108, 110 BGB",
      title: "Ist das Geschäft des Minderjährigen wirksam?",
      text: "Wirksam, wenn (1) lediglich rechtlich vorteilhaft (§ 107 BGB), (2) mit Einwilligung des gesetzlichen Vertreters (§§ 107, 183 BGB), (3) durch Bewirken mit überlassenen Mitteln (§ 110 BGB – „Taschengeldparagraf“) oder (4) nach Genehmigung (§ 108 I BGB).",
      options: [
        { label: "Ja, wirksam", detail: "Einwilligung, § 110 BGB oder Genehmigung liegt vor", next: "q_form", tone: "pos" },
        { label: "Nein, Genehmigung verweigert", detail: "Vertrag endgültig unwirksam, § 108 I BGB", next: "e_nichtig_108", tone: "neg" },
        { label: "Schwebend unwirksam", detail: "Genehmigung steht noch aus, § 108 I BGB", next: "e_schwebend", tone: "warn" }
      ]
    },

    q_form: {
      station: "hindernd",
      kind: "frage",
      norm: "§ 125 BGB",
      title: "Ist eine Formvorschrift verletzt?",
      text: "Grundsatz: Rechtsgeschäfte sind formfrei gültig. Ein Rechtsgeschäft, das der gesetzlich vorgeschriebenen Form ermangelt, ist nichtig (§ 125 S. 1 BGB).",
      def: "<b>Wichtige Formvorschriften:</b> notarielle Beurkundung bei Grundstückskaufverträgen (§ 311b I 1 BGB, Heilung nach § 311b I 2 BGB durch Auflassung und Eintragung) · Schriftform beim Schenkungsversprechen (§ 518 I BGB) und der Bürgschaftserklärung (§ 766 S. 1 BGB) · Kündigung des Arbeitsverhältnisses (§ 623 BGB). Formzwecke: Warn-, Beratungs- und Beweisfunktion.",
      options: [
        { label: "Keine Form erforderlich oder Form gewahrt", next: "q_weitere_hindernisse", tone: "pos" },
        { label: "Formmangel, aber Heilung", detail: "z. B. § 311b I 2 BGB: Auflassung + Eintragung heilen den nicht beurkundeten Grundstückskauf", next: "q_weitere_hindernisse", tone: "warn" },
        { label: "Formmangel ohne Heilung", next: "e_nichtig_125", tone: "neg" }
      ]
    },

    q_weitere_hindernisse: {
      station: "hindernd",
      kind: "frage",
      norm: "§§ 134, 138, 142 BGB",
      title: "Bestehen sonstige Nichtigkeitsgründe?",
      text: "Zwischenergebnis: Der Anspruch ist wirksam entstanden, wenn auch keine sonstigen rechtshindernden Einwendungen greifen.",
      def: "<b>Beispiele:</b> Verstoß gegen ein gesetzliches Verbot (§ 134 BGB) · Sittenwidrigkeit/Wucher (§ 138 BGB) · Anfechtung mit Rückwirkung (§ 142 I BGB) · Scheingeschäft (§ 117 BGB), Scherzerklärung (§ 118 BGB).",
      options: [
        { label: "Nein – Anspruch entstanden ✓", next: "q_erfuellung", tone: "pos" },
        { label: "Ja, das Geschäft ist nichtig", next: "e_nichtig_sonst", tone: "neg" }
      ]
    },

    /* ================= D. Anspruch nicht untergegangen ================= */

    q_erfuellung: {
      station: "untergegangen",
      kind: "frage",
      norm: "§ 362 I BGB",
      title: "Ist der Anspruch durch Erfüllung erloschen?",
      text: "Das Schuldverhältnis erlischt, wenn die geschuldete Leistung an den Gläubiger bewirkt wird (§ 362 I BGB). Erfüllungssurrogate: Aufrechnung (§§ 387 ff. BGB), Hinterlegung (§§ 372 ff. BGB), Leistung an Erfüllungs statt (§ 364 BGB).",
      hint: "Achtung bei Leistung an beschränkt Geschäftsfähige: fehlende Empfangszuständigkeit – Erfüllung tritt nicht ein (Leistung muss an den gesetzlichen Vertreter erfolgen).",
      options: [
        { label: "Nein, noch nicht erfüllt", next: "q_unmoeglich", tone: "pos" },
        { label: "Ja, Leistung bewirkt", next: "e_erloschen_362", tone: "neg" }
      ]
    },

    q_unmoeglich: {
      station: "untergegangen",
      kind: "frage",
      norm: "§ 275 I BGB",
      title: "Ist die Leistung unmöglich geworden?",
      text: "Der Anspruch auf die Leistung ist ausgeschlossen, soweit diese für den Schuldner oder für jedermann unmöglich ist (§ 275 I BGB) – Detailprüfung im Schema „Unmöglichkeit und Gegenleistung“ (FS 2).",
      options: [
        { label: "Nein, Leistung weiterhin möglich", next: "q_ruecktritt", tone: "pos" },
        { label: "Ja, unmöglich (§ 275 I BGB)", detail: "Leistungspflicht erlischt ipso iure; Folgen für die Gegenleistung: § 326 BGB; Schadensersatz: §§ 280 I, III, 283 BGB", next: "e_erloschen_275", tone: "neg" }
      ]
    },

    q_ruecktritt: {
      station: "untergegangen",
      kind: "frage",
      norm: "§§ 346, 323 ff. BGB",
      title: "Wurde der Vertrag durch Rücktritt (oder Widerruf) umgestaltet?",
      text: "Durch wirksamen Rücktritt wandelt sich der Vertrag in ein Rückgewährschuldverhältnis um (§ 346 I BGB); die primären Leistungspflichten erlöschen. Bei Verbraucherverträgen im Fernabsatz: Widerruf (§§ 312g, 355 BGB).",
      options: [
        { label: "Nein", next: "q_zbr", tone: "pos" },
        { label: "Ja, wirksamer Rücktritt/Widerruf", next: "e_erloschen_ruecktritt", tone: "neg" }
      ]
    },

    /* ================= E. Durchsetzbarkeit ================= */

    q_zbr: {
      station: "durchsetzbar",
      kind: "frage",
      norm: "§§ 273, 320 BGB",
      title: "Werden Zurückbehaltungsrechte geltend gemacht?",
      text: "Zwischenergebnis: Der Anspruch ist nicht untergegangen. ✓\n\nRechtshemmende Einreden stehen der Durchsetzbarkeit entgegen: Einrede des nichterfüllten Vertrags (§ 320 BGB) beim gegenseitigen Vertrag, allgemeines Zurückbehaltungsrecht (§ 273 BGB).",
      options: [
        { label: "Nein", next: "q_verjaehrung", tone: "pos" },
        { label: "Ja, § 320 BGB", detail: "Leistung nur Zug um Zug (§ 322 BGB)", next: "e_zugumzug", tone: "warn" }
      ]
    },

    q_verjaehrung: {
      station: "durchsetzbar",
      kind: "frage",
      norm: "§ 214 I BGB",
      title: "Ist der Anspruch verjährt und wird die Einrede erhoben?",
      text: "Nach Eintritt der Verjährung ist der Schuldner berechtigt, die Leistung zu verweigern (§ 214 I BGB). Regelmäßige Verjährungsfrist: 3 Jahre (§ 195 BGB), Beginn mit Schluss des Entstehungsjahres bei Kenntnis (§ 199 I BGB). Detailprüfung: Schema „Verjährung“.",
      hint: "Die Verjährung wird nicht von Amts wegen beachtet – sie muss als Einrede erhoben werden!",
      options: [
        { label: "Nein, nicht verjährt oder Einrede nicht erhoben", next: "e_anspruch_besteht", tone: "pos" },
        { label: "Ja, verjährt und Einrede erhoben", next: "e_verjaehrt", tone: "neg" }
      ]
    },

    /* ================= F. Ergebnisse ================= */

    e_anspruch_besteht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 433 BGB",
      title: "Anspruch besteht und ist durchsetzbar (+)",
      text: "Der Anspruch ist wirksam entstanden, nicht untergegangen und durchsetzbar. Ergebnissatz im Gutachtenstil: „A hat gegen B einen Anspruch auf … aus § 433 … BGB.“"
    },

    e_kein_vertrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 145 ff. BGB",
      title: "Kein Anspruch – Vertrag nicht zustande gekommen (–)",
      text: "Es fehlt an zwei übereinstimmenden, wirksam gewordenen Willenserklärungen (Angebot und Annahme). Der Anspruch ist nicht entstanden.\n\nDenkbar bleiben gesetzliche Ansprüche (z. B. §§ 812 ff., 823 ff., 985 BGB), wenn bereits geleistet wurde."
    },

    e_nichtig_105: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 105 I BGB",
      title: "Kein Anspruch – Willenserklärung nichtig (–)",
      text: "Die Willenserklärung eines Geschäftsunfähigen ist nichtig (§ 105 I BGB); gleiches gilt für Erklärungen im Zustand der Bewusstlosigkeit oder vorübergehender Störung der Geistestätigkeit (§ 105 II BGB). Der Vertrag ist unwirksam – der Anspruch nicht entstanden.\n\nBei bereits erbrachten Leistungen: Rückabwicklung über §§ 985, 812 ff. BGB (Abstraktionsprinzip beachten!)."
    },

    e_nichtig_108: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 108 I BGB",
      title: "Kein Anspruch – Genehmigung verweigert (–)",
      text: "Der ohne die erforderliche Einwilligung geschlossene Vertrag des Minderjährigen ist nach Verweigerung der Genehmigung endgültig unwirksam. Der Anspruch ist nicht entstanden.\n\nRückabwicklung bereits erbrachter Leistungen über §§ 985, 812 ff. BGB (Übereignung an den Minderjährigen bleibt als lediglich rechtlich vorteilhaftes Geschäft wirksam – Abstraktionsprinzip)."
    },

    e_schwebend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 108 I BGB",
      title: "Schwebende Unwirksamkeit – Anspruch (noch) nicht entstanden",
      text: "Der Vertrag ist schwebend unwirksam; seine Wirksamkeit hängt von der Genehmigung des gesetzlichen Vertreters ab. Der Vertragspartner kann zur Genehmigung auffordern (§ 108 II BGB – Fiktion der Verweigerung nach zwei Wochen) oder bis zur Genehmigung widerrufen (§ 109 BGB)."
    },

    e_nichtig_125: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 125 S. 1 BGB",
      title: "Kein Anspruch – Nichtigkeit wegen Formmangels (–)",
      text: "Das Rechtsgeschäft ist wegen Verstoßes gegen die gesetzlich vorgeschriebene Form nichtig (§ 125 S. 1 BGB). Der Anspruch ist nicht entstanden.\n\nAusnahme prüfen: Heilung (z. B. § 311b I 2 BGB beim Grundstückskauf durch Auflassung und Eintragung; § 518 II BGB bei der Schenkung durch Bewirken der Leistung)."
    },

    e_nichtig_sonst: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 134, 138, 142 BGB",
      title: "Kein Anspruch – Rechtsgeschäft nichtig (–)",
      text: "Das Rechtsgeschäft ist nichtig (z. B. Verbotsgesetz, Sittenwidrigkeit oder rückwirkende Vernichtung durch Anfechtung, § 142 I BGB). Der Anspruch ist nicht entstanden. Rückabwicklung über §§ 812 ff. BGB."
    },

    e_erloschen_362: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 362 I BGB",
      title: "Anspruch erloschen – Erfüllung (–)",
      text: "Der Anspruch ist durch Bewirken der geschuldeten Leistung erloschen (rechtsvernichtende Einwendung). Die Prüfung endet hier."
    },

    e_erloschen_275: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 275 I BGB",
      title: "Anspruch erloschen – Unmöglichkeit (–)",
      text: "Die Leistungspflicht ist nach § 275 I BGB ausgeschlossen (rechtsvernichtende Einwendung).\n\nWeiter prüfen (FS 2): Schicksal der Gegenleistung (§ 326 I BGB), Rücktritt (§ 326 V BGB) und Schadensersatz statt der Leistung (§§ 280 I, III, 283 BGB) – siehe die Schemata „Unmöglichkeit und Gegenleistung“ und „Schadensersatz nach §§ 280 ff.“."
    },

    e_erloschen_ruecktritt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 346 I BGB",
      title: "Anspruch erloschen – Rücktritt/Widerruf (–)",
      text: "Durch die Umgestaltung des Vertrags in ein Rückgewährschuldverhältnis sind die primären Leistungspflichten erloschen. Empfangene Leistungen sind zurückzugewähren (§ 346 I BGB)."
    },

    e_zugumzug: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 320, 322 BGB",
      title: "Anspruch besteht – aber nur Zug um Zug durchsetzbar",
      text: "Der Anspruch ist entstanden und nicht untergegangen; wegen der Einrede des nichterfüllten Vertrags ist der Schuldner aber nur zur Leistung Zug um Zug gegen Bewirken der Gegenleistung zu verurteilen (§ 322 I BGB)."
    },

    e_verjaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 214 I BGB",
      title: "Anspruch nicht durchsetzbar – Verjährung (–)",
      text: "Der Anspruch besteht zwar, ist aber wegen der erhobenen Einrede der Verjährung nicht durchsetzbar. Der Schuldner darf die Leistung verweigern (§ 214 I BGB).\n\nMerke: Bereits Geleistetes kann trotz Verjährung nicht zurückgefordert werden (§ 214 II BGB)."
    }
  }
});
