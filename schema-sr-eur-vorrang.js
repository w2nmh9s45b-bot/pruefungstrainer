/*
 * Prüfungsschema: Anwendungsvorrang des Unionsrechts und Kontrollvorbehalte des BVerfG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Europarecht):
 *  - "EuR OLE LE 3 - Verhältnis zum nationalen Recht" (Breitbach, FS II)
 *    – Solange I/II, Maastricht, Bananenmarkt, Identitätskontrolle (Europ. Haftbefehl 2015),
 *      ultra-vires (EZB 2012, PSPP 2020, Eigenmittelbeschluss 2022)
 *  - Normen verifiziert an Grundgesetz.md, EUV.md
 *
 * Stationen: kollision → vorrang → grenzen → kontrolle → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-eur-vorrang",
  subject: "Staatsrecht / Europarecht",
  area: "Europarecht",
  title: "Anwendungsvorrang des Unionsrechts",
  description: "Kollision von Unionsrecht und nationalem Recht: Anwendungsvorrang über Art. 23 I GG (kein Geltungsvorrang!), die Solange-Rechtsprechung des BVerfG und seine heutigen Kontrollvorbehalte – Identitätskontrolle (Art. 79 III GG) und Ultra-vires-Kontrolle (Art. 5 I, II EUV).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "kollision", label: "Kollision" },
    { id: "vorrang", label: "Anwendungsvorrang" },
    { id: "grenzen", label: "Grenzen" },
    { id: "kontrolle", label: "BVerfG-Kontrolle" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Unionsrecht geht vor",
    neg: "Nationale Kontrolle greift",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "kollision",
      kind: "frage",
      norm: "Art. 23 I, 59 II, 25 GG",
      title: "Kollidiert Unionsrecht mit nationalem Recht?",
      text: "Die EU-Verträge sind Völkerrecht; nach Art. 59 II 1 GG stünde das Unionsrecht als Bundesgesetz unterhalb der Verfassung (vgl. Art. 25 GG) – das widerspräche der einheitlichen Anwendung. Deshalb enthält Art. 23 GG die Sonderregelung: Art. 23 I 1 GG als Wirksamkeits- und Durchsetzungsversprechen, Art. 23 I 2 GG erlaubt die Übertragung von Hoheitsrechten und billigt so den im Zustimmungsgesetz eingeräumten Anwendungsvorrang.",
      options: [
        { label: "Ja, Kollision liegt vor", next: "q_vorrang", tone: "neutral" },
        { label: "Nein, kein Konflikt", next: "e_keine_kollision", tone: "neg" }
      ]
    },

    q_vorrang: {
      station: "vorrang",
      kind: "frage",
      norm: "Art. 23 I GG",
      title: "Anwendungs- oder Geltungsvorrang?",
      def: "<b>Anwendungsvorrang:</b> Das entgegenstehende nationale Recht wird <b>nicht ungültig</b> – es bleibt in Kraft und ist auf Fälle ohne Kollision weiter anwendbar. Es besteht gerade <b>kein Geltungsvorrang</b>. <b>EuGH:</b> uneingeschränkter Vorrang vor nationalem Recht jeder Rangstufe, auch vor Verfassungsrecht – die Mitgliedstaaten haben ihre Souveränitätsrechte dauerhaft beschränkt; nur so ist die einheitliche Anwendung gesichert.",
      options: [
        { label: "Anwendungsvorrang", next: "q_grundrechte", tone: "pos" },
        { label: "Geltungsvorrang (Nichtigkeit)?", next: "e_kein_geltungsvorrang", tone: "neg" }
      ]
    },

    q_grundrechte: {
      station: "grenzen",
      kind: "frage",
      norm: "Art. 23 I 3, 79 III GG",
      title: "Rügt der Betroffene eine Verletzung deutscher Grundrechte durch EU-Recht?",
      text: "Der Anwendungsvorrang reicht nur so weit, wie Art. 79 II und III GG beachtet werden (Art. 23 I 3 GG) – das Unionsrecht darf die Ewigkeitsklausel nicht missachten.",
      def: "<b>Solange I (1974):</b> BVerfG prüft EU-Rechtsakte an deutschen Grundrechten, solange die EU keinen ausreichenden Grundrechtsschutz gewährleistet. <b>Solange II (1986):</b> keine Prüfung mehr, solange auf Unionsebene wirksamer Grundrechtsschutz besteht (EuGH-Rechtsprechung, heute zudem Grundrechtecharta als Primärrecht, Art. 6 I EUV). <b>Maastricht (1993) / Bananenmarkt (2001):</b> Wiederaufnahme der Prüfung nur bei strukturellen Rechtsprechungsdefiziten – vom Beschwerdeführer darzulegen.",
      options: [
        { label: "Kein strukturelles Defizit dargelegt", next: "e_unzulaessig_grundrechte", tone: "pos" },
        { label: "Verletzung des Kerns von Art. 1 / 20 GG gerügt", detail: "Identitätskontrolle", next: "q_identitaet", tone: "warn" },
        { label: "Kompetenzüberschreitung der EU gerügt", detail: "Ultra-vires-Kontrolle", next: "q_ultravires", tone: "warn" }
      ]
    },

    q_identitaet: {
      station: "kontrolle",
      kind: "frage",
      norm: "Art. 23 I 3, 79 III GG",
      title: "Identitätskontrolle: Ist der unantastbare Kerngehalt von Art. 1 oder 20 GG verletzt?",
      text: "Das BVerfG prüft trotz Anwendungsvorrangs, ob der Rechtsakt der Union den von Art. 79 III GG geschützten Kern der Verfassungsidentität verletzt.",
      hint: "Erstmals 2015 (Europäischer Haftbefehl): Auslieferung nach Italien aufgrund eines Abwesenheitsurteils – Verletzung des Schuldprinzips und des fairen Verfahrens aus Art. 1 I i. V. m. Art. 23 I 3, 79 III GG; das BVerfG hob den Auslieferungsbeschluss auf.",
      options: [
        { label: "Ja, Kerngehalt verletzt (z. B. Schuldprinzip)", next: "e_identitaet", tone: "neg" },
        { label: "Nein", next: "e_vorrang", tone: "pos" }
      ]
    },

    q_ultravires: {
      station: "kontrolle",
      kind: "frage",
      norm: "Art. 5 I, II EUV, Art. 23 I 2 GG",
      title: "Ultra-vires-Kontrolle: Überschreitet der EU-Rechtsakt die übertragenen Kompetenzen offensichtlich?",
      text: "Nach dem Prinzip der begrenzten Einzelermächtigung (Art. 5 I, II EUV) darf die Union nur tätig werden, wenn ihr das Hoheitsrecht übertragen wurde (Art. 23 I 2 GG). Erforderlich ist eine offensichtliche, strukturell bedeutsame Kompetenzüberschreitung.",
      def: "<b>Beispiele:</b> 2012/2020 EZB-Staatsanleihekäufe – im PSPP-Urteil (2020) stellte sich das BVerfG erstmals gegen den EuGH („objektiv willkürlich“, „methodisch nicht mehr vertretbar“): BReg und BT verletzten Art. 38 I 1 i. V. m. Art. 20 I, II, 79 III GG, weil sie nicht auf eine Verhältnismäßigkeitsprüfung der EZB hinwirkten. Folge: Vertragsverletzungsverfahren der Kommission, 2021 eingestellt, nachdem Deutschland den Vorrang des EU-Rechts förmlich anerkannte. <b>Gegenbeispiel:</b> Eigenmittelbeschluss „Next Generation EU“ (2022) – keine offensichtliche Überschreitung (zweckgebunden, befristet, der Höhe nach begrenzt).",
      options: [
        { label: "Ja, offensichtliche Kompetenzüberschreitung", next: "e_ultravires", tone: "neg" },
        { label: "Nein, vom Integrationsprogramm gedeckt", next: "e_vorrang", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_keine_kollision: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Keine Kollision",
      text: "Unionsrecht und nationales Recht stehen nicht im Widerspruch – beide sind nebeneinander anwendbar. Der Anwendungsvorrang wird nicht ausgelöst."
    },
    e_kein_geltungsvorrang: {
      station: "ergebnis", kind: "ergebnis", verdict: "frei",
      title: "Merke: kein Geltungsvorrang",
      text: "Das Unionsrecht genießt Anwendungs-, keinen Geltungsvorrang: Entgegenstehendes nationales Recht wird nicht nichtig, sondern bleibt in Kraft und gilt weiter für Sachverhalte, die das Unionsrecht nicht erfasst. Im Kollisionsfall bleibt es lediglich unangewendet."
    },
    e_vorrang: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Anwendungsvorrang des Unionsrechts",
      text: "Das Unionsrecht geht dem entgegenstehenden nationalen Recht – nach dem EuGH jeder Rangstufe, auch dem Verfassungsrecht – im konkreten Fall vor; das nationale Recht bleibt unangewendet, aber gültig. Grundlage im GG: Art. 23 I 1, 2 GG (Wirksamkeits- und Durchsetzungsversprechen, Hoheitsrechtsübertragung)."
    },
    e_unzulaessig_grundrechte: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Keine Grundrechtsprüfung durch das BVerfG (Solange II)",
      text: "Solange die EU einen im Wesentlichen gleichwertigen Grundrechtsschutz gewährleistet (EuGH + Grundrechtecharta als Primärrecht, Art. 6 I EUV), prüft das BVerfG EU-Rechtsakte nicht an deutschen Grundrechten. Verfassungsbeschwerden/Normenkontrollen sind unzulässig, sofern kein strukturelles Absinken des Grundrechtsstandards dargelegt wird (Bananenmarkt-Beschluss) – ein solches ist heute rein theoretisch."
    },
    e_identitaet: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      kicker: "Identitätskontrolle greift",
      title: "Grenze der Verfassungsidentität verletzt",
      text: "Der Rechtsakt verletzt den unantastbaren Kerngehalt der Art. 1 und 20 GG (Art. 23 I 3 i. V. m. Art. 79 III GG). Der Anwendungsvorrang endet hier – das BVerfG setzt die Maßnahme in Deutschland nicht um (Bsp. 2015: Aufhebung des Auslieferungsbeschlusses beim Europäischen Haftbefehl wegen des Schuldprinzips)."
    },
    e_ultravires: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      kicker: "Ultra-vires-Kontrolle greift",
      title: "Kompetenzüberschreitung – Rechtsakt wirkt nicht in Deutschland",
      text: "Der EU-Rechtsakt überschreitet offensichtlich das Integrationsprogramm (Art. 5 I, II EUV; Art. 23 I 2 GG) und ist in Deutschland unanwendbar; deutsche Verfassungsorgane müssen ihm entgegentreten (PSPP-Urteil 2020). Beachte die Folgeprobleme: offener Konflikt mit dem EuGH, Vertragsverletzungsverfahren – weitere Ultra-vires-Entscheidungen sind zu erwarten."
    }
  }
});
