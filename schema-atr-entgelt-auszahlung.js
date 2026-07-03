/*
 * Prüfungsschema: Berechnung und Auszahlung des Entgelts (§ 24 TVöD-VKA)
 * und tarifliche Einmalzahlungen (§ 23 TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.4 (Bemessungszeitraum, Zahltag,
 *    Teilzeit, Teilmonate, Stundenanteil 4,348, Rundung) und Kap. 2.6.5.1/
 *    2.6.5.3/2.6.5.4 (Jubiläumsgeld, vermögenswirksame Leistungen, Sterbegeld)
 *  - Gesetze: TVöD §§ 23, 24 (VKA) (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-entgelt-auszahlung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Auszahlung des Entgelts, Einmalzahlungen (§§ 23, 24 TVöD)",
  description: "Bemessungszeitraum und Zahltag (§ 24 I), Teilzeitquote (§ 24 II), Berechnung für Teilmonate und Stunden (§ 24 III, Faktor 4,348), Rundungsregel (§ 24 IV) sowie Jubiläumsgeld, vermögenswirksame Leistungen und Sterbegeld (§ 23 TVöD-VKA).",
  start: "start",
  stations: [
    { id: "zahltag", label: "Zahltag" },
    { id: "anteile", label: "Anteile" },
    { id: "einmal", label: "Einmalzahlungen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Betrag ermittelt",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zahltag",
      kind: "frage",
      norm: "§ 24 I TVöD-VKA",
      title: "Bemessungszeitraum und Zahltag: Wann wird gezahlt?",
      def: "<b>Bemessungszeitraum</b> für das Entgelt ist der <b>Kalendermonat</b> (§ 24 I 1 TVöD-VKA) – für Tabellenentgelt (§ 15) und alle in Monatsbeträgen festgelegten Entgeltbestandteile (z. B. persönliche Zulage § 14).<br><br><b>Zahltag/Fälligkeit (§ 24 I 2, 3):</b> der <b>letzte Tag des Monats</b> für den <b>laufenden</b> Kalendermonat.<br>• Fällt der Zahltag auf <b>Samstag, Wochenfeiertag oder den 31. Dezember</b> → <b>vorhergehender Werktag</b>,<br>• fällt er auf einen <b>Sonntag</b> → <b>zweiter vorhergehende Werktag</b>.<br><br>Die Bezüge werden also – anders als in der Privatwirtschaft üblich – <b>im Voraus für den laufenden Monat</b> am Monatsende gezahlt.",
      options: [
        { label: "Voller Monat, Vollzeit – Tabellenentgelt nach Anlage A", next: "q_einmal", tone: "pos" },
        { label: "Teilzeitbeschäftigung", next: "q_teilzeit", tone: "neutral" },
        { label: "Anspruch nur für Teil des Monats", next: "q_teilmonat", tone: "neutral" }
      ]
    },

    q_teilzeit: {
      station: "anteile",
      kind: "frage",
      norm: "§ 24 II TVöD-VKA",
      title: "Teilzeit: Wie wird das Entgelt bemessen?",
      def: "<b>Zeitanteilige Kürzung (§ 24 II TVöD-VKA):</b> Teilzeitbeschäftigte erhalten Tabellenentgelt und alle sonstigen Entgeltbestandteile in dem Umfang, der dem <b>Anteil ihrer individuell vereinbarten durchschnittlichen Arbeitszeit an der regelmäßigen Arbeitszeit vergleichbarer Vollzeitbeschäftigter</b> entspricht – soweit tariflich nicht ausdrücklich etwas anderes geregelt ist.<br><br><b>Ausnahme:</b> z. B. das <b>Jubiläumsgeld</b> – Teilzeitbeschäftigte erhalten es in <b>voller Höhe</b> (§ 23 II 2 TVöD-VKA).<br><br><b>Beispiel (Skript):</b> EG 6 Stufe 4 (Tabelle: 3.125,04 €), Teilzeit 19,5 h/Woche → 3.125,04 ÷ 39 × 19,5 = <b>1.562,52 €</b>.",
      options: [
        { label: "Teilzeitquote angewendet", next: "q_einmal", tone: "pos" }
      ]
    },

    q_teilmonat: {
      station: "anteile",
      kind: "frage",
      norm: "§ 24 III TVöD-VKA",
      title: "Teilmonat oder Stunden: Wie wird anteilig gerechnet?",
      def: "<b>Anspruch nicht für alle Tage des Monats (§ 24 III 1):</b> Es wird nur der Teil gezahlt, der auf den <b>Anspruchszeitraum</b> entfällt – Berechnung nach <b>Kalendertagen</b> des konkreten Monats.<br><br><b>Anwendungsfälle:</b> Beginn/Ende des Arbeitsverhältnisses im Monatslauf, Wegfall der Entgeltfortzahlung (§ 22), Beginn der Mutterschutzfrist, unbezahlter Sonderurlaub (§ 28), Beginn/Ende einer Zulage nach § 14.<br><br><b>Beispiele (Skript):</b> Einstellung am 15. Februar → 14/28 (Schaltjahr: 15/29); Einstellung 15. März → 17/31; unbezahlter Sonderurlaub ab 20. Juni → 19/30 der Junibezüge.<br><br><b>Stundenanteil (§ 24 III 2, 3):</b> Für einzelne Stunden gilt: Monatsbetrag ÷ (<b>4,348</b> × regelmäßige wöchentliche Arbeitszeit).<br><i>Exkurs Faktor:</i> 365,25 Tage ÷ 12 ÷ 7 = 4,348 Wochen/Monat; bei 39 h/Woche also 169,57 Monatsstunden. Beispiel: 3.125,04 € ÷ (4,348 × 39) = <b>18,43 €/Stunde</b>.",
      options: [
        { label: "Anteil berechnet", next: "q_rundung", tone: "pos" }
      ]
    },

    q_rundung: {
      station: "anteile",
      kind: "frage",
      norm: "§ 24 IV TVöD-VKA",
      title: "Rundung: Wie werden Beträge gerundet?",
      def: "<b>Kaufmännische Rundung (§ 24 IV 1 TVöD-VKA):</b> Bruchteile eines Cents von <b>mindestens 0,5</b> werden <b>aufgerundet</b>, von <b>weniger als 0,5 abgerundet</b> – anzuwenden auf JEDE Berechnung von Geldbeträgen aus einem TVöD-Arbeitsverhältnis.<br><br><b>Zwischenrechnungen (§ 24 IV 2):</b> jeweils auf <b>zwei Dezimalstellen</b> durchführen (wichtig z. B. bei der Bemessungsgrundlage der Jahressonderzahlung!).",
      options: [
        { label: "Verstanden", next: "e_berechnet", tone: "pos" }
      ]
    },

    q_einmal: {
      station: "einmal",
      kind: "frage",
      norm: "§ 23 TVöD-VKA",
      title: "Tarifliche Einmalzahlungen: Welche gibt es neben der Jahressonderzahlung?",
      def: "<b>Jubiläumsgeld (§ 23 II TVöD-VKA):</b> bei einer <b>Beschäftigungszeit im weiteren Sinne</b> (§ 34 III TVöD!)<br>• von <b>25 Jahren: 350 €</b>,<br>• von <b>40 Jahren: 500 €</b>.<br>Teilzeitbeschäftigte erhalten es in <b>voller Höhe</b>; durch Betriebs-/Dienstvereinbarung sind günstigere Regelungen möglich (§ 23 II 3 – Öffnungsklausel!). Ein 50-jähriges Jubiläum ist tariflich nicht geregelt.<br><br><b>Vermögenswirksame Leistungen (§ 23 I):</b> bei voraussichtlich mindestens 6-monatigem Arbeitsverhältnis <b>6,65 €</b> je vollem Kalendermonat (Vollbeschäftigte; Azubis nach TVAöD: 13,29 €); Anspruch erst ab schriftlicher Mitteilung der Anlagedaten (+ zwei Vormonate desselben Jahres); nur für Monate mit Tabellenentgelt, Entgeltfortzahlung oder Krankengeldzuschuss.<br><br><b>Sterbegeld (§ 23 III):</b> beim Tod von Beschäftigten (Arbeitsverhältnis ruhte nicht) an Ehegatten/Lebenspartner oder Kinder: für die <b>restlichen Tage des Sterbemonats und – in einer Summe – für zwei weitere Monate</b> das Tabellenentgelt der/des Verstorbenen; Zahlung an einen Berechtigten befreit den Arbeitgeber.",
      options: [
        { label: "Übersicht klar", next: "e_berechnet", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_berechnet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 23, 24 TVöD-VKA",
      title: "Entgelt korrekt berechnet und fällig gestellt",
      text: "Merkpunkte für die Klausur:\n\n• Zahltag: letzter Tag des Monats für den laufenden Monat; Vorverlegung bei Samstag/Feiertag/31.12. (vorhergehender Werktag) und Sonntag (zweiter vorhergehender Werktag), § 24 I TVöD-VKA.\n• Teilzeit: alle Entgeltbestandteile zeitanteilig (§ 24 II) – Ausnahme Jubiläumsgeld in voller Höhe (§ 23 II 2).\n• Teilmonate: kalendertäglich spitz nach den tatsächlichen Kalendertagen des Monats (§ 24 III 1).\n• Stundenanteil: Monatsbetrag ÷ (4,348 × wöchentliche Arbeitszeit), § 24 III 3.\n• Rundung: ab 0,5 Cent auf, darunter ab; Zwischenrechnungen auf zwei Dezimalstellen (§ 24 IV).\n• Einmalzahlungen: Jubiläumsgeld 350 €/500 € (BZ i. w. S. – 25/40 Jahre), VL 6,65 €, Sterbegeld (Sterbemonat + zwei Monate), Jahressonderzahlung → eigenes Schema.\n\nUnd immer daran denken: Ansprüche aus dem Arbeitsverhältnis verfallen nach § 37 TVöD sechs Monate nach Fälligkeit, wenn sie nicht in Textform geltend gemacht werden (Ausschlussfrist – einmalige Geltendmachung genügt auch für später fällige Leistungen desselben Sachverhalts)."
    }
  },

  routers: {}
});
