/*
 * Prüfungsschema: Fortsetzungsfeststellungsklage (§ 113 I 4 VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema Fortsetzungsfeststellungsklage" (Weil – vier
 *    Konstellationen, FFI-Fallgruppen, Vorverfahrens-/Fristdifferenzierung)
 *  - "5.Fortsetzungsfeststellungsklage", "Die Statthaftigkeit der FFK"
 *  - Gesetze: VwGO §§ 42, 74, 113 I 4, V (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-ffk",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Klagearten",
  title: "Fortsetzungsfeststellungsklage (§ 113 I 4 VwGO)",
  description: "Rechtsschutz nach Erledigung des VA: die vier Konstellationen (Anfechtungs-/Verpflichtungssituation, Erledigung vor/nach Klageerhebung), das Fortsetzungsfeststellungsinteresse mit seinen vier Fallgruppen und die Begründetheit.",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "zulurspr", label: "Urspr. Klage" },
    { id: "ffi", label: "FF-Interesse" },
    { id: "begruendet", label: "Begründetheit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Klage hat Erfolg",
    neg: "Ergebnis: Klage ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 40 I 1 VwGO",
      title: "Verwaltungsrechtsweg und Erledigung?",
      def: "Verwaltungsrechtsweg wie üblich (Spezialzuweisung oder § 40 I VwGO).<br><br><b>Erledigung</b> liegt vor, wenn die rechtliche oder tatsächliche Beschwer nachträglich wegfällt – das Begehren des Klägers wird gegenstandslos: Aufhebung des VA, Zeitablauf (befristete Erlaubnis), Vollzug (Abschleppen!), Wegfall des Regelungsobjekts.",
      options: [
        { label: "Rechtsweg (+), VA/Begehren hat sich erledigt", next: "q_konstellation", tone: "pos" },
        { label: "Keine Erledigung", detail: "dann Anfechtungs- oder Verpflichtungsklage", next: "e_keine_erledigung", tone: "neg" }
      ]
    },

    q_konstellation: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 113 I 4 VwGO (ggf. analog)",
      title: "Welche der vier Konstellationen liegt vor?",
      def: "<b>Die Statthaftigkeit richtet sich nach dem Klagebegehren (§ 88 VwGO):</b><br><br><b>1. Anfechtungssituation, Erledigung NACH Klageerhebung:</b> § 113 I 4 VwGO direkt,<br><b>2. Anfechtungssituation, Erledigung VOR Klageerhebung:</b> § 113 I 4 VwGO analog,<br><b>3. Verpflichtungssituation, Erledigung nach Klageerhebung:</b> § 113 I 4 analog i. V. m. § 113 V VwGO,<br><b>4. Verpflichtungssituation, Erledigung vor Klageerhebung:</b> § 113 I 4 doppelt analog.<br><br>Voraussetzung jeweils: ursprünglich wirksamer VA, dessen Aufhebung begehrt wurde, bzw. abgelehnter/unterlassener VA, dessen Erlass begehrt wurde.",
      options: [
        { label: "Anfechtung, Erledigung nach Klageerhebung", next: "q_zul_nach", tone: "neutral" },
        { label: "Anfechtung, Erledigung vor Klageerhebung", next: "q_zul_vor", set: { vor: true }, tone: "neutral" },
        { label: "Verpflichtung, Erledigung nach Klageerhebung", next: "q_zul_nach", set: { verpflichtung: true }, tone: "neutral" },
        { label: "Verpflichtung, Erledigung vor Klageerhebung", next: "q_zul_vor", set: { verpflichtung: true, vor: true }, tone: "neutral" }
      ]
    },

    q_zul_nach: {
      station: "zulurspr",
      kind: "frage",
      norm: "§§ 42 II, 68 ff., 74 VwGO",
      title: "War die ursprünglich erhobene Klage zulässig?",
      def: "Die FFK setzt voraus, dass die ursprüngliche Anfechtungs- bzw. Verpflichtungsklage ZULÄSSIG war:<br>• <b>Klagebefugnis</b> (§ 42 II VwGO),<br>• <b>ordnungsgemäßes und erfolgloses Vorverfahren</b> (soweit erforderlich),<br>• <b>Klagefrist</b> (§ 74 VwGO) und ordnungsgemäße Klageerhebung.<br><br>Bei Erledigung nach Klageerhebung sind diese Voraussetzungen bereits „verbraucht“ – sie mussten bei Erhebung vorgelegen haben.",
      options: [
        { label: "Ja, ursprüngliche Klage war zulässig", next: "q_ffi", tone: "pos" },
        { label: "Nein (z. B. verfristet erhoben)", next: "e_unzulaessig_urspr", tone: "neg" }
      ]
    },

    q_zul_vor: {
      station: "zulurspr",
      kind: "frage",
      norm: "§ 68 ff., § 74 VwGO",
      title: "Erledigung vor Klageerhebung: Wann trat sie ein?",
      def: "Bei Erledigung VOR Klageerhebung ist zu differenzieren:<br>• <b>Erledigung vor Ablauf der WS-Frist:</b> Ein Vorverfahren ist nach h. M. weder möglich noch erforderlich; nach BVerwG ist auch KEINE Klagefrist einzuhalten (aber Verwirkung!),<br>• <b>Erledigung nach Ablauf der WS-Frist</b> (ohne eingelegten Widerspruch): Der VA war bereits bestandskräftig – die FFK ist unzulässig,<br>• <b>Erledigung nach Zustellung des WS-Bescheids:</b> Das erledigende Ereignis muss vor Ablauf der Klagefrist eintreten, sonst Bestandskraft.<br><br>Klagebefugnis (§ 42 II VwGO) ist stets erforderlich.",
      options: [
        { label: "Vor Ablauf der WS-Frist – kein Vorverfahren nötig", next: "q_ffi", tone: "pos" },
        { label: "Form-/fristgerechter WS lag vor, Erledigung im Verfahren", next: "q_ffi", tone: "pos" },
        { label: "VA war bereits bestandskräftig", next: "e_unzulaessig_urspr", tone: "neg" }
      ]
    },

    q_ffi: {
      station: "ffi",
      kind: "frage",
      norm: "§ 113 I 4 VwGO",
      title: "Besteht ein Fortsetzungsfeststellungsinteresse?",
      def: "<b>Berechtigtes Interesse an der Feststellung</b> = jedes nach vernünftigen Erwägungen schutzwürdige Interesse rechtlicher, wirtschaftlicher oder ideeller Art.<br><br><b>Anerkannte Fallgruppen:</b><br>• <b>Wiederholungsgefahr:</b> konkrete Anhaltspunkte, dass eine gleichartige Maßnahme droht,<br>• <b>Rehabilitationsinteresse:</b> der VA wirkt diskriminierend nach, Ansehen/Ruf objektiv beeinträchtigt,<br>• <b>Präjudizinteresse:</b> Vorgreiflichkeit für einen Amtshaftungs-/Entschädigungsprozess – NUR bei Erledigung NACH Klageerhebung (sonst kann gleich vor dem Zivilgericht geklagt werden),<br>• <b>tiefgreifende, sich typischerweise schnell erledigende Grundrechtseingriffe</b> (z. B. Versammlungsauflösung, Durchsuchung).",
      options: [
        { label: "Ja, anerkannte Fallgruppe einschlägig", next: "q_begruendet", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig_ffi", tone: "neg" }
      ]
    },

    q_begruendet: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 113 I 4 i. V. m. I 1 / V VwGO",
      title: "Begründetheit: War der VA bzw. die Ablehnung rechtswidrig?",
      def: "<b>Anfechtungssituation:</b> Die FFK ist begründet, soweit der VA (vor seiner Erledigung) RECHTSWIDRIG GEWESEN ist und der Kläger dadurch in seinen Rechten verletzt war.<br><br><b>Verpflichtungssituation:</b> begründet, soweit die Ablehnung/Unterlassung des VA rechtswidrig gewesen ist und der Kläger dadurch in seinen Rechten verletzt war (d. h. ein Anspruch auf den VA bestand).<br><br>Prüfung der Rechtmäßigkeit wie gewohnt: EGL – formell – materiell (Schema „Rechtmäßigkeit eines VA“).",
      options: [
        { label: "VA/Ablehnung war rechtswidrig + Rechtsverletzung", next: "e_begruendet", tone: "pos" },
        { label: "VA/Ablehnung war rechtmäßig", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 I 4 VwGO",
      title: "FFK zulässig und begründet",
      text: "Das Gericht stellt fest, dass der erledigte VA rechtswidrig gewesen ist bzw. dass die Ablehnung/Unterlassung des begehrten VA rechtswidrig gewesen ist.\n\nNutzen: Rehabilitation, Klärung für Wiederholungsfälle oder Bindungswirkung für den nachfolgenden Amtshaftungsprozess (das Zivilgericht ist an die rechtskräftige Feststellung gebunden)."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 I 4 VwGO",
      title: "FFK zulässig, aber unbegründet",
      text: "Der erledigte VA war rechtmäßig bzw. es bestand kein Anspruch auf den begehrten VA. Die Feststellungsklage wird abgewiesen."
    },

    e_keine_erledigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 42 I VwGO",
      title: "Keine Erledigung → Anfechtungs-/Verpflichtungsklage",
      text: "Solange der VA noch Rechtswirkungen entfaltet (die Beschwer fortbesteht), bleibt es bei Anfechtungs- bzw. Verpflichtungsklage – eigene Schemata. Beachte: Ein vollzogener, aber weiter belastender VA (z. B. Kostenbescheid) ist NICHT erledigt."
    },

    e_unzulaessig_urspr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 70, 74 VwGO",
      title: "FFK unzulässig: Bestandskraft bzw. unzulässige Ausgangsklage",
      text: "Die FFK kann nicht besser stehen als die ursprüngliche Klage: War der VA bei Eintritt der Erledigung bereits bestandskräftig (WS-/Klagefrist versäumt) oder die erhobene Klage unzulässig, ist auch die Fortsetzungsfeststellung unzulässig."
    },

    e_unzulaessig_ffi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 I 4 VwGO",
      title: "FFK unzulässig: kein Fortsetzungsfeststellungsinteresse",
      text: "Keine der anerkannten Fallgruppen (Wiederholungsgefahr, Rehabilitation, Präjudizialität, tiefgreifender Grundrechtseingriff) ist einschlägig – für die begehrte Feststellung besteht kein schutzwürdiges Interesse."
    }
  },

  routers: {}
});
