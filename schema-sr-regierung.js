/*
 * Prüfungsschema: Bundesregierung – Kanzlerwahl, Misstrauensvotum, Vertrauensfrage
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic) – A.I.2.a) Bundesregierung, Art. 62-69 GG
 *  - "StVR II OLE LE 16 Synopse GG und LV" (LV-Parallelen)
 *  - Normen verifiziert an Grundgesetz.md; Mitgliederzahl BT: § 1 I BWahlG (630)
 *
 * Stationen: bildung → arbeit → krise → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-regierung",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsorganisation",
  title: "Bundesregierung, Art. 62–69 GG",
  description: "Regierungsbildung und Regierungskrise: Kanzlerwahl in drei Wahlphasen (Art. 63 GG), Ministerernennung (Art. 64 GG), Richtlinien-/Ressort-/Kollegialprinzip (Art. 65 GG), konstruktives Misstrauensvotum (Art. 67 GG) und Vertrauensfrage mit materieller Auflösungslage (Art. 68 GG).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "bildung", label: "Regierungsbildung" },
    { id: "arbeit", label: "Arbeitsweise" },
    { id: "krise", label: "Regierungskrise" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Wirksam / erfolgreich",
    neg: "Unwirksam / gescheitert",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "bildung",
      kind: "frage",
      norm: "Art. 62 GG",
      title: "Welcher Vorgang wird geprüft?",
      text: "Die Bundesregierung besteht aus dem Bundeskanzler und den Bundesministern (Art. 62 GG). Aufgaben: politische Führung/oberste Staatsleitung („Gubernative“) und Leitung der obersten Bundesbehörden („Administrative“, inkl. Rechtsverordnungen nach Art. 80 GG).",
      hint: "LV RLP: Art. 62 GG ≙ Art. 98 I LV; Art. 63 GG ≙ Art. 98 II LV (kein Wahlphasenmodell!); Art. 67 GG ≙ Art. 99 LV (destruktives Misstrauensvotum).",
      options: [
        { label: "Wahl des Bundeskanzlers", detail: "Art. 63 GG – drei Wahlphasen", next: "q_phase1", tone: "neutral" },
        { label: "Ernennung der Minister / Arbeitsweise", detail: "Art. 64, 65 GG", next: "q_minister", tone: "neutral" },
        { label: "Konstruktives Misstrauensvotum", detail: "Art. 67 GG", next: "q_misstrauen", tone: "neutral" },
        { label: "Vertrauensfrage", detail: "Art. 68 GG", next: "q_vertrauen", tone: "neutral" },
        { label: "Ende der Ämter", detail: "Art. 69 GG", next: "q_ende", tone: "neutral" }
      ]
    },

    /* ================= Kanzlerwahl ================= */

    q_phase1: {
      station: "bildung",
      kind: "frage",
      norm: "Art. 63 I, II GG",
      title: "1. Wahlphase: Wahl auf Vorschlag des Bundespräsidenten?",
      text: "Der Kanzler wird auf Vorschlag des BPräs (rechtlich weitgehend dessen Ermessen, praktisch Ergebnis der Koalitionsverhandlungen) ohne Aussprache gewählt. Erforderlich: Stimmen der Mehrheit der Mitglieder des Bundestages („Kanzlermehrheit“, Art. 121 GG – bei 630 Mitgliedern nach § 1 I BWahlG: 316 Stimmen).",
      hint: "Bislang wurde jeder Kanzler in der ersten Wahlphase gewählt.",
      options: [
        { label: "Kanzlermehrheit erreicht", next: "e_kanzler_gewaehlt", tone: "pos" },
        { label: "Kanzlermehrheit verfehlt", next: "q_phase2", tone: "warn" }
      ]
    },

    q_phase2: {
      station: "bildung",
      kind: "frage",
      norm: "Art. 63 III GG",
      title: "2. Wahlphase: Wahl binnen 14 Tagen aus der Mitte des Bundestages?",
      text: "Wird der Vorgeschlagene nicht gewählt, kann der Bundestag binnen 14 Tagen nach dem Wahlgang mit mehr als der Hälfte seiner Mitglieder (Berechnung wie Art. 63 II 1 GG) einen Kanzler wählen – jetzt ohne Vorschlagsrecht des BPräs.",
      options: [
        { label: "Kanzlermehrheit erreicht", next: "e_kanzler_gewaehlt", tone: "pos" },
        { label: "Frist verstrichen ohne Wahl", next: "q_phase3", tone: "warn" }
      ]
    },

    q_phase3: {
      station: "bildung",
      kind: "frage",
      norm: "Art. 63 IV GG",
      title: "3. Wahlphase: Unverzüglicher neuer Wahlgang – relative Mehrheit?",
      text: "Kommt eine Wahl innerhalb der Frist nicht zustande, findet unverzüglich (Zweck: erfolgreiche Kanzlerwahl – auch mehrere Wochen möglich, Missbrauch ist Einzelfallfrage) ein neuer Wahlgang statt: Gewählt ist, wer die meisten Stimmen erhält (Berechnung nach Art. 42 II 1 GG – NICHT Art. 121 GG!).",
      options: [
        { label: "Gewählter erreicht Mitgliedermehrheit", detail: "BPräs muss binnen 7 Tagen ernennen (Art. 63 IV 2 GG)", next: "e_kanzler_gewaehlt", tone: "pos" },
        { label: "Nur relative Mehrheit", detail: "Art. 63 IV 3 GG: BPräs hat die Wahl", next: "q_minderheit", tone: "warn" }
      ]
    },

    q_minderheit: {
      station: "bildung",
      kind: "frage",
      norm: "Art. 63 IV 3 GG",
      title: "Entscheidung des Bundespräsidenten: Ernennung oder Auflösung?",
      text: "Erreicht der Gewählte nur die relative Mehrheit, muss der BPräs binnen sieben Tagen entweder den Gewählten ernennen („Minderheitsregierung“ – bislang nie vorgekommen, 2017 möglich gewesen) oder den Bundestag auflösen.",
      options: [
        { label: "Ernennung", next: "e_minderheitsregierung", tone: "warn" },
        { label: "Auflösung des Bundestages", next: "e_aufloesung", tone: "neg" }
      ]
    },

    /* ================= Minister / Arbeitsweise ================= */

    q_minister: {
      station: "arbeit",
      kind: "frage",
      norm: "Art. 64, 65 GG",
      title: "Ernennung der Minister und Kompetenzverteilung",
      text: "Die Bundesminister werden auf Vorschlag des Kanzlers vom BPräs ernannt und entlassen (Art. 64 I GG). Allein der Kanzlervorschlag ist maßgebend – für Personen und Ministeriumszuschnitte (Ausnahmen: Pflichtministerien aus Art. 65a, 96 II 4, 114 I GG).",
      def: "<b>Art. 65 GG:</b> S. 1 <b>Richtlinienkompetenz</b> des Kanzlers („Kanzlerdemokratie“) – setzt den Rahmen; S. 2 <b>Ressortprinzip</b> – Minister leiten ihren Geschäftsbereich selbstständig (Organisations-, Personal- und Sachgewalt); S. 3 <b>Kollegialprinzip</b> – Meinungsverschiedenheiten entscheidet die Bundesregierung.",
      options: [
        { label: "Weisung des Kanzlers an einen Minister zulässig?", next: "q_weisung", tone: "neutral" },
        { label: "Zurück zur Auswahl", next: "start", tone: "neutral" }
      ]
    },

    q_weisung: {
      station: "arbeit",
      kind: "frage",
      norm: "Art. 65 S. 1, 2 GG",
      title: "Nimmt die Weisung dem Minister seinen Entscheidungsspielraum?",
      text: "Die Grenze der Richtlinienkompetenz zum Ressortprinzip ist ungeklärt (keine BVerfG-Entscheidung). Gesichert: Unzulässig sind Weisungen, die dem Minister seinen Entscheidungsspielraum vollkommen oder fast vollkommen nehmen.",
      options: [
        { label: "Rahmenvorgabe (Richtlinie)", next: "e_weisung_zulaessig", tone: "pos" },
        { label: "Detailweisung ohne Restspielraum", next: "e_weisung_unzulaessig", tone: "neg" }
      ]
    },

    /* ================= Misstrauensvotum / Vertrauensfrage ================= */

    q_misstrauen: {
      station: "krise",
      kind: "frage",
      norm: "Art. 67 GG, § 97 GOBT",
      title: "Konstruktives Misstrauensvotum: Voraussetzungen erfüllt?",
      text: "Der Bundestag kann dem Kanzler das Misstrauen nur aussprechen, indem er mit der Mehrheit seiner Mitglieder (Art. 121 GG: 316) einen Nachfolger wählt und den BPräs ersucht, den Kanzler zu entlassen. Voraussetzungen: Antrag (§ 97 I 2 GOBT), 48 Stunden zwischen Antrag und Wahl (Art. 67 II GG), Mitgliedermehrheit für den Nachfolger.",
      def: "<b>Konstruktiv:</b> Sturz nur bei gleichzeitiger Wahl eines Nachfolgers (Art. 67 I 1 GG). Gegensatz: <b>destruktives</b> Misstrauensvotum wie Art. 99 II LV RLP – der Ministerpräsident muss zurücktreten, ohne dass ein Nachfolger gewählt wird.",
      options: [
        { label: "Nachfolger mit Mitgliedermehrheit gewählt", next: "e_misstrauen_erfolg", tone: "pos" },
        { label: "Mehrheit verfehlt / 48-Stunden-Frist missachtet", next: "e_misstrauen_gescheitert", tone: "neg" }
      ]
    },

    q_vertrauen: {
      station: "krise",
      kind: "frage",
      norm: "Art. 68 GG",
      title: "Vertrauensfrage: echte oder unechte?",
      text: "Voraussetzungen: Antrag des Kanzlers, 48 Stunden zwischen Antrag und Abstimmung (Art. 68 II GG). Findet der Antrag nicht die Zustimmung der Mitgliedermehrheit, kann der BPräs auf Vorschlag des Kanzlers binnen 21 Tagen den Bundestag auflösen.",
      def: "<b>Echte Vertrauensfrage:</b> Der Kanzler prüft mit offenem Ausgang, ob er noch die Mehrheit hat. <b>Unechte Vertrauensfrage:</b> Der Kanzler will gezielt die Auflösung herbeiführen – problematisch, weil das GG bewusst kein Selbstauflösungsrecht des BT vorsieht. Daher verlangt das BVerfG die <b>materielle Auflösungslage</b>.",
      options: [
        { label: "Vertrauen ausgesprochen (Mitgliedermehrheit)", next: "e_vertrauen_bestanden", tone: "pos" },
        { label: "Echte Vertrauensfrage verloren", next: "q_folge68", tone: "warn" },
        { label: "Unechte Vertrauensfrage verloren", next: "q_aufloesungslage", tone: "warn" }
      ]
    },

    q_aufloesungslage: {
      station: "krise",
      kind: "frage",
      norm: "Art. 68 GG (BVerfG)",
      title: "Liegt eine materielle Auflösungslage vor?",
      def: "<b>Materielle Auflösungslage:</b> politische Lage der Instabilität zwischen Kanzler und Bundestag. Gesicherte Belege: verlorene Abstimmungen, eindeutige Misstrauensbekundungen von Abgeordneten, Parteiaustritte in der Fraktion. Auch subjektive Darlegungen des Kanzlers können genügen – das BVerfG prüft politische Wertungen und Prognosen nur eingeschränkt (Willkürkontrolle).",
      options: [
        { label: "Ja, Instabilität belegt oder plausibel dargelegt", next: "q_folge68", tone: "pos" },
        { label: "Nein, offensichtlich sachfremd/willkürlich", next: "e_aufloesung_unzulaessig", tone: "neg" }
      ]
    },

    q_folge68: {
      station: "krise",
      kind: "frage",
      norm: "Art. 68 I GG",
      title: "Wie geht es nach der verlorenen Vertrauensfrage weiter?",
      text: "Der Kanzler hat die Wahl: Er kann dem BPräs die Auflösung vorschlagen, den Vorschlag unterlassen und als „Minderheitskanzler“ weiterregieren, zurücktreten – oder der BT wählt in der Zwischenzeit einen neuen Kanzler (dann erlischt das Auflösungsrecht, Art. 68 I 2 GG).",
      options: [
        { label: "Vorschlag → BPräs löst den BT auf (Ermessen)", next: "e_aufloesung", tone: "neutral" },
        { label: "Weiterregieren als Minderheitsregierung", next: "e_minderheitsregierung", tone: "warn" },
        { label: "BT wählt neuen Kanzler", detail: "Auflösungsrecht erlischt", next: "e_kanzler_gewaehlt", tone: "pos" }
      ]
    },

    q_ende: {
      station: "krise",
      kind: "frage",
      norm: "Art. 69 II, III GG",
      title: "Wann endet das Amt der Bundesregierung?",
      def: "<b>Art. 69 II GG:</b> mit dem Zusammentritt eines neuen Bundestages sowie mit jeder anderen Erledigung des Kanzleramtes (Art. 67, 68 GG; ungeschrieben: Tod, Dienstunfähigkeit; Rücktritt nach h. M. möglich). Mit dem Kanzleramt enden auch die Ministerämter. <b>Art. 69 III GG:</b> Auf Ersuchen führen Kanzler/Minister die Geschäfte weiter (in der Praxis immer).",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_ende", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kanzler_gewaehlt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Bundeskanzler wirksam gewählt",
      text: "Der Kanzler ist mit der erforderlichen Mehrheit gewählt und vom Bundespräsidenten zu ernennen. Anschließend werden die Minister auf seinen Vorschlag ernannt (Art. 64 I GG). Hinweis LV RLP: Art. 98 II LV kennt kein Wahlphasenmodell – es wird gewählt, bis jemand die Mehrheit erreicht; die alte Regierung bleibt so lange im Amt (keine Entsprechung zu Art. 69 II GG)."
    },
    e_minderheitsregierung: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Minderheitsregierung",
      text: "Die Regierung stützt sich auf keine eigene Mehrheit im Parlament und ist für Gesetzesvorhaben auf wechselnde Unterstützung angewiesen. Verfassungsrechtlich zulässig (Art. 63 IV 3, 68 GG) – in der Bundesrepublik bislang nie dauerhaft praktiziert."
    },
    e_aufloesung: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Auflösung des Bundestages – Neuwahlen",
      text: "Der Bundespräsident löst den Bundestag auf (Art. 63 IV 3 bzw. Art. 68 I GG, Ermessen). Es kommt zu Neuwahlen (Art. 39 I GG). Das Auflösungsrecht erlischt, sobald der Bundestag mit Mitgliedermehrheit einen neuen Kanzler wählt (Art. 68 I 2 GG)."
    },
    e_aufloesung_unzulaessig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Auflösung verfassungswidrig – keine materielle Auflösungslage",
      text: "Die unechte Vertrauensfrage ohne materielle Auflösungslage würde de facto ein Selbstauflösungsrecht des Bundestages schaffen, das das GG bewusst nicht vorsieht. Eine gleichwohl erfolgte Auflösung wäre verfassungswidrig (Prüfung durch das BVerfG allerdings nur auf Willkür)."
    },
    e_weisung_zulaessig: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Richtlinienkompetenz gedeckt",
      text: "Die Vorgabe hält sich im Rahmen der Richtlinienkompetenz (Art. 65 S. 1 GG): Sie setzt den Rahmen, innerhalb dessen der Minister sein Ressort eigenständig leitet (Art. 65 S. 2 GG). Praktisch wird die Richtlinienmacht durch die Koalitionsvereinbarung begrenzt."
    },
    e_weisung_unzulaessig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verstoß gegen das Ressortprinzip",
      text: "Weisungen, die dem Minister seinen Entscheidungsspielraum vollkommen oder fast vollkommen nehmen, verletzen das Ressortprinzip aus Art. 65 S. 2 GG (Organisations-, Personal- und Sachgewalt des Ministers)."
    },
    e_misstrauen_erfolg: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Konstruktives Misstrauensvotum erfolgreich",
      text: "Der Bundestag hat mit der Mehrheit seiner Mitglieder einen Nachfolger gewählt. Der Bundespräsident muss dem Ersuchen entsprechen, den bisherigen Kanzler entlassen und den Gewählten ernennen (Art. 67 I 2 GG); das Amt des alten Kanzlers endet (Art. 69 II GG)."
    },
    e_misstrauen_gescheitert: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Misstrauensvotum gescheitert",
      text: "Die Mitgliedermehrheit für einen Nachfolger kam nicht zustande bzw. die 48-Stunden-Frist (Art. 67 II GG) wurde nicht gewahrt. Der Kanzler bleibt im Amt – ein bloß destruktiver Sturz ohne Nachfolgerwahl ist im GG nicht vorgesehen."
    },
    e_vertrauen_bestanden: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Vertrauensfrage bestanden",
      text: "Der Antrag des Kanzlers fand die Zustimmung der Mehrheit der Mitglieder des Bundestages (Art. 68 I 1, 121 GG). Die Regierung ist bestätigt; eine Auflösung des Bundestages scheidet aus."
    },
    e_ende: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Ende der Ämter der Bundesregierung",
      text: "Das Amt des Kanzlers endet mit dem Zusammentritt eines neuen Bundestages, mit erfolgreichem konstruktivem Misstrauensvotum, nach verlorener Vertrauensfrage mit Auflösung sowie durch Tod, Dienstunfähigkeit oder Rücktritt; mit ihm enden die Ministerämter (Art. 69 II GG). Auf Ersuchen des BPräs führen sie die Geschäfte bis zur Neubildung weiter (Art. 69 III GG)."
    }
  }
});
