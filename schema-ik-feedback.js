/*
 * IK-Schema: Konstruktives Feedback – Regel-Check mit Beispielpaaren
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Konstruktives Feedback (Regeln mit Gegenüberstellungen: beschreibend/konkret/
 *    persönlich/aktuell/konstruktiv/wertschätzend; Kontext Präsentations-Feedback LV 1–7)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-feedback",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Gesprächsführung & Führung",
  title: "Konstruktives Feedback geben",
  description: "„Du bist rechthaberisch“ oder „Du hast deine Gründe mehrmals wiederholt“? Die Feedback-Regeln mit den Beispielpaaren des Skripts – für Handlungsproben, Präsentationen und den Führungsalltag.",
  start: "start",
  stations: [
    { id: "check", label: "Regel-Check" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: konstruktiv",
    neg: "Ergebnis: Regelverstoß",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "check",
      kind: "frage",
      norm: "Feedback-Regeln",
      title: "Teste dein Feedback: Welche Formulierung ist richtig?",
      def: "Feedback soll dem Gegenüber ein konkretes Bild geben, was es besser machen kann. Prüfe die Paare aus dem Skript – welche Formulierung ist jeweils die KONSTRUKTIVE?<br><br>Paar 1: „Du bist sehr rechthaberisch.“ / „Du hast deine Gründe mehrmals wiederholt.“<br>Paar 2: „Du kommst immer zu spät.“ / „Du bist heute und letztes Mal zu spät gekommen.“<br>Paar 3: „Man sollte nicht so mit Kollegen reden.“ / „Ich finde wichtig, dass mit Kolleginnen und Kollegen wertschätzend gesprochen wird.“",
      options: [
        { label: "Jeweils die zweite – beschreiben, Fakten, Ich-Botschaft", next: "e_richtig", tone: "pos" },
        { label: "Jeweils die erste – Klartext ohne Umschweife", next: "e_falsch", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_richtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Feedback-Regeln",
      title: "Richtig: Feedback ist beschreibend, konkret, persönlich, aktuell – und konstruktiv",
      text: "Die Regeln aus dem Skript:\n\n• BESCHREIBEND: konkrete Handlungen und ihre Wirkungen benennen, nicht die Person etikettieren („Du hast deine Gründe mehrmals wiederholt“ statt „Du bist rechthaberisch“)\n• KONKRET/KLAR/GENAU: Fakten und Beobachtungen aufzählen („heute und letztes Mal zu spät“ statt „immer zu spät“ – Generalisierungen provozieren nur Widerspruch)\n• PERSÖNLICH: Gefühle und Vermutungen als subjektiv kennzeichnen – ICH-Botschaften statt „man“\n• AKTUELL: auf aktuell beobachtete Ereignisse beziehen\n• KONSTRUKTIV: Leitfrage „Was kann XY tun, um noch besser zu werden?“ – Feedback ohne Handlungsperspektive ist bestenfalls wertlos, schlimmstenfalls erzeugt es eine aggressive Stimmung\n• WERTSCHÄTZEND UND HÖFLICH im „Wie“: Beleidigungen und Herabwürdigungen werden nicht geduldet\n\nUnd beim EMPFANGEN: zuhören, nachfragen, nicht sofort rechtfertigen – so wird es in den Präsentations-Lehrveranstaltungen (LV 1–7) beidseitig trainiert."
    },

    e_falsch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Etikett statt Feedback",
      title: "„Klartext“ ohne Regeln ist Etikettierung – und bewirkt das Gegenteil",
      text: "„Du bist rechthaberisch“, „immer zu spät“, „man sollte nicht …“ – solche Formulierungen verstoßen gleich gegen mehrere Regeln: Sie WERTEN die Person statt Verhalten zu beschreiben, sie GENERALISIEREN statt Fakten zu nennen, und sie verstecken die eigene Position hinter „man“.\n\nWirkung beim Gegenüber: Verteidigung, Rechtfertigung, Gegenangriff – gelernt wird nichts. Erst wenn der Kritikpunkt KONKRET formuliert ist (Skript-Beispiel: der geringe Blickkontakt ließ den Vortrag „langweilig“ wirken), weiß die Person, was sie beim nächsten Mal besser machen kann.\n\nDie Korrektur: beschreibend + konkret + Ich-Botschaft + aktuell + Handlungsvorschlag. Aus „Du bist chaotisch“ wird: „Mir haben in der Präsentation Zwischenüberschriften gefehlt – mit einer Agenda-Folie wäre ich dir leichter gefolgt.“\n\nFür das Kritikgespräch als FÜHRUNGSinstrument gelten zusätzlich die neun Neuberger-Hinweise → Schema „Anerkennungs- & Kritikgespräch“."
    }
  }
});
