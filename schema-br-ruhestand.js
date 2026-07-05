/*
 * Prüfungsschema: Eintritt und Versetzung in den Ruhestand
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 4 - Beendigung von Beamtenverhältnissen" (Minor), Ziff. 4.6
 *  - Gesetze: BeamtStG §§ 25-28, 32; LBG §§ 37, 38, 39, 44-48
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-ruhestand",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Beendigung",
  title: "Eintritt und Versetzung in den Ruhestand (§§ 25, 26 BeamtStG)",
  description: "Die drei Wege in den Ruhestand: Eintritt mit der Regelaltersgrenze (67, §§ 25 BeamtStG, 37 LBG – mit Hinausschieben nach § 38 LBG), Antragsruhestand ab 63 (§ 39 LBG) und Dienstunfähigkeit (§ 26 BeamtStG – mit dem Vorrang der anderweitigen Verwendung und der begrenzten Dienstfähigkeit § 27); stets: Wartezeit fünf Jahre (§ 32 BeamtStG).",
  start: "start",
  stations: [
    { id: "weg", label: "Weg" },
    { id: "voraussetzung", label: "Voraussetzungen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ruhestand",
    neg: "Ergebnis: kein Ruhestand",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Alternative"
  },

  nodes: {

    start: {
      station: "weg",
      kind: "frage",
      norm: "§ 21 Nr. 4 BeamtStG",
      title: "Welcher Weg in den Ruhestand?",
      def: "Der Ruhestand ist keine echte Beendigung: Das aktive BV wandelt sich in ein <b>Ruhestandsbeamtenverhältnis</b> (Befreiung von der Dienstleistungspflicht; rechtliche Einheit – die Alimentation läuft als <b>Versorgung</b> weiter, LBeamtVG).<br><br><b>Begriffe:</b> „<b>Eintritt</b>“ = wegen Erreichens der <b>Altersgrenze</b> (§ 25 BeamtStG); „<b>Versetzung</b>“ = <b>vor</b> der Altersgrenze – auf <b>Antrag</b> (§ 39 LBG) oder wegen <b>Dienstunfähigkeit</b> (§ 26 BeamtStG).<br><br><b>Stets erforderlich: versorgungsrechtliche Wartezeit</b> – die Versetzung in den Ruhestand setzt eine <b>Dienstzeit von mindestens fünf Jahren</b> voraus (§ 32 BeamtStG, § 48 LBG, § 11 I Nr. 1 LBeamtVG); fehlt sie, bleibt statt des Ruhestands nur die <b>Entlassung</b> (§ 23 I Nr. 2 bzw. Nr. 3 BeamtStG).",
      options: [
        { label: "Altersgrenze erreicht", next: "e_altersgrenze", tone: "pos" },
        { label: "Antrag (vorzeitig)", next: "e_antrag", tone: "neutral" },
        { label: "Dienstunfähigkeit", next: "q_du", tone: "warn" }
      ]
    },

    q_du: {
      station: "voraussetzung",
      kind: "frage",
      norm: "§ 26 I BeamtStG",
      title: "Dienstunfähigkeit: Liegt sie vor – und ist sie „alternativlos“?",
      def: "<b>Dienstunfähig (§ 26 I 1 BeamtStG):</b> wer wegen seines körperlichen Zustands oder aus gesundheitlichen Gründen zur Erfüllung der Dienstpflichten <b>dauernd unfähig</b> ist. Als dienstunfähig <b>kann</b> auch angesehen werden, wer infolge Erkrankung innerhalb von <b>sechs Monaten mehr als drei Monate</b> keinen Dienst getan hat und keine Aussicht auf volle Wiederherstellung binnen der landesrechtlichen Frist besteht (§ 26 I 2; § 44 LBG).<br><br><b>Vorrang der Weiterverwendung („Rehabilitation vor Versorgung“):</b><br>• In den Ruhestand wird <b>nicht</b> versetzt, wer <b>anderweitig verwendbar</b> ist (§ 26 I 3): Übertragung eines anderen Amtes derselben oder einer anderen Laufbahn – ohne Zustimmung zulässig bei gleichem Dienstherrn, mindestens gleichem Grundgehalt und erwartbarer gesundheitlicher Eignung (§ 26 II); ggf. Qualifizierungspflicht; auch <b>geringerwertige Tätigkeit</b> zumutbar (§ 26 III),<br>• <b>begrenzte Dienstfähigkeit (§ 27):</b> Kann der Beamte noch mindestens die <b>Hälfte</b> der regelmäßigen Arbeitszeit leisten, ist von der Ruhestandsversetzung <b>abzusehen</b> – Arbeitszeit wird herabgesetzt (Besoldung: § 9 III, Zuschlag § 44 LBesG).",
      options: [
        { label: "DU (+), keine Alternative", next: "q_status", tone: "pos" },
        { label: "Anderweitig verwendbar", next: "e_verwendung", tone: "warn" },
        { label: "Noch ≥ 50 % dienstfähig", next: "e_begrenzt", tone: "warn" }
      ]
    },

    q_status: {
      station: "voraussetzung",
      kind: "frage",
      norm: "§§ 26, 28 BeamtStG, § 23 I Nr. 2, 3 BeamtStG",
      title: "Status und Wartezeit: Ruhestand überhaupt möglich?",
      def: "• <b>Lebenszeit-/Zeitbeamte:</b> sind bei Dienstunfähigkeit in den Ruhestand zu <b>versetzen</b> (§ 26 I BeamtStG) – wenn die <b>Wartezeit</b> (5 Jahre) erfüllt ist; sonst <b>Entlassung</b> (§ 23 I Nr. 2),<br>• <b>Probebeamte (§ 28):</b> Ruhestand nur als <b>Pflicht</b> bei Dienstunfähigkeit infolge Krankheit/Verwundung, die <b>ohne grobes Verschulden bei Ausübung oder aus Veranlassung des Dienstes</b> zugezogen wurde (I); im Übrigen „<b>kann</b>“ (II – Ermessen; Skript-Fall P: trotz erfüllter Wartezeit Ermessensentscheidung gegen den Ruhestand → zwingende Entlassung nach § 23 I Nr. 3),<br>• <b>Widerrufsbeamte:</b> <b>niemals</b> Ruhestand (keine gesetzliche Grundlage) → bei dauernder Dienstunfähigkeit Entlassung (§ 23 I Nr. 3).",
      options: [
        { label: "Ruhestand zulässig", next: "e_du_ruhestand", tone: "pos" },
        { label: "Wartezeit/Status fehlt", next: "e_entlassung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_altersgrenze: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 25 BeamtStG, §§ 37, 38 LBG",
      title: "Eintritt in den Ruhestand mit der Altersgrenze",
      text: "Lebenszeitbeamte treten mit Erreichen der Altersgrenze in den Ruhestand (§ 25 BeamtStG) – Regelaltersgrenze in RLP: VOLLENDUNG DES 67. LEBENSJAHRES (§ 37 I LBG; Übergangsstaffeln für ältere Jahrgänge beachten).\n\n• Voraussetzung auch hier: versorgungsrechtliche Wartezeit von fünf Jahren (§ 32 BeamtStG, § 48 I LBG) – sonst Entlassung kraft Gesetzes (§ 22 I Nr. 2 BeamtStG; in RLP wegen der Höchstaltersgrenzen praktisch bedeutungslos,\n• HINAUSSCHIEBEN des Ruhestandsbeginns: auf Antrag oder mit Zustimmung des Beamten um bis zu DREI JAHRE (§ 38 LBG) – besoldungsrechtlich attraktiv: Zuschlag von 8 % des Grundgehalts (§ 43 LBesG),\n• der Eintritt erfolgt kraft Gesetzes zum Ablauf des Monats, in dem die Altersgrenze erreicht wird (§ 37 LBG).\n\nDanach: Versorgung nach dem LBeamtVG (Ruhegehalt), Amtsbezeichnung mit Zusatz \"a. D.\" (§ 68 III LBG)."
    },

    e_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 39 LBG",
      title: "Antragsruhestand (vorzeitig)",
      text: "Beamte können auf ANTRAG vorzeitig in den Ruhestand versetzt werden:\n\n• allgemein ab Vollendung des 63. LEBENSJAHRES (§ 39 I LBG),\n• SCHWERBEHINDERTE Beamte bereits mit Vollendung des 60. bzw. 61. Lebensjahres (§ 39 II, III LBG – nach Jahrgangsstaffel),\n• Wartezeit: fünf Jahre (§ 32 BeamtStG, § 48 I LBG).\n\nVersorgungsrechtliche Konsequenz (LBeamtVG): Der vorgezogene Ruhestand führt regelmäßig zu einem VERSORGUNGSABSCHLAG (Minderung des Ruhegehalts je Jahr des Vorziehens) – für die Beratung in der Personalpraxis der entscheidende Hinweis.\n\nAbzugrenzen vom Hinausschieben (§ 38 LBG) und von Altersteilzeitmodellen (§§ 75a ff. LBG mit Altersteilzeitzuschlag nach § 42 LBesG – Fach Besoldungsrecht)."
    },

    e_du_ruhestand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 BeamtStG, §§ 44–47 LBG",
      title: "Versetzung in den Ruhestand wegen Dienstunfähigkeit",
      text: "Der dienstunfähige Lebenszeit-/Zeitbeamte ist in den Ruhestand zu versetzen (§ 26 I BeamtStG; Verfahren §§ 44-47 LBG: ärztliche Untersuchung, Fristen, Zuständigkeiten) – gebundene Entscheidung, wenn keine anderweitige Verwendung und keine begrenzte Dienstfähigkeit in Betracht kommen.\n\nBeim Probebeamten: Pflicht-Ruhestand nur bei qualifizierter (dienstlich verursachter) Dienstunfähigkeit (§ 28 I BeamtStG), sonst Ermessen (§ 28 II; § 26 I 3, II, III und § 27 gelten entsprechend, § 28 III).\n\nFolgen:\n• Versorgung nach dem LBeamtVG (Ruhegehalt; bei Dienstunfähigkeit ggf. Zurechnungszeit),\n• WIEDERHERSTELLUNG der Dienstfähigkeit: erneute Berufung möglich/geboten (§ 29 BeamtStG – \"Reaktivierung\"),\n• besoldungsrechtlich endet der Anspruch mit Ablauf des Versetzungstages (§ 4 IV LBesG), ab dem Folgetag Versorgung."
    },

    e_verwendung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 26 I 3, II, III BeamtStG",
      title: "Vorrang der anderweitigen Verwendung",
      text: "\"Weiterverwendung vor Versorgung\": In den Ruhestand wird NICHT versetzt, wer anderweitig verwendbar ist (§ 26 I 3 BeamtStG).\n\nInstrumente:\n• Übertragung eines ANDEREN AMTES derselben oder einer anderen Laufbahn (§ 26 II 1) – ohne Zustimmung des Beamten zulässig, wenn: selber Dienstherr, mindestens dasselbe Grundgehalt, gesundheitliche Anforderungen erwartbar erfüllbar (§ 26 II 2); fehlende Laufbahnbefähigung → Pflicht zur Qualifizierungsteilnahme (§ 26 II 3),\n• Übertragung einer GERINGERWERTIGEN Tätigkeit unter Beibehaltung des Amtes (§ 26 III – ohne Zustimmung, wenn andere Verwendung nicht möglich und die neue Aufgabe zumutbar ist).\n\nErst wenn all das scheitert, kommt die Ruhestandsversetzung (bzw. beim Probe-/Widerrufsbeamten die Entlassung) in Betracht."
    },

    e_begrenzt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 27 BeamtStG",
      title: "Begrenzte Dienstfähigkeit statt Ruhestand",
      text: "Kann der Beamte unter Beibehaltung seines Amtes die Dienstpflichten noch während MINDESTENS DER HÄLFTE der regelmäßigen Arbeitszeit erfüllen, ist von der Ruhestandsversetzung ABZUSEHEN (§ 27 I BeamtStG – begrenzte Dienstfähigkeit).\n\n• Die Arbeitszeit wird entsprechend herabgesetzt; mit Zustimmung auch eine nicht dem Amt entsprechende Verwendung möglich (§ 27 II),\n• BESOLDUNG: anteilige Dienstbezüge nach § 9 III LBesG PLUS Zuschlag von 50 % des Unterschiedsbetrags zur Vollzeitbesoldung (§ 44 LBesG – Schema \"Besoldung bei Teilzeitbeschäftigung\" im Fach Besoldungsrecht),\n• gilt über § 28 III BeamtStG auch für Probebeamte.\n\nZiel: Erhalt der Arbeitskraft und Vermeidung früher Versorgungslasten – Ausdruck des Grundsatzes \"Rehabilitation vor Versorgung\"."
    },

    e_entlassung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 23 I Nr. 2, 3 BeamtStG",
      title: "Kein Ruhestand: Entlassung",
      text: "Ist der Ruhestand rechtlich nicht möglich, bleibt nur die Entlassung durch VA:\n\n• WARTEZEIT (5 Jahre, § 11 I Nr. 1 LBeamtVG) nicht erfüllt bei sonst gebotener Ruhestandsversetzung → § 23 I Nr. 2 BeamtStG (Skript-Beispiel: schwerer Unfall kurz nach der Lebenszeiternennung),\n• dauernde Dienstunfähigkeit OHNE Ruhestandsversetzung → § 23 I Nr. 3 BeamtStG – Hauptfälle: WIDERRUFSBEAMTE (nie Ruhestand) und PROBEBEAMTE (wenn § 28 nicht greift bzw. das Ermessen gegen den Ruhestand ausgeht),\n• vorher stets: anderweitige Verwendung prüfen (§ 26 II BeamtStG – \"Achtung 1\" im Skript),\n• Entlassungsfristen des § 31 II 2, 3 LBG beachten (\"Achtung 2\").\n\nSoziale Abfederung: Nachversicherung in der gesetzlichen Rentenversicherung (§§ 181 ff. SGB VI); ggf. Unfallfürsorge bei Dienstunfall (§§ 41 ff. LBeamtVG) unabhängig von der Entlassung."
    }
  }
});
