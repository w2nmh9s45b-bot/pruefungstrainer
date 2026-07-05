/*
 * Prüfungsschema: Bestandteile der Besoldung (§ 3 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 10-12
 *    (Übersicht Bezügebestandteile, Dienstbezüge vs. Sonstige Bezüge)
 *  - Gesetze: LBesG § 3; BeamtStG § 4 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-bestandteile",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundlagen",
  title: "Bestandteile der Besoldung (§ 3 LBesG)",
  description: "Die zentrale Weiche jeder Besoldungsprüfung: Dienstbezüge (§ 3 I LBesG) oder Sonstige Bezüge (§ 3 II LBesG)? Zuordnung nach der Art des Beamtenverhältnisses (§ 4 BeamtStG) und Überblick über die einzelnen Bestandteile.",
  start: "start",
  stations: [
    { id: "system", label: "Systematik" },
    { id: "status", label: "Beamtenstatus" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Dienstbezüge",
    neg: "Ergebnis: keine Bezüge",
    frei: "Ergebnis: Sonstige Bezüge",
    warn: "Ergebnis: Hinweis"
  },

  nodes: {

    start: {
      station: "system",
      kind: "frage",
      norm: "§ 3 LBesG",
      title: "Die Grundunterscheidung: Dienstbezüge oder Sonstige Bezüge?",
      def: "§ 3 LBesG teilt die Besoldung in zwei Bezügearten – das LBesG verwendet die Begriffe im weiteren Gesetz <b>trennscharf</b>:<br><br><b>Dienstbezüge (§ 3 I LBesG):</b><br>• <b>Grundgehalt</b> (Nr. 1; §§ 22, 23 II 3, 29, 34 S. 2, 35, 36 S. 2),<br>• Leistungsbezüge BesO A/B (Nr. 2; § 33) und BesO W (Nr. 3; §§ 37, 38),<br>• <b>Zuschläge, Zulagen und Vergütungen</b> (Nr. 4; §§ 41–55),<br>• Auslandsbesoldung (Nr. 5; § 56).<br><br><b>Sonstige Bezüge (§ 3 II LBesG):</b><br>• <b>Anwärterbezüge</b> (§§ 57–62).<br><br><b>Klausurtipp:</b> Immer genau lesen, ob eine Norm „Dienstbezüge“ oder „Bezüge“/„Sonstige Bezüge“ sagt – die Verwechslung führt unweigerlich zum falschen Ergebnis (z. B. bei den Erfahrungszeiten: § 29 I 3 LBesG verlangt Anspruch auf DIENSTbezüge, Anwärterzeiten zählen deshalb nicht).<br><br>Wird nach den „gesamten Dienstbezügen“ gefragt, sind i. d. R. <b>Grundgehalt + Familienzuschlag + Allgemeine Zulage</b> zu prüfen.",
      options: [
        { label: "Weiter: Wer erhält welche Bezüge?", next: "q_status", tone: "pos" }
      ]
    },

    q_status: {
      station: "status",
      kind: "frage",
      norm: "§ 4 BeamtStG",
      title: "In welcher Art von Beamtenverhältnis steht die Person?",
      def: "Die Bezügeart hängt am <b>Status</b> (§ 4 BeamtStG):<br><br>• <b>Beamter auf Lebenszeit</b> (§ 4 I BeamtStG) – der Regelfall der dauernden Aufgabenwahrnehmung,<br>• <b>Beamter auf Zeit</b> (§ 4 II BeamtStG) – z. B. hauptamtliche kommunale Wahlbeamte (Bürgermeister, Beigeordnete),<br>• <b>Beamter auf Probe</b> (§ 4 III BeamtStG) – Ableistung der Probezeit nach dem Vorbereitungsdienst,<br>• <b>Beamter auf Widerruf</b> (§ 4 IV BeamtStG) – im Vorbereitungsdienst (= Anwärter),<br>• <b>Ehrenbeamter</b> (§ 5 BeamtStG).<br><br><b>Beispiel aus dem Skript (Übung 1):</b> Der Verbandsgemeindesekretäranwärter G (BaW) erhält Sonstige Bezüge; sein Kollege L, nach bestandener Laufbahnprüfung zum Verbandsgemeindesekretär (BaP) ernannt, erhält Dienstbezüge.<br><br>Übrigens: Die Bezüge werden <b>monatlich im Voraus</b> gezahlt (§ 8 I 1 LBesG) – anders als das Entgelt der Beschäftigten (§ 24 I 1 TVöD: am Monatsende).",
      options: [
        { label: "Lebenszeit / Zeit / Probe", next: "e_dienstbezuege", tone: "pos" },
        { label: "Widerruf (Anwärter)", next: "e_sonstige", tone: "neutral" },
        { label: "Ehrenbeamter", next: "e_ehrenamt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_dienstbezuege: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 3 I LBesG",
      title: "Anspruch auf Dienstbezüge",
      text: "Beamte auf Probe (§ 4 III BeamtStG), auf Lebenszeit (§ 4 I BeamtStG) und auf Zeit (§ 4 II BeamtStG) erhalten DIENSTBEZÜGE nach § 3 I LBesG.\n\nPrüfungsreihenfolge in der Klausur (bei Frage nach den gesamten Dienstbezügen):\n1. GRUNDGEHALT (§ 3 I Nr. 1, §§ 22 ff. LBesG): Besoldungsgruppe + Stufe → Tabellenwert aus Anlage 6 (§ 23 II 3 LBesG),\n2. ZUSCHLÄGE (§ 3 I Nr. 4 1. Alt.): v. a. Familienzuschlag (§ 41 LBesG),\n3. ZULAGEN (§ 3 I Nr. 4 2. Alt.): v. a. Allgemeine Zulage (Nr. 12 der Vorbemerkungen zu den LBesO A und B) – wird in Klausuren gern vergessen!\n\nDiese Zeiten sind zugleich Erfahrungszeiten i. S. d. § 29 I 3 LBesG (wichtig für den Stufenaufstieg).\n\nFormulierungsbaustein: „Als Beamter auf Probe (§ 4 III BeamtStG) hat K Anspruch auf Dienstbezüge (§ 3 I LBesG).\""
    },

    e_sonstige: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 3 II, §§ 57 ff. LBesG",
      title: "Anspruch auf Sonstige Bezüge (Anwärterbezüge)",
      text: "Beamte auf Widerruf im Vorbereitungsdienst (§ 4 IV BeamtStG) erhalten SONSTIGE BEZÜGE nach § 3 II LBesG, nämlich die Anwärterbezüge (§§ 57–62 LBesG): Anwärtergrundbetrag (Anlage 9), ggf. Anwärtersonderzuschläge und den Familienzuschlag (Details im Schema „Anwärterbezüge\").\n\nWICHTIGE FOLGE für später: Zeiten mit Anspruch auf Sonstige Bezüge sind KEINE Erfahrungszeiten (§ 29 I 3 LBesG verlangt Dienstbezüge). Die Ernennung zum Anwärter ist deshalb NIEMALS die „erste Ernennung mit Anspruch auf Dienstbezüge\" i. S. d. § 29 II 1 LBesG – der Stufenaufstieg beginnt erst mit der Übernahme in das Beamtenverhältnis auf Probe."
    },

    e_ehrenamt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 I LBesG",
      title: "Ehrenbeamte: keine Besoldung",
      text: "Ehrenbeamte sind vom Geltungsbereich des LBesG ausgenommen (§ 1 I LBesG). Sie erhalten weder Dienstbezüge noch Sonstige Bezüge, sondern allenfalls eine Aufwandsentschädigung nach anderen Vorschriften.\n\nHintergrund: Das Alimentationsprinzip (Art. 33 V GG) gilt nur für Berufsbeamte – siehe Schema „Alimentationsprinzip und Rechtsgrundlagen\"."
    }
  }
});
