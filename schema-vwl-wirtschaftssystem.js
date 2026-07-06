/*
 * VWL-Schema: Wirtschaftssystem einordnen (Marktwirtschaft / ZVW / Soziale Marktwirtschaft)
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 3 (Wirtschaftsordnung/-system, Elemente, Soziale MW)
 *  - "2023 VWL OLE 1 Wirtschaftssystem" (Erhard, Müller-Armack, Konzept der Sozialen MW)
 *  - GG Art. 14, 12, 20a (Volltext geprüft: Gesetze/md/Verfassungsrecht/Grundgesetz.md)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-wirtschaftssystem",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Wirtschaftsordnung",
  title: "Wirtschaftssystem einordnen",
  description: "Über die beiden Klassifikationskriterien (Koordinationsmechanismus, Eigentumsordnung) zum Wirtschaftssystem – freie Marktwirtschaft, Zentralverwaltungswirtschaft oder Soziale Marktwirtschaft mit ihren Wesensmerkmalen.",
  start: "start",
  stations: [
    { id: "begriffe", label: "Begriffe" },
    { id: "kriterien", label: "Kriterien" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Einordnung: System bestimmt",
    neg: "Einordnung: Gegenmodell",
    frei: "Einordnung: Hinweis",
    warn: "Einordnung: Mischform"
  },

  routers: {
    "@system": function (f) {
      if (f.koord === "dezentral" && f.eigentum === "privat") return "q_sozial";
      if (f.koord === "zentral" && f.eigentum === "kollektiv") return "e_zvw";
      return "e_misch";
    }
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "System · Ordnung · Verfassung",
      title: "Worüber sprichst du – System, Ordnung oder Verfassung?",
      def: "Drei Begriffe sauber trennen:<br>• <b>Wirtschaftssystem</b> = die <b>idealtypische</b> Art und Weise der Lenkung des Wirtschaftens (Modellebene: Marktwirtschaft ↔ Zentralverwaltungswirtschaft).<br>• <b>Wirtschaftsordnung</b> = das in der Realität <b>verwirklichte</b> Wirtschaftssystem, die Gesamtheit aller Rahmenbedingungen (in Deutschland: die Soziale Marktwirtschaft).<br>• <b>Wirtschaftsverfassung</b> = die Gesamtheit der für die Wirtschaftsordnung bedeutsamen <b>rechtlichen Vorschriften</b> (Verfassung, GWB, HGB, Bankgesetze, Steuergesetze, Tarifvertragsrecht …).",
      options: [
        { label: "Idealtyp einordnen → Wirtschaftssystem bestimmen", next: "q_koordination", tone: "pos" },
        { label: "Realisierte Ordnung Deutschlands nachschlagen", next: "e_soziale_mw", tone: "neutral" }
      ]
    },

    q_koordination: {
      station: "kriterien",
      kind: "frage",
      norm: "Kriterium 1: Koordination",
      title: "Wer plant und koordiniert das Wirtschaftsgeschehen?",
      def: "Erstes Klassifikationskriterium: die <b>Planung des Wirtschaftsgeschehens</b> bzw. der <b>Koordinationsmechanismus</b>.<br><br>• <b>Dezentral</b>: Alle Unternehmen und Haushalte stellen unabhängig eigene Pläne auf; der <b>Markt</b> bringt die Pläne über die <b>freie Preisbildung</b> zum Ausgleich. Preise sind Knappheitsindikatoren, Informations- und Lenkungssystem.<br>• <b>Zentral</b>: Eine staatliche <b>Planbehörde</b> entscheidet, welche Güter in welcher Menge produziert und wie sie verteilt werden (Anweisungs- und Befehlssystem, staatlich administrierte Preise).",
      options: [
        { label: "Dezentrale Planung – Koordination über Markt & Preis", set: { koord: "dezentral" }, next: "q_eigentum", tone: "neutral" },
        { label: "Zentrale Planung – staatliche Planbehörde", set: { koord: "zentral" }, next: "q_eigentum", tone: "neutral" }
      ]
    },

    q_eigentum: {
      station: "kriterien",
      kind: "frage",
      norm: "Kriterium 2: Eigentumsordnung",
      title: "Wem gehören die Produktionsmittel?",
      def: "Zweites Klassifikationskriterium: die <b>Eigentumsordnung für Produktionsmittel</b>.<br><br>• <b>Privateigentum</b> (auch an Produktionsmitteln) mit freier Investitionsentscheidung der Unternehmen – die Plandurchsetzung setzt Verfügungsgewalt voraus.<br>• <b>Kollektiveigentum</b> (Gemeineigentum) an den Produktionsmitteln.<br><br><i>Die Einordnung erfolgt ohne Wertung („sozialistisch“ / „kapitalistisch“ sind nur Etiketten).</i>",
      options: [
        { label: "Privateigentum an Produktionsmitteln", set: { eigentum: "privat" }, next: "@system", tone: "neutral" },
        { label: "Kollektiveigentum an Produktionsmitteln", set: { eigentum: "kollektiv" }, next: "@system", tone: "neutral" }
      ]
    },

    q_sozial: {
      station: "kriterien",
      kind: "frage",
      norm: "Rolle des Staates",
      title: "Marktwirtschaft – aber mit welchem Staat?",
      def: "Dezentrale Planung + Privateigentum = <b>Marktwirtschaft</b>. Jetzt entscheidet die Rolle des Staates über die Variante:<br><br>• <b>Freie Marktwirtschaft</b>: passive Rolle des Staates („Nachtwächterstaat“) – er stellt nur öffentliche Güter bereit und sichert den Rahmen.<br>• <b>Soziale Marktwirtschaft</b>: Der Staat verbindet die Freiheit auf dem Markt mit dem Prinzip des <b>sozialen Ausgleichs</b> (Müller-Armack) und greift als Ordnungs- und Steuerungsinstanz ein.",
      options: [
        { label: "Staat nur als Nachtwächter → freie Marktwirtschaft", set: { variante: "frei" }, next: "e_freie_mw", tone: "neutral" },
        { label: "Markt + sozialer Ausgleich → Soziale Marktwirtschaft", set: { variante: "sozial" }, next: "e_soziale_mw", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_freie_mw: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Freie Marktwirtschaft",
      title: "Freie Marktwirtschaft",
      text: "Marktprinzip pur: Angebot und Nachfrage bestimmen den Preis; der Preis ist Knappheitsanzeiger und Lenkungsinstrument. Zentrale Rolle von Konsument und Unternehmen, dezentrale Planung, Eigenverantwortlichkeit, Gewinne/Verluste als Steuerungsinstrument, ökonomisches Prinzip und Gewinnstreben.\n\nDer Staat bleibt passiv ('Nachtwächterstaat') und beschränkt sich auf die Bereitstellung öffentlicher Güter.\n\nDie 5 Elemente der Wirtschaftsordnung in der Marktvariante: I. Koordination über Markt & Wettbewerb (Marktpreissystem), II. Privateigentum, III. Vertrags-, Konsum-, Berufs- und Gewerbefreiheit, IV. materielles Anreizsystem, V. Marktinformationssystem (Signalfunktion der Preise).\n\nVoraussetzung für das Funktionieren: ein funktionierender WETTBEWERB (→ Schema 'Wettbewerbsbeschränkung prüfen (GWB)')."
    },

    e_zvw: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Zentralverwaltungswirtschaft",
      title: "Zentralverwaltungswirtschaft (Planwirtschaft)",
      text: "Produktion und Verteilung sind den Dispositionen von Haushalten und Unternehmen entzogen: Eine staatliche Planbehörde entscheidet, welche Güter in welcher Menge und Qualität erzeugt und nach welcher Rangfolge sie verteilt werden. Oberste Pflicht der Unternehmen ist die fristgerechte Planerfüllung.\n\nKennzeichen: zentrale Planung und Lenkung, Kollektiveigentum an Produktionsmitteln, staatliche Preisfestlegung, staatliche Lenkung von Berufs- und Arbeitsplatzwahl, hierarchisches Melde- und Befehlssystem, nicht-materielles Anreizsystem.\n\nTypische Folgen (Skript/OLE 1): Rationierung (Bezugsscheine, Warteschlangen, Wartelisten), fehlende Preissignale → Fehlallokation, schwacher technischer Fortschritt mangels Gewinnanreiz und Wettbewerb."
    },

    e_soziale_mw: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Soziale Marktwirtschaft",
      title: "Soziale Marktwirtschaft – die Wirtschaftsordnung der Bundesrepublik",
      text: "Grundgedanke: Verbindung der Freiheit auf dem Markt mit dem Prinzip des sozialen Ausgleichs (Alfred Müller-Armack – Entwickler und Namensgeber; politisch durchgesetzt von Ludwig Erhard, 'Vater des Wirtschaftswunders', 1957 'Wohlstand für Alle'). Kernidee: Eine funktionierende Wirtschaftsordnung entsteht nicht von selbst, sondern muss vom Staat geschaffen und gepflegt werden. Karl Schiller: 'So viel Markt wie möglich, so viel Staat wie nötig!'\n\nWesensmerkmale/Voraussetzungen:\n• Privateigentum inkl. Verfügungsgewalt und Erbrecht – verbunden mit SOZIALPFLICHTIGKEIT (Art. 14 I + II GG),\n• grundsätzlich Konsum- und Investitionsfreiheit, eingeschränkte Vertragsfreiheit,\n• Sicherung des freien Marktzugangs und des Leistungswettbewerbs (Innovationen, Patente),\n• freie Arbeitsplatz- und Berufswahl (Art. 12 GG),\n• Staat als Ordnungs- und Steuerungsinstanz: Allokation, Redistribution, Stabilisierung (Musgrave → Schema 'Wirtschaftssubjekte & Staatsaufgaben'),\n• weitgehende Liberalisierung der Außenwirtschaft,\n• Sicherung der natürlichen Lebensgrundlagen (Art. 20a GG) – diskutiert wird die Weiterentwicklung zur 'sozial-ökologischen Marktwirtschaft'."
    },

    e_misch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Mischform",
      title: "Untypische Kombination – Mischsystem",
      text: "Deine Kombination (Koordination und Eigentumsordnung passen nicht zum Idealtyp) beschreibt kein reines Wirtschaftssystem. In der Realität existieren ohnehin nur Mischformen – die Idealtypen Marktwirtschaft und Zentralverwaltungswirtschaft sind Modellpole.\n\nBeispiele: Marktsozialismus (dezentrale Märkte bei Kollektiveigentum), kriegswirtschaftliche Lenkung (zentrale Planung trotz Privateigentum).\n\nFür die Klausur zählt die Systematik: Klassifikationskriterien sind IMMER (1) Koordinationsmechanismus (zentral/dezentral) und (2) Eigentumsordnung für Produktionsmittel (kollektiv/privat)."
    }
  }
});
