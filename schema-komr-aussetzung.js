/*
 * Prüfungsschema: Aussetzung von Beschlüssen (§ 42 GemO)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR - FS_III - LV 10 - PLE_08 - Aussetzung - Sinn und Zweck, Zuständigkeit
 *    und Tatbestand" (Böhle)
 *  - "KomR - FS_III - LV 12 - PLE_10 - Aussetzung - Aussetzungsverfahren bis
 *    verwaltungsgerichtlichem Verfahren" (Böhle)
 *  - Gesetze: GemO RLP §§ 42, 46 V, 69 II (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-aussetzung",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Organ Bürgermeister",
  title: "Aussetzung von Beschlüssen, § 42 GemO",
  description: "Das innergemeindliche Kontrollinstrument des Bürgermeisters: Zuständigkeit, Tatbestand (rechtswidriger, noch nicht ausgeführter Ratsbeschluss), Aussetzungsverfahren über Beharrungsbeschluss und Entscheidung der Aufsichtsbehörde bis zur Anfechtungsklage des Gemeinderats.",
  start: "start",
  stations: [
    { id: "zust", label: "Zuständigkeit" },
    { id: "tb", label: "Tatbestand" },
    { id: "verfahren", label: "Verfahren" },
    { id: "aufsicht", label: "Aufsichtsbehörde" },
    { id: "gericht", label: "Gericht" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Aussetzung rechtmäßig",
    neg: "Ergebnis: Aussetzung rechtswidrig / unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Verfahren läuft weiter"
  },

  nodes: {

    start: {
      station: "zust",
      kind: "frage",
      norm: "§ 42 I, § 47 I 2 GemO",
      title: "Wer will den Beschluss aussetzen?",
      text: "Die Aussetzung sichert die Gesetzmäßigkeit der Verwaltung und ist ein dienstrechtliches Regulativ zum Schutz des Bürgermeisters – Recht UND Pflicht. Sie ist ein Instrument der innergemeindlichen, wechselseitigen Selbstkontrolle im rein öffentlichen Interesse: Dritte (auch Ratsmitglieder) haben KEINEN Anspruch auf Aussetzung.",
      def: "<b>Zuständig (organbezogenes Recht):</b><br>• der <b>Bürgermeister</b> (§ 42 I GemO – gesetzlich besonders zugewiesene Aufgabe i. S. d. § 47 I 2 GemO); im Verhinderungsfall der allgemeine Vertreter, NICHT übertragbar auf ständige Vertreter im Geschäftsbereich (VV Nr. 3.4 zu § 50),<br>• bei Ortsgemeinden AUCH der Bürgermeister der Verbandsgemeinde (§ 69 II GemO),<br>• für Ausschussbeschlüsse: BM (§ 46 V 1 i. V. m. § 42) und Beigeordnete als vorsitzführende ständige Vertreter (§ 46 V 2 – bei Beharren entscheidet zunächst der Gemeinderat),<br>• Beauftragte nach § 124 GemO.",
      options: [
        { label: "Bürgermeister (bzw. VG-BM bei Ortsgemeinden)", next: "q_beschluss", tone: "pos" },
        { label: "Ein Ratsmitglied / ein Dritter verlangt die Aussetzung", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_beschluss: {
      station: "tb",
      kind: "frage",
      norm: "§ 42 I GemO",
      title: "Liegt ein Beschluss des Gemeinderats vor?",
      text: "Gegenstand der Aussetzung ist ein Beschluss des Gemeinderats (über § 46 V auch eines Ausschusses). Die Aussetzung richtet sich nicht gegen die Existenz des Beschlusses, sondern gegen seine AUSFÜHRUNG.",
      options: [
        { label: "Ja", next: "q_rw", tone: "pos" },
        { label: "Nein", next: "e_kein_beschluss", tone: "neg" }
      ]
    },

    q_rw: {
      station: "tb",
      kind: "frage",
      norm: "§ 42 I GemO",
      title: "Ist der Beschluss nach Ansicht des BM rechtswidrig?",
      def: "<b>Aussetzungsgründe (§ 42 I GemO):</b> Der Beschluss<br>• überschreitet die Befugnisse des Gemeinderats (Kompetenzverstoß),<br>• ist gesetz- oder rechtswidrig,<br>• verletzt die Grundsätze der Wirtschaftlichkeit, oder<br>• es wurde eine Aufwendung/Auszahlung ohne Deckung im Haushaltsplan beschlossen.<br><b>Beachte:</b> Die Prüfungskompetenz des BM beschränkt sich auf RECHTMÄSSIGKEITSASPEKTE – keine Einmischungs- oder Fachaufsicht über den Rat; die Aufgabenverteilung der Organe bleibt unangetastet.",
      hint: "Die Rechtswidrigkeit des Beschlusses prüfst du mit dem Schema „Rechtmäßigkeit eines Ratsbeschlusses (Vollprüfung)“.",
      options: [
        { label: "Ja, Aussetzungsgrund liegt vor", next: "q_ausgefuehrt", tone: "pos" },
        { label: "Nein, Beschluss ist rechtmäßig", detail: "bloße Unzweckmäßigkeit genügt nicht", next: "e_rw_aussetzung", tone: "neg" }
      ]
    },

    q_ausgefuehrt: {
      station: "tb",
      kind: "frage",
      norm: "§ 42 I GemO",
      title: "Ist der Beschluss noch ausführbar (noch nicht ausgeführt)?",
      text: "Die Aussetzung setzt an der Ausführungshandlung an – ein bereits vollständig ausgeführter Beschluss kann nicht mehr ausgesetzt werden.",
      hint: "Verhältnis zu § 121 GemO: Aussetzung (innere Kontrolle) und Beanstandung (externe Kontrolle) sind grundsätzlich parallel anwendbar. NACH einer Beanstandung ist die Aussetzung aber nicht mehr möglich, weil bereits ein gesetzliches Ausführungsverbot besteht (§ 121 S. 3 GemO).",
      options: [
        { label: "Ja, noch nicht (vollständig) ausgeführt", next: "q_verfahren", tone: "pos" },
        { label: "Nein, bereits ausgeführt", next: "e_ausgefuehrt", tone: "neg" }
      ]
    },

    q_verfahren: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 42 I GemO",
      title: "Aussetzung und Mitteilung an den Gemeinderat erfolgt?",
      def: "<b>Rechtsfolge bei erfülltem Tatbestand:</b> Der BM HAT auszusetzen (gebundene Entscheidung – Recht und Pflicht).<br><b>Verfahren:</b> Die Aussetzungshandlung ist formfrei (Unterlassen der Ausführung); der Beschluss bleibt existent (Schwebezustand). Die Gründe sind dem Gemeinderat spätestens in der nächsten Sitzung mitzuteilen; diese muss innerhalb EINES MONATS nach der Aussetzung stattfinden (Ordnungsfrist). Die Information ist ein „gesetzlicher Tagesordnungspunkt“.",
      options: [
        { label: "Ja, ausgesetzt und Gründe mitgeteilt", next: "q_rat", tone: "pos" },
        { label: "Aussetzung bereits in der Beschluss-Sitzung erklärt", detail: "zulässig – nach der Beschlussfassung möglich", next: "q_rat", tone: "pos" }
      ]
    },

    q_rat: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 42 II 1 GemO",
      title: "Wie entscheidet der Gemeinderat?",
      text: "Nach der Mitteilung befasst sich der Rat erneut mit der Angelegenheit. Eine erneute Beschlussfassung ist ausnahmsweise entbehrlich, wenn dem Rat die tragenden Gründe schon VOR der Beschlussfassung bekanntgegeben und erläutert wurden. Entzieht sich der Rat der erneuten Beschlussfassung, wird die Aufsichtsbehörde nach § 122 GemO tätig.",
      options: [
        { label: "Rat akzeptiert und hebt den Beschluss auf", next: "e_beendet", tone: "pos" },
        { label: "Rat beharrt auf seinem Beschluss (Beharrungsbeschluss)", next: "q_aufsicht", tone: "warn" }
      ]
    },

    q_aufsicht: {
      station: "aufsicht",
      kind: "frage",
      norm: "§ 42 II 1, § 118 GemO",
      title: "Wie entscheidet die Aufsichtsbehörde?",
      text: "Beharrt der Rat, HAT der Bürgermeister die Entscheidung der Aufsichtsbehörde (§ 118 GemO) einzuholen. Diese entscheidet den Organstreit durch STREITENTSCHEIDENDEN VERWALTUNGSAKT, gerichtet an das Organ Gemeinderat. Das Opportunitätsprinzip gilt hier NICHT – die Behörde muss entscheiden (denn § 42 II 2 räumt dem Rat ein Klagerecht ein). Prüfungsmaßstab: allgemeine Rechtmäßigkeitsprüfung.",
      options: [
        { label: "Bestätigung: Beschluss rechtswidrig, Aussetzung rechtmäßig", next: "q_klage", set: { ab: "bestaetigt" }, tone: "neutral" },
        { label: "Verneinung: Beschluss rechtmäßig / Verfahren fehlerhaft", detail: "Aussetzung rechtswidrig – BM muss grundsätzlich ausführen", next: "e_aussetzung_rw_ab", set: { ab: "verneint" }, tone: "neutral" }
      ]
    },

    q_klage: {
      station: "gericht",
      kind: "frage",
      norm: "§ 42 II 2, 3 GemO",
      title: "Erhebt der Gemeinderat Klage gegen die Entscheidung?",
      def: "<b>Klage des Gemeinderats:</b> Anfechtungsklage (§ 42 I Alt. 1 VwGO) gegen den streitentscheidenden VA – durch einen vom Rat Bevollmächtigten (§ 42 II 2 GemO). Das Vorverfahren entfällt (§ 68 I 2 VwGO i. V. m. § 42 II 3 GemO).<br><b>Beklagter:</b> das Land Rheinland-Pfalz als Rechtsträger der Aufsichtsbehörde (§ 78 I Nr. 1 VwGO), vertreten durch den Landrat bzw. den Präsidenten der ADD.",
      options: [
        { label: "Ja, Anfechtungsklage", next: "q_gericht", tone: "neutral" },
        { label: "Nein, Rat akzeptiert und hebt auf", next: "e_beendet", tone: "pos" }
      ]
    },

    q_gericht: {
      station: "gericht",
      kind: "frage",
      norm: "§ 113 I 1 VwGO",
      title: "Wie entscheidet das Verwaltungsgericht?",
      options: [
        { label: "Klage erfolgreich: streitentscheidender VA rechtswidrig", detail: "Aufhebung – der BM muss den Beschluss ausführen", next: "e_klage_erfolg", tone: "neutral" },
        { label: "Klage erfolglos: VA rechtmäßig", detail: "die Aussetzung hat Bestand", next: "e_klage_erfolglos", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_beendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 42 GemO",
      title: "Aussetzungsverfahren erfolgreich beendet",
      text: "Der Gemeinderat hat die Aussetzung akzeptiert und den Ausgangsbeschluss aufgehoben (bzw. die gerichtliche Entscheidung hingenommen). Das Instrument hat seinen Zweck erfüllt: Selbstkorrektur der Gemeinde ohne (weiteres) aufsichtsbehördliches Verfahren – Stärkung der kommunalen Selbstverantwortung."
    },

    e_klage_erfolglos: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 42 II GemO, § 113 I VwGO",
      title: "Aussetzung bestätigt – Beschluss bleibt unausgeführt",
      text: "Der streitentscheidende Verwaltungsakt der Aufsichtsbehörde war rechtmäßig: Der Ratsbeschluss ist rechtswidrig und die Aussetzung zu Recht erfolgt. Die Klage des Gemeinderats wird abgewiesen; der Beschluss darf nicht ausgeführt werden.\n\nDer Rat kann die Angelegenheit nur durch eine neue, fehlerfreie Beschlussfassung weiterverfolgen."
    },

    e_klage_erfolg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 I 1 VwGO",
      title: "Aussetzung gescheitert – Bürgermeister muss ausführen",
      text: "Das Verwaltungsgericht hebt die Entscheidung der Aufsichtsbehörde auf, weil der streitentscheidende VA rechtswidrig war (der Ratsbeschluss also rechtmäßig ist). Der Bürgermeister muss den Beschluss nunmehr ausführen (§ 47 I 2 Nr. 2 GemO)."
    },

    e_aussetzung_rw_ab: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II GemO",
      title: "Aufsichtsbehörde verneint die Rechtmäßigkeit der Aussetzung",
      text: "Die Aufsichtsbehörde hält den Ratsbeschluss für rechtmäßig (oder das Aussetzungsverfahren für fehlerhaft). Der Bürgermeister muss den Beschluss grundsätzlich ausführen.\n\nExkurs: Der BM hat grundsätzlich KEIN eigenes Klagerecht gegen diese Entscheidung. Ausnahme: Der Ausgangsbeschluss berührt ihn in seiner eigenen ORGANKOMPETENZ – dann Klagerecht, weil sonst die bestandskräftige Aufsichtsentscheidung einem später im Kommunalverfassungsstreit erstrittenen Urteil widersprechen könnte."
    },

    e_rw_aussetzung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 I GemO",
      title: "Aussetzung rechtswidrig: kein Aussetzungsgrund",
      text: "Der Beschluss ist rechtmäßig und verletzt weder Wirtschaftlichkeitsgrundsätze noch die Haushaltsdeckung. Der Bürgermeister darf die Ausführung nicht verweigern – er ist zur Ausführung der Ratsbeschlüsse verpflichtet (§ 47 I 2 Nr. 2 GemO).\n\nSetzt er dennoch aus, greift er rechtswidrig in die Kompetenz des Rates ein (möglicher Gegenstand eines Kommunalverfassungsstreits; zudem dienstrechtliche Konsequenzen möglich)."
    },

    e_ausgefuehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 I GemO",
      title: "Aussetzung nicht (mehr) möglich",
      text: "Der Beschluss ist bereits ausgeführt – die Aussetzung läuft leer, denn sie setzt an der Ausführungshandlung an.\n\nIn Betracht kommen dann nur noch Maßnahmen der Kommunalaufsicht: Beanstandung mit dem Verlangen, das Veranlasste rückgängig zu machen (§ 121 S. 2 GemO)."
    },

    e_kein_beschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 I GemO",
      title: "Kein tauglicher Aussetzungsgegenstand",
      text: "Ohne Beschluss des Gemeinderats (bzw. eines Ausschusses, § 46 V GemO) gibt es nichts auszusetzen. Gegen sonstiges Handeln der Verwaltung ist § 42 GemO nicht anwendbar."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 I GemO",
      title: "Kein Anspruch Dritter auf Aussetzung",
      text: "Die Aussetzung erfolgt im rein öffentlichen Interesse – weder Bürger noch einzelne Ratsmitglieder haben einen Rechtsanspruch auf Aussetzung.\n\nEinem Ratsmitglied, das durch einen Beschluss in seinen MITGLIEDSCHAFTSRECHTEN verletzt ist, steht stattdessen ggf. der Kommunalverfassungsstreit offen; gegen Wahlen die Wahlbeschwerde (§ 43 GemO)."
    }
  },

  routers: {}
});
