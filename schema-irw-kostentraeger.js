/*
 * IRW-Schema: Kostenträgerrechnung – Stück/Zeit, Selbst-/Herstellkosten, Zuschussbedarf
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 04 (Lutz): Kostenträgerbegriff, Kostenträgerstück- vs. -zeitrechnung,
 *    Herstell-/Selbstkosten, Zuschussbedarf (Bad: 11 € vs. 4,50 €), Aufgaben
 *    der Kostenträgerrechnung in der öffentlichen Verwaltung
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kostentraeger",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenträger & Kalkulation",
  title: "Kostenträgerrechnung: Begriffe & Zuschussbedarf",
  description: "WOFÜR sind die Kosten angefallen? Stück- vs. Zeitrechnung, Herstell- vs. Selbstkosten – und wie aus Selbstkosten und politischem Preis der Zuschussbedarf wird (Schwimmbad-Beispiel).",
  start: "start",
  stations: [
    { id: "begriff", label: "Kostenträger" },
    { id: "arten", label: "Arten" },
    { id: "kosten", label: "Kostenbegriffe" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kalkulationsbasis",
    neg: "Ergebnis: untergeordnet",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Kostenträger",
      title: "Wer „trägt“ die Kosten?",
      def: "<b>Kostenträger</b> sind die im Betrieb erstellten Sachgüter und Dienstleistungen – sie haben den Ressourcenverzehr verursacht und müssen ihn deshalb tragen:<br><br>• <b>Externe</b> Kostenträger: Leistungen für Dritte (Winterdienst, Trauung, VHS-Kurs, Baugenehmigung)<br>• <b>Interne</b> Kostenträger: innerbetriebliche Leistungen<br>• <b>Projekte</b><br><br>Die Kostenträgerrechnung ist die dritte Stufe nach Kostenarten- und Kostenstellenrechnung und beantwortet: <b>WOFÜR</b> sind die Kosten entstanden?",
      options: [
        { label: "Stückrechnung oder Zeitrechnung?", next: "q_arten", tone: "pos" }
      ]
    },

    q_arten: {
      station: "arten",
      kind: "frage",
      norm: "Stück vs. Zeit",
      title: "Kostenträgerstück- oder Kostenträgerzeitrechnung?",
      def: "• <b>Kostenträgerstückrechnung („Kalkulation“)</b>: ermittelt die Kosten je Leistungs-/Produkteinheit (Stück-/Selbstkosten) – z. B. was kostet die Leerung einer Biotonne, eine Baugenehmigung, ein Badbesucher? <b>Relevant für öffentliche Verwaltungen!</b><br><br>• <b>Kostenträgerzeitrechnung</b>: stellt die Kosten einer Periode je Kostenträgerart den Erlösen gegenüber (kurzfristige Erfolgsrechnung/Betriebsergebnis).",
      options: [
        { label: "Stückrechnung – die Kalkulation der Verwaltung", next: "q_kosten", tone: "pos" },
        { label: "Zeitrechnung – warum spielt sie kaum eine Rolle?", next: "e_zeit", tone: "neg" }
      ]
    },

    q_kosten: {
      station: "kosten",
      kind: "frage",
      norm: "HK / SK",
      title: "Herstellkosten oder Selbstkosten?",
      def: "• <b>Herstellkosten</b>: alle Kosten bis zur Fertigstellung des Produkts (Schokoladentafel: 0,30 €)<br>• <b>Selbstkosten</b>: Herstellkosten + Verwaltungs- + Vertriebskosten (Tafel: 0,50 €)<br><br>Im öffentlichen Sektor:<br>• Selbstkosten = die <b>kostendeckenden Benutzungsgebühren</b><br>• Bei <b>politischen Preisen</b> (Schwimmbad): Selbstkosten 11 € je Besucher, Eintritt 4,50 € → <b>Zuschussbedarf 6,50 €</b> je Besucher – wichtig fürs Budget des Bäderbereichs im Haushalt<br>• Bei unentgeltlichen Leistungen (Baugenehmigung): Herstellkosten als Vergleichsgröße – Verwaltung A produziert für 340 €, Verwaltung B für 480 € → Einsparpotenziale (meist Ablauforganisation!)",
      options: [
        { label: "Aufgaben zusammenfassen (Ergebnis)", next: "e_stueck", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_stueck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kalkulation",
      title: "Kostenträgerstückrechnung: das Kalkulations-Werkzeug der Verwaltung",
      text: "Die drei Aufgaben der Kostenträgerrechnung in der öffentlichen Verwaltung:\n\n1. KALKULATION von Gebühren, Preisen, Selbstkosten und ggf. Herstellkosten (für zu aktivierende innerbetriebliche Kostenträger)\n2. INFORMATION für preispolitische Entscheidungen (make or buy)\n3. KOSTENKONTROLLE, z. B. interkommunale Vergleiche\n\nMerksätze: Selbstkosten = kostendeckende Gebühr. Zuschussbedarf = Selbstkosten − politischer Preis (Bad: 11,00 − 4,50 = 6,50 € je Besucher). Herstellkosten-Vergleiche decken Einsparpotenziale auf – die häufig in der Ablauforganisation liegen.\n\nWie die Stückkosten konkret berechnet werden, entscheidet das Kalkulationsverfahren → Schema „Kalkulationsverfahren wählen“ und die beiden Rechner (Division / Äquivalenzziffern)."
    },

    e_zeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Zeitrechnung",
      title: "Kostenträgerzeitrechnung: in der Verwaltung Randthema",
      text: "Die Zeitrechnung ermittelt die Kosten eines Abrechnungszeitraums differenziert nach Kostenträgerarten und stellt ihnen die Erlöse gegenüber – das Ergebnis ist die kurzfristige Erfolgsrechnung (Betriebsergebnis).\n\nIn der öffentlichen Verwaltung fehlt es aber in vielen Bereichen an entsprechenden ERLÖSEN (unentgeltliche Leistungen, politische Preise) – deshalb hat die Zeitrechnung hier nur untergeordnete Bedeutung und wird im Skript nicht weiter behandelt.\n\nFür die Verwaltungspraxis zählt die Stückrechnung: Gebühren kalkulieren, Zuschussbedarfe ermitteln, Kosten vergleichen."
    }
  }
});
