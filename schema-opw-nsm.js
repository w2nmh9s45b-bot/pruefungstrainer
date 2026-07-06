/*
 * OPW-Schema: Neues Steuerungsmodell – drei Reformebenen & Kontraktmanagement
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 3.2 (Verwaltungsreform, Bürokratie- vs. NPM-Tabelle,
 *    Hausbau-Metapher, politische/personelle/sachliche Ebene, Kontraktmanagement,
 *    Personalmanagement, Output-Steuerung/"Konzern Stadt")
 *  - Normen verifiziert: § 32 GemO (Rat), § 47 GemO (Bürgermeister)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-nsm",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Organisationsmodelle",
  title: "Neues Steuerungsmodell (NSM)",
  description: "Vom Bürokratiemodell zum Dienstleistungsunternehmen: die drei Reformebenen (politisch, personell, sachlich), Kontraktmanagement zwischen Rat und Bürgermeister und die Output-Steuerung.",
  start: "start",
  stations: [
    { id: "reform", label: "Reform" },
    { id: "ebenen", label: "3 Ebenen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ebene bestimmt",
    neg: "Ergebnis: Reformfalle",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "reform",
      kind: "frage",
      norm: "NSM/NPM",
      title: "Warum die Verwaltungsreform – und was kehrt sie um?",
      def: "Seit den 1990ern (KGSt-Bericht 12/91 „Dezentrale Ressourcenverwaltung“; Vorbilder Phoenix, Christchurch, Tilburg) soll die Verwaltung zum leistungsorientierten <b>„Dienstleistungsunternehmen“</b> werden. Auslöser war laut Skript weniger die Einsicht als die <b>existenzbedrohende Finanznot</b>.<br><br>Die Gegenüberstellung Bürokratiemodell → New Public Management:<br>• Input-Steuerung → <b>Output-Steuerung</b><br>• Regelgebundenheit → Flexibilität unter Beachtung der Gesetze<br>• starre Hierarchie → flache Organisation mit Teamstruktur<br>• Zentralisierung → <b>dezentrale Ressourcenverantwortung</b><br>• Standardisierung → Projektmanagement, Wirtschaftlichkeit und Wirksamkeit<br>• Versorgungsprinzip → Leistungsprinzip<br><br>Es gibt keinen „Königsweg“ – jede Verwaltung definiert Ziele und Maßnahmen selbst (Hausbau-Metapher: viele abgestimmte Bausteine, drei Stockwerke).",
      options: [
        { label: "Eine Maßnahme der richtigen Reformebene zuordnen", next: "q_ebenen", tone: "pos" },
        { label: "Warum scheitern Reformen in der Praxis oft?", next: "e_falle", tone: "warn" }
      ]
    },

    q_ebenen: {
      station: "ebenen",
      kind: "frage",
      norm: "3 Reformebenen",
      title: "Zu welcher Ebene gehört die Maßnahme?",
      def: "Die Reform besteht – wie ein Haus – aus drei Ebenen:",
      options: [
        { label: "Zusammenarbeit Gemeinderat ↔ Verwaltungsführung neu ordnen", next: "e_politisch", tone: "pos" },
        { label: "Leistungswille und -fähigkeit der Mitarbeitenden stärken", next: "e_personell", tone: "pos" },
        { label: "Strukturen, Produkte, Budgets, Rechnungswesen umbauen", next: "e_sachlich", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_politisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Politische Ebene",
      title: "Politische Ebene: Kontraktmanagement zwischen Rat und Bürgermeister",
      text: "Einziger Baustein dieser Ebene (v. a. für Kommunen relevant) ist die Neuordnung der Zusammenarbeit von Gemeinderat und Verwaltungsführung – Ziel: partnerschaftliche Zusammenarbeit auf Basis der GemO-Rollenverteilung.\n\nDie Rollen (am Volltext verifiziert): Nach § 32 GemO ist der GEMEINDERAT das Willensbildungsorgan – er legt die Grundsätze für die Verwaltung fest und beschließt über alle Selbstverwaltungsangelegenheiten. Nach § 47 GemO LEITET der BÜRGERMEISTER die Gemeindeverwaltung und führt die Ratsbeschlüsse aus (Ausführungsorgan).\n\nKONTRAKTMANAGEMENT = „Steuerung durch Leistungs-/Zielvereinbarung“: Der AUFTRAGGEBER (Rat) gibt vor, WAS erreicht werden soll, samt finanziellem und zeitlichem Rahmen; der AUFTRAGNEHMER (Bürgermeister mit Verwaltung) erbringt die Leistung selbstständig und eigenverantwortlich – das WIE liegt bei ihm.\n\nGelingensbedingung: klare Verantwortungsabgrenzung – keine Partei wirkt in den Bereich der anderen hinein (KGSt-Bericht 5/93)."
    },

    e_personell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Personelle Ebene",
      title: "Personelle Ebene: der wichtigste Teil der Reform",
      text: "Neuorganisation, Output-Steuerung und Betriebswirtschaft bringen nur Erfolg, wenn die Mitarbeitenden die neuen Möglichkeiten nutzen WOLLEN und KÖNNEN – „Neuerungen können nur MIT und niemals GEGEN das Personal erfolgreich eingeführt werden.“\n\nZauberformel des Skripts: Motivation und Leistungsfähigkeit jedes/jeder Einzelnen steigern. Gelungen ist die Reform, wenn die Mitarbeitenden ihre Arbeit gut erfüllen WOLLEN, es aufgrund ihrer Fähigkeiten KÖNNEN und es aufgrund von Organisation und Führungsstil auch DÜRFEN.\n\nInstrument ist das PERSONALMANAGEMENT als Managementfunktion: PERSONALFÜHRUNG (zielorientiertes Einwirken der Führungskräfte: auswählen, anleiten, motivieren) plus Personalmanagement i. e. S. als Fachaufgabe – PersonalGEWINNUNG, PersonalENTWICKLUNG, PersonalERHALTUNG; strategisch und mittelfristig angelegt („Schnellschüsse“ und unkoordinierte Einzelfortbildungen bringen nichts).\n\nQuerverbindung: Führungsstile und Motivation vertieft das IK-Fach (Lewin, Rubikon, Anerkennungs-/Kritikgespräch)."
    },

    e_sachlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Sachliche Ebene",
      title: "Sachliche Ebene: Output-Steuerung im „Konzern Stadt“",
      text: "Ziel: die drei Schwachstellen des Bürokratiemodells beseitigen und die organisatorischen Rahmenbedingungen für leistungsorientiertes, wirtschaftliches Handeln schaffen.\n\nZentrale Elemente:\n• ZUSAMMENFÜHRUNG von Fach- und Ressourcenverantwortung dezentral in den Fachbereichen (Leitbild „Konzern Stadt“, BUDGETIERUNG statt Einzelbewilligung; auch fachbereichsintern Kontrakte)\n• OUTPUT-STEUERUNG: Die zu erstellenden PRODUKTE (Arbeitsergebnisse) werden definiert und als konkrete Sachziele mit Leistungsvorgaben vereinbart\n• Betriebswirtschaftliche Instrumente: KOSTENRECHNUNG (KLR!), CONTROLLING und Berichtswesen, Anpassung des Rechnungswesens (in RLP: kommunale DOPPIK als gesetzlich gelenktes Kernstück)\n\nQuerverbindungen: Die KLR liefert das Rechenwerk (Fach Internes Rechnungswesen), § 12 GemHVO die Rechtsgrundlage; die Produktsteuerung braucht saubere Prozesse (Prozessmanagement) und belastbare Stellenwirtschaft (nächste Schemata)."
    },

    e_falle: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Reformfallen",
      title: "Warum Reformen stecken bleiben",
      text: "Das Skript benennt die Stolpersteine deutlich:\n\n• EINZELBAUSTEINE OHNE GESAMTBILD: Viele Verwaltungen führten Budgetierung, Produktbildung, Qualitätsmanagement oder Controlling isoliert ein – ohne ganzheitlichen Ansatz verpuffen die Bausteine (Hausbau-Metapher: ein Stockwerk allein ist kein Haus).\n• UNKRITISCHE ÜBERNAHME betriebswirtschaftlicher Elemente (Doppik, Controlling) ersetzt keine Steuerungskonzeption.\n• PERSONELLE EBENE VERNACHLÄSSIGT: Wer nur Strukturen und Instrumente ändert, scheitert am Wollen-Können-Dürfen der Mitarbeitenden – die personelle Ebene ist der wichtigste Teil.\n• UNEHRLICHKEIT: Wird die Reform als Sparprogramm verkauft (Auslöser war die Finanznot!), entsteht ein Negativimage, das auch echte Verbesserungen belastet – Abhilfe nur durch Ehrlichkeit und Offenheit von Führung und Politik.\n\nMerksatz: kein Königsweg – jede Gemeinde definiert selbst, was die Reform erreichen soll und welche Maßnahmen dafür nötig sind."
    }
  }
});
