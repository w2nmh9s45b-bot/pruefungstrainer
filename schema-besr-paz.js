/*
 * Prüfungsschema: Personenstandsabhängiger Zuschlag (§ 41 II, III LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 114-134
 *    (vier Fälle des paZ, Konkurrenzregelungen, Teilzeit-Situationen)
 *  - Gesetze: LBesG § 41 I-III, VI, VIII; § 9 I; EStG §§ 32, 63 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-paz",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Familienzuschlag",
  title: "Personenstandsabhängiger Zuschlag (§ 41 II, III LBesG)",
  description: "Der erste Teil des Familienzuschlags: die vier Fälle des paZ (verheiratet – verwitwet – geschieden mit Unterhaltspflicht – Aufnahme von Kind/Person in die Wohnung), die Konkurrenzregeln (Hälftelung, anteilige Gewährung) und die vier Teilzeit-Situationen.",
  start: "start",
  stations: [
    { id: "einstieg", label: "Familienzuschlag" },
    { id: "fall", label: "Vier Fälle" },
    { id: "konkurrenz", label: "Konkurrenz" },
    { id: "teilzeit", label: "Teilzeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: paZ steht zu",
    neg: "Ergebnis: kein paZ",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: paZ (gekürzt)"
  },

  nodes: {

    start: {
      station: "einstieg",
      kind: "frage",
      norm: "§ 41 I LBesG",
      title: "Systematik: Die zwei Zuschläge im Familienzuschlag",
      def: "Der <b>Familienzuschlag</b> (Zuschlag i. S. d. § 3 I Nr. 4 1. Alt. LBesG) besteht aus <b>zwei getrennt zu prüfenden</b> Zuschlägen (§ 41 I 1 LBesG):<br><br>• <b>Nr. 1: personenstandsabhängiger Zuschlag (paZ)</b> – § 41 II und III LBesG (dieses Schema),<br>• <b>Nr. 2: kinderbezogener Zuschlag (kbZ)</b> – § 41 IV LBesG (eigenes Schema).<br><br>Die <b>Höhe</b> ergibt sich aus § 41 I 2 LBesG i. V. m. <b>Anlage 7.1</b> (Gültigkeitsdatum der Tabelle beachten – zuletzt erhöht zum 01.02.2025!).<br><br><b>Prüfreihenfolge beim paZ:</b> die vier Fälle immer in der gesetzlichen Reihenfolge – erst § 41 II 1 Nr. 1–3, dann (nur wenn keiner greift) § 41 III.",
      options: [
        { label: "Vier Fälle des paZ prüfen", next: "q_fall", tone: "pos" }
      ]
    },

    q_fall: {
      station: "fall",
      kind: "frage",
      norm: "§ 41 II 1, III LBesG",
      title: "Welcher der vier Fälle liegt vor?",
      def: "<b>1. Fall (§ 41 II 1 Nr. 1):</b> <b>verheiratete oder verpartnerte</b> Beamte (LPartG). Auf das Zusammenleben kommt es NICHT an – auch getrenntlebende Ehegatten erhalten den paZ (solange nicht geschieden)!<br><br><b>2. Fall (§ 41 II 1 Nr. 2):</b> <b>verwitwete</b> Beamte / hinterbliebene Lebenspartner – Weiterzahlung nach dem Zustand der letzten Ehe.<br><br><b>3. Fall (§ 41 II 1 Nr. 3):</b> <b>geschiedene</b> Beamte (bzw. Ehe aufgehoben/nichtig), wenn sie dem früheren Partner <b>aus der letzten Ehe</b> zum <b>Unterhalt verpflichtet</b> sind UND die Verpflichtung mindestens die <b>Höhe des paZ</b> erreicht. Nur Ehegatten-, kein Kindesunterhalt! Nachweis von Verpflichtung (Urteil/Vertrag) und regelmäßiger Zahlung; Mindesthöhe ändert sich mit jeder Besoldungserhöhung.<br><br><b>4. Fall (§ 41 III):</b> nur wenn KEIN Anspruch nach Abs. 2 besteht: Aufnahme eines <b>Kindes</b> (grundsätzliche Kindergeldberechtigung, §§ 32, 63 EStG) oder einer <b>Hilfsperson</b> (aus beruflichen/gesundheitlichen Gründen) <b>nicht nur vorübergehend in die Wohnung</b> – typisch: Alleinerziehende, unverheiratete Paare mit Kind.<br><br><b>Ledig ohne Kind im Haushalt → kein paZ.</b>",
      options: [
        { label: "Verheiratet/verpartnert (Nr. 1)", next: "q_konkurrenz2", tone: "pos" },
        { label: "Verwitwet (Nr. 2)", next: "e_verwitwet", tone: "pos" },
        { label: "Geschieden + Unterhalt (Nr. 3)", next: "q_unterhalt", tone: "neutral" },
        { label: "Kind/Person aufgenommen (Abs. 3)", next: "q_wohnung", tone: "neutral" },
        { label: "Keiner der Fälle", next: "e_kein_paz", tone: "neg" }
      ]
    },

    q_konkurrenz2: {
      station: "konkurrenz",
      kind: "frage",
      norm: "§ 41 II 2 LBesG",
      title: "Konkurrenz (1 von 3): Ist der Ehe-/Lebenspartner ebenfalls im öffentlichen Dienst?",
      def: "<b>Immer prüfen und ansprechen!</b> Der paZ wird nur <b>zur Hälfte</b> gewährt, wenn (zwei Voraussetzungen, getrennt darstellen):<br><br>1. der Partner als <b>Beamter, Richter, Soldat oder Arbeitnehmer im öffentlichen Dienst</b> steht (öD-Begriff hier: <b>§ 41 VI LBesG</b> – NICHT § 20 LBesG!) oder nach beamtenrechtlichen Grundsätzen <b>versorgungsberechtigt</b> ist, UND<br>2. ihm ebenfalls der paZ oder eine <b>entsprechende Leistung in Höhe von mindestens der Hälfte</b> zusteht.<br><br><b>Rechtsfolge:</b> Hälftelung bei beiden – zusammen erhält das Paar den Zuschlag einmal. Ist der Partner in einem anderen Bundesland verbeamtet, erhält er den dortigen Betrag nach dortigem Landesrecht.<br><br><b>Achtung (Übung 9 a/e):</b> Beim <b>TVöD-Beschäftigten</b> gibt es seit 2005 KEINE entsprechende Leistung mehr (kein Familienzuschlag im TVöD) → keine Konkurrenz, voller paZ! Bei <b>Versorgungsempfängern</b> wird der paZ im Ruhegehalt anteilig (z. B. 71,75 %) weitergezahlt – das ist mehr als die Hälfte → Konkurrenz greift.",
      options: [
        { label: "Konkurrenzfall (+)", next: "q_teilzeit", tone: "warn" },
        { label: "Kein Konkurrenzfall", next: "q_teilzeit_ohne", tone: "pos" }
      ]
    },

    q_teilzeit: {
      station: "teilzeit",
      kind: "frage",
      norm: "§ 41 II 3, 4 LBesG",
      title: "Teilzeit im Konkurrenzfall: Welche Situation liegt vor?",
      def: "Ist der Beamte (auch) teilzeitbeschäftigt, gilt im Konkurrenzfall ein eigenes Regime (die „vier Situationen“ aus dem Skript – hier Situationen 2–4):<br><br>• <b>Partner vollbeschäftigt oder versorgungsberechtigt</b> (§ 41 II 3 1. Alt.): § 9 I findet auf den (hälftigen) Betrag <b>keine</b> Anwendung → Hälfte OHNE weitere Teilzeitkürzung. <i>Sinn: Das Paar soll zusammen einmal den vollen Zuschlag haben.</i><br><br>• <b>Beide teilzeitbeschäftigt, zusammen ≥ 40 Std./Woche</b> (§ 41 II 3 2. Alt.; z. B. 2 × 50 %): ebenfalls Hälfte ohne Kürzung.<br><br>• <b>Beide teilzeitbeschäftigt, zusammen &lt; 40 Std./Woche</b> (§ 41 II 4; z. B. 2 × 40 %): Die Konkurrenzregel (S. 2) findet <b>keine Anwendung</b> – stattdessen gilt § 9 I: jeder erhält den paZ <b>zeitratierlich nach seiner individuellen Arbeitszeit</b> (40 % vom vollen Betrag).",
      options: [
        { label: "Partner voll/versorgungsber.", next: "e_haelfte", tone: "pos" },
        { label: "Beide TZ, Summe ≥ Vollzeit", next: "e_haelfte", tone: "pos" },
        { label: "Beide TZ, Summe < Vollzeit", next: "e_anteilig_individuell", tone: "warn" },
        { label: "Beamter selbst vollbeschäftigt", next: "e_haelfte", tone: "pos" }
      ]
    },

    q_teilzeit_ohne: {
      station: "teilzeit",
      kind: "frage",
      norm: "§ 9 I LBesG",
      title: "Kein Konkurrenzfall: Ist der Beamte teilzeitbeschäftigt?",
      def: "Ohne Konkurrenzfall gilt die Grundregel (Situation 1 aus dem Skript):<br><br>• <b>Vollzeit:</b> voller paZ nach Anlage 7.1.<br>• <b>Teilzeit:</b> Der paZ wird nach <b>§ 9 I LBesG zeitratierlich</b> gekürzt (Arbeitszeit ÷ 40 Std.).<br><br><b>Beispiel (Übung 9 g):</b> Beamter G, verheiratet, Ehefrau nicht im öD, G teilzeitbeschäftigt 40 % → paZ = voller Betrag × 40 %.",
      options: [
        { label: "Vollzeit – voller paZ", next: "e_voll", tone: "pos" },
        { label: "Teilzeit – zeitratierlich", next: "e_anteilig_9", tone: "warn" }
      ]
    },

    q_unterhalt: {
      station: "fall",
      kind: "frage",
      norm: "§ 41 II 1 Nr. 3 LBesG",
      title: "3. Fall: Erreicht der Ehegatten-Unterhalt die Höhe des paZ?",
      def: "Nur Beamte, die dem <b>früheren Ehe-/Lebenspartner aus der letzten Ehe</b> Unterhalt schulden, erhalten den paZ weiter – und nur, wenn die Unterhaltsverpflichtung <b>mindestens die Höhe des paZ</b> erreicht.<br><br><b>Nicht mitgezählt wird Kindesunterhalt</b> an gemeinsame Kinder (Übung 9 i: 1.200 € Kindesunterhalt nach Düsseldorfer Tabelle zählen nicht; die 200 € an die ERSTE geschiedene Frau stammen nicht aus der LETZTEN Ehe → kein paZ)!<br><br>Nachweise: Verpflichtung (Urteil, Vertrag, Vereinbarung) UND regelmäßige Zahlung. Die Mindesthöhe ändert sich mit jeder Besoldungsanpassung.<br><br><b>Quiz-Beispiel:</b> jährlich 840 € Unterhalt = 70 €/Monat – liegt unter dem paZ → kein Anspruch nach Nr. 3 (ggf. aber 4. Fall prüfen, wenn ein Kind im Haushalt lebt).",
      options: [
        { label: "Unterhalt ≥ paZ-Betrag", next: "e_geschieden", tone: "pos" },
        { label: "Darunter / nur Kindesunterhalt", next: "q_wohnung", tone: "neg" }
      ]
    },

    q_wohnung: {
      station: "fall",
      kind: "frage",
      norm: "§ 41 III LBesG",
      title: "4. Fall: Kind oder Hilfsperson nicht nur vorübergehend in die Wohnung aufgenommen?",
      def: "Voraussetzungen (§ 41 III 1 LBesG):<br>• <b>kein Anspruch nach Abs. 2</b> (Fälle 1–3),<br>• Aufnahme <b>eines Kindes</b>, für das der Beamte <b>grundsätzlich kindergeldberechtigt</b> ist (§§ 32, 63 EStG – die tatsächliche Auszahlung nach § 64 EStG ist hier EGAL!), <b>oder einer anderen Person</b>, deren Hilfe er aus beruflichen oder gesundheitlichen Gründen bedarf (Nr. 2 – z. B. schwerbehinderter Beamter nimmt die Schwester auf),<br>• <b>in die Wohnung</b>, <b>nicht nur vorübergehend</b>.<br><br>• Auswärtige Unterbringung <b>auf Kosten des Beamten</b> ohne Aufhebung der häuslichen Verbindung gilt als Aufnahme (§ 41 III 2 – Studentenbude des Sohnes mit erhaltenem Jugendzimmer: Aufnahme +; Übung 10 e). Enkelkind nur in den Schulferien = nur vorübergehend (Übung 10 f: kein paZ).<br>• Der Zuschlag wird <b>nur einmal</b> gezahlt, egal wie viele Personen aufgenommen sind.<br><br><b>Kindergeld-Exkurs:</b> § 32 EStG = für welche Kinder; § 63 EStG = wer grundsätzlich berechtigt ist (beide Eltern gleichermaßen, auch Pflege-/Stiefeltern/Großeltern im Haushalt); § 64 EStG = an wen tatsächlich gezahlt wird (nur für Konkurrenzfragen relevant). In Klausuren wird das vorgegeben – Paragrafen an der richtigen Stelle nennen genügt.",
      options: [
        { label: "Aufnahme (+) – Konkurrenz prüfen", next: "q_konkurrenz3", tone: "pos" },
        { label: "Nur vorübergehend / kein Kindergeld", next: "e_kein_paz", tone: "neg" }
      ]
    },

    q_konkurrenz3: {
      station: "konkurrenz",
      kind: "frage",
      norm: "§ 41 III 3 LBesG",
      title: "Konkurrenz (2 von 3): Beanspruchen mehrere Berechtigte wegen derselben Wohnungsaufnahme den paZ?",
      def: "Beanspruchen <b>mehrere Anspruchsberechtigte im öffentlichen Dienst</b> (oder Versorgungsberechtigte) wegen der Aufnahme einer oder mehrerer Personen in die <b>gemeinsam bewohnte Wohnung</b> den paZ (oder eine entsprechende Leistung), wird der Betrag <b>nach der Zahl der Berechtigten ANTEILIG</b> gewährt (§ 41 III 3 LBesG).<br><br><b>Klassiker (Quiz Nr. 8):</b> Zwei unverheiratete Beamte leben mit ihrem gemeinsamen Kind zusammen – beide sind kindergeldberechtigt (§§ 32, 63 EStG), beide haben das Kind aufgenommen → <b>jeder erhält den halben paZ</b> (Konkurrenz des § 41 III 3, NICHT die des Abs. 2 S. 2!).<br><br><b>Teilzeit-Sonderfall:</b> Eine dem § 41 II 3, 4 entsprechende Regelung gibt es in Abs. 3 <b>nicht</b> – der teilzeitbeschäftigte Berechtigte erhält seinen Anteil <b>immer zeitratierlich</b> nach § 9 I LBesG gekürzt (auch im Konkurrenzfall; Übung 10 c: 50 % TZ + Konkurrenz → 1/2 × 1/2 = ein Viertel des paZ).",
      options: [
        { label: "Konkurrenz – anteilig", next: "e_anteilig_zahl", tone: "warn" },
        { label: "Einziger Berechtigter", next: "q_teilzeit_ohne", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 41 II 1 Nr. 1 bzw. III 1 LBesG",
      title: "Voller personenstandsabhängiger Zuschlag",
      text: "Der Beamte erhält den vollen paZ nach § 41 I 2 LBesG i. V. m. Anlage 7.1 (Tabellenstand beachten).\n\nZeitpunkt bei Änderungen (§ 41 VIII LBesG): Der Familienzuschlag wird vom ERSTEN DES MONATS an gezahlt, in den das maßgebende Ereignis fällt (Heirat am 15.06. → voller paZ ab 01.06., Quiz Nr. 11!); er entfällt erst ab dem Monat, in dem die Voraussetzungen an KEINEM Tag vorlagen (also ab dem Folgemonat des Wegfalls). Gilt entsprechend für Teilbeträge.\n\nBeispiele (Übung 9): verheiratet mit TVöD-Beschäftigter → voll (TVöD kennt keinen Familienzuschlag, keine Konkurrenz); verheiratet, aber getrenntlebend → voll (Scheidung erst rechtskräftig abwarten)."
    },

    e_haelfte: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 41 II 2, 3 LBesG",
      title: "Hälftiger paZ (Konkurrenzfall)",
      text: "Beide Partner stehen im öffentlichen Dienst (§ 41 VI LBesG) mit eigenem paZ-Anspruch → jeder erhält den paZ ZUR HÄLFTE (§ 41 II 2 LBesG); zusammen haben sie ihn einmal.\n\nBei Teilzeit gilt: Ist einer der Partner vollbeschäftigt/versorgungsberechtigt ODER erreichen beide zusammen mindestens 40 Std./Woche, wird die Hälfte NICHT zusätzlich nach § 9 I gekürzt (§ 41 II 3 LBesG).\n\nBeispiele (Übung 9):\n• f) F (40 % TZ) + Ehefrau Beamtin (Vollzeit) → F erhält die ungekürzte Hälfte (§ 41 II 3 1. Alt.),\n• h) H (40 %) + Ehefrau Beamtin (50 %) → zusammen 90 % < Vollzeit → KEINE Hälftelung, sondern jeder zeitratierlich (§ 41 II 4, § 9 I): H erhält 40 % des vollen paZ,\n• e) Ehefrau im Ruhestand mit 71,75 % paZ in der Versorgung (≥ Hälfte) → Konkurrenz greift, E erhält die Hälfte."
    },

    e_anteilig_individuell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 41 II 4, § 9 I LBesG",
      title: "Zeitratierlicher paZ (Summe unter Vollzeit)",
      text: "Erreichen beide teilzeitbeschäftigten Partner zusammen NICHT die regelmäßige Arbeitszeit einer Vollbeschäftigung (40 Std./Woche, § 2 I ArbZVO), findet die Konkurrenzregel des § 41 II 2 KEINE Anwendung (§ 41 II 4 LBesG).\n\nStattdessen gilt § 9 I LBesG: Jeder erhält den paZ zeitratierlich entsprechend seiner INDIVIDUELLEN Arbeitszeit.\n\nBeispiel: Beide arbeiten je 40 % → jeder erhält 40 % des vollen paZ (zusammen 80 % – entsprechend ihrer gemeinsamen Arbeitsleistung).\n\nSinn der Regelung: Das Paar soll den paZ in der Summe seiner Arbeitszeiten erhalten – nicht mehr (keine ungekürzte Hälftelung) und nicht weniger."
    },

    e_anteilig_9: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 9 I LBesG",
      title: "Zeitratierlich gekürzter paZ (Teilzeit ohne Konkurrenz)",
      text: "Ohne Konkurrenzfall wird der paZ bei Teilzeitbeschäftigung nach § 9 I LBesG im Verhältnis der Arbeitszeit gekürzt (Situation 1).\n\nBeispiel (Übung 9 g): G ist mit 40 % teilzeitbeschäftigt, Ehefrau nicht im öffentlichen Dienst → paZ = voller Tabellenbetrag × 40 %, kaufmännisch gerundet (§ 8 II LBesG).\n\nDasselbe gilt IMMER beim 4. Fall (§ 41 III LBesG): Dort gibt es keine dem § 41 II 3 entsprechende Ausnahme – der Anteil wird auch im Konkurrenzfall zeitratierlich gekürzt."
    },

    e_anteilig_zahl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 41 III 3 LBesG",
      title: "Anteiliger paZ nach Zahl der Berechtigten",
      text: "Der paZ wird nach der Zahl der Berechtigten geteilt (§ 41 III 3 LBesG) – bei zwei Berechtigten je die Hälfte, unabhängig davon, wie viele Kinder/Personen aufgenommen wurden (der paZ wird ohnehin nur einmal je Berechtigtem gezahlt).\n\nBeispiel (Übung 10 b): Unverheiratetes Beamten-Paar mit zwei gemeinsamen minderjährigen Kindern im Haushalt → beide je 1/2 paZ (§ 41 III 1 Nr. 1, III 3 LBesG).\n\nMit Teilzeit (Übung 10 c): C (50 % TZ) und vollzeitbeschäftigte Freundin (Beamtin), ein Kind → C: 1/2 (Konkurrenz) × 50 % (§ 9 I – keine Ausnahme in Abs. 3!) = 1/4 des paZ; die Freundin erhält ihre ungekürzte Hälfte.\n\nNicht verwechseln: Diese Konkurrenz (Abs. 3 S. 3 – anteilig nach Köpfen) ist die zweite von drei Konkurrenzregeln im Familienzuschlag; die dritte betrifft den kbZ (§ 41 IV 3 – Kindergeldbezug entscheidet; eigenes Schema)."
    },

    e_verwitwet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 41 II 1 Nr. 2 LBesG",
      title: "Verwitwet: paZ wird weitergezahlt",
      text: "Verwitwete Beamte und hinterbliebene Lebenspartner erhalten den paZ weiter (§ 41 II 1 Nr. 2 LBesG). Es gilt der Zustand aus der letzten Ehe.\n\nWichtig: Bestand vor dem Tod ein Konkurrenzfall (Partner ebenfalls Beamter → beide je 1/2), erhält der Verwitwete nun den VOLLEN paZ – die Konkurrenz ist mit dem Tod entfallen (Übung 9 d).\n\nQuiz Nr. 9: Auch wer aus erster Ehe verwitwet und aus zweiter Ehe (ohne Unterhaltspflicht) geschieden ist, hat keinen Anspruch aus Nr. 2 – maßgeblich ist die LETZTE Ehe; deren Schicksal (Scheidung ohne Unterhalt) verdrängt den früheren Witwenstatus."
    },

    e_geschieden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 41 II 1 Nr. 3 LBesG",
      title: "Geschieden mit Unterhaltspflicht: paZ steht zu",
      text: "Der geschiedene Beamte erhält den paZ, weil er dem früheren Partner aus der letzten Ehe Unterhalt mindestens in Höhe des paZ-Betrags schuldet (§ 41 II 1 Nr. 3 LBesG).\n\nLaufend zu überwachen:\n• Nachweis der Verpflichtung (Urteil/Vertrag/Vereinbarung) und der regelmäßigen Zahlung,\n• Mindesthöhe bei jeder Besoldungserhöhung neu prüfen (der paZ-Betrag steigt mit),\n• nur Ehegattenunterhalt zählt – Kindesunterhalt nie.\n\nEntfällt die Unterhaltspflicht (oder sinkt sie unter den Betrag), entfällt der paZ ab dem Folgemonat (§ 41 VIII 2 LBesG); ggf. 4. Fall (§ 41 III) prüfen, wenn ein Kind im Haushalt lebt."
    },

    e_kein_paz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 41 II, III LBesG",
      title: "Kein personenstandsabhängiger Zuschlag",
      text: "Keiner der vier Fälle liegt vor – kein paZ. Typische Verneinungen:\n\n• lediger Beamter, der mit der Freundin zusammenlebt (keine Ehe/Lebenspartnerschaft i. S. d. LPartG; die nichteheliche Lebensgemeinschaft genügt NICHT – Übung 9 b),\n• geschieden ohne (ausreichende) Unterhaltspflicht gegenüber dem Ex-Partner,\n• Kind lebt beim anderen Elternteil (keine Aufnahme in die eigene Wohnung – Quiz Nr. 9),\n• Enkelkind nur in den Schulferien zu Besuch (nur vorübergehend – Übung 10 f),\n• lediger Beamter ohne Kinder.\n\nAber unabhängig davon den kinderbezogenen Zuschlag prüfen: Der kbZ (§ 41 IV) setzt KEINE Wohnungsaufnahme voraus, nur die grundsätzliche Kindergeldberechtigung – eigenes Schema!\n\n(Ledige Beamte in Gemeinschaftsunterkunft: Sonderregel § 41 V LBesG – Anrechnung auf das Grundgehalt.)"
    }
  }
});
