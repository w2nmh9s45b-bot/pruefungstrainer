/*
 * Prüfungsschema: Erfolgsaussichten der Verpflichtungsklage (§ 42 I Alt. 2 VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Erfolgsaussichten einer Verpflichtungsklage" (Dr. Konrad – inkl.
 *    Spruchreife-Exkurs für Mayener Klausuren)
 *  - "2.Verpflichtungsklage", "Verpflichtungsklage" (Weil)
 *  - Gesetze: VwGO §§ 40, 42, 68 II, 74, 75, 113 V (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-verpflichtungsklage",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Klagearten",
  title: "Verpflichtungsklage (§ 42 I Alt. 2 VwGO)",
  description: "Versagungsgegenklage und Untätigkeitsklage: Statthaftigkeit, Klagebefugnis nach der Möglichkeitstheorie, Vorverfahren (§ 68 II VwGO), Klagefrist und die Begründetheit nach § 113 V VwGO mit dem Klausurschwerpunkt Spruchreife (Vornahme- oder Bescheidungsurteil).",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "befugnis", label: "Klagebefugnis" },
    { id: "vorverfahren", label: "Vorverfahren & Frist" },
    { id: "begruendet", label: "Begründetheit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Klage hat Erfolg",
    neg: "Ergebnis: Klage ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 40 I 1 VwGO",
      title: "Ist der Verwaltungsrechtsweg eröffnet?",
      def: "Aufdrängende Spezialzuweisung (z. B. § 54 I BeamtStG) oder Generalklausel § 40 I 1 VwGO: öffentlich-rechtliche Streitigkeit nichtverfassungsrechtlicher Art ohne abdrängende Zuweisung.<br><br><b>Beachte:</b> Bei Subventionen und der Zulassung zu öffentlichen Einrichtungen gilt die <b>Zwei-Stufen-Theorie</b> – der Streit um das „Ob“ ist stets öffentlich-rechtlich.",
      options: [
        { label: "Ja", next: "q_statthaft", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_statthaft: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 42 I Alt. 2, § 88 VwGO",
      title: "Ist die Verpflichtungsklage statthaft?",
      def: "Statthaft, wenn der Kläger nach seinem Begehren (§ 88 VwGO) den <b>Erlass eines VA</b> begehrt:<br>• <b>Versagungsgegenklage:</b> der Antrag wurde abgelehnt,<br>• <b>Untätigkeitsklage</b> (i. V. m. § 75 VwGO): die Behörde hat nicht entschieden.<br><br>Der Kläger muss nicht Adressat des begehrten VA sein – auch der VA gegenüber einem Dritten kann begehrt werden (z. B. bauaufsichtliches Einschreiten gegen den Nachbarn; dann Befugnisproblem).<br><br><b>Abgrenzung:</b> Begehrt der Kläger schlichtes Verwaltungshandeln (Realakt), ist die allgemeine Leistungsklage statthaft.",
      options: [
        { label: "Ja, Erlass eines VA begehrt", next: "q_befugnis", tone: "pos" },
        { label: "Nein, Realakt begehrt → ALK", next: "e_alk_verweis", tone: "warn" }
      ]
    },

    q_befugnis: {
      station: "befugnis",
      kind: "frage",
      norm: "§ 42 II VwGO",
      title: "Ist der Kläger klagebefugt (Möglichkeitstheorie)?",
      def: "Der Kläger ist klagebefugt, wenn er durch die <b>Ablehnung oder Unterlassung</b> des VA möglicherweise in seinen Rechten verletzt ist – d. h. wenn ihm möglicherweise ein <b>Anspruch</b> auf den begehrten VA zusteht.<br><br><b>Vorgehen:</b><br>• mögliche Anspruchsgrundlage benennen (Gesetz, Zusicherung § 38 VwVfG, örV, Subventionsrichtlinie i. V. m. Art. 3 I GG, Grundrecht),<br>• feststellen, dass der Anspruch nicht von vornherein ausgeschlossen ist,<br>• der Anspruch auf <b>ermessensfehlerfreie Entscheidung</b> genügt!<br><br>Die Adressatentheorie gilt hier NICHT.",
      options: [
        { label: "Ja, Anspruch möglich", next: "q_vorverfahren", tone: "pos" },
        { label: "Nein, Anspruch von vornherein ausgeschlossen", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_vorverfahren: {
      station: "vorverfahren",
      kind: "frage",
      norm: "§ 68 II, § 74, § 75 VwGO",
      title: "Vorverfahren und Klagefrist gewahrt?",
      def: "<b>Vorverfahren (§ 68 II VwGO):</b> nur bei der VERSAGUNGSGEGENKLAGE erforderlich (Verpflichtungswiderspruch gegen den Ablehnungsbescheid); Ausnahmen wie bei der Anfechtungsklage.<br><b>Untätigkeitsklage (§ 75 VwGO):</b> zulässig ohne Vorverfahren, wenn über Antrag oder Widerspruch ohne zureichenden Grund in angemessener Frist (i. d. R. DREI Monate, § 75 S. 2) sachlich nicht entschieden ist – KEINE Klagefrist.<br><br><b>Klagefrist (§ 74 II, I VwGO):</b> ein Monat ab Zustellung des WS-Bescheids bzw. ab Bekanntgabe des Ablehnungsbescheids. Berechnung: § 57 II VwGO, § 222 ZPO, §§ 187 ff. BGB.<br><br><b>Klageerhebung:</b> §§ 81, 55a, 55d, 82 VwGO.<br><b>Rechtsschutzbedürfnis:</b> fehlt insbesondere, wenn noch KEIN ANTRAG bei der Behörde gestellt wurde (einfacherer Weg!).",
      options: [
        { label: "Ja, alles gewahrt (bzw. § 75 VwGO)", next: "q_agl", tone: "pos" },
        { label: "Kein vorheriger Antrag bei der Behörde", next: "e_unzulaessig_antrag", tone: "neg" },
        { label: "Vorverfahren fehlt / Frist versäumt", next: "e_unzulaessig_frist", tone: "neg" }
      ]
    },

    q_agl: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 113 V VwGO",
      title: "Begründetheit: Hat der Kläger einen Anspruch auf den VA?",
      text: "Obersatz: Die Verpflichtungsklage ist begründet, soweit die Ablehnung oder Unterlassung des VA rechtswidrig und der Kläger dadurch in seinen Rechten verletzt ist (§ 113 V VwGO). Das ist der Fall, wenn er einen Anspruch auf den begehrten VA hat. Passivlegitimation: Rechtsträger der Behörde, die für den Erlass zuständig ist (§ 78 I Nr. 1 VwGO analog).",
      def: "<b>Prüfung:</b><br>1. <b>Anspruchsgrundlage</b>,<br>2. <b>formelle Voraussetzungen</b> (i. d. R. nur: Antrag bei der zuständigen Behörde),<br>3. <b>materielle Voraussetzungen:</b> Tatbestand der AGL erfüllt?<br>4. <b>Rechtsfolge:</b><br>• <b>gebundener VA:</b> Tatbestand (+) → Anspruch, Ablehnung stets rechtswidrig,<br>• <b>Ermessens-VA:</b> grundsätzlich nur Anspruch auf ermessensfehlerfreie Entscheidung – Ablehnung rechtswidrig, soweit ein Ermessensfehler vorliegt; voller Anspruch nur bei Ermessensreduzierung auf Null.",
      options: [
        { label: "Gebundener Anspruch – Tatbestand erfüllt", next: "q_spruchreife", set: { gebunden: true }, tone: "pos" },
        { label: "Ermessen: Ablehnung ermessensfehlerhaft", next: "q_spruchreife", tone: "warn" },
        { label: "Kein Anspruch – Ablehnung rechtmäßig", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_spruchreife: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 113 V 1, 2 VwGO",
      title: "Ist die Sache spruchreif?",
      def: "<b>Spruchreife fehlt, wenn</b><br>• die Behörde auf Tatbestandsseite einen nicht voll überprüfbaren <b>Beurteilungsspielraum</b> hat,<br>• ihr auf Rechtsfolgenseite ein <b>Ermessensspielraum</b> verbleibt (kein Fall der Reduzierung auf Null) und/oder<br>• der Sachverhalt nicht vollständig ermittelt ist und das Gericht ihn nicht selbst aufklären kann.<br><br><b>Konsequenz:</b><br>• Spruchreife (+): <b>Vornahmeurteil</b> – Verpflichtung zum Erlass des VA (§ 113 V 1 VwGO),<br>• Spruchreife (–): <b>Bescheidungsurteil</b> – Verpflichtung zur Neubescheidung unter Beachtung der Rechtsauffassung des Gerichts (§ 113 V 2 VwGO).",
      hint: "Klausurhinweis (Mayen): Da der exakte Klageantrag meist nicht mitgeteilt ist, genügt es, am Ende kurz festzustellen, ob Spruchreife vorliegt und welche Konsequenz das für den Kläger hat.",
      options: [
        { label: "Ja – gebundene Entscheidung / Ermessensreduzierung auf Null", next: "e_vornahme", tone: "pos" },
        { label: "Nein – Spielraum der Behörde bleibt", next: "e_bescheidung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_vornahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 V 1 VwGO",
      title: "Klage begründet – Vornahmeurteil",
      text: "Der Kläger hat einen Anspruch auf den begehrten VA und die Sache ist spruchreif. Das Gericht spricht die Verpflichtung der Behörde aus, den beantragten VA zu erlassen (§ 113 V 1 VwGO).\n\nTenor: „Der Beklagte wird unter Aufhebung des Ablehnungsbescheides vom … in Gestalt des Widerspruchsbescheides vom … verpflichtet, dem Kläger die beantragte … zu erteilen.“"
    },

    e_bescheidung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Bescheidungsurteil",
      norm: "§ 113 V 2 VwGO",
      title: "Klage begründet – aber nur Bescheidungsurteil",
      text: "Die Ablehnung ist rechtswidrig (Ermessensfehler bzw. fehlerhafte Beurteilung) und verletzt den Kläger in seinen Rechten; mangels Spruchreife kann das Gericht die Behörde aber nur verpflichten, den Kläger unter Beachtung der Rechtsauffassung des Gerichts NEU ZU BESCHEIDEN (§ 113 V 2 VwGO).\n\nDie Behörde muss neu entscheiden – sie kann dabei (ermessensfehlerfrei!) auch erneut ablehnen."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 V VwGO",
      title: "Klage zulässig, aber unbegründet",
      text: "Die Voraussetzungen der Anspruchsgrundlage liegen nicht vor bzw. die Ablehnung ist ermessensfehlerfrei. Der Kläger hat keinen Anspruch auf den begehrten VA; die Klage wird abgewiesen (§ 154 I VwGO – Kosten trägt der Kläger)."
    },

    e_alk_verweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 43 II VwGO",
      title: "Kein VA begehrt → allgemeine Leistungsklage",
      text: "Das Begehren richtet sich auf schlichtes Verwaltungshandeln (Realakt – z. B. Auskunft, Zahlung, Unterlassen). Statthaft ist die allgemeine Leistungsklage – eigenes Schema."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I VwGO",
      title: "Klage unzulässig: kein Verwaltungsrechtsweg",
      text: "Die Streitigkeit ist nicht öffentlich-rechtlich oder anderweitig zugewiesen. Verweisung nach § 17a II GVG."
    },

    e_unzulaessig_befugnis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO",
      title: "Klage unzulässig: keine Klagebefugnis",
      text: "Ein Anspruch des Klägers auf den begehrten VA (auch nur auf ermessensfehlerfreie Entscheidung) ist offensichtlich und eindeutig ausgeschlossen – die Anspruchsnorm dient nicht einmal auch seinen Interessen."
    },

    e_unzulaessig_antrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Allg. Rechtsschutzbedürfnis",
      title: "Klage unzulässig: kein vorheriger Antrag",
      text: "Der Kläger hat den begehrten VA noch nicht einmal bei der Behörde beantragt. Der Antrag bei der Behörde ist der einfachere Weg – das allgemeine Rechtsschutzbedürfnis fehlt."
    },

    e_unzulaessig_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 68 II, 74 II VwGO",
      title: "Klage unzulässig: Vorverfahren/Frist",
      text: "Das erforderliche Widerspruchsverfahren gegen den Ablehnungsbescheid fehlt oder die Klagefrist des § 74 II, I VwGO ist versäumt. Der Ablehnungsbescheid wird bestandskräftig; ein erneuter Sachantrag bei der Behörde bleibt aber möglich."
    }
  },

  routers: {}
});
