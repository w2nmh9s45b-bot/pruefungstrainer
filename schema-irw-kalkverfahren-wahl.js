/*
 * IRW-Schema: Kalkulationsverfahren wählen (Diagnose-Baum)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 04 (Lutz): Verfahrensübersicht (Divisions-, Äquivalenzziffern-,
 *    Zuschlagskalkulation; kursive Verfahren nicht behandelt), Prämissen der
 *    einfachen und mehrfachen Divisionskalkulation
 *  - PLE 13-14 (Lutz): Entscheidungslogik homogen vs. artähnlich, Prämissen ÄZK
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kalkverfahren-wahl",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenträger & Kalkulation",
  title: "Kalkulationsverfahren wählen",
  description: "Homogene Einheitsleistung, mehrere Produkte in eigenen Endkostenstellen oder artähnliche Sorten? Der Entscheidungsbaum zum passenden Kalkulationsverfahren – Ziel ist immer die verursachungsgerechte Zurechnung.",
  start: "start",
  stations: [
    { id: "ziel", label: "Ziel" },
    { id: "produkte", label: "Produktstruktur" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Verfahren gefunden",
    neg: "Ergebnis: nicht behandelt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "ziel",
      kind: "frage",
      norm: "Verfahrenswahl",
      title: "Wovon hängt das richtige Verfahren ab?",
      def: "Ziel jedes Kalkulationsverfahrens ist die möglichst <b>verursachungsgerechte</b> Kostenzurechnung auf die Kostenträger. Die Wahl hängt ab von der <b>Art der Dienstleistung</b> und der <b>Art der Dienstleistungserstellung</b>.<br><br>Verfahrensfamilie des Skripts:<br>• Divisionskalkulation (einstufig: einfach/mehrfach; mehrstufig: <i>nicht behandelt</i>)<br>• Äquivalenzziffernkalkulation (gewogene Divisionskalkulation)<br>• Zuschlagskalkulation (summarisch/elektiv: <i>nicht behandelt</i>)",
      options: [
        { label: "Produktstruktur des Betriebs prüfen", next: "q_produkte", tone: "pos" }
      ]
    },

    q_produkte: {
      station: "produkte",
      kind: "frage",
      norm: "Produktstruktur",
      title: "Was stellt der Betrieb / die Kostenstelle her?",
      def: "• <b>Völlig homogene</b> (gleiche) Produkteinheiten – z. B. Trinkwasser, Produkteinheit 1 m³; kWh Strom<br>• <b>Mehrere verschiedenartige</b> Leistungen, jede in einer <b>eigenen Endkostenstelle</b> – z. B. Bäderbetrieb mit Schwimmhalle, Sauna, Solarium<br>• <b>Artähnliche</b> Produkteinheiten mit stabilem Kostenverhältnis in EINER Kostenstelle – z. B. Ausstellen von Perso, Pass, Kinderausweis (PE: „Ausweis“); Mülltonnen 35/50/100 l",
      options: [
        { label: "Ein homogenes Produkt im ganzen Betrieb", next: "e_einfach", tone: "pos" },
        { label: "Mehrere Produkte, je eigene Endkostenstelle", next: "e_mehrfach", tone: "pos" },
        { label: "Artähnliche Sorten in einer Kostenstelle", next: "e_aequi", tone: "pos" },
        { label: "Sehr heterogene Produkte mit Einzel-/Gemeinkosten-Mix", next: "e_zuschlag", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_einfach: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Einfache Division",
      title: "Einfache (einstufige) Divisionskalkulation",
      text: "Stückkosten k = Gesamtkosten der Periode ÷ hergestellte Leistungsmenge – ohne Unterscheidung in Einzel- und Gemeinkosten.\n\nPrämissen: (1) nur EIN Produkt/eine Leistung, (2) keine Lagerbestandsveränderungen (bei Dienstleistungen der Verwaltung unproblematisch – sie sind nicht lagerfähig), (3) homogene Leistungen, die den Betrieb gleichmäßig beanspruchen. Eine Kostenstellenrechnung ist NICHT Voraussetzung (kann aber für Planung/Kontrolle trotzdem geführt werden).\n\nAnwendung: Versorgungsbetriebe (Strom-, Wasser-, Gasversorgung). Skript-Beispiel Wasserwerk: 2.774.000 € ÷ 1.900.000 m³ = 1,46 €/m³ → zum Nachrechnen im Schema „Divisionskalkulation (Rechner)“."
    },

    e_mehrfach: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Mehrfache Division",
      title: "Mehrfache (einstufige) Divisionskalkulation",
      text: "Erweiterung der einfachen Division: Für JEDE Endkostenstelle wird eine eigene einfache Divisionskalkulation durchgeführt – deshalb ist die Kostenstellenrechnung hier ZWINGEND erforderlich (die Kosten müssen den Stellen zugeordnet sein). Wieder gilt: keine Lagerhaltung.\n\nGerade in der Kommunalverwaltung häufig: mehrere verschiedenartige Leistungen, jede mit eigener Endkostenstelle.\n\nSkript-Beispiel Bäderbetrieb: Schwimmhalle 975.000 € ÷ 130.000 Besucher = 7,50 € · Sauna 168.000 € ÷ 15.000 = 11,20 € · Solarium 106.000 € ÷ 20.000 = 5,30 € → live im Schema „Divisionskalkulation (Rechner)“. Erbringt EINE Endkostenstelle mehrere artähnliche Leistungen, geht es weiter zur Äquivalenzziffernkalkulation."
    },

    e_aequi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Äquivalenzziffern",
      title: "Äquivalenzziffernkalkulation (gewogene Divisionskalkulation)",
      text: "Für ARTÄHNLICHE Leistungen mit stabilem Kostenverhältnis, das über Äquivalenzziffern (Wertziffern) ausgedrückt wird – z. B. verursacht die Leerung der 50-l-Tonne 25 % weniger Kosten als die der 100-l-Tonne. Die Ziffern gelten über längere Zeit (stabiles Verhältnis) und werden durch Messungen/Beobachtung ermittelt.\n\nAnwendung im öffentlichen Sektor: Abfallbeseitigung, Krankenhäuser, Friedhöfe, Kitas, Schulen.\n\nDie fünf Schritte: Bezugssorte (ÄZ 1,0) festlegen → übrige ÄZ nach Kostenrelationen → Recheneinheiten = Menge × ÄZ → Kosten je RE = Gesamtkosten ÷ Σ RE → Stückkosten je Sorte = kRE × ÄZ. Mit Kita- und Müllabfuhr-Beispiel im Schema „Äquivalenzziffern (Rechner)“."
    },

    e_zuschlag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Zuschlagskalkulation",
      title: "Zuschlagskalkulation: im Grundlagenkurs nicht behandelt",
      text: "Bei stark heterogenen Produkten mit gemischten Einzel- und Gemeinkosten käme die Zuschlagskalkulation zum Zug: Einzelkosten werden direkt zugerechnet, Gemeinkosten über Zuschlagssätze aus dem BAB aufgeschlagen (summarische oder elektive Variante).\n\nABER: Im Verfahrensüberblick der OLE 04 ist sie – wie die mehrstufige Divisionskalkulation – als „in Ihrer Grundlagenveranstaltung nicht behandelt“ markiert. Klausurrelevant sind also: einfache und mehrfache Divisionskalkulation sowie die Äquivalenzziffernkalkulation.\n\nFür die Einordnung reicht: Je heterogener die Produkte und je größer der Gemeinkostenanteil, desto eher braucht es Zuschlagssätze statt bloßer Division."
    }
  }
});
