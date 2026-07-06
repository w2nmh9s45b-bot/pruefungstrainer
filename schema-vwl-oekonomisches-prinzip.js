/*
 * VWL-Schema: Ökonomisches Prinzip bestimmen (Maximal-, Minimal-, Optimumprinzip)
 * Fach: Volkswirtschaftslehre (Fachstudium 1) – kein Paragrafen-Schema,
 * sondern Diagnose-Baum nach Skriptsystematik.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 2.1, 2.4, 2.5
 *    (Zwang zum Wirtschaften, ökonomisches Prinzip, Minimalkostenkombination)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-oekonomisches-prinzip",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Grundlagen des Wirtschaftens",
  title: "Ökonomisches Prinzip bestimmen",
  description: "Maximal-, Minimal- oder Optimumprinzip? Vom Zwang zum Wirtschaften (unbegrenzte Bedürfnisse vs. knappe Güter) zur richtigen Ausprägung des ökonomischen Prinzips – inkl. Minimalkostenkombination.",
  start: "start",
  stations: [
    { id: "lage", label: "Ausgangslage" },
    { id: "zuordnung", label: "Zuordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: Prinzip bestimmt",
    neg: "Diagnose: kein Wirtschaften",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  nodes: {

    start: {
      station: "lage",
      kind: "frage",
      norm: "Zwang zum Wirtschaften",
      title: "Liegt eine wirtschaftliche Entscheidungssituation vor?",
      def: "<b>Wirtschaften</b> heißt, das Spannungsverhältnis zwischen <b>unbegrenzten Bedürfnissen</b> und <b>knappen Mitteln (Gütern)</b> so weit wie möglich zu verringern. Die knappen Mittel werden bewirtschaftet.<br><br>Leitmaxime zur Lösung dieser Konfliktsituation ist das <b>ökonomische Prinzip</b>: die Annahme, dass <b>zweckrational</b> gehandelt wird. Es setzt voraus, dass Mitteleinsatz (Input) und Ergebnis (Output) in einem gewissen Maße <b>variabel</b> sind.",
      hint: "Vier Grundfragen jeder Volkswirtschaft: I. Welcher Bedarf besteht? II. Was kann produziert werden? III. Was soll produziert werden? IV. Wie werden die Güter verteilt?",
      options: [
        { label: "Ja – knappe Mittel, Ziel-Mittel-Abwägung nötig", detail: "Es geht um den Einsatz begrenzter Ressourcen (Geld, Zeit, Personal, Material).", next: "q_fix", tone: "pos" },
        { label: "Nein – freie Güter, keine Knappheit", detail: "Das Gut ist im Verhältnis zu den Bedürfnissen unbegrenzt vorhanden (z. B. Atemluft).", next: "e_frei", tone: "neg" }
      ]
    },

    q_fix: {
      station: "zuordnung",
      kind: "frage",
      norm: "Input ↔ Output",
      title: "Welche Größe ist vorgegeben (fix)?",
      def: "Das ökonomische Prinzip hat drei Ausprägungen – entscheidend ist, <b>welche Seite der Gleichung feststeht</b>:<br><br>• <b>Ziel/Ergebnis fix</b>, Mitteleinsatz variabel → Minimalprinzip<br>• <b>Mittel fix</b>, Ergebnis variabel → Maximalprinzip<br>• <b>Beides variabel</b> → Optimumprinzip (Extremumprinzip)",
      options: [
        { label: "Das Ziel steht fest – Mitteleinsatz soll möglichst gering sein", detail: "Beispiel: Die Stadt muss eine vorgegebene Turnhalle bauen und sucht die günstigste Lösung.", next: "e_minimal", tone: "neutral" },
        { label: "Die Mittel stehen fest – Ergebnis soll möglichst groß sein", detail: "Beispiel: Mit einem festen Budget von 10.000 € soll ein größtmöglicher Werbeeffekt erzielt werden.", next: "e_maximal", tone: "neutral" },
        { label: "Beides ist variabel – bestmögliches Verhältnis gesucht", detail: "Input und Output werden gegeneinander abgewogen, bis das günstigste Verhältnis erreicht ist.", next: "e_optimum", tone: "neutral" },
        { label: "Es geht um die Kombination von Produktionsfaktoren", detail: "Frage: Mit welcher Faktorkombination soll eine bestimmte Menge produziert werden?", next: "q_mkk", tone: "warn" }
      ]
    },

    q_mkk: {
      station: "zuordnung",
      kind: "frage",
      norm: "Produktion",
      title: "Minimalkostenkombination gesucht?",
      def: "Bezogen auf die Produktion lautet die Frage: Mit welchen Methoden sollen Güter produziert werden? Produktionsfaktoren sollen so kombiniert werden, dass mit den knappen Faktoren <b>sparsam</b> umgegangen wird.<br><br>Die <b>Minimalkostenkombination</b> ist diejenige Kombination der Produktionsfaktoren, mit der eine <b>bestimmte Produktionsmenge mit den geringsten Kosten</b> hergestellt werden kann.",
      options: [
        { label: "Ja – gegebene Menge zu geringsten Kosten produzieren", next: "e_mkk", tone: "pos" },
        { label: "Nein – zurück zur allgemeinen Zuordnung", next: "q_fix", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_minimal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Minimalprinzip",
      title: "Minimalprinzip (Sparprinzip)",
      text: "Ein GEGEBENES Ziel soll mit MÖGLICHST GERINGEM Mitteleinsatz erreicht werden.\n\nMerkformel: Ziel fix → Input minimieren.\n\nTypisch für die öffentliche Verwaltung: Die Aufgabe ist gesetzlich vorgegeben (z. B. Schülerbeförderung, Bauhofleistung) – gesucht wird der sparsamste Weg. Vgl. den Grundsatz der Sparsamkeit im Haushaltsrecht: Die Verwaltung arbeitet meist nach dem Minimalprinzip.\n\nAbgrenzung: Wer BEIDE Größen gleichzeitig verändert, handelt nach dem Optimumprinzip."
    },

    e_maximal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Maximalprinzip",
      title: "Maximalprinzip (Ergiebigkeitsprinzip)",
      text: "Mit GEGEBENEN Mitteln soll ein MÖGLICHST GROSSES Ergebnis erzielt werden.\n\nMerkformel: Input fix → Output maximieren.\n\nBeispiele: Mit festem Werbebudget maximale Reichweite; mit vorhandenem Personal möglichst viele Anträge bearbeiten; mit 500 € Wocheneinkauf möglichst hoher Nutzen.\n\nKlausurfalle: 'Mit möglichst wenig Mitteln möglichst viel erreichen' ist KEINE korrekte Ausprägung des ökonomischen Prinzips – zwei Unbekannte gleichzeitig zu extremieren ist logisch unmöglich (unechtes/verwaschenes ökonomisches Prinzip)."
    },

    e_optimum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Optimumprinzip",
      title: "Optimumprinzip (Extremumprinzip)",
      text: "Einsatz UND Ergebnis sind variabel: Beide Größen werden so aufeinander abgestimmt, dass ein BESTMÖGLICHES VERHÄLTNIS zwischen Mitteleinsatz und Ertrag entsteht.\n\nAnnahme: Sowohl Input als auch Output können verändert werden, um das günstigste Verhältnis zueinander herzustellen.\n\nBeispiel: Ein Unternehmen wägt ab, ob zusätzliche Ausgaben für Qualität durch höhere Erlöse überkompensiert werden – gesucht ist das Optimum, nicht das Minimum oder Maximum einer einzelnen Größe."
    },

    e_mkk: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Minimalkostenkombination",
      title: "Minimalkostenkombination",
      text: "Diejenige Kombination der Produktionsfaktoren (Arbeit, Umwelt, Kapital), mit der eine BESTIMMTE Produktionsmenge mit den GERINGSTEN Kosten hergestellt werden kann – die produktionsbezogene Anwendung des Minimalprinzips.\n\nHintergrund: Die Knappheit der Güter ist Folge der Knappheit der Produktionsfaktoren. Auf Güterknappheit kann eine Volkswirtschaft mit Rationierung (Bedarfsbegrenzung, typisch Planwirtschaft) oder Rationalisierung (Produktivitätssteigerung) reagieren.\n\nDrei Wege der Rationalisierung: a) Spezialisierung (Arbeitsteilung), b) Investierung (Einsatz von Realkapital), c) Ökonomisierung (Handeln nach dem ökonomischen Prinzip)."
    },

    e_frei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Freies Gut",
      title: "Kein Anwendungsfall des ökonomischen Prinzips",
      text: "Freie Güter sind im Verhältnis zu den Bedürfnissen nicht knapp – sie müssen nicht bewirtschaftet werden, haben keinen Preis und sind kein Gegenstand des Wirtschaftens.\n\nAber Vorsicht: Viele früher freie Güter werden durch Übernutzung oder Aufbereitung zu wirtschaftlichen Gütern (z. B. sauberes Wasser, saubere Luft in Ballungsräumen). Prüfe im Zweifel das Schema 'Güterart klassifizieren'."
    }
  }
});
