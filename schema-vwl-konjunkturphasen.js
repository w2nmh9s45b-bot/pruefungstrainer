/*
 * VWL-Schema: Konjunkturphase diagnostizieren
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 1.1, 1.2 (Stabilisierungspolitik,
 *    Konjunkturverlauf, Schwankungsarten)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-konjunkturphasen",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Konjunktur & Stabilisierung",
  title: "Konjunkturphase diagnostizieren",
  description: "Saisonale Schwankung, Trend oder echte Konjunktur? Und wenn Konjunktur: Aufschwung, Boom, Abschwung oder Depression? Diagnose anhand typischer Merkmale – mit der jeweils passenden antizyklischen Reaktion.",
  start: "start",
  stations: [
    { id: "typ", label: "Schwankungstyp" },
    { id: "phase", label: "Phase" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: Phase bestimmt",
    neg: "Diagnose: keine Konjunktur",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Abschwungphase"
  },

  nodes: {

    start: {
      station: "typ",
      kind: "frage",
      norm: "Konjunktur",
      title: "Welche Art von Schwankung liegt vor?",
      def: "<b>Konjunktur</b> (lat. Wechsellagen) = die Wirtschaftslage eines Landes, gekennzeichnet durch Größen wie Preisniveau, Produktion, Beschäftigung, Volkseinkommen. Die <b>mittelfristigen Schwankungen</b> dieser Größen heißen Konjunkturschwankungen – idealtypisch eine gleichförmige Wellenbewegung des BIP um den Trend.<br><br>Zu unterscheiden:<br>• <b>saisonale Schwankungen</b>: jahreszeitlich regelmäßig, nur bestimmte Erzeugnisse/Branchen<br>• <b>konjunkturelle Schwankungen</b>: das GESAMTE Wirtschaftsleben, Phasen länger als ein Jahr<br>• <b>trendmäßige Entwicklungen</b>: langfristige Grundrichtung, unabhängig von Schwankungen",
      options: [
        { label: "Jahreszeitlich, einzelne Branchen → saisonal", detail: "Baugewerbe im Winter, Eisdielen, Tourismus", next: "e_saisonal", tone: "neutral" },
        { label: "Gesamtwirtschaftlich, mehrjährige Welle → Konjunktur", next: "q_phase", tone: "pos" },
        { label: "Langfristige Grundrichtung → Trend", detail: "z. B. jahrzehntelanges Wachstum, Strukturwandel", next: "e_trend", tone: "neutral" }
      ]
    },

    q_phase: {
      station: "phase",
      kind: "frage",
      norm: "4 Phasen",
      title: "Welche Merkmale zeigt die Wirtschaft gerade?",
      def: "Der idealtypische Konjunkturverlauf hat vier Phasen:<br>• <b>Aufschwung (Expansion)</b><br>• <b>Hochkonjunktur (Boom)</b><br>• <b>Abschwung (Rezession)</b><br>• <b>Tiefphase (Depression)</b><br><br>Diagnostiziere anhand von Produktion/Auslastung, Beschäftigung, Preisen/Zinsen und Stimmung (Konjunkturindikatoren → eigenes Schema).",
      options: [
        { label: "Steigende Produktion & Aufträge, sinkende Arbeitslosigkeit, Zuversicht", next: "e_aufschwung", tone: "pos" },
        { label: "Vollauslastung, Überstunden, Fachkräftemangel, steigende Preise & Zinsen", next: "e_boom", tone: "warn" },
        { label: "Rückläufige Nachfrage & Aufträge, Kurzarbeit, sinkende Investitionen", next: "e_rezession", tone: "neg" },
        { label: "Tiefstand: hohe Arbeitslosigkeit, geringe Auslastung, gedrückte Preise & Zinsen", next: "e_depression", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_aufschwung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Expansion",
      title: "Aufschwung (Expansion)",
      text: "Merkmale: steigende Produktion und Auftragseingänge, zunehmende Kapazitätsauslastung, sinkende Arbeitslosigkeit, steigende Einkommen, wachsender Optimismus – Preise und Zinsen ziehen erst allmählich an.\n\nWirtschaftspolitik: Der Aufschwung trägt sich weitgehend selbst; die Stabilisierungspolitik hält sich zurück und baut idealerweise die in der Krise aufgebauten Defizite ab.\n\nIndikatoren-Check: Frühindikatoren (Auftragseingänge, Geschäftsklima) zeigen den Aufschwung ZUERST an → Schema 'Konjunkturindikatoren einordnen'."
    },

    e_boom: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Hochkonjunktur",
      title: "Hochkonjunktur (Boom) – Überhitzungsgefahr",
      text: "Merkmale: Vollauslastung der Kapazitäten, Überstunden, Fachkräftemangel, stark steigende Preise (Inflationsgefahr!) und Zinsen, spekulative Übertreibungen. Der obere Wendepunkt kündigt sich an.\n\nWirtschaftspolitik (antizyklisch): RESTRIKTIV dämpfen – Ausgaben zurückfahren, Rücklagen bilden (Fiskalpolitik); Leitzinsen erhöhen, Geldmenge verknappen (Geldpolitik der EZB).\n\nZielkonflikt im magischen Viereck: Preisniveaustabilität gerät im Boom typischerweise in Konflikt mit dem hohen Beschäftigungsstand → Schema 'Magisches Viereck (Regler)'."
    },

    e_rezession: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Abschwung",
      title: "Abschwung (Rezession)",
      text: "Merkmale: rückläufige Nachfrage und Auftragseingänge, sinkende Produktion und Kapazitätsauslastung, Kurzarbeit und beginnender Beschäftigungsabbau, sinkende Investitionsbereitschaft, Pessimismus. (Gängige Faustregel außerhalb des Skripts: 'technische Rezession' = zwei Quartale mit negativem realem BIP.)\n\nWirtschaftspolitik (antizyklisch): EXPANSIV stützen – zusätzliche Staatsausgaben/Steuersenkungen (Fiskalpolitik nach dem StWG), Zinssenkungen und großzügigere Liquidität (Geldpolitik).\n\nArbeitsmarkt-Anschluss: Die entstehende Arbeitslosigkeit ist die KONJUNKTURELLE Arbeitslosigkeit (→ Schema in FS 1)."
    },

    e_depression: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Tiefphase",
      title: "Depression (Tiefphase)",
      text: "Merkmale: anhaltend hohe Arbeitslosigkeit, niedrige Kapazitätsauslastung, gedrückte Preise (Deflationsgefahr) und sehr niedrige Zinsen, Investitions- und Konsumzurückhaltung trotz günstiger Finanzierung – die Wirtschaft verharrt am unteren Wendepunkt.\n\nWirtschaftspolitik: massiv expansive Impulse (Konjunkturprogramme, Investitionsanreize); die Geldpolitik stößt bei Zinsen nahe null an Grenzen.\n\nBild der Transformationskurve: Die Volkswirtschaft produziert deutlich UNTERHALB ihrer Möglichkeiten (→ Schema 'Transformationskurve', FS 1).\n\nGefährlichste Sonderlage: STAGFLATION – Stagnation MIT Inflation (→ Schema 'Wirkungen der Inflation')."
    },

    e_saisonal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Saisonale Schwankung",
      title: "Saisonale Schwankung – keine Konjunktur",
      text: "Jahreszeitlich regelmäßig eintretende Marktveränderungen für bestimmte Erzeugnisse (Baugewerbe, Handel, Tourismus) sind KEINE Konjunkturschwankungen – sie betreffen nur Teilbereiche und gleichen sich übers Jahr aus.\n\nStatistik-Praxis: Konjunkturdaten werden deshalb SAISONBEREINIGT ausgewiesen, um den echten konjunkturellen Verlauf sichtbar zu machen.\n\nArbeitsmarkt-Anschluss: die zugehörige Arbeitslosigkeit ist die saisonale AL (→ Schema 'Art der Arbeitslosigkeit', FS 1)."
    },

    e_trend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Trend",
      title: "Trend – die langfristige Grundrichtung",
      text: "Als Trend bezeichnet man eine von der Zeit abhängige GRUNDRICHTUNG der wirtschaftlichen Entwicklung, die unabhängig von den konjunkturellen Schwankungen ist – die Konjunkturwellen schwingen UM diesen Trend.\n\nBeispiele: langfristiges Produktivitätswachstum, Tertiarisierung (Strukturwandel zum Dienstleistungssektor – ablesbar in der Entstehungsrechnung der VGR), demografische Entwicklung.\n\nMerke die Dreiteilung: Saison (unterjährig, branchenbezogen) – Konjunktur (mehrjährig, gesamtwirtschaftlich) – Trend (langfristig, Grundrichtung)."
    }
  }
});
