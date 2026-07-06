/*
 * OPW-Schema: Die Stelle – AKV-Prinzip und Stellenarten
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.1/2.2 (Aufgabenanalyse/-synthese, Stellenbegriff,
 *    Aufgaben/Kompetenz/Verantwortung, Stellenarten, Instanzen)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-stelle",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Die Stelle: AKV & Stellenarten",
  description: "Von der Aufgabenanalyse zur Stelle: Aufgaben, Kompetenz und Verantwortung als Einheit – und die Diagnose, ob eine Leitungs-, Ausführungs- oder Mischstelle vorliegt.",
  start: "start",
  stations: [
    { id: "entstehung", label: "Entstehung" },
    { id: "stellenart", label: "Stellenart" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stellenart bestimmt",
    neg: "Ergebnis: AKV-Problem",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "entstehung",
      kind: "frage",
      norm: "Aufgabenanalyse/-synthese",
      title: "Wie entsteht eine Stelle?",
      def: "Eine Aufbauorganisation entsteht, wenn EINE Person die Aufgaben nicht mehr allein bewältigen kann:<br><br>1. <b>Aufgabenanalyse</b>: Aufgaben erfassen und bis zu den Arbeitsschritten untergliedern<br>2. <b>Aufgabensynthese</b>: nach Art, Menge und Wertigkeit zu „Arbeitspaketen“ zusammenfassen → es entsteht die <b>Stelle</b> als „theoretischer Arbeitsplatz“ (erst später besetzt!)<br>3. Stellen werden nach sachlichem Zusammenhang zu <b>Organisationseinheiten</b> gebündelt (Dezernat, Amt, Abteilung, Sachgebiet, Fachbereich …)<br><br>Die <b>Stelle</b> ist die kleinste Organisationseinheit: ein nach Art und Menge abgegrenzter Aufgabenkomplex für einen GEDACHTEN Aufgabenträger – bestehend aus <b>A</b>ufgaben, <b>K</b>ompetenz (Befugnis, alle nötigen Anordnungen zu treffen) und <b>V</b>erantwortung (persönliches Einstehen für die richtige Lösung).",
      hint: "AKV-Kongruenz: Aufgaben, Kompetenz und Verantwortung müssen deckungsgleich sein – Verantwortung ohne Kompetenz macht handlungsunfähig, Kompetenz ohne Verantwortung unkontrollierbar.",
      options: [
        { label: "Stellenart im Fall bestimmen", next: "q_art", tone: "pos" },
        { label: "Aufgaben, Kompetenz und Verantwortung passen nicht zusammen", next: "e_akv", tone: "neg" }
      ]
    },

    q_art: {
      station: "stellenart",
      kind: "frage",
      norm: "Stellenarten",
      title: "Was macht die Stelle überwiegend?",
      def: "Ab einer bestimmten Größe braucht die Organisation eine <b>Hierarchie</b> (Rangordnung); die Hierarchiestufen heißen <b>Instanzen</b>. Danach unterscheiden sich die Stellenarten:",
      options: [
        { label: "Reine Leitungsfunktion (führt nur)", next: "e_leitung", tone: "pos" },
        { label: "Reine Sachbearbeitung (führt niemanden)", next: "e_ausfuehrung", tone: "pos" },
        { label: "Führt UND bearbeitet eigene Aufgaben", next: "e_misch", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_leitung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Leitungsstelle",
      title: "Leitungsstelle: die vorgesetzte Instanz",
      text: "Die Stelle nimmt eine reine LEITUNGSFUNKTION wahr: Sie ist Ausführungsstellen (oder weiteren Instanzen) vorgesetzt, erteilt Weisungen, koordiniert und kontrolliert.\n\nFür Leitungsstellen zentral ist die LEITUNGSSPANNE: Wie viele Stellen kann diese Führungskraft unmittelbar überschauen und verantwortlich leiten (Faustwert 6–10)? → Schema „Leitungsspannen-Simulator“.\n\nIn den Organisationsplänen erscheinen Leitungsstellen als Instanzen des Verwaltungsgliederungsplans; ihre Zahl bestimmt die Gliederungstiefe – und damit, wie schnell Informationen und Entscheidungen durch die Organisation laufen (organisatorisches Minimum!)."
    },

    e_ausfuehrung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Ausführungsstelle",
      title: "Ausführungsstelle: Sachbearbeitung ohne Führungsfunktion",
      text: "Die Stelle nimmt reine REALISIERUNGSAUFGABEN wahr (Sachbearbeitung) und ist einer Leitungsstelle nachgeordnet – im Ein-Liniensystem genau EINER (Einheit des Auftragsempfangs).\n\nAuch Ausführungsstellen brauchen die volle AKV-Ausstattung: klar abgegrenzte Aufgaben, die zur Erledigung nötigen Kompetenzen (z. B. Zeichnungsrecht in der Dienst- und Geschäftsordnung) und die Ausführungsverantwortung.\n\nIhre Wertigkeit (Besoldungs-/Entgeltgruppe) bestimmt die Stellenbewertung, ihre Anzahl die Stellenbemessung – beides auf Grundlage der Stellenbeschreibung (eigene Schemata)."
    },

    e_misch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Leitungs- und Ausführungsstelle",
      title: "Leitungs- und Ausführungsstelle: der Verbund dazwischen",
      text: "In einer dazwischenliegenden Instanz können LEITUNGS- UND AUSFÜHRUNGSSTELLEN gebildet werden – ein Verbund zwischen Instanz und Ausführungsstelle: Die Inhaber haben ANTEILIG eine Führungsposition inne und bearbeiten zusätzlich eigene übertragene Aufgaben (typisch: Sachgebietsleitung mit eigenem Fallbestand).\n\nPraxisfolgen: Bei der STELLENBEMESSUNG ist der Leitungsanteil von der Fallarbeit zu trennen (sonst stimmt keine der beiden Rechnungen); bei der STELLENBEWERTUNG zählt die Leitungsverantwortung als eigenes Merkmal (KGSt: Ausführungs- vs. Leitungsverantwortung in der Stellenbeschreibung, Ziffern 61/62).\n\nMerke: Ob solche Mischstellen sinnvoll sind, hängt von der Leitungsspanne ab – wer 12 Personen führt UND selbst voll sachbearbeitet, kann beides nicht gut tun."
    },

    e_akv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "AKV-Inkongruenz",
      title: "AKV-Inkongruenz: der organisatorische Konstruktionsfehler",
      text: "Aufgaben, Kompetenz und Verantwortung müssen sich decken. Typische Fehlbilder:\n\n• VERANTWORTUNG OHNE KOMPETENZ: Die Stelle soll für Ergebnisse einstehen, darf aber die nötigen Anordnungen nicht treffen – Frust und Absicherungsverhalten sind programmiert.\n• KOMPETENZ OHNE VERANTWORTUNG: Anordnungsbefugnis ohne Einstehen-Müssen lädt zu riskanten oder eigennützigen Entscheidungen ein.\n• AUFGABEN OHNE BEIDES: Die „Restekiste“ – Aufgaben werden zugewiesen, ohne die Stelle handlungsfähig zu machen.\n\nLösung ist saubere Organisationsarbeit: Bei der Aufgabensynthese Arbeitspakete so schnüren, dass jede Stelle die zur Aufgabenerfüllung notwendigen Befugnisse erhält und die Verantwortung tragen kann – dokumentiert in Stellenbeschreibung und Dienst- und Geschäftsordnung (Unterschrifts-/Entscheidungsbefugnisse)."
    }
  }
});
