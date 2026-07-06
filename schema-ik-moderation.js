/*
 * IK-Schema: Moderationszyklus – Phasen und Methoden zuordnen
 * Fach: Interaktion und Kommunikation (FS 3 – Soziale Kompetenzen am Arbeitsplatz II)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 3):
 *  - OLE 01 Moderationszyklus + Uebersicht Aufgaben u. Methoden, Moderationsskript
 *  - Methoden-Infos: 01 Brainstorming, 03 Brainwalking, 05 Mehrfelder-Tafel,
 *    07 Problemanalyseschema, 09 Massnahmenplan; OLE 02 Digitale Moderationsformen
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-moderation",
  subject: "Interaktion und Kommunikation",
  fs: ["FS3"],
  area: "Moderation & IKK",
  title: "Moderationszyklus & Methoden",
  description: "Sechs Phasen von Einstieg bis Abschluss – und welche Methode wohin gehört: Brainstorming, Brainwalking, Mehr-Felder-Tafel, Problem-Analyse-Schema und Maßnahmenplan richtig einsetzen.",
  start: "start",
  stations: [
    { id: "zyklus", label: "Zyklus" },
    { id: "methode", label: "Methoden" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Methode gewählt",
    neg: "Ergebnis: Methodengrenze",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zyklus",
      kind: "frage",
      norm: "6 Phasen",
      title: "Der Moderationszyklus: Prozess vor Inhalt",
      def: "Die Moderation führt eine Gruppe durch sechs Phasen:<br><br>1. <b>Einstieg</b> (Ankommen, Ziel und Regeln, Rollenklärung)<br>2. <b>Themen sammeln</b><br>3. <b>Themen auswählen</b> (gewichten, priorisieren)<br>4. <b>Themen bearbeiten</b><br>5. <b>Maßnahmen planen</b><br>6. <b>Abschluss</b> (Zusammenfassung, Reflexion/Blitzlicht)<br><br>Grundprinzip: Die Moderation ist für den <b>PROZESS</b> verantwortlich, die Gruppe für die <b>INHALTE</b>. Digitale Moderationsformen (OLE 02) übertragen den Zyklus in Videokonferenz und Boards.",
      options: [
        { label: "Passende Methode für eine Phase finden", next: "q_methode", tone: "pos" }
      ]
    },

    q_methode: {
      station: "methode",
      kind: "frage",
      norm: "Methodenwahl",
      title: "Was soll die Gruppe gerade tun?",
      def: "Wähle nach dem Arbeitsschritt:",
      options: [
        { label: "Viele Ideen in kurzer Zeit sammeln", next: "e_brainstorming", tone: "pos" },
        { label: "Ein Thema strukturiert durchdringen", next: "e_bearbeiten", tone: "pos" },
        { label: "Ergebnisse in konkrete Schritte gießen", next: "e_massnahmen", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_brainstorming: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Sammeln (Phase 2)",
      title: "Brainstorming & Brainwalking: sammeln ohne zu bewerten",
      text: "BRAINSTORMING ist die bekannteste Methode der Ideenfindung: viele Ideen in kurzer Zeit. Die Moderation stellt die Methode anhand VISUALISIERTER Grundregeln vor: „Spinnen“ ist erlaubt und erwünscht, Menge vor Qualität, auf Ideen anderer aufbauen – und vor allem: KEINE Bewertung während der Sammlung.\n\nGenau das ist für ungeübte Gruppen die größte Hürde (Skript-Hinweis): Der Impuls, Ideen sofort zu kommentieren oder zu zerpflücken, würgt den Fluss ab – die Moderation muss die Regel aktiv schützen.\n\nBRAINWALKING verteilt die Sammlung auf Stationen/Plakate im Raum: mehrere Themen werden PARALLEL bearbeitet, die Gruppe bleibt in Bewegung, alle kommen zu Wort (auch die Stillen).\n\nDanach folgt Phase 3: auswählen und gewichten – erst jetzt wird bewertet!"
    },

    e_bearbeiten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Bearbeiten (Phase 4)",
      title: "Mehr-Felder-Tafel und Problem-Analyse-Schema",
      text: "Für die Bearbeitungsphase bietet das Skript zwei Strukturhilfen:\n\nMEHR-FELDER-TAFEL (Fadenkreuz): für das schnelle ERSTE Bearbeiten eines Unterthemas in kleinen Gruppen – ein Thema wird entlang vorab gewählter Gesichtspunkte beleuchtet (Konflikte herausarbeiten, erste Lösungsansätze). Stärke: klare Struktur, schneller Einstieg. Grenze: Die vorgegebenen Felder ENGEN die Perspektive ein.\n\nPROBLEM-ANALYSE-SCHEMA (PAS): für die INTENSIVE Bearbeitung – das Problem wird in Teilprobleme zergliedert, systematisch beschrieben, Lösungsansätze UND mögliche Hürden werden herausgearbeitet. Stärke: klare Struktur für Gruppenarbeit, viele Informationen. Grenze: zeitaufwändiger.\n\nFaustregel: Mehr-Felder-Tafel zum Sondieren, PAS zum Durchdringen – beides mündet in Phase 5 (Maßnahmen planen)."
    },

    e_massnahmen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Planen (Phase 5)",
      title: "Der Maßnahmenplan: damit die Sitzung nicht ergebnislos bleibt",
      text: "Der MASSNAHMENPLAN sichert die Umsetzung: Er hält die konkreten Vorhaben fest, zu deren Umsetzung konkrete Aktivitäten vereinbart werden (Skript). Die Moderation stellt eine Tabelle mit visualisierten Spaltenüberschriften vor:\n\n• WAS: konkrete, einfache, überschaubare Tätigkeiten (keine Absichtserklärungen!)\n• WER: eine verantwortliche Person je Maßnahme\n• BIS WANN: verbindlicher Termin\n• (ERLEDIGT/Kontrolle: Nachhalten beim nächsten Treffen)\n\nDamit schließt sich der Zyklus: Im ABSCHLUSS (Phase 6) werden Ergebnisse zusammengefasst, offene Punkte benannt und die Zusammenarbeit reflektiert (z. B. Blitzlicht).\n\nPraxisbrücke: Der Moderationszyklus ist das Handwerkszeug für Workshops in der Organisationsarbeit – von der Prozessaufnahme bis zur Teambesprechung (vgl. Arbeitsgebiet Prozessmanagement)."
    }
  }
});
