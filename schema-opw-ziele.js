/*
 * OPW-Schema: Ziele der Organisationsarbeit + SMART-Check
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 1.1 (Zielbegriff, Sach-/Formalziele, Straßenreinigung)
 *  - OPW 04_PLE_Ziele der Organisationsarbeit (SMART-Prinzip, Organisations-/
 *    Individualziele, Fazit "effektiv + effizient + zufriedene Mitarbeiter")
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-ziele",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Grundlagen & Ziele",
  title: "Ziele der Organisationsarbeit & SMART-Check",
  description: "Sachziel oder Formalziel? Organisations- oder Individualziel? Und hält die Zielformulierung dem SMART-Check stand? Die Zielsystematik des Skripts mit Prüfkaskade.",
  start: "start",
  stations: [
    { id: "zielart", label: "Zielart" },
    { id: "smart", label: "SMART" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ziel steht",
    neg: "Ergebnis: nachbessern",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zielart",
      kind: "frage",
      norm: "Zielbegriff",
      title: "Was für ein Ziel liegt vor?",
      def: "Ein <b>Ziel</b> ist ein in der Zukunft liegender, möglichst genau beschriebener, gewollter Zustand – die Konkretisierung eines Bedürfnisses („Was will ich erreichen?“). <b>Erfolg</b> = Grad sowie Art und Weise der Zielerreichung; aus dem Ist-Soll-Vergleich ergeben sich die <b>Aufgaben</b>.<br><br>• <b>Sachziele</b>: WAS soll erreicht werden – die eigentlichen Verwaltungsziele (Gesetze und Satzungen umsetzen; Skript-Beispiel: „Sauberkeit und Sicherheit öffentlicher Straßen und Plätze“)<br>• <b>Formalziele</b>: WIE wird es gemacht – Effektivität, Effizienz, Arbeitszufriedenheit<br>• Daneben: <b>Organisationsziele</b> (der Institution) vs. <b>Individualziele</b> (der Mitarbeitenden)",
      options: [
        { label: "WAS erreicht werden soll → Sachziel", next: "e_sachziel", tone: "pos" },
        { label: "WIE gearbeitet werden soll → Formalziel", next: "e_formalziel", tone: "pos" },
        { label: "Zielformulierung SMART prüfen", next: "q_smart", tone: "pos" }
      ]
    },

    q_smart: {
      station: "smart",
      kind: "frage",
      norm: "SMART-Prinzip",
      title: "Der SMART-Check: fünf Kriterien, eine Kaskade",
      def: "Ziele bzw. Zielvorgaben erfüllen die Kriterien des SMART-Prinzips:<br><br>• <b>S</b>pezifisch – eindeutig definiert<br>• <b>M</b>essbar – Zielerreichung überprüfbar<br>• <b>A</b>kzeptiert – erstrebenswert für die Beteiligten<br>• <b>R</b>ealistisch – erreichbar<br>• <b>T</b>erminiert – mit Zeitvorgabe<br><br>Dazu die Formulierungsregeln des Skripts: konkret, POSITIV formuliert (ohne sprachliche Verneinung), in der eigenen Kontrolle liegend.",
      hint: "Test-Beispiel: „Wir wollen den Service irgendwie verbessern“ – weder spezifisch noch messbar noch terminiert. SMART: „Bis zum 31.12. beantworten wir 90 % der Bürgeranfragen innerhalb von drei Arbeitstagen.“",
      options: [
        { label: "Alle fünf Kriterien erfüllt", next: "e_smart", tone: "pos" },
        { label: "Mindestens ein Kriterium fehlt", next: "e_unsmart", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_sachziel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Sachziel",
      title: "Sachziel: das WAS der Verwaltung",
      text: "Sachziele definieren, WAS erreicht werden soll – die eigentlichen Verwaltungsziele wie die Umsetzung von Gesetzen und Satzungen.\n\nSkript-Beispiel Straßenreinigung: Aus dem Bedürfnis nach einer sauberen, sicheren Umwelt macht der Staat das Sachziel „Sauberkeit und Sicherheit öffentlicher Straßen und Plätze“; der Gesetzgeber leitet Aufgaben ab (Reinigungspflicht der Gemeinden nach § 17 LStrG – Skriptbeispiel), die Gemeinde konkretisiert Einzelaufgaben („tägliche Reinigung der Fußgängerzone mit Leerung aller Abfallkörbe“), daraus folgen Folgeaufgaben (Personal einstellen, Kehrmaschinen beschaffen).\n\nZiel der Organisationsarbeit ist die SACHZIELerreichung bei hoher Erfüllung der FORMALziele – beides gehört zusammen."
    },

    e_formalziel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Formalziel",
      title: "Formalziel: das WIE – Effektivität, Effizienz, Zufriedenheit",
      text: "Formalziele umschreiben die näheren Bedingungen, unter denen die Aufgaben aus den Sachzielen erfüllt werden: effektiv (das Richtige tun – Zielerreichung), effizient (es richtig tun – geringer Ressourceneinsatz) und mit hoher Arbeitszufriedenheit der Mitarbeitenden.\n\nDas OPW-Fazit lautet entsprechend: „Effektive und effiziente Aufgabenerfüllung bei hoher Zufriedenheit der Mitarbeiter(innen)!“ – die Zufriedenheit ist kein Bonus, sondern Formalziel, weil Organisations- und Individualziele zur Deckung gebracht werden müssen.\n\nFür die Organisatoren sind die Formalziele die Arbeitsvorgabe: Menschen, Sachmittel und Informationen so einsetzen, dass die Facharbeit gut UND wirtschaftlich läuft (Straßenreinigungs-Beispiel: Arbeitsschutz und Schutzkleidung gehören dazu)."
    },

    e_smart: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "SMART erfüllt",
      title: "SMART formuliert: Das Ziel kann steuern",
      text: "Spezifisch, messbar, akzeptiert, realistisch, terminiert – erst mit allen fünf Kriterien kann ein Ziel seine Funktionen erfüllen: Orientierung geben, Planung ermöglichen (aus Ist-Soll-Vergleich werden Aufgaben) und Erfolg messbar machen (Erfolg = Grad der Zielerreichung; ohne Zieldefinition kein Erfolg!).\n\nDazu die Formregeln: positiv formulieren (das Gehirn plant besser auf „erreichen“ als auf „vermeiden“), und das Ziel muss in der eigenen Kontrolle liegen.\n\nPraxisbrücke: SMART-Ziele sind die Grundlage für Zielvereinbarungen im Kontraktmanagement (NSM) und für jede Organisationsuntersuchung – wer das Ziel nicht messbar macht, kann hinterher keinen Erfolg nachweisen."
    },

    e_unsmart: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Nicht SMART",
      title: "Nachbessern: Woran unscharfe Ziele scheitern",
      text: "Typische Formulierungsfehler und ihre Folgen:\n\n• nicht SPEZIFISCH („Service verbessern“) → jeder versteht etwas anderes\n• nicht MESSBAR → Zielerreichung und damit Erfolg lassen sich nie feststellen\n• nicht AKZEPTIERT → das Ziel wird passiv unterlaufen (Individualziele beachten!)\n• nicht REALISTISCH → demotiviert, wird innerlich abgeschrieben\n• nicht TERMINIERT → „irgendwann“ heißt nie\n• VERNEINT formuliert („keine Beschwerden mehr“) → besser positiv wenden\n• außerhalb der eigenen KONTROLLE → Erfolg hängt von Dritten ab\n\nKorrektur-Rezept: Zustand konkret beschreiben, Messgröße und Termin ergänzen, Betroffene beteiligen (Akzeptanz), Machbarkeit prüfen – dann trägt das Ziel die gesamte weitere Organisationsarbeit."
    }
  }
});
