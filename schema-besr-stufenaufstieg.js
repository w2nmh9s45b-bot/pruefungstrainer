/*
 * Prüfungsschema: Stufenaufstieg und Hemmung (§ 29 III, § 30 II LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 97-108
 *    (Stufenlaufzeiten, Unterbrechungszeiten, Ausnahmen § 30 II)
 *  - Gesetze: LBesG §§ 29 III, 30 II (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-stufenaufstieg",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundgehalt",
  title: "Stufenaufstieg und Hemmung (§§ 29 III, 30 II LBesG)",
  description: "Die Stufenlaufzeiten (2/3/4/5 Jahre), die Verzögerung durch Zeiten ohne Anspruch auf Grundgehalt (§ 29 III 2 1. Hs.) und die Ausnahmen des § 30 II LBesG (Kinderbetreuung bis drei Jahre, Pflege, dienstliche Beurlaubung).",
  start: "start",
  stations: [
    { id: "laufzeit", label: "Laufzeiten" },
    { id: "unterbrechung", label: "Unterbrechung" },
    { id: "ausnahme", label: "Ausnahmen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Aufstieg läuft",
    neg: "Ergebnis: Aufstieg verzögert",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "laufzeit",
      kind: "frage",
      norm: "§ 29 II 3, III 1 LBesG",
      title: "Die Stufenlaufzeiten: Wie steigt das Grundgehalt?",
      def: "Überleitung: „Ausgehend von dem Zeitpunkt des Beginns bestimmen sich die Stufenlaufzeiten nach Absatz 3“ (<b>§ 29 II 3 LBesG</b> – vor der Aufstiegs­berechnung immer mitzitieren!).<br><br><b>Stufenlaufzeiten (§ 29 III 1 LBesG):</b><br>• Stufen <b>1 bis 4</b>: im Abstand von <b>2 Jahren</b>,<br>• Stufen <b>5 bis 8</b>: im Abstand von <b>3 Jahren</b>,<br>• Stufen <b>9 und 10</b>: im Abstand von <b>4 Jahren</b>,<br>• ab Stufe <b>11</b>: im Abstand von <b>5 Jahren</b> – bis zum Endgrundgehalt.<br><br><b>Klausurtipp:</b> Der Aufstieg von Stufe 4 nach 5 erfolgt nach <b>zwei</b> Jahren (Stufe 4 gehört noch zum 2-Jahres-Block); erst der Aufstieg von 5 nach 6 dauert drei Jahre – beliebte Fehlerquelle! Die Laufzeiten stehen auch in der Grundgehaltstabelle.<br><br>Beispiel: Beginn 01.07.2020 in A 6 Stufe 1 → Stufe 2 am 01.07.2022 → Stufe 3 am 01.07.2024 → Stufe 4 am 01.07.2026 …",
      options: [
        { label: "Unterbrechung vorhanden?", next: "q_unterbrechung", tone: "pos" },
        { label: "Keine Unterbrechung", next: "e_regulaer", tone: "neutral" }
      ]
    },

    q_unterbrechung: {
      station: "unterbrechung",
      kind: "frage",
      norm: "§ 29 III 2 1. Hs. LBesG",
      title: "Gab es Zeiten OHNE Anspruch auf Grundgehalt?",
      def: "<b>Grundsatz (§ 29 III 2 1. Hs. LBesG):</b> Zeiten ohne Anspruch auf Grundgehalt <b>verzögern den Stufenaufstieg um diese Zeiten</b> – die erreichte Erfahrungszeit wird angehalten und läuft erst weiter, wenn wieder Grundgehalt gezahlt wird.<br><br>Typische Fälle: <b>Sonderurlaub unter Wegfall der Bezüge</b> (Weltreise, Sabbatjahr), <b>Elternzeit</b> ohne Bezüge, Ausscheiden aus dem Beamtenverhältnis mit späterer Wiedereinstellung.<br><br><b>Abrundung (§ 29 III 3 LBesG):</b> Die Verzögerungszeiten werden auf <b>volle Monate ABgerundet</b> – Unterbrechungen von <b>weniger als einem Monat</b> verzögern also nie (Beispiel Übung 7: Beurlaubung von 3 Monaten und 28 Tagen → Verzögerung nur 3 Monate).<br><br><i>Nicht verwechseln: Bei der Vorverlegung (§ 30 I 5) wird AUFgerundet, bei der Verzögerung ABgerundet – jeweils zugunsten des Beamten.</i>",
      options: [
        { label: "Ja – Ausnahmen prüfen (§ 30 II)", next: "q_ausnahme", tone: "warn" },
        { label: "Unter einem Monat", next: "e_regulaer", tone: "pos" }
      ]
    },

    q_ausnahme: {
      station: "ausnahme",
      kind: "frage",
      norm: "§ 29 III 2 2. Hs., § 30 II LBesG",
      title: "Greift eine Ausnahme: Zeiten, die NICHT verzögern?",
      def: "Abweichend vom Grundsatz verzögern die in <b>§ 30 II LBesG</b> abschließend aufgeführten Zeiten den Aufstieg <b>nicht</b> – sie werden wie Erfahrungszeiten mitgerechnet:<br><br>• <b>Nr. 1:</b> berücksichtigungsfähige Zeiten nach § 30 I, die <b>NACH der ersten Ernennung</b> mit Dienstbezügen liegen (außer Nr. 5 und 6) – z. B. zwischenzeitliche Tätigkeit als Soldat, gleichwertige öD-Beschäftigung zwischen zwei Beamtenverhältnissen, Urlaub ohne Bezüge für ein FSJ. <i>Idee: Was vor der Ernennung zur Vorverlegung führen würde, darf nach der Ernennung nicht hemmen.</i><br>• <b>Nr. 2: Kinderbetreuung bis zu DREI Jahren je Kind</b> (Elternzeit/Sonderbeurlaubung) – erst darüber hinaus wird gehemmt (4 Jahre Elternzeit → 1 Jahr Verzögerung),<br>• <b>Nr. 3: Pflege</b> pflegebedürftiger naher Angehöriger (ärztl. Gutachten) bis zu <b>drei Jahren</b> je Angehörigem (im Rahmen einer Sonderbeurlaubung),<br>• <b>Nr. 4: Beurlaubung ohne Dienstbezüge im dienstlichen Interesse</b> (gesetzlich oder schriftlich anerkannt; in Klausuren angegeben).<br><br><b>Verwechslungsgefahr:</b> § 30 <b>I</b> = Zeiten VOR dem Regelbeginn → <b>Vorverlegung</b>; § 30 <b>II</b> = Zeiten NACH dem Beginn → <b>keine Hemmung</b>.",
      options: [
        { label: "Ausnahme greift (voll)", next: "e_keine_hemmung", tone: "pos" },
        { label: "Ausnahme teilweise überschritten", next: "e_teilhemmung", tone: "warn" },
        { label: "Keine Ausnahme", next: "e_hemmung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_regulaer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 III 1 LBesG",
      title: "Regulärer Stufenaufstieg",
      text: "Der Stufenaufstieg läuft ungestört nach den Laufzeiten des § 29 III 1 LBesG (2/2/2/2 - 3/3/3/3 - 4/4 - 5 Jahre), ausgehend vom (ggf. vorverlegten) Beginndatum.\n\nUnterbrechungen unter einem Monat sind unbeachtlich (Abrundung, § 29 III 3 LBesG).\n\nZur Erinnerung: Ohne Angaben zur Leistung ist von Normalleistung auszugehen – Formulierung: \"Leistungsbezogene Einflüsse auf den Stufenaufstieg nach § 29 V-VII LBesG liegen nicht vor.\" (Details im Schema \"Beförderung, Leistungsstufe und Stufe\".)\n\nKomplettbeispiel (Übung 8 Fall 2): FSJ 1 Jahr, dann Studium, Übernahme 01.07.2021 als Inspektor: Regelbeginn 01.07.2021 in A 9 Stufe 2; FSJ = 1 Jahr Vorverlegung (§ 30 I 1 Nr. 4) → Beginn 01.07.2020 → Stufe 3 am 01.07.2022, Stufe 4 am 01.07.2024; Beförderung nach A 10 ändert daran nichts (§ 29 IV 1). Im Juli 2025: A 10 Stufe 4 + Allgemeine Zulage."
    },

    e_keine_hemmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 III 2 2. Hs., § 30 II LBesG",
      title: "Keine Hemmung – Zeit läuft als Erfahrungszeit weiter",
      text: "Die Unterbrechung fällt unter § 30 II LBesG und verzögert den Stufenaufstieg NICHT – die Stufenlaufzeit läuft durch, als wäre durchgehend Grundgehalt gezahlt worden.\n\nSkript-Beispiel: Stadtinspektorin W, seit 01.07.2018 im BV (A 9 Stufe 2), nimmt vom 01.07.2021 bis 30.06.2024 drei Jahre Elternzeit ohne Bezüge. Nach § 30 II Nr. 2 LBesG bleibt die Unterbrechung unbeachtlich: Stufe 3 am 01.07.2020, Stufe 4 am 01.07.2022, Stufe 5 am 01.07.2024 – wie ohne Elternzeit.\n\nWiedereinstellungs-Fall (Übung 7 Fall 3): Entlassung zwecks HöV-Studium im BaW-Verhältnis und Wiedereinstellung nach 3 Jahren: Die Anwärterzeit ist KEINE Zeit nach § 30 I (keine Ausnahme nach § 30 II Nr. 1) → der Aufstieg verzögert sich um diese 3 Jahre; der Regelbeginn selbst bleibt aber unverändert (\"ein Leben lang\"). Die neue Besoldungsgruppe (A 9) ergibt sich aus der neuen Ernennung."
    },

    e_teilhemmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 30 II Nr. 2, 3 LBesG",
      title: "Teilweise Hemmung (Grenze überschritten)",
      text: "Die Ausnahme des § 30 II LBesG ist der Höhe nach begrenzt – nur der überschießende Teil hemmt:\n\nÜbung 7 Fall 1: Stadtinspektorin A (A 9 Stufe 4, davon 1 Jahr Laufzeit absolviert) nimmt 4 Jahre Elternzeit. Nach § 30 II Nr. 2 LBesG sind 3 Jahre unschädlich, das 4. Jahr verzögert → der Aufstieg in Stufe 5 verschiebt sich um genau 1 Jahr nach hinten.\n\nRechenweg:\n1. Aufstiegsdaten ohne Unterbrechung aufstellen (§ 29 III 1),\n2. Unterbrechungszeit ohne Grundgehalt feststellen (§ 29 III 2 1. Hs.),\n3. davon die nach § 30 II privilegierten Zeiten abziehen,\n4. Rest (auf volle Monate abgerundet, § 29 III 3) auf alle künftigen Aufstiegsdaten aufschlagen.\n\nBesoldungsquiz Nr. 3: 10. Stufe erreicht am 01.07.2019, 2 Monate Sonderurlaub ohne Bezüge (08-09/2020) → Aufstieg in Stufe 11 statt am 01.07.2023 erst am 01.09.2023."
    },

    e_hemmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 29 III 2 1. Hs. LBesG",
      title: "Hemmung: Aufstieg verzögert sich",
      text: "Die Zeiten ohne Anspruch auf Grundgehalt verzögern den Stufenaufstieg in vollem Umfang (auf volle Monate abgerundet, § 29 III 3 LBesG). Alle künftigen Stufenaufstiege verschieben sich entsprechend nach hinten.\n\nSkript-Beispiel: K, eingestellt 01.07.2020 (A 6 Stufe 1 a. F.), nimmt vom 01.07.2023 bis 30.06.2024 ein Jahr Sonderurlaub ohne Bezüge für eine Weltreise. Kein Fall des § 30 II → alle Aufstiege ab Stufe 3 verschieben sich um ein Jahr: Stufe 3 statt 01.07.2024 erst 01.07.2025, Stufe 4 erst 01.07.2027 usw.\n\nFallgruppen aus dem Besoldungsquiz (Übung 16 Nr. 6):\n• Sabbatjahr/Weltreise → hemmt (kein § 30 II-Fall),\n• Sonderurlaub zur Schrebergarten-Herrichtung, 27 Tage → hemmt NICHT (unter einem Monat, Abrundung § 29 III 3),\n• Entlassung zwecks Anwärter-Studium (3 Jahre) → hemmt (Anwärterzeit ist keine § 30 I-Zeit),\n• 6 Jahre Betreuung der Zwillinge → hemmt NICHT (2 Kinder × 3 Jahre, § 30 II Nr. 2),\n• viermonatiger Entwicklungsdienst → hemmt grundsätzlich, denn unter 6 Monaten ist er keine berücksichtigungsfähige Zeit nach § 30 I 1 Nr. 4 (und damit kein Fall des § 30 II Nr. 1); anders nur, wenn die Beurlaubung anerkannt dienstlichen Interessen dient (§ 30 II Nr. 4)."
    }
  }
});
