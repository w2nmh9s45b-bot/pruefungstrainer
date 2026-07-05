/*
 * Prüfungsschema: Rechte der Beamten (§ 45 BeamtStG u. a.)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 5 - Beamtenrechte" (Minor) 2024/2025
 *  - Infoblatt Teilzeit und Beurlaubung (MdI, Stand 17.01.2023)
 *  - Gesetze: BeamtStG §§ 43-46, 50, 52; LBG §§ 62-69, 75, 87 ff.;
 *    UrlVO §§ 4, 8, 9, 11, 20-32; LbVO § 15 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-rechte",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Pflichten und Rechte",
  title: "Rechte der Beamten (Fürsorge, Urlaub, Personalakte, Beurteilung)",
  description: "Das Gegenstück zur Pflichtenbindung: Grundrechte im Sonderrechtsverhältnis, die Fürsorgepflicht des Dienstherrn (§ 45 BeamtStG), amtsbezogene und persönliche Rechte (amtsangemessene Beschäftigung, Erholungsurlaub 30 Tage mit Verfall 31.10., Sonderurlaub, Teilzeit, Dienstzeugnis, Personalakte, dienstliche Beurteilung) und die materiellen Rechte.",
  start: "start",
  stations: [
    { id: "system", label: "System" },
    { id: "recht", label: "Recht" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Recht besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: eingeschränkt"
  },

  nodes: {

    start: {
      station: "system",
      kind: "frage",
      norm: "Art. 33 V GG, § 45 BeamtStG",
      title: "System: Grundrechte und Fürsorgepflicht",
      def: "Den weitreichenden Pflichten stehen besondere <b>Rechte</b> gegenüber – aus den hergebrachten Grundsätzen (Art. 33 V GG), aus BeamtStG/LBG und teils als Kehrseite von Pflichten.<br><br><b>Grundrechte gelten auch im BV</b> – ihre Ausübung kann aber eingeschränkt werden, soweit es die <b>Funktionsfähigkeit des öffentlichen Dienstes</b> erfordert (verhältnismäßig, Einzelfall): z. B. Untersagung provokanter Tätowierungen (Art. 2 I GG), Einsatzpflichten für Leib und Leben bei Polizei/Feuerwehr (Art. 2 II GG), Mäßigungsgebot als „allgemeines Gesetz“ zu Art. 5 I GG.<br><br><b>Fürsorgepflicht des Dienstherrn (§ 45 BeamtStG</b> – Gegenstück zur Treuepflicht): für das <b>Wohl der Beamten und ihrer Familien</b> sorgen (auch nach Beendigung des BV) und sie bei ihrer Tätigkeit und in ihrer Stellung <b>schützen</b> („Rückendeckung“, § 45 S. 2). Konkretisierungen: wohlwollende und gerechte Behandlung, richtige und umfassende <b>Beratung</b> (inkl. Tragweite von Anträgen!), Schutz von Arbeitskraft und Gesundheit (§§ 62, 63 LBG, Arbeitsschutz), besondere Schutzpflichten (Mutterschutz § 64 LBG, Schwerbehinderte SGB IX, Jugendarbeitsschutz).",
      options: [
        { label: "Amtsbezogene Rechte", next: "e_amtsbezogen", tone: "pos" },
        { label: "Urlaub", next: "q_urlaub", tone: "pos" },
        { label: "Personalakte / Beurteilung", next: "q_akte", tone: "pos" },
        { label: "Materielle Rechte", next: "e_materiell", tone: "neutral" }
      ]
    },

    q_urlaub: {
      station: "recht",
      kind: "frage",
      norm: "§ 44 BeamtStG, § 79 LBG, UrlVO",
      title: "Erholungsurlaub oder Sonderurlaub?",
      def: "<b>Erholungsurlaub</b> (§ 44 BeamtStG, § 79 Nr. 1 LBG i. V. m. UrlVO):<br>• <b>30 Arbeitstage</b> jährlich bei Fünftagewoche (§ 8 I 1 UrlVO),<br>• Verfahren: auf <b>Antrag</b>, rechtzeitig vorher (§ 4 UrlVO),<br>• <b>anteilig ein Zwölftel</b> je vollem Kalendermonat, wenn das BV im Laufe des Urlaubsjahres beginnt/endet (§ 9 I 1 UrlVO),<br>• „soll“ im Kalenderjahr verbraucht werden – <b>verfällt erst mit Ablauf des 31.10. des Folgejahres</b> (§ 11 I 1 UrlVO),<br>• Anwärter im 3. EA: Sonderregelung § 23 IV APOVwD-E2/3 – Urlaub in den berufspraktischen Zeiten; von der lehrveranstaltungsfreien Zeit über Weihnachten/Neujahr werden <b>insgesamt 20 Arbeitstage auf den Erholungsurlaub angerechnet</b>.<br><br><b>Sonderurlaub</b> (§ 79 Nr. 3 LBG i. V. m. §§ 20–32 UrlVO):<br>• <b>unter Fortzahlung</b> der Bezüge: staatsbürgerliche Rechte (§ 20), gewerkschaftliche Zwecke (§ 25), fachliche/staatspolitische/kirchliche/sportliche Zwecke (§ 26), persönliche Anlässe (§ 31),<br>• <b>unter Wegfall</b> der Bezüge: FSJ/FÖJ (§ 22), sonstige Fälle (§ 32) – Achtung Besoldung: Hemmung des Stufenaufstiegs möglich (§ 29 III 2 LBesG)!",
      options: [
        { label: "Erholungsurlaub", next: "e_urlaub", tone: "pos" },
        { label: "Sonderurlaub/Teilzeit", next: "e_sonderurlaub", tone: "neutral" }
      ]
    },

    q_akte: {
      station: "recht",
      kind: "frage",
      norm: "§ 50 BeamtStG, §§ 87 ff. LBG, § 15 LbVO",
      title: "Personalakte oder dienstliche Beurteilung?",
      def: "<b>Personalakte</b> (§ 50 BeamtStG, §§ 87 ff. LBG):<br>• Aufbau: <b>Grundakte, Teilakten</b> (Besoldung, Beihilfe, Urlaub/Krankheit …), <b>Nebenakten</b> (nur Doppel aus Grund-/Teilakte; bei personalverwaltender ≠ Beschäftigungsdienststelle) – § 88 II LBG,<br>• <b>Anhörung VOR</b> Aufnahme ungünstiger Beschwerden/Behauptungen/Bewertungen (§ 90 LBG),<br>• Recht auf <b>Einsicht</b> (§ 92 I LBG) und ggf. <b>Entfernung</b> von Unterlagen (§ 94 LBG).<br><br><b>Dienstliche Beurteilung</b> (§ 15 LbVO):<br>• Instrument zur Feststellung von <b>Eignung, Befähigung, fachlicher Leistung</b> (Leistungsgrundsatz Art. 33 II GG, § 9 BeamtStG); Beurteilungsrichtlinien der obersten Dienstbehörden,<br>• Bestandteile: <b>Leistungsbeurteilung</b> (vergangenheitsbezogen) + <b>Befähigungsbeurteilung</b> (zukunftsbezogen),<br>• ist zu <b>eröffnen und zu besprechen</b>, zur Personalakte (§ 15 II LbVO),<br>• <b>KEIN Verwaltungsakt</b> (kein Regelungscharakter)!",
      options: [
        { label: "Beurteilung angreifen", next: "e_beurteilung", tone: "warn" },
        { label: "Personalakten-Rechte", next: "e_akte", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_amtsbezogen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 39 BeamtStG, § 68 LBG",
      title: "Amtsbezogene Rechte",
      text: "• RECHT AUF AMTSAUSÜBUNG und AMTSANGEMESSENE BESCHÄFTIGUNG: Anspruch auf Übertragung eines dem STATUSAMT entsprechenden abstrakt- und konkret-funktionellen Amtes – aber KEIN Anspruch auf einen ganz bestimmten Dienstposten (z. B. nach Rückkehr aus der Elternzeit). Ausnahmen: Verbot der Führung der Dienstgeschäfte (§ 39 BeamtStG, § 53 LBG), vorläufige Dienstenthebung (§ 45 LDG).\n\n• RECHT AUF FÜHRUNG DER AMTS-/DIENSTBEZEICHNUNG (§ 68 LBG, § 21 LbVO i. V. m. LBesG) – im und außerhalb des Dienstes; Ruhestandsbeamte mit Zusatz \"a. D.\" (§ 68 III LBG).\n\n• RECHT AUF BEFREIUNG von der Amtsausübung bei Selbstbetroffenheit (§ 20 VwVfG, § 52 LBG).\n\n• Rechte persönlicher Art daneben: politische Betätigung außerhalb des Dienstes (Art. 127 I LV), gewerkschaftliche Betätigung (Art. 9 III GG, § 52 BeamtStG), Nebentätigkeiten (§ 40 BeamtStG, §§ 82 ff. LBG – eigenes Schema), Dienstzeugnis auf Antrag bei berechtigtem Interesse oder Beendigung (§ 69 LBG – wahr und klar, darf den Werdegang nicht verbauen).\n\nDurchsetzung: Verletzungen des Grundverhältnisses per Widerspruch/Klage (§ 54 BeamtStG – Schema \"Rechtsschutz\")."
    },

    e_urlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 8 I, § 11 I UrlVO",
      title: "Erholungsurlaub: 30 Tage, Verfall 31.10.",
      text: "Der Anspruch beträgt 30 Arbeitstage im Urlaubsjahr (Fünftagewoche, § 8 I 1 UrlVO) und wird auf rechtzeitigen Antrag gewährt (§ 4 UrlVO – die Bewilligung ist ein VA).\n\nEckpunkte:\n• anteiliger Anspruch (1/12 je vollem Monat) bei Beginn/Ende des BV im Urlaubsjahr (§ 9 I 1 UrlVO),\n• Übertragung: Der Urlaub verfällt erst mit Ablauf des 31. OKTOBER des Folgejahres (§ 11 I 1 UrlVO) – großzügiger als § 7 III BUrlG bei Beschäftigten!,\n• Anwärter 3. EA: 20 Arbeitstage der lehrveranstaltungsfreien Zeit werden angerechnet (§ 23 IV APOVwD-E2/3); die übrige vorlesungsfreie Zeit dient dem Selbststudium,\n• bei Krankheit während des Urlaubs, Langzeiterkrankung etc. gelten die Sonderregeln der UrlVO (unionsrechtliche 15-Monats-Grenze beachten).\n\nVergleich ATR: Beschäftigte haben denselben 30-Tage-Anspruch (§ 26 TVöD), aber das strengere Verfallsregime des BUrlG."
    },

    e_sonderurlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 20–32 UrlVO, § 43 BeamtStG, § 75 LBG",
      title: "Sonderurlaub, Teilzeit und Beurlaubung",
      text: "SONDERURLAUB (§ 79 Nr. 3 LBG, §§ 20-32 UrlVO): je nach Anlass unter Fortzahlung (z. B. §§ 20, 25, 26, 31 UrlVO) oder unter Wegfall der Bezüge (§§ 22, 32 UrlVO).\n\nTEILZEIT UND BEURLAUBUNG (Infoblatt MdI 17.01.2023):\n• voraussetzungslose Teilzeit (§ 43 BeamtStG, § 75 LBG) – bis zur Hälfte der regelmäßigen Arbeitszeit,\n• Sabbatjahr (§ 5 III ArbZVO – ungleichmäßige Verteilung),\n• Elternzeit (§ 46 BeamtStG i. V. m. UrlVO/BEEG: Teilzeit oder Freistellung), Mutterschutz (§ 64 LBG, MuSchVO: 6 Wochen vor / 8 Wochen nach der Geburt),\n• Pflegezeiten (§ 76a LBG).\n\nBESOLDUNGSFOLGEN (Fach Besoldungsrecht) immer mitdenken:\n• Teilzeit: zeitratierliche Kürzung (§ 9 I LBesG) mit den Familienzuschlag-Sonderregeln,\n• Beurlaubung ohne Bezüge: Hemmung des Stufenaufstiegs (§ 29 III 2 LBesG), außer § 30 II LBesG greift (Kinderbetreuung bis 3 Jahre, Pflege, dienstliche Interessen),\n• NT während Beurlaubung/Teilzeit: § 75 II LBG beachten."
    },

    e_akte: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 88–94 LBG",
      title: "Rechte an der Personalakte",
      text: "Die Personalakte (Grund-, Teil- und Nebenakten, § 88 II LBG; VV Personalaktenrecht) ist vertraulich zu führen. Kernrechte des Beamten:\n\n• ANHÖRUNG vor Aufnahme ungünstiger Vorgänge (Beschwerden, Behauptungen, Bewertungen – § 90 LBG); die Stellungnahme des Beamten ist mit aufzunehmen,\n• EINSICHT in die vollständige Personalakte (§ 92 I LBG) – auch durch Bevollmächtigte,\n• ENTFERNUNG UND VERNICHTUNG bestimmter Unterlagen nach Fristablauf (§ 94 LBG) – z. B. missbilligende Äußerungen und Disziplinarvorgänge nach dem Verwertungsverbot des § 112 LDG (auf Antrag kann die Entfernung unterbleiben, wenn sie den Beamten entlastet),\n• Zugriffsschutz: Zugang nur für Personalverwaltung im erforderlichen Umfang.\n\nRechtsschutz: Ansprüche aus dem Personalaktenrecht betreffen das Grundverhältnis → beamtenrechtlicher Widerspruch/Leistungsklage (§ 54 BeamtStG)."
    },

    e_beurteilung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 15 LbVO",
      title: "Dienstliche Beurteilung: kein VA – aber angreifbar",
      text: "Die dienstliche Beurteilung ist KEIN Verwaltungsakt (kein Regelungscharakter) – Rechtsschutz besteht trotzdem, in dieser Reihenfolge (Skript):\n\n1. Erstellung nach den Beurteilungsrichtlinien,\n2. Einlassung auf dem Beurteilungsbogen (bei der Eröffnung/Besprechung, § 15 II LbVO),\n3. ABÄNDERUNGSANTRAG,\n4. Entscheidung über den Abänderungsantrag,\n5. WIDERSPRUCH (beamtenrechtlicher Widerspruch – keine Frist des § 70 VwGO, aber Verwirkung möglich),\n6. Widerspruchsbescheid,\n7. verwaltungsgerichtliche Klage (allgemeine Leistungsklage auf Aufhebung/Neubeurteilung).\n\nGerichtliche Kontrolle nur eingeschränkt (Beurteilungsspielraum): Verfahrensfehler, falscher Sachverhalt, Verstoß gegen Richtlinien/allgemeine Wertungsmaßstäbe, sachfremde Erwägungen.\n\nPraktische Bedeutung: Grundlage jeder Auswahlentscheidung (Bestenauslese) – im Konkurrentenstreit wird inzident die Beurteilung überprüft."
    },

    e_materiell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 45 BeamtStG, LBesG, LBeamtVG",
      title: "Materielle Rechte (Überblick)",
      text: "Aus Alimentationsprinzip und Fürsorgepflicht folgen die materiellen Rechte:\n\n• BESOLDUNG der aktiven Beamten (LBesG – eigenes Fach im Trainer mit 17 Schemata),\n• VERSORGUNG der Ruhestandsbeamten und Hinterbliebenen (LBeamtVG: Ruhegehalt, Witwen-/Waisengeld),\n• BEIHILFE in Krankheits-, Pflege- und Geburtsfällen (§ 66 LBG i. V. m. BVO),\n• DIENSTUNFALLFÜRSORGE (§§ 41 ff. LBeamtVG),\n• Reisekosten (LRKG), Umzugskosten (LUKG), Trennungsgeld (LTGV),\n• Jubiläumszuwendungen (§ 65 LBG, JubVO),\n• Mehrarbeitsvergütung (§ 53 LBesG, LMVergVO),\n• Nachversicherung bei Ausscheiden ohne Versorgungsanspruch (§§ 181 ff. SGB VI).\n\nDurchsetzung: Leistungs-/Verpflichtungswiderspruch und -klage (§ 54 BeamtStG); Verjährung der Besoldungsansprüche: 3 Jahre (§ 18 LBesG)."
    }
  }
});
