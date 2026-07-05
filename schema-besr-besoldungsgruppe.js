/*
 * Prüfungsschema: Bestimmung der Besoldungsgruppe (§§ 22, 23, 25 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 48-58
 *    (Grundgehalt, Besoldungsordnungen, Einstiegsämter, Paragrafenkette)
 *  - Gesetze: LBesG §§ 21-25; LBG §§ 14 IV, 15, 19 II; BeamtStG § 8 III
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-besoldungsgruppe",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Grundgehalt",
  title: "Bestimmung der Besoldungsgruppe (§§ 22, 23, 25 LBesG)",
  description: "Erster Faktor des Grundgehalts: Vom statusrechtlichen Amt über die Landesbesoldungsordnung A zur Besoldungsgruppe – mit der Paragrafenkette für Einstiegsämter (§ 8 III BeamtStG → § 19 II 1 LBG → §§ 14 IV, 15 LBG → § 25 LBesG).",
  start: "start",
  stations: [
    { id: "einstieg", label: "Einstieg" },
    { id: "amt", label: "Amt" },
    { id: "zuordnung", label: "Zuordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Besoldungsgruppe steht",
    neg: "Ergebnis: andere Besoldungsordnung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenschritt"
  },

  nodes: {

    start: {
      station: "einstieg",
      kind: "frage",
      norm: "§ 3 I Nr. 1, §§ 21, 22 I 1 LBesG",
      title: "Einstieg: Wie wird das Grundgehalt ermittelt?",
      def: "Das <b>Grundgehalt</b> (§ 3 I Nr. 1 LBesG) ist der wichtigste Bezügebestandteil. Es wird durch <b>zwei Faktoren</b> bestimmt:<br><br>1. <b>Besoldungsgruppe</b> (§§ 21–28, 32 LBesG) – dieses Schema,<br>2. <b>Stufe</b> (§§ 29–31 LBesG) – Schemata „Beginn des Stufenaufstiegs“ und „Stufenaufstieg“.<br><br>Mit beiden Faktoren wird der Wert aus der <b>Besoldungstabelle</b> abgelesen (§ 23 II 3 LBesG, <b>Anlage 6</b> zum LBesG). <b>Klausurtipp:</b> Immer die zeitlich richtige Tabelle verwenden (aktuell: gültig ab 01.02.2025)!<br><br><b>Hintergrund (§ 21 LBesG):</b> Grundsatz der funktionsgerechten Besoldung – Funktionen werden sachgerecht bewertet und Ämtern zugeordnet, die Ämter nach ihrer Wertigkeit den Besoldungsgruppen (Stellenbewertung ist Thema in OPW, nicht hier).<br><br><b>Der Einstieg in jede Grundgehaltsprüfung ist § 22 I 1 LBesG:</b> Das Grundgehalt bestimmt sich nach der Besoldungsgruppe des <b>verliehenen Amtes</b> (Amt im statusrechtlichen Sinne).",
      options: [
        { label: "Amtsbezeichnung ist angegeben", next: "q_amt_gegeben", tone: "pos" },
        { label: "Erstmalige Einstellung (Amt fehlt)", next: "q_einstiegsamt", tone: "neutral" },
        { label: "Überblick Besoldungsordnungen", next: "q_ordnungen", tone: "neutral" }
      ]
    },

    q_amt_gegeben: {
      station: "amt",
      kind: "frage",
      norm: "§ 23 I, II 1 LBesG, Anlage 1",
      title: "Amt in der Landesbesoldungsordnung A nachschlagen",
      def: "Alle Ämter und ihre Besoldungsgruppen werden in <b>Besoldungsordnungen</b> geregelt (§ 23 I 1 LBesG). Für die meisten Beamten gilt die <b>Landesbesoldungsordnung A</b> (aufsteigende Gehälter): § 23 I, II 1 LBesG i. V. m. <b>Anlage 1</b> zum LBesG.<br><br>In der LBesO A stehen die statusrechtlichen Ämter jeweils <b>unter ihrer Besoldungsgruppe</b>:<br>• Sekretär → A 6 · Obersekretär → A 7 · Hauptsekretär → A 8 · Amtsinspektor → A 9<br>• <b>Inspektor → A 9</b> · Oberinspektor → A 10 · <b>Amtmann → A 11</b> · Amtsrat → A 12 · Oberamtsrat → A 13<br>• Rat → A 13 · Oberrat → A 14 · Direktor → A 15 · Leitender Direktor → A 16<br><br>Die <b>Zusätze</b> zur Grundamtsbezeichnung (Stadt-, Kreis-, Verbandsgemeinde- …) ergeben sich aus § 23 II 2 LBesG i. V. m. Anlage 2 – für die Berechnung <b>irrelevant</b>.<br><br><b>Klausurtipp:</b> Nicht zu schnell lesen – häufigster Fehler ist ein falsch erfasstes statusrechtliches Amt („Stadtobersekretär“ ist A 7, nicht A 6)!",
      options: [
        { label: "Besoldungsgruppe abgelesen", next: "e_gruppe", tone: "pos" }
      ]
    },

    q_einstiegsamt: {
      station: "amt",
      kind: "frage",
      norm: "§ 8 III BeamtStG → § 19 II 1 LBG → §§ 14 IV, 15 LBG → § 25 LBesG",
      title: "Einstiegsamt ermitteln – die Paragrafenkette (lernen!)",
      def: "Ist keine Amtsbezeichnung angegeben (typisch: Anwärter wird nach der Ausbildung in das Beamtenverhältnis auf Probe eingestellt), ist das <b>erste statusrechtliche Amt</b> selbst zu ermitteln:<br><br><b>Die Paragrafenkette:</b><br>1. <b>§ 8 III BeamtStG</b> – mit der Einstellung wird erstmals ein Amt verliehen,<br>2. <b>§ 19 II 1 LBG</b> – die Einstellung ist grundsätzlich nur im <b>Einstiegsamt</b> zulässig,<br>3. <b>§ 14 IV, § 15 LBG</b> – welches Einstiegsamt, richtet sich nach der <b>Qualifikation</b> (Bildungsabschluss + Vorbereitungsdienst),<br>4. <b>§ 25 LBesG</b> – Zuordnung des Einstiegsamtes zur Besoldungsgruppe.",
      options: [
        { label: "Erstes EA (§ 15 II LBG)", next: "e_ea1", tone: "neutral" },
        { label: "Zweites EA (§ 15 III LBG)", next: "e_ea2", tone: "neutral" },
        { label: "Drittes EA (§ 15 IV LBG)", next: "e_ea3", tone: "pos" },
        { label: "Viertes EA (§ 15 V LBG)", next: "e_ea4", tone: "neutral" }
      ]
    },

    q_ordnungen: {
      station: "zuordnung",
      kind: "frage",
      norm: "§§ 23, 24, 34, 36 LBesG",
      title: "Welche Besoldungsordnung ist einschlägig?",
      def: "Fünf Regelungskomplexe:<br><br>• <b>LBesO A</b> (§ 23 II 1, Anlage 1): aufsteigende Gehälter – die wichtigste Ordnung, hier sind die meisten Beamten (A 5 bis A 16),<br>• <b>LBesO B</b> (§ 23 II 1, Anlage 1): feste Gehälter für Funktionsstellen/Spitzenämter (z. B. Präsident der ADD: B 7) – <b>keine Stufen</b>,<br>• <b>LBesO R</b> (§ 34 S. 1, Anlage 3): Richter und Staatsanwälte (z. B. Leitender Oberstaatsanwalt: R 2),<br>• <b>LBesO W</b> (§ 36 S. 1, Anlage 4): Professoren/Wissenschaft (z. B. Universitätsprofessor: W 3),<br>• <b>LKomBesVO</b> (§ 24 LBesG): hauptamtliche Bürgermeister, Landräte, Beigeordnete – Besoldungsgruppe nach der <b>Einwohnerzahl</b> (z. B. OB Mainz: erste zwei Jahre B 8, danach B 9).",
      options: [
        { label: "LBesO A – weiter mit dem Amt", next: "q_amt_gegeben", tone: "pos" },
        { label: "Wahlbeamter (LKomBesVO)", next: "e_komwb", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_gruppe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 I 1, § 23 I, II 1 LBesG, Anlage 1",
      title: "Besoldungsgruppe bestimmt",
      text: "Formulierungsbaustein für Klausur/mündliche Prüfung:\n\n\"Nach § 22 I 1 LBesG bestimmt sich das Grundgehalt des Beamten nach der Besoldungsgruppe des verliehenen statusrechtlichen Amtes. Hier wurde K zum [Amt] ernannt. Nach § 23 I, II 1 LBesG i. V. m. Anlage 1 zum LBesG ist diesem statusrechtlichen Amt die Besoldungsgruppe A [X] zugeordnet.\"\n\nDamit steht der erste Faktor. Als Nächstes:\n• die STUFE bestimmen (§§ 29-31 LBesG – Schema \"Beginn des Stufenaufstiegs\"),\n• dann den Tabellenwert aus Anlage 6 ablesen (§ 23 II 3 LBesG) – zeitlich richtige Tabelle!\n\nHistorische Fußnoten für Altfälle: Bis 31.12.2021 gab es A 4 als erstes Einstiegsamt (zum 01.01.2022 entfallen, Beamte nach A 5 übergeleitet)."
    },

    e_ea1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 25 I Nr. 1 LBesG",
      title: "Erstes Einstiegsamt: A 5",
      text: "Das erste Einstiegsamt (§ 15 II LBG – Berufsreife/gleichwertiger Abschluss) ist der Besoldungsgruppe A 5 zugeordnet (§ 25 I Nr. 1 LBesG).\n\nBeachte: Bis zum 31.12.2021 war A 4 das erste Einstiegsamt; A 4 ist seit 01.01.2022 entfallen, die betroffenen Beamten wurden in A 5 übergeleitet.\n\nWeiter mit der Stufe: Schema \"Beginn des Stufenaufstiegs\"."
    },

    e_ea2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 25 I Nr. 2 LBesG",
      title: "Zweites Einstiegsamt: A 6 (technisch: A 7)",
      text: "Das zweite Einstiegsamt (§ 15 III LBG – Sekundarabschluss I + Vorbereitungsdienst, z. B. Laufbahnprüfung an der ZVS) ist der Besoldungsgruppe A 6 zugeordnet; liegt der Schwerpunkt der Qualifikation im technischen Bereich, A 7 (§ 25 I Nr. 2 LBesG).\n\nAmtsbezeichnung Verwaltung: Sekretär (z. B. Kreissekretär beim Landkreis).\n\nÜbung 4 Fall 1: J legt am 23.06.2025 die Laufbahnprüfung für das zweite EA ab und wird am 01.07.2025 zum Kreissekretär ernannt → Grundgehalt nach A 6 (§ 22 I 1, § 23 I, II 1, Anlage 1; bzw. über § 25 I Nr. 2 LBesG).\n\nWeiter mit der Stufe: Schema \"Beginn des Stufenaufstiegs\" (Beginnstufe in A 6: Stufe 2!)."
    },

    e_ea3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 25 I Nr. 3 LBesG",
      title: "Drittes Einstiegsamt: A 9 (technisch: A 10)",
      text: "Das dritte Einstiegsamt (§ 15 IV LBG – Bachelor + Vorbereitungsdienst, z. B. HöV-Studium) ist der Besoldungsgruppe A 9 zugeordnet; bei technischem Schwerpunkt A 10 (§ 25 I Nr. 3 LBesG).\n\nAmtsbezeichnung Verwaltung: Inspektor (Stadtinspektor, Kreisinspektor, Verbandsgemeindeinspektor ... – Zusatz nach § 23 II 2 LBesG i. V. m. Anlage 2).\n\nFormulierung (Übung 4 Fall 2): \"K wird am 01.07.2025 erstmals in das BV auf Probe ernannt, er erhält nach § 8 III BeamtStG sein erstes statusrechtliches Amt. Dieses kann nach § 19 II 1 LBG nur das Einstiegsamt seiner Fachrichtung sein. Das Einstiegsamt richtet sich gem. §§ 14 IV, 15 LBG nach der Qualifikation; die Zuordnung erfolgt in § 25 LBesG. Aufgrund von Bachelorstudium und Vorbereitungsdienst ist K nach § 15 IV LBG dem dritten EA zuzuordnen. Einstiegsamt ist nach § 25 I Nr. 3 LBesG die Besoldungsgruppe A 9, da der Schwerpunkt nicht im technischen Bereich lag.\"\n\nWeiter mit der Stufe: Beginnstufe in A 9 ist Stufe 2 (erste betraglich besetzte Stufe)."
    },

    e_ea4: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 25 I Nr. 4 LBesG",
      title: "Viertes Einstiegsamt: A 13",
      text: "Das vierte Einstiegsamt (§ 15 V LBG – Master/Staatsexamen + Vorbereitungsdienst, z. B. Volljurist nach dem 2. Staatsexamen) ist der Besoldungsgruppe A 13 zugeordnet (§ 25 I Nr. 4 LBesG).\n\nAmtsbezeichnung Verwaltung: Rat.\n\nBeachte für die Stufe: In A 13 ist das Anfangsgrundgehalt seit 01.07.2024 die Stufe 4 (die Stufen 1-3 sind nicht mehr besetzt; zum 01.07.2024 wurde in A 12 bis A 14 die Stufe 3 gestrichen).\n\nAbweichend können Einstiegsämter höheren Besoldungsgruppen zugeordnet sein (§ 25 II LBesG – besondere Prüfung + zwingend höhere Anforderungen; in der Besoldungsordnung gekennzeichnet)."
    },

    e_komwb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 24 LBesG, LKomBesVO",
      title: "Hauptamtliche kommunale Wahlbeamte",
      text: "Die Ämter der hauptamtlichen kommunalen Wahlbeamten auf Zeit (Bürgermeister, Landräte, Beigeordnete) regelt die LKomBesVO (Ermächtigung: § 24 I LBesG).\n\nDie Zuordnung zu den Besoldungsgruppen der LBesO A und B richtet sich insbesondere nach der EINWOHNERZAHL der Gebietskörperschaft (§ 24 II 1 LBesG); höchstens zwei Besoldungsgruppen je Amt (§ 24 II 3). Beispiel: OB von Mainz – erste zwei Jahre B 8, danach B 9.\n\nAuch Beginn und Aufsteigen in den Stufen können abweichend von §§ 29-31 geregelt werden (§ 24 II 4 LBesG).\n\nDer Besoldungsanspruch entsteht mit der Maßnahme, die der Einweisungsverfügung entspricht (§ 4 II 3 LBesG)."
    }
  }
});
