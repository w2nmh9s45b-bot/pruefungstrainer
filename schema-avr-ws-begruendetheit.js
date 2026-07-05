/*
 * Prüfungsschema: Begründetheit des Widerspruchs, Tenor und Kosten
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "Thema 5 Widerspruchsverfahren" (Schmitt – Obersätze, Prüfungsaufbau
 *    Anfechtungs-/Verpflichtungswiderspruch)
 *  - "AVR OLE 32 – Begründetheit des Widerspruchs"
 *  - "AVR OLE 34 – Kosten, Tenorierung, Bestandteile des WS-Bescheids"
 *    (Rankenhohn – Tenorformeln, Kostentabelle, reformatio in peius in RLP)
 *  - "Uebersicht Erfolgsaussichten eines Widerspruchs"
 *  - Gesetze: VwGO §§ 68, 72, 73, 113 (analog); AGVwGO §§ 6 II, 7, 19;
 *    LGebG §§ 13, 15; KAG § 3 V (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-ws-begruendetheit",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Widerspruchsverfahren",
  title: "Begründetheit des Widerspruchs, Tenor und Kosten",
  description: "Anfechtungswiderspruch (§ 113 I 1 VwGO analog) und Verpflichtungswiderspruch (§ 113 V VwGO analog) mit Obersätzen, Zweckmäßigkeitskontrolle, reformatio in peius in RLP, Tenorierung des Widerspruchsbescheids und Kostenverteilung nach AGVwGO/LGebG.",
  start: "start",
  stations: [
    { id: "art", label: "WS-Art" },
    { id: "rw", label: "Rechtmäßigkeit" },
    { id: "verletzung", label: "Rechtsverletzung" },
    { id: "zweck", label: "Zweckmäßigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Widerspruch begründet",
    neg: "Ergebnis: Widerspruch unbegründet",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§ 113 I 1 / § 113 V VwGO analog",
      title: "Anfechtungs- oder Verpflichtungswiderspruch?",
      def: "<b>Obersatz Anfechtungswiderspruch:</b> „Der Anfechtungswiderspruch ist begründet, soweit der VA rechtswidrig und der WS-Führer dadurch in seinen Rechten verletzt ist, § 113 I 1 VwGO analog.“<br><br><b>Obersatz Verpflichtungswiderspruch:</b> „Der Verpflichtungswiderspruch ist begründet, wenn die Ablehnung (bzw. Unterlassung) des VA rechtswidrig, der WS-Führer dadurch in seinen Rechten verletzt ist und die Sache spruchreif ist, § 113 V 1 VwGO analog. Dies ist der Fall, wenn der WS-Führer einen Anspruch auf Erlass des begehrten VA hat.“",
      hint: "Das gesamte WS-Verfahren ist ein einheitliches Vorverfahren: Änderungen der Sach- und Rechtslage bis zur Entscheidung sind zu berücksichtigen (Gegenstand der späteren Klage ist der VA in Gestalt des WS-Bescheids, § 79 I Nr. 1 VwGO). Klassiker: Das im WS-Verfahren nachgereichte Gutachten belegt die Fahreignung – die WS-Behörde muss es berücksichtigen.",
      options: [
        { label: "Anfechtungswiderspruch (gegen belastenden VA)", next: "q_afw_rw", tone: "neutral" },
        { label: "Verpflichtungswiderspruch (auf Erlass eines VA)", next: "q_vpw_agl", set: { verpflichtung: true }, tone: "neutral" }
      ]
    },

    /* ---------- Anfechtungswiderspruch ---------- */

    q_afw_rw: {
      station: "rw",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist der angefochtene VA rechtswidrig?",
      def: "<b>Prüfung wie im Schema „Rechtmäßigkeit eines VA (Vollprüfung)“:</b><br>1. <b>Ermächtigungsgrundlage</b> (spezialgesetzlich vor allgemein, kurz benennen),<br>2. <b>formelle Rechtmäßigkeit:</b> Zuständigkeit (sachlich/örtlich), Verfahren (insb. Anhörung § 28 VwVfG – Fehlerfolgen/Heilung!), Form (§§ 37 III, 39 I VwVfG),<br>3. <b>materielle Rechtmäßigkeit:</b> Tatbestand der EGL, Rechtsfolge (Bestimmtheit, Möglichkeit, VHM; bei Ermessen: Ermessensfehler).",
      options: [
        { label: "VA rechtswidrig", next: "q_afw_verletzung", tone: "pos" },
        { label: "VA rechtmäßig", next: "q_zweck", tone: "neg" },
        { label: "VA rechtswidrig, aber Fehler geheilt/§ 46 VwVfG", detail: "Aufhebung kann nicht allein darauf gestützt werden", next: "q_zweck", tone: "warn" }
      ]
    },

    q_afw_verletzung: {
      station: "verletzung",
      kind: "frage",
      norm: "§ 113 I 1 VwGO analog",
      title: "Ist der WS-Führer dadurch in seinen Rechten verletzt?",
      def: "Die Rechtsverletzung ist die <b>Konkretisierung der Widerspruchsbefugnis</b> – dort genügte die Möglichkeit, hier muss sie tatsächlich vorliegen.<br><br>• <b>Adressat</b> eines rechtswidrigen belastenden VA: stets verletzt (mindestens Art. 2 I GG),<br>• <b>Dritter</b> (z. B. Nachbar): nur verletzt, wenn gerade eine DRITTSCHÜTZENDE Norm verletzt ist und er zum geschützten Personenkreis gehört (Schutznormtheorie).",
      options: [
        { label: "Ja (Adressat / drittschützende Norm verletzt)", next: "e_begruendet_afw", tone: "pos" },
        { label: "Nein (nur objektive Rechtsverletzung ohne Drittschutz)", next: "e_unbegruendet_drittschutz", tone: "neg" }
      ]
    },

    /* ---------- Verpflichtungswiderspruch ---------- */

    q_vpw_agl: {
      station: "rw",
      kind: "frage",
      norm: "Anspruchsgrundlage",
      title: "Besteht ein Anspruch auf Erlass des begehrten VA?",
      def: "Beim Verpflichtungswiderspruch spricht man nicht von Ermächtigungs-, sondern von <b>Anspruchsgrundlage</b> (z. B. § 70 I LBauO, Zusicherung § 38 VwVfG, Subventionsrichtlinie i. V. m. Art. 3 I GG).<br><br><b>Prüfung:</b><br>1. Anspruchsgrundlage benennen,<br>2. <b>formelle Voraussetzungen</b> (i. d. R. nur: Antrag bei der zuständigen Behörde),<br>3. <b>materielle Voraussetzungen</b> (Tatbestand der AGL),<br>4. <b>Rechtsfolge:</b> gebundene Entscheidung → Anspruch; Ermessen → grundsätzlich nur Anspruch auf ermessensfehlerfreie Entscheidung (voller Anspruch nur bei Ermessensreduzierung auf Null).",
      options: [
        { label: "Ja, gebundener Anspruch – Ablehnung rechtswidrig", next: "q_vpw_spruchreife", tone: "pos" },
        { label: "Ermessen: Ablehnung ermessensfehlerhaft", next: "q_vpw_spruchreife", set: { nur_bescheidung: true }, tone: "warn" },
        { label: "Nein, kein Anspruch – Ablehnung rechtmäßig", next: "q_zweck", tone: "neg" }
      ]
    },

    q_vpw_spruchreife: {
      station: "verletzung",
      kind: "frage",
      norm: "§ 113 V VwGO analog",
      title: "Rechtsverletzung und Spruchreife?",
      def: "<b>Rechtsverletzung:</b> liegt vor, wenn die Ablehnung/Unterlassung rechtswidrig ist und die Anspruchsnorm (auch) den Interessen des WS-Führers dient.<br><br><b>Spruchreife:</b> Die Sache ist spruchreif, wenn feststeht, dass der WS-Führer den VA beanspruchen kann – bei gebundenen Entscheidungen und Ermessensreduzierung auf Null (+). Sie fehlt, wenn der Behörde noch Ermessens- oder Beurteilungsspielraum bleibt oder der Sachverhalt nicht vollständig ermittelt ist – dann ergeht eine Verpflichtung zur Neubescheidung (§ 113 V 2 VwGO analog).",
      options: [
        { label: "Rechtsverletzung (+), Sache spruchreif", next: "e_begruendet_vpw", tone: "pos" },
        { label: "Rechtsverletzung (+), keine Spruchreife", detail: "Neubescheidung unter Beachtung der Rechtsauffassung", next: "e_begruendet_bescheidung", tone: "warn" },
        { label: "Keine Rechtsverletzung", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ---------- Zweckmäßigkeit ---------- */

    q_zweck: {
      station: "zweck",
      kind: "frage",
      norm: "§ 68 I 1 VwGO, § 6 II AGVwGO",
      title: "Ist der VA (auch) unzweckmäßig?",
      def: "Im Vorverfahren werden Rechtmäßigkeit UND <b>Zweckmäßigkeit</b> nachgeprüft (§ 68 I 1 VwGO) – bei Ermessensentscheidungen kann die WS-Behörde also auch eine rechtmäßige, aber unzweckmäßige Entscheidung ändern.<br><br><b>Ausnahme RLP (§ 6 II AGVwGO):</b> Widerspruchsbescheide über VA, die in <b>Selbstverwaltungsangelegenheiten der Gemeinden</b> erlassen worden sind, prüft der Rechtsausschuss NUR auf ihre <b>Rechtmäßigkeit</b> – die Zweckmäßigkeitskontrolle wäre ein Eingriff in die kommunale Selbstverwaltung (Art. 28 II GG, Art. 49 LV).",
      options: [
        { label: "Unzweckmäßig (und Zweckmäßigkeitskontrolle eröffnet)", next: "e_begruendet_zweck", tone: "warn" },
        { label: "Zweckmäßig bzw. nur Rechtskontrolle (§ 6 II AGVwGO)", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet_afw: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 I 1 VwGO analog",
      title: "Anfechtungswiderspruch begründet – VA wird aufgehoben",
      text: "Der VA ist rechtswidrig und verletzt den WS-Führer in seinen Rechten.\n\nVerfahrensgang: Hält die Ausgangsbehörde den Widerspruch für begründet, MUSS sie abhelfen (§ 72 VwGO – Abhilfebescheid ist VA). Sonst legt sie ihn der WS-Behörde vor (Nichtabhilfe ist kein VA); diese erlässt den Widerspruchsbescheid (§ 73 VwGO).\n\nTenor: „Der Bescheid des Widerspruchsgegners vom … wird aufgehoben.“ (§ 113 I 1 VwGO analog)\n\nKosten: Bei erfolgreichem Widerspruch trägt der Widerspruchsgegner die Kosten (§ 15 V LGebG, § 19 I AGVwGO); die Zuziehung eines Bevollmächtigten ist erstattungsfähig, wenn notwendig (§ 80 II VwVfG-Rechtsgedanke, § 19 AGVwGO)."
    },

    e_begruendet_vpw: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 V 1 VwGO analog",
      title: "Verpflichtungswiderspruch begründet – VA ist zu erlassen",
      text: "Der WS-Führer hat einen Anspruch auf den begehrten VA; die Ablehnung/Unterlassung war rechtswidrig, die Sache ist spruchreif.\n\nTenor: „Der Widerspruchsgegner wird unter Aufhebung des Ablehnungsbescheides vom … verpflichtet, dem Widerspruchsführer die beantragte Erlaubnis/Genehmigung zu erteilen.“ (§ 113 V 1 VwGO analog)\n\nKosten: trägt der Widerspruchsgegner (§ 15 V LGebG, § 19 I AGVwGO)."
    },

    e_begruendet_bescheidung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Bescheidung",
      norm: "§ 113 V 2 VwGO analog",
      title: "Begründet – aber nur Verpflichtung zur Neubescheidung",
      text: "Die Ablehnung ist (ermessens-)fehlerhaft und verletzt den WS-Führer in seinen Rechten; mangels Spruchreife bleibt der Behörde aber ein Entscheidungsspielraum.\n\nTenor: „Der Widerspruchsgegner wird unter Aufhebung des Ablehnungsbescheides vom … verpflichtet, über den Antrag des Widerspruchsführers unter Beachtung der Rechtsauffassung des Rechtsausschusses erneut zu entscheiden.“ (§ 113 V 2 VwGO analog)"
    },

    e_begruendet_zweck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: unzweckmäßig",
      norm: "§ 68 I 1 VwGO",
      title: "Widerspruch (nur) wegen Unzweckmäßigkeit erfolgreich",
      text: "Der VA ist zwar rechtmäßig, die WS-Behörde hält die getroffene Ermessensentscheidung aber für unzweckmäßig und ersetzt sie durch eine eigene, zweckmäßigere Entscheidung. Das ist die Besonderheit des Vorverfahrens gegenüber dem Gerichtsverfahren (das Gericht prüft nur die Rechtmäßigkeit, § 114 VwGO!).\n\nGrenze in RLP: In Selbstverwaltungsangelegenheiten der Gemeinden ist die Zweckmäßigkeitskontrolle ausgeschlossen (§ 6 II AGVwGO)."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 73 VwGO",
      title: "Widerspruch unbegründet – Zurückweisung",
      text: "Der VA ist rechtmäßig (bzw. der Anspruch besteht nicht) und die Entscheidung ist zweckmäßig. \n\nTenor: „Der Widerspruch wird zurückgewiesen.“\n\nKosten: Bei erfolglosem Widerspruch trägt der Widerspruchsführer die Kosten (§ 13 I Nr. 1 LGebG, § 19 I AGVwGO). Sonderfall: Ist der Widerspruch nur deshalb erfolglos, weil ein Form-/Verfahrensmangel nach § 45 VwVfG geheilt wurde, trägt der Widerspruchsgegner die Kosten (§ 15 V LGebG analog, § 19 I AGVwGO).\n\nAufbau des WS-Bescheids: Rubrum (WF, WG, Beigeladene, Besetzung des Rechtsausschusses – § 73 II VwGO i. V. m. § 7 II AGVwGO: Vorsitzender + zwei Beisitzer), Tenor (Sache + Kosten), Gründe (Tatbestand, Anträge, rechtliche Würdigung im Urteilsstil), Rechtsbehelfsbelehrung (Klage zum VG, §§ 73 III, 58 VwGO).\n\nBeachte: Eine reformatio in peius (Verböserung) ist in RLP nach der Rspr. des OVG Koblenz UNZULÄSSIG (Ausnahme: § 3 V 2 KAG)."
    },

    e_unbegruendet_drittschutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schutznormtheorie",
      title: "Unbegründet: keine Verletzung EIGENER Rechte",
      text: "Der VA ist zwar objektiv rechtswidrig, verletzt aber keine Norm, die gerade den Schutz des WS-Führers bezweckt. Der (Dritt-)Widerspruch ist unbegründet und wird zurückgewiesen – die bloße objektive Rechtswidrigkeit verhilft dem Nachbarwiderspruch nicht zum Erfolg."
    }
  },

  routers: {}
});
