/*
 * Prüfungsschema: Rechtsschutz im Beamtenrecht (§ 54 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "10. Rechtsschutz im Beamtenrecht" (3. EA) 2024/2025
 *  - Gesetze: BeamtStG § 54; LBG §§ 4, 121, 125; VwGO §§ 42, 68 ff., 80, 123;
 *    AGVwGO § 6 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-rechtsschutz",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Personalverteilung und Rechtsschutz",
  title: "Rechtsschutz im Beamtenrecht (§ 54 BeamtStG)",
  description: "Die Besonderheiten des beamtenrechtlichen Rechtsschutzes: aufdrängende Sonderzuweisung (§ 54 I), Vorverfahren vor ALLEN Klagen (§ 54 II), die VA-Frage über Grund- und Betriebsverhältnis, der beamtenrechtliche Widerspruch ohne Frist, die Widerspruchsbehörde (§ 54 III: oberste Dienstbehörde) und der vorläufige Rechtsschutz (§ 80 V vs. § 123 VwGO, § 54 IV BeamtStG).",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "verfahren", label: "Verfahren" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Rechtsbehelf bestimmt",
    neg: "Ergebnis: unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Eilrechtsschutz"
  },

  nodes: {

    start: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 54 I, II BeamtStG",
      title: "Rechtsweg und Vorverfahren: die beamtenrechtlichen Besonderheiten",
      def: "<b>1.1 Verwaltungsrechtsweg (§ 54 I BeamtStG):</b> Für <b>alle Klagen</b> der Beamten aus dem Beamtenverhältnis (und für Klagen des Dienstherrn) ist der Verwaltungsrechtsweg gegeben – <b>spezialgesetzliche (aufdrängende) Sonderzuweisung</b>, geht § 40 I 1 VwGO vor.<br><br><b>1.2 Vorverfahren (§ 54 II 1 BeamtStG):</b> Vor <b>ALLEN</b> Klagen – auch vor der allgemeinen <b>Leistungs- und der Feststellungsklage</b>! – ist ein Vorverfahren nach dem 8. Abschnitt der VwGO durchzuführen. Der Widerspruch ist im Beamtenrecht also <b>immer statthaft</b>:<br>• <b>Anfechtungswiderspruch</b> (Aufhebung eines VA),<br>• <b>Verpflichtungswiderspruch</b> (Erlass eines VA),<br>• <b>„beamtenrechtlicher Widerspruch“</b> (Aufhebung/Erlass einer Maßnahme, die <b>kein VA</b> ist).<br><br>Damit hängt die Weichenstellung an der Frage: <b>Ist die Maßnahme des Dienstherrn ein VA (§ 35 S. 1 VwVfG)?</b> – Problematisch ist das Merkmal <b>Außenwirkung</b> im Sonderrechtsverhältnis.",
      options: [
        { label: "VA-Frage klären", next: "q_va", tone: "pos" },
        { label: "Vorläufiger Rechtsschutz", next: "q_eilrechtsschutz", tone: "warn" }
      ]
    },

    q_va: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 35 S. 1 VwVfG",
      title: "Grundverhältnis oder Betriebsverhältnis?",
      def: "Die <b>Außenwirkung</b> bestimmt sich nach der Unterscheidung:<br><br><b>a) GRUNDVERHÄLTNIS</b> – Maßnahmen, die Begründung, Beendigung oder inhaltliche Veränderung des <b>Rechtsstatus</b> bewirken bzw. die persönliche Rechtsstellung, Individualsphäre oder Grundrechte betreffen → Außenwirkung (+) = <b>VA</b>.<br><i>Beispiele:</i> Ernennung und Rücknahme, Beförderung, <b>Stufenfestsetzung</b>, Urlaubsgewährung, Beihilfefestsetzung, Versagung einer Nebentätigkeit, <b>Abordnung, Versetzung, Zuweisung</b>, Entlassung, Versetzung in den Ruhestand.<br><br><b>b) BETRIEBSVERHÄLTNIS</b> – Maßnahmen, die den Beamten allein als <b>Amtswalter</b> („Rädchen der Staatsorganisation“) betreffen → Außenwirkung (−) = <b>kein VA</b>.<br><i>Beispiele:</i> innerdienstliche Weisungen, Sonderaufträge, Umstrukturierung des Aufgabenbereichs, <b>Umsetzung</b>, dienstliche <b>Beurteilung</b>, Stellenbewertung, Anordnung einer Urlaubsvertretung.",
      options: [
        { label: "VA (Grundverhältnis)", next: "q_form", tone: "pos" },
        { label: "Kein VA (Betriebsverhältnis)", next: "q_beamtenws", tone: "neutral" }
      ]
    },

    q_form: {
      station: "verfahren",
      kind: "frage",
      norm: "§§ 70, 42 II VwGO, § 54 III BeamtStG",
      title: "Anfechtungs-/Verpflichtungswiderspruch: Befugnis, Form, Frist, Behörde",
      def: "<b>1.3 Widerspruchsbefugnis</b> (§ 42 II VwGO analog): mögliche Verletzung eigener (subjektiv-öffentlicher) Rechte – beim Anfechtungswiderspruch aus der <b>Adressaten-</b>/Möglichkeitstheorie, beim Verpflichtungswiderspruch aus der <b>Möglichkeitstheorie</b>.<br><br><b>1.4 Form</b> (§ 70 I 1 VwGO): schriftlich oder zur Niederschrift – <b>keine einfache E-Mail</b> (qualifizierte elektronische Signatur nötig)!<br><br><b>1.5 Frist:</b> <b>Monatsfrist</b> (§ 70 I VwGO); ohne/fehlerhafte Rechtsbehelfsbelehrung <b>Jahresfrist</b> (§ 70 II i. V. m. § 58 II VwGO).<br><br><b>2. Begründetheit:</b> § 113 I 1 bzw. V 1 VwGO analog (Rechtswidrigkeit + Rechtsverletzung; beim Ermessen auch Zweckmäßigkeitskontrolle im WS-Verfahren).<br><br><b>3. Widerspruchsbehörde – Besonderheit § 54 III BeamtStG:</b> Den Widerspruchsbescheid erlässt die <b>OBERSTE DIENSTBEHÖRDE</b> (§ 4 I LBG):<br>• staatliche Verwaltung: i. d. R. das <b>Ministerium</b>,<br>• <b>Kommunalbeamte:</b> oberste Dienstbehörde ist der <b>Dienstvorgesetzte</b> (§ 125 I 2, § 4 II LBG) – also <b>Bürgermeister</b> (§ 47 II 1 GemO) bzw. <b>Landrat</b> (§ 41 II 1 LKO); bei Kommunalbeamten <b>ohne</b> Dienstvorgesetzten (BM/Landrat selbst) entscheidet i. d. R. der <b>allgemeine Vertreter</b> (§ 125 II LBG).<br><i>§ 54 III verdrängt insoweit § 73 I Nr. 3 VwGO/§ 6 AGVwGO – <b>kein</b> Stadt-/Kreisrechtsausschuss!</i>",
      options: [
        { label: "Zulässig + begründet?", next: "e_va_ws", tone: "pos" }
      ]
    },

    q_beamtenws: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 54 II BeamtStG, § 42 II VwGO analog",
      title: "Beamtenrechtlicher Widerspruch: Befugnis trotz Betriebsverhältnis?",
      def: "Gegen Maßnahmen <b>ohne VA-Qualität</b> ist der „beamtenrechtliche Widerspruch“ statthaft (§ 54 II BeamtStG erstreckt das Vorverfahren auf alle Klagen – hier vor der allgemeinen <b>Leistungsklage</b>).<br><br><b>Widerspruchsbefugnis problematisch:</b> Im Betriebsverhältnis ist der Beamte grundsätzlich <b>nicht in eigenen Rechten</b> verletzt. <b>Prüfe</b> (Möglichkeitstheorie): Ist er durch die Maßnahme <b>möglicherweise doch</b> in eigenen (subjektiv-öffentlichen) Rechten verletzt?<br><i>Beispiele (+):</i> dauerhafte Umsetzung auf einen <b>unterwertigen</b> Dienstposten (Recht auf amtsangemessene Beschäftigung!) oder in ein <b>gesundheitsgefährdendes</b> Büro (Fürsorgepflicht, Art. 2 II GG).<br><br><b>Form:</b> § 70 I 1 VwGO (schriftlich/zur Niederschrift).<br><b>Frist: KEINE</b> – § 70 VwGO gilt nicht (der Verweis in § 54 II BeamtStG erstreckt sich nur auf die <b>Erforderlichkeit</b> des Vorverfahrens); Grenze ist die <b>Verwirkung</b>.<br><b>Begründetheit:</b> § 113 I 1 oder V 1 VwGO analog.",
      options: [
        { label: "Eigene Rechte möglich", next: "e_beamtenws", tone: "pos" },
        { label: "Reines Betriebsverhältnis", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_eilrechtsschutz: {
      station: "verfahren",
      kind: "frage",
      norm: "§§ 80, 123 VwGO, § 54 IV BeamtStG",
      title: "Vorläufiger Rechtsschutz: § 80 V oder § 123 VwGO?",
      def: "<b>Maßnahme mit VA-Qualität (Anfechtung):</b><br>• Grundsatz: Widerspruch/Anfechtungsklage haben <b>aufschiebende Wirkung</b> (§ 80 I VwGO),<br>• <b>AUSNAHME (§ 80 II Nr. 3 VwGO i. V. m. § 54 IV BeamtStG, § 121 LBG):</b> gegen <b>ABORDNUNG und VERSETZUNG</b> keine aufschiebende Wirkung – <b>aber: die ZUWEISUNG ist nicht genannt</b> (dort bleibt es bei § 80 I)!<br>• Eilrechtsschutz dann über <b>§ 80 V VwGO</b>: vor Vollzug Antrag auf <b>Anordnung</b> der aufschiebenden Wirkung (S. 1), nach Vollzug zusätzlich <b>Aufhebung der Vollziehung</b> (S. 3).<br><br><b>Maßnahme ohne VA-Qualität</b> (z. B. Umsetzung) oder <b>Verpflichtungsbegehren</b>:<br>• <b>§ 123 VwGO</b> – einstweilige Anordnung: <b>Sicherungsanordnung</b> (§ 123 I 1: Status quo sichern, Vollzug steht bevor) oder <b>Regelungsanordnung</b> (§ 123 I 2: z. B. einstweilige Rückgängigmachung einer bereits vollzogenen Umsetzung, vgl. VG Würzburg 1 E 13.481),<br>• § 123 V VwGO: Abgrenzung – § 123 nur, wenn in der Hauptsache <b>keine</b> Anfechtungsklage statthaft wäre.",
      options: [
        { label: "VA: § 80 V VwGO", next: "e_80v", tone: "pos" },
        { label: "Kein VA: § 123 VwGO", next: "e_123", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_va_ws: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 54 BeamtStG, §§ 68 ff. VwGO",
      title: "Anfechtungs-/Verpflichtungswiderspruch und Klage",
      text: "Prüfungsraster (wie im AVR, mit den beamtenrechtlichen Besonderheiten):\n\nZULÄSSIGKEIT: 1. Verwaltungsrechtsweg § 54 I BeamtStG (aufdrängende Sonderzuweisung) – 2. Statthaftigkeit (Anfechtungs-/Verpflichtungswiderspruch, §§ 68 I/II, 42 I VwGO) – 3. Widerspruchsbefugnis (§ 42 II analog) – 4. Form (§ 70 I 1) – 5. Frist (Monat, § 70 I; Jahresfrist § 58 II) – 6. allgemeines Rechtsschutzbedürfnis.\n\nBEGRÜNDETHEIT: § 113 I 1 bzw. V 1 VwGO analog.\n\nWIDERSPRUCHSBEHÖRDE (§ 54 III BeamtStG): die OBERSTE DIENSTBEHÖRDE – staatlich i. d. R. das Ministerium; kommunal der Dienstvorgesetzte (Bürgermeister/Landrat, § 125 I 2 LBG), ohne Dienstvorgesetzten der allgemeine Vertreter (§ 125 II LBG). KEIN Rechtsausschuss!\n\nDanach: Anfechtungs-/Verpflichtungsklage zum VG.\n\nMerke fürs Eilverfahren: aufschiebende Wirkung besteht (§ 80 I VwGO) – AUSSER bei Abordnung und Versetzung (§ 54 IV BeamtStG)."
    },

    e_beamtenws: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 54 II BeamtStG",
      title: "Beamtenrechtlicher Widerspruch + Leistungsklage",
      text: "Gegen die Nicht-VA-Maßnahme (z. B. Umsetzung, Beurteilung) ist der beamtenrechtliche Widerspruch statthaft – als Vorverfahren vor der ALLGEMEINEN LEISTUNGSKLAGE (§ 54 II 1 BeamtStG).\n\nBesonderheiten:\n• KEINE Widerspruchsfrist (§ 70 VwGO gilt nicht) – Grenze: Verwirkung,\n• Widerspruchsbefugnis nur bei möglicher Verletzung EIGENER Rechte (amtsangemessene Beschäftigung, Fürsorge/Gesundheit) – zu begründen!,\n• KEINE aufschiebende Wirkung (§ 80 I VwGO setzt einen VA voraus) – der Beamte muss der Anordnung einstweilen Folge leisten (Folgepflicht § 35 BeamtStG; ggf. remonstrieren),\n• Eilrechtsschutz: § 123 VwGO (Sicherungs-/Regelungsanordnung),\n• Widerspruchsbehörde: § 54 III BeamtStG (oberste Dienstbehörde/Dienstvorgesetzter).\n\nSkript-Fall (Umsetzung des Hauptamtsleiters): Widerspruch = beamtenrechtlicher Widerspruch ohne aufschiebende Wirkung → einstweilen Folge leisten; Eilantrag nach § 123 I VwGO (nach Vollzug: Regelungsanordnung) – Erfolg nur bei Anordnungsanspruch (Ermessensmissbrauch?) und -grund."
    },

    e_80v: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 80 V VwGO, § 54 IV BeamtStG",
      title: "Eilrechtsschutz nach § 80 V VwGO",
      text: "Bei VAs richtet sich der vorläufige Rechtsschutz nach § 80 V VwGO:\n\n• VOR Vollzug: Antrag auf ANORDNUNG der aufschiebenden Wirkung (§ 80 V 1 VwGO) – nötig nur, wo die aufschiebende Wirkung entfällt: bei ABORDNUNG und VERSETZUNG (§ 54 IV BeamtStG, § 121 I LBG; § 80 II Nr. 3 VwGO),\n• NACH Vollzug: zusätzlich Antrag auf AUFHEBUNG DER VOLLZIEHUNG (§ 80 V 3 VwGO),\n• bei allen anderen beamtenrechtlichen VAs (Entlassung, Rücknahme, Ruhestandsversetzung, NT-Versagung, ZUWEISUNG) bleibt es beim Grundsatz des § 80 I VwGO – Widerspruch und Klage schieben auf; ein § 80-V-Antrag ist nur nötig, wenn die Behörde die sofortige Vollziehung anordnet (§ 80 II Nr. 4 VwGO).\n\nZuständig: das Gericht der Hauptsache (§ 80 V 1 VwGO) – Verwaltungsrechtsweg über § 54 I BeamtStG.\n\nMaßstab: Interessenabwägung anhand der Erfolgsaussichten in der Hauptsache."
    },

    e_123: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 123 VwGO",
      title: "Eilrechtsschutz nach § 123 VwGO",
      text: "Bei Maßnahmen ohne VA-Qualität (und bei Verpflichtungsbegehren) läuft der Eilrechtsschutz über die einstweilige Anordnung (§ 123 I VwGO; Statthaftigkeit: § 123 V – in der Hauptsache keine Anfechtungsklage, sondern Leistungs-/Verpflichtungs-/Feststellungsklage):\n\n• SICHERUNGSANORDNUNG (§ 123 I 1): Sicherung einer bestehenden Rechtsposition – z. B. bevorstehende Umsetzung stoppen, Freihaltung der Beförderungsstelle im KONKURRENTENSTREIT,\n• REGELUNGSANORDNUNG (§ 123 I 2): Erweiterung/Regelung – z. B. einstweilige Rückgängigmachung einer bereits vollzogenen Umsetzung (VG Würzburg, B. v. 18.07.2013 – 1 E 13.481).\n\nVoraussetzungen: ANORDNUNGSANSPRUCH (materielles Recht – bei der Umsetzung nur Ermessensmissbrauch) und ANORDNUNGSGRUND (Eilbedürftigkeit), beide glaubhaft gemacht (§ 123 III VwGO, § 920 II ZPO).\n\nSkript-Fall 2: Der Eilantrag des umgesetzten Hauptamtsleiters ist als § 123-Antrag statthaft (Hauptsache = allgemeine Leistungsklage); ob er Erfolg hat, hängt vom glaubhaft gemachten Ermessensmissbrauch ab."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO analog",
      title: "Keine Widerspruchsbefugnis: unzulässig",
      text: "Betrifft die Maßnahme den Beamten ausschließlich als Amtswalter im Betriebsverhältnis, ohne dass eigene Rechte auch nur möglicherweise verletzt sind, fehlt die Widerspruchs-/Klagebefugnis – der Rechtsbehelf ist unzulässig.\n\nTypische Fälle:\n• innerdienstliche Weisung zur Sachbearbeitung (Sonderauftrag, Reihenfolge der Erledigung),\n• Umstrukturierung des Aufgabenbereichs im Rahmen der Organisationshoheit,\n• Anordnung einer Urlaubsvertretung,\n• Stellenbewertung als organisatorische Maßnahme (kein subjektives Recht auf bestimmte Bewertung).\n\nDem Beamten bleiben unförmliche Behelfe: GEGENVORSTELLUNG beim Anordnenden, DIENSTAUFSICHTSBESCHWERDE beim Dienstvorgesetzten (formlos, fristlos - \"fruchtlos\") und ggf. die REMONSTRATION bei Rechtmäßigkeitsbedenken (§ 36 BeamtStG - eigenes Schema).\n\nGrenzfall: Wird das Betriebsverhältnis dauerhaft zur Statusfrage (unterwertige Beschäftigung), kippt die Einordnung → Widerspruchsbefugnis (+)."
    }
  }
});
