/*
 * IK-Schema: Mobbing-Diagnose (Abgrenzung zum "normalen" Konflikt)
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - PP-Folien zum Lehrvideo der LV 12_Mobbing (Definition: negative Handlungen,
 *    systematisch, mind. 1x/Woche, mind. 6 Monate; Cybermobbing; Prävalenzen)
 *  - Praesentation zur LV 14 (Handlungsoptionen, Dienstvereinbarung),
 *    BauA 2019 "Wenn aus Kollegen Feinde werden", Lehrplan FS II (OLE 01–03)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-mobbing",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Konflikte & Mobbing",
  title: "Mobbing diagnostizieren",
  description: "Konflikt oder Mobbing? Die drei Abgrenzungskriterien (systematisch, mindestens wöchentlich, mindestens sechs Monate) prüfen – mit Handlungsoptionen für Betroffene, Führungskräfte und Organisation.",
  start: "start",
  stations: [
    { id: "handlungen", label: "Handlungen" },
    { id: "kriterien", label: "Kriterien" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Handeln",
    neg: "Ergebnis: Mobbing",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "handlungen",
      kind: "frage",
      norm: "Negative Handlungen",
      title: "Richten sich negative Handlungen gegen eine Person?",
      def: "Von <b>Mobbing</b> spricht man, wenn eine oder mehrere Personen (Mobbingtäter*innen) <b>negative Handlungen</b> gegen eine Person richten – z. B. Ausgrenzen, Gerüchte, Anschreien, sinnlose oder entwürdigende Aufgaben, Informationsentzug, soziale Isolation.<br><br>Sonderform <b>Cybermobbing</b>: dieselben Mechanismen über digitale Medien (Chats, E-Mail, soziale Netzwerke) – mit größerer Reichweite und Dauerhaftigkeit.",
      options: [
        { label: "Ja – jetzt die drei Abgrenzungskriterien prüfen", next: "q_kriterien", tone: "pos" },
        { label: "Es gibt Streit, aber keine gezielten negativen Handlungen", next: "e_konflikt", tone: "warn" }
      ]
    },

    q_kriterien: {
      station: "kriterien",
      kind: "frage",
      norm: "3 Kriterien",
      title: "Systematisch, wiederholt, über längeren Zeitraum?",
      def: "Mobbing grenzt sich vom gewöhnlichen sozialen Konflikt über DREI Kriterien ab – die negativen Handlungen erfolgen:<br><br>1. <b>systematisch</b> (gezielt gegen die Person gerichtet)<br>2. <b>wiederholt</b>: mindestens <b>einmal pro Woche</b><br>3. über einen längeren Zeitraum: mindestens <b>sechs Monate</b><br><br><i>Prävalenz je nach Definition und Methode: Mobbing-Report 2002: 2,7 % aktuell bis 11,3 % jemals; BAuA 2019: 6,7–17,1 %.</i>",
      options: [
        { label: "Alle drei Kriterien erfüllt", next: "e_mobbing", tone: "neg" },
        { label: "Einzelner Vorfall oder kurzzeitiger Streit", next: "e_konflikt", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_mobbing: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Mobbing",
      title: "Mobbing: Psychoterror mit System – jetzt strukturiert handeln",
      text: "Alle drei Kriterien (systematisch, mindestens wöchentlich, mindestens sechs Monate) sind erfüllt – das ist kein normaler Konflikt mehr, sondern eine extreme Form sozialer Belastung mit erheblichen Folgen für Gesundheit, Leistung und Betriebsklima (BAuA: „Wenn aus Kollegen Feinde werden“).\n\nHANDLUNGSOPTIONEN nach Perspektiven (OLE 02):\n• BETROFFENE: Vorfälle dokumentieren (Mobbing-Tagebuch), das Geschehen frühzeitig ansprechen, Unterstützung holen (Vertrauensperson, Personalrat, Führungskraft, ärztliche/psychologische Hilfe)\n• FÜHRUNGSKRAFT: Fürsorgepflicht! Hinweise ernst nehmen, früh eingreifen, Gespräche mit allen Beteiligten führen, klare Grenzen setzen\n• ORGANISATION: Prävention durch Klima- und Führungsarbeit sowie klare Regeln – Instrument auf kollektiver Ebene ist die DIENSTVEREINBARUNG zum Umgang mit Konflikten und Mobbing (LV 14; Mitbestimmung des Personalrats nach LPersVG)\n\nBenachbartes Thema: Gewalt durch Externe (Bürger) → Gewaltprävention (OLE 03: Lagebild, Eskalationsursachen, organisatorische Prävention)."
    },

    e_konflikt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Konflikt, kein Mobbing",
      title: "(Noch) kein Mobbing – aber ein Konflikt, der Klärung braucht",
      text: "Fehlen Systematik, wöchentliche Wiederholung oder die Sechs-Monats-Dauer, liegt kein Mobbing im fachlichen Sinn vor – sondern ein sozialer Konflikt oder ein einzelner Übergriff. Das ist wichtig für die Wortwahl: Der Mobbing-Begriff sollte nicht inflationär verwendet werden, sonst verliert er seine Schutzfunktion für echte Fälle.\n\nABER: Aus ungelösten, chronifizierten Konflikten kann Mobbing ENTSTEHEN – die Eskalationsdynamik (Glasl-Stufen 4 ff.: Koalitionen, Gesichtsangriffe) ist der typische Nährboden.\n\nDeshalb jetzt: Konfliktform bestimmen (Schema „Sozialer Konflikt: Begriff & Formen“), Eskalationsstufe einschätzen (Glasl-Simulator) und früh das Gespräch suchen (Schema „Konfliktgespräch“). Einzelne gravierende Vorfälle (Beleidigung, Bedrohung, Gewalt) sind unabhängig davon sofort zu behandeln – ggf. dienst- und arbeitsrechtlich."
    }
  }
});
