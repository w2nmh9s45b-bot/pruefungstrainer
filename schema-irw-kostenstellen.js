/*
 * IRW-Schema: Kostenstellenart bestimmen (Vor-/End-, allgemein/Hilfs-/Haupt-/Neben-)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 03 (Lutz): Begriff der Kostenstelle, Grundsätze der Kostenstellenbildung,
 *    abrechnungstechnische (Vor-/End-) und leistungstechnische Gliederung
 *    (allgemeine/Hilfs-/Haupt-/Nebenkostenstellen), Krankenhaus- und Bibliotheks-Beispiel
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kostenstellen",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenstellen & BAB",
  title: "Kostenstellenart bestimmen",
  description: "WO fallen die Kosten an? Kostenstelle einordnen: Vor- oder Endkostenstelle (abrechnungstechnisch), allgemeine/Hilfs-/Haupt-/Nebenkostenstelle (leistungstechnisch) – mit Krankenhaus- und Bibliotheks-Beispielen.",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "einordnung", label: "Einordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Endkostenstelle",
    neg: "Ergebnis: Vorkostenstelle",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Kostenstelle",
      title: "Was ist eine Kostenstelle – und wie wird sie gebildet?",
      def: "Eine <b>Kostenstelle</b> ist ein Ort im Betrieb, an dem Kosten entstehen und Leistungen erbracht werden; sie wird kostenrechnerisch selbstständig geplant, erfasst und kontrolliert. Der Gesetzgeber macht KEINE Gliederungsvorgaben – der Kostenstellenplan wird betriebswirtschaftlich gebildet und soll den konkreten Betrieb erkennbar abbilden (Stadt ≠ Hochschule ≠ Fuhrpark).<br><br><b>Grundsätze der Bildung:</b><br>1. selbstständige Verantwortungsbereiche (Orientierung am Organigramm/der Aufbauorganisation)<br>2. nach betrieblichen Funktionen (Material-, Fertigungs-, Vertriebs-, Verwaltungskostenstellen)<br>3. nach Kostenträgern/Produkten (Hausmüll, Gewerbemüll …)<br>4. nach räumlichen Gesichtspunkten",
      options: [
        { label: "Eine konkrete Stelle einordnen", next: "q_leistung", tone: "pos" }
      ]
    },

    q_leistung: {
      station: "einordnung",
      kind: "frage",
      norm: "Leistungsempfänger",
      title: "Für WEN erbringt die Stelle ihre Leistung?",
      def: "Abrechnungstechnisch zählt nur eins: Gehen die Leistungen direkt an die Kostenträger (Produkte/Bürger) oder an ANDERE Kostenstellen?<br><br>Krankenhaus-Beispiel: Krankenstationen (Unfallchirurgie, Urologie …) leisten am Patienten; Gebäude, Verwaltung, Technik, Heizung, Werkstatt, Küche leisten für andere Stellen.",
      options: [
        { label: "Direkt für Kostenträger/Externe (Bürger, Kunden)", next: "q_end", tone: "pos" },
        { label: "Für andere Kostenstellen (interner Dienstleister)", next: "q_vor", tone: "neg" }
      ]
    },

    q_vor: {
      station: "einordnung",
      kind: "frage",
      norm: "Vorkostenstellen-Typ",
      title: "Welcher Typ Vorkostenstelle liegt vor?",
      def: "Vorkostenstellen (interne Dienstleister, Zwischenstation der Verrechnung) lassen sich untergliedern:<br><br>• <b>Servicekostenstellen</b>: Leistungen, die oft auch Externe anbieten – Druckerei, Fuhrpark, IT-Support, Telefonzentrale<br>• <b>Administrationskostenstellen</b>: innere Verwaltung – Personalwesen, Organisation, Kämmerei<br>• <b>Leitungskostenstellen</b>: übergreifende Führung/Koordination – Behördenleitung<br>• <b>Verrechnungskostenstellen</b>: technische Sammelstellen ohne konkreten Leistungsbezug – Infrastruktur (Grundstücke/Gebäude) und Infrastrukturbetrieb (Heizung, Strom, Wasser)<br><br>Leistungstechnisch entspricht das den <b>allgemeinen Kostenstellen</b> (leisten für fast alle: Gebäude, Heizung) und <b>Hilfskostenstellen</b> (meist nur für Hauptkostenstellen: Werkstatt, Krankenhausküche).",
      options: [
        { label: "Einordnung klar → Ergebnis Vorkostenstelle", next: "e_vor", tone: "neg" }
      ]
    },

    q_end: {
      station: "einordnung",
      kind: "frage",
      norm: "Endkostenstellen-Typ",
      title: "Kerngeschäft oder Nebenprodukt?",
      def: "Leistungstechnisch werden Endkostenstellen unterschieden in:<br><br>• <b>Hauptkostenstellen</b>: erbringen die BETRIEBSTYPISCHE Leistung für Externe – Krankenstationen im KH; Mediennutzung im Lesesaal/außer Haus und Recherchedienst in der Bibliothek<br>• <b>Nebenkostenstellen</b>: erbringen Nebenprodukte außerhalb des Kerngeschäfts – Schwesternheim, Besucher-Cafeteria<br><br>Abrechnungstechnisch werden BEIDE wie Endkostenstellen behandelt.",
      options: [
        { label: "Betriebstypische Leistung → Hauptkostenstelle", next: "e_end", tone: "pos" },
        { label: "Nebenprodukt → Nebenkostenstelle", next: "e_end", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vor: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Vorkostenstelle",
      title: "Vorkostenstelle: Zwischenstation – am Ende auf null",
      text: "Die Stelle erbringt interne Dienstleistungen für andere Kostenstellen (Service, Administration, Leitung oder reine Verrechnungsstelle; leistungstechnisch: allgemeine oder Hilfskostenstelle).\n\nAbrechnungstechnische Konsequenz: Ihre Kosten werden im Teil II des BAB (Sekundärkostenverrechnung/innerbetriebliche Leistungsverrechnung) verursachungsgerecht auf die Endkostenstellen verrechnet – nach Abschluss weist die Vorkostenstelle KEINE Kosten mehr auf.\n\nKrankenhaus-Zuordnung des Skripts: Gebäude, KH-Verwaltung, Management, Technik, Heizung, Parkplätze = allgemeine Kostenstellen; Werkstatt, Krankenwagen-Garage, Küche = Hilfskostenstellen. Bibliothek: Gebäude, Leitung, Heizung, EDV (allgemein); Erwerb, Katalogisierung, Buchbearbeitung (Hilfs).\n\nWeiter mit den Verfahren: Schema „Innerbetriebliche Leistungsverrechnung (Simulator)“."
    },

    e_end: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Endkostenstelle",
      title: "Endkostenstelle: Hier wird für die Kostenträger kalkuliert",
      text: "Die Stelle erbringt ihre Leistungen direkt für die Kostenträger – als Hauptkostenstelle (betriebstypische Leistung: Bau-, Ordnungs-, Jugend-, Sozial-, Standesamt; Krankenstationen; Lesesaal) oder Nebenkostenstelle (Nebenprodukte: Cafeteria, Schwesternheim). Beide werden abrechnungstechnisch gleich behandelt.\n\nIhre Kosten setzen sich am Ende zusammen aus den eigenen Primärkosten plus den per innerbetrieblicher Leistungsverrechnung erhaltenen Sekundärkosten der Vorkostenstellen – diese Summe geht in die Kostenträgerrechnung (Kalkulation) ein.\n\nMerke: Beide Gliederungen (abrechnungs- und leistungstechnisch) sind gleichwertig – im BAB werden allgemeine/Hilfskostenstellen wie Vorkostenstellen und Haupt-/Nebenkostenstellen wie Endkostenstellen behandelt."
    }
  }
});
