/*
 * Prüfungsschema: Allgemeines Persönlichkeitsrecht, Art. 2 I i. V. m. Art. 1 I GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "08. LE 08 - Art. 2 I GG i. V. m. Art. 1 I GG" (Weidenbach, FS I) – Taxifahrer-Fall
 *  - "2.1.1 StVR 13-14 - OLE zu Art. 2 I, 1 I GG" (FS I)
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: schutz → eingriff → rechtfertigung → sphaeren → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-apr",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte – Einzelgrundrechte",
  title: "Allg. Persönlichkeitsrecht, Art. 2 I i. V. m. 1 I GG",
  description: "Das ungeschriebene Grundrecht auf Schutz der engeren persönlichen Lebenssphäre: Ausprägungen (informationelle Selbstbestimmung, Recht am eigenen Wort und Bild, Ehre), Schrankentrias und Sphärentheorie des BVerfG in der Angemessenheitsprüfung.",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "sphaeren", label: "Sphärentheorie" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "APR verletzt",
    neg: "Keine Verletzung des APR",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 2 I i. V. m. Art. 1 I GG",
      title: "Persönlicher Schutzbereich: Wer beruft sich auf das APR?",
      text: "Obersatz: X könnte durch die Maßnahme in seinem allgemeinen Persönlichkeitsrecht aus Art. 2 I i. V. m. Art. 1 I GG verletzt sein. Das APR ist im GG-Text nicht ausdrücklich umschrieben – nach h. M. in Art. 2 I GG verankert, zur Auslegung wird Art. 1 I GG herangezogen. Es ist ein Jedermannsrecht.",
      def: "<b>Juristische Personen des Privatrechts</b> (Art. 19 III GG) können sich nur auf Ausprägungen berufen, die nicht im Interesse der Menschenwürde gewährt werden: Recht am eigenen Wort, Recht auf informationelle Selbstbestimmung, Recht der persönlichen Ehre („guter Ruf“ eines Unternehmens). Nicht: Schutz der Intimsphäre.",
      options: [
        { label: "Natürliche Person", next: "q_sachlich", tone: "pos" },
        { label: "Juristische Person – menschenwürdeneutrale Ausprägung", detail: "Wort, Daten, Ehre", next: "q_sachlich", tone: "pos" },
        { label: "Juristische Person – Intimsphäre o. Ä.", next: "e_kein_traeger", tone: "neg" }
      ]
    },

    q_sachlich: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 2 I i. V. m. Art. 1 I GG",
      title: "Sachlicher Schutzbereich: Welche Ausprägung ist betroffen?",
      def: "Das APR schützt die <b>Erhaltung der engeren persönlichen Lebenssphäre</b>. Anwendungsfälle: Schutz der Privat- und Intimsphäre, Recht am eigenen Wort und Bild, Recht der persönlichen Ehre, Recht auf <b>informationelle Selbstbestimmung</b> (Befugnis, frei zu entscheiden, wann und in welchen Grenzen persönliche Lebenssachverhalte offenbart werden – Datenschutz), Vertraulichkeit informationstechnischer Systeme.",
      hint: "Taxifahrer-Fall: Pflicht, Schild mit Lichtbild und Namen im Wagen anzubringen → informationelle Selbstbestimmung betroffen.",
      options: [
        { label: "Informationelle Selbstbestimmung", next: "q_eingriff", tone: "pos" },
        { label: "Privat-/Intimsphäre", next: "q_eingriff", tone: "pos" },
        { label: "Recht am eigenen Wort/Bild oder Ehre", next: "q_eingriff", tone: "pos" },
        { label: "Keine Ausprägung betroffen", detail: "ggf. allgemeine Handlungsfreiheit, Art. 2 I GG", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    q_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "—",
      title: "Eingriff in den Schutzbereich?",
      def: "<b>Eingriff:</b> jedes staatliche Handeln, das die Ausübung des APR erschwert oder unmöglich macht (moderner Eingriffsbegriff) – z. B. gesetzliche Offenlegungspflichten, Datenerhebung und -speicherung, Überwachung.",
      options: [
        { label: "Ja", next: "q_schranke", tone: "pos" },
        { label: "Nein", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_schranke: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 2 I GG",
      title: "Taugliche Schranke (Schrankentrias)?",
      text: "Art. 2 I GG enthält die Schrankentrias: Rechte Dritter, Sittengesetz, verfassungsmäßige Ordnung. Einschlägig ist regelmäßig die „verfassungsmäßige Ordnung“ = einfacher Gesetzesvorbehalt: Einschränkung durch jede formell und materiell verfassungsgemäße Rechtsnorm. Rechte Dritter und Sittengesetz haben keine eigenständige Bedeutung.",
      options: [
        { label: "Formelle/materielle Rechtsnorm vorhanden", detail: "z. B. formelles Bundesgesetz", next: "q_formell", tone: "pos" },
        { label: "Keine Rechtsgrundlage", next: "e_verletzt_schranke", tone: "neg" }
      ]
    },

    q_formell: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 70 ff., 76 ff. GG",
      title: "Schranken-Schranke: Gesetz formell verfassungsgemäß?",
      options: [
        { label: "Ja / laut Bearbeitervermerk", next: "q_ziel", tone: "pos" },
        { label: "Nein", next: "e_verletzt_formell", tone: "neg" }
      ]
    },

    q_ziel: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Legitimes Ziel, Geeignetheit, Erforderlichkeit?",
      text: "Verhältnismäßigkeitsprüfung: legitimer Zweck (z. B. Sicherheit des Personenverkehrs, herleitbar aus der Schutzpflicht für Art. 2 II 1 GG), Eignung (Zweckförderung genügt) und Erforderlichkeit (kein milderes, gleich geeignetes Mittel).",
      options: [
        { label: "Alle drei Stufen (+) – weiter zur Angemessenheit", next: "q_sphaere", tone: "pos" },
        { label: "Eine Stufe scheitert", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    q_sphaere: {
      station: "sphaeren",
      kind: "frage",
      norm: "BVerfG – Sphärentheorie",
      title: "Angemessenheit: In welche Sphäre greift die Maßnahme ein?",
      text: "Bei der Angemessenheit grenzt das BVerfG nach der Sphärentheorie ab, welche Anforderungen an den Eingriff zu stellen sind – je tiefer der Eingriff, desto eher unzulässig.",
      def: "<b>Intimsphäre</b> (stärkster Eingriff): Kernbereich privater Lebensführung – dem staatlichen Zugriff entzogen. <b>Privatsphäre</b> (mittelstark): Eingriffe nur bei überwiegendem Allgemeininteresse und strenger Verhältnismäßigkeit. <b>Sozialsphäre</b> (leicht): Auftreten in der Öffentlichkeit/im Beruf – Eingriffe leichter zu rechtfertigen.",
      options: [
        { label: "Intimsphäre / Kernbereich", next: "e_verletzt_kern", tone: "neg" },
        { label: "Privatsphäre", next: "q_abwaegung", set: { sphaere: "privat" }, tone: "neutral" },
        { label: "Sozialsphäre", detail: "z. B. Berufsausübung als Taxifahrer", next: "q_abwaegung", set: { sphaere: "sozial" }, tone: "neutral" }
      ]
    },

    q_abwaegung: {
      station: "sphaeren",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Rechtsgüterbezogene Abwägung: Eingriff angemessen?",
      text: "Der Eingriff darf nicht völlig außer Verhältnis zum angestrebten Erfolg stehen. Bei der Privatsphäre strengere, bei der Sozialsphäre großzügigere Maßstäbe.",
      hint: "Taxifahrer-Fall: Offenlegung von Name und Bild betrifft nur die Sozialsphäre (Berufsausübung), dient dem Schutz der Fahrgäste → angemessen, keine Verletzung.",
      options: [
        { label: "Ja, angemessen", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein, unzumutbar", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kein_traeger: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Persönlicher Schutzbereich nicht eröffnet",
      text: "Juristische Personen können sich nur auf menschenwürdeneutrale Ausprägungen des APR berufen (Wort, informationelle Selbstbestimmung, Ehre). Menschenwürdegetragene Ausprägungen wie die Intimsphäre stehen nur natürlichen Personen zu (Art. 19 III GG)."
    },
    e_kein_schutz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "APR sachlich nicht betroffen",
      text: "Die engere persönliche Lebenssphäre ist nicht berührt. Als Auffanggrundrecht kommt die allgemeine Handlungsfreiheit (Art. 2 I GG) in Betracht."
    },
    e_kein_eingriff: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff",
      text: "Die Maßnahme erschwert die Ausübung des APR nicht. Eine Verletzung scheidet aus."
    },
    e_verletzt_schranke: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "APR verletzt – keine taugliche Schranke",
      text: "Der Eingriff erfolgt ohne verfassungsgemäße Rechtsgrundlage. Die Schrankentrias des Art. 2 I GG ist nicht gewahrt – das allgemeine Persönlichkeitsrecht ist verletzt."
    },
    e_verletzt_formell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "APR verletzt – Gesetz formell verfassungswidrig",
      text: "Das einschränkende Gesetz ist formell verfassungswidrig und damit nicht Bestandteil der verfassungsmäßigen Ordnung."
    },
    e_verletzt_kern: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "APR verletzt – Eingriff in den Kernbereich",
      text: "Der Kernbereich privater Lebensführung (Intimsphäre) ist dem staatlichen Zugriff entzogen. Der Eingriff ist nicht zu rechtfertigen – das APR aus Art. 2 I i. V. m. Art. 1 I GG ist verletzt."
    },
    e_verletzt_vhm: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "APR verletzt – unverhältnismäßig",
      text: "Die Maßnahme hält der Verhältnismäßigkeitsprüfung unter Berücksichtigung der Sphärentheorie nicht stand. Das allgemeine Persönlichkeitsrecht ist verletzt."
    },
    e_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Verletzung des APR",
      text: "Der Eingriff ist gerechtfertigt: verfassungsgemäße Rechtsgrundlage (verfassungsmäßige Ordnung) und verhältnismäßige Regelung – die betroffene Sphäre wurde angemessen gewichtet (vgl. Taxifahrer-Fall: Verpflichtung zum Namensschild verletzt das APR nicht)."
    }
  }
});
