/*
 * VWL-Schema: Inlandskonzept oder Inländerkonzept? (BIP vs. BNE, HDI)
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "LV 3.4 VWL II_PLE 01 - 04" (Lutz), Kap. 1.3 (Inlands-/Inländerkonzept, BNE),
 *    Kap. 1.7 (Human Development Index)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-bip-bne-konzepte",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Volkswirtschaftliche Gesamtrechnung",
  title: "BIP oder BNE? Inlands- vs. Inländerkonzept",
  description: "Der Grenzpendler-Test: Wessen Leistung zählt zum BIP, wessen Einkommen zum BNE? Inlandskonzept vs. Inländerkonzept sauber trennen – plus Wohlstandsmessung jenseits des BIP (HDI).",
  start: "start",
  stations: [
    { id: "fall", label: "Fall" },
    { id: "konzept", label: "Konzept" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Zuordnung: getroffen",
    neg: "Zuordnung: Abgrenzung",
    frei: "Zuordnung: Hinweis",
    warn: "Zuordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "fall",
      kind: "frage",
      norm: "Inland ↔ Inländer",
      title: "Wo wird produziert – und wo wohnt der Leistungsträger?",
      def: "Zwei Konzepte, zwei Kennzahlen:<br><br>• <b>BIP (Inlandskonzept)</b>: misst die Leistung, die <b>im Inland</b> erbracht wurde – egal, ob die Leistungsträger im Inland oder Ausland <b>wohnen</b>. → <b>Produktionsindikator</b><br>• <b>BNE (Inländerkonzept)</b>: misst die Einkommen der <b>Inländer</b> (= Personen/Institutionen mit ständigem Wohnsitz/Sitz im Inland) – egal, <b>wo</b> sie erwirtschaftet wurden. → <b>Einkommensindikator</b><br><br><b>Wichtig:</b> Die <b>Nationalität</b> ist für die Frage „Inländer oder Ausländer“ <b>unbedeutend</b> – es zählt der ständige Wohnsitz!",
      options: [
        { label: "Person wohnt im Ausland, arbeitet im Inland", detail: "z. B. Grenzpendler aus Luxemburg nach Trier", next: "e_nur_bip", tone: "neutral" },
        { label: "Person wohnt und arbeitet im Inland", next: "e_beides", tone: "neutral" },
        { label: "Inländer erzielt Einkommen im Ausland", detail: "z. B. Grenzpendler von Lahnstein nach Luxemburg", next: "e_nur_bne", tone: "neutral" },
        { label: "Wohlstand umfassender messen als mit BIP/BNE?", next: "q_hdi", tone: "warn" }
      ]
    },

    q_hdi: {
      station: "konzept",
      kind: "frage",
      norm: "HDI",
      title: "Wohlstandsmessung jenseits der VGR: der HDI",
      def: "BIP und BNE sind wichtige Bestimmungsfaktoren des Wohlstands – zur umfassenden Beurteilung von <b>Wohlstand und Wohlfahrt</b> sollten aber auch <b>nicht-monetäre</b> Indikatoren herangezogen werden.<br><br>Der <b>Human Development Index (HDI)</b> misst den Entwicklungsstand eines Landes aus drei Komponenten:<br>• <b>Lebenserwartung</b> (bei der Geburt)<br>• <b>Ausbildung</b> (Alphabetisierung, Einschulungsraten)<br>• <b>Kaufkraft</b> (BIP pro Kopf)<br><br>Herausgeber: die Vereinten Nationen (<b>UNDP</b>, jährlicher Human Development Report).",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_hdi", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_nur_bip: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nur BIP",
      title: "Zählt zum BIP – nicht zum BNE",
      text: "Die Person mit ständigem Wohnsitz im Ausland erbringt ihre Leistung IM INLAND:\n• BIP (Inlandskonzept): JA – die Produktion findet innerhalb der Staatsgrenzen statt.\n• BNE (Inländerkonzept): NEIN – die Person ist kein Inländer; ihr Einkommen fließt als 'Primäreinkommen an die übrige Welt' ab.\n\nÜbergang in der Verteilungsrechnung: BIP + Primäreinkommen AUS der übrigen Welt − Primäreinkommen AN die übrige Welt = BNE (→ Schema 'VGR-Rechner').\n\nMerkhilfe: BIP fragt 'WO produziert?', BNE fragt 'WER (wohnhaft wo) verdient?'."
    },

    e_beides: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "BIP und BNE",
      title: "Zählt zu BIP UND BNE",
      text: "Inländer erbringt Leistung im Inland – der Normalfall:\n• BIP (Inlandskonzept): JA – Produktion innerhalb der Staatsgrenzen.\n• BNE (Inländerkonzept): JA – Einkommen eines Inländers.\n\nDeshalb liegen BIP und BNE in Deutschland nah beieinander: Der weit überwiegende Teil der Wertschöpfung wird von Inländern im Inland erbracht; nur der Saldo der Primäreinkommen mit der übrigen Welt trennt die beiden Größen.\n\nBeachte: Auch ausländische Staatsangehörige mit ständigem WOHNSITZ in Deutschland sind Inländer – die Nationalität spielt keine Rolle!"
    },

    e_nur_bne: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nur BNE",
      title: "Zählt zum BNE – nicht zum deutschen BIP",
      text: "Der Inländer erzielt sein Einkommen im AUSLAND:\n• BIP (Inlandskonzept): NEIN – die Produktion findet außerhalb der Staatsgrenzen statt (sie zählt zum BIP des Tätigkeitslandes).\n• BNE (Inländerkonzept): JA – Einkommen eines Inländers; es fließt als 'Primäreinkommen aus der übrigen Welt' zu.\n\nKlassisches Beispiel: Grenzpendler, die in Luxemburg oder der Schweiz arbeiten und in Deutschland wohnen – Luxemburgs BIP liegt deshalb deutlich über seinem BNE (viele Einpendler), bei Pendler-Wohnländern ist es umgekehrt.\n\nDas BNE ist damit der EINKOMMENSindikator: Wie hoch sind die in einem Jahr bezogenen Einkommen der Inländer (= wirtschaftliche Leistung der Inländer)?"
    },

    e_hdi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Human Development Index",
      title: "HDI: Wohlstand ist mehr als BIP",
      text: "Der Human Development Index (UNDP, jährlich im Human Development Report) kombiniert Lebenserwartung bei der Geburt, Bildungsindikatoren (Alphabetisierung der Erwachsenen, Einschulungsraten in Grund-, Sekundär- und Hochschulen) und BIP pro Kopf (Kaufkraft).\n\nWarum die Erweiterung? Das BIP misst Produktion – nicht Verteilung, Gesundheit, Bildung, Umweltqualität oder unbezahlte Arbeit. Zwei Länder mit gleichem BIP/Kopf können sehr unterschiedliche Lebensverhältnisse bieten.\n\nEinordnung ins Fach: gleiche Stoßrichtung wie das magische SECHSECK (gerechte Verteilung, Umweltschutz als zusätzliche Ziele) – Wohlfahrt umfassender denken als reines Wachstum."
    }
  }
});
