/*
 * Prüfungsschema: Unerlaubte Handlung, § 823 I BGB (und § 831 BGB) mit Schadensumfang §§ 249 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff, FS I) – Schema § 823 I (Folie 340),
 *    Rechtsfolge/Prüfungsreihenfolge Schaden (Folie 377 f.), Schema § 831 (Folie 387)
 *  - "Planungsstruktur PR FS I" – Unerlaubte Handlung, Art und Umfang des Schadensersatzes
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 249–254, 276, 823, 827, 828, 831, 842 ff.)
 *
 * Stationen: agl → tatbestand → rechtswidrigkeit → verschulden → schaden → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-delikt-823",
  subject: "Privatrecht",
  area: "Unerlaubte Handlung",
  title: "Unerlaubte Handlung, § 823 I BGB (+ § 831 BGB)",
  description: "Rechtsgutsverletzung, Verletzungshandlung, haftungsbegründende Kausalität, Rechtswidrigkeit und Verschulden – mit Rechtsfolge (Schaden, haftungsausfüllende Kausalität, §§ 249 ff. BGB, Mitverschulden) und der Haftung für Verrichtungsgehilfen (§ 831 BGB).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "agl", label: "Anspruchsgrundlage" },
    { id: "tatbestand", label: "Tatbestand" },
    { id: "rechtswidrigkeit", label: "Rechtswidrigkeit" },
    { id: "verschulden", label: "Verschulden" },
    { id: "schaden", label: "Schaden (§§ 249 ff.)" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "agl",
      kind: "frage",
      norm: "§§ 823 I, 831 BGB",
      title: "Wer hat gehandelt – der Anspruchsgegner selbst oder sein Gehilfe?",
      text: "Das Deliktsrecht regelt den Ausgleich widerrechtlich zugefügter Schäden. Grundsatz: „casum sentit dominus“ – für zufällige Schäden steht jeder selbst ein; Haftung setzt Zurechnung (v. a. Verschulden) voraus.",
      def: "<b>Wichtig:</b> Vertragliche Ansprüche stets VOR den deliktischen prüfen (vertragliche Haftungsmilderungen wie § 599 BGB können durchschlagen). Gefährdungshaftung (Tierhalter § 833 BGB, Kfz-Halter § 7 StVG, ProdHaftG) ist die Ausnahme.",
      options: [
        { label: "Anspruchsgegner handelte selbst", detail: "§ 823 I BGB", next: "q_rgv", tone: "neutral" },
        { label: "Ein weisungsgebundener Gehilfe handelte", detail: "§ 831 BGB – Haftung des Geschäftsherrn für vermutetes eigenes Verschulden", next: "q_831_gehilfe", set: { agl831: true }, tone: "neutral" }
      ]
    },

    /* ================= § 823 I: Tatbestand ================= */

    q_rgv: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 823 I BGB",
      title: "Wurde ein geschütztes Rechtsgut verletzt?",
      text: "Geschützt sind Leben, Körper, Gesundheit, Freiheit, Eigentum und „sonstige Rechte“ (absolute Rechte, z. B. Besitz, APR, Recht am eingerichteten und ausgeübten Gewerbebetrieb).",
      def: "<b>Kein Schutz des bloßen Vermögens!</b> Reine Vermögensschäden sind über § 823 I BGB nicht ersatzfähig (dafür: § 823 II BGB i. V. m. Schutzgesetz oder § 826 BGB). <b>Mittelbar Geschädigte</b> (z. B. der Veranstalter, dessen Star verletzt wurde) haben grundsätzlich keinen eigenen Deliktsanspruch – mittelbare RECHTSGUTSverletzungen sind dagegen ersatzfähig.",
      options: [
        { label: "Ja, Rechtsgut aus dem Katalog verletzt", next: "q_handlung", tone: "pos" },
        { label: "Sonstiges (absolutes) Recht verletzt", next: "q_handlung", tone: "pos" },
        { label: "Nein, nur reiner Vermögensschaden", next: "e_vermoegen", tone: "neg" }
      ]
    },

    q_handlung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 823 I BGB",
      title: "Liegt eine Verletzungshandlung vor?",
      text: "Verletzungshandlung ist positives Tun oder Unterlassen. Beim Unterlassen ist eine Rechtspflicht zum Handeln erforderlich – praktisch wichtig: die Verkehrssicherungspflicht.",
      def: "<b>Verkehrssicherungspflicht:</b> Wer eine Gefahrenquelle schafft oder unterhält (Grundstück, Baustelle, Streupflicht), muss die notwendigen und zumutbaren Vorkehrungen zum Schutz Dritter treffen.",
      options: [
        { label: "Positives Tun", next: "q_kausal", tone: "pos" },
        { label: "Unterlassen trotz Verkehrssicherungspflicht", next: "q_kausal", tone: "pos" },
        { label: "Keine zurechenbare Handlung", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_kausal: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 823 I BGB",
      title: "Haftungsbegründende Kausalität gegeben?",
      text: "Die Handlung muss die Rechtsgutsverletzung verursacht haben – dreistufig prüfen:",
      def: "<b>(a) Äquivalenz:</b> conditio sine qua non – die Handlung kann nicht hinweggedacht werden, ohne dass die Verletzung entfiele. <b>(b) Adäquanz:</b> Das Verhalten ist unter gewöhnlichen Umständen geeignet, die Verletzung herbeizuführen (keine völlig atypischen Verläufe). <b>(c) Schutzzweck der Norm:</b> Es hat sich gerade die Gefahr verwirklicht, vor der die verletzte Verhaltenspflicht schützen sollte.",
      options: [
        { label: "Ja, alle drei Stufen (+)", next: "q_rechtswidrig", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_rechtswidrig: {
      station: "rechtswidrigkeit",
      kind: "frage",
      norm: "§ 823 I BGB",
      title: "Ist die Verletzung rechtswidrig?",
      text: "Bei unmittelbaren Verletzungen durch positives Tun indiziert die Tatbestandsmäßigkeit die Rechtswidrigkeit. Sie entfällt nur bei Rechtfertigungsgründen.",
      def: "<b>Rechtfertigungsgründe:</b> Notwehr (§ 227 BGB), Verteidigungs-/Angriffsnotstand (§§ 228, 904 BGB), Einwilligung (z. B. beim sportlichen Wettkampf), Selbsthilfe (§ 229 BGB).",
      options: [
        { label: "Ja, kein Rechtfertigungsgrund", next: "q_verschuldensfaehig", tone: "pos" },
        { label: "Nein, gerechtfertigt", next: "e_gerechtfertigt", tone: "neg" }
      ]
    },

    q_verschuldensfaehig: {
      station: "verschulden",
      kind: "frage",
      norm: "§§ 827, 828 BGB",
      title: "Ist der Schädiger verschuldensfähig (deliktsfähig)?",
      def: "<b>§ 828 BGB:</b> Unter 7 Jahren nicht verantwortlich (I); 7–9 Jahre im motorisierten Straßenverkehr nur bei Vorsatz (II); 7–17 Jahre verantwortlich, wenn die zur Erkenntnis der Verantwortlichkeit erforderliche Einsicht vorhanden ist (III). <b>§ 827 BGB:</b> keine Verantwortung bei Bewusstlosigkeit oder krankhafter Störung der Geistestätigkeit.",
      options: [
        { label: "Ja, verschuldensfähig", next: "q_verschulden", tone: "pos" },
        { label: "Nein", detail: "Ggf. Billigkeitshaftung § 829 BGB, Aufsichtspflichtige § 832 BGB", next: "e_nicht_faehig", tone: "neg" }
      ]
    },

    q_verschulden: {
      station: "verschulden",
      kind: "frage",
      norm: "§ 276 BGB",
      title: "Handelte der Schädiger vorsätzlich oder fahrlässig?",
      def: "<b>Vorsatz:</b> Wissen und Wollen des rechtswidrigen Erfolgs. <b>Fahrlässigkeit (§ 276 II BGB):</b> Außerachtlassen der im Verkehr erforderlichen Sorgfalt – objektiver Maßstab.",
      options: [
        { label: "Ja, Vorsatz oder Fahrlässigkeit", next: "@schaden", tone: "pos" },
        { label: "Nein, kein Verschulden", next: "e_kein_verschulden", tone: "neg" }
      ]
    },

    /* ================= § 831 ================= */

    q_831_gehilfe: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 831 I 1 BGB",
      title: "Ist der Handelnde Verrichtungsgehilfe?",
      def: "<b>Verrichtungsgehilfe:</b> wer im Interesse des Geschäftsherrn, mit dessen Wissen und Wollen tätig wird und dabei WEISUNGSGEBUNDEN ist (Tätigkeit kann jederzeit beschränkt, entzogen oder nach Zeit und Umfang bestimmt werden). Typisch: Arbeitnehmer. Selbstständige Unternehmer sind keine Verrichtungsgehilfen!",
      options: [
        { label: "Ja, weisungsgebundener Gehilfe", next: "q_831_delikt", tone: "pos" },
        { label: "Nein, selbstständig tätig", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_831_delikt: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 831 I 1 BGB",
      title: "Hat der Gehilfe den objektiven Tatbestand einer unerlaubten Handlung erfüllt?",
      text: "Der Gehilfe muss rechtswidrig einen Tatbestand der §§ 823 ff. BGB verwirklicht haben – sein VERSCHULDEN ist nicht erforderlich (die Haftung des Geschäftsherrn beruht auf vermutetem eigenem Auswahl-/Überwachungsverschulden).",
      options: [
        { label: "Ja", next: "q_831_ausuebung", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_831_ausuebung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 831 I 1 BGB",
      title: "Geschah die Handlung „in Ausführung der Verrichtung“?",
      text: "Erforderlich ist ein innerer sachlicher Zusammenhang mit der übertragenen Tätigkeit – nicht nur „bei Gelegenheit“ der Verrichtung.",
      options: [
        { label: "Ja, in Ausführung der Verrichtung", next: "q_831_exkulpation", tone: "pos" },
        { label: "Nein, nur bei Gelegenheit", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_831_exkulpation: {
      station: "verschulden",
      kind: "frage",
      norm: "§ 831 I 2 BGB",
      title: "Kann sich der Geschäftsherr exkulpieren?",
      text: "Die Ersatzpflicht tritt nicht ein, wenn der Geschäftsherr bei der Auswahl (und ggf. Ausstattung/Überwachung) des Gehilfen die im Verkehr erforderliche Sorgfalt beachtet hat oder der Schaden auch bei Anwendung dieser Sorgfalt entstanden wäre.",
      options: [
        { label: "Keine Exkulpation – Haftung", next: "@schaden", tone: "pos" },
        { label: "Exkulpationsbeweis gelingt", next: "e_exkulpiert", tone: "neg" }
      ]
    },

    /* ================= Rechtsfolge: Schaden ================= */

    q_schaden: {
      station: "schaden",
      kind: "frage",
      norm: "§§ 249 ff. BGB",
      title: "Liegt ein ersatzfähiger Schaden vor?",
      text: "Rechtsfolge („haftungsausfüllender Tatbestand“): (1) Schaden, (2) haftungsausfüllende Kausalität zwischen Rechtsgutsverletzung und Schaden, (3) Art und Umfang (§§ 249 ff. BGB), (4) ggf. Mitverschulden (§ 254 BGB).",
      def: "<b>Schaden:</b> jede unfreiwillige Einbuße an rechtlich geschützten Gütern. <b>Differenzhypothese:</b> Vergleich der tatsächlichen Vermögenslage mit der hypothetischen ohne das schädigende Ereignis – der Geschädigte ist so zu stellen, als wäre es nie eingetreten.",
      options: [
        { label: "Ja, Schaden feststellbar", next: "q_ausfuellend", tone: "pos" },
        { label: "Nein, keine Einbuße", next: "e_kein_schaden", tone: "neg" }
      ]
    },

    q_ausfuellend: {
      station: "schaden",
      kind: "frage",
      norm: "§§ 249 ff. BGB",
      title: "Haftungsausfüllende Kausalität und Umfang?",
      text: "Der Schaden muss adäquat kausal auf der Rechtsgutsverletzung beruhen. Umfang: Naturalrestitution (§ 249 I BGB) bzw. der dazu erforderliche Geldbetrag (§ 249 II BGB, z. B. Heilbehandlungs- und Reparaturkosten); entgangener Gewinn (§ 252 BGB, z. B. Verdienstausfall); Schmerzensgeld bei Verletzung von Körper, Gesundheit, Freiheit oder sexueller Selbstbestimmung (§ 253 II BGB); Erwerbsschäden (§§ 842 ff. BGB).",
      options: [
        { label: "Kausalität und Umfang geklärt", next: "q_mitverschulden", tone: "pos" },
        { label: "Schaden beruht nicht auf der Verletzung", next: "e_kein_schaden", tone: "neg" }
      ]
    },

    q_mitverschulden: {
      station: "schaden",
      kind: "frage",
      norm: "§ 254 BGB",
      title: "Trifft den Geschädigten ein Mitverschulden?",
      text: "Hat bei der Entstehung des Schadens ein Verschulden des Geschädigten mitgewirkt, hängen Verpflichtung und Umfang des Ersatzes von den Umständen ab – Abwägung der Verursachungs- und Verschuldensanteile (§ 254 I BGB); auch die Verletzung der Schadensminderungspflicht zählt (§ 254 II BGB).",
      options: [
        { label: "Nein, kein Mitverschulden", next: "@ergebnis_pos", tone: "pos" },
        { label: "Ja – Anspruch ist zu kürzen", next: "@ergebnis_quote", set: { quote: true }, tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch_823: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 823 I BGB",
      title: "Schadensersatzanspruch aus § 823 I BGB (+)",
      text: "Tatbestand, Rechtswidrigkeit und Verschulden liegen vor; der adäquat kausale Schaden ist nach §§ 249 ff. BGB zu ersetzen (Heilbehandlungskosten § 249 II, Verdienstausfall § 252, ggf. Schmerzensgeld § 253 II BGB)."
    },

    e_anspruch_831: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 831 I 1 BGB",
      title: "Schadensersatzanspruch gegen den Geschäftsherrn (+)",
      text: "Der Geschäftsherr haftet für den durch seinen Verrichtungsgehilfen in Ausführung der Verrichtung rechtswidrig verursachten Schaden – eigene Haftung für vermutetes Auswahl- und Überwachungsverschulden. Der Umfang richtet sich nach §§ 249 ff. BGB."
    },

    e_anspruch_quote: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 254 BGB",
      title: "Anspruch besteht – gekürzt um Mitverschulden",
      text: "Der Schadensersatzanspruch besteht dem Grunde nach, ist aber nach der Abwägung der beiderseitigen Verursachungs- und Verschuldensanteile zu quoteln (§ 254 BGB)."
    },

    e_vermoegen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 823 I BGB",
      title: "Kein Anspruch – reiner Vermögensschaden (–)",
      text: "§ 823 I BGB schützt das Vermögen als solches nicht. Der mittelbar Geschädigte hat grundsätzlich keinen Deliktsanspruch (sonst uferlose Haftung).\n\nZu prüfen bleiben: § 823 II BGB i. V. m. einem Schutzgesetz (z. B. §§ 263, 303 StGB) und § 826 BGB (vorsätzliche sittenwidrige Schädigung)."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 823, 831 BGB",
      title: "Kein Schadensersatzanspruch (–)",
      text: "Der Tatbestand der unerlaubten Handlung ist nicht erfüllt (fehlende Handlung, Kausalität oder Gehilfeneigenschaft). Ggf. andere Anspruchsgrundlagen prüfen (Vertrag, Gefährdungshaftung)."
    },

    e_gerechtfertigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 227 ff. BGB",
      title: "Kein Anspruch – Verletzung gerechtfertigt (–)",
      text: "Ein Rechtfertigungsgrund (Notwehr, Notstand, Einwilligung) schließt die Rechtswidrigkeit aus. Beachte: Beim Angriffsnotstand (§ 904 BGB) besteht trotz Rechtmäßigkeit ein Ersatzanspruch des Eigentümers (§ 904 S. 2 BGB)."
    },

    e_nicht_faehig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 827, 828 BGB",
      title: "Kein Anspruch gegen den Schädiger – nicht deliktsfähig (–)",
      text: "Der Schädiger ist nicht verantwortlich. Ausweichmöglichkeiten: Haftung des Aufsichtspflichtigen (§ 832 BGB) und die Billigkeitshaftung des Schädigers (§ 829 BGB)."
    },

    e_kein_verschulden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 276 BGB",
      title: "Kein Anspruch – kein Verschulden (–)",
      text: "Ohne Vorsatz oder Fahrlässigkeit keine Haftung aus § 823 I BGB („casum sentit dominus“ – das allgemeine Lebensrisiko trägt jeder selbst). Ggf. Gefährdungshaftungstatbestände prüfen (§ 833 BGB, § 7 StVG, ProdHaftG)."
    },

    e_exkulpiert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 831 I 2 BGB",
      title: "Keine Haftung des Geschäftsherrn – Exkulpation (–)",
      text: "Der Geschäftsherr hat den Entlastungsbeweis geführt (sorgfältige Auswahl/Überwachung bzw. fehlende Kausalität). Es bleibt die persönliche Haftung des Gehilfen aus § 823 I BGB – dort ist dessen Verschulden zu prüfen."
    },

    e_kein_schaden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 249 ff. BGB",
      title: "Kein ersatzfähiger Schaden (–)",
      text: "Es fehlt an einem (auf der Rechtsgutsverletzung beruhenden) Schaden nach der Differenzhypothese; der Anspruch geht ins Leere."
    }
  },

  routers: {
    "@schaden": function (flags) { return "q_schaden"; },
    "@ergebnis_pos": function (flags) {
      return flags.agl831 ? "e_anspruch_831" : "e_anspruch_823";
    },
    "@ergebnis_quote": function (flags) { return "e_anspruch_quote"; }
  }
});
