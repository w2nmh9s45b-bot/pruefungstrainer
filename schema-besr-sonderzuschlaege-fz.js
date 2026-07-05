/*
 * Prüfungsschema: Sonderzuschlag und Aufstockungsbeträge (§ 41a LBesG, Anlage 7.1)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 148-154
 *    (mietenstufenabhängige Aufstockungsbeträge, Sonderzuschlag § 41a)
 *  - Gesetze: LBesG § 41a, Anlage 7; SGB IV § 8 I Nr. 1; WoGG § 12
 *    (Volltexte geprüft; Hinweis: das Skript zitiert die Geringfügigkeits-
 *     grenze fälschlich als "SGB VI" – richtig ist § 8 I Nr. 1 SGB IV)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-sonderzuschlaege-fz",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Familienzuschlag",
  title: "Sonderzuschlag und Aufstockungsbeträge (§ 41a LBesG)",
  description: "Die 2022 zur Sicherung der amtsangemessenen Alimentation eingeführten Instrumente: mietenstufenabhängiger Aufstockungsbetrag ab dem dritten Kind (Anlage 7.1) und Sonderzuschlag zum Familienzuschlag für Alleinverdiener-Familien in A 5 bis A 9 (§ 41a LBesG).",
  start: "start",
  stations: [
    { id: "hintergrund", label: "Hintergrund" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zuschlag steht zu",
    neg: "Ergebnis: kein Zuschlag",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "hintergrund",
      kind: "frage",
      norm: "Art. 33 V GG (Abstandsgebot)",
      title: "Hintergrund: das Abstandsgebot – und welches Instrument ist gefragt?",
      def: "Beide Instrumente wurden mit dem <b>LBVAnpG 2022</b> zum 01.01.2022 eingeführt, um die <b>amtsangemessene Alimentation</b> zu sichern:<br><br><b>Verfassungsrechtliches Abstandsgebot</b> (BVerfG): Die <b>Nettoalimentation</b> (einschließlich familienbezogener Bestandteile und Kindergeld) darf das Grundsicherungsniveau um <b>nicht weniger als 15 %</b> überschreiten. In die Berechnung fließen auch die <b>Kosten der Unterkunft</b> ein – deshalb darf die Besoldung an regionale Mietniveaus anknüpfen.<br><br>Zwei getrennte Instrumente:<br>• <b>Mietenstufenabhängiger Aufstockungsbetrag</b> zum kbZ ab dem <b>dritten Kind</b> – Rechtsgrundlage ausschließlich <b>Ziffer 4 der Familienzuschlagstabelle (Anlage 7.1 Nr. 1)</b>,<br>• <b>Sonderzuschlag zum Familienzuschlag</b> (§ 41a LBesG, Anlage 7.2) für Familien mit <b>Alleinverdiener</b> in den unteren Besoldungsgruppen (Modell: vierköpfige Familie mit einem Einkommen + Minijob).",
      options: [
        { label: "Aufstockungsbetrag (ab 3. Kind)", next: "q_aufstockung", tone: "pos" },
        { label: "Sonderzuschlag § 41a", next: "q_41a_gruppe", tone: "neutral" }
      ]
    },

    q_aufstockung: {
      station: "pruefung",
      kind: "frage",
      norm: "Anlage 7.1 Nr. 1 Ziff. 4 zum LBesG",
      title: "Aufstockungsbetrag: kbZ für mind. drei Kinder UND Mietenstufe V–VII?",
      def: "<b>Voraussetzungen:</b><br><br><b>(1)</b> Der Beamte ist <b>Anspruchsberechtigter auf den kbZ für mindestens drei Kinder</b> (Zählkinderregelung des § 41 IV 4 LBesG gilt auch hier; die grundsätzliche Berechtigung genügt an dieser Stelle).<br><br><b>(2)</b> Die <b>Wohngemeinde</b> (Hauptwohnung i. S. d. §§ 21, 22 BMG; Nachweis: Meldebestätigung § 24 II BMG) ist der <b>Mietenstufe V bis VII</b> zugeordnet (§ 12 I WoGG i. V. m. Anlage 1 WoGG/WoGV).<br><br><b>Praxis RLP:</b> Derzeit ist <b>nur Mainz</b> (Stufe V+) betroffen – alle übrigen rheinland-pfälzischen Wohnorte liegen in den Stufen I–IV! In Frage kommen daneben Pendler mit Hauptwohnsitz in teuren Gemeinden <b>anderer Bundesländer</b> (z. B. Wiesbaden/Frankfurt). Wohnsitz im <b>Ausland</b>: kein Aufstockungsbetrag.<br><br>Bei Umzug: alte Mietenstufe bis zum Ende des Auszugsmonats, neue ab dem Ersten des Monats nach dem Einzugsmonat. Die Zuordnung der Gemeinden wird regelmäßig überprüft – der Zuschlag kann sich also ohne Umzug ändern.",
      options: [
        { label: "Beide Voraussetzungen (+)", next: "e_aufstockung", tone: "pos" },
        { label: "Mietenstufe I–IV (z. B. Mayen)", next: "e_kein_aufstockung", tone: "neg" },
        { label: "Weniger als drei Kinder", next: "e_kein_aufstockung", tone: "neg" }
      ]
    },

    q_41a_gruppe: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 41a II LBesG, Anlage 7.1 Nr. 2",
      title: "Sonderzuschlag (1/2): Besoldungsgruppe und Stufe im begünstigten Bereich?",
      def: "Der Sonderzuschlag ist auf die <b>unteren Besoldungsgruppen</b> beschränkt (nach Maßgabe der Anlage 7; Übersicht aus dem Skript):<br><br>• <b>A 5:</b> Stufen 2–8<br>• <b>A 6:</b> Stufen 2–7<br>• <b>A 7:</b> Stufen 2–5<br>• <b>A 8:</b> Stufen 2–4<br>• <b>A 9:</b> Stufe 2<br><br>Liegt der Beamte mit Besoldungsgruppe UND Stufe in diesem Raster, weiter zu den familiären Voraussetzungen.",
      options: [
        { label: "Ja – im Raster", next: "q_41a_familie", tone: "pos" },
        { label: "Nein – höhere Gruppe/Stufe", next: "e_kein_41a", tone: "neg" }
      ]
    },

    q_41a_familie: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 41a II LBesG",
      title: "Sonderzuschlag (2/2): Ehe + zwei Kinder + kein nennenswertes Partnereinkommen?",
      def: "Kumulativ erforderlich (§ 41a II LBesG):<br><br><b>(2)</b> Anspruch auf den <b>paZ nach § 41 I 1 Nr. 1 i. V. m. § 41 II 1 Nr. 1 LBesG</b> (verheiratet/verpartnert) – <b>Alleinerziehende (paZ über § 41 III) erhalten den Sonderzuschlag NICHT</b>,<br><br><b>(3)</b> Anspruch auf den <b>kbZ für mindestens ZWEI Kinder</b>,<br><br><b>(4)</b> Der Ehe-/Lebenspartner verfügt über <b>kein monatliches Arbeitsentgelt</b> mindestens in Höhe der <b>Geringfügigkeitsgrenze</b> (§ 8 I Nr. 1 <b>SGB IV</b>; 2025: 556 €) <b>oder</b> über kein aufaddiertes Jahresarbeitsentgelt in Höhe des <b>Zwölffachen</b> dieser Grenze.<br><br>• Arbeitsentgelt = Entgelt aus Arbeitsvertrag/aktivem Dienstverhältnis; <b>selbstständige Einkünfte, Renten, Versorgungsbezüge zählen NICHT</b>; Lohnersatzleistungen i. S. d. § 32b I 1 Nr. 1 EStG (Eltern-, Krankengeld …) stehen dem Entgelt gleich.<br>• Jahresbetrachtung: Bleibt die Jahressumme unter der Grenze → Zuschlag fürs <b>ganze Jahr</b>; liegt sie darüber → <b>Monatsbetrachtung</b> (Zuschlag nur in Monaten unterhalb der Grenze).<br>• Nachweise (Steuererklärung, Abrechnungen) erforderlich; ggf. nachträgliche Neufestsetzung.",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "e_41a", tone: "pos" },
        { label: "Alleinerziehend", next: "e_kein_41a", tone: "neg" },
        { label: "Partner verdient mehr", next: "e_kein_41a", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_aufstockung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Anlage 7.1 Nr. 1 Ziff. 4 zum LBesG",
      title: "Mietenstufenabhängiger Aufstockungsbetrag",
      text: "Der kbZ wird AB DEM DRITTEN KIND für jedes weitere berücksichtigungsfähige Kind monatlich aufgestockt; die Höhe je Kind und Mietenstufe (V-VII) ergibt sich aus Anlage 7.1.\n\nWichtig: Maßgeblich ist der TATSÄCHLICHE Bezug des kbZ für das jeweilige Kind – im Konkurrenzfall erhält den Aufstockungsbetrag also derjenige, der auch den kbZ bekommt, und nur wenn er mit dem Kind an einem Wohnort ab Mietenstufe V wohnt.\n\nÜbung 14: \n• Fall 1 (A, Mainz, drei Kinder, erhält für alle den kbZ): Aufstockungsbetrag für das dritte Kind (+).\n• Fall 2 (B und C, beide Beamte in Mainz, vier Kinder, Kindergeld/kbZ aufgeteilt: B für Kind 1+3, C für Kind 2+4): Die Zählkinderregelung (§ 41 IV 4) gilt – für die Frage \"mindestens drei Kinder\" zählen alle vier bei beiden; den Aufstockungsbetrag für Kind 3 erhält B, für Kind 4 C (tatsächlicher kbZ-Bezug)."
    },

    e_kein_aufstockung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Anlage 7.1 Nr. 1 Ziff. 4 zum LBesG",
      title: "Kein Aufstockungsbetrag",
      text: "Eine der beiden Voraussetzungen fehlt:\n\n• Weniger als drei berücksichtigungsfähige Kinder mit kbZ-Anspruch, oder\n• die Wohngemeinde liegt in Mietenstufe I-IV – das trifft derzeit auf ALLE rheinland-pfälzischen Gemeinden außer Mainz zu.\n\nÜbung 14 Fall 3-Variante: Stadtinspektor D wohnt in Mayen → Mietenstufe unter V → kein Aufstockungsbetrag, obwohl drei Kinder vorhanden sind. (Aber: § 41a-Sonderzuschlag prüfen – D ist in A 9 Stufe 2, verheiratet, Ehefrau ohne Erwerbseinkommen, kbZ für drei [≥ zwei] Kinder → Sonderzuschlag +!)\n\nDie Mietenstufen-Zuordnung wird regelmäßig angepasst (§ 12 I WoGG, § 1 III WoGV) – bei Klausuren auf die Angaben im Sachverhalt achten."
    },

    e_41a: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 41a LBesG, Anlage 7.2",
      title: "Sonderzuschlag zum Familienzuschlag",
      text: "Der Sonderzuschlag wird VON AMTS WEGEN gewährt (kein Antrag, KEIN Ermessen) – fester Monatsbetrag nach Anlage 7.2, NICHT nach der Anzahl der Kinder gestaffelt.\n\nABER (§ 41a I 2 LBesG): Der Betrag VERMINDERT sich um\n• die zustehende Allgemeine Zulage,\n• Amts- und Stellenzulagen,\n• Ausgleichs- und Überleitungszulagen (soweit wegen Wegfalls/Verminderung solcher Bezüge gewährt).\n\nDer Sonderzuschlag ist also ein Spitzbetrag, der nur die Lücke zur amtsangemessenen Alimentation schließt.\n\nÜbung 14 Fall 3: Stadtinspektor D (A 9 Stufe 2, Mayen), verheiratet, Ehefrau nicht berufstätig, kbZ für drei Kinder → alle vier Voraussetzungen (+) → Sonderzuschlag nach Anlage 7.2, gekürzt um seine Allgemeine Zulage."
    },

    e_kein_41a: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 41a II LBesG",
      title: "Kein Sonderzuschlag",
      text: "Mindestens eine Voraussetzung des § 41a II LBesG fehlt:\n\n• Besoldungsgruppe/Stufe außerhalb des Rasters (nur A 5 St. 2-8, A 6 St. 2-7, A 7 St. 2-5, A 8 St. 2-4, A 9 St. 2),\n• kein paZ aus Ehe/Lebenspartnerschaft – insbesondere ALLEINERZIEHENDE (paZ nach § 41 III) sind ausgeschlossen,\n• kbZ für weniger als zwei Kinder,\n• der Partner verdient mindestens die Geringfügigkeitsgrenze (§ 8 I Nr. 1 SGB IV; 2025: 556 €/Monat bzw. das Zwölffache im Jahr).\n\nBeachte bei schwankendem Partnereinkommen die Monatsbetrachtung: Übersteigt die Jahressumme die Grenze, besteht der Anspruch trotzdem in den einzelnen Monaten, in denen das Entgelt unter der monatlichen Grenze lag."
    }
  }
});
