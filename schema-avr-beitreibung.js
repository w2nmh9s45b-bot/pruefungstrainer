/*
 * Prüfungsschema: Beitreibung von Geldforderungen (LVwVG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema Beitreibung" (Weil – formelle/materielle Rechtmäßigkeit
 *    des Vollstreckungsakts)
 *  - "FS II – 8. Vollstreckung von Geldleistungen nach dem LVwVG",
 *    "2.2.2 Uebersicht Vollstreckung-Beitreibung", "Beitreibung von Forderungen"
 *  - Gesetze: LVwVG §§ 2, 4, 19, 21, 22, 31, 33, 34, 43, 48, 55, 59 ff.;
 *    VwVfG § 28 II Nr. 5 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-beitreibung",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Verwaltungsvollstreckung",
  title: "Beitreibung von Geldforderungen (LVwVG)",
  description: "Vollstreckung öffentlich-rechtlicher Geldforderungen in RLP: Zuständigkeit von Vollstreckungsbehörde und Kasse, allgemeine Voraussetzungen (vollstreckbarer VA, § 2 LVwVG), besondere Voraussetzungen (Fälligkeit, Schonfrist, Mahnung, § 22 LVwVG) und die Durchführung in Sachen, Forderungen und Grundstücke.",
  start: "start",
  stations: [
    { id: "formell", label: "Zuständigkeit" },
    { id: "allg", label: "Allg. Voraussetzungen" },
    { id: "besond", label: "Bes. Voraussetzungen" },
    { id: "durchf", label: "Durchführung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Beitreibung rechtmäßig",
    neg: "Ergebnis: Beitreibung rechtswidrig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "formell",
      kind: "frage",
      norm: "§ 4 II, § 19 I LVwVG",
      title: "Handelt die zuständige Vollstreckungsbehörde?",
      text: "Obersatz: Die Beitreibung hat Aussicht auf Erfolg, wenn der Vollstreckungsakt formell und materiell rechtmäßig ist.",
      def: "<b>Formelle Rechtmäßigkeit:</b><br>• <b>Vollstreckungsbehörde</b> ist die Behörde, die den VA erlassen hat (§ 4 II LVwVG),<br>• bei <b>Geldforderungen</b> werden ihre Befugnisse grundsätzlich von ihrer <b>KASSE</b> wahrgenommen (§ 19 I 1 LVwVG),<br>• <b>Verfahren:</b> Eine Anhörung ist nicht erforderlich – § 28 II Nr. 5 VwVfG (Maßnahmen der Verwaltungsvollstreckung)!",
      options: [
        { label: "Ja, Vollstreckungsbehörde/Kasse zuständig", next: "q_allg", tone: "pos" },
        { label: "Nein, unzuständige Stelle", next: "e_rw_formell", tone: "neg" }
      ]
    },

    q_allg: {
      station: "allg",
      kind: "frage",
      norm: "§ 1, § 2 LVwVG",
      title: "Liegen die allgemeinen Vollstreckungsvoraussetzungen vor?",
      def: "<b>1. Wirksamer VA, der auf eine GELDLEISTUNG gerichtet ist</b> (Leistungsbescheid – z. B. Gebühren-, Beitrags-, Kostenbescheid). Der VA ist der Vollstreckungstitel; auf seine Rechtmäßigkeit kommt es NICHT an – Wirksamkeit genügt (§ 43 VwVfG)!<br><br><b>2. Vollstreckbarkeit (§ 2 LVwVG):</b> Der VA darf vollstreckt werden, wenn er<br>• <b>unanfechtbar</b> geworden ist (Bestandskraft) oder<br>• ein Rechtsbehelf <b>keine aufschiebende Wirkung</b> hat (§ 80 II VwGO – bei öffentlichen Abgaben und Kosten kraft Gesetzes, § 80 II 1 Nr. 1 VwGO!) oder<br>• die <b>sofortige Vollziehung</b> angeordnet ist.",
      options: [
        { label: "Wirksamer Geldleistungs-VA, vollstreckbar", next: "q_besond", tone: "pos" },
        { label: "VA nicht wirksam / nicht vollstreckbar (aW!)", next: "e_rw_allg", tone: "neg" },
        { label: "Keine Geldforderung, sondern Handlung/Duldung/Unterlassung", next: "e_handlung", tone: "warn" }
      ]
    },

    q_besond: {
      station: "besond",
      kind: "frage",
      norm: "§ 22 LVwVG",
      title: "Liegen die besonderen Voraussetzungen für den Beginn vor?",
      def: "<b>Besondere Voraussetzungen (§ 22 LVwVG):</b><br>• <b>Fälligkeit</b> der Leistung (§ 22 I Nr. 1),<br>• <b>Schonfrist:</b> Ablauf einer Frist von EINER WOCHE seit Bekanntgabe des VA bzw. seit Eintritt der Fälligkeit (§ 22 I Nr. 2),<br>• <b>MAHNUNG</b> mit einwöchiger Zahlungsfrist (§ 22 II LVwVG) und deren Ablauf; die Mahnung ist Vollstreckungsvoraussetzung (kein VA).<br><br>Dazu die <b>Vollstreckungsanordnung (§ 21 LVwVG):</b> interner Auftrag der Gläubigerbehörde an die Vollstreckungsbehörde – ebenfalls kein VA.",
      options: [
        { label: "Fälligkeit, Schonfrist und Mahnung (+)", next: "q_durchf", tone: "pos" },
        { label: "Mahnung fehlt / Fristen nicht abgelaufen", next: "e_rw_besond", tone: "neg" }
      ]
    },

    q_durchf: {
      station: "durchf",
      kind: "frage",
      norm: "§§ 31 ff., 43 ff., 59 ff. LVwVG",
      title: "In welches Vermögen wird vollstreckt?",
      def: "<b>Vollstreckung in bewegliche SACHEN (§§ 31 ff. LVwVG):</b><br>• Pfändung durch Inbesitznahme (§ 31 I) oder Anbringen eines Pfandsiegels (§ 31 II),<br>• Verwertung durch öffentliche Versteigerung (§ 34),<br>• Grenzen: unpfändbare Sachen (§ 33 LVwVG i. V. m. §§ 811 ff. ZPO).<br><br><b>Vollstreckung in FORDERUNGEN und Rechte (§§ 43 ff. LVwVG):</b><br>• <b>Pfändungsverfügung</b> (§ 43): Zahlungsverbot an den Drittschuldner, Einziehungsverbot an den Schuldner (VA!),<br>• <b>Überweisungsverfügung</b> (§ 48): die gepfändete Forderung wird zur Einziehung überwiesen,<br>• Grenzen: Pfändungsschutz für Arbeitseinkommen (§ 55 LVwVG i. V. m. §§ 850 ff. ZPO).<br><br><b>Vollstreckung in das UNBEWEGLICHE Vermögen (§§ 59 ff. LVwVG):</b> Sicherungshypothek, Zwangsversteigerung, Zwangsverwaltung (über das Amtsgericht).",
      options: [
        { label: "Durchführung ordnungsgemäß, keine Hindernisse", next: "e_rechtmaessig", tone: "pos" },
        { label: "Unpfändbare Sachen / Pfändungsfreigrenzen verletzt", next: "e_rw_durchf", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "LVwVG",
      title: "Beitreibung rechtmäßig",
      text: "Alle Vollstreckungsvoraussetzungen liegen vor: zuständige Vollstreckungsbehörde/Kasse, wirksamer und vollstreckbarer Geldleistungs-VA, Fälligkeit, Schonfrist und Mahnung sowie ordnungsgemäße Durchführung. Die Beitreibung kann durchgeführt werden.\n\nRechtsschutz des Schuldners: Einwendungen gegen den GRUND-VA sind präkludiert, wenn er bestandskräftig ist; gegen Vollstreckungs-VA (z. B. Pfändungsverfügung) sind Widerspruch und Anfechtungsklage statthaft; Vollstreckungsschutz nach § 24 LVwVG; bei nachträglichen materiellen Einwendungen (Zahlung, Erlass, Stundung) ist die Vollstreckung einzustellen (§ 23 LVwVG entspr. Rechtsgedanke)."
    },

    e_rw_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 4 II, § 19 LVwVG",
      title: "Beitreibung rechtswidrig: Zuständigkeitsfehler",
      text: "Die Vollstreckung wurde nicht von der zuständigen Vollstreckungsbehörde bzw. deren Kasse betrieben. Der Vollstreckungsakt ist formell rechtswidrig und auf Rechtsbehelf hin aufzuheben."
    },

    e_rw_allg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 LVwVG",
      title: "Beitreibung rechtswidrig: keine Vollstreckbarkeit",
      text: "Es fehlt an einem wirksamen, vollstreckbaren Geldleistungs-VA – etwa weil der VA nicht (wirksam) bekannt gegeben wurde oder ein Rechtsbehelf aufschiebende Wirkung entfaltet und keine sofortige Vollziehung angeordnet ist. Die Vollstreckung darf nicht beginnen bzw. ist einzustellen."
    },

    e_rw_besond: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 LVwVG",
      title: "Beitreibung rechtswidrig: Beginn-Voraussetzungen fehlen",
      text: "Fälligkeit, die einwöchige Schonfrist oder die Mahnung mit Fristablauf (§ 22 LVwVG) fehlen. Die dennoch begonnene Vollstreckung ist rechtswidrig; bereits ergangene Vollstreckungsakte sind aufzuheben."
    },

    e_rw_durchf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 33, § 55 LVwVG i. V. m. ZPO",
      title: "Beitreibung rechtswidrig: Vollstreckungshindernis",
      text: "Die Durchführung verstößt gegen Pfändungsverbote (unpfändbare Sachen, § 33 LVwVG i. V. m. §§ 811 ff. ZPO) oder Pfändungsfreigrenzen (§ 55 LVwVG i. V. m. §§ 850–852 ZPO). Der Vollstreckungsakt ist insoweit rechtswidrig und aufzuheben."
    },

    e_handlung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 61 ff. LVwVG",
      title: "Keine Geldforderung → Zwangsmittel nach §§ 61 ff. LVwVG",
      text: "Die Erzwingung von Handlungen, Duldungen oder Unterlassungen erfolgt nicht durch Beitreibung, sondern mit den Zwangsmitteln des Verwaltungszwangs (§§ 61 ff. LVwVG): Ersatzvornahme, Zwangsgeld, unmittelbarer Zwang – jeweils nach schriftlicher Androhung (§ 66 LVwVG, Zustellung!) und Festsetzung. Grundsätze: vorherige Androhung, Verhältnismäßigkeit bei der Wahl des Zwangsmittels (§ 62 LVwVG)."
    }
  },

  routers: {}
});
