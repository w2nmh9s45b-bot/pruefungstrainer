/*
 * OPW-Schema: Das Bürokratiemodell – Aufbau, Qualitäten, Schwachstellen
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 3.1 (Stab-Linie mit Querschnittsfunktion, Weber,
 *    Sonderrolle der Querschnittsämter, drei systembedingte Schwachstellen)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-buerokratiemodell",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Organisationsmodelle",
  title: "Bürokratiemodell: Aufbau & Schwachstellen",
  description: "Das Stab-Liniensystem mit Querschnittsfunktion nach Max Weber: bewährte Qualitäten, die Sonderrolle der Querschnittsämter – und die drei systembedingten Schwachstellen als Klausurfrage.",
  start: "start",
  stations: [
    { id: "aufbau", label: "Aufbau" },
    { id: "schwachstellen", label: "Schwachstellen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Modell verstanden",
    neg: "Ergebnis: Schwachstelle",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "aufbau",
      kind: "frage",
      norm: "Weber-Modell",
      title: "Wie ist das Bürokratiemodell gebaut?",
      def: "Keines der Grundmodelle existiert in Reinform – die Verwaltungen kombinierten die positiven Elemente zum <b>„Stab-Liniensystem mit Querschnittsfunktion“</b> = Bürokratiemodell (im Wesentlichen vor ~100 Jahren von <b>Max Weber</b> beschrieben, bis heute kaum verändert):<br><br>• Basis: <b>Ein-Liniensystem</b>, jede Einheit hierarchisch aus Leitungs- und Ausführungsstellen<br>• <b>Facheinheiten</b> mit Sach- und Fachverantwortung (externe Produkte)<br>• <b>Querschnittseinheiten</b> (Zentralabteilung, Haupt-/Personalamt) mit Sonderrolle: Servicefunktion + Stabsfunktion für die Verwaltungsführung + übertragene <b>Leitungsfunktion mit Weisungsbefugnis</b> und voller <b>Ressourcenverantwortung</b> (sie entscheiden z. B. über neue Stellen im Sozialamt und führen die Stellenbewertung durch); dazu Bürobetriebsdienste (Registratur, Botendienst, Druckerei …)<br><br><b>Qualitäten:</b> Zuverlässigkeit, Stabilität, Rechtssicherheit, Berechenbarkeit, Transparenz, weitgehende Korruptionsfreiheit.",
      options: [
        { label: "Zu den drei systembedingten Schwachstellen", next: "q_schwaechen", tone: "pos" }
      ]
    },

    q_schwaechen: {
      station: "schwachstellen",
      kind: "frage",
      norm: "3 Schwachstellen",
      title: "Welche Schwachstelle zeigt der Fall?",
      def: "Trotz der Qualitäten arbeitet die Verwaltung im Bürokratiemodell zunehmend ineffektiv – aus organisatorischer Sicht wegen dreier <b>systembedingter Schwachstellen</b>. Ordne den Fall zu:",
      options: [
        { label: "Fachamt entscheidet die Sache, Geld/Stellen entscheidet die Zentrale", next: "e_trennung", tone: "neg" },
        { label: "Zentralabteilung „leitet“ lieber, statt zu unterstützen", next: "e_stabfunktion", tone: "neg" },
        { label: "Ressourcen werden zugewiesen, Ergebnisse nie geprüft", next: "e_input", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_trennung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schwachstelle 1",
      title: "Trennung von Fach- und Ressourcenverantwortung",
      text: "Die Gesamtverantwortung (Ergebnisverantwortung) zerfällt in zwei Teilverantwortungen: Die QUERSCHNITTSÄMTER besitzen die RESSOURCENVERANTWORTUNG (Kompetenz über die Bereitstellung der Mittel – „Geld = Ressource“), die FACHÄMTER die volle SACH- UND FACHVERANTWORTUNG.\n\nFolge der „zersplitterten“ Verantwortung: Niemand verantwortet das ERGEBNIS als Ganzes. Das Fachamt kann sagen „wir hatten zu wenig Ressourcen“, die Zentrale „wir kennen das Fachgeschäft nicht“ – Wirtschaftlichkeit und Leistung bleiben zwischen den Zuständigkeiten liegen.\n\nNSM-Antwort: ZUSAMMENFÜHRUNG von Fach- und Ressourcenverantwortung dezentral in den Fachbereichen („dezentrale Ressourcenverantwortung“, Leitbild „Konzern Stadt“) – mit Budgets statt Einzelbewilligungen (→ Schema „NSM“)."
    },

    e_stabfunktion: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schwachstelle 2",
      title: "Die problematische Stabfunktion der Querschnittseinheiten",
      text: "Die Querschnittseinheiten bündeln Service-, Stabs- UND Leitungsfunktion – und diese Sonderstellung hat sich als problematisch erwiesen: Viele Zentralabteilungen und Haupt-/Personalämter BEVORZUGEN ihre Stellung als „Verwaltungsführung“ und versuchen – überspitzt – mehr zu LEITEN als in kooperativer Zusammenarbeit zu UNTERSTÜTZEN.\n\nDie wichtige SERVICEFUNKTION wird dabei mehr und mehr vernachlässigt; die Fachämter erleben die Zentrale als Bremse statt als Dienstleister.\n\nNSM-Antwort: Querschnittseinheiten werden zu SERVICEEINHEITEN mit klarer Dienstleisterrolle (interne Produkte, teils mit Leistungsverrechnung); die Steuerung übernimmt die Verwaltungsführung über Ziele und Kontrakte – nicht die Zentrale über Einzeleingriffe."
    },

    e_input: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schwachstelle 3",
      title: "Input-Steuerung: Zuweisung ohne Ergebnisblick",
      text: "Die bisherige „Steuerung“ beschränkt sich darauf, den Fachämtern ZUSTÄNDIGKEITEN und RESSOURCEN (Personal, Sach- und Finanzmittel) zuzuweisen – wesentliches Instrument ist der jährliche HAUSHALTSPLAN mit seinen Ausgabeermächtigungen.\n\nWie die Fachämter arbeiten und welche ERGEBNISSE (Output) sie erzielen, wird von der Zentrale grundsätzlich nicht hinterfragt – die Fachämter legen oft selbst fest, welche messbaren Ergebnisse sie produzieren. Die ernüchternde Skript-Frage: Werden die Fachämter überhaupt gesteuert?\n\nNSM-Antwort: OUTPUT-STEUERUNG – definierte PRODUKTE mit Leistungsvorgaben, Budgets, Berichtswesen und Controlling machen Ergebnisse sichtbar und steuerbar (→ Schema „NSM“).\n\nKlausur-Merksatz: Die drei Schwachstellen heißen (1) Trennung von Fach- und Ressourcenverantwortung, (2) Stabfunktion der Querschnittseinheiten, (3) Input-Steuerung."
    }
  }
});
