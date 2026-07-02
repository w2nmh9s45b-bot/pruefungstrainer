/*
 * Prüfungsschema: Organkompetenz – Wer entscheidet: Rat, Ausschuss oder Bürgermeister?
 * (§§ 32, 44, 47, 48 GemO)
 * Fach: Kommunalrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS II):
 *  - "2023_FS2V_04_05 PLE - Organkompetenzen GemR_Bgm" (inkl. Prüfungsschema,
 *    Geschäfte der laufenden Verwaltung, Eilentscheidungsrecht)
 *  - "FS II - KomR - Skript 02. - Organzustaendigkeit"
 *  - Gesetze: GemO RLP §§ 32, 44, 47, 48 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-organkompetenz",
  subject: "Kommunalrecht",
  fs: ["FS2"],
  area: "Organe & Zuständigkeit",
  title: "Organkompetenz: Rat, Ausschuss oder Bürgermeister?",
  description: "Bestimmung des zuständigen Gemeindeorgans für eine konkrete Angelegenheit: spezialgesetzliche Zuständigkeiten, Ratsvorbehalt (§ 32 II/III GemO), Übertragung auf Ausschuss oder Bürgermeister, Geschäfte der laufenden Verwaltung und Eilentscheidungsrecht (§ 48 GemO).",
  start: "start",
  stations: [
    { id: "verband", label: "Verbandskompetenz" },
    { id: "art", label: "Aufgabenart" },
    { id: "spezial", label: "Spezialregelung" },
    { id: "rat", label: "§ 32 GemO" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zuständigkeit bestimmt",
    neg: "Ergebnis: keine Zuständigkeit",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "verband",
      kind: "frage",
      norm: "§ 2 GemO",
      title: "Ist die Gemeinde für die Angelegenheit überhaupt zuständig (Verbandskompetenz)?",
      text: "Die Befassungskompetenz wird zweistufig geprüft: 1. Verbandskompetenz – ist die Gemeinde zuständig? 2. Organkompetenz – welches Organ der Gemeinde entscheidet?",
      hint: "Die Verbandskompetenz (Aufgabenart, Abgrenzung Ortsgemeinde/Verbandsgemeinde/Landkreis) prüfst du ausführlich im FS1-Schema „Aufgabenart & Verbandskompetenz“.",
      options: [
        { label: "Ja, Aufgabe der Gemeinde", next: "q_art", tone: "pos" },
        { label: "Nein", detail: "Aufgabe eines anderen Trägers (VG, Landkreis, Land)", next: "e_keine_verband", tone: "neg" }
      ]
    },

    q_art: {
      station: "art",
      kind: "frage",
      norm: "§ 2 I, II GemO",
      title: "Selbstverwaltungsangelegenheit oder Auftragsangelegenheit?",
      def: "<b>Selbstverwaltungsangelegenheit</b> (§ 2 I GemO): Angelegenheit der örtlichen Gemeinschaft → Grundsatz: der Gemeinderat entscheidet (§ 32 I 2 GemO).<br><b>Auftragsangelegenheit</b> (§ 2 II GemO): Vollzug staatlicher Aufgaben → der Bürgermeister erfüllt sie (§ 47 I 2 Nr. 4 GemO).",
      options: [
        { label: "Selbstverwaltungsangelegenheit", next: "q_spezial", set: { art: "sv" }, tone: "neutral" },
        { label: "Auftragsangelegenheit", next: "q_auftrag_ausnahme", set: { art: "auftrag" }, tone: "neutral" }
      ]
    },

    q_auftrag_ausnahme: {
      station: "spezial",
      kind: "frage",
      norm: "§ 47 I 2 Nr. 4 GemO",
      title: "Greift bei der Auftragsangelegenheit ausnahmsweise eine Ratszuständigkeit?",
      text: "Grundsatz: Auftragsangelegenheiten erfüllt der Bürgermeister – der Gemeinderat hat keine Befassungskompetenz und kein Weisungsrecht, nur Unterrichtungsrechte (§ 33 GemO).",
      def: "<b>Ausnahmen (Ratszuständigkeit trotz Auftragsangelegenheit):</b><br>• Satzungen in Auftragsangelegenheiten mit besonderer Ermächtigung (§ 24 I 2 GemO, z. B. Gestaltungssatzung § 88 LBauO),<br>• Erlass von Gefahrenabwehrverordnungen (§ 94 II POG),<br>• Bereitstellung von Personal, Einrichtungen und Mitteln (§ 2 II 2 GemO – das ist Selbstverwaltung!).",
      options: [
        { label: "Keine Ausnahme", next: "e_bm_auftrag", tone: "neutral" },
        { label: "Ausnahme einschlägig", next: "e_rat_spezial", tone: "warn" }
      ]
    },

    q_spezial: {
      station: "spezial",
      kind: "frage",
      norm: "z. B. § 24 II, § 53a I 1, § 42, § 48, § 49 GemO",
      title: "Gibt es eine spezialgesetzliche Zuständigkeitsregelung?",
      def: "<b>Spezialgesetzlich dem RAT zugewiesen:</b> Satzungen (§ 24 II), Wahl der Beigeordneten (§ 53a I 1), Abwahl (§ 55 II), Entlastung (§ 114).<br><b>Spezialgesetzlich dem BÜRGERMEISTER zugewiesen:</b> Aussetzung von Beschlüssen (§ 42), Eilentscheidungsrecht (§ 48), Verpflichtungserklärungen (§ 49), Ersatzentscheidung (§ 39 II HS 2), Wahlleiter (§ 7 KWG).",
      options: [
        { label: "Ja, Rat kraft Spezialregelung", next: "e_rat_spezial", tone: "neutral" },
        { label: "Ja, Bürgermeister kraft Spezialregelung", next: "e_bm_gesetz", tone: "neutral" },
        { label: "Nein, keine Spezialregelung", next: "q_vorbehalt", tone: "neutral" }
      ]
    },

    q_vorbehalt: {
      station: "rat",
      kind: "frage",
      norm: "§ 32 II, III GemO",
      title: "Fällt die Angelegenheit unter den Ratsvorbehalt (§ 32 II GemO)?",
      def: "<b>Nicht übertragbar (abschließender Katalog § 32 II):</b> u. a. Nr. 1 Satzungen, Nr. 2 Haushaltsplan, Nr. 3 Jahresabschluss/Entlastung, Nr. 6 Übernahme freiwilliger Aufgaben, Nr. 7 Abwahlverfahren BM / Wahl und Abwahl der Beigeordneten, Nr. 10 Abgabensätze und Tarife, Nr. 11 über-/außerplanmäßige Aufwendungen, Nr. 12 Verträge der Gemeinde mit BM/Beigeordneten, Nr. 13 Verfügung über Gemeindevermögen/Darlehen, Nr. 14 öffentliche Einrichtungen und wirtschaftliche Unternehmen.<br><b>Ausnahme (§ 32 III):</b> Für Nr. 11–13 kann die Hauptsatzung Wertgrenzen bestimmen, bis zu denen übertragen werden darf.",
      hint: "Merke zu Nr. 13: VERkauf einer Immobilie = Verfügung über vorhandenes Vermögen (Ratsvorbehalt); ANkauf = kein Anlagevermögen, Nr. 13 nicht anwendbar.",
      options: [
        { label: "Ja, Ratsvorbehalt ohne Wertgrenzen-Ausnahme", next: "e_rat_vorbehalt", tone: "neutral" },
        { label: "Ja, aber Wertgrenze der Hauptsatzung (§ 32 III) greift", next: "q_uebertragung", tone: "warn" },
        { label: "Nein, kein Ratsvorbehalt", next: "q_bm_gesetz", tone: "neutral" }
      ]
    },

    q_bm_gesetz: {
      station: "rat",
      kind: "frage",
      norm: "§ 47 I GemO",
      title: "Ist der Bürgermeister kraft Gesetzes zuständig?",
      def: "<b>Originäre Aufgaben des BM (§ 47 I 1, 2 GemO):</b> Leitung der Verwaltung und Außenvertretung (S. 1), Vorbereitung der Ratsbeschlüsse (Nr. 1), Ausführung der Beschlüsse (Nr. 2), <b>Geschäfte der laufenden Verwaltung</b> (Nr. 3), Auftragsangelegenheiten (Nr. 4); Personalentscheidungen (§ 47 II, teils mit Ratszustimmung).<br><b>Geschäft der laufenden Verwaltung</b> (Definition auswendig!): Geschäfte, die nach <b>Regelmäßigkeit und Häufigkeit</b> zu den üblichen Geschäften gehören und nach feststehenden Regeln „auf eingefahrenen Gleisen“ erledigt werden – keine Grundsatzentscheidung, keine Abwägung; die finanzielle Größenordnung ist unerheblich (vgl. § 49 III GemO).",
      hint: "Beispiele (+): Büromaterial, typische Stundungen, Grabstättenvergabe, Zulassung zur öffentlichen Einrichtung nach Widmung, Ausführung aufgestellter Richtlinien. Beispiele (–): Grundstücks(ver)käufe, Vergabe größerer Aufträge, Grundsatzentscheidungen.",
      options: [
        { label: "Ja, Geschäft der laufenden Verwaltung o. ä.", next: "e_bm_gesetz", tone: "pos" },
        { label: "Nein, aber Eilfall", detail: "Prüfung § 48 GemO", next: "q_eil", tone: "warn" },
        { label: "Nein", next: "q_uebertragung", tone: "neutral" }
      ]
    },

    q_eil: {
      station: "rat",
      kind: "frage",
      norm: "§ 48 GemO",
      title: "Liegen die Voraussetzungen des Eilentscheidungsrechts vor?",
      def: "<b>Tatbestand § 48 S. 1 GemO:</b><br>1. Organzuständigkeit des Gemeinderats oder eines Ausschusses,<br>2. <b>Dringlichkeit:</b> Die Erledigung kann nicht ohne NACHTEIL für die Gemeinde bis zu einer Sitzung aufgeschoben werden – die fristgerechte Einberufung (auch mit verkürzter Frist bei Dringlichkeit, § 34 III 2) darf objektiv nicht mehr möglich sein. Nicht ausreichend: keine Sitzung geplant, Urlaubs-/Ferienzeit!<br>3. <b>Benehmen</b> mit den Beigeordneten.<br><b>Verfahren:</b> unverzügliche Mitteilung der Gründe und der Art der Erledigung (§ 48 S. 2); Aufhebung in der nächsten Sitzung möglich, soweit nicht Rechte Dritter entstanden sind (§ 48 S. 3).",
      hint: "In der Praxis sind rechtmäßige Eilentscheidungen selten. Beispiele (+): Notreparatur nach Sturmschaden, Schlüsseldienst nach Einbruch.",
      options: [
        { label: "Ja, Eilentscheidung zulässig", next: "e_eil", tone: "pos" },
        { label: "Nein", detail: "keine echte Dringlichkeit – der Rat muss entscheiden", next: "q_uebertragung", tone: "neg" }
      ]
    },

    q_uebertragung: {
      station: "rat",
      kind: "frage",
      norm: "§ 32 I 2, § 44, § 47 I 3 GemO",
      title: "Wurde die Entscheidung übertragen?",
      def: "<b>Übertragung („gewillkürte Ausnahme“):</b><br>• auf einen <b>Ausschuss</b>: einmalig durch Beschluss oder dauerhaft durch Hauptsatzung (§ 44 II GemO); Rückholrecht des Rates (§ 44 III GemO),<br>• auf den <b>Bürgermeister</b>: einmalig durch Ratsbeschluss, dauerhaft nur durch Hauptsatzung (§ 47 I 3 GemO) – häufig Auftragsvergaben/Kredite bis zu Wertgrenzen.",
      options: [
        { label: "Ja, auf einen Ausschuss", next: "e_ausschuss", tone: "neutral" },
        { label: "Ja, auf den Bürgermeister", next: "e_bm_uebertragen", tone: "neutral" },
        { label: "Nein", next: "e_rat", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 32 I 2 GemO",
      title: "Der Gemeinderat ist zuständig (Grundsatz)",
      text: "Der Gemeinderat beschließt über alle Selbstverwaltungsangelegenheiten, soweit er die Entscheidung nicht einem Ausschuss übertragen hat, der Bürgermeister nicht kraft Gesetzes zuständig ist oder ihm die Angelegenheit übertragen wurde (§ 32 I 2 GemO – Grundsatz-Ausnahme-Verhältnis).\n\nDaneben: Vertretung der Bürger (§ 32 I 1), Festlegung der Verwaltungsgrundsätze (§ 32 I 2 HS 2) und Überwachung der Beschlussausführung (§ 32 I 3)."
    },

    e_rat_vorbehalt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 32 II GemO",
      title: "Der Gemeinderat ist zuständig (Ratsvorbehalt)",
      text: "Die Angelegenheit gehört zum abschließenden Katalog des § 32 II GemO und ist dem Gemeinderat zur abschließenden Entscheidung vorbehalten. Eine Übertragung auf Ausschuss oder Bürgermeister ist ausgeschlossen (Delegationsverbot).\n\nAuch eine Eilentscheidung des Bürgermeisters nach § 48 GemO kommt in diesen Angelegenheiten nur unter den engen Voraussetzungen echter Dringlichkeit in Betracht."
    },

    e_rat_spezial: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Spezialgesetz",
      title: "Der Gemeinderat ist kraft Spezialregelung zuständig",
      text: "Eine spezialgesetzliche Regelung weist die Entscheidung dem Gemeinderat zu (z. B. § 24 II GemO für Satzungen, § 53a I 1 GemO für die Wahl der Beigeordneten). Die Spezialregelung geht der allgemeinen Zuständigkeitsordnung des § 32 GemO vor; eine Delegation ist ausgeschlossen."
    },

    e_bm_gesetz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 47 GemO",
      title: "Der Bürgermeister ist kraft Gesetzes zuständig",
      text: "Die Angelegenheit gehört zu den originären oder gesetzlich besonders übertragenen Aufgaben des Bürgermeisters (§ 47 GemO) – insbesondere zu den Geschäften der laufenden Verwaltung (§ 47 I 2 Nr. 3 GemO).\n\nDaneben hat der Bürgermeister die Präsidialfunktion: Vorsitz im Rat (§ 36 I 1), Einberufung (§ 34 I 1), Sitzungsleitung und Hausrecht (§ 36 II), Ordnungsbefugnisse (§ 38) und die Ausfertigung von Satzungen (VV Nr. 5 zu § 24 GemO)."
    },

    e_bm_auftrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 47 I 2 Nr. 4 GemO",
      title: "Der Bürgermeister ist zuständig (Auftragsangelegenheit)",
      text: "Auftragsangelegenheiten erfüllt der Bürgermeister (§ 47 I 2 Nr. 4 GemO). Der Gemeinderat hat KEINE Befassungskompetenz und kein Weisungsrecht – ihm stehen nur die Unterrichtungsrechte des § 33 GemO zu.\n\nBeschließt der Rat dennoch in einer Auftragsangelegenheit, ist der Beschluss kompetenzwidrig; der Bürgermeister hat ihn nach § 42 GemO auszusetzen, und die Kommunalaufsicht kann ihn beanstanden (§ 121 GemO)."
    },

    e_bm_uebertragen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 32 I 2, § 47 I 3 GemO",
      title: "Der Bürgermeister ist kraft Übertragung zuständig",
      text: "Der Gemeinderat hat die Entscheidung dem Bürgermeister übertragen – im Einzelfall durch Beschluss, dauerhaft durch Regelung in der Hauptsatzung (§ 47 I 3 GemO).\n\nGrenzen: Angelegenheiten des Ratsvorbehalts (§ 32 II GemO) sind nicht übertragbar; für § 32 II Nr. 11–13 gelten die Wertgrenzen der Hauptsatzung (§ 32 III GemO)."
    },

    e_ausschuss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 44 GemO",
      title: "Ein Ausschuss ist kraft Übertragung zuständig",
      text: "Der Gemeinderat hat die Entscheidung einem Ausschuss zur abschließenden Entscheidung übertragen (§ 44 I, II GemO – durch Beschluss oder Hauptsatzung).\n\nBeachte das Rückholrecht: Der Rat kann den Ausschuss auflösen, Zuständigkeiten entziehen, Angelegenheiten an sich ziehen und Ausschussbeschlüsse aufheben oder ändern, soweit nicht bereits Rechte Dritter entstanden sind (§ 44 III GemO)."
    },

    e_eil: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 48 GemO",
      title: "Eilentscheidung des Bürgermeisters",
      text: "Der Bürgermeister entscheidet im Benehmen mit den Beigeordneten ANSTELLE des Gemeinderats bzw. Ausschusses (§ 48 S. 1 GemO).\n\nPflichten: unverzügliche Mitteilung der Gründe und der Art der Erledigung an die Mitglieder (§ 48 S. 2 – ein bloßer Bericht in der nächsten Sitzung genügt nicht!). Der Rat kann die Eilentscheidung in seiner nächsten Sitzung aufheben, soweit nicht bereits Rechte Dritter entstanden sind (§ 48 S. 3).\n\nEine rechtswidrige Eilentscheidung kann Gegenstand eines Kommunalverfassungsstreits sein (Eingriff in die Kompetenz des Rates)."
    },

    e_keine_verband: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 GemO",
      title: "Keine Verbandskompetenz der Gemeinde",
      text: "Die Gemeinde ist für die Angelegenheit nicht zuständig – die Organkompetenz-Frage stellt sich nicht. Ein dennoch gefasster Beschluss wäre mangels Verbandskompetenz formell rechtswidrig.\n\nPrüfe im FS1-Schema „Aufgabenart & Verbandskompetenz“, welcher Träger zuständig ist (Verbandsgemeinde § 67 GemO, Landkreis § 2 LKO, Land)."
    }
  },

  routers: {}
});
