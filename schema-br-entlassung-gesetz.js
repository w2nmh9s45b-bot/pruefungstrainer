/*
 * Prüfungsschema: Entlassung kraft Gesetzes (§ 22 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 4 - Beendigung von Beamtenverhältnissen" (Minor), Ziff. 4.3.1
 *  - Gesetze: BeamtStG § 22; LBG § 30; StAG § 25; APOVwD-E2/3 §§ 8, 23
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-entlassung-gesetz",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Beendigung",
  title: "Entlassung kraft Gesetzes (§ 22 BeamtStG)",
  description: "Die automatischen Entlassungstatbestände: Verlust der Staatsangehörigkeit, anderes öffentlich-rechtliches Dienst- oder Amtsverhältnis (mit den drei Ausnahmen), Beamter auf Zeit beim selben Dienstherrn und das Ende des Widerrufs-BV mit der Laufbahnprüfung (§ 30 IV LBG).",
  start: "start",
  stations: [
    { id: "einstieg", label: "Einstieg" },
    { id: "tatbestand", label: "Tatbestand" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: entlassen kraft Gesetzes",
    neg: "Ergebnis: keine Entlassung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Ausnahme greift"
  },

  nodes: {

    start: {
      station: "einstieg",
      kind: "frage",
      norm: "§ 22 BeamtStG, § 30 I LBG",
      title: "Systematik: „... sind entlassen ...“",
      def: "Die Entlassung kraft Gesetzes tritt <b>automatisch</b> ein – <b>ohne Entlassungsverfügung</b> (Gesetzesformulierung „… sind entlassen …“).<br><br>Der Dienstherr hat in den Fällen des § 22 I–III BeamtStG aber den <b>Tag der Beendigung verbindlich festzustellen</b> (§ 30 I LBG) – deklaratorisch, im Interesse der Rechtsklarheit.<br><br><b>Abgrenzung:</b> „… sind <b>zu entlassen</b>/können entlassen werden …“ = Entlassung durch VA (§ 23 – eigenes Schema).",
      options: [
        { label: "Staatsangehörigkeit verloren", next: "e_staatsang", tone: "neutral" },
        { label: "Neues Dienst-/Amtsverhältnis", next: "q_neues_dv", tone: "pos" },
        { label: "BaZ beim selben Dienstherrn", next: "e_selber_dh", tone: "neutral" },
        { label: "Laufbahnprüfung (Anwärter)", next: "q_pruefung", tone: "neutral" }
      ]
    },

    q_neues_dv: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 22 II BeamtStG",
      title: "Anderes öffentlich-rechtliches Dienst- oder Amtsverhältnis: Greift eine Ausnahme?",
      def: "Der Beamte ist kraft Gesetzes entlassen, wenn ein öffentlich-rechtliches Dienst- oder Amtsverhältnis zu einem <b>anderen Dienstherrn</b> (oder zu einer Einrichtung ohne Dienstherrnfähigkeit, z. B. EU) begründet wird – Beamte können Pflichten nur <b>einem</b> Dienstherrn erbringen. Erfasst: anderes Beamten-, Richter- oder Soldatenverhältnis.<br><br><b>Praxis „feindliche Übernahme“:</b> Können sich zwei Dienstherren nicht über die Versetzung einigen, kann der neue Dienstherr einfach ernennen – das alte BV endet <b>zeitgleich</b> kraft Gesetzes (Beispiel: VG-Inspektor M erhält die Urkunde des Landkreises; auch: Kreisbeamter K wird Bürgermeister einer anderen Gemeinde).<br><br><b>Drei Ausnahmen (§ 22 II 1 Hs. 2, S. 2):</b><br>1. Die <b>Fortdauer</b> des BV wird <b>im Einvernehmen mit dem neuen Dienstherrn angeordnet</b> (oberste Dienstbehörde, § 30 II LBG),<br>2. Landesrecht bestimmt etwas anderes (in RLP <b>nicht</b> geschehen),<br>3. beim anderen Dienstherrn wird nur ein BV <b>auf Widerruf</b> oder ein <b>Ehrenbeamtenverhältnis</b> begründet.",
      options: [
        { label: "Keine Ausnahme", next: "e_neues_dv", tone: "pos" },
        { label: "Ausnahme greift", next: "e_ausnahme", tone: "warn" }
      ]
    },

    q_pruefung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 22 IV BeamtStG, § 30 IV LBG",
      title: "Anwärter: Bestanden oder endgültig nicht bestanden?",
      def: "Das BV auf Widerruf im Vorbereitungsdienst endet kraft Gesetzes mit <b>Ablauf des Tages</b> der Ablegung oder des endgültigen Nichtbestehens der Laufbahnprüfung – soweit Landesrecht nichts anderes bestimmt (§ 22 IV BeamtStG).<br><br><b>RLP-Modifikation (§ 30 IV LBG):</b><br>• <b>BESTEHEN:</b> Entlassung erst mit <b>Ablauf des Prüfungsmonats</b>, frühestens aber mit Ablauf der für den Vorbereitungsdienst <b>festgesetzten Zeit</b> (§ 30 IV 2 LBG; Ausbildungsdauer: 2. EA zwei Jahre, § 8 I APOVwD-E2/3; 3. EA drei Jahre, § 23 I APOVwD-E2/3),<br>• <b>endgültiges NICHTBESTEHEN</b> (auch einer vorgeschriebenen Zwischenprüfung): mit <b>Ablauf des Tages</b> der Feststellung (§ 30 IV 1 Nr. 2 LBG). Flankierend: Anwärterbezüge bis Monatsende (§ 58 LBesG), Beihilfe bis Monatsende (§ 3 I BVO).",
      options: [
        { label: "Bestanden", next: "e_bestanden", tone: "pos" },
        { label: "Endgültig nicht bestanden", next: "e_nichtbestanden", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_staatsang: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 I Nr. 1 BeamtStG",
      title: "Verlust der Staatsangehörigkeit",
      text: "Verliert der Beamte NACH Begründung des BV die förderliche Staatsangehörigkeit (§ 7 I Nr. 1 BeamtStG), ist er kraft Gesetzes entlassen (§ 22 I Nr. 1 BeamtStG).\n\nSkript-Beispiel: VG-Inspektor V nimmt die brasilianische Staatsangehörigkeit an → verliert nach § 25 I StAG automatisch die deutsche → gleichzeitig kraft Gesetzes entlassen.\n\nAbgrenzung (Rückblick): Fehlte die Staatsangehörigkeit schon VOR/BEI der Ernennung, ist die Ernennung NICHTIG (§ 11 I Nr. 3 Bst. a i. V. m. § 7 I Nr. 1 BeamtStG) – Schema \"Nichtigkeit der Ernennung\".\n\nDaneben praktisch bedeutungslos: § 22 I Nr. 2 (Erreichen der Altersgrenze ohne Ruhestand mangels versorgungsrechtlicher Wartezeit – wegen der Höchstaltersgrenzen des § 19 LBG in RLP ohne Relevanz).\n\nVerfahren: Tag der Beendigung feststellen (§ 30 I LBG)."
    },

    e_neues_dv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 II BeamtStG",
      title: "Entlassung mit Begründung des neuen Verhältnisses",
      text: "Mit der Wirksamkeit der neuen Ernennung endet das bisherige BV kraft Gesetzes – zeitgleich und automatisch (§ 22 II BeamtStG).\n\nPraxisfolgen:\n• Der \"Wechsel per Ernennung\" ersetzt faktisch die verweigerte Versetzung (\"feindliche Übernahme\") – Kostenverteilung über den Versorgungslastenteilungs-Staatsvertrag,\n• der alte Dienstherr stellt den Beendigungstag fest (§ 30 I LBG),\n• Besoldung: Der Anspruch gegen den alten Dienstherrn endet mit Ablauf des Ausscheidenstages (§ 4 IV LBesG), der neue beginnt mit der Wirksamkeit der Ernennung (§ 4 II 1 LBesG); Doppelzahlungen sind nach § 16 II LBesG rückabzuwickeln,\n• der Regelbeginn des Stufenaufstiegs bleibt unverändert (\"ein Leben lang\", § 29 II 1 LBesG)."
    },

    e_selber_dh: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 III BeamtStG, § 30 III LBG",
      title: "Beamter auf Zeit beim selben Dienstherrn",
      text: "Wird der Beamte bei seinem EIGENEN Dienstherrn in ein BV auf Zeit berufen, endet das bisherige BV ebenfalls kraft Gesetzes (§ 22 III BeamtStG).\n\nSkript-Beispiel: Büroleiter B (Amtsrat auf Lebenszeit der VG V) wird zum hauptamtlichen Bürgermeister DIESER VG gewählt → mit der Ernennung zum Beamten auf Zeit endet sein BV auf Lebenszeit.\n\nABER: Landesrecht kann abweichen – § 30 III LBG: Die OBERSTE DIENSTBEHÖRDE kann die FORTDAUER des ursprünglichen BV neben dem BV auf Zeit ANORDNEN (wichtig für die Rückkehrperspektive nach der Amtszeit!).\n\nOhne Anordnung gilt: Nach Ablauf der Amtszeit ist der frühere Lebenszeitstatus nicht automatisch wieder da – deshalb in der Praxis rechtzeitig an § 30 III LBG denken."
    },

    e_ausnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 22 II 1 Hs. 2, S. 2 BeamtStG",
      title: "Ausnahme: Keine Entlassung kraft Gesetzes",
      text: "Das bisherige BV besteht fort, weil eine der drei Ausnahmen greift:\n\n1. FORTDAUER-ANORDNUNG im Einvernehmen mit dem neuen Dienstherrn (zuständig: oberste Dienstbehörde, § 30 II LBG) – z. B. bei befristeten Verwendungen,\n2. abweichendes Landesrecht (in RLP nicht vorhanden),\n3. das neue Verhältnis ist nur ein BV AUF WIDERRUF oder ein EHRENBEAMTENVERHÄLTNIS beim anderen Dienstherrn (z. B. der Stadtbeamte wird Ortsbürgermeister einer anderen Gemeinde – sein Hauptamt bleibt).\n\nKonsequenz: Der Beamte steht (vorübergehend) in zwei Verhältnissen; Rechte und Pflichten aus dem ruhenden/fortbestehenden BV sind nach der jeweiligen Anordnung abzugrenzen."
    },

    e_bestanden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 IV BeamtStG, § 30 IV LBG",
      title: "Prüfung bestanden: Ende mit Ablauf des Prüfungsmonats",
      text: "Das BV auf Widerruf endet kraft Gesetzes mit ABLAUF DES MONATS, in dem die Laufbahnprüfung bestanden wurde – frühestens mit Ablauf der festgesetzten Vorbereitungsdienstzeit (§ 30 IV LBG).\n\nSkript-Beispiel: Stadtsekretäranwärterin S besteht am 03.06. die Prüfung für das 2. EA → BV endet mit Ablauf des 30.06. (zugleich Ende der zweijährigen Ausbildungszeit, § 8 I APOVwD-E2/3, § 30 IV 2 LBG).\n\nAnschluss: Die ÜBERNAHME in das BV auf Probe ist eine BEGRÜNDUNG (§ 8 I Nr. 1 BeamtStG) – dazwischen liegt keine \"Lücke\", wenn die Ernennung zum Monatsersten erfolgt. Besoldung: Anwärterbezüge bis Monatsende (§ 58 LBesG), ab Ernennung Dienstbezüge; mit der Probe-Ernennung beginnt der Stufenaufstieg (§ 29 II 1 LBesG)."
    },

    e_nichtbestanden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 30 IV 1 Nr. 2 LBG",
      title: "Endgültig nicht bestanden: Ende mit Tagesablauf",
      text: "Beim endgültigen Nichtbestehen der Laufbahnprüfung (oder einer vorgeschriebenen Zwischenprüfung) endet das BV auf Widerruf mit ABLAUF DES TAGES der Feststellung (§ 30 IV 1 Nr. 2 LBG).\n\nSkript-Beispiel: Am 02.04. wird das endgültige Nichtbestehen festgestellt → BV endet mit Ablauf dieses Tages.\n\nSoziale Abfederung:\n• Anwärterbezüge werden bis zum Ende des laufenden Monats weitergezahlt (§ 58 LBesG),\n• Beihilfeansprüche bestehen bis Monatsende fort (§ 3 I BVO),\n• Nachversicherung in der gesetzlichen Rentenversicherung (§§ 181 ff. SGB VI).\n\nBesoldungsrechtlicher Nebenschauplatz: Beim Nichtbestehen kann der Anwärtergrundbetrag für eine Verlängerungszeit gekürzt werden (§ 62 LBesG – Fach Besoldungsrecht)."
    }
  }
});
