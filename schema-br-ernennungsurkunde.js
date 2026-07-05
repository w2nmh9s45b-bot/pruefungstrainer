/*
 * Prüfungsschema: Ernennungsurkunde und zeitliche Wirksamkeit
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor) 2024/2025, Ziff. 3.4-3.5
 *    (7-Schritte-Prüfungsschema "Urkunde", Urkundenmuster ZAL-Konferenz 27.09.2012)
 *  - Gesetze: BeamtStG § 8 II, IV; LBG § 10 II; LBesG §§ 23, 25; LbVO § 21
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-ernennungsurkunde",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Ernennung",
  title: "Ernennungsurkunde und zeitliche Wirksamkeit (§ 8 II BeamtStG)",
  description: "Das Prüfungsschema zur Urkunde: Dienstherr – Adressat – Wirksamkeitszeitpunkt (§ 10 II LBG, Rückwirkungsverbot § 8 IV BeamtStG) – Amtsbezeichnung – Ernennungsformel nach § 8 II 2 BeamtStG – Schluss/Urkundsprinzip; dazu Aushändigung und innere/äußere Wirksamkeit.",
  start: "start",
  stations: [
    { id: "kopf", label: "Wer/Wen" },
    { id: "zeit", label: "Wann" },
    { id: "inhalt", label: "Was/Formel" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Urkunde korrekt",
    neg: "Ergebnis: Urkundenfehler",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Wirksamkeitsfrage"
  },

  nodes: {

    start: {
      station: "kopf",
      kind: "frage",
      norm: "§ 2 BeamtStG, § 8 II BeamtStG",
      title: "Schritte 1–3: Dienstherr („wer?“) und Adressat („wen?“)",
      def: "Die Urkunde folgt einem festen Aufbau (Prüfungsschema aus dem Skript, Muster nach dem Beschluss der Zentralabteilungsleiterkonferenz v. 27.09.2012 – <b>Wortwahl und Satzbau exakt übernehmen</b>):<br><br><b>1. Dienstherr („Im Namen der/des …“):</b> Die Urkunde muss den <b>Dienstherrn</b> ausweisen – immer eine <b>juristische Person</b> des öffentlichen Rechts mit Dienstherrnfähigkeit (§ 2 BeamtStG). <b>Niemals</b> Dienstherr: Verwaltungsbehörden („Stadtverwaltung“, „Verbandsgemeindeverwaltung“!) oder natürliche Personen (Bürgermeister, Landrat). Richtig: „Im Namen der Stadt Koblenz“, „Im Namen der Verbandsgemeinde Vorderlahn“.<br><br><b>2./3. Adressat:</b> Angabe des zu Ernennenden („Herrn/Frau …“) – Bestimmtheit; reine Schreibfehler im Namen sind offenbare Unrichtigkeiten (korrigierbar), es sei denn, eine <b>andere existierende Person</b> trägt den falschen Namen (Bestimmtheitsproblem).",
      options: [
        { label: "Schritt 4: Wirksamkeit („wann?“)", next: "q_zeit", tone: "pos" }
      ]
    },

    q_zeit: {
      station: "zeit",
      kind: "frage",
      norm: "§ 10 II LBG, § 8 IV BeamtStG",
      title: "Schritt 4: Zeitliche Wirksamkeit – „mit Wirkung vom …“",
      def: "Die Ernennung wird <b>mit dem Tag der Aushändigung</b> wirksam, wenn nicht in der Urkunde ausdrücklich ein <b>späterer</b> Tag bestimmt ist (§ 10 II LBG).<br><br>• <b>Späterer Tag zulässig</b> (Umkehrschluss aus § 8 IV BeamtStG): „… mit Wirkung vom 01.07.2024 …“ bei Aushändigung am 29.06.<br>• <b>Rückwirkung unzulässig:</b> Die Ernennung auf einen zurückliegenden Zeitpunkt ist unzulässig und <b>„insoweit“ unwirksam</b> (§ 8 IV BeamtStG) – die Urkunde ist nur bezüglich des zurückliegenden Zeitraums unwirksam, <b>ab Aushändigung wirkt sie</b> (= „teilweise unwirksame Ernennung“).<br><br><b>Innere und äußere Wirksamkeit:</b> Urkunde am 15.06. ausgehändigt „mit Wirkung vom 01.07.“ → <b>äußere</b> Wirksamkeit am 15.06. (Behörde ist gebunden – Widerruf nur nach den Regeln über begünstigende VAs, § 12 BeamtStG beachten), <b>innere</b> Wirksamkeit am 01.07. (erst dann Rechte/Pflichten, Besoldung, amtsangemessene Beschäftigung).",
      options: [
        { label: "Schritte 5–6: Amt und Formel", next: "q_formel", tone: "pos" },
        { label: "Rückwirkende Ernennung", next: "e_rueckwirkung", tone: "warn" }
      ]
    },

    q_formel: {
      station: "inhalt",
      kind: "frage",
      norm: "§ 8 II 2 BeamtStG, § 25 LBesG",
      title: "Schritte 5–6: Amtsbezeichnung („zu was?“) und Ernennungsformel",
      def: "<b>5. Amts-/Dienstbezeichnung:</b> Einstellung grds. nur im Einstiegsamt (§ 19 II 1 LBG); die Amtsbezeichnung ergibt sich aus (§ 68 I LBG i. V. m.) § 25 I LBesG, § 23 I, II LBesG i. V. m. Anlage 1 (Grundamtsbezeichnung) und Anlage 2 (Dienstherrnzusatz: „Stadt-“, „Kreis-“, „Verbandsgemeinde-“). Beamte auf Widerruf führen die <b>Dienstbezeichnung</b> mit Zusatz <b>„-anwärter“</b> (§ 21 LbVO).<br><br><b>6. Ernennungsformel (§ 8 II 2 BeamtStG – der Ernennungsfall bestimmt die Formel!):</b><br>• <b>Begründung (Nr. 1):</b> zwingend „<b>unter Berufung in das Beamtenverhältnis</b>“ + Art des BV („auf Probe“/„auf Widerruf“/„auf Zeit“/„auf Lebenszeit“),<br>• <b>Umwandlung in das BV auf Lebenszeit (Nr. 2):</b> „<b>… berufe ich …</b> in das Beamtenverhältnis auf Lebenszeit“,<br>• Umwandlung in ein anderes BV: empfohlen der Begründungstext,<br>• <b>Beförderung (Nr. 3):</b> <b>keine Formel</b> – das neue Amt ergibt sich aus der neuen Amtsbezeichnung.",
      options: [
        { label: "Schritt 7: Schluss/Urkundsprinzip", next: "q_schluss", tone: "pos" },
        { label: "Formel fehlerhaft", next: "e_formelfehler", tone: "neg" }
      ]
    },

    q_schluss: {
      station: "inhalt",
      kind: "frage",
      norm: "§ 8 II 1 BeamtStG",
      title: "Schritt 7: Schluss und Aushändigung",
      def: "<b>Schluss (Urkundsprinzip):</b> Ausstellungsort, Ausstellungsdatum, (korrektes) Dienstsiegel, Amtsbezeichnung des Unterzeichners – und <b>zwingend die eigenhändige Unterschrift</b> des Ernennungsberechtigten (bloße Namenswiedergabe, Paraphe, Unterschriftsstempel oder „gezeichnet …“ genügen NICHT!). Das <b>Dienstsiegel</b> ist dagegen <b>kein</b> zwingendes Wesensmerkmal (nur VV) – sein Fehlen schadet der Wirksamkeit nicht.<br><br><b>Aushändigung (§ 8 II 1 BeamtStG</b> – lex specialis zu § 41 VwVfG): Verschaffung des <b>körperlichen Besitzes</b> mit Wissen und Willen der Behörde und Besitzannahmewillen des Ernannten – klassisch von <b>Hand zu Hand gegen Empfangsbekenntnis</b>. Bei Verhinderung: <b>eigenhändig</b> zuzustellender Einschreibebrief gegen Rückschein oder PZU <b>unter Ausschluss der Ersatzzustellung</b>. <b>Einfacher Brief/Briefkasten = KEINE Aushändigung</b> → Nichternennung! Die Aushändigung wirkt <b>konstitutiv</b>.",
      options: [
        { label: "Urkunde vollständig + ausgehändigt", next: "e_ok", tone: "pos" },
        { label: "Unterschrift/Aushändigung mangelhaft", next: "e_nullum", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ok: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 8 II BeamtStG, § 10 II LBG",
      title: "Wirksame Ernennung",
      text: "Alle sieben Schritte sind eingehalten – Musterurkunde (Begründung):\n\n\"Ernennungsurkunde – Im Namen der Stadt Koblenz ernenne ich Herrn Martin Max mit Wirkung vom 01.07.2024 zum Stadtinspektor. Die Ernennung erfolgt unter Berufung in das Beamtenverhältnis auf Probe. – Koblenz, 29.06.2024, (DS), [eigenhändige Unterschrift], Oberbürgermeister\"\n\nMerkhilfe: 1. Wer? (Dienstherr) – 2. Wen? (Adressat) – 3./4. Wann? (Wirksamkeit) – 5. Was? (Amtsbezeichnung) – 6. Formel! (§ 8 II 2) – 7. Schluss! (Ort, Datum, Unterschrift).\n\nSkript-Übungsfall (5 Fehler): \"Im Namen der VerbandsgemeindeVERWALTUNG\" (keine Dienstherrnfähigkeit!), Ernennung zum OBERsekretär (Einstellung nur im EA: Sekretär), \"in ein Beamtenverhältnis\" ohne Art des BV (Formelverstoß), Unterschriftsstempel (keine eigenhändige Unterschrift), Einwurf in den Briefkasten durch Boten (keine Aushändigung)."
    },

    e_rueckwirkung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 8 IV BeamtStG",
      title: "Rückwirkende Ernennung: teilweise unwirksam",
      text: "Benennt die Urkunde einen in der Vergangenheit liegenden Wirksamkeitstag, ist die Ernennung \"insoweit\" unwirksam (§ 8 IV BeamtStG):\n\n• für den ZURÜCKLIEGENDEN Zeitraum entfaltet sie keine Wirkung,\n• AB AUSHÄNDIGUNG ist sie wirksam (deshalb \"teilweise unwirksame Ernennung\").\n\nBesoldungsfolge (Fach Besoldungsrecht): Der Besoldungsanspruch beginnt erst mit der tatsächlichen Wirksamkeit (§ 4 II 1 LBesG) – die Urkunden-Rückwirkung hilft nicht (Übung: Urkunde am 06.07. ausgehändigt \"mit Wirkung zum 01.07.\" → Bezüge erst ab 06.07., Teilmonatsberechnung § 4 III LBesG). Bei Beförderungen kann aber die rückwirkende PLANSTELLENEINWEISUNG (§ 49 II 2 LHO, max. 3 Monate) den Anspruch auf die höhere Besoldung vorverlegen (§ 4 II 2 LBesG)."
    },

    e_formelfehler: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 11 I Nr. 1, II Nr. 1 BeamtStG",
      title: "Formelverstoß: grundsätzlich nichtig – aber heilbar",
      text: "Entspricht die Urkunde nicht dem vorgeschriebenen Wortlaut des § 8 II BeamtStG (oder ist die Form fehlerhaft), ist die Ernennung NICHTIG (§ 11 I Nr. 1 BeamtStG).\n\nABER Heilung nach § 11 II Nr. 1 BeamtStG (\"von Anfang an als wirksam anzusehen\"), wenn\n1. aus Urkunde oder Akteninhalt die beabsichtigte Ernennung HINREICHEND DEUTLICH wird,\n2. die sonstigen Ernennungsvoraussetzungen vorliegen und\n3. die zuständige Stelle die Wirksamkeit SCHRIFTLICH BESTÄTIGT.\n\nSkript-Beispiel: \"zum Probebeamten berufen\" statt \"unter Berufung in das Beamtenverhältnis auf Probe\" → grundsätzlich nichtig, aber aus der Urkunde ist das gewollte BV auf Probe hinreichend erkennbar → schriftliche Bestätigung genügt zur Heilung.\n\nBei Wahlbeamten: Fehlt die Zeitdauer der Verbeamtung in der Urkunde (z. B. \"acht Jahre\", § 52 I GemO), ist das über die landesrechtliche Bestimmung der Zeitdauer geheilt (§ 11 II Nr. 1 Alt. 2 BeamtStG).\n\nWeiter im Schema \"Nichtigkeit der Ernennung\"."
    },

    e_nullum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 8 II 1 BeamtStG",
      title: "Nichternennung (Nullum)",
      text: "Fehlt es an der eigenhändigen Unterschrift oder an einer ordnungsgemäßen Aushändigung, liegt eine NICHTERNENNUNG vor – weniger als ein nichtiger VA, es entsteht überhaupt kein Beamtenverhältnis (konstitutive Wirkung der Aushändigung).\n\nDie fünf Nullum-Fälle (Skript):\n1. fehlende DIENSTHERRNFÄHIGKEIT der Ernennungsbehörde (private GmbH, Stiftung ohne Verleihung),\n2. fehlende URKUNDENFORM, insbesondere keine eigenhändige Unterschrift (\"gezeichnet, Bürgermeister B\"),\n3. fehlende wirksame EINWILLIGUNG (Geschäftsunfähiger; Minderjähriger ohne Einwilligung beider Eltern),\n4. fehlende ordnungsgemäße AUSHÄNDIGUNG (einfacher Brief, Briefkasten-Einwurf, mündliche Ernennung \"per Handschlag\"),\n5. kein ernennungsfähiges BEAMTENVERHÄLTNIS (\"Beamter auf Abruf\", \"auf Honorarbasis\" – § 4 BeamtStG ist abschließend).\n\nFolge: keine Heilung möglich; die Ernennung muss komplett neu (korrekt) vollzogen werden. Zu Amtshandlungen und gezahlten Bezügen: Schema \"Fehlerfolgen der Ernennung\"."
    }
  }
});
