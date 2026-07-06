/*
 * OPW-Schema: Erweiterung der Linienorganisation – die vier Alternativen
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.7 (Staborganisation, Erweiterung bestehender Einheit,
 *    horizontale und vertikale Erweiterung – je mit Fallkonstellationen)
 *  - OPW 08_PLE_Erweiterung Linienorganisation_Orgaplaene
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-erweiterung",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Erweiterung der Linienorganisation",
  description: "Neue Daueraufgabe – wohin damit? Der Entscheidungsbaum zu den vier Alternativen: Stabstelle, bestehende Einheit erweitern, horizontal oder vertikal anbauen (der Klausur-Klassiker aus OPW 08).",
  start: "start",
  stations: [
    { id: "aufgabe", label: "Neue Aufgabe" },
    { id: "weiche", label: "Alternativen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Alternative gewählt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "aufgabe",
      kind: "frage",
      norm: "Primärorganisation",
      title: "Neue Daueraufgabe: Verankerung in der Linie nötig?",
      def: "Entstehen neue Aufgaben <b>kraft Gesetzes oder politischen Auftrags</b>, die DAUERHAFT (ohne definierten Endzeitpunkt) wahrzunehmen sind, müssen Stellen eingerichtet und in der <b>Primär-/Linienorganisation</b> (der hierarchisch gegliederten Grundstruktur aus dauerhaften Organisationseinheiten) verankert werden.<br><br>Vier Alternativen stehen zur Wahl – entscheidend sind Wertigkeit der Aufgabe, inhaltliche Nähe zu Bestehendem, Stellenzahl und Hierarchie-Wirkung.",
      options: [
        { label: "Zur Weiche: Welche Alternative passt?", next: "q_weiche", tone: "pos" }
      ]
    },

    q_weiche: {
      station: "weiche",
      kind: "frage",
      norm: "4 Alternativen",
      title: "Was prägt die neue Aufgabe am stärksten?",
      def: "Prüfe die Fallkonstellation:",
      options: [
        { label: "„Chefsache“ mit besonderer Wertigkeit / Querschnittsthema über die Chefebene", next: "e_stab", tone: "pos" },
        { label: "Mehr vom Gleichen oder enge inhaltliche Nähe zu einer bestehenden Einheit", next: "e_bestehend", tone: "pos" },
        { label: "Neuartiger, klar abgrenzbarer Komplex mit eigener Leitung – gleichrangig zu bestehenden Einheiten", next: "e_horizontal", tone: "pos" },
        { label: "Eigene Einheit nötig, aber geringere Bedeutung – oder Leitungsspanne soll sinken", next: "e_vertikal", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_stab: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Alternative 1",
      title: "Einführung einer Staborganisation",
      text: "Die neuen Stellen werden zu einer Organisationseinheit zusammengefasst, die als STABSTELLE einer Leitungsstelle zugeordnet wird.\n\nGeeignete Fallkonstellationen (Skript):\na) Der Aufgabenstellung wird eine BESONDERE WERTIGKEIT zugesprochen – sie wird zur „Chefsache“ erklärt (Beispiel: Kommunales Bildungsmanagement).\nb) Die Stabstelle bearbeitet QUERSCHNITTSTHEMEN, die über die Chefebene auf die operative Ebene transferiert werden sollen (Beispiel: objektübergreifende Sonderthemen im Zentralen Gebäudemanagement).\n\nBeachte die Stabs-Grenzen: keine eigene Entscheidungs- und Weisungsbefugnis; Wirkung nur über die Leitungsstelle. Die typischen Stabs-Risiken (Graue Eminenz, Konflikte mit der Linie) gelten auch hier → Schema „Leitungssystem bestimmen“."
    },

    e_bestehend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Alternative 2",
      title: "Erweiterung einer bestehenden Organisationseinheit",
      text: "Die neuen Stellen werden einer BEREITS BESTEHENDEN Organisationseinheit – und damit einer vorhandenen Leitungsstelle – zugeordnet.\n\nGeeignete Fallkonstellationen (Skript):\na) QUANTITATIVER ZUWACHS von Aufgaben, die bereits wahrgenommen werden (Beispiel: Anstieg der Asylbewerberzahlen → mehr Sachbearbeitung Asylbewerberleistungen).\nb) Die neuen Aufgaben lassen sich inhaltlich einem vorhandenen Aufgabenkomplex zuordnen, und zwischen den Stelleninhabern ist eine hohe KOMMUNIKATIONS-DURCHLÄSSIGKEIT erforderlich (Beispiel: neue Stelle Forderungsmanagement bei den schülerbezogenen Leistungen).\n\nGrenze: Die LEITUNGSSPANNE der aufnehmenden Einheit! Wächst sie über das Vertretbare, ist stattdessen horizontal oder vertikal zu erweitern."
    },

    e_horizontal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Alternative 3",
      title: "Horizontale Erweiterung: neue Einheit auf bestehender Ebene",
      text: "Es wird eine NEUE Organisationseinheit mit NEUER Leitungsstelle gebildet und auf einer BEREITS BESTEHENDEN Hierarchieebene angesiedelt.\n\nVoraussetzungen (Skript): Die Zahl der neuen Stellen erfordert eine eigene Leitungsstelle (Leitungsspanne!), UND der Aufgabenkomplex ist so neuartig, dass eine klare Abgrenzung zu anderen Einheiten sinnvoll ist (Beispiel: neue Einheit Wohnraummanagement Asylbewerber auf Sachgebietsebene innerhalb der Abteilung Asylbewerberleistungen).\n\nWirkung auf die Messgrößen: Die Gliederungsbreite der übergeordneten Ebene wächst (ein Kästchen mehr nebeneinander), die GLIEDERUNGSTIEFE bleibt gleich – hierarchieschonend im Sinne des organisatorischen Minimums."
    },

    e_vertikal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Alternative 4",
      title: "Vertikale Erweiterung: neue Einheit auf neuer, tieferer Ebene",
      text: "Es wird eine neue Organisationseinheit mit neuer Leitungsstelle gebildet und in einer NEUEN, NIEDRIGEREN Hierarchieebene angesiedelt.\n\nFallkonstellationen (Skript):\na) Wie bei der horizontalen Erweiterung braucht der neuartige, abgrenzbare Komplex eine eigene Leitung – aber seine BEDEUTUNG im Gesamtkontext ist zu gering für die bestehende Ebene.\nb) Die LEITUNGSSPANNE einer Leitungsstelle soll verringert werden – dafür wird eine neue INSTANZ implementiert.\n\nPreis: Die GLIEDERUNGSTIEFE wächst um eine Ebene – mit längeren Dienstwegen und mehr Leitungsaufwand. Deshalb gegen das Prinzip des organisatorischen Minimums abwägen: Rechtfertigt der Nutzen (führbare Spannen, klare Zuordnung) die zusätzliche Instanz? Der Leitungsspannen-Simulator zeigt den Effekt live."
    }
  }
});
