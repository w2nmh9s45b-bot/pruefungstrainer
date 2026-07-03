/*
 * Prüfungsschema: Antrag nach § 123 VwGO (einstweilige Anordnung)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Erfolgsaussichten eines Antrages nach § 123 VwGO" (Dr. Konrad –
 *    Sicherungs-/Regelungsanordnung, Subsidiarität, AO-Anspruch/-Grund)
 *  - "Antrag nach s 123 I VwGO", "Grundlagen vorlaeufiger Rechtsschutz"
 *  - Gesetze: VwGO § 123; ZPO §§ 920 II, 294 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-123",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Vorläufiger Rechtsschutz",
  title: "Antrag nach § 123 VwGO (einstweilige Anordnung)",
  description: "Sicherungs- und Regelungsanordnung: Abgrenzung zu §§ 80, 80a VwGO (Subsidiarität § 123 V), Antragsbefugnis, Glaubhaftmachung von Anordnungsanspruch und Anordnungsgrund (§ 123 III VwGO i. V. m. §§ 920 II, 294 ZPO) und das Verbot der Vorwegnahme der Hauptsache.",
  start: "start",
  stations: [
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "zulaessig", label: "Zulässigkeit" },
    { id: "anspruch", label: "AO-Anspruch" },
    { id: "grund", label: "AO-Grund" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: eA ergeht",
    neg: "Ergebnis: Antrag ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 123 I, V VwGO",
      title: "Ist der Antrag nach § 123 VwGO statthaft?",
      def: "Begehren (§ 88 VwGO analog): eine vorläufige Anordnung hinsichtlich eines öffentlich-rechtlichen Streitgegenstands.<br><br><b>Subsidiarität (§ 123 V VwGO):</b> Kein Fall der §§ 80, 80a VwGO! Faustregel: Wäre in der Hauptsache die ANFECHTUNGSKLAGE statthaft → § 80 V; wäre Verpflichtungs-, Leistungs- oder Feststellungsklage statthaft → § 123.<br><br><b>Zwei Arten:</b><br>• <b>Sicherungsanordnung</b> (§ 123 I 1): Sicherung des STATUS QUO – ein bestehendes Recht droht vereitelt/wesentlich erschwert zu werden,<br>• <b>Regelungsanordnung</b> (§ 123 I 2): vorläufige ERWEITERUNG des status quo – Regelung eines vorläufigen Zustands in Bezug auf ein streitiges Rechtsverhältnis (z. B. vorläufige Zulassung zum Markt, zum Studium, zur Klassenversetzung).",
      options: [
        { label: "Statthaft: Sicherungs- oder Regelungsanordnung", next: "q_zulaessig", tone: "pos" },
        { label: "Anfechtungsfall → §§ 80, 80a VwGO", next: "e_80v_verweis", tone: "neg" }
      ]
    },

    q_zulaessig: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 42 II VwGO analog",
      title: "Ist der Antrag im Übrigen zulässig?",
      def: "<b>Antragsbefugnis (§ 42 II VwGO analog):</b> mögliches Recht des Antragstellers, das gefährdet ist (Darlegung von Anordnungsanspruch und -grund als möglich).<br><b>Kein Vorverfahren; Antragsfrist</b> nur bei gesetzlicher Anordnung.<br><b>Form:</b> §§ 81, 82 VwGO analog (bei Eilbedürftigkeit auch zur Niederschrift/telefonisch angekündigt).<br><b>Rechtsschutzbedürfnis:</b><br>• vorheriger Antrag bei der Behörde (einfacherer Weg!),<br>• eine evtl. Hauptsacheklage darf nicht unzulässig sein (z. B. Fristablauf),<br>• grundsätzlich keine (endgültige) <b>Vorwegnahme der Hauptsache</b> – es sei denn, effektiver Rechtsschutz (Art. 19 IV GG) gebietet sie (schwere, unzumutbare Nachteile; hohe Erfolgswahrscheinlichkeit).",
      options: [
        { label: "Zulässig", next: "q_anspruch", tone: "pos" },
        { label: "Kein vorheriger Behördenantrag / Hauptsache unzulässig", next: "e_unzulaessig", tone: "neg" },
        { label: "Unzulässige Vorwegnahme der Hauptsache", next: "e_vorwegnahme", tone: "neg" }
      ]
    },

    q_anspruch: {
      station: "anspruch",
      kind: "frage",
      norm: "§ 123 III VwGO, §§ 920 II, 294 ZPO",
      title: "Ist ein Anordnungsanspruch glaubhaft gemacht?",
      def: "<b>Anordnungsanspruch</b> = der zugrunde liegende MATERIELL-RECHTLICHE Anspruch (die Erfolgsaussichten einer evtl. Hauptsacheklage): Anspruchsgrundlage, deren Voraussetzungen bei summarischer Prüfung vorliegen.<br><br><b>Glaubhaftmachung (§ 123 III VwGO i. V. m. §§ 920 II, 294 ZPO):</b> überwiegende Wahrscheinlichkeit genügt; Mittel auch eidesstattliche Versicherung.",
      options: [
        { label: "Ja, Anspruch überwiegend wahrscheinlich", next: "q_grund", set: { anspruch: true }, tone: "pos" },
        { label: "Offen / zweifelhaft", next: "q_grund", tone: "warn" },
        { label: "Nein, Anspruch besteht offensichtlich nicht", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_grund: {
      station: "grund",
      kind: "frage",
      norm: "§ 123 I VwGO",
      title: "Ist ein Anordnungsgrund glaubhaft gemacht?",
      def: "<b>Anordnungsgrund</b> = die EILBEDÜRFTIGKEIT: Dem Antragsteller drohen wesentliche Nachteile, wenn er die Entscheidung in der Hauptsache abwarten müsste (Vereitelung des Rechts, Gewalt, wesentliche Erschwerung – § 123 I VwGO).<br><br>Auch der Anordnungsgrund ist glaubhaft zu machen (§ 123 III VwGO i. V. m. §§ 920 II, 294 ZPO).",
      options: [
        { label: "Ja, Abwarten unzumutbar", next: "@ergebnis_weiche", tone: "pos" },
        { label: "Nein, Abwarten zumutbar", next: "e_unbegruendet_grund", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_erlass: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 123 VwGO",
      title: "Einstweilige Anordnung ergeht",
      text: "Anordnungsanspruch und Anordnungsgrund sind glaubhaft gemacht – das Gericht trifft die einstweilige Anordnung (Beschluss; Inhalt nach freiem Ermessen, § 123 III VwGO i. V. m. § 938 ZPO).\n\nDie Anordnung regelt nur VORLÄUFIG – die endgültige Klärung bleibt der Hauptsache vorbehalten (Ausnahme: zulässige Vorwegnahme bei unzumutbaren Nachteilen). Rechtsbehelf: Beschwerde zum OVG (§ 146 VwGO)."
    },

    e_abwaegung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Ergebnis: Interessenabwägung",
      norm: "§ 123 VwGO",
      title: "Offene Erfolgsaussichten → Interessenabwägung",
      text: "Ist der Anordnungsanspruch offen, der Anordnungsgrund aber gegeben (oder umgekehrt), entscheidet eine Doppelhypothese/Folgenabwägung: Die Folgen, wenn die eA ergeht, die Hauptsache aber erfolglos bleibt, sind gegen die Folgen abzuwägen, wenn die eA unterbleibt, die Hauptsache aber Erfolg hat.\n\nJe schwerer und irreversibler die drohenden Nachteile des Antragstellers (insb. bei Grundrechtsbezug), desto eher ergeht die Anordnung."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 123 VwGO",
      title: "Antrag unbegründet: kein Anordnungsanspruch",
      text: "Der zugrunde liegende materielle Anspruch besteht bei summarischer Prüfung offensichtlich nicht – die einstweilige Anordnung wird abgelehnt."
    },

    e_unbegruendet_grund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 123 I VwGO",
      title: "Antrag unbegründet: kein Anordnungsgrund",
      text: "Es fehlt die Eilbedürftigkeit – dem Antragsteller ist das Abwarten der Hauptsacheentscheidung zumutbar; wesentliche oder irreparable Nachteile drohen nicht."
    },

    e_80v_verweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 123 V VwGO",
      title: "Anfechtungsfall → § 80 V / § 80a VwGO",
      text: "Geht es um die Abwehr des Vollzugs eines belastenden VA, ist der Antrag nach § 80 V VwGO (bzw. bei VA mit Drittwirkung nach § 80a VwGO) der richtige Rechtsbehelf – die einstweilige Anordnung ist subsidiär (§ 123 V VwGO). Eigenes Schema „Antrag nach § 80 V VwGO“."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Allg. Rechtsschutzbedürfnis",
      title: "Antrag unzulässig",
      text: "Es fehlt das Rechtsschutzbedürfnis: Der Antrag bei der Behörde ist der einfachere Weg, oder eine Klage in der Hauptsache wäre bereits unzulässig (z. B. Bestandskraft) – dann kann auch kein vorläufiger Rechtsschutz mehr gewährt werden."
    },

    e_vorwegnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Verbot der Vorwegnahme",
      title: "Unzulässige Vorwegnahme der Hauptsache",
      text: "Die begehrte Anordnung würde die Hauptsache endgültig und irreversibel vorwegnehmen (z. B. einmalige Veranstaltung, endgültige Auszahlung), ohne dass schwere, unzumutbare Nachteile und eine hohe Erfolgswahrscheinlichkeit dies nach Art. 19 IV GG ausnahmsweise gebieten. Der Antrag bleibt ohne Erfolg."
    }
  },

  routers: {
    /* Anspruch glaubhaft → eA; Anspruch offen → Interessenabwägung */
    "@ergebnis_weiche": function (flags) {
      return flags.anspruch ? "e_erlass" : "e_abwaegung";
    }
  }
});
