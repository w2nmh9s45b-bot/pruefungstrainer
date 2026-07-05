/*
 * Prüfungsschema: Alimentationsprinzip und Rechtsgrundlagen der Besoldung
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 3-13
 *    (Alimentationsprinzip, Gesetzgebungskompetenz, Geltungsbereich, § 2 LBesG)
 *  - Gesetze: LBesG §§ 1, 2, 4 I; Art. 33 V GG (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-alimentation",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundlagen",
  title: "Alimentationsprinzip und Rechtsgrundlagen",
  description: "Grundprinzip der Beamtenbesoldung (Art. 33 V GG), Gesetzgebungskompetenz seit der Föderalismusreform, Geltungsbereich des LBesG RP und Vorbehalt des Gesetzes (§ 2 LBesG) – der Einstieg in jede Besoldungsklausur.",
  start: "start",
  stations: [
    { id: "prinzip", label: "Alimentation" },
    { id: "kompetenz", label: "Kompetenz" },
    { id: "geltung", label: "Geltungsbereich" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: LBesG anwendbar",
    neg: "Ergebnis: LBesG nicht anwendbar",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "prinzip",
      kind: "frage",
      norm: "Art. 33 V GG",
      title: "Was ist das Alimentationsprinzip?",
      def: "Das <b>Alimentationsprinzip</b> ist das grundlegende Prinzip der Beamtenbesoldung. Es steht in keinem Gesetz ausdrücklich, sondern wird aus den <b>hergebrachten Grundsätzen des Berufsbeamtentums (Art. 33 V GG)</b> abgeleitet und wurde durch die Rechtsprechung des BVerfG entwickelt.<br><br><b>Kerngedanke (Korrelat):</b> Anders als beim Arbeitnehmer (Austauschprinzip: Entgelt FÜR Arbeit) erhält der Beamte die Alimentation dafür, dass er sich dem Dienstherrn mit seiner <b>gesamten Persönlichkeit</b> zur Verfügung stellt und in das öffentlich-rechtliche Dienst- und Treueverhältnis eingetreten ist – nicht für die tatsächliche Arbeitsleistung. Deshalb läuft die volle Alimentation z. B. bei vorübergehender Dienstunfähigkeit weiter.<br><br><b>Inhalt:</b> Der Dienstherr muss dem Beamten und seiner Familie <b>lebenslang</b> einen <b>amtsangemessenen Lebensunterhalt</b> sichern (im aktiven Dienst = <b>Besoldung</b>, im Ruhestand = <b>Versorgung</b>). Die Konkretisierung obliegt dem Gesetzgeber in den vom BVerfG gesteckten Grenzen.<br><br><b>Klausur-Einstieg:</b> „Der Beamte hat nach dem Alimentationsprinzip (Art. 33 V GG) und nach § 4 I LBesG Anspruch auf Besoldung …“",
      options: [
        { label: "Weiter: Wer darf die Besoldung regeln?", next: "q_kompetenz", tone: "pos" },
        { label: "Sonderfall: Ehrenbeamte", next: "e_ehrenbeamte", tone: "warn" }
      ]
    },

    q_kompetenz: {
      station: "kompetenz",
      kind: "frage",
      norm: "Art. 70, 73 I Nr. 8, 74 I Nr. 27 GG",
      title: "Wer hat die Gesetzgebungskompetenz für die Besoldung?",
      def: "Seit der <b>Föderalismusreform I (01.09.2006)</b> ist die Besoldung aufgeteilt – es gibt in Deutschland <b>17 Besoldungsordnungen</b> (Bund + 16 Länder):<br><br>• <b>Bundesbeamte:</b> ausschließliche Gesetzgebungskompetenz des Bundes (Art. 73 I Nr. 8 GG) → <b>BBesG</b>.<br>• <b>Un-/mittelbare Landesbeamte</b> (auch Kommunalbeamte): Kompetenz der Länder (Art. 30, 70 GG; die Besoldung ist in Art. 74 I Nr. 27 GG ausdrücklich aus der konkurrierenden Bundeskompetenz ausgenommen) → in RLP das <b>LBesG</b>.<br><br><b>Historie RLP:</b> Bis 31.08.2006 galt einheitlich das BBesG (Art. 74a GG a. F.); in der Übergangsphase bis 30.06.2013 LBesG i. V. m. BBesG (Art. 125a GG); seit dem <b>01.07.2013</b> ist das LBesG eine <b>Vollkodifizierung</b>. Bestandsbeamte wurden zum 01.07.2013 betragsmäßig übergeleitet (§§ 65, 66 LBesG).<br><br><b>Praxisrelevanz:</b> Wechselt ein Beamter vom Bund oder einem anderen Land zu einem rheinland-pfälzischen Dienstherrn, muss die Besoldung nach rheinland-pfälzischem Recht neu bestimmt werden.",
      options: [
        { label: "Weiter: Geltungsbereich des LBesG", next: "q_geltung", tone: "pos" }
      ]
    },

    q_geltung: {
      station: "geltung",
      kind: "frage",
      norm: "§ 1 LBesG",
      title: "Fällt die Person in den Geltungsbereich des LBesG RP?",
      def: "<b>Persönlicher Geltungsbereich (§ 1 I LBesG):</b> Beamte des Landes, der Gemeinden, Gemeindeverbände und der sonstigen der Aufsicht des Landes unterstehenden Körperschaften, Anstalten und Stiftungen des öffentlichen Rechts – <b>mit Ausnahme der Ehrenbeamten</b>.<br><br>Beamte des Landes und der rheinland-pfälzischen Kommunen unterliegen also <b>stets denselben</b> Besoldungsregelungen.<br><br><b>Nicht erfasst:</b><br>• <b>Kirchenbeamte</b> – öffentlich-rechtliche Religionsgesellschaften und ihre Verbände haben eigenes Recht (§ 1 II LBesG; vgl. Art. 140 GG, Art. 137 WRV),<br>• <b>Bundesbeamte</b> – für sie gilt das BBesG.<br><br><b>Sachlicher Geltungsbereich:</b> die Besoldung; Aufwandsentschädigungen sind meist anderweitig geregelt (Ausnahme § 6 LBesG). <b>Räumlich:</b> Staatsgebiet von RLP (Art. 78 I LV).",
      options: [
        { label: "Landes-/Kommunalbeamter RLP", next: "e_anwendbar", tone: "pos" },
        { label: "Ehrenbeamter", next: "e_ehrenbeamte", tone: "neg" },
        { label: "Kirchenbeamter", next: "e_kirche", tone: "neg" },
        { label: "Bundesbeamter", next: "e_bund", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anwendbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 1 I LBesG, § 2 LBesG",
      title: "LBesG anwendbar – Besoldung nur nach Gesetz",
      text: "Die Person unterfällt dem LBesG RP (§ 1 I LBesG). Für die weitere Prüfung gilt der Vorbehalt des Gesetzes (hergebrachter Grundsatz, Art. 33 V GG):\n\n• Die Besoldung wird durch GESETZ geregelt (§ 2 I LBesG); Einzelheiten können Rechtsverordnungen regeln (z. B. LMVergVO, LEZulVO, LKomBesVO).\n• Ein Besoldungsanspruch besteht NUR, wenn er gesetzlich vorgesehen ist. Zusicherungen, Vereinbarungen und Vergleiche über eine höhere als die gesetzliche Besoldung sind UNWIRKSAM (§ 2 II LBesG).\n• Auf die Besoldung kann weder ganz noch teilweise VERZICHTET werden (§ 2 III 1 LBesG). Einzige Ausnahme seit 01.01.2022: Entgeltumwandlung für vom Dienstherrn geleaste Dienstfahrräder (§ 2 III 2, 3 LBesG).\n\nWeiter geht es mit den Bezügebestandteilen (§ 3 LBesG – eigenes Schema) und dem Anspruch auf Besoldung (§ 4 LBesG)."
    },

    e_ehrenbeamte: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 I LBesG",
      title: "Ehrenbeamte: keine Alimentation",
      text: "Ehrenbeamte (§ 5 BeamtStG) fallen nicht unter die Grundsätze des Berufsbeamtentums und sind vom Geltungsbereich des LBesG ausdrücklich ausgenommen (§ 1 I LBesG).\n\nSie haben KEINEN Anspruch auf Alimentation – sie erhalten ggf. eine Aufwandsentschädigung (z. B. Ortsbürgermeister nach der KomAEVO).\n\nKlausur-Merksatz: Alimentation setzt ein Berufsbeamtenverhältnis voraus; das Ehrenamt wird nicht alimentiert, sondern nur entschädigt."
    },

    e_kirche: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 II LBesG",
      title: "Kirchenbeamte: eigenes (Kirchen-)Recht",
      text: "Das LBesG gilt nicht für die öffentlich-rechtlichen Religionsgesellschaften und ihre Verbände (§ 1 II LBesG). Kirchenbeamte werden nach eigenem Kirchenrecht besoldet (vgl. Art. 140 GG i. V. m. Art. 137 WRV – Selbstverwaltungsrecht der Religionsgesellschaften).\n\nAber beachte für später: Wechselt ein Kirchenbeamter in den staatlichen Dienst, sind seine hauptberuflichen Zeiten als Kirchenbeamter bei der Stufenfestsetzung zwingend zu berücksichtigen (§ 30 I 1 Nr. 1 LBesG – Schema „Beginn des Stufenaufstiegs\")."
    },

    e_bund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 73 I Nr. 8 GG",
      title: "Bundesbeamte: BBesG",
      text: "Für Beamte des Bundes gilt das Bundesbesoldungsgesetz (BBesG) – ausschließliche Gesetzgebungskompetenz des Bundes (Art. 73 I Nr. 8 GG).\n\nDas LBesG RP ist nicht anwendbar.\n\nPraxishinweis: Wechselt ein Bundesbeamter zu einem rheinland-pfälzischen Dienstherrn, wird seine Besoldung ab dem Wechsel vollständig nach dem LBesG neu bestimmt; die erste Ernennung mit Anspruch auf Dienstbezüge beim Bund bleibt aber für den Beginn des Stufenaufstiegs maßgeblich (§ 29 II 1 LBesG)."
    }
  }
});
