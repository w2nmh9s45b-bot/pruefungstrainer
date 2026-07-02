/*
 * Prüfungsschema: Rechtmäßigkeit eines Ratsbeschlusses / einer Wahl (Vollprüfung)
 * (§§ 22, 32, 34, 35, 39, 40 GemO – mit Fehlerfolgenlehre)
 * Fach: Kommunalrecht (Fachstudium 2 und 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht):
 *  - "2025_FS3_00_Schema Rechtmaessigkeitspruefung" (B. Meudt, 09/2025 – Leitschema)
 *  - "FS II - KomR - Skript 09. - Rechtmaessigkeitspruefung" (M. Minor – Fehlerfolgenlehre,
 *    Fehlermöglichkeiten, Übungsfälle)
 *  - FS II Skripte 04 (Einberufung), 05 (Form der Sitzung), 06 (Tagesordnung),
 *    08 (Beschlussfähigkeit)
 *  - Gesetze: GemO RLP §§ 22, 24, 29, 32, 34, 35, 39, 40, 69 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-ratsbeschluss",
  subject: "Kommunalrecht",
  fs: ["FS2", "FS3"],
  area: "Sitzungsrecht · Kernschema",
  title: "Rechtmäßigkeit eines Ratsbeschlusses (Vollprüfung)",
  description: "Das zentrale Prüfungsschema: Sachbeschluss oder Wahl – Zuständigkeit (Verbands-/Organkompetenz), Einberufung § 34, Tagesordnung, Sitzungsform § 35, Mitwirkungsverbot § 22, Beschlussfähigkeit § 39, Beschlussfassung/Wahlverfahren § 40, materielle Rechtmäßigkeit und komplette Fehlerfolgenlehre mit Heilung.",
  start: "start",
  stations: [
    { id: "zust", label: "Zuständigkeit" },
    { id: "einber", label: "Einberufung" },
    { id: "sitzung", label: "TO & Sitzung" },
    { id: "mitwirkung", label: "§ 22" },
    { id: "beschluss", label: "Beschlussfassung" },
    { id: "matr", label: "Materiell" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Beschluss rechtmäßig & wirksam",
    neg: "Ergebnis: Beschluss rechtswidrig & unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: fehlerhaft, aber wirksam"
  },

  resultExtras: function (flags, node) {
    var out = [];
    if (node.verdict === "pos" && flags.ordnungsfehler) {
      out.push("Hinweis: Die festgestellten Verstöße gegen bloße Ordnungsvorschriften bzw. geheilten Fehler lassen die Wirksamkeit unberührt – der Beschluss kam lediglich fehlerhaft zustande.");
    }
    if (node.verdict === "pos" && flags.art === "wahl") {
      out.push("Bei Wahlen beachte den Rechtsschutz: Wahlbeschwerde jedes Ratsmitglieds binnen zwei Wochen bei der Aufsichtsbehörde (§ 43 GemO).");
    }
    return out;
  },

  nodes: {

    start: {
      station: "zust",
      kind: "frage",
      norm: "VV Nr. 2 zu § 40 GemO",
      title: "Was ist Prüfungsgegenstand: Sachbeschluss oder Wahl?",
      text: "Einleitungssatz (Klausur): „Der Beschluss / die Wahl ist rechtmäßig und wirksam, wenn er / sie nicht an formellen oder materiellen Fehlern leidet.“",
      def: "<b>Sachbeschluss:</b> Entscheidung in der Sache (Auftragsvergabe, Grundstückskauf, Haushaltsplan …).<br><b>Wahl:</b> personenbezogener Beschluss (VV Nr. 2 zu § 40 GemO) – es gelten die Verfahrensvorschriften des Sachbeschlusses UND die Wahl-Sondervorschriften des § 40 II–V GemO.<br>Daneben gibt es verfahrenslenkende Beschlüsse (Vertagung, Schluss der Beratung).",
      options: [
        { label: "Sachbeschluss", next: "q_verband", set: { art: "sach" }, tone: "neutral" },
        { label: "Wahl", detail: "z. B. Beigeordnete, Ausschussmitglieder, BM nach § 53 II", next: "q_verband", set: { art: "wahl" }, tone: "neutral" }
      ]
    },

    /* ---------- A.I Zuständigkeit ---------- */

    q_verband: {
      station: "zust",
      kind: "frage",
      norm: "Art. 28 II GG, Art. 49 LV, § 2 GemO",
      title: "Verbandskompetenz: Ist die Gemeinde zuständig?",
      text: "Formelle Rechtmäßigkeit, 1. Schritt: „Formell ist der Beschluss rechtmäßig, wenn der Gemeinderat zuständig war und keine Verfahrensfehler vorlagen.“",
      def: "<b>SV-Angelegenheit</b> (Art. 28 II GG, Art. 49 LV, § 2 I GemO): Allzuständigkeit für Angelegenheiten der örtlichen Gemeinschaft (örtlicher + sachlicher Aspekt, Rastede).<br><b>Auftragsangelegenheit</b> (§ 2 II GemO): Vollzug staatlicher Aufgaben – hier ist der Rat NICHT befassungsbefugt.",
      options: [
        { label: "SV-Angelegenheit der Gemeinde", next: "q_organ", tone: "pos" },
        { label: "Auftragsangelegenheit", next: "e_unzust_verband", tone: "neg" },
        { label: "Aufgabe eines anderen Trägers", detail: "z. B. VG-Aufgabe nach § 67 GemO", next: "e_unzust_verband", tone: "neg" }
      ]
    },

    q_organ: {
      station: "zust",
      kind: "frage",
      norm: "§§ 32, 44, 47 GemO",
      title: "Organkompetenz: Ist der Gemeinderat zuständig?",
      def: "<b>Reihenfolge:</b> 1. spezialgesetzliche Regelung (z. B. Satzungen § 24 II, Wahl der Beigeordneten § 53a I 1), 2. Grundsatz § 32 I 2: der Rat, sofern nicht Ausschuss/BM kraft Übertragung oder BM kraft Gesetzes (§ 47 – insb. laufende Verwaltung) zuständig ist. Delegationsverbote: § 32 II, Ausnahmen § 32 III (Wertgrenzen der Hauptsatzung).",
      hint: "Die Detailprüfung führst du im Schema „Organkompetenz: Rat, Ausschuss oder Bürgermeister?“.",
      options: [
        { label: "Ja, der Rat ist zuständig", next: "q_einber_zust", tone: "pos" },
        { label: "Nein, BM oder Ausschuss ist zuständig", next: "e_unzust_organ", tone: "neg" }
      ]
    },

    /* ---------- A.II.1 Einberufung ---------- */

    q_einber_zust: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 I, V; § 36 I; § 69 I 3 GemO",
      title: "Einberufung: Hat der Zuständige einberufen und Mitwirkungsrechte gewahrt?",
      def: "<b>Zuständig:</b> der Vorsitzende (§ 34 I 1) – d. h. der Bürgermeister (§ 36 I 1); sind BM und Vertreter nicht mehr im Amt oder dauerhaft verhindert: das älteste Ratsmitglied (§ 34 II 2).<br><b>Mitwirkungsrechte:</b> TO im Benehmen mit den Beigeordneten festsetzen (§ 34 V 1); bei Ortsgemeinden zusätzlich Abstimmung von Zeitpunkt und TO mit dem VG-Bürgermeister (§ 69 I 3); Antrag von ¼ der gesetzlichen Zahl oder einer Fraktion auf Einberufung bzw. TO-Aufnahme (§ 34 I 4, V 2).",
      options: [
        { label: "Ja, ordnungsgemäß", next: "q_einber_kreis", tone: "pos" },
        { label: "Benehmen/Abstimmung fehlte", detail: "bloße Ordnungsvorschrift – Wirksamkeit unberührt", next: "q_einber_kreis", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Eine unzuständige Person hat einberufen", next: "e_unwirksam_einberufung", tone: "neg" }
      ]
    },

    q_einber_kreis: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 II 1, § 69 GemO",
      title: "Wurden alle einzuladenden Personen eingeladen?",
      def: "<b>Einzuladen:</b> alle Ratsmitglieder und alle Beigeordneten (§ 34 II 1); bei Ortsgemeinden auch der VG-Bürgermeister (Teilnahmerecht § 69 I 1); ggf. Ortsvorsteher (§ 76 III) und Ortsbürgermeister (§ 69 III).",
      options: [
        { label: "Ja, alle eingeladen", next: "q_einber_form", tone: "pos" },
        { label: "Ratsmitglied / Beigeordneter mit Stimmrecht nicht eingeladen", detail: "wesentlicher Fehler (STAR + Auswirkung aufs Ergebnis)", next: "q_heilung_kreis", tone: "neg" },
        { label: "Nur Person mit beratender Stimme nicht eingeladen", detail: "Beigeordneter ohne Stimmrecht, VG-BM, Ortsvorsteher – bloße Ordnungsvorschrift", next: "q_einber_form", set: { ordnungsfehler: true }, tone: "warn" }
      ]
    },

    q_heilung_kreis: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 IV GemO",
      title: "Ist die Nichteinladung nach § 34 IV GemO geheilt?",
      def: "Eine Verletzung von <b>Form und Frist</b> der Einladung gilt als geheilt, wenn das Mitglied zur Sitzung erscheint oder bis zu Sitzungsbeginn schriftlich/elektronisch auf die Geltendmachung verzichtet. Nach Sinn und Zweck gilt das auch bei völliger <b>Nichteinladung</b>.",
      options: [
        { label: "Ja, erschienen oder Verzicht erklärt", next: "q_einber_form", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Nein", next: "e_unwirksam_einberufung", tone: "neg" }
      ]
    },

    q_einber_form: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 II 1 GemO",
      title: "Form der Einladung gewahrt?",
      def: "Der Vorsitzende lädt <b>schriftlich oder elektronisch</b> unter Mitteilung einer <b>hinreichend konkreten Tagesordnung</b> ein (Konkretisierungsgebot – die Mitglieder müssen sich vorbereiten und über ihre Teilnahme entscheiden können).",
      options: [
        { label: "Ja", next: "q_einber_frist", tone: "pos" },
        { label: "Nein", detail: "z. B. Einladung per SMS, fehlende oder unkonkrete TO", next: "q_heilung_form", tone: "neg" }
      ]
    },

    q_heilung_form: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 IV GemO",
      title: "Ist der Formfehler nach § 34 IV GemO geheilt?",
      text: "Der Formverstoß verletzt Schutzvorschriften der Ratsmitglieder (Rechtssicherheit, Sitzungsvorbereitung) – grundsätzlich wesentlicher Verfahrensfehler.",
      options: [
        { label: "Ja, alle Betroffenen erschienen oder verzichteten", next: "q_einber_frist", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Nein", next: "e_unwirksam_einberufung", tone: "neg" }
      ]
    },

    q_einber_frist: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 III GemO",
      title: "Einladungsfrist gewahrt?",
      def: "<b>Regulär:</b> mindestens VIER volle Kalendertage zwischen Einladung (= Zugang) und Sitzung (§ 34 III 1).<br><b>Verkürzung bei Dringlichkeit</b> (§ 34 III 2): Entscheidung kann nicht ohne Nachteil für die Gemeinde aufgeschoben werden; Hinweis auf die Verkürzung in der Einladung; der Rat stellt die Dringlichkeit vor Eintritt in die TO fest (§ 34 III 3).",
      options: [
        { label: "Ja, Frist gewahrt", next: "q_oeb", tone: "pos" },
        { label: "Verkürzt, aber Dringlichkeit lag vor", next: "q_oeb", tone: "warn" },
        { label: "Nein, Frist verletzt", detail: "Schutzvorschrift für Ratsmitglieder – wesentlich", next: "q_heilung_frist", tone: "neg" }
      ]
    },

    q_heilung_frist: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 IV GemO",
      title: "Ist der Fristverstoß nach § 34 IV GemO geheilt?",
      options: [
        { label: "Ja, alle verspätet Geladenen erschienen oder verzichteten", next: "q_oeb", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Nein", next: "e_unwirksam_einberufung", tone: "neg" }
      ]
    },

    q_oeb: {
      station: "einber",
      kind: "frage",
      norm: "§ 34 VI, § 27 GemO, GemODVO",
      title: "Öffentliche Bekanntmachung der Sitzung ordnungsgemäß?",
      def: "<b>Mindestinhalt:</b> Zeit, Ort und Tagesordnung (§ 34 VI 1) – auch für nichtöffentliche Sitzungen, soweit der Zweck der Nichtöffentlichkeit nicht gefährdet wird (§ 34 VI 2). <b>Form:</b> § 27 GemO, GemODVO, Hauptsatzung – im richtigen Bekanntmachungsorgan und rechtzeitig. Bekanntmachung im falschen Organ gilt als NICHT erfolgt.",
      options: [
        { label: "Ja, vollständig, formgerecht, rechtzeitig", next: "q_to", tone: "pos" },
        { label: "Fehler – betrifft eine ÖFFENTLICHE Sitzung / einen öffentlichen Teil", detail: "wesentlich: § 35 konkretisiert das Demokratieprinzip (Art. 20 III GG) – keine Heilung", next: "e_unwirksam_oeb", tone: "neg" },
        { label: "Fehler – betrifft nur den NICHTÖFFENTLICHEN Teil", detail: "bloße Ordnungsvorschrift", next: "q_to", set: { ordnungsfehler: true }, tone: "warn" }
      ]
    },

    /* ---------- A.II.2 Tagesordnung & Sitzungsform ---------- */

    q_to: {
      station: "sitzung",
      kind: "frage",
      norm: "§ 34 VII GemO",
      title: "Wurde die Tagesordnung in der Sitzung geändert?",
      def: "<b>Erweiterung</b> (§ 34 VII 1 Nr. 1): nur bei Dringlichkeit (§ 34 III 2) UND Zweidrittelmehrheit.<br><b>Absetzung</b> einzelner Gegenstände (§ 34 VII 1 Nr. 2): Zweidrittelmehrheit.<br><b>Sonstige Änderungen</b> (§ 34 VII 2): Zustimmung des Gemeinderats (einfache Mehrheit).",
      options: [
        { label: "Nein, TO unverändert", next: "q_form_sitzung", tone: "neutral" },
        { label: "Ja, Voraussetzungen eingehalten", next: "q_form_sitzung", tone: "pos" },
        { label: "TOP ohne Dringlichkeit / ohne 2/3-Mehrheit ergänzt und beschlossen", detail: "TOP war auch nicht öffentlich bekanntgemacht – wesentlicher Fehler", next: "e_unwirksam_to", tone: "neg" }
      ]
    },

    q_form_sitzung: {
      station: "sitzung",
      kind: "frage",
      norm: "§ 35 I GemO",
      title: "Wurde in der richtigen Sitzungsform beraten und entschieden?",
      def: "<b>Grundsatz:</b> Sitzungen sind öffentlich (§ 35 I 1) – Ausfluss des Demokratieprinzips (Art. 20 III GG).<br><b>Ausnahmen:</b> ausdrückliche Bestimmung, Gemeinwohl oder schutzwürdige Interessen Einzelner. Über solche Anträge wird in NICHTöffentlicher Sitzung beraten und entschieden (§ 35 I 2).<br><b>Spezialregeln:</b> Satzungen stets öffentlich (§ 24 II); Wahlen in öffentlicher Sitzung (§ 40 V); Zweifelsfallentscheidung nach § 22 V in nichtöffentlicher Sitzung.",
      options: [
        { label: "Ja, richtige Sitzungsform", next: "@nach_form", tone: "pos" },
        { label: "Öffentliche Angelegenheit zu Unrecht NICHTöffentlich beraten", detail: "wesentlich – Verfassungsgrundsatz konkretisierende Norm; keine Heilung", next: "e_unwirksam_oeffentlichkeit", tone: "neg" },
        { label: "Nichtöffentliche Angelegenheit zu Unrecht ÖFFENTLICH beraten", detail: "h. M.: bloße Ordnungsvorschrift (a. A. vertretbar); ggf. Schadensersatz", next: "@nach_form", set: { ordnungsfehler: true }, tone: "warn" }
      ]
    },

    /* ---------- A.II.3 Mitwirkungsverbot ---------- */

    q_22: {
      station: "mitwirkung",
      kind: "frage",
      norm: "§ 22 GemO",
      title: "Hat eine auszuschließende Person mitgewirkt (Mitwirkungsverbot)?",
      def: "<b>3 Stufen kumulativ:</b> betroffener Personenkreis (§ 22 I 1) → persönliche Voraussetzung (Nr. 1–3, Abs. 2) → sachliche Voraussetzung (unmittelbarer Vor-/Nachteil; bei Nr. 2 entbehrlich) → keine Ausnahme (§ 22 III: Wahlen, Gruppeninteressen).",
      hint: "Die Detailprüfung führst du im Schema „Mitwirkungsverbot § 22 GemO“. Unwirksam ist der Beschluss auch, wenn eine mitwirkungsBERECHTIGTE Person zu Unrecht ausgeschlossen wurde (§ 22 VI 1 Alt. 2 – bei rechtswidriger Zweifelsfallentscheidung des Rates).",
      options: [
        { label: "Nein, kein Verstoß gegen § 22 GemO", next: "q_bf", tone: "pos" },
        { label: "Ja, Verstoß (Mitwirkung trotz Ausschlussgrund / Ausschluss ohne Grund)", detail: "spezialgesetzliche Fehlerfolge § 22 VI – NICHT die allgemeine Fehlerfolgenlehre!", next: "q_22_heilung", tone: "neg" }
      ]
    },

    q_22_wahl: {
      station: "mitwirkung",
      kind: "frage",
      norm: "§ 22 III GemO",
      title: "Mitwirkungsverbot bei der Wahl?",
      text: "Nach § 22 III GemO gelten die Mitwirkungsverbote NICHT für Wahlen. Ein Ratsmitglied, das selbst kandidiert oder einen Angehörigen wählt, darf mitstimmen – auch für sich selbst. In der Klausur genügt hierzu ein klarstellender Satz.",
      options: [
        { label: "Verstanden – § 22 greift bei Wahlen nicht", next: "q_bf", tone: "pos" }
      ]
    },

    q_22_heilung: {
      station: "mitwirkung",
      kind: "frage",
      norm: "§ 22 VI GemO",
      title: "Ist der § 22-Verstoß geheilt?",
      def: "<b>§ 22 VI 2:</b> Die Entscheidung gilt als von Anfang an wirksam, wenn nicht binnen <b>3 Monaten</b> der Bürgermeister die Ausführung aussetzt oder die Aufsichtsbehörde beanstandet.<br><b>§ 22 VI 3:</b> Keine Wirksamkeit gegenüber demjenigen, der vor Fristablauf einen förmlichen Rechtsbehelf eingelegt hat, wenn der Mangel im Verfahren festgestellt wird.<br><b>Satzungen:</b> stattdessen Jahresfrist des § 24 VI (§ 22 VI 5).<br><b>Folge bei Aussetzung/Beanstandung:</b> unverzügliche fehlerfreie Wiederholung (§ 22 VI 4).",
      options: [
        { label: "Ja, geheilt (Frist abgelaufen, keine Aussetzung/Beanstandung)", next: "q_bf", set: { ordnungsfehler: true }, tone: "warn" },
        { label: "Nein", next: "e_unwirksam_22", tone: "neg" }
      ]
    },

    /* ---------- A.II.4 Beschlussfähigkeit ---------- */

    q_bf: {
      station: "beschluss",
      kind: "frage",
      norm: "§ 39 GemO",
      title: "War der Gemeinderat beschlussfähig?",
      text: "Vorab die GESETZLICHE ZAHL der Ratsmitglieder bestimmen: Zahl der gewählten Ratsmitglieder nach der Einwohnerstaffel des § 29 II GemO; der Rat besteht aus den gewählten Mitgliedern und dem Vorsitzenden (§ 29 I 1). Ruhens- und Inkompatibilitätstatbestände (§ 36 III 2, §§ 51 ff., KWG) beachten.",
      def: "<b>Prüfreihenfolge:</b><br>1. <b>Regulär</b> (§ 39 I 1): mehr als die Hälfte der gesetzlichen Zahl anwesend (digital Zugeschaltete gelten als anwesend, § 35a I 4).<br>2. <b>Vermindert</b> (§ 39 II HS 1): Können Mitglieder wegen § 22 nicht teilnehmen, genügt ⅓ der gesetzlichen Zahl.<br>3. <b>Ersatzentscheidung des BM</b> (§ 39 II HS 2): unter ⅓ – der BM entscheidet nach Anhörung der nicht ausgeschlossenen Anwesenden anstelle des Rates.<br>4. <b>Zweiteinladung</b> (§ 39 I 2): bei erneuter Ladung wegen Beschlussunfähigkeit genügen 3 Mitglieder; ausdrücklicher Hinweis erforderlich.",
      options: [
        { label: "Ja, regulär beschlussfähig (§ 39 I 1)", next: "q_gegenstand", tone: "pos" },
        { label: "Vermindert beschlussfähig (§ 39 II HS 1)", detail: "§ 22-Ausschluss kausal, mind. 1/3 anwesend", next: "q_gegenstand", tone: "warn" },
        { label: "Beschlussfähig kraft Zweiteinladung (§ 39 I 2)", detail: "mind. 3 Mitglieder, Hinweis erfolgt", next: "q_gegenstand", tone: "warn" },
        { label: "Ersatzentscheidungsrecht des BM (§ 39 II HS 2)", next: "e_ersatzentscheidung", tone: "warn" },
        { label: "Nein – dennoch wurde beschlossen", next: "e_unwirksam_bf", tone: "neg" }
      ]
    },

    q_gegenstand: {
      station: "beschluss",
      kind: "frage",
      norm: "§ 34 VI 1 GemO",
      title: "Stand der Beschlussgegenstand hinreichend konkret auf der Tagesordnung?",
      def: "Beschlossen werden darf nur über Gegenstände, die (konkret) auf der TO stehen. Eine Beschlussfassung unter „Mitteilungen“ oder „Verschiedenes“ ist unzulässig – Verstoß gegen Schutzvorschriften der Ratsmitglieder (Sitzungsvorbereitung) und geeignet, sich auf das Ergebnis auszuwirken.",
      options: [
        { label: "Ja", next: "@fassung", tone: "pos" },
        { label: "Nein", next: "e_unwirksam_gegenstand", tone: "neg" }
      ]
    },

    /* ---------- A.II.5 Beschlussfassung ---------- */

    q_fassung_sach: {
      station: "beschluss",
      kind: "frage",
      norm: "§ 40 I, IV GemO",
      title: "Beschlussfassung: Form und Mehrheit ordnungsgemäß?",
      def: "<b>Mehrheit</b> (§ 40 I 1): Mehrheit der Stimmen der ANWESENDEN Ratsmitglieder, soweit gesetzlich nichts anderes gilt (z. B. § 25 II Hauptsatzung: gesetzliche Zahl; § 34 VII: 2/3). Stimmengleichheit = Ablehnung (§ 40 I 2). Enthaltungen und ungültige Stimmen zählen NICHT mit (§ 40 IV 1).<br><b>Form</b> (§ 40 I 3): offene Abstimmung, sofern nicht die GeschO anderes vorsieht oder der Rat es mit 2/3 der gesetzlichen Zahl im Einzelfall beschließt.",
      options: [
        { label: "Ja, ordnungsgemäß", next: "q_matr", tone: "pos" },
        { label: "Erforderliche Mehrheit verfehlt / falsch berechnet", detail: "Verstoß gegen das Demokratieprinzip – wesentlich, keine Heilung", next: "e_unwirksam_mehrheit", tone: "neg" },
        { label: "Zu Unrecht geheim oder offen abgestimmt", detail: "wesentlicher Verfahrensverstoß (STAR bzw. Ergebnisrelevanz; a. A. vertretbar)", next: "e_unwirksam_abstimmungsform", tone: "neg" }
      ]
    },

    q_fassung_wahl: {
      station: "beschluss",
      kind: "frage",
      norm: "§ 40 II–V GemO",
      title: "Wahlverfahren nach § 40 II–V GemO eingehalten?",
      def: "<b>Wahlvorschlag</b> (II): Nur vor der Wahl Vorgeschlagene sind wählbar.<br><b>Dreistufiges Verfahren</b> (III): 1. Wahlgang – gewählt, wer MEHR ALS DIE HÄLFTE der Stimmen erhält → sonst <b>Wiederholungswahl</b> (voller Wahlgang mit ALLEN Vorgeschlagenen!) → sonst <b>Stichwahl</b> der beiden Stimmhöchsten (Los über den Einzug) → bei erneutem Gleichstand entscheidet das <b>Los</b> (durch den Vorsitzenden).<br><b>Auszählung</b> (IV): Enthaltungen/ungültige Stimmen zählen nicht; unbeschriebener Stimmzettel = Enthaltung; Zusatz/Verwahrung/Vorbehalt = ungültig.<br><b>Form</b> (V): öffentliche Sitzung; Beigeordnete und der BM im Fall des § 53 II zwingend durch Stimmzettel in GEHEIMER Abstimmung; sonstige Wahlen geheim, sofern der Rat nichts anderes beschließt.",
      hint: "Typische Fehler: Stichwahl statt Wiederholungswahl im 2. Wahlgang (unzulässige Verengung auf zwei Bewerber), Los statt Stichwahl, offene Abstimmung über einen Beigeordneten.",
      options: [
        { label: "Ja, Verfahren eingehalten", next: "q_matr", tone: "pos" },
        { label: "Nein, Wahlverfahrensfehler", detail: "z. B. Stufenfolge verletzt, Auszählung falsch, Formverstoß", next: "q_wahl_kausal", tone: "neg" }
      ]
    },

    q_wahl_kausal: {
      station: "beschluss",
      kind: "frage",
      norm: "Fehlerfolgen bei Wahlen",
      title: "Hat sich der Fehler TATSÄCHLICH auf das Wahlergebnis ausgewirkt?",
      def: "<b>Besonderheit bei Wahlen:</b> Anders als beim Sachbeschluss genügt die bloße EIGNUNG des Fehlers nicht – erforderlich ist eine <b>tatsächliche Auswirkung</b> auf das Wahlergebnis. Fehlt sie, bleibt die Wahl trotz Verfahrensfehlers gültig.",
      options: [
        { label: "Ja, tatsächliche Auswirkung", next: "e_wahl_ungueltig", tone: "neg" },
        { label: "Nein", next: "e_wahl_gueltig_trotz", tone: "warn" }
      ]
    },

    /* ---------- B. Materielle Rechtmäßigkeit ---------- */

    q_matr: {
      station: "matr",
      kind: "frage",
      norm: "geltendes Recht",
      title: "Verstößt der Beschluss inhaltlich gegen geltendes Recht?",
      text: "„Der Beschluss ist materiell rechtmäßig, wenn er inhaltlich mit der objektiven Rechtsordnung vereinbar ist.“ Materielle Fehler führen STETS zur Rechtswidrigkeit und Unwirksamkeit – keine Heilung möglich!",
      def: "<b>Prüfe Verstöße gegen:</b> Gesetze, Rechtsverordnungen, Satzungen, Verfassungsrecht.<br><b>Beispiele:</b> Wahl eines vierten Beigeordneten in einer Gemeinde unter 25.000 Einwohnern (Verstoß gegen § 50 I 2 GemO); Aufhebung einer Eilentscheidung, obwohl Rechte Dritter entstanden sind (§ 48 S. 3 GemO).<br><b>Bei Wahlen zusätzlich:</b> allgemeine (bewerberunabhängige) Wahlvoraussetzungen (z. B. wirksame Hauptsatzungsregelung, Ausschreibung) und persönliche Wählbarkeitsvoraussetzungen (z. B. § 53 III GemO).",
      options: [
        { label: "Nein, materiell rechtmäßig", next: "e_rechtmaessig", tone: "pos" },
        { label: "Ja, Verstoß gegen geltendes Recht", next: "e_unwirksam_matr", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 32 ff. GemO",
      title: "Beschluss rechtmäßig und wirksam",
      text: "Der Gemeinderat war zuständig, das Verfahren von der Einberufung bis zur Beschlussfassung ist ordnungsgemäß abgelaufen (bzw. Fehler sind unwesentlich oder geheilt), und der Beschluss verstößt inhaltlich nicht gegen geltendes Recht.\n\nErgebnissatz (Klausur): „Der Beschluss über […] ist formell und materiell rechtmäßig zustande gekommen und somit wirksam.“"
    },

    e_unzust_verband: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 II, § 47 I 2 Nr. 4 GemO",
      title: "Unwirksam: keine Verbandskompetenz / Auftragsangelegenheit",
      text: "Der Rat hat über eine Angelegenheit beschlossen, für die die Gemeinde nicht zuständig ist oder die als Auftragsangelegenheit allein dem Bürgermeister obliegt (§ 47 I 2 Nr. 4 GemO). Der Beschluss ist kompetenzwidrig, formell rechtswidrig und unwirksam.\n\nFolgen: Der Bürgermeister hat die Ausführung auszusetzen (§ 42 GemO); die Kommunalaufsicht kann beanstanden (§ 121 GemO) – die Beschlussfassung selbst ist Handeln im Rahmen der Selbstverwaltung."
    },

    e_unzust_organ: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 32, 47 GemO",
      title: "Unwirksam: Organkompetenz fehlt",
      text: "Der Gemeinderat hat in einer Angelegenheit entschieden, die einem anderen Organ zusteht (z. B. Geschäft der laufenden Verwaltung des Bürgermeisters oder wirksam übertragene Angelegenheit). Der Beschluss ist formell rechtswidrig und unwirksam.\n\nGreift der Beschluss in die Organkompetenz des Bürgermeisters ein, kann dieser aussetzen (§ 42 GemO) und notfalls im Kommunalverfassungsstreit vorgehen."
    },

    e_unwirksam_einberufung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 GemO",
      title: "Unwirksam: wesentlicher Einberufungsfehler ohne Heilung",
      text: "Der Verstoß gegen die Einberufungsvorschriften (Nichteinladung, Form- oder Fristverletzung ohne Heilung nach § 34 IV GemO) ist ein Verstoß gegen eine wesentliche Verfahrensvorschrift: Er verletzt Schutzvorschriften der Ratsmitglieder (Stimm-, Teilnahme-, Antrags-, Rederechte – „STAR“) und ist geeignet, sich unmittelbar auf das Beschlussergebnis auszuwirken.\n\nFolge: ALLE in der Sitzung gefassten Beschlüsse sind rechtswidrig und unwirksam."
    },

    e_unwirksam_oeb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 VI, § 35 GemO, Art. 20 III GG",
      title: "Unwirksam: fehlerhafte öffentliche Bekanntmachung",
      text: "Die öffentliche Bekanntmachung von Zeit, Ort und Tagesordnung sichert das Recht der Bürger, an öffentlichen Sitzungen als Zuhörer teilzunehmen (Grundsatz der Sitzungsöffentlichkeit als Ausfluss des Demokratieprinzips, Art. 20 III GG).\n\nDer Fehler verletzt eine Verfassungsgrundsätze konkretisierende Norm – Verstoß gegen eine wesentliche Verfahrensvorschrift. Alle im öffentlichen Sitzungsteil gefassten Beschlüsse sind unwirksam; eine Heilung gibt es nicht."
    },

    e_unwirksam_to: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 VII GemO",
      title: "Unwirksam: Beschluss über unzulässig ergänzten TOP",
      text: "Die Voraussetzungen der TO-Erweiterung (§ 34 VII 1 Nr. 1: Dringlichkeit + Zweidrittelmehrheit) lagen nicht vor. Der Gegenstand hätte nicht behandelt werden dürfen; zudem fehlte er in der öffentlichen Bekanntmachung (Demokratieprinzip).\n\nDer Beschluss über diesen Tagesordnungspunkt ist rechtswidrig und unwirksam."
    },

    e_unwirksam_oeffentlichkeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 I GemO",
      title: "Unwirksam: Öffentlichkeitsgrundsatz verletzt",
      text: "Eine in öffentlicher Sitzung zu behandelnde Angelegenheit wurde zu Unrecht nichtöffentlich beraten und entschieden. Der Bürger wurde seines Rechts beraubt, sich zu informieren – § 35 I GemO konkretisiert den Grundsatz der Sitzungsöffentlichkeit (Demokratieprinzip, Art. 20 III GG).\n\nVerstoß gegen eine wesentliche Verfahrensvorschrift → Beschluss rechtswidrig und unwirksam; keine Heilungsmöglichkeit."
    },

    e_unwirksam_22: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 VI GemO",
      title: "Unwirksam: Verstoß gegen das Mitwirkungsverbot",
      text: "Die Entscheidung ist nach der SPEZIALGESETZLICHEN Fehlerfolge des § 22 VI 1 GemO unwirksam – unabhängig davon, ob der Fehler entscheidungserheblich war. Eine Heilung nach § 22 VI 2 GemO (3 Monate ohne Aussetzung/Beanstandung; bei Satzungen Jahresfrist des § 24 VI) ist nicht eingetreten.\n\nDie ausgesetzte oder beanstandete Entscheidung ist unverzüglich unter Vermeidung des Fehlers zu wiederholen (§ 22 VI 4 GemO)."
    },

    e_unwirksam_bf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 39 GemO",
      title: "Unwirksam: Beschluss trotz Beschlussunfähigkeit",
      text: "Der Beschluss durfte mangels Beschlussfähigkeit gar nicht gefasst werden – der Fehler wirkt sich unmittelbar auf das Beschlussergebnis aus (wesentliche Verfahrensvorschrift).\n\nAlle betroffenen Beschlüsse sind rechtswidrig und unwirksam; Heilungsmöglichkeiten bestehen nicht."
    },

    e_unwirksam_gegenstand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 II, VI GemO",
      title: "Unwirksam: Gegenstand stand nicht (konkret) auf der TO",
      text: "Über einen nicht oder nicht hinreichend konkret angekündigten Gegenstand darf nicht beschlossen werden – Beschlussfassungen unter „Mitteilungen“ oder „Verschiedenes“ sind unzulässig.\n\nVerstoß gegen Schutzvorschriften der Ratsmitglieder (ordnungsgemäße Sitzungsvorbereitung) und geeignet, das Ergebnis zu beeinflussen → wesentlicher Verfahrensverstoß, Beschluss unwirksam."
    },

    e_unwirksam_mehrheit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I 1 GemO",
      title: "Unwirksam: Mehrheitserfordernis verletzt",
      text: "Beschlüsse dürfen nur mit der erforderlichen Mehrheit gefasst werden – der Verstoß verletzt das Demokratieprinzip (Verfassungsgrundsätze konkretisierende Norm) und damit eine wesentliche Verfahrensvorschrift.\n\nDer Beschluss ist rechtswidrig und unwirksam; keine Heilung.\n\nMerke: Enthaltungen und ungültige Stimmen zählen bei der Feststellung der Mehrheit nicht mit (§ 40 IV 1 GemO); Stimmengleichheit bedeutet Ablehnung (§ 40 I 2 GemO)."
    },

    e_unwirksam_abstimmungsform: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 I 3, V GemO",
      title: "Unwirksam: falsche Abstimmungsform",
      text: "Zu Unrecht offene Abstimmung: Verletzung von Schutzvorschriften der Ratsmitglieder (Stimmabgabe ohne Kenntnisnahme der Öffentlichkeit).\nZu Unrecht geheime Abstimmung: geeignet, zu einem anderen Ergebnis zu führen; zudem Verstoß gegen die demokratischen Kontrollrechte der Bürger.\n\nBeides sind nach h. M. Verstöße gegen wesentliche Verfahrensvorschriften (andere Auffassungen vertretbar) → Beschluss rechtswidrig und unwirksam."
    },

    e_unwirksam_matr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "geltendes Recht",
      title: "Unwirksam: materieller Fehler",
      text: "Der Beschluss verstößt inhaltlich gegen geltendes Recht. Materielle Fehler führen IMMER zur Rechtswidrigkeit und Unwirksamkeit – eine Heilung ist ausgeschlossen. Ob der Beschluss formell ordnungsgemäß zustande kam, ist dann unerheblich.\n\nErgebnissatz: „Der Beschluss über […] ist aufgrund des Verstoßes gegen […] materiell rechtswidrig und daher unwirksam.“"
    },

    e_wahl_ungueltig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 II–V, § 43 GemO",
      title: "Wahl ungültig: Verfahrensfehler mit Ergebnisauswirkung",
      text: "Der Wahlverfahrensfehler hat sich tatsächlich auf das Wahlergebnis ausgewirkt – die Wahl ist rechtswidrig und ungültig.\n\nRechtsschutz: Jedes Ratsmitglied kann binnen zwei Wochen Wahlbeschwerde bei der Aufsichtsbehörde erheben (§ 43 I GemO – nur verfahrensrechtliche Gründe). Daneben: Aussetzung durch den BM (§ 42 GemO) und Beanstandung durch die Aufsichtsbehörde (§ 121 GemO)."
    },

    e_wahl_gueltig_trotz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Fehlerfolgen bei Wahlen",
      title: "Wahl trotz Verfahrensfehlers gültig",
      text: "Der Verfahrensfehler hat sich NICHT tatsächlich auf das Wahlergebnis ausgewirkt. Anders als beim Sachbeschluss (dort genügt die Eignung) bleibt die Wahl deshalb gültig – sie ist lediglich fehlerhaft zustande gekommen.\n\nEine Wahlbeschwerde (§ 43 GemO) wäre zwar zulässig, aber unbegründet."
    },

    e_ersatzentscheidung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 39 II HS 2 GemO",
      title: "Ersatzentscheidungsrecht des Bürgermeisters",
      text: "Sind wegen § 22 GemO so viele Mitglieder ausgeschlossen, dass nicht einmal ein Drittel der gesetzlichen Zahl anwesend ist, entscheidet der Bürgermeister nach Anhörung der nicht ausgeschlossenen anwesenden Ratsmitglieder ANSTELLE des Gemeinderats (§ 39 II HS 2 GemO).\n\nEin gleichwohl gefasster Ratsbeschluss wäre unwirksam. Bei Wahlen hat das Ersatzentscheidungsrecht wegen § 22 III GemO praktisch keine Bedeutung."
    }
  },

  routers: {
    "@nach_form": function (flags) {
      return flags.art === "wahl" ? "q_22_wahl" : "q_22";
    },
    "@fassung": function (flags) {
      return flags.art === "wahl" ? "q_fassung_wahl" : "q_fassung_sach";
    }
  }
});
