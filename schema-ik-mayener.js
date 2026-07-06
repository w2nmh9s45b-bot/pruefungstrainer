/*
 * IK-Schema: Mayener Empfehlungen – Textproblem der richtigen Ebene zuordnen
 * Fach: Interaktion und Kommunikation (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - Ueberblick Mayener Empfehlungen (9 Empfehlungen auf Text-, Satz- und Wortebene)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-mayener",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Verständliche Sprache",
  title: "Mayener Empfehlungen anwenden",
  description: "Neun Empfehlungen für verständliche Behördenschreiben auf drei Ebenen: Wo liegt das Problem des Textes – Text-, Satz- oder Wortebene? Mit allen Regeln zum Umsetzen.",
  start: "start",
  stations: [
    { id: "ebene", label: "Ebene" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Regel gefunden",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "ebene",
      kind: "frage",
      norm: "3 Ebenen",
      title: "Auf welcher Ebene hakt der Bescheid?",
      def: "Die <b>Mayener Empfehlungen</b> ordnen neun Regeln drei Ebenen zu. Diagnostiziere zuerst die Ebene:<br><br>• <b>Textebene</b>: Perspektive, Inhalt und Aufbau des gesamten Schreibens<br>• <b>Satzebene</b>: Länge, Struktur und Formulierung einzelner Sätze<br>• <b>Wortebene</b>: Wahl und Form einzelner Wörter",
      options: [
        { label: "Aufbau/Inhalt: Leser findet sich nicht zurecht", next: "e_text", tone: "pos" },
        { label: "Sätze: verschachtelt, endlos, Passiv", next: "e_satz", tone: "pos" },
        { label: "Wörter: Amtsfloskeln, ung-Substantive, Fachbegriffe", next: "e_wort", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_text: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Empfehlungen 1–3",
      title: "Textebene: Zielgruppenbezug, Inhalt, Aufbau",
      text: "(1) ZIELGRUPPENBEZUG: die Perspektive der Bürger einnehmen – ihre Fragen vorwegnehmen und beantworten; Selbstverständliches laiengerecht erläutern; direkt ansprechen („Sie“, „Ihr Sohn Leo“); höflicher, freundlicher Ton; geschlechtergerecht formulieren.\n\n(2) TEXTINHALT: keine langen Einleitungen und Voraberklärungen; Füllwörter und unwichtige Details streichen; klar sagen, was erwartet wird und welche HANDLUNGSSCHRITTE nötig sind; auch bei Textbausteinen den Einzelfall beachten.\n\n(3) TEXTAUFBAU: GESETZE ANS ENDE stellen!; klare Struktur mit leicht verständlichem Einstieg und Schluss, roter Faden im Hauptteil; Absätze, Zwischenüberschriften, Hervorhebungen, Aufzählungen, Infokästen nutzen.\n\nDie Textebene setzt die Verständlichmacher Gliederung/Ordnung und Stimulanz (direkte Anrede!) praktisch um."
    },

    e_satz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Empfehlungen 4–6",
      title: "Satzebene: Länge, Struktur, Formulierungen",
      text: "(4) SATZLÄNGE: sinnvolle, überschaubare Sätze – in der Regel nicht mehr als zwei Zeilen oder 20 Wörter; Verbindungswörter („aber“, „jedoch“, „so dass“) halten kurze Sätze zusammen.\n\n(5) SATZSTRUKTUR: Schachtelsätze vermeiden; jeden Satz um ein VERB konstruieren; „zerrissene“ zweiteilige Verben meiden; zwischen Subjekt und Prädikat höchstens sechs Wörter.\n\n(6) FORMULIERUNGEN: AKTIV statt Passiv (Handelnde zum Subjekt machen); keine Verneinung, wenn es ein positives Wort gibt; doppelte Verneinungen streichen.\n\nDie Satzebene ist der Kern des Verständlichmachers Einfachheit – hier entscheidet sich, ob der Bürger den Satz beim ersten Lesen versteht."
    },

    e_wort: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Empfehlungen 7–9",
      title: "Wortebene: Wortwahl, Wortart, Fachbegriffe",
      text: "(7) WORTWAHL: einfache, bekannte, konkrete und eindeutige Begriffe; EINHEITLICH bezeichnen (Gleiches immer gleich nennen); typisch amtssprachliche, veraltete Wörter und Wendungen vermeiden.\n\n(8) WORTART: Substantive auf -ung in VERBEN umwandeln (Verbsätze stehen der Allgemeinsprache näher); Aussagen nicht durch Adverbien verfremden („leihweise überlassen“ → „verleihen“).\n\n(9) FACHBEGRIFFE, FREMDWÖRTER, ABKÜRZUNGEN: wenn möglich durch gebräuchliche deutsche Wörter ersetzen; unverzichtbare Fachbegriffe und unbekannte Abkürzungen bei der ERSTEN Verwendung erklären (Klammer oder eigener Satz).\n\nZusammen mit Text- und Satzebene ergibt das die Werkzeugkiste für die Klausur-Übung „unverständliches Schreiben verbessern“ – und für jeden echten Bescheid."
    }
  }
});
