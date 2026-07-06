/*
 * IK-Schema: Konfliktgespräch – Vorbereitung, Durchführung, Abschluss
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Gesamtpraesentation zum Themenblock Gespraechsfuehrung (OLE 04/LV 17:
 *    Rahmen, Gesprächsphasen Klärung/Lösung/Abschluss, Gesprächsförderer)
 *  - Lehrbriefe Gespraechstechniken I (aktives Zuhören) und II (Ich-Botschaften)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-konfliktgespraech",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Konflikte & Mobbing",
  title: "Konfliktgespräch führen",
  description: "Vom Rahmen bis zum positiven Abschluss: Organisation und innere Vorbereitung, die Phasen Klärung und Lösung mit Ich-Botschaften und aktivem Zuhören – die Handlungsprobe des FS 2 als Schema.",
  start: "start",
  stations: [
    { id: "vorbereitung", label: "Vorbereitung" },
    { id: "durchfuehrung", label: "Durchführung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Gespräch steht",
    neg: "Ergebnis: Stolperstein",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vorbereitung",
      kind: "frage",
      norm: "Phase 1: Vorbereitung",
      title: "Rahmen und Kopf vorbereiten",
      def: "<b>Organisatorischer Rahmen:</b><br>• <b>Zeit</b>: Zeitrahmen festlegen, passende Tageszeit, ausreichend Zeit<br>• <b>Ort</b>: neutral und für alle akzeptabel<br>• <b>Atmosphäre</b>: hell, freundlich, störungsfrei<br>• <b>Sitzordnung</b>: gleiche Bestuhlung, über Eck (nicht frontal!)<br>• <b>Unterlagen</b> bereitlegen<br><br><b>Inhaltlich-innere Vorbereitung:</b> Thema festlegen (Metaebene), eigene Standpunkte und Bedürfnisse bedenken, Bandbreite infrage kommender Lösungen abstecken, Erwartungen und Reaktionsweisen des Gegenübers bedenken – und eine <b>offene Haltung</b> bewahren.",
      options: [
        { label: "Vorbereitet – ins Gespräch (Durchführung)", next: "q_durchfuehrung", tone: "pos" },
        { label: "Warum so viel Aufwand für den Rahmen?", next: "e_rahmen", tone: "warn" }
      ]
    },

    q_durchfuehrung: {
      station: "durchfuehrung",
      kind: "frage",
      norm: "Klärung → Lösung",
      title: "Durchführung: erst klären, dann lösen",
      def: "<b>1. Phase KLÄRUNG</b><br>Gesprächsbeginn: Kontakt herstellen, Anlass und Ziel nennen, Vorgehensweise abstimmen, ggf. Gesprächsregeln vereinbaren (ausreden lassen …).<br>Gesprächsverlauf: die <b>Bedürfnisse BEIDER Parteien</b> klären – mit <b>Ich-Botschaften</b>, <b>aktivem Zuhören</b> (4 Techniken), <b>Gesprächsförderern</b> (nachfragen, zusammenfassen, weiterführen), ggf. Pausen.<br><br><b>2. Phase LÖSUNG</b><br>Lösungen vorschlagen und diskutieren, eine Lösung oder einen Lösungsversuch <b>vereinbaren</b>, ggf. Nachfolgetermin (für weitere Lösungssuche oder zur Überprüfung).",
      hint: "Typischer Fehler: zu früh in die Lösungsphase springen. Solange die Bedürfnisse nicht geklärt sind, bekämpfen Lösungsvorschläge nur Symptome.",
      options: [
        { label: "Zum Abschluss des Gesprächs", next: "e_abschluss", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rahmen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Rahmen wirkt",
      title: "Der Rahmen spricht mit – bevor jemand etwas sagt",
      text: "Konfliktgespräche scheitern oft nicht am Inhalt, sondern am Setting: Zeitdruck signalisiert Geringschätzung, das „Heimspiel“ im eigenen Büro erzeugt Gefälle, frontale Sitzordnung baut Konfrontation auf, Störungen (Telefon!) entwerten das Gespräch.\n\nDeshalb die Skript-Regeln: neutraler, akzeptierter Ort; helle, störungsfreie Atmosphäre; GLEICHE Bestuhlung ÜBER ECK (ermöglicht Blickkontakt ohne Konfrontationsachse); ausreichend Zeit zur passenden Tageszeit.\n\nDas ist angewandte Kommunikationstheorie: Der Rahmen sendet Beziehungsbotschaften (Axiom 2) – wer ihn bewusst gestaltet, entlastet die Sachklärung. Dazu die innere Vorbereitung: Wer eigene Bedürfnisse, Lösungsbandbreite und die Erwartungen des Gegenübers vorab durchdacht hat, kann im Gespräch offen bleiben, statt zu reagieren."
    },

    e_abschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Phase 3: Abschluss",
      title: "Abschluss: sichern, reflektieren, positiv beenden",
      text: "Die dritte Phase macht aus einem guten Gespräch ein wirksames:\n\n• klären, ob ALLES besprochen wurde\n• die gefundenen Lösungen ZUSAMMENFASSEN (gemeinsames Verständnis sichern – wer macht was bis wann?)\n• das Gespräch REFLEKTIEREN (Zufriedenheit beider Seiten ansprechen)\n• einen POSITIVEN ABSCHLUSS finden: Dank für das gemeinsame Gespräch, Wichtigkeit und Wert des Gesprächs betonen\n\nEinordnung: Das Konfliktgespräch ist der Lösungsweg der Glasl-Hauptphase I (Stufen 1–3) – die Beteiligten klären selbst. Ab Hauptphase II braucht es neutrale Vermittlung, ab III den Machteingriff (Glasl-Simulator).\n\nWerkzeuge im Gespräch: Ich-Botschaften (Lehrbrief Gesprächstechniken II), aktives Zuhören (eigenes Schema) und die Feedback-Regeln (eigenes Schema)."
    }
  }
});
