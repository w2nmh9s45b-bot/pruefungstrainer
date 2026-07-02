/*
 * Prüfungsschema: Rechtmäßigkeit einer gemeindlichen Satzung (§ 24 GemO)
 * Fach: Kommunalrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS I):
 *  - "14 PLE Satzungsrecht: Arten und Ermächtigungsgrundlagen"
 *  - "15 PLE Satzungsrecht: Verfahren und Inkrafttreten" (inkl. Prüfschema
 *    Rechtmäßigkeitskontrolle von Satzungen und Fehlerfolgen/Heilung § 24 VI)
 *  - Gesetze: GemO RLP §§ 24, 25, 27 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-satzung",
  subject: "Kommunalrecht",
  fs: ["FS1"],
  area: "Satzungsrecht",
  title: "Rechtmäßigkeit einer Satzung (§ 24 GemO)",
  description: "Vollprüfung einer gemeindlichen Satzung: Ermächtigungsgrundlage, Zuständigkeit des Rates, Verfahren (öffentliche Sitzung!), Genehmigung, Ausfertigung, Bekanntmachung, materielle Rechtmäßigkeit sowie Fehlerfolgen und Heilung nach § 24 VI GemO.",
  start: "start",
  stations: [
    { id: "egl", label: "Ermächtigung" },
    { id: "zust", label: "Zuständigkeit" },
    { id: "verf", label: "Verfahren" },
    { id: "form", label: "Ausfertigung & ÖB" },
    { id: "matr", label: "Materiell" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Satzung wirksam",
    neg: "Ergebnis: Satzung unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  resultExtras: function (flags, node) {
    var out = [];
    if (flags.ordnungsfehler && node.verdict === "pos") {
      out.push("Hinweis: Festgestellte Verstöße gegen bloße Ordnungsvorschriften oder geheilte Fehler lassen die Wirksamkeit unberührt – die Satzung kam lediglich fehlerhaft zustande.");
    }
    return out;
  },

  nodes: {

    start: {
      station: "egl",
      kind: "frage",
      norm: "§ 24 I GemO, Art. 20 III GG",
      title: "Auf welche Ermächtigungsgrundlage kann die Satzung gestützt werden?",
      text: "Satzungen sind Rechtsnormen (Gesetze im materiellen Sinn), die eine der Staatsaufsicht unterstehende juristische Person des öffentlichen Rechts kraft der ihr verliehenen Autonomie im Rahmen ihrer gesetzlichen Aufgaben für ihr Gebiet erlässt. Ausdruck der Satzungshoheit ist § 24 I 1 GemO.",
      def: "<b>Vorrang des Gesetzes:</b> Satzungen dürfen höherrangigem Recht nicht widersprechen.<br><b>Vorbehalt des Gesetzes:</b> Greift die Satzung in Grundrechte ein (Freiheit und Eigentum), genügt die Generalermächtigung des § 24 I 1 GemO NICHT – es bedarf einer besonderen formell-gesetzlichen Ermächtigung (z. B. § 132 BauGB, §§ 2, 5, 7 KAG, § 26 GemO, § 88 LBauO).<br><b>Auftragsangelegenheiten:</b> Satzungen nur mit besonderer gesetzlicher Ermächtigung (§ 24 I 2 GemO).",
      options: [
        { label: "SV-Aufgabe ohne Grundrechtseingriff – § 24 I 1 GemO genügt", detail: "z. B. Benutzungssatzung einer öffentlichen Einrichtung", next: "q_zust", tone: "pos" },
        { label: "SV-Aufgabe mit Grundrechtseingriff – Spezialermächtigung vorhanden", detail: "z. B. Abgabensatzung (§§ 2, 7 KAG), Anschluss-/Benutzungszwang (§ 26 GemO)", next: "q_zust", tone: "pos" },
        { label: "Auftragsangelegenheit mit besonderer Ermächtigung (§ 24 I 2 GemO)", detail: "z. B. Gestaltungssatzung nach § 88 LBauO", next: "q_zust", tone: "pos" },
        { label: "Grundrechtseingriff OHNE besondere Ermächtigung", next: "e_nichtig_egl", tone: "neg" }
      ]
    },

    q_zust: {
      station: "zust",
      kind: "frage",
      norm: "§ 24 II, § 32 II Nr. 1 GemO",
      title: "Hat der Gemeinderat die Satzung beschlossen?",
      text: "Die Satzung wird vom Gemeinderat in öffentlicher Sitzung beschlossen (§ 24 II GemO). Satzungen unterliegen dem Ratsvorbehalt (§ 32 II Nr. 1 GemO) – eine Übertragung auf Ausschuss oder Bürgermeister ist ausgeschlossen.",
      hint: "Ausnahmen, in denen ausnahmsweise ein anderer entscheidet: Ersatzentscheidung des Bürgermeisters bei Beschlussunfähigkeit (§ 39 II HS 2), Aufsichtsbehörde im Wege der Ersatzvornahme (§ 123) oder ein Beauftragter (§ 124). Das Eilentscheidungsrecht (§ 48) trägt keinen Satzungsbeschluss des Ratsvorbehalts-Katalogs.",
      options: [
        { label: "Ja, Ratsbeschluss", next: "q_verf", tone: "pos" },
        { label: "Nein, Ausschuss oder Bürgermeister hat entschieden", next: "e_unwirksam_zust", tone: "neg" },
        { label: "Zulässige Ausnahme (§§ 39 II, 123, 124 GemO)", next: "q_verf", tone: "warn" }
      ]
    },

    q_verf: {
      station: "verf",
      kind: "frage",
      norm: "§§ 34, 35, 22, 39, 40 GemO",
      title: "Ist der Satzungsbeschluss in ordnungsgemäßem Verfahren zustande gekommen?",
      def: "<b>Prüfpunkte:</b><br>• Einberufung (§ 34 GemO – Form, Frist, Personenkreis, öffentliche Bekanntmachung),<br>• <b>öffentliche Sitzung zwingend</b> (§ 24 II GemO!),<br>• Mitwirkungsverbote (§ 22 GemO),<br>• Beschlussfähigkeit (§ 39 GemO),<br>• Mehrheit: Mehrheit der anwesenden Ratsmitglieder (§ 40 I 1 GemO); <b>Hauptsatzung:</b> Mehrheit der gesetzlichen Zahl (§ 25 II GemO).",
      hint: "Die Detailprüfung des Sitzungsverfahrens findest du im Schema „Rechtmäßigkeit eines Ratsbeschlusses (Vollprüfung)“ – dort auch die Fehlerfolgenlehre Schritt für Schritt.",
      options: [
        { label: "Ja, Verfahren ordnungsgemäß", next: "q_genehmigung", tone: "pos" },
        { label: "Nein, Verfahrensfehler festgestellt", next: "q_fehlerart", tone: "neg" }
      ]
    },

    q_fehlerart: {
      station: "verf",
      kind: "frage",
      norm: "Fehlerfolgenlehre",
      title: "Wie ist der Verfahrensfehler einzuordnen?",
      def: "<b>Wesentliche Verfahrensvorschrift</b> verletzt, wenn (auswendig lernen!):<br>a) eine Schutzvorschrift für Ratsmitglieder betroffen ist (Stimm-, Teilnahme-, Antrags-, Rederechte – „STAR“), oder<br>b) eine Verfassungsgrundsätze konkretisierende Norm verletzt wurde (z. B. Sitzungsöffentlichkeit), oder<br>c) der Fehler geeignet ist, sich unmittelbar auf das Beschlussergebnis auszuwirken.<br><b>Bloße Ordnungsvorschrift:</b> Einhaltung für das Verfahrensergebnis unerheblich (z. B. fehlende Benehmensherstellung § 34 V 1).",
      options: [
        { label: "Nur bloße Ordnungsvorschrift verletzt", detail: "Satzung fehlerhaft zustande gekommen, aber wirksam", next: "q_genehmigung", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Wesentliche Verfahrensvorschrift verletzt", next: "q_heilung", tone: "neg" }
      ]
    },

    q_heilung: {
      station: "verf",
      kind: "frage",
      norm: "§ 24 VI GemO",
      title: "Ist der wesentliche Verfahrensfehler nach § 24 VI GemO geheilt?",
      text: "Satzungen, die unter Verletzung von Verfahrens- oder Formvorschriften der GemO zustande gekommen sind, gelten EIN JAHR nach der Bekanntmachung als von Anfang an gültig (§ 24 VI 1 GemO).",
      def: "<b>KEINE Heilung (§ 24 VI 2 GemO), wenn:</b><br>Nr. 1: die Bestimmungen über die Öffentlichkeit der Sitzung, die Genehmigung, die Ausfertigung oder die Bekanntmachung verletzt sind, oder<br>Nr. 2: vor Fristablauf die Aufsichtsbehörde beanstandet oder jemand die Verletzung gegenüber der Gemeindeverwaltung unter Bezeichnung des Sachverhalts schriftlich geltend gemacht hat.<br><b>Beachte:</b> Bei der Bekanntmachung ist auf die Rügemöglichkeit und ihre Rechtsfolgen hinzuweisen (§ 24 VI 4). Mitwirkungsfehler nach § 22 bei Satzungen: ebenfalls Jahresfrist des § 24 VI (statt 3 Monate, § 22 VI 5).",
      options: [
        { label: "Ja, geheilt (Jahresfrist abgelaufen, kein Ausschlussgrund)", next: "q_genehmigung", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Nein, keine Heilung", next: "e_unwirksam_verfahren", tone: "neg" }
      ]
    },

    q_genehmigung: {
      station: "form",
      kind: "frage",
      norm: "§ 119 GemO",
      title: "Bedarf die Satzung einer Genehmigung der Aufsichtsbehörde?",
      text: "Grundsatz: Die Aufsichtsbehörde wirkt am Satzungsverfahren NICHT mit. Ausnahmen sind gesetzlich geregelt – z. B. Haushaltssatzung mit genehmigungspflichtigen Teilen (§ 95 IV GemO) oder Bebauungsplan in den Fällen des § 10 II BauGB. Daneben Vorlagepflichten (§ 97 II GemO).",
      def: "<b>§ 119 GemO:</b> Genehmigungspflichtige Satzungen dürfen erst NACH Erteilung der Genehmigung bekanntgemacht oder ausgeführt werden (S. 1). <b>Genehmigungsfiktion:</b> Die Genehmigung gilt als erteilt, wenn die Aufsichtsbehörde nicht innerhalb eines Monats (bei § 95 IV: zwei Monate) ablehnt, Bedenken äußert oder um Aufklärung ersucht (§ 119 I 2–4).",
      options: [
        { label: "Keine Genehmigung erforderlich", next: "q_ausfertigung", tone: "neutral" },
        { label: "Erforderlich und erteilt / fingiert", next: "q_ausfertigung", tone: "pos" },
        { label: "Erforderlich, aber nicht erteilt", next: "e_unwirksam_genehmigung", tone: "neg" }
      ]
    },

    q_ausfertigung: {
      station: "form",
      kind: "frage",
      norm: "VV Nr. 5 zu § 24 GemO",
      title: "Wurde die Satzung ordnungsgemäß ausgefertigt?",
      def: "<b>Ausfertigung</b> = Bestätigung der <b>Legalität</b> (ordnungsgemäßes Verfahren) und <b>Authentizität</b> (der Rat hat die Satzung mit genau diesem Inhalt beschlossen) durch handschriftliche Unterzeichnung des Satzungstextes durch den Bürgermeister als Vorsitzenden des Gemeinderats (mit Ort, Datum, Amtsbezeichnung). Sie folgt aus dem Rechtsstaatsprinzip und ist Voraussetzung der öffentlichen Bekanntmachung.",
      hint: "Bei Ortsgemeinden fertigt der ORTSBÜRGERMEISTER aus – die Ausfertigung ist KEIN Verwaltungsgeschäft der VG-Verwaltung (§ 68 I 3 Nr. 2 GemO)!",
      options: [
        { label: "Ja, ordnungsgemäß ausgefertigt", next: "q_bekanntmachung", tone: "pos" },
        { label: "Nein", detail: "fehlende oder fehlerhafte Ausfertigung – keine Heilung (§ 24 VI 2 Nr. 1)", next: "e_unwirksam_ausfertigung", tone: "neg" }
      ]
    },

    q_bekanntmachung: {
      station: "form",
      kind: "frage",
      norm: "§ 24 III, § 27 GemO, GemODVO",
      title: "Wurde die Satzung ordnungsgemäß öffentlich bekanntgemacht?",
      text: "Die Satzung ist öffentlich bekanntzumachen (§ 24 III 1 GemO); die Bekanntmachung ist Wirksamkeitsvoraussetzung. Form: Zeitung oder Amtsblatt (§ 27 I GemO), Näheres in der GemODVO; die Gemeinde regelt die Form in der Hauptsatzung (§ 27 III GemO).",
      def: "<b>Inkrafttreten:</b> Die Satzung soll den Tag bestimmen (§ 24 III 2); fehlt er, tritt sie am Tag NACH der Bekanntmachung in Kraft (§ 24 III 3). Sonderfall Haushaltssatzung: Inkrafttreten zu Beginn des Haushaltsjahres (§ 95 V GemO).",
      options: [
        { label: "Ja, formgerecht im richtigen Organ", next: "q_matr", tone: "pos" },
        { label: "Nein", detail: "falsches Bekanntmachungsorgan oder unterblieben – keine Heilung (§ 24 VI 2 Nr. 1)", next: "e_unwirksam_bekanntmachung", tone: "neg" }
      ]
    },

    q_matr: {
      station: "matr",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist die Satzung materiell rechtmäßig?",
      def: "<b>Prüfpunkte:</b><br>• Voraussetzungen der Ermächtigungsgrundlage eingehalten,<br>• kein Verstoß gegen höherrangiges Recht (Vorrang des Gesetzes: GG, LV, Bundes-/Landesrecht, RVOen),<br>• hinreichende Bestimmtheit,<br>• Verhältnismäßigkeit,<br>• Gleichheitssatz (Art. 3 I GG),<br>• Bewehrung nur im Rahmen des § 24 V GemO (Geldbuße bis 5.000 €, OWiG).",
      options: [
        { label: "Ja, materiell rechtmäßig", next: "e_wirksam", tone: "pos" },
        { label: "Nein, Verstoß gegen höherrangiges Recht", next: "e_nichtig_matr", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 24 GemO",
      title: "Satzung wirksam",
      text: "Die Satzung beruht auf einer tauglichen Ermächtigungsgrundlage, ist formell ordnungsgemäß zustande gekommen (Ratsbeschluss in öffentlicher Sitzung, ggf. Genehmigung, Ausfertigung, öffentliche Bekanntmachung) und materiell rechtmäßig. Sie tritt am bestimmten Tag, sonst am Tag nach der Bekanntmachung in Kraft (§ 24 III GemO).\n\nRechtsschutz Betroffener:\n• Normenkontrolle nach § 47 I Nr. 2 VwGO i. V. m. § 4 AGVwGO vor dem OVG Koblenz (binnen eines Jahres),\n• Inzidentkontrolle bei Anfechtung eines auf die Satzung gestützten Verwaltungsakts."
    },

    e_nichtig_egl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 20 III GG (Vorbehalt des Gesetzes)",
      title: "Satzung nichtig: keine taugliche Ermächtigungsgrundlage",
      text: "Für den Eingriff in Grundrechte fehlt die erforderliche besondere formell-gesetzliche Ermächtigung. Die Generalklausel des § 24 I 1 GemO trägt keine Eingriffssatzungen. Die Satzung ist nichtig."
    },

    e_unwirksam_zust: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 24 II, § 32 II Nr. 1 GemO",
      title: "Satzung unwirksam: Ratsvorbehalt verletzt",
      text: "Satzungen sind dem Gemeinderat zur abschließenden Entscheidung vorbehalten (§ 24 II, § 32 II Nr. 1 GemO). Ein Beschluss durch Ausschuss oder Bürgermeister (auch im Wege der Eilentscheidung nach § 48 GemO) ist kompetenzwidrig – die Satzung ist unwirksam."
    },

    e_unwirksam_verfahren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 24 VI GemO",
      title: "Satzung unwirksam: wesentlicher Verfahrensfehler ohne Heilung",
      text: "Der Verstoß gegen eine wesentliche Verfahrensvorschrift führt zur Rechtswidrigkeit und Unwirksamkeit des Satzungsbeschlusses. Eine Heilung nach § 24 VI GemO scheidet aus (Ausschlusstatbestand des § 24 VI 2 oder Jahresfrist noch nicht abgelaufen).\n\nDie Gemeinde kann den Fehler nur durch fehlerfreie Wiederholung des Satzungsbeschlusses beheben."
    },

    e_unwirksam_genehmigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 119 GemO",
      title: "Satzung unwirksam: erforderliche Genehmigung fehlt",
      text: "Genehmigungspflichtige Satzungen dürfen erst nach Erteilung der Genehmigung bekanntgemacht oder ausgeführt werden (§ 119 I 1 GemO). Ohne Genehmigung (und ohne Genehmigungsfiktion nach § 119 I 2–4 GemO) ist die Satzung unwirksam; eine Heilung nach § 24 VI GemO ist ausgeschlossen (§ 24 VI 2 Nr. 1)."
    },

    e_unwirksam_ausfertigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 24 VI 2 Nr. 1 GemO",
      title: "Satzung unwirksam: Ausfertigungsmangel",
      text: "Ohne ordnungsgemäße Ausfertigung fehlt die rechtsstaatlich gebotene Bestätigung von Legalität und Authentizität. Der Mangel ist nicht nach § 24 VI GemO heilbar (§ 24 VI 2 Nr. 1). Die Satzung ist unwirksam; Abhilfe nur durch Neuausfertigung und erneute Bekanntmachung."
    },

    e_unwirksam_bekanntmachung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 24 III, VI 2 Nr. 1 GemO",
      title: "Satzung unwirksam: Bekanntmachungsmangel",
      text: "Die öffentliche Bekanntmachung ist Wirksamkeitsvoraussetzung. Erfolgt sie nicht, verspätet, unvollständig oder im falschen Bekanntmachungsorgan, gilt sie als nicht erfolgt – die Satzung ist nicht in Kraft getreten. Keine Heilung nach § 24 VI GemO (§ 24 VI 2 Nr. 1)."
    },

    e_nichtig_matr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 20 III GG",
      title: "Satzung (teil-)nichtig: materieller Fehler",
      text: "Der inhaltliche Verstoß gegen höherrangiges Recht führt zur Nichtigkeit bzw. Teilnichtigkeit der Satzung. Materielle Fehler können NIEMALS geheilt werden – § 24 VI GemO erfasst nur Verfahrens- und Formvorschriften.\n\nRechtsschutz: Normenkontrolle (§ 47 I Nr. 2 VwGO i. V. m. § 4 AGVwGO, OVG Koblenz) oder Inzidentkontrolle im Anfechtungsprozess gegen den Vollzugs-VA."
    }
  },

  routers: {}
});
