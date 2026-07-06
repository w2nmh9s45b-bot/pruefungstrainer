/*
 * IRW-Schema: Aufwand und Kosten abgrenzen (neutraler Aufwand, Grundkosten, Zusatzkosten)
 * Fach: Internes Rechnungswesen (FS 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 02-03 (Lutz): betriebsfremder/außerordentlicher/periodenfremder Aufwand,
 *    Zweckaufwand/Grundkosten, Zusatzkosten (kalk. EK-Zinsen als Opportunitätskosten)
 *  Hinweis: Das Skript behandelt als kalkulatorische Kostenkategorie nur die
 *  ZUSATZKOSTEN; „Anderskosten“ kommen in der Grundlagenveranstaltung nicht vor.
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-aufwand-kosten",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Grundlagen & Begriffe",
  title: "Aufwand und Kosten abgrenzen",
  description: "Was gehört in die Kostenrechnung? Neutraler Aufwand (betriebsfremd, außerordentlich, periodenfremd) raus, Zweckaufwand als Grundkosten rein – und Zusatzkosten (kalk. EK-Zinsen), die es nur in der KLR gibt.",
  start: "start",
  stations: [
    { id: "richtung", label: "Richtung" },
    { id: "pruefung", label: "Prüfung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kostenrechnung",
    neg: "Ergebnis: bleibt draußen",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "richtung",
      kind: "frage",
      norm: "Abgrenzung",
      title: "Von welcher Seite kommt die Position?",
      def: "Aufwand (externes Rewe) und Kosten (KLR) überschneiden sich nur teilweise:<br><br>• <b>Neutraler Aufwand</b>: Aufwand OHNE Kostencharakter – bleibt draußen<br>• <b>Zweckaufwand = Grundkosten</b>: Aufwand, der 1:1 Kosten ist – der Normalfall<br>• <b>Zusatzkosten</b>: Kosten OHNE Aufwand – gibt es nur in der Kostenrechnung",
      options: [
        { label: "Ein Aufwand aus der Buchhaltung – Kostencharakter prüfen", next: "q_aufwand", tone: "pos" },
        { label: "Eine Kostenposition ohne Aufwand dahinter?", next: "e_zusatz", tone: "pos" }
      ]
    },

    q_aufwand: {
      station: "pruefung",
      kind: "frage",
      norm: "3 Filter",
      title: "Der Dreifach-Filter für Aufwendungen",
      def: "Prüfe den Aufwand nacheinander:<br><br>1. <b>Betriebsfremd?</b> Kein Zusammenhang mit dem Betriebszweck: Spenden, Personalaufwand für einen an eine andere Verwaltung ausgeliehenen (aber weiterbezahlten) Mitarbeiter, Pacht für ein nicht dem Betrieb dienendes Grundstück<br>2. <b>Außerordentlich?</b> Durch den Geschäftsbetrieb, aber unüblich – selten, zufallsbedingt, nicht planbar: Hochwasser-/Feuerschäden, Diebstahl, Vandalismus<br>3. <b>Periodenfremd?</b> Betriebszweck ja, aber andere Periode: Steuernachzahlungen, Gerichtsgebühren für den Vorjahresprozess, Besoldungsnachzahlung fürs Vorjahr",
      options: [
        { label: "Einer der drei Filter greift → neutraler Aufwand", next: "e_neutral", tone: "neg" },
        { label: "Kein Filter greift – betriebsbedingt und periodenrichtig", next: "e_grundkosten", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_neutral: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Neutraler Aufwand",
      title: "Neutraler Aufwand – bleibt aus der Kostenrechnung draußen",
      text: "Der Aufwand erscheint zwar im externen Rechnungswesen, geht aber nicht (bzw. beim außerordentlichen Aufwand nicht mit demselben Betrag) in die Kostenrechnung ein:\n\n• BETRIEBSFREMDER Aufwand: fehlender Produktbezug (Spenden, verliehener Mitarbeiter, betriebsfremde Pacht)\n• AUSSERORDENTLICHER Aufwand: würde die Preiskalkulation und Wirtschaftsvergleiche zwischen den Haushaltsjahren verfälschen (Hochwasser, Feuer, Diebstahl, Vandalismus)\n• PERIODENFREMDER Aufwand: gehört in die Kostenrechnung einer anderen Periode (Steuernachzahlung, alte Gerichtsgebühren, Besoldungsnachzahlung)\n\nZweck der Abgrenzung: Die Kostenrechnung soll nur den normalen, betriebsbedingten Ressourcenverzehr der laufenden Periode zeigen – sonst stimmen Gebühren und Vergleiche nicht."
    },

    e_grundkosten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Zweckaufwand",
      title: "Zweckaufwand = Grundkosten: 1:1 in die Kostenrechnung",
      text: "Der Aufwand erfüllt alle Merkmale des betriebsbedingten Güterverzehrs und wird mit GLEICHEM Betrag als Kosten angesetzt.\n\nSkript-Beispiele: Personalaufwand (Entgelte und Bezüge), Materialverbrauch, Energiekosten, Versicherungen, Kfz-Steuer, Sozialversicherungsaufwendungen.\n\nDamit ist der Regelfall abgedeckt – der Großteil der Aufwendungen einer Verwaltung sind Grundkosten. Die Ausnahmen in beide Richtungen: neutraler Aufwand (kein Kostencharakter) und Zusatzkosten (Kosten ohne Aufwand)."
    },

    e_zusatz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Zusatzkosten",
      title: "Zusatzkosten: Kosten, die es im externen Rewe nicht gibt",
      text: "Zusatzkosten sind Ressourcenverbräuche OHNE Aufwandsgegenstück – sie stehen in keiner Buchhaltung, werden aber in der Kostenrechnung angesetzt, um ALLE betriebswirtschaftlichen Kosten zu erfassen.\n\nSkript-Beispiel: die kalkulatorischen EIGENKAPITALZINSEN. Wer Eigenkapital im Betrieb investiert, verzichtet auf die Zinsen einer alternativen Geldanlage (Opportunitätskosten) – betriebswirtschaftlich ein echter Ressourcenverzehr. In der Finanzbuchhaltung darf aber nur der Verzehr des FREMDkapitals (FK-Zinsen) als Aufwand angesetzt werden.\n\nIn der Kostenart „kalkulatorische Zinsen“ werden EK- und FK-Verzinsung dann zusammen auf das gesamte betriebsnotwendige Kapital gerechnet → Schema „Kalkulatorische Zinsen (Rechner)“."
    }
  }
});
