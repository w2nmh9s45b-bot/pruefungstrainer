/*
 * Prüfungsschema: Ausgleichszulagen (§§ 51, 52 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 167-169
 *    (Ausgleichszulage, Ausgleichszulage bei Dienstherrnwechsel)
 *  - Gesetze: LBesG §§ 51, 52 (Volltexte geprüft; Normzitate gegenüber dem
 *    Skript korrigiert: die 25-%-Abschmelzung beim Dienstherrnwechsel steht
 *    in § 52 I 3, nicht in § 51 I 3)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-ausgleichszulage",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Zulagen und Vergütungen",
  title: "Ausgleichszulagen (§§ 51, 52 LBesG)",
  description: "Finanzieller Ausgleich bei Verringerung der Dienstbezüge: Amtswechsel aus dienstlichen Gründen (§ 51 I – dynamisch), Wegfall einer Stellenzulage (§ 51 III – abschmelzend 20 %/Jahr) und der Dienstherrnwechsel nach Rheinland-Pfalz (§ 52 – abschmelzend 25 %/Jahr).",
  start: "start",
  stations: [
    { id: "fallgruppe", label: "Fallgruppe" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ausgleichszulage",
    neg: "Ergebnis: kein Ausgleich",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "fallgruppe",
      kind: "frage",
      norm: "§§ 51, 52 LBesG",
      title: "Wodurch verringern sich die Dienstbezüge?",
      def: "Drei Fallgruppen auseinanderhalten:<br><br>• <b>§ 51 I:</b> Verringerung der <b>Summe aus Grundgehalt, Amtszulage und Allgemeiner Zulage</b> durch <b>Verleihung eines anderen Amtes</b> aus dienstlichen Gründen – innerhalb eines rheinland-pfälzischen Dienstverhältnisses,<br>• <b>§ 51 III:</b> <b>Wegfall einer Stellenzulage</b> aus dienstlichen Gründen,<br>• <b>§ 52:</b> Verringerung durch <b>Dienstherrnwechsel in den Geltungsbereich des LBesG</b> (z. B. Beamter wechselt vom Bund/anderen Land nach RLP).<br><br><i>Auch die weggefallene <b>Leistungsstufe</b> nach einer Beförderung wird über § 51 ausgeglichen, wenn das neue Grundgehalt darunter liegt (§ 29 V 3 LBesG).</i>",
      options: [
        { label: "Anderes Amt (dienstl. Gründe)", next: "q_51_1", tone: "pos" },
        { label: "Stellenzulage weggefallen", next: "q_51_3", tone: "neutral" },
        { label: "Dienstherrnwechsel nach RLP", next: "q_52", tone: "neutral" }
      ]
    },

    q_51_1: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 51 I, IV LBesG",
      title: "§ 51 I: Beruht der Amtswechsel auf dienstlichen Gründen?",
      def: "<b>Tatbestand:</b> Die <b>Summe</b> der Dienstbezüge aus <b>Grundgehalt + Amtszulage + Allgemeiner Zulage</b> (einschließlich vorhandener Überleitungs-/Ausgleichszulagen, § 51 I 2) verringert sich durch die <b>Verleihung eines anderen Amtes aus dienstlichen Gründen</b> (z. B. Umsetzung im dienstlichen Interesse, organisatorische Umstrukturierung, gesundheitsbedingter Laufbahnwechsel).<br><br><b>Ausschluss (§ 51 IV 2):</b> KEIN Ausgleich, wenn<br>• die Verringerung auf einer <b>Disziplinarmaßnahme</b> beruht,<br>• in der neuen Verwendung <b>Auslandsbesoldung</b> gezahlt wird,<br>• ein Amt mit leitender Funktion im BV auf Probe nicht auf Dauer übertragen wird –<br>und generell, wenn für das Ausscheiden aus der bisherigen Verwendung ausschließlich oder überwiegend <b>persönliche Gründe</b> maßgebend waren.<br><br>Erforderlich ist ein <b>unmittelbarer zeitlicher Zusammenhang</b> zwischen alter und neuer Verwendung. Bei Beamten auf Zeit: nur für die restliche Amtszeit (§ 51 I 3).",
      options: [
        { label: "Dienstliche Gründe (+)", next: "e_51_1", tone: "pos" },
        { label: "Persönliche Gründe / Disziplinarmaßnahme", next: "e_kein_ausgleich", tone: "neg" }
      ]
    },

    q_51_3: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 51 III LBesG",
      title: "§ 51 III: Stand die Stellenzulage 5 der letzten 7 Jahre zu?",
      def: "Der Wegfall einer <b>Stellenzulage</b> aus dienstlichen Gründen wird nur ausgeglichen, wenn die Zulage zuvor <b>in einem Zeitraum von sieben Jahren insgesamt mindestens fünf Jahre</b> zugestanden hat (§ 51 III 2 LBesG).<br><br><b>Rechtsfolge:</b> Festsetzung auf den Betrag, der <b>am Tag vor dem Wegfall</b> zustand (§ 51 III 3) – <b>statisch</b>, Erhöhungen werden nicht nachvollzogen. Die Zulage <b>vermindert sich jährlich um 20 %</b> des festgesetzten Betrags (ab Beginn des Folgemonats nach Jahresablauf, § 51 III 4) – also Abschmelzung in fünf Schritten.<br><br>Entsteht in der neuen Verwendung ein Anspruch auf eine <b>neue Stellenzulage</b>, wird diese zusätzlich auf den Ausgleichsbetrag angerechnet (§ 51 III 5).",
      options: [
        { label: "5 von 7 Jahren erfüllt", next: "e_51_3", tone: "pos" },
        { label: "Kürzer bezogen", next: "e_kein_ausgleich", tone: "neg" }
      ]
    },

    q_52: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 52 LBesG",
      title: "§ 52: Wechsel auf eigenen Antrag oder aus dienstlichen Gründen?",
      def: "Ausgeglichen werden nur Verminderungen, die sich aus dem <b>Wechsel des Besoldungsrechts</b> ergeben (bisheriger Dienstherr → LBesG), obwohl sich die besoldungsrechtlichen Einordnungen <b>entsprechen</b> (nicht erfasst: Wechsel Voll-/Teilzeit oder ein niedriger bewertetes Amt!).<br><br>• <b>Antrag/eigene Bewerbung (§ 52 I):</b> Ausgleichszulage <b>KANN</b> gewährt werden, wenn für die <b>Gewinnung ein dienstliches Bedürfnis</b> besteht (bloßes Gewinnungsinteresse genügt nicht). Entscheidung: oberste Dienstbehörde (§ 52 III).<br>• <b>Versetzung aus dienstlichen Gründen, Übernahme oder Übertritt (§ 52 IV):</b> Ausgleichszulage <b>IST</b> zu gewähren – die Prüfung des dienstlichen Bedürfnisses entfällt.<br><br><b>Vergleichsmasse (§ 52 II):</b> Grundgehalt, Familienzuschlag, Amtszulagen, Stellenzulagen (nur wenn sie auch in der bisherigen Verwendung zustanden), Allgemeine Zulage, Ausgleichs-/Überleitungszulagen sowie auf den Monat umgerechnete Sonderzahlungen.",
      options: [
        { label: "Eigener Antrag + dienstl. Bedürfnis", next: "e_52", tone: "pos" },
        { label: "Versetzung aus dienstl. Gründen", next: "e_52_zwingend", tone: "pos" },
        { label: "Nur Gewinnungsinteresse", next: "e_kein_ausgleich", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_51_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 51 I, II LBesG",
      title: "Dynamische Ausgleichszulage (§ 51 I)",
      text: "Die Ausgleichszulage wird in Höhe des Unterschiedsbetrags zwischen den neuen (verringerten) Dienstbezügen und den Dienstbezügen gewährt, die nach der bisherigen Verwendung zugestanden hätten (§ 51 II 1 LBesG).\n\nSie ist DYNAMISCH: Bei jeder Änderung wird neu verglichen – allgemeine Besoldungserhöhungen und der Stufenaufstieg werden auf BEIDEN Seiten fiktiv fortgeschrieben (§ 51 II; Veränderungen der besoldungsrechtlichen BEWERTUNG bleiben unberücksichtigt, § 51 II 2).\n\nGilt entsprechend für Richter und für Ruhegehaltempfänger, die erneut berufen werden (§ 51 IV 1).\n\nTypische Anwendungsfälle: gesundheitsbedingter Wechsel in ein niedrigeres Amt im dienstlichen Interesse, Wegfall einer Amtszulage durch Umsetzung, Wegfall der Leistungsstufe nach Beförderung (§ 29 V 3)."
    },

    e_51_3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 51 III LBesG",
      title: "Abschmelzende Ausgleichszulage für Stellenzulagen",
      text: "Der Wegfall der Stellenzulage wird ausgeglichen, weil sie in den letzten sieben Jahren mindestens fünf Jahre zugestanden hat (§ 51 III 2 LBesG):\n\n• Festsetzung STATISCH auf den Betrag am Tag vor dem Wegfall (§ 51 III 3) – keine Dynamisierung,\n• jährliche Verminderung um 20 % des Ausgangsbetrags (§ 51 III 4) → nach fünf Jahren vollständig abgeschmolzen,\n• eine neue Stellenzulage aus der neuen Verwendung wird zusätzlich angerechnet (§ 51 III 5).\n\nGrundgedanke: Vertrauensschutz in die Kontinuität funktionsgebundener Bezüge – aber nur übergangsweise, weil die Funktion (und damit der Grund der Zulage) entfallen ist."
    },

    e_52: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 52 I–III LBesG",
      title: "Ausgleichszulage bei Dienstherrnwechsel (Ermessen)",
      text: "Beim Wechsel auf eigenen Antrag/Bewerbung nach RLP KANN die Ausgleichszulage gewährt werden, wenn ein dienstliches Bedürfnis für die Gewinnung besteht (§ 52 I 1 LBesG; Entscheidung der obersten Dienstbehörde, § 52 III).\n\n• Höhe: Unterschiedsbetrag zwischen den Dienstbezügen nach dem LBesG am Tag der Versetzung und den zuletzt in der bisherigen Verwendung zustehenden Dienstbezügen (§ 52 I 2; Vergleichsmasse des § 52 II – inkl. umgerechneter Sonderzahlungen; fremde Stellenzulagen nur, wenn es sie in RLP auch gibt).\n• ABSCHMELZUNG: Nach Ablauf jedes Jahres vermindert sich die Zulage ab dem Folgemonat um 25 % des Ausgangsbetrags (§ 52 I 3) → nach vier Jahren aufgezehrt.\n\nHintergrund: 17 verschiedene Besoldungsordnungen seit der Föderalismusreform – der Wechsel nach RLP kann sonst zu Einbußen führen und Personalgewinnung erschweren."
    },

    e_52_zwingend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 52 IV LBesG",
      title: "Dienstherrnwechsel aus dienstlichen Gründen: Zulage zwingend",
      text: "Bei einer Versetzung aus dienstlichen Gründen, einer Übernahme oder einem Übertritt in den Geltungsbereich des LBesG gilt § 52 I-III entsprechend – aber OHNE Prüfung des dienstlichen Bedürfnisses, und die Ausgleichszulage IST zu gewähren (§ 52 IV LBesG; gebundene Entscheidung).\n\nBerechnung und Abschmelzung wie beim Antragfall: Unterschiedsbetrag am Tag der Versetzung (Vergleichsmasse § 52 II), jährliche Verminderung um 25 % des Ausgangsbetrags (§ 52 I 3)."
    },

    e_kein_ausgleich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 51, 52 LBesG",
      title: "Keine Ausgleichszulage",
      text: "Der Ausgleich scheidet aus, z. B. wenn:\n\n• die Verringerung auf einer DISZIPLINARMASSNAHME beruht (§ 51 IV 2 Nr. 1),\n• für das Ausscheiden aus der bisherigen Verwendung ausschließlich/überwiegend PERSÖNLICHE Gründe maßgebend waren,\n• die Stellenzulage keine fünf der letzten sieben Jahre zustand (§ 51 III 2),\n• beim Dienstherrnwechsel nur ein bloßes Gewinnungsinteresse (kein dienstliches Bedürfnis) besteht (§ 52 I 1),\n• sich die Verminderung NICHT aus dem Wechsel des Besoldungsrechts ergibt, sondern z. B. aus einem niedriger bewerteten Amt oder dem Wechsel von Voll- in Teilzeit (§ 52 erfasst das nicht).\n\nDie Bezüge richten sich dann schlicht nach dem neuen Amt (§ 22 I 1 LBesG) ohne Übergangsschutz."
    }
  }
});
