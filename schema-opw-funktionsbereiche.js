/*
 * OPW-Schema: Funktionsbereiche – Fach-, Steuerungs- oder Querschnittsfunktion?
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.5 (Fachfunktion, zentrale Steuerungsfunktion,
 *    Service-/Querschnittsfunktion; externe/interne Verwaltungsprodukte)
 *  - OPW 07_PLE_Funktionsbereiche_Leitungssysteme
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-funktionsbereiche",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Funktionsbereiche bestimmen",
  description: "Sozialamt, Behördenleitung oder Personalamt? Jede Einheit gehört zu einem der drei Funktionsbereiche – Diagnose über die Frage: Für wen wird die Leistung erbracht?",
  start: "start",
  stations: [
    { id: "diagnose", label: "Diagnose" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Funktion bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "diagnose",
      kind: "frage",
      norm: "3 Funktionsbereiche",
      title: "Für wen erbringt die Einheit ihre Leistung?",
      def: "In jeder größeren Verwaltung sind drei grundlegende <b>Funktionsbereiche</b> erkennbar – unabhängig vom konkreten Aufbau:<br><br>• Leistungen direkt für <b>Bürger und Unternehmen</b> („nach außen“)<br>• <b>Lenkung von oben</b> für die Gesamtverwaltung<br>• Leistungen für <b>andere Verwaltungseinheiten</b> („nach innen“)",
      options: [
        { label: "Sichtbare Leistungen für Bürger (Sozialamt, Ordnungsamt …)", next: "e_fach", tone: "pos" },
        { label: "Einheitliche Ausrichtung der Gesamtverwaltung", next: "e_steuerung", tone: "pos" },
        { label: "Organisation, Personal, Finanzen für die Verwaltung selbst", next: "e_querschnitt", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fach: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Fachfunktion",
      title: "Fachfunktion: die Facheinheiten – Leistung nach außen",
      text: "Facheinheiten erfüllen die UNMITTELBAREN Aufgaben: die für Bürgerinnen, Bürger und Unternehmen sichtbaren Leistungen der Verwaltung (= EXTERNE Verwaltungsprodukte). Ihnen ist die SACH- UND FACHVERANTWORTUNG übertragen.\n\nBeispiele: Sozialamt, Ordnungsamt, Bauamt einer kreisfreien Stadt – sie geben ihre Arbeit „nach außen“ ab.\n\nEigenheit: Jede Facheinheit ist auf die optimale Erfüllung IHRER Aufgaben ausgerichtet; die Ziele der Gesamtverwaltung geraten dabei aus dem Blick – genau deshalb braucht es die zentrale Steuerungsfunktion.\n\nIm Bürokratiemodell besitzen die Facheinheiten die Fachverantwortung, aber NICHT die Ressourcenverantwortung – eine der drei Systemschwachstellen (→ Schema „Bürokratiemodell“)."
    },

    e_steuerung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Zentrale Steuerung",
      title: "Zentrale Steuerungsfunktion: Lenkung von oben",
      text: "Ohne Einwirkung „von oben“ nähme das Sozialamt kaum Rücksicht auf das Ordnungsamt – und umgekehrt. Die ZENTRALE STEUERUNGSEINHEIT ist den Facheinheiten vorgesetzt und stellt eine weitgehend einheitliche Zielorientierung und die ergebnisorientierte Zusammenarbeit sicher.\n\nDiese Funktion obliegt im Regelfall der BEHÖRDENLEITUNG (Bürgermeister/Landrat mit Führungsunterstützung).\n\nIm NSM wird die Steuerung neu justiert: Statt Einzeleingriffen steuert die Führung über ZIELE und PRODUKTE (Output-Steuerung, Kontraktmanagement) – die Steuerungsfunktion bleibt, ihr Instrumentarium ändert sich (→ Schema „NSM“)."
    },

    e_querschnitt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Querschnittsfunktion",
      title: "Service-/Querschnittsfunktion: Leistung nach innen",
      text: "Mit den unmittelbaren Aufgaben entstehen immer MITTELBARE: Organisationsarbeit, Personalgewinnung und -betreuung, Finanzwesen. Diese werden zentral von QUERSCHNITTSÄMTERN (Serviceeinheiten) für die gesamte Verwaltung wahrgenommen – sie geben ihre Arbeit „nach innen“ ab (= INTERNE Verwaltungsprodukte).\n\nBeispiele: Hauptamt/Zentralabteilung, Personalamt, Kämmerei, zentrale IT; dazu Bürobetriebsdienste wie Registratur, Botendienst, Druckerei, Telefonzentrale.\n\nSonderrolle im Bürokratiemodell: Die Querschnittseinheiten haben neben der Servicefunktion auch STABS- und LEITUNGSfunktion samt Ressourcenverantwortung – mit den bekannten Folgeproblemen (Leiten statt Dienen; → Schema „Bürokratiemodell“). Das NSM verlagert die Ressourcenverantwortung deshalb dezentral in die Fachbereiche."
    }
  }
});
