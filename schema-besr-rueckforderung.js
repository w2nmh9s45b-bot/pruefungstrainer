/*
 * Prüfungsschema: Rückforderung von Bezügen (§ 16 II LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 35-46
 *    (4-Schritte-Prüfung, verschärfte Haftung, Billigkeit, Geltendmachung)
 *  - Gesetze: LBesG §§ 16, 17 II, 18; BGB §§ 818-820 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-rueckforderung",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Verlust und Rückforderung",
  title: "Rückforderung von Bezügen (§ 16 II LBesG)",
  description: "Die 4-Schritte-Prüfung der Rückforderung überzahlter Bezüge: rechtsgrundlose Leistung – Wegfall der Bereicherung (§ 818 III BGB) – verschärfte Haftung – Billigkeitsentscheidung; dazu die Geltendmachung (Aufrechnung, Leistungsbescheid, Leistungsklage).",
  start: "start",
  stations: [
    { id: "rechtsgrund", label: "Rechtsgrund" },
    { id: "entreicherung", label: "Entreicherung" },
    { id: "haftung", label: "Haftung" },
    { id: "billigkeit", label: "Billigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Rückforderung",
    neg: "Ergebnis: keine Rückforderung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechtsgrund",
      kind: "frage",
      norm: "§ 16 LBesG",
      title: "Anwendungsbereich: Geht es um Leistungen nach dem LBesG?",
      def: "§ 16 LBesG ist die <b>spezielle Ausgestaltung des öffentlich-rechtlichen Erstattungsanspruchs</b> für die Besoldung und geht dem allgemeinen Verwaltungsrecht vor.<br><br><b>Abgrenzung der Rückforderungsnormen:</b><br>• Leistungen nach dem <b>LBesG</b> → § 16 LBesG,<br>• Leistungen nach dem <b>LBeamtVG</b> (Versorgung) → § 7 LBeamtVG,<br>• übriges Landesrecht (Reisekosten, Beihilfe …) → § 49a VwVfG.<br><br>§ 16 <b>I</b> LBesG (rückwirkende Gesetzesänderung: keine Erstattung) bleibt außer Betracht – geprüft wird die Rückforderung „aus anderen Gründen“ nach <b>§ 16 II LBesG</b>: Sie richtet sich nach den BGB-Vorschriften über die ungerechtfertigte Bereicherung (h. M.: nur <b>§§ 818–820 BGB</b>).<br><br>Daneben kann bei schuldhafter Pflichtverletzung (z. B. Anzeigepflichten) ein Schadensersatzanspruch aus § 48 BeamtStG bestehen – in der Praxis stützt man den Bescheid ggf. auf beide.",
      options: [
        { label: "Ja – Prüfung nach § 16 II LBesG", next: "q_rechtsgrund", tone: "pos" }
      ]
    },

    q_rechtsgrund: {
      station: "rechtsgrund",
      kind: "frage",
      norm: "§ 16 II 1 LBesG",
      title: "1. Schritt: Wurde ohne Rechtsgrund geleistet (Überzahlung)?",
      def: "Der Beamte muss <b>„zu viel“ Besoldung</b> erhalten haben – im Widerspruch zum geltenden Recht. <b>„Ohne Rechtsgrund“</b> z. B.:<br>• Fehler im <b>Auszahlungsvorgang</b> (Eingabefehler, IT-Fehler, Fehler in der Kassenanordnung) – ggf. im Widerspruch zu einem wirksamen VA oder ohne VA,<br>• ein Bewilligungs-VA ist <b>nichtig</b> (§ 44 VwVfG, § 11 BeamtStG),<br>• ein rechtswidriger VA wird <b>mit Wirkung für die Vergangenheit zurückgenommen</b> (§ 48 VwVfG – z. B. fehlerhafte Stufenfestsetzung, fehlerhafter Familienzuschlag),<br>• ein VA hat sich <b>erledigt</b>/war befristet (Ablauf einer Stellenzulage, Beendigung des Beamtenverhältnisses) oder wurde berichtigt (§ 42 VwVfG),<br>• <b>Doppelzahlung</b> bei Versetzung (alter + neuer Dienstherr),<br>• förmlich festgestelltes <b>schuldhaftes Fernbleiben</b> (§ 15 LBesG),<br>• zu hohe <b>Abschlagszahlungen</b>.<br><br><b>MERKE:</b> Solange und soweit ein <b>wirksamer</b> rechtsbegründender/feststellender VA die Leistung trägt, besteht KEIN Rückforderungsanspruch – auch wenn der VA rechtswidrig ist (§ 43 II VwVfG): Erst zurücknehmen (§ 48 VwVfG), dann zurückfordern! <b>Bezügemitteilungen sind KEINE Bescheide.</b>",
      options: [
        { label: "Rechtsgrundlose Überzahlung (+)", next: "q_entreicherung", tone: "pos" },
        { label: "Wirksamer VA trägt die Zahlung", next: "e_va_sperre", tone: "neg" }
      ]
    },

    q_entreicherung: {
      station: "entreicherung",
      kind: "frage",
      norm: "§ 818 III BGB",
      title: "2. Schritt: Beruft sich der Beamte erfolgreich auf den Wegfall der Bereicherung?",
      def: "Die Rückforderung ist ausgeschlossen, soweit die <b>Bereicherung weggefallen</b> ist (§ 818 III BGB). Die Behörde muss den Beamten auf diese Einrede <b>hinweisen</b>; der Beamte muss den Verbrauch binnen gesetzter Frist glaubhaft machen.<br><br><b>Entreicherung (+):</b><br>• Verbrauch im Rahmen der <b>allgemeinen Lebensführung</b> (etwas höherpreisige Lebensmittel etc.),<br>• <b>Luxusausgaben</b> ohne verbleibenden Vermögenswert (z. B. Urlaubsreise).<br><br><b>Bagatellregel:</b> Ohne nähere Prüfung wird Entreicherung unterstellt, wenn die Überzahlung im Monat <b>10 % des zustehenden Betrages, höchstens 150 €</b>, nicht übersteigt (gilt NICHT bei verschärfter Haftung).<br><br><b>Bereicherung noch vorhanden (−):</b><br>• <b>Vermögenszuwachs</b>, der ohne die Überzahlung nicht eingetreten wäre (Kontostand vorher 5.000 €, nachher 7.000 €),<br>• <b>Schuldentilgung</b> steht dem Vermögenszuwachs gleich (z. B. Sondertilgung des Baudarlehens)!",
      options: [
        { label: "Entreicherung geltend gemacht", next: "q_haftung", tone: "neutral" },
        { label: "Noch bereichert", next: "q_haftung_bereichert", tone: "pos" }
      ]
    },

    q_haftung: {
      station: "haftung",
      kind: "frage",
      norm: "§ 16 II 2 LBesG, §§ 819, 820 BGB",
      title: "3. Schritt: Greift die verschärfte Haftung (Einrede abgeschnitten)?",
      def: "Trotz Entreicherung bleibt der Anspruch bestehen, wenn und soweit:<br><br>• die Bezüge unter <b>Rückforderungsvorbehalt</b>, als <b>Vorschuss</b>, <b>Abschlag</b> oder aufgrund eines erkennbar <b>vorläufigen</b> Bescheides gezahlt wurden (§ 820 BGB),<br>• die Bezüge wegen der <b>aufschiebenden Wirkung</b> von Widerspruch/Anfechtungsklage gegen einen herabsetzenden/entziehenden Bescheid weitergezahlt wurden und der Bescheid Bestand hat,<br>• der Beamte den Mangel des Rechtsgrundes beim Empfang <b>kannte</b> oder nachträglich erfuhr (§ 819 I BGB),<br>• der Mangel <b>so offensichtlich</b> war, dass er ihn hätte erkennen müssen (§ 16 II 2 LBesG) – d. h. die im Verkehr erforderliche Sorgfalt wurde in <b>ungewöhnlich hohem Maße</b> außer Acht gelassen. Maßstäbe: individuelle Kenntnisse, Vor-/Ausbildung, dienstliche Tätigkeit.<br><br><b>MERKE:</b> Aus dem Treueverhältnis folgt die Pflicht, Festsetzungsbescheide und Bezügemitteilungen zu <b>prüfen</b> und bei Zweifeln <b>nachzufragen</b> – sonst Sorgfaltsverstoß in ungewöhnlich hohem Maß. Ob (auch) die Behörde ihre Sorgfalt verletzt hat, ist hier <b>unerheblich</b> (erst bei der Billigkeit relevant). § 16 II 2 LBesG ist der <b>meistgeprüfte Punkt</b>!",
      options: [
        { label: "Verschärfte Haftung greift", next: "q_billigkeit", tone: "pos" },
        { label: "Keine verschärfte Haftung", next: "e_entreichert", tone: "neg" }
      ]
    },

    q_haftung_bereichert: {
      station: "haftung",
      kind: "frage",
      norm: "§ 16 II LBesG",
      title: "Bereicherung vorhanden – weiter zur Billigkeit",
      def: "Ist die Bereicherung <b>noch vorhanden</b> (Vermögenszuwachs oder Schuldentilgung), kommt es auf die verschärfte Haftung nicht mehr an – der Rückzahlungsanspruch besteht dem Grunde nach.<br><br>Es bleibt die <b>Billigkeitsprüfung</b> nach § 16 II 3 LBesG als letzter Schritt.<br><br><i>Beachte: Bei noch vorhandener Bereicherung darf von der Rückforderung nicht ganz oder teilweise abgesehen werden – die Billigkeit kann dann v. a. über Zahlungsmodalitäten (Raten, Stundung) helfen.</i>",
      options: [
        { label: "Weiter zur Billigkeitsprüfung", next: "q_billigkeit", tone: "pos" }
      ]
    },

    q_billigkeit: {
      station: "billigkeit",
      kind: "frage",
      norm: "§ 16 II 3 LBesG",
      title: "4. Schritt: Liegen Billigkeitsgründe vor (dann Ermessen)?",
      def: "Von der Rückforderung kann <b>aus Billigkeitsgründen</b> mit <b>Zustimmung der obersten Dienstbehörde</b> ganz oder teilweise abgesehen werden (§ 16 II 3 LBesG). <b>Zweistufig prüfen:</b><br><br><b>a) Tatbestand – Billigkeitsgründe</b>, z. B.:<br>• gravierende negative Auswirkungen auf die Lebensumstände (Alter, finanzielle Leistungsfähigkeit),<br>• die Überzahlung wurde <b>ganz wesentlich von der Behörde (mit-)verschuldet</b>.<br><br><b>b) Rechtsfolge – Ermessen</b> (strenger Maßstab): Verzicht nur in extremen Ausnahmefällen, in denen die Rückforderung nach Treu und Glauben schlechthin untragbar wäre.<br><br><b>Leitlinien:</b><br>• Reichen <b>Ratenzahlung</b>/Erleichterungen zur Milderung, darf NICHT (auch nicht teilweise) verzichtet werden,<br>• bei <b>schuldhafter Pflichtverletzung</b> des Beamten (verletzte Anzeigepflicht): grundsätzlich kein Absehen,<br>• bei <b>Mitverschulden der Behörde</b>: i. d. R. <b>30 % Verminderung</b> – aber nur, wenn der Fehler für den Beamten nicht zu offensichtlich war,<br>• bei noch vorhandener Bereicherung: kein Verzicht.<br><br>Zurückgefordert werden grundsätzlich <b>Bruttobeträge</b>.",
      options: [
        { label: "Keine/geringe Billigkeitsgründe", next: "e_rueckforderung", tone: "pos" },
        { label: "Behörden-Mitverschulden (30 %)", next: "e_teilverzicht", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rueckforderung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II LBesG",
      title: "Rückforderung in voller Höhe",
      text: "Der überzahlte (Brutto-)Betrag ist zurückzufordern. GELTENDMACHUNG in dieser Reihenfolge:\n\n1. AUFRECHNUNG gegen die laufenden Bezüge (§ 17 II 1 LBesG, §§ 387 ff. BGB entsprechend) – aber nur in Höhe des PFÄNDBAREN Teils der Bezüge (Ausnahme: Schadensersatz wegen vorsätzlicher unerlaubter Handlung, § 17 II 2). Stehen laufende Bezüge zu, ist grundsätzlich aufzurechnen (monatlicher Einbehalt).\n\n2. RÜCKFORDERUNGSBESCHEID (Leistungsbescheid; VA-Befugnis aus dem Sonderrechtsverhältnis). Inhalt: Zeitraum und Betrag der Überzahlung, Rückforderungsbetrag, Form der Rückzahlung, Begründung, Aussage zu Billigkeitsmaßnahmen, Rechtsbehelfsbelehrung.\n\n3. ALLGEMEINE LEISTUNGSKLAGE: sinnvoll, wenn der (ausgeschiedene) Beamte deutlich macht, dass er keinesfalls anerkennen und zahlen wird (Übung 3 Nr. 7: entlassener Anwärter) – dann direkt klagen statt Bescheid.\n\nVERJÄHRUNG (§ 18 LBesG): 3 Jahre ab Schluss des Entstehungsjahres; 10 Jahre bei vorsätzlich/grob fahrlässig unrichtigen Angaben."
    },

    e_teilverzicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II 3 LBesG",
      title: "Rückforderung mit Billigkeitsabschlag (i. d. R. 30 %)",
      text: "Hat die festsetzende oder auszahlende Stelle die Überzahlung wesentlich mitverschuldet, kann im Ermessenswege regelmäßig auf 30 % des Rückzahlungsbetrages verzichtet werden – Voraussetzungen:\n\n• Der Fehler war für den Beamten NICHT zu offensichtlich (sonst überwiegt sein Sorgfaltsverstoß),\n• die Bereicherung ist weggefallen (bei noch vorhandener Bereicherung kein Verzicht),\n• Zustimmung der obersten Dienstbehörde (§ 16 II 3 LBesG).\n\nSkript-Beispiel (Übung 3 Nr. 6): Zwei Jahre lang 160 € monatlich zu viel wegen fehlerhafter Stufenfestsetzung trotz richtiger Angaben; Fehler ohne vertiefte Rechtskenntnis nicht erkennbar → 30%-Verzicht angemessen.\n\nGegenbeispiel: Weist der Beamte die Personalstelle wiederholt auf den Fehler hin und legt sich die Beträge zurück, ist er (a) nicht entreichert und kannte (b) den Mangel (§ 819 BGB) → kein Verzicht.\n\nDer Restbetrag wird per Aufrechnung (§ 17 II LBesG) oder Leistungsbescheid geltend gemacht."
    },

    e_va_sperre: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 II VwVfG",
      title: "Wirksamer VA sperrt die Rückforderung",
      text: "Solange und soweit ein wirksamer rechtsbegründender oder feststellender VA die Leistung trägt, ist die Zahlung NICHT rechtsgrundlos – auch wenn der VA rechtswidrig ist (§ 43 II VwVfG).\n\nVorgehen: Der Bewilligungs-VA muss zunächst mit Wirkung für die Vergangenheit zurückgenommen (§ 48 VwVfG – Vertrauensschutz prüfen!) oder widerrufen/aufgehoben werden. Erst dann entsteht die Rechtsgrundlosigkeit und § 16 II LBesG greift.\n\nAbgrenzung (Übung 3 Nr. 3): \n• Eingabefehler des Bezügerechners OHNE entsprechenden VA → sofort rechtsgrundlos.\n• Familienzuschlag nach schriftlichem Bewilligungs-VA, obwohl das Kind aus dem Kindergeldbezug ausgeschieden ist → erst Aufhebung des VA, dann Rückforderung.\n\nBezügemitteilungen sind KEINE Bescheide und entfalten keine solche Sperrwirkung."
    },

    e_entreichert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 16 II 1 LBesG, § 818 III BGB",
      title: "Entreicherung: Rückforderung ausgeschlossen",
      text: "Der Beamte ist entreichert (§ 818 III BGB) und haftet nicht verschärft – die Rückforderung ist ausgeschlossen, soweit die Bereicherung weggefallen ist.\n\nTypische Fälle:\n• Bagatellgrenze: monatliche Überzahlung bis 10 % des zustehenden Betrages, max. 150 € (Wegfall wird ohne Prüfung unterstellt), z. B. einmalig 50 € beim Regierungsrat (Übung 3 Nr. 4),\n• glaubhaft gemachter Verbrauch für die allgemeine Lebensführung,\n• Luxusausgaben ohne verbleibenden Gegenwert (Urlaubsreise).\n\nKein Wegfall dagegen bei Vermögenszuwachs oder Schuldentilgung (Sondertilgung Baudarlehen!).\n\nMerke die Prüfreihenfolge: Die Einrede nützt nichts bei Vorbehalts-/Abschlagszahlungen, Kenntnis oder Offensichtlichkeit (verschärfte Haftung, § 16 II 2 LBesG)."
    }
  }
});
