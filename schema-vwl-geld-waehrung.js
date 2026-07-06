/*
 * VWL-Schema: Geldfunktionen & Währungsordnung
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 3 (Währungsordnung, Funktionen
 *    des Geldes)
 *  - GG Art. 73 I Nr. 4, Art. 88 (Volltext geprüft: Gesetze/md/Verfassungsrecht/Grundgesetz.md)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-geld-waehrung",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Inflation & Geld",
  title: "Geldfunktionen & Währungsordnung",
  description: "„Geld ist, was gilt!“ – Tauschmittel, Wertaufbewahrung oder Recheneinheit? Die drei Geldfunktionen mit ihren notwendigen Eigenschaften, dazu die Währungsordnung (Art. 73, 88 GG, Bundesbank, EZB).",
  start: "start",
  stations: [
    { id: "funktion", label: "Geldfunktion" },
    { id: "ordnung", label: "Währungsordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Einordnung: Funktion bestimmt",
    neg: "Einordnung: Funktionsverlust",
    frei: "Einordnung: Hinweis",
    warn: "Einordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "funktion",
      kind: "frage",
      norm: "3 Geldfunktionen",
      title: "Welche Funktion erfüllt das Geld in deinem Beispiel?",
      def: "<b>Geldbegriff:</b> „Geld ist, was gilt!“ – zum Geld zählen Aktiva, die im nationalen Zahlungsverkehr zur Bezahlung von Gütern und zur Erfüllung von Verbindlichkeiten <b>allgemein akzeptiert</b> werden („überall und zu jeder Zeit für alle Güter“).<br><br>Die drei Funktionen mit ihren notwendigen Eigenschaften:<br>1. <b>Allgemeines Tausch- und Zahlungsmittel</b> → Knappheit, Handlichkeit<br>2. <b>Wertaufbewahrungsmittel</b> → Wertbeständigkeit<br>3. <b>Recheneinheit</b> → weitgehende Teilbarkeit",
      options: [
        { label: "Ware gegen Geld statt Naturaltausch → Tausch-/Zahlungsmittel", detail: "Lästige Umwege des Naturaltauschs entfallen", next: "e_tausch", tone: "neutral" },
        { label: "Ersparnisse in die Zukunft übertragen → Wertaufbewahrung", detail: "Bildung von Ersparnissen, Übertragbarkeit in die Zukunft", next: "e_wert", tone: "neutral" },
        { label: "Verschiedene Leistungen vergleichbar machen → Recheneinheit", detail: "Addition verschiedener Leistungen, Preisauszeichnung", next: "e_rechen", tone: "neutral" },
        { label: "Was zerstört die Inflation zuerst?", next: "q_inflation", tone: "warn" }
      ]
    },

    q_inflation: {
      station: "funktion",
      kind: "frage",
      norm: "Inflation & Geldfunktionen",
      title: "Inflation frisst die Geldfunktionen – in welcher Reihenfolge?",
      def: "Steigende Inflationsraten greifen die Funktionen nacheinander an:<br><br>1. Zuerst fällt die <b>Wertaufbewahrung</b> aus (Voraussetzung Wertbeständigkeit!) – Flucht in Sachwerte.<br>2. Bei galoppierender Inflation versagt die <b>Recheneinheit</b> – Preise werden täglich neu ausgezeichnet oder in Fremdwährung notiert.<br>3. Zuletzt stirbt das <b>Tauschmittel</b> – Rückfall in Naturaltausch und Ersatzwährungen (Zigarettenwährung 1945–48).",
      options: [
        { label: "Verstanden – zur Währungsordnung", next: "q_ordnung", tone: "pos" }
      ]
    },

    q_ordnung: {
      station: "ordnung",
      kind: "frage",
      norm: "Art. 73, 88 GG",
      title: "Wer hat die Währungshoheit – und wer sichert die Preisstabilität?",
      def: "<b>Währungsordnung</b> = alle Gesetze und Vorschriften, die das Geldwesen eines Staates und seine Beziehungen zu ausländischen Geldsystemen regeln (Währungshoheit, Währungseinheit, gesetzliches Zahlungsmittel, Befugnisse der geldschaffenden Institutionen …).<br><br>Bausteine in Deutschland:<br>• <b>Art. 73 I Nr. 4 GG</b>: ausschließliche Gesetzgebung des Bundes über das Währungs-, Geld- und Münzwesen<br>• <b>Art. 88 GG</b>: Der Bund errichtet eine Währungs- und Notenbank als <b>Bundesbank</b>; ihre Aufgaben können der <b>EZB</b> übertragen werden, die <b>unabhängig</b> und dem vorrangigen Ziel der <b>Preisstabilität</b> verpflichtet ist<br>• BBankG (1957), Drittes Euro-Einführungsgesetz (1999), StWG (1967), KWG, AWG, EUV/AEUV",
      options: [
        { label: "Alles klar – Ergebnis anzeigen", next: "e_ordnung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_tausch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Tausch- & Zahlungsmittel",
      title: "Funktion 1: Allgemeines Tausch- und Zahlungsmittel",
      text: "Geld macht den Naturaltausch überflüssig: Ware direkt gegen Geld statt der lästigen Suche nach dem doppelten Tauschpartner ('double coincidence of wants').\n\nNotwendige Eigenschaften: KNAPPHEIT (sonst wertlos) und HANDLICHKEIT (teilbar, transportabel, haltbar).\n\nZahlungsmittelfunktion umfasst auch die Erfüllung von Verbindlichkeiten (Steuern, Schulden) – deshalb ist der Euro als GESETZLICHES Zahlungsmittel definiert, das zur Schuldentilgung angenommen werden muss."
    },

    e_wert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Wertaufbewahrung",
      title: "Funktion 2: Wertaufbewahrungsmittel",
      text: "Geld erlaubt die Bildung von Ersparnissen und die Übertragung von Kaufkraft in die Zukunft – heute verdienen, später ausgeben.\n\nNotwendige Eigenschaft: WERTBESTÄNDIGKEIT – und genau die zerstört Inflation. Schon schleichende Inflation halbiert die Kaufkraft über Jahrzehnte; bei galoppierender Inflation flüchten alle in Sachwerte.\n\nDeshalb ist Preisniveaustabilität das vorrangige Ziel der EZB (Art. 88 S. 2 GG; Inflation nahe 2 %) – sie schützt die Wertaufbewahrungsfunktion und damit Sparer und Altersvorsorge (→ Schema 'Wirkungen der Inflation')."
    },

    e_rechen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Recheneinheit",
      title: "Funktion 3: Recheneinheit",
      text: "Geld macht verschiedene Leistungen addierbar und vergleichbar: Alle Güter werden in EINER Einheit bewertet – Grundlage jeder Preisauszeichnung, Buchführung, Bilanz und der gesamten VGR (BIP in Euro!).\n\nNotwendige Eigenschaft: weitgehende TEILBARKEIT (Cent-Beträge).\n\nOhne gemeinsame Recheneinheit bräuchte man für n Güter n·(n−1)/2 Austauschverhältnisse – mit Geld genügen n Preise. Bei Hyperinflation weicht die Wirtschaft auf stabile Fremdwährungen als Recheneinheit aus ('Dollarisierung')."
    },

    e_ordnung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Währungsordnung",
      title: "Währungsordnung: Bund → Bundesbank → EZB",
      text: "Die Kette der Währungsverfassung:\n1. Art. 73 I Nr. 4 GG: Der BUND hat die ausschließliche Gesetzgebung über Währungs-, Geld- und Münzwesen.\n2. Art. 88 S. 1 GG: Der Bund errichtet eine Währungs- und Notenbank als BUNDESBANK (BBankG 1957).\n3. Art. 88 S. 2 GG: Ihre Aufgaben und Befugnisse können im Rahmen der EU der EUROPÄISCHEN ZENTRALBANK übertragen werden – die UNABHÄNGIG und dem vorrangigen Ziel der Sicherung der PREISSTABILITÄT verpflichtet ist.\n\nWeitere Bausteine: Drittes Euro-Einführungsgesetz (1999), Gesetz über das Kreditwesen (1961), Außenwirtschaftsgesetz (1961), StWG (1967), EUV/AEUV.\n\nDie EZB sieht Preisstabilität als erreicht, wenn die Inflation in der Eurozone nahe 2 % im Jahr liegt – gemessen am harmonisierten Index (VPI-EWU/HVPI, → Schema 'VPI & Inflationsrate')."
    }
  }
});
