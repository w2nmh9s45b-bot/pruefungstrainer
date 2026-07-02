/*
 * Prüfungsschema: Gläubigerverzug (Annahmeverzug), §§ 293 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "2.2.3 PR 15 + 16 - OLE" (Breitbach, FS II) – Prüfungsschema und Rechtsfolgen
 *  - "Privatrecht - FS2 - 2024-25 - Ilias" – Schema Gläubigerverzug
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 243, 266, 269, 271, 293–301, 304, 326)
 *
 * Stationen: angebot → faehigkeit → nichtannahme → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-glaeubigerverzug",
  subject: "Privatrecht",
  area: "Leistungsstörungen",
  title: "Gläubigerverzug, §§ 293 ff. BGB",
  description: "Ordnungsgemäßes Angebot (tatsächlich, wörtlich oder entbehrlich – §§ 294–296), Leistungsfähigkeit des Schuldners (§ 297) und Nichtannahme durch den Gläubiger – mit den Rechtsfolgen der §§ 300 f., 304, 326 II BGB.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "angebot", label: "Ordnungsgemäßes Angebot" },
    { id: "faehigkeit", label: "Leistungsfähigkeit" },
    { id: "nichtannahme", label: "Nichtannahme" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "angebot",
      kind: "frage",
      norm: "§ 271 I BGB",
      title: "Ist die Leistung erfüllbar?",
      text: "Der Gläubiger gerät nur in Annahmeverzug, wenn der Schuldner bereits leisten DARF (Erfüllbarkeit) – nicht zu verwechseln mit der Fälligkeit (Schuldner MUSS leisten). Ohne Vereinbarung gilt § 271 I BGB: Der Schuldner darf sofort leisten.",
      def: "<b>Gläubigerverzug (§ 293 BGB):</b> Der Gläubiger nimmt die ihm ordnungsgemäß angebotene Leistung nicht an. Er ist Leistungsstörung, aber keine Pflichtverletzung – die Annahme ist bloße Obliegenheit.",
      options: [
        { label: "Ja, erfüllbar", next: "q_ort", tone: "pos" },
        { label: "Nein, Schuldner darf noch nicht leisten", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_ort: {
      station: "angebot",
      kind: "frage",
      norm: "§ 269 BGB",
      title: "Wird am richtigen Ort angeboten?",
      text: "Der Schuldner muss die Leistung am Leistungsort anbieten. Ohne Vereinbarung: Wohnsitz des Schuldners bei Entstehung des Schuldverhältnisses (§ 269 I BGB).",
      def: "<b>Holschuld:</b> Gläubiger holt beim Schuldner ab – Aufforderung genügt. <b>Schickschuld:</b> Transportperson muss die Leistung am Wohnsitz des Gläubigers anbieten (Übergabe an den Transporteur genügt für den Annahmeverzug noch nicht!). <b>Bringschuld:</b> Schuldner muss am Wohnsitz des Gläubigers anbieten.",
      options: [
        { label: "Ja, am richtigen Ort", next: "q_wie", tone: "pos" },
        { label: "Nein, falscher Ort", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_wie: {
      station: "angebot",
      kind: "frage",
      norm: "§ 266 BGB",
      title: "Wird die Leistung so angeboten, wie sie geschuldet ist?",
      text: "Zu Teilleistungen ist der Schuldner nicht berechtigt (§ 266 BGB); auch das Angebot einer mangelhaften Leistung setzt den Gläubiger nicht in Annahmeverzug.",
      options: [
        { label: "Ja, vollständig und mangelfrei", next: "q_art", tone: "pos" },
        { label: "Nein, Teilleistung oder mangelhaft", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_art: {
      station: "angebot",
      kind: "frage",
      norm: "§§ 294–296 BGB",
      title: "Wie wurde angeboten – tatsächlich, wörtlich oder entbehrlich?",
      def: "<b>Tatsächliches Angebot (§ 294 BGB):</b> so, dass der Gläubiger „nur noch zugreifen“ muss – der Regelfall. <b>Wörtliches Angebot (§ 295 BGB) genügt:</b> wenn der Gläubiger erklärt hat, er werde nicht annehmen (S. 1 Alt. 1), oder wenn eine Mitwirkungshandlung des Gläubigers erforderlich ist – klassisch die Holschuld (S. 1 Alt. 2). <b>Angebot entbehrlich (§ 296 BGB):</b> wenn die Mitwirkungshandlung kalendermäßig bestimmt ist (vgl. § 286 II Nr. 1, 2 BGB).",
      options: [
        { label: "Tatsächliches Angebot (§ 294 BGB)", next: "q_nichtannahme", set: { tatsaechlich: true }, tone: "pos" },
        { label: "Wörtliches Angebot (§ 295 BGB)", detail: "Annahme zuvor verweigert oder Mitwirkung erforderlich (Holschuld)", next: "q_faehigkeit", tone: "pos" },
        { label: "Angebot entbehrlich (§ 296 BGB)", detail: "Mitwirkungshandlung kalendermäßig bestimmt", next: "q_faehigkeit", tone: "pos" },
        { label: "Kein (ausreichendes) Angebot", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_faehigkeit: {
      station: "faehigkeit",
      kind: "frage",
      norm: "§ 297 BGB",
      title: "Ist der Schuldner leistungsfähig und leistungsbereit?",
      text: "Der Gläubiger kommt nicht in Verzug, wenn der Schuldner zur Zeit des Angebots außerstande ist, die Leistung zu bewirken (§ 297 BGB). Die Unmöglichkeit schließt nicht nur den Schuldner-, sondern auch den Gläubigerverzug aus!",
      hint: "Beim tatsächlichen Angebot ergibt sich die Leistungsfähigkeit schon aus dem Angebot selbst – gesondert zu prüfen ist sie nur in den Fällen der §§ 295, 296 BGB.",
      options: [
        { label: "Ja, imstande und bereit", next: "q_nichtannahme", tone: "pos" },
        { label: "Nein (z. B. Leistung unmöglich)", next: "e_297", tone: "neg" }
      ]
    },

    q_nichtannahme: {
      station: "nichtannahme",
      kind: "frage",
      norm: "§ 293 BGB",
      title: "Nimmt der Gläubiger die Leistung nicht an?",
      text: "Der Gläubiger nimmt die ordnungsgemäß angebotene Leistung nicht entgegen oder verweigert die erforderliche Mitwirkungshandlung. Ein VERSCHULDEN des Gläubigers ist NICHT erforderlich – auch der unverschuldet im Stau stehende Gläubiger gerät in Annahmeverzug.",
      def: "<b>Ausnahme (§ 299 BGB):</b> Bei nur vorübergehender Annahmeverhinderung ohne vereinbarten Termin kein Verzug – es sei denn, der Schuldner hat sein Kommen angemessene Zeit vorher angekündigt.",
      options: [
        { label: "Ja, Annahme verweigert / Mitwirkung unterlassen", next: "e_verzug", tone: "pos" },
        { label: "Nur vorübergehend verhindert (§ 299 BGB)", next: "e_299", tone: "warn" },
        { label: "Nein, er nimmt an", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verzug: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Annahmeverzug (+)",
      norm: "§§ 293 ff. BGB",
      title: "Der Gläubiger befindet sich im Annahmeverzug",
      text: "Der Gläubiger ist in Verzug der Annahme. Er wird dadurch nicht schadensersatzpflichtig, erleidet aber rechtliche Nachteile:",
      // resultExtras unten ergänzt die Rechtsfolgen
    },

    e_kein_verzug: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 293 ff. BGB",
      title: "Kein Annahmeverzug (–)",
      text: "Es fehlt an einem ordnungsgemäßen (erfüllbaren, am richtigen Ort, vollständigen) Angebot bzw. an der Nichtannahme. Der Gläubiger ist nicht in Verzug; die allgemeinen Regeln bleiben unberührt."
    },

    e_297: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 297 BGB",
      title: "Kein Annahmeverzug – Schuldner nicht leistungsfähig (–)",
      text: "Der Schuldner war zur Zeit des Angebots außerstande, die Leistung zu bewirken. Warum sollte der Gläubiger zu Hause warten, wenn der Schuldner ohnehin nicht leisten kann? Bei Unmöglichkeit gelten §§ 275, 326 BGB."
    },

    e_299: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 299 BGB",
      title: "Vorübergehende Annahmeverhinderung – differenzieren",
      text: "Ohne vereinbarten Termin gerät der Gläubiger nicht in Verzug, wenn er nur vorübergehend an der Annahme verhindert ist (kein „Hausarrest“ für den Gläubiger). Anders, wenn der Schuldner die Leistung angemessene Zeit vorher angekündigt hat – dann muss der Gläubiger erreichbar sein oder umdisponieren."
    }
  },

  resultExtras: function (flags, node) {
    if (node && node.verdict === "pos") {
      return [
        "Rechtsfolgen: Haftungsmilderung – der Schuldner haftet nur noch für Vorsatz und grobe Fahrlässigkeit (§ 300 I BGB).",
        "Bei Gattungsschulden geht die Leistungsgefahr über (§ 300 II BGB); meist schon Konkretisierung nach § 243 II BGB.",
        "Geldschulden sind nicht mehr zu verzinsen (§ 301 BGB); Ersatz von Mehraufwendungen (§ 304 BGB).",
        "Beim gegenseitigen Vertrag bleibt die Gegenleistungspflicht bestehen, wenn die Leistung im Annahmeverzug unmöglich wird und der Schuldner es nicht zu vertreten hat (§ 326 II 1 Var. 2 BGB)."
      ];
    }
    return [];
  }
});
