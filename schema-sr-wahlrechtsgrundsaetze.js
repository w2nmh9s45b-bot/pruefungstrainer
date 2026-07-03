/*
 * Prüfungsschema: Wahlrechtsgrundsätze, Art. 38 I 1 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic) – A.I.1.a) ee) Wahlrechtsgrundsätze
 *  - Normen verifiziert an Grundgesetz.md, BWahlG.md
 *
 * Stationen: grundsatz → schema → pruefung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-wahlrechtsgrundsaetze",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsorganisation",
  title: "Wahlrechtsgrundsätze, Art. 38 I 1 GG",
  description: "Allgemein, unmittelbar, frei, gleich und geheim (plus Öffentlichkeit der Wahl): zwei Prüfschemata – Eingriffsprüfung für unmittelbar/frei/geheim, Gleichheitsprüfung für allgemein/gleich mit Zählwert und Erfolgswert.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "grundsatz", label: "Grundsatz" },
    { id: "schema", label: "Prüfschema" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verstoß gegen Art. 38 I 1 GG",
    neg: "Kein Verstoß",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundsatz",
      kind: "frage",
      norm: "Art. 38 I 1 GG",
      title: "Welcher Wahlrechtsgrundsatz ist betroffen?",
      text: "Die Abgeordneten werden in allgemeiner, unmittelbarer, freier, gleicher und geheimer Wahl gewählt. Zwischen den Grundsätzen besteht keine Hierarchie. Hinzu kommt der ungeschriebene Grundsatz der Öffentlichkeit der Wahl.",
      hint: "In RLP: Art. 76 I LV entspricht Art. 38 I 1 GG. Die Wahlgleichheit ist grundrechtsgleiches Recht – mit der Verfassungsbeschwerde rügbar (Art. 94 I Nr. 4a GG).",
      options: [
        { label: "Gleichheit der Wahl", detail: "Zählwert/Erfolgswert, 5%-Klausel, Chancengleichheit der Parteien", next: "q_gleich_art", tone: "neutral" },
        { label: "Allgemeinheit der Wahl", detail: "Wer darf wählen und gewählt werden?", next: "q_allgemein", tone: "neutral" },
        { label: "Unmittelbarkeit der Wahl", next: "q_unmittelbar", tone: "neutral" },
        { label: "Freiheit / Geheimheit / Öffentlichkeit", next: "q_frei_geheim", tone: "neutral" }
      ]
    },

    /* ================= Gleichheit ================= */

    q_gleich_art: {
      station: "schema",
      kind: "frage",
      norm: "Art. 38 I 1 GG",
      title: "Aktive oder passive Wahlrechtsgleichheit?",
      text: "Prüfschema für „allgemein“ und „gleich“: (1) Ungleichbehandlung von Vergleichsgruppen, (2) Rechtfertigung – häufig durch Gründe aus dem GG zur Sicherung des demokratischen Systems.",
      def: "<b>Aktive Wahlrechtsgleichheit</b> („selbst wählen“): jede Stimme zählt gleich. <b>Passive Wahlrechtsgleichheit</b> („gewählt werden“): Parteien haben aus Art. 3 I i. V. m. Art. 21 GG Anspruch auf <b>Chancengleichheit</b> – wichtigste Ausprägung: das Neutralitätsgebot des Staates.",
      options: [
        { label: "Aktiv: Zählwert betroffen", next: "q_zaehlwert", tone: "neutral" },
        { label: "Aktiv: Erfolgswert betroffen", detail: "z. B. 5%-Sperrklausel (§ 4 II 2 Nr. 2 BWahlG)", next: "q_erfolgswert", tone: "neutral" },
        { label: "Passiv: Chancengleichheit der Parteien", detail: "z. B. Regierung macht Wahlwerbung", next: "q_neutralitaet", tone: "neutral" }
      ]
    },

    q_zaehlwert: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 38 I 1 GG",
      title: "Wird der Zählwert einer Stimme angetastet?",
      def: "<b>Zählwert:</b> Jede Stimme muss bei der Auszählung genau ein Mal gezählt werden („one man, one vote“). Eine Rechtfertigung von Eingriffen ist <b>nie</b> möglich – Kernelement demokratischer Wahlen.",
      options: [
        { label: "Ja, Stimme wird nicht/mehrfach gezählt", next: "e_verstoss_zaehlwert", tone: "neg" },
        { label: "Nein", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    q_erfolgswert: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 38 I 1 GG, § 4 II 2 Nr. 2 BWahlG",
      title: "Ungleicher Erfolgswert gerechtfertigt?",
      def: "<b>Erfolgswert:</b> Jede Stimme muss nach der Auszählung gleichermaßen für die Sitzverteilung berücksichtigt werden. Ungleichbehandlungen sind aus Gründen der <b>Funktionsfähigkeit des Parlaments</b> grundsätzlich rechtfertigungsfähig (klassisch: 5%-Sperrklausel) – aber nicht grenzenlos, damit die demokratische Wahl nicht leerläuft.",
      options: [
        { label: "Ja, Sicherung der Funktionsfähigkeit (z. B. 5%-Klausel)", next: "e_kein_verstoss", tone: "pos" },
        { label: "Nein, kein tragfähiger Grund", next: "e_verstoss", tone: "neg" }
      ]
    },

    q_neutralitaet: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 3 I i. V. m. Art. 21 GG",
      title: "Verstößt der Staat gegen das Neutralitätsgebot?",
      text: "Die Regierung darf keine Wahlwerbung „als Regierung“ machen; zulässig ist nur die sachliche Information der Bürger über ihr Handeln.",
      options: [
        { label: "Wahlwerbung mit staatlichen Mitteln", next: "e_verstoss", tone: "neg" },
        { label: "Sachliche Öffentlichkeitsarbeit", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Allgemeinheit ================= */

    q_allgemein: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 38 I 1, II GG, §§ 12, 15 BWahlG",
      title: "Ausschluss vom aktiven oder passiven Wahlrecht gerechtfertigt?",
      def: "<b>Allgemeinheit:</b> Recht, selbst zu wählen (aktiv, § 12 BWahlG) und wählbar zu sein (passiv, § 15 BWahlG). Anerkannte Differenzierungen: nur Deutsche (Volkssouveränität, Art. 20 II, 116 I GG), Mindestalter 18 Jahre (Art. 38 II GG), Wohnsitzerfordernisse (§§ 12 ff. BWahlG).",
      options: [
        { label: "Differenzierung im GG selbst angelegt", detail: "Deutschen-Erfordernis, Wahlalter Art. 38 II GG", next: "e_kein_verstoss", tone: "pos" },
        { label: "Gesetzliche Differenzierung mit zwingendem Grund", next: "e_kein_verstoss", tone: "pos" },
        { label: "Ausschluss ohne tragfähigen Grund", next: "e_verstoss", tone: "neg" }
      ]
    },

    /* ================= Unmittelbarkeit ================= */

    q_unmittelbar: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 38 I 1 GG",
      title: "Liegt ein weiterer Willensakt zwischen Wähler und Mandat?",
      def: "<b>Unmittelbarkeit:</b> Zwischen den Wählern und der Ermittlung des Gewählten liegt kein weiterer Willensakt – „der Wähler muss das letzte Wort haben“ (BVerfG). <b>Unzulässig:</b> Wahlmänner (deren eigene Entscheidung dazwischentritt). <b>Zulässig:</b> starre Landeslisten (§ 6 BWahlG) – die Reihenfolge steht vor der Wahl fest, kein neuer Willensakt.",
      options: [
        { label: "Wahlmänner mit eigener Entscheidungsmacht", next: "e_verstoss", tone: "neg" },
        { label: "Starre Landesliste (§ 6 BWahlG)", next: "e_kein_verstoss", tone: "pos" },
        { label: "Kein weiterer Willensakt", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Freiheit / Geheimheit / Öffentlichkeit ================= */

    q_frei_geheim: {
      station: "pruefung",
      kind: "frage",
      norm: "Art. 38 I 1 GG",
      title: "Welcher Grundsatz – und ist er beeinträchtigt?",
      text: "Prüfschema für „unmittelbar“, „frei“ und „geheim“: (1) Schutzbereich, (2) Eingriff, (3) Rechtfertigung.",
      def: "<b>Freiheit:</b> kein Zwang bei der Wahlentscheidung („wie/wer“); nach h. M. auch Freiheit, ob überhaupt gewählt wird (Diskussion um Wahlpflicht). <b>Geheimheit:</b> Stimmabgabe verdeckt/anonym und unbeeinflusst; die Entscheidung darf auch im Nachhinein nicht nachprüfbar sein. <b>Öffentlichkeit:</b> Kontrolle und Nachvollziehbarkeit von Wahlvorgang, Auszählung und Ergebnis.",
      options: [
        { label: "Zwang auf die Wahlentscheidung", next: "e_verstoss", tone: "neg" },
        { label: "Stimmabgabe nachprüfbar / beobachtbar", detail: "Verstoß gegen die Geheimheit", next: "e_verstoss", tone: "neg" },
        { label: "Auszählung nicht nachvollziehbar", detail: "Verstoß gegen die Öffentlichkeit der Wahl", next: "e_verstoss", tone: "neg" },
        { label: "Kein Eingriff / gerechtfertigt", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verstoss_zaehlwert: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen die Wahlgleichheit (Zählwert)",
      text: "Der Zählwert („one man, one vote“) ist Kernelement der demokratischen Wahl – Eingriffe sind niemals zu rechtfertigen. Es liegt ein Verstoß gegen Art. 38 I 1 GG vor."
    },
    e_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen einen Wahlrechtsgrundsatz",
      text: "Die Beeinträchtigung des Wahlrechtsgrundsatzes aus Art. 38 I 1 GG ist nicht durch Gründe von Verfassungsrang (insb. Sicherung der Funktionsfähigkeit des Parlaments bzw. des demokratischen Systems) gerechtfertigt. Das Wahlrecht ist als grundrechtsgleiches Recht mit der Verfassungsbeschwerde durchsetzbar."
    },
    e_kein_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Verstoß gegen Art. 38 I 1 GG",
      text: "Die Regelung/Maßnahme greift nicht in den Wahlrechtsgrundsatz ein oder ist gerechtfertigt – etwa durch die Funktionsfähigkeit des Parlaments (Erfolgswert: 5%-Klausel), im GG selbst angelegte Differenzierungen (Art. 38 II, 116 I GG) oder weil kein weiterer Willensakt zwischen Wähler und Mandat tritt (starre Listen)."
    }
  }
});
