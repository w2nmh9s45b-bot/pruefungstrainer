/*
 * IK-Schema: Beurteilungsfehler in der Personenwahrnehmung diagnostizieren
 * Fach: Interaktion und Kommunikation (FS 1) – Klausurschwerpunkt laut Lehrplan
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - LV02 OLE01 Lehrbrief Soziale Wahrnehmung_2023 (Definitionen, Studien:
 *    Robin Taylor, Quiz-Studie Ross, Rosenthal/Jacobson; Zwei-Schritte-Attribution)
 *  - Uebersicht ueber das FS I (Lernziele: die fünf Fehler unterscheiden können)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-beurteilungsfehler",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Soziale Wahrnehmung",
  title: "Beurteilungsfehler diagnostizieren",
  description: "Der Klausur-Klassiker des FS 1: Welcher Fehler der Personenwahrnehmung liegt vor? First Impression Error, Halo-Effekt, Similar-to-me, fundamentaler Attributionsfehler oder sich selbst erfüllende Prophezeiung – nach Fehlerquelle systematisch bestimmt.",
  start: "start",
  stations: [
    { id: "quelle", label: "Fehlerquelle" },
    { id: "diagnose", label: "Diagnose" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Fehler bestimmt",
    neg: "Ergebnis: kein Fehler",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "quelle",
      kind: "frage",
      norm: "3 Fehlerquellen",
      title: "Woraus speist sich die (Fehl-)Beurteilung?",
      def: "Wahrnehmung ist subjektiv: Sinnesorgane, Aufmerksamkeit, Erfahrungen, Gefühle, Bedürfnisse, Einstellungen und Erwartungen filtern mit. Bei der <b>Personenwahrnehmung</b> („das erste, entscheidende Stadium jeder Interaktion“) unterlaufen uns drei Kategorien von Beurteilungsfehlern:<br><br>1. aufgrund <b>beobachtbarer Merkmale</b> der Person (Aussehen, Auftreten, erster Eindruck)<br>2. aufgrund des <b>Verhaltens</b> der Person (Ursachenzuschreibung)<br>3. aufgrund von <b>Voreinstellungen</b> der beurteilenden Person (Erwartungen, Vorurteile)",
      options: [
        { label: "Beobachtbare Merkmale prägen das Urteil", next: "q_merkmale", tone: "pos" },
        { label: "Aus dem Verhalten wird auf die Person geschlossen", next: "e_attribution", tone: "pos" },
        { label: "Eigene Erwartungen steuern Urteil UND Geschehen", next: "e_prophezeiung", tone: "pos" }
      ]
    },

    q_merkmale: {
      station: "diagnose",
      kind: "frage",
      norm: "Merkmalsfehler",
      title: "Welcher Mechanismus wirkt?",
      def: "Drei Fehler aus beobachtbaren Merkmalen:<br><br>• Der <b>erste Eindruck</b> bleibt trotz neuer, widersprechender Informationen bestehen<br>• <b>Ein</b> hervorstechendes Merkmal färbt auf ganz andere, unabhängige Eigenschaften ab<br>• Die Person wirkt sympathisch, weil sie <b>mir ähnlich</b> ist",
      options: [
        { label: "Erster Eindruck wird nicht mehr korrigiert", next: "e_first", tone: "pos" },
        { label: "Ein Merkmal überstrahlt den Gesamteindruck", next: "e_halo", tone: "pos" },
        { label: "Ähnlichkeit erzeugt Sympathie-Bonus", next: "e_similar", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_first: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "First Impression Error",
      title: "Fehler des ersten Eindrucks (First Impression Error)",
      text: "Tendenz, eine Person aufgrund des ERSTEN Eindrucks zu beurteilen: Nachfolgende Informationen werden dem ersten Eindruck untergeordnet – auch bei verändertem Sachstand findet keine Anpassung statt (Skript-Beispiel: Die Leistungsverschlechterung nach gutem ersten Eindruck wird nicht bemerkt, und umgekehrt).\n\nDahinter stecken zwei Fachmechanismen: der PRIMACY-EFFEKT (früh erhaltene Informationen wirken stärker als spätere) und der CONFIRMATION BIAS (wir suchen und sehen bevorzugt Informationen, die unsere Annahme bestätigen).\n\nGegenstrategie: Urteile bewusst offenhalten, gezielt nach widersprechenden Informationen suchen, Beurteilungen zeitlich strecken (z. B. mehrere Arbeitsproben statt Blitzurteil im Vorstellungsgespräch)."
    },

    e_halo: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Halo-Effekt",
      title: "Halo-Effekt: Ein Merkmal überstrahlt alles",
      text: "Ein einzelnes positives Merkmal (Attraktivität, Auftreten, Beruf …) dominiert den Gesamteindruck – von ihm wird auf andere, PASSEND erscheinende Eigenschaften geschlossen. Der Fehler liegt darin, dass die Aspekte tatsächlich unabhängig sind: Attraktive gelten als intelligenter, „Bio“ als vollwertiger.\n\nStudie „Robin sieht nicht aus wie ein Philosoph“ (Forgas): Derselbe Aufsatz wurde besser bewertet, wenn das Foto einen älteren Brillenträger statt einer leger gekleideten jungen Frau zeigte – das Bild überstrahlte Person UND Essay.\n\nNegative Variante: Teufelshörner-/Horn-Effekt (eine zentrale negative Eigenschaft bahnt den negativen Gesamteindruck).\n\nGegenstrategie: Eigenschaften einzeln und anhand konkreter Beobachtungen beurteilen (Kriterienraster statt Gesamtgefühl)."
    },

    e_similar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Similar-to-me",
      title: "Similar-to-me-Effekt: Der Ähnlichkeits-Bonus",
      text: "Tendenz, Personen positiver wahrzunehmen, die man sich selbst als ähnlich empfindet – bei Werten, Gewohnheiten und Einstellungen ebenso wie bei Alter, Geschlecht, Herkunft, Beruf oder sogar dem gleichen Geburtstag.\n\nErklärung: Ähnliche Menschen stellen uns nicht infrage, sondern bestätigen uns; außerdem können wir uns besser in sie hineinversetzen.\n\nPraxisfolge im Personalbereich: Auswahlverantwortliche bevorzugen (unbewusst) Bewerbende, die ihnen ähneln – das trägt zu fehlender Diversität in Verwaltungen bei.\n\nGegenstrategie: strukturierte Interviews, anforderungsbezogene Kriterien, gemischte Auswahlkommissionen."
    },

    e_attribution: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Fund. Attributionsfehler",
      title: "Fundamentaler Attributionsfehler: Person statt Situation",
      text: "Grundlage ist die Attributionstheorie (Heider): Wir erklären beobachtetes Verhalten wie „Amateurwissenschaftler“ durch Ursachenzuschreibung – INTERNAL (Disposition: Persönlichkeit, Einstellung) oder EXTERNAL (Situation). Beispiel: Der Vater schreit sein Kind an – geringe Erziehungskompetenz oder das Kind lief gerade auf die Straße?\n\nDer FUNDAMENTALE ATTRIBUTIONSFEHLER (Ross; Correspondence Bias) ist die Tendenz, dispositionale Einflüsse zu ÜBER- und situative zu UNTERschätzen. Quiz-Studie: Fragensteller wurden für gebildeter gehalten als Antwortende – obwohl die Rollenverteilung den Vorteil erklärte.\n\nVier Gründe: (1) Die Situation ist für Beobachtende praktisch unsichtbar, (2) die Person tritt als „Figur“ wahrnehmungstechnisch hervor, (3) selbstschützende Erklärungen („mir kann das nicht passieren“), (4) der bequeme Zwei-Schritte-Prozess: Schritt 1 internal/spontan, Schritt 2 situativ/anstrengend – und wird oft übersprungen.\n\nGegenstrategie: Schritt 2 bewusst gehen – „Welche situativen Erklärungen gäbe es?“."
    },

    e_prophezeiung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Selbsterfüllende Prophezeiung",
      title: "Sich selbst erfüllende Prophezeiung (Pygmalion-Effekt)",
      text: "Eine Vorhersage, die sich erfüllt, WEIL man sich (bewusst oder unbewusst) so verhält, dass sie sich erfüllen muss – Erwartungen sind handlungsleitend.\n\nKlassische Studie (Rosenthal/Jacobson): Zufällig als „Aufblüher“ etikettierte Schulkinder steigerten sich tatsächlich stärker, weil die Lehrkräfte sie anders behandelten – (1) herzlicheres Klima, (2) mehr und schwierigeres Material, (3) mehr und positiveres Feedback, (4) mehr Gelegenheiten und Zeit. Umgekehrt wirkt der Effekt auch negativ (Golem-Richtung: erwartete Unfähigkeit → keine Förderung → Leistungsabfall).\n\nIm Berufskontext: Personalverantwortliche mit positiver Erwartung führten Bewerbungsgespräche freundlicher und bekamen tatsächlich bessere Bewerberleistungen (Bestätigungsstrategie).\n\nWichtig: kein bewusstes Handeln, sondern automatisches Denken – Gegenmittel ist das Bewusstmachen der eigenen Erwartungen und faire, gleiche Behandlung."
    }
  }
});
