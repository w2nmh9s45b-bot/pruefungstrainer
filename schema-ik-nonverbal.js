/*
 * IK-Schema: Nonverbale Kommunikation – Signalbereiche und Funktionen
 * Fach: Interaktion und Kommunikation (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - Nonverbale Kommunikation_gekuerzt_ILIAS (Signalbereiche, Funktionen nach Argyle,
 *    Wirkungsstudie Mimik/Gestik), OLE02 (Axiom 4: analoge Kommunikation)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-nonverbal",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Kommunikationsmodelle",
  title: "Nonverbale Kommunikation einordnen",
  description: "Der Körper spricht mit: Signalbereiche (Mimik, Blick, Gestik, Haltung, Distanz, Paralinguistik) und Funktionen nonverbaler Kommunikation – und warum man sie nur mit Kontext richtig deutet.",
  start: "start",
  stations: [
    { id: "bereiche", label: "Signalbereiche" },
    { id: "funktion", label: "Funktionen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: eingeordnet",
    neg: "Ergebnis: Vorsicht Deutung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "bereiche",
      kind: "frage",
      norm: "Signalbereiche",
      title: "Womit kommuniziert der Körper?",
      def: "Nonverbale Kommunikation (das „Analoge“ aus Watzlawicks 4. Axiom) zeigt sich in Signalbereichen:<br><br>• <b>Mimik</b> (Gesichtsausdruck) und <b>Blick</b> (inkl. Pupillenreaktion)<br>• <b>Gestik</b> und andere Körperbewegungen<br>• <b>Körperhaltung</b> und <b>Körperkontakt</b><br>• <b>Nähe/Distanz</b> im Raum<br>• <b>Paralinguistik</b>: Lautstärke, Betonung, Sprechgeschwindigkeit<br>• <b>Selbstdarstellungsmittel</b>: Kleidung, Statussymbole, Raumgestaltung<br><br>Sie vermittelt vor allem den <b>Beziehungsaspekt</b> – und wirkt in beide Richtungen: Wirkung anderer auf mich UND meine Wirkung auf andere.",
      options: [
        { label: "Wozu dient nonverbale Kommunikation? (Funktionen)", next: "q_funktion", tone: "pos" },
        { label: "Kann man Körpersprache eindeutig „lesen“?", next: "e_deutung", tone: "warn" }
      ]
    },

    q_funktion: {
      station: "funktion",
      kind: "frage",
      norm: "Funktionen (Argyle)",
      title: "Die Funktionen nonverbaler Kommunikation",
      def: "Nach Argyle erfüllt nonverbale Kommunikation mehrere Funktionen:<br><br>1. <b>Gefühle ausdrücken</b> (mit Gesicht, Körper und Stimme)<br>2. <b>Beziehung zeigen</b>: wie ich zur anderen Person stehe<br>3. <b>Sprache begleiten und unterstützen</b> (Betonung, illustrierende Gesten, Sprecherwechsel steuern)<br>4. Sprache <b>ersetzen</b> (Nicken, Achselzucken)<br>5. <b>Selbstdarstellung</b><br><br>Wirkungsstudie aus dem Skript: Lebhafte Mimik und Gestik dominieren den Eindruck eines Vortrags deutlich stärker als der reine Inhalt.",
      options: [
        { label: "Einordnung klar – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nonverbal",
      title: "Nonverbale Signale: gezielt einsetzen, vorsichtig deuten",
      text: "Für die eigene Wirkung gilt: Blickkontakt, offene Körperhaltung, lebendige Mimik und Gestik, angemessene Distanz und bewusste Stimme (Lautstärke, Tempo, Pausen) unterstützen die Botschaft – wichtig in Bürgergesprächen wie in Präsentationen (FS 2 greift das beim Präsentieren wieder auf).\n\nFür das Deuten gilt: Nonverbale Signale wirken auf die Adressaten, OB der Sender sich dessen bewusst ist oder nicht – der zurückgelehnte Kollege mit Blick aufs Handy sendet Desinteresse, auch ungewollt.\n\nUnd: Die nonverbale Botschaft schlägt bei Widerspruch oft die verbale („schräger Unterton“ im Vierklang) – deshalb auf Stimmigkeit (Kongruenz) von Wort und Körpersprache achten."
    },

    e_deutung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Deutungsvorsicht",
      title: "Kein Vokabelheft: Nonverbales braucht Kontext",
      text: "Das Problem nonverbaler Kommunikationsformen: Für eine korrekte Analyse braucht es oft eine Menge ZUSATZinformationen (Skript/Halla-Heißen & Saremba). Verschränkte Arme können Ablehnung bedeuten – oder schlicht Frieren oder eine bequeme Haltung.\n\nDeshalb: Einzelsignale nie isoliert deuten, sondern im Cluster (mehrere Signale), im Kontext (Situation, Kultur) und im Abgleich mit dem Gesagten. Im Zweifel gilt die Königsdisziplin der Gesprächsführung: ansprechen und nachfragen statt hineininterpretieren (aktives Zuhören).\n\nVerbale Kommunikation ist bei gemeinsamem Zeichenvorrat in der Regel EINDEUTIGER als nonverbale – die nonverbale ist dafür ehrlicher, weil schwerer kontrollierbar."
    }
  }
});
