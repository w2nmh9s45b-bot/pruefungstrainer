/*
 * VWL-Schema: Externe Effekte & Umweltpolitik prüfen
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 5.3 (Produktionsfaktor Umwelt, externe Effekte,
 *    Emission/Diffusion/Immission, umweltpolitische Prinzipientrias)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-externe-effekte",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Produktionsfaktoren & Arbeitsmarkt",
  title: "Externe Effekte & Umweltpolitik",
  description: "Liegt ein externer Effekt vor – positiv oder negativ? Über Emission, Diffusion und Immission zur Internalisierung der externen Kosten und zur umweltpolitischen Prinzipientrias (Verursacher-, Vorsorge-, Kooperationsprinzip).",
  start: "start",
  stations: [
    { id: "effekt", label: "Externer Effekt" },
    { id: "wirkung", label: "Wirkungskette" },
    { id: "prinzip", label: "Prinzipien" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: Effekt eingeordnet",
    neg: "Diagnose: kein externer Effekt",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  nodes: {

    start: {
      station: "effekt",
      kind: "frage",
      norm: "Externe Effekte",
      title: "Wirkt die Aktivität auf unbeteiligte Dritte – ohne Marktpreis?",
      def: "<b>Externe Effekte</b> sind diejenigen Wirkungen, die von ökonomischen Aktivitäten (Produktion/Konsum) der Wirtschaftssubjekte ausgehen und die wirtschaftliche Situation <b>anderer</b> Wirtschaftssubjekte positiv oder negativ beeinflussen.<br><br>Kennzeichen: <b>Verursacher und Betroffener stimmen nicht überein</b> – und die Wirkung läuft <b>am Markt vorbei</b> (kein Preis, keine Entschädigung).",
      options: [
        { label: "Ja – Dritte sind betroffen, ohne dass ein Preis fließt", next: "q_vorzeichen", tone: "pos" },
        { label: "Nein – alle Wirkungen sind über Verträge/Preise abgegolten", next: "e_kein", tone: "neg" }
      ]
    },

    q_vorzeichen: {
      station: "effekt",
      kind: "frage",
      norm: "positiv / negativ",
      title: "Positiver oder negativer externer Effekt?",
      def: "Externe Effekte können <b>positiv</b> oder <b>negativ</b> sein:<br><br>• <b>Negativ</b>: Die Produktion eines Gutes verursacht neben den internen (privaten) Kosten auch <b>externe Kosten (soziale Kosten)</b>, die nicht in die Kostenkalkulation des Verursachers einfließen – klassisch: Umweltverschmutzung, solange die Umwelt unentgeltlich zur Verfügung steht.<br>• <b>Positiv</b>: Dritte profitieren, ohne zu zahlen (Impfschutz, gepflegter Vorgarten, Bienenhaltung neben Obstplantage).",
      options: [
        { label: "Negativ – externe Kosten entstehen", detail: "z. B. Emissionen einer Fabrik", next: "q_kette", tone: "neg" },
        { label: "Positiv – externer Nutzen entsteht", detail: "z. B. Impfung schützt auch andere", next: "e_positiv", tone: "pos" }
      ]
    },

    q_kette: {
      station: "wirkung",
      kind: "frage",
      norm: "Emission → Diffusion → Immission",
      title: "Die Wirkungskette der Umweltbelastung",
      def: "Bei der Bestimmung der Ursachen von Umweltbelastungen werden drei Vorgänge betrachtet:<br><br>• <b>Emission</b>: die von einer Anlage oder von Produkten an die Umwelt <b>abgegebenen</b> Luftverunreinigungen (Gase, Stäube), Geräusche, Strahlen, Wärme, Erschütterungen u. Ä.<br>• <b>Diffusion</b>: der <b>Verteilungsprozess</b> des Stoffes – Globalschadstoffe wie CO₂ verteilen sich gleichmäßig, Oberflächenschadstoffe (z. B. Schwermetalle) nicht.<br>• <b>Immission</b>: die <b>Einwirkung</b> auf Menschen, Tiere, Pflanzen und Sachgüter (Schwermetalle im Boden, Smog in Ballungsgebieten).",
      options: [
        { label: "Weiter: Wie reagiert die Umweltpolitik?", next: "q_prinzip", tone: "pos" }
      ]
    },

    q_prinzip: {
      station: "prinzip",
      kind: "frage",
      norm: "Prinzipientrias",
      title: "Welches umweltpolitische Prinzip trägt die Maßnahme?",
      def: "Ziel ist die <b>Internalisierung der externen Kosten</b>: Aus externen (sozialen) Kosten sollen interne Kosten des Verursachers werden. Die Durchsetzung der staatlichen Umweltpolitik beruht auf drei Prinzipien (<b>umweltpolitische Prinzipientrias</b>):",
      options: [
        { label: "Kosten trägt, wer sie verursacht → Verursacherprinzip", detail: "z. B. CO₂-Preis, Abwassergebühr, Emissionshandel", next: "e_verursacher", tone: "neutral" },
        { label: "Gefahren von vornherein vermeiden → Vorsorgeprinzip", detail: "z. B. Grenzwerte, Umweltverträglichkeitsprüfung", next: "e_vorsorge", tone: "neutral" },
        { label: "Staat, Bürger und Unternehmen gemeinsam → Kooperationsprinzip", detail: "z. B. Selbstverpflichtungen der Wirtschaft, runde Tische", next: "e_kooperation", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verursacher: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verursacherprinzip",
      title: "Verursacherprinzip",
      text: "Grundsatz: Die Kosten einer Umweltbelastung soll derjenige tragen, der für ihre Entstehung verantwortlich ist.\n\nDie bisher externen Kosten (soziale Zusatzkosten) von Produktion und Konsum werden möglichst vollständig den Verursachern angelastet – aus externen werden interne Kosten (INTERNALISIERUNG). So entsteht ein Anreiz, Umweltverschmutzung künftig zu vermeiden (Verteilungsgerechtigkeit).\n\nInstrumente: Umweltsteuern und -abgaben, Emissionshandel, Haftungsregeln.\n\nÖkonomische Logik: Erst wenn der Preis die WAHREN (sozialen) Kosten widerspiegelt, lenkt der Preismechanismus richtig – externe Effekte sind ein Fall ECHTEN Marktversagens (→ Schema 'Öffentliche Güter & Marktversagen')."
    },

    e_vorsorge: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Vorsorgeprinzip",
      title: "Vorsorgeprinzip",
      text: "Umweltpolitische Maßnahmen sind so zu gestalten, dass Umweltgefahren VERMIEDEN und die Naturgrundlagen schonend in Anspruch genommen werden.\n\nEs geht nicht nur darum, drohende Gefahren abzuwehren und bestehende Schäden zu beseitigen – von vornherein sollen Entwicklungen verhindert werden, die künftig zu Umweltbelastungen führen können (PRÄVENTIVER Umweltschutz).\n\nInstrumente: Grenzwerte, Genehmigungsvorbehalte, Umweltverträglichkeitsprüfungen, Stand der Technik.\n\nVerfassungsrechtlicher Anker des Umweltschutzes: Art. 20a GG (Schutz der natürlichen Lebensgrundlagen, auch in Verantwortung für künftige Generationen)."
    },

    e_kooperation: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kooperationsprinzip",
      title: "Kooperationsprinzip",
      text: "Ziel ist die Verankerung des Umweltschutzes als GEMEINSAME Aufgabe von Staat, Bürgern und Unternehmen – gerichtet auf eine möglichst einvernehmliche Verwirklichung umweltpolitischer Ziele. Staatliche und gesellschaftliche Kräfte sollen bei der Durchsetzung mitwirken.\n\nInstrumente: Selbstverpflichtungen der Wirtschaft, Umweltallianzen, Beteiligungsverfahren, runde Tische.\n\nMerke die Trias komplett: Verursacherprinzip (wer verschmutzt, zahlt), Vorsorgeprinzip (vermeiden statt sanieren), Kooperationsprinzip (gemeinsam statt gegeneinander)."
    },

    e_positiv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Positiver externer Effekt",
      title: "Positiver externer Effekt – Förderfall",
      text: "Dritte profitieren, ohne dafür zu zahlen (externer Nutzen): Impfungen schützen auch Nicht-Geimpfte, Bildung nützt der ganzen Gesellschaft, die Bienen des Imkers bestäuben die Obstplantage des Nachbarn.\n\nProblem: Weil der private Nutzen kleiner ist als der gesellschaftliche, wird vom Gut ZU WENIG produziert/nachgefragt.\n\nStaatliche Antwort: Förderung – Subventionen, kostenlose Bereitstellung, Meritorisierung (vgl. meritorische Güter im Schema 'Öffentliche Güter & Marktversagen')."
    },

    e_kein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Kein externer Effekt",
      title: "Kein externer Effekt",
      text: "Wenn alle Wirkungen der Aktivität über Märkte, Preise oder Verträge abgegolten werden, liegt kein externer Effekt vor – Verursacher und Kostenträger stimmen überein, der Preismechanismus lenkt korrekt.\n\nPrüfe zur Sicherheit: Gibt es wirklich NIEMANDEN, der unentgeltlich be- oder entlastet wird? Gerade bei Produktionsprozessen mit Umweltnutzung (Luft, Wasser, Lärm) entstehen fast immer unbeabsichtigte Effekte nach außen – das Skript: 'Wirtschaftliche Tätigkeiten haben fast immer meist unbeabsichtigte Effekte auf die Umwelt.'"
    }
  }
});
