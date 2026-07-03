/*
 * Prüfungsschema: Verletzung eines Freiheitsgrundrechts (Grundschema)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "03. LE 03-05 - Einführung in die Freiheitsgrundrechte am Beispiel von Art. 2 I GG" (Weidenbach, FS I)
 *  - "06. LE 06 - Art. 1 I GG und Art. 2 II S. 1 GG" (Weidenbach, FS I)
 *  - Methodik: Gutachtenstil aus Modul 1 (Obersatz - Definition - Subsumtion - Ergebnis)
 *  - Normen verifiziert an Gesetze/md/Verfassungsrecht/Grundgesetz.md
 *
 * Stationen: schutz → eingriff → schranke → sschranke → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-freiheitsgrundrechte",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte – Grundschema",
  title: "Prüfung eines Freiheitsgrundrechts",
  description: "Das zentrale Grundschema für alle Freiheitsgrundrechte: Schutzbereich (persönlich/sachlich), Eingriff (moderner Eingriffsbegriff), verfassungsrechtliche Rechtfertigung mit Schranke, Schranken-Schranke und Verhältnismäßigkeit – Art. 1 III, 2 I, 20 III GG.",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "schranke", label: "Schranke" },
    { id: "sschranke", label: "Schranken-Schranke" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Grundrecht verletzt",
    neg: "Keine Grundrechtsverletzung",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= I. Schutzbereich ================= */

    start: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 1–19 GG",
      title: "Welches Freiheitsgrundrecht wird geprüft?",
      text: "Obersatz: X könnte durch die staatliche Maßnahme in seinem Grundrecht aus Art. … GG verletzt sein. Das ist der Fall, wenn der Schutzbereich eröffnet ist, ein Eingriff vorliegt und dieser Eingriff verfassungsrechtlich nicht gerechtfertigt ist.",
      def: "<b>Freiheitsrechte</b> garantieren dem Grundrechtsträger bestimmte Handlungsfreiheiten, Rechte und Rechtsgüter (z. B. Art. 1 I, 2 I, 8 I, 12 I GG). <b>Gleichheitsrechte</b> (Art. 3 GG) verbieten Ungleichbehandlungen – dafür gilt ein eigenes Schema.",
      hint: "Methodik aus Modul 1: Gutachtenstil – Obersatz, Definition, Subsumtion, Ergebnis. Immer das speziellste Grundrecht zuerst prüfen; Art. 2 I GG ist nur Auffanggrundrecht.",
      options: [
        { label: "Spezielles Freiheitsgrundrecht", detail: "z. B. Art. 2 II, 4, 5, 8, 12, 14 GG – geht als lex specialis vor", next: "q_pers_traeger", tone: "neutral" },
        { label: "Allgemeine Handlungsfreiheit, Art. 2 I GG", detail: "Auffanggrundrecht: jede Form menschlichen Verhaltens („Jeder kann tun und lassen, was er will“)", next: "q_pers_traeger", set: { art2: true }, tone: "neutral" },
        { label: "Gleichheitsrecht (Art. 3 GG) betroffen", detail: "Ungleichbehandlung → eigenes Schema Gleichheitsgrundrechte verwenden", next: "e_gleichheit", tone: "warn" }
      ]
    },

    q_pers_traeger: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 116 I, 19 III GG",
      title: "Persönlicher Schutzbereich: Wer beruft sich auf das Grundrecht?",
      text: "Zuerst klären: Deutschenrecht oder Jedermannsrecht? Dann die Grundrechtsfähigkeit des Betroffenen prüfen.",
      def: "<b>Jedermannsrechte</b> stehen allen Menschen zu (z. B. Art. 2 I, 2 II, 3, 5 I GG). <b>Deutschenrechte</b> stehen nur Deutschen i. S. d. Art. 116 I GG zu (z. B. Art. 8, 12, 33 GG). EU-Bürger werden über das Diskriminierungsverbot (Art. 18 AEUV) einbezogen; Nicht-EU-Ausländer über Art. 2 I GG.",
      options: [
        { label: "Natürliche Person", detail: "Grundrechtsfähig, da rechtsfähig (vgl. § 1 BGB); nasciturus bei Art. 2 II 1 GG (Fristenlösungsurteil), postmortal bei Art. 1 I GG (Mephisto)", next: "q_pers_sonder", tone: "pos" },
        { label: "Juristische Person des Privatrechts", detail: "Nur nach Art. 19 III GG: inländisch und Grundrecht dem Wesen nach (kollektiv) anwendbar", next: "q_jurperson", tone: "neutral" },
        { label: "Juristische Person des öffentlichen Rechts", detail: "Grundsätzlich nicht grundrechtsfähig", next: "e_konfusion", tone: "neg" },
        { label: "Ausländer beruft sich auf Deutschenrecht", detail: "z. B. Nicht-EU-Ausländer auf Art. 8 oder 12 GG", next: "e_auslaender", tone: "warn" }
      ]
    },

    q_jurperson: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 19 III GG",
      title: "Ist das Grundrecht dem Wesen nach auf die juristische Person anwendbar?",
      text: "Nach Art. 19 III GG gelten die Grundrechte auch für inländische juristische Personen (Sitz der Hauptverwaltung im Inland), soweit sie ihrem Wesen nach auf diese anwendbar sind – d. h. wenn die Ausübung kollektiv möglich ist.",
      def: "<b>Anwendbar:</b> z. B. Art. 2 I, 4 II, 8, 9, 12, 14 GG. <b>Nicht anwendbar</b> (nur individuell): Art. 1 I (Menschenwürde), Art. 2 II GG (körperliche Unversehrtheit), Art. 3 II, III, 6, 12 III GG.",
      options: [
        { label: "Ja, kollektive Ausübung möglich", detail: "z. B. Verein, AG, GmbH, OHG, KG, GbR, Parteien", next: "q_sachlich", tone: "pos" },
        { label: "Nein, nur individuell ausübbar", next: "e_wesen", tone: "neg" }
      ]
    },

    q_pers_sonder: {
      station: "schutz",
      kind: "frage",
      norm: "—",
      title: "Sonderstatusverhältnis oder Minderjährigkeit zu thematisieren?",
      text: "Nur ansprechen, wenn der Sachverhalt Anhaltspunkte enthält: gesteigerte Pflichtbindung (Beamte, Schüler, Strafgefangene, Soldaten) oder Grundrechtsmündigkeit Minderjähriger.",
      def: "<b>Sonderstatus (Beamte):</b> Eingriff nur im Grundverhältnis (persönliche Rechtsstellung, z. B. Ernennung, Entlassung, Versetzung), kein Eingriff im Betriebsverhältnis (Amtsstellung, z. B. Umsetzung, Weisung). <b>Grundrechtsmündigkeit:</b> Einsichtsfähigkeit („Verstandsreife“) in die Tragweite des Grundrechts anhand der Indizien im Sachverhalt; sonst machen die Eltern den Verstoß geltend (§§ 1626, 1629 I BGB).",
      options: [
        { label: "Keine Anhaltspunkte – weiter", detail: "Grundrechtsfähigkeit unproblematisch bejahen", next: "q_sachlich", tone: "pos" },
        { label: "Beamter: Maßnahme nur im Betriebsverhältnis", detail: "Änderung des Aufgabenbereichs, Umsetzung, Weisung – keine Rechtsaktförmigkeit/Intensität", next: "e_betriebsverhaeltnis", tone: "neg" },
        { label: "Minderjähriger ohne Einsichtsfähigkeit", detail: "Grundrechtsfähig, aber nicht grundrechtsmündig", next: "e_muendigkeit", tone: "warn" }
      ]
    },

    q_sachlich: {
      station: "schutz",
      kind: "frage",
      norm: "jeweiliges Grundrecht",
      title: "Sachlicher Schutzbereich eröffnet?",
      text: "Der sachliche Schutzbereich legt das geschützte Verhalten oder den geschützten Lebensbereich fest: Art. 1 I „Würde“, Art. 2 I „freie Entfaltung der Persönlichkeit“, Art. 5 I 1 „Meinung“, Art. 8 I „versammeln“, Art. 12 I „Beruf“ …",
      def: "<b>Art. 2 I GG (allgemeine Handlungsfreiheit):</b> geschützt ist jede Form menschlichen Verhaltens/Handelns – „Jeder Mensch kann tun und lassen, was er will“ (z. B. auch die freie Hundehaltung, Hundesteuerfall).",
      hint: "Verhalten unter die Definition des Schutzbereichs subsumieren – bei Art. 2 I GG fast immer eröffnet.",
      options: [
        { label: "Ja, Verhalten fällt unter den Schutzbereich", next: "q_eingriff", tone: "pos" },
        { label: "Nein, Verhalten nicht geschützt", detail: "ggf. Auffanggrundrecht Art. 2 I GG prüfen", next: "e_kein_schutz", tone: "neg" }
      ]
    },

    /* ================= II. Eingriff ================= */

    q_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "—",
      title: "Liegt ein Eingriff in den Schutzbereich vor?",
      text: "Zwischenergebnis: Der Schutzbereich ist eröffnet. ✓",
      def: "<b>Eingriff (moderner Eingriffsbegriff):</b> jedes staatliche Handeln, das ein vom Schutzbereich erfasstes Verhalten ganz oder teilweise unmöglich macht oder erschwert. Erfasst sind Maßnahmen aller drei Staatsgewalten (Gesetz, VA, Urteil) sowie faktische Maßnahmen und mittelbare Eingriffe, wenn die Beeinträchtigung typische, objektiv vorhersehbare Nebenfolge staatlichen Handelns ist (Bsp.: behördliche Produktwarnung).",
      hint: "Abzugrenzen von bloßen Belästigungen und Bagatellen (Bsp.: Stau durch Verkehrskontrolle).",
      options: [
        { label: "Ja, klassischer Eingriff", detail: "Unmittelbar, final, imperativ – z. B. Gesetz, VA, Urteil", next: "q_verzicht", tone: "pos" },
        { label: "Ja, faktischer/mittelbarer Eingriff", detail: "Typische, objektiv vorhersehbare Nebenfolge staatlichen Handelns", next: "q_verzicht", tone: "pos" },
        { label: "Nein, bloße Belästigung/Bagatelle", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    q_verzicht: {
      station: "eingriff",
      kind: "frage",
      norm: "Rechtsgedanke § 183 BGB",
      title: "Problem Grundrechtsverzicht: Hat der Betroffene eingewilligt?",
      text: "Nur bei Anhaltspunkten im Sachverhalt ansprechen. Ein Grundrechtsverzicht liegt vor, wenn der Betroffene in den Grundrechtseingriff einwilligt.",
      def: "<b>Grundsatz:</b> Verzicht unter bestimmten Voraussetzungen zulässig. <b>Ausnahme 1:</b> Bei Art. 1 I GG stets ausgeschlossen (höchster Rechtswert, universelles Menschenrecht). <b>Ausnahme 2:</b> Bei Art. 2 II 1 Var. 1 GG (Leben) nur unter strengsten Voraussetzungen (BVerfG: vorherige umfassende, nachgewiesene Aufklärung).",
      options: [
        { label: "Kein Verzicht / keine Anhaltspunkte", next: "q_schranke", tone: "neutral" },
        { label: "Wirksamer Grundrechtsverzicht", detail: "Nicht bei Art. 1 I GG möglich!", next: "e_verzicht", tone: "warn" }
      ]
    },

    /* ================= III.1 Schranke ================= */

    q_schranke: {
      station: "schranke",
      kind: "frage",
      norm: "jeweiliges Grundrecht",
      title: "Wie kann das Grundrecht eingeschränkt werden (Schranke)?",
      text: "Zwischenergebnis: Ein Eingriff liegt vor. ✓\n\nDer Staat kann nur innerhalb der jeweiligen Schranken in den Schutzbereich eingreifen. Der Wortlaut des Grundrechts entscheidet über die Schrankenart.",
      def: "<b>Schrankentrias des Art. 2 I GG:</b> Rechte Dritter, Sittengesetz, verfassungsmäßige Ordnung. Die „verfassungsmäßige Ordnung“ wirkt als einfacher Gesetzesvorbehalt – jede formell und materiell verfassungsgemäße Rechtsnorm genügt; Rechte Dritter und Sittengesetz gehen darin auf.",
      options: [
        { label: "Einfacher Gesetzesvorbehalt", detail: "„durch Gesetz oder aufgrund eines Gesetzes“ ohne weitere Anforderungen (z. B. Art. 2 I, 8 II, 12 I 2 GG)", next: "q_gesetz_art", set: { schranke: "einfach" }, tone: "neutral" },
        { label: "Qualifizierter Gesetzesvorbehalt", detail: "Zusätzliche Anforderungen: bestimmte Voraussetzungen (Art. 11 II), Zwecke oder Mittel (Art. 5 II GG)", next: "q_gesetz_art", set: { schranke: "qualifiziert" }, tone: "neutral" },
        { label: "Verfassungsunmittelbare Schranke", detail: "Eingriff direkt aus dem GG, kein Gesetz nötig (z. B. Art. 8 I „friedlich und ohne Waffen“, Art. 9 II GG)", next: "q_vu_schranke", set: { schranke: "unmittelbar" }, tone: "neutral" },
        { label: "Grundrecht ohne Gesetzesvorbehalt", detail: "z. B. Art. 4 I, 5 III GG → verfassungsimmanente Schranken", next: "q_immanent", set: { schranke: "immanent" }, tone: "neutral" }
      ]
    },

    q_vu_schranke: {
      station: "schranke",
      kind: "frage",
      norm: "z. B. Art. 8 I, 9 II GG",
      title: "Greift die verfassungsunmittelbare Schranke?",
      text: "Der Eingriff wird unmittelbar auf das Grundgesetz gestützt. Beispiel: Eine gewalttätige Versammlung mit Waffen verliert den Schutz des Art. 8 I GG und kann aufgelöst werden.",
      options: [
        { label: "Ja, Tatbestand der GG-Schranke erfüllt", next: "e_gerechtfertigt_vu", tone: "pos" },
        { label: "Nein", next: "e_verletzt_schranke", tone: "neg" }
      ]
    },

    q_immanent: {
      station: "schranke",
      kind: "frage",
      norm: "h. M.",
      title: "Verfassungsimmanente Schranke einschlägig?",
      text: "Auch vorbehaltlose Grundrechte sind nicht schrankenlos: Nach h. M. können Eingriffe gerechtfertigt werden durch entgegenstehende Grundrechte Dritter oder andere Güter von Verfassungsrang (z. B. Umweltschutz, Sicherheit und Ordnung).",
      options: [
        { label: "Ja, kollidierendes Verfassungsgut vorhanden", detail: "Weiter zur Prüfung des einschränkenden Gesetzes", next: "q_formell", tone: "pos" },
        { label: "Nein, kein Gut von Verfassungsrang", next: "e_verletzt_schranke", tone: "neg" }
      ]
    },

    q_gesetz_art: {
      station: "schranke",
      kind: "frage",
      norm: "—",
      title: "Worauf wird der Eingriff gestützt?",
      text: "„Durch Gesetz“ = selbstvollziehendes formelles Gesetz. „Aufgrund eines Gesetzes“ = die Exekutive wird durch formelles Gesetz ermächtigt, selbst einzuschränken – vor allem durch materielle Gesetze (Rechtsverordnungen, Satzungen).",
      hint: "Beispiel Hundesteuerfall: Art. 105 IIa GG i. V. m. KAG → gemeindliche Hundesteuersatzung = materielles Gesetz, Bestandteil der verfassungsmäßigen Ordnung.",
      options: [
        { label: "Formelles Gesetz (Parlamentsgesetz)", next: "q_formell", tone: "neutral" },
        { label: "Materielles Gesetz (RVO/Satzung) mit formell-gesetzlicher Grundlage", next: "q_formell", tone: "neutral" },
        { label: "Keine gesetzliche Grundlage", detail: "Eingriff ohne taugliche Schranke", next: "e_verletzt_schranke", tone: "neg" }
      ]
    },

    /* ================= III.2 Schranken-Schranke ================= */

    q_formell: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 70 ff., 76 ff. GG",
      title: "Schranken-Schranke: Ist das Gesetz formell verfassungsgemäß?",
      text: "Das einschränkende Gesetz muss seinerseits verfassungskonform sein („Schranken-Schranke“). Formell: (1) Gesetzgebungskompetenz (Art. 70 ff. GG), (2) Gesetzgebungsverfahren (Art. 76 ff. GG), Form.",
      hint: "Details in den eigenen Schemata „Gesetzgebungskompetenz“ und „Gesetzgebungsverfahren“. In Klausuren oft per Bearbeitervermerk unterstellt.",
      options: [
        { label: "Ja / laut Bearbeitervermerk zu unterstellen", next: "q_materiell", tone: "pos" },
        { label: "Nein, Kompetenz- oder Verfahrensfehler", next: "e_verletzt_formell", tone: "neg" }
      ]
    },

    q_materiell: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Materielle Verfassungsmäßigkeit: Steht das Gesetz mit der Verfassung in Einklang?",
      text: "Zu prüfen ist u. a.: kein Einzelfallgesetz (Art. 19 I 1 GG), Zitiergebot (Art. 19 I 2 GG), Demokratieprinzip (Art. 20 I, II GG) – und immer: das Rechtsstaatsprinzip aus Art. 20 III GG mit dem Verhältnismäßigkeitsgrundsatz.",
      options: [
        { label: "Verhältnismäßigkeit prüfen", detail: "Kernprüfung: legitimes Ziel – geeignet – erforderlich – angemessen", next: "q_ziel", tone: "neutral" },
        { label: "Verstoß gegen sonstiges Verfassungsrecht", detail: "z. B. unzulässiges Einzelfallgesetz", next: "e_verletzt_materiell", tone: "neg" }
      ]
    },

    q_ziel: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "1. Schritt: Verfolgt das Gesetz ein legitimes Ziel?",
      def: "<b>Legitimes Ziel:</b> jeder Zweck, den die Verfassung nicht verbietet – der Zweck ist der Intention des Gesetzgebers zu entnehmen (Gesetzesbegründung!). Bsp. Hundesteuer: Einnahmenerzielung, Art. 105 IIa GG.",
      options: [
        { label: "Ja, legitimer Zweck", next: "q_geeignet", tone: "pos" },
        { label: "Nein, verfassungsrechtlich verbotener Zweck", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    q_geeignet: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "2. Schritt: Ist die Maßnahme geeignet?",
      def: "<b>Geeignet</b> ist die Maßnahme, wenn mit ihrer Hilfe das angestrebte Ziel erreicht oder die Zielerreichung zumindest gefördert wird. Der Zweck muss nicht zu 100 % erreicht werden – Förderung genügt.",
      options: [
        { label: "Ja, Ziel wird zumindest gefördert", next: "q_erforderlich", tone: "pos" },
        { label: "Nein, völlig ungeeignet", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    q_erforderlich: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "3. Schritt: Ist die Maßnahme erforderlich?",
      def: "<b>Erforderlich</b>, wenn es kein milderes Mittel gibt, das zur Zielerreichung ebenso geeignet ist. Wenn kein milderes Mittel offensichtlich ist: kurz feststellen, dass keines ersichtlich ist – Hinweise im Sachverhalt beachten!",
      options: [
        { label: "Ja, kein milderes, gleich geeignetes Mittel", next: "q_angemessen", tone: "pos" },
        { label: "Nein, milderes Mittel vorhanden", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    q_angemessen: {
      station: "sschranke",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "4. Schritt: Ist die Maßnahme angemessen (verhältnismäßig i. e. S.)?",
      def: "<b>Angemessen</b>, wenn sie nicht außer Verhältnis zum angestrebten Ziel steht („nicht unzumutbar“). Abwägung zwischen geschütztem und beeinträchtigtem Rechtsgut mit Pro-/Contra-Argumentation. Bsp. Hundesteuer: keine „erdrosselnde Wirkung“, solange die Steuer die Hundehaltung nicht im Regelfall wirtschaftlich unmöglich macht.",
      options: [
        { label: "Ja, Abwägung geht zugunsten des Gesetzes aus", next: "q_einzelakt", tone: "pos" },
        { label: "Nein, unzumutbare Belastung", next: "e_verletzt_vhm", tone: "neg" }
      ]
    },

    q_einzelakt: {
      station: "sschranke",
      kind: "frage",
      norm: "—",
      title: "Beruht der Eingriff zusätzlich auf einem Einzelakt (VA, Urteil)?",
      text: "Wenn nicht das Gesetz selbst angegriffen wird, sondern ein darauf gestützter Einzelakt (z. B. Steuerbescheid), ist zusätzlich die Verhältnismäßigkeit des Einzelakts zu prüfen.",
      options: [
        { label: "Nein, nur das Gesetz wird geprüft", next: "e_nicht_verletzt", tone: "neutral" },
        { label: "Ja, Einzelakt ebenfalls verhältnismäßig", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Ja, aber Einzelakt unverhältnismäßig", detail: "Gesetz verfassungsgemäß, Anwendung im Einzelfall verletzt das Grundrecht", next: "e_verletzt_einzelakt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_gleichheit: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Gleichheitsrecht einschlägig",
      text: "Bei Ungleichbehandlungen gilt das eigene Prüfungsschema für die Gleichheitsgrundrechte (Art. 3 GG): Grundrechtsträger – Grundrechtsverpflichteter – Ungleichbehandlung von wesentlich Gleichem – verfassungsrechtliche Rechtfertigung."
    },
    e_konfusion: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Grundrechtsfähigkeit – Konfusionsargument",
      text: "Juristische Personen des öffentlichen Rechts können sich grundsätzlich nicht auf Grundrechte berufen: Grundrechte sind Abwehrrechte gegen den Staat – Grundrechtsverpflichtung (Staat) und Grundrechtsberechtigung (Bürger) dürfen nicht zusammenfallen (sog. Konfusionsargument). Der persönliche Schutzbereich ist nicht eröffnet."
    },
    e_auslaender: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Deutschenrecht nicht anwendbar – Ausweichrouten prüfen",
      text: "Deutschenrechte (Art. 8, 12, 33 GG) stehen nur Deutschen i. S. d. Art. 116 I GG zu. EU-Bürger werden wegen des Diskriminierungsverbots (Art. 18 AEUV) wie Deutsche behandelt. Nicht-EU-Ausländer können sich auf Art. 2 I GG berufen: Anspruch auf Einhaltung des einfachen Rechts und des Verhältnismäßigkeitsgrundsatzes."
    },
    e_wesen: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Grundrecht dem Wesen nach nicht anwendbar",
      text: "Nach Art. 19 III GG gilt das Grundrecht nicht für die juristische Person, da es nur individuell betätigt werden kann (z. B. Art. 1 I, 2 II, 3 II/III, 6, 12 III GG). Der persönliche Schutzbereich ist nicht eröffnet."
    },
    e_betriebsverhaeltnis: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff im Betriebsverhältnis",
      text: "Im Sonderstatusverhältnis gelten die Grundrechte zwar uneingeschränkt, bestimmte Maßnahmen sind aber kein Grundrechtseingriff: Maßnahmen im Betriebsverhältnis (Amtsstellung – Änderung des Aufgabenbereichs, Umsetzung innerhalb der Behörde, Weisung) fehlt die Rechtsaktförmigkeit bzw. Intensität. Anders im Grundverhältnis (Ernennung, Entlassung, Versetzung)."
    },
    e_muendigkeit: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Grundrechtsmündigkeit fehlt – Eltern machen Verstoß geltend",
      text: "Der Minderjährige ist grundrechtsfähig, aber nach den Indizien im Sachverhalt nicht grundrechtsmündig (keine Einsichtsfähigkeit in die Tragweite des Grundrechts). Der Grundrechtsverstoß muss durch die Eltern geltend gemacht werden (vgl. §§ 1626, 1629 I BGB)."
    },
    e_kein_schutz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Sachlicher Schutzbereich nicht eröffnet",
      text: "Das Verhalten fällt nicht unter den Schutzbereich des geprüften Grundrechts. Prüfe als Auffanggrundrecht die allgemeine Handlungsfreiheit aus Art. 2 I GG – sie schützt jede Form menschlichen Verhaltens."
    },
    e_kein_eingriff: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff – keine Grundrechtsverletzung",
      text: "Bloße Belästigungen und Bagatellen (z. B. Stau durch Verkehrskontrolle) sind kein Eingriff. Mangels Eingriffs scheidet eine Grundrechtsverletzung aus."
    },
    e_verzicht: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Grundrechtsverzicht – Eingriff gerechtfertigt",
      text: "Der Betroffene hat wirksam in den Eingriff eingewilligt (Rechtsgedanke § 183 BGB). Beachte die Ausnahmen: Bei Art. 1 I GG ist ein Verzicht stets ausgeschlossen; bei Art. 2 II 1 Var. 1 GG (Leben) nur unter strengsten Voraussetzungen (BVerfG: umfassende, nachgewiesene Aufklärung) zulässig."
    },
    e_gerechtfertigt_vu: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Eingriff durch verfassungsunmittelbare Schranke gerechtfertigt",
      text: "Der Eingriff stützt sich unmittelbar auf das Grundgesetz (z. B. Art. 8 I GG: unfriedliche Versammlung mit Waffen genießt keinen Grundrechtsschutz mehr). Eine Grundrechtsverletzung liegt nicht vor."
    },
    e_verletzt_schranke: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Grundrecht verletzt – keine taugliche Schranke",
      text: "Der Eingriff kann auf keine taugliche Schranke gestützt werden (keine gesetzliche Grundlage bzw. kein kollidierendes Verfassungsgut). Der Eingriff ist verfassungsrechtlich nicht gerechtfertigt – das Grundrecht ist verletzt."
    },
    e_verletzt_formell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Grundrecht verletzt – Gesetz formell verfassungswidrig",
      text: "Das einschränkende Gesetz ist formell verfassungswidrig (Gesetzgebungskompetenz nach Art. 70 ff. GG oder Verfahren nach Art. 76 ff. GG nicht eingehalten) und damit keine taugliche Schranke. Der Eingriff ist nicht gerechtfertigt."
    },
    e_verletzt_materiell: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Grundrecht verletzt – Gesetz materiell verfassungswidrig",
      text: "Das einschränkende Gesetz verstößt gegen materielles Verfassungsrecht (z. B. Verbot des Einzelfallgesetzes, Art. 19 I 1 GG) und ist keine taugliche Schranke. Der Eingriff ist nicht gerechtfertigt."
    },
    e_verletzt_vhm: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Grundrecht verletzt – Gesetz unverhältnismäßig",
      text: "Das Gesetz verstößt gegen den Verhältnismäßigkeitsgrundsatz aus dem Rechtsstaatsprinzip (Art. 20 III GG) und ist materiell verfassungswidrig. Der Eingriff ist verfassungsrechtlich nicht gerechtfertigt – das Grundrecht ist verletzt."
    },
    e_verletzt_einzelakt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Grundrecht verletzt – Einzelakt unverhältnismäßig",
      text: "Das Gesetz ist zwar verfassungsgemäß, der darauf gestützte Einzelakt (VA/Urteil) ist aber im konkreten Fall unverhältnismäßig. Die Anwendung verletzt das Grundrecht."
    },
    e_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Grundrechtsverletzung",
      text: "Der Eingriff ist verfassungsrechtlich gerechtfertigt: Die Schranke greift, das einschränkende Gesetz ist formell und materiell verfassungsgemäß (insb. verhältnismäßig) und auch der Einzelakt ist nicht zu beanstanden. Eine Grundrechtsverletzung scheidet aus."
    }
  }
});
