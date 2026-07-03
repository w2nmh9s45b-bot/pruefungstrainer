/*
 * Prüfungsschema: Stufenzuordnung bei Einstellung (§ 16 TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.2.2/2.6.2.3 (Stufen,
 *    Stufenzuordnung bei Neueinstellung, einschlägige Berufserfahrung,
 *    förderliche Zeiten, § 16 Abs. 2a)
 *  - Gesetze: TVöD § 16 (VKA) (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-stufenzuordnung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Stufenzuordnung bei Einstellung (§ 16 TVöD-VKA)",
  description: "Zuordnung Neueingestellter zu den Stufen 1–3 nach einschlägiger Berufserfahrung (keine/1 Jahr/3 Jahre), Sonderfälle: förderliche Zeiten zur Personalgewinnung (§ 16 II 3) und Stufenmitnahme beim unmittelbaren Wechsel im öffentlichen Dienst (§ 16 IIa).",
  start: "start",
  stations: [
    { id: "struktur", label: "Stufensystem" },
    { id: "erfahrung", label: "Berufserfahrung" },
    { id: "ausnahmen", label: "Ausnahmen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Stufe bestimmt",
    neg: "Ergebnis: keine Anrechnung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "struktur",
      kind: "frage",
      norm: "§ 16 I TVöD-VKA",
      title: "Das Stufensystem: Wie sind die Entgeltgruppen aufgebaut?",
      def: "Die Entgeltgruppen 2 bis 15 umfassen <b>sechs Stufen</b> (§ 16 I 1 TVöD-VKA):<br>• Stufen 1 und 2 = <b>Grundentgeltstufen</b>,<br>• Stufen 3 bis 6 = <b>Entwicklungsstufen</b>.<br><br>Nur die <b>Entgeltgruppe 1</b> umfasst lediglich fünf Stufen (Stufen 2–6, keine Stufe 1; § 16 IV TVöD-VKA).<br><br>Das <b>Tabellenentgelt</b> (§ 15 TVöD, Anlage A) ergibt sich aus Entgeltgruppe (§§ 12, 13 – Eingruppierung) UND Stufe (§§ 16, 17).<br><br>Bei der <b>Einstellung</b> ist die Stufe nach § 16 II, IIa TVöD-VKA zuzuordnen – grundsätzlich abhängig von der <b>einschlägigen Berufserfahrung</b>.",
      options: [
        { label: "Weiter zur Berufserfahrung", next: "q_erfahrung", tone: "pos" }
      ]
    },

    q_erfahrung: {
      station: "erfahrung",
      kind: "frage",
      norm: "§ 16 II TVöD-VKA",
      title: "Verfügt die/der Neueingestellte über EINSCHLÄGIGE Berufserfahrung?",
      def: "<b>Einschlägige Berufserfahrung</b> = berufliche Erfahrung in der übertragenen <b>oder einer auf die Aufgabe bezogen entsprechenden Tätigkeit</b> im <b>Arbeitsverhältnis</b>.<br><br>Sie liegt vor, wenn die frühere Tätigkeit <b>im Wesentlichen unverändert fortgesetzt</b> wird; ausreichend auch eine gleiche/gleichartige Tätigkeit, die der Eingruppierung nach gleichwertig ist. Maßgeblich: Sind Wissen, Können und Erfahrungen aus der früheren Tätigkeit typischerweise konkret für die neue Tätigkeit erforderlich und prägend? (Beurteilungsspielraum des Arbeitgebers.)<br><br><b>KEINE einschlägige Berufserfahrung vermitteln:</b><br>• <b>Ausbildungsverhältnisse</b> (auch wenn im letzten Ausbildungsjahr schon im Sachgebiet eingesetzt),<br>• <b>Praktika</b> – Ausnahme: Berufspraktikum nach dem <b>TVPöD</b> (Sozialarbeiter, Erzieher, Rettungsassistenten – Protokollerklärung zu § 16 II).<br><br><b>BAG-Sonderfall:</b> Bei Wiedereinstellung im unmittelbaren Anschluss an ein befristetes Arbeitsverhältnis beim selben Arbeitgeber MUSS die dortige Zeit als einschlägige Berufserfahrung berücksichtigt werden (§ 4 II 3 TzBfG) – dann auch Stufe 3 oder höher möglich.",
      options: [
        { label: "Keine einschlägige Berufserfahrung", next: "q_ausnahme_check", set: { stufe: 1 }, tone: "neutral" },
        { label: "Mindestens 1 Jahr", next: "q_ausnahme_check", set: { stufe: 2 }, tone: "neutral" },
        { label: "Mindestens 3 Jahre", next: "q_ausnahme_check", set: { stufe: 3 }, tone: "neutral" }
      ]
    },

    q_ausnahme_check: {
      station: "ausnahmen",
      kind: "frage",
      norm: "§ 16 II 3, IIa TVöD-VKA",
      title: "Greift eine Ausnahme (förderliche Zeiten / Stufenmitnahme)?",
      def: "Zwei Ausnahmen erlauben eine Stufenzuordnung <b>unabhängig</b> von der einschlägigen Berufserfahrung:<br><br><b>1. Förderliche Zeiten (§ 16 II 3 TVöD-VKA):</b> Zur Deckung des <b>Personalbedarfs</b> KANN der Arbeitgeber Zeiten einer vorherigen beruflichen Tätigkeit ganz oder teilweise berücksichtigen, wenn diese für die vorgesehene Tätigkeit <b>förderlich</b> ist.<br>• nur bei <b>qualifiziertem Personalbedarf</b> (Bewerbermangel, vgl. LAG RLP v. 15.11.2019 – 1 Sa 18/19),<br>• <b>Kann-Bestimmung</b>: kein Anspruch der/des Einzustellenden,<br>• förderlich = <b>nützlich</b> für die auszuübende Tätigkeit (sachlicher Zusammenhang genügt; Gleichwertigkeit nicht erforderlich; auch geringer qualifizierte oder selbstständige Tätigkeit),<br>• Ausbildungszeiten für den Berufsabschluss sind KEINE förderlichen Zeiten,<br>• Zuordnung auch <b>oberhalb der Stufe 3</b> möglich.<br><br><b>2. Stufenmitnahme (§ 16 IIa TVöD-VKA):</b> Bei Einstellung im <b>unmittelbaren Anschluss</b> an ein Arbeitsverhältnis im öffentlichen Dienst (§ 34 III 3, 4 TVöD) oder bei einem AG mit vergleichbarem Tarifvertrag KANN die erworbene <b>Stufe ganz oder teilweise</b> berücksichtigt werden – Voraussetzung: <b>gleichwertige Tätigkeit</b>; nur Wochenende/Feiertage dazwischen sind unschädlich; freies Ermessen des Arbeitgebers (ganz = inkl. angelaufener Stufenlaufzeit, teilweise = Stufe ja, Laufzeit neu).",
      options: [
        { label: "Keine Ausnahme – Regelzuordnung", next: "@stufe_ergebnis", tone: "neutral" },
        { label: "Förderliche Zeiten anerkannt", next: "e_foerderlich", tone: "pos" },
        { label: "Stufenmitnahme aus dem öD", next: "e_mitnahme", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_stufe1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II 1 TVöD-VKA",
      title: "Zuordnung zur Stufe 1 („muss“)",
      text: "Ohne einschlägige Berufserfahrung werden Neueingestellte der Stufe 1 ihrer Entgeltgruppe zugeordnet (§ 16 II 1 TVöD-VKA) – zwingend.\n\nDer Aufstieg in die Stufe 2 erfolgt nach einem Jahr Stufenlaufzeit (§ 16 III TVöD-VKA – Schema „Stufenaufstieg\").\n\nBeachte EG 1: Dort ist Stufe 2 die Eingangsstufe (§ 16 IV TVöD-VKA)."
    },

    e_stufe2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II 2 Hs. 1 TVöD-VKA",
      title: "Zuordnung zur Stufe 2 („muss“)",
      text: "Bei einer einschlägigen Berufserfahrung von mindestens einem Jahr erfolgt die Zuordnung zur Stufe 2 (§ 16 II 2 Hs. 1 TVöD-VKA) – zwingend.\n\nTipp für die Klausur: Prüfe genau, ob die frühere Tätigkeit „einschlägig\" war (im Wesentlichen unverändert fortgesetzt, gleichwertig eingruppiert) – bloße Branchenerfahrung genügt nicht. Ausbildungszeiten zählen nie."
    },

    e_stufe3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II 2 Hs. 2 TVöD-VKA",
      title: "Zuordnung zur Stufe 3 („in der Regel“ – Obergrenze)",
      text: "Bei einer einschlägigen Berufserfahrung von mindestens drei Jahren erfolgt in der Regel die Zuordnung zur Stufe 3 (§ 16 II 2 Hs. 2 TVöD-VKA).\n\nDie Stufe 3 ist grundsätzlich die OBERGRENZE der Stufenzuordnung bei Neueinstellung – höher geht es nur über die Ausnahmen: förderliche Zeiten (§ 16 II 3), Stufenmitnahme aus dem öD (§ 16 IIa) oder die BAG-Rechtsprechung zu unmittelbar vorangegangenen befristeten Arbeitsverhältnissen beim selben Arbeitgeber (§ 4 II 3 TzBfG).\n\nDie Stufenlaufzeit in Stufe 3 beträgt drei Jahre (§ 16 III TVöD-VKA)."
    },

    e_foerderlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 II 3 TVöD-VKA",
      title: "Höhere Stufe über förderliche Zeiten (Personalgewinnung)",
      text: "Der Arbeitgeber hat zur Deckung eines qualifizierten Personalbedarfs Zeiten einer vorherigen förderlichen Tätigkeit ganz oder teilweise berücksichtigt (§ 16 II 3 TVöD-VKA). Die Stufenzuordnung ist dadurch auch OBERHALB der Stufe 3 möglich; sie richtet sich rechnerisch nach den allgemeinen Stufenlaufzeiten des § 16 III TVöD-VKA (angerechnete Jahre wie zurückgelegte Stufenlaufzeit behandeln).\n\nMerke: Kann-Bestimmung im Ermessen des Arbeitgebers – ein Anspruch besteht nicht; die Entscheidung über die Förderlichkeit trifft die Behörde in eigener Zuständigkeit (dokumentieren!). Typisches Instrument bei Fachkräftemangel (z. B. IT, Bauingenieure)."
    },

    e_mitnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 IIa TVöD-VKA",
      title: "Stufenmitnahme beim Wechsel im öffentlichen Dienst",
      text: "Bei Einstellung im unmittelbaren Anschluss an ein Arbeitsverhältnis im öffentlichen Dienst (§ 34 III 3, 4 TVöD: Bund/VKA oder anderer öffentlich-rechtlicher Arbeitgeber) oder bei einem Arbeitgeber mit vergleichbarem Tarifvertrag kann die dort erworbene Stufe ganz oder teilweise berücksichtigt werden (§ 16 IIa TVöD-VKA).\n\n• „Ganz\": Stufe UND bereits zurückgelegte Stufenlaufzeit werden übernommen.\n• „Teilweise\": z. B. nur die Stufe, Laufzeit beginnt neu.\n\nVoraussetzungen: unmittelbarer Anschluss (nur Wochenende/Feiertage unschädlich) und Gleichwertigkeit der Tätigkeiten. Freies Ermessen des Arbeitgebers – kein Anspruch.\n\nBeispiel aus dem Skript: C hat beim Landkreis in EG 6 die Stufe 5 erreicht (davon 2 Jahre Laufzeit absolviert) und wechselt zur VG M: Einstellung in EG 6 Stufe 5; die VG kann die 2 Jahre anrechnen (ganz) oder die Laufzeit neu beginnen lassen (teilweise)."
    }
  },

  routers: {
    "@stufe_ergebnis": function (flags) {
      if (flags.stufe === 3) return "e_stufe3";
      if (flags.stufe === 2) return "e_stufe2";
      return "e_stufe1";
    }
  }
});
