/*
 * Prüfungsschema: Grundfreiheiten des Binnenmarkts, Art. 28 ff. AEUV
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Europarecht):
 *  - "02. Skript EuropaR FS II 2024_2025" (Breitbach/Jagatic) – V.2. Grundfreiheiten
 *    (Übersicht der Schutzbereiche S. 14; das Lückenskript verweist für das Prüfungs-
 *     schema auf die gefestigte EuGH-Dogmatik: Dassonville, Cassis de Dijon, Keck)
 *  - Normen verifiziert an AEUV.md
 *
 * Stationen: schutzbereich → grenze → beschraenkung → rechtfertigung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-eur-grundfreiheiten",
  subject: "Staatsrecht / Europarecht",
  area: "Europarecht",
  title: "Grundfreiheiten, Art. 28 ff. AEUV",
  description: "Das gemeinsame Prüfungsschema aller Grundfreiheiten: Schutzbereich (Ware, Arbeitnehmer, Niederlassung, Dienstleistung) mit grenzüberschreitendem Sachverhalt, Beschränkung (Diskriminierung, Dassonville/Keck) und Rechtfertigung (Art. 36 AEUV, zwingende Erfordernisse, Verhältnismäßigkeit).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "schutzbereich", label: "Schutzbereich" },
    { id: "grenze", label: "Grenzüberschreitung" },
    { id: "beschraenkung", label: "Beschränkung" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verstoß gegen die Grundfreiheit",
    neg: "Kein Verstoß",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "schutzbereich",
      kind: "frage",
      norm: "Art. 28, 45, 49, 56 AEUV",
      title: "Welche Grundfreiheit ist einschlägig?",
      text: "Obersatz: Die nationale Maßnahme könnte gegen die Grundfreiheit aus Art. … AEUV verstoßen. Prüfungsaufbau für alle Grundfreiheiten: Schutzbereich (persönlich/sachlich + grenzüberschreitender Sachverhalt) – Beschränkung/Eingriff – Rechtfertigung.",
      options: [
        { label: "Warenverkehrsfreiheit, Art. 28, 34 AEUV", next: "q_ware", set: { gf: "ware" }, tone: "neutral" },
        { label: "Arbeitnehmerfreizügigkeit, Art. 45 AEUV", next: "q_an", set: { gf: "an" }, tone: "neutral" },
        { label: "Niederlassungsfreiheit, Art. 49 AEUV", next: "q_niederlassung", set: { gf: "nl" }, tone: "neutral" },
        { label: "Dienstleistungsfreiheit, Art. 56, 57 AEUV", next: "q_dl", set: { gf: "dl" }, tone: "neutral" }
      ]
    },

    q_ware: {
      station: "schutzbereich",
      kind: "frage",
      norm: "Art. 28 II, 29 AEUV",
      title: "Liegt eine „Ware“ im Sinne des AEUV vor?",
      def: "<b>Ware:</b> körperlicher Gegenstand mit Geldwert, der Gegenstand von Handelsgeschäften sein kann (kein Handelsverbot). Erfasst: aus Mitgliedstaaten stammende Waren (Art. 28 II AEUV) sowie Drittlandswaren im freien Verkehr, wenn Einfuhrförmlichkeiten erfüllt und Zölle erhoben sind (Art. 29 AEUV).",
      options: [
        { label: "Ja, Ware (+)", next: "q_grenze", tone: "pos" },
        { label: "Nein", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_an: {
      station: "schutzbereich",
      kind: "frage",
      norm: "Art. 45 I AEUV",
      title: "Ist der Betroffene „Arbeitnehmer“?",
      def: "<b>Arbeitnehmer:</b> wer nicht selbstständig ist – d. h. nicht in eigenem Namen und nicht auf eigene Rechnung, sondern weisungsgebunden tätig wird – und dafür Arbeitslohn/Gehalt als Gegenleistung erhält (Gegensatz: „Werklohn“ nach § 631 I BGB). Die Definition kann im Einzelfall weitere Kriterien umfassen.",
      options: [
        { label: "Ja, weisungsgebunden gegen Entgelt", next: "q_grenze", tone: "pos" },
        { label: "Nein, selbstständig", detail: "→ Niederlassungs- oder Dienstleistungsfreiheit prüfen", next: "q_niederlassung", tone: "warn" }
      ]
    },

    q_niederlassung: {
      station: "schutzbereich",
      kind: "frage",
      norm: "Art. 49 UA 1 AEUV",
      title: "Liegt eine „Niederlassung“ vor?",
      def: "<b>Niederlassung:</b> selbstständige Erwerbstätigkeit mittels einer dauerhaften, festen Einrichtung in einem anderen Mitgliedstaat (auf Dauer angelegte Integration in dessen Wirtschaft).",
      options: [
        { label: "Ja, selbstständig + dauerhaft/fest", next: "q_grenze", tone: "pos" },
        { label: "Nur vorübergehende Tätigkeit", detail: "→ Dienstleistungsfreiheit", next: "q_dl", tone: "warn" }
      ]
    },

    q_dl: {
      station: "schutzbereich",
      kind: "frage",
      norm: "Art. 56, 57 AEUV",
      title: "Liegt eine „Dienstleistung“ vor?",
      def: "<b>Dienstleistung:</b> selbstständige Leistung, die in der Regel gegen Entgelt erbracht wird (Art. 57 UA 1 AEUV; Beispiele in UA 2 lit. a–d: gewerbliche, kaufmännische, handwerkliche, freiberufliche Tätigkeiten) und nur vorübergehend in einem anderen Mitgliedstaat ausgeübt wird (Art. 57 UA 3 AEUV) – Abgrenzung zur Niederlassung über die Dauerhaftigkeit.",
      options: [
        { label: "Ja, selbstständig, entgeltlich, vorübergehend", next: "q_grenze", tone: "pos" },
        { label: "Nein", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_grenze: {
      station: "grenze",
      kind: "frage",
      norm: "Art. 26 II AEUV",
      title: "Grenzüberschreitender Sachverhalt gegeben?",
      text: "Immer zusätzlich prüfen: Die Grundfreiheiten schützen den Binnenmarkt (Art. 26 II AEUV) und setzen einen grenzüberschreitenden Bezug zwischen Mitgliedstaaten voraus.",
      def: "<b>Rein innerstaatliche Sachverhalte</b> ohne Bezug zu einem anderen Mitgliedstaat fallen nicht unter die Grundfreiheiten (Problem der „Inländerdiskriminierung“ bleibt dem nationalen Recht überlassen).",
      options: [
        { label: "Ja, Bezug zu mindestens zwei Mitgliedstaaten", next: "q_beschraenkung", tone: "pos" },
        { label: "Nein, rein innerstaatlich", next: "e_innerstaatlich", tone: "neg" }
      ]
    },

    q_beschraenkung: {
      station: "beschraenkung",
      kind: "frage",
      norm: "Art. 34, 45 II, 49, 56 AEUV",
      title: "Liegt eine Beschränkung der Grundfreiheit vor?",
      text: "Zwischenergebnis: Der Schutzbereich ist eröffnet. ✓",
      def: "<b>Offene Diskriminierung:</b> Anknüpfung an die Staatsangehörigkeit/Herkunft. <b>Versteckte Diskriminierung:</b> neutrale Kriterien, die faktisch Ausländer/ausländische Produkte benachteiligen. <b>Beschränkung (Dassonville):</b> jede Maßnahme, die geeignet ist, den Handel zwischen den Mitgliedstaaten unmittelbar oder mittelbar, tatsächlich oder potenziell zu behindern. <b>Keck-Ausnahme (Warenverkehr):</b> bloße Verkaufsmodalitäten sind keine Beschränkung, wenn sie unterschiedslos für alle Wirtschaftsteilnehmer gelten und den Absatz in- und ausländischer Erzeugnisse rechtlich wie tatsächlich in gleicher Weise berühren.",
      options: [
        { label: "Offene Diskriminierung", next: "q_rechtfertigung", set: { diskr: true }, tone: "pos" },
        { label: "Versteckte Diskriminierung / Beschränkung (Dassonville)", next: "q_rechtfertigung", tone: "pos" },
        { label: "Bloße Verkaufsmodalität (Keck)", next: "e_keck", tone: "neg" },
        { label: "Keine Behinderung", next: "e_keine_beschraenkung", tone: "neg" }
      ]
    },

    q_rechtfertigung: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 36, 45 III, 52, 62 AEUV",
      title: "Rechtfertigungsgrund vorhanden?",
      def: "<b>Geschriebene Gründe:</b> Art. 36 AEUV (öffentliche Sittlichkeit, Ordnung, Sicherheit, Gesundheitsschutz, nationales Kulturgut, gewerbliches Eigentum) bzw. Art. 45 III, 52, 62 AEUV (öffentliche Ordnung, Sicherheit, Gesundheit). <b>Ungeschriebene „zwingende Erfordernisse des Allgemeinwohls“ (Cassis de Dijon):</b> z. B. Verbraucherschutz, Lauterkeit des Handelsverkehrs, Umweltschutz, Steuerkontrolle – nur bei unterschiedslos wirkenden Maßnahmen, nicht bei offener Diskriminierung. Keine wirtschaftlichen Gründe!",
      options: [
        { label: "Geschriebener Grund (z. B. Gesundheitsschutz, Art. 36 AEUV)", next: "q_vhm", tone: "pos" },
        { label: "Zwingendes Erfordernis (Cassis) – Maßnahme unterschiedslos", next: "@cassis", tone: "pos" },
        { label: "Nur wirtschaftliche Gründe / kein Grund", next: "e_verstoss", tone: "neg" }
      ]
    },

    q_vhm: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "EuGH st. Rspr.",
      title: "Ist die Maßnahme verhältnismäßig?",
      text: "Die Maßnahme muss zur Erreichung des Ziels geeignet und erforderlich sein (kein milderes, gleich wirksames Mittel – z. B. genügt oft eine Kennzeichnung statt eines Verbots) und darf kein Mittel willkürlicher Diskriminierung oder eine verschleierte Handelsbeschränkung sein (Art. 36 S. 2 AEUV).",
      options: [
        { label: "Ja, geeignet und erforderlich", next: "e_gerechtfertigt", tone: "pos" },
        { label: "Nein, milderes Mittel vorhanden", next: "e_verstoss", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kein_schutz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Schutzbereich nicht eröffnet",
      text: "Der Sachverhalt fällt unter keine der Grundfreiheiten (keine Ware, kein Arbeitnehmer, keine Niederlassung, keine Dienstleistung). Ein Verstoß scheidet aus – ggf. Auffangnorm: allgemeines Diskriminierungsverbot (Art. 18 AEUV) oder Unionsbürger-Freizügigkeit (Art. 21 AEUV)."
    },
    e_innerstaatlich: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Rein innerstaatlicher Sachverhalt",
      text: "Ohne grenzüberschreitenden Bezug greifen die Grundfreiheiten nicht. Eine etwaige Schlechterstellung von Inländern („Inländerdiskriminierung“) ist allein am nationalen Recht (Art. 3 I GG) zu messen."
    },
    e_keck: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Beschränkung – Keck-Formel",
      text: "Die Regelung betrifft eine bloße Verkaufsmodalität, gilt unterschiedslos für alle betroffenen Wirtschaftsteilnehmer und berührt den Absatz inländischer wie ausländischer Erzeugnisse rechtlich und tatsächlich in gleicher Weise. Sie ist keine Maßnahme gleicher Wirkung i. S. d. Art. 34 AEUV."
    },
    e_keine_beschraenkung: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Beschränkung",
      text: "Die Maßnahme ist nicht geeignet, den Handel bzw. die Freizügigkeit zwischen den Mitgliedstaaten auch nur potenziell zu behindern (Dassonville-Formel nicht erfüllt). Kein Verstoß gegen die Grundfreiheit."
    },
    e_gerechtfertigt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Beschränkung gerechtfertigt",
      text: "Die Beschränkung ist durch einen geschriebenen Grund (Art. 36, 45 III, 52, 62 AEUV) bzw. ein zwingendes Erfordernis des Allgemeinwohls (Cassis de Dijon) gedeckt und verhältnismäßig. Ein Verstoß gegen die Grundfreiheit liegt nicht vor."
    },
    e_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen die Grundfreiheit",
      text: "Die nationale Maßnahme beschränkt die Grundfreiheit, ohne gerechtfertigt zu sein (kein tauglicher Grund, offene Diskriminierung ohne geschriebenen Rechtfertigungsgrund oder unverhältnismäßig). Folge: Anwendungsvorrang des Unionsrechts – die Maßnahme bleibt unangewendet; der EuGH kann im Vorabentscheidungsverfahren (Art. 267 AEUV), die Kommission im Vertragsverletzungsverfahren (Art. 258 AEUV) befasst werden."
    }
  },

  routers: {
    "@cassis": function (flags) {
      /* Offene Diskriminierung kann nicht über Cassis gerechtfertigt werden */
      return flags.diskr ? "e_verstoss" : "q_vhm";
    }
  }
});
