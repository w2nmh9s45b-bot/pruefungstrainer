/*
 * VWL-Schema: Wirkungen der Inflation – Gewinner und Verlierer
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 2.6 (Wirkungen: Verteilungs- und
 *    Allokationseffekte, Stagflation; Aufgabe 4)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-inflationswirkungen",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Inflation & Geld",
  title: "Wirkungen der Inflation",
  description: "Wer gewinnt, wer verliert? Gläubiger-Schuldner-Argument, Lohn-Lag, kalte Progression, Sachvermögen vs. Geldvermögen – plus Allokationswirkung (Fehlallokation) und der schlimmste Fall: Stagflation.",
  start: "start",
  stations: [
    { id: "betroffene", label: "Betroffene" },
    { id: "wirkung", label: "Wirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Analyse: Wirkung bestimmt",
    neg: "Analyse: Verlierer-Seite",
    frei: "Analyse: Hinweis",
    warn: "Analyse: Zwischenstand"
  },

  nodes: {

    start: {
      station: "betroffene",
      kind: "frage",
      norm: "Verteilungs- & Allokationseffekte",
      title: "Wessen Lage willst du beurteilen?",
      def: "Die Wirkungen der Inflation sind im Wesentlichen <b>negativ</b>: ökonomisch und sozial nachteilige <b>Verteilungs- und Allokationseffekte</b>. (Die Annahme, leichte Inflation fördere die Beschäftigung, ist umstritten – oft ist die Inflation nur Begleiterscheinung expansiver Konjunkturpolitik.)<br><br>Wähle die Perspektive für die Skript-Aufgabe 4 („Wirkungen jeweils anhand eines konkreten Beispiels“):",
      options: [
        { label: "Gläubiger und Schuldner", detail: "Wer profitiert von der Entwertung der Forderungen?", next: "e_glaeubiger", tone: "neutral" },
        { label: "Lohn- und Transferempfänger", detail: "Lohn-Lag-Hypothese", next: "e_lohnlag", tone: "neutral" },
        { label: "Steuerzahler", detail: "kalte Progression", next: "e_kalteprog", tone: "neutral" },
        { label: "Vermögensbesitzer / Gesamtwirtschaft", detail: "Sachvermögen, Fehlallokation, Stagflation", next: "q_vermoegen", tone: "neutral" }
      ]
    },

    q_vermoegen: {
      station: "wirkung",
      kind: "frage",
      norm: "Vermögen & Allokation",
      title: "Vermögensverteilung oder gesamtwirtschaftliche Allokation?",
      def: "Zwei weitere Wirkungskanäle:<br><br>• <b>Vermögensverteilung</b>: Eigentümer von <b>Sachvermögen</b> können ihr Vermögen erhalten – <b>Geldbesitzer</b> nicht. Das soziale Ungleichgewicht wird durch die Inflation vergrößert.<br>• <b>Allokationswirkung</b>: Inflation macht es schwieriger, die <b>Knappheitsrelationen</b> richtig zu erfassen – ökonomische Entscheidungen beruhen auf Fehleinschätzungen → <b>Fehlallokation</b> der Produktionsfaktoren (mit Zusatzkosten und Wohlfahrtsverlusten).",
      options: [
        { label: "Sachvermögen vs. Geldvermögen", next: "e_sachvermoegen", tone: "neutral" },
        { label: "Fehlallokation & Stagflation", next: "e_allokation", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_glaeubiger: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Gläubiger-Schuldner-Argument",
      title: "Schuldner gewinnen, Gläubiger verlieren",
      text: "Bei Preissteigerungen profitieren SCHULDNER und verlieren GLÄUBIGER: Der nominale Rückzahlungsbetrag ist real weniger wert – die Schuld 'schmilzt'.\n\nKonkretes Beispiel (Aufgabe 4): Wer 2021 einen Kredit über 200.000 € aufgenommen hat, zahlt ihn nach Jahren hoher Inflation mit Euros zurück, die deutlich weniger Kaufkraft haben – die Bank (bzw. der Sparer dahinter) trägt den realen Verlust.\n\nGrößter Gewinner ist regelmäßig der STAAT als größter Schuldner der Volkswirtschaft ('Entschuldung durch Inflation').\n\nEinschränkung: Das gilt voll nur für NICHT ANTIZIPIERTE Inflation – erwartete Inflation preisen Gläubiger über höhere Zinsen ein (→ Schema 'Inflationsarten')."
    },

    e_lohnlag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Lohn-Lag-Hypothese",
      title: "Lohn- und Transfereinkommen hinken hinterher",
      text: "Lohn- und Transfereinkommen-Lag-Hypothese: Soziale Gruppen – insbesondere solche, die NICHT von starken Interessenverbänden vertreten werden – hinken mit ihrem Einkommen hinter der allgemeinen Preis- und Lohnentwicklung her.\n\nKonkrete Beispiele (Aufgabe 4): Rentner (Rentenanpassung folgt verzögert), Empfänger von Sozialleistungen (Regelsatzanpassung), Beschäftigte ohne Tarifbindung – ihre realen Einkommen sinken, solange die Anpassung auf sich warten lässt.\n\nGut organisierte Gruppen (starke Gewerkschaften) setzen Inflationsausgleich schneller durch – die Inflation verteilt also VON den schwach Organisierten ZU den stark Organisierten um."
    },

    e_kalteprog: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Kalte Progression",
      title: "Kalte Progression: Umverteilung zugunsten des Staates",
      text: "Inflation verändert die effektive Steuerbelastung: Bei progressiver Einkommensbesteuerung nimmt die Steuer mit wachsendem NOMINALeinkommen überproportional zu. Erhält jemand nur einen Inflationsausgleich (real: null Lohnerhöhung), rutscht er trotzdem in höhere Steuersätze – es kommt zu einer inflationsbedingten Umverteilung ZUGUNSTEN DES STAATES.\n\nKonkretes Beispiel (Aufgabe 4): +5 % Lohn bei +5 % Inflation → Bruttokaufkraft unverändert, aber ein größerer Teil des Einkommens fällt in die Progressionszone des § 32a EStG → netto REAL weniger.\n\nGegenmittel: regelmäßige Tarifanpassung ('Tarif auf Rädern'), Anhebung von Grundfreibetrag und Eckwerten."
    },

    e_sachvermoegen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Sachwerte schlagen Geldwerte",
      title: "Sachvermögen bleibt, Geldvermögen schmilzt",
      text: "Eigentümer von SACHVERMÖGEN (Immobilien, Unternehmen, Aktien, Edelmetalle) können ihr Vermögen im Gegensatz zu GELDBESITZERN (Sparbuch, Bargeld, festverzinsliche Forderungen) erhalten – die Inflation VERGRÖSSERT so das soziale Ungleichgewicht: Wer schon Sachwerte hat, wird relativ reicher; wer nur spart, verliert.\n\nKonkretes Beispiel (Aufgabe 4): 50.000 € auf dem Sparbuch verlieren bei 10 % Inflation in einem Jahr 5.000 € Kaufkraft; eine Immobilie steigt nominal typischerweise mit.\n\nFolge im Verhalten: 'Flucht in Sachwerte' bei hoher Inflation – bis hin zum Funktionsverlust des Geldes als Wertaufbewahrungsmittel (→ Schema 'Geld & Währungsordnung')."
    },

    e_allokation: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Fehlallokation · Stagflation",
      title: "Allokationswirkung – und der schlimmste Fall: Stagflation",
      text: "ALLOKATIONSWIRKUNG: Inflation macht es schwieriger (zumindest aufwendiger), die Knappheitsrelationen und ihre Veränderungen richtig zu erfassen. Beruhen Entscheidungen deshalb auf Fehleinschätzungen, werden Produktionsfaktoren ineffizient verwendet (FEHLALLOKATION) – mit einzel- und gesamtwirtschaftlichen Zusatzkosten und Wohlfahrtsverlusten. Der Preis verliert seine Signal- und Lenkungsfunktion.\n\nSTAGFLATION – die wohl schlimmste Folge: Stagnation MIT Inflation. Entstehung laut Skript: Unternehmen können gestiegene Kosten aus Konkurrenzgründen nicht mehr voll überwälzen → Gewinne sinken → Investitionen unterbleiben → Produktion stagniert, Arbeitslosigkeit entsteht – BEI weiter steigenden Preisen.\n\nDilemma der Politik: Expansive Impulse heizen die Inflation an, restriktive verschärfen die Stagnation – beide Ziele des magischen Vierecks sind gleichzeitig verletzt (→ Schema 'Magisches Viereck (Regler)')."
    }
  }
});
