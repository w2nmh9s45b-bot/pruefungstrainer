/*
 * Prüfungsschema: Beförderung, Leistungsstufe und Stufe (§ 29 IV-VII LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 109-113
 *    (Änderung der Besoldungsgruppe, Leistungsstufe, Hemmung bei Minderleistung)
 *  - Gesetze: LBesG § 29 IV-VIII, § 51 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-befoerderung-stufe",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundgehalt",
  title: "Beförderung, Leistungsstufe und Stufe (§ 29 IV–VII LBesG)",
  description: "Was passiert mit der Stufe bei einem Wechsel der Besoldungsgruppe (Grundsatz: nichts – § 29 IV 1) und wie Leistung den Aufstieg beeinflusst: Leistungsstufe für Spitzenkräfte (§ 29 V) und Hemmung bei Minderleistung (§ 29 VI).",
  start: "start",
  stations: [
    { id: "anlass", label: "Anlass" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stufe bestimmt",
    neg: "Ergebnis: Aufstieg gehemmt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "anlass",
      kind: "frage",
      norm: "§ 29 IV–VII LBesG",
      title: "Welcher Anlass berührt die Stufe?",
      def: "Nach der Festsetzung von Beginn und Laufzeiten können zwei Dinge den Stufenverlauf beeinflussen:<br><br>• eine <b>Änderung der Besoldungsgruppe</b> – i. d. R. durch <b>Beförderung</b> (§ 29 IV LBesG),<br>• die <b>Leistung</b> des Beamten (§ 29 V–VII LBesG).<br><br><b>Klausurtipp:</b> Stehen im Sachverhalt keine Angaben zur Leistung, ist von <b>Normalleistung</b> auszugehen – kurze Formulierung: „Leistungsbezogene Einflüsse auf den Stufenaufstieg nach § 29 V–VII LBesG liegen nicht vor.“",
      options: [
        { label: "Beförderung/Gruppenwechsel", next: "q_befoerderung", tone: "pos" },
        { label: "Herausragende Leistung", next: "e_leistungsstufe", tone: "neutral" },
        { label: "Mindestanforderungen verfehlt", next: "q_minderleistung", tone: "warn" }
      ]
    },

    q_befoerderung: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 29 IV LBesG",
      title: "Weist die neue Besoldungsgruppe für die erreichte Stufe ein Grundgehalt aus?",
      def: "<b>Grundsatz (§ 29 IV 1 LBesG):</b> Eine Änderung der Besoldungsgruppe wirkt sich auf die erreichte Stufe <b>grundsätzlich nicht aus</b>. Die Erfahrungszeit läuft einfach weiter – der bei der Einstellung errechnete Aufstiegsrhythmus bleibt unverändert (Stufe und nächste Aufstiegsdaten werden „mitgenommen“).<br><br><b>Drei Ausnahmen:</b><br>• <b>a) Lücke unten (§ 29 IV 2, 3):</b> Die neue höhere Gruppe weist für die erreichte Stufe <b>kein Grundgehalt</b> aus → Zuordnung zur Stufe des Anfangsgrundgehalts der neuen Gruppe; ab da beginnt die Erfahrungszeit in dieser Stufe <b>neu</b> zu laufen (Bsp.: A 10 Stufe 2 → A 11 Stufe 3).<br>• <b>b) Endstufe (§ 29 IV 4 1. Hs.):</b> Wechsel aus der <b>Endstufe</b> in eine Gruppe mit einer weiteren Stufe → die <b>gesamte bisherige Erfahrungszeit</b> wird berücksichtigt (fiktive Fortschreibung; Bsp.: A 10 Stufe 11 seit 6 Jahren → A 11 Stufe 12, da fiktiv die 12. Stufe erreicht wäre).<br>• <b>c) Rangherabsetzung (§ 29 IV 4 2. Hs.):</b> Die neue <b>niedrigere</b> Gruppe weist für die erreichte Stufe kein Grundgehalt aus → <b>Endgrundgehalt</b> der neuen Gruppe (Bsp.: A 8 Stufe 11 → A 7 Stufe 10).",
      options: [
        { label: "Ja – Stufe wird mitgenommen", next: "e_mitnahme", tone: "pos" },
        { label: "Nein – Lücke in der neuen Gruppe", next: "e_luecke", tone: "warn" },
        { label: "Wechsel aus der Endstufe", next: "e_endstufe", tone: "warn" }
      ]
    },

    q_minderleistung: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 29 VI LBesG",
      title: "Hemmung bei Minderleistung: Sind die Verfahrensschritte eingehalten?",
      def: "Entsprechen die Leistungen <b>nicht den Mindestanforderungen</b> des Amtes, wird der Aufstieg gehemmt – aber nur in einem gestuften Verfahren (§ 29 VI LBesG):<br><br>1. <b>Leistungsfeststellung</b> mit negativem Ergebnis,<br>2. <b>Hinweis</b> an den Beamten, anforderungsgerechte Leistungen zu erbringen (Muss!),<br>3. <b>erneute negative Leistungsfeststellung</b> über einen hinreichenden Beurteilungszeitraum.<br><br>Grundlage sind geeignete Leistungseinschätzungen (§ 29 VI 4). Die Entscheidung trifft die oberste Dienstbehörde oder die von ihr bestimmte Stelle; sie wird schriftlich/elektronisch mitgeteilt; <b>Widerspruch und Anfechtungsklage haben keine aufschiebende Wirkung</b> (§ 29 VII LBesG).",
      options: [
        { label: "Verfahren eingehalten", next: "e_hemmung_leistung", tone: "neg" },
        { label: "Nur eine Feststellung/kein Hinweis", next: "e_keine_hemmung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_mitnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 IV 1 LBesG",
      title: "Stufe bleibt – Aufstiegsrhythmus läuft weiter",
      text: "Die Beförderung ändert an der erreichten Stufe nichts (§ 29 IV 1 LBesG): Der Beamte behält Stufe und Aufstiegsdaten; nur die Besoldungsgruppe (Zeile in der Tabelle) wechselt.\n\nBesoldungsquiz Nr. 2 – richtig ist: \"Bei Beförderungen erhält der Beamte in der neuen Besoldungsgruppe die in der bisherigen Besoldungsgruppe verbrachte Stufenlaufzeit angerechnet\" (der Rhythmus läuft unverändert weiter).\n\nBeachte daneben:\n• Der Anspruch auf das höhere Grundgehalt beginnt mit der Wirksamkeit der Ernennung bzw. der (rückwirkenden) Planstelleneinweisung (§ 4 II LBesG – Schema \"Beginn und Ende des Besoldungsanspruchs\").\n• Bei Beförderung nach A 14 entfällt die Allgemeine Zulage (Nr. 12 I 1 der Vorbemerkungen gilt nur für A 6 bis A 13) – per Saldo kann der Zugewinn kleiner ausfallen als gedacht (Übung 15 Fall 1)."
    },

    e_luecke: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 29 IV 2, 3 LBesG",
      title: "Zuordnung zum Anfangsgrundgehalt der neuen Gruppe",
      text: "Weist die neue höhere Besoldungsgruppe für die erreichte Stufe kein Grundgehalt aus (Lücke in der Tabelle), wird der Beamte der Stufe des Anfangsgrundgehalts der neuen Gruppe zugeordnet (§ 29 IV 2 LBesG). Ab diesem Zeitpunkt beginnt das Aufsteigen in dieser Stufe NEU (§ 29 IV 3 LBesG) – die Erfahrungszeit läuft quasi von vorn.\n\nBeispiel: Beförderung aus A 10 Stufe 2 nach A 11 – A 11 beginnt erst mit Stufe 3 → Zuordnung zu A 11 Stufe 3, Stufenlaufzeit der Stufe 3 (2 Jahre) startet neu mit der Beförderung.\n\nDas ist für den Beamten günstig (höhere Stufe sofort), verschiebt aber den weiteren Rhythmus."
    },

    e_endstufe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 29 IV 4 LBesG",
      title: "Wechsel aus der Endstufe: fiktive Fortschreibung",
      text: "Wechselt der Beamte aus der ENDSTUFE seiner Besoldungsgruppe in eine Gruppe, die eine weitere Stufe ausweist, wird für die Stufenfestlegung die GESAMTE bisherige Erfahrungszeit berücksichtigt (§ 29 IV 4 1. Hs. LBesG): Man rechnet so, als hätte die alte Gruppe im Rhythmus des § 29 III 1 weitere Stufen gehabt.\n\nBeispiel: A 10 Stufe 11, dort schon 6 Jahre → fiktiv wäre die 12. Stufe (nach 5 Jahren Laufzeit) erreicht → Beförderung nach A 11 direkt in Stufe 12.\n\nUmgekehrter Fall – Rangherabsetzung (§ 29 IV 4 2. Hs.): Weist die neue NIEDRIGERE Gruppe für die erreichte Stufe kein Grundgehalt aus, wird das Endgrundgehalt der neuen Gruppe gezahlt (freiwillige Rangherabsetzung A 8 Stufe 11 → A 7 Stufe 10 = Endstufe)."
    },

    e_leistungsstufe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 29 V LBesG",
      title: "Leistungsstufe für Spitzenkräfte (Ermessen)",
      text: "Bei DAUERHAFT HERAUSRAGENDEN Leistungen kann für den Zeitraum bis zum regulären Erreichen der nächsten Stufe das Grundgehalt der NÄCHSTHÖHEREN Stufe gezahlt werden – die Leistungsstufe (§ 29 V 1 LBesG).\n\n• Quote: max. 10 % der beim Dienstherrn vorhandenen Beamten der BesO A, die das Endgrundgehalt noch nicht erreicht haben (§ 29 V 2; bei Dienstherren mit unter 10 Beamten kann per RVO einer je Kalenderjahr zugelassen werden, § 29 VII 4).\n• Rechtsfolge: Ermessen (\"kann\").\n• Die Leistungsstufe ENTFÄLLT mit der Verleihung eines Amtes mit höherem Endgrundgehalt (Beförderung, § 29 V 3). Liegt das Grundgehalt des Beförderungsamtes unter dem Betrag der Leistungsstufe, wird die Differenz über eine Ausgleichszulage nach § 51 LBesG ausgeglichen.\n• Entscheidung: oberste Dienstbehörde/bestimmte Stelle, schriftliche Mitteilung (§ 29 VII)."
    },

    e_hemmung_leistung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 29 VI LBesG",
      title: "Hemmung des Stufenaufstiegs (Muss-Regelung)",
      text: "Ergibt die WEITERE Leistungsfeststellung erneut, dass die Mindestanforderungen nicht erfüllt sind, gelten die Dienstzeiten ab dem Ersten des Monats der Feststellung NICHT als Erfahrungszeiten – der Beamte verbleibt in der bisherigen Stufe (§ 29 VI 2 LBesG). Muss-Regelung, kein Ermessen.\n\n• Überprüfung: Eine spätere Leistungsfeststellung ist frühestens 12 Monate danach zulässig (§ 29 VI 3 – jährliche Überprüfung).\n• Erbringt der Beamte wieder die Mindestanforderungen, zählen die Dienstzeiten ab dem Ersten des Monats dieser Feststellung wieder als Erfahrungszeiten.\n• Widerspruch/Anfechtungsklage: keine aufschiebende Wirkung (§ 29 VII 3).\n\nErgänzend § 29 VIII: Während einer vorläufigen Dienstenthebung verbleibt der Beamte in der bisherigen Stufe; endet das Disziplinarverfahren nicht mit Entfernung/Entlassung, wird der Aufstieg rückwirkend nach Abs. 3 nachgezeichnet."
    },

    e_keine_hemmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 VI LBesG",
      title: "Keine Hemmung – Verfahren nicht durchlaufen",
      text: "Die Hemmung nach § 29 VI LBesG setzt das gestufte Verfahren zwingend voraus:\n1. negative Leistungsfeststellung,\n2. Hinweis mit Gelegenheit zur Besserung,\n3. ERNEUTE negative Feststellung über einen hinreichenden Beurteilungszeitraum.\n\nFehlt einer dieser Schritte, gelten die Zeiten weiter als Erfahrungszeiten – der Stufenaufstieg läuft normal (§ 29 III 1 LBesG).\n\nIn der Klausur ohne Leistungsangaben gilt ohnehin: Normalleistung, kurzer Satz: \"Leistungsbezogene Einflüsse auf den Stufenaufstieg nach § 29 V-VII LBesG liegen nicht vor.\""
    }
  }
});
