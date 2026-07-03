/*
 * Prüfungsschema: Bundesstaatsprinzip, Art. 20 I GG (mit Art. 31, 28, 37 GG)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "StVR II OLE LE 11 zur Einführung in Art. 20, 28 GG und zum Bundesstaatsprinzip" (Jagatic, FS II)
 *    – Übungsfälle: Führerschein ab 14 (Art. 31 GG) und Hundeleinen-Satzung (bundesrechtskonforme Auslegung)
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: begriff → hausgut → art31 → homogenitaet → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-bundesstaat",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsstrukturprinzipien",
  title: "Bundesstaatsprinzip, Art. 20 I GG",
  description: "Elemente des Bundesstaatsprinzips: Gesamtstaat und Gliedstaaten (Abgrenzung Staatenbund/Einheitsstaat), unentziehbares Hausgut der Länder, Kollisionsnorm Art. 31 GG („Bundesrecht bricht Landesrecht“) und Homogenitätsprinzip des Art. 28 GG.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "begriff", label: "Bundesstaat" },
    { id: "hausgut", label: "Hausgut" },
    { id: "art31", label: "Art. 31 GG" },
    { id: "homogenitaet", label: "Homogenität" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verstoß gegen das Bundesstaatsprinzip",
    neg: "Kein Verstoß",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Art. 20 I GG",
      title: "Welches Element des Bundesstaatsprinzips ist betroffen?",
      text: "Obersatz: Das Gesetz/die Maßnahme könnte gegen das Bundesstaatsprinzip aus Art. 20 I GG verstoßen. Jedes Element wird eigenständig im Gutachtenstil geprüft (Obersatz – Definition – Subsumtion – Ergebnis).",
      def: "<b>Bundesstaat:</b> Existenz eines Gesamtstaats (Bund) und mehrerer Gliedstaaten (Länder), die alle Staatsqualität haben – beide nehmen Teile der Staatsgewalt eigenständig wahr. In der EU nur drei Bundesstaaten: Deutschland, Österreich, Belgien.",
      options: [
        { label: "Existenz von Gesamt-/Gliedstaaten angetastet", detail: "Abgrenzung Staatenbund / Einheitsstaat", next: "q_abgrenzung", tone: "neutral" },
        { label: "„Unentziehbares Hausgut“ der Länder", next: "q_hausgut", tone: "neutral" },
        { label: "Kollision Bundesrecht / Landesrecht", detail: "Art. 31 GG", next: "q_31_normen", tone: "neutral" },
        { label: "Landesverfassung weicht vom GG ab", detail: "Homogenitätsprinzip, Art. 28 GG", next: "q_homogenitaet", tone: "neutral" },
        { label: "Bundestreue / Bundeszwang", next: "q_treue", tone: "neutral" }
      ]
    },

    q_abgrenzung: {
      station: "begriff",
      kind: "frage",
      norm: "Art. 79 III GG",
      title: "Würde die Änderung Deutschland zum Staatenbund oder Einheitsstaat machen?",
      def: "<b>Staatenbund:</b> Zusammenschluss souverän bleibender Staaten nach Völkerrecht; der Bund selbst ist nicht (voll) souverän, sein Recht wird erst durch Transformation wirksam (vgl. Art. 59 II GG) – unzulässig wäre daher z. B. die Aberkennung der völkerrechtlichen Souveränität des Bundes (Art. 59 I 1 GG) oder eine Transformationspflicht für Bundesgesetze. <b>Einheitsstaat:</b> Nur der Zentralstaat hat Staatsqualität; die Gebietskörperschaften haben kein eigenes Gesetzgebungsrecht – unzulässig wäre daher die Streichung von Art. 70 I, 77, 78 oder 23 II 1 GG oder der Verfassungsautonomie der Länder.",
      hint: "Art. 79 III GG hebt die „Gliederung des Bundes in Länder“ gesondert hervor; nicht garantiert ist der Bestand einzelner Länder (Art. 29 GG).",
      options: [
        { label: "Ja, Staatsqualität von Bund oder Ländern entfällt", next: "e_verstoss_79iii", tone: "neg" },
        { label: "Nein, Struktur bleibt erhalten", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    q_hausgut: {
      station: "hausgut",
      kind: "frage",
      norm: "Art. 79 III, 30, 83 ff., 92 ff., 106 ff. GG",
      title: "Wird das „unentziehbare Hausgut“ der Länder angetastet?",
      def: "Das BVerfG leitet aus Art. 79 III GG weitere geschützte Positionen ab: (1) <b>Kernbestand eigener Aufgaben und eigenständiger Aufgabenerfüllung</b> – unzulässig, den Ländern die Kompetenzen bei Exekutive und Judikative vollständig/weitgehend zu nehmen (Art. 30, 83 ff., 92 ff. GG) oder ihnen Organisationsvorschriften für ihre Verwaltung zu machen; (2) <b>angemessener Anteil am Gesamtsteueraufkommen</b> – unzulässig, die Steuerbeteiligung oder den Länderfinanzausgleich (Art. 106 ff., 107 II GG) zu streichen.",
      options: [
        { label: "Ja, Kernbestand/Finanzanteil entzogen", next: "e_verstoss_79iii", tone: "neg" },
        { label: "Nein", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Art. 31 GG ================= */

    q_31_normen: {
      station: "art31",
      kind: "frage",
      norm: "Art. 31 GG",
      title: "Art. 31 GG: Existieren eine bundes- und eine landesrechtliche Vorschrift?",
      text: "Geschriebene Voraussetzung der Kollisionsnorm: „Bundesrecht“ und „Landesrecht“ – es müssen eine bundesrechtliche und eine landesrechtliche Vorschrift existieren (auch Satzungen als Landesrecht i. w. S.).",
      options: [
        { label: "Ja", next: "q_31_kollision", tone: "pos" },
        { label: "Nein", next: "e_kein_verstoss", tone: "neg" }
      ]
    },

    q_31_kollision: {
      station: "art31",
      kind: "frage",
      norm: "Art. 31 GG",
      title: "Ungeschriebene Voraussetzung: Liegt eine Kollision vor?",
      def: "<b>Kollision:</b> Beide Normen sind (1) auf denselben Sachverhalt anwendbar und (2) führen zu unterschiedlichen Rechtsfolgen. <b>Keine Kollision:</b> LV vs. GG (Verfassungsautonomie – dann Art. 28 GG prüfen!); Bundes- und Landesrecht regeln das Gleiche; unterschiedliche Normadressaten; bloße Wertungswidersprüche (Bsp.: bayerische 10-H-Regel neben dem BauGB – Konsequenz des Föderalismus).",
      hint: "Übungsfall: Landesgesetz „Führerschein ab 14“ vs. § 10 FeV „ab 18“ → derselbe Sachverhalt (Mindestalter Fahrerlaubnis), unterschiedliche Rechtsfolgen → Kollision (+).",
      options: [
        { label: "Ja, derselbe Sachverhalt + unterschiedliche Rechtsfolgen", next: "q_31_auslegung", tone: "pos" },
        { label: "Nein, kein identischer Sachverhalt / gleiche Rechtsfolge", next: "e_keine_kollision", tone: "neg" },
        { label: "LV kollidiert (scheinbar) mit GG", next: "q_homogenitaet", tone: "warn" }
      ]
    },

    q_31_auslegung: {
      station: "art31",
      kind: "frage",
      norm: "Art. 31 GG",
      title: "Lässt sich die Landesnorm bundesrechtskonform auslegen?",
      text: "Vor der Nichtigkeitsfolge prüfen: Kann die Kollision durch bundesrechtskonforme Auslegung (Unterfall der systematischen Auslegung) beseitigt werden?",
      hint: "Übungsfall Hundeleinen-Satzung: Die Satzung verfolgt nach Sinn und Zweck gefahrenabwehrrechtliche Zwecke für alle gemeindlichen Anlagen (Parks, Spielplätze), nicht nur verkehrsbezogene wie § 28 I 2 StVO → Auslegung beseitigt die Kollision → kein Verstoß.",
      options: [
        { label: "Ja, Auslegung beseitigt die Kollision", next: "e_keine_kollision", tone: "pos" },
        { label: "Nein, Kollision bleibt", next: "e_verstoss_31", tone: "neg" }
      ]
    },

    /* ================= Homogenität ================= */

    q_homogenitaet: {
      station: "homogenitaet",
      kind: "frage",
      norm: "Art. 28 I, II GG",
      title: "Homogenitätsprinzip: Wahrt die LV das Mindestmaß?",
      text: "Nach Art. 28 I 1 GG muss die verfassungsmäßige Ordnung in den Ländern den Grundsätzen des republikanischen, demokratischen und sozialen Rechtsstaates im Sinne des GG „entsprechen“ – gefordert ist nur ein Mindestmaß an Homogenität.",
      def: "Zum Mindestmaß gehört (nur) die Wahrung der Art. 28 I 2–4, 28 II 1 GG (Volksvertretung aus allgemeinen, unmittelbaren, freien, gleichen und geheimen Wahlen; kommunale Selbstverwaltung). Darüber hinaus dürfen die Länder Normen schaffen, die das GG nicht kennt oder die abweichen – z. B. längere Legislaturperioden oder mehr direkte Demokratie in der LV.",
      options: [
        { label: "Mindestmaß gewahrt – bloße Abweichung", detail: "z. B. 5-jährige Wahlperiode, Volksentscheide (Art. 107 ff. LV RLP)", next: "e_homogen", tone: "pos" },
        { label: "Mindestmaß verletzt", detail: "z. B. Abschaffung der Wahlen auf Landesebene", next: "e_verstoss_28", tone: "neg" }
      ]
    },

    q_treue: {
      station: "homogenitaet",
      kind: "frage",
      norm: "Art. 37, 91b, 93 I Nr. 3 GG",
      title: "Kooperativer Föderalismus, Bundestreue, Bundeszwang",
      def: "<b>Kooperativer Föderalismus:</b> Bund und Länder kooperieren vertragsähnlich (z. B. Art. 91b GG, Musterentwürfe für Landesgesetze). <b>Bundestreue / bundesfreundliches Verhalten:</b> gegenseitige Informations-, Abstimmungs- und Mitwirkungspflichten (z. B. Entschließungsermessen bei §§ 119 ff. GemO). <b>Einwirkungsmöglichkeiten des Bundes:</b> Finanzen (Art. 104a ff. GG), Bund-Länder-Streit vor dem BVerfG, äußerstenfalls Bundeszwang nach Art. 37 GG (Bsp.: Abspaltungsbestrebungen eines Landes).",
      options: [
        { label: "Land verletzt Bundespflichten nachhaltig", next: "e_bundeszwang", tone: "warn" },
        { label: "Nur Kooperations-/Abstimmungsfragen", next: "e_kein_verstoss", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verstoss_79iii: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen das Bundesstaatsprinzip (Art. 79 III GG)",
      text: "Das Element des Bundesstaatsprinzips (Staatsqualität von Bund und Ländern bzw. unentziehbares Hausgut) ist verletzt. Damit werden die von Art. 79 III GG geschützten Grundsätze berührt – eine solche Änderung ist unzulässig, das Gesetz materiell verfassungswidrig."
    },
    e_verstoss_31: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen Art. 31 GG – Landesrecht nichtig",
      text: "Bundes- und Landesrecht kollidieren (derselbe Sachverhalt, unterschiedliche Rechtsfolgen) und die Kollision ist nicht durch bundesrechtskonforme Auslegung zu beseitigen. Nach Art. 31 GG wird das Landesrecht „gebrochen“ – es ist grundsätzlich nichtig. Die landesrechtliche Norm verstößt gegen das Bundesstaatsprinzip (vgl. Führerschein-ab-14-Fall)."
    },
    e_keine_kollision: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Kollision – kein Verstoß gegen Art. 31 GG",
      text: "Es fehlt an einer Kollision (kein identischer Sachverhalt, keine unterschiedlichen Rechtsfolgen, bloßer Wertungswiderspruch) oder sie wurde durch bundesrechtskonforme Auslegung beseitigt (vgl. Hundeleinen-Satzung: gefahrenabwehrrechtlicher Zweck neben der verkehrsbezogenen StVO). Kein Verstoß gegen das Bundesstaatsprinzip."
    },
    e_homogen: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Homogenitätsprinzip gewahrt",
      text: "Art. 28 I 1 GG fordert nur ein Mindestmaß an Homogenität (Art. 28 I 2–4, II 1 GG). Abweichende oder zusätzliche Regelungen der Landesverfassung – etwa längere Legislaturperioden oder mehr direkte Demokratie – sind zulässiger Ausdruck der Verfassungsautonomie der Länder."
    },
    e_verstoss_28: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verstoß gegen das Homogenitätsprinzip, Art. 28 GG",
      text: "Die verfassungsmäßige Ordnung des Landes unterschreitet das Mindestmaß des Art. 28 I GG (republikanischer, demokratischer, sozialer Rechtsstaat; Wahlen nach Art. 28 I 2 GG; kommunale Selbstverwaltung nach Art. 28 II GG). Der Bund hat die Einhaltung zu gewährleisten (Art. 28 III GG)."
    },
    e_bundeszwang: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Instrumente des Bundes gegen das Land",
      text: "Verletzt ein Land seine Bundespflichten, kann der Bund das BVerfG anrufen (Bund-Länder-Streit) und äußerstenfalls mit Zustimmung des Bundesrates den Bundeszwang nach Art. 37 GG anwenden, um das Land zur Erfüllung seiner Pflichten anzuhalten."
    },
    e_kein_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Verstoß gegen das Bundesstaatsprinzip",
      text: "Die geprüften Elemente (Gesamt-/Gliedstaaten mit Staatsqualität, Hausgut, Art. 31 GG, Homogenität) sind gewahrt. Ein Verstoß gegen das Bundesstaatsprinzip aus Art. 20 I GG liegt nicht vor."
    }
  }
});
