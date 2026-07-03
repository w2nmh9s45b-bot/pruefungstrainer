/*
 * Prüfungsschema: Folgenbeseitigungsanspruch & öffentlich-rechtlicher
 * Erstattungsanspruch
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "AVR – FS II Recht der staatlichen Ersatzleistungen" (Weil – FBA-Voraussetzungen,
 *    Ausschlussgründe, öErstA-Schema)
 *  - "OLE 36 – Recht der staatlichen Ersatzleistungen"
 *  - Gesetze: VwVfG § 49a; BGB §§ 254, 818 III (Rechtsgedanke); GG Art. 20 III
 *    (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-folgenbeseitigung",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Staatliche Ersatzleistungen",
  title: "Folgenbeseitigungs- und Erstattungsanspruch",
  description: "Zwei gewohnheitsrechtlich anerkannte Ansprüche: der Folgenbeseitigungsanspruch (Wiederherstellung nach hoheitlichem Eingriff – kein Schadensersatz!) und der allgemeine öffentlich-rechtliche Erstattungsanspruch (Rückabwicklung rechtsgrundloser Vermögensverschiebungen), jeweils mit Voraussetzungen, Rechtsfolgen und Ausschlussgründen.",
  start: "start",
  stations: [
    { id: "weiche", label: "Anspruchsart" },
    { id: "voraussetzungen", label: "Voraussetzungen" },
    { id: "grenzen", label: "Grenzen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "weiche",
      kind: "frage",
      norm: "Gewohnheitsrecht / Art. 20 III GG",
      title: "Was begehrt der Anspruchsteller?",
      def: "<b>Folgenbeseitigungsanspruch (FBA):</b> Wiederherstellung des ursprünglichen Zustands nach hoheitlichem Eingriff (Herleitung: Freiheitsgrundrechte bzw. Rechtsstaatsprinzip, Art. 20 III GG).<br><i>Beispiele:</i> Rückgabe der sichergestellten Sache, Rückbau des versehentlich auf dem Privatgrundstück angelegten Gehwegs, Widerruf ehrverletzender Äußerungen, Räumung nach Obdachloseneinweisung.<br><br><b>Öffentlich-rechtlicher Erstattungsanspruch (öErstA):</b> Rückgängigmachung rechtsgrundloser VERMÖGENSverschiebungen im öffentlichen Recht (Kehrseite des Leistungsanspruchs; Herleitung: Gesetzmäßigkeit der Verwaltung).<br><i>Beispiel:</i> doppelt überwiesenes Büchergeld, Leistung aus nichtigem örV.",
      options: [
        { label: "Wiederherstellung des früheren Zustands → FBA", next: "q_fba_eingriff", tone: "neutral" },
        { label: "Rückabwicklung einer Vermögensverschiebung → öErstA", next: "q_erst_spezial", tone: "neutral" }
      ]
    },

    /* ---------- FBA ---------- */

    q_fba_eingriff: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "FBA – Voraussetzung 1",
      title: "Hoheitlicher Eingriff in ein subjektives Recht?",
      def: "<b>1. Hoheitliche Maßnahme:</b> VA oder schlichtes Verwaltungshandeln – aber NICHT bloßes Unterlassen der Verwaltung!<br><b>2. Eingriff in ein subjektives Recht:</b> aus einfachgesetzlichen Vorschriften oder Grundrechten (Eigentum, APR, körperliche Unversehrtheit …).",
      options: [
        { label: "Ja, hoheitlicher Eingriff in subjektives Recht", next: "q_fba_zustand", tone: "pos" },
        { label: "Nein (nur Unterlassen / kein subjektives Recht)", next: "e_fba_nein_eingriff", tone: "neg" }
      ]
    },

    q_fba_zustand: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "FBA – Voraussetzung 2",
      title: "Besteht ein rechtswidriger Zustand fort?",
      def: "<b>Rechtswidriger Zustand:</b> Entscheidend ist, ob der ZUSTAND, dessen Beseitigung verlangt wird, rechtswidrig IST – der Eingriff selbst muss nicht rechtswidrig gewesen sein (z. B. rechtmäßige Sicherstellung, nach deren Aufhebung die Sache herauszugeben ist)!<br><b>Haftungsbegründende Kausalität:</b> zwischen Eingriff und Zustand (unmittelbare Verursachung; Probleme bei mittelbaren Folgen).<br><b>Fortdauer:</b> Der rechtswidrige Zustand muss noch andauern.",
      options: [
        { label: "Ja, rechtswidriger Zustand dauert an", next: "q_fba_ausschluss", tone: "pos" },
        { label: "Zustand ist legalisiert / beendet", next: "e_fba_nein_zustand", tone: "neg" }
      ]
    },

    q_fba_ausschluss: {
      station: "grenzen",
      kind: "frage",
      norm: "FBA – Ausschlussgründe",
      title: "Ist die Folgenbeseitigung ausgeschlossen?",
      def: "<b>Der FBA ist ausgeschlossen, wenn die Folgenbeseitigung:</b><br>• tatsächlich oder rechtlich <b>unmöglich</b> ist,<br>• <b>unzumutbar</b> ist (unverhältnismäßiger Aufwand) oder<br>• sich das Verlangen als <b>unzulässige Rechtsausübung</b> darstellt (widersprüchliches Verhalten; sichere Aussicht auf nachträgliche Legalisierung).<br><br><b>Mitverschulden:</b> § 254 BGB analog kann den Anspruch mindern.",
      options: [
        { label: "Kein Ausschlussgrund", next: "e_fba_ja", tone: "pos" },
        { label: "Unmöglich / unzumutbar / unzulässige Rechtsausübung", next: "e_fba_nein_ausschluss", tone: "neg" }
      ]
    },

    /* ---------- öErstA ---------- */

    q_erst_spezial: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "§ 49a VwVfG u. a.",
      title: "Gibt es eine spezialgesetzliche Erstattungsregelung?",
      def: "<b>Rechtsgrundlage – Prüfreihenfolge:</b><br>1. <b>Spezialgesetz</b>, z. B. § 49a I 1 VwVfG (Erstattung nach Rücknahme/Widerruf mit Wirkung für die Vergangenheit), § 12 BBesG, §§ 50 SGB X,<br>2. im Übrigen: der <b>gewohnheitsrechtlich anerkannte allgemeine öffentlich-rechtliche Erstattungsanspruch</b> (aus dem Grundsatz der Gesetzmäßigkeit der Verwaltung, Art. 20 III GG).",
      options: [
        { label: "Spezialgesetz einschlägig (z. B. § 49a VwVfG)", next: "e_erst_spezial", tone: "warn" },
        { label: "Kein Spezialgesetz → allgemeiner öErstA", next: "q_erst_voraussetzungen", tone: "neutral" }
      ]
    },

    q_erst_voraussetzungen: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "Allg. öErstA",
      title: "Liegen die Voraussetzungen des öErstA vor?",
      def: "<b>Voraussetzungen (parallel zu §§ 812 ff. BGB):</b><br>1. <b>öffentlich-rechtliche Rechtsbeziehung</b> – die Vermögensverschiebung erfolgte in einem ö.-r. Rechtsverhältnis (i. d. R. Kehrseite des Leistungsanspruchs),<br>2. <b>etwas erlangt</b> – durch LEISTUNG (bewusste, zweckgerichtete Mehrung fremden Vermögens) oder in SONSTIGER Weise,<br>3. <b>ohne Rechtsgrund</b> – insb. kein (wirksamer) VA, kein örV, kein Gesetz.<br><br><b>Beachte:</b> Ein wirksamer (auch rechtswidriger!) VA ist Rechtsgrund – er muss erst nach §§ 48 ff. VwVfG beseitigt werden, dann gilt § 49a VwVfG.",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "q_erst_wegfall", tone: "pos" },
        { label: "Rechtsgrund besteht (wirksamer VA/Vertrag)", next: "e_erst_nein_rechtsgrund", tone: "neg" }
      ]
    },

    q_erst_wegfall: {
      station: "grenzen",
      kind: "frage",
      norm: "§ 818 III BGB (Rechtsgedanke)",
      title: "Kann sich der Schuldner auf Entreicherung berufen?",
      def: "<b>Rechtsfolge:</b> Herausgabe des erlangten Vermögenswerts, ggf. Wertersatz.<br><br><b>Entreicherung (Rechtsgedanke des § 818 III BGB):</b><br>• Der <b>Bürger</b> kann sich grundsätzlich auf den Wegfall der Bereicherung berufen – ABER nicht bei Bösgläubigkeit (Kenntnis des fehlenden Rechtsgrunds; Rechtsgedanke §§ 818 IV, 819 BGB) und nicht, soweit er die Umstände kannte oder grob fahrlässig nicht kannte (vgl. § 49a II 2 VwVfG),<br>• die <b>BEHÖRDE</b> kann sich nach h. M. NIE auf Entreicherung berufen – der Grundsatz der Gesetzmäßigkeit verpflichtet sie zur Rückabwicklung rechtsgrundloser Verschiebungen.",
      options: [
        { label: "Keine (beachtliche) Entreicherung", next: "e_erst_ja", tone: "pos" },
        { label: "Bürger gutgläubig entreichert", next: "e_erst_entreichert", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fba_ja: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "FBA",
      title: "Folgenbeseitigungsanspruch besteht",
      text: "Der Betroffene kann die Wiederherstellung des ursprünglichen (rechtmäßigen) Zustands verlangen – beseitigt werden die dem Hoheitsträger zurechenbaren unmittelbaren Folgen (haftungsausfüllende Kausalität).\n\nWICHTIG: Der FBA ist KEIN Schadensersatzanspruch – er gleicht keine (weiteren) Schäden aus und erfasst keine Naturalrestitution über den früheren Zustand hinaus; dafür Amtshaftung (§ 839 BGB i. V. m. Art. 34 GG).\n\nDurchsetzung: allgemeine Leistungsklage vor dem Verwaltungsgericht (§ 40 I VwGO – anders als die Amtshaftung!); bei Vollzugsfolgen eines aufgehobenen VA auch über den Annexantrag § 113 I 2 VwGO."
    },

    e_fba_nein_eingriff: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "FBA",
      title: "Kein FBA: kein tauglicher Eingriff",
      text: "Es fehlt an einer hoheitlichen Maßnahme (bloßes Unterlassen genügt nicht) oder am Eingriff in ein subjektives Recht des Anspruchstellers."
    },

    e_fba_nein_zustand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "FBA",
      title: "Kein FBA: kein andauernder rechtswidriger Zustand",
      text: "Der Zustand ist nicht (mehr) rechtswidrig – etwa weil er nachträglich legalisiert wurde oder bereits beendet ist. Für in der Vergangenheit entstandene Schäden hilft nur die Amtshaftung."
    },

    e_fba_nein_ausschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "FBA – Ausschluss",
      title: "FBA ausgeschlossen",
      text: "Die Folgenbeseitigung ist tatsächlich/rechtlich unmöglich, unzumutbar oder das Verlangen ist unzulässige Rechtsausübung. Bei Unmöglichkeit/Unzumutbarkeit kommt nach h. M. ein Geldausgleich (Folgenentschädigungsanspruch) in Betracht (str.); daneben ggf. Amtshaftung."
    },

    e_erst_spezial: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 49a VwVfG",
      title: "Spezialgesetzliche Erstattung geht vor",
      text: "Die Erstattung richtet sich nach der Spezialregelung – wichtigster Fall: § 49a VwVfG nach Rücknahme/Widerruf mit Wirkung für die Vergangenheit oder Eintritt einer auflösenden Bedingung. Dort gilt: Festsetzung durch schriftlichen VA (§ 49a I 2), Umfang nach §§ 818 ff. BGB entsprechend, kein Entreicherungseinwand bei Kenntnis oder grob fahrlässiger Unkenntnis (§ 49a II 2), Verzinsung (§ 49a III)."
    },

    e_erst_ja: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Allg. öErstA",
      title: "Öffentlich-rechtlicher Erstattungsanspruch besteht",
      text: "Die rechtsgrundlose Vermögensverschiebung ist rückabzuwickeln: Herausgabe des Erlangten, ggf. Wertersatz.\n\nDurchsetzung: Die BEHÖRDE kann ihren Erstattungsanspruch als Kehrseite des Leistungs-VA nach h. M. durch Leistungsbescheid geltend machen (Kehrseitentheorie), wenn die Leistung durch VA gewährt worden war; sonst allgemeine Leistungsklage. Der BÜRGER verfolgt seinen Erstattungsanspruch mit der allgemeinen Leistungsklage vor dem VG."
    },

    e_erst_nein_rechtsgrund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Allg. öErstA",
      title: "Kein Erstattungsanspruch: Rechtsgrund besteht",
      text: "Die Vermögensverschiebung beruht auf einem Rechtsgrund – insbesondere einem WIRKSAMEN VA (auch wenn er rechtswidrig ist!). Solange der VA nicht nach §§ 48, 49 VwVfG (mit Wirkung für die Vergangenheit) aufgehoben ist, scheidet die Erstattung aus. Erst nach Aufhebung greift § 49a VwVfG."
    },

    e_erst_entreichert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 818 III BGB (Rechtsgedanke)",
      title: "Erstattung scheitert an der Entreicherung",
      text: "Der gutgläubige Bürger ist entreichert – die Bereicherung ist ersatzlos weggefallen (Rechtsgedanke des § 818 III BGB). Beachte die Grenzen: Bösgläubigkeit sowie Kenntnis/grob fahrlässige Unkenntnis der Umstände schließen den Einwand aus; ERSPARTE Aufwendungen (z. B. ohnehin nötige Bücher) bedeuten keinen Wegfall der Bereicherung!"
    }
  },

  routers: {}
});
