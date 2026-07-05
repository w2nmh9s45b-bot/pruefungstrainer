/*
 * Prüfungsschema: Zulagen und Vergütungen (§§ 45-50, 53 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 158-172
 *    (Allgemeine Zulage, Amts-, Stellen-, Erschwerniszulagen, Vergütungen)
 *  - Gesetze: LBesG §§ 45-50, 53-55; Nr. 12 der Vorbemerkungen zu den
 *    LBesO A und B (Anlage 1); Anlage 8 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-zulagen",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Zulagen und Vergütungen",
  title: "Zulagen und Vergütungen (§§ 45–50, 53 LBesG)",
  description: "Die Zulagen-Systematik: Allgemeine Zulage (Nr. 12 der Vorbemerkungen – der Klausur-Klassiker!), Amtszulage (§ 46, unwiderruflich), Stellenzulage (§ 47, widerruflich), Erschwerniszulagen (§ 50) und die Vergütungen (Mehrarbeit § 53).",
  start: "start",
  stations: [
    { id: "einordnung", label: "Einordnung" },
    { id: "zulagenart", label: "Zulagenart" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zulage bestimmt",
    neg: "Ergebnis: keine Zulage",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "einordnung",
      kind: "frage",
      norm: "§ 3 I Nr. 4 LBesG",
      title: "Um welche Art von Leistung geht es?",
      def: "§ 3 I Nr. 4 LBesG fasst drei Kategorien zusammen:<br><br>• <b>Zuschläge</b> (1. Alt.): Familienzuschlag § 41, Sonderzuschlag § 41a, Altersteilzeit § 42, Altersgrenze § 43, FALTER § 43a, begrenzte Dienstfähigkeit § 44, Personalgewinnung § 45 (eigene Schemata für §§ 41–44),<br>• <b>Zulagen</b> (2. Alt.): Allgemeine Zulage, Amtszulagen § 46, Stellenzulagen § 47, Erschwerniszulagen § 50, Ausgleichszulagen §§ 51/52 (eigenes Schema),<br>• <b>Vergütungen</b> (3. Alt.): Mehrarbeitsvergütung § 53, Sitzungsvergütung § 54, Vollstreckungsvergütung § 55.",
      options: [
        { label: "Allgemeine Zulage", next: "e_allgemein", tone: "pos" },
        { label: "Amts- oder Stellenzulage", next: "q_amt_stelle", tone: "neutral" },
        { label: "Erschwerniszulage", next: "e_erschwernis", tone: "neutral" },
        { label: "Vergütungen (Mehrarbeit …)", next: "q_verguetung", tone: "neutral" }
      ]
    },

    q_amt_stelle: {
      station: "zulagenart",
      kind: "frage",
      norm: "§§ 46, 47 LBesG",
      title: "Amtszulage oder Stellenzulage? – die klassische Abgrenzung",
      def: "Beide honorieren <b>herausgehobene Funktionen</b> und dürfen 75 % des Unterschiedsbetrags zum Endgrundgehalt der nächsthöheren Besoldungsgruppe nicht übersteigen – aber:<br><br><b>AMTSZULAGE (§ 46):</b> Das <b>Amt selbst</b> hebt sich seiner Wertigkeit nach von den Ämtern derselben Besoldungsgruppe ab, ohne die nächsthöhere zu erreichen (Zwischenbesoldung, z. B. „A 9 + Z“).<br>• <b>unwiderruflich</b>, gilt als <b>Bestandteil des Grundgehalts</b> (§ 46 II 1) – ruhegehaltfähig,<br>• Festsetzung durch <b>Ernennungsurkunde</b> (§ 8 I Nr. 3 BeamtStG – Verleihung eines anderen Amtes mit anderem Endgrundgehalt),<br>• dem Grunde nach in den <b>Fußnoten</b> der Besoldungsordnungen (Anlagen 1, 3, 4), Höhe in <b>Anlage 8</b>. Beispiel: Fußnote 1 zum Inspektor – Amtszulage für Beamte des zweiten Einstiegsamtes (Alternative zur Beförderung, vgl. Übung 15 Fall 3).<br><br><b>STELLENZULAGE (§ 47):</b> honoriert eine herausgehobene <b>Funktion/Verwendung</b>, die bei der Ämterbewertung nicht berücksichtigt ist (bereichsspezifische Besonderheit, besondere Dienststelle).<br>• nur für die <b>Dauer der Wahrnehmung</b> (§ 47 II 1), <b>widerruflich</b> (§ 47 III 1),<br>• geregelt in den <b>Vorbemerkungen</b> zu den Besoldungsordnungen und §§ 48, 49; Beispiele: Verfassungsschutz (Nr. 5), Vollzugspolizei (Nr. 6), <b>Feuerwehr (Nr. 7)</b>, JVA (Nr. 8), Steuerprüfung-Außendienst (Nr. 9), Vollstreckungsdienst Finanzverwaltung (Nr. 11), Lehrkräfte (§§ 48, 49).",
      options: [
        { label: "Amt herausgehoben → Amtszulage", next: "e_amtszulage", tone: "pos" },
        { label: "Funktion/Verwendung → Stellenzulage", next: "e_stellenzulage", tone: "pos" }
      ]
    },

    q_verguetung: {
      station: "zulagenart",
      kind: "frage",
      norm: "§§ 53–55 LBesG",
      title: "Welche Vergütung ist einschlägig?",
      def: "<b>Vergütungen</b> (§ 3 I Nr. 4 3. Alt. LBesG) gelten Leistungen ab, die nach Umfang messbar sind:<br><br>• <b>Mehrarbeitsvergütung (§ 53):</b> Ermächtigung für die <b>LMVergVO</b> (v. 03.07.2012); nur wenn die Mehrarbeit (§ 73 II LBG) <b>nicht durch Dienstbefreiung ausgeglichen</b> wird; nur in Besoldungsgruppen mit aufsteigenden Gehältern; Höhe nach tatsächlicher Mehrarbeit, gestaffelt nach Besoldungsgruppen; <b>max. 480 Mehrarbeitsstunden im Kalenderjahr</b>.<br><br>• <b>Sitzungsvergütung (§ 54):</b> für Beamte der Gemeinden/GV unter 40.000 EW (BesO A), die als <b>Protokollführer</b> regelmäßig außerhalb der Arbeitszeit an Sitzungen kommunaler Vertretungskörperschaften/Ausschüsse teilnehmen → Kommunal-Sitzungsvergütungsverordnung; max. 102,26 €/Monat; nicht neben Aufwandsentschädigung; entfällt bei möglichem Freizeitausgleich.<br><br>• <b>Vollstreckungsvergütung (§ 55):</b> für Gerichtsvollzieher und andere Vollstreckungsbeamte (RVO; Maßstab: vereinnahmte Beträge).",
      options: [
        { label: "Mehrarbeitsvergütung", next: "e_mehrarbeit", tone: "pos" },
        { label: "Sitzungs-/Vollstreckungsvergütung", next: "e_sonstige_verguetung", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_allgemein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nr. 12 der Vorbem. zu den LBesO A und B",
      title: "Allgemeine Zulage (A 6 bis A 13)",
      text: "Beamte der Besoldungsgruppen A 6 (Einstiegsamt) bis A 13 erhalten eine das Grundgehalt ergänzende Allgemeine Zulage (Nr. 12 I 1 der Vorbemerkungen zu den Landesbesoldungsordnungen A und B, Anlage 1 zum LBesG). Höhe: Anlage 8 – VERSCHIEDENE Beträge je Besoldungsgruppe (richtigen \"Kasten\" wählen – häufige Fehlerquelle!). Sie nimmt an den Besoldungsanpassungen teil (Nr. 12 II).\n\n• Keine besondere Tätigkeit nötig – deshalb \"allgemeine\" Zulage (steht in Kapitel III \"Sonstige Zulagen\" der Vorbemerkungen, nicht bei den Stellenzulagen; in der DVP etwas versteckt – markieren!).\n• KLAUSUR-KLASSIKER: Bei der Frage nach der Gesamtbesoldung wird sie gern vergessen! Merke: Gesamte Dienstbezüge = Grundgehalt + Familienzuschlag + Allgemeine Zulage.\n• Bei Beförderung nach A 14 ENTFÄLLT die Allgemeine Zulage (Übung 15 Fall 1: Der Nettogewinn der Beförderung A 13 → A 14 schrumpft um die wegfallende Zulage; ein Ausgleich über § 51 kommt nur bei Verringerung der SUMME der Dienstbezüge in Betracht – bei einer Beförderung steigt die Summe).\n• Teilzeit: zeitratierliche Kürzung nach § 9 I LBesG."
    },

    e_amtszulage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 46 LBesG, Anlage 8",
      title: "Amtszulage – unwiderruflicher Grundgehaltsbestandteil",
      text: "Die Amtszulage (§ 46 LBesG) ist eine \"Zwischenbesoldung\" für Ämter, die sich von den Ämtern ihrer Besoldungsgruppe abheben, ohne die nächsthöhere zu erreichen:\n\n• dem Grunde nach in den FUSSNOTEN der Besoldungsordnungen geregelt (§ 46 II 2), Höhe in Anlage 8,\n• UNWIDERRUFLICH und Bestandteil des Grundgehalts (§ 46 II 1) – damit ruhegehaltfähig,\n• Obergrenze: 75 % des Unterschieds zum Endgrundgehalt der nächsthöheren Gruppe (§ 46 I 2),\n• Verleihung durch Ernennungsurkunde (§ 8 I Nr. 3 BeamtStG – Amt mit anderem Endgrundgehalt).\n\nPraxisbeispiel (Übung 15 Fall 3): Stadtinspektor in der Endstufe von A 9 (2. EA) kann statt der Beförderung zum Stadtoberinspektor (A 10) eine Amtszulage nach Fußnote 1 erhalten. Finanzieller Vergleich: Beförderung A 9 Endstufe → A 10 (Stufe nach § 29 IV) vs. A 9 Endstufe + Amtszulage (Anlage 8) – nachrechnen; wegen § 29 IV 1 (Stufenmitnahme) ist die Beförderung meist, aber nicht immer günstiger.\n\nFällt eine Amtszulage später weg, gehört sie zur Vergleichssumme der Ausgleichszulage (§ 51 I LBesG)."
    },

    e_stellenzulage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 47 LBesG",
      title: "Stellenzulage – widerruflich, funktionsgebunden",
      text: "Die Stellenzulage (§ 47 LBesG) honoriert eine herausgehobene FUNKTION, die bei der Ämterbewertung nicht berücksichtigt ist:\n\n• nur für die Dauer der Wahrnehmung der Funktion (§ 47 II 1) – bei Funktionswechsel grundsätzlich Wegfall (Übergangsschutz: Weitergewährung bei vorübergehender anderer Funktion im besonderen öffentlichen Interesse, § 47 II 2),\n• WIDERRUFLICH (§ 47 III 1), NICHT Bestandteil des Grundgehalts,\n• geregelt im Teil II der Vorbemerkungen zu den Besoldungsordnungen sowie §§ 48, 49 LBesG; Höhe: Monatsbeträge (Anlage 8),\n• Beispiele: fliegendes Personal (Nr. 4), Verfassungsschutz (Nr. 5), Vollzugspolizei (Nr. 6), Feuerwehr (Nr. 7), JVA/Psychiatrie (Nr. 8), Steuerprüfung (Nr. 9), oberste Bundes-/Landesbehörden (Nr. 10), Vollstreckungsdienst (Nr. 11), Lehrkräfte (§§ 48, 49).\n\nRückforderungs-Klassiker: Läuft die Stellenzulage nach dem Funktionswechsel einfach weiter (Ex-Feuerwehrmann in der Verwaltung), ist die Zahlung rechtsgrundlos und der Mangel offensichtlich → verschärfte Haftung (§ 16 II 2 LBesG)!\n\nBeim Wegfall aus dienstlichen Gründen: Ausgleichszulage nur nach § 51 III LBesG (5 von 7 Jahren bezogen, Abschmelzung 20 %/Jahr – eigenes Schema)."
    },

    e_erschwernis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 50 LBesG, LEZulVO",
      title: "Erschwerniszulagen (LEZulVO)",
      text: "§ 50 LBesG ermächtigt zur Verordnung über die Gewährung von Erschwerniszulagen (LEZulVO) – sie gelten besondere, bei der Ämterbewertung nicht berücksichtigte ERSCHWERNISSE ab:\n\n• Zulage für DIENST ZU UNGÜNSTIGEN ZEITEN (Sonn-/Feiertage, Nacht, Samstagnachmittag – vgl. Übung 15 Fall 2: Anwärter mit Samstagsdienst im Gesundheitsamt → Zulage nach der LEZulVO, je tatsächlich geleisteter Stunde),\n• Zulagen für WECHSELSCHICHT- UND SCHICHTDIENST (z. B. § 13 LEZulVO – hälftige Wechselschichtzulage für Leitstellen-Schichtleiter aus der Rückforderungs-Übung),\n• die Zulagen sind widerruflich; ein besonderer Aufwand kann mit abgegolten werden.\n\nBesonderheit: Erschwerniszulagen gehören zu den wenigen Zulagen, die auch ANWÄRTER erhalten können, soweit die LEZulVO das vorsieht (§ 57 II 3 LBesG – Schema \"Anwärterbezüge\")."
    },

    e_mehrarbeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 53 LBesG, LMVergVO",
      title: "Mehrarbeitsvergütung",
      text: "Rechtsgrundlage: LMVergVO (v. 03.07.2012, GVBl. S. 221), gestützt auf § 53 LBesG.\n\nVoraussetzungen und Grenzen:\n• angeordnete/genehmigte Mehrarbeit i. S. d. § 73 II LBG, die NICHT durch Dienstbefreiung ausgeglichen wird (Freizeitausgleich hat Vorrang),\n• nur für Beamte in Besoldungsgruppen mit aufsteigenden Gehältern (BesO A) und in Bereichen mit messbarer Mehrarbeit,\n• Höhe nach der tatsächlich geleisteten Mehrarbeit, nach Besoldungsgruppen gestaffelt (Stundensätze der LMVergVO),\n• Obergrenze: 480 Mehrarbeitsstunden im Kalenderjahr (§ 53 S. 4 LBesG).\n\nAbgrenzung: Dienst zu ungünstigen Zeiten OHNE Überschreitung der Wochenarbeitszeit ist keine Mehrarbeit – dann ggf. Erschwerniszulage nach der LEZulVO (Übung 15 Fall 2)."
    },

    e_sonstige_verguetung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 54, 55 LBesG",
      title: "Sitzungs- und Vollstreckungsvergütung",
      text: "SITZUNGSVERGÜTUNG (§ 54 LBesG, Kommunal-Sitzungsvergütungsverordnung):\n• für Beamte der Gemeinden und Gemeindeverbände mit WENIGER ALS 40.000 Einwohnern (Dienstbezüge nach BesO A),\n• als PROTOKOLLFÜHRER bei regelmäßiger Teilnahme an Sitzungen der Vertretungskörperschaften/Ausschüsse außerhalb der regelmäßigen Arbeitszeit,\n• max. 102,26 €/Monat; nicht neben einer Aufwandsentschädigung; entfällt, wenn Freizeitausgleich möglich ist.\n(Praxisrelevant in Lahnstein: Protokollführung im Stadtrat/Ausschüssen!)\n\nVOLLSTRECKUNGSVERGÜTUNG (§ 55 LBesG): für Gerichtsvollzieher und andere im Vollstreckungsdienst tätige Beamte per RVO; Maßstab sind insbesondere die vereinnahmten Gebühren/Beträge; Höchstsätze je Auftrag und Kalenderjahr möglich."
    }
  }
});
