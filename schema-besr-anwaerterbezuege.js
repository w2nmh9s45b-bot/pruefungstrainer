/*
 * Prüfungsschema: Anwärterbezüge (§§ 57-62 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 173-179
 *    (Anwärtergrundbetrag, Sonderzuschlag, Kürzung, Anrechnung, Auflagen)
 *  - Gesetze: LBesG §§ 57-62, Anlage 9 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-anwaerterbezuege",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Anwärterbezüge",
  title: "Anwärterbezüge (§§ 57–62 LBesG)",
  description: "Die Sonstigen Bezüge der Beamten auf Widerruf: Anwärtergrundbetrag nach dem angestrebten Einstiegsamt (Anlage 9), Familienzuschlag, Anwärtersonderzuschläge (§ 59), Kürzung bei Prüfungsmisserfolg (§ 62), Anrechnung von Nebentätigkeitsentgelt (§ 61) und die Auflagen mit Rückzahlungspflicht (§ 57 V).",
  start: "start",
  stations: [
    { id: "status", label: "Status" },
    { id: "bestandteile", label: "Bestandteile" },
    { id: "probleme", label: "Problemkreise" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Bezüge bestimmt",
    neg: "Ergebnis: Kürzung/Anrechnung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "status",
      kind: "frage",
      norm: "§ 57 I LBesG",
      title: "Ist die Person Anwärter (Beamter auf Widerruf im Vorbereitungsdienst)?",
      def: "Beamte auf Widerruf im Vorbereitungsdienst – <b>Anwärter</b> – erhalten <b>Anwärterbezüge</b> (§ 57 I LBesG). Sie sind <b>Sonstige Bezüge</b> (§ 3 II LBesG), keine Dienstbezüge!<br><br>Daraus folgt (Dauerbrenner):<br>• Anwärterzeiten sind <b>keine Erfahrungszeiten</b> (§ 29 I 3) und die Anwärter-Ernennung ist <b>nie</b> die „erste Ernennung“ für den Stufenbeginn (§ 29 II 1),<br>• bei Teilzeit werden auch Anwärterbezüge zeitratierlich gekürzt (§ 9 I),<br>• Zahlung monatlich im Voraus (§ 8 I 1).<br><br>Endet das BV kraft Rechtsvorschrift mit Bestehen/endgültigem Nichtbestehen der <b>Laufbahnprüfung</b>, werden Anwärterbezüge und Familienzuschlag noch <b>bis zum Ende des laufenden Monats</b> weitergewährt – es sei denn, vorher beginnt ein Anspruch aus einer hauptberuflichen Tätigkeit bei einem öffentlich-rechtlichen Dienstherrn (§ 58 LBesG).",
      options: [
        { label: "Ja – Bestandteile ansehen", next: "q_bestandteile", tone: "pos" },
        { label: "Nein – kein Anwärter", next: "e_kein_anwaerter", tone: "neg" }
      ]
    },

    q_bestandteile: {
      station: "bestandteile",
      kind: "frage",
      norm: "§ 57 II LBesG",
      title: "Die Bestandteile der Anwärterbezüge",
      def: "Zu den Anwärterbezügen gehören (§ 57 II LBesG):<br><br>• <b>Anwärtergrundbetrag</b> (Anlage 9): Die Höhe hängt vom <b>Einstiegsamt</b> ab, in das der Anwärter nach dem Vorbereitungsdienst <b>unmittelbar eintritt</b> (§§ 14 IV, 15, 19 II LBG, § 25 LBesG) – Anwärter des 3. EA erhalten also mehr als die des 2. EA,<br>• <b>Anwärtersonderzuschläge</b> (§ 59 – s. u.),<br>• daneben der <b>Familienzuschlag</b> nach §§ 41 ff. LBesG (§ 57 II 2) – Prüfung wie bei den Dienstbezügen (Schemata Familienzuschlag),<br>• <b>Zulagen und Vergütungen nur, wenn gesetzlich besonders bestimmt</b> (§ 57 II 3) – für die Fachrichtung Verwaltung und Finanzen kaum etwas: v. a. die <b>Erschwerniszulage für Dienst zu ungünstigen Zeiten</b> (LEZulVO), außerdem z. B. Polizei-/Feuerwehr-/JVA-Zulagen für die dortigen Anwärter (Vorbem. Nr. 6–8) und die Unterrichtsvergütung für Lehramtsanwärter (§ 60).<br><br><b>Quiz Nr. 7:</b> Anwärter haben Anspruch auf Anwärtergrundbetrag, paZ (bei Ehe) und Zulage für Dienst zu ungünstigen Zeiten – aber NICHT auf Jahressonderzahlung oder Leistungsstufe!",
      options: [
        { label: "Anwärtersonderzuschlag?", next: "q_sonderzuschlag", tone: "neutral" },
        { label: "Problemkreise (§§ 61, 62, 57 V)", next: "q_probleme", tone: "neutral" },
        { label: "Bezüge komplett", next: "e_bezuege", tone: "pos" }
      ]
    },

    q_sonderzuschlag: {
      station: "bestandteile",
      kind: "frage",
      norm: "§ 59 LBesG",
      title: "Anwärtersonderzuschlag: Besteht ein erheblicher Bewerbermangel?",
      def: "Bei <b>erheblichem Mangel an qualifizierten Bewerbern</b> kann das Finanzministerium Anwärtersonderzuschläge gewähren (§ 59 I LBesG):<br><br>• Höhe: bis zu <b>70 % des Anwärtergrundbetrags</b>,<br>• für die Fachrichtung <b>Verwaltung und Finanzen bisher NICHT festgesetzt</b>,<br>• <b>Bindung (§ 59 II):</b> Anspruch nur, wenn der Anwärter nicht vorzeitig/wegen schuldhaften Nichtbestehens ausscheidet UND nach der Laufbahnprüfung <b>mindestens fünf Jahre</b> als Beamter im öffentlichen Dienst (§ 20) in der Fachrichtung verbleibt,<br>• sonst: <b>Rückzahlung in voller Höhe</b>; der Betrag vermindert sich um 1/5 je abgeleistetem Dienstjahr (§ 59 III).",
      options: [
        { label: "Weiter zu den Problemkreisen", next: "q_probleme", tone: "pos" }
      ]
    },

    q_probleme: {
      station: "probleme",
      kind: "frage",
      norm: "§§ 61, 62, 57 V LBesG",
      title: "Welcher Problemkreis liegt vor?",
      def: "Drei prüfungsrelevante Sonderprobleme:<br><br>• <b>Kürzung (§ 62):</b> Laufbahnprüfung nicht bestanden oder Ausbildung aus vom Anwärter zu vertretendem Grund verzögert,<br>• <b>Anrechnung anderer Einkünfte (§ 61):</b> Entgelt aus Nebentätigkeit innerhalb des öD oder genehmigungspflichtiger Nebentätigkeit außerhalb,<br>• <b>Auflagen mit Rückzahlungspflicht (§ 57 V):</b> für Anwärter, die im Vorbereitungsdienst ein <b>Studium</b> ableisten (HöV!) – die Verbleibensverpflichtung.",
      options: [
        { label: "Prüfung nicht bestanden (§ 62)", next: "e_kuerzung", tone: "neg" },
        { label: "Nebentätigkeit (§ 61)", next: "e_anrechnung", tone: "neg" },
        { label: "Studium/Auflagen (§ 57 V)", next: "e_auflagen", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bezuege: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 57 II LBesG, Anlage 9",
      title: "Anwärterbezüge bestimmt",
      text: "Der Anwärter erhält:\n1. den Anwärtergrundbetrag nach Anlage 9 – abhängig vom Einstiegsamt, in das er nach dem Vorbereitungsdienst unmittelbar eintritt (2. EA: Übernahme als Sekretär, A 6; 3. EA: als Inspektor, A 9),\n2. ggf. den Familienzuschlag (§§ 41 ff. LBesG über § 57 II 2 – z. B. paZ bei Heirat, kbZ bei Kindern),\n3. ggf. Anwärtersonderzuschläge (§ 59 – für Verwaltung und Finanzen bisher nicht festgesetzt),\n4. Zulagen/Vergütungen nur bei besonderer gesetzlicher Bestimmung (§ 57 II 3 – z. B. Erschwerniszulage für Dienst zu ungünstigen Zeiten).\n\nBei Ernennung im Laufe des Monats: Teilmonatsberechnung nach § 4 III LBesG (Übung 2 Nr. 4: Urkunde am 06.07. ausgehändigt \"mit Wirkung zum 01.07.\" → Anspruch erst ab 06.07., § 8 IV BeamtStG, § 10 II LBG → 26/31 des Monatsbetrags).\n\nNach bestandener Prüfung: Weitergewährung bis Monatsende (§ 58 LBesG), danach beginnt mit der Ernennung zum Beamten auf Probe der Anspruch auf Dienstbezüge – und der Stufenaufstieg (§ 29 II 1 LBesG)."
    },

    e_kuerzung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 62 LBesG",
      title: "Kürzung des Anwärtergrundbetrags",
      text: "Die oberste Dienstbehörde (oder die von ihr bestimmte Stelle) KANN den Anwärtergrundbetrag herabsetzen – bis auf 30 % des Grundgehalts, das einem Beamten im entsprechenden Einstiegsamt in der ersten Stufe zusteht (§ 62 I LBesG; das ist die UNTERGRENZE der Kürzung).\n\nTatbestände:\n• Laufbahnprüfung nicht bestanden,\n• Ausbildung aus einem vom Anwärter zu vertretenden Grund verzögert,\n• Zwischenprüfung/Leistungsnachweis nicht erbracht → Kürzung beschränkt auf den Verlängerungszeitraum (§ 62 III).\n\nKEINE Kürzung (§ 62 II): bei Verlängerung infolge genehmigten Fernbleibens oder Rücktritts von der Prüfung sowie in besonderen Härtefällen.\n\nPraxisempfehlung (Skript): deutlich mildere Kürzung – um 15 % des Anwärtergrundbetrags bei \"normalem\" Nichtbestehen, um 30 % bei Täuschungsversuchen o. Ä. (Ermessen!)."
    },

    e_anrechnung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 61 LBesG",
      title: "Anrechnung von Nebentätigkeitsentgelt",
      text: "Erhält der Anwärter ein Entgelt für eine Nebentätigkeit INNERHALB des öffentlichen Dienstes oder für eine GENEHMIGUNGSPFLICHTIGE Nebentätigkeit außerhalb, wird das Entgelt auf die Anwärterbezüge angerechnet, SOWEIT ES DIESE ÜBERSTEIGT (§ 61 I 1 LBesG).\n\nGarantie: Als Anwärtergrundbetrag werden mindestens 30 % des Anfangsgrundgehalts des jeweiligen Einstiegsamtes gewährt (§ 61 I 3 LBesG).\n\nDasselbe gilt bei arbeitsrechtlichem Entgeltanspruch für eine in den Ausbildungsrichtlinien vorgeschriebene Tätigkeit außerhalb des öD (§ 61 I 2).\n\nÜbt der Anwärter gleichzeitig eine Tätigkeit im öD mit mindestens der Hälfte der regelmäßigen Arbeitszeit aus, gilt § 14 LBesG entsprechend (§ 61 II – Besoldung bei mehreren Hauptämtern)."
    },

    e_auflagen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 57 V LBesG",
      title: "Auflagen und Rückzahlungspflicht (HöV-Studium!)",
      text: "Für Anwärter, die im Vorbereitungsdienst ein STUDIUM ableisten (z. B. HöV RLP), kann die Gewährung der Anwärterbezüge von AUFLAGEN abhängig gemacht werden (§ 57 V LBesG; der Auflagenbegriff ist NICHT der des § 36 II Nr. 4 VwVfG). Nach dem Hinweis des Finanzministeriums sind die Bezüge mit den Auflagen zu gewähren, dass\n\n1. das Studium nicht vor Ablauf der festgelegten Studienzeit aus einem vom Anwärter zu vertretenden Grund endet,\n2. der Anwärter im Anschluss rechtzeitig die Übernahme in das Beamtenverhältnis auf Probe beantragt bzw. ein angebotenes Amt annimmt,\n3. er nicht vor Ablauf einer MINDESTDIENSTZEIT VON FÜNF JAHREN aus einem von ihm zu vertretenden Grund aus dem öffentlichen Dienst ausscheidet.\n\nRechtsfolgen bei Auflagenverstoß:\n• Rückforderung eines Teils der gezahlten Anwärterbezüge – beschränkt auf den Teil, der 500 € monatlich übersteigt,\n• Verzicht ganz/teilweise möglich, wenn die Rückzahlung eine unzumutbare Härte wäre.\n\nVerfahren: frühzeitige Unterrichtung (mit den Einstellungsunterlagen); schriftliche Bestätigung der Kenntnisnahme spätestens bei der Ernennung (Zweitschrift zu den Akten).\n\nPraktisch relevant für Moritz' eigenen Jahrgang: Die Verbleibensverpflichtung von fünf Jahren nach dem HöV-Studium stützt sich genau hierauf."
    },

    e_kein_anwaerter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 57 I LBesG",
      title: "Kein Anwärter – keine Anwärterbezüge",
      text: "Anwärterbezüge erhalten nur Beamte auf Widerruf im Vorbereitungsdienst (§ 4 IV BeamtStG).\n\n• Beamte auf Probe/Lebenszeit/Zeit → Dienstbezüge (§ 3 I LBesG; Schema \"Bestandteile der Besoldung\"),\n• Praktikanten/dual Studierende im Arbeitsverhältnis → Entgelt nach Tarifrecht (TVAöD/TVöD), kein Besoldungsrecht,\n• Ehrenbeamte → keine Besoldung (§ 1 I LBesG).\n\nZur Erinnerung: Nach bestandener Laufbahnprüfung endet das BaW-Verhältnis kraft Gesetzes; die Anwärterbezüge laufen bis zum Monatsende weiter (§ 58 LBesG), mit der Ernennung zum Beamten auf Probe beginnen die Dienstbezüge."
    }
  }
});
