/*
 * IRW-Schema: BAB & Primärkostenverrechnung (Fall 10 Fuhrpark)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 03 (Lutz): Aufbau des BAB, Primär-/Sekundärkostenverrechnung im Überblick
 *  - PLE 09-12 (Lutz): Fall 10 Fuhrpark (gelöster BAB Teil I), Regeln der
 *    Primärkostenverrechnung, Stelleneinzel-/Stellengemeinkosten
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-bab-primaer",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenstellen & BAB",
  title: "BAB & Primärkostenverrechnung",
  description: "Der Betriebsabrechnungsbogen als Formular der Kostenstellenrechnung: Aufbau, die zwei Rechenschritte und die Regeln der Primärkostenverrechnung – am gelösten Fall 10 (Fuhrpark).",
  start: "start",
  stations: [
    { id: "aufbau", label: "BAB-Aufbau" },
    { id: "regeln", label: "Regeln" },
    { id: "fall", label: "Fall 10" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: BAB Teil I steht",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "aufbau",
      kind: "frage",
      norm: "BAB",
      title: "Das Formular der Kostenstellenrechnung",
      def: "Der <b>Betriebsabrechnungsbogen (BAB)</b> ist die Tabelle, in der die Gemeinkosten verteilt werden:<br><br>• <b>Zeilen</b>: alle GEMEINkostenarten mit ihren Beträgen aus der Kostenartenrechnung (Einzelkosten laufen am BAB vorbei direkt zum Kostenträger!)<br>• <b>Spalten</b>: die Kostenstellen – zuerst die Vorkostenstellen, dann die Endkostenstellen<br><br>Zwei Rechenschritte:<br>1. <b>Primärkostenverrechnung</b> (Teil I): Gemeinkosten auf ALLE betreffenden Kostenstellen verteilen<br>2. <b>Sekundärkostenverrechnung</b> (Teil II): Kosten der Vorkostenstellen auf die Endkostenstellen umlegen (innerbetriebliche Leistungsverrechnung)",
      options: [
        { label: "Welche Regeln gelten bei der Primärverteilung?", next: "q_regeln", tone: "pos" }
      ]
    },

    q_regeln: {
      station: "regeln",
      kind: "frage",
      norm: "Verursachungsprinzip",
      title: "Die Regeln der Primärkostenverrechnung",
      def: "• Die Summe des verteilten Kostenvolumens MUSS der Summe der Gemeinkosten aus der Kostenartenrechnung entsprechen (Vollständigkeitskontrolle!)<br>• Verteilung möglichst <b>verursachungsgerecht</b> (Verursachungsprinzip)<br>• Dafür hilft die Unterscheidung:<br>&nbsp;&nbsp;– <b>Stelleneinzelkosten</b>: per Beleg direkt zuweisbar (Materialentnahmescheine, Zähler, Anlagennachweise, Gehaltslisten)<br>&nbsp;&nbsp;– <b>Stellengemeinkosten</b>: nur per Verteilungsschlüssel (Heizung → qm, Reinigung → qm, Haftpflicht → Mitarbeiterzahl, Sozialabgaben → Entgelte, Grundsteuer → Fläche)",
      options: [
        { label: "Am Fall 10 (Fuhrpark) ansehen", next: "q_fall", tone: "pos" }
      ]
    },

    q_fall: {
      station: "fall",
      kind: "frage",
      norm: "Fall 10",
      title: "Fall 10: Der Fuhrpark-BAB nach der Primärverteilung",
      def: "Kostenstellen: Grundstück/Gebäude · Leitung · Reparatur · Tankstelle · Pkw A · Pkw B. Verteilte Gemeinkostenarten (Auszug):<br><br>• Personalkosten 338.000 → Leitung 25.000, Reparatur 28.000, Tankstelle 25.000, Pkw A 150.000, Pkw B 110.000<br>• Soziale Abgaben 101.400 → proportional zu den Personalkosten (7.500/8.400/7.500/45.000/33.000)<br>• Strom 15.000 und Gebäudeversicherung 2.000 → komplett Grundstück/Gebäude<br>• Benzin 330.750 → Pkw A 189.000, Pkw B 141.750; Diesel 43.750 → nur Pkw A<br>• Abschreibungen 84.000 und Zinsen 17.850 → nach Anlagennachweisen auf alle Stellen<br><br><b>Spaltensummen</b>: Grundstück/Gebäude 37.800 · Leitung 32.500 · Reparatur 47.400 · Tankstelle 40.250 · Pkw A 482.750 · Pkw B 336.650 = <b>977.350 €</b> ✓ (= Summe aller Gemeinkosten)",
      hint: "Typische Logik: Sozialabgaben folgen den Entgelten (30 % im Fall), Kfz-Kosten den Fahrzeugen, Gebäudekosten der Gebäude-Stelle. Die Vollständigkeitskontrolle über die Gesamtsumme nie vergessen!",
      options: [
        { label: "Teil I fertig – was passiert mit den Vorkostenstellen?", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "BAB Teil I → Teil II",
      title: "Primärverteilung steht – jetzt müssen die Vorkostenstellen leer",
      text: "Nach der Primärkostenverrechnung trägt jede Kostenstelle die von ihr verursachten primären Gemeinkosten; die Kontrollsumme (Fall 10: 977.350 €) stimmt mit der Kostenartenrechnung überein.\n\nAber: Grundstück/Gebäude, Leitung, Reparatur und Tankstelle sind VORkostenstellen – ihre Leistungen kommen nicht direkt beim Kostenträger an, sondern bei Pkw A und Pkw B. Deshalb folgt Teil II: die Sekundärkostenverrechnung (innerbetriebliche Leistungsverrechnung), die die Vorkostenstellen-Kosten verursachungsgerecht auf die Endkostenstellen umlegt, bis die Vorkostenstellen auf null stehen.\n\nDie Verteilungsschlüssel werden in der Praxis gesucht, in Unterricht und Klausur vorgegeben. Die beiden Verfahren (Anbau und Stufenleiter) samt Rechenbeispiel → Schema „Innerbetriebliche Leistungsverrechnung (Simulator)“."
    }
  }
});
