/*
 * OPW-Schema: Die Stellenbeschreibung – Grundlage der Stellenwirtschaft
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - OPW 12_PLE (Stellenwirtschaft, Stellenbeschreibung stellen- nicht personen-
 *    bezogen), OPW_14_WLE (KGSt-Gliederung 1–7, Beispiel Fachassistenz Jobcenter,
 *    Merke-Folie), Skript_FS I 2023 Kap. 2.2.3
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-stellenbeschreibung",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Stellenwirtschaft",
  title: "Stellenbeschreibung prüfen",
  description: "Stellenbezogen, nie personenbezogen: die KGSt-Gliederung der Stellenbeschreibung in sieben Punkten – und der Check, was hineingehört und was nicht.",
  start: "start",
  stations: [
    { id: "funktion", label: "Funktion" },
    { id: "inhalt", label: "Inhalts-Check" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: gehört hinein",
    neg: "Ergebnis: gehört NICHT hinein",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "funktion",
      kind: "frage",
      norm: "Grundlage der Stellenwirtschaft",
      title: "Wozu dient die Stellenbeschreibung?",
      def: "Die <b>Stellenbeschreibung</b> beschreibt schriftlich und verbindlich, nach einheitlichen Kriterien, die wesentlichen Merkmale einer Stelle – insbesondere die <b>nicht nur vorübergehend</b> auszuübenden Tätigkeiten samt Anforderungsprofil (erforderliche Aus- und Fortbildung).<br><br>Sie ist die elementare <b>Arbeitsgrundlage</b> für BEIDE Instrumente der Stellenwirtschaft: die Stellen<b>bewertung</b> (qualitativ) und die Stellen<b>bemessung</b> (quantitativ). Weitere Funktionen: Klarheit über Aufgaben und Verantwortung, Grundlage für Ausschreibung, Einarbeitung und Beurteilung.<br><br>KGSt-Gliederung: 1. Organisatorische Einordnung · 2. Aufgabenbeschreibung (21 allgemein, 22 detailliert) · 3. Erforderliche Fachkenntnisse · 4. Dienstliche Beziehungen/Kontakte · 5. Selbstständigkeit/Handlungsspielraum · 6. Verantwortung (61 Ausführungs-, 62 Leitungsverantwortung) · 7. Besondere Anforderungen · Schluss/Ausfertigung.",
      options: [
        { label: "Inhalts-Check: Gehört die Angabe in die Beschreibung?", next: "q_inhalt", tone: "pos" }
      ]
    },

    q_inhalt: {
      station: "inhalt",
      kind: "frage",
      norm: "Stellen- vs. personenbezogen",
      title: "Was steht zur Prüfung an?",
      def: "Die eiserne Regel: Die Stellenbeschreibung ist <b>immer stellenbezogen, nie personenbezogen</b>. Prüfe die Angabe:",
      options: [
        { label: "Dauerhaft auszuübende Tätigkeiten und ihre Zeitanteile", next: "e_gehoert", tone: "pos" },
        { label: "Erforderliche Fachkenntnisse/Ausbildung für die Stelle", next: "e_gehoert", tone: "pos" },
        { label: "Besondere Fähigkeiten und Leistungen des jetzigen Inhabers", next: "e_gehoert_nicht", tone: "neg" },
        { label: "Kurzzeitige Sonderaufgabe aus dem letzten Projekt", next: "e_voruebergehend", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_gehoert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Gehört hinein",
      title: "Stellenbezogen und dauerhaft: hinein damit",
      text: "Dauerhaft auszuübende Tätigkeiten (mit Zeitanteilen!) und das stellenbezogene Anforderungsprofil (erforderliche Aus-/Fortbildung, Fachkenntnisse) sind der Kern der Stellenbeschreibung – personenUNABHÄNGIG formuliert.\n\nIn der KGSt-Gliederung: Die Tätigkeiten gehören zu Punkt 2 (Aufgabenbeschreibung, allgemein und detailliert), die Fachkenntnisse zu Punkt 3, dazu Kontakte (4), Handlungsspielraum (5) und die Verantwortung (6 – getrennt nach Ausführungs- und Leitungsverantwortung).\n\nWER die Beschreibung fertigt: sinnvollerweise die Führungskraft gemeinsam mit dem/der Stelleninhaber/in, abgestimmt mit der Organisationsabteilung – die Verbindlichkeit entsteht durch die Ausfertigung.\n\nDie Zeitanteile je Tätigkeit sind später Gold wert: für die Bemessung (Mengengerüst) und für die Bewertung (Arbeitsvorgänge und ihr Zeitmaß, § 12 TVöD)."
    },

    e_gehoert_nicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Personenbezogen",
      title: "Persönliche Eigenschaften und Leistungen: draußen bleiben",
      text: "Die Merke-Folie des Skripts ist eindeutig: Persönliche Eigenschaften oder besondere Fähigkeiten und Leistungen des Stelleninhabers sind NICHT Bestandteil der Stellenbeschreibung.\n\nWarum: Die Stelle ist der personenunabhängige „Platzhalter“ (theoretischer Arbeitsplatz). Würde die Beschreibung auf die Person zugeschnitten, wären Bewertung und Bemessung verzerrt – bewertet würde der Mensch statt der Funktion, und beim Wechsel des Inhabers stimmte nichts mehr.\n\nWohin gehören Personenmerkmale stattdessen? In die BEURTEILUNG (Leistung der Person), ins ANFORDERUNGSPROFIL nur als stellenbezogene Erfordernisse, und wünschenswerte Extras allenfalls in die Ausschreibung – klar getrennt von den Muss-Anforderungen.\n\nMerksatz: Beschrieben wird der Stuhl, nicht wer darauf sitzt."
    },

    e_voruebergehend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Nur vorübergehend",
      title: "Vorübergehende Aufgaben: kein Fall für die Stellenbeschreibung",
      text: "Die Stellenbeschreibung erfasst die NICHT NUR VORÜBERGEHEND auszuübenden Tätigkeiten – kurzzeitige Sonderaufgaben, Projektepisoden oder Vertretungssplitter gehören nicht hinein.\n\nGrund: Bewertung und Bemessung sollen die DAUERHAFTE Funktion abbilden. Auch tariflich zählt für die Eingruppierung die „gesamte nicht nur vorübergehend auszuübende Tätigkeit“ (§ 12 TVöD) – vorübergehend übertragene höherwertige Tätigkeiten werden gesondert behandelt (Zulage nach § 14 TVöD, siehe Fach ATR).\n\nPraxisfolge: Ändert sich das Aufgabenbild DAUERHAFT (neue Daueraufgabe, wesentliche Verschiebung der Zeitanteile), ist die Stellenbeschreibung fortzuschreiben – und Bewertung wie Bemessung sind zu überprüfen. Genau deshalb gehört die Pflege der Stellenbeschreibungen zur laufenden Organisationsarbeit."
    }
  }
});
