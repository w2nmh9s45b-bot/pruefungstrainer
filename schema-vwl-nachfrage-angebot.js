/*
 * VWL-Schema: Angebot & Nachfrage – Verschiebung analysieren (Drei-Schritte-Schema)
 * Fach: Volkswirtschaftslehre (Fachstudium 1/2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 8.3, 8.4 (Nachfrage der Haushalte, Verschiebungen,
 *    Angebot der Unternehmen, Drei-Schritte-Schema der komparativ-statischen Analyse)
 *  - "Ueberblick VWL FS II" (Angebot und Preisbildung sind auch FS-II-Stoff)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-nachfrage-angebot",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1", "FS2"],
  area: "Preisbildung & Elastizität",
  title: "Angebot & Nachfrage: Verschiebung analysieren",
  description: "Das Drei-Schritte-Schema der komparativ-statischen Analyse: Verschiebt das Ereignis eine Kurve? Welche – und wohin? Was passiert mit Gleichgewichtspreis und -menge? Inklusive der Klausurfalle 'Bewegung auf der Kurve'.",
  start: "start",
  stations: [
    { id: "schritt1", label: "Schritt 1: Ereignis" },
    { id: "schritt2", label: "Schritt 2: Kurve" },
    { id: "schritt3", label: "Schritt 3: Gleichgewicht" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Analyse: abgeschlossen",
    neg: "Analyse: keine Verschiebung",
    frei: "Analyse: Hinweis",
    warn: "Analyse: Zwischenstand"
  },

  nodes: {

    start: {
      station: "schritt1",
      kind: "frage",
      norm: "Schritt 1",
      title: "Was genau ändert sich?",
      def: "<b>Drei-Schritte-Schema</b> für die komparativ-statische Analyse:<br>1. Führt das Ereignis zu einer <b>Verschiebung</b> der (Angebots- oder Nachfrage-)Kurve?<br>2. Wenn ja: <b>Welche Kurve</b> ist betroffen und <b>in welche Richtung</b>?<br>3. Welche Änderung des <b>Marktgleichgewichts</b> resultiert daraus?<br><br><b>Klausurfalle zuerst:</b> Ändert sich nur der <b>Preis des Gutes selbst</b>, verschiebt sich KEINE Kurve – es kommt lediglich zu einer <b>Bewegung AUF der Kurve</b> (ceteris paribus!).",
      options: [
        { label: "Nur der Preis des Gutes selbst ändert sich", detail: "→ Bewegung auf der Kurve, keine Verschiebung", next: "e_bewegung", tone: "neg" },
        { label: "Eine andere Einflussgröße ändert sich", detail: "Einkommen, Preise anderer Güter, Kosten, Technik, Präferenzen …", next: "q_seite", tone: "pos" }
      ]
    },

    q_seite: {
      station: "schritt2",
      kind: "frage",
      norm: "Schritt 2",
      title: "Wen betrifft die Änderung – Nachfrager oder Anbieter?",
      def: "<b>Lageparameter der Nachfrage</b> (verschieben die N-Kurve): Bedarfsstruktur/Präferenzen, Einkommen, Preise anderer Güter, Anzahl der Haushalte, Vermögen, Sparneigung.<br><br><b>Einflussgrößen des Angebots</b> (verschieben die A-Kurve): Kosten der Produktionsfaktoren, Gewinnerwartung, Stand der Technik, Zahl der Anbieter, sozialpsychologische Faktoren.",
      options: [
        { label: "Die Nachfrager (Haushalte)", set: { seite: "N" }, next: "q_richtung_n", tone: "neutral" },
        { label: "Die Anbieter (Unternehmen)", set: { seite: "A" }, next: "q_richtung_a", tone: "neutral" }
      ]
    },

    q_richtung_n: {
      station: "schritt2",
      kind: "frage",
      norm: "Nachfrageverschiebung",
      title: "Wird bei jedem Preis MEHR oder WENIGER nachgefragt?",
      def: "Eine <b>Vergrößerung der Nachfrage</b> bedeutet: Bei <b>jedem</b> der alternativen Preise ist die Nachfrage größer geworden – die Kurve wandert nach <b>rechts (oben)</b>.<br><br>Typische Auslöser „rechts“: Einkommen steigt (bei normalen Gütern), Preis eines <b>Substituts</b> steigt, Präferenz für das Gut nimmt zu, mehr Haushalte.<br>Typische Auslöser „links“: Einkommen sinkt, Preis eines <b>Komplements</b> steigt, Präferenzverlust, Sparneigung steigt.",
      options: [
        { label: "Mehr → Nachfragekurve nach rechts", set: { richtung: "rechts" }, next: "e_n_rechts", tone: "pos" },
        { label: "Weniger → Nachfragekurve nach links", set: { richtung: "links" }, next: "e_n_links", tone: "neg" }
      ]
    },

    q_richtung_a: {
      station: "schritt2",
      kind: "frage",
      norm: "Angebotsverschiebung",
      title: "Wird bei jedem Preis MEHR oder WENIGER angeboten?",
      def: "Typische Auslöser „rechts“ (mehr Angebot): sinkende Faktorkosten, technischer Fortschritt, zusätzliche Anbieter treten in den Markt ein.<br><br>Typische Auslöser „links“ (weniger Angebot): steigende Kosten (Rohstoffe, Löhne, Energie), Anbieter scheiden aus, Produktionsausfälle (Missernte).",
      options: [
        { label: "Mehr → Angebotskurve nach rechts", set: { richtung: "rechts" }, next: "e_a_rechts", tone: "pos" },
        { label: "Weniger → Angebotskurve nach links", set: { richtung: "links" }, next: "e_a_links", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bewegung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Bewegung auf der Kurve",
      title: "Keine Verschiebung – Bewegung AUF der Kurve",
      text: "Ändert sich der Preis des Gutes selbst, wandert man ENTLANG der bestehenden Kurve: Die Preisänderung ist Ursache der Änderung der NACHFRAGEMENGE (nicht der Nachfrage!).\n\nNachfragegesetz: 'Mit sinkendem Preis eines Gutes steigt die nachgefragte Menge nach diesem Gut – und umgekehrt.'\n\nSprachregelung für die Klausur:\n• Änderung der NACHFRAGEMENGE = Bewegung auf der Kurve (Auslöser: Preis des Gutes)\n• Änderung der NACHFRAGE = Verschiebung der ganzen Kurve (Auslöser: Lageparameter)\n\nWIE stark die Menge auf Preisänderungen reagiert, misst die Preiselastizität → Schema 'Elastizitäten (Rechner)'."
    },

    e_n_rechts: {
      station: "schritt3",
      kind: "ergebnis",
      verdict: "pos",
      norm: "N → rechts",
      title: "Nachfrage steigt: Preis ↑ und Menge ↑",
      text: "Schritt 3 (neues Gleichgewicht): Die Nachfragekurve wandert nach rechts oben – beim alten Preis entsteht ein NACHFRAGEÜBERHANG, der Preis steigt, das Angebot dehnt sich aus. Neues Gleichgewicht: höherer Preis, größere Menge (p↑, x↑).\n\nBeispiele: Einkommenszuwachs (normales Gut), Preisanstieg beim Substitut (Butter teurer → Margarine-Nachfrage steigt), Modetrend, Bevölkerungswachstum.\n\nPrüfe das Ergebnis im Schema 'Marktgleichgewicht & Preisbildung (Simulator)' nach – dort siehst du Überhang und Preisanpassung live."
    },

    e_n_links: {
      station: "schritt3",
      kind: "ergebnis",
      verdict: "pos",
      norm: "N → links",
      title: "Nachfrage sinkt: Preis ↓ und Menge ↓",
      text: "Schritt 3 (neues Gleichgewicht): Die Nachfragekurve wandert nach links unten – beim alten Preis entsteht ein ANGEBOTSÜBERHANG, der Preis sinkt, Anbieter ziehen sich zurück. Neues Gleichgewicht: niedrigerer Preis, kleinere Menge (p↓, x↓).\n\nBeispiele: Einkommensrückgang, Preisanstieg beim Komplement (Benzin teurer → Nachfrage nach großen Autos sinkt), Präferenzwandel, höhere Sparneigung.\n\nMerke: Beide Größen bewegen sich bei NACHFRAGE-Verschiebungen in DIESELBE Richtung (p und x parallel)."
    },

    e_a_rechts: {
      station: "schritt3",
      kind: "ergebnis",
      verdict: "pos",
      norm: "A → rechts",
      title: "Angebot steigt: Preis ↓ und Menge ↑",
      text: "Schritt 3 (neues Gleichgewicht): Die Angebotskurve wandert nach rechts – beim alten Preis entsteht ein ANGEBOTSÜBERHANG, der Preis sinkt, die nachgefragte Menge steigt. Neues Gleichgewicht: niedrigerer Preis, größere Menge (p↓, x↑).\n\nBeispiele: technischer Fortschritt senkt Produktionskosten, gute Ernte, Markteintritt neuer Anbieter, sinkende Energiepreise.\n\nMerke: Bei ANGEBOTS-Verschiebungen bewegen sich Preis und Menge in ENTGEGENGESETZTE Richtungen."
    },

    e_a_links: {
      station: "schritt3",
      kind: "ergebnis",
      verdict: "pos",
      norm: "A → links",
      title: "Angebot sinkt: Preis ↑ und Menge ↓",
      text: "Schritt 3 (neues Gleichgewicht): Die Angebotskurve wandert nach links – beim alten Preis entsteht ein NACHFRAGEÜBERHANG, der Preis steigt, die nachgefragte Menge geht zurück. Neues Gleichgewicht: höherer Preis, kleinere Menge (p↑, x↓).\n\nBeispiele: steigende Rohstoff- oder Lohnkosten, Missernte, Anbieter scheiden aus, Lieferkettenstörungen.\n\nMakro-Anschluss (FS 2): Auf gesamtwirtschaftlicher Ebene ist genau das der Mechanismus der ANGEBOTS-/KOSTENDRUCKINFLATION – gestiegene Kosten werden über Preiserhöhungen überwälzt (→ Schema 'Inflationsursachen diagnostizieren')."
    }
  }
});
