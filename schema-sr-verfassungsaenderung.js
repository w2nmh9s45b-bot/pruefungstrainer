/*
 * Prüfungsschema: Verfassungsänderndes Gesetz und Staatsstrukturprinzipien, Art. 79, 20, 28 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "StVR II OLE LE 11 - Einführung in die Staatsstrukturprinzipien" (Jagatic, FS II)
 *  - "01. Skript StVR FS II 2024_2025" – A.II.3 Demokratieprinzip
 *  - "06. LE 06" (FS I) – Verfassungsänderung und Art. 79 III GG
 *  - Normen verifiziert an Grundgesetz.md; BT: 630 Mitglieder (§ 1 I BWahlG), BR: 69 Stimmen
 *
 * Stationen: formell → art79iii → element → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-verfassungsaenderung",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsstrukturprinzipien",
  title: "Verfassungsänderung und Art. 79 III GG",
  description: "Prüfung eines verfassungsändernden Gesetzes: formell (Textänderungsgebot, 2/3-Mehrheiten in BT und BR) und materiell über die Ewigkeitsgarantie des Art. 79 III GG – mit Elemente-Prüfung der Staatsstrukturprinzipien (Republik, Demokratie, Sozialstaat, Bundesstaat, Rechtsstaat) im Gutachtenstil.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "formell", label: "Formell" },
    { id: "art79iii", label: "Art. 79 III GG" },
    { id: "element", label: "Elemente-Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verfassungskonform",
    neg: "Verfassungswidrig",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "formell",
      kind: "frage",
      norm: "Art. 79 I 1 GG",
      title: "Formell: Ändert das Gesetz den GG-Wortlaut ausdrücklich?",
      text: "Obersatz: Das verfassungsändernde Gesetz ist verfassungskonform, wenn es formell und materiell verfassungsgemäß ist. Das GG kann nur durch ein Gesetz geändert werden, das den Wortlaut des GG ausdrücklich ändert oder ergänzt (Textänderungsgebot – keine „Verfassungsdurchbrechung“).",
      hint: "Gesetzgebungskompetenz: ausschließliche Kompetenz des Bundes aus Art. 79 I, II GG (Einzelzuweisung). In RLP: Art. 79 GG ≙ Art. 129 LV.",
      options: [
        { label: "Ja, ausdrückliche Textänderung", next: "q_mehrheit_bt", tone: "pos" },
        { label: "Nein, stillschweigende Abweichung", next: "e_formell_verletzt", tone: "neg" }
      ]
    },

    q_mehrheit_bt: {
      station: "formell",
      kind: "frage",
      norm: "Art. 79 II, 77 I GG",
      title: "Zweidrittelmehrheit im Bundestag erreicht?",
      text: "Das Gesetz bedarf der Zustimmung von zwei Dritteln der Mitglieder des Bundestages (bei 630 Mitgliedern nach § 1 I BWahlG: 420 Stimmen) – im Hauptverfahren nach Art. 77 I 1 i. V. m. Art. 79 II GG zu prüfen.",
      options: [
        { label: "Ja, ≥ 2/3 der Mitglieder", next: "q_mehrheit_br", tone: "pos" },
        { label: "Nein", next: "e_formell_verletzt", tone: "neg" }
      ]
    },

    q_mehrheit_br: {
      station: "formell",
      kind: "frage",
      norm: "Art. 79 II GG",
      title: "Zweidrittelmehrheit im Bundesrat erreicht?",
      text: "Zusätzlich müssen zwei Drittel der Stimmen des Bundesrates zustimmen (46 von 69 Stimmen) – jedes verfassungsändernde Gesetz ist Zustimmungsgesetz.",
      options: [
        { label: "Ja, ≥ 46 Stimmen", next: "q_beruehrt", tone: "pos" },
        { label: "Nein", next: "e_formell_verletzt", tone: "neg" }
      ]
    },

    q_beruehrt: {
      station: "art79iii",
      kind: "frage",
      norm: "Art. 79 III GG",
      title: "Materiell: Was könnte die Ewigkeitsgarantie berühren?",
      text: "Zwischenergebnis: Das Gesetz ist formell verfassungsgemäß. ✓\n\nMaterieller Prüfungseinstieg ist Art. 79 III GG (quasi lex specialis): Unzulässig ist eine Änderung, durch welche (1) die Gliederung des Bundes in Länder, (2) die grundsätzliche Mitwirkung der Länder bei der Gesetzgebung oder (3) die in Art. 1 und 20 GG niedergelegten Grundsätze berührt werden.",
      def: "<b>Staatsstrukturprinzipien</b> („Staatsfundamentalnormen“) aus Art. 20 I GG: Republik-, Demokratie-, Sozialstaats- und Bundesstaatsprinzip; aus Art. 28 I 1 i. V. m. 20 III GG das Rechtsstaatsprinzip. Sie werden durch <b>Elemente</b> konkretisiert – jedes Element wird eigenständig im Gutachtenstil geprüft (Obersatz – Definition – Subsumtion – Ergebnis), nie im „Einheitsbrei“!",
      options: [
        { label: "Gliederung des Bundes in Länder", next: "q_gliederung", tone: "neutral" },
        { label: "Mitwirkung der Länder bei der Gesetzgebung", next: "q_mitwirkung", tone: "neutral" },
        { label: "Grundsätze der Art. 1 / 20 GG (Elemente-Prüfung)", next: "q_element", tone: "neutral" },
        { label: "Nichts davon berührt", next: "e_konform", tone: "pos" }
      ]
    },

    q_gliederung: {
      station: "art79iii",
      kind: "frage",
      norm: "Art. 79 III, 29 GG",
      title: "Wird die Gliederung des Bundes in Länder angetastet?",
      def: "Geschützt ist die <b>föderative Gliederung in Länder mit eigener Staatsqualität</b> – nicht der Bestand einzelner Länder (vgl. Art. 29 GG: Neugliederung zulässig). Aus dem Wortlaut („die Länder“) folgt nur, dass es mehrere Länder geben muss.",
      options: [
        { label: "Abschaffung der Länder / ihrer Staatsqualität", next: "e_79iii_verstoss", tone: "neg" },
        { label: "Bloße Neugliederung (Art. 29 GG)", next: "e_konform", tone: "pos" }
      ]
    },

    q_mitwirkung: {
      station: "art79iii",
      kind: "frage",
      norm: "Art. 79 III, 77, 78 GG",
      title: "Wird die grundsätzliche Mitwirkung der Länder bei der Gesetzgebung beseitigt?",
      def: "Geschützt: eigene Gesetzgebungsbefugnisse der Länder (Art. 70 I GG) und ihre Mitwirkung an der Bundesgesetzgebung über den Bundesrat (Art. 77, 78 GG). Deren Streichung würde Deutschland zum Einheitsstaat machen.",
      options: [
        { label: "Ja, Mitwirkung wird abgeschafft", next: "e_79iii_verstoss", tone: "neg" },
        { label: "Nein, nur modifiziert", next: "e_konform", tone: "pos" }
      ]
    },

    q_element: {
      station: "element",
      kind: "frage",
      norm: "Art. 1, 20 GG",
      title: "Welches Element welchen Prinzips könnte verletzt sein?",
      text: "Formulierungsbeispiel (Obersatz): „Die materielle Verfassungswidrigkeit könnte sich aus Art. 79 III GG ergeben. Dies setzt voraus, dass die in Art. 20 GG niedergelegten Grundsätze berührt werden. Das Gesetz könnte gegen das …prinzip aus Art. 20 I GG verstoßen; hier könnte das Element … verletzt sein.“",
      options: [
        { label: "Republikprinzip", detail: "Element des Demokratieprinzips", next: "q_republik", tone: "neutral" },
        { label: "Demokratieprinzip", detail: "Volkssouveränität, Wahlen, Mehrheitsprinzip …", next: "q_demokratie", tone: "neutral" },
        { label: "Menschenwürdekern (Art. 1 GG)", next: "e_79iii_verstoss", tone: "neg" },
        { label: "Bundesstaats-/Rechtsstaatsprinzip", detail: "Eigene Schemata „Bundesstaatsprinzip“ und „Rechtsstaatsprinzip“ nutzen", next: "e_verweis", tone: "neutral" }
      ]
    },

    q_republik: {
      station: "element",
      kind: "frage",
      norm: "Art. 20 I GG",
      title: "Element Republik: Staatsoberhaupt durch Wahl legitimiert und Amtszeit begrenzt?",
      def: "<b>Republik:</b> Das Staatsoberhaupt muss durch eine mittelbare oder unmittelbare Wahl des Volkes legitimiert werden und die Amtszeit muss begrenzt sein (Gegensatz: Monarchie/Diktatur).",
      hint: "Beispielsfall: Gesetz erklärt Deutschland zur Diktatur ohne Wahlen des Staatsoberhaupts → Subsumtion: keine Legitimation durch Wahl → Verstoß gegen das Element der Republik → Demokratieprinzip verletzt → Art. 79 III GG.",
      options: [
        { label: "Wahl-Legitimation entfällt / Amt auf Lebenszeit", next: "e_79iii_verstoss", tone: "neg" },
        { label: "Wahl und Befristung bleiben", next: "e_konform", tone: "pos" }
      ]
    },

    q_demokratie: {
      station: "element",
      kind: "frage",
      norm: "Art. 20 I, II GG",
      title: "Welches Element des Demokratieprinzips ist betroffen?",
      def: "Elemente: <b>Volkssouveränität</b> (Art. 20 II 1), <b>repräsentative Demokratie</b> (Art. 20 II 2 – Staatsgewalt durch besondere Organe; Gegensatz: plebiszitäre Demokratie), <b>Wahlen</b> (regelmäßig/periodisch, Art. 38, 39 GG), <b>Abstimmungen</b>, <b>Öffentlichkeitsgrundsatz</b>, <b>Mehrheitsprinzip mit Minderheitenschutz</b> (Opposition muss sich bilden/betätigen können und die reale Chance haben, Mehrheit zu werden).",
      options: [
        { label: "Wahlperiode wird verlängert", next: "q_wahlperiode", tone: "neutral" },
        { label: "Neue Volksentscheide werden eingeführt", next: "q_abstimmung", tone: "neutral" },
        { label: "Wahlen werden abgeschafft / Art. 38 I 1 GG geändert", next: "e_79iii_verstoss", tone: "neg" },
        { label: "Opposition wird verboten", detail: "Minderheitenschutz", next: "e_79iii_verstoss", tone: "neg" }
      ]
    },

    q_wahlperiode: {
      station: "element",
      kind: "frage",
      norm: "Art. 39 I 1 GG",
      title: "Verlängerung der Wahlperiode: In welchem Rahmen?",
      def: "Aus Art. 39 I 1 GG folgt gesichert, dass es regelmäßige, periodische Wahlen geben muss (demokratische Legitimation, Art. 20 II 1 GG). Die Verlängerung einer noch nicht begonnenen Wahlperiode ist nach h. M. zulässig, solange das „Gedächtnis der Wähler“ nicht überstrapaziert wird – anerkannt für 4 bis 6 Jahre. Art. 38 II GG (Wahlalter) ist nach h. M. änderbar; Art. 38 I 1 GG nicht (Art. 79 III GG).",
      options: [
        { label: "Auf 5 (bis max. 6) Jahre – künftige Periode", next: "e_konform", tone: "pos" },
        { label: "Deutlich über 6 Jahre / laufende Periode", next: "e_79iii_verstoss", tone: "neg" }
      ]
    },

    q_abstimmung: {
      station: "element",
      kind: "frage",
      norm: "Art. 20 II 2, 29, 146 GG",
      title: "Neue Abstimmungstatbestände: Voraussetzungen der h. M. erfüllt?",
      def: "Nach ganz h. M. (systematische Auslegung – das GG ist repräsentativ angelegt) müssen neue Volksentscheide (1) <b>im GG verankert</b> werden (wie Art. 29 II, 146 GG) und (2) hinsichtlich des Gegenstands <b>thematisch eng umgrenzt</b> sein. In RLP ist direkte Demokratie breiter zugelassen (Art. 107 ff. LV).",
      options: [
        { label: "Ja, im GG verankert und eng umgrenzt", next: "e_konform", tone: "pos" },
        { label: "Nein, generelle Volksgesetzgebung ohne Verankerung", next: "e_79iii_verstoss", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_formell_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verfassungsänderung formell verfassungswidrig",
      text: "Das Gesetz verletzt Art. 79 I GG (kein ausdrücklicher Änderungstext) oder Art. 79 II GG (Zweidrittelmehrheit der Mitglieder des Bundestages – 420 von 630 – bzw. zwei Drittel der Stimmen des Bundesrates – 46 von 69 – verfehlt). Es ist formell verfassungswidrig."
    },
    e_79iii_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verstoß gegen Art. 79 III GG – materiell verfassungswidrig",
      text: "Das geprüfte Element eines Staatsstrukturprinzips ist verletzt; damit wird einer der in Art. 1 bzw. 20 GG niedergelegten Grundsätze (oder die Gliederung in Länder / die Mitwirkung der Länder) berührt. Die Änderung ist nach der Ewigkeitsgarantie des Art. 79 III GG unzulässig – das Gesetz ist materiell verfassungswidrig. Kein Verfassungsorgan hat die Kompetenz, diese Grundsätze zu ändern; Art. 79 III GG schützt sich selbst mit."
    },
    e_konform: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Verfassungsänderung zulässig",
      text: "Das Gesetz wahrt Textänderungsgebot und Zweidrittelmehrheiten (Art. 79 I, II GG) und berührt die von Art. 79 III GG geschützten Grundsätze nicht – die Elemente der Staatsstrukturprinzipien bleiben unangetastet (bloße Modifikationen unterhalb der Berührensschwelle sind zulässig). Die Verfassungsänderung ist verfassungskonform."
    },
    e_verweis: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Weiter in den Spezialschemata",
      text: "Für die Elemente des Bundesstaatsprinzips (Gesamt-/Gliedstaaten, Art. 31 GG, Homogenitätsprinzip) und des Rechtsstaatsprinzips (Gewaltenteilung, Vorrang/Vorbehalt des Gesetzes, Rückwirkungsverbot) stehen eigene Schemata bereit – dort die Elemente-Prüfung im Gutachtenstil fortsetzen."
    }
  }
});
