/*
 * Prüfungsschema: Schadensersatz nach §§ 280 ff. BGB – Systemprüfung (Leistungsstörungen)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "2.2.3 PR 21 + 22 - OLE" (Breitbach, FS II) – §§ 280 I, III, 283 BGB
 *  - "2.2.3 PR 25 + 26 - OLE" (Breitbach, FS II) – §§ 280 I, III, 281 und §§ 280 I, II, 286 BGB
 *  - "Privatrecht - FS2 - 2024-25 - Ilias" – System der Pflichtverletzungen, § 241 II, § 282, § 324
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 241, 249 ff., 275, 276, 280–283, 286, 288)
 *
 * Stationen: abgrenzung → sv → pflicht → vertreten → schaden → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-schadensersatz-280",
  subject: "Privatrecht",
  area: "Leistungsstörungen",
  title: "Schadensersatz nach §§ 280 ff. BGB",
  description: "Systemprüfung: die richtige Anspruchsgrundlage finden (Unmöglichkeit § 283, Nicht-/Verzögerung § 281, Verzögerungsschaden § 286, Nebenpflichtverletzung §§ 241 II, 282) und durchprüfen – Schuldverhältnis, Pflichtverletzung, Vertretenmüssen, Schaden.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "abgrenzung", label: "Abgrenzung/AGL" },
    { id: "sv", label: "Schuldverhältnis" },
    { id: "pflicht", label: "Pflichtverletzung" },
    { id: "vertreten", label: "Vertretenmüssen" },
    { id: "schaden", label: "Schaden" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§§ 280 ff. BGB",
      title: "Welche Pflichtverletzung liegt vor?",
      text: "Anspruchsgrundlage ist immer § 280 I BGB; die §§ 281–283, 286 BGB enthalten Zusatzvoraussetzungen. Die Abgrenzung erfolgt über die Art der Pflichtverletzung und die Art des Schadens (statt der Leistung / neben der Leistung).",
      def: "<b>Merkhilfe:</b> Leistung dauerhaft unmöglich → §§ 280 I, III, 283. Leistung möglich, aber nicht/verzögert erbracht und Gläubiger will statt ihrer Ersatz (z. B. Deckungskauf) → §§ 280 I, III, 281 (Fristsetzung!). Schaden durch die bloße Verspätung neben der Leistung (z. B. Nutzungsausfall, Zinsen) → §§ 280 I, II, 286 (Verzug!). Verletzung einer Rücksichtnahmepflicht (§ 241 II) → § 280 I, ggf. § 282.",
      options: [
        { label: "Nachträgliche Unmöglichkeit", detail: "§§ 280 I, III, 283 BGB – Schadensersatz statt der Leistung", next: "q_sv", set: { agl: "283" }, tone: "neutral" },
        { label: "Nicht- oder Schlechtleistung trotz Möglichkeit", detail: "§§ 280 I, III, 281 BGB – SE statt der Leistung (Deckungsgeschäft)", next: "q_sv", set: { agl: "281" }, tone: "neutral" },
        { label: "Verzögerungsschaden neben der Leistung", detail: "§§ 280 I, II, 286 BGB – Schuldnerverzug", next: "q_sv", set: { agl: "286" }, tone: "neutral" },
        { label: "Nebenpflichtverletzung (§ 241 II BGB)", detail: "§ 280 I BGB; SE statt der Leistung nur über § 282 BGB", next: "q_sv", set: { agl: "241" }, tone: "neutral" }
      ]
    },

    q_sv: {
      station: "sv",
      kind: "frage",
      norm: "§ 280 I 1 BGB",
      title: "Besteht ein Schuldverhältnis?",
      text: "Zu prüfen ist, welches Schuldverhältnis zustande gekommen sein könnte (Kauf-, Miet-, Werkvertrag …) und ob es wirksam zustande gekommen ist (Grundschema: Einigung, keine rechtshindernden Einwendungen).",
      options: [
        { label: "Ja, wirksames Schuldverhältnis", next: "@pflicht", tone: "pos" },
        { label: "Nein", detail: "Ggf. vorvertragliches Schuldverhältnis (§ 311 II BGB, c.i.c.) oder Delikt prüfen", next: "e_kein_sv", tone: "neg" }
      ]
    },

    /* ---------- Zweig § 283: Unmöglichkeit ---------- */

    q_283_pflicht: {
      station: "pflicht",
      kind: "frage",
      norm: "§§ 275, 283 BGB",
      title: "Ist die Leistungspflicht nach § 275 BGB ausgeschlossen?",
      text: "Die Pflichtverletzung liegt in der endgültigen Nichtleistung wegen Unmöglichkeit (§ 275 I–III BGB). § 283 BGB erfasst nur die NACHTRÄGLICHE Unmöglichkeit; bei anfänglicher gilt § 311a II BGB.",
      hint: "Bei Gattungsschulden: erst Konkretisierung (§ 243 II BGB) prüfen – ggf. anhand von Hol-, Bring- und Schickschuld (Schema „Unmöglichkeit und Gegenleistung“).",
      options: [
        { label: "Ja, Leistungspflicht erloschen/verweigert", next: "q_vertreten", tone: "pos" },
        { label: "Nein, Leistung noch möglich", detail: "Dann §§ 280 I, III, 281 BGB (Fristmodell) – zurück zur Abgrenzung", next: "start", tone: "neg" }
      ]
    },

    /* ---------- Zweig § 281: Nicht-/Schlechtleistung ---------- */

    q_281_anspruch: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 281 I 1 BGB",
      title: "Fälliger und durchsetzbarer Leistungsanspruch?",
      text: "Anspruchsgrundlage benennen (z. B. § 433 I 1 BGB), Fälligkeit ggf. über § 271 BGB bestimmen, Einreden (z. B. Verjährung, § 320 BGB) ausschließen.",
      options: [
        { label: "Ja, fällig und einredefrei", next: "q_281_nichtleistung", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_281_nichtleistung: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 281 I 1 BGB",
      title: "Leistung nicht oder nicht wie geschuldet erbracht?",
      text: "§ 281 I 1 BGB erfasst die Nichtleistung trotz Möglichkeit (Alt. 1) und die Schlechtleistung (Alt. 2).",
      options: [
        { label: "Ja", next: "q_281_frist", tone: "pos" },
        { label: "Nein, ordnungsgemäß geleistet", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_281_frist: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 281 I 1, II BGB",
      title: "Angemessene Frist gesetzt und erfolglos abgelaufen?",
      text: "Der Gläubiger muss dem Schuldner erfolglos eine angemessene Frist zur Leistung bestimmt haben. Eine zu kurze Frist ist nicht unwirksam, sondern setzt die angemessene Frist in Gang.",
      def: "<b>Entbehrlichkeit (§ 281 II BGB):</b> ernsthafte und endgültige Erfüllungsverweigerung (strenge Anforderungen – „letztes Wort“) oder besondere Umstände nach Interessenabwägung (z. B. „just in time“-Verträge, Saisonware).",
      options: [
        { label: "Ja, Frist gesetzt und abgelaufen", next: "q_vertreten", tone: "pos" },
        { label: "Fristsetzung entbehrlich (§ 281 II BGB)", next: "q_vertreten", tone: "warn" },
        { label: "Nein, keine Frist gesetzt", next: "e_keine_frist", tone: "neg" }
      ]
    },

    /* ---------- Zweig § 286: Verzug ---------- */

    q_286_anspruch: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 286 I 1 BGB",
      title: "Fälliger und durchsetzbarer Anspruch?",
      text: "Wie bei § 281: Anspruchsgrundlage benennen, Fälligkeit (§ 271 BGB), keine Einreden.",
      options: [
        { label: "Ja", next: "q_286_mahnung", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_286_mahnung: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 286 I, II, III BGB",
      title: "Verzugsauslösender Umstand: Mahnung oder Ausnahme?",
      text: "Grundsatz: Verzug erst mit Mahnung nach Fälligkeit (§ 286 I 1 BGB).",
      def: "<b>Mahnung:</b> einseitige, empfangsbedürftige, formlose Aufforderung zur Leistung – geschäftsähnliche Handlung (Regeln über WE analog: Zugang, § 130 I BGB). <b>Entbehrlich (§ 286 II):</b> Nr. 1 kalendermäßig bestimmte Leistungszeit („noch im Mai“) · Nr. 2 Ereignis + kalendermäßig berechenbare Frist („eine Woche ab Lieferung“) · Nr. 3 ernsthafte endgültige Verweigerung · Nr. 4 Interessenabwägung (Dringlichkeit, Selbstmahnung). <b>§ 286 III:</b> spätestens 30 Tage nach Fälligkeit und Zugang einer Rechnung – bei Verbrauchern nur mit besonderem Hinweis in der Rechnung!",
      options: [
        { label: "Mahnung nach Fälligkeit zugegangen", next: "q_286_nichtleistung", tone: "pos" },
        { label: "Mahnung entbehrlich (§ 286 II Nr. 1–4 BGB)", next: "q_286_nichtleistung", tone: "warn" },
        { label: "30-Tage-Regel (§ 286 III BGB)", detail: "Verbraucher: nur bei gesondertem Hinweis in der Rechnung!", next: "q_286_nichtleistung", tone: "warn" },
        { label: "Weder Mahnung noch Ausnahme", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_286_nichtleistung: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 286 BGB",
      title: "Leistet der Schuldner trotz Mahnung (bzw. gleichgestelltem Zeitpunkt) nicht?",
      options: [
        { label: "Ja, weiterhin keine Leistung", next: "q_vertreten", tone: "pos" },
        { label: "Nein, er hat inzwischen geleistet", detail: "Verzug beendet; nur für die Verzugszeit entstandene Schäden ersatzfähig", next: "q_vertreten", tone: "warn" }
      ]
    },

    /* ---------- Zweig § 241 II: Nebenpflicht ---------- */

    q_241_pflicht: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 241 II BGB",
      title: "Wurde eine Rücksichtnahme-/Schutzpflicht verletzt?",
      text: "Das Schuldverhältnis verpflichtet jeden Teil zur Rücksicht auf die Rechte, Rechtsgüter und Interessen des anderen (§ 241 II BGB) – nicht leistungsbezogene Nebenpflichten (Schutz-, Obhuts-, Aufklärungspflichten).",
      def: "<b>Beispiel:</b> Der Maler beschädigt beim Streichen die Einrichtungsgegenstände des Kunden – die Hauptleistung (Streichen) ist ordnungsgemäß, verletzt ist die Schutzpflicht.",
      options: [
        { label: "Ja, Schutzpflicht verletzt", next: "q_241_ziel", tone: "pos" },
        { label: "Nein", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_241_ziel: {
      station: "pflicht",
      kind: "frage",
      norm: "§§ 280 I, 282, 324 BGB",
      title: "Was verlangt der Gläubiger?",
      options: [
        { label: "Ersatz des Begleitschadens (neben der Leistung)", detail: "§§ 280 I, 241 II BGB genügen", next: "q_vertreten", tone: "neutral" },
        { label: "Schadensersatz STATT der Leistung", detail: "§§ 280 I, III, 282 BGB: nur wenn die Leistung durch den Schuldner unzumutbar geworden ist", next: "q_282", tone: "warn" }
      ]
    },

    q_282: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 282 BGB",
      title: "Ist dem Gläubiger die Leistung durch den Schuldner unzumutbar?",
      text: "Schadensersatz statt der Leistung wegen Nebenpflichtverletzung setzt voraus, dass dem Gläubiger die Leistung durch den Schuldner nicht mehr zuzumuten ist (§ 282 BGB). Parallel: Rücktritt nach § 324 BGB.",
      options: [
        { label: "Ja, unzumutbar", next: "q_vertreten", tone: "pos" },
        { label: "Nein", detail: "Dann nur Ersatz des Begleitschadens nach §§ 280 I, 241 II BGB", next: "q_vertreten", tone: "warn" }
      ]
    },

    /* ---------- Gemeinsam: Vertretenmüssen + Schaden ---------- */

    q_vertreten: {
      station: "vertreten",
      kind: "frage",
      norm: "§§ 276, 280 I 2 BGB",
      title: "Hat der Schuldner die Pflichtverletzung zu vertreten?",
      text: "Der Schuldner hat Vorsatz und Fahrlässigkeit zu vertreten (§ 276 I 1 BGB), außerdem das Verschulden seiner Erfüllungsgehilfen (§ 278 BGB). Das Vertretenmüssen wird VERMUTET – der Schuldner muss sich entlasten (§ 280 I 2 BGB; beim Verzug zusätzlich § 286 IV BGB zitieren).",
      hint: "Bezugspunkt beachten: Bei § 283 muss sich das Verschulden auf den Umstand beziehen, der zur Unmöglichkeit führte; bei § 286 auf die Nichtleistung trotz Fälligkeit und Mahnung.",
      options: [
        { label: "Ja bzw. keine Entlastung", next: "q_schaden", tone: "pos" },
        { label: "Nein, Entlastungsbeweis gelingt", next: "e_nicht_vertreten", tone: "neg" }
      ]
    },

    q_schaden: {
      station: "schaden",
      kind: "frage",
      norm: "§§ 249 ff. BGB",
      title: "Ist ein ersatzfähiger Schaden entstanden?",
      text: "Differenzhypothese: Der Gläubiger ist so zu stellen, wie er bei ordnungsgemäßer Erfüllung stünde. Beim Verzug zusätzlich: Verzugszinsen (§ 288 I BGB: 5 Prozentpunkte über Basiszins; ohne Verbraucherbeteiligung 9 Prozentpunkte, § 288 II BGB) als gesetzlicher Mindestschaden; darüber hinausgehender Schaden ersatzfähig (§ 288 IV BGB).",
      def: "<b>Abgrenzung über den Schaden:</b> Kosten des Deckungskaufs = Schadensersatz STATT der Leistung (§ 281!) – kein Verzögerungsschaden. Nutzungsausfall, Überziehungszinsen, Rechtsverfolgungskosten = Verzögerungsschaden NEBEN der Leistung (§ 286).",
      options: [
        { label: "Ja, Schaden nach §§ 249 ff. BGB", next: "@ergebnis", tone: "pos" },
        { label: "Nein", next: "e_kein_schaden", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_283: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 280 I, III, 283 BGB",
      title: "Schadensersatz statt der Leistung wegen Unmöglichkeit (+)",
      text: "Alle Voraussetzungen liegen vor: Schuldverhältnis, Ausschluss der Leistungspflicht (§ 275 BGB), vermutetes Vertretenmüssen, Schaden. Der Gläubiger ist so zu stellen, wie er bei ordnungsgemäßer Erfüllung stünde.\n\nDaneben: Rücktritt nach § 326 V BGB (Klarstellung) und stellvertretendes commodum (§ 285 BGB). Bei ANFÄNGLICHER Unmöglichkeit: § 311a II BGB."
    },

    e_281: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 280 I, III, 281 BGB",
      title: "Schadensersatz statt der Leistung (+)",
      text: "Nach erfolglosem Ablauf der angemessenen Frist (bzw. ihrer Entbehrlichkeit) kann der Gläubiger Schadensersatz statt der Leistung verlangen – z. B. die Mehrkosten des Deckungsgeschäfts.\n\nFolge: Der Erfüllungsanspruch ist ausgeschlossen (§ 281 IV BGB). Alternativ oder daneben: Rücktritt (§ 323 BGB; § 325 BGB – Rücktritt und SE kombinierbar)."
    },

    e_286: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 280 I, II, 286 BGB",
      title: "Ersatz des Verzögerungsschadens (+)",
      text: "Der Schuldner befindet sich in Verzug; der durch die Verzögerung adäquat kausal verursachte Schaden ist zu ersetzen – NEBEN der weiterhin geschuldeten Leistung.\n\nBei Geldschulden: Verzugszinsen nach § 288 I BGB (5 Prozentpunkte über Basiszinssatz; § 288 II BGB: 9 Prozentpunkte ohne Verbraucherbeteiligung); weitergehender Schaden nach § 288 IV BGB."
    },

    e_241: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 280 I, 241 II BGB",
      title: "Schadensersatz wegen Nebenpflichtverletzung (+)",
      text: "Die Verletzung der Rücksichtnahmepflicht verpflichtet zum Ersatz des Begleitschadens (neben der Leistung). Bei Unzumutbarkeit der weiteren Leistung: Schadensersatz statt der Leistung (§ 282 BGB) und Rücktritt (§ 324 BGB)."
    },

    e_kein_sv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 280 I 1 BGB",
      title: "Kein Anspruch – kein Schuldverhältnis (–)",
      text: "Ohne (wirksames) Schuldverhältnis kein Anspruch aus § 280 I BGB. Zu denken ist an das vorvertragliche Schuldverhältnis (§ 311 II BGB, culpa in contrahendo) und an deliktische Ansprüche (§§ 823 ff. BGB)."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 280 ff. BGB",
      title: "Kein Schadensersatzanspruch (–)",
      text: "Es fehlt an einer tauglichen Pflichtverletzung bzw. an einem fälligen, durchsetzbaren Anspruch. Prüfe ggf. die anderen Zweige des § 280-Systems."
    },

    e_keine_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 281 I 1 BGB",
      title: "Kein SE statt der Leistung – Fristsetzung fehlt (–)",
      text: "Ohne (erfolglose) angemessene Fristsetzung – und ohne Entbehrlichkeit nach § 281 II BGB – kann kein Schadensersatz statt der Leistung verlangt werden. Der Schuldner hat ein Recht auf die „zweite Chance“.\n\nDenkbar bleibt der Verzögerungsschaden nach §§ 280 I, II, 286 BGB."
    },

    e_kein_verzug: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 286 BGB",
      title: "Kein Verzug – kein Verzögerungsschaden (–)",
      text: "Ohne Mahnung (und ohne die Ausnahmen des § 286 II, III BGB) gerät der Schuldner nicht in Verzug; der Verzögerungsschaden ist nicht ersatzfähig."
    },

    e_nicht_vertreten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 280 I 2 BGB",
      title: "Kein Anspruch – Pflichtverletzung nicht zu vertreten (–)",
      text: "Der Schuldner hat den Entlastungsbeweis geführt (kein Vorsatz, keine Fahrlässigkeit, kein zurechenbares Gehilfenverschulden nach § 278 BGB). Der Schadensersatzanspruch scheidet aus.\n\nBeachte: Im Gläubigerverzug haftet der Schuldner ohnehin nur für Vorsatz und grobe Fahrlässigkeit (§ 300 I BGB)."
    },

    e_kein_schaden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 249 ff. BGB",
      title: "Kein ersatzfähiger Schaden (–)",
      text: "Nach der Differenzhypothese ist keine Vermögenseinbuße feststellbar; der Anspruch geht ins Leere."
    }
  },

  routers: {
    "@pflicht": function (flags) {
      if (flags.agl === "283") return "q_283_pflicht";
      if (flags.agl === "281") return "q_281_anspruch";
      if (flags.agl === "286") return "q_286_anspruch";
      return "q_241_pflicht";
    },
    "@ergebnis": function (flags) {
      if (flags.agl === "283") return "e_283";
      if (flags.agl === "281") return "e_281";
      if (flags.agl === "286") return "e_286";
      return "e_241";
    }
  }
});
