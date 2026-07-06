/*
 * VWL-Schema: Inflationsart bestimmen (5 Kriterien)
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 2.7 (Inflationsarten-Tabelle)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-inflationsarten",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Inflation & Geld",
  title: "Inflationsart bestimmen",
  description: "Die Skript-Tabelle als Diagnose-Baum: nach Erkennbarkeit (offen/verdeckt), Dauer (temporär/permanent), Tempo (schleichend/galoppierend), Wahrnehmung (offiziell/gefühlt) und Erwartung (antizipiert/nicht antizipiert) einordnen.",
  start: "start",
  stations: [
    { id: "kriterium", label: "Kriterium" },
    { id: "auspraegung", label: "Ausprägung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Einordnung: Art bestimmt",
    neg: "Einordnung: kritischer Fall",
    frei: "Einordnung: Hinweis",
    warn: "Einordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "kriterium",
      kind: "frage",
      norm: "5 Kriterien",
      title: "Nach welchem Kriterium willst du einordnen?",
      def: "Die Inflationsarten-Tabelle des Skripts:<br><br>• <b>Erkennbarkeit</b>: offene ↔ verdeckte Inflation<br>• <b>Dauer</b>: temporäre ↔ permanente Inflation<br>• <b>Ausmaß/Schnelligkeit</b> der Geldentwertung: schleichende ↔ galoppierende Inflation<br>• <b>(subjektive) Wahrnehmung</b>: offizielle ↔ gefühlte Inflation<br>• <b>Inflationserwartungen</b>: antizipierte ↔ nicht antizipierte Inflation",
      options: [
        { label: "Erkennbarkeit: sieht man die Preissteigerung?", next: "q_erkennbar", tone: "neutral" },
        { label: "Tempo: wie schnell entwertet das Geld?", next: "q_tempo", tone: "neutral" },
        { label: "Dauer: vorübergehend oder dauerhaft?", next: "q_dauer", tone: "neutral" },
        { label: "Wahrnehmung & Erwartung", next: "q_wahrnehmung", tone: "neutral" }
      ]
    },

    q_erkennbar: {
      station: "auspraegung",
      kind: "frage",
      norm: "Erkennbarkeit",
      title: "Steigen die Preise sichtbar – oder staut sich der Druck?",
      def: "• <b>Offene Inflation</b>: Der Anstieg des Preisniveaus ist für jede/n Marktteilnehmer/in zu erkennen.<br>• <b>Verdeckte Inflation</b> (auch gestoppte oder <b>zurückgestaute</b> Inflation): Der Staat greift ein, z. B. durch <b>Fest- oder Höchstpreise</b> – die Preise dürfen nicht steigen, der Inflationsdruck zeigt sich stattdessen in Warteschlangen, Schwarzmärkten und leeren Regalen.",
      options: [
        { label: "Preisanstieg für alle sichtbar → offene Inflation", next: "e_offen", tone: "pos" },
        { label: "Preise staatlich gestoppt → verdeckte Inflation", next: "e_verdeckt", tone: "neg" }
      ]
    },

    q_tempo: {
      station: "auspraegung",
      kind: "frage",
      norm: "Tempo",
      title: "Wie schnell entwertet das Geld?",
      def: "Nach <b>Ausmaß und Schnelligkeit</b> der Geldentwertung:<br>• <b>Schleichende Inflation</b>: verhältnismäßig niedrige Preissteigerungsraten.<br>• <b>Galoppierende Inflation</b>: Das Preisniveau steigt rasant an – Extremfall: Hyperinflation.",
      options: [
        { label: "Niedrige Raten → schleichende Inflation", next: "e_schleichend", tone: "pos" },
        { label: "Rasanter Anstieg → galoppierende Inflation", next: "e_galoppierend", tone: "neg" }
      ]
    },

    q_dauer: {
      station: "auspraegung",
      kind: "frage",
      norm: "Dauer",
      title: "Vorübergehend oder dauerhaft?",
      def: "• <b>Temporäre Inflation</b>: vorübergehende Preissteigerung, z. B. nach einem einmaligen Schock (Ernteausfall, Steuererhöhung, Lieferkettenstörung) – die Rate normalisiert sich wieder.<br>• <b>Permanente Inflation</b>: dauerhafte Steigerung des Preisniveaus, meist mit verfestigten Erwartungen.",
      options: [
        { label: "Einmaliger Schub → temporäre Inflation", next: "e_temporaer", tone: "pos" },
        { label: "Dauerhafter Prozess → permanente Inflation", next: "e_permanent", tone: "neg" }
      ]
    },

    q_wahrnehmung: {
      station: "auspraegung",
      kind: "frage",
      norm: "Wahrnehmung · Erwartung",
      title: "Gemessen, gefühlt – oder erwartet?",
      def: "• <b>Offizielle Inflation</b>: die vom Statistischen Bundesamt per VPI gemessene Rate.<br>• <b>Gefühlte Inflation</b>: die subjektiv wahrgenommene Teuerung – oft höher, weil häufige Käufe (Lebensmittel, Tanken) stärker prägen als seltene (Elektronik).<br>• <b>Antizipierte Inflation</b>: Die Erwartungen der Menschen treten ein.<br>• <b>Nicht antizipierte Inflation</b>: Die Inflation wurde nicht erwartet und tritt überraschend ein.",
      options: [
        { label: "Amtlich gemessen vs. subjektiv → offizielle/gefühlte Inflation", next: "e_gefuehlt", tone: "neutral" },
        { label: "Erwartet vs. überraschend → antizipiert/nicht antizipiert", next: "e_antizipiert", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_offen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Offene Inflation",
      title: "Offene Inflation",
      text: "Der Anstieg des Preisniveaus ist für jeden Marktteilnehmer erkennbar – der Normalfall in Marktwirtschaften mit freier Preisbildung.\n\nVorteil der Offenheit: Die Preissignale bleiben lesbar, Anpassungen (Lohnverhandlungen, Zinsreaktionen der EZB) können stattfinden.\n\nGegenbegriff: die verdeckte (zurückgestaute) Inflation bei staatlichen Preisstopps."
    },

    e_verdeckt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Verdeckte Inflation",
      title: "Verdeckte (zurückgestaute) Inflation",
      text: "Der Staat verhindert den Preisanstieg durch Fest- oder Höchstpreise – die Inflation ist 'gestoppt', aber nicht beseitigt: Der Nachfrageüberhang zeigt sich in Warteschlangen, Wartelisten, Schwarzmärkten und leeren Regalen.\n\nGenau das ist die Kritik am Höchstpreis aus dem FS-1-Stoff: Er korrigiert nicht die URSACHEN der Mangelsituation, sondern VERDECKT die Probleme (→ Schema 'Staatliche Preiseingriffe (Simulator)').\n\nHistorische Beispiele: Preisstopps in Kriegswirtschaften, DDR-Planpreise – nach Freigabe der Preise bricht sich die zurückgestaute Inflation offen Bahn."
    },

    e_schleichend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Schleichende Inflation",
      title: "Schleichende Inflation",
      text: "Verhältnismäßig niedrige Preissteigerungsraten – in der Größenordnung des EZB-Ziels (nahe 2 %) gilt sie als unbedenklich, teils sogar als förderlich (Sicherheitsabstand zur Deflation, Erleichterung relativer Preisanpassungen).\n\nAber auch schleichende Inflation wirkt über die Jahre: Bei 2 % p. a. verliert Geld in 35 Jahren rund die Hälfte seiner Kaufkraft (Zinseszinseffekt der Entwertung) – relevant für Wertaufbewahrung und Altersvorsorge (→ Geldfunktionen im Schema 'Geld & Währungsordnung')."
    },

    e_galoppierend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Galoppierende Inflation",
      title: "Galoppierende Inflation",
      text: "Das Preisniveau steigt rasant – das Vertrauen in die Währung erodiert, Geld wird schnellstmöglich in Sachwerte getauscht, die Geldfunktionen (v. a. Wertaufbewahrung, dann auch Recheneinheit und Tauschmittel) fallen nacheinander aus.\n\nSkript-Aufgabe 3 ('Länder mit galoppierender Inflation'): klassische Fälle sind Deutschland 1923 (Hyperinflation der Weimarer Republik), in jüngerer Zeit z. B. Simbabwe, Venezuela, Argentinien, Türkei.\n\nEndstadium Hyperinflation: Währungsreform als einziger Ausweg (Deutschland 1923 Rentenmark, 1948 D-Mark)."
    },

    e_temporaer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Temporäre Inflation",
      title: "Temporäre Inflation",
      text: "Vorübergehende Preissteigerung nach einem einmaligen Schock (Energiepreissprung, Steuererhöhung, Lieferengpass) – die Rate normalisiert sich, sobald der Schock ausläuft, sofern keine Zweitrundeneffekte entstehen.\n\nDie Gefahr liegt im Übergang: Verfestigen sich die Erwartungen (Lohn-Preis-Spirale), wird aus der temporären eine PERMANENTE Inflation – deshalb reagieren Zentralbanken auch auf 'vorübergehende' Schübe, wenn die Erwartungen zu entgleiten drohen."
    },

    e_permanent: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Permanente Inflation",
      title: "Permanente Inflation",
      text: "Das Preisniveau steigt dauerhaft – meist getragen von verfestigten Inflationserwartungen und fortlaufender Überwälzung (Lohn-Preis-Spirale).\n\nBekämpfung erfordert einen glaubwürdigen Kurswechsel der Geldpolitik (restriktive Zinspolitik) – typischerweise um den Preis einer konjunkturellen Abkühlung: der klassische Zielkonflikt zwischen Preisstabilität und Beschäftigung im magischen Viereck (→ Schema 'Magisches Viereck (Regler)')."
    },

    e_gefuehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Offizielle vs. gefühlte Inflation",
      title: "Offizielle und gefühlte Inflation",
      text: "Die OFFIZIELLE Inflation misst das Statistische Bundesamt mit dem VPI (Warenkorb ~700 Güter, Wägungsschema).\n\nDie GEFÜHLTE Inflation weicht davon ab (Skript-Aufgabe 5) – Gründe:\n• Der individuelle Warenkorb entspricht nicht dem Durchschnitt (Problem aller Durchschnittswerte),\n• häufige Käufe (Lebensmittel, Tanken) prägen die Wahrnehmung stärker als seltene (Möbel, Elektronik),\n• Preissteigerungen fallen mehr auf als Preissenkungen und Qualitätsverbesserungen.\n\nKlassisches Beispiel: die Euro-Bargeldeinführung 2002 ('Teuro') – gefühlt weit über der gemessenen Rate."
    },

    e_antizipiert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Antizipiert vs. nicht antizipiert",
      title: "Antizipierte und nicht antizipierte Inflation",
      text: "ANTIZIPIERTE Inflation: Die Erwartungen der Menschen treten ein – Verträge, Löhne und Zinsen haben die Rate bereits eingepreist; die Verteilungswirkungen bleiben begrenzt.\n\nNICHT ANTIZIPIERTE Inflation: Sie kommt überraschend – und entfaltet die volle Umverteilungswirkung: Gläubiger verlieren, Schuldner gewinnen, Lohnempfänger hinken hinterher (→ Schema 'Wirkungen der Inflation').\n\nVerbindung zur Ursachenlehre: Inflationserwartungen sind selbst eine Inflationsursache (Inflationsmentalität) – erwartete Inflation erzeugt sich selbst (→ Schema 'Inflationsursachen diagnostizieren')."
    }
  }
});
