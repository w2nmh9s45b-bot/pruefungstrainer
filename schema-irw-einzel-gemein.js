/*
 * IRW-Schema: Einzel- oder Gemeinkosten? (+ Stelleneinzel-/Stellengemeinkosten)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 02 (Lutz): Gliederung nach der Zurechenbarkeit (Einzel-/Gemeinkosten,
 *    Streusalz-/Führungsebenen-Beispiele)
 *  - PLE 09-12 (Lutz): Stelleneinzel-/Stellengemeinkosten mit den
 *    Verteilungsgrundlagen-Tabellen der Primärkostenverrechnung
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-einzel-gemein",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenartenrechnung",
  title: "Einzel- oder Gemeinkosten?",
  description: "Zurechenbarkeit auf den Kostenträger: direkt (Einzelkosten) oder nur über die Kostenstellenrechnung (Gemeinkosten)? Zweite Ebene: Stelleneinzel- vs. Stellengemeinkosten mit den passenden Verteilungsgrundlagen.",
  start: "start",
  stations: [
    { id: "traeger", label: "Kostenträger" },
    { id: "stelle", label: "Kostenstelle" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: zugeordnet",
    neg: "Ergebnis: Umweg nötig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "traeger",
      kind: "frage",
      norm: "Zurechenbarkeit",
      title: "Lässt sich die Kostenart EINEM Produkt direkt zurechnen?",
      def: "Dieses Kriterium braucht die Vollkostenrechnung für den Verrechnungsweg:<br><br>• <b>Einzelkosten</b> fallen ausschließlich für EIN Produkt an – Skript-Beispiel: Streusalz nur für den Winterdienst. Sie gehen DIREKT von der Kostenarten- in die Kostenträgerrechnung (in der Praxis selten!).<br>• <b>Gemeinkosten</b> fallen für MEHRERE Produkte an – Personalkosten der Führungsebene, Heizkosten der Büros, Kapitalkosten, Versicherungen. Sie brauchen den Umweg über die Kostenstellenrechnung.",
      options: [
        { label: "Ja – fällt nur für ein Produkt an", next: "e_einzel", tone: "pos" },
        { label: "Nein – betrifft mehrere Produkte", next: "q_stelle", tone: "neg" }
      ]
    },

    q_stelle: {
      station: "stelle",
      kind: "frage",
      norm: "Stellenbezug",
      title: "Und auf der Kostenstelle: direkt oder per Schlüssel?",
      def: "Gemeinkosten werden im BAB auf die Kostenstellen verteilt. Dieselbe Logik wie beim Kostenträger wiederholt sich eine Ebene höher:<br><br>• <b>Kostenstelleneinzelkosten</b>: belegmäßig einer Stelle zurechenbar – Material (Materialentnahmescheine), Strom/Wasser/Gas (Zähler je Stelle), Fotokopien (Aufzeichnungsbuch), Abschreibungen (Anlagennachweise), Personalkosten (Gehaltslisten)<br>• <b>Kostenstellengemeinkosten</b>: nur über einen möglichst verursachungsgerechten <b>Verteilungsschlüssel</b> – Heizkosten (qm oder Heizkörper), Reinigung (qm), Betriebshaftpflicht (Mitarbeiterzahl), Sozialabgaben (Entgelte/Bezüge), Grundsteuer (Fläche)",
      options: [
        { label: "Beleg vorhanden → Stelleneinzelkosten", next: "e_stelleneinzel", tone: "pos" },
        { label: "Nur Schlüssel möglich → Stellengemeinkosten", next: "e_stellengemein", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_einzel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Einzelkosten",
      title: "Einzelkosten: Abkürzung direkt zum Kostenträger",
      text: "Die Kosten fallen ausschließlich für ein Produkt an und können ihm sofort zugerechnet werden – wie das Streusalz dem Produkt „Winterdienst“.\n\nVerrechnungsweg: Kostenartenrechnung → DIREKT → Kostenträgerrechnung; die Kostenstellenrechnung wird übersprungen.\n\nAber Achtung: Einzelkosten sind in der betrieblichen Praxis SELTEN. Der Gemeinkostencharakter der meisten Kostenarten ist gerade der Grund, warum eine Kostenstellenrechnung überhaupt erforderlich ist."
    },

    e_stelleneinzel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Stelleneinzelkosten",
      title: "Kostenstelleneinzelkosten: per Beleg auf die Stelle",
      text: "Bezogen auf den Kostenträger sind es Gemeinkosten, aber der KOSTENSTELLE lassen sie sich wertmäßig genau zurechnen, weil Belege existieren:\n\n• Material → Materialentnahmescheine\n• Strom/Wasser/Gas → Zähler in den einzelnen Kostenstellen\n• Fotokopien → Aufzeichnungsbuch\n• Abschreibungen → Anlagennachweise der Kostenstellen\n• Personalkosten → Gehaltslisten\n\nIm BAB (Teil I, Primärkostenverrechnung) werden sie ihrer Stelle direkt zugewiesen – die Summe aller verteilten Beträge muss dem Gemeinkostenvolumen der Kostenartenrechnung entsprechen."
    },

    e_stellengemein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Stellengemeinkosten",
      title: "Kostenstellengemeinkosten: nur per Verteilungsschlüssel",
      text: "Die Kosten fallen für mehrere Kostenstellen gemeinsam an – eine direkte Zuordnung scheitert. Die Zurechnung erfolgt über einen möglichst VERURSACHUNGSGERECHTEN Verteilungsschlüssel:\n\n• Heizkosten → qm-Zahl der Kostenstelle oder Anzahl der Heizkörper\n• Reinigungskosten → qm der gereinigten Räume\n• Betriebshaftpflicht → Anzahl der Mitarbeiter\n• Sozialabgaben → Entgelte/Bezüge der Beschäftigten\n• Grundsteuer → Flächengröße in qm\n\nLeitgedanke ist das Verursachungsprinzip: Jede Stelle trägt nur, was sie verursacht hat. Wie die Verteilung im BAB konkret aussieht → Schema „BAB & Primärkostenverrechnung“."
    }
  }
});
