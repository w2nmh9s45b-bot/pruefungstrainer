/*
 * Prüfungsschema: Versammlungsfreiheit, Art. 8 I GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "2.1.1 StVR 29-30 OLE zu Art. 8 I GG" (Jagatic, FS I)
 *  - "14. LV 31+32 - Fallübung Art. 8 GG (Versammlungsfreiheit) II" (FS I)
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: schutz → eingriff → rechtfertigung → einzelakt → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-versammlungsfreiheit",
  subject: "Staatsrecht / Europarecht",
  area: "Grundrechte – Einzelgrundrechte",
  title: "Versammlungsfreiheit, Art. 8 GG",
  description: "Kollektive Meinungskundgabe als „Lebenselement der Demokratie“: Versammlungsbegriff (enger/erweiterter), friedlich und ohne Waffen, Eingriffe, Schranken für Versammlungen unter freiem Himmel (Art. 8 II GG, VersG) und in geschlossenen Räumen, Spontan- und Eilversammlungen.",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "schutz", label: "Schutzbereich" },
    { id: "eingriff", label: "Eingriff" },
    { id: "rechtfertigung", label: "Rechtfertigung" },
    { id: "einzelakt", label: "Einzelakt" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Art. 8 GG verletzt",
    neg: "Keine Verletzung des Art. 8 GG",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= I. Schutzbereich ================= */

    start: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 8 I, 116 I GG",
      title: "Persönlicher Schutzbereich: Deutsche i. S. d. Art. 116 I GG?",
      text: "Art. 8 I GG gewährt allen Deutschen das Recht, sich friedlich und ohne Waffen zu versammeln – ein Deutschengrundrecht. Art. 8 GG steht in engem Verhältnis zu Art. 5 I 1 GG; beide eröffnen den „Kampf der Meinungen“, das Lebenselement der Demokratie (BVerfG).",
      options: [
        { label: "Deutsche (Art. 116 I GG)", next: "q_versammlung", tone: "pos" },
        { label: "EU-Bürger", detail: "Über das Diskriminierungsverbot (Art. 18 AEUV) wie Deutsche geschützt", next: "q_versammlung", tone: "pos" },
        { label: "Nicht-EU-Ausländer", detail: "Rückgriff auf Art. 2 I GG (Auffanggrundrecht)", next: "e_auslaender", tone: "warn" }
      ]
    },

    q_versammlung: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 8 I GG",
      title: "Liegt eine Versammlung vor – mehrere Personen?",
      def: "<b>Versammlung:</b> das Zusammenkommen mehrerer Personen zu einem gemeinsamen Zweck. Zur Mindestzahl (BVerfG offen) werden vertreten: zwei (h. L.), drei oder sieben Personen. Klausurtipp: alle drei Ansätze kurz nennen – meist sind es ohnehin deutlich mehr als sieben Personen, sodass alle Auffassungen erfüllt sind.",
      options: [
        { label: "Ja, mehrere Personen (nach allen Auffassungen)", next: "q_zweck", tone: "pos" },
        { label: "Nein, Einzelperson", next: "e_keine_versammlung", tone: "neg" }
      ]
    },

    q_zweck: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 8 I GG",
      title: "Gemeinsamer Zweck: Teilhabe an der Meinungsbildung?",
      text: "Keine bloße „Ansammlung“ (zufälliges Zusammenkommen, z. B. Menschenauflauf nach Unfall). Das BVerfG verlangt eine auf die Teilhabe an der öffentlichen Meinungsbildung gerichtete Zusammenkunft (enger Versammlungsbegriff); die Gegenauffassung lässt auch private Angelegenheiten genügen (erweiterter Begriff).",
      def: "<b>Nicht geschützt nach BVerfG:</b> reine Event-Veranstaltungen (Facebook-Partys); bei gemischten Veranstaltungen entscheidet das Gesamtgepräge. Blockaden, die Forderungen zwangsweise/selbsthilfeähnlich durchsetzen sollen, sind nicht geschützt – rein symbolische Unterstützung schon. Klausurhinweis: Beide Auffassungen kommen an der HöV stets zum selben Ergebnis – kein Streitentscheid nötig.",
      options: [
        { label: "Ja, Teilhabe an öffentlicher Meinungsbildung", detail: "z. B. politisch bedeutsames Thema – dann auch nach der Gegenauffassung (+)", next: "q_verhalten", tone: "pos" },
        { label: "Bloße Ansammlung / reine Event-Veranstaltung", next: "e_keine_versammlung", tone: "neg" },
        { label: "Zwangsweise Blockade", detail: "z. B. Festketten auf Schienen", next: "e_keine_versammlung", tone: "neg" }
      ]
    },

    q_verhalten: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 8 I GG",
      title: "Geschütztes Verhalten betroffen?",
      def: "Art. 8 GG schützt neben der <b>Teilnahme</b> auch <b>Organisation, Vorbereitung und Anreise</b>. Nicht geschützt: Versammlungen an nicht allgemein zugänglichen Orten (z. B. Privatgrundstücke Dritter) – Art. 8 I GG ist Abwehrrecht gegen den Staat.",
      options: [
        { label: "Ja (Teilnahme, Organisation, Vorbereitung, Anreise)", next: "q_friedlich", tone: "pos" },
        { label: "Nein, nicht allgemein zugänglicher Ort", next: "e_keine_versammlung", tone: "neg" }
      ]
    },

    q_friedlich: {
      station: "schutz",
      kind: "frage",
      norm: "Art. 8 I GG",
      title: "„Friedlich und ohne Waffen“?",
      text: "Nur bei Anhaltspunkten im Sachverhalt vertieft prüfen; sonst in einem Satz feststellen.",
      def: "<b>Friedlich:</b> wenn die Versammlung als Ganzes keinen gewalttätigen/aufrührerischen Verlauf nimmt („kollektive Unfriedlichkeit“). Rechtsverstöße Einzelner schaden nicht (Ausschluss nach §§ 11 I, 18 III VersG möglich), außer die übrigen Teilnehmer billigen/decken sie. Sitzblockaden sind nicht gewalttätig. <b>Waffen:</b> Gegenstände, die objektiv zur Verletzung geeignet sind und subjektiv dazu mitgeführt werden. Schutzkleidung/Vermummung = „passive Bewaffnung“, keine Waffe – kann aber Indiz für Unfriedlichkeit sein.",
      options: [
        { label: "Ja, friedlich und ohne Waffen", detail: "Schutzbereich vollständig eröffnet", next: "q_eingriff", tone: "pos" },
        { label: "Nein, kollektiv unfriedlich / bewaffnet", next: "e_unfriedlich", tone: "neg" }
      ]
    },

    /* ================= II. Eingriff ================= */

    q_eingriff: {
      station: "eingriff",
      kind: "frage",
      norm: "Art. 8 I GG, § 15 VersG",
      title: "Liegt ein Eingriff vor?",
      text: "Mit der allgemeinen Eingriffs-Definition beginnen: jedes staatliche Handeln, das das geschützte Verhalten ganz oder teilweise unmöglich macht.",
      def: "<b>Typische Eingriffe:</b> Anmelde- oder Erlaubnispflicht (in Art. 8 I GG selbst genannt), Auflagen und Verbote/Auflösung (§ 15 I, III VersG), mittelbar-faktische Eingriffe (Behinderung der Anreise durch Polizeikontrollen, abschreckende Überwachung mit Drohnen/Kameras/Fotos).",
      options: [
        { label: "Ja, Verbot/Auflösung/Auflage (§ 15 VersG)", next: "q_himmel", tone: "pos" },
        { label: "Ja, mittelbar-faktischer Eingriff", detail: "z. B. abschreckende Überwachungsmaßnahmen", next: "q_himmel", tone: "pos" },
        { label: "Nein, kein Eingriff", next: "e_kein_eingriff", tone: "neg" }
      ]
    },

    /* ================= III. Rechtfertigung ================= */

    q_himmel: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 8 II GG",
      title: "Versammlung unter freiem Himmel?",
      def: "<b>Versammlung unter freiem Himmel:</b> wenn keine feste seitliche Umgrenzung vorliegt – auf eine Überdachung kommt es nicht an. Grund: Ohne seitliche Begrenzung ist unkontrollierbar, wer kommt und geht – erhöhtes Konfliktpotential.",
      options: [
        { label: "Ja, unter freiem Himmel", detail: "Einfacher Gesetzesvorbehalt des Art. 8 II GG – ausgestaltet v. a. durch das VersG (§§ 14, 15)", next: "q_formell", set: { himmel: true }, tone: "neutral" },
        { label: "Nein, geschlossener Raum", detail: "Verfassungsimmanente Schranken", next: "q_raum", tone: "neutral" }
      ]
    },

    q_raum: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "h. M., §§ 5–13 VersG",
      title: "Verfassungsimmanente Schranke für Versammlungen in geschlossenen Räumen?",
      text: "Für Versammlungen in geschlossenen Räumen gilt kein Gesetzesvorbehalt. Einschränkungen sind nur durch kollidierende Grundrechte Dritter oder sonstige Verfassungswerte zu rechtfertigen – etwa den Schutz der öffentlichen Sicherheit und Ordnung (Verfassungsrang über Art. 20 III GG). Taugliche Schranken sind insbesondere die §§ 5–13 VersG.",
      options: [
        { label: "Kollidierendes Verfassungsgut vorhanden", next: "q_formell", tone: "pos" },
        { label: "Kein Verfassungsgut einschlägig", next: "e_verletzt", tone: "neg" }
      ]
    },

    q_formell: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 125a I GG",
      title: "Schranken-Schranke: Ist das VersG formell verfassungsgemäß?",
      text: "Gesetzgebungszuständigkeit: Das Versammlungsrecht ist seit der Föderalismusreform Ländersache. Das VersG des Bundes gilt aber nach Art. 125a I GG fort, solange Rheinland-Pfalz kein eigenes Versammlungsgesetz erlässt – RLP hat keines erlassen, das Bundes-VersG ist anzuwenden.",
      options: [
        { label: "Ja, VersG gilt fort und ist formell verfassungsgemäß", next: "q_materiell", tone: "pos" },
        { label: "Nein (fiktives Landes-/Bundesgesetz mit Kompetenzfehler)", next: "e_verletzt_gesetz", tone: "neg" }
      ]
    },

    q_materiell: {
      station: "rechtfertigung",
      kind: "frage",
      norm: "Art. 20 III GG, § 14 VersG",
      title: "Materielle Verfassungsmäßigkeit – Problem Spontan- und Eilversammlungen",
      text: "Die Verhältnismäßigkeit wie gewohnt prüfen. Bei der Anmeldepflicht des § 14 I VersG ist eine verfassungskonforme Auslegung geboten, da Art. 8 I GG Versammlungen „ohne Anmeldung oder Erlaubnis“ gewährleistet.",
      def: "<b>Spontanversammlung</b> (aus momentanem Anlass, ungeplant, ohne Veranstalter): Anmeldepflicht des § 14 I VersG gilt nicht. <b>Eilversammlung</b> (geplant mit Veranstalter, fristgerechte Anmeldung ohne Gefährdung des Zwecks unmöglich): Anmeldung ist schnellstmöglich nachzuholen. Nur abstrakt darstellen – Subsumtion erst beim Einzelakt!",
      options: [
        { label: "Gesetz (verfassungskonform ausgelegt) verfassungsgemäß", next: "q_einzelakt", tone: "pos" },
        { label: "Gesetz materiell verfassungswidrig", next: "e_verletzt_gesetz", tone: "neg" }
      ]
    },

    /* ================= IV. Einzelakt ================= */

    q_einzelakt: {
      station: "einzelakt",
      kind: "frage",
      norm: "Art. 20 III GG",
      title: "Ist der Einzelakt verhältnismäßig?",
      text: "Verhältnismäßigkeit der konkreten Maßnahme prüfen. Bei Spontan-/Eilversammlungen: Wurden die Maßstäbe der verfassungskonformen Auslegung beachtet? Stets den Einzelfall betrachten – z. B. genügt oft der Ausschluss einzelner bekannter Störer statt der Auflösung der gesamten Versammlung.",
      options: [
        { label: "Ja, verhältnismäßig", next: "e_nicht_verletzt", tone: "pos" },
        { label: "Nein: Spontanversammlung nur wegen fehlender Anmeldung aufgelöst", detail: "Kein legitimer Zweck – unverhältnismäßig", next: "e_verletzt", tone: "neg" },
        { label: "Nein: Eilversammlung trotz nachgeholter Anmeldung aufgelöst", next: "e_verletzt", tone: "neg" },
        { label: "Nein: Auflösung statt milderem Störer-Ausschluss", next: "e_verletzt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_auslaender: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Art. 8 GG nicht anwendbar – Art. 2 I GG prüfen",
      text: "Art. 8 I GG ist ein Deutschengrundrecht. Nicht-EU-Ausländer können sich bei Versammlungen auf die allgemeine Handlungsfreiheit aus Art. 2 I GG berufen (Einhaltung des einfachen Rechts und des Verhältnismäßigkeitsgrundsatzes)."
    },
    e_keine_versammlung: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Versammlung – Schutzbereich nicht eröffnet",
      text: "Es fehlt am Zusammenkommen mehrerer Personen zu einem gemeinsamen Zweck (bloße Ansammlung, reine Event-Veranstaltung, zwangsweise Blockade oder nicht allgemein zugänglicher Ort). Art. 8 I GG schützt das Verhalten nicht; ggf. Art. 2 I GG als Auffanggrundrecht prüfen."
    },
    e_unfriedlich: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Unfriedliche/bewaffnete Versammlung – kein Schutz",
      text: "Die Versammlung nimmt als Ganzes einen gewalttätigen und aufrührerischen Verlauf bzw. die Teilnehmer führen Waffen mit (verfassungsunmittelbare Schranke im Schutzbereich). Sie genießt keinen Schutz aus Art. 8 I GG und kann aufgelöst werden."
    },
    e_kein_eingriff: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Eingriff",
      text: "Die Maßnahme macht die Grundrechtsausübung weder ganz noch teilweise unmöglich und schreckt auch nicht mittelbar-faktisch von der Teilnahme ab. Eine Verletzung des Art. 8 I GG scheidet aus."
    },
    e_verletzt_gesetz: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 8 GG verletzt – Schrankengesetz verfassungswidrig",
      text: "Das einschränkende Gesetz ist formell oder materiell verfassungswidrig und damit keine taugliche Schranke. Der Eingriff in die Versammlungsfreiheit ist nicht gerechtfertigt."
    },
    e_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Art. 8 GG verletzt",
      text: "Der Eingriff ist verfassungsrechtlich nicht gerechtfertigt – insbesondere weil die Maßstäbe für Spontan- und Eilversammlungen missachtet wurden oder ein milderes Mittel (Ausschluss einzelner Störer) genügt hätte. Die Versammlungsfreiheit aus Art. 8 I GG ist verletzt."
    },
    e_nicht_verletzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Verletzung des Art. 8 GG",
      text: "Der Eingriff ist gerechtfertigt: taugliche Schranke (Art. 8 II GG i. V. m. VersG bzw. verfassungsimmanente Schranken), verfassungsgemäßes Schrankengesetz und verhältnismäßiger Einzelakt. Art. 8 I GG ist nicht verletzt."
    }
  }
});
