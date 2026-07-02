/*
 * Prüfungsschema: Schadensersatz beim Kauf, §§ 437 Nr. 3, 280 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "PR-PowerPoint Folien (2. Studienjahr)" – Mangelfolgeschaden (§§ 437 Nr. 3, 280 I),
 *    Mangelschaden (§§ 437 Nr. 3, 280 I, III, 281, 440), nicht behebbare Mängel (§§ 283, 311a II),
 *    Verzögerungsschaden (§§ 437, 280 II, 286)
 *  - "Praesentation FS II - W - 2023" (Birtel-Kaldenhoff) – Mängelgewährleistung Schadensersatz
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 280–283, 286, 311a, 437, 440)
 *
 * Stationen: gwl → abgrenzung → zusatz → vertreten → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-kauf-schadensersatz",
  subject: "Privatrecht",
  area: "Kaufrecht (Gewährleistung)",
  title: "Schadensersatz beim Kauf, §§ 437 Nr. 3, 280 ff. BGB",
  description: "Die richtige Anspruchskette finden: Mangelfolgeschaden (§ 280 I), Mangelschaden statt der Leistung (§§ 280 I, III, 281, 440), nicht behebbarer Mangel (§§ 283 / 311a II) oder Verzögerungsschaden (§§ 280 II, 286) – jeweils auf Basis der Gewährleistungslage.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "gwl", label: "Gewährleistungslage" },
    { id: "abgrenzung", label: "Schadensart" },
    { id: "zusatz", label: "Zusatzvoraussetzungen" },
    { id: "vertreten", label: "Vertretenmüssen/Schaden" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "gwl",
      kind: "frage",
      norm: "§ 437 BGB",
      title: "Liegt die Gewährleistungslage vor?",
      text: "Basis aller kaufrechtlichen Schadensersatzansprüche: wirksamer Kaufvertrag, Sach-/Rechtsmangel (§§ 434, 435 BGB) bei Gefahrübergang (§§ 446, 447 BGB), kein Ausschluss (§§ 442, 444 BGB). Detailprüfung: Schema „Nacherfüllung“.",
      options: [
        { label: "Ja, Gewährleistungslage (+)", next: "q_schadensart", tone: "pos" },
        { label: "Nein", next: "e_keine_gwl", tone: "neg" }
      ]
    },

    q_schadensart: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§§ 437 Nr. 3, 280 ff. BGB",
      title: "Welcher Schaden wird geltend gemacht?",
      text: "Die Abgrenzung entscheidet über die Anspruchskette – Leitfrage: Wäre der Schaden durch eine (hypothetische) Nacherfüllung entfallen?",
      def: "<b>Mangelfolgeschaden</b> (neben der Leistung): Schaden an ANDEREN Rechtsgütern des Käufers durch den Mangel (z. B. mangelhaftes Futter tötet den Hund) – §§ 437 Nr. 3, 280 I BGB, KEINE Fristsetzung. <b>Mangelschaden</b> (statt der Leistung): das Äquivalenzinteresse – die Sache selbst ist weniger wert / Deckungskauf nötig; durch Nacherfüllung behebbar → Fristmodell §§ 280 I, III, 281, 440 BGB. <b>Nicht behebbarer Mangel:</b> §§ 280 I, III, 283 BGB (nachträglich) bzw. § 311a II BGB (anfänglich). <b>Verzögerungsschaden:</b> Schaden durch verspätete Nacherfüllung – §§ 437 Nr. 3, 280 I, II, 286 BGB.",
      options: [
        { label: "Mangelfolgeschaden (Integritätsinteresse)", detail: "§§ 437 Nr. 3, 280 I BGB – ohne Fristsetzung", next: "q_vertreten", set: { kette: "folge" }, tone: "neutral" },
        { label: "Mangelschaden – behebbarer Mangel", detail: "§§ 437 Nr. 3, 280 I, III, 281, 440 BGB – Fristmodell", next: "q_281_frist", set: { kette: "281" }, tone: "neutral" },
        { label: "Mangelschaden – nicht behebbarer Mangel", detail: "§§ 437 Nr. 3, 280 I, III, 283 BGB bzw. § 311a II BGB", next: "q_283_zeit", set: { kette: "283" }, tone: "neutral" },
        { label: "Verzögerungsschaden", detail: "§§ 437 Nr. 3, 280 I, II, 286 BGB – Verzug mit der Nacherfüllung", next: "q_286", set: { kette: "286" }, tone: "neutral" }
      ]
    },

    q_281_frist: {
      station: "zusatz",
      kind: "frage",
      norm: "§§ 281 I, 440 BGB",
      title: "Frist zur Nacherfüllung gesetzt und erfolglos abgelaufen?",
      text: "Für Schadensersatz statt der Leistung gilt das Fristmodell: erfolglose angemessene Frist zur Nacherfüllung – oder Entbehrlichkeit.",
      def: "<b>Entbehrlichkeit:</b> § 281 II BGB (ernsthafte endgültige Verweigerung, besondere Umstände) und § 440 BGB (berechtigte Verweigerung nach § 439 IV; Fehlschlagen – bei Nachbesserung nach dem zweiten erfolglosen Versuch, § 440 S. 2; Unzumutbarkeit).",
      options: [
        { label: "Ja, Frist erfolglos abgelaufen", next: "q_erheblich", tone: "pos" },
        { label: "Entbehrlich (§ 281 II / § 440 BGB)", next: "q_erheblich", tone: "warn" },
        { label: "Nein", next: "e_keine_frist", tone: "neg" }
      ]
    },

    q_erheblich: {
      station: "zusatz",
      kind: "frage",
      norm: "§ 281 I 3 BGB",
      title: "Kleiner oder großer Schadensersatz?",
      def: "<b>Kleiner SE:</b> Käufer behält die Sache, verlangt die Wertdifferenz/Reparaturkosten. <b>Großer SE (statt der GANZEN Leistung):</b> Rückgabe der Sache + Ersatz des vollen Nichterfüllungsschadens – nur bei ERHEBLICHER Pflichtverletzung (§ 281 I 3 BGB, Wertung wie § 323 V 2 BGB).",
      options: [
        { label: "Kleiner Schadensersatz", next: "q_vertreten", tone: "neutral" },
        { label: "Großer Schadensersatz – Mangel erheblich", next: "q_vertreten", tone: "neutral" },
        { label: "Großer Schadensersatz – Mangel nur unerheblich", detail: "§ 281 I 3 BGB steht entgegen", next: "e_unerheblich", tone: "neg" }
      ]
    },

    q_283_zeit: {
      station: "zusatz",
      kind: "frage",
      norm: "§§ 283, 311a II BGB",
      title: "War der Mangel schon bei Vertragsschluss unbehebbar?",
      text: "Bei unbehebbaren Mängeln ist die Nacherfüllung unmöglich (§ 275 I BGB) – eine Fristsetzung wäre sinnlos. Die Anspruchskette hängt vom Zeitpunkt ab.",
      options: [
        { label: "Nein, erst nach Vertragsschluss unbehebbar", detail: "§§ 437 Nr. 3, 280 I, III, 283 BGB", next: "q_vertreten", tone: "neutral" },
        { label: "Ja, schon bei Vertragsschluss", detail: "§§ 437 Nr. 3, 311a II BGB – Vertrag bleibt wirksam (§ 311a I BGB)", next: "q_vertreten", set: { anfaenglich: true }, tone: "neutral" }
      ]
    },

    q_286: {
      station: "zusatz",
      kind: "frage",
      norm: "§ 286 BGB",
      title: "Ist der Verkäufer mit der Nacherfüllung in Verzug?",
      text: "Erforderlich: fälliger Nacherfüllungsanspruch, Mahnung (oder Entbehrlichkeit nach § 286 II, III BGB), Nichtleistung, Vertretenmüssen (§ 286 IV BGB).",
      options: [
        { label: "Ja, Verzug liegt vor", next: "q_vertreten", tone: "pos" },
        { label: "Nein", next: "e_kein_verzug", tone: "neg" }
      ]
    },

    q_vertreten: {
      station: "vertreten",
      kind: "frage",
      norm: "§§ 276, 280 I 2, 311a II 2 BGB",
      title: "Hat der Verkäufer die Pflichtverletzung zu vertreten?",
      text: "Das Vertretenmüssen wird vermutet (§ 280 I 2 BGB) – der Verkäufer muss sich entlasten. Bei § 311a II BGB: Kannte er das Leistungshindernis bei Vertragsschluss oder hat er seine Unkenntnis zu vertreten (§ 311a II 2 BGB)?",
      hint: "Bezugspunkt differenziert: beim Mangelfolgeschaden die mangelhafte Lieferung; bei § 281 auch die Nichtvornahme der Nacherfüllung; bei § 283 der Umstand, der die Nacherfüllung unmöglich machte.",
      options: [
        { label: "Ja bzw. keine Entlastung", next: "q_schaden", tone: "pos" },
        { label: "Nein, Entlastungsbeweis gelingt", next: "e_nicht_vertreten", tone: "neg" }
      ]
    },

    q_schaden: {
      station: "vertreten",
      kind: "frage",
      norm: "§§ 249 ff. BGB",
      title: "Ist ein kausaler Schaden entstanden?",
      text: "Differenzhypothese; beim Schadensersatz statt der Leistung: Der Käufer ist so zu stellen, wie er bei mangelfreier Lieferung stünde (positives Interesse).",
      options: [
        { label: "Ja", next: "@ergebnis", tone: "pos" },
        { label: "Nein", next: "e_kein_schaden", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_folge: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 3, 280 I BGB",
      title: "Ersatz des Mangelfolgeschadens (+)",
      text: "Der durch die mangelhafte Lieferung an anderen Rechtsgütern des Käufers entstandene Schaden ist zu ersetzen – NEBEN der Leistung, ohne Fristsetzung.\n\nAnspruchsgrundlage sauber zitieren: §§ 437 Nr. 3, 280 I (ggf. i. V. m. 241 II) BGB."
    },

    e_281: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 3, 280 I, III, 281, 440 BGB",
      title: "Schadensersatz statt der Leistung (Mangelschaden) (+)",
      text: "Nach erfolglosem Fristablauf (bzw. Entbehrlichkeit) ist der Mangelschaden zu ersetzen: kleiner SE (Wertdifferenz/Mängelbeseitigungskosten – Sache bleibt beim Käufer) oder großer SE (Rückgabe + voller Nichterfüllungsschaden, nur bei erheblichem Mangel).\n\nMit dem Verlangen entfällt der Erfüllungsanspruch (§ 281 IV BGB); Kombination mit Rücktritt möglich (§ 325 BGB)."
    },

    e_283: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 3, 280 I, III, 283 BGB",
      title: "Schadensersatz statt der Leistung – unbehebbarer Mangel (+)",
      text: "Die Nacherfüllung ist unmöglich (§ 275 I BGB); ohne Fristsetzung ist Schadensersatz statt der Leistung zu leisten. Daneben: Rücktritt nach §§ 437 Nr. 2, 326 V BGB (§ 325 BGB: kombinierbar)."
    },

    e_311a: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 3, 311a II BGB",
      title: "Schadensersatz bei anfänglich unbehebbarem Mangel (+)",
      text: "War der Mangel schon bei Vertragsschluss nicht behebbar, richtet sich der Anspruch auf das positive Interesse nach §§ 437 Nr. 3, 311a II BGB. Der Vertrag bleibt wirksam (§ 311a I BGB); die Haftung entfällt, wenn der Verkäufer das Hindernis weder kannte noch seine Unkenntnis zu vertreten hat (§ 311a II 2 BGB)."
    },

    e_286: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 3, 280 I, II, 286 BGB",
      title: "Ersatz des Verzögerungsschadens (+)",
      text: "Der durch die verzögerte Nacherfüllung entstandene Schaden (z. B. Nutzungsausfall, Mietwagen) ist zu ersetzen – neben der weiterhin geschuldeten Nacherfüllung."
    },

    e_keine_gwl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 437 BGB",
      title: "Kein kaufrechtlicher Schadensersatz (–)",
      text: "Ohne Gewährleistungslage (Kaufvertrag, Mangel bei Gefahrübergang, kein Ausschluss) keine Ansprüche aus § 437 Nr. 3 BGB. Ggf. allgemeines Leistungsstörungsrecht oder Delikt prüfen."
    },

    e_keine_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 281 I, 440 BGB",
      title: "Kein SE statt der Leistung – Fristsetzung fehlt (–)",
      text: "Vorrang der Nacherfüllung: Ohne erfolglose Frist (und ohne Entbehrlichkeit nach § 281 II, § 440 BGB) kein Schadensersatz statt der Leistung. Der Mangelfolgeschaden nach § 280 I BGB bleibt davon unberührt."
    },

    e_unerheblich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 281 I 3 BGB",
      title: "Kein großer Schadensersatz – Mangel unerheblich (–)",
      text: "Schadensersatz statt der GANZEN Leistung scheidet bei unerheblicher Pflichtverletzung aus. Es bleiben der kleine Schadensersatz und die Minderung (§ 441 I 2 BGB)."
    },

    e_kein_verzug: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 286 BGB",
      title: "Kein Verzögerungsschaden – kein Verzug (–)",
      text: "Ohne Verzug mit der Nacherfüllung (Mahnung bzw. § 286 II, III BGB) ist der Verzögerungsschaden nicht ersatzfähig."
    },

    e_nicht_vertreten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 280 I 2 BGB",
      title: "Kein Anspruch – nicht zu vertreten (–)",
      text: "Der Verkäufer hat den Entlastungsbeweis geführt. Verschuldensunabhängig bleiben Nacherfüllung, Rücktritt und Minderung – nur der Schadensersatz setzt Vertretenmüssen voraus!"
    },

    e_kein_schaden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 249 ff. BGB",
      title: "Kein ersatzfähiger Schaden (–)",
      text: "Nach der Differenzhypothese fehlt eine Vermögenseinbuße; der Anspruch geht ins Leere."
    }
  },

  routers: {
    "@ergebnis": function (flags) {
      if (flags.kette === "folge") return "e_folge";
      if (flags.kette === "281") return "e_281";
      if (flags.kette === "283") return flags.anfaenglich ? "e_311a" : "e_283";
      return "e_286";
    }
  }
});
