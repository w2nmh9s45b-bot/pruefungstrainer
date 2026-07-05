/*
 * Prüfungsschema: Beförderung und Qualifizierung (§ 21 LBG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 2 - Laufbahnrecht" (Minor) 2024/2025, Ziff. 2.3
 *  - Gesetze: LBG §§ 11, 21, 22; LbVO §§ 5, 12, 26-30; BeamtStG § 8 I Nr. 3;
 *    LPersVG §§ 73, 74, 79; GemO § 47 II (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-befoerderung",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Grundlagen und Laufbahn",
  title: "Beförderung und Qualifizierung (§ 21 LBG)",
  description: "Die Beförderung als Ernennung (§ 21 I LBG, § 8 I Nr. 3 BeamtStG), die Beförderungsverbote des § 21 II LBG (Probezeit, Wartejahr, Erprobungszeit, Sprungbeförderung), das Beförderungsverfahren (Bestenauslese) und die Qualifizierungswege über die Beförderungsgrenzen A 9/A 13 hinaus (§ 21 III LBG).",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "verbote", label: "Verbote" },
    { id: "verfahren", label: "Verfahren" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Beförderung möglich",
    neg: "Ergebnis: Beförderungsverbot",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Qualifizierung nötig"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "§ 21 I LBG, § 8 I Nr. 3 BeamtStG",
      title: "Begriff: Was ist eine Beförderung?",
      def: "Der Aufstieg in der Laufbahn vollzieht sich ausschließlich durch <b>Beförderungen</b> (§ 21 I LBG): eine <b>Ernennung</b>, durch die dem Beamten ein <b>anderes Amt mit höherem Grundgehalt</b> verliehen wird – Ernennungsfall des <b>§ 8 I Nr. 3 BeamtStG</b> (Urkunde ohne Formel; das neue Amt ergibt sich aus der neuen Amtsbezeichnung).<br><br>Beförderungen erfolgen nach <b>Leistung und Qualifizierung</b> (§§ 21, 22 LBG; §§ 2–4 LbVO) – Ausfluss der <b>Bestenauslese</b> (Art. 33 II GG, § 9 BeamtStG: Eignung, Befähigung, fachliche Leistung).<br><br><b>Abgrenzungen:</b><br>• keine Beförderung: Umwandlung des BV (§ 8 I Nr. 2), Umsetzung/Versetzung (Personalverteilung), Stufenaufstieg (Besoldungsrecht),<br>• <b>Rückernennung</b> (anderes Amt mit niedrigerem Grundgehalt) ist ebenfalls Fall des § 8 I Nr. 3.",
      options: [
        { label: "Beförderungsverbote prüfen", next: "q_verbote", tone: "pos" },
        { label: "Beförderungsgrenze (A 9 / A 13)?", next: "q_qualifizierung", tone: "warn" }
      ]
    },

    q_verbote: {
      station: "verbote",
      kind: "frage",
      norm: "§ 21 II LBG",
      title: "Greift ein Beförderungsverbot des § 21 II LBG?",
      def: "Eine Beförderung ist <b>nicht zulässig</b> (§ 21 II LBG):<br><br>• <b>während der Probezeit</b> (Nr. 1) – es sei denn, die Einstellung im Beförderungsamt wäre nach § 19 II 2 Nr. 1 möglich gewesen,<br>• <b>vor Ablauf eines Jahres seit Beendigung der Probezeit</b> (Nr. 2) – Ausnahme: <b>hervorragende Leistungen</b> („Spitzenleistungen“) in der Probezeit,<br>• vor Feststellung der Eignung in einer <b>Erprobungszeit</b> auf dem höher bewerteten Dienstposten (Nr. 3 i. V. m. <b>§ 12 LbVO</b>: mindestens <b>sechs Monate</b>, soll <b>ein Jahr</b> nicht überschreiten),<br>• <b>innerhalb eines Jahres seit der letzten Beförderung</b> (Nr. 4 – Wartefrist zwischen Statusämtern),<br>• <b>Verbot der Sprungbeförderung</b> (§ 21 II 2 LBG, § 5 I LbVO): Die Ämter der Laufbahn sind <b>regelmäßig zu durchlaufen</b>.<br><br><b>Ausnahmen durch den Landespersonalausschuss</b> sind zulässig (§ 21 II 3 LBG) – unterbleibt dessen vorgeschriebene Mitwirkung, ist die Beförderung nach <b>§ 12 I Nr. 4 BeamtStG</b> zurückzunehmen (Schema „Rücknahme der Ernennung“)!<br><br><i>Sonderproblem Probezeitverzicht (§ 20 II 3 LBG): Nach h. M. gilt trotzdem eine Wartefrist von einem Jahr nach der erstmaligen Amtsverleihung (Rechtsgedanke aus § 21 II 1 Nr. 2 und Nr. 4 LBG).</i>",
      options: [
        { label: "Kein Verbot – Verfahren", next: "q_verfahren", tone: "pos" },
        { label: "Verbot greift", next: "e_verbot", tone: "neg" }
      ]
    },

    q_verfahren: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 11 LBG, § 9 BeamtStG, LPersVG",
      title: "Das Beförderungsverfahren (Bestenauslese)",
      def: "Typischer Ablauf in der Praxis (Skript):<br><br>1. <b>Stellenausschreibung</b> (§ 11 I 1 LBG – Grundsatz; Ausnahmen: § 11 I 3–5 LBG, Beschluss des LPA v. 25.04.2018),<br>2. <b>dienstliche Beurteilungen</b> anfordern (§ 15 LbVO),<br>3. <b>Personalauswahlentscheidung</b> – Bestenauslese (Art. 33 II GG, § 9 BeamtStG),<br>4. Beteiligungen: <b>Gleichstellungsbeauftragte</b>, ggf. <b>Schwerbehindertenvertretung</b>, Zustimmung des <b>Personalrats</b> (§§ 79 II Nr. 1 und 3, 73, 74 LPersVG),<br>5. Kommunalverwaltung: Beteiligung von <b>Rat/Kreistag ab dem 3. EA</b> (§ 47 II 2 Nr. 1 GemO, § 41 II 2 Nr. 1 LKO),<br>6. rechtzeitige <b>Negativmitteilung</b> an unterlegene Bewerber (OVG: „2-Wochen-Frist“ – Konkurrentenstreit ermöglichen!),<br>7. Vergabe des Dienstpostens, verwaltungsmäßiger Vollzug durch <b>Umsetzung</b>,<br>8. <b>Erprobungszeit</b> (§ 21 II Nr. 3 LBG, § 12 LbVO),<br>9. <b>Beförderung</b> = Ernennung (§ 8 I Nr. 3 BeamtStG) mit Urkunde + <b>Planstelleneinweisung</b> (§ 49 II LHO, § 20 GemHVO – Besoldung!).",
      options: [
        { label: "Verfahren eingehalten", next: "e_befoerderung", tone: "pos" }
      ]
    },

    q_qualifizierung: {
      station: "verbote",
      kind: "frage",
      norm: "§ 21 III LBG, §§ 27–29 LbVO",
      title: "Über die Beförderungsgrenze: Welcher Qualifizierungsweg?",
      def: "Die Laufbahn deckelt die Beförderung: <b>2. EA → bis A 9</b>, <b>3. EA → bis A 13</b>. Für die Beförderung in die Ämter <b>A 7(!), A 10 und A 14</b> ist – soweit nicht vorhanden – der Erwerb der <b>Qualifikation des nächsthöheren EA</b> nötig (§ 21 III LBG):<br><br>• <b>Regelqualifizierung (§ 15 LBG):</b> Erwerb der vollen Zugangsvoraussetzungen (Studium/Vorbereitungsdienst oder Bildungsabschluss + hauptberufliche Zeit, ggf. § 27 LbVO: Verleihung des Einstiegsamts nach Auswahlverfahren),<br>• <b>Ausbildungsqualifizierung (§ 21 III 1 Nr. 1 LBG, § 28 LbVO):</b> Zulassung setzt u. a. <b>Bewährung in einer Dienstzeit von mindestens drei Jahren</b> voraus – die Dienstzeit rechnet <b>ab Beendigung der Probezeit</b> (§ 30 I LbVO)!,<br>• <b>Fortbildungsqualifizierung (§ 21 III 1 Nr. 2 LBG, § 29 LbVO):</b> ca. einjährige Fortbildung; nach erfolgreichem Abschluss kann das <b>nächsthöhere Einstiegsamt</b> verliehen werden (§ 5 II LbVO) – oft der schnellste Weg (Skript-Beispiel: Beförderung nach A 13 unmittelbar nach FQ-Abschluss statt 3,5 Jahre hauptberufliche Wartezeit).",
      options: [
        { label: "Qualifizierung vorhanden", next: "q_verbote", tone: "pos" },
        { label: "Noch nicht erworben", next: "e_qualifizierung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_befoerderung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 21 LBG, § 8 I Nr. 3 BeamtStG",
      title: "Beförderung zulässig",
      text: "Die Beförderung kann ausgesprochen werden: Ernennung nach § 8 I Nr. 3 BeamtStG durch Aushändigung der Urkunde (neue Amtsbezeichnung, KEINE Ernennungsformel – Schema \"Ernennungsurkunde\").\n\nBesoldungsrechtliche Anschlussfragen (Fach Besoldungsrecht):\n• Anspruch auf das höhere Grundgehalt ab Wirksamkeit der Ernennung bzw. rückwirkender Planstelleneinweisung (§ 4 II LBesG, § 49 II LHO),\n• die erreichte Stufe bleibt grundsätzlich erhalten (§ 29 IV 1 LBesG),\n• bei Beförderung nach A 14 entfällt die Allgemeine Zulage.\n\nRechtsschutz des unterlegenen Mitbewerbers: Konkurrentenstreit – nach der Negativmitteilung einstweilige Anordnung (§ 123 VwGO) auf Freihaltung der Stelle; nach Aushändigung der Urkunde an den Konkurrenten gilt der Grundsatz der Ämterstabilität."
    },

    e_verbot: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 21 II LBG",
      title: "Beförderungsverbot – keine Beförderung",
      text: "Die Beförderung ist derzeit unzulässig (§ 21 II LBG): Probezeit, Wartejahr nach Probezeitende (Ausnahme Spitzenleistungen), fehlende Erprobungszeit (§ 12 LbVO), Jahresfrist seit der letzten Beförderung oder Sprungbeförderungsverbot (§ 21 II 2, § 5 I LbVO).\n\nAuswege:\n• Ausnahme durch den LANDESPERSONALAUSSCHUSS (§ 21 II 3 LBG) – z. B. für Beförderung während der Probezeit oder vor Ablauf der Wartezeiten; ohne dessen Mitwirkung ist eine dennoch ausgesprochene Beförderung nach § 12 I Nr. 4 BeamtStG ZURÜCKZUNEHMEN (Frist: 6 Monate ab Kenntnis der Ablehnung, spätestens 1,5 Jahre ab Ernennung – § 13 I 2, II LBG),\n• Erprobungszeit nachholen (6 Monate bis 1 Jahr),\n• schlicht abwarten (Fristablauf).\n\nBeachte auch die besonderen Dienstzeiten des § 26 LbVO (z. B. mind. 6 Jahre Dienstzeit i. S. d. § 30 LbVO vor Verleihung eines Amtes der BesGr. A 12)."
    },

    e_qualifizierung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 21 III LBG, §§ 27–29 LbVO",
      title: "Erst qualifizieren, dann befördern",
      text: "Ohne die Qualifikation des nächsthöheren Einstiegsamts ist die Beförderung über die Grenze (A 6→A 7, A 9→A 10, A 13→A 14) unzulässig. Drei Wege:\n\n1. REGELQUALIFIZIERUNG (§ 15 LBG, ggf. § 27 LbVO): volle Zugangsvoraussetzungen erwerben. Skript-Praxisbeispiel: Oberinspektor (A 10) mit berufsbegleitendem Master will auf eine A-14-Stelle – § 27 I LbVO verlangt Hochschulbildung + Auswahlverfahren + hauptberufliche Tätigkeit (3,5 Jahre, § 18 I 1 Nr. 3 LbVO) NACH dem Masterabschluss in gleichwertiger (A-14-wertiger) Funktion; erst danach Einstellung im 4. EA (A 13) möglich, Beförderung nach A 14 frühestens ein weiteres Jahr später (§ 21 II LBG).\n\n2. AUSBILDUNGSQUALIFIZIERUNG (§ 21 III 1 Nr. 1 LBG, § 28 LbVO): z. B. HöV-Studium als \"Aufsteiger\"; Zulassung erst nach Bewährung in mind. drei Jahren Dienstzeit – gerechnet ab Beendigung der Probezeit (§ 30 I LbVO).\n\n3. FORTBILDUNGSQUALIFIZIERUNG (§ 21 III 1 Nr. 2 LBG, § 29 LbVO): ca. ein Jahr; danach kann nach § 5 II LbVO das nächsthöhere Einstiegsamt direkt verliehen werden – meist der schnellste Weg.\n\nEin horizontaler LAUFBAHNWECHSEL ist daneben grundsätzlich möglich (§ 24 LBG, § 7 LbVO)."
    }
  }
});
