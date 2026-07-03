/*
 * Prüfungsschema: Beschäftigungszeit (§ 34 III TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.5.3 (Beschäftigungszeit im engeren
 *    und weiteren Sinne, Anrechnung von Vordienstzeiten, Bedeutung)
 *  - Lehrplanung FS III OLE 2 + PLE 4 (Workshop "Beschäftigungszeit")
 *  - Gesetze: TVöD § 34 III (Volltext geprüft), §§ 22 III, 23 II, 34 I, II
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-beschaeftigungszeit",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Arbeitsvertrag und Befristung",
  title: "Beschäftigungszeit (§ 34 III TVöD)",
  description: "Beschäftigungszeit im engeren Sinne (§ 34 III 1, 2: derselbe Arbeitgeber – für Kündigungsfristen und Unkündbarkeit) und im weiteren Sinne (§ 34 III 1–4: plus Vordienstzeiten bei TVöD-Arbeitgebern und anderen öffentlich-rechtlichen Arbeitgebern – für Jubiläumsgeld und Krankengeldzuschuss).",
  start: "start",
  stations: [
    { id: "zweck", label: "Zweck" },
    { id: "iengeren", label: "BZ i. e. S." },
    { id: "iweiteren", label: "BZ i. w. S." },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zeit zählt mit",
    neg: "Ergebnis: Zeit zählt nicht",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "zweck",
      kind: "frage",
      norm: "§ 34 III TVöD",
      title: "Für welchen Zweck wird die Beschäftigungszeit ermittelt?",
      def: "Die <b>Beschäftigungszeit</b> hat im TVöD Bedeutung für vier Regelungsbereiche:<br><br><b>Beschäftigungszeit im ENGEREN Sinne</b> (§ 34 III <b>Satz 1 und 2</b> – erkennbar am Klammerzusatz „(Absatz 3 Satz 1 und 2)“):<br>• <b>Kündigungsfristen</b>, § 34 I TVöD,<br>• <b>„Unkündbarkeit“</b>, § 34 II TVöD.<br><br><b>Beschäftigungszeit im WEITEREN Sinne</b> (§ 34 III <b>komplett</b>, also einschließlich Satz 3 und 4):<br>• <b>Krankengeldzuschuss</b>, § 22 III TVöD,<br>• <b>Jubiläumsgeld</b>, § 23 II TVöD.",
      hint: "Klausurtechnik: Immer zuerst am Klammerzusatz der Anspruchsnorm ablesen, welche Sätze des § 34 III gemeint sind – danach entscheidet sich, ob Vordienstzeiten bei anderen Arbeitgebern mitzählen.",
      options: [
        { label: "Kündigungsfristen / Unkündbarkeit (i. e. S.)", set: { zweck_kuendigung: true }, next: "q_ies", tone: "neutral" },
        { label: "Jubiläumsgeld / Krankengeldzuschuss (i. w. S.)", next: "q_ies_basis", tone: "neutral" }
      ]
    },

    q_ies: {
      station: "iengeren",
      kind: "frage",
      norm: "§ 34 III 1, 2 TVöD",
      title: "Wurde die Zeit bei DEMSELBEN Arbeitgeber im ARBEITSVERHÄLTNIS zurückgelegt?",
      def: "<b>Beschäftigungszeit i. e. S. (§ 34 III 1, 2 TVöD)</b> = die bei <b>demselben Arbeitgeber im Arbeitsverhältnis</b> zurückgelegte Zeit, <b>auch wenn sie unterbrochen ist</b>.<br><br><b>Es zählen NICHT:</b><br>• <b>Ausbildungszeiten</b> (Berufsausbildungsverhältnis ist kein Arbeitsverhältnis),<br>• Zeiten im <b>Beamtenverhältnis</b>,<br>• Zeiten eines <b>Sonderurlaubs nach § 28 TVöD</b> – es sei denn, der Arbeitgeber hat VOR Antritt schriftlich ein dienstliches/betriebliches Interesse anerkannt (§ 34 III 2 TVöD).<br><br><b>Unterbrechungen sind unschädlich:</b> Frühere Arbeitsverhältnisse beim selben Arbeitgeber zählen mit, egal wie lange die Lücke ist.<br><br><b>Beispiel:</b> A war 2007–2008 bei der VG Marienthal beschäftigt, dann 10 Jahre in der Privatwirtschaft, seit 2019 wieder bei der VG Marienthal → die zwei Jahre 2007/2008 zählen zur Beschäftigungszeit i. e. S. hinzu.",
      options: [
        { label: "Ja, derselbe AG, Arbeitsverhältnis", next: "e_ies_zaehlt", tone: "pos" },
        { label: "Ausbildungs- oder Beamtenzeit", next: "e_zaehlt_nicht", tone: "neg" },
        { label: "Sonderurlaub nach § 28 TVöD", next: "q_sonderurlaub", tone: "warn" },
        { label: "Zeit bei einem ANDEREN Arbeitgeber", next: "e_anderer_ag_ies", tone: "neg" }
      ]
    },

    q_sonderurlaub: {
      station: "iengeren",
      kind: "frage",
      norm: "§ 34 III 2 TVöD",
      title: "Hat der Arbeitgeber VOR Antritt des Sonderurlaubs ein dienstliches Interesse anerkannt?",
      def: "Die Zeit eines <b>Sonderurlaubs gemäß § 28 TVöD</b> bleibt bei der Beschäftigungszeit grundsätzlich <b>unberücksichtigt</b>.<br><br><b>Ausnahme:</b> Der Arbeitgeber hat <b>vor Antritt</b> des Sonderurlaubs <b>schriftlich</b> ein <b>dienstliches oder betriebliches Interesse</b> anerkannt (§ 34 III 2 TVöD) – dann zählt auch die Sonderurlaubszeit mit.<br><br>Typische Fälle mit anerkanntem Interesse: Abordnung zu einem kommunalen Spitzenverband, Tätigkeit in einer Fraktionsgeschäftsstelle, kommunalpolitisch gewünschte Freistellungen.",
      options: [
        { label: "Ja, vorher schriftlich anerkannt", next: "e_ies_zaehlt", tone: "pos" },
        { label: "Nein", next: "e_zaehlt_nicht", tone: "neg" }
      ]
    },

    q_ies_basis: {
      station: "iengeren",
      kind: "frage",
      norm: "§ 34 III TVöD",
      title: "Basis bilden: Zeiten beim selben Arbeitgeber erfassen",
      def: "Die <b>Beschäftigungszeit i. w. S.</b> baut auf der Beschäftigungszeit i. e. S. auf:<br><br><b>BZ i. w. S. = BZ i. e. S.</b> (derselbe AG, Arbeitsverhältnis, Unterbrechungen unschädlich, Sonderurlaub grundsätzlich nicht)<br><b>+ Vordienstzeiten</b> bei einem vorherigen Arbeitgeber im <b>Geltungsbereich des TVöD</b> (§ 34 III 3)<br><b>+ Vordienstzeiten</b> bei einem <b>anderen öffentlich-rechtlichen Arbeitgeber</b> (§ 34 III 4)<br>– jeweils nur bei <b>unmittelbarem Wechsel</b>.",
      options: [
        { label: "Zeiten beim selben AG erfasst – weiter zu Vordienstzeiten", next: "q_iws", tone: "pos" }
      ]
    },

    q_iws: {
      station: "iweiteren",
      kind: "frage",
      norm: "§ 34 III 3, 4 TVöD",
      title: "Bei welchem FRÜHEREN Arbeitgeber wurde die Vordienstzeit zurückgelegt?",
      def: "<b>§ 34 III 3 TVöD – Wechsel innerhalb des TVöD:</b> Wechseln Beschäftigte zwischen Arbeitgebern, die <b>vom Geltungsbereich des TVöD erfasst</b> sind (Bund und VKA-Mitglieder, § 1 I TVöD), werden die Zeiten beim anderen Arbeitgeber als Beschäftigungszeit anerkannt.<br><br><b>Achtung:</b> Arbeitgeber, die den TVöD nur durch <b>arbeitsvertragliche Inbezugnahme</b> oder <b>Haustarifvertrag</b> anwenden, sind NICHT vom Geltungsbereich erfasst!<br><br><b>§ 34 III 4 TVöD – anderer öffentlich-rechtlicher Arbeitgeber:</b> Satz 3 gilt entsprechend beim Wechsel von einem anderen öffentlich-rechtlichen Arbeitgeber = <b>Körperschaften, Anstalten und Stiftungen des öffentlichen Rechts</b> (insbesondere die <b>Länder</b>, da sie nicht vom TVöD erfasst sind) – NICHT privatrechtliche Gesellschaften (auch nicht kommunale GmbH!).",
      options: [
        { label: "TVöD-Arbeitgeber (Bund/VKA-Mitglied)", next: "q_wechsel", tone: "pos" },
        { label: "Anderer ö.-r. Arbeitgeber (z. B. Land RLP)", next: "q_wechsel", tone: "pos" },
        { label: "Privater AG / kommunale GmbH / nur Bezugnahme", next: "e_zaehlt_nicht_iws", tone: "neg" }
      ]
    },

    q_wechsel: {
      station: "iweiteren",
      kind: "frage",
      norm: "§ 34 III 3, 4 TVöD („Wechsel“)",
      title: "Liegt ein UNMITTELBARER Wechsel vor?",
      def: "Unter „<b>Wechsel</b>“ ist nur der Fall zu verstehen, dass sich das neue Arbeitsverhältnis <b>unmittelbar</b> an das vorangegangene anschließt.<br><br><b>Unschädlich:</b> Zwischen beiden Arbeitsverhältnissen liegen nur <b>allgemein arbeitsfreie Tage</b> (Wochenende) oder <b>gesetzliche Feiertage</b>.<br><br><b>Schädlich:</b> Jede echte Lücke (auch wenige Werktage Arbeitslosigkeit, Urlaubsreise zwischen den Jobs o. Ä.) – dann werden die Vordienstzeiten NICHT angerechnet.",
      options: [
        { label: "Ja, nahtloser Anschluss (ggf. nur Wochenende/Feiertag)", next: "e_iws_zaehlt", tone: "pos" },
        { label: "Nein, echte Unterbrechung", next: "e_zaehlt_nicht_iws", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ies_zaehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 34 III 1, 2 TVöD",
      title: "Zeit zählt zur Beschäftigungszeit (i. e. S. und damit auch i. w. S.)",
      text: "Die beim selben Arbeitgeber im Arbeitsverhältnis zurückgelegte Zeit zählt zur Beschäftigungszeit – Unterbrechungen sind unschädlich (§ 34 III 1 TVöD). Ein Sonderurlaub zählt nur bei vorher schriftlich anerkanntem dienstlichen/betrieblichen Interesse mit (§ 34 III 2 TVöD).\n\nAnwendung:\n• Kündigungsfristen § 34 I TVöD (Staffel von 1 Monat bis 6 Monate),\n• Unkündbarkeit § 34 II TVöD (40. Lebensjahr + mehr als 15 Jahre Beschäftigungszeit, Tarifgebiet West),\n• zugleich Grundbaustein der BZ i. w. S. für Jubiläumsgeld (§ 23 II) und Krankengeldzuschuss (§ 22 III).\n\nBerechnung: nach Jahren und Tagen; die Feststellung hat nur deklaratorische Bedeutung und kann jederzeit mit Wirkung für die Zukunft berichtigt werden."
    },

    e_iws_zaehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 34 III 3, 4 TVöD",
      title: "Vordienstzeit wird als Beschäftigungszeit i. w. S. anerkannt",
      text: "Die beim früheren TVöD-Arbeitgeber (§ 34 III 3) bzw. beim anderen öffentlich-rechtlichen Arbeitgeber (§ 34 III 4) zurückgelegte Zeit wird wegen des unmittelbaren Wechsels im neuen Arbeitsverhältnis als Beschäftigungszeit anerkannt.\n\nDiese Beschäftigungszeit i. w. S. gilt für:\n• Jubiläumsgeld § 23 II TVöD (25 Jahre: 350 €, 40 Jahre: 500 €; Teilzeit in voller Höhe),\n• Krankengeldzuschuss § 22 III TVöD (mehr als 1 Jahr: bis Ende der 13. Woche; mehr als 3 Jahre: bis Ende der 39. Woche).\n\nNICHT dagegen für Kündigungsfristen und Unkündbarkeit – dort gilt nur die BZ i. e. S. (Sätze 1 und 2: derselbe Arbeitgeber)!"
    },

    e_anderer_ag_ies: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 III 1 TVöD (Klammerzusatz)",
      title: "Für Kündigungsfristen/Unkündbarkeit zählen Fremdzeiten NICHT",
      text: "Für die Kündigungsfristen (§ 34 I) und die Unkündbarkeit (§ 34 II) gilt nur die Beschäftigungszeit nach § 34 III Satz 1 und 2 – also ausschließlich Zeiten bei DEMSELBEN Arbeitgeber. Die Anrechnungsregeln der Sätze 3 und 4 (TVöD-Arbeitgeber, andere ö.-r. Arbeitgeber) sind hier ausdrücklich NICHT in Bezug genommen.\n\nBeispiel: Wer nach 20 Jahren beim Landkreis zur Stadt wechselt, beginnt dort für Kündigungsfristen und Unkündbarkeit bei null – für Jubiläumsgeld und Krankengeldzuschuss zählen die 20 Jahre bei unmittelbarem Wechsel dagegen mit."
    },

    e_zaehlt_nicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 III 1, 2 TVöD",
      title: "Zeit zählt nicht zur Beschäftigungszeit",
      text: "Ausbildungszeiten (kein Arbeitsverhältnis), Zeiten im Beamtenverhältnis und Sonderurlaub nach § 28 TVöD ohne vorher anerkanntes dienstliches/betriebliches Interesse bleiben bei der Beschäftigungszeit unberücksichtigt.\n\nPraxisfolge des Sonderurlaubs: Wer z. B. drei Jahre unbezahlten Sonderurlaub ohne Interessenanerkennung nimmt, verlängert damit die Wartezeiten für Jubiläumsgeld, längeren Krankengeldzuschuss, längere Kündigungsfristen und die Unkündbarkeit entsprechend."
    },

    e_zaehlt_nicht_iws: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 III 3, 4 TVöD",
      title: "Vordienstzeit wird nicht anerkannt",
      text: "Die Vordienstzeit zählt nicht zur Beschäftigungszeit i. w. S., weil entweder\n• der frühere Arbeitgeber nicht vom Geltungsbereich des TVöD erfasst und kein öffentlich-rechtlicher Arbeitgeber war (private Arbeitgeber, kommunale Gesellschaften in Privatrechtsform, Arbeitgeber mit bloßer TVöD-Bezugnahme oder Haustarifvertrag), oder\n• kein unmittelbarer Wechsel vorlag (echte Unterbrechung zwischen den Arbeitsverhältnissen – mehr als Wochenende/Feiertage).\n\nEs bleibt bei der Beschäftigungszeit, die beim aktuellen Arbeitgeber selbst zurückgelegt wurde."
    }
  },

  routers: {}
});
