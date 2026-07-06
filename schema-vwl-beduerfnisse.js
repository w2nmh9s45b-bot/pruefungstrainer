/*
 * VWL-Schema: Bedürfnis einordnen (Bedürfnis → Bedarf → Nachfrage, Maslow)
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 2.1, 2.2 (Bedürfnisse, Einteilungen, Maslow)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-beduerfnisse",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Grundlagen des Wirtschaftens",
  title: "Bedürfnis einordnen (Maslow & Co.)",
  description: "Ein konkretes Bedürfnis Schritt für Schritt klassifizieren: nach Dringlichkeit (Existenz/Kultur/Luxus), Art der Befriedigung (individuell/kollektiv) und Maslow-Ebene – und die Kette Bedürfnis → Bedarf → Nachfrage sauber abgrenzen.",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "einteilung", label: "Einteilung" },
    { id: "maslow", label: "Maslow" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: eingeordnet",
    neg: "Diagnose: kein Bedürfnis i. e. S.",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  resultExtras: function (flags) {
    var out = [];
    if (flags.dring) out.push("Dringlichkeit: " + flags.dring);
    if (flags.art) out.push("Art der Befriedigung: " + flags.art);
    if (flags.maslow) out.push("Maslow-Ebene: " + flags.maslow);
    return out;
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Bedürfnis · Bedarf · Nachfrage",
      title: "Liegt überhaupt ein Bedürfnis vor – und auf welcher Stufe?",
      def: "<b>Bedürfnis</b> = das Gefühl eines Mangels, verbunden mit dem Streben, ihn zu beseitigen. Bedürfnisse sind die Antriebskräfte des menschlichen (wirtschaftlichen) Verhaltens – sie sind <b>unbegrenzt</b>.<br><br>Die Kette zum Markt:<br>• <b>Bedürfnis</b>: bloßes Mangelgefühl („Ich hätte gern ein E-Bike“)<br>• <b>Bedarf</b>: mit <b>Kaufkraft</b> ausgestattetes, konkretisiertes Bedürfnis<br>• <b>Nachfrage</b>: der am <b>Markt wirksam</b> werdende Bedarf (Kaufabsicht wird umgesetzt)",
      options: [
        { label: "Mangelgefühl vorhanden → als Bedürfnis einordnen", next: "q_dringlichkeit", tone: "pos" },
        { label: "Mit Kaufkraft unterlegt → Bedarf", detail: "Das Bedürfnis ist konkretisiert und finanzierbar.", next: "e_bedarf", tone: "neutral" },
        { label: "Am Markt wirksam → Nachfrage", detail: "Der Bedarf tritt tatsächlich als Kaufentscheidung auf.", next: "e_nachfrage", tone: "neutral" }
      ]
    },

    q_dringlichkeit: {
      station: "einteilung",
      kind: "frage",
      norm: "Einteilung nach Dringlichkeit",
      title: "Wie dringlich ist das Bedürfnis?",
      def: "Nach der <b>Dringlichkeit</b> unterscheidet man:<br>• <b>Existenzbedürfnisse</b>: lebensnotwendig (Essen, Trinken, Wohnen, Kleidung)<br>• <b>Kulturbedürfnisse</b>: entspringen dem gesellschaftlich-kulturellen Leben (Bücher, Theater, Bildung)<br>• <b>Luxusbedürfnisse</b>: gehen deutlich über das Übliche hinaus (Sportwagen, Designeruhr)<br><br><i>Die Grenzen sind zeit- und gesellschaftsabhängig – was gestern Luxus war, kann heute Kulturbedürfnis sein (z. B. Smartphone).</i>",
      options: [
        { label: "Existenzbedürfnis", detail: "Lebensnotwendig für jeden Menschen.", set: { dring: "Existenzbedürfnis" }, next: "q_art", tone: "neutral" },
        { label: "Kulturbedürfnis", detail: "Teilhabe am kulturellen und gesellschaftlichen Leben.", set: { dring: "Kulturbedürfnis" }, next: "q_art", tone: "neutral" },
        { label: "Luxusbedürfnis", detail: "Deutlich über dem üblichen Lebensstandard.", set: { dring: "Luxusbedürfnis" }, next: "q_art", tone: "neutral" }
      ]
    },

    q_art: {
      station: "einteilung",
      kind: "frage",
      norm: "Art der Befriedigung",
      title: "Wer befriedigt das Bedürfnis – der Einzelne oder die Allgemeinheit?",
      def: "Nach der <b>Art der Befriedigung</b>:<br>• <b>Individualbedürfnisse</b> kann sich der Einzelne selbst erfüllen (Nahrung, Kleidung, Urlaub).<br>• <b>Kollektivbedürfnisse</b> können nur durch die Gemeinschaft – i. d. R. den Staat – befriedigt werden (innere/äußere Sicherheit, Straßen, Schulen, Rechtsordnung).",
      options: [
        { label: "Individualbedürfnis", detail: "Befriedigung durch den Einzelnen am Markt.", set: { art: "Individualbedürfnis" }, next: "q_maslow", tone: "neutral" },
        { label: "Kollektivbedürfnis", detail: "Befriedigung durch die Gemeinschaft/den Staat – Verbindung zu den öffentlichen Gütern!", set: { art: "Kollektivbedürfnis" }, next: "q_maslow", tone: "neutral" }
      ]
    },

    q_maslow: {
      station: "maslow",
      kind: "frage",
      norm: "Bedürfnispyramide nach Maslow",
      title: "Auf welcher Stufe der Maslow-Pyramide steht das Bedürfnis?",
      def: "Rangordnung der Bedürfnisse <b>nach ihrer Bedeutung für das menschliche Verhalten</b> (von unten nach oben):<br><br>1. <b>Grundbedürfnisse</b> (physiologisch: Essen, Schlaf)<br>2. <b>Sicherheitsbedürfnisse</b> (Schutz, sicherer Arbeitsplatz, Vorsorge)<br>3. <b>Soziale Bedürfnisse</b> (Zugehörigkeit, Freundschaft, Familie)<br>4. <b>Wertschätzungsbedürfnisse</b> (Anerkennung, Status)<br>5. <b>Entwicklungsbedürfnisse</b> (Selbstverwirklichung)<br><br><i>Für Unternehmen und Staat ist wichtig einzuschätzen, welche Ebene für die Zielgruppe gerade relevant ist.</i>",
      options: [
        { label: "1 – Grundbedürfnis", set: { maslow: "1 – Grundbedürfnis" }, next: "e_fertig", tone: "neutral" },
        { label: "2 – Sicherheitsbedürfnis", set: { maslow: "2 – Sicherheitsbedürfnis" }, next: "e_fertig", tone: "neutral" },
        { label: "3 – Soziales Bedürfnis", set: { maslow: "3 – Soziales Bedürfnis" }, next: "e_fertig", tone: "neutral" },
        { label: "4 – Wertschätzung / 5 – Entwicklung", set: { maslow: "4 – Wertschätzung bzw. 5 – Entwicklung" }, next: "e_fertig", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Klassifikation",
      title: "Bedürfnis vollständig eingeordnet",
      text: "Du hast das Bedürfnis nach allen drei Skript-Kriterien klassifiziert (siehe unten).\n\nMerke für die Klausur:\n• Bedürfnisse sind unbegrenzt, Güter knapp → Zwang zum Wirtschaften.\n• Erst mit Kaufkraft wird aus dem Bedürfnis ein Bedarf, erst am Markt wird daraus Nachfrage.\n• Kollektivbedürfnisse führen zum Staat als Anbieter → Schema 'Öffentliche Güter & Marktversagen'."
    },

    e_bedarf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Bedarf",
      title: "Stufe 2: Bedarf",
      text: "Bedarf = das mit Kaufkraft ausgestattete, auf ein konkretes Gut gerichtete Bedürfnis.\n\nVom Wunsch zum Bedarf fehlt nur noch der Schritt an den Markt: Wird der Bedarf tatsächlich wirksam (Kaufentscheidung), spricht man von Nachfrage. Die Bestimmungsgründe der Nachfrage behandelt das Schema 'Angebot & Nachfrage verschieben'."
    },

    e_nachfrage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Nachfrage",
      title: "Stufe 3: Nachfrage",
      text: "Nachfrage = der am Markt wirksam werdende Bedarf.\n\nHier beginnt die Preistheorie: Die nachgefragte Menge hängt ab vom Preis des Gutes, den Preisen anderer Güter, Einkommen, Bedarfsstruktur, Vermögen und Sparneigung (Nachfragehypothese). Weiter mit den Schemata 'Angebot & Nachfrage verschieben' und 'Marktgleichgewicht & Preisbildung'."
    }
  }
});
