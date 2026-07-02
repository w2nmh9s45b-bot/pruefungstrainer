/*
 * Prüfungsschema: Unmöglichkeit und Schicksal der Gegenleistung, §§ 275, 326 BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Privatrecht - FS2 - 2024-25 - Ilias" (FS II) – § 275, § 326, Rücktritt bei Unmöglichkeit
 *  - "Praesentation FS II - W - 2023" (Birtel-Kaldenhoff) – § 326 I Schema, Ausnahmen § 326 II
 *  - "2.2.3 PR 21 + 22 - OLE" (Breitbach) – anfängliche/nachträgliche Unmöglichkeit
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 243, 275, 311a, 326, 346)
 *
 * Stationen: art → leistungspflicht → gegenleistung → rueckabwicklung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-unmoeglichkeit-326",
  subject: "Privatrecht",
  area: "Leistungsstörungen",
  title: "Unmöglichkeit und Gegenleistung, §§ 275, 326 BGB",
  description: "Arten der Unmöglichkeit (§ 275 I–III, § 311a), Konkretisierung bei der Gattungsschuld (§ 243 II), Befreiung von Leistung und Gegenleistung (§ 326 I) mit den Ausnahmen des § 326 II sowie Rücktritt (§ 326 V) und Rückforderung (§ 326 IV).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "art", label: "Art der Unmöglichkeit" },
    { id: "leistungspflicht", label: "Leistungspflicht (§ 275)" },
    { id: "gegenleistung", label: "Gegenleistung (§ 326)" },
    { id: "rueckabwicklung", label: "Rückabwicklung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§ 275 BGB",
      title: "Welche Form der Unmöglichkeit liegt vor?",
      text: "Unmöglichkeit = die Leistung kann dauerhaft nicht mehr erbracht werden. Vorübergehende Leistungshindernisse sind Fälle der Verzögerung (§§ 280 I, III, 281 bzw. §§ 280 I, II, 286 BGB)!",
      def: "<b>§ 275 I:</b> echte Unmöglichkeit – für den Schuldner oder für jedermann (objektiv/subjektiv). Wirkung ipso iure. <b>§ 275 II:</b> faktische/wirtschaftliche Unmöglichkeit – grobes Missverhältnis von Aufwand und Leistungsinteresse (Einrede!). <b>§ 275 III:</b> persönliche Unzumutbarkeit bei höchstpersönlichen Leistungen (Einrede!).",
      options: [
        { label: "Echte Unmöglichkeit (§ 275 I BGB)", detail: "z. B. Kaufsache zerstört", next: "q_zeitpunkt", set: { abs: "1" }, tone: "neutral" },
        { label: "Faktische Unmöglichkeit (§ 275 II BGB)", detail: "„Ring auf dem Meeresgrund“ – Einrede des Schuldners", next: "q_zeitpunkt", set: { abs: "2" }, tone: "neutral" },
        { label: "Persönliche Unzumutbarkeit (§ 275 III BGB)", detail: "z. B. Sängerin, deren Kind lebensgefährlich erkrankt ist", next: "q_zeitpunkt", set: { abs: "3" }, tone: "neutral" },
        { label: "Leistung noch möglich", next: "e_keine_unmoeglichkeit", tone: "neg" }
      ]
    },

    q_zeitpunkt: {
      station: "art",
      kind: "frage",
      norm: "§ 311a BGB",
      title: "Anfängliche oder nachträgliche Unmöglichkeit?",
      def: "<b>Anfänglich:</b> Das Leistungshindernis bestand schon bei Vertragsschluss (z. B. Yacht war schon gesunken). Der Vertrag bleibt wirksam (§ 311a I BGB); Schadensersatz nach § 311a II BGB. <b>Nachträglich:</b> Hindernis erst nach Vertragsschluss – Schadensersatz nach §§ 280 I, III, 283 BGB.",
      options: [
        { label: "Nachträglich (nach Vertragsschluss)", next: "q_gattung", set: { nachtraeglich: true }, tone: "neutral" },
        { label: "Anfänglich (schon bei Vertragsschluss)", detail: "Vertrag gleichwohl wirksam, § 311a I BGB", next: "q_gattung", tone: "neutral" }
      ]
    },

    q_gattung: {
      station: "art",
      kind: "frage",
      norm: "§ 243 BGB",
      title: "Stück- oder Gattungsschuld?",
      text: "Bei der Gattungsschuld wird die Leistung durch den Untergang einzelner Stücke grundsätzlich nicht unmöglich, solange die Gattung existiert – es sei denn, die Schuld hat sich auf ein Stück konkretisiert (§ 243 II BGB).",
      def: "<b>Konkretisierung (§ 243 II BGB):</b> Der Schuldner hat das zur Leistung „seinerseits Erforderliche“ getan – abhängig vom Leistungsort: <b>Holschuld</b> – Aussonderung + Bereitstellung + Mitteilung; <b>Schickschuld</b> – Übergabe an die Transportperson; <b>Bringschuld</b> – tatsächliches Angebot am Wohnsitz des Gläubigers.",
      options: [
        { label: "Stückschuld – Untergang macht unmöglich", next: "@pflicht", tone: "neutral" },
        { label: "Gattungsschuld, konkretisiert (§ 243 II BGB)", detail: "Wie Stückschuld zu behandeln", next: "@pflicht", tone: "neutral" },
        { label: "Gattungsschuld, nicht konkretisiert", detail: "Beschaffungsrisiko! Leistung bleibt möglich", next: "e_keine_unmoeglichkeit", tone: "neg" }
      ]
    },

    q_275_1: {
      station: "leistungspflicht",
      kind: "frage",
      norm: "§ 275 I BGB",
      title: "Folge: Die Leistungspflicht erlischt ipso iure",
      text: "Der Anspruch auf die Leistung ist ausgeschlossen, soweit sie für den Schuldner oder für jedermann unmöglich ist – von Gesetzes wegen, ohne dass sich der Schuldner darauf berufen muss (rechtsvernichtende Einwendung).",
      options: [
        { label: "Weiter zur Gegenleistung (§ 326 BGB)", next: "q_326_1", tone: "neutral" }
      ]
    },

    q_275_23: {
      station: "leistungspflicht",
      kind: "frage",
      norm: "§ 275 II, III BGB",
      title: "Erhebt der Schuldner die Einrede?",
      text: "Anders als § 275 I wirken Abs. 2 und 3 nur als Leistungsverweigerungsrecht: Der Schuldner KANN die Leistung verweigern – erst mit Erhebung der Einrede entfällt die Durchsetzbarkeit.",
      options: [
        { label: "Ja, Einrede erhoben", detail: "Behandlung dann wie bei § 275 I – weiter mit § 326 BGB", next: "q_326_1", tone: "warn" },
        { label: "Nein", detail: "Der Anspruch bleibt durchsetzbar", next: "e_einrede_fehlt", tone: "neutral" }
      ]
    },

    /* ================= § 326: Gegenleistung ================= */

    q_326_1: {
      station: "gegenleistung",
      kind: "frage",
      norm: "§ 326 I 1 BGB",
      title: "Entfällt die Gegenleistungspflicht (§ 326 I 1 BGB)?",
      text: "Beim gegenseitigen Vertrag entfällt mit der Leistungspflicht grundsätzlich auch der Anspruch auf die Gegenleistung: „Ohne Leistung keine Gegenleistung.“ Bei Teilunmöglichkeit mindert sich die Gegenleistung entsprechend (§ 326 I 1 Hs. 2 i. V. m. § 441 III BGB).",
      hint: "Prüfstandort: § 326 I 1 BGB ist eine rechtsvernichtende Einwendung gegen den Anspruch auf die Gegenleistung (z. B. den Kaufpreisanspruch aus § 433 II BGB) – nie losgelöst prüfen!",
      options: [
        { label: "Grundsatz greift – aber Ausnahmen prüfen", next: "q_326_2", tone: "neutral" }
      ]
    },

    q_326_2: {
      station: "gegenleistung",
      kind: "frage",
      norm: "§ 326 II BGB",
      title: "Greift eine Ausnahme (§ 326 II BGB)?",
      text: "Die Gegenleistungspflicht bleibt bestehen, wenn (Var. 1) der Gläubiger für den Umstand, der die Unmöglichkeit herbeigeführt hat, allein oder weit überwiegend verantwortlich ist, oder (Var. 2) das Hindernis eintritt, während der Gläubiger im Annahmeverzug ist (§§ 293 ff. BGB) und der Schuldner es nicht zu vertreten hat.",
      hint: "Der Schuldner muss sich ersparte Aufwendungen und anderweitigen Erwerb anrechnen lassen (§ 326 II 2 BGB). Auch beim Versendungskauf geht die Gegenleistungsgefahr früher über (§ 447 BGB).",
      options: [
        { label: "Keine Ausnahme – Gegenleistungspflicht entfällt", next: "q_326_4", tone: "pos" },
        { label: "Gläubiger (weit überwiegend) verantwortlich", detail: "§ 326 II 1 Var. 1 BGB – Gegenleistung bleibt geschuldet", next: "e_326_2", tone: "warn" },
        { label: "Unmöglichkeit im Annahmeverzug des Gläubigers", detail: "§ 326 II 1 Var. 2 BGB – Gegenleistung bleibt geschuldet", next: "e_326_2", tone: "warn" }
      ]
    },

    q_326_4: {
      station: "rueckabwicklung",
      kind: "frage",
      norm: "§ 326 IV, V BGB",
      title: "Wurde die Gegenleistung schon erbracht?",
      text: "Ist die nicht (mehr) geschuldete Gegenleistung bereits bewirkt, kann sie nach § 326 IV BGB i. V. m. §§ 346–348 BGB zurückgefordert werden. Daneben kann der Gläubiger nach § 326 V BGB zurücktreten (ohne Fristsetzung) – der Rücktritt hat zumindest Klarstellungsfunktion.",
      options: [
        { label: "Ja – Rückforderung nach § 326 IV BGB", next: "e_326_4", tone: "warn" },
        { label: "Nein, noch nichts geleistet", next: "e_326_1", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_keine_unmoeglichkeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      kicker: "Ergebnis: keine Unmöglichkeit",
      norm: "§ 275 BGB",
      title: "Keine Unmöglichkeit – Anspruch besteht fort (–)",
      text: "Die Leistung ist (noch) möglich – bei der nicht konkretisierten Gattungsschuld trägt der Schuldner das Beschaffungsrisiko. Der Erfüllungsanspruch besteht fort.\n\nBei bloßer Verspätung: Schuldnerverzug prüfen (§§ 280 I, II, 286 BGB – Schema „Schadensersatz nach §§ 280 ff.“)."
    },

    e_einrede_fehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 275 II, III BGB",
      title: "Einrede nicht erhoben – Anspruch durchsetzbar",
      text: "§ 275 II und III BGB geben nur ein Leistungsverweigerungsrecht. Solange der Schuldner die Einrede nicht erhebt, bleibt der Leistungsanspruch bestehen und durchsetzbar."
    },

    e_326_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: beide Pflichten erloschen",
      norm: "§§ 275 I, 326 I 1 BGB",
      title: "Leistung und Gegenleistung entfallen (+)",
      text: "Der Schuldner ist von der Leistungspflicht frei (§ 275 BGB), der Gläubiger von der Gegenleistungspflicht (§ 326 I 1 BGB).\n\nWeiter denken: Hat der Schuldner die Unmöglichkeit zu vertreten → Schadensersatz statt der Leistung (§§ 280 I, III, 283 BGB bzw. § 311a II BGB bei anfänglicher Unmöglichkeit). Erhält der Schuldner einen Ersatz (z. B. Versicherungssumme) → stellvertretendes commodum, § 285 BGB."
    },

    e_326_2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Ergebnis: Ausnahme greift",
      norm: "§ 326 II BGB",
      title: "Gegenleistungspflicht bleibt bestehen",
      text: "Trotz Befreiung des Schuldners von der Leistungspflicht bleibt der Gläubiger zur Gegenleistung verpflichtet – er war für die Unmöglichkeit (weit überwiegend) verantwortlich oder befand sich im Annahmeverzug.\n\nAnrechnung: Der Schuldner muss sich ersparte Aufwendungen, anderweitigen Erwerb und böswillig unterlassenen Erwerb anrechnen lassen (§ 326 II 2 BGB)."
    },

    e_326_4: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Rückabwicklung",
      norm: "§ 326 IV, V BGB",
      title: "Rückforderung der Gegenleistung (+)",
      text: "Die bereits erbrachte Gegenleistung kann nach § 326 IV i. V. m. §§ 346–348 BGB zurückgefordert werden. Zusätzlich oder stattdessen: Rücktritt nach § 326 V BGB (Fristsetzung entbehrlich, § 323 II analog – die Frist wäre sinnlos).\n\nPrüfungsschema Rücktritt: I. Rücktrittserklärung (§ 349 BGB), II. Rücktrittsgrund (§ 326 V BGB), III. kein Ausschluss (§ 323 VI BGB)."
    }
  },

  routers: {
    "@pflicht": function (flags) {
      return flags.abs === "1" ? "q_275_1" : "q_275_23";
    }
  }
});
