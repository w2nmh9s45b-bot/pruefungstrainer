/*
 * Prüfungsschema: Ermessen und Ermessensfehler (§ 40 VwVfG, § 114 VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Die materielle Rechtmäßigkeit eines VA – (4) Rechtsfolge – Ermessen"
 *    (Begriff, pflichtgemäßes Ermessen, Fehlerkategorien, Soll-Vorschriften)
 *  - "Rechtmaessigkeit VA - Uebersicht"
 *  - Gesetze: VwVfG § 40, VwGO § 114, POG § 9 I 1 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-ermessen",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Der Verwaltungsakt",
  title: "Ermessen und Ermessensfehler (§ 40 VwVfG, § 114 VwGO)",
  description: "Ermessen erkennen (Kann-/Soll-/Muss-Vorschriften, Entschließungs- und Auswahlermessen, Abgrenzung zum Beurteilungsspielraum), die Fehlerkategorien Nichtgebrauch, Fehlgebrauch und Überschreitung prüfen und die Ermessensreduzierung auf Null erkennen.",
  start: "start",
  stations: [
    { id: "eroeffnet", label: "Ermessen?" },
    { id: "fehler", label: "Fehlerprüfung" },
    { id: "reduktion", label: "Reduzierung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ermessen fehlerfrei",
    neg: "Ergebnis: Ermessensfehler",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "eroeffnet",
      kind: "frage",
      norm: "§ 40 VwVfG",
      title: "Räumt die Norm der Behörde Ermessen ein?",
      def: "<b>Ermessen</b> betrifft immer die <b>Rechtsfolgenseite</b> einer Norm: Sind die Tatbestandsvoraussetzungen erfüllt, kann die Behörde zwischen mehreren Rechtsfolgen wählen.<br><br><b>Erkennbarkeit am Wortlaut:</b><br>• „<b>kann</b>“, „darf“, „ist befugt“ → Ermessen,<br>• „<b>soll</b>“ → intendiertes Ermessen: im Regelfall gebunden, Abweichung nur in atypischen Fällen,<br>• „<b>ist zu</b>“, „muss“, „hat zu“ → gebundene Entscheidung, kein Ermessen.<br><br><b>Abgrenzung:</b> Der <b>Beurteilungsspielraum</b> betrifft die TATBESTANDSseite (unbestimmte Rechtsbegriffe) und ist die seltene Ausnahme – Ermessen die Rechtsfolgenseite.",
      hint: "Beispiel: § 9 I 1 POG („können die notwendigen Maßnahmen treffen“) enthält Entschließungs- UND Auswahlermessen.",
      options: [
        { label: "Kann-Vorschrift – Ermessen eröffnet", next: "q_arten", tone: "pos" },
        { label: "Soll-Vorschrift – intendiertes Ermessen", next: "q_soll", tone: "warn" },
        { label: "Muss-Vorschrift – gebundene Entscheidung", next: "e_gebunden", tone: "neutral" }
      ]
    },

    q_soll: {
      station: "eroeffnet",
      kind: "frage",
      norm: "Soll-Vorschrift",
      title: "Liegt ein atypischer Fall vor?",
      def: "<b>Intendiertes Ermessen:</b> Bei Soll-Vorschriften ist die Behörde im REGELFALL gebunden – sie muss die vorgesehene Rechtsfolge setzen und braucht dies nicht gesondert zu begründen. Nur wenn ein <b>atypischer Sachverhalt</b> vorliegt, darf (und muss) sie nach Ermessen abweichen und dies begründen.",
      options: [
        { label: "Regelfall – Behörde muss die Regelrechtsfolge setzen", next: "e_gebunden", tone: "neutral" },
        { label: "Atypischer Fall – Ermessen eröffnet", next: "q_arten", tone: "warn" }
      ]
    },

    q_arten: {
      station: "fehler",
      kind: "frage",
      norm: "§ 40 VwVfG",
      title: "Um welche Ermessensart geht es?",
      def: "<b>Entschließungsermessen („Ob“):</b> Wird die Behörde überhaupt tätig?<br><b>Auswahlermessen („Wie“):</b> Welche von mehreren möglichen Maßnahmen wird ergriffen – und gegen welchen Adressaten (Störerauswahl)?<br><br><b>Pflichtgemäßes Ermessen (§ 40 VwVfG):</b> Die Behörde hat ihr Ermessen entsprechend dem <b>Zweck der Ermächtigung</b> auszuüben und die <b>gesetzlichen Grenzen</b> einzuhalten. Ein Anspruch des Bürgers besteht grundsätzlich nur auf ermessensfehlerfreie Entscheidung.",
      options: [
        { label: "Weiter zur Fehlerprüfung", next: "q_nichtgebrauch", tone: "neutral" }
      ]
    },

    q_nichtgebrauch: {
      station: "fehler",
      kind: "frage",
      norm: "§ 40 VwVfG, § 114 S. 1 VwGO",
      title: "Ermessensnichtgebrauch (Ermessensausfall)?",
      def: "<b>Ermessensnichtgebrauch:</b> Die Behörde verkennt, dass ihr Ermessen zusteht, oder übt es (bewusst oder unbewusst) gar nicht aus – z. B. sie hält sich für gebunden („da kann man nichts machen“) oder folgt blind einer Verwaltungsvorschrift, ohne den Einzelfall zu würdigen.<br><br>Indiz: Die Begründung des VA enthält keinerlei Ermessenserwägungen, obwohl § 39 I 3 VwVfG sie verlangt.",
      options: [
        { label: "Nein, Ermessen wurde erkannt und ausgeübt", next: "q_ueberschreitung", tone: "pos" },
        { label: "Ja, Ermessen gar nicht ausgeübt", next: "e_fehler_nichtgebrauch", tone: "neg" }
      ]
    },

    q_ueberschreitung: {
      station: "fehler",
      kind: "frage",
      norm: "§ 114 S. 1 VwGO",
      title: "Ermessensüberschreitung?",
      def: "<b>Ermessensüberschreitung:</b> Die Behörde wählt eine Rechtsfolge, die außerhalb des gesetzlichen Rahmens liegt – z. B. eine Maßnahme, welche die EGL nicht vorsieht, oder eine Überschreitung des zulässigen Höchstmaßes (Gebühr über dem Rahmen, unzulässiger Adressat).",
      options: [
        { label: "Nein, Rechtsfolge im gesetzlichen Rahmen", next: "q_fehlgebrauch", tone: "pos" },
        { label: "Ja, gesetzlicher Rahmen überschritten", next: "e_fehler_ueberschreitung", tone: "neg" }
      ]
    },

    q_fehlgebrauch: {
      station: "fehler",
      kind: "frage",
      norm: "§ 40 VwVfG, § 114 S. 1 VwGO",
      title: "Ermessensfehlgebrauch?",
      def: "<b>Ermessensfehlgebrauch:</b> Die Behörde übt das Ermessen nicht dem Zweck der Ermächtigung entsprechend aus:<br>• <b>sachfremde Erwägungen</b> (persönliche, politische, fiskalische Motive ohne Bezug zum Normzweck),<br>• <b>Abwägungsdefizit:</b> wesentliche Gesichtspunkte nicht berücksichtigt,<br>• Verstoß gegen <b>Grundrechte</b> und allgemeine Verwaltungsgrundsätze, insb. <b>Verhältnismäßigkeit</b> (Geeignetheit, Erforderlichkeit, Angemessenheit),<br>• Verstoß gegen die <b>Selbstbindung der Verwaltung</b> (Art. 3 I GG i. V. m. ständiger Verwaltungspraxis / ermessenslenkenden VV).",
      options: [
        { label: "Nein, Erwägungen zweckgerecht und verhältnismäßig", next: "q_reduktion", tone: "pos" },
        { label: "Ja, sachfremde Erwägungen / Abwägungsdefizit", next: "e_fehler_fehlgebrauch", tone: "neg" },
        { label: "Ja, Verstoß gegen VHM oder Selbstbindung", next: "e_fehler_fehlgebrauch", tone: "neg" }
      ]
    },

    q_reduktion: {
      station: "reduktion",
      kind: "frage",
      norm: "§ 40 VwVfG",
      title: "Ist das Ermessen auf Null reduziert?",
      def: "<b>Ermessensreduzierung auf Null:</b> Aufgrund der Umstände des Einzelfalls ist nur EINE Entscheidung rechtsfehlerfrei möglich – aus dem Ermessen wird eine Pflicht.<br><br>Typische Fälle: erhebliche Gefahren für hochrangige Rechtsgüter (Leben, Gesundheit), Selbstbindung durch ständige Praxis, vorangegangene Zusicherung.<br><br><b>Folge:</b> Der Bürger hat ausnahmsweise einen ANSPRUCH auf die eine verbleibende Maßnahme – nicht nur auf fehlerfreie Entscheidung.",
      options: [
        { label: "Nein – Entscheidungsspielraum bleibt", next: "e_fehlerfrei", tone: "pos" },
        { label: "Ja – nur eine Entscheidung rechtmäßig", next: "e_reduktion", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_gebunden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Rechtsfolge der EGL",
      title: "Gebundene Entscheidung – kein Ermessen zu prüfen",
      text: "Die Norm ordnet die Rechtsfolge zwingend an (bzw. es liegt eine Soll-Vorschrift im Regelfall vor). Sind die Tatbestandsvoraussetzungen erfüllt, MUSS die Behörde handeln; der Bürger hat einen Anspruch.\n\nZu prüfen bleiben nur die allgemeinen Rechtsfehler der Rechtsfolge (Bestimmtheit § 37 I VwVfG, Möglichkeit); die Verhältnismäßigkeit wird bei gebundenen Entscheidungen nur sehr eingeschränkt geprüft, da der Gesetzgeber die Abwägung bereits getroffen hat."
    },

    e_fehlerfrei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 40 VwVfG",
      title: "Ermessen fehlerfrei ausgeübt",
      text: "Die Behörde hat ihr Ermessen erkannt, den gesetzlichen Rahmen eingehalten und ihre Entscheidung an Zweck der Ermächtigung, Verhältnismäßigkeit und Gleichbehandlung ausgerichtet. Die Ermessensentscheidung ist rechtmäßig.\n\nGerichtliche Kontrolle: Das Gericht prüft nach § 114 S. 1 VwGO NUR, ob die gesetzlichen Grenzen überschritten oder das Ermessen zweckwidrig gebraucht wurde – es setzt nicht sein eigenes Ermessen an die Stelle der Behörde."
    },

    e_reduktion: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Ergebnis: Ermessensreduzierung auf Null",
      norm: "§ 40 VwVfG",
      title: "Ermessensreduzierung auf Null – Anspruch des Bürgers",
      text: "Nur eine Entscheidung ist rechtsfehlerfrei möglich. Trifft die Behörde diese Entscheidung, handelt sie rechtmäßig; jede andere Entscheidung (auch das Untätigbleiben) wäre ermessensfehlerhaft.\n\nDer Bürger hat in diesem Fall einen echten Anspruch auf die verbleibende Maßnahme – durchsetzbar mit Verpflichtungswiderspruch und Verpflichtungsklage (Spruchreife liegt vor, § 113 V 1 VwGO)."
    },

    e_fehler_nichtgebrauch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwVfG, § 114 S. 1 VwGO",
      title: "Ermessensnichtgebrauch – Entscheidung rechtswidrig",
      text: "Die Behörde hat das ihr eingeräumte Ermessen nicht ausgeübt bzw. verkannt. Die Entscheidung ist rechtswidrig.\n\nBeachte: Ein völliger Ermessensausfall kann im Prozess NICHT über § 114 S. 2 VwGO nachgeholt werden – die Vorschrift erlaubt nur das ERGÄNZEN vorhandener Ermessenserwägungen. Die Behörde muss neu entscheiden (bei Verpflichtungsbegehren: Bescheidung nach § 113 V 2 VwGO)."
    },

    e_fehler_ueberschreitung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 114 S. 1 VwGO",
      title: "Ermessensüberschreitung – Entscheidung rechtswidrig",
      text: "Die gewählte Rechtsfolge liegt außerhalb des gesetzlichen Rahmens der Ermächtigung. Die Entscheidung ist rechtswidrig und auf Widerspruch bzw. Anfechtungsklage hin aufzuheben."
    },

    e_fehler_fehlgebrauch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwVfG, § 114 S. 1 VwGO",
      title: "Ermessensfehlgebrauch – Entscheidung rechtswidrig",
      text: "Die Behörde hat ihr Ermessen nicht in einer dem Zweck der Ermächtigung entsprechenden Weise ausgeübt (sachfremde Erwägungen, Abwägungsdefizit, Verstoß gegen Verhältnismäßigkeit oder Selbstbindung). Die Entscheidung ist rechtswidrig.\n\nIm gerichtlichen Verfahren kann die Behörde ihre Ermessenserwägungen nach § 114 S. 2 VwGO ergänzen – tragende neue Erwägungen können aber nicht vollständig ausgetauscht werden."
    }
  },

  routers: {}
});
