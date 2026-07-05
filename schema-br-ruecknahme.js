/*
 * Prüfungsschema: Rücknahme einer Ernennung (§ 12 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - "Pruefungsschema_Ruecknahme einer Ernennung" (FS II 2024/2025)
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor), Ziff. 3.6.6
 *  - Gesetze: BeamtStG § 12; LBG §§ 3, 13, 123, 125; VwVfG §§ 28, 39;
 *    VwZG; BGB §§ 187, 188 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-ruecknahme",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Fehlerhafte Ernennung",
  title: "Rücknahme einer Ernennung (§ 12 BeamtStG)",
  description: "Das Vault-Prüfungsschema zur Rechtmäßigkeit des Rücknahmebescheids: formell (Zuständigkeit als Kehrseite der Ernennung, Schriftform und Zustellung, Anhörung/Begründung) und materiell (Rücknahmegrund § 12 I – v. a. arglistige Täuschung mit Kausalität und fehlende LPA-Mitwirkung –, kein Fristablauf § 13 LBG, Rechtsfolge ex tunc).",
  start: "start",
  stations: [
    { id: "vorfrage", label: "Vorfrage" },
    { id: "formell", label: "Formell" },
    { id: "materiell", label: "Materiell" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Rücknahme rechtmäßig",
    neg: "Ergebnis: Rücknahme rechtswidrig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vorfrage",
      kind: "frage",
      norm: "§ 12 BeamtStG, § 48 VwVfG",
      title: "Einleitung und Vorfrage: Wirksame Ernennung ohne Nichtigkeitsgrund?",
      def: "<b>Einleitung (Vault-Schema):</b> „Fraglich ist, ob die Rücknahme der Ernennung rechtmäßig ist. Dies wäre der Fall, wenn der Rücknahmebescheid weder an formellen noch an materiellen Fehlern leidet.“<br><br><b>Systematik:</b> § 12 BeamtStG ist <b>lex specialis zu § 48 VwVfG</b> – § 48 VwVfG darf bei Ernennungen <b>nicht</b> herangezogen werden!<br><br><b>Vorfrage:</b> Die Rücknahme setzt voraus, dass die Ernennung <b>wirksam</b> geworden ist und <b>kein Nichtigkeitsgrund</b> (§ 11 BeamtStG) vorliegt – wäre sie nichtig, erübrigt sich die Rücknahmeprüfung. Ohne Rücknahme bleibt die Ernennung wirksam; erst die <b>Rücknahmeverfügung</b> (selbst ein VA) beseitigt die Wirksamkeit <b>ex tunc</b>.",
      options: [
        { label: "Ernennung wirksam – formell prüfen", next: "q_formell", tone: "pos" },
        { label: "Ernennung nichtig", next: "e_nichtig_vorrang", tone: "neg" }
      ]
    },

    q_formell: {
      station: "formell",
      kind: "frage",
      norm: "§ 13 I LBG, §§ 28, 39 VwVfG, § 123 LBG",
      title: "II. Formelle Rechtmäßigkeit: Zuständigkeit, Form, Verfahren",
      def: "<b>a) Zuständigkeit:</b><br>• unmittelbare Landesbeamte (§ 3 II Hs. 1 LBG): siehe Landesverordnungen,<br>• <b>mittelbare Landesbeamte/Kommunalbeamte:</b> Eine ausdrückliche Regelung fehlt → die Vorschriften über die <b>Zuständigkeit für die Ernennung</b> sind heranzuziehen (<b>Rücknahme als Kehrseite der Ernennung</b>, „actus contrarius“ – also Bürgermeister/Landrat, § 125 I LBG).<br><br><b>b) Form und Verfahren:</b><br>• <b>Schriftform</b> (§ 13 I 1 LBG),<br>• <b>Bekanntgabe durch förmliche Zustellung</b>: Die Rücknahme berührt den Bestand des BV elementar → Zustellung nach §§ 13 I 1, 123 LBG i. V. m. § 1 LVwZG i. V. m. VwZG (Wahl der Zustellungsart: §§ 3, 4 VwZG Post, § 5 VwZG Behörde),<br>• <b>Begründungspflicht</b> (§ 39 VwVfG i. V. m. § 1 LVwVfG),<br>• <b>Anhörungspflicht</b> (§ 28 VwVfG i. V. m. § 1 LVwVfG) – Nachholung möglich (§ 45 VwVfG).",
      options: [
        { label: "Formell (+) – Rücknahmegrund?", next: "q_grund", tone: "pos" },
        { label: "Formeller Fehler", next: "e_formfehler", tone: "neg" }
      ]
    },

    q_grund: {
      station: "materiell",
      kind: "frage",
      norm: "§ 12 I BeamtStG",
      title: "III. a) Liegt ein Rücknahmegrund vor?",
      def: "Die praxisrelevanten Gründe:<br><br><b>§ 12 I Nr. 1 – Zwang, arglistige Täuschung, Bestechung</b> (mit Kausalität):<br>• <b>Zwang:</b> Gewalt oder Drohung mit empfindlichem Übel – freie Willensbildung des Ernennungsberechtigten ausgeschaltet,<br>• <b>arglistige Täuschung:</b> Vorspiegeln falscher oder <b>Verschweigen wahrer ernennungsrelevanter Tatsachen</b> trotz Aufklärungspflicht; arglistig, wenn dem Ernannten <b>bewusst</b> war, dass seine Angaben unrichtig sein könnten und die Behörde deshalb ernennen könnte (Beispiele: verschwiegene chronische Erkrankung bei der amtsärztlichen Untersuchung; geleugnete Mitgliedschaft in verfassungsfeindlicher Vereinigung/„Reichsbürger“),<br>• <b>Bestechung:</b> Vorteil gewähren/versprechen, um die Ernennung zu erreichen (vgl. §§ 332, 334 StGB).<br><br><b>§ 12 I Nr. 4 – unterbliebene Mitwirkung:</b> eine <b>landesrechtlich</b> (nur LBG!) vorgeschriebene Mitwirkung einer <b>unabhängigen Stelle</b> (in RLP allein der <b>LPA</b>, § 99 LBG) <b>oder der Aufsichtsbehörde</b> ist unterblieben und wurde <b>nicht erfolgreich nachgeholt</b>. LPA-Fälle: Einstellung im höheren Amt (§ 19 II Nr. 4 LBG), Beförderung in der Probezeit/vor Ablauf der Wartezeiten, Sprungbeförderung (§ 21 II 3 LBG). <b>NICHT darunter:</b> Personalrat, Gleichstellungsbeauftragte, Schwerbehindertenvertretung!",
      options: [
        { label: "Nr. 1: unlauteres Verhalten", next: "q_kausalitaet", tone: "pos" },
        { label: "Nr. 4: LPA-Mitwirkung fehlt", next: "q_nachholung", tone: "warn" },
        { label: "Kein Rücknahmegrund", next: "e_kein_grund", tone: "neg" }
      ]
    },

    q_kausalitaet: {
      station: "materiell",
      kind: "frage",
      norm: "§ 12 I Nr. 1 BeamtStG",
      title: "Kausalität: Wurde die Ernennung dadurch „herbeigeführt“?",
      def: "Das unlautere Verhalten muss die Ernennung <b>herbeigeführt</b> haben = <b>adäquate Kausalität</b>: Die Handlung kann nicht hinweggedacht werden, ohne dass die Ernennung (zu diesem Zeitpunkt) entfiele.<br><br><b>Merksatz:</b> „Weil er arglistig getäuscht hat, ist er ernannt worden. Hätte er die Wahrheit gesagt, wäre er nicht ernannt worden.“<br><br><b>Beispiele:</b><br>• Verschwiegene Reichsbürger-Mitgliedschaft: Bei wahrheitsgemäßer Antwort wäre B nicht eingestellt worden → Kausalität (+) → Rücknahme,<br>• Täuschung über die <b>Rauchereigenschaft</b>: C wäre auch als bekennender Raucher eingestellt worden → Kausalität (−) → keine Rücknahme allein deswegen.",
      options: [
        { label: "Kausal (+)", next: "q_frist", tone: "pos" },
        { label: "Nicht kausal", next: "e_kein_grund", tone: "neg" }
      ]
    },

    q_nachholung: {
      station: "materiell",
      kind: "frage",
      norm: "§ 12 I Nr. 4 BeamtStG",
      title: "Nr. 4: Wurde die Mitwirkung erfolgreich nachgeholt?",
      def: "Bei unterbliebener LPA-/Aufsichtsbehörden-Mitwirkung gilt ein <b>gestuftes Verfahren</b>:<br><br>1. Der Dienstherr ist aus <b>Fürsorgegründen verpflichtet</b>, den LPA bzw. die Aufsichtsbehörde <b>nachträglich</b> zu befassen und eine Zustimmung anzustreben – <b>kein Ermessen</b>!<br>2. Wird die Zustimmung <b>erteilt</b>, ist der Mangel behoben – keine Rücknahme.<br>3. Erst wenn die nachträgliche Zustimmung <b>verweigert</b> wurde, kann – und muss – die Ernennung zurückgenommen werden.",
      options: [
        { label: "Zustimmung nachgeholt", next: "e_geheilt_nachholung", tone: "pos" },
        { label: "Zustimmung verweigert", next: "q_frist", tone: "warn" }
      ]
    },

    q_frist: {
      station: "materiell",
      kind: "frage",
      norm: "§ 13 I 2, II LBG",
      title: "III. b) Kein Ausschluss: Sind die Rücknahmefristen gewahrt?",
      def: "<b>„Doppelte Rücknahmefrist“ – immer ganzheitlich prüfen:</b><br><br>• <b>§ 13 I 2 LBG (Fälle des § 12 I Nr. 3 und 4):</b> Rücknahme innerhalb von <b>sechs Monaten</b> ab <b>Kenntnis</b> der Behörde von der <b>Ablehnung</b> der nachträglichen Ausnahme (§ 9-Stelle) bzw. der Nachholung durch LPA/Aufsichtsbehörde,<br>• <b>§ 13 II LBG (nur § 12 I Nr. 4):</b> Der Mangel gilt als <b>geheilt</b>, wenn seit der Ernennung <b>ein Jahr und sechs Monate</b> verstrichen sind – die 6-Monats-Frist kann diese absolute Grenze <b>nicht verlängern</b>: Heilung tritt spätestens nach 1½ Jahren ein!<br><br><b>Fristberechnung:</b> Rücknahmefrist = Ereignisfrist (§ 31 VwVfG i. V. m. § 187 I BGB; Ende § 188 II Alt. 1, ggf. § 193 BGB); die 1,5-Jahres-Frist läuft ab der Ernennung, die mit dem Tag der Aushändigung wirksam wird → <b>Verlaufsfrist</b> (§ 187 II BGB – der Tag wird mitgezählt).<br><br>Nach Fristablauf ist die Rücknahme <b>ausgeschlossen</b>, der Fehler gilt als geheilt. Die Rücknahme ist im Übrigen auch <b>nach Beendigung</b> des BV zulässig (§ 13 I 3 LBG).",
      options: [
        { label: "Fristen gewahrt", next: "e_ruecknahme", tone: "pos" },
        { label: "Frist abgelaufen", next: "e_frist", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ruecknahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 12 I BeamtStG, § 13 LBG",
      title: "Rücknahme rechtmäßig (ex tunc)",
      text: "Der Rücknahmebescheid ist formell und materiell rechtmäßig. RECHTSFOLGE (§ 12 I BeamtStG): Die Ernennung IST mit Wirkung FÜR DIE VERGANGENHEIT (\"ex tunc\") zurückzunehmen – gebundene Entscheidung, kein Ermessen; zu prüfen bleibt nur, ob die konkrete Rücknahmehandlung von dieser Rechtsfolge gedeckt ist (Vault-Schema III c).\n\nABWICKLUNG (wie bei der Nichtigkeit):\n• Amtshandlungen des Beamten bleiben nach außen voll gültig (§ 13 III i. V. m. § 12 III LBG),\n• gewährte Leistungen können belassen werden; sonst Rückforderung nach § 16 II LBesG (Leistung ohne Rechtsgrund),\n• faktisches Dienstverhältnis mit Gehaltsanspruch bei tatsächlicher Dienstaufnahme (h. M.).\n\nErgebnissatz: \"Im Ergebnis erfolgte die Rücknahme der Ernennung rechtmäßig.\"\n\nRechtsschutz des Beamten: Widerspruch/Anfechtungsklage (§ 54 BeamtStG) – mit aufschiebender Wirkung (§ 80 I VwGO; die Ausnahme des § 54 IV BeamtStG gilt nur für Abordnung und Versetzung!)."
    },

    e_kein_grund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 12 I BeamtStG",
      title: "Kein Rücknahmegrund: Ernennung bleibt wirksam",
      text: "Ohne Katalog-Grund des § 12 I BeamtStG (oder ohne Kausalität) ist die Rücknahme rechtswidrig – die Ernennung bleibt bestehen (Ämterstabilität; § 48 VwVfG ist gesperrt).\n\nTypische Verneinungen:\n• Täuschung ohne KAUSALITÄT (Raucher-Fall),\n• fehlende Beteiligung von PERSONALRAT, Gleichstellungsbeauftragter oder Schwerbehindertenvertretung (kein Fall der Nr. 4 – dort zählen nur LPA und Aufsichtsbehörde),\n• einfache Fehler bei Eignungseinschätzung, Höchstalter, Laufbahnbefähigung (weder § 11 noch § 12).\n\nKonsequenz: allenfalls Konsequenzen auf anderer Ebene (Disziplinarrecht bei Täuschung unterhalb der Arglist-Schwelle, Schadensersatz, dienstaufsichtliche Maßnahmen) – der Beamtenstatus bleibt unberührt."
    },

    e_geheilt_nachholung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 12 I Nr. 4 BeamtStG",
      title: "Mitwirkung nachgeholt: keine Rücknahme",
      text: "Die nachträgliche Zustimmung des LPA bzw. der Aufsichtsbehörde wurde erteilt – der Mangel ist behoben, für eine Rücknahme ist kein Raum.\n\nMerke die Pflichtenlage: Der Dienstherr MUSS die Nachholung anstreben (Fürsorge, kein Ermessen); erst die VERWEIGERUNG öffnet die Rücknahme – dann läuft die 6-Monats-Frist des § 13 I 2 LBG ab Kenntnis der Ablehnung, gedeckelt durch die absolute 1,5-Jahres-Grenze des § 13 II LBG.\n\nSkript-Beispiel: Einstellung des B mit Bachelor + 2,5 Jahren hauptberuflicher Tätigkeit direkt als Oberinspektor (A 10) statt im Einstiegsamt A 9 → nach § 19 II Nr. 4 LBG war die vorherige Zustimmung des LPA erforderlich; sie kann nachgeholt werden."
    },

    e_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 13 I 2, II LBG",
      title: "Fristablauf: Rücknahme ausgeschlossen, Mangel geheilt",
      text: "Nach Ablauf der Fristen ist die Rücknahme ausgeschlossen – der Fehler GILT ALS GEHEILT:\n\n• 6-Monats-Frist (§ 13 I 2 LBG) ab Kenntnis der Ablehnung (Fälle § 12 I Nr. 3, 4 BeamtStG) verstrichen, oder\n• absolute Frist von einem Jahr und sechs Monaten seit der Ernennung (§ 13 II LBG, nur Nr. 4) abgelaufen – das fristauslösende Ereignis der 6-Monats-Frist kann die 1,5-Jahres-Grenze NICHT verlängern.\n\nZweck: Rechtssicherheit und Vertrauensschutz zugunsten des Beamten – die \"doppelte Rücknahmefrist\" ist stets ganzheitlich zu prüfen.\n\nFristberechnung sauber darstellen: Ereignisfrist § 187 I BGB (6 Monate ab Kenntnis) bzw. Verlaufsfrist § 187 II BGB (1,5 Jahre ab Aushändigungstag, Tag zählt mit), Fristende § 188 II BGB, ggf. § 193 BGB."
    },

    e_formfehler: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 13 I LBG, §§ 28, 39, 45 VwVfG",
      title: "Formeller Fehler des Rücknahmebescheids",
      text: "Der Rücknahmebescheid ist formell rechtswidrig – z. B.:\n\n• UNZUSTÄNDIGE Stelle (richtig: die Ernennungsbehörde – actus contrarius; kommunal Bürgermeister/Landrat, § 125 I LBG),\n• fehlende SCHRIFTFORM (§ 13 I 1 LBG),\n• fehlerhafte ZUSTELLUNG (erforderlich: förmliche Zustellung nach § 123 LBG i. V. m. LVwZG/VwZG – einfache Bekanntgabe genügt nicht),\n• unterlassene ANHÖRUNG (§ 28 VwVfG) oder BEGRÜNDUNG (§ 39 VwVfG).\n\nBeachte Heilungsmöglichkeiten nach § 45 VwVfG (Anhörung/Begründung nachholbar bis zum Abschluss der letzten Tatsacheninstanz) und Zustellungsheilung nach § 8 VwZG (tatsächlicher Zugang).\n\nBleibt der Fehler, ist die Rücknahme im Widerspruchs-/Klageverfahren (§ 54 BeamtStG) aufzuheben – die Ernennung besteht fort."
    },

    e_nichtig_vorrang: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 11 BeamtStG",
      title: "Vorrang der Nichtigkeit",
      text: "Ist die Ernennung bereits nach § 11 BeamtStG nichtig, erübrigt sich mangels wirksamer Ernennung die weitere Prüfung der Rücknahme (Vault-Schema, Ziff. I) – es gibt nichts zurückzunehmen.\n\nStattdessen: Feststellung der Nichtigkeit und schriftliche Bekanntgabe (§ 12 I LBG), Verbot der Fortführung der Dienstgeschäfte, Abwicklung über § 12 III LBG (Amtshandlungen gültig, Leistungen können belassen werden).\n\nZur Nichtigkeitsprüfung: Schema \"Nichtigkeit der Ernennung\"."
    }
  }
});
