/*
 * Prüfungsschema: Rechtsstellung der Bundestagsabgeordneten, Art. 38 I 2, 46 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic) – A.I.1.a) Bundestag
 *  - "StVR II OLE LE 3" (Breitbach) – Fraktionszwang und Fraktionsdisziplin
 *  - Normen verifiziert an Grundgesetz.md, BTGO_2025.md
 *
 * Stationen: mandat → eingriff → rechtfertigung → immunitaet → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-abgeordnete",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsorganisation",
  title: "Abgeordnete: freies Mandat, Art. 38 I 2, 46 GG",
  description: "Freies Mandat und parlamentarische Mitwirkungsrechte („RATS-Mitglied“), Abgrenzung Fraktionszwang/Fraktionsdisziplin (Spannungsverhältnis Art. 21 I – Art. 38 I 2 GG) sowie Indemnität und Immunität nach Art. 46 GG.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "mandat", label: "Freies Mandat" },
    { id: "eingriff", label: "Eingriff" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "immunitaet", label: "Indemnität/Immunität" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Recht des Abgeordneten verletzt / Schutz greift",
    neg: "Kein Verstoß / Schutz greift nicht",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "mandat",
      kind: "frage",
      norm: "Art. 38 I 2, 46 GG",
      title: "Worum geht es im Fall?",
      text: "Der Bundestag ist die Volksvertretung auf Bundesebene (Art. 38 I 1 GG); seine Aufgaben: Zentralorgan der Legislative (Art. 78 GG), Geschäftsordnungsautonomie (Art. 40 I 2 GG), Wahlrechte (Art. 63 I, 94 GG), Untersuchungsausschüsse (Art. 44 GG).",
      hint: "In RLP entsprechen sich: Art. 38 I 2 GG ≙ Art. 79 I 2 LV; Art. 46 GG ≙ Art. 93, 94 LV.",
      options: [
        { label: "Beeinträchtigung der Mitwirkungsrechte / des freien Mandats", detail: "Prüfschema: Schutzbereich – Eingriff – Rechtfertigung", next: "q_schutzbereich", tone: "neutral" },
        { label: "Einflussnahme der Fraktion auf das Abstimmungsverhalten", detail: "Fraktionszwang oder Fraktionsdisziplin?", next: "q_fraktion", tone: "neutral" },
        { label: "Verfolgung wegen Äußerung oder Straftat", detail: "Indemnität/Immunität, Art. 46 GG", next: "q_46_wahl", tone: "neutral" }
      ]
    },

    q_schutzbereich: {
      station: "mandat",
      kind: "frage",
      norm: "Art. 38 I 2 GG",
      title: "Schutzbereich des freien Mandats eröffnet?",
      text: "Art. 38 I 2 GG normiert den Grundsatz des freien Mandats: Abgeordnete sind „an Aufträge und Weisungen nicht gebunden und nur ihrem Gewissen unterworfen“.",
      def: "<b>Parlamentarische Mitwirkungsrechte</b> (Merkhilfe „RATS-Mitglied“): <b>R</b>ederecht (§§ 27 I, 31 GOBT), <b>A</b>ntragsrechte (§§ 20 II 3, 82 I GOBT), <b>T</b>eilnahmerecht an Sitzungen (Art. 39 III GG, § 69 II GOBT), <b>S</b>timmrecht bei Abstimmungen und Wahlen (Art. 63, 94 GG). Ferner: Fraktionsbildung (§ 10 GOBT), Frage- und Auskunftsrechte (Art. 43 I GG, §§ 100 ff. GOBT).",
      options: [
        { label: "Ja, Mitwirkungsrecht betroffen", next: "q_ma_eingriff", tone: "pos" },
        { label: "Nein", next: "e_kein_verstoss", tone: "neg" }
      ]
    },

    q_ma_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 38 I 2 GG",
      title: "Eingriff in die Rechtsstellung?",
      text: "Es gilt das aus dem FS I bekannte Eingriffsverständnis. Besonderheit: Beim „Fraktionszwang“ liegt nicht einmal eine staatliche Maßnahme vor, da eine Fraktion kein Staatsorgan ist.",
      options: [
        { label: "Ja, Maßnahme des Bundestags/seiner Organe", detail: "z. B. Wortentzug, Ausschluss von Sitzungen (§§ 36 ff. GOBT)", next: "q_ma_rechtfertigung", tone: "pos" },
        { label: "Nein", next: "e_kein_verstoss", tone: "neg" }
      ]
    },

    q_ma_rechtfertigung: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 40 I 2 GG, §§ 36 ff. GOBT",
      title: "Eingriff gerechtfertigt (verfassungsimmanente Schranke)?",
      text: "Die Abgeordnetenrechte können zugunsten höherwertiger Verfassungsgüter beschränkt werden. Anders als bei den Grundrechten genügt wegen Art. 40 I 2 GG auch die GOBT als einschränkende Regelung (Regelbeispiel: Ordnungsmaßnahmen der §§ 36 ff. GOBT), obwohl sie kein Gesetz ist.",
      def: "Zentrale Abwägungsgesichtspunkte: <b>Repräsentationsfähigkeit</b> und <b>Funktionsfähigkeit des Parlaments</b>. Da die GOBT-Norm regelmäßig verfassungskonform ist, kommt es meist auf die Verhältnismäßigkeit des Einzelakts an.",
      options: [
        { label: "Ja, Einzelakt verhältnismäßig", next: "e_kein_verstoss", tone: "pos" },
        { label: "Nein, unverhältnismäßig", next: "e_mandat_verletzt", tone: "neg" }
      ]
    },

    /* ================= Fraktionszwang / -disziplin ================= */

    q_fraktion: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 21 I 1, 38 I 2 GG",
      title: "Fraktionszwang oder Fraktionsdisziplin?",
      text: "Zwischen Art. 21 I 1 GG (Parteienstaat – die Fraktion ist „die Partei im Parlament“) und Art. 38 I 2 GG (freies Mandat) besteht ein Spannungsverhältnis: Nicht jede Einflussnahme ist unzulässig – die Grenze ist fließend.",
      def: "<b>Fraktionszwang (unzulässig):</b> ggf. sanktionsbewehrte Verpflichtung, nach den Vorgaben der Fraktion abzustimmen – Bindung an eine Weisung entgegen Art. 38 I 2 GG (Bsp.: Strafzahlung, Entzug des Ausschusssitzes oder angedrohter Fraktions-/Parteiausschluss als Sanktion für das Abstimmungsverhalten). <b>Fraktionsdisziplin (zulässig):</b> Bestreben nach einheitlichem Auftreten; freiwillige Unterordnung unter die Fraktionsmehrheit (Bsp.: öffentliche Appelle, drohender Verlust des Listenplatzes).",
      options: [
        { label: "Rechtspflicht zu bestimmtem Abstimmungsverhalten (+ Sanktion)", detail: "z. B. Beschluss + Androhung des Fraktions-/Parteiausschlusses bei Zuwiderhandlung", next: "e_fraktionszwang", tone: "neg" },
        { label: "Bloßes Einwirken auf Freiwilligkeit", next: "e_fraktionsdisziplin", tone: "pos" },
        { label: "Fraktionsausschluss nach dauerhafter Verweigerung", detail: "Als Folge fehlender Bereitschaft zur Loyalität", next: "e_ausschluss", tone: "warn" }
      ]
    },

    /* ================= Art. 46 GG ================= */

    q_46_wahl: {
      station: "immunitaet",
      kind: "frage",
      norm: "Art. 46 I, II GG",
      title: "Indemnität oder Immunität?",
      def: "Merkhilfe: In „In<b>d</b>emnität“ steckt ein „d“ wie <b>dauerhaft</b> – Art. 46 I GG: „zu keiner Zeit“. Die Immunität (Art. 46 II GG) schützt dagegen nur während der Mandatszeit vor Strafverfolgung.",
      options: [
        { label: "Äußerung/Abstimmung im Bundestag", detail: "Indemnität, Art. 46 I GG", next: "q_indemnitaet", tone: "neutral" },
        { label: "Strafverfahren wegen einer Straftat", detail: "Immunität, Art. 46 II GG", next: "q_immunitaet", tone: "neutral" }
      ]
    },

    q_indemnitaet: {
      station: "immunitaet",
      kind: "frage",
      norm: "Art. 46 I GG",
      title: "Voraussetzungen der Indemnität erfüllt?",
      text: "Tatbestand: (1) Abgeordneter, (2) Abstimmung oder Äußerung, (3) im Bundestag oder seinen Ausschüssen, (4) keine verleumderische Beleidigung.",
      def: "<b>Rechtsfolge:</b> Der Abgeordnete darf zu keiner Zeit – auch nach Mandatsende – außerhalb des Bundestages zur Verantwortung gezogen werden; er ist vor allen staatlichen Maßnahmen (VA, Urteil) geschützt. „Gerichtlich oder dienstlich verfolgt“ sind nur Regelbeispiele.",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "e_indemnitaet", tone: "pos" },
        { label: "Verleumderische Beleidigung", next: "e_46_kein_schutz", tone: "neg" },
        { label: "Äußerung außerhalb des Bundestages", detail: "z. B. Talkshow, Wahlkampf", next: "e_46_kein_schutz", tone: "neg" }
      ]
    },

    q_immunitaet: {
      station: "immunitaet",
      kind: "frage",
      norm: "Art. 46 II GG, § 12 II StGB",
      title: "Voraussetzungen der Immunität erfüllt?",
      text: "Tatbestand: (1) Abgeordneter, (2) mit Strafe bedrohte Handlung (nicht: Ordnungswidrigkeit, § 1 I OWiG – bloßer Bagatellcharakter), (3) keine Genehmigung des Bundestages (Rechtsgedanke § 183 BGB), (4) keine Festnahme bei der Tat oder im Laufe des folgenden Tages.",
      def: "<b>Rechtsfolge:</b> Strafverfolgungshindernis – kein Strafverfahren zulässig; sonstige Maßnahmen (z. B. zivilrechtliche Klagen) bleiben möglich. Erfasst sind auch „mitgebrachte Verfahren“ (vor Mandatsbeginn begonnen) – Schutz der Funktionsfähigkeit des Bundestages vor Exekutiv-Missbrauch. Nach Mandatsende sind Verfahren wieder möglich.",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "e_immunitaet", tone: "pos" },
        { label: "Bundestag hat die Verfolgung genehmigt", next: "e_46_kein_schutz", tone: "neg" },
        { label: "Festnahme bei der Tat / am Folgetag", next: "e_46_kein_schutz", tone: "neg" },
        { label: "Nur Ordnungswidrigkeit", next: "e_46_kein_schutz", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_mandat_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Rechtsstellung aus Art. 38 I 2 GG verletzt",
      text: "Der Eingriff in die parlamentarischen Mitwirkungsrechte ist nicht durch höherwertige Verfassungsgüter (Repräsentations-/Funktionsfähigkeit des Parlaments) gerechtfertigt bzw. unverhältnismäßig. Der Abgeordnete ist in seinem freien Mandat verletzt – geltend zu machen im Organstreitverfahren."
    },
    e_kein_verstoss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Verstoß gegen Art. 38 I 2 GG",
      text: "Die Maßnahme greift nicht in die Mitwirkungsrechte ein oder ist durch die Funktions- und Repräsentationsfähigkeit des Parlaments (verfassungsimmanente Schranke, ausgestaltet u. a. durch §§ 36 ff. GOBT kraft Art. 40 I 2 GG) gerechtfertigt."
    },
    e_fraktionszwang: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Unzulässiger Fraktionszwang",
      text: "Der Beschluss begründet eine sanktionsbewehrte Rechtspflicht zu einem bestimmten Abstimmungsverhalten. Der Abgeordnete wird an eine Weisung gebunden und kann nicht mehr nach seinem Gewissen entscheiden – Verstoß gegen Art. 38 I 2 GG, der Beschluss ist verfassungswidrig."
    },
    e_fraktionsdisziplin: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Zulässige Fraktionsdisziplin",
      text: "Das Einwirken auf den Abgeordneten beruht auf Freiwilligkeit und dient dem einheitlichen Auftreten der Fraktion (Loyalität und politische Arbeit). Wegen des Spannungsverhältnisses zu Art. 21 I 1 GG ist nicht jede Einflussnahme unzulässig – die Fraktionsdisziplin verstößt nicht gegen Art. 38 I 2 GG."
    },
    e_ausschluss: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Fraktionsausschluss als zulässige Folge",
      text: "Ist der Abgeordnete zur Unterordnung dauerhaft nicht bereit, darf die Fraktion Sanktionen bis zum Fraktionsausschluss verhängen. Die verfassungsrechtliche Position aus Art. 38 I 2 GG bleibt unberührt – er bleibt fraktionsloser Abgeordneter mit allen Statusrechten. Unzulässig bleibt aber die Androhung des Ausschlusses zur Erzwingung eines konkreten Abstimmungsverhaltens (dann Fraktionszwang)."
    },
    e_indemnitaet: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Indemnität greift",
      title: "Schutz durch Art. 46 I GG",
      text: "Der Abgeordnete darf wegen seiner Abstimmung oder Äußerung im Bundestag oder seinen Ausschüssen zu keiner Zeit – auch nach dem Mandat – gerichtlich oder dienstlich verfolgt oder anderweitig außerhalb des Bundestages zur Verantwortung gezogen werden."
    },
    e_immunitaet: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Immunität greift",
      title: "Strafverfolgungshindernis nach Art. 46 II GG",
      text: "Ohne Genehmigung des Bundestages darf der Abgeordnete wegen der mit Strafe bedrohten Handlung nicht zur Verantwortung gezogen oder verhaftet werden – auch nicht in „mitgebrachten Verfahren“. Nach Mandatsende können die Verfahren fortgesetzt werden; zivilrechtliche Klagen bleiben jederzeit möglich."
    },
    e_46_kein_schutz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Schutz aus Art. 46 GG",
      text: "Die Voraussetzungen sind nicht erfüllt: verleumderische Beleidigung bzw. Äußerung außerhalb des Parlaments (Art. 46 I GG), erteilte Genehmigung, Festnahme bei der Tat oder am Folgetag oder bloße Ordnungswidrigkeit (Art. 46 II GG). Die Verfolgung ist zulässig."
    }
  }
});
