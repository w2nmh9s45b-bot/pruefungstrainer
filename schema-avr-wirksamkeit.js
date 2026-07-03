/*
 * Prüfungsschema: Wirksamkeit und Bekanntgabe des VA (§§ 41, 43 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Skript Teil 3 – Thema 3 Wirksamkeit und Bekanntgabe" (Schmitt)
 *  - Gesetze: VwVfG §§ 41, 43 (Volltext geprüft – seit dem PostModG gilt die
 *    VIER-Tages-Fiktion des § 41 II VwVfG, nicht mehr drei Tage wie in älteren
 *    Skripten!), VwZG §§ 2 ff., § 8; § 1 LVwZG
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-wirksamkeit",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Der Verwaltungsakt",
  title: "Wirksamkeit und Bekanntgabe des VA (§§ 41, 43 VwVfG)",
  description: "Wann und wem gegenüber wird ein VA wirksam? Einfache Bekanntgabe mit Viertages-Fiktion, förmliche Zustellung nach VwZG (PZU, Einschreiben, Empfangsbekenntnis), öffentliche Bekanntgabe, Bevollmächtigte, Heilung von Zustellungsmängeln und Ende der Wirksamkeit.",
  start: "start",
  stations: [
    { id: "art", label: "Bekanntgabeart" },
    { id: "zugang", label: "Zugang" },
    { id: "wirk", label: "Wirksamkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: VA wirksam",
    neg: "Ergebnis: VA nicht wirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§ 41 I, § 43 I VwVfG",
      title: "Auf welchem Weg wurde der VA bekannt gegeben?",
      text: "Ein Verwaltungsakt wird gegenüber demjenigen, für den er bestimmt ist oder der von ihm betroffen wird, in dem Zeitpunkt wirksam, in dem er ihm bekannt gegeben wird (§ 43 I 1 VwVfG). Der VA wird mit dem Inhalt wirksam, mit dem er bekannt gegeben wird (§ 43 I 2 VwVfG).",
      def: "<b>Bekanntgabe</b> (nicht legaldefiniert) setzt voraus:<br>• sie wird <b>amtlich veranlasst</b> (mit Bekanntgabewillen der Behörde),<br>• der VA gelangt so in den <b>Machtbereich des Empfängers</b>,<br>• dass dieser die <b>Möglichkeit der Kenntnisnahme</b> hat (tatsächliches Lesen nicht erforderlich!).<br><br><b>Drei Wege:</b> einfache Bekanntgabe (§ 41 I, II VwVfG), förmliche Zustellung (§ 41 V VwVfG i. V. m. § 1 LVwZG, VwZG), öffentliche Bekanntgabe (§ 41 III, IV VwVfG).",
      hint: "Ist ein Bevollmächtigter bestellt, KANN die Bekanntgabe ihm gegenüber vorgenommen werden (§ 41 I 2 VwVfG). Hat er eine schriftliche Vollmacht vorgelegt, MUSS die Zustellung an ihn erfolgen (§ 7 I 2 VwZG).",
      options: [
        { label: "Einfache Bekanntgabe (Brief, mündlich, elektronisch)", next: "q_einfach", tone: "neutral" },
        { label: "Förmliche Zustellung (VwZG)", next: "q_zustellung", tone: "neutral" },
        { label: "Öffentliche Bekanntgabe", next: "q_oeffentlich", tone: "neutral" },
        { label: "Gar nicht bekannt gegeben (nur intern verfügt)", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_einfach: {
      station: "zugang",
      kind: "frage",
      norm: "§ 41 II VwVfG",
      title: "Einfache Bekanntgabe: Ist der VA zugegangen?",
      def: "<b>Bekanntgabefiktion (§ 41 II VwVfG n. F.):</b> Ein schriftlicher VA, der im Inland durch die Post übermittelt wird, gilt am <b>VIERTEN Tag</b> nach der Aufgabe zur Post als bekannt gegeben (S. 1); ein elektronisch übermittelter VA am vierten Tag nach der Absendung (S. 2).<br><br><b>Achtung Aktualität:</b> Ältere Skripte nennen noch die „Drei-Tages-Fiktion“ – seit der Postrechtsreform gilt die <b>Viertages-Fiktion</b>!<br><br><b>Ausnahmen (S. 3):</b> Die Fiktion gilt nicht, wenn der VA nicht oder zu einem SPÄTEREN Zeitpunkt zugegangen ist; im Zweifel hat die BEHÖRDE den Zugang und dessen Zeitpunkt nachzuweisen.",
      options: [
        { label: "Zugang innerhalb der Fiktionsfrist", detail: "wirksam am vierten Tag nach Aufgabe zur Post", next: "q_wirksamkeit", tone: "pos" },
        { label: "Tatsächlicher Zugang später", detail: "maßgeblich ist der tatsächliche Zugang", next: "q_wirksamkeit", tone: "warn" },
        { label: "Zugang nicht nachweisbar / VA nicht zugegangen", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_zustellung: {
      station: "zugang",
      kind: "frage",
      norm: "§ 41 V VwVfG, § 1 LVwZG, §§ 2 ff. VwZG",
      title: "Wurde ordnungsgemäß zugestellt?",
      def: "<b>Zustellungsarten (VwZG, in RLP über § 1 LVwZG):</b><br>• <b>Zustellungsurkunde (PZU)</b> – § 3 VwZG i. V. m. §§ 177 ff. ZPO: Übergabe, Ersatzzustellung an Familienangehörige oder Einlegen in den Briefkasten; die Urkunde ist öffentliche Urkunde und beweist die Zustellung,<br>• <b>Einschreiben</b> (Übergabe- oder Rückschein) – § 4 VwZG: bei Übergabe-Einschreiben gilt das Dokument am vierten Tag nach Aufgabe zur Post als zugestellt, außer es ist nicht oder später zugegangen,<br>• <b>Empfangsbekenntnis</b> – § 5 VwZG (an Behörden, Anwälte usw.),<br>• Sonderformen: Zustellung im Ausland (§ 9 VwZG), öffentliche Zustellung (§ 10 VwZG).<br><br>Förmliche Zustellung ist z. T. gesetzlich vorgeschrieben (z. B. § 73 III 1 VwGO für den Widerspruchsbescheid).",
      options: [
        { label: "Ja, Zustellung formgerecht", next: "q_wirksamkeit", tone: "pos" },
        { label: "Nein, Zustellungsmangel", detail: "z. B. falsche Person, fehlende Urkunde, Vollmacht missachtet (§ 7 I 2 VwZG)", next: "q_heilung", tone: "neg" }
      ]
    },

    q_heilung: {
      station: "zugang",
      kind: "frage",
      norm: "§ 8 VwZG",
      title: "Ist der Zustellungsmangel geheilt?",
      def: "<b>Heilung von Zustellungsmängeln (§ 8 VwZG):</b> Lässt sich die formgerechte Zustellung nicht nachweisen oder ist das Dokument unter Verletzung zwingender Zustellungsvorschriften zugegangen, gilt es als in dem Zeitpunkt zugestellt, in dem es dem <b>Empfangsberechtigten tatsächlich zugegangen</b> ist.<br><br>Empfangsberechtigter ist bei schriftlicher Vollmacht der Bevollmächtigte – die Heilung tritt dann erst ein, wenn ER das Dokument tatsächlich erhält.",
      options: [
        { label: "Ja, tatsächlicher Zugang beim Empfangsberechtigten", next: "q_wirksamkeit", tone: "warn" },
        { label: "Nein, kein tatsächlicher Zugang", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_oeffentlich: {
      station: "zugang",
      kind: "frage",
      norm: "§ 41 III, IV VwVfG",
      title: "Durfte öffentlich bekannt gegeben werden?",
      def: "<b>Öffentliche Bekanntgabe zulässig:</b><br>• wenn dies durch Rechtsvorschrift zugelassen ist (§ 41 III 1),<br>• bei einer <b>Allgemeinverfügung</b> auch, wenn die Bekanntgabe an die Beteiligten untunlich ist (§ 41 III 2) – z. B. Verkehrszeichen (bekannt gegeben durch Aufstellen, wirksam gegenüber jedem Verkehrsteilnehmer, der sich der Stelle nähert – unabhängig von tatsächlicher Kenntnis!).<br><br><b>Wirkung (§ 41 IV):</b> Der schriftliche VA gilt zwei Wochen nach der ortsüblichen Bekanntmachung als bekannt gegeben; bei Allgemeinverfügungen kann ein früherer Tag (frühestens der Folgetag) bestimmt werden.",
      options: [
        { label: "Ja, zulässig und ordnungsgemäß bekannt gemacht", next: "q_wirksamkeit", tone: "pos" },
        { label: "Nein, Voraussetzungen lagen nicht vor", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_wirksamkeit: {
      station: "wirk",
      kind: "frage",
      norm: "§ 43 II, III VwVfG",
      title: "Besteht die Wirksamkeit fort?",
      def: "<b>Äußere Wirksamkeit:</b> tritt mit Bekanntgabe ein – auch ein RECHTSWIDRIGER VA ist wirksam (§ 43 II VwVfG)! Nur der nichtige VA ist unwirksam (§ 43 III VwVfG).<br><b>Innere Wirksamkeit:</b> die inhaltliche Geltung kann später eintreten (Befristung, Bedingung – § 36 VwVfG).<br><br><b>Ende der Wirksamkeit (§ 43 II VwVfG):</b> solange und soweit der VA nicht<br>• zurückgenommen (§ 48),<br>• widerrufen (§ 49),<br>• anderweitig aufgehoben (Abhilfe-/Widerspruchsbescheid, Urteil) oder<br>• durch Zeitablauf oder auf andere Weise erledigt ist.",
      options: [
        { label: "Wirksamkeit besteht fort", next: "e_wirksam", tone: "pos" },
        { label: "VA ist nichtig (§ 44 VwVfG)", next: "e_nichtig", tone: "neg" },
        { label: "VA hat sich erledigt / wurde aufgehoben", next: "e_erledigt", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 43 I VwVfG",
      title: "Der VA ist wirksam (geworden)",
      text: "Der VA wurde ordnungsgemäß bekannt gegeben und ist gegenüber dem Betroffenen wirksam.\n\nFolgen der Wirksamkeit:\n• Der Lauf der Rechtsbehelfsfristen beginnt (§ 70 I VwGO: ein Monat ab Bekanntgabe),\n• der VA ist anfechtbar, solange keine Bestandskraft eingetreten ist,\n• die Behörde ist bis zu einer Aufhebung an den VA gebunden (§ 43 II VwVfG),\n• der VA kann Grundlage der Vollstreckung sein."
    },

    e_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I VwVfG",
      title: "Der VA ist (diesem Betroffenen gegenüber) nicht wirksam",
      text: "Ohne wirksame Bekanntgabe entfaltet der VA gegenüber dem Betroffenen keine Rechtswirkungen. Es laufen keine Rechtsbehelfsfristen; der VA kann nicht vollstreckt werden.\n\nBeachte: Die Bekanntgabe wirkt relativ – ein VA kann gegenüber dem Adressaten wirksam, gegenüber einem Dritten (z. B. dem Nachbarn, dem er nie amtlich bekannt gegeben wurde) aber unwirksam sein. Die private Weitergabe ersetzt die amtliche Bekanntgabe nicht (kein Bekanntgabewille der Behörde)."
    },

    e_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 III VwVfG",
      title: "Der VA ist nichtig und damit unwirksam",
      text: "Ein nichtiger VA (§ 44 VwVfG) ist unwirksam (§ 43 III VwVfG) und zieht keinerlei Rechtsfolgen nach sich – er muss weder befolgt noch angefochten werden.\n\nRechtsschutz: Nichtigkeitsfeststellung durch die Behörde (§ 44 V VwVfG) oder Nichtigkeitsfeststellungsklage (§ 43 I Alt. 2 VwGO). Details im Schema „Fehlerfolgen (§§ 44–46 VwVfG)“."
    },

    e_erledigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 43 II VwVfG",
      title: "Die Wirksamkeit des VA ist beendet",
      text: "Der VA war wirksam, seine Wirksamkeit ist aber durch Aufhebung (Rücknahme § 48, Widerruf § 49, Abhilfe-/Widerspruchsbescheid, Urteil) oder durch Erledigung (Zeitablauf, Wegfall des Regelungsobjekts, Vollzug) beendet.\n\nRechtsschutz gegen einen erledigten VA: Fortsetzungsfeststellungsklage (§ 113 I 4 VwGO, ggf. analog) – eigenes Schema in FS II."
    }
  },

  routers: {}
});
