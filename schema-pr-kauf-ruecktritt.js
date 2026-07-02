/*
 * Prüfungsschema: Rücktritt und Minderung, §§ 437 Nr. 2, 440, 323, 326 V, 441 BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation FS II - W - 2023" (Birtel-Kaldenhoff) – Schemata Rücktritt §§ 437 Nr. 2, 440, 323
 *    (Folie 168), § 326 V (Folie 173) und Minderung § 441 (Folie 174 f.)
 *  - "Privatrecht - FS2 - 2024-25 - Ilias" – Rücktritt als Gestaltungsrecht, §§ 346 ff.
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 218, 323, 326, 346, 349, 434 ff., 440–442, 444)
 *
 * Stationen: wahl → grund → frist → ausschluss → verfristung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-kauf-ruecktritt-minderung",
  subject: "Privatrecht",
  area: "Kaufrecht (Gewährleistung)",
  title: "Rücktritt und Minderung, §§ 437 Nr. 2, 440, 323, 441 BGB",
  description: "Rücktritt vom Kaufvertrag (Erklärung, Rücktrittsgrund mit Nachfrist bzw. § 326 V, kein Ausschluss nach § 323 V 2/VI, keine „Verjährung“ nach §§ 438 IV, 218) und alternativ die Minderung (§ 441 BGB) – als Gestaltungsrechte.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "wahl", label: "Rücktritt / Minderung" },
    { id: "grund", label: "Gewährleistungslage" },
    { id: "frist", label: "Nachfrist" },
    { id: "ausschluss", label: "Kein Ausschluss" },
    { id: "verfristung", label: "§§ 438 IV, 218" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "wahl",
      kind: "frage",
      norm: "§§ 437 Nr. 2, 349, 441 BGB",
      title: "Rücktritt oder Minderung – und wurde erklärt?",
      text: "Beide sind Gestaltungsrechte: einseitige, empfangsbedürftige Erklärung (Rücktritt: § 349 BGB; Minderung: § 441 I BGB „statt zurückzutreten“). Wird gemindert, kann nicht mehr zurückgetreten werden – und umgekehrt.",
      def: "<b>Zwei Klausur-Konstellationen der Minderung:</b> (1) Kaufpreis noch nicht gezahlt → Herabsetzung als rechtsvernichtende Einwendung gegen § 433 II BGB; (2) Kaufpreis gezahlt → Anspruch auf Erstattung des Mehrbetrags aus §§ 437 Nr. 2 Alt. 2, 440, 441 I, IV, 346 I BGB.",
      options: [
        { label: "Rücktritt – Erklärung liegt vor (§ 349 BGB)", next: "q_kv", set: { art: "ruecktritt" }, tone: "neutral" },
        { label: "Minderung – Erklärung liegt vor (§ 441 I BGB)", next: "q_kv", set: { art: "minderung" }, tone: "neutral" },
        { label: "Noch keine Erklärung abgegeben", next: "e_keine_erklaerung", tone: "neg" }
      ]
    },

    q_kv: {
      station: "grund",
      kind: "frage",
      norm: "§§ 433, 434, 435 BGB",
      title: "Wirksamer Kaufvertrag und Mangel bei Gefahrübergang?",
      text: "Wie bei der Nacherfüllung: wirksamer Kaufvertrag, Sachmangel (§ 434 BGB) oder Rechtsmangel (§ 435 BGB), vorliegend bei Gefahrübergang (§§ 446, 447 BGB). Detailprüfung: Schema „Nacherfüllung“.",
      options: [
        { label: "Ja, Kaufvertrag + Mangel bei Gefahrübergang", next: "q_ausschluss_gwl", tone: "pos" },
        { label: "Nein", next: "e_kein_grund", tone: "neg" }
      ]
    },

    q_ausschluss_gwl: {
      station: "grund",
      kind: "frage",
      norm: "§§ 442, 444 BGB",
      title: "Ist die Gewährleistung ausgeschlossen?",
      text: "Vertraglicher Ausschluss (Grenzen: Arglist/Garantie, § 444 BGB) oder gesetzlicher Ausschluss bei Kenntnis des Käufers (§ 442 BGB).",
      options: [
        { label: "Kein Ausschluss", next: "q_frist", tone: "pos" },
        { label: "Wirksam ausgeschlossen", next: "e_ausschluss", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§§ 323 I, 326 V, 440 BGB",
      title: "Nachfrist gesetzt und erfolglos abgelaufen – oder entbehrlich?",
      text: "Wegen des Vorrangs der Nacherfüllung muss der Käufer dem Verkäufer grundsätzlich erfolglos eine angemessene Frist zur Nacherfüllung gesetzt haben (§ 323 I BGB).",
      def: "<b>Entbehrlich:</b> § 323 II BGB (ernsthafte endgültige Verweigerung; relatives Fixgeschäft; besondere Umstände) · § 440 BGB (Verkäufer verweigert beide Arten nach § 439 IV; Nacherfüllung fehlgeschlagen – bei Nachbesserung gilt sie nach dem erfolglosen zweiten Versuch als fehlgeschlagen, § 440 S. 2; Unzumutbarkeit) · § 326 V BGB (Nacherfüllung UNMÖGLICH, § 275 I–III – Rücktritt ganz ohne Frist).",
      options: [
        { label: "Frist gesetzt und erfolglos abgelaufen (§ 323 I BGB)", next: "q_ausschluss_323", tone: "pos" },
        { label: "Entbehrlich nach § 323 II oder § 440 BGB", next: "q_ausschluss_323", tone: "warn" },
        { label: "Nacherfüllung unmöglich → § 326 V BGB", detail: "Rücktrittsgrund ohne Fristsetzung", next: "q_ausschluss_323", set: { unmoeglich: true }, tone: "warn" },
        { label: "Keine Frist gesetzt, keine Entbehrlichkeit", next: "e_keine_frist", tone: "neg" }
      ]
    },

    q_ausschluss_323: {
      station: "ausschluss",
      kind: "frage",
      norm: "§ 323 V, VI BGB",
      title: "Ist der Rücktritt (bzw. die Minderung) ausgeschlossen?",
      def: "<b>§ 323 V 2 BGB:</b> Rücktritt ausgeschlossen bei UNERHEBLICHEM Mangel (Bagatellgrenze; Indiz: Mängelbeseitigungskosten unter ca. 5 % des Kaufpreises). ACHTUNG: Gilt NICHT für die Minderung – § 441 I 2 BGB lässt die Minderung auch bei unerheblichen Mängeln zu! <b>§ 323 VI BGB:</b> Ausschluss, wenn der Gläubiger für den Rücktrittsgrund allein/weit überwiegend verantwortlich ist oder er sich im Annahmeverzug befand.",
      options: [
        { label: "Kein Ausschluss", next: "q_218", tone: "pos" },
        { label: "Mangel unerheblich (§ 323 V 2 BGB)", detail: "Rücktritt (–); Minderung bleibt möglich!", next: "@unerheblich", set: { unerheblich: true }, tone: "warn" },
        { label: "Käufer verantwortlich / Annahmeverzug (§ 323 VI BGB)", next: "e_ausgeschlossen_323vi", tone: "neg" }
      ]
    },

    q_218: {
      station: "verfristung",
      kind: "frage",
      norm: "§§ 438 IV, V, 218 BGB",
      title: "Ist der Nacherfüllungsanspruch verjährt?",
      text: "Der Rücktritt (und die Minderung) sind unwirksam, wenn der Nacherfüllungsanspruch verjährt ist und der Verkäufer sich darauf beruft (§§ 438 IV 1, V i. V. m. § 218 I BGB). Gestaltungsrechte verjähren nicht – sie „verfristen“ über diese Konstruktion.",
      options: [
        { label: "Nicht verjährt / Einrede nicht erhoben", next: "@ergebnis", tone: "pos" },
        { label: "Verjährt und Verkäufer beruft sich darauf", next: "e_verfristet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ruecktritt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 2, 440, 323/326 V, 346 I BGB",
      title: "Rücktritt wirksam – Rückgewährschuldverhältnis (+)",
      text: "Der Rücktritt ist wirksam erklärt und begründet. Der Kaufvertrag wandelt sich in ein Rückgewährschuldverhältnis: Die empfangenen Leistungen sind zurückzugewähren und gezogene Nutzungen herauszugeben (§ 346 I BGB); Rückgewähr Zug um Zug (§§ 348, 320 BGB).\n\nDaneben bleibt Schadensersatz möglich (§ 325 BGB – Rücktritt und SE schließen sich nicht aus)."
    },

    e_minderung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 437 Nr. 2 Alt. 2, 440, 441 BGB",
      title: "Minderung wirksam (+)",
      text: "Der Kaufpreis wird in dem Verhältnis herabgesetzt, in dem der Wert der mangelfreien Sache zum wirklichen Wert gestanden hätte (§ 441 III BGB; ggf. Schätzung). Ist mehr gezahlt, ist der Mehrbetrag zu erstatten (§§ 441 IV, 346 I BGB).\n\nSinn: Das vom Käufer ausgehandelte Preis-Wert-Verhältnis bleibt erhalten. Nach der Minderung ist kein Rücktritt und kein großer Schadensersatz mehr möglich."
    },

    e_minderung_trotz_unerheblich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 441 I 2 BGB",
      title: "Minderung wirksam – trotz unerheblichen Mangels (+)",
      text: "Anders als der Rücktritt scheitert die Minderung NICHT an der Unerheblichkeit des Mangels (§ 441 I 2 BGB). Der Kaufpreis ist nach § 441 III BGB herabzusetzen; ein gezahlter Mehrbetrag wird nach §§ 441 IV, 346 I BGB erstattet.\n\nVoraussetzung bleibt: Verjährungseinrede nicht erhoben (§§ 438 V, 218 BGB)."
    },

    e_keine_erklaerung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 349, 441 I BGB",
      title: "Gestaltungserklärung fehlt noch",
      text: "Rücktritt und Minderung sind Gestaltungsrechte – ohne (empfangsbedürftige) Erklärung keine Umgestaltung des Vertrags. Der Rücktritt ist keine Einrede; man muss sich entscheiden, bevor man Rückabwicklung verlangt.\n\nMerke: Die Erklärung kann formfrei erfolgen; der Begriff „Rücktritt“ muss nicht fallen."
    },

    e_kein_grund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 434, 437 BGB",
      title: "Kein Rücktritts-/Minderungsgrund (–)",
      text: "Ohne wirksamen Kaufvertrag bzw. ohne Mangel bei Gefahrübergang fehlt der Gewährleistungsgrund. Rücktritt und Minderung scheiden aus."
    },

    e_ausschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 442, 444 BGB",
      title: "Gewährleistung ausgeschlossen (–)",
      text: "Die Mängelrechte sind wirksam ausgeschlossen (Vertrag ohne Arglist/Garantie bzw. Kenntnis des Käufers, § 442 BGB)."
    },

    e_keine_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 323 I BGB",
      title: "Rücktritt/Minderung (noch) nicht möglich – Nachfrist fehlt (–)",
      text: "Der Verkäufer hat das Recht zur zweiten Andienung: Ohne erfolglose angemessene Nachfrist (und ohne Entbehrlichkeit nach §§ 323 II, 440, 326 V BGB) kann weder zurückgetreten noch gemindert werden. Erst Frist setzen – dann gestalten."
    },

    e_ausgeschlossen_323vi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 323 VI BGB",
      title: "Rücktritt ausgeschlossen (–)",
      text: "Der Käufer ist für den Umstand, der zum Rücktritt berechtigen würde, allein oder weit überwiegend verantwortlich – oder der Umstand trat während seines Annahmeverzugs ein. Rücktritt (und Minderung, § 441 I 1 BGB) sind ausgeschlossen."
    },

    e_verfristet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 438 IV, 218 BGB",
      title: "Rücktritt/Minderung unwirksam – Verjährung (–)",
      text: "Der Nacherfüllungsanspruch ist verjährt und der Verkäufer beruft sich darauf – Rücktritt und Minderung sind unwirksam (§ 218 I BGB, §§ 438 IV 1, V BGB).\n\nRestposition: Der Käufer kann die Zahlung des (Rest-)Kaufpreises insoweit verweigern, als er zum Rücktritt berechtigt wäre (§ 438 IV 2 BGB)."
    },

    e_ausgeschlossen_unerheblich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 323 V 2 BGB",
      title: "Rücktritt ausgeschlossen – Mangel unerheblich (–)",
      text: "Bei einem unerheblichen Mangel (Bagatellgrenze) ist der Rücktritt ausgeschlossen (§ 323 V 2 BGB).\n\nAber: Die MINDERUNG bleibt möglich – § 441 I 2 BGB nimmt die Unerheblichkeitsschwelle ausdrücklich aus. Auch kleiner Schadensersatz kommt in Betracht."
    }
  },

  routers: {
    "@unerheblich": function (flags) {
      return flags.art === "minderung" ? "q_218" : "e_ausgeschlossen_unerheblich";
    },
    "@ergebnis": function (flags) {
      if (flags.art === "minderung") {
        return flags.unerheblich ? "e_minderung_trotz_unerheblich" : "e_minderung";
      }
      return "e_ruecktritt";
    }
  }
});
