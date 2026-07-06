/*
 * IK-Schema: Führungsstile und Führungsansätze einordnen
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - FS II 28 PLE Fuehrung (Lewin: autoritär/kooperativ/laissez-faire; transaktionale
 *    vs. transformationale Führung; Führungsdefinition House et al./Vogel)
 *  - Auszug aus Vogel - Fuehrung im oeffentlichen Sektor (OLE 06/07)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-fuehrungsstile",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Motivation & Führung",
  title: "Führungsstile & Führungsansätze",
  description: "Autoritär, kooperativ oder laissez-faire (Lewin)? Tauschgeschäft oder Sinnstiftung (transaktional vs. transformational)? Führungsverhalten einordnen und situativ bewerten.",
  start: "start",
  stations: [
    { id: "begriff", label: "Führung" },
    { id: "stil", label: "Stile" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stil bestimmt",
    neg: "Ergebnis: Warnsignal",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Definition",
      title: "Was heißt Führung überhaupt?",
      def: "Führung ist „die Fähigkeit eines Individuums, andere zu <b>beeinflussen</b>, zu <b>motivieren</b> und zu <b>befähigen</b>, damit sie zur Effektivität und zum Erfolg der Organisation beitragen“ (House et al., nach Vogel).<br><br>Vogel betont für den <b>öffentlichen Sektor</b> die Besonderheit der Beziehung zwischen Führungskraft und Mitarbeitenden – Führungsverhalten hat mehrere Dimensionen, aus denen sich wechselseitige Erwartungen ergeben (OLE 06/07).",
      options: [
        { label: "Verhalten einem Lewin-Stil zuordnen", next: "q_stil", tone: "pos" },
        { label: "Tausch oder Werte? → transaktional/transformational", next: "e_transaktional", tone: "pos" }
      ]
    },

    q_stil: {
      station: "stil",
      kind: "frage",
      norm: "Lewin",
      title: "Wie fällt die Entscheidung – und wer wird beteiligt?",
      def: "Die klassischen Führungsstile nach <b>Lewin</b>:",
      options: [
        { label: "Führungskraft entscheidet allein, klare Anweisungen", next: "e_autoritaer", tone: "pos" },
        { label: "Mitarbeitende werden an Entscheidungen beteiligt", next: "e_kooperativ", tone: "pos" },
        { label: "Kaum Interesse und Einwirkung – alles läuft irgendwie", next: "e_laissez", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_autoritaer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Autoritärer Stil",
      title: "Autoritär: schnell und klar – aber auf Kosten von Initiative und Klima",
      text: "Die Führungskraft entscheidet allein, gibt klare Anweisungen und kontrolliert die Ausführung.\n\nStärken: Geschwindigkeit und Eindeutigkeit – in Gefahren- und Krisenlagen (Brandeinsatz, Katastrophenschutz, akuter Termindruck) kann direktives Führen geboten sein.\n\nSchwächen: geringe Eigeninitiative und Verantwortungsübernahme der Mitarbeitenden, Abhängigkeit von der Führungskraft, Risiko für Motivation und Klima; Wissen der Mitarbeitenden bleibt ungenutzt.\n\nMerke (LV 28): Die Stile sind SITUATIV zu bewerten – der überwiegend beste Stil ist der kooperative, aber kein Stil passt immer."
    },

    e_kooperativ: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kooperativer Stil",
      title: "Kooperativ/demokratisch: der überwiegend beste Stil – mit Zeitkosten",
      text: "Die Mitarbeitenden werden an Entscheidungen beteiligt; die Führungskraft moderiert, delegiert und informiert.\n\nStärken: höhere Motivation und Identifikation, bessere Entscheidungsqualität (Wissen aller wird genutzt), Entwicklung der Mitarbeitenden, tragfähige Ergebnisse.\n\nGrenzen: Beteiligung kostet ZEIT und setzt Kompetenz und Willen der Beteiligten voraus; in Eilfällen nicht praktikabel.\n\nDas Skript stellt die Anschlussfrage: „Der kooperative Stil wurde als der überwiegend beste benannt – ist das immer so?“ Antwort: nein, situationsabhängig. Und mit der Ökonomisierung rückten Austauschprozesse in den Fokus → transaktionale Führung (nächster Baustein)."
    },

    e_laissez: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Laissez-faire",
      title: "Laissez-faire: Führungsverzicht ist kein Vertrauensbeweis",
      text: "Geringes Interesse an Mitarbeitenden UND Aufgabe, geringe bis keine Einwirkung auf Menschen oder Prozesse – die Gruppe ist sich selbst überlassen.\n\nFolgen: Orientierungslosigkeit, informelle Machtstrukturen füllen das Vakuum, Leistungs- und Qualitätsstreuung, Frust bei denen, die Unterstützung bräuchten.\n\nAbzugrenzen von ECHTER Delegation im kooperativen Stil: Dort werden Verantwortung und Kompetenzen bewusst übertragen, Ziele vereinbart und Unterstützung angeboten – Laissez-faire dagegen ist Abwesenheit von Führung.\n\nWer als Führungskraft „nur nicht stören“ will, verletzt am Ende die Orientierungsfunktion, die Mitarbeitende von Führung erwarten dürfen (vgl. Anerkennungs-/Kritikgespräch)."
    },

    e_transaktional: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Transaktional/transformational",
      title: "Tauschgeschäft oder Sinnstiftung – zwei Ansätze, ein Kontinuum",
      text: "TRANSAKTIONALE Führung versteht Führung als AUSTAUSCHPROZESS: Leistung gegen Belohnung, Ziele vereinbaren, Ergebnisse kontrollieren. Voraussetzung ist das ökonomisch handelnde Individuum – Fragen nach dem weiteren SINN der Arbeit bleiben offen (Skript).\n\nTRANSFORMATIONALE Führung geht darüber hinaus: Sie verändert WERTE bei den Mitarbeitenden – vermittelt Sinn und Wichtigkeit der Arbeit, inspiriert, wirkt als Vorbild. Die Werteänderung bewirkt höheren Einsatz.\n\nZusammenführung (LV 28): Die Ansätze schließen sich nicht aus – solide transaktionale Basis (faire Ziele, verlässliche Anerkennung) PLUS transformationale Elemente (Sinn, Vorbild) gilt als wirksamste Kombination; gerade im öffentlichen Dienst ist der Gemeinwohl-Sinn der Arbeit eine natürliche transformationale Ressource (Vogel).\n\nPraktische Führungsinstrumente dazu: Anerkennungs- und Kritikgespräch (eigenes Schema) und Teamentwicklung (eigenes Schema)."
    }
  }
});
