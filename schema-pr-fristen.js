/*
 * Prüfungsschema: Fristberechnung, §§ 186–193 BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "2.1.3 PR 03-04 – OLE Skript – Fristen" (Rankenhohn, FS I)
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 186–193)
 *
 * Gilt für FS 1 und FS 2 (Fristberechnung wird u. a. bei Verjährung, Verzug
 * und Nachfristsetzung immer wieder benötigt).
 *
 * Stationen: dauer → beginn → ende → sonderfall → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-fristen",
  subject: "Privatrecht",
  area: "Fristen und Termine",
  title: "Fristberechnung, §§ 186–193 BGB",
  description: "Art und Dauer der Frist, Fristbeginn (§ 187: Ereignis- vs. Verlaufsfrist), Fristende (§ 188) und die Sonderfälle des § 188 III und § 193 BGB (Wochenende/Feiertag).",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "dauer", label: "Art und Dauer" },
    { id: "beginn", label: "Fristbeginn (§ 187)" },
    { id: "ende", label: "Fristende (§ 188)" },
    { id: "sonderfall", label: "Sonderfälle" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "dauer",
      kind: "frage",
      norm: "§§ 186 ff. BGB",
      title: "Art und Dauer der Frist benennen",
      text: "Vorgehen: (1) Art und Dauer der Frist nennen und die Norm zitieren, aus der sich die Dauer ergibt (z. B. Verjährungsfrist von zwei Jahren, § 438 I Nr. 3 BGB), (2) Fristbeginn (§ 187 BGB), (3) Fristende (§ 188 BGB), (4) Ergebnis feststellen.",
      def: "<b>Frist:</b> bestimmter oder bestimmbarer Zeitraum, der vor, innerhalb oder nach einem Ereignis liegt und Rechtswirkungen auslöst. Die §§ 186–193 BGB gelten über Verweisungen weit über das BGB hinaus (§ 222 ZPO, § 57 VwGO, § 31 VwVfG, § 108 AO) – zentral auch für Widerspruchs- und Klagefristen im Verwaltungsrecht!",
      hint: "Klausurstrategie: Ist die Frist eindeutig gewahrt oder versäumt, genügt ein kurzer Hinweis mit Normzitat – die ausführliche Berechnung nur bei zweifelhaften Fällen.",
      options: [
        { label: "Frist nach Tagen bestimmt", detail: "z. B. „drei Tage“", next: "q_beginn", set: { einheit: "tage" }, tone: "neutral" },
        { label: "Frist nach Wochen/Monaten/Jahren bestimmt", detail: "z. B. Zwei-Wochen-Frist des § 108 II BGB, Verjährungsfristen", next: "q_beginn", set: { einheit: "wochen" }, tone: "neutral" }
      ]
    },

    q_beginn: {
      station: "beginn",
      kind: "frage",
      norm: "§ 187 BGB",
      title: "Was ist für den Fristbeginn maßgeblich – Ereignis oder Tagesbeginn?",
      text: "Für den Beginn der Frist ist entweder ein Ereignis (§ 187 I BGB) oder der Beginn eines Tages (§ 187 II BGB) maßgeblich.",
      def: "<b>Ereignisfrist (§ 187 I):</b> Der Ereignistag zählt nicht mit – Fristbeginn ist 0:00 Uhr des Folgetages. Beispiele: Zugang/Bekanntgabe eines VA, Ablieferung der Kaufsache (§ 438 II BGB), Zusendung der Ware (§ 356 II BGB). <b>Verlaufs-/Ablauffrist (§ 187 II):</b> Der erste Tag zählt mit – Fristbeginn 0:00 Uhr des benannten Tages. Beispiele: Miet-, Arbeits-, Pachtverträge ab einem Datum; Lebensalter (§ 187 II 2 BGB: Tag der Geburt zählt mit).",
      options: [
        { label: "Ereignis maßgeblich (Ereignisfrist)", detail: "§ 187 I BGB – Beginn: 0:00 Uhr des Folgetages", next: "@ende", set: { art: "ereignis" }, tone: "neutral" },
        { label: "Tagesbeginn maßgeblich (Verlaufsfrist)", detail: "§ 187 II BGB – Beginn: 0:00 Uhr des benannten Tages", next: "@ende", set: { art: "verlauf" }, tone: "neutral" }
      ]
    },

    q_ende_tage: {
      station: "ende",
      kind: "frage",
      norm: "§ 188 I BGB",
      title: "Fristende bei Tagesfristen",
      text: "Eine nach Tagen bestimmte Frist endigt mit dem Ablauf des letzten Tages der Frist (§ 188 I BGB).\n\nBeispiel: Vermietung „für drei Tage“ ab dem 10.08. → Ende mit Ablauf des 13.08.",
      options: [
        { label: "Fristende ermittelt", next: "q_193", tone: "pos" }
      ]
    },

    q_ende_ereignis: {
      station: "ende",
      kind: "frage",
      norm: "§ 188 II Alt. 1 BGB",
      title: "Fristende bei der Ereignisfrist",
      text: "Die Frist endet mit Ablauf desjenigen Tages der letzten Woche/des letzten Monats, der durch seine Benennung oder Zahl dem Tag entspricht, in den das Ereignis fällt (§ 188 II Alt. 1 BGB).\n\nBeispiel: Ablieferung (Ereignis) am 01.09.2022, Verjährungsfrist zwei Jahre (§ 438 I Nr. 3 BGB) → Fristende mit Ablauf des 01.09.2024.",
      hint: "Formulierung in der Klausur: „Die Frist endet mit Ablauf des …“ – ob man 24 Uhr oder 23:59 Uhr dazuschreibt, ist vertretbar und nicht entscheidend.",
      options: [
        { label: "Entsprechender Tag existiert", next: "q_193", tone: "pos" },
        { label: "Entsprechender Tag fehlt im letzten Monat", detail: "z. B. Monatsfrist ab 30.01. → es gibt keinen 30.02.", next: "q_188iii", tone: "warn" }
      ]
    },

    q_ende_verlauf: {
      station: "ende",
      kind: "frage",
      norm: "§ 188 II Alt. 2 BGB",
      title: "Fristende bei der Verlaufsfrist",
      text: "Die Frist endet mit Ablauf desjenigen Tages, der dem Tag VORHERgeht, der durch Benennung oder Zahl dem Anfangstag entspricht (§ 188 II Alt. 2 BGB).\n\nBeispiel: Einstellung „für drei Monate“ ab dem 01.01.2022 → Ende mit Ablauf des 31.03.2022 (der 31.03. geht dem 01.04. voraus).",
      options: [
        { label: "Entsprechender Tag existiert", next: "q_193", tone: "pos" },
        { label: "Entsprechender Tag fehlt im letzten Monat", next: "q_188iii", tone: "warn" }
      ]
    },

    q_188iii: {
      station: "sonderfall",
      kind: "frage",
      norm: "§ 188 III BGB",
      title: "Sonderfall: Der letzte Monat hat den Tag nicht",
      text: "Fehlt bei einer nach Monaten bestimmten Frist im letzten Monat der für den Ablauf maßgebende Tag, endigt die Frist mit dem Ablauf des letzten Tages dieses Monats (§ 188 III BGB).\n\nBeispiel: Monatsfrist ab 30.01. → Fristende 28.02. (bzw. 29.02. im Schaltjahr).",
      options: [
        { label: "Verstanden – letzter Monatstag ist Fristende", next: "q_193", tone: "neutral" }
      ]
    },

    q_193: {
      station: "sonderfall",
      kind: "frage",
      norm: "§ 193 BGB",
      title: "Fällt das Fristende auf einen Samstag, Sonntag oder Feiertag?",
      text: "Ist an einem bestimmten Tag eine Willenserklärung abzugeben oder eine Leistung zu bewirken und fällt dieser Tag auf einen Sonnabend, Sonntag oder staatlich anerkannten Feiertag, tritt an dessen Stelle der nächste Werktag (§ 193 BGB).",
      def: "<b>Besonderheiten:</b> § 193 BGB gilt nur, wenn eine Willenserklärung abzugeben oder eine Leistung zu bewirken ist · nur für das Frist<b>ende</b>, nie für den Beginn · Ausnahme bei Kündigungsfristen: Dort wird der Samstag zum Schutz des Kündigungsempfängers wie ein Werktag behandelt.",
      options: [
        { label: "Ja – Fristende verschiebt sich auf den nächsten Werktag", detail: "z. B. Fristende 25.12. → 27.12. (26.12. ist auch Feiertag)", next: "q_gewahrt", set: { verschoben: true }, tone: "warn" },
        { label: "Nein, Werktag", next: "q_gewahrt", tone: "pos" },
        { label: "§ 193 nicht anwendbar", detail: "Keine WE abzugeben / keine Leistung zu bewirken (z. B. reine Verjährungsberechnung)", next: "q_gewahrt", tone: "neutral" }
      ]
    },

    q_gewahrt: {
      station: "sonderfall",
      kind: "frage",
      norm: "§§ 186 ff. BGB",
      title: "Wurde die Handlung vor Fristablauf vorgenommen?",
      text: "Feststellung des Ergebnisses: Lag die maßgebliche Handlung (Zugang der Erklärung, Bewirken der Leistung, Klageerhebung …) innerhalb der berechneten Frist?",
      options: [
        { label: "Ja, innerhalb der Frist", next: "e_gewahrt", tone: "pos" },
        { label: "Nein, nach Fristablauf", next: "e_versaeumt", tone: "neg" }
      ]
    },

    e_gewahrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 187, 188 BGB",
      title: "Frist gewahrt (+)",
      text: "Die Handlung wurde vor Ablauf der zutreffend berechneten Frist vorgenommen; die daran geknüpften Rechtswirkungen treten ein bzw. bleiben erhalten.\n\nFormulierungsmuster: „Die Frist begann gem. § 187 I BGB am … um 0:00 Uhr und endete gem. § 188 II BGB mit Ablauf des … Die am … vorgenommene Handlung erfolgte mithin fristgerecht.“"
    },

    e_versaeumt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 187, 188 BGB",
      title: "Frist versäumt (–)",
      text: "Die Handlung erfolgte erst nach Fristablauf. Folge ist regelmäßig, dass die Handlung unzulässig bzw. unwirksam ist oder das Recht nicht mehr geltend gemacht werden kann (z. B. Einrede der Verjährung, Bestandskraft eines VA).\n\nIm Verwaltungsrecht ggf. Wiedereinsetzung in den vorigen Stand prüfen (§ 32 VwVfG; § 60 VwGO)."
    }
  },

  routers: {
    "@ende": function (flags) {
      if (flags.einheit === "tage") return "q_ende_tage";
      return flags.art === "ereignis" ? "q_ende_ereignis" : "q_ende_verlauf";
    }
  }
});
