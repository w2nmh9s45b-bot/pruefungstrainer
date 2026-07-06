/*
 * IK-Schema: Interkulturelle Kommunikation – Kultur, Kulturstandards, Gesprächsstrategien
 * Fach: Interaktion und Kommunikation (FS 3 – Soziale Kompetenzen am Arbeitsplatz II)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 3):
 *  - PLE 09 IKK Kultur (Kulturfunktionen nach Müller & Gelbrich, Faktoren kultureller
 *    Prägung, Charakteristika der Behördenkommunikation), PLE 10 (GLOBE-Studie),
 *    PLE 11 (Kulturstandards nach Thomas, Fallarbeit), LE 24-26 IKK-Strategien
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-ikk",
  subject: "Interaktion und Kommunikation",
  fs: ["FS3"],
  area: "Moderation & IKK",
  title: "Interkulturelle Kommunikation (IKK)",
  description: "Kultur verstehen (Funktionen, Kulturstandards), die asymmetrische Behördensituation erkennen – und die fünf Gesprächsstrategien für schwierige interkulturelle Situationen anwenden.",
  start: "start",
  stations: [
    { id: "kultur", label: "Kultur" },
    { id: "behoerde", label: "Behördenkontext" },
    { id: "strategien", label: "Strategien" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Strategie gewählt",
    neg: "Ergebnis: Stolperstein",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "kultur",
      kind: "frage",
      norm: "Kulturbegriff",
      title: "Was leistet Kultur – und was sind Kulturstandards?",
      def: "Kultur erfüllt als kollektive Errungenschaft viele <b>Funktionen</b> (Müller & Gelbrich): Orientierung, Sinnstiftung, Identität, Motivation, Koordination, Ordnung, Komplexitätsreduktion, Legitimation. Kulturelle Prägung wirkt über Nation, Religion, Ethnie/Region/Sprache, Geschlecht, Generation, Schicht, Organisation, Profession …<br><br><b>Kulturstandards</b> (Thomas): „alle Arten des Wahrnehmens, Denkens, Wertens und Handelns, die von der Mehrzahl der Mitglieder einer Kultur als normal, selbstverständlich, typisch und verbindlich angesehen werden“ – erlernt und weitergegeben, aber auch modifizierbar. Empirische Basis für Kulturvergleiche: die <b>GLOBE-Studie</b> (House et al., 62 Gesellschaften).",
      hint: "Fallarbeit der PLE 11: Fälle wie „Wie geht es Ihrer Familie?“ mit drei Perspektiven analysieren – Eigenperspektive, Fremdperspektive, Handlungsempfehlung.",
      options: [
        { label: "Warum ist gerade die BEHÖRDE ein schwieriger Ort dafür?", next: "q_behoerde", tone: "pos" }
      ]
    },

    q_behoerde: {
      station: "behoerde",
      kind: "frage",
      norm: "Asymmetrie",
      title: "Die asymmetrische Behördensituation",
      def: "Die Charakteristika prallen aufeinander (PLE 09):<br><br><b>Behörde:</b> vertritt die Institution · Vorschriften und Gesetze als Entscheidungsgrundlage · abstrahiert vom Einzelfall · die Entscheidung beeinflusst das Leben des Klienten · Fachsprache und Schriftlichkeit<br><br><b>Klient:</b> persönliches, oft <b>existenzielles</b> Anliegen · Abhängigkeit · Angst und Misstrauen · muss relevante Daten liefern<br><br>Hauptprobleme sind fehlende <b>Sprachkompetenz</b> UND fehlendes Wissen über <b>behördliche Vorgänge</b> – Skript-Beispiel: Der iranische Klient kennt das Wort „Führerschein“, versteht aber nicht, dass sein iranischer in Deutschland nicht anerkannt wird.",
      options: [
        { label: "Zu den fünf Gesprächsstrategien", next: "q_strategien", tone: "pos" }
      ]
    },

    q_strategien: {
      station: "strategien",
      kind: "frage",
      norm: "5 Strategien",
      title: "Welche Strategie hilft in der Situation?",
      def: "Die Gesprächsstrategien für schwierige interkulturelle Situationen (LE 24–26):",
      options: [
        { label: "Der Klient versteht akustisch/sprachlich schlecht", next: "e_sprache", tone: "pos" },
        { label: "Fachbegriffe und Verfahren kommen nicht an", next: "e_fachsprache", tone: "pos" },
        { label: "Ich bin unsicher, ob ich IHN richtig verstehe", next: "e_zuhoeren", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_sprache: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strategien 1 + 3",
      title: "Paralinguistik und Satzbau bewusst einsetzen",
      text: "STRATEGIE 1 – paralinguistische Mittel: langsam, ausreichend laut, deutlich und möglichst dialektfrei sprechen; kleine SPRECHPAUSEN einbauen, um Wichtiges zu betonen und den Sprecherwechsel zu signalisieren.\n\nSTRATEGIE 3 – bewusster Satzbau: einfache, KURZE Sätze mit fester Wortstellung („Sie brauchen gar nichts machen, das macht alles die Frau X.“).\n\nWichtige Grenze (Skript): KEINE übertrieben vereinfachte „Kindersprache“ („Du schwarz – ich weiß“) – der Sachbearbeiter ist immer auch SPRACHMODELL für den Klienten.\n\nUnterstützend wirken Gestik, Mimik und pantomimische Darstellung (etwa um zu zeigen, wie ein Gabelstapler funktioniert)."
    },

    e_fachsprache: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strategien 2 + 5",
      title: "Fachsprache übersetzen, Verfahren strukturiert darlegen",
      text: "STRATEGIE 2 – bewusster Umgang mit der Fachsprache: notwendige Fachbegriffe ERKLÄREN und UMFORMULIEREN. Skript-Dialog: „Der Urlaubsschein ist gebührenpflichtig.“ – „Was heißt?“ – „Der kostet Geld.“\n\nSTRATEGIE 5 – komplexe Sachverhalte und institutionelle Verfahren darlegen: umformulieren und WIEDERHOLEN; Informationen an den W-FRAGEN strukturieren (Wer? Wo? Wann? …) und AUFSCHREIBEN; im Zweifel für den Klienten VORFORMULIEREN („Das Beste ist, Sie rufen immer mittwochs an – mittwochs ist keine Sprechstunde …“).\n\nDenkanstoß: Oft fehlt nicht das Wort, sondern das VERFAHRENSwissen (Führerschein-Beispiel) – also den Vorgang erklären, nicht nur den Begriff übersetzen. Das ist die interkulturelle Verlängerung der Mayener Empfehlungen."
    },

    e_zuhoeren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strategie 4",
      title: "Unterstützen und aktiv zuhören – Verstehen absichern",
      text: "STRATEGIE 4 – den Klienten beim Sprechen unterstützen und aktiv zuhören: PARAPHRASIEREN und ZUSAMMENFASSEN mit eigenen Worten, konzentriert auf den KERN der Aussage. Diese Strategien sichern ab, dass ich den Klienten richtig verstanden habe – und zeigen ihm zugleich, dass er ernst genommen wird.\n\nDas ist die interkulturelle Anwendung des aktiven Zuhörens aus FS 1 (vier Techniken) – erschwert durch Sprachbarrieren, also: mehr Geduld, mehr Rückversicherung, langsameres Tempo.\n\nGesamtbild: Die fünf Strategien minimieren die typischen Schwierigkeiten der asymmetrischen Behördenkommunikation. Sie ersetzen keine Kulturkompetenz (Kulturstandards kennen, Eigen- und Fremdperspektive wechseln – Fallarbeit PLE 11), machen aber das konkrete Gespräch sofort besser."
    }
  }
});
