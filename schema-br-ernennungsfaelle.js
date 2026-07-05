/*
 * Prüfungsschema: Rechtsnatur der Ernennung und die vier Ernennungsfälle
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor) 2024/2025, Ziff. 3.1-3.2
 *  - Gesetze: BeamtStG § 8; LBG § 19 II; BGB §§ 104 ff., 1626, 1629
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-ernennungsfaelle",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Ernennung",
  title: "Rechtsnatur der Ernennung und Ernennungsfälle (§ 8 I BeamtStG)",
  description: "Die Ernennung als rechtsgestaltender, mitwirkungsbedürftiger und formgebundener VA (Urkundsprinzip, Aushändigung, Einwilligung – auch Minderjähriger) und die abschließenden vier Ernennungsfälle des § 8 I BeamtStG: Begründung, Umwandlung, anderes Amt mit anderem Grundgehalt.",
  start: "start",
  stations: [
    { id: "natur", label: "Rechtsnatur" },
    { id: "fall", label: "Ernennungsfall" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ernennungsfall bestimmt",
    neg: "Ergebnis: keine Ernennung nötig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Problemfall"
  },

  nodes: {

    start: {
      station: "natur",
      kind: "frage",
      norm: "§ 8 BeamtStG",
      title: "Rechtsnatur: Was für ein VA ist die Ernennung?",
      def: "Die Beamteneigenschaft kann <b>ausschließlich durch Ernennung</b> begründet werden. Die Ernennung ist ein <b>rechtsgestaltender, mitwirkungsbedürftiger und formgebundener Verwaltungsakt</b>:<br><br>• <b>Rechtsgestaltend:</b> legt die Rechtsstellung des Beamten in ihren Grundlagen fest → <b>bedingungs- und auflagenfeindlich</b>! Eine in der <b>Urkunde selbst</b> enthaltene Bedingung/Auflage macht die Ernennung <b>unwirksam</b> (Beispiel: „wirksam erst nach Entfernung der Gesichtstätowierung“).<br><br>• <b>Mitwirkungsbedürftig:</b> erfordert die <b>Einwilligung</b> des zu Ernennenden bei Aushändigung (formfrei; die <b>widerspruchslose Entgegennahme</b> genügt als konkludentes Einverständnis). §§ 104 ff. BGB gelten entsprechend: Einwilligung eines <b>Geschäftsunfähigen</b> ist nichtig (§ 105 BGB analog); <b>Minderjährige</b> (7–17 J.) brauchen die Einwilligung <b>beider Eltern</b> (§§ 106 ff., 1626, 1629 BGB – Skript-Fall: Protest des Vaters vor Aushändigung → Ernennung des 17-Jährigen unwirksam trotz Einverständnis der Mutter!).<br><br>• <b>Formgebunden:</b> <b>Urkundsprinzip</b> (§ 8 II 1 BeamtStG) – Details im Schema „Ernennungsurkunde“; Formstrenge soll jeden Zweifel ausschließen, <b>ob</b>, in <b>welcher BV-Art</b> und mit <b>welchem Amt</b> ernannt wurde.",
      options: [
        { label: "Welcher Ernennungsfall liegt vor?", next: "q_fall", tone: "pos" }
      ]
    },

    q_fall: {
      station: "fall",
      kind: "frage",
      norm: "§ 8 I Nr. 1–4 BeamtStG",
      title: "Die vier Ernennungsfälle (abschließend)",
      def: "Einer Ernennung bedarf es <b>nur</b> in den vier Fällen des § 8 I BeamtStG:<br><br>• <b>Nr. 1 – Begründung</b> eines BV („Einstellung“): Ein Nichtbeamter wird Beamter,<br>• <b>Nr. 2 – Umwandlung</b> in ein BV anderer Art: Wechsel des Grundstatus ohne Unterbrechung (z. B. Probe → Lebenszeit),<br>• <b>Nr. 3 – Verleihung eines anderen Amtes mit anderem Grundgehalt:</b> v. a. <b>Beförderung</b> (§ 21 LBG) und Rückernennung,<br>• <b>Nr. 4 – anderes Amt mit anderer Amtsbezeichnung</b> (Laufbahngruppenwechsel): mangels landesrechtlicher Regelung <b>in RLP nicht relevant</b>.<br><br><b>Klausurklassiker Übernahme:</b> Die Übernahme des Anwärters im unmittelbaren Anschluss an den Vorbereitungsdienst ist <b>KEINE Umwandlung</b>, sondern eine <b>Begründung</b> (Nr. 1) – denn das BV auf Widerruf endet vorher <b>kraft Gesetzes</b> mit der Laufbahnprüfung (§ 22 IV BeamtStG, § 30 IV LBG: mit Ablauf des Prüfungsmonats, frühestens nach der festgesetzten Ausbildungszeit)!",
      options: [
        { label: "Nichtbeamter wird Beamter", next: "e_begruendung", tone: "pos" },
        { label: "Statuswechsel ohne Unterbrechung", next: "q_umwandlung", tone: "neutral" },
        { label: "Anderes Amt, anderes Grundgehalt", next: "e_nr3", tone: "neutral" },
        { label: "Kein Ernennungsfall", next: "e_kein_fall", tone: "neg" }
      ]
    },

    q_umwandlung: {
      station: "fall",
      kind: "frage",
      norm: "§ 8 I Nr. 2, §§ 5 III, 22 II, III BeamtStG",
      title: "Umwandlung: Ist sie überhaupt zulässig?",
      def: "Bei der <b>Umwandlung (§ 8 I Nr. 2)</b> wechselt der Beamte ohne Unterbrechung von einem BV i. S. d. § 4 BeamtStG in ein anderes:<br><br><b>Klassiker:</b> Probe → Lebenszeit (nach bestandener Probezeit); auch Probe → Widerruf (Stadtsekretär beginnt das HöV-Studium als Anwärter).<br><br><b>Nicht möglich</b> ist die Umwandlung:<br>• eines <b>Ehrenbeamtenverhältnisses</b> in ein anderes BV bzw. umgekehrt (§ 5 III BeamtStG) – der ehrenamtliche Beigeordnete, der Beamter werden soll, wird <b>neu ernannt</b> (Begründung),<br>• eines BV <b>auf Zeit</b> in ein anderes BV bzw. umgekehrt (§ 22 II, III BeamtStG) – der Büroleiter, der zum Bürgermeister seiner VG gewählt wird, erhält eine <b>Begründungs-Ernennung</b> zum Beamten auf Zeit; sein bisheriges BV endet kraft Gesetzes (§ 22 III; Fortdauer-Anordnung nach § 30 III LBG möglich).",
      options: [
        { label: "Zulässige Umwandlung", next: "e_umwandlung", tone: "pos" },
        { label: "Ehrenbeamter / Zeit betroffen", next: "e_umwandlung_verbot", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 8 I Nr. 1 BeamtStG",
      title: "Begründung eines Beamtenverhältnisses (Einstellung)",
      text: "\"Ein Nichtbeamter wird Beamter\" – die Begründung (Einstellung) ist grundsätzlich nur im EINSTIEGSAMT zulässig (§ 19 II 1 LBG; Ausnahme: erstes/zweites Beförderungsamt, § 19 II 2 Nr. 1 i. V. m. § 9 LbVO – mit LPA-Beteiligung nach § 19 II Nr. 4 LBG bei höherem Amt).\n\nBeispiele (Skript):\n1. Einstellung als Anwärterin (BV auf Widerruf) nach der Schulzeit,\n2. Ernennung zum Landrat/Bürgermeister nach der Wahl (BV auf Zeit),\n3. WIEDEReinstellung nach früherer Entlassung auf eigenen Antrag,\n4. ÜBERNAHME der Anwärterin als Sekretärin nach dem Vorbereitungsdienst – Begründung, keine Umwandlung (das BaW-Verhältnis endete kraft Gesetzes, § 22 IV BeamtStG, § 30 IV LBG)!\n\nUrkundenformel (§ 8 II 2 Nr. 1 BeamtStG): Die Wörter \"unter Berufung in das Beamtenverhältnis\" MÜSSEN mit dem die Art des BV bestimmenden Zusatz (\"auf Probe\", \"auf Widerruf\" ...) enthalten sein – sonst droht Nichtigkeit nach § 11 I Nr. 1 (heilbar nach § 11 II Nr. 1)."
    },

    e_umwandlung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 8 I Nr. 2 BeamtStG",
      title: "Umwandlung des Beamtenverhältnisses",
      text: "Das bestehende BV wird ohne Unterbrechung in ein solches anderer Art umgewandelt – dem Beamten wird ein anderer Grundstatus verliehen.\n\nUrkundenformeln (§ 8 II 2 BeamtStG):\n• Umwandlung in das BV AUF LEBENSZEIT (Nr. 2): die Wörter \"... berufe ich ...\" mit dem die Art des neuen BV bestimmenden Zusatz – Beispiel: \"Im Namen der Stadt Mayen berufe ich Frau Stadtoberinspektorin XY in das Beamtenverhältnis auf Lebenszeit.\"\n• Umwandlung in ein ANDERES BV (außer Lebenszeit): empfohlen wird der Begründungstext – Beispiel: \"... ernenne ich Frau Stadtsekretärin XY zur Stadtinspektoranwärterin. Die Ernennung erfolgt unter Berufung in das Beamtenverhältnis auf Widerruf.\"\n\nKein Statusverlust: Besoldungsgruppe und Stufe bleiben unberührt (die Umwandlung ist keine Beförderung); beim Wechsel Probe → Widerruf (Studium) gilt aber: Anwärterbezüge statt Dienstbezüge, und der Stufenaufstieg wird gehemmt (§ 29 III 2 LBesG)."
    },

    e_umwandlung_verbot: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 5 III, § 22 II, III BeamtStG",
      title: "Umwandlungsverbot: Neubegründung nötig",
      text: "In diesen Fällen scheidet die Umwandlung aus – stattdessen BEGRÜNDUNG eines neuen BV (§ 8 I Nr. 1):\n\n• EHRENBEAMTE (§ 5 III BeamtStG): Umwandlung in ein anderes BV und umgekehrt unzulässig. Beispiel: Der ehrenamtliche Beigeordnete bewirbt sich erfolgreich auf eine Beamtenstelle → Neubegründung.\n\n• BEAMTE AUF ZEIT (§ 22 II, III BeamtStG): Der verbeamtete Büroleiter wird zum Bürgermeister seiner VG gewählt (§ 54 I GemO) → Begründung eines BV auf Zeit; sein BV auf Lebenszeit endet gleichzeitig KRAFT GESETZES (§ 22 III BeamtStG) – es sei denn, die oberste Dienstbehörde ordnet die Fortdauer neben dem BV auf Zeit an (§ 30 III LBG).\n\nWird bei einem anderen Dienstherrn ein BV auf WIDERRUF oder ein EHRENBEAMTENVERHÄLTNIS begründet, bleibt das alte BV dagegen bestehen (§ 22 II 2 BeamtStG – Ausnahme von der Entlassung kraft Gesetzes)."
    },

    e_nr3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 8 I Nr. 3 BeamtStG",
      title: "Anderes Amt mit anderem Grundgehalt (Beförderung/Rückernennung)",
      text: "Wird einem Beamten ein anderes statusrechtliches Amt mit anderem Grundgehalt verliehen, bedarf es einer Ernennung (§ 8 I Nr. 3 BeamtStG):\n\n• BEFÖRDERUNG (Hauptanwendungsfall, § 21 LBG): z. B. Sekretärin (A 6) → Obersekretärin (A 7). Voraussetzungen und Verbote: Schema \"Beförderung und Qualifizierung\".\n• RÜCKERNENNUNG: z. B. Rektor (A 13) lässt sich zum Lehrer (A 12) rückernennen; Amtsrat (A 12) will zurück in die Sachbearbeitung (A 11).\n\nUrkunde: KEINE Ernennungsformel – das neue Amt ergibt sich aus der in die Urkunde aufzunehmenden neuen Amtsbezeichnung (\"... ernenne ich Herrn Verbandsgemeindeoberinspektor XY zum Verbandsgemeindeamtmann.\").\n\nDaneben: Planstelleneinweisung (§ 49 II LHO, § 20 GemHVO) – für den Beginn des höheren Besoldungsanspruchs (§ 4 II LBesG, Fach Besoldungsrecht)."
    },

    e_kein_fall: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 8 I BeamtStG",
      title: "Kein Ernennungsfall – keine Ernennung nötig",
      text: "Die vier Fälle des § 8 I BeamtStG sind abschließend. KEINE Ernennung erfordern insbesondere:\n\n• UMSETZUNG, ABORDNUNG, VERSETZUNG (Personalverteilungsmaßnahmen – das statusrechtliche Amt bleibt unberührt; Schema \"Personalverteilungsmaßnahmen\"),\n• STUFENAUFSTIEG im Grundgehalt (§ 29 LBesG – kraft Gesetzes),\n• Übertragung eines anderen DIENSTPOSTENS derselben Wertigkeit,\n• Verleihung einer AMTSZULAGE? Doch – Ernennungsfall! Die Amtszulage gilt als Bestandteil des Grundgehalts (§ 46 II LBesG), ihre Verleihung ist ein Amt mit anderem (End-)Grundgehalt → Ernennung nach § 8 I Nr. 3 BeamtStG durch Urkunde,\n• Nr. 4 (andere Amtsbezeichnung/Laufbahngruppenwechsel) ist in RLP mangels landesrechtlicher Regelung NICHT relevant.\n\nMerke: Maßnahmen ohne Ernennungscharakter sind trotzdem rechtsschutzfähig – je nach Grund-/Betriebsverhältnis als VA oder per beamtenrechtlichem Widerspruch (Schema \"Rechtsschutz im Beamtenrecht\")."
    }
  }
});
