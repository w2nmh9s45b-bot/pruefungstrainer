/*
 * IK-Schema: Kognitives Motivationsmodell & Selbstbewertungsmodell
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Gesamtpraesentation zum Themenblock Motivation (kognitives Motivationsmodell
 *    nach Heckhausen: Erwartungs-Fragen; Selbstbewertungsmodell: Erfolgs-/
 *    Misserfolgsmotiv, Attributionsmuster, Engels-/Teufelskreis; Fall Sven Schickich)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-motivationsmodelle",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Motivation & Führung",
  title: "Motivationsmodelle: Heckhausen & Selbstbewertung",
  description: "Warum handelt jemand (nicht)? Die Erwartungs-Fragen des kognitiven Motivationsmodells – und warum Erfolgs- und Misserfolgsmotivierte in Engels- bzw. Teufelskreisen landen.",
  start: "start",
  stations: [
    { id: "kognitiv", label: "Heckhausen" },
    { id: "selbstbewertung", label: "Selbstbewertung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Modell angewendet",
    neg: "Ergebnis: Teufelskreis",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "kognitiv",
      kind: "frage",
      norm: "Kognitives Modell",
      title: "Die Erwartungs-Fragen vor jeder Handlung",
      def: "Grundidee des <b>kognitiven Motivationsmodells</b>: Ob wir in einer Situation handeln, hängt von unseren Einschätzungen und ERWARTUNGEN ab –<br><br>1. Ist es überhaupt <b>sinnvoll und notwendig</b>, etwas zu tun? (Ändert sich die Situation nicht auch von selbst? – Situations-Ergebnis-Erwartung)<br>2. <b>Kann ICH</b> etwas bewirken? (Handlungs-Ergebnis-Erwartung)<br>3. <b>Lohnt es sich</b> – kommt das heraus, was ich möchte? (Ergebnis-Folge-Erwartung, Anreizwert der Folgen)<br><br>Nur wenn die Antworten stimmen, entsteht der Entschluss zu handeln.",
      options: [
        { label: "Konsequenz für die Führungsarbeit?", next: "e_heckhausen", tone: "pos" },
        { label: "Weiter: Wie bewerten Menschen ihre Leistung? ", next: "q_selbst", tone: "pos" }
      ]
    },

    q_selbst: {
      station: "selbstbewertung",
      kind: "frage",
      norm: "Selbstbewertungsmodell",
      title: "Erfolgs- oder misserfolgsmotiviert?",
      def: "Das <b>Selbstbewertungsmodell der Leistungsmotivation</b> unterscheidet zwei Typen:<br><br>• <b>Erfolgsmotivierte</b> möchten Erfolge erzielen (Hoffnung auf Erfolg)<br>• <b>Misserfolgsmotivierte</b> möchten Misserfolge vermeiden (Furcht vor Misserfolg)<br><br>Woran erkennt man sie? An <b>Zielsetzung</b> (Anspruchsniveau), <b>Ursachenzuschreibung</b> (Attribution von Erfolg/Misserfolg) und <b>Selbstbewertung</b>. Diagnostiziere die Person im Fall:",
      options: [
        { label: "Realistische Ziele; Misserfolg: „mehr anstrengen“", next: "e_erfolg", tone: "pos" },
        { label: "Zu leichte ODER zu schwere Ziele; Misserfolg: „bin unfähig“", next: "e_misserfolg", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_heckhausen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Führungskonsequenz",
      title: "Führung heißt: an den Erwartungen ansetzen",
      text: "Wenn Handeln von den drei Erwartungen abhängt, kann Führung Motivation gezielt fördern:\n\n• SITUATION-ERGEBNIS: verdeutlichen, warum Handeln nötig ist – was passiert, wenn nichts geschieht? (Sinn und Dringlichkeit)\n• HANDLUNG-ERGEBNIS: Selbstwirksamkeit stärken – erreichbare Aufgaben, Qualifizierung, Unterstützung, Zutrauen („Sie können das bewirken“)\n• ERGEBNIS-FOLGE: Folgen attraktiv und sichtbar machen – Anerkennung, Entwicklungsmöglichkeiten, spürbarer Nutzen der Arbeit (Anreizwert)\n\nUmgekehrt erklärt das Modell Demotivation: Wer glaubt, dass sein Einsatz nichts ändert (niedrige Handlung-Ergebnis-Erwartung) oder dass gute Arbeit folgenlos bleibt (niedrige Ergebnis-Folge-Erwartung), stellt das Handeln ein – völlig rational.\n\nDer Fall Sven Schickich der Präsentation zeigt die Anwendung: Basismotive erkennen, passende Anreize setzen, Erwartungen prüfen."
    },

    e_erfolg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Erfolgsmotiviert",
      title: "Erfolgsmotiviert: der Engelskreis",
      text: "Erfolgsmotivierte wählen REALISTISCHE, mittelschwere Ziele (dort ist die Information über die eigene Tüchtigkeit am größten) und attribuieren günstig: Erfolg internal (Fähigkeit, Anstrengung), Misserfolg external (Pech, Umstände) oder auf mangelnde Anstrengung – also veränderbar.\n\nFolge ist der ENGELSKREIS: positive Selbstbewertung → Zuversicht → weitere realistische Ziele → wieder Erfolgserlebnisse.\n\nFür die Führung: Erfolgsmotivierte brauchen herausfordernde, aber erreichbare Aufgaben mit Rückmeldung – Unterforderung langweilt sie, ständige Kontrolle bremst sie."
    },

    e_misserfolg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Misserfolgsmotiviert",
      title: "Misserfolgsmotiviert: der Teufelskreis – und die Auswege",
      text: "Misserfolgsmotivierte wollen Misserfolge VERMEIDEN und wählen deshalb zu LEICHTE Ziele (Erfolg garantiert, aber wertlos) oder zu SCHWERE („Das ist zu schwer!“ – Scheitern beschämt nicht). Ihre Attribution ist selbstwertschädlich: Erfolg external („Ich hatte Glück“), Misserfolg internal auf mangelnde FÄHIGKEIT („Ich kann das nicht“) – das Einzige, was sich nicht kurzfristig ändern lässt.\n\nFolge ist der TEUFELSKREIS: negative Selbstbewertung → Vermeidung → keine echten Erfolgserlebnisse → Bestätigung des Selbstbilds.\n\nInterventionen setzen an den Prozessvariablen an (Skript): realistische ZIELE vereinbaren (kleinschrittig!), UMATTRIBUIEREN helfen (Misserfolg auf Anstrengung/Strategie statt Fähigkeit; Erfolg internal würdigen) und faire Bezugsnormen wählen (individueller Fortschritt statt Dauervergleich). Genau hier zeigt sich der Wert des Anerkennungsgesprächs."
    }
  }
});
