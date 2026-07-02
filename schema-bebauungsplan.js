/*
 * Prüfungsschema: Wirksamkeit eines Bebauungsplans
 * (formelle und materielle Rechtmäßigkeit, Fehlerfolgen §§ 214, 215 BauGB)
 *
 * Quelle (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff), Kapitel
 *    "Bauleitplanung und Sicherung der Bauleitplanung" (Folien 172 ff.)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "bplan-wirksamkeit",
  subject: "Baurecht",
  area: "Bauleitplanung",
  title: "Wirksamkeit eines Bebauungsplans",
  description: "Inzident- oder Normenkontrollprüfung: Zuständigkeit und Verfahren (Aufstellungsbeschluss bis Bekanntmachung), Beachtlichkeit von Fehlern nach §§ 214, 215 BauGB, ergänzendes Verfahren sowie materielle Anforderungen (Erforderlichkeit, Planungsrahmen, Abwägung).",
  start: "start",
  stations: [
    { id: "formell", label: "Formell" },
    { id: "fehler", label: "Fehlerfolgen §§ 214 f." },
    { id: "materiell", label: "Materiell" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Plan wirksam",
    neg: "Ergebnis: Plan unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: heilbar"
  },

  nodes: {

    /* ================= A. Formelle Rechtmäßigkeit ================= */

    start: {
      station: "formell",
      kind: "frage",
      norm: "§ 10 I BauGB, § 32 II GemO",
      title: "Hat das zuständige Organ den Plan als Satzung beschlossen?",
      text: "Der Bebauungsplan wird von der (Orts-)Gemeinde als Satzung beschlossen (§ 10 I BauGB); zuständig ist der Gemeinderat (§ 32 II GemO). Die Wirksamkeit wird z. B. inzident im Baugenehmigungsverfahren oder in der Normenkontrolle (§ 47 I Nr. 1 VwGO) geprüft.",
      def: "<b>Bauleitplanung</b> ist Selbstverwaltungsangelegenheit der Gemeinde – zweistufig (§ 1 II BauGB): Der <b>Flächennutzungsplan</b> (§§ 5–7 BauGB) <u>stellt dar</u> (vorbereitend, Rechtsakt eigener Art), der <b>Bebauungsplan</b> (§§ 8–10 BauGB) <u>setzt fest</u> (verbindlich, Satzung). Der B-Plan ist aus dem FNP zu entwickeln (§ 8 II 1 BauGB).",
      options: [
        { label: "Ja, Satzungsbeschluss des Gemeinderats liegt vor", next: "q_verfahren", tone: "pos" },
        { label: "Nein, kein (wirksamer) Satzungsbeschluss", detail: "§ 214 I 1 Nr. 4 BauGB: ohne Beschluss kein Plan", next: "e_unwirksam_kern", tone: "neg" }
      ]
    },

    q_verfahren: {
      station: "formell",
      kind: "frage",
      norm: "§§ 2–4a, 10 BauGB",
      title: "Ist im Aufstellungsverfahren ein Fehler ersichtlich?",
      text: "In der Klausur nicht jeden Schritt durchprüfen – nur die problematischen Stellen ansprechen.",
      def: "<b>Verfahrensgang:</b> (1) Aufstellungsbeschluss, ortsüblich bekannt zu machen (§ 2 I 2 BauGB) · (2) Planentwurf mit Umweltprüfung (§ 2 IV) und Umweltbericht (§ 2a) · (3) frühzeitige Öffentlichkeits- und Behördenbeteiligung (§§ 3 I, 4 I) · (4) öffentliche Auslegung (§ 3 II: Ort und Dauer mindestens eine Woche vorher bekannt machen [Ereignisfrist, § 187 I BGB], Auslegung einen Monat [Ablauffrist, § 187 II BGB], Anstoßfunktion!) und Behörden-/TöB-Beteiligung (§ 4 II) · (5) Ermittlung und Bewertung des Abwägungsmaterials (§ 2 III) · (6) bei Änderung erneute Auslegung (§ 4a III) · (7) Satzungsbeschluss mit Begründung (§ 10 I, § 9 VIII) · (8) ggf. Genehmigung (§ 10 II) · (9) Ausfertigung · (10) ortsübliche Bekanntmachung (§ 10 III).",
      options: [
        { label: "Kein Verfahrensfehler ersichtlich", next: "q_erforderlich", tone: "pos" },
        { label: "Aufstellungsbeschluss fehlt / nicht bekannt gemacht", detail: "Nach § 214 I BauGB unbeachtlich – aber wichtig für Veränderungssperre und § 33 BauGB!", next: "q_erforderlich", tone: "warn" },
        { label: "Fehler bei Auslegung oder Beteiligung (§§ 3 II, 4 II, 4a III)", next: "q_214", set: { fehler: "beteiligung" }, tone: "neg" },
        { label: "Fehler bei Ermittlung/Bewertung des Abwägungsmaterials (§ 2 III)", detail: "Bewertungsausfall, -defizit oder -fehleinschätzung – als Verfahrensfehler zu behandeln", next: "q_214", set: { fehler: "ermittlung" }, tone: "neg" },
        { label: "Ausfertigung oder Bekanntmachung fehlerhaft", next: "q_kern", tone: "neg" }
      ]
    },

    /* ================= B. Fehlerfolgen §§ 214, 215 BauGB ================= */

    q_214: {
      station: "fehler",
      kind: "frage",
      norm: "§§ 214, 215 BauGB",
      title: "Ist der Verfahrensfehler beachtlich?",
      text: "Planerhaltungs-Schema:\n1. Wird der Verstoß in § 214 I BauGB überhaupt genannt? Wenn nein → unbeachtlich.\n2. Greift eine interne Ausnahme innerhalb der Nummern (z. B. § 214 I 1 Nr. 2: Belange unerheblich oder berücksichtigt)?\n3. Wurde der Fehler binnen eines Jahres schriftlich gegenüber der Gemeinde gerügt (§ 215 I 1 BauGB)? Wenn nein → unbeachtlich geworden.\n4. Wurde der Plan durch ein ergänzendes Verfahren rückwirkend in Kraft gesetzt (§ 214 IV BauGB)?",
      def: "<b>Beachtlich nach § 214 I 1 BauGB</b> sind insbesondere: Nr. 1 Verletzung des § 2 III (Ermittlung/Bewertung, in wesentlichen Punkten) · Nr. 2 Verletzung der Beteiligungsvorschriften (§§ 3 II, 4 II, 4a III) · Nr. 3 Begründungsmängel · Nr. 4 fehlender Beschluss, fehlende Genehmigung, fehlende Bekanntmachung.",
      options: [
        { label: "Fehler nicht in § 214 I genannt / interne Ausnahme greift", detail: "Unbeachtlich – Prüfung geht weiter", next: "q_erforderlich", tone: "pos" },
        { label: "Beachtlich, aber nicht binnen Jahresfrist gerügt (§ 215 I)", detail: "Unbeachtlich geworden – Prüfung geht weiter", next: "q_erforderlich", tone: "warn" },
        { label: "Beachtlich und fristgerecht gerügt", next: "q_ergaenzend", tone: "neg" }
      ]
    },

    q_kern: {
      station: "fehler",
      kind: "frage",
      norm: "Rechtsstaatsprinzip; § 10 III BauGB",
      title: "Ausfertigung oder Bekanntmachung – was ist fehlerhaft?",
      def: "<b>Ausfertigung:</b> rechtsstaatliches Verfahrenserfordernis (Unterzeichnung mit Datum durch die Bürgermeisterin/den Bürgermeister) – bestätigt Authentizität und Legalität. Sie muss NACH dem Satzungsbeschluss und VOR der Bekanntmachung erfolgen. §§ 214, 215 BauGB gelten hierfür nicht; § 214 IV BauGB (ergänzendes Verfahren) ist anwendbar.<br><b>Bekanntmachung (§ 10 III BauGB):</b> Ohne ortsübliche Bekanntmachung tritt der Plan nicht in Kraft (beachte § 3 Verkündungsgesetz RLP).",
      options: [
        { label: "Ausfertigung fehlt oder erfolgte nach der Bekanntmachung", next: "q_ergaenzend", tone: "neg" },
        { label: "Bekanntmachung fehlt oder ist fehlerhaft", next: "q_ergaenzend", tone: "neg" }
      ]
    },

    q_ergaenzend: {
      station: "fehler",
      kind: "frage",
      norm: "§ 214 IV BauGB",
      title: "Wurde der Fehler durch ein ergänzendes Verfahren behoben?",
      text: "Das ursprüngliche Verfahren wird von der Stelle an fortgesetzt, an der der Fehler aufgetreten ist; der Plan kann auch rückwirkend in Kraft gesetzt werden. Ausnahme: Die Verhältnisse haben sich so grundlegend geändert, dass der Plan funktionslos wäre oder das Abwägungsergebnis nicht mehr haltbar ist.",
      options: [
        { label: "Ja, Fehler behoben und Plan (rückwirkend) in Kraft gesetzt", next: "q_erforderlich", tone: "warn" },
        { label: "Nein", next: "e_unwirksam_formell", tone: "neg" }
      ]
    },

    /* ================= C. Materielle Rechtmäßigkeit ================= */

    q_erforderlich: {
      station: "materiell",
      kind: "frage",
      norm: "§ 1 III 1 BauGB",
      title: "Ist der Plan für die städtebauliche Entwicklung erforderlich?",
      text: "Zwischenergebnis: Der Plan ist formell nicht zu beanstanden. ✓\n\nDie Gemeinde hat einen Beurteilungsspielraum, wann die Erforderlichkeit gegeben ist („sobald und soweit“ – Planungsgebot bei Erforderlichkeit, Planungsverbot bei fehlender Erforderlichkeit).",
      def: "<b>Keine Planrechtfertigung bei:</b> reiner Negativplanung (Festsetzungen nur wegen der ausschließenden Wirkung) · Planung ohne irgendwie nachvollziehbares Konzept · Festsetzungen nur im privaten Interesse.",
      options: [
        { label: "Ja, städtebaulich erforderlich", next: "q_rahmen", tone: "pos" },
        { label: "Nein (Negativplanung / kein Konzept / nur Privatinteresse)", next: "e_unwirksam_erforderlich", tone: "neg" }
      ]
    },

    q_rahmen: {
      station: "materiell",
      kind: "frage",
      norm: "§§ 1 IV, 8 II, 9, 2 II BauGB",
      title: "Hält der Plan den Planungsrahmen ein?",
      def: "<b>a) Anpassungsgebot:</b> an die Ziele der Raumordnung (§ 1 IV BauGB).<br><b>b) Entwicklungsgebot:</b> aus dem Flächennutzungsplan (§ 8 II 1 BauGB; Ausnahmen: § 8 II 2 isolierter B-Plan, § 8 III Parallelverfahren, § 8 IV vorzeitiger B-Plan; Beachtlichkeit: § 214 II BauGB).<br><b>c) Numerus clausus der Festsetzungen:</b> Nur die in § 9 I BauGB aufgeführten Festsetzungen sind zulässig – andere sind mangels Ermächtigungsgrundlage unwirksam. Jede Festsetzung muss planerisch gerechtfertigt sein (§ 1 III BauGB).<br><b>d) Interkommunales Abstimmungsgebot:</b> mit den Nachbargemeinden (§ 2 II BauGB).",
      options: [
        { label: "Ja, alle Vorgaben eingehalten", next: "q_abwaegung", tone: "pos" },
        { label: "Festsetzung ohne Grundlage in § 9 I BauGB", next: "e_unwirksam_rahmen", tone: "neg" },
        { label: "Verstoß gegen § 1 IV, § 8 II oder § 2 II BauGB", detail: "Beim Entwicklungsgebot Beachtlichkeit nach § 214 II BauGB prüfen", next: "e_unwirksam_rahmen", tone: "neg" }
      ]
    },

    q_abwaegung: {
      station: "materiell",
      kind: "frage",
      norm: "§ 1 VII BauGB",
      title: "Ist die Abwägung fehlerfrei (Gebot gerechter Abwägung)?",
      text: "Die Gemeinde hat planerische Gestaltungsfreiheit; das Gericht prüft nur, ob die rechtlichen Grenzen eingehalten sind. Einzubeziehen sind die generellen Planungsziele (§ 1 V), die konkreten Planungsleitlinien (§§ 1 VI, 1a) und private Belange.",
      def: "<b>Fehlertypen:</b> Bewertungsausfall, -defizit, -fehleinschätzung (als Ermittlungs-/Bewertungsfehler über § 2 III BauGB) · <b>Abwägungsdisproportionalität</b> (Ausgleich steht außer Verhältnis zum objektiven Gewicht der Belange) · Verstoß gegen das <b>Gebot der Konfliktbewältigung</b> (sich abzeichnende Konflikte werden ausgeklammert).<br><br><b>Merke:</b> Fehler im Abwägungs<u>ergebnis</u> sind immer beachtlich (Gegenschluss § 214 III 2 Hs. 2 BauGB) und können nicht nach § 215 I unbeachtlich werden (Gegenschluss § 215 I Nr. 3 BauGB).",
      options: [
        { label: "Ja, Abwägung fehlerfrei", next: "e_wirksam", tone: "pos" },
        { label: "Fehler im Abwägungsvorgang – durch ergänzendes Verfahren behoben", next: "e_wirksam", tone: "warn" },
        { label: "Fehler im Abwägungsergebnis", next: "e_unwirksam_abwaegung", tone: "neg" }
      ]
    },

    /* ================= D. Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 10 I BauGB",
      title: "Der Bebauungsplan ist wirksam",
      text: "Der Plan ist formell und materiell rechtmäßig (bzw. etwaige Fehler sind unbeachtlich oder geheilt). Vorhaben im Plangebiet beurteilen sich nach § 30 BauGB.\n\nRechtsschutz gegen den Plan: Normenkontrolle (§ 47 I Nr. 1 VwGO, Antrag binnen eines Jahres) oder Inzidentkontrolle im Einzelverfahren."
    },

    e_unwirksam_kern: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 214 I 1 Nr. 4 BauGB",
      title: "Unwirksam: kein Satzungsbeschluss",
      text: "Ohne (wirksamen) Satzungsbeschluss existiert kein Bebauungsplan – dieser Mangel ist stets beachtlich (§ 214 I 1 Nr. 4 BauGB).\n\nFolge: Die Zulässigkeit von Vorhaben richtet sich nach § 34 oder § 35 BauGB."
    },

    e_unwirksam_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 214, 215 BauGB",
      title: "Unwirksam: beachtlicher Verfahrens-/Formfehler",
      text: "Der Fehler ist beachtlich, wurde fristgerecht gerügt bzw. unterliegt nicht der Planerhaltung und wurde nicht durch ein ergänzendes Verfahren (§ 214 IV BauGB) behoben. Der Plan ist unwirksam.\n\nFolge: Die Zulässigkeit von Vorhaben richtet sich nach § 34 oder § 35 BauGB; ein ergänzendes Verfahren bleibt möglich."
    },

    e_unwirksam_erforderlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 III 1 BauGB",
      title: "Unwirksam: keine städtebauliche Erforderlichkeit",
      text: "Dem Plan fehlt die Planrechtfertigung (reine Negativplanung, kein nachvollziehbares Konzept oder nur private Interessen). Er ist materiell rechtswidrig und unwirksam."
    },

    e_unwirksam_rahmen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 1 IV, 8 II, 9, 2 II BauGB",
      title: "Unwirksam: Verstoß gegen den Planungsrahmen",
      text: "Der Plan verlässt den zulässigen Planungsrahmen – z. B. Festsetzung ohne Grundlage im numerus clausus des § 9 I BauGB, fehlende Anpassung an die Raumordnung oder Verstoß gegen das Entwicklungs- bzw. Abstimmungsgebot. Je nach Fehler kann ein ergänzendes Verfahren (§ 214 IV BauGB) in Betracht kommen; bei § 8 II BauGB ist die Beachtlichkeit nach § 214 II BauGB zu prüfen."
    },

    e_unwirksam_abwaegung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 VII BauGB",
      title: "Unwirksam: Fehler im Abwägungsergebnis",
      text: "Das Abwägungsergebnis ist fehlerhaft – solche Fehler sind immer beachtlich und können nicht präkludiert werden (Gegenschluss aus § 214 III 2 Hs. 2 und § 215 I Nr. 3 BauGB). Der Plan ist unwirksam; bei grundlegend geänderten Verhältnissen scheidet auch eine Heilung im ergänzenden Verfahren aus."
    }
  },

  routers: {}
});
