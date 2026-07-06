/*
 * OPW-Schema: Leitungssysteme – Ein-Linie, Mehr-Linie oder Stab-Linie?
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.6 (drei Grundmodelle mit Vor- und Nachteilen)
 *  - OPW 07_PLE_Funktionsbereiche_Leitungssysteme
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-leitungssysteme",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Leitungssystem bestimmen",
  description: "Wer darf wem Weisungen erteilen? Ein-Linien-, Mehr-Linien- oder Stab-Liniensystem am Weisungsbild erkennen – mit allen Vor- und Nachteilen für die Klausur.",
  start: "start",
  stations: [
    { id: "diagnose", label: "Weisungsbild" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: System bestimmt",
    neg: "Ergebnis: Konfliktrisiko",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "diagnose",
      kind: "frage",
      norm: "Leitungssysteme",
      title: "Wie laufen Weisungen und Berichte?",
      def: "Ein <b>Leitungssystem</b> (Organisationsform) ist das organisatorische Grundmodell der Zuordnung von <b>Leitungskompetenz</b>; es beschreibt die Kooperations- und Kommunikationswege der Verwaltung. Prüfe das Weisungsbild:",
      options: [
        { label: "Jede Stelle hat genau EINEN Vorgesetzten (fester Dienstweg)", next: "e_einlinie", tone: "pos" },
        { label: "Eine Stelle erhält Weisungen von MEHREREN spezialisierten Leitungen", next: "e_mehrlinie", tone: "pos" },
        { label: "Ein-Linie plus beratende Stelle OHNE Weisungsbefugnis", next: "e_stablinie", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_einlinie: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Ein-Liniensystem",
      title: "Ein-Liniensystem: Einheit des Auftragsempfangs",
      text: "Jede Ausführungsstelle ist über EINE Linie mit einer Leitungsstelle verbunden: Weisungen kommen nur von der unmittelbar vorgesetzten Stelle, berichtet wird nur an sie – der Dienstweg ist zwingend.\n\nVORTEILE: „Einheitlichkeit des Auftragsempfangs“, klare Organisation und Dienstwege, eindeutige Kompetenzzuordnung, Kontrolle der Prozesse durch die Leitung.\n\nNACHTEILE: lange, umständliche Dienstwege (Zeitverlust; Informationsverdichtung und -filterung durch Zwischeninstanzen), Belastung der Leitungsstellen (alles läuft über sie), die strenge Hierarchie begünstigt einen autoritären Führungsstil („Entmündigung der Untergebenen“).\n\nDas Ein-Liniensystem ist die Basis der klassischen Verwaltungsorganisation – und der Ausgangspunkt für Stab-Linie und Bürokratiemodell."
    },

    e_mehrlinie: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Mehr-Liniensystem",
      title: "Mehr-Liniensystem: Spezialisierung gegen Einheitlichkeit",
      text: "Eine Ausführungsstelle ist gleichzeitig MEHREREN Leitungsstellen unterstellt, die jeweils für ihren Verantwortungsbereich spezialisiert sind – der bewusste VERZICHT auf die Einheit der Auftragserteilung.\n\nVORTEILE: kurze Dienstwege, direkte Informationsweitergabe, spezialisierte (fachkundige) Leitungsstellen.\n\nNACHTEILE: Kompetenzkonflikte zwischen den Leitungsstellen, unübersichtliche Kommunikationswege, hoher Koordinationsaufwand, Unsicherheit der Mitarbeitenden bei uneinheitlichen Weisungen („Wem folge ich zuerst?“).\n\nIn der Verwaltungspraxis in Reinform selten; Elemente finden sich in Matrix-Strukturen (Projekt + Linie) – dort müssen die Weisungsrechte besonders sauber abgegrenzt werden."
    },

    e_stablinie: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Stab-Liniensystem",
      title: "Stab-Liniensystem: Entlastung ohne Machtverlust – mit Stabs-Risiken",
      text: "Aus dem Ein-Liniensystem entwickelt: STABSSTELLEN werden direkt einer Leitungsstelle zugeordnet und besitzen KEINE eigene Entscheidungs- und Weisungsbefugnis (z. B. persönlicher Referent, Büro des Verwaltungschefs). Sie entlasten die Leitung quantitativ und qualitativ: Entscheidungsvorbereitung, Fachberatung, Überwachung der Ausführung.\n\nVORTEILE: höhere Qualität der Entscheidungen bei Beibehaltung der Einheit des Auftragsempfangs; Delegation von Vorbereitungsarbeit ohne Machtverlust.\n\nNACHTEILE: Kompetenzkonflikte zwischen Stab und Linienstellen, Aufblähung des Dienstwegs, mögliche „Kompetenzanmaßung“ durch den Stab (die „GRAUE EMINENZ“) und eine mangels Praxiskenntnis rein theoretische Beeinflussung der Leitung.\n\nPraxisform: In Reinkultur existiert keines der Modelle – die Verwaltung kombiniert zur „Stab-Linie mit Querschnittsfunktion“ = Bürokratiemodell (eigenes Schema)."
    }
  }
});
