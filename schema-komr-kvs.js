/*
 * Prüfungsschema: Kommunalverfassungsstreitverfahren (Organstreit)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR-FS III- LV_24 - PLE 17 Kommunalverfassungsstreitverfahren - Sinn und Zweck
 *    bis Darstellung der Zulaessigkeit" (Böhle)
 *  - "KomR-FS III- LV_25 - PLE 18 - Darstellung der Pruefpunkte der Zulaessigkeit" (Böhle)
 *  - "FS III - KomR - 07. Kommunalverfassungsstreit - Skript"
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-kvs",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Rechtsschutz · Organstreit",
  title: "Kommunalverfassungsstreit (Organstreitverfahren)",
  description: "Streit zwischen oder innerhalb von Gemeindeorganen um organschaftliche Rechte: Abgrenzung zu anderen Rechtsbehelfen, Zulässigkeit (Verwaltungsrechtsweg, Klageart, Klagebefugnis, Beteiligtenfähigkeit, Rechtsschutzbedürfnis) und Begründetheit.",
  start: "start",
  stations: [
    { id: "konstellation", label: "Konstellation" },
    { id: "rechtsweg", label: "Rechtsweg" },
    { id: "klageart", label: "Klageart" },
    { id: "zul", label: "Zulässigkeit" },
    { id: "begr", label: "Begründetheit" },
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
      station: "konstellation",
      kind: "frage",
      norm: "Richterrecht (OVG RP, Urt. v. 08.03.1965 – 6 A 22/64)",
      title: "Liegt eine kommunalverfassungsrechtliche Innenrechtsstreitigkeit vor?",
      text: "Beim Kommunalverfassungsstreit streiten Organe, Teilorgane oder Organteile einer Gemeinde untereinander über INNENRECHTSBEZIEHUNGEN – über organschaftliche Kompetenzen und Mitwirkungsrechte, nicht über subjektive Rechte eigener Rechtspersönlichkeiten. Er ist keine eigene Klageart, sondern durch Rechtsfortbildung anerkannt.",
      def: "<b>Interorganstreit:</b> zwischen Organen (Rat ./. BM).<br><b>Intraorganstreit:</b> innerhalb eines Organs (Ratsmitglied/Fraktion ./. Rat).<br><b>Positiv-Beispiele:</b> Rat ./. BM wegen unzulässiger Eilentscheidung (§ 48); BM ./. Rat wegen grundlos versagter Entlastung (§ 114); Fraktion ./. BM wegen ignorierten TO-Antrags (§ 34 V 2); Ratsmitglied ./. Rat wegen rechtswidrigen § 22-Ausschlusses oder Nichteinladung (§ 34 II); Ortsbeirat ./. Rat wegen unterbliebener Anhörung (§ 75 II 1).<br><b>Quasi-Organe:</b> Die Initiativen hinter Einwohnerantrag (§ 17) und Bürgerbegehren (§ 17a) werden als beteiligtenfähige Quasi-Organe behandelt.",
      options: [
        { label: "Ja, Streit um organschaftliche Rechte im Innenverhältnis", next: "q_abgrenzung", tone: "pos" },
        { label: "Nein, Außenrechtsstreit", detail: "z. B. Beamter ./. BM (Beförderung), Gemeinde ./. Land (Fördermittel), Gemeinde ./. Nachbargemeinde, dauerhafter Ratsausschluss nach § 31 IV 2 (VA!)", next: "e_aussenrecht", tone: "neg" }
      ]
    },

    q_abgrenzung: {
      station: "konstellation",
      kind: "frage",
      norm: "§§ 42, 43 GemO, KWG",
      title: "Ist ein speziellerer Rechtsbehelf vorrangig?",
      def: "<b>Kein Kommunalverfassungsstreit bei:</b><br>• <b>Wahlen des Rates:</b> Die Wahlbeschwerde (§ 43 GemO) ist als besonderes förmliches Rechtsinstrument VORRANGIG – das Rechtsschutzbedürfnis für den Organstreit fehlt.<br>• <b>Kommunalwahlen (Urwahl):</b> Rechtsschutz nach KWG/KWO.<br>• <b>Aussetzungsverfahren (§ 42 GemO):</b> eigenes gesetzlich geregeltes Verfahren mit streitentscheidendem VA der Aufsichtsbehörde.<br>• bloßes Verlangen nach RECHTMÄSSIGEN Beschlüssen: kein allgemeines Kontrollrecht der Ratsmitglieder – ist nur objektives Recht verletzt, ist die Klage unzulässig (str. für die Feststellung fremder § 22-Befangenheit; nach OVG RP kein eigenes Recht).",
      options: [
        { label: "Nein, kein vorrangiger Rechtsbehelf", next: "q_rechtsweg", tone: "pos" },
        { label: "Ja – es geht um eine Ratswahl", next: "e_vorrang_43", tone: "neg" },
        { label: "Ja – nur objektive Rechtswidrigkeit gerügt", next: "e_kein_recht", tone: "neg" }
      ]
    },

    q_rechtsweg: {
      station: "rechtsweg",
      kind: "frage",
      norm: "§ 40 I 1 VwGO",
      title: "Ist der Verwaltungsrechtsweg eröffnet?",
      def: "<b>§ 40 I 1 VwGO:</b> öffentlich-rechtliche Streitigkeit (streitentscheidende Normen: GemO, Hauptsatzung, Geschäftsordnung) – nichtverfassungsrechtlicher Art (Gemeindeorgane sind VERWALTUNGSorgane, das Kommunalrecht gehört zum besonderen Verwaltungsrecht) – keine abdrängende Sonderzuweisung.",
      options: [
        { label: "Ja", next: "q_klageart", tone: "pos" },
        { label: "Nein", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_klageart: {
      station: "klageart",
      kind: "frage",
      norm: "§§ 43, 88 VwGO",
      title: "Welche Klageart ist statthaft?",
      text: "Die statthafte Klageart richtet sich nach dem Begehren (§ 88 VwGO). Anfechtungs- und Verpflichtungsklage scheiden mangels Verwaltungsakt aus – Organhandeln im Innenverhältnis hat keine Außenwirkung. Einer Klageart „sui generis“ bedarf es nach h. M. nicht.",
      def: "<b>Allgemeine Leistungsklage:</b> auf künftiges Handeln oder Unterlassen (z. B. Aufnahme eines TOP, Entlastung, unverzügliche Einberufung).<br><b>Feststellungsklage (§ 43 VwGO):</b> Bestehen/Nichtbestehen eines Rechtsverhältnisses – trotz Subsidiarität (§ 43 II VwGO) der REGELFALL im Organstreit (z. B. Feststellung, dass der Ausschluss nach § 22 V rechtswidrig war oder das Rederecht verletzt wurde).",
      options: [
        { label: "Feststellungsklage (Regelfall)", next: "q_befugnis", set: { klage: "fk" }, tone: "neutral" },
        { label: "Allgemeine Leistungsklage", next: "q_befugnis", set: { klage: "lk" }, tone: "neutral" }
      ]
    },

    q_befugnis: {
      station: "zul",
      kind: "frage",
      norm: "§ 42 II VwGO analog",
      title: "Ist der Kläger klagebefugt (wehrfähige Innenrechtsposition)?",
      def: "Ohne Klagebefugnis würde der Organstreit zum objektiven Beanstandungsverfahren (Popularklage) – § 42 II VwGO gilt daher ANALOG.<br><b>Erforderlich:</b> Möglichkeit der Verletzung einer WEHRFÄHIGEN INNENRECHTSPOSITION, die dem Organ(teil) zur Wahrung funktionaler Interessen zugewiesen ist (Stimm-, Rede-, Teilnahme-, Antrags-, Informationsrechte; Organkompetenzen).<br><b>Amtswalter vs. Amtsinhaber:</b> Es muss um Rechte gehen, die den Kläger als AMTSWALTER betreffen (Funktionsausübung), nicht um die Inhaberschaft des Mandats als solche (diese betrifft das Außenrechtsverhältnis).",
      options: [
        { label: "Ja, eigene Organrechte möglicherweise verletzt", next: "q_beteiligte", tone: "pos" },
        { label: "Nein, nur objektives Recht betroffen", next: "e_kein_recht", tone: "neg" }
      ]
    },

    q_beteiligte: {
      station: "zul",
      kind: "frage",
      norm: "§ 61 Nr. 2 VwGO (analog)",
      title: "Sind Kläger und Beklagter beteiligtenfähig – und wer ist richtiger Beklagter?",
      def: "<b>Beteiligtenfähigkeit:</b><br>• Kollektivorgane und Teile davon (Rat, Fraktion, Ausschuss): § 61 Nr. 2 VwGO – teilrechtsfähige Vereinigungen, soweit ihnen ein Organrecht zustehen kann.<br>• Monokratische Organe/Einzelpersonen (BM, einzelnes Ratsmitglied): § 61 Nr. 2 VwGO ANALOG (planwidrige Lücke für teilrechtsfähige Einzelpersonen; § 61 Nr. 1 passt nicht, § 61 Nr. 3 auch nicht).<br>• Quasi-Organe (Einwohnerantrag/Bürgerbegehren): beteiligtenfähig, vertreten nach § 17 II 2 / § 17a III 2 GemO.<br><b>Richtiger Beklagter:</b> NICHT der Rechtsträger (§ 78 VwGO unanwendbar – Innenrecht!), sondern der SACHLICHE STREITGEGNER: das Organ oder der Organteil, dessen Maßnahme angegriffen wird („Kontrastorgan“).",
      options: [
        { label: "Ja, beide beteiligtenfähig, Klage gegen das Kontrastorgan", next: "q_interesse", tone: "pos" },
        { label: "Nein, Klage gegen die Gemeinde/den Rechtsträger gerichtet", detail: "Rechtsträgerprinzip gilt im Organstreit nicht", next: "e_falscher_gegner", tone: "neg" }
      ]
    },

    q_interesse: {
      station: "zul",
      kind: "frage",
      norm: "§ 43 I VwGO",
      title: "Feststellungsinteresse bzw. Rechtsschutzbedürfnis gegeben?",
      def: "<b>Feststellungsinteresse (bei der FK):</b> jedes schutzwürdige Interesse rechtlicher, wirtschaftlicher, ideeller oder persönlicher Art – insbesondere bei Rechtsunsicherheit über Inhalt/Umfang der Rechte, WIEDERHOLUNGSGEFAHR oder drohenden Nachteilen.<br><b>Allgemeines Rechtsschutzbedürfnis:</b> kein schnellerer/einfacherer Weg. Die Anrufung der Aufsichtsbehörde ist NICHT vorrangig (kein Anspruch auf Einschreiten), die Aussetzung ebenfalls nicht (kein Anspruch des Ratsmitglieds). Aus Sicht des BM ist die eigene Aussetzung allerdings der einfachere Weg, wenn ein Ratsbeschluss in SEINE Rechte eingreift. Die Wahlbeschwerde ist als speziellere Regelung vorrangig.",
      options: [
        { label: "Ja", next: "q_begruendet", tone: "pos" },
        { label: "Nein", detail: "z. B. Wahlbeschwerde einschlägig oder erledigt ohne Wiederholungsgefahr", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_begruendet: {
      station: "begr",
      kind: "frage",
      norm: "GemO, Hauptsatzung, GeschO",
      title: "Begründetheit: Ist das organschaftliche Recht tatsächlich verletzt?",
      text: "Die Klage ist begründet, wenn die angegriffene Maßnahme bzw. Unterlassung das organschaftliche Recht des Klägers tatsächlich verletzt (Feststellungsklage) bzw. der geltend gemachte Anspruch auf das Handeln/Unterlassen besteht (Leistungsklage).",
      def: "<b>Prüfung:</b> Bestehen und Reichweite des Organrechts aus GemO, Hauptsatzung oder Geschäftsordnung bestimmen (z. B. Teilnahme- und Stimmrecht aus § 30, Antragsrechte aus § 34 I 4, V 2, Informationsrechte aus §§ 30a III, 33) → Eingriff durch das Kontrastorgan → keine Rechtfertigung (z. B. rechtmäßiger Ausschluss nach § 22 V oder Ordnungsmaßnahme nach § 38).",
      options: [
        { label: "Ja, Organrecht verletzt", next: "e_begruendet", tone: "pos" },
        { label: "Nein", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 43 VwGO / allg. Leistungsklage",
      title: "Kommunalverfassungsstreit erfolgreich",
      text: "Die Klage ist zulässig und begründet: Das Gericht stellt die Rechtsverletzung fest bzw. verurteilt das Kontrastorgan zum begehrten Handeln oder Unterlassen.\n\nBeachte zur Kostentragung: Obsiegt oder unterliegt ein Ratsmitglied als Amtswalter, trägt die Kosten im Ergebnis regelmäßig die Gemeinde (Rechtsgedanke des § 18 IV GemO) – es verteidigt seine organschaftlichen Rechte, nicht Privatinteressen."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 VwGO analog",
      title: "Klage unbegründet",
      text: "Das geltend gemachte Organrecht besteht nicht in der behaupteten Reichweite oder wurde nicht verletzt – etwa weil der Ausschluss nach § 22 V GemO rechtmäßig war, die Ordnungsmaßnahme von § 38 GemO gedeckt ist oder die Geschäftsordnung das behauptete Recht nicht gewährt. Die Klage wird abgewiesen."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 40 ff. VwGO",
      title: "Klage unzulässig",
      text: "Es fehlt an einer Sachentscheidungsvoraussetzung (Rechtsweg, Feststellungsinteresse oder Rechtsschutzbedürfnis). Die Klage wird als unzulässig abgewiesen."
    },

    e_kein_recht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO analog",
      title: "Unzulässig: keine wehrfähige Innenrechtsposition",
      text: "Ratsmitglieder haben KEIN allgemeines Recht auf rechtmäßige Beschlüsse des Gemeinderats – ist nur objektives Recht verletzt, ist die Klage ungeachtet der Schwere des Verstoßes unzulässig.\n\nBeispiel: Die Klage eines Ratsmitglieds auf Feststellung, dass für ein ANDERES Ratsmitglied Ausschließungsgründe nach § 22 GemO vorlagen, ist nach OVG RP unzulässig – § 22 sichert Allgemeininteressen, eigene Rechte sind nur mittelbar betroffen (a. A. OVG Münster, VGH Kassel – vertretbar)."
    },

    e_falscher_gegner: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 78 VwGO",
      title: "Falscher Beklagter: Rechtsträgerprinzip gilt nicht",
      text: "Im Kommunalverfassungsstreit ist nicht die Gemeinde (Rechtsträger) zu verklagen, sondern der SACHLICHE STREITGEGNER – das Organ oder der Organteil, dessen Maßnahme angegriffen wird. § 78 VwGO ist auf Innenrechtsstreitigkeiten nicht (auch nicht entsprechend) anwendbar.\n\nDie Klage ist gegen das Kontrastorgan umzustellen (§ 88 VwGO, rechtliche Hinweise des Gerichts § 86 III VwGO)."
    },

    e_vorrang_43: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 GemO",
      title: "Vorrang der Wahlbeschwerde",
      text: "Gegen Wahlen, die der Gemeinderat vorgenommen hat, gibt § 43 GemO dem Ratsmitglied ein besonderes förmliches Rechtsinstrument. Nach dem Grundsatz des Vorrangs speziellerer Regelungen fehlt für den Kommunalverfassungsstreit das Rechtsschutzbedürfnis.\n\nWeiter mit dem Schema „Wahlbeschwerde, § 43 GemO“."
    },

    e_aussenrecht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 40, 42 VwGO",
      title: "Kein Organstreit: Außenrechtsverhältnis betroffen",
      text: "Der Streit betrifft ein Außenrechtsverhältnis – es gelten die normalen Klagearten der VwGO (bzw. der Rechtsweg zu anderen Gerichten).\n\nBeispiele: dauerhafter Ausschluss aus dem Gemeinderat nach § 31 IV 2 GemO ist ein VA (Anfechtungsklage!); Beförderungsstreit des Beamten; Fördermittelklage der Gemeinde gegen das Land; Nachbargemeinde-Streit in der Bauleitplanung."
    }
  },

  routers: {}
});
