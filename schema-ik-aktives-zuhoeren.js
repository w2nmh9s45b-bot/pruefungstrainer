/*
 * IK-Schema: Aktives Zuhören – Technik bestimmen und anwenden
 * Fach: Interaktion und Kommunikation (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - Aktives Zuhoeren_Zusammenfassung Techniken (4 Techniken mit Formulierungshilfen)
 *  - Lehrbrief Gespraechstechniken (FS 1), Lehrplan FS I (Frageformen, einseitige
 *    Gesprächssituationen, Umgang mit Trauernden)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-aktives-zuhoeren",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Gesprächsführung",
  title: "Aktives Zuhören: Technik bestimmen",
  description: "Signale zeigen, paraphrasieren, Gefühle verbalisieren, nachfragen – die vier Techniken des aktiven Zuhörens mit den Formulierungshilfen des Skripts, inklusive Papageien-Falle.",
  start: "start",
  stations: [
    { id: "technik", label: "Techniken" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Technik bestimmt",
    neg: "Ergebnis: Fallstrick",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "technik",
      kind: "frage",
      norm: "4 Techniken",
      title: "Was will ich im Gespräch gerade erreichen?",
      def: "Aktives Zuhören heißt: dem Gegenüber zeigen, dass ich folge, verstehe und ernst nehme. Das Skript unterscheidet vier Techniken – wähle nach dem Gesprächsziel:",
      options: [
        { label: "Zeigen, dass ich folge (ohne zu unterbrechen)", next: "e_signale", tone: "pos" },
        { label: "Sichergehen, dass ich den INHALT richtig verstanden habe", next: "e_paraphrase", tone: "pos" },
        { label: "Auf die GEFÜHLE des Gegenübers eingehen", next: "e_verbalisieren", tone: "pos" },
        { label: "Etwas ist unklar geblieben", next: "e_nachfragen", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_signale: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Technik 1",
      title: "Signale des Zuhörens zeigen",
      text: "Durch kurze Zeichen zeigen, dass man folgt:\n\n• NONVERBAL: Blickkontakt halten, Kopfnicken, offene Körperhaltung\n• VERBAL: „Ja, sicher“, „Gerne“, „Hm“, „Richtig!“, „Ich verstehe!“\n\nDas ist die Basistechnik – sie hält den Redefluss des Gegenübers aufrecht und signalisiert Wertschätzung, ohne das Gespräch an sich zu ziehen. Gerade im Bürgergespräch (Schalter, Telefon) entscheidet sie über die gefühlte Freundlichkeit der Verwaltung."
    },

    e_paraphrase: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Technik 2",
      title: "Paraphrasieren / Zusammenfassen – ohne Papageien-Falle",
      text: "In EIGENEN Worten wiedergeben, was man verstanden zu haben glaubt – das Gegenüber kann korrigieren oder ergänzen. Einstiege aus dem Skript:\n• „Wenn ich das richtig verstehe, sagen Sie, dass …“\n• „Also sagen Sie grundsätzlich, dass …“\n• „Darf ich Sie kurz unterbrechen, um zusammenzufassen, was ich bis jetzt verstanden habe?“\n\nPAPAGEIEN-FALLE: Nicht wörtlich wiederholen, was gesagt wurde – dann klingt man wie ein Papagei und das Gegenüber fühlt sich nicht ernst genommen.\n\nBei vielen Informationen: den Fokus abwägen – Tonfall (Nachdruck, Zögern) verrät oft, was dem Gegenüber am wichtigsten ist."
    },

    e_verbalisieren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Technik 3",
      title: "Gefühle verbalisieren und Verständnis zeigen",
      text: "Die Gefühle des Gegenübers in eigene Worte fassen und die Situation spiegeln:\n• „… und Sie sind ziemlich ärgerlich darüber.“\n• „Sie haben das Gefühl, dass …“\n• „Ich kann mir vorstellen, dass Sie enttäuscht sind …“ / „Das klang so, als ob …“\n\nErgänzbar um ausdrückliches Verständnis und eigenes Bedauern: „Ich kann mir vorstellen, dass die Ablehnung des Bauantrags für Sie schwierig ist.“\n\nWirkung: Verständnis zu zeigen kann beim Gegenüber die Bereitschaft schaffen oder erhöhen, auch Verständnis für UNSERE Situation zu entwickeln – ein Recht oder eine Garantie darauf gibt es allerdings nicht (Skript). Zentrale Technik für emotionale Bürgergespräche, auch im Umgang mit Trauernden."
    },

    e_nachfragen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Technik 4",
      title: "Nachfragen – Klarheit vor Tempo",
      text: "Wenn etwas nicht verstanden oder unklar geblieben ist:\n• „Ich konnte Ihnen nicht ganz folgen, können Sie das bitte wiederholen?“\n• „Wie meinen Sie das genau?“\n• „Können Sie mir diesen Punkt noch einmal ausführlicher schildern?“\n\nNachfragen ist kein Schwächezeichen, sondern verhindert, dass auf falsch Verstandenem weitergearbeitet wird – im Verwaltungsverfahren die billigste Fehlervermeidung überhaupt.\n\nDazu gehört das Wissen um FRAGEFORMEN (offene W-Fragen öffnen das Gespräch, geschlossene Fragen präzisieren und beschleunigen) und Techniken für einseitige Gesprächssituationen (Vielredner freundlich strukturieren, Schweigsame mit offenen Fragen aktivieren) – Lehrbrief Gesprächstechniken FS 1."
    }
  }
});
