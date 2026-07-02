/*
 * Prüfungsschema: Ungerechtfertigte Bereicherung, §§ 812 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "2.1.3 PR 53-54 – OLE Skript – Bereicherungsrecht" (Rankenhohn, FS I)
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff) – Schemata § 812 I 1 Alt. 1, § 816 I 1 und 2
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 812, 816, 818, 819)
 *
 * Stationen: agl → tatbestand → rechtsgrund → rechtsfolge → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-bereicherung",
  subject: "Privatrecht",
  area: "Bereicherungsrecht",
  title: "Ungerechtfertigte Bereicherung, §§ 812 ff. BGB",
  description: "Leistungskondiktion (§ 812 I 1 Alt. 1 BGB) und die Kondiktionen bei Verfügung eines Nichtberechtigten (§ 816 I 1 und 2 BGB) – mit Umfang der Herausgabe nach § 818 BGB (Nutzungen, Surrogate, Wertersatz, Entreicherung, Saldotheorie).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "agl", label: "Anspruchsgrundlage" },
    { id: "tatbestand", label: "Tatbestand" },
    { id: "rechtsgrund", label: "Ohne Rechtsgrund" },
    { id: "rechtsfolge", label: "Rechtsfolge (§ 818)" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "agl",
      kind: "frage",
      norm: "§§ 812, 816 BGB",
      title: "Welche Kondiktion passt zur Fallkonstellation?",
      text: "Das Bereicherungsrecht (§§ 812–822 BGB) macht ungerechtfertigte Vermögensverschiebungen rückgängig („Billigkeitsrecht“). Es greift oft dort, wo § 985 BGB wegen des Abstraktionsprinzips versagt.",
      def: "<b>Leistungskondiktion (§ 812 I 1 Alt. 1):</b> Der Gläubiger hat selbst ohne Rechtsgrund geleistet (Hauptfall: unwirksamer Vertrag). <b>§ 816 I 1:</b> Ein Nichtberechtigter hat ENTGELTLICH über die Sache des Berechtigten verfügt – Anspruch gegen den Verfügenden auf den Erlös. <b>§ 816 I 2:</b> UNENTGELTLICHE Verfügung des Nichtberechtigten – Anspruch gegen den begünstigten Erwerber.",
      hint: "Auch im Verwaltungsrecht bedeutsam: öffentlich-rechtlicher Erstattungsanspruch, § 49a VwVfG.",
      options: [
        { label: "Eigene Leistung ohne Rechtsgrund", detail: "Leistungskondiktion, § 812 I 1 Alt. 1 BGB", next: "q_erlangt", set: { agl: "812" }, tone: "neutral" },
        { label: "Nichtberechtigter verfügt entgeltlich", detail: "§ 816 I 1 BGB – z. B. Entleiher verkauft die geliehene Sache an Gutgläubigen", next: "q_816_verfuegung", set: { agl: "816s1" }, tone: "neutral" },
        { label: "Nichtberechtigter verfügt unentgeltlich", detail: "§ 816 I 2 BGB – z. B. Entleiher verschenkt die geliehene Sache", next: "q_816_verfuegung", set: { agl: "816s2" }, tone: "neutral" }
      ]
    },

    /* ================= Leistungskondiktion ================= */

    q_erlangt: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 812 I 1 Alt. 1 BGB",
      title: "Hat der Schuldner „etwas erlangt“?",
      text: "„Etwas“ ist jeder vermögenswerte Vorteil.",
      def: "<b>Beispiele:</b> Eigentum, Besitz, Forderungen, Anwartschaftsrechte · Befreiung von einer Verbindlichkeit · Gebrauchsvorteile und in Anspruch genommene Dienstleistungen (ersparte Aufwendungen) · nach h. L. auch objektiv „wertlose“ Gegenstände (Erinnerungsstücke).",
      options: [
        { label: "Ja, vermögenswerter Vorteil erlangt", next: "q_leistung", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_leistung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 812 I 1 Alt. 1 BGB",
      title: "Erfolgte der Erwerb „durch Leistung“ des Gläubigers?",
      text: "Leistung ist jede bewusste und zweckgerichtete Mehrung fremden Vermögens.",
      def: "<b>Bewusst:</b> keine Leistung bei unbewusster Vermögensmehrung (z. B. versehentliches Mitstreichen des Nachbarzauns). <b>Zweckgerichtet:</b> fast immer zur Erfüllung einer (vermeintlichen) Verbindlichkeit; maßgeblich ist die objektive Empfängerperspektive (§§ 133, 157 BGB).",
      options: [
        { label: "Ja, bewusste und zweckgerichtete Vermögensmehrung", next: "q_rechtsgrund", tone: "pos" },
        { label: "Nein, keine Leistung", detail: "Ggf. Nichtleistungskondiktion „in sonstiger Weise“ (§ 812 I 1 Alt. 2 BGB) prüfen", next: "e_keine_leistung", tone: "neg" }
      ]
    },

    q_rechtsgrund: {
      station: "rechtsgrund",
      kind: "frage",
      norm: "§ 812 I 1 Alt. 1 BGB",
      title: "Fehlt der rechtliche Grund?",
      text: "Der Rechtsgrund liegt meist in einem Vertrag – dessen wirksames Zustandekommen ist HIER inzident zu prüfen (Gutachtenstil!). Kein Rechtsgrund, wenn die Verbindlichkeit nicht besteht oder trotz Leistung keine Erfüllung eintritt.",
      def: "<b>Fallgruppen:</b> Vertrag nichtig (z. B. §§ 105, 107/108, 125, 134, 138, 142 BGB) · irrtümliche Zuvielzahlung · Leistung eines aliud · fehlende Empfangszuständigkeit (Leistung an den Minderjährigen statt an die Eltern – keine Erfüllung!).",
      options: [
        { label: "Ja, ohne Rechtsgrund", detail: "z. B. Kaufvertrag nach §§ 107, 108 BGB unwirksam", next: "q_umfang", tone: "pos" },
        { label: "Nein, wirksamer Rechtsgrund besteht", next: "e_rechtsgrund", tone: "neg" }
      ]
    },

    /* ================= § 816 ================= */

    q_816_verfuegung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 816 I BGB",
      title: "Liegt eine (un)entgeltliche Verfügung vor?",
      text: "Verfügung = Rechtsgeschäft, durch das ein bestehendes Recht unmittelbar übertragen, belastet, inhaltlich geändert oder aufgehoben wird (z. B. Übereignung nach § 929 S. 1 BGB).",
      def: "<b>Entgeltlich:</b> Die Grundlage der Verfügung erfordert eine Gegenleistung/ein Vermögensopfer (Kauf, Tausch). <b>Unentgeltlich:</b> unabhängig von einer Gegenleistung (Schenkung).",
      options: [
        { label: "Ja, Verfügung liegt vor", next: "q_816_nichtberechtigt", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_816_nichtberechtigt: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 816 I BGB",
      title: "Handelte ein Nichtberechtigter?",
      text: "Berechtigt ist grundsätzlich nur der Eigentümer sowie der gesetzlich oder rechtsgeschäftlich (§ 185 BGB) zur Verfügung Befugte. Alle übrigen handeln als Nichtberechtigte.",
      options: [
        { label: "Ja, Nichtberechtigter", next: "q_816_wirksam", tone: "pos" },
        { label: "Nein, Verfügender war berechtigt", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_816_wirksam: {
      station: "rechtsgrund",
      kind: "frage",
      norm: "§ 816 I BGB",
      title: "Ist die Verfügung dem Berechtigten gegenüber wirksam?",
      text: "Vor allem beim gutgläubigen Erwerb des Dritten (§§ 932 ff. BGB – kein Abhandenkommen, § 935 BGB!) oder wenn der Berechtigte die Verfügung nach § 185 II BGB genehmigt (dann kann er kondizieren).",
      options: [
        { label: "Ja, wirksam (gutgläubiger Erwerb / Genehmigung)", next: "@folge816", tone: "pos" },
        { label: "Nein, unwirksam", detail: "Dann ist der Berechtigte noch Eigentümer – § 985 BGB gegen den Erwerber!", next: "e_985_vorrang", tone: "neg" }
      ]
    },

    /* ================= Rechtsfolge ================= */

    q_umfang: {
      station: "rechtsfolge",
      kind: "frage",
      norm: "§ 818 BGB",
      title: "Was ist herauszugeben?",
      text: "Herauszugeben ist das erlangte Etwas selbst (actus contrarius: Rückübereignung §§ 929 ff. BGB, Besitzrestitution) sowie Nutzungen und Surrogate (§ 818 I BGB). Ist die Herausgabe nicht möglich, ist Wertersatz zu leisten (§ 818 II BGB, objektiver Wert).",
      def: "<b>Nutzungen (§ 100 BGB):</b> Früchte und Gebrauchsvorteile – nur tatsächlich gezogene. <b>Surrogate:</b> Ersatz für Zerstörung/Beschädigung/Entziehung (insb. Versicherungssummen). <b>Wertersatz:</b> z. B. verbrauchte Dienstleistungen, gefahrene Kilometer.",
      options: [
        { label: "Gegenstand (ggf. + Nutzungen) herausgebbar", next: "q_entreicherung", tone: "neutral" },
        { label: "Herausgabe unmöglich → Wertersatz (§ 818 II BGB)", next: "q_entreicherung", tone: "neutral" }
      ]
    },

    q_entreicherung: {
      station: "rechtsfolge",
      kind: "frage",
      norm: "§ 818 III BGB",
      title: "Beruft sich der Schuldner auf Entreicherung?",
      text: "Die Herausgabe- bzw. Wertersatzpflicht ist ausgeschlossen, soweit der Empfänger nicht mehr bereichert ist (§ 818 III BGB) – etwa wenn Geld ersatzlos „durchgebracht“ wurde, ohne dass Aufwendungen erspart worden sind.",
      def: "<b>Verschärfte Haftung:</b> Ab Rechtshängigkeit oder bei Kenntnis vom fehlenden Rechtsgrund haftet der Empfänger nach den allgemeinen Vorschriften – keine Berufung auf Entreicherung (§§ 818 IV, 819 I BGB). <b>Saldotheorie:</b> Bei gegenseitigen Verträgen muss sich der Bereicherungsgläubiger die Wertminderung der eigenen (zurückzugewährenden) Leistung anrechnen lassen – Korrektur der Zwei-Kondiktionen-Lehre.",
      options: [
        { label: "Keine Entreicherung", next: "e_anspruch", tone: "pos" },
        { label: "Entreichert und gutgläubig", next: "e_entreichert", tone: "neg" },
        { label: "Entreichert, aber bösgläubig / rechtshängig", detail: "§§ 818 IV, 819 I BGB – verschärfte Haftung", next: "e_anspruch_verschaerft", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 812 ff., 818 I, II BGB",
      title: "Bereicherungsanspruch besteht (+)",
      text: "Der Anspruch ist begründet: Herausgabe des Erlangten nebst gezogenen Nutzungen und Surrogaten (§ 818 I BGB), bei Unmöglichkeit der Herausgabe Wertersatz (§ 818 II BGB).\n\nBei § 816 I 1 BGB richtet sich der Anspruch nach h. M. auf den tatsächlich erzielten ERLÖS – auch wenn dieser über dem objektiven Wert liegt."
    },

    e_anspruch_verschaerft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: verschärfte Haftung",
      norm: "§§ 818 IV, 819 I BGB",
      title: "Anspruch besteht – keine Entreicherungseinrede (+)",
      text: "Der bösgläubige (oder verklagte) Bereicherungsschuldner haftet nach den allgemeinen Vorschriften und kann sich nicht auf den Wegfall der Bereicherung berufen."
    },

    e_entreichert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 818 III BGB",
      title: "Anspruch ausgeschlossen – Entreicherung (–)",
      text: "Der gutgläubige Empfänger ist nicht mehr bereichert; die Verpflichtung zur Herausgabe oder zum Wertersatz ist ausgeschlossen. Der Kondiktionsschuldner soll durch die Rückabwicklung nicht schlechter stehen als ohne das Geschäft.\n\nBeispiel (Skript): Die geisteskranke Oma schenkt 1.000 € – die Enkelin hat alles in der Shisha-Bar ausgegeben: keine Rückzahlung, § 818 III BGB."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 812, 816 BGB",
      title: "Kein Bereicherungsanspruch (–)",
      text: "Der Tatbestand der geprüften Kondiktion ist nicht erfüllt. Ggf. andere Anspruchsgrundlagen prüfen (§ 985 BGB, §§ 823 ff. BGB, vertragliche Ansprüche)."
    },

    e_keine_leistung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 812 I 1 Alt. 2 BGB",
      title: "Keine Leistung – Nichtleistungskondiktion denkbar",
      text: "Ohne bewusste, zweckgerichtete Vermögensmehrung scheidet die Leistungskondiktion aus. In Betracht kommt die Kondiktion „in sonstiger Weise“ (§ 812 I 1 Alt. 2 BGB, Eingriffskondiktion) – Vorrang der Leistungsbeziehungen beachten."
    },

    e_rechtsgrund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 812 I 1 Alt. 1 BGB",
      title: "Kein Anspruch – Rechtsgrund besteht (–)",
      text: "Die Vermögensverschiebung ist durch den wirksamen Vertrag (bzw. die bestehende Verbindlichkeit) gerechtfertigt. Eine Kondiktion scheidet aus."
    },

    e_985_vorrang: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 985 BGB",
      title: "Verfügung unwirksam – Vindikation statt Kondiktion",
      text: "Ist die Verfügung dem Berechtigten gegenüber unwirksam (z. B. kein gutgläubiger Erwerb wegen § 935 BGB), bleibt der Berechtigte Eigentümer. Er kann die Sache nach § 985 BGB vom Besitzer herausverlangen; § 816 BGB passt nicht.\n\nAlternative: Der Berechtigte GENEHMIGT die Verfügung nach § 185 II BGB und kondiziert dann den Erlös nach § 816 I 1 BGB."
    }
  },

  routers: {
    "@folge816": function (flags) {
      return "q_umfang";
    }
  }
});
