/*
 * Prüfungsschema: Einrede der Verjährung, §§ 194 ff., 214 BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff, FS I) – Verjährung (Folien 255 ff.)
 *  - "Praesentation FS II – W – 2023" – § 438 BGB (kaufrechtliche Verjährung)
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 194–199, 203 ff., 212, 214, 438)
 *
 * Stationen: anspruch → frist → beginn → hemmung → einrede → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-verjaehrung",
  subject: "Privatrecht",
  area: "Fristen und Termine",
  title: "Einrede der Verjährung, §§ 194 ff., 214 BGB",
  description: "Verjährbarer Anspruch, Dauer der Verjährungsfrist (§§ 195–197, Sonderregeln wie § 438), Beginn (§ 199), Hemmung und Neubeginn sowie das Leistungsverweigerungsrecht des § 214 BGB.",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "anspruch", label: "Verjährbarer Anspruch" },
    { id: "frist", label: "Fristdauer" },
    { id: "beginn", label: "Fristbeginn" },
    { id: "hemmung", label: "Hemmung/Neubeginn" },
    { id: "einrede", label: "Einrede" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "anspruch",
      kind: "frage",
      norm: "§ 194 I BGB",
      title: "Liegt ein verjährbarer Anspruch vor?",
      text: "Einordnung: Die Verjährung ist eine rechtshemmende Einrede – geprüft bei „III. Anspruch durchsetzbar“. Formuliervorschlag: „Der Anspruch könnte aber verjährt sein und dem Schuldner könnte ein Leistungsverweigerungsrecht gem. § 214 I BGB zustehen.“",
      def: "<b>Nur Ansprüche verjähren (§ 194 I BGB).</b> Absolute Rechte (z. B. das Eigentum selbst) verjähren nicht – wohl aber die daraus folgenden Ansprüche (§ 985 BGB verjährt in 30 Jahren, § 197 I Nr. 2 BGB). Gestaltungsrechte (Anfechtung, Rücktritt, Kündigung) verjähren nicht, sie können nur verfristen (vgl. § 218 BGB); Ansprüche AUS ihrer Ausübung (z. B. § 346 BGB) verjähren wieder.",
      options: [
        { label: "Ja, Anspruch i. S. d. § 194 I BGB", next: "q_frist", tone: "pos" },
        { label: "Nein, Gestaltungsrecht oder absolutes Recht", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§§ 195–197 BGB",
      title: "Welche Verjährungsfrist gilt?",
      text: "Reihenfolge: (a) Parteivereinbarungen gehen vor (selten), (b) Sonderregeln des besonderen Schuldrechts, (c) allgemeine Fristen der §§ 195 ff. BGB.",
      def: "<b>Regelmäßige Verjährung:</b> 3 Jahre (§ 195 BGB). <b>10 Jahre:</b> Rechte an einem Grundstück (§ 196 BGB). <b>30 Jahre:</b> Katalog des § 197 BGB (u. a. Herausgabeansprüche aus Eigentum, titulierte Ansprüche). <b>Sonderregeln:</b> Mängelansprüche im Kaufrecht (§ 438 BGB – i. d. R. 2 Jahre ab Ablieferung) und Werkvertragsrecht (§ 634a BGB); Ersatzansprüche des Vermieters (§ 548 BGB – 6 Monate).",
      options: [
        { label: "Regelmäßige Verjährung: 3 Jahre (§ 195 BGB)", next: "q_beginn_199", set: { frist: "regel" }, tone: "neutral" },
        { label: "Sonderfrist (z. B. § 438, § 634a, § 548 BGB)", next: "q_beginn_sonder", set: { frist: "sonder" }, tone: "neutral" },
        { label: "10 oder 30 Jahre (§§ 196, 197 BGB)", next: "q_beginn_sonder", set: { frist: "lang" }, tone: "neutral" },
        { label: "Wirksame Parteivereinbarung", detail: "Geht den gesetzlichen Regeln vor (Grenzen: § 202 BGB)", next: "q_beginn_sonder", set: { frist: "vereinbart" }, tone: "warn" }
      ]
    },

    q_beginn_199: {
      station: "beginn",
      kind: "frage",
      norm: "§ 199 I BGB",
      title: "Wann beginnt die regelmäßige Verjährungsfrist?",
      text: "Die regelmäßige Verjährungsfrist beginnt mit dem Schluss des Jahres, in dem (1) der Anspruch entstanden ist UND (2) der Gläubiger von den anspruchsbegründenden Umständen und der Person des Schuldners Kenntnis erlangt hat oder ohne grobe Fahrlässigkeit erlangen müsste („Silvester-Verjährung“).",
      hint: "Höchstfristen ohne Rücksicht auf Kenntnis: § 199 II–IV BGB (z. B. 10 Jahre ab Entstehung). Die konkrete Berechnung des Fristendes erfolgt nach §§ 187 ff. BGB – siehe Schema „Fristberechnung“.",
      options: [
        { label: "Beginn bestimmt – Fristende berechnen", next: "q_abgelaufen", tone: "neutral" }
      ]
    },

    q_beginn_sonder: {
      station: "beginn",
      kind: "frage",
      norm: "z. B. § 438 II BGB",
      title: "Wann beginnt die besondere Verjährungsfrist?",
      text: "Sonderregeln enthalten eigene Beginn-Tatbestände: etwa § 438 II BGB (Ablieferung der Sache bzw. Übergabe des Grundstücks) oder § 200 BGB (Entstehung des Anspruchs, wenn nichts anderes bestimmt).",
      hint: "Die Berechnung selbst läuft über §§ 187 I, 188 II BGB (Ereignisfrist: Tag der Ablieferung zählt nicht mit).",
      options: [
        { label: "Beginn bestimmt – Fristende berechnen", next: "q_abgelaufen", tone: "neutral" }
      ]
    },

    q_abgelaufen: {
      station: "hemmung",
      kind: "frage",
      norm: "§§ 203 ff., 209, 212 BGB",
      title: "Hemmung oder Neubeginn der Verjährung?",
      text: "Vor dem Ergebnis prüfen: Der Zeitraum einer Hemmung wird nicht in die Verjährungsfrist eingerechnet (§ 209 BGB); beim Neubeginn läuft die volle Frist neu.",
      def: "<b>Hemmung:</b> u. a. Verhandlungen (§ 203 BGB), Rechtsverfolgung/Klageerhebung (§ 204 BGB), höhere Gewalt (§ 206 BGB). <b>Neubeginn (§ 212 BGB):</b> Anerkenntnis des Schuldners (Abschlagszahlung, Sicherheitsleistung) oder gerichtliche/behördliche Vollstreckungshandlung.",
      options: [
        { label: "Keine Hemmung, kein Neubeginn", next: "q_ablauf", tone: "neutral" },
        { label: "Hemmung – Zeitraum herausrechnen (§ 209 BGB)", next: "q_ablauf", set: { hemmung: true }, tone: "warn" },
        { label: "Neubeginn – Frist läuft komplett neu (§ 212 BGB)", next: "q_ablauf", set: { neubeginn: true }, tone: "warn" }
      ]
    },

    q_ablauf: {
      station: "einrede",
      kind: "frage",
      norm: "§§ 187 ff. BGB",
      title: "Ist die Verjährungsfrist abgelaufen?",
      text: "Fristende nach §§ 187 I, 188 II BGB berechnen (ggf. um Hemmungszeiten verlängert bzw. ab Neubeginn neu).",
      options: [
        { label: "Ja, Frist abgelaufen", next: "q_einrede", tone: "neg" },
        { label: "Nein, Frist läuft noch", next: "e_nicht_verjaehrt", tone: "pos" }
      ]
    },

    q_einrede: {
      station: "einrede",
      kind: "frage",
      norm: "§ 214 I BGB",
      title: "Beruft sich der Schuldner auf die Verjährung?",
      text: "Die Verjährung führt nicht zum Erlöschen des Anspruchs, sondern gibt dem Schuldner ein Leistungsverweigerungsrecht (Einrede). Sie wird NICHT von Amts wegen beachtet – ein Gericht darf den Schuldner nicht einmal darauf hinweisen!",
      options: [
        { label: "Ja, Einrede erhoben", next: "e_verjaehrt", tone: "neg" },
        { label: "Nein, Einrede (noch) nicht erhoben", next: "e_einrede_fehlt", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 194 I BGB",
      title: "Keine Verjährung – kein Anspruch betroffen",
      text: "Gestaltungsrechte und absolute Rechte unterliegen nicht der Verjährung. Für Gestaltungsrechte gelten eigene Ausschlussfristen (z. B. §§ 121, 124 BGB für die Anfechtung) bzw. § 218 BGB für den Rücktritt bei verjährtem Nacherfüllungsanspruch."
    },

    e_nicht_verjaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Anspruch durchsetzbar",
      norm: "§§ 195 ff. BGB",
      title: "Nicht verjährt – Anspruch durchsetzbar (+)",
      text: "Die Verjährungsfrist ist noch nicht abgelaufen; die Einrede des § 214 I BGB greift nicht. Der Anspruch bleibt durchsetzbar."
    },

    e_einrede_fehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 214 I BGB",
      title: "Verjährt – aber Einrede nicht erhoben",
      text: "Die Verjährungsfrist ist zwar abgelaufen, doch solange sich der Schuldner nicht auf die Verjährung beruft, bleibt der Anspruch durchsetzbar. Die Verjährung wird nicht von Amts wegen berücksichtigt."
    },

    e_verjaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      kicker: "Ergebnis: Anspruch nicht durchsetzbar",
      norm: "§ 214 I BGB",
      title: "Verjährung greift – Leistungsverweigerungsrecht (–)",
      text: "Der Schuldner ist berechtigt, die Leistung zu verweigern (§ 214 I BGB). Der Anspruch besteht fort, ist aber nicht mehr durchsetzbar.\n\nMerke: Wer in Unkenntnis der Verjährung leistet, kann das Geleistete nicht zurückfordern (§ 214 II BGB – Ausnahme von § 813 BGB). Die Verjährung dient dem Rechtsfrieden und der Sicherheit im Rechtsverkehr."
    }
  }
});
