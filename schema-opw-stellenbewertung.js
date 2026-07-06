/*
 * OPW-Schema: Stellenbewertung – analytisch (Beamte) oder summarisch (Beschäftigte)
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - OPW 12_PLE (Systematik; § 21 LBesG verifiziert: funktionsgerechte Besoldung)
 *  - OPW_13_OLE (§§ 12, 13 TVöD: Tarifautomatik, 50-%-Maß, Arbeitsvorgänge;
 *    Struktur der Entgeltordnung), OPW_14_WLE (EntgO-Aufbaulogik EG 1–12)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-stellenbewertung",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Stellenwirtschaft",
  title: "Stellenbewertung: analytisch oder summarisch",
  description: "Beamtenstelle nach KGSt-Wertzahlen oder Beschäftigtenstelle nach Entgeltordnung? Die zwei Bewertungswelten mit § 21 LBesG, § 12 TVöD (50-%-Regel) und der EG-Aufbaulogik.",
  start: "start",
  stations: [
    { id: "weiche", label: "Statusgruppe" },
    { id: "eingruppierung", label: "Eingruppierung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Verfahren bestimmt",
    neg: "Ergebnis: Bewertungsfehler",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "weiche",
      kind: "frage",
      norm: "Stellenbewertung",
      title: "Wessen Stelle wird bewertet?",
      def: "Die <b>Stellenbewertung</b> ordnet eine Stelle systematisch einer Besoldungs- oder Entgeltgruppe zu – Grundlage ist die detaillierte Erfassung aller Aufgaben und Anforderungen (Stellenbeschreibung!). Sie ist die QUALITATIVE Ergänzung zur quantitativen Bemessung.<br><br><b>Unterscheide</b> nach der Statusgruppe:",
      options: [
        { label: "Beamtenstelle → analytisches Verfahren", next: "e_analytisch", tone: "pos" },
        { label: "Beschäftigtenstelle → summarisches Verfahren", next: "q_summarisch", tone: "pos" }
      ]
    },

    q_summarisch: {
      station: "eingruppierung",
      kind: "frage",
      norm: "§ 12 TVöD",
      title: "Summarische Bewertung: die Regeln des § 12 TVöD",
      def: "Die Eingruppierung richtet sich nach den <b>Tätigkeitsmerkmalen der Entgeltordnung</b> (Anlage 1 VKA). Kernregeln (am Tarifwortlaut):<br><br>• <b>Tarifautomatik</b>: „ist eingruppiert“ – mit der dauerhaften Übertragung der Tätigkeit steht die Entgeltgruppe automatisch fest<br>• Maßstab ist die <b>GESAMTE nicht nur vorübergehend</b> auszuübende Tätigkeit<br>• <b>50-%-Regel</b>: Die Tätigkeitsmerkmale sind erfüllt, wenn zeitlich <b>mindestens zur Hälfte</b> Arbeitsvorgänge anfallen, die sie erfüllen (abweichende Zeitmaße im Merkmal gehen vor)<br>• Anforderungen, die erst über <b>mehrere Arbeitsvorgänge</b> erkennbar sind (z. B. vielseitige Fachkenntnisse), werden zusammen beurteilt<br>• Persönliche Voraussetzungen im Merkmal müssen zusätzlich erfüllt sein",
      hint: "EntgO-Aufbaulogik (Teil A, Verwaltung): EG 1 einfachste → EG 2–4 (einfache/schwierige Tätigkeiten) → EG 5 (3-jährige Ausbildung bzw. gründliche FK) → EG 6 (gründliche UND vielseitige FK) → EG 7/8/9a (+ 1/5, 1/3, volle selbstständige Leistungen) → EG 9b (Hochschulbildung) → EG 9c (besonders verantwortungsvoll) → EG 10/11 (1/3 bzw. volle besondere Schwierigkeit und Bedeutung) → EG 12 (+ Maß der Verantwortung).",
      options: [
        { label: "Regeln klar – Ergebnis anzeigen", next: "e_summarisch", tone: "pos" },
        { label: "Reicht nicht die Betrachtung einzelner Aufgaben?", next: "e_fehler", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_analytisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 21 LBesG",
      title: "Beamtenstellen: analytische Bewertung nach Anforderungen",
      text: "Rechtsgrundlage (am Volltext verifiziert): § 21 LBesG – Grundsatz der FUNKTIONSGERECHTEN Besoldung: Die Funktionen der Beamtinnen und Beamten sind nach den mit ihnen verbundenen ANFORDERUNGEN sachgerecht zu bewerten und Ämtern zuzuordnen.\n\nBeim ANALYTISCHEN Verfahren wird jede Anforderung der Stelle FÜR SICH erfasst und bewertet; aus den Teilbewertungen entsteht nach vorgegebener Systematik – unter GEWICHTUNG der einzelnen Anforderungen – die Gesamtbewertung. Häufig angewendet: das analytische Stellenbewertungsmodell der KGSt (Anforderungsmerkmale mit Punktwerten → Gesamtwertzahl → Besoldungsgruppe).\n\nPraxisbrücke Lahnstein: Deine 43 KGSt-Musterbewertungen (Größenklasse 6) sind genau solche analytischen Bewertungen – Referenz für die eigene Stelle: „SB Verwaltung, Organisation – A 11“. Für Vergleichsbewertungen: Musterbogen suchen, Anforderungsprofile abgleichen, Abweichungen begründen (Skill „kgst-stellenbewertung“)."
    },

    e_summarisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Summarisches Verfahren",
      title: "Beschäftigtenstellen: summarische Gesamtbetrachtung",
      text: "Beim SUMMARISCHEN Verfahren wird die Tätigkeit als GANZES an den Tätigkeitsmerkmalen der Entgeltordnung gemessen – nicht in gewichtete Einzelanforderungen zerlegt.\n\nDer Bewertungsweg: (1) ARBEITSVORGÄNGE bilden (abgrenzbare Arbeitsergebnisse mit Zeitanteilen – aus der Stellenbeschreibung!), (2) je Arbeitsvorgang prüfen, welche Tätigkeitsmerkmale erfüllt sind (Aufbaulogik: Fachkenntnisse → selbstständige Leistungen → besondere Verantwortung/Schwierigkeit und Bedeutung), (3) 50-%-Regel anwenden: Die Entgeltgruppe ist erreicht, wenn ihre Merkmale zeitlich mindestens zur Hälfte erfüllt sind, (4) Tarifautomatik: Mit dauerhafter Übertragung gilt die Eingruppierung automatisch.\n\nDie Anlage 1 (Entgeltordnung VKA) liegt als Referenz im Vault-Skripte-Ordner; die tarifrechtliche Vertiefung (Eingruppierung, Höhergruppierung, Zulagen) liefert das Fach ATR."
    },

    e_fehler: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Klassische Fehler",
      title: "Bewertungsfehler: Einzelaufgaben statt Arbeitsvorgänge",
      text: "Nein – die isolierte Betrachtung einzelner Aufgaben führt in die Irre. Die typischen Fehler:\n\n• ARBEITSVORGÄNGE falsch geschnitten: Bewertet werden Arbeitsvorgänge (abgegrenzte Arbeitsergebnisse), nicht Einzeltätigkeiten; zu kleinteiliger Zuschnitt drückt die Bewertung, zu grober bläht sie auf.\n• 50-%-REGEL ignoriert: Ein hochwertiger Mini-Anteil (10 %) trägt keine höhere Entgeltgruppe – umgekehrt gilt: Anforderungen wie „vielseitige Fachkenntnisse“ dürfen über MEHRERE Arbeitsvorgänge zusammen beurteilt werden (§ 12 II 3 TVöD).\n• PERSON statt STELLE bewertet: Besondere Fähigkeiten des Inhabers gehören nicht in die Bewertung (Stellenbeschreibungs-Grundsatz!).\n• Beamten- und Beschäftigtenwelt vermischt: analytisch (Wertzahlen, § 21 LBesG) ≠ summarisch (Tätigkeitsmerkmale, § 12 TVöD) – die Verfahren sind nicht austauschbar.\n\nSauberer Weg: aktuelle Stellenbeschreibung mit Zeitanteilen → Arbeitsvorgänge bilden → Merkmale subsumieren → dokumentieren (Bewertungsvermerk)."
    }
  }
});
