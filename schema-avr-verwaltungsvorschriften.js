/*
 * Prüfungsschema: Verwaltungsvorschriften – Rechtsnatur und Außenwirkung
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Verwaltungsvorschriften" (Weil – Begriff, fünf Arten, Rechtswirkungen,
 *    Rechtmäßigkeit)
 *  - "Fachstudium II (V) – 1. Verwaltungsvorschriften", "Thema 1 Verwaltungsvorschriften"
 *  - Gesetze: GG Art. 3 I (Selbstbindung); Volltexte geprüft
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-verwaltungsvorschriften",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Handlungsformen der Verwaltung",
  title: "Verwaltungsvorschriften: Rechtsnatur und Außenwirkung",
  description: "Abgrenzung der VV von Rechtsnormen, die fünf Arten (Organisations-, norminterpretierende, ermessenslenkende, normkonkretisierende und gesetzesvertretende VV), mittelbare Außenwirkung über Art. 3 I GG und die Rechtmäßigkeitsprüfung einer VV.",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "art", label: "Art der VV" },
    { id: "wirkung", label: "Außenwirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Wirkung bejaht",
    neg: "Ergebnis: keine Außenwirkung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Art. 84 II, 85 II, 86 GG",
      title: "Liegt eine Verwaltungsvorschrift vor?",
      def: "<b>Verwaltungsvorschriften (VV)</b> = abstrakt-generelle Regelungen einer vorgesetzten an eine nachgeordnete Behörde oder eines Behördenleiters an die ihm unterstellten Bediensteten.<br><br><b>Abgrenzung:</b><br>• zur <b>Rechtsnorm</b> (Gesetz, RVO, Satzung): VV ergehen ohne gesetzliche Ermächtigung kraft Organisations- und Weisungsgewalt und richten sich nur an den Innenbereich der Verwaltung,<br>• zur <b>Einzelweisung:</b> VV sind abstrakt-generell,<br>• zum <b>VA:</b> keine Regelung eines Einzelfalls mit Außenwirkung.",
      options: [
        { label: "Abstrakt-generelle Innenregelung – VV", next: "q_art", tone: "pos" },
        { label: "Regelung mit Außenwirkung ggü. dem Bürger", detail: "dann Rechtsnorm oder VA – anderes Schema", next: "e_keine_vv", tone: "neg" }
      ]
    },

    q_art: {
      station: "art",
      kind: "frage",
      norm: "Kategorien der VV",
      title: "Um welche Art von Verwaltungsvorschrift handelt es sich?",
      def: "<b>1. Organisations- und Dienstvorschriften:</b> regeln innere Organisation und Dienstbetrieb (Geschäftsverteilungsplan, Dienstzeiten, ADGA).<br><b>2. Norminterpretierende VV:</b> bestimmen, wie unbestimmte Rechtsbegriffe auf Tatbestandsseite auszulegen sind.<br><b>3. Ermessenslenkende VV:</b> geben vor, wie das eingeräumte Ermessen zu handhaben ist (z. B. Bußgeldkataloge).<br><b>4. Normkonkretisierende VV:</b> füllen aufgrund gesetzlicher Ermächtigung unbestimmte Rechtsbegriffe rechtssatzmäßig aus (TA Lärm, TA Luft).<br><b>5. Gesetzesvertretende VV:</b> regeln normbedürftige Bereiche ohne gesetzliche Regelung (Subventionsrichtlinien, Beihilfe-VV).",
      options: [
        { label: "Organisations-/Dienstvorschrift oder norminterpretierende VV", next: "e_innenwirkung", tone: "neutral" },
        { label: "Ermessenslenkende oder gesetzesvertretende VV", next: "q_selbstbindung", tone: "neutral" },
        { label: "Normkonkretisierende VV (Umwelt-/Technikrecht)", next: "q_normkonkret", tone: "neutral" }
      ]
    },

    q_selbstbindung: {
      station: "wirkung",
      kind: "frage",
      norm: "Art. 3 I GG",
      title: "Mittelbare Außenwirkung über die Selbstbindung der Verwaltung?",
      def: "<b>Grundsatz:</b> VV sind verwaltungsinterne Regelungen ohne Außenwirkung – sie begründen keine Rechte und Pflichten des Bürgers und können keine EGL für belastende VA sein.<br><br><b>Ausnahme – mittelbare Außenwirkung:</b> Wendet die Verwaltung eine ermessenslenkende oder gesetzesvertretende VV in ständiger Praxis an, bindet sie sich über den <b>Gleichheitssatz (Art. 3 I GG)</b> selbst: Der Bürger hat einen Anspruch darauf, nach der geübten Praxis behandelt zu werden („Selbstbindung der Verwaltung“).<br><br><b>Grenze:</b> keine „Gleichheit im Unrecht“ – aus einer rechtswidrigen Praxis erwächst kein Anspruch.",
      options: [
        { label: "Ständige Verwaltungspraxis vorhanden", next: "e_mittelbar", tone: "pos" },
        { label: "Keine (einheitliche) Praxis", next: "e_innenwirkung", tone: "neg" }
      ]
    },

    q_normkonkret: {
      station: "wirkung",
      kind: "frage",
      norm: "BVerwG-Rspr.",
      title: "Unmittelbare Außenwirkung der normkonkretisierenden VV?",
      def: "Nach der Rechtsprechung des BVerwG haben <b>normkonkretisierende VV</b> im Umwelt- und Technikrecht (TA Lärm, TA Luft) ausnahmsweise <b>unmittelbare Außenwirkung</b> gegenüber dem Bürger und binden auch die Gerichte, wenn:<br>• der <b>Vorrang des Gesetzes</b> beachtet ist,<br>• sie nicht durch <b>neuere Erkenntnisse</b> in Wissenschaft und Technik überholt sind und<br>• <b>sachverständige Kreise beteiligt</b> wurden.",
      options: [
        { label: "Voraussetzungen erfüllt", next: "e_unmittelbar", tone: "pos" },
        { label: "Durch neuere Erkenntnisse überholt / Gesetzesverstoß", next: "e_innenwirkung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_keine_vv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Handlungsformenlehre",
      title: "Keine VV – andere Handlungsform prüfen",
      text: "Regelungen mit Außenwirkung gegenüber dem Bürger sind keine Verwaltungsvorschriften. In Betracht kommen Rechtsverordnung (Art. 80 GG bzw. Art. 110 LV – bedarf gesetzlicher Ermächtigung), Satzung (§ 24 GemO) oder Verwaltungsakt/Allgemeinverfügung (§ 35 VwVfG)."
    },

    e_innenwirkung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Grundsatz der Innenwirkung",
      title: "Nur Innenwirkung – keine Rechte und Pflichten des Bürgers",
      text: "Die VV bindet nur die nachgeordneten Behörden und Bediensteten (kraft Weisungsgewalt). Sie begründet keine Rechte oder Pflichten des Bürgers, kann keine Ermächtigungsgrundlage für belastende VA sein und bindet die Gerichte nicht – norminterpretierende VV sind für die Gerichte nur eine (unverbindliche) Auslegungshilfe.\n\nRechtmäßigkeit einer VV: Befugnis aus der Leitungs- und Weisungskompetenz (keine gesetzliche Ermächtigung erforderlich); formell: Zuständigkeit, ggf. Verfahren nach Fachrecht, Veröffentlichung bei VV mit Außenwirkung; materiell: kein Verstoß gegen höherrangiges Recht, kein Regelungsvorbehalt zugunsten von Gesetz/RVO/Satzung (Wesentlichkeitstheorie!)."
    },

    e_mittelbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Art. 3 I GG",
      title: "Mittelbare Außenwirkung über Art. 3 I GG",
      text: "Über die Selbstbindung der Verwaltung entfaltet die ermessenslenkende bzw. gesetzesvertretende VV mittelbare Außenwirkung: Der Bürger kann verlangen, entsprechend der ständigen, durch die VV gesteuerten Verwaltungspraxis behandelt zu werden (Art. 3 I GG).\n\nEine Abweichung im Einzelfall ist nur aus sachlichem Grund zulässig – sonst liegt ein Ermessensfehler (Verstoß gegen die Selbstbindung) vor. Klausurrelevant v. a. bei Subventionsrichtlinien: Anspruchsgrundlage ist dann die Richtlinie i. V. m. Art. 3 I GG und der Verwaltungspraxis."
    },

    e_unmittelbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "BVerwG (TA Lärm/TA Luft)",
      title: "Unmittelbare Außenwirkung der normkonkretisierenden VV",
      text: "Die normkonkretisierende VV füllt den unbestimmten Rechtsbegriff des Gesetzes verbindlich aus und wirkt unmittelbar auch gegenüber dem Bürger; sie ist von den Gerichten wie eine Rechtsnorm zugrunde zu legen, solange sie nicht durch neuere wissenschaftlich-technische Erkenntnisse überholt ist."
    }
  },

  routers: {}
});
