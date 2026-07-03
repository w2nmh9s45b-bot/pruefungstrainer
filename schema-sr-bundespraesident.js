/*
 * Prüfungsschema: Bundespräsident – Wahl, Gegenzeichnung, Prüfungsrecht bei der Ausfertigung
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic) – A.I.2.b) Bundespräsident, Art. 54-61 GG
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: wahl → aufgaben → pruefungsrecht → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-bundespraesident",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsorganisation",
  title: "Bundespräsident, Art. 54–61, 82 GG",
  description: "Wahl durch die Bundesversammlung (Art. 54 GG), Vertretung (Art. 57 GG), Gegenzeichnung (Art. 58 GG) und der Klassiker: das Prüfungsrecht bei der Ausfertigung von Gesetzen (Art. 82 I GG) – formell vollumfänglich, materiell nur bei evidenten Fehlern.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "wahl", label: "Wahl/Stellung" },
    { id: "aufgaben", label: "Aufgaben" },
    { id: "pruefungsrecht", label: "Prüfungsrecht" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Zulässig / wirksam",
    neg: "Unzulässig / unwirksam",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "wahl",
      kind: "frage",
      norm: "Art. 54–61, 82 GG",
      title: "Was wird geprüft?",
      text: "Der Bundespräsident ist das Staatsoberhaupt. In RLP gibt es keine Entsprechung – seine Aufgaben nimmt weitgehend der Ministerpräsident wahr (z. B. Art. 59 I GG ≙ Art. 101 LV, Art. 82 I GG ≙ Art. 113 I LV).",
      options: [
        { label: "Wahl und Amtszeit", detail: "Art. 54 GG", next: "q_wahl", tone: "neutral" },
        { label: "Aufgaben und Ermessen", detail: "gebundene Zuständigkeiten vs. Reservefunktion", next: "q_aufgaben", tone: "neutral" },
        { label: "Gegenzeichnung", detail: "Art. 58 GG", next: "q_gegenzeichnung", tone: "neutral" },
        { label: "Prüfungsrecht bei der Ausfertigung", detail: "Art. 82 I GG – der Klausurklassiker", next: "q_ausfertigung", tone: "neutral" }
      ]
    },

    q_wahl: {
      station: "wahl",
      kind: "frage",
      norm: "Art. 54 GG",
      title: "Wahl durch die Bundesversammlung",
      def: "<b>Art. 54 I 1 GG:</b> Wahl ohne Aussprache durch die Bundesversammlung (Mitglieder des BT + gleiche Anzahl von Delegierten der Landtage, Art. 54 III GG). <b>Wählbarkeit (Art. 54 I 2 GG):</b> Deutscher mit Wahlrecht zum BT, 40. Lebensjahr vollendet. <b>Amtszeit (Art. 54 II GG):</b> fünf Jahre, einmalige anschließende Wiederwahl. <b>Mehrheit (Art. 54 VI GG):</b> erste zwei Wahlgänge Mehrheit der Mitglieder der Bundesversammlung, danach relative Mehrheit. <b>Vertretung (Art. 57 GG):</b> strikt der Bundesratspräsident („Abwesenheitsvertreter“), kein Spielraum.",
      options: [
        { label: "Weiter zu den Aufgaben", next: "q_aufgaben", tone: "neutral" },
        { label: "Ergebnis anzeigen", next: "e_wahl", tone: "neutral" }
      ]
    },

    q_aufgaben: {
      station: "aufgaben",
      kind: "frage",
      norm: "Art. 58–64, 82 GG",
      title: "Hat der Bundespräsident bei der Aufgabe politisches Ermessen?",
      def: "<b>Grundsatz – KEIN politisches Ermessen:</b> Art. 59 I (völkerrechtliche Vertretung), Art. 60 I (Ernennung Beamte/Richter/Soldaten), Art. 63 I (Kanzlervorschlag – rechtlich frei, praktisch gebunden), Art. 64 I (Ministerernennung), Art. 67 I GG (Ernennung nach Misstrauensvotum). <b>Ausnahme – MIT Ermessen:</b> Art. 60 II (Begnadigungsrecht), „Reservefunktion“: Art. 63 IV 3, 68 I, 81 GG (Gesetzgebungsnotstand); ungeschrieben: Integrationsfunktion (Reden, Repräsentation).",
      options: [
        { label: "Gebundene Aufgabe", detail: "z. B. Ernennung des im Misstrauensvotum Gewählten", next: "e_gebunden", tone: "neutral" },
        { label: "Reservefunktion / Ermessen", next: "e_ermessen", tone: "neutral" },
        { label: "Weiter zur Gegenzeichnung", next: "q_gegenzeichnung", tone: "neutral" }
      ]
    },

    q_gegenzeichnung: {
      station: "aufgaben",
      kind: "frage",
      norm: "Art. 58 GG",
      title: "Bedarf die Maßnahme der Gegenzeichnung?",
      text: "Anordnungen und Verfügungen des BPräs bedürfen zu ihrer Gültigkeit der Gegenzeichnung durch den Kanzler oder den zuständigen Minister. Funktion: Einbindung der Bundesregierung in die Verantwortung – Begrenzung der Macht des BPräs.",
      def: "<b>„Anordnungen und Verfügungen“:</b> nur die im GG vorgesehenen (z. B. Art. 60, 63, 64, Ausfertigung nach Art. 82 GG) – <b>nicht</b> Reden und Interviews (ganz h. M.). Ausnahmen von der Gegenzeichnungspflicht in Art. 58 S. 2 GG (u. a. Ernennung/Entlassung des Kanzlers, Auflösung nach Art. 63 IV GG).",
      options: [
        { label: "Anordnung/Verfügung ohne Gegenzeichnung", next: "e_ungueltig", tone: "neg" },
        { label: "Gegenzeichnung liegt vor / Ausnahme greift", next: "q_ausfertigung", tone: "pos" },
        { label: "Rede/Interview", detail: "Keine Anordnung – Art. 58 GG nicht anwendbar", next: "e_rede", tone: "neutral" }
      ]
    },

    /* ================= Prüfungsrecht Art. 82 GG ================= */

    q_ausfertigung: {
      station: "pruefungsrecht",
      kind: "frage",
      norm: "Art. 82 I 1 GG",
      title: "Ausfertigung: Was prüft der Bundespräsident?",
      text: "Gesetze werden nach Gegenzeichnung vom BPräs ausgefertigt und im BGBl. verkündet. Die Ausfertigung umfasst die Prüfung der Authentizität (stimmt die Urschrift mit dem beschlossenen Text überein?) und der Legalität (ist das Gesetz verfassungskonform?).",
      options: [
        { label: "Formelle Verfassungsmäßigkeit zweifelhaft", next: "q_formell", tone: "neutral" },
        { label: "Materielle Verfassungsmäßigkeit zweifelhaft", next: "q_materiell", tone: "neutral" },
        { label: "Keine Bedenken", next: "e_ausgefertigt", tone: "pos" }
      ]
    },

    q_formell: {
      station: "pruefungsrecht",
      kind: "frage",
      norm: "Art. 82 I 1 GG",
      title: "Formelles Prüfungsrecht: Liegt ein Verfahrens-/Kompetenzfehler vor?",
      def: "Die <b>formelle Verfassungsmäßigkeit</b> (Zuständigkeit, Verfahren, Form) darf der BPräs <b>vollumfänglich</b> prüfen – das folgt aus dem Wortlaut des Art. 82 I 1 GG („die nach den Vorschriften dieses Grundgesetzes zustande gekommenen Gesetze“).",
      options: [
        { label: "Ja, formeller Fehler festgestellt", next: "e_verweigert_formell", tone: "pos" },
        { label: "Nein, formell ordnungsgemäß", next: "e_ausgefertigt", tone: "pos" }
      ]
    },

    q_materiell: {
      station: "pruefungsrecht",
      kind: "frage",
      norm: "Art. 82 I 1 GG (h. M.)",
      title: "Materielles Prüfungsrecht: Ist der Fehler evident?",
      text: "Die materielle Verfassungsmäßigkeit darf der BPräs nach h. M. grundsätzlich ebenfalls prüfen (Begründung heute: Verfassungsgewohnheitsrecht durch ständige Übung der bisherigen Präsidenten).",
      def: "<b>Aber:</b> Verweigern darf er die Ausfertigung nur bei einem <b>evidenten</b> (offensichtlichen) Fehler – sonst Eingriff in die Kernkompetenz von Legislative und Judikative (Verwerfungsmonopol des BVerfG, Art. 100 GG). Bloße Zweifel genügen nicht; ein Verstoß gegen Art. 79 III GG ist jedenfalls evident.",
      options: [
        { label: "Evidenter Verfassungsverstoß (z. B. Art. 79 III GG)", next: "e_verweigert_materiell", tone: "pos" },
        { label: "Nur Zweifel an der Verfassungsmäßigkeit", next: "e_ausfertigen_muessen", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wahl: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Wahl und Stellung des Bundespräsidenten",
      text: "Der BPräs wird ohne Aussprache von der Bundesversammlung gewählt (Art. 54 I 1 GG), Amtszeit fünf Jahre mit einmaliger Wiederwahl (Art. 54 II GG). Bei Verhinderung vertritt ihn der Bundesratspräsident (Art. 57 GG) – die strengste Vertretungsregel unter den Verfassungsorganen (kein Spielraum). Einzelzuweisung der Gesetzgebungskompetenz: Art. 54 VII GG."
    },
    e_gebunden: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Gebundene Zuständigkeit – kein politisches Ermessen",
      text: "Bei den gebundenen Aufgaben (z. B. Ernennung des nach Art. 63 II oder Art. 67 GG Gewählten) hat der Bundespräsident kein politisches Ermessen – er muss handeln. Seine Rolle ist hier formal-notariell."
    },
    e_ermessen: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Reservefunktion – politisches Ermessen",
      text: "In den Fällen der Reservefunktion (Art. 63 IV 3, 68 I, 81 GG) und beim Begnadigungsrecht (Art. 60 II GG) entscheidet der Bundespräsident nach politischem Ermessen; hinzu kommt die ungeschriebene Integrationsfunktion des Staatsoberhaupts."
    },
    e_ungueltig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Ungültig mangels Gegenzeichnung",
      text: "Ohne Gegenzeichnung durch Kanzler oder zuständigen Minister ist die Anordnung/Verfügung des BPräs nach Art. 58 GG rechtlich unwirksam (praktisch noch nie vorgekommen)."
    },
    e_rede: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Reden und Interviews: keine Gegenzeichnung nötig",
      text: "Reden und Interviews sind keine „Anordnungen und Verfügungen“ i. S. d. Art. 58 GG (ganz h. M.) – sie sind Ausdruck der Integrationsfunktion und bedürfen keiner Gegenzeichnung."
    },
    e_ausgefertigt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Gesetz ist auszufertigen",
      text: "Authentizität und Legalität sind gegeben – der Bundespräsident fertigt das Gesetz aus und es wird im Bundesgesetzblatt verkündet (Art. 82 I GG). Drei Funktionen der Ausfertigung: Legalitäts-, Authentizitäts- und Repräsentations-/Integrationsfunktion."
    },
    e_ausfertigen_muessen: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verweigerung unzulässig – bloße Zweifel genügen nicht",
      text: "Bei bloßen Zweifeln an der materiellen Verfassungsmäßigkeit darf der Bundespräsident die Ausfertigung nicht verweigern – die Verwerfung verfassungswidriger Gesetze ist dem BVerfG vorbehalten. Er muss ausfertigen; die Klärung erfolgt ggf. im Normenkontrollverfahren."
    },
    e_verweigert_formell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verweigerung wegen formellen Fehlers zulässig",
      text: "Da das Gesetz nicht „nach den Vorschriften dieses Grundgesetzes zustande gekommen“ ist (Art. 82 I 1 GG), darf der Bundespräsident die Ausfertigung verweigern – sein formelles Prüfungsrecht ist vollumfänglich."
    },
    e_verweigert_materiell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verweigerung wegen evidenten Verstoßes zulässig",
      text: "Bei einem evidenten materiellen Verfassungsverstoß – jedenfalls bei Verletzung des Art. 79 III GG – darf der Bundespräsident die Ausfertigung nach h. M. verweigern (materielles Prüfungsrecht kraft Verfassungsgewohnheitsrechts)."
    }
  }
});
