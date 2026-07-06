/*
 * VWL-Schema: Wirtschaftssubjekte & Staatsaufgaben (Musgrave) zuordnen
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 4 (Wirtschaftssubjekte, Zielorientierung,
 *    Staat: Versorgung/Verteilung/Stabilisierung)
 *  - "2023 VWL OLE 2 Wirtschaftssubjekte" (Nutzen-/Gewinn-/Wohlfahrtsmaximierung,
 *    gemeinwirtschaftliches Prinzip, Wirtschaftskreislauf)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-wirtschaftssubjekte",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Wirtschaftsordnung",
  title: "Wirtschaftssubjekte & Staatsaufgaben",
  description: "Wer handelt mit welchem Ziel? Haushalte (Nutzenmaximierung), Unternehmen (Zielprinzipien), Staat (Allokation, Redistribution, Stabilisierung nach Musgrave) und Ausland – eine konkrete Maßnahme der richtigen Funktion zuordnen.",
  start: "start",
  stations: [
    { id: "akteur", label: "Akteur" },
    { id: "ziel", label: "Ziel/Funktion" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Zuordnung: getroffen",
    neg: "Zuordnung: Gegenprobe",
    frei: "Zuordnung: Hinweis",
    warn: "Zuordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "akteur",
      kind: "frage",
      norm: "Wirtschaftssubjekte",
      title: "Welches Wirtschaftssubjekt handelt?",
      def: "Die wirtschaftlichen Entscheidungsträger (<b>Wirtschaftssubjekte</b>) und ihre Ziele:<br><br>• <b>Private Haushalte</b> → Nutzenmaximierung (hoher Lebensstandard)<br>• <b>Private Unternehmen</b> → Gewinnmaximierung (daneben Soziales, Umwelt)<br>• <b>Staat</b> → Wohlfahrtsmaximierung<br>• <b>Ausland</b> → Außenbeziehungen (Export/Import)<br><br>Zwischen ihnen fließen im <b>Wirtschaftskreislauf</b> Güterströme (reale Ströme) und Geldströme (monetäre Ströme) in Gegenrichtung.",
      options: [
        { label: "Privater Haushalt", detail: "Einkommenserzielung, Konsum, Sparen", next: "e_haushalt", tone: "neutral" },
        { label: "Privates Unternehmen", detail: "Beschaffung, Produktion, Absatz, Finanzierung", next: "q_unternehmen", tone: "neutral" },
        { label: "Staat", detail: "Gesetze, politische Entscheidungen, Beschaffung", next: "q_staat", tone: "neutral" },
        { label: "Ausland", detail: "Grenzüberschreitende Güter- und Geldströme", next: "e_ausland", tone: "neutral" }
      ]
    },

    q_unternehmen: {
      station: "ziel",
      kind: "frage",
      norm: "Betriebliche Zielprinzipien",
      title: "Nach welchem Prinzip arbeitet das Unternehmen?",
      def: "Prinzipien betrieblicher Zielsetzungen:<br><br>• <b>Erwerbswirtschaftliches Prinzip</b>: Gewinnerzielung, Rentabilität – ggf. unter Nebenbedingungen (Unabhängigkeit, Familientradition, Image, Mitarbeiterzufriedenheit).<br>• <b>Gemeinwirtschaftliches Prinzip</b>: <b>Bedarfsdeckung als Sachziel (Oberziel)</b>, Kostendeckung nur als ökonomische Nebenbedingung (Formalziel) – typisch für öffentliche Unternehmen.<br>• <b>Genossenschaftliches Prinzip</b>: Förderung der Mitglieder.",
      options: [
        { label: "Gewinn & Rentabilität → erwerbswirtschaftlich", next: "e_erwerb", tone: "neutral" },
        { label: "Bedarfsdeckung, Kosten nur decken → gemeinwirtschaftlich", detail: "z. B. Stadtwerke, kommunales Schwimmbad", next: "e_gemeinwirt", tone: "neutral" },
        { label: "Mitgliederförderung → genossenschaftlich", detail: "z. B. Volksbank, Winzergenossenschaft", next: "e_genossen", tone: "neutral" }
      ]
    },

    q_staat: {
      station: "ziel",
      kind: "frage",
      norm: "Musgrave: 3 Funktionen",
      title: "Welche Staatsfunktion erfüllt die Maßnahme?",
      def: "Der Staat korrigiert Fehlentwicklungen der Marktwirtschaft – drei Aspekte nach <b>Richard Musgrave</b>:<br><br>• <b>Versorgung (Allokation)</b>: bestmögliche Versorgung mit Sachgütern und Dienstleistungen<br>• <b>Verteilung (Redistribution)</b>: gerechte Einkommens- und Vermögensverteilung<br>• <b>Stabilisierung</b>: Anstreben des gesamtwirtschaftlichen Gleichgewichts",
      options: [
        { label: "Güter bereitstellen / Wettbewerb sichern → Versorgung", detail: "ÖPNV, Kindergärten, Museen, Schulen; GWB", next: "e_allokation", tone: "neutral" },
        { label: "Einkommen umverteilen → Verteilung", detail: "progressive Steuersätze, Transferleistungen; EStG, BKGG", next: "e_distribution", tone: "neutral" },
        { label: "Konjunktur glätten → Stabilisierung", detail: "antizyklische Konjunkturpolitik; Stabilitäts- und Wachstumsgesetz", next: "e_stabilisierung", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_haushalt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Private Haushalte",
      title: "Privater Haushalt: Nutzenmaximierung",
      text: "Zielorientierung: hoher Lebensstandard (Nutzenmaximierung).\n\nWirtschaftliche Entscheidungen:\n• EINKOMMENSERZIELUNG: Welche finanziellen Mittel stehen zur Verfügung? (Arbeit, Vermögen, Transfers)\n• EINKOMMENSVERWENDUNG: Konsum (wie viel und wofür?) und Sparen (in welcher Form?) → Vermögensbildung.\n\nIm Wirtschaftskreislauf stellen die Haushalte den Unternehmen Produktionsfaktoren (v. a. Arbeit) zur Verfügung und erhalten dafür Einkommen (Geldstrom); mit dem Einkommen kaufen sie Konsumgüter (Güterstrom in Gegenrichtung)."
    },

    e_erwerb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Erwerbswirtschaftliches Prinzip",
      title: "Erwerbswirtschaftliches Prinzip",
      text: "Das Unternehmen strebt Gewinnerzielung und Rentabilität an – ggf. Gewinnerzielung unter Nebenbedingungen (Streben nach Unabhängigkeit, Verpflichtung gegenüber der Familientradition, Imageverbesserung, Mitarbeiterzufriedenheit).\n\nWirtschaftliche Entscheidungen: Beschaffung, Produktion, Absatz, Finanzierung.\n\nGewinne sind in der Marktwirtschaft zugleich Leistungsanreiz und Lenkungssignal: Sie ziehen Produktionsfaktoren in die von den Nachfragern gewünschten Verwendungen (→ Schema 'Marktgleichgewicht & Preisbildung')."
    },

    e_gemeinwirt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Gemeinwirtschaftliches Prinzip",
      title: "Gemeinwirtschaftliches Prinzip",
      text: "Oberziel ist das SACHZIEL Bedarfsdeckung – die Kostendeckung ist nur ökonomische Nebenbedingung (Formalziel). Typisch für öffentliche Unternehmen und viele kommunale Einrichtungen.\n\nPraxisbezug Lahnstein: Stadtwerke, Bäder, ÖPNV – hier kollidiert das Sachziel (Versorgung) regelmäßig mit dem Formalziel (Kostendeckung); Verluste werden aus dem Haushalt getragen, wenn der Rat die Bedarfsdeckung politisch will.\n\nAbgrenzung: Das genossenschaftliche Prinzip fördert die MITGLIEDER, nicht die Allgemeinheit."
    },

    e_genossen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Genossenschaftliches Prinzip",
      title: "Genossenschaftliches Prinzip",
      text: "Zweck des Unternehmens ist die Förderung des Erwerbs oder der Wirtschaft seiner MITGLIEDER (z. B. Volks- und Raiffeisenbanken, Winzer- und Wohnungsgenossenschaften).\n\nGewinnerzielung ist nicht Selbstzweck, sondern Mittel zur Mitgliederförderung – damit steht das Prinzip zwischen erwerbswirtschaftlichem und gemeinwirtschaftlichem Prinzip."
    },

    e_allokation: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Versorgung (Allokation)",
      title: "Staatsfunktion 1: Versorgung (Allokation)",
      text: "Ziel: bestmögliche Versorgung mit Sachgütern und Dienstleistungen. Der Staat trifft Regelungen zur Aufrechterhaltung des Wettbewerbs – oder bietet selbst an.\n\nBeispiele: ÖPNV, Kindergärten, Museen, Volkshochschule, Schwimmbad, Schulen.\nGesetz: z. B. GWB – Gesetz gegen Wettbewerbsbeschränkungen (1957) (→ Schema 'Wettbewerbsbeschränkung prüfen (GWB)').\n\nHintergrund ist das Marktversagen bei öffentlichen Gütern (→ Schema 'Öffentliche Güter & Marktversagen')."
    },

    e_distribution: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verteilung (Redistribution)",
      title: "Staatsfunktion 2: Verteilung (Redistribution)",
      text: "Ziel: gerechte Einkommens- und Vermögensverteilung.\n\nBeispiele: progressive Steuersätze (Einkommensteuertarif mit Grundfreibetrag, Progressions- und Proportionalzone, § 32a EStG), Transferleistungen (Wohngeld, Kindergeld).\nGesetze: z. B. EStG, BKGG.\n\nVGR-Anschluss (FS 2): Durch Steuern und Transfers wird aus der PRIMÄREN Einkommensverteilung (aus dem Produktionsprozess) die SEKUNDÄRE Verteilung → verfügbares Einkommen der Haushalte (→ Schema 'VGR-Rechner')."
    },

    e_stabilisierung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Stabilisierung",
      title: "Staatsfunktion 3: Stabilisierung",
      text: "Ziel: Anstreben des GESAMTWIRTSCHAFTLICHEN GLEICHGEWICHTS = gleichzeitige Verwirklichung der vier wirtschaftspolitischen Hauptziele nach dem Stabilitäts- und Wachstumsgesetz (1967): Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wirtschaftswachstum ('magisches Viereck').\n\nBeispiel: antizyklische Konjunkturpolitik – expansiv in der Rezession, restriktiv im Boom.\n\nVertiefung in FS 2: Schemata 'Magisches Viereck (Regler)' und 'Konjunkturphase diagnostizieren'."
    },

    e_ausland: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Ausland",
      title: "Ausland: die offene Volkswirtschaft",
      text: "Das Ausland tritt im erweiterten Wirtschaftskreislauf hinzu: Exporte (Güterstrom hinaus, Geldstrom herein) und Importe (umgekehrt).\n\nBedeutung für Deutschland: stark exportabhängige Wirtschaft – der Außenbeitrag (Exporte ./. Importe) ist Bestandteil der BIP-Verwendungsrechnung (→ Schema 'VGR-Rechner', FS 2) und das außenwirtschaftliche Gleichgewicht eines der vier Ziele des magischen Vierecks."
    }
  }
});
