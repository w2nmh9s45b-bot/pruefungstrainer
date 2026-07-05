/*
 * Prüfungsschema: Nichtigkeit einer Ernennung (§ 11 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - "Pruefungsschema_Nichtigkeit einer Ernennung" (FS II 2024/2025)
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor), Ziff. 3.6.4
 *  - Gesetze: BeamtStG § 11; LBG § 12; StGB § 45; VwVfG § 42
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-nichtigkeit",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Fehlerhafte Ernennung",
  title: "Nichtigkeit einer Ernennung (§ 11 BeamtStG)",
  description: "Das Vault-Prüfungsschema: Rechtsverstoß feststellen (Fehlersuche, Abgrenzung zur offenbaren Unrichtigkeit § 42 VwVfG) – Nichtigkeitsgrund aus dem abschließenden Katalog des § 11 I BeamtStG – Heilung nach § 11 II BeamtStG – Ergebnis mit Abwicklungsfolgen.",
  start: "start",
  stations: [
    { id: "verstoss", label: "Rechtsverstoß" },
    { id: "grund", label: "§ 11 I" },
    { id: "heilung", label: "Heilung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ernennung wirksam",
    neg: "Ergebnis: Ernennung nichtig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Heilung möglich"
  },

  nodes: {

    start: {
      station: "verstoss",
      kind: "frage",
      norm: "§ 11 BeamtStG, § 42 VwVfG",
      title: "I./II. Einleitung und Fehlersuche: Liegt überhaupt ein Rechtsverstoß vor?",
      def: "<b>Einleitungssatz (Vault-Schema):</b> „Bei der Prüfung der Nichtigkeit stellt sich die Frage, ob die Ernennung wirksam zustande gekommen ist. Unwirksam und somit nichtig wäre sie, wenn einer der in § 11 I BeamtStG abschließend aufgeführten Nichtigkeitsgründe vorliegt und keine Heilung nach § 11 II BeamtStG einschlägig ist.“<br><br><b>Fehlersuche:</b> Alle Aspekte des Sachverhalts prüfen – fehlerhafter <b>Urkundenwortlaut</b>, fehlende <b>Beteiligungen</b> (Personalrat, Gemeinderat …), Person des Ernannten, Zuständigkeit.<br><br><b>Abgrenzung:</b> Handelt es sich „nur“ um eine <b>offenbare Unrichtigkeit</b> i. S. d. § 42 VwVfG (Schreibfehler, bei dem ohne Weiteres erkennbar ist, was die Behörde positiv wollte), ist die Ernennung wirksam und der Fehler jederzeit korrigierbar.",
      options: [
        { label: "Rechtsverstoß liegt vor", next: "q_grund", tone: "pos" },
        { label: "Nur offenbare Unrichtigkeit", next: "e_unrichtigkeit", tone: "neutral" }
      ]
    },

    q_grund: {
      station: "grund",
      kind: "frage",
      norm: "§ 11 I BeamtStG",
      title: "III. Liegt ein Nichtigkeitsgrund des abschließenden Katalogs vor?",
      def: "§ 11 I BeamtStG nennt <b>abschließend</b>:<br><br>• <b>Nr. 1 – formale Urkundenmängel:</b> Text (Formulierung entspricht nicht § 8 II BeamtStG) oder Form der Urkunde fehlerhaft,<br>• <b>Nr. 2 – sachlich unzuständige Behörde:</b> jegliche Ernennungsbefugnis fehlt oder für die ausgesprochene Art unzuständig. Kommunal nur, wenn im Namen einer <b>anderen</b> Gebietskörperschaft ernannt wird (Landrat des Kreises A „im Namen des Landkreises B“); bloß <b>örtliche</b> Unzuständigkeit schadet nicht,<br>• <b>Nr. 3 Bst. a – fehlende Staatsangehörigkeit</b> (§ 7 I 1 Nr. 1 BeamtStG) zum Ernennungszeitpunkt (Beispiel: ukrainische Staatsangehörige wird Anwärterin),<br>• <b>Nr. 3 Bst. b – keine Fähigkeit zur Bekleidung öffentlicher Ämter</b> (§ 45 StGB: Verbrechens-Verurteilung zu Freiheitsstrafe ≥ 1 Jahr → 5 Jahre Ämterunfähigkeit),<br>• <b>Nr. 3 Bst. c – Unwirksamkeit der zugrundeliegenden Wahl</b> (Wahlbeamte; Gründe im Kommunalrecht, z. B. § 40 GemO).",
      options: [
        { label: "Nr. 1: Urkundenmangel", next: "q_heilung1", tone: "warn" },
        { label: "Nr. 2: sachlich unzuständig", next: "q_heilung2", tone: "warn" },
        { label: "Nr. 3: Person/Wahl", next: "q_heilung3", tone: "neg" },
        { label: "Kein Katalog-Grund", next: "e_wirksam", tone: "pos" }
      ]
    },

    q_heilung1: {
      station: "heilung",
      kind: "frage",
      norm: "§ 11 II Nr. 1 BeamtStG",
      title: "IV. Heilung des Urkundenmangels?",
      def: "Fehlerhafte <b>Formulierungen</b> sind geheilt – „die Ernennung ist <b>von Anfang an</b> als wirksam anzusehen“ –, wenn (§ 11 II Nr. 1 Alt. 1):<br><br>1. aus <b>Urkunde oder Akteninhalt</b> die beabsichtigte Ernennung <b>hinreichend deutlich</b> wird,<br>2. die <b>sonstigen Ernennungsvoraussetzungen</b> vorliegen und<br>3. die zuständige Stelle die Wirksamkeit <b>schriftlich bestätigt</b>.<br><br><b>Beispiel:</b> „zum Probebeamten berufen“ statt der Formel des § 8 II 2 Nr. 1 → aus der Urkunde hinreichend erkennbar, dass ein BV auf Probe gewollt ist; Vorbereitungsdienst bestanden → schriftliche Bestätigung heilt.<br><br><b>Alt. 2 (Wahlbeamte):</b> Fehlt die <b>Zeitdauer</b> in der Urkunde, heilt die landesrechtliche Bestimmung der Amtszeit (z. B. 8 Jahre, § 52 I GemO).",
      options: [
        { label: "Heilung erfolgt(e)", next: "e_geheilt", tone: "pos" },
        { label: "Keine Heilung", next: "e_nichtig", tone: "neg" }
      ]
    },

    q_heilung2: {
      station: "heilung",
      kind: "frage",
      norm: "§ 11 II Nr. 2 BeamtStG",
      title: "IV. Heilung der sachlichen Unzuständigkeit?",
      def: "Der Fehler der <b>sachlichen Unzuständigkeit</b> kann geheilt werden, wenn die <b>sachlich zuständige Behörde die Ernennung bestätigt</b> (§ 11 II Nr. 2 BeamtStG).<br><br><b>Beispiel Finanzverwaltung:</b> Die Ernennungsbefugnis ist für A 3–A 13 auf das Landesamt für Steuern übertragen; darüber (A 14–A 16) ist das Finanzministerium zuständig, den <b>Finanzämtern</b> fehlt jede Befugnis. Eine vom Finanzamtsvorsteher ausgesprochene Ernennung ist grundsätzlich nichtig – kann aber vom Landesamt/Ministerium bestätigt werden.",
      options: [
        { label: "Bestätigung erfolgt(e)", next: "e_geheilt", tone: "pos" },
        { label: "Keine Bestätigung", next: "e_nichtig", tone: "neg" }
      ]
    },

    q_heilung3: {
      station: "heilung",
      kind: "frage",
      norm: "§ 11 II Nr. 3 BeamtStG",
      title: "IV. Heilung bei den personen-/wahlbezogenen Gründen?",
      def: "• <b>Staatsangehörigkeit (Nr. 3 Bst. a):</b> Heilung mit Wirkung für die Vergangenheit nur, wenn <b>nachträglich eine Ausnahme nach § 7 III BeamtStG</b> zugelassen wird (§ 11 II Nr. 3 – kaum praxisrelevant),<br>• <b>Ämterunfähigkeit (Nr. 3 Bst. b):</b> <b>keine</b> Heilungsmöglichkeit,<br>• <b>unwirksame Wahl (Nr. 3 Bst. c):</b> grundsätzlich <b>keine</b> Heilung – nur ein bloßer Formulierungsfehler in der Urkunde des Wahlbeamten wäre über § 11 II Nr. 1 heilbar.",
      options: [
        { label: "Ausnahme § 7 III zugelassen", next: "e_geheilt", tone: "pos" },
        { label: "Keine Heilung", next: "e_nichtig", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 11 BeamtStG, § 12 LBG",
      title: "Ernennung nichtig und somit unwirksam",
      text: "Ergebnissatz (Vault-Schema): \"Die Ernennung war somit nichtig und somit unwirksam.\"\n\nABWICKLUNG:\n• Die Unwirksamkeit ist ohne förmliche Feststellung von jedermann zu beachten; gleichwohl ist die Feststellung der Nichtigkeit dem Beamten SCHRIFTLICH bekanntzugeben (§ 12 I LBG; Rechtsgedanke § 44 V VwVfG) und die Fortführung der Dienstgeschäfte zu verbieten,\n• AMTSHANDLUNGEN des Scheinbeamten sind nach außen voll gültig (§ 12 III LBG) – Bürger werden geschützt,\n• GEZAHLTE LEISTUNGEN können belassen werden (§ 12 III 2 LBG); rechtlich Leistung ohne Rechtsgrund (§ 812 BGB) → Rückforderung im Einzelfall nach § 16 II LBesG prüfen,\n• bei tatsächlicher Dienstaufnahme: faktisches öffentlich-rechtliches Dienstverhältnis besonderer Art mit Gehaltsanspruch (h. M.); KEINE Umdeutung in ein Arbeitsverhältnis."
    },

    e_geheilt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 11 II BeamtStG",
      title: "Heilung: Ernennung von Anfang an wirksam",
      text: "Die Heilung wirkt EX TUNC – die Ernennung ist von Anfang an als wirksam anzusehen (§ 11 II BeamtStG). Alle Rechtsfolgen (Beamtenstatus, Besoldung, Amtshandlungen) stehen auf sicherem Grund.\n\nDie drei Heilungswege im Überblick:\n• Nr. 1: Formulierungs-/Zeitdauer-Mängel → hinreichende Erkennbarkeit + sonstige Voraussetzungen + schriftliche Bestätigung (bzw. landesrechtliche Zeitbestimmung),\n• Nr. 2: sachliche Unzuständigkeit → Bestätigung durch die zuständige Behörde,\n• Nr. 3: fehlende Staatsangehörigkeit → nachträgliche Ausnahme nach § 7 III BeamtStG.\n\nKlausurtipp: Die Heilung IMMER anprüfen, bevor das Ergebnis \"nichtig\" festgestellt wird – das Vault-Schema sieht sie als eigenen Prüfungspunkt IV vor."
    },

    e_unrichtigkeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 42 VwVfG (Rechtsgedanke)",
      title: "Offenbare Unrichtigkeit: wirksam und korrigierbar",
      text: "Reine Schreibfehler und offensichtliche Unrichtigkeiten machen die Ernennung nicht nichtig – sie können nach dem in § 42 VwVfG zum Ausdruck kommenden allgemeinen Rechtsgedanken jederzeit korrigiert werden.\n\nVoraussetzung: Der Widerspruch zwischen Gewolltem und Erklärtem ist OHNE WEITERES erkennbar – und zwar POSITIV erkennbar, was die Behörde tatsächlich meinte (es genügt nicht, dass nur negativ feststeht, dass sie das Erklärte nicht wollte).\n\nBeispiele: \"Meier\" statt \"Maier\", vergessener Bindestrich (\"Kai-Uwe\"), Datum 01.01.2032 statt 01.01.2023.\n\nProblematisch: gänzlich falscher Name (\"Christine\" statt \"Christiane Becker\"), wenn eine Person dieses Namens tatsächlich existiert → ggf. Verstoß gegen das Bestimmtheitsgebot, dann Urkundenmangel nach § 11 I Nr. 1."
    },

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 11 I BeamtStG (Umkehrschluss)",
      title: "Kein Nichtigkeitsgrund: Ernennung wirksam",
      text: "Der festgestellte Rechtsverstoß fällt nicht unter den abschließenden Katalog des § 11 I BeamtStG – die Ernennung ist NICHT nichtig.\n\nWeiter prüfen:\n• Liegt ein RÜCKNAHMEGRUND des § 12 I BeamtStG vor (Zwang/Täuschung/Bestechung, fehlende LPA-Mitwirkung)? → Schema \"Rücknahme der Ernennung\",\n• Wesensmangel (Unterschrift, Aushändigung, Einwilligung)? → dann läge schon eine NICHTERNENNUNG vor (Schema \"Fehlerfolgen der Ernennung\"),\n• sonst: fehlerhaft, aber WIRKSAM (Ämterstabilität) – z. B. fehlende Ausschreibung, fehlende Personalratsbeteiligung, überschrittenes Höchstalter, fehlende Laufbahnbefähigung."
    }
  }
});
