/*
 * VWL-Schema: Konjunkturindikator einordnen (Früh-, Gegenwarts-, Spätindikator)
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 1.3 (Konjunkturindikatoren,
 *    ifo Geschäftsklima-Index)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-konjunkturindikatoren",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Konjunktur & Stabilisierung",
  title: "Konjunkturindikator einordnen",
  description: "Läuft die Größe der Konjunktur voraus, mit ihr oder hinterher? Auftragseingänge, BIP, Arbeitslosigkeit & Co. als Früh-, Gegenwarts- oder Spätindikator einordnen – inklusive ifo-Geschäftsklimaindex.",
  start: "start",
  stations: [
    { id: "zeitbezug", label: "Zeitbezug" },
    { id: "ifo", label: "ifo-Index" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Einordnung: getroffen",
    neg: "Einordnung: Spätindikator",
    frei: "Einordnung: Hinweis",
    warn: "Einordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zeitbezug",
      kind: "frage",
      norm: "Diagnose & Prognose",
      title: "Wann zeigt der Indikator die Konjunkturbewegung an?",
      def: "<b>Konjunkturindikatoren</b> liefern Zahlen und Vergleichswerte, die eine Beurteilung der konjunkturellen Entwicklung zulassen – Grundlage für Beschreibung, Analyse und Prognose und damit für die staatliche Konjunkturpolitik.<br><br>Einteilung nach dem <b>Zeitbezug</b>:<br>• <b>Frühindikatoren</b> deuten bereits zeitig an, wie der Wirtschaftsverlauf sich verändern wird bzw. könnte.<br>• <b>Gegenwartsindikatoren</b> sind zeitgleich und beschreiben die aktuelle Lage.<br>• <b>Spätindikatoren</b> erklären die Entwicklung im Nachhinein.",
      options: [
        { label: "Läuft der Entwicklung VORAUS → Frühindikator", detail: "kündigt den Umschwung an, bevor er im BIP sichtbar wird", next: "q_frueh", tone: "pos" },
        { label: "Läuft ZEITGLEICH → Gegenwartsindikator", detail: "beschreibt die aktuelle konjunkturelle Situation", next: "e_gegenwart", tone: "neutral" },
        { label: "Läuft HINTERHER → Spätindikator", detail: "reagiert erst, wenn der Umschwung längst da ist", next: "e_spaet", tone: "neg" }
      ]
    },

    q_frueh: {
      station: "ifo",
      kind: "frage",
      norm: "Frühindikatoren",
      title: "Welcher Frühindikator ist es?",
      def: "Frühindikatoren laut Skript:<br>• <b>Auftragseingänge</b> (heutige Bestellung = morgige Produktion)<br>• <b>Lieferfristen</b> (lange Fristen = hohe Auslastung im Anmarsch)<br>• <b>Lagerbestände</b> (wachsende Läger = nachlassender Absatz)<br>• <b>Börsenkurse</b> (Erwartungen der Anleger)<br>• <b>Baugenehmigungen im Hochbau</b> (heutige Genehmigung = morgige Bautätigkeit)<br><br>Dazu der bekannteste Stimmungsindikator: der <b>ifo Geschäftsklima-Index</b>.",
      options: [
        { label: "Einer der klassischen Frühindikatoren", next: "e_frueh", tone: "pos" },
        { label: "Der ifo-Geschäftsklimaindex – wie funktioniert der?", next: "e_ifo", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_frueh: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Frühindikator",
      title: "Frühindikator: Blick nach vorn",
      text: "Frühindikatoren dienen dazu, die KÜNFTIGE Entwicklung einer Volkswirtschaft möglichst genau einzuschätzen: Auftragseingänge, Lieferfristen, Lagerbestände, Börsenkurse, Baugenehmigungen im Hochbau, Geschäftserwartungen.\n\nLogik: Diese Größen bilden Entscheidungen ab, die erst später zu Produktion, Umsatz und Beschäftigung werden – deshalb drehen sie VOR dem BIP.\n\nPraxis: Für die antizyklische Stabilisierungspolitik sind Frühindikatoren entscheidend – wer erst auf Spätindikatoren (Arbeitslosigkeit!) reagiert, kommt strukturell zu spät (Wirkungsverzögerungen/Lags der Konjunkturpolitik)."
    },

    e_gegenwart: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Gegenwartsindikator",
      title: "Gegenwartsindikator: Momentaufnahme",
      text: "Gegenwartsindikatoren geben zeitgleich Informationen zur aktuellen konjunkturellen Situation: BIP, Kapazitätsauslastung, Umsätze.\n\nEinschränkung: Auch 'zeitgleiche' Größen wie das BIP werden statistisch erst mit Wochen bis Monaten Verzögerung veröffentlicht und später revidiert – die 'Gegenwart' der amtlichen Statistik hinkt der realen Gegenwart etwas hinterher.\n\nDas BIP ist zugleich die Spitzenkennzahl der VGR (→ Schemata 'Nominales vs. reales BIP' und 'VGR-Rechner')."
    },

    e_spaet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Spätindikator",
      title: "Spätindikator: Blick zurück",
      text: "Spätindikatoren erklären bzw. beschreiben die konjunkturelle Entwicklung im Nachhinein: Gewinne, Einkommen, Konsumausgaben, Produktivität, PREISE und ARBEITSLOSIGKEIT.\n\nWarum hinken sie? Unternehmen entlassen erst, wenn der Abschwung sicher ist (Kündigungsfristen, Halten von Fachkräften), und stellen im Aufschwung erst verzögert ein; Preise reagieren träge auf die Nachfrage.\n\nKlausur-Klassiker: Die Arbeitslosenquote ist SPÄT-, nicht Frühindikator – obwohl sie öffentlich die meiste Aufmerksamkeit bekommt. Gleiches gilt für die Inflationsrate."
    },

    e_ifo: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "ifo-Geschäftsklima",
      title: "ifo Geschäftsklima-Index: Stimmung als Frühindikator",
      text: "Das ifo Institut befragt monatlich ca. 9.000 Unternehmen (verarbeitendes Gewerbe, Bauhauptgewerbe, Groß- und Einzelhandel) nach:\n1. ihrer GEGENWÄRTIGEN GESCHÄFTSLAGE ('gut' / 'befriedigend' / 'schlecht') und\n2. ihren ERWARTUNGEN für die nächsten sechs Monate ('günstiger' / 'gleichbleibend' / 'ungünstiger').\n\nBerechnung: Saldowert der Lage = Prozentanteil 'gut' minus 'schlecht'; Saldowert der Erwartungen = 'günstiger' minus 'ungünstiger'. Das GESCHÄFTSKLIMA ist ein transformierter Mittelwert aus beiden Salden.\n\nEinordnung: Der Erwartungsteil macht den Index zum wichtigsten deutschen Frühindikator – 'der' Stimmungsmesser der deutschen Wirtschaft."
    }
  }
});
