/*
 * Prüfungsschema: Erfolgsaussichten der Anfechtungsklage (§ 42 I Alt. 1 VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema Anfechtungsklage" (vollständiges Klausurschema inkl.
 *    Klagegegenstand § 79, Vorverfahren, Drittanfechtung, Aufsichtsklage § 17 AGVwGO)
 *  - "Erfolgsaussichten einer Anfechtungsklage" (Dr. Konrad), "1. Anfechtungsklage" (Weil)
 *  - Gesetze: VwGO §§ 40, 42, 68 ff., 74, 78, 79, 81, 82, 113; AGVwGO §§ 6, 17
 *    (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-anfechtungsklage",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Klagearten",
  title: "Anfechtungsklage (§ 42 I Alt. 1 VwGO)",
  description: "Vollprüfung der Erfolgsaussichten: Verwaltungsrechtsweg, Statthaftigkeit mit Klagegegenstand (§ 79 VwGO), Klagebefugnis (Adressaten-/Schutznormtheorie), erfolgloses Vorverfahren, Klagefrist, Klageerhebung und Begründetheit nach § 113 I 1 VwGO – inkl. Drittanfechtung.",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "befugnis", label: "Klagebefugnis" },
    { id: "vorverfahren", label: "Vorverfahren" },
    { id: "frist", label: "Frist & Form" },
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
      text: "Obersatz: Die Anfechtungsklage hat Aussicht auf Erfolg, wenn sie zulässig und begründet ist.",
      def: "<b>Zuerst:</b> aufdrängende Spezialzuweisung (z. B. § 54 I BeamtStG)?<br><b>Sonst Generalklausel § 40 I 1 VwGO – drei Voraussetzungen:</b><br>• <b>öffentlich-rechtliche Streitigkeit:</b> die streitentscheidende Norm berechtigt/verpflichtet ausschließlich einen Hoheitsträger (mod. Subjektstheorie),<br>• <b>nichtverfassungsrechtlicher Art</b> (keine doppelte Verfassungsunmittelbarkeit),<br>• <b>keine abdrängende Sonderzuweisung</b> (z. B. § 217 I BauGB → ordentliche Gerichte, § 68 OWiG → Amtsgericht, § 40 II VwGO für Amtshaftung).",
      options: [
        { label: "Ja, Verwaltungsrechtsweg eröffnet", next: "q_statthaft", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_statthaft: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 42 I Alt. 1, § 88, § 79 VwGO",
      title: "Ist die Anfechtungsklage statthaft?",
      def: "Statthaft, wenn der Kläger nach seinem <b>Klagebegehren</b> (§ 88 VwGO) die <b>Aufhebung eines VA</b> (§ 35 VwVfG) begehrt.<br><br><b>Klagegegenstand (§ 79 VwGO):</b><br>• <b>Regelfall (§ 79 I Nr. 1):</b> der Ausgangsbescheid in GESTALT des Widerspruchsbescheids,<br>• § 79 I Nr. 2: der Abhilfe-/Widerspruchsbescheid, wenn ERSTMALIG eine Beschwer enthält,<br>• § 79 II: isolierte Anfechtung des WS-Bescheids bei zusätzlicher selbständiger Beschwer.<br><br><b>Sonderfragen:</b> Nichtiger VA – nach h. M. anfechtbar (Rechtsschein); Nebenbestimmungen – isolierte Anfechtung nach h. M. möglich, wenn trennbar; Verfahrenshandlungen – § 44a VwGO (–).",
      options: [
        { label: "Ja, Aufhebung eines (wirksamen) VA begehrt", next: "q_befugnis", tone: "pos" },
        { label: "Nein, kein VA / anderes Begehren", next: "e_unzulaessig_statthaft", tone: "neg" },
        { label: "VA hat sich bereits erledigt", detail: "→ Fortsetzungsfeststellungsklage (eigenes Schema)", next: "e_ffk_verweis", tone: "warn" }
      ]
    },

    q_befugnis: {
      station: "befugnis",
      kind: "frage",
      norm: "§ 42 II VwGO",
      title: "Ist der Kläger klagebefugt?",
      def: "Der Kläger muss geltend machen, durch den VA möglicherweise in einem <b>subjektiv-öffentlichen Recht</b> verletzt zu sein (Möglichkeitstheorie).<br><br>• <b>Adressatentheorie:</b> Der Adressat eines belastenden VA ist möglicherweise zumindest in Art. 2 I GG verletzt → stets klagebefugt.<br>• <b>Schutznormtheorie (Dritte, z. B. Nachbar):</b> Die als verletzt gerügte Norm muss zumindest auch den Individualinteressen des Dritten zu dienen bestimmt sein und der Kläger muss zum geschützten Personenkreis gehören (z. B. Abstandsflächen § 8 LBauO).",
      options: [
        { label: "Ja, Adressat des belastenden VA", next: "q_vorverfahren", tone: "pos" },
        { label: "Ja, Dritter mit möglicher Schutznormverletzung", next: "q_vorverfahren", set: { dritter: true }, tone: "pos" },
        { label: "Nein, Rechtsverletzung ausgeschlossen", next: "e_unzulaessig_befugnis", tone: "neg" }
      ]
    },

    q_vorverfahren: {
      station: "vorverfahren",
      kind: "frage",
      norm: "§ 68 I VwGO",
      title: "Wurde das Vorverfahren ordnungsgemäß und erfolglos durchgeführt?",
      def: "Vor der Anfechtungsklage ist grundsätzlich ein <b>Widerspruchsverfahren</b> durchzuführen (§ 68 I VwGO).<br><br><b>Entbehrlich u. a.:</b><br>• gesetzliche Ausnahme (§ 68 I 2 VwGO: Gesetz, oberste Landes-/Bundesbehörde, erstmalige Beschwer im WS-Bescheid),<br>• <b>Untätigkeitsklage (§ 75 VwGO):</b> über den Widerspruch ist ohne zureichenden Grund in angemessener Frist (i. d. R. drei Monate) sachlich nicht entschieden,<br>• rügeloses Einlassen des Beklagten (str.), VA auf Weisung der WS-Behörde.<br><br><b>Ordnungsgemäß:</b> form- und fristgerechter Widerspruch (§ 70 VwGO).<br><b>Erfolglos:</b> zurückweisender WS-Bescheid wurde zugestellt.",
      hint: "Sonderfälle: Verfristeter WS zu Recht zurückgewiesen → Klage unzulässig. Entscheidet die WS-Behörde trotz unzulässigen WS in der Sache, ist die Klage grds. zulässig – Ausnahme: Rechte Dritter betroffen oder Selbstverwaltungsangelegenheit (§ 6 II AGVwGO).",
      options: [
        { label: "Ja, ordnungsgemäß und erfolglos", next: "q_frist", tone: "pos" },
        { label: "Vorverfahren entbehrlich / Untätigkeitsklage", next: "q_frist", tone: "warn" },
        { label: "Nein, fehlt und nicht entbehrlich", detail: "Nachholung möglich, solange WS-Frist läuft", next: "e_unzulaessig_vorverfahren", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§ 74 I VwGO",
      title: "Wurden Klagefrist und Klageform gewahrt?",
      def: "<b>Klagefrist (§ 74 I VwGO):</b> ein Monat ab Zustellung des WS-Bescheids (S. 1); ohne erforderliches Vorverfahren ein Monat ab Bekanntgabe des VA (S. 2). Berechnung: § 57 II VwGO, § 222 ZPO, §§ 187 ff. BGB.<br>• Jahresfrist bei fehlender/unrichtiger Rechtsbehelfsbelehrung (§ 58 II VwGO),<br>• keine Frist bei der Untätigkeitsklage,<br>• Wiedereinsetzung nach § 60 VwGO (Antrag binnen zwei Wochen).<br><br><b>Klageerhebung (§§ 81, 82 VwGO):</b> schriftlich oder zu Protokoll des Urkundsbeamten; elektronisch nach § 55a VwGO (Pflicht für Anwälte/Behörden: § 55d VwGO). Mindestinhalt: Kläger, Beklagter (Rechtsträger! § 78 I Nr. 1 VwGO), Gegenstand des Klagebegehrens; Nachholung nach § 82 II VwGO.<br><br>Außerdem: allgemeines Rechtsschutzbedürfnis, Beteiligten-/Prozessfähigkeit (§§ 61, 62 VwGO).",
      options: [
        { label: "Ja, Frist und Form gewahrt", next: "q_begruendet_rw", tone: "pos" },
        { label: "Nein, Klagefrist versäumt", next: "e_unzulaessig_frist", tone: "neg" }
      ]
    },

    q_begruendet_rw: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 113 I 1 VwGO",
      title: "Begründetheit: Ist der VA rechtswidrig?",
      text: "Obersatz: Die Anfechtungsklage ist begründet, soweit der VA rechtswidrig und der Kläger dadurch in seinen Rechten verletzt ist (§ 113 I 1 VwGO). Passivlegitimation: Die Klage richtet sich gegen den Rechtsträger der Behörde, die den VA erlassen hat (§ 78 I Nr. 1 VwGO); bei isolierter Anfechtung des WS-Bescheids gegen den Rechtsträger der WS-Behörde (§ 78 II VwGO).",
      def: "<b>Prüfprogramm (Details im Schema „Rechtmäßigkeit eines VA“):</b><br>1. Ermächtigungsgrundlage,<br>2. formelle Rechtmäßigkeit (Zuständigkeit, Verfahren, Form – Fehlerfolgen §§ 44–46 VwVfG!),<br>3. materielle Rechtmäßigkeit (Tatbestand, Rechtsfolge: gebunden/Ermessen § 114 VwGO, VHM).<br><br>Maßgeblicher Zeitpunkt: grundsätzlich die letzte Behördenentscheidung (Erlass des WS-Bescheids); bei Dauer-VA die mündliche Verhandlung.",
      options: [
        { label: "VA rechtswidrig", next: "@verletzung", tone: "pos" },
        { label: "VA rechtmäßig", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_verletzung_adressat: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 113 I 1 VwGO",
      title: "Rechtsverletzung des Klägers (Adressat)?",
      def: "Der Adressat eines rechtswidrigen belastenden VA ist regelmäßig in seinen Rechten verletzt – zumindest in der allgemeinen Handlungsfreiheit (Art. 2 I GG). Ausnahme: Der Fehler ist nach § 46 VwVfG unbeachtlich – dann besteht kein Aufhebungsanspruch.",
      options: [
        { label: "Ja, Rechtsverletzung liegt vor", next: "e_begruendet", tone: "pos" },
        { label: "Nein, Fehler unbeachtlich (§ 46 VwVfG)", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_verletzung_dritter: {
      station: "begruendet",
      kind: "frage",
      norm: "Schutznormtheorie",
      title: "Rechtsverletzung des Dritten: drittschützende Norm verletzt?",
      def: "Bei der <b>Drittanfechtung</b> (z. B. Nachbarklage gegen Baugenehmigung) genügt die objektive Rechtswidrigkeit NICHT: Verletzt sein muss gerade eine Norm, die auch den Schutz des Klägers bezweckt, und er muss zum geschützten Personenkreis gehören.<br><br><b>Prozessual beachten:</b> notwendige Beiladung des Begünstigten (§ 65 II VwGO); ggf. Verwirkung des Klagerechts bei langem Zuwarten trotz Kenntnis.",
      options: [
        { label: "Ja, drittschützende Norm verletzt", next: "e_begruendet", tone: "pos" },
        { label: "Nein, nur objektive Rechtswidrigkeit", next: "e_unbegruendet_drittschutz", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 I 1 VwGO",
      title: "Anfechtungsklage zulässig und begründet",
      text: "Der angefochtene VA ist rechtswidrig und verletzt den Kläger in seinen Rechten. Das Verwaltungsgericht hebt den VA und den Widerspruchsbescheid auf (§ 113 I 1 VwGO).\n\nIst der VA bereits vollzogen, kann das Gericht auf Antrag auch aussprechen, wie die Vollziehung rückgängig zu machen ist (§ 113 I 2 VwGO – Vollzugsfolgenbeseitigung).\n\nKosten: Der Beklagte trägt die Kosten des Verfahrens (§ 154 I VwGO)."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 I 1 VwGO",
      title: "Klage zulässig, aber unbegründet",
      text: "Der VA ist rechtmäßig (oder der Aufhebungsanspruch nach § 46 VwVfG ausgeschlossen) – der Kläger ist nicht in seinen Rechten verletzt. Die Klage wird abgewiesen; der Kläger trägt die Kosten (§ 154 I VwGO)."
    },

    e_unbegruendet_drittschutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schutznormtheorie",
      title: "Drittanfechtung unbegründet: kein Drittschutz",
      text: "Der VA mag objektiv rechtswidrig sein – verletzt ist aber keine Norm, die gerade den Kläger schützt. Die Nachbar-/Drittklage bleibt ohne Erfolg."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I VwGO",
      title: "Klage unzulässig: kein Verwaltungsrechtsweg",
      text: "Die Streitigkeit gehört nicht vor die Verwaltungsgerichte. Das Gericht verweist den Rechtsstreit nach § 17a II GVG an das zuständige Gericht des zulässigen Rechtswegs."
    },

    e_unzulaessig_statthaft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 I VwGO",
      title: "Klage unzulässig: Anfechtungsklage nicht statthaft",
      text: "Es fehlt an einem aufhebbaren VA. Je nach Begehren kommen Verpflichtungsklage (Erlass eines VA), allgemeine Leistungsklage (Realakt), Feststellungsklage (§ 43 VwGO) oder Normenkontrolle (§ 47 VwGO) in Betracht – eigene Schemata."
    },

    e_ffk_verweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 113 I 4 VwGO",
      title: "Erledigung → Fortsetzungsfeststellungsklage",
      text: "Hat sich der VA erledigt (Aufhebung, Zeitablauf, Vollzug, Wegfall des Regelungsobjekts), geht die Anfechtungsklage ins Leere. Statthaft ist die Fortsetzungsfeststellungsklage nach § 113 I 4 VwGO (ggf. analog) – eigenes Schema mit den vier Konstellationen."
    },

    e_unzulaessig_befugnis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO",
      title: "Klage unzulässig: keine Klagebefugnis",
      text: "Eine Verletzung eigener subjektiv-öffentlicher Rechte des Klägers ist offensichtlich und eindeutig nach jeder Betrachtungsweise ausgeschlossen (Popularklage). Die Klage wird als unzulässig abgewiesen."
    },

    e_unzulaessig_vorverfahren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 68 VwGO",
      title: "Klage unzulässig: Vorverfahren fehlt",
      text: "Das erforderliche Widerspruchsverfahren wurde nicht (ordnungsgemäß und erfolglos) durchgeführt. Die Klage ist unzulässig; der Widerspruch kann aber nachgeholt werden, solange die Widerspruchsfrist noch läuft."
    },

    e_unzulaessig_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 74 I VwGO",
      title: "Klage unzulässig: Klagefrist versäumt",
      text: "Die Monatsfrist des § 74 I VwGO (bzw. die Jahresfrist des § 58 II VwGO) ist abgelaufen und Wiedereinsetzung (§ 60 VwGO) kommt nicht in Betracht. Der VA ist bestandskräftig; es bleibt nur die Anregung einer Aufhebung nach §§ 48, 49 VwVfG oder das Wiederaufgreifen nach § 51 VwVfG."
    }
  },

  routers: {
    /* Rechtsverletzung: Adressat oder Dritter (Drittanfechtung) */
    "@verletzung": function (flags) {
      return flags.dritter ? "q_verletzung_dritter" : "q_verletzung_adressat";
    }
  }
});
