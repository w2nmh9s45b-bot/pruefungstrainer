/*
 * IRW-Schema: Kostenrechnungssystem bestimmen (Zeitbezug × Umfang)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 01 (Lutz): Kap. 1.3 Kostenrechnungssysteme (Ist-/Normal-/Plankosten,
 *    Voll-/Teilkosten, Kombinationen, Verwaltungspraxis) und Aufbau der Kostenrechnung
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kostenrechnungssysteme",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Grundlagen & Begriffe",
  title: "Kostenrechnungssystem bestimmen",
  description: "Zwei Stellschrauben, ein System: Zeitbezug der Kosten (Ist/Normal/Plan) und Umfang der Verrechnung (Voll/Teil) – und warum die Verwaltung meist mit Vollkosten auf Ist-/Normalkostenbasis rechnet.",
  start: "start",
  stations: [
    { id: "zeit", label: "Zeitbezug" },
    { id: "umfang", label: "Umfang" },
    { id: "aufbau", label: "Aufbau" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: System bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zeit",
      kind: "frage",
      norm: "Zeitbezug",
      title: "Mit welchen Kosten wird gerechnet – wann fallen sie an?",
      def: "Erstes Klassifikationsmerkmal ist der <b>Zeitbezug</b> der verrechneten Kosten:<br><br>• <b>Istkosten</b>: die in einer VERGANGENEN Periode tatsächlich angefallenen Kosten – Normalfall der Kalkulation<br>• <b>Normalkosten</b>: statistische Mittelwerte (Durchschnitt) aus den Istkosten mehrerer früherer Perioden – glätten „Kostenausreißer“; üblich bei Personalkosten<br>• <b>Plankosten</b>: erst ZUKÜNFTIG entstehende Kosten = Planpreis × Planmenge (z. B. Planenergiepreis × Planenergiemenge einer Bädereinrichtung)",
      options: [
        { label: "Tatsächliche Kosten der letzten Periode → Istkosten", next: "q_umfang", set: { zeit: "ist" }, tone: "pos" },
        { label: "Durchschnitt mehrerer Vorperioden → Normalkosten", next: "q_umfang", set: { zeit: "normal" }, tone: "pos" },
        { label: "Erwartete künftige Kosten → Plankosten", next: "q_umfang", set: { zeit: "plan" }, tone: "pos" }
      ]
    },

    q_umfang: {
      station: "umfang",
      kind: "frage",
      norm: "Verrechnungsumfang",
      title: "Wie viele Kosten werden auf die Kostenträger verrechnet?",
      def: "Zweites Merkmal ist der <b>Umfang der Kostenverrechnung</b>:<br><br>• <b>Vollkostenrechnung</b>: SÄMTLICHE Kosten der Periode werden nach einem Kalkulationsverfahren auf die Kostenträger verrechnet. In der Verwaltungspraxis vorherrschend – die Forderung nach <b>kostendeckenden Benutzungsgebühren</b> verlangt die vollen Kosten; auch für die Wirtschaftlichkeitskontrolle relevant.<br>• <b>Teilkostenrechnung</b>: Nur ein Teil (bekannteste Form: nur die VARIABLEN Kosten) wird zugerechnet, Fixkosten bleiben außen vor – für Entscheidungen über das Produktionsprogramm (z. B. Schließung der Sauna im Bäderbetrieb: auf Vollkostenbasis käme man zum falschen Ergebnis!).",
      options: [
        { label: "Alle Kosten verrechnen → Vollkostenrechnung", next: "q_aufbau", set: { umfang: "voll" }, tone: "pos" },
        { label: "Nur variable Kosten → Teilkostenrechnung", next: "e_teil", set: { umfang: "teil" }, tone: "pos" },
        { label: "Warum reicht die Vollkostenrechnung für Programmentscheidungen nicht?", next: "e_teil", tone: "warn" }
      ]
    },

    q_aufbau: {
      station: "aufbau",
      kind: "frage",
      norm: "3 Stufen",
      title: "Der formale Aufbau der Vollkostenrechnung",
      def: "Ein Vollkostenrechnungssystem gliedert sich in drei Bereiche:<br><br>1. <b>Kostenartenrechnung</b> – WELCHE Kosten sind entstanden? (Erfassen und Gliedern: Personal-, Material-, Kapital-/kalkulatorische Kosten, Fremdleistungen)<br>2. <b>Kostenstellenrechnung</b> – WO sind die Kosten angefallen? (verursachungsgerechte Verteilung der Gemeinkosten auf Bauhof, Bauamt, Standesamt …)<br>3. <b>Kostenträgerrechnung</b> – WOFÜR? (Kalkulation der Stückkosten: Leerung der Biotonne, Trauung, Hallenbadbesucher)",
      hint: "Einzelkosten überspringen die Kostenstellenrechnung und gehen direkt in die Kostenträgerrechnung; Gemeinkosten nehmen den Umweg über den BAB.",
      options: [
        { label: "System steht – Ergebnis anzeigen", next: "e_voll", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Vollkostenrechnung",
      title: "Vollkostenrechnung – der Standard der Verwaltungspraxis",
      text: "Das Kostenrechnungssystem entsteht aus der KOMBINATION beider Kriterien – z. B. Vollkostenrechnung auf Istkostenbasis oder auf Normalkostenbasis. In der Verwaltungspraxis findet man vorwiegend die Vollkostenrechnung auf Basis von Ist- und Normalkosten.\n\nGrund: Die Bürger sollen über kostendeckende Benutzungsgebühren die TATSÄCHLICH angefallenen Kosten bezahlen (Gebührenkalkulation); auch die Wirtschaftlichkeitskontrolle braucht die vollen Kosten.\n\nAblauf über die drei Stufen: Kostenartenrechnung (welche?) → Kostenstellenrechnung (wo?) → Kostenträgerrechnung (wofür?). Die einzelnen Stufen haben eigene Schemata in diesem Fach."
    },

    e_teil: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Teilkostenrechnung",
      title: "Teilkostenrechnung – für Entscheidungen, nicht für Gebühren",
      text: "Bei der Teilkostenrechnung wird bewusst auf die Zurechnung aller Kosten verzichtet: In der bekanntesten Form werden nur die VARIABLEN Kosten den Produkten zugeordnet, weil die Fixkosten unabhängig von der Leistungsmenge anfallen.\n\nIhr Einsatzfeld ist die Entscheidungsunterstützung, z. B. ob im Bäderbetrieb (Schwimmhalle, Sauna, Solarium) die Sauna geschlossen werden soll: Die Fixkosten laufen bei Schließung weiter – eine Vollkostenrechnung würde die Einsparung überschätzen und zum falschen Ergebnis führen.\n\nFür die Gebührenkalkulation ist sie ungeeignet; dort gilt die Vollkostenrechnung (kostendeckende Gebühren). Merke: Kenntnis von fixen und variablen Kosten ist die Voraussetzung der Teilkostenrechnung → Schema „Fixe und variable Kosten (Auslastungs-Rechner)“."
    }
  }
});
