/*
 * Prüfungsschema: Personalverteilungsmaßnahmen (Versetzung, Abordnung, Umsetzung, Zuweisung)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - OLE 05 "Personalverteilungsmassnahmen" (Wagner) 2024/2025
 *  - Buttner, Personalverteilungsentscheidungen BR FS II (31.01.2025)
 *  - Gesetze: BeamtStG §§ 14, 15, 20; LBG §§ 28, 29 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-personalverteilung",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Personalverteilung und Rechtsschutz",
  title: "Personalverteilungsmaßnahmen (Versetzung – Abordnung – Umsetzung – Zuweisung)",
  description: "Die Abgrenzung der horizontalen Personallenkungsmaßnahmen nach Dauer und Behördenwechsel: Versetzung (§ 15 BeamtStG/§ 29 LBG, dauerhaft, VA), Abordnung (§ 14/§ 28, vorübergehend, VA), Umsetzung (innerhalb der Behörde, Realakt!) und Zuweisung (§ 20, Einrichtung ohne Dienstherrnfähigkeit) – mit den Rechtsschutzfolgen.",
  start: "start",
  stations: [
    { id: "einordnung", label: "Einordnung" },
    { id: "abgrenzung", label: "Abgrenzung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Maßnahme bestimmt",
    neg: "Ergebnis: unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Rechtsschutz"
  },

  nodes: {

    start: {
      station: "einordnung",
      kind: "frage",
      norm: "§§ 14, 15, 20 BeamtStG",
      title: "Einordnung: Was sind Personalverteilungsmaßnahmen?",
      def: "Personalverteilungsmaßnahmen (= funktionelle Änderungen, horizontale Personallenkung) übertragen dem Beamten ein <b>anderes Aufgabengebiet</b>, <b>ohne den Status zu berühren</b> – unentbehrliche Instrumente planvoller Personalwirtschaft (Funktions- und Leistungsfähigkeit, Aufgaben-/Organisationsänderungen; die dienstliche <b>Beurteilung</b> sichert die zweckmäßige Verwendung).<br><br>Jede Dienstpostenübertragung ist von vornherein mit der Möglichkeit von Umsetzung, Abordnung und Versetzung „belastet“ – ein Anspruch auf den konkreten Dienstposten besteht nicht.<br><br><b>Die Ämter-Ebenen als Schlüssel:</b><br>• <b>Statusamt</b> (bleibt immer unberührt!),<br>• <b>abstrakt-funktionelles Amt</b> (Zuordnung zu einer Behörde),<br>• <b>konkret-funktionelles Amt</b> (der Dienstposten).<br><br><b>Merke zu den Rechtsgrundlagen:</b> §§ 14, 15 BeamtStG regeln nur die <b>landesübergreifende</b> Abordnung/Versetzung (und in die Bundesverwaltung); <b>innerhalb von RLP</b> gelten §§ 28, 29 LBG.",
      options: [
        { label: "Maßnahme abgrenzen", next: "q_abgrenzung", tone: "pos" }
      ]
    },

    q_abgrenzung: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§§ 28, 29 LBG, § 20 BeamtStG",
      title: "Abgrenzung: dauerhaft? Behördenwechsel? Dienstherrnfähigkeit?",
      def: "Zwei Leitfragen:<br><b>1. Dauer:</b> dauerhaft oder vorübergehend?<br><b>2. Ziel:</b> selbe Behörde – andere Behörde/anderer Dienstherr – Einrichtung ohne Dienstherrnfähigkeit?<br><br>• <b>VERSETZUNG</b> (§ 29 LBG / § 15 BeamtStG): <b>auf Dauer</b> angelegte Übertragung eines anderen (abstrakt-funktionellen) Amtes bei einer <b>anderen Dienststelle</b> desselben oder eines anderen Dienstherrn – Bindung zur bisherigen Behörde wird <b>endgültig gelöst</b>,<br>• <b>ABORDNUNG</b> (§ 28 LBG / § 14 BeamtStG): <b>vorübergehende</b> Übertragung einer dem Amt entsprechenden Tätigkeit bei einer anderen Dienststelle <b>unter Beibehaltung der Zugehörigkeit zur bisherigen</b> (zwei Dienstvorgesetzte!),<br>• <b>UMSETZUNG</b> (gesetzlich nicht geregelt): Wechsel des <b>konkret-funktionellen</b> Amtes <b>innerhalb derselben Behörde</b> (auch: Zweigstelle in anderer Gemeinde),<br>• <b>ZUWEISUNG</b> (§ 20 BeamtStG): vorübergehende Tätigkeit bei einer Einrichtung <b>ohne Dienstherrnfähigkeit</b> (öffentlich oder privat); auch für Beamte auf Widerruf (die mangels Amt nicht abgeordnet werden).",
      options: [
        { label: "Dauerhaft + Behördenwechsel", next: "e_versetzung", tone: "pos" },
        { label: "Vorübergehend + andere Behörde", next: "e_abordnung", tone: "pos" },
        { label: "Innerhalb der Behörde", next: "e_umsetzung", tone: "neutral" },
        { label: "Ohne Dienstherrnfähigkeit", next: "e_zuweisung", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_versetzung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 LBG, § 15 BeamtStG",
      title: "Versetzung (VA, dauerhaft)",
      text: "Die Versetzung ist die auf Dauer angelegte Übertragung eines anderen abstrakt-funktionellen Amtes bei einer anderen Dienststelle desselben oder eines anderen Dienstherrn – ein VERWALTUNGSAKT (Grundverhältnis: Außenwirkung +).\n\nTATBESTAND:\n1. Beamter mit statusrechtlichem Amt (BaL, BaP, BaZ – § 8 III BeamtStG),\n2. Maßnahme begrifflich auf DAUER,\n3. BEHÖRDEN- oder DIENSTHERRNWECHSEL (landesübergreifend nach § 15 BeamtStG immer mit Dienstherrnwechsel),\n4. ANTRAG oder DIENSTLICHER GRUND,\n5. Befähigung/Qualifikation für die neue Tätigkeit,\n6. ggf. ZUSTIMMUNG des Beamten (bei länderübergreifender Versetzung, § 15 II 1 BeamtStG).\n\nRECHTSFOLGE: Ermessen.\n\nRECHTSSCHUTZ: Anfechtungswiderspruch/-klage – aber KEINE aufschiebende Wirkung (§ 54 IV BeamtStG, § 80 II Nr. 3 VwGO)! → vorläufiger Rechtsschutz über § 80 V VwGO.\n\nBesoldung: Beim Dienstherrnwechsel beginnt der Anspruch gegen den neuen Dienstherrn mit dem in der Verfügung bestimmten Tag (§ 27 II LBG, § 4 II 1 LBesG); ggf. Ausgleichszulage bei Dienstherrenwechsel (§ 52 LBesG)."
    },

    e_abordnung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 28 LBG, § 14 BeamtStG",
      title: "Abordnung (VA, vorübergehend)",
      text: "Die Abordnung ist die VORÜBERGEHENDE Übertragung einer dem Amt entsprechenden Tätigkeit bei einer anderen Dienststelle unter Beibehaltung der Zugehörigkeit zur bisherigen (§ 28 I LBG) – ein VA (Grundverhältnis).\n\nTATBESTAND:\n1. Beamter mit statusrechtlichem Amt (Widerrufsbeamte werden ZUGEWIESEN),\n2. begrifflich VORÜBERGEHEND – Provisorium; Auslegungshilfe § 28 II 3, III 2 LBG: Zeiten von 2-5 Jahren schließen den vorübergehenden Charakter nicht aus; zulässig auch \"bis auf weiteres\" und \"mit dem Ziel der Versetzung\"; problematisch: über ~8 Jahre (Entfremdung von der Stammbehörde),\n3. ANDERE DIENSTSTELLE (selbstständige Behörde, keine Zweigstelle),\n4. DIENSTLICHER GRUND (auch personenbedingt: z. B. verlorenes Vertrauen in die Dienstführung),\n5. neue Tätigkeit ENTSPRICHT dem Amt (§ 14 I BeamtStG) oder ist ZUMUTBAR (§ 14 II),\n6. ggf. ZUSTIMMUNG des Beamten (§ 28 II 3, III 1 LBG – bei längerer Dauer/anderem Dienstherrn).\n\nBESONDERHEIT: Der Abgeordnete untersteht ZWEI unmittelbaren Dienstvorgesetzten (Stamm- und Abordnungsbehörde); das Statusamt bleibt unberührt, übertragen wird nur ein anderes konkret-funktionelles Amt.\n\nRECHTSFOLGE: Ermessen. RECHTSSCHUTZ: wie Versetzung – keine aufschiebende Wirkung (§ 54 IV BeamtStG)."
    },

    e_umsetzung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 35 BeamtStG (Weisungsrecht)",
      title: "Umsetzung (Realakt, kein VA!)",
      text: "Die Umsetzung ist der Wechsel des KONKRET-FUNKTIONELLEN Amtes (Dienstpostens) INNERHALB derselben Behörde – der Beamte wird \"zu einer neuen Tätigkeit gesetzt\" (auch: Einsatz in einer Zweigstelle in einer anderen politischen Gemeinde).\n\n• Gesetzlich NICHT geregelt – Grundlage sind Organisationshoheit und WEISUNGSRECHT des Dienstvorgesetzten (§ 35 BeamtStG); vergleichbar der Änderung des Geschäftsverteilungsplans (dort kommt die Tätigkeit zum Beamten, hier der Beamte zur Tätigkeit),\n• KEIN VERWALTUNGSAKT, sondern REALAKT: Sie betrifft allein das BETRIEBSVERHÄLTNIS (Beamter als \"Rädchen der Staatsorganisation\") – Außenwirkung (−),\n• zulässig aus JEDEM SACHLICHEN GRUND; weites Ermessen, begrenzt nur durch Ermessensmissbrauch (BVerwG, B. v. 21.06.2012 – 2 B 23.12) – auch bei innerdienstlichen Spannungen unabhängig von der Schuldfrage (Übungsfall: Hauptamtsleiter S nach Konflikt mit dem neuen Bürgermeister auf die gleichbewertete A-12-Stelle Gartenamtsleitung),\n• GRENZE: amtsangemessene Beschäftigung – die neue Tätigkeit muss dem STATUSamt entsprechen; dauerhaft unterwertige Beschäftigung oder ein gesundheitsgefährdendes Büro verletzen eigene Rechte (dann Widerspruchsbefugnis!).\n\nRECHTSSCHUTZ (Übungsfälle 1 und 2): kein Anfechtungswiderspruch (kein VA) → BEAMTENRECHTLICHER WIDERSPRUCH ohne aufschiebende Wirkung – S muss der Anordnung einstweilen Folge leisten; Hauptsache: allgemeine Leistungsklage; Eilrechtsschutz: § 123 VwGO (bereits vollzogen → REGELUNGSANORDNUNG auf Rückgängigmachung; Vollzug steht bevor → SICHERUNGSANORDNUNG)."
    },

    e_zuweisung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 20 BeamtStG",
      title: "Zuweisung (VA)",
      text: "Die Zuweisung ist – wie die Abordnung – grundsätzlich VORÜBERGEHEND, unterscheidet sich aber dadurch, dass der neue Tätigkeitsbereich bei einer Einrichtung OHNE DIENSTHERRNFÄHIGKEIT liegt (§ 20 BeamtStG):\n\n• öffentlich-rechtliche Einrichtungen ohne Dienstherrneigenschaft oder private Einrichtungen (z. B. privatisierte kommunale GmbH),\n• Voraussetzungen nach § 20 I BeamtStG (öffentliches Interesse bzw. dienstliche Gründe; Zustimmungserfordernisse beachten),\n• die Rechtsstellung des Beamten bleibt unberührt (§ 20 II BeamtStG),\n• zugleich das Instrument für BEAMTE AUF WIDERRUF, die mangels verliehenen Amtes nicht abgeordnet werden können (Ausbildungsstationen!),\n• Rechtsnatur: VERWALTUNGSAKT (Grundverhältnis).\n\nRECHTSSCHUTZ-BESONDERHEIT: Anders als bei Abordnung und Versetzung haben Widerspruch und Anfechtungsklage gegen die Zuweisung AUFSCHIEBENDE WIRKUNG (§ 80 I VwGO) – § 54 IV BeamtStG nennt die Zuweisung NICHT (Skript: \"aber: Zuweisung!\")."
    }
  }
});
