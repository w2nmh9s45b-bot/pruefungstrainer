/*
 * VWL-Schema: Wettbewerbsbeschränkung prüfen (GWB / Art. 101 AEUV)
 * Fach: Volkswirtschaftslehre (Fachstudium 1) – hier gibt es ausnahmsweise echte Normen.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 6 (Wettbewerbstheorie und -politik, GWB, EU)
 *  - Gesetze (Volltext geprüft): GWB §§ 1, 18 IV, 19, 35 I; AEUV Art. 101
 *    ACHTUNG Rechtsstand: Das Skript nennt für die Marktbeherrschungsvermutung noch
 *    "ein Drittel" – seit der 8. GWB-Novelle gilt 40 % (§ 18 IV GWB); hier aktueller Stand.
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-wettbewerb-gwb",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Wettbewerb & Marktformen",
  title: "Wettbewerbsbeschränkung prüfen (GWB)",
  description: "Kartell, Fusion oder Missbrauch von Marktmacht? Die drei Hauptinstrumente des GWB (Kartellverbot § 1, Fusionskontrolle §§ 35 ff., Missbrauchsaufsicht §§ 18, 19) plus europäische Ebene (Art. 101 AEUV, FKVO) – mit den aktuellen Schwellenwerten.",
  start: "start",
  stations: [
    { id: "funktion", label: "Wettbewerb" },
    { id: "instrument", label: "GWB-Instrument" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: zulässig / geklärt",
    neg: "Ergebnis: verboten / kontrolliert",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "funktion",
      kind: "frage",
      norm: "Wettbewerbsfunktionen",
      title: "Warum wird der Wettbewerb überhaupt geschützt?",
      def: "Wettbewerb veranstaltet sich nicht selbst – er muss vor Beschränkungen <b>geschützt</b> werden (Wettbewerb als staatliche Aufgabe). Seine fünf Funktionen:<br>• <b>Freiheitsfunktion</b> (Unternehmer-, Konsum-, Arbeitsplatzwahl)<br>• <b>Allokationsfunktion</b> (Faktoren nachfrage- und kostengerecht lenken)<br>• <b>Verteilungsfunktion</b> (leistungsgerechte Einkommensverteilung)<br>• <b>Innovationsfunktion</b> (Produkt- und Verfahrenserneuerungen; Pioniergewinne nur kurzfristig)<br>• <b>Kontrollfunktion</b> (keine dauerhaften Machtpositionen)<br><br>Voraussetzungen u. a.: mind. 2 Teilnehmer je Marktseite, antagonistisches Verhalten, Markttransparenz, freier Marktzugang.",
      options: [
        { label: "Verstanden – welche Beschränkung liegt vor?", next: "q_instrument", tone: "pos" }
      ]
    },

    q_instrument: {
      station: "instrument",
      kind: "frage",
      norm: "GWB-Systematik",
      title: "Welches Verhalten steht im Raum?",
      def: "Hauptinhalt des <b>Gesetzes gegen Wettbewerbsbeschränkungen (GWB/Kartellgesetz)</b> – es schützt Verbraucher davor, dass Unternehmen Marktmacht missbrauchen und ungerechtfertigt hohe Preise verlangen:<br><br>1. <b>Kartellverbot</b> (§ 1 GWB)<br>2. <b>Fusionskontrolle</b> (§§ 35 ff. GWB)<br>3. <b>Missbrauchsaufsicht</b> über marktbeherrschende Unternehmen (§§ 18, 19 GWB)",
      options: [
        { label: "Mehrere selbstständige Unternehmen sprechen sich ab", detail: "Preis-, Gebiets- oder Submissionskartell", next: "q_kartell", tone: "neutral" },
        { label: "Unternehmen schließen sich zusammen (Fusion)", detail: "Übernahme, Verschmelzung, Kontrollerwerb", next: "q_fusion", tone: "neutral" },
        { label: "Ein mächtiges Unternehmen nutzt seine Stellung aus", detail: "überhöhte Preise, Behinderung von Wettbewerbern", next: "q_missbrauch", tone: "neutral" },
        { label: "Der Fall ist grenzüberschreitend (EU)", detail: "Handel zwischen Mitgliedstaaten betroffen", next: "e_eu", tone: "warn" }
      ]
    },

    q_kartell: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 1 GWB",
      title: "Bezweckt oder bewirkt die Vereinbarung eine Wettbewerbsbeschränkung?",
      def: "Von einem <b>Kartell</b> spricht man, wenn mehrere <b>wirtschaftlich und rechtlich selbstständig bleibende</b> Unternehmen miteinander Vereinbarungen treffen, die den Wettbewerb <b>einschränken oder verhindern</b>.<br><br>§ 1 GWB („Verbot wettbewerbsbeschränkender Vereinbarungen“) erfasst Vereinbarungen zwischen Unternehmen, Beschlüsse von Unternehmensvereinigungen und aufeinander abgestimmte Verhaltensweisen.<br><br>Beispiele: <b>Preiskartell</b>, <b>Gebietskartell</b>, <b>Submissionskartell</b> (Absprachen bei Ausschreibungen – vergaberechtlich hochrelevant!).",
      options: [
        { label: "Ja – Wettbewerb wird eingeschränkt oder verhindert", next: "e_kartell_verboten", tone: "neg" },
        { label: "Nein – bloße Kooperation ohne Wettbewerbsbeschränkung", next: "e_zulaessig", tone: "pos" }
      ]
    },

    q_fusion: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 35 I GWB",
      title: "Sind die Umsatzschwellen der Fusionskontrolle erreicht?",
      def: "Die Zusammenschlusskontrolle findet Anwendung, wenn im <b>letzten Geschäftsjahr vor dem Zusammenschluss</b>:<br><br>• die beteiligten Unternehmen insgesamt <b>weltweit</b> Umsatzerlöse von mehr als <b>500 Mio. €</b> UND<br>• im <b>Inland</b> mindestens ein beteiligtes Unternehmen mehr als <b>50 Mio. €</b> UND<br>• ein <b>anderes</b> beteiligtes Unternehmen mehr als <b>17,5 Mio. €</b><br>erzielt haben (§ 35 I GWB).<br><br>Der Zusammenschluss ist <b>vor dem Vollzug</b> beim Bundeskartellamt anzumelden.",
      options: [
        { label: "Ja – alle Schwellen überschritten", next: "e_fusion_kontrolle", tone: "neg" },
        { label: "Nein – unterhalb der Schwellen", next: "e_fusion_frei", tone: "pos" },
        { label: "Es geht um einen EU-weiten Mega-Zusammenschluss", next: "e_eu", tone: "warn" }
      ]
    },

    q_missbrauch: {
      station: "pruefung",
      kind: "frage",
      norm: "§ 18 IV GWB",
      title: "Ist das Unternehmen marktbeherrschend?",
      def: "<b>Marktbeherrschend</b> ist ein Unternehmen, wenn es keinem wesentlichen Wettbewerb (mehr) ausgesetzt ist oder eine überragende Marktstellung hat.<br><br><b>Vermutung:</b> Es wird vermutet, dass ein Unternehmen marktbeherrschend ist, wenn es einen Marktanteil von mindestens <b>40 Prozent</b> hat (§ 18 IV GWB).<br><br><i>Hinweis Rechtsstand: Das Skript (2023) nennt noch „ein Drittel“ – das war die alte Rechtslage. Aktuell gilt 40 %; für Oligopole gelten eigene Vermutungen (§ 18 VI GWB).</i>",
      options: [
        { label: "Ja – marktbeherrschend (Vermutung ab 40 % Marktanteil)", next: "e_missbrauch", tone: "neg" },
        { label: "Nein – wesentlicher Wettbewerb besteht", next: "e_zulaessig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kartell_verboten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 GWB",
      title: "Kartellverbot greift",
      text: "Die Vereinbarung verstößt gegen das Kartellverbot des § 1 GWB: Vereinbarungen zwischen Unternehmen, die eine Verhinderung, Einschränkung oder Verfälschung des Wettbewerbs bezwecken oder bewirken, sind verboten.\n\nFolgen: Bußgelder durch das Bundeskartellamt, Nichtigkeit der Vereinbarung, Schadensersatzansprüche Geschädigter.\n\nPraxisbezug Vergabe: Submissionsabsprachen (abgestimmte Angebote bei Ausschreibungen) sind der klassische Kartellfall der Kommunalverwaltung – zugleich strafbar (§ 298 StGB) und Ausschlussgrund im Vergabeverfahren.\n\nAusnahmen: Freistellungen sind möglich (z. B. § 2 GWB bei Effizienzgewinnen mit Verbraucherbeteiligung)."
    },

    e_fusion_kontrolle: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 35 ff. GWB",
      title: "Fusionskontrolle: Anmeldepflicht beim Bundeskartellamt",
      text: "Alle Schwellen des § 35 I GWB sind überschritten (weltweit > 500 Mio. €, Inland ein Unternehmen > 50 Mio. €, ein anderes > 17,5 Mio. €): Der Zusammenschluss ist VOR dem Vollzug beim Bundeskartellamt anzumelden.\n\nMaßstab der Prüfung: Der Zusammenschluss kann untersagt werden, wenn er wirksamen Wettbewerb erheblich behindern würde – es sei denn, die Unternehmen weisen nach, dass er auch Verbesserungen des Wettbewerbs bewirkt und diese die Nachteile der Marktbeherrschung überwiegen.\n\nMerke die Systematik: Kartell = Verhalten koordinieren (Unternehmen bleiben selbstständig), Fusion = Selbstständigkeit endet (Konzern/Verschmelzung)."
    },

    e_fusion_frei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 35 GWB (–)",
      title: "Keine Fusionskontrolle – Schwellen nicht erreicht",
      text: "Unterhalb der Umsatzschwellen des § 35 I GWB findet keine Zusammenschlusskontrolle statt – der Zusammenschluss ist ohne kartellbehördliche Freigabe möglich.\n\nAber: Auch das fusionierte Unternehmen unterliegt weiter dem Kartellverbot (§ 1 GWB) und – falls es marktbeherrschend wird – der Missbrauchsaufsicht (§§ 18, 19 GWB).\n\nSonderfälle beachten: § 35 Ia GWB erfasst zusätzlich hohe Transaktionswerte (Kaufpreis > 400 Mio. €) auch bei geringen Umsätzen – gedacht für Start-up-Übernahmen in der Digitalwirtschaft."
    },

    e_missbrauch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 18, 19 GWB",
      title: "Missbrauchsaufsicht über marktbeherrschende Unternehmen",
      text: "Das Unternehmen ist marktbeherrschend (Vermutung ab 40 % Marktanteil, § 18 IV GWB). Der Missbrauch dieser Stellung ist verboten (§ 19 GWB): u. a. Ausbeutungsmissbrauch (ungerechtfertigt hohe Preise), Behinderungsmissbrauch (Verdrängung von Wettbewerbern), Lieferverweigerung.\n\nWichtig: Marktbeherrschung ALLEIN ist nicht verboten – verboten ist ihr MISSBRAUCH. Ein Problem bleiben finanzielle Verflechtungen (Konzerne) und die daraus resultierenden Einflussmöglichkeiten.\n\nMarktbezug: Das Monopol ist die Extremform (→ Schema 'Marktform & Verhaltensweise') – Monopole gehören zugleich zu den Fällen echten Marktversagens."
    },

    e_eu: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Art. 101 AEUV · FKVO",
      title: "Europäische Ebene: Kommission zuständig",
      text: "Für grenzüberschreitende Kartelle gilt das Kartellverbot des Art. 101 AEUV (Vereinbarungen, die den Handel zwischen Mitgliedstaaten beeinträchtigen können).\n\nEuropäische Fusionskontrolle (FKVO, seit 1989): zuständig ist die Europäische Kommission bei Zusammenschlüssen von GEMEINSCHAFTSWEITER BEDEUTUNG – z. B. weltweiter Gesamtumsatz der Beteiligten > 5 Mrd. € UND gemeinschaftsweiter Umsatz von mindestens zwei Beteiligten je > 250 Mio. €, es sei denn, jedes Unternehmen erzielt mehr als zwei Drittel seines EU-Umsatzes in einem einzigen Mitgliedstaat.\n\nSystematik: nationale Fälle → Bundeskartellamt (GWB), EU-Dimension → Kommission (AEUV/FKVO)."
    },

    e_zulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kein GWB-Verstoß",
      title: "Wettbewerbskonform",
      text: "Weder Kartell noch kontrollpflichtige Fusion noch Missbrauch einer marktbeherrschenden Stellung – das Verhalten ist wettbewerbskonform.\n\nZur Einordnung: Wettbewerb lebt von Wettbewerbsparametern wie Preis und Preisbestandteilen, Qualität, Produktdifferenzierung, Nebenleistungen sowie der Schaffung und Verschiebung von Präferenzen. Aggressiver LEISTUNGSwettbewerb ist erwünscht – verboten ist nur seine Beschränkung.\n\nOrdnungspolitische Einordnung: Sicherstellung des Wettbewerbs ist Aufgabe der Ordnungspolitik – der Staat als 'Ordnungs- und Steuerungsinstanz' der Sozialen Marktwirtschaft."
    }
  }
});
