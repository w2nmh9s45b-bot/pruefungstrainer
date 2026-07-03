/*
 * Prüfungsschema: Krankengeldzuschuss (§ 22 II, III TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 3.4 (Krankengeldzuschuss: Anspruch,
 *    Berechnung, Dauer)
 *  - Gesetze: TVöD § 22 II-IV (VKA) (Volltext geprüft); SGB V §§ 44 ff.;
 *    § 34 III TVöD (Beschäftigungszeit i. w. S.)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-krankengeldzuschuss",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Krankheit und Entgelt im Krankheitsfall",
  title: "Krankengeldzuschuss (§ 22 II, III TVöD-VKA)",
  description: "Nach Ablauf der sechs Wochen Entgeltfortzahlung: Anspruch auf Krankengeldzuschuss bei Beschäftigungszeit über einem Jahr, Höhe (Unterschiedsbetrag Nettoentgelt minus Bruttokrankengeld) und Dauer (bis Ende der 13. bzw. 39. Woche je nach Beschäftigungszeit).",
  start: "start",
  stations: [
    { id: "voraussetzung", label: "Voraussetzung" },
    { id: "dauer", label: "Dauer" },
    { id: "hoehe", label: "Höhe" },
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
      station: "voraussetzung",
      kind: "frage",
      norm: "§ 22 II, III TVöD-VKA",
      title: "Sind die Grundvoraussetzungen des Krankengeldzuschusses erfüllt?",
      def: "Der <b>Krankengeldzuschuss</b> schließt an die sechswöchige Entgeltfortzahlung an (§ 22 I → II TVöD-VKA). Voraussetzungen:<br><br>• <b>Ablauf der Bezugsfrist</b> für die Entgeltfortzahlung (sechs Wochen),<br>• Bezug von <b>Krankengeld</b> nach dem SGB V (§§ 44 ff. SGB V) – der Zuschuss <b>ergänzt</b> das gesetzliche Krankengeld,<br>• <b>Beschäftigungszeit</b> (§ 34 III TVöD – i. w. S.!) von <b>mehr als einem Jahr</b> (§ 22 III 1 TVöD-VKA).<br><br>Wird die maßgebliche Beschäftigungszeit erst <b>während</b> der Arbeitsunfähigkeit vollendet, ist das unschädlich (§ 22 III 2) – der Beschäftigte wird so gestellt, als hätte er sie schon bei Beginn der AU erreicht.",
      options: [
        { label: "Ja, Krankengeldbezug + Beschäftigungszeit > 1 Jahr", next: "q_dauer", tone: "pos" },
        { label: "Beschäftigungszeit bis zu einem Jahr", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_dauer: {
      station: "dauer",
      kind: "frage",
      norm: "§ 22 III 1 TVöD-VKA",
      title: "Wie lange wird der Krankengeldzuschuss gezahlt?",
      def: "<b>Bezugsdauer (§ 22 III 1 TVöD-VKA)</b> – gestaffelt nach der <b>Beschäftigungszeit i. w. S.</b> (§ 34 III TVöD), gerechnet <b>seit Beginn der Arbeitsunfähigkeit infolge derselben Krankheit</b>:<br><br>• Beschäftigungszeit von <b>mehr als einem Jahr</b>: längstens bis zum <b>Ende der 13. Woche</b>,<br>• Beschäftigungszeit von <b>mehr als drei Jahren</b>: längstens bis zum <b>Ende der 39. Woche</b>.<br><br>Da die Entgeltfortzahlung die ersten sechs Wochen abdeckt, überlappt der Zuschuss zeitlich: Er wird für die Wochen 7 bis 13 bzw. 7 bis 39 gezahlt.<br><br><b>Ende (§ 22 IV TVöD):</b> nicht über das Ende des Arbeitsverhältnisses hinaus (§ 8 EFZG bleibt unberührt) und nicht über den Beginn einer Rente/vergleichbaren Leistung hinaus.",
      options: [
        { label: "Beschäftigungszeit > 1 Jahr → bis Ende 13. Woche", next: "q_hoehe", tone: "pos" },
        { label: "Beschäftigungszeit > 3 Jahre → bis Ende 39. Woche", next: "q_hoehe", tone: "pos" }
      ]
    },

    q_hoehe: {
      station: "hoehe",
      kind: "frage",
      norm: "§ 22 II 1 TVöD-VKA",
      title: "Wie hoch ist der Krankengeldzuschuss?",
      def: "<b>Höhe (§ 22 II 1 TVöD-VKA):</b> Der Zuschuss entspricht dem <b>Unterschiedsbetrag</b> zwischen den <b>tatsächlichen Barleistungen des Sozialversicherungsträgers (Bruttokrankengeld)</b> und dem <b>Nettoentgelt</b>.<br><br>Vereinfachte Formel:<br><b>Krankengeldzuschuss = Nettoentgelt − Bruttokrankengeld (+ VL)</b><br><br>• Für <b>volle Monate</b>: Differenz der Monatsbeträge.<br>• Für <b>Teilmonate</b>: kalendertäglich (§ 24 III 1 TVöD). Das <b>Krankengeld</b> wird pauschal auf Basis von <b>30 Kalendertagen</b> ermittelt, das <b>Nettoentgelt</b> dagegen kalendertäglich spitz nach der tatsächlichen Zahl der Kalendertage des Monats.<br><br><b>Praxis-Fazit (Skript):</b> Häufig ergibt sich <b>0 €</b>, weil das Brutto-Krankengeld (in das auch Einmalzahlungen wie die Jahressonderzahlung einfließen) oft höher ist als das Netto-Entgelt – der Zuschuss wird tatsächlich nur in Ausnahmefällen gezahlt.",
      options: [
        { label: "Nettoentgelt > Bruttokrankengeld → Zuschuss > 0", next: "e_anspruch", tone: "pos" },
        { label: "Bruttokrankengeld ≥ Nettoentgelt → 0 €", next: "e_null", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 II, III TVöD-VKA",
      title: "Anspruch auf Krankengeldzuschuss",
      text: "Nach Ablauf der sechs Wochen Entgeltfortzahlung besteht bei Krankengeldbezug und einer Beschäftigungszeit von mehr als einem Jahr Anspruch auf Krankengeldzuschuss (§ 22 II, III TVöD-VKA).\n\n• Höhe: Nettoentgelt − Bruttokrankengeld (+ vermögenswirksame Leistungen), § 22 II 1.\n• Dauer (seit Beginn der AU infolge derselben Krankheit): bis Ende der 13. Woche (Beschäftigungszeit > 1 Jahr) bzw. bis Ende der 39. Woche (> 3 Jahre), § 22 III 1.\n\nBeschäftigungszeit ist die i. w. S. nach § 34 III TVöD (Vordienstzeiten bei TVöD-/öffentlich-rechtlichen Arbeitgebern zählen mit – eigenes Schema). Wird die maßgebliche Zeit erst während der AU vollendet, ist das unschädlich (§ 22 III 2)."
    },

    e_null: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 22 II 1 TVöD-VKA",
      title: "Anspruch dem Grunde nach, aber Zuschuss = 0 €",
      text: "Der Anspruch besteht dem Grunde nach, die konkrete Berechnung ergibt jedoch 0 €: Da für den Unterschiedsbetrag das BRUTTO-Krankengeld zugrunde zu legen ist und dieses regelmäßig höher ausfällt als das Netto-Entgelt (in die Krankengeldberechnung fließen auch Einmalzahlungen wie die Jahressonderzahlung ein), kommt es nur in Ausnahmefällen zu einer Zahlung (Fazit des Skripts).\n\nRechenbeispiel (Skript): Nettoentgelt 67,07 €/Tag, Bruttokrankengeld 69,08 €/Tag → Krankengeldzuschuss 0,00 €."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 III 1 TVöD-VKA",
      title: "Kein Krankengeldzuschuss – Beschäftigungszeit zu kurz",
      text: "Bei einer Beschäftigungszeit bis zu einem Jahr wird noch kein Krankengeldzuschuss gezahlt (§ 22 III 1 TVöD-VKA). Die/Der Beschäftigte ist nach Ablauf der sechs Wochen Entgeltfortzahlung allein auf das gesetzliche Krankengeld der Krankenversicherung (§§ 44 ff. SGB V) angewiesen.\n\nErreicht die/der Beschäftigte die Ein-Jahres-Grenze erst während der laufenden Arbeitsunfähigkeit, ist das unschädlich (§ 22 III 2 TVöD-VKA): Ab diesem Zeitpunkt entsteht der Zuschussanspruch, gerechnet ab Beginn der Arbeitsunfähigkeit."
    }
  },

  routers: {}
});
