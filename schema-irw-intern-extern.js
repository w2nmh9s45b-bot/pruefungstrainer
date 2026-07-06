/*
 * IRW-Schema: Internes vs. externes Rechnungswesen – Einordnung + § 12 GemHVO
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 01 / PLE 01(1) (Lutz bzw. Lutz/Bersch): Überblick Rechnungswesen,
 *    Adressaten, Vergleichstabelle, § 12 GemHVO, Zwecke der KLR
 *  - § 12 GemHVO am Volltext verifiziert (Gesetze/md/Kommunalrecht/GemHV_RP_2006.md)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-intern-extern",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Grundlagen & Begriffe",
  title: "Internes vs. externes Rechnungswesen",
  description: "Wer soll informiert werden? Adressaten, Ziele, Rechtsgrundlagen und Rechnungsgrößen der beiden Rewe-Zweige auseinanderhalten – plus § 12 GemHVO und die vier Zwecke der KLR.",
  start: "start",
  stations: [
    { id: "einordnung", label: "Einordnung" },
    { id: "merkmale", label: "Merkmale" },
    { id: "rechtsgrundlage", label: "§ 12 GemHVO" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Internes Rechnungswesen",
    neg: "Ergebnis: Externes Rechnungswesen",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "einordnung",
      kind: "frage",
      norm: "Adressaten",
      title: "Für wen wird gerechnet?",
      def: "Das Rechnungswesen ermittelt Geld- und Leistungsströme mengen- und wertmäßig und informiert darüber. Die Gretchenfrage lautet: <b>WER</b> soll informiert werden?<br><br>• <b>Externe Adressaten</b>: Finanzbehörde, Kreditinstitute, Gläubiger, Aufsichtsbehörden, Bürger, Politik, Öffentlichkeit<br>• <b>Interne Adressaten</b>: Verwaltungs-/Betriebsleitung, Führungskräfte, Controlling",
      options: [
        { label: "Außenstehende sollen informiert werden (Banken, Aufsicht, Bürger)", next: "e_extern", tone: "neg" },
        { label: "Entscheidungsträger IM Betrieb sollen gesteuert werden", next: "q_merkmale", tone: "pos" },
        { label: "Erst die Merkmale beider Zweige vergleichen", next: "q_merkmale", tone: "warn" }
      ]
    },

    q_merkmale: {
      station: "merkmale",
      kind: "frage",
      norm: "Vergleichstabelle",
      title: "Die vier Vergleichskriterien",
      def: "<b>Externes Rechnungswesen</b> (Finanzbuchhaltung):<br>• Adressaten: außerhalb des Betriebs<br>• Ziel: Rechenschaftslegung, Information über Vermögen, Schulden, Reinvermögen<br>• Rechtsgrundlagen: HGB, GemHVO, GemO, AktG, GmbHG<br>• Rechnungsgrößen: <b>Aufwand und Ertrag</b><br>• Bestandteile: Buchführung, Inventar, Jahresabschluss (Bilanz, GuV)<br><br><b>Internes Rechnungswesen</b> (KLR):<br>• Adressaten: Entscheidungsträger im Betrieb<br>• Ziele: Gebührenkalkulation, Wirtschaftlichkeitskontrolle, Steuerungsunterstützung<br>• Rechtsgrundlagen: KAG, § 12 GemHVO<br>• Rechnungsgrößen: <b>Kosten und Leistungen</b><br>• Bestandteile: Kostenrechnung, Anlagenbuchhaltung",
      hint: "Merkhilfe: Extern = Rechenschaft nach außen mit Aufwand/Ertrag; intern = Steuerung nach innen mit Kosten/Leistungen.",
      options: [
        { label: "Wozu braucht die Verwaltung die KLR konkret?", next: "q_zwecke", tone: "pos" },
        { label: "Was sagt § 12 GemHVO?", next: "q_gemhvo", tone: "pos" }
      ]
    },

    q_zwecke: {
      station: "merkmale",
      kind: "frage",
      norm: "4 Zwecke",
      title: "Die vier Zwecke der KLR",
      def: "1. <b>Preis- und Gebührenkalkulation</b> – Benutzungsgebühren für Friedhöfe, Wasser-/Abwasserbetriebe, Bürgerhäuser (kostendeckend!)<br>2. <b>Wirtschaftlichkeitskontrolle</b> – wie wirtschaftlich arbeitet die Verwaltung?<br>3. <b>Interne Verrechnungspreise</b> – für die innerbetriebliche Leistungsverrechnung<br>4. <b>Steuerungsunterstützung</b> – Produktionsprogramm bei freiwilligen Aufgaben, Eigen- oder Fremdfertigung (Outsourcing), Rechtsformwahl",
      options: [
        { label: "Weiter zur Rechtsgrundlage § 12 GemHVO", next: "q_gemhvo", tone: "pos" }
      ]
    },

    q_gemhvo: {
      station: "rechtsgrundlage",
      kind: "frage",
      norm: "§ 12 GemHVO",
      title: "Muss eine Kommune in RLP eine KLR führen?",
      def: "<b>§ 12 GemHVO – Kosten- und Leistungsrechnung</b> (am Volltext verifiziert):<br><br>• Abs. 1: Nach den örtlichen Bedürfnissen <b>KANN</b> als Grundlage für die Verwaltungssteuerung sowie für die Beurteilung der Wirtschaftlichkeit und Leistungsfähigkeit eine KLR für alle Bereiche der Verwaltung geführt werden.<br>• Abs. 2: Die Kosten und Erlöse sind aus der Buchführung <b>nachprüfbar herzuleiten</b>.<br>• Abs. 3: Die <b>Bürgermeisterin/der Bürgermeister</b> regelt die Grundsätze über Art und Umfang in einer <b>Dienstanweisung</b> und legt sie dem Gemeinderat zur <b>Kenntnisnahme</b> vor.",
      hint: "Klausurfalle: Bis 2016 hieß es „soll“, seit der Änderung nur noch „kann“ – die KLR ist also keine Pflicht mehr, sondern steht im Ermessen nach den örtlichen Bedürfnissen.",
      options: [
        { label: "„Kann“ – also Ermessen der Kommune", next: "e_intern", tone: "pos" },
        { label: "Wieso entscheidet nicht der Rat per Beschluss?", next: "e_dienstanweisung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_extern: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Externes Rewe",
      title: "Externes Rechnungswesen (Finanzbuchhaltung)",
      text: "Für Außenstehende wird über das EXTERNE Rechnungswesen berichtet: Buchführung, Inventar und Jahresabschluss (Bilanz und GuV) bilden die finanzielle Situation ab – Rechenschaftslegung über Vermögen, Schulden und Reinvermögen.\n\nRechtsgrundlagen: HGB, GemHVO, GemO, AktG, GmbHG. Rechnungsgrößen: Aufwand und Ertrag.\n\nDie KLR arbeitet dagegen mit Kosten und Leistungen für interne Adressaten. Beide Zweige hängen zusammen: § 12 Abs. 2 GemHVO verlangt, dass Kosten und Erlöse aus der Buchführung nachprüfbar hergeleitet werden."
    },

    e_intern: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Internes Rewe",
      title: "Internes Rechnungswesen: Steuern mit Kosten und Leistungen",
      text: "Die KLR versorgt die Entscheidungsträger im Betrieb: Gebührenkalkulation, Wirtschaftlichkeitskontrolle, interne Verrechnungspreise und Steuerungsunterstützung (Eigen-/Fremdfertigung, freiwillige Aufgaben, Rechtsformwahl).\n\nRechtsgrundlage in RLP: § 12 GemHVO – eine KLR KANN (seit 2016, vorher „soll“) nach den örtlichen Bedürfnissen für alle Bereiche geführt werden; Kosten und Erlöse müssen aus der Buchführung nachprüfbar herzuleiten sein; die Grundsätze regelt der Bürgermeister per Dienstanweisung (Rat: Kenntnisnahme). Für die Gebührenkalkulation kommt das KAG hinzu.\n\nRechnungsgrößen: Kosten (leistungsbedingter Ressourcenverzehr) und Leistungen – weiter mit dem Schema „Geschäftsvorfall einordnen“."
    },

    e_dienstanweisung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 12 III GemHVO",
      title: "Dienstanweisung des Bürgermeisters – Rat nur Kenntnisnahme",
      text: "§ 12 Abs. 3 GemHVO weist die Regelung von Art und Umfang der KLR ausdrücklich der Bürgermeisterin/dem Bürgermeister zu: Sie/er erlässt eine DIENSTANWEISUNG und legt sie dem Gemeinderat lediglich zur KENNTNISNAHME vor.\n\nDas passt zur Organisationshoheit der Verwaltungsleitung über die inneren Abläufe – die KLR ist ein Instrument der laufenden Verwaltungssteuerung, kein Beschlussgegenstand des Rates.\n\nMerke fürs Kommunalrecht: Kenntnisnahme ≠ Zustimmung; der Rat kann die Dienstanweisung nicht abändern."
    }
  }
});
