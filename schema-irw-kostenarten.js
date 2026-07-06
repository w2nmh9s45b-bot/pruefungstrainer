/*
 * IRW-Schema: Kostenart bestimmen (Gliederung nach Produktionsfaktoren)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 02 (Lutz): Aufgabe der Kostenartenrechnung, drei Gliederungskriterien,
 *    Kostenarten nach Produktionsfaktoren
 *  - PLE 04-08 (Lutz): Personalkosten (drei Bausteine, Produktzeiten,
 *    Personalkostenverrechnungssatz), Materialkosten, Kapitalkosten
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kostenarten",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenartenrechnung",
  title: "Kostenart bestimmen",
  description: "WELCHE Kosten sind entstanden? Die Gliederung nach Produktionsfaktoren: Personal-, Kapital-, Material- oder Dienstleistungskosten – mit den drei Personalkosten-Bausteinen und dem Verrechnungsweg über Produktzeiten.",
  start: "start",
  stations: [
    { id: "aufgabe", label: "Aufgabe" },
    { id: "zuordnung", label: "Zuordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kostenart bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "aufgabe",
      kind: "frage",
      norm: "Kostenartenrechnung",
      title: "Erste Stufe: Welche Kosten sind entstanden?",
      def: "Die <b>Kostenartenrechnung</b> erfasst ALLE Kosten des Abrechnungszeitraums vollständig und gliedert sie für die Weiterverrechnung. Die Kostenarten müssen eindeutig bestimmt sein und dürfen sich inhaltlich nicht überschneiden.<br><br>Drei Gliederungskriterien:<br>1. nach der <b>Art der verbrauchten Produktionsfaktoren</b> (→ Namen der Kostenarten, dieses Schema)<br>2. nach der <b>Zurechenbarkeit</b> auf die Kostenträger (Einzel-/Gemeinkosten → eigenes Schema)<br>3. nach dem <b>Verhalten bei Beschäftigungsänderungen</b> (fix/variabel → Auslastungs-Rechner)",
      options: [
        { label: "Eine Kostenposition dem Produktionsfaktor zuordnen", next: "q_faktor", tone: "pos" }
      ]
    },

    q_faktor: {
      station: "zuordnung",
      kind: "frage",
      norm: "Produktionsfaktoren",
      title: "Welcher Produktionsfaktor wurde verzehrt?",
      def: "Aus der ÖBWL: dispositive und objektbezogene Arbeit → <b>Personalkosten</b>; Betriebsmittel → <b>Kapitalkosten</b>; Werkstoffe → <b>Materialkosten</b>; dazu Fremdleistungen und Abgaben → <b>Dienstleistungskosten</b>.",
      options: [
        { label: "Arbeitsleistung der Beschäftigten", next: "e_personal", tone: "pos" },
        { label: "Nutzung von Anlagevermögen (Gebäude, Fahrzeuge, Maschinen)", next: "e_kapital", tone: "pos" },
        { label: "Verbrauch von Roh-, Hilfs-, Betriebsstoffen", next: "e_material", tone: "pos" },
        { label: "Fremdleistungen oder öffentliche Abgaben", next: "e_dienstleistung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_personal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Personalkosten",
      title: "Personalkosten – drei Bausteine, ein Verteilungsproblem",
      text: "Personalkosten = betriebsbedingter Ressourcenverzehr für die Beschäftigten, aus drei Bausteinen:\n\n1. BEZÜGE (Beamte) / GEHÄLTER (Beschäftigte): die monatlichen Arbeitsvergütungen – Erfassung über die Personalbuchhaltung bzw. externe Dienstleister (z. B. Pfälzische Pensionsanstalt) unproblematisch\n2. SOZIALKOSTEN: gesetzliche/tarifliche AG-Beiträge zur Sozialversicherung, vermögenswirksame Leistungen, Beihilfe, Trennungsgelder sowie freiwillige Zahlungen (Urlaubs-/Weihnachtsgeld, Pensionszusagen)\n3. SONSTIGE PERSONALKOSTEN: Umzugskostenerstattung, Prämien, Fahrtkostenzuschüsse\n\nDas kostenrechnerische Problem ist nicht die Gesamthöhe, sondern die Verteilung auf PRODUKTE: Ein Beschäftigter arbeitet selten nur für ein Produkt (Personalkosten sind i. d. R. Gemeinkosten). Benötigt werden die Produktzeiten – am besten per TÄTIGKEITSERFASSUNG (Stellenbeschreibungen sind oft veraltet!) – multipliziert mit dem Personalkostenverrechnungssatz pro Stunde."
    },

    e_kapital: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kapitalkosten",
      title: "Kapitalkosten – Abschreibung plus Zinsen",
      text: "Kapitalkosten sind die Kosten des Anlagevermögens bzw. der eingesetzten Vermögensgegenstände. Der Einsatz langlebiger Wirtschaftsgüter verursacht zweifachen Wertverzehr:\n\n• Wertverzehr durch WERTMINDERUNG (Abnutzung) → kalkulatorische ABSCHREIBUNG\n• Wertverzehr durch KAPITALBINDUNG → kalkulatorische ZINSEN\n\nBeide sind eigene Schemata in diesem Fach: der AfA-Simulator (AW/WZW/WBW mit Deckungslücken-Vergleich) und der Zins-Rechner (Durchschnittswertverzinsung mit Abzugskapital).\n\nMerke: Kapitalkosten sind typische GEMEINKOSTEN – sie laufen über die Kostenstellenrechnung (BAB)."
    },

    e_material: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Materialkosten",
      title: "Materialkosten – erst der Verbrauch kostet",
      text: "Materialkosten entstehen vom „Aktenordner der Sozialverwaltung bis zum Zement des Betriebshofs“ – aber erst durch den VERBRAUCH, nicht durch Bestellung oder Lagerung (Kostendefinition!).\n\nZwei Rechenschritte:\n1. VERBRAUCHSERMITTLUNG (Menge): Zugangsverfahren, Befund-/Inventurmethode oder Skontrationsrechnung\n2. BEWERTUNG (Preis): bei schwankenden Einkaufspreisen mit dem gewogenen periodischen Durchschnittspreis\n\nMaterialkosten = verbrauchte Menge × Preis. Beides zum Nachrechnen im Schema „Materialkosten-Rechner (Verbrauch & Bewertung)“."
    },

    e_dienstleistung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Dienstleistungskosten",
      title: "Dienstleistungskosten – Fremdleistungen und Abgaben",
      text: "Hierunter fallen die Kosten für von Dritten bezogene Leistungen (Fremdleistungen) sowie öffentliche Abgaben, z. B. die Abwasserabgabe, Kfz-Steuer oder Grundsteuer.\n\nNach dem Kriterium „Art der verbrauchten Produktionsfaktoren“ erhalten die Kostenarten ihre Bezeichnung für die Kostenrechnung – im BAB des Fuhrpark-Falls tauchen entsprechend Zeilen wie Wasser, Strom, Benzin, Diesel, Kfz-Steuer/Versicherung, Ersatzteile und Gebäudeversicherung auf.\n\nFür die Weiterverrechnung zählt dann Kriterium 2: Einzel- oder Gemeinkosten? → nächstes Schema."
    }
  }
});
