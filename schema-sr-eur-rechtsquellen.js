/*
 * Prüfungsschema: Rechtsquellen und Handlungsformen der EU, Art. 288 AEUV
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Europarecht):
 *  - "02. Skript EuropaR FS II 2024_2025" (Breitbach/Jagatic) – I. Einführung, II. Rechtsquellen
 *  - Normen verifiziert an Gesetze/md/Verfassungsrecht/EUV.md und AEUV.md
 *
 * Stationen: einordnung → primaer → sekundaer → wirkung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-eur-rechtsquellen",
  subject: "Staatsrecht / Europarecht",
  area: "Europarecht",
  title: "EU: Rechtsquellen und Handlungsformen, Art. 288 AEUV",
  description: "Was ist die EU (Staatenverbund, Grundsatz der begrenzten Einzelermächtigung Art. 5 I 1 EUV)? Primär- und Sekundärrecht und die Handlungsformen des Art. 288 AEUV: Verordnung, Richtlinie, Beschluss, Empfehlung und Stellungnahme – mit ihren Wirkungen im Mitgliedstaat.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "einordnung", label: "Einordnung EU" },
    { id: "primaer", label: "Primärrecht" },
    { id: "sekundaer", label: "Sekundärrecht" },
    { id: "wirkung", label: "Wirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Unmittelbar verbindlich",
    neg: "Nicht unmittelbar verbindlich",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "einordnung",
      kind: "frage",
      norm: "Art. 5 I 1, 47 EUV",
      title: "Was ist die EU – Bundesstaat, Staatenbund oder …?",
      def: "<b>Kein Bundesstaat:</b> Grundsatz der begrenzten Einzelermächtigung (Art. 5 I 1 EUV) – die EU wird nur innerhalb der ihr in den Verträgen übertragenen Zuständigkeiten tätig; alle übrigen verbleiben bei den Mitgliedstaaten. Sie hat keine „Kompetenz-Kompetenz“. <b>Kein Staatenbund:</b> Sie ist völkerrechtlich souverän (Art. 47 EUV) und kann Recht schaffen, das ohne Transformation in den Mitgliedstaaten gilt. <b>BVerfG:</b> Die EU ist ein „Staatenverbund“.",
      options: [
        { label: "Rechtsquelle einordnen: Primärrecht?", next: "q_primaer", tone: "neutral" },
        { label: "Handlungsform des Sekundärrechts bestimmen", next: "q_form", tone: "neutral" }
      ]
    },

    q_primaer: {
      station: "primaer",
      kind: "frage",
      norm: "Art. 6 I EUV",
      title: "Gehört die Norm zum Primärrecht?",
      def: "<b>Primärrecht:</b> die Gründungsverträge EUV und AEUV samt Protokollen und Anhängen, die allgemeinen Rechtsgrundsätze sowie die EU-Grundrechtecharta – sie steht nach Art. 6 I UAbs. 1 EUV den Verträgen gleich. <b>Sekundärrecht:</b> das von den EU-Organen auf Grundlage der Verträge erlassene Recht (Art. 288 AEUV).",
      options: [
        { label: "EUV / AEUV / Grundrechtecharta", next: "e_primaer", tone: "pos" },
        { label: "Rechtsakt eines EU-Organs", detail: "→ Sekundärrecht, Art. 288 AEUV", next: "q_form", tone: "neutral" }
      ]
    },

    q_form: {
      station: "sekundaer",
      kind: "frage",
      norm: "Art. 288 AEUV",
      title: "Welche Handlungsform liegt vor?",
      text: "Für die Ausübung ihrer Zuständigkeiten nehmen die Organe Verordnungen, Richtlinien, Beschlüsse, Empfehlungen und Stellungnahmen an (Art. 288 I AEUV).",
      options: [
        { label: "Verordnung", detail: "Art. 288 II AEUV", next: "q_vo", tone: "neutral" },
        { label: "Richtlinie", detail: "Art. 288 III AEUV", next: "q_rl", tone: "neutral" },
        { label: "Beschluss", detail: "Art. 288 IV AEUV", next: "q_beschluss", tone: "neutral" },
        { label: "Empfehlung / Stellungnahme", detail: "Art. 288 V AEUV", next: "e_empfehlung", tone: "neutral" }
      ]
    },

    q_vo: {
      station: "wirkung",
      kind: "frage",
      norm: "Art. 288 II AEUV",
      title: "Verordnung: Wirkung im Mitgliedstaat?",
      def: "<b>Allgemeine Geltung (Art. 288 II 1):</b> abstrakt-generelle Wirkung, Qualität einer Rechtsnorm („in allen ihren Teilen verbindlich“ ist nur deklaratorisch). <b>Unmittelbare Geltung (Art. 288 II 2):</b> gilt in jedem Mitgliedstaat ohne Transformation – entscheidender Unterschied zum normalen Völkerrecht (Art. 59 II 1 GG). Beispiele mit Verwaltungsbezug: DSGVO, Dublin-VO 604/2013, De-minimis-VO, Artenschutzverordnung.",
      options: [
        { label: "Kann sich der Bürger direkt darauf berufen?", next: "e_vo", tone: "pos" }
      ]
    },

    q_rl: {
      station: "wirkung",
      kind: "frage",
      norm: "Art. 288 III AEUV",
      title: "Richtlinie: Für wen ist sie verbindlich?",
      def: "Die Richtlinie ist <b>für jeden Mitgliedstaat verbindlich</b> – nicht für den einzelnen Bürger (entspricht insoweit Art. 59 II 1 GG). Verbindlich ist nur das zu erreichende <b>Ziel</b>; „Form und Mittel“ bleiben den Mitgliedstaaten überlassen: Das meint keinen Formverzicht (§ 37 II VwVfG!), sondern einen Betätigungsspielraum – grundsätzlich braucht es ein nationales Umsetzungsgesetz. Zur Wahl der „Mittel“ gehören: welches Organ die Vorschriften erlässt, welches Verfahren gilt, welche Rechtsqualität (formelles/materielles Gesetz). Praktisch sind Richtlinien oft so detailgenau, dass nur die wortgleiche Umsetzung bleibt (Bsp. Art. 4 Warenkauf-RL) – vom EuGH stillschweigend gebilligt. Beispiele: Asylverfahrens-RL 2013/32/EU, FFH- und Vogelschutz-RL.",
      options: [
        { label: "Ordnungsgemäß und fristgerecht umgesetzt", next: "e_rl_umgesetzt", tone: "pos" },
        { label: "Nicht/fehlerhaft umgesetzt", detail: "→ Schema „Richtlinie: unmittelbare Wirkung“", next: "e_rl_nicht", tone: "warn" }
      ]
    },

    q_beschluss: {
      station: "wirkung",
      kind: "frage",
      norm: "Art. 288 IV AEUV",
      title: "Beschluss: An bestimmte Adressaten gerichtet?",
      def: "Beschlüsse sind <b>in allen ihren Teilen verbindlich</b> (Art. 288 IV 1 AEUV) – keine Transformation nötig. <b>Adressatenbezogene Beschlüsse</b> (Art. 288 IV 2) sind nur für die Adressaten verbindlich und mit dem deutschen VA (§ 35 VwVfG) vergleichbar; Adressaten können Bürger oder Mitgliedstaaten sein (Bsp.: Kartell-Bußgeld, Beihilfeverbot). <b>Adressatenlose Beschlüsse</b> verpflichten nur EU-Organe und entfalten in den Mitgliedstaaten keine unmittelbare Rechtswirkung (Bsp.: Förderprogramme).",
      options: [
        { label: "Ja, an Bürger/Mitgliedstaat adressiert", next: "e_beschluss_adressat", tone: "pos" },
        { label: "Nein, adressatenlos", next: "e_beschluss_ohne", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_primaer: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Primärrecht",
      title: "Primärrecht der EU",
      text: "EUV, AEUV und die Grundrechtecharta (Art. 6 I EUV – den Verträgen gleichrangig) bilden das Primärrecht. Es ist Maßstab für alles Sekundärrecht und genießt Anwendungsvorrang vor nationalem Recht (dazu das Schema „Anwendungsvorrang des Unionsrechts“)."
    },
    e_vo: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Unmittelbar anwendbar",
      title: "Verordnung gilt unmittelbar",
      text: "Die Verordnung gilt unmittelbar in jedem Mitgliedstaat (Art. 288 II 2 AEUV): Das nationale Parlament darf grundsätzlich kein eigenes Gesetz auf ihrem Gebiet erlassen, und Bürger wie Verwaltung können sich unmittelbar auf sie berufen, wenn die Norm als Anspruchs- bzw. Ermächtigungsgrundlage zu qualifizieren ist (Frage der Normauslegung – z. B. DSGVO)."
    },
    e_rl_umgesetzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Über das Umsetzungsgesetz",
      title: "Richtlinie wirkt über das nationale Umsetzungsrecht",
      text: "Die ordnungsgemäß umgesetzte Richtlinie wirkt gegenüber dem Bürger über das nationale Umsetzungsgesetz. Dieses ist richtlinienkonform auszulegen; die Richtlinie selbst bleibt Auslegungsmaßstab."
    },
    e_rl_nicht: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Richtlinie nicht umgesetzt – Ausnahmewirkungen prüfen",
      text: "Grundsätzlich bindet die Richtlinie nur den Mitgliedstaat. Ausnahmsweise hat der EuGH eine unmittelbare Wirkung zugelassen – die Voraussetzungen (Fristablauf, hinreichende Bestimmtheit, Begünstigung) prüft das eigene Schema „Richtlinie: unmittelbare Wirkung“."
    },
    e_beschluss_adressat: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Verbindlich für Adressaten",
      title: "Adressatenbezogener Beschluss – „EU-Verwaltungsakt“",
      text: "Der Beschluss ist für die bezeichneten Adressaten (Bürger oder Mitgliedstaaten) in allen Teilen verbindlich – funktional vergleichbar mit dem deutschen VA nach § 35 VwVfG (Bsp.: Bußgeld im Kartellrecht, Verbot einer Beihilfe)."
    },
    e_beschluss_ohne: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Adressatenloser Beschluss",
      text: "Der Beschluss schafft nur Pflichten für Organe der EU; in den Mitgliedstaaten entfaltet er keine unmittelbare Rechtswirkung. Durchsetzbar ist er vor den europäischen Gerichten (praktisch Verordnungen ähnlich, z. B. Förderprogramme)."
    },
    e_empfehlung: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Empfehlung / Stellungnahme – nicht verbindlich",
      text: "Empfehlungen und Stellungnahmen sind nach Art. 288 V AEUV nicht (unmittelbar) verbindlich. Mittelbare rechtliche Bedeutung: Stellungnahmen sind in EU-Gesetzgebungs- und Gerichtsverfahren teils zwingend vorgeschrieben (z. B. Art. 258 AEUV); Empfehlungen sind von nationalen Gerichten wegen Art. 4 III EUV (loyale Zusammenarbeit) zu berücksichtigen, aber nicht zwingend zu befolgen."
    }
  }
});
