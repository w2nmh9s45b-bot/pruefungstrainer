/*
 * Prüfungsschema: Nebentätigkeitsrecht (§ 40 BeamtStG, §§ 82-86 LBG, NebVO)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 8 - Nebentaetigkeitsrecht" 2024/2025
 *  - Merkblatt Nebentätigkeiten (MdI, Stand 13.12.2023)
 *  - Gesetze: BeamtStG § 40; LBG §§ 82-86, 119 III; NebVO §§ 1-9; EStG § 3 Nr. 26
 *    (Volltexte geprüft; § 85 I 2 LBG: Genehmigung erlischt beim Wechsel
 *     der DIENSTSTELLE - das Skript sagt ungenau "Dienstherr")
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-nebentaetigkeit",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Nebentätigkeit",
  title: "Nebentätigkeitsgenehmigung (§ 83 LBG)",
  description: "Die zweistufige Prüfung: I. Genehmigungspflicht (Nebentätigkeit – keine Verpflichtung – entgeltlich – nicht genehmigungsfrei nach § 84 – nicht allgemein genehmigt nach § 5 NebVO) und II. Genehmigungsfähigkeit (Versagungsgründe § 83 II LBG mit 8-Stunden-Regel und 40-%-Grenze); dazu Ausübung, Vergütungsgrenzen und Ablieferungspflicht.",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "pflicht", label: "Gen.-Pflicht" },
    { id: "faehigkeit", label: "Gen.-Fähigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Genehmigung erteilen",
    neg: "Ergebnis: Versagung",
    frei: "Ergebnis: genehmigungsfrei",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "§ 40 BeamtStG, § 82 II LBG, § 3 NebVO",
      title: "I.a) Liegt begrifflich eine Nebentätigkeit vor?",
      def: "<b>Rahmen:</b> Nach § 40 BeamtStG ist eine Nebentätigkeit grundsätzlich <b>anzeigepflichtig</b>; soweit sie dienstliche Interessen beeinträchtigen kann, steht sie unter <b>Erlaubnis- oder Verbotsvorbehalt</b>. RLP: §§ 82–86 LBG + NebVO (§ 86 LBG). Ein <b>generelles Verbot</b> wäre unzulässig (Art. 2 I, 12 GG gelten auch für Beamte). Die NebVO gilt nicht für Ehrenbeamte (§ 1 S. 3 NebVO).<br><br><b>Nebentätigkeit</b> = Nebenamt oder Nebenbeschäftigung (§ 3 NebVO):<br>• <b>Nebenamt:</b> nicht zum Hauptamt gehörender Aufgabenkreis aufgrund eines öffentlich-rechtlichen Dienst-/Amtsverhältnisses,<br>• <b>Nebenbeschäftigung:</b> jede sonstige Tätigkeit innerhalb oder außerhalb des öD.<br>(Abgrenzung Hauptamt/Nebenamt kommunal: Organisationsbefugnis des Bürgermeisters, § 47 I 1 GemO; Zuordnung § 82 III LBG.)<br><br><b>KEINE Nebentätigkeit</b> (§ 82 II LBG): Wahrnehmung <b>öffentlicher Ehrenämter</b> (§ 2 NebVO – z. B. Ortsbürgermeister; nur Anzeige) und unentgeltliche Vormundschaft/Betreuung/Pflegschaft <b>eines Angehörigen</b>.",
      options: [
        { label: "Nebentätigkeit (+)", next: "q_verpflichtung", tone: "pos" },
        { label: "Ehrenamt/Angehörigen-Betreuung", next: "e_keine_nt", tone: "neutral" }
      ]
    },

    q_verpflichtung: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 82 I LBG, § 83 I LBG",
      title: "I.b)–c) Verpflichtung? Entgeltlichkeit?",
      def: "<b>b) Keine auferlegte Nebentätigkeit:</b> Beamte sind <b>verpflichtet</b>, auf Verlangen des Dienstherrn eine Nebentätigkeit im öD zu übernehmen, sofern sie ihrer Vorbildung/Ausbildung entspricht und nicht über Gebühr beansprucht (§ 82 I LBG) – bei einer <b>Pflicht-NT ist keine Genehmigung</b> zu prüfen.<br><br><b>c) Entgeltlichkeit (§ 83 I LBG):</b> Genehmigungspflichtig ist grundsätzlich nur die <b>entgeltliche</b> Nebentätigkeit. <b>Unentgeltliche</b> sind genehmigungsfrei – <b>AUSSER</b> (§ 83 I 2 LBG):<br>• gewerbliche/freiberufliche Tätigkeit oder Mitarbeit hierbei,<br>• Tätigkeit in einem <b>Organ eines Unternehmens</b> (außer Genossenschaft).",
      options: [
        { label: "Entgeltlich (o. Ausnahme S. 2)", next: "q_frei", tone: "pos" },
        { label: "Unentgeltlich (normal)", next: "e_frei_unentgeltlich", tone: "neutral" },
        { label: "Pflicht-NT des Dienstherrn", next: "e_pflicht_nt", tone: "neutral" }
      ]
    },

    q_frei: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 84 I LBG, § 5 NebVO",
      title: "I.d)–e) Genehmigungsfrei nach § 84 LBG oder allgemein genehmigt (§ 5 NebVO)?",
      def: "<b>d) Genehmigungsfreie Nebentätigkeiten (§ 84 I LBG</b> – abschließend):<br>• Verwaltung <b>eigenen Vermögens</b> (Nr. 1),<br>• <b>schriftstellerische, wissenschaftliche, künstlerische oder Vortragstätigkeiten</b> (Nr. 2),<br>• Gutachtertätigkeiten von Lehrkräften/Wissenschaftlern (Nr. 3),<br>• Tätigkeiten zur Wahrung von <b>Berufsinteressen in Gewerkschaften/Berufsverbänden</b> (Nr. 4),<br>• Selbsthilfeeinrichtungen (Nr. 5).<br><b>Aber Anzeigepflicht</b> für Nr. 2, 3 und 5 (§ 84 II LBG); Untersagung bei Pflichtverletzung möglich (§ 84 III).<br><br><b>e) Allgemein genehmigt (§ 5 I NebVO):</b> Tätigkeiten nach <b>§ 3 Nr. 26 EStG</b> (Übungsleiter, Ausbilder, Erzieher, Betreuer, künstlerisch, Pflege – im Dienst/Auftrag einer jPöR) gelten als allgemein genehmigt, wenn die <b>Freigrenze (3.000 €/Jahr)</b> nicht überschritten wird, die Tätigkeit <b>außerhalb der Dienstzeit</b> erfolgt und kein Versagungsgrund vorliegt – <b>vor Aufnahme schriftlich anzuzeigen</b>! (Auch Prüfertätigkeiten: § 5 II NebVO.)",
      options: [
        { label: "Genehmigungspflichtig", next: "q_versagung", tone: "pos" },
        { label: "§ 84 I / § 5 NebVO greift", next: "e_frei", tone: "neutral" }
      ]
    },

    q_versagung: {
      station: "faehigkeit",
      kind: "frage",
      norm: "§ 83 II LBG",
      title: "II. Genehmigungsfähigkeit: Liegt ein Versagungsgrund vor?",
      def: "Die Genehmigung ist zu <b>versagen</b>, wenn zu besorgen ist, dass <b>dienstliche Interessen beeinträchtigt</b> werden (§ 83 II 1 LBG). „Insbesondere“ (<b>nicht abschließend</b>, § 83 II 2):<br><br>• Nr. 1: <b>Arbeitskraft</b> so stark beansprucht, dass die Pflichterfüllung behindert werden kann – <b>Regelvermutung: mehr als ACHT Stunden/Woche</b> (§ 83 II 3; gilt auch bei Teilzeit, vgl. § 75 II LBG),<br>• Nr. 2: <b>Widerstreit</b> mit dienstlichen Pflichten möglich,<br>• Nr. 3: Beeinflussung von <b>Unparteilichkeit/Unbefangenheit</b>,<br>• Nr. 4: wesentliche Einschränkung der künftigen <b>Verwendbarkeit</b>,<br>• Nr. 5: dem <b>Ansehen der Verwaltung</b> abträglich.<br><br><b>+ 40-%-Grenze (§ 83 II 4 LBG, seit 01.01.2021):</b> Übersteigt die Gesamtvergütung im Kalenderjahr <b>40 v. H. des jährlichen Endgrundgehalts</b>, liegt ein Versagungsgrund vor (Ausnahmen möglich, § 83 II 5; Hintergrund: RWE-Aufsichtsrats-Fall eines Landrats mit ~160.000 €/Jahr).",
      options: [
        { label: "Kein Versagungsgrund", next: "e_genehmigung", tone: "pos" },
        { label: "Versagungsgrund (+)", next: "e_versagung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_genehmigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 83 LBG, § 85 LBG",
      title: "Genehmigung ist zu erteilen (VA)",
      text: "Ist die Genehmigung erforderlich und genehmigungsfähig, ist sie zu ERTEILEN – ein Verwaltungsakt i. S. d. § 35 S. 1 VwVfG (ebenso Versagung, Widerruf, Untersagung); MITBESTIMMUNG des Personalrats (§§ 73, 74, 79 II Nr. 11 LPersVG).\n\nModalitäten (§ 85 LBG):\n• Befristung auf LÄNGSTENS DREI JAHRE, Auflagen/Bedingungen möglich (§ 85 I 1),\n• die Genehmigung ERLISCHT beim Wechsel der DIENSTSTELLE (§ 85 I 2 – schon innerhalb desselben Dienstherrn!),\n• WIDERRUF bei nachträglicher Beeinträchtigung dienstlicher Interessen (§ 83 III LBG; § 49 II 1 Nr. 1 VwVfG).\n\nAUSÜBUNG (§ 82 IV LBG): nur AUSSERHALB der Arbeitszeit; Ausnahmen im dienstlichen (Nr. 1) oder öffentlichen Interesse (Nr. 2 – versäumte Zeit nachleisten!).\n\nVERGÜTUNG: NT für den eigenen Dienstherrn grundsätzlich unvergütet (§ 7 I NebVO; Höchstgrenze 9.600 €/Jahr, § 7 II); ABLIEFERUNGSPFLICHT für Vergütungen aus NT im öD oberhalb der Freibeträge (§ 8 NebVO – Zahlung bis 31.03., Aufstellung ab 1.100 €, § 8 III, IV); Ausnahmen § 9 NebVO (z. B. Lehrtätigkeit an HöV/ZVS, Ahrtal-Fluthilfe). Kommunale Wahlbeamte: jährliche BERICHTSPFLICHT in öffentlicher Sitzung (§ 119 III LBG).\n\nÜbungsfall F (Pizzeria, 3 Std./Woche, 100-120 €/Monat): entgeltliche Nebenbeschäftigung, kein § 84/§ 5-Fall → genehmigungspflichtig; unter 8 Std., kein Widerstreit → zu genehmigen."
    },

    e_versagung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 83 II LBG",
      title: "Genehmigung ist zu versagen",
      text: "Bei Besorgnis der Beeinträchtigung dienstlicher Interessen ist die Genehmigung zu versagen (gebundene Entscheidung – \"ist zu versagen\").\n\nTypische Fälle:\n• Überschreitung der 8-STUNDEN-Regelvermutung (§ 83 II 3 LBG),\n• zeitlicher WIDERSTREIT mit dem Dienst (Übungsfall G: Jugendfußballtrainer mit Spielen am Samstagvormittag, nachdem Samstagsdienst im Bürgerbüro angeordnet wurde – regelmäßige Terminkonflikte → Versagungsgrund § 83 II 2 Nr. 1/Nr. 2; beachte: 150 €/Monat überschreiten die 3.000-€-Freigrenze nicht, aber der Versagungsgrund sperrt auch die allgemeine Genehmigung nach § 5 I NebVO!),\n• Unparteilichkeit (z. B. Bauamts-Sachbearbeiter als Makler im Zuständigkeitsbezirk),\n• 40-%-Vergütungsgrenze (§ 83 II 4).\n\nWird eine genehmigungspflichtige NT OHNE Genehmigung ausgeübt, liegt ein DIENSTVERGEHEN vor (§ 47 BeamtStG) – disziplinarrechtliche Konsequenzen.\n\nRechtsschutz: Versagung ist ein VA → Verpflichtungswiderspruch/-klage (§ 54 BeamtStG)."
    },

    e_frei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 84 LBG, § 5 NebVO",
      title: "Genehmigungsfrei – aber Anzeigepflicht beachten",
      text: "Die Tätigkeit ist genehmigungsfrei:\n\n• § 84 I LBG (Vermögensverwaltung, schriftstellerisch/wissenschaftlich/künstlerisch/Vortrag, Gutachten, Gewerkschaft, Selbsthilfe) – ANZEIGEPFLICHT vor Aufnahme für Nr. 2, 3, 5 (§ 84 II: Art, Umfang, voraussichtliche Entgelte; Änderungen unverzüglich); Auskunftsverlangen aus begründetem Anlass; UNTERSAGUNG ganz/teilweise bei Pflichtverletzung (§ 84 III),\n\n• § 5 I NebVO (Übungsleiter & Co. nach § 3 Nr. 26 EStG bis 3.000 €/Jahr, außerhalb der Dienstzeit, kein Versagungsgrund): gilt als ALLGEMEIN GENEHMIGT – aber SCHRIFTLICHE ANZEIGE vor Aufnahme! (Skript-Tipp: rechtzeitig mit der Behörde abstimmen.)\n\nMerke die Kaskade: Pflicht-NT (§ 82 I) → keine NT (§ 82 II) → unentgeltlich (§ 83 I 1) → § 84-Katalog → § 5 NebVO → erst dann Genehmigungspflicht.\n\nAuch genehmigungsfreie Tätigkeiten müssen außerhalb der Arbeitszeit liegen (§ 82 IV LBG) und dürfen dienstliche Pflichten nicht verletzen."
    },

    e_frei_unentgeltlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 83 I LBG",
      title: "Unentgeltlich: grundsätzlich genehmigungsfrei",
      text: "Unentgeltliche Nebentätigkeiten sind grundsätzlich genehmigungsfrei (§ 83 I 1 LBG e contrario).\n\nAUSNAHMEN – auch unentgeltlich genehmigungspflichtig (§ 83 I 2 LBG):\n1. Übernahme einer GEWERBLICHEN oder FREIBERUFLICHEN Tätigkeit oder die Mitarbeit dabei (z. B. unentgeltliche Mitarbeit in der Kanzlei des Ehepartners),\n2. Tätigkeit in einem ORGAN EINES UNTERNEHMENS (Vorstand, Aufsichtsrat, Geschäftsführung) – Ausnahme: Genossenschaft.\n\nHintergrund: Bei diesen Tätigkeiten drohen Interessenkonflikte unabhängig vom Entgelt.\n\nDaneben gilt § 40 BeamtStG: grundsätzliche Anzeigepflicht jeder Nebentätigkeit – im Zweifel der Behörde melden."
    },

    e_pflicht_nt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 82 I LBG",
      title: "Auferlegte Nebentätigkeit: keine Genehmigung nötig",
      text: "Der Beamte ist VERPFLICHTET, auf Verlangen seines Dienstherrn eine Nebentätigkeit (Nebenamt, Nebenbeschäftigung) im öffentlichen Dienst oder gleichgestellten Dienst zu übernehmen, sofern sie\n• seiner Vorbildung oder Berufsausbildung entspricht und\n• ihn nicht über Gebühr in Anspruch nimmt (§ 82 I LBG).\n\nBei einer solchen Pflicht-Nebentätigkeit ist keine Genehmigung zu prüfen – sie ist Teil der Dienstpflichten.\n\nVergütung: Für Nebentätigkeiten für den EIGENEN Dienstherrn gilt das Vergütungsverbot (§ 7 I NebVO) mit den Ausnahmen des § 7 I 2; im Übrigen greifen Höchstgrenzen und Ablieferungspflicht (§§ 7, 8 NebVO).\n\nAbzugrenzen vom NEBENAMT kraft Organisation (z. B. Protokollführung im Rat): Hier ggf. Sitzungsvergütung nach § 54 LBesG (Fach Besoldungsrecht)."
    },

    e_keine_nt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 82 II LBG, § 2 NebVO",
      title: "Keine Nebentätigkeit im Rechtssinn",
      text: "Nicht als Nebentätigkeit gelten (§ 82 II LBG):\n\n• die Wahrnehmung ÖFFENTLICHER EHRENÄMTER (§ 2 NebVO) – z. B. Ortsbürgermeister, ehrenamtlicher Beigeordneter, Schöffe; sie sind dem Dienstherrn lediglich ANZUZEIGEN,\n• die unentgeltliche VORMUNDSCHAFT, BETREUUNG oder PFLEGSCHAFT eines ANGEHÖRIGEN.\n\nDas Nebentätigkeitsrecht (Genehmigung, Vergütungsgrenzen, Ablieferung) findet darauf keine Anwendung.\n\nAber: Auch Ehrenämter dürfen die Dienstpflichten nicht beeinträchtigen; für kommunale Wahlbeamte auf Zeit besteht die jährliche Berichtspflicht über Nebentätigkeiten UND Ehrenämter in öffentlicher Sitzung (§ 119 III LBG – Protokollierung und Internet-Bekanntgabe; gilt nicht für kommunale Ehrenbeamte bis 4.000 €/Jahr)."
    }
  }
});
