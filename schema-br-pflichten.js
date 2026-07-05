/*
 * Prüfungsschema: Beamtenpflichten (§§ 33 ff. BeamtStG, §§ 49 ff. LBG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 5 - Beamtenpflichten" (Minor) 2024/2025
 *  - Gesetze: BeamtStG §§ 33-38, 42; LBG §§ 49, 51, 55, 81; LV Art. 126, 127
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-pflichten",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Pflichten und Rechte",
  title: "Beamtenpflichten (§§ 33 ff. BeamtStG)",
  description: "Das Pflichtensystem des Sonderrechtsverhältnisses: Treuepflicht als Grundsatzpflicht, die politischen Dienstpflichten (Neutralität, Mäßigung, Verfassungstreue), die innerdienstlichen Pflichten (voller Einsatz, Uneigennützigkeit, Wohlverhalten, Folgepflicht) und die besonderen Pflichten (Verschwiegenheit, Diensteid, Annahmeverbot).",
  start: "start",
  stations: [
    { id: "system", label: "System" },
    { id: "gruppe", label: "Pflichtengruppe" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Pflicht bestimmt",
    neg: "Ergebnis: keine Pflichtverletzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Problemfall"
  },

  nodes: {

    start: {
      station: "system",
      kind: "frage",
      norm: "Art. 33 V GG, § 3 I BeamtStG",
      title: "System: Treuepflicht und Pflichtenkataloge",
      def: "Das BV ist als <b>Sonderrechtsverhältnis</b> durch besondere Pflichten geprägt – deutlich weitergehend als bei Arbeitnehmern. Die Kataloge der <b>§§ 33 ff. BeamtStG und §§ 49 ff. LBG sind nicht abschließend</b> (weitere Pflichten aus Spezialgesetzen, RVOen, Dienstanweisungen).<br><br><b>Grundsatzpflicht: TREUEPFLICHT</b> (Art. 33 V GG – hergebrachter Grundsatz): „Das Beste für den Dienstherrn wollen und Schaden abwenden“ – Bewahrung vor materiellen Schäden, Offenheit und Wahrhaftigkeit, Inkaufnahme dienstüblicher Gefahren. Sie ist <b>Grund- und Auffangpflicht</b>, wenn der Katalog lückenhaft ist; aus ihr folgt bereits das <b>Streikverbot</b>.<br><br><b>Kategorien</b> (mit Überschneidungen):<br>• allgemeine <b>politische</b> Dienstpflichten,<br>• <b>innerdienstliche</b> Pflichten,<br>• <b>außerdienstliche</b> Pflichten,<br>• <b>besondere</b> Dienstpflichten.",
      options: [
        { label: "Politische Pflichten", next: "q_politisch", tone: "pos" },
        { label: "Innerdienstliche Pflichten", next: "q_innerdienstlich", tone: "pos" },
        { label: "Besondere Pflichten", next: "q_besondere", tone: "pos" },
        { label: "Außerdienstliches Verhalten", next: "e_ausserdienstlich", tone: "neutral" }
      ]
    },

    q_politisch: {
      station: "gruppe",
      kind: "frage",
      norm: "§ 33 BeamtStG, § 49 LBG, Art. 126, 127 LV",
      title: "Politische Dienstpflichten: Neutralität – Mäßigung – Verfassungstreue",
      def: "<b>a) Dienst am ganzen Volk (§ 33 I 1 BeamtStG, Art. 127 I LV):</b> Beamte dienen dem ganzen Volk, nicht einer Partei – <b>Neutralitätsgebot</b> bei der Aufgabenerfüllung. Kein Verbot politischer Betätigung: (aktive) Mitgliedschaft und Führungsämter in <b>nicht verfassungsfeindlichen</b> Parteien sind erlaubt. Bei <b>verfassungswidrigen</b> (vom BVerfG verbotenen: nur SRP, KPD) Parteien ist jede Betätigung verboten; bei <b>verfassungsfeindlichen</b> (nicht verbotenen – BVerfG 2017 zur NPD; AfD-Stufenmodell: Prüffall/Verdachtsfall/erwiesen extremistisch) ist allenfalls die einfache Mitgliedschaft toleriert, Listenkandidatur nicht – und schon die passive NPD-Mitgliedschaft dürfte mit der Verfassungstreuepflicht unvereinbar sein.<br><br><b>b) Mäßigungsgebot (§ 33 II BeamtStG):</b> Bei politischer Betätigung die Mäßigung und Zurückhaltung wahren, die sich aus der Stellung gegenüber der Allgemeinheit und den Amtspflichten ergibt – Trennung von Amt und Politik, keine politische Werbung im Dienst, kein Amtsbonus; <b>sachliche Kritik bleibt erlaubt</b>. (Polizei: § 116 LBG – Verbot in Dienstkleidung/Diensträumen.)<br><br><b>c) Verfassungstreue (§ 33 I 3 BeamtStG, § 49 LBG, Art. 126 I LV):</b> Bekenntnis zur fdGO <b>durch das gesamte Verhalten</b> + aktives Eintreten für ihre Erhaltung – mehr als formale Rechtstreue: positive innere Einstellung, Distanzierung von verfassungsfeindlichen Bestrebungen.",
      options: [
        { label: "Verstoß liegt vor", next: "e_dienstvergehen", tone: "neg" },
        { label: "Verhalten zulässig", next: "e_zulaessig", tone: "pos" }
      ]
    },

    q_innerdienstlich: {
      station: "gruppe",
      kind: "frage",
      norm: "§§ 34, 35 BeamtStG",
      title: "Innerdienstliche Pflichten: Welche ist betroffen?",
      def: "• <b>Unparteiische und gerechte Amtsführung</b> (§ 33 I 2): „niemandem zuliebe, niemandem zuleide“,<br>• <b>voller persönlicher Einsatz</b> (§ 34 I 1): individuell optimaler Einsatz („subjektives Optimum“ – kein „Dienst nach Vorschrift“); konkretisiert durch: Arbeitszeit 40 Std./Woche (§ 2 I ArbZVO), Pünktlichkeit + Krankmelde-/Attestpflichten (§ 81 LBG), Mehrarbeit (§ 73 II LBG), Fortbildung (§ 22 LBG), NT-Genehmigungspflicht (§ 40 BeamtStG, § 83 LBG), <b>Gesunderhaltungs- und Wiederherstellungspflicht</b> (zumutbare OP bei hoher Erfolgswahrscheinlichkeit ohne besondere Gefahr),<br>• <b>Uneigennützigkeit</b> (§ 34 I 2): keine Rücksicht auf eigene Vorteile (vgl. §§ 20, 21 VwVfG; Ablieferungspflicht § 55 LBG),<br>• <b>achtungs- und vertrauenswürdiges Verhalten</b> (§ 34 I 3 – „Wohlverhaltenspflicht“, <b>subsidiäre Generalklausel</b> bei Dienstvergehen): Respekt gegenüber Dienstherrn, Kollegen, Bürgern; Wahrhaftigkeit; kein Mobbing/Bossing; keine missbräuchliche Nutzung von Dienst-Kfz/Telefon/Internet; Vorgesetzte: Vorbildfunktion,<br>• <b>angemessenes Erscheinungsbild</b> (§ 34 II): Rücksicht auf das dem Amt entgegengebrachte Vertrauen (Tattoos, Schmuck – Einzelheiten durch Landesrecht),<br>• <b>Beratungs-/Unterstützungs- und Folgepflicht</b> (§ 35 I): Vorgesetzte beraten und unterstützen; dienstliche <b>Anordnungen ausführen</b> und Richtlinien befolgen (Ausnahme: Weisungsfreiheit kraft Gesetzes),<br>• <b>Rechtmäßigkeit + Remonstration</b> (§ 36): eigenes Schema!,<br>• Streikverbot, Dienstweg-Einhaltung.",
      options: [
        { label: "Verstoß liegt vor", next: "e_dienstvergehen", tone: "neg" },
        { label: "Zur Remonstration (§ 36)", next: "e_remonstration_verweis", tone: "neutral" },
        { label: "Verhalten zulässig", next: "e_zulaessig", tone: "pos" }
      ]
    },

    q_besondere: {
      station: "gruppe",
      kind: "frage",
      norm: "§§ 37, 38, 42 BeamtStG",
      title: "Besondere Dienstpflichten: Verschwiegenheit – Diensteid – Annahmeverbot",
      def: "<b>a) Amtsverschwiegenheit (§ 37):</b> über die bei oder bei Gelegenheit der amtlichen Tätigkeit bekannt gewordenen dienstlichen Angelegenheiten – gilt auch nach Beendigung des BV. <b>Ausnahmen (§ 37 II):</b> Mitteilungen im dienstlichen Verkehr; <b>offenkundige</b> Tatsachen oder solche ohne Geheimhaltungsbedürfnis; Anzeige von <b>Korruptionsstraftaten</b> und (unter Voraussetzungen) Whistleblowing an oberste Dienstbehörde/Strafverfolgung. Aussagen vor Gericht: <b>Aussagegenehmigung</b> (§ 37 IV, V). Dazu: <b>Herausgabepflicht</b> amtlicher Unterlagen (§ 37 VI).<br><br><b>b) Diensteid (§ 38 BeamtStG, § 51 LBG):</b> „Ich schwöre Treue dem Grundgesetz … und der Verfassung für Rheinland-Pfalz, Gehorsam den Gesetzen und gewissenhafte Erfüllung meiner Amtspflichten[, so wahr mir Gott helfe]“ – unverzüglich nach Begründung zu leisten; aus Glaubens-/Gewissensgründen: „Ich gelobe“ (§ 51 III LBG). <b>Verweigerung → zwingende Entlassung</b> (§ 23 I Nr. 1 BeamtStG).<br><br><b>c) Verbot der Annahme von Belohnungen, Geschenken und sonstigen Vorteilen (§ 42):</b> in Bezug auf das Amt – nur mit Zustimmung des Dienstherrn (VV Korruptionsprävention; strafrechtlich flankiert durch §§ 331 ff. StGB).",
      options: [
        { label: "Verstoß liegt vor", next: "e_dienstvergehen", tone: "neg" },
        { label: "Ausnahme/Genehmigung greift", next: "e_zulaessig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_dienstvergehen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 47 BeamtStG",
      title: "Pflichtverletzung: Folgen prüfen",
      text: "Die schuldhafte Verletzung einer Beamtenpflicht ist ein DIENSTVERGEHEN (§ 47 I BeamtStG) – weiter im Schema \"Dienstvergehen und Folgen der Pflichtverletzung\":\n\n• disziplinarrechtlich: Einleitungspflicht (§ 22 I LDG), Maßnahmen nach §§ 3 ff. LDG,\n• daneben je nach Pflicht: Verlust der Besoldung bei unentschuldigtem Fernbleiben (§ 81 III LBG, § 15 LBesG), Schadensersatz (§ 48 BeamtStG), strafrechtliche Folgen, Entlassung (Probe/Widerruf),\n• Sonderfall Diensteidverweigerung: zwingende Entlassung (§ 23 I Nr. 1 BeamtStG) – fristlos mit Zustellung (§ 32 I 2 LBG).\n\nKlausur-Aufbau: (1) Pflicht benennen und aus dem Katalog herleiten (spezielle Pflicht vor § 34 S. 3 als subsidiärer Generalklausel), (2) Verletzung subsumieren, (3) Verschulden, (4) Folgen."
    },

    e_zulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 33 ff. BeamtStG",
      title: "Kein Pflichtverstoß",
      text: "Das Verhalten hält sich im zulässigen Rahmen. Typische \"erlaubte\" Konstellationen aus dem Skript:\n\n• besonnene, sachliche parteipolitische Betätigung außerhalb des Dienstes (Mäßigungsgebot gewahrt),\n• sachliche Kritik am Dienstherrn oder an der Regierungspolitik,\n• Mitgliedschaft und Engagement in einer nicht verfassungsfeindlichen Partei – auch Führungsämter,\n• objektiv unverwertbare Arbeitsergebnisse trotz bestem Bemühen (kein Verstoß gegen § 34 I 1 – das \"subjektive Optimum\" zählt; mangelhafte Leistung ist eine Frage der Beurteilung),\n• angezeigte Übungsleitertätigkeit im Rahmen des § 3 Nr. 26 EStG (§ 5 NebVO – allgemein genehmigt),\n• genehmigte Annahme geringfügiger Aufmerksamkeiten im Rahmen der VV Korruptionsprävention."
    },

    e_ausserdienstlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 34 I 3, § 47 I 2 BeamtStG",
      title: "Außerdienstliche Pflichten: der reduzierte Maßstab",
      text: "Auch außerhalb des Dienstes treffen den Beamten Pflichten – v. a. die Beachtung der Rechtsordnung und die allgemeine (inner- und außerdienstliche) WOHLVERHALTENSPFLICHT (§ 34 I 3 BeamtStG): Das Verhalten muss der Achtung und dem Vertrauen gerecht werden, die der Beruf erfordert.\n\nABER: Außerdienstliches Verhalten ist nur dann ein Dienstvergehen, wenn es \"nach den Umständen des Einzelfalls in BESONDEREM MASSE geeignet ist, das Vertrauen in einer für ihr Amt BEDEUTSAMEN Weise zu beeinträchtigen\" (§ 47 I 2 BeamtStG) – doppelter Filter!\n\nAbgrenzung inner-/außerdienstlich: NICHT nach Dienstort/Dienstzeit, sondern nach der RECHTSNATUR der verletzten Pflicht – speziell beamtenrechtlicher Pflichtenkreis = innerdienstlich; Jedermann-Rechtsordnung = außerdienstlich (auch bei mittelbaren Auswirkungen auf den Dienst).\n\nBeispiel (Übungsfall R): vorsätzliche Steuerhinterziehung = außerdienstlich, aber wegen der Gesetzesbindung des Amtes in besonderem Maße vertrauensbeeinträchtigend → Dienstvergehen. Details: Schema \"Dienstvergehen\"."
    },

    e_remonstration_verweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 36 BeamtStG",
      title: "Weiter zur Remonstration",
      text: "Die Pflicht zum rechtmäßigen Handeln und das Remonstrationsverfahren (§ 36 BeamtStG) haben ein eigenes Schema: \"Remonstration (§ 36 BeamtStG)\".\n\nKurzfassung: Beamte tragen die volle persönliche Verantwortung für die Rechtmäßigkeit ihrer dienstlichen Handlungen (§ 36 I). Bedenken gegen die Rechtmäßigkeit einer Anordnung sind unverzüglich auf dem Dienstweg geltend zu machen (§ 36 II) – zweistufig, mit Befreiung von der eigenen Verantwortung bei Bestätigung; Grenzen: Menschenwürde, Strafbarkeit/Ordnungswidrigkeit."
    }
  }
});
