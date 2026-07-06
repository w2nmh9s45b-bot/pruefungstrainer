/*
 * OPW-Schema: Objekte des Organisierens – Aufbau- oder Ablauforganisation?
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 1.2/1.3 (Objekte/Systemelemente, Aufbau-/Ablauf-
 *    organisation, Organigramm-Darstellungen, Praxisbeispiel Straßenreinigung,
 *    Voraussetzungen erfolgreicher Organisationsarbeit)
 *  - OPW 05_PLE_Objekte_Systemelemente der Organisationsarbeit
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-objekte",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Grundlagen & Ziele",
  title: "Objekte des Organisierens: Aufbau oder Ablauf?",
  description: "Aufgaben, Menschen, Sachmittel, Informationen – und die Kernfrage jeder Organisationsklausur: Gehört das zur Aufbau- oder zur Ablauforganisation? Mit dem Straßenreinigungs-Beispiel.",
  start: "start",
  stations: [
    { id: "objekte", label: "Objekte" },
    { id: "abgrenzung", label: "Abgrenzung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: eingeordnet",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "objekte",
      kind: "frage",
      norm: "4 Systemelemente",
      title: "Womit arbeitet die Organisationsarbeit?",
      def: "Organisieren heißt, vier <b>Objekte/Systemelemente</b> zielgerichtet zusammenzuführen:<br><br>• <b>Aufgaben</b> (aus den Zielen abgeleitet)<br>• <b>Menschen</b> (Mitarbeitende)<br>• <b>Sachmittel</b> (Räume, Technik, Fahrzeuge …)<br>• <b>Informationen</b><br><br>Durch das Zusammenfügen entsteht immer beides: eine auf Dauer angelegte innere Ordnung (= <b>Aufbauorganisation</b>) und verbindliche Vorgaben für den Arbeitsablauf (= <b>Ablauforganisation</b>).<br><br>Voraussetzungen erfolgreicher Organisationsarbeit: Kenntnis der Aufgaben des Bereichs, des bestehenden Verwaltungsaufbaus, der Organisationsmethoden („Handwerkszeug“) und der verfügbaren Ressourcen – deshalb immer Zusammenarbeit von Organisationsabteilung und Fachamt!",
      options: [
        { label: "Eine Regelung einordnen: Aufbau oder Ablauf?", next: "q_abgrenzung", tone: "pos" }
      ]
    },

    q_abgrenzung: {
      station: "abgrenzung",
      kind: "frage",
      norm: "Aufbau vs. Ablauf",
      title: "Struktur oder Arbeitsablauf?",
      def: "Prüfe, was die Regelung festlegt:<br><br>• <b>Aufbauorganisation</b>: WIE die Verwaltung STRUKTURIERT ist – wie Stellen und Fachbereiche geordnet sind, welche Zuständigkeiten und Kompetenzen sie haben (Straßenreinigung: Wie viele Reinigungskolonnen werden gebildet, wie viele Mitarbeitende je Kolonne?)<br>• <b>Ablauforganisation</b>: Gestaltung der ARBEITSABLÄUFE – die konkrete Aufgabenerfüllung durch Menschen oder Maschinen (Welche Kolonne arbeitet wann und wo?)",
      options: [
        { label: "Es geht um Struktur, Zuständigkeit, Hierarchie", next: "e_aufbau", tone: "pos" },
        { label: "Es geht um Reihenfolge, Zeit, Ort der Arbeit", next: "e_ablauf", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_aufbau: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Aufbauorganisation",
      title: "Aufbauorganisation: die dauerhafte Struktur",
      text: "Die Regelung betrifft die STRUKTUR: Bildung und Ordnung von Stellen und Organisationseinheiten, Zuständigkeiten, Kompetenzen, Hierarchie.\n\nDargestellt wird die Aufbauorganisation im ORGANIGRAMM – in vertikaler, horizontaler oder gemischter Darstellung; dokumentiert in den Organisationsplänen (Verwaltungsgliederungsplan & Co., eigenes Schema).\n\nDie Werkzeuge der Aufbauorganisation sind die Themen der folgenden Schemata: die Stelle (mit Aufgaben, Kompetenz, Verantwortung), Leitungsspanne und Gliederungstiefe, Funktionsbereiche, Leitungssysteme und die Erweiterung der Linienorganisation.\n\nMerke: Aufbau- und Ablauforganisation sind zwei Seiten derselben Organisationsarbeit – die Struktur muss zu den Abläufen passen und umgekehrt."
    },

    e_ablauf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Ablauforganisation",
      title: "Ablauforganisation: die Gestaltung der Arbeit",
      text: "Die Regelung betrifft den ARBEITSABLAUF: die konkrete Aufgabenerfüllung – wer macht was, wann, wo und in welcher Reihenfolge (Straßenreinigung: Einsatzplan der Kolonnen).\n\nGrundlegende Ablaufvorgaben stehen in der DIENST- UND GESCHÄFTSORDNUNG (Dienstzeit, Form der Sachbearbeitung, Unterschriftsbefugnis …) sowie in besonderen Dienstanweisungen.\n\nPraxisbrücke: Die systematische Aufnahme und Optimierung von Abläufen ist das Feld des Prozessmanagements (BMI-Leitfäden – dein Aufgabengebiet in Lahnstein); im Studium vertieft das die Ablauforganisation und im NSM die Output-Steuerung. Und für die Stellenbemessung gilt: erst Prozesse optimieren, dann Personal bemessen!"
    }
  }
});
