/*
 * Prüfungsschema: Feststellungsklage (§ 43 VwGO)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Erfolgsaussichten einer Feststellungsklage" (Dr. Konrad – Rechtsverhältnis,
 *    Subsidiarität, Feststellungsinteresse)
 *  - "4.Feststellungsklage", "Feststellungsklage"
 *  - Gesetze: VwGO §§ 40, 42 II analog, 43 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-feststellungsklage",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Klagearten",
  title: "Feststellungsklage (§ 43 VwGO)",
  description: "Feststellung des (Nicht-)Bestehens eines Rechtsverhältnisses und Nichtigkeitsfeststellungsklage: Begriff des Rechtsverhältnisses, Subsidiarität (§ 43 II VwGO – nicht gegenüber der ALK!), berechtigtes Feststellungsinteresse und Begründetheit.",
  start: "start",
  stations: [
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "subsid", label: "Subsidiarität" },
    { id: "interesse", label: "Interesse" },
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
      title: "Ist der Verwaltungsrechtsweg eröffnet?",
      def: "Aufdrängende Spezialzuweisung oder § 40 I 1 VwGO: öffentlich-rechtliche Streitigkeit nichtverfassungsrechtlicher Art ohne abdrängende Sonderzuweisung.",
      options: [
        { label: "Ja", next: "q_statthaft", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_statthaft: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 43 I VwGO",
      title: "Ist die Feststellungsklage statthaft?",
      def: "<b>Zwei Varianten (§ 43 I VwGO):</b><br>• Feststellung des <b>Bestehens oder Nichtbestehens eines Rechtsverhältnisses</b> (positive/negative FSK),<br>• Feststellung der <b>Nichtigkeit eines VA</b> (Nichtigkeitsfeststellungsklage – selten, da die Anfechtungsklage meist günstiger ist).<br><br><b>Rechtsverhältnis</b> = die sich aus einem konkreten Sachverhalt aufgrund einer öffentlich-rechtlichen Norm ergebende rechtliche Beziehung zwischen Personen oder zwischen Personen und Sachen.<br><br><b>Beispiele:</b> Zwangsmitgliedschaft in der IHK, Zugehörigkeit zum Gemeinderat, Pflicht zur Tariferhöhung aus RVO (VG Koblenz). NICHT feststellungsfähig: abstrakte Rechtsfragen, Elemente eines Rechtsverhältnisses, bloße Vorfragen.",
      options: [
        { label: "Ja, konkretes Rechtsverhältnis streitig", next: "q_subsid", tone: "pos" },
        { label: "Ja, Nichtigkeit eines VA", next: "q_interesse", set: { nichtigkeit: true }, tone: "pos" },
        { label: "Nein, nur abstrakte Rechtsfrage", next: "e_unzulaessig_statthaft", tone: "neg" }
      ]
    },

    q_subsid: {
      station: "subsid",
      kind: "frage",
      norm: "§ 43 II VwGO",
      title: "Steht die Subsidiarität entgegen?",
      def: "Die Feststellung kann nicht begehrt werden, soweit der Kläger seine Rechte durch <b>Gestaltungs- oder Leistungsklage</b> verfolgen kann oder hätte verfolgen können (§ 43 II 1 VwGO).<br><br><b>Zweck:</b> Umgehung der besonderen Klagevoraussetzungen (Vorverfahren, Frist) und doppelte Inanspruchnahme des Gerichts verhindern.<br><br><b>Einschränkung durch die Rspr.:</b> Gegenüber der <b>ALK</b> gilt die Subsidiarität NICHT – es droht keine Umgehung (keine Frist, kein Vorverfahren), und vom Staat ist zu erwarten, dass er schon auf ein Feststellungsurteil hin leistet; zudem kann eine FSK viele Einzelklagen vermeiden.<br><b>Für die Nichtigkeitsfeststellungsklage gilt § 43 II 2 VwGO:</b> Subsidiarität greift nicht.",
      options: [
        { label: "AFK oder VK möglich → subsidiär", next: "e_unzulaessig_subsid", tone: "neg" },
        { label: "Nur ALK möglich → Subsidiarität greift nicht (Rspr.)", next: "q_interesse", tone: "warn" },
        { label: "Keine andere Klage möglich", next: "q_interesse", tone: "pos" }
      ]
    },

    q_interesse: {
      station: "interesse",
      kind: "frage",
      norm: "§ 43 I VwGO",
      title: "Besteht ein berechtigtes Feststellungsinteresse?",
      def: "<b>Berechtigtes Interesse an BALDIGER Feststellung</b> = jedes schutzwürdige rechtliche, wirtschaftliche, persönliche oder auch ideelle Interesse, z. B.:<br>• drohende Sanktionen nach dem OWiG („Damoklesschwert“),<br>• konkrete Wiederholungsgefahr,<br>• Rehabilitationsinteresse nach diskriminierender Behandlung,<br>• geplante Investitionen, Dispositionssicherheit.<br><br><b>Weitere Zulässigkeit:</b> Klagebefugnis § 42 II VwGO analog (str.) – aus dem Rechtsverhältnis müssen sich mögliche eigene Rechte ergeben; KEIN Vorverfahren, KEINE Klagefrist (anders im Beamtenrecht; Verwirkung möglich); Klageerhebung §§ 81, 82 VwGO.",
      options: [
        { label: "Ja, Feststellungsinteresse (+)", next: "q_begruendet", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig_interesse", tone: "neg" }
      ]
    },

    q_begruendet: {
      station: "begruendet",
      kind: "frage",
      norm: "§ 43 VwGO",
      title: "Begründetheit: Besteht das Rechtsverhältnis (nicht)?",
      def: "Die Feststellungsklage ist begründet, wenn das streitige <b>Rechtsverhältnis besteht</b> (positive FSK) bzw. <b>nicht besteht</b> (negative FSK) – zu prüfen anhand der einschlägigen materiell-rechtlichen Normen.<br><br>Bei der <b>Nichtigkeitsfeststellungsklage:</b> begründet, wenn der VA nichtig ist (§ 44 VwVfG – Prüfung im Schema „Fehlerfolgen“).",
      options: [
        { label: "Begehrte Feststellung trifft zu", next: "e_begruendet", tone: "pos" },
        { label: "Begehrte Feststellung trifft nicht zu", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 43 VwGO",
      title: "Feststellungsklage zulässig und begründet",
      text: "Das Gericht stellt das (Nicht-)Bestehen des Rechtsverhältnisses bzw. die Nichtigkeit des VA fest. Das Feststellungsurteil ist nicht vollstreckbar – vom beklagten Hoheitsträger ist aber zu erwarten, dass er sich daran hält."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 VwGO",
      title: "Klage zulässig, aber unbegründet",
      text: "Die begehrte Feststellung trifft in der Sache nicht zu – das Rechtsverhältnis besteht (nicht) bzw. der VA ist nicht nichtig. Die Klage wird abgewiesen."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I VwGO",
      title: "Klage unzulässig: kein Verwaltungsrechtsweg",
      text: "Die Streitigkeit ist nicht öffentlich-rechtlich oder anderweitig zugewiesen. Verweisung nach § 17a II GVG."
    },

    e_unzulaessig_statthaft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I VwGO",
      title: "Klage unzulässig: kein feststellungsfähiges Rechtsverhältnis",
      text: "Abstrakte Rechtsfragen, Gutachtenersuchen oder bloße Elemente/Vorfragen eines Rechtsverhältnisses sind nicht feststellungsfähig. Es fehlt an einem konkreten, streitigen Rechtsverhältnis."
    },

    e_unzulaessig_subsid: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 II VwGO",
      title: "Klage unzulässig: Subsidiarität",
      text: "Der Kläger kann (oder konnte) seine Rechte mit Anfechtungs- oder Verpflichtungsklage verfolgen. Die Feststellungsklage würde deren besondere Voraussetzungen (Vorverfahren, Klagefrist) umgehen und ist daher nach § 43 II 1 VwGO unzulässig."
    },

    e_unzulaessig_interesse: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I VwGO",
      title: "Klage unzulässig: kein Feststellungsinteresse",
      text: "Es fehlt ein schutzwürdiges Interesse an baldiger Feststellung – die Klage liefe auf ein unzulässiges Rechtsgutachten hinaus."
    }
  },

  routers: {}
});
