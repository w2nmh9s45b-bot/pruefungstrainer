/*
 * VWL-Schema: Inflationsursachen diagnostizieren
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 2.5 (Ursachen der Inflation)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-inflationsursachen",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Inflation & Geld",
  title: "Inflationsursachen diagnostizieren",
  description: "Woher kommt der Preisdruck? Nachfragesog- oder Angebotsinflation (Kostendruck/Gewinndruck), importierte Inflation, Geldmenge, Inflationserwartungen oder staatlich administrierte Preise – der Diagnose-Baum zum Skript-Kapitel 2.5.",
  start: "start",
  stations: [
    { id: "seite", label: "Marktseite" },
    { id: "ursache", label: "Ursache" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: Ursache bestimmt",
    neg: "Diagnose: Sonderursache",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  nodes: {

    start: {
      station: "seite",
      kind: "frage",
      norm: "Ursachenkatalog",
      title: "Von welcher Seite geht der Preisauftrieb aus?",
      def: "Das Skript unterscheidet als Ursachen der Inflation:<br>• <b>Nachfragesog-Inflation</b> (demand-pull)<br>• <b>Angebots-Inflation</b> (Kostendruck / Gewinndruck)<br>• <b>Strukturanpassungsdruck</b> (Nachfrageverschiebung bei starren Preisen/Löhnen)<br>• <b>staatlich administrierte Preise</b><br>• <b>Geldmengen-Inflation</b><br>• <b>Inflationserwartungen</b> (Inflationsmentalität)",
      options: [
        { label: "Die gesamtwirtschaftliche NACHFRAGE zieht davon", next: "q_nachfrage", tone: "neutral" },
        { label: "Die ANBIETER erhöhen die Preise", next: "q_angebot", tone: "neutral" },
        { label: "Geldmenge, Erwartungen oder Staat", next: "q_sonstige", tone: "neutral" }
      ]
    },

    q_nachfrage: {
      station: "ursache",
      kind: "frage",
      norm: "Nachfragesog",
      title: "Wer treibt die Nachfrage über das Angebot hinaus?",
      def: "<b>Nachfragesog-Inflation:</b> Steigt die gesamtwirtschaftliche Nachfrage <b>stärker als das gesamtwirtschaftliche Angebot</b>, entsteht eine Lücke, die über <b>Preiserhöhungen</b> geschlossen wird.<br><br>Quellen des Nachfragesogs laut Skript:<br>• Nachfrage nach <b>Konsumgütern</b><br>• Nachfrage nach <b>Investitionsgütern</b><br>• <b>staatliche</b> Nachfrage<br>• <b>importierte</b> Inflation (Auslandsnachfrage/Exportboom)",
      options: [
        { label: "Konsum-, Investitions- oder Staatsnachfrage", next: "e_nachfragesog", tone: "pos" },
        { label: "Die Nachfrage kommt aus dem Ausland", next: "e_importiert", tone: "warn" }
      ]
    },

    q_angebot: {
      station: "ursache",
      kind: "frage",
      norm: "Angebotsinflation",
      title: "Kostendruck oder Gewinndruck?",
      def: "Die <b>Angebotsinflation</b> sieht die Ursachen auf der Angebotsseite – Annahme: Die Anbieter sind letztlich preisbestimmend. Zwei Varianten:<br><br>• <b>Kostendruckinflation</b>: gestiegene Kosten werden auf die Verbraucher <b>überwälzt</b> – Rohstoffpreise (Rohstoffkosteninflation), Arbeitskosten (Lohnkosteninflation), Kapitalkosten, Importgüterpreise, Kostensteuern (Steuerkosteninflation).<br>• <b>Gewinndruckinflation</b>: Preiserhöhungen, um die <b>Gewinne zu erhöhen</b> → Gefahr der <b>Preis-Lohn-Spirale</b>.",
      options: [
        { label: "Kosten werden überwälzt → Kostendruckinflation", next: "e_kostendruck", tone: "neg" },
        { label: "Gewinnmargen werden ausgeweitet → Gewinndruckinflation", next: "e_gewinndruck", tone: "neg" }
      ]
    },

    q_sonstige: {
      station: "ursache",
      kind: "frage",
      norm: "Weitere Ursachen",
      title: "Welche Sonderursache liegt vor?",
      def: "Neben Nachfrage- und Angebotsseite nennt das Skript:<br><br>• <b>Geldmengen-Inflation</b>: Die Geldmenge wächst schneller als die Güterproduktion.<br>• <b>Inflationserwartungen</b> (Inflationsmentalität): Erwartete Preissteigerungen werden in Löhne und Preise eingepreist – und erfüllen sich dadurch selbst.<br>• <b>Staatlich administrierte Preise</b>: Der Staat erhöht Gebühren, Steuern, regulierte Preise.<br>• <b>Strukturanpassungsdruck</b>: Nachfrageverschiebungen treffen auf mangelnde Flexibilität von Preisen und Löhnen (nach unten starr).",
      options: [
        { label: "Zu viel Geld im Umlauf → Geldmengen-Inflation", next: "e_geldmenge", tone: "neg" },
        { label: "Alle rechnen mit Inflation → Erwartungsinflation", next: "e_erwartung", tone: "warn" },
        { label: "Staat erhöht administrierte Preise / starre Strukturen", next: "e_staat_struktur", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_nachfragesog: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nachfragesog-Inflation",
      title: "Nachfragesog-Inflation (demand-pull)",
      text: "Die gesamtwirtschaftliche Nachfrage (Konsum, Investitionen, Staat) steigt stärker als das Angebot – die Lücke wird über Preiserhöhungen geschlossen.\n\nTypische Lage: Hochkonjunktur/Boom mit voll ausgelasteten Kapazitäten (→ Schema 'Konjunkturphase diagnostizieren') – die Produktion kann kurzfristig nicht mitwachsen, also steigen die Preise.\n\nTherapie: restriktive Stabilisierungspolitik – Staat dämpft die Nachfrage (Fiskalpolitik), EZB verteuert Kredit (Zinserhöhung) und verknappt die Geldmenge.\n\nMikro-Bild: Nachfragekurve wandert nach rechts → Preis steigt (→ Schema 'Angebot & Nachfrage: Verschiebung analysieren')."
    },

    e_importiert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Importierte Inflation",
      title: "Importierte Inflation",
      text: "Der Preisauftrieb kommt aus dem Ausland – auf zwei Kanälen:\n• NACHFRAGEKANAL: starke Auslandsnachfrage (Exportboom) zieht an der inländischen Produktion und wirkt wie zusätzlicher Nachfragesog.\n• KOSTENKANAL: steigende Importgüterpreise (Energie, Rohstoffe, Vorprodukte) wirken als Kostendruck – im Skript sowohl beim Nachfragesog ('importierte Inflation') als auch bei den Kostenarten ('Importgüterpreise') gelistet.\n\nAktuelles Anschauungsbeispiel: der Energiepreisschock 2022 – importierter Kostendruck, der die Inflationsrate zweistellig werden ließ.\n\nBesonderheit: Gegen importierte Inflation ist die nationale Politik nur begrenzt wirksam – ein Grund für die europäische Geldpolitik (EZB)."
    },

    e_kostendruck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kostendruckinflation",
      title: "Kostendruckinflation (cost-push)",
      text: "Gestiegene Kosten werden von den Anbietern auf die Verbraucher überwälzt. Die Kostenarten laut Skript:\n• Rohstoffpreise (Rohstoffkosteninflation)\n• Arbeitskosten (Lohnkosteninflation)\n• Kapitalkosten (Zinsen)\n• Importgüterpreise\n• Kostensteuern (Steuerkosteninflation)\n\nGefahr der LOHN-PREIS-SPIRALE: Preissteigerungen → höhere Lohnforderungen → höhere Arbeitskosten → erneute Preissteigerungen.\n\nHeikel für die Politik: Restriktive Geldpolitik bekämpft den Kostendruck nur indirekt und würgt zugleich die Konjunktur ab – Extremfall STAGFLATION (Stagnation + Inflation, → Schema 'Wirkungen der Inflation')."
    },

    e_gewinndruck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Gewinndruckinflation",
      title: "Gewinndruckinflation",
      text: "Anbieter erhöhen die Preise nicht wegen gestiegener Kosten, sondern um ihre GEWINNE auszuweiten – das Skript nennt sie in einem Atemzug mit der Preis-Lohn-Spirale: Auf die Gewinnmitnahmen folgen Lohnforderungen, auf diese neue Preiserhöhungen.\n\nVoraussetzung ist Marktmacht: In engen Oligopolen oder bei Monopolstellungen lassen sich Preiserhöhungen leichter durchsetzen als im Polypol (→ Schema 'Marktform & Verhaltensweise', FS 1) – ein Berührungspunkt von Inflations- und Wettbewerbspolitik (GWB-Missbrauchsaufsicht).\n\nModernes Schlagwort für dasselbe Phänomen: 'Gewinninflation' bzw. 'greedflation'."
    },

    e_geldmenge: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Geldmengen-Inflation",
      title: "Geldmengen-Inflation",
      text: "Wächst die Geldmenge dauerhaft schneller als die Güterproduktion, trifft mehr Geld auf gleich viele Güter – das Preisniveau steigt ('zu viel Geld jagt zu wenige Güter').\n\nDiese monetaristische Sicht ('Verstetigungspolitik', Monetarismus – im Skript bei der Stabilisierungspolitik erwähnt) begründet, warum die GELDPOLITIK der Schlüssel zur Preisstabilität ist: Die EZB steuert über Leitzinsen und Geldmenge (Messgröße u. a. der VPI-EWU) und ist dem vorrangigen Ziel der Preisstabilität verpflichtet (Art. 88 S. 2 GG; Ziel: Inflation nahe 2 %).\n\nHistorische Extremfälle: die deutsche Hyperinflation 1923, Simbabwe, Venezuela – galoppierende Inflation durch Geldmengenausweitung (→ Schema 'Inflationsarten')."
    },

    e_erwartung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Inflationserwartungen",
      title: "Erwartungsinflation (Inflationsmentalität)",
      text: "Rechnen alle mit steigenden Preisen, handeln alle danach: Gewerkschaften fordern Inflationsausgleich plus x, Unternehmen preisen künftige Kostensteigerungen schon heute ein, Konsumenten ziehen Käufe vor – die erwartete Inflation ERZEUGT sich selbst.\n\nDeshalb ist die GLAUBWÜRDIGKEIT der Zentralbank ihr wichtigstes Kapital: Nur wenn die Inflationserwartungen bei ~2 % 'verankert' bleiben, bleibt auch die tatsächliche Inflation beherrschbar. Unabhängigkeit der EZB (Art. 88 S. 2 GG) ist dafür die institutionelle Absicherung.\n\nVerbindung zu den Inflationsarten: antizipierte vs. nicht antizipierte Inflation (→ Schema 'Inflationsarten bestimmen')."
    },

    e_staat_struktur: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Administrierte Preise · Struktur",
      title: "Staatlich administrierte Preise & Strukturanpassungsdruck",
      text: "STAATLICH ADMINISTRIERTE PREISE: Erhöht der Staat Gebühren, Beiträge, Verbrauchsteuern oder regulierte Preise (Energieumlagen, ÖPNV-Tarife), steigt das Preisniveau unmittelbar – der Staat als Inflationsverursacher.\n\nSTRUKTURANPASSUNGSDRUCK (Nachfrageverschiebung): Verschiebt sich die Nachfrage zwischen Branchen, müssten Preise in schrumpfenden Sektoren sinken und in wachsenden steigen. Wegen mangelnder Flexibilität von Preisen und Löhnen NACH UNTEN steigen aber nur die Preise der Wachstumsbranchen → das Preisniveau insgesamt steigt.\n\nMerke den vollständigen Ursachenkatalog: Nachfragesog – Kostendruck – Gewinndruck – Strukturanpassung – administrierte Preise – Geldmenge – Erwartungen."
    }
  }
});
