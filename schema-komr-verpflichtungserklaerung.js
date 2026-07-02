/*
 * Prüfungsschema: Verpflichtungserklärungen (§ 49 GemO)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR - FS_III - LE 8 - OLE 1 - Verpflichtungserklaerungen § 49 GemO" (Schäfer)
 *  - Gesetze: GemO RLP §§ 49, 68 I 3 Nr. 3, 105 VI (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-verpflichtungserklaerung",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Organ Bürgermeister",
  title: "Verpflichtungserklärung, § 49 GemO",
  description: "Wirksamkeit von Erklärungen, durch die die Gemeinde verpflichtet werden soll: Anwendungsbereich, zuständige Personen, Formerfordernisse (Schriftform, Unterschrift, Amtsbezeichnung) und die Folgen eines Verstoßes (schwebende Unwirksamkeit, §§ 177 ff. BGB).",
  start: "start",
  stations: [
    { id: "anwendung", label: "Anwendungsbereich" },
    { id: "person", label: "Erklärender" },
    { id: "form", label: "Form" },
    { id: "folge", label: "Rechtsfolge" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Erklärung wirksam",
    neg: "Ergebnis: Erklärung (schwebend) unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "anwendung",
      kind: "frage",
      norm: "§ 49 I GemO",
      title: "Soll die Gemeinde durch die Erklärung verpflichtet werden?",
      text: "§ 49 GemO gilt für alle ein- und zweiseitig die Gemeinde VERPFLICHTENDEN Rechtsgeschäfte des öffentlichen und des privaten Rechts – nicht für dingliche Rechtsgeschäfte. Sinn und Zweck: Schutz der Gemeinde vor unüberlegten, übereilten Erklärungen des Außenvertretungsorgans und Beweisfunktion (BGH NJW 1980, 118; 1984, 606). Es ist eine im rein öffentlichen Interesse liegende Schutznorm – kein Drittschutz.",
      def: "<b>Anwendungsfälle (+):</b> Bauvertrag, öffentlich-rechtlicher Vertrag mit Leistungspflicht der Gemeinde, Zuschusszusage an einen Verein, Grundstücksreservierungszusage, Vereinsbeitritt (Beitragspflicht), Anträge auf Bundes-/Landeszuweisungen, Ausübung des Vorkaufsrechts (§§ 24 ff. BauGB).<br><b>Nicht anwendbar (–):</b> Verwaltungsakte, Einlegung von Rechtsbehelfen, Kredite zur Liquiditätssicherung (§ 105 VI GemO), Verfügungen (Aufrechnung, Erlass, Stundung – ändern nur ein Recht, begründen keine neue Pflicht).",
      hint: "In Zweifelsfällen § 49 GemO anwenden – so vermeidest du schwebend unwirksame Erklärungen.",
      options: [
        { label: "Ja, verpflichtende Erklärung", next: "q_bagatelle", tone: "pos" },
        { label: "Nein (VA, Rechtsbehelf, Verfügung, dingliches Geschäft)", next: "e_nicht_anwendbar", tone: "neutral" }
      ]
    },

    q_bagatelle: {
      station: "anwendung",
      kind: "frage",
      norm: "§ 49 III GemO",
      title: "Greift die Bagatellausnahme des § 49 III GemO?",
      text: "Die Form- und Zuständigkeitsanforderungen der Absätze 1 und 2 gelten NICHT für Erklärungen in Geschäften der laufenden Verwaltung, die für die Gemeinde finanziell unerheblich sind.",
      def: "<b>Beide Voraussetzungen kumulativ:</b> Geschäft der laufenden Verwaltung (Regelmäßigkeit und Häufigkeit, „eingefahrene Gleise“) UND finanzielle Unerheblichkeit (relativ zur Gemeindegröße).",
      options: [
        { label: "Ja, laufende Verwaltung + finanziell unerheblich", next: "e_formfrei", tone: "pos" },
        { label: "Nein", next: "q_person", tone: "neutral" }
      ]
    },

    q_person: {
      station: "person",
      kind: "frage",
      norm: "§ 49 I 2, II GemO",
      title: "Wer hat die Erklärung abgegeben?",
      def: "<b>Zur Abgabe berechtigt:</b><br>• der <b>Bürgermeister</b>,<br>• der zur allgemeinen Vertretung berufene <b>Beigeordnete</b> (Abwesenheitsvertreter),<br>• ein <b>ständiger Vertreter</b> innerhalb seines Geschäftsbereichs (ergänzt, verdrängt aber nicht die Zuständigkeit des BM),<br>• ein <b>Bevollmächtigter</b> – die Vollmacht muss ihrerseits in der Form des § 49 I 2 GemO erteilt sein (§ 49 II GemO)!<br><b>Ortsgemeinden:</b> Die Unterzeichnung ist KEIN Verwaltungsgeschäft der VG-Verwaltung (§ 68 I 3 Nr. 3 GemO) – es unterzeichnet der Ortsbürgermeister.",
      options: [
        { label: "BM / allgemeiner Vertreter / ständiger Vertreter im Geschäftsbereich", next: "q_form", tone: "pos" },
        { label: "Bevollmächtigter mit formgerechter Vollmacht", next: "q_form", tone: "pos" },
        { label: "Andere Person (z. B. Amtsleiter ohne formgerechte Vollmacht)", next: "e_unwirksam_person", tone: "neg" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "§ 49 I GemO",
      title: "Sind die Formerfordernisse gewahrt?",
      def: "<b>Erforderlich (§ 49 I 1, 2 GemO):</b><br>• <b>Schriftform</b>,<br>• <b>handschriftliche Unterzeichnung</b> des Berechtigten (bloßes Handzeichen genügt nicht) ODER elektronische Form mit dauerhaft überprüfbarer qualifizierter elektronischer Signatur,<br>• <b>Beifügung der Amtsbezeichnung</b>.<br><b>Ausnahme (§ 49 I 3):</b> Bei gerichtlicher oder notarieller Beurkundung ist die Amtsbezeichnung entbehrlich (ebenso beim gerichtlichen Vergleich).",
      options: [
        { label: "Ja, Form gewahrt", next: "e_wirksam", tone: "pos" },
        { label: "Nein, Formmangel", detail: "z. B. mündliche Zusage, fehlende Amtsbezeichnung", next: "q_genehmigung", tone: "neg" }
      ]
    },

    q_genehmigung: {
      station: "folge",
      kind: "frage",
      norm: "§§ 177 ff. BGB (analog)",
      title: "Wurde die schwebend unwirksame Erklärung nachträglich genehmigt?",
      text: "Wegen Art. 55 EGBGB kann § 49 GemO für privatrechtliches Handeln keine Formvorschrift i. S. d. § 125 BGB sein. Der BGH versteht Bestimmungen wie § 49 GemO daher als landesrechtliche BESCHRÄNKUNG DER VERTRETUNGSMACHT der Organe.",
      def: "<b>Folge des Verstoßes:</b><br>• <b>privatrechtliche</b> Erklärung: wie ein Handeln des Vertreters ohne Vertretungsmacht – <b>schwebend unwirksam</b> nach §§ 177 ff. BGB (nicht nichtig nach § 125 BGB),<br>• <b>öffentlich-rechtliche</b> Erklärung: § 49 ist hier zugleich Formvorschrift; über § 59 I VwVfG werden aber ebenfalls §§ 177 ff. BGB analog angewendet.<br><b>Genehmigung:</b> durch das zuständige Organ (regelmäßig Ratsbeschluss + formgerechte Neuvornahme/Bestätigung durch den BM).",
      options: [
        { label: "Ja, genehmigt", next: "e_genehmigt", tone: "pos" },
        { label: "Nein, Genehmigung verweigert oder nicht erteilt", next: "e_unwirksam_form", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 49 I GemO",
      title: "Verpflichtungserklärung wirksam",
      text: "Die Erklärung wurde von einer zeichnungsberechtigten Person in der Form des § 49 I GemO abgegeben (Schriftform, handschriftliche Unterschrift bzw. qualifizierte elektronische Signatur, Amtsbezeichnung). Die Gemeinde ist wirksam verpflichtet.\n\nMerke: Eine Verletzung nur INTERNER Zuständigkeiten (z. B. fehlender Ratsbeschluss vor Vertragsschluss) berührt die Wirksamkeit der Erklärung im Außenverhältnis NICHT – § 49 GemO regelt keine interne Organkompetenz. Der BM riskiert insoweit „nur“ organinterne bzw. dienstrechtliche Konsequenzen."
    },

    e_formfrei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 49 III GemO",
      title: "Formfrei wirksam (Bagatellausnahme)",
      text: "Für Erklärungen in Geschäften der laufenden Verwaltung, die für die Gemeinde finanziell unerheblich sind, gelten die Absätze 1 und 2 nicht (§ 49 III GemO). Die Erklärung ist auch ohne Schriftform und Amtsbezeichnung wirksam – z. B. die alltägliche Bestellung von Büromaterial."
    },

    e_genehmigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 177, 184 BGB (analog)",
      title: "Erklärung durch Genehmigung wirksam geworden",
      text: "Die zunächst schwebend unwirksame Erklärung ist durch die (formgerechte) Genehmigung rückwirkend wirksam geworden (§§ 177 I, 184 I BGB, ggf. analog bzw. i. V. m. § 59 I VwVfG).\n\nBis zur Genehmigung konnte der Vertragspartner nach § 178 BGB widerrufen bzw. die Gemeinde nach § 177 II BGB zur Erklärung auffordern."
    },

    e_unwirksam_person: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 49 I 2, II GemO",
      title: "Schwebend unwirksam: kein Zeichnungsberechtigter",
      text: "Die Erklärung stammt nicht vom Bürgermeister, einem vertretungsberechtigten Beigeordneten oder einem formgerecht Bevollmächtigten. Sie bindet die Gemeinde nicht – als Handeln eines Vertreters ohne Vertretungsmacht ist sie schwebend unwirksam (§§ 177 ff. BGB, ggf. analog).\n\nDie Gemeinde kann genehmigen; verweigert sie, haftet der Erklärende dem Geschäftspartner ggf. nach § 179 BGB."
    },

    e_unwirksam_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 49 I GemO, §§ 177 ff. BGB",
      title: "Schwebend unwirksam: Formmangel ohne Genehmigung",
      text: "Der Verstoß gegen § 49 I GemO wirkt wie ein Legitimationsmangel des Erklärenden: Die Erklärung ist schwebend unwirksam (§§ 177 ff. BGB, bei öffentlich-rechtlichen Erklärungen analog über § 59 I VwVfG) und wird mangels Genehmigung endgültig unwirksam.\n\nDie Gemeinde ist nicht verpflichtet. Schutzzweck: Die Norm schützt die Gemeinde – ein Vertrauensschutz des Geschäftspartners auf die mündliche Zusage besteht grundsätzlich nicht."
    },

    e_nicht_anwendbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 49 GemO",
      title: "§ 49 GemO nicht anwendbar",
      text: "Die Erklärung fällt nicht in den Anwendungsbereich des § 49 GemO – etwa Verwaltungsakte, die Einlegung von Rechtsbehelfen, Kredite zur Liquiditätssicherung (§ 105 VI GemO) oder bloße Verfügungen (Aufrechnung, Erlass, Stundung).\n\nIhre Wirksamkeit richtet sich nach den allgemeinen Regeln (VwVfG, BGB)."
    }
  },

  routers: {}
});
