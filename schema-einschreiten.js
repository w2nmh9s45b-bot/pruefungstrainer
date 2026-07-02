/*
 * Prüfungsschema: Anspruch auf bauaufsichtliches Einschreiten
 * (Nachbar oder Gemeinde gegen die Bauaufsichtsbehörde)
 *
 * Quelle (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff), Folien 167 ff.
 *    (Anspruch auf Tätigwerden Dritter) und 131 ff. (§ 123 VwGO)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "einschreiten-anspruch",
  subject: "Baurecht",
  area: "Nachbarschutz",
  title: "Anspruch auf bauaufsichtliches Einschreiten",
  description: "Nachbar oder Gemeinde verlangen von der Bauaufsichtsbehörde das Einschreiten gegen einen Schwarzbau bzw. eine illegale Nutzung: Befugnisnorm, Tatbestand, Verletzung drittschützender Normen bzw. der Planungshoheit und Ermessensreduzierung auf Null.",
  start: "start",
  stations: [
    { id: "wer", label: "Anspruchsteller" },
    { id: "egl", label: "Befugnisnorm" },
    { id: "tb", label: "Tatbestand" },
    { id: "recht", label: "Subjektives Recht" },
    { id: "ermessen", label: "Ermessen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Anspruch auf Neubescheidung"
  },

  nodes: {

    start: {
      station: "wer",
      kind: "frage",
      norm: "§ 42 I Alt. 2, II VwGO",
      title: "Wer verlangt das Einschreiten der Bauaufsichtsbehörde?",
      text: "Konstellation: Der Bauherr baut ohne oder außerhalb einer Baugenehmigung („Schwarzbau“) oder nutzt eine Anlage illegal. Ein Dritter beantragt bauaufsichtliches Einschreiten; lehnt die Behörde ab, kommen Verpflichtungswiderspruch und Verpflichtungsklage in Betracht.",
      def: "<b>Aufbau:</b> Ermächtigungsgrundlage benennen → materielle Rechtmäßigkeit der Eingriffsnorm (Tatbestand) → Verletzung subjektiver Rechte (Nachbar) bzw. der Planungshoheit (Gemeinde) → Ermessensreduzierung auf Null.",
      options: [
        { label: "Nachbar", detail: "Eigentümer eines benachbarten Grundstücks", next: "q_egl", set: { wer: "nachbar" }, tone: "neutral" },
        { label: "Gemeinde", detail: "z. B. weil ihr Einvernehmen (§ 36 BauGB) übergangen wurde", next: "q_egl", set: { wer: "gemeinde" }, tone: "neutral" }
      ]
    },

    q_egl: {
      station: "egl",
      kind: "frage",
      norm: "§§ 80, 81 LBauO",
      title: "Auf welche Befugnisnorm soll das Einschreiten gestützt werden?",
      text: "Der Anspruch kann sich nur aus einer Befugnisnorm ergeben, deren Tatbestand erfüllt ist. Bei laufenden Bauarbeiten regelmäßig § 80 LBauO (Baueinstellung).",
      options: [
        { label: "Baueinstellung, § 80 I LBauO", detail: "Laufende, formell illegale Bauarbeiten stoppen", next: "q_tb", set: { egl: "einstellung" }, tone: "neutral" },
        { label: "Nutzungsuntersagung, § 81 S. 1 Alt. 2 LBauO", detail: "Formell illegale Nutzung unterbinden", next: "q_tb", set: { egl: "nutzung" }, tone: "neutral" },
        { label: "Beseitigungsanordnung, § 81 S. 1 Alt. 1 LBauO", detail: "Formell und materiell illegale Anlage beseitigen", next: "q_tb", set: { egl: "beseitigung" }, tone: "neutral" }
      ]
    },

    q_tb: {
      station: "tb",
      kind: "frage",
      norm: "§§ 80, 81 LBauO",
      title: "Sind die Tatbestandsvoraussetzungen der Befugnisnorm erfüllt?",
      def: "<b>§ 80 I LBauO:</b> formelle Illegalität der Bauarbeiten.<br><b>§ 81 S. 1 Alt. 2 LBauO:</b> formelle Illegalität der Nutzung.<br><b>§ 81 S. 1 Alt. 1 LBauO:</b> formelle UND materielle Illegalität; rechtmäßige Zustände können nicht auf andere Weise hergestellt werden.",
      hint: "Die ausführliche Tatbestandsprüfung mit allen Verzweigungen findest du im Schema „Maßnahmen der Bauaufsichtsbehörde“.",
      options: [
        { label: "Ja, Tatbestand erfüllt", next: "@recht", tone: "pos" },
        { label: "Nein", next: "e_tb", tone: "neg" }
      ]
    },

    q_schutznorm: {
      station: "recht",
      kind: "frage",
      norm: "Schutznormtheorie",
      title: "Verstößt das Vorhaben gegen eine den Nachbarn schützende Vorschrift?",
      text: "Die bloße objektive Rechtswidrigkeit des Vorhabens genügt NICHT – das Vorhaben muss gerade nachbarschützende Normen verletzen.",
      def: "<b>Generell drittschützend:</b> Art der baulichen Nutzung (§§ 30 I/34 II BauGB i. V. m. BauNVO – Gebietserhaltungsanspruch) · § 15 I BauNVO · im Bauordnungsrecht: Abstandsflächen (§ 8 LBauO), Standsicherheit (§ 13 I 2 LBauO), Brandschutz (§ 15 LBauO), Stellplatzpflicht (§ 47 VII LBauO).<br><b>Partiell-konkret:</b> Rücksichtnahmegebot (z. B. § 15 I 2 BauNVO, erdrückende Wirkung).",
      options: [
        { label: "Ja, drittschützende Norm verletzt", next: "q_ermessen", tone: "pos" },
        { label: "Nein, Vorhaben ist nur objektiv rechtswidrig", next: "e_drittschutz", tone: "neg" }
      ]
    },

    q_planungshoheit: {
      station: "recht",
      kind: "frage",
      norm: "§ 36 BauGB, Art. 28 II GG",
      title: "Ist die Planungshoheit der Gemeinde verletzt?",
      text: "Die Gemeinde hat einen Anspruch auf Einschreiten nur, wenn die fragliche Nutzung ihre Planungshoheit verletzt: Das nach § 36 BauGB erforderliche Einvernehmen wurde nicht eingeholt, oder die Behörde hat sich über ein rechtmäßig verweigertes Einvernehmen hinweggesetzt.",
      hint: "Klassiker: Ein Vorhaben wird nur nach Fachrecht genehmigt, obwohl auch eine Baugenehmigung (mit Einvernehmen der Gemeinde) erforderlich gewesen wäre.",
      options: [
        { label: "Ja, Einvernehmen übergangen / Planungshoheit verletzt", next: "q_ermessen", tone: "pos" },
        { label: "Nein", next: "e_planungshoheit", tone: "neg" }
      ]
    },

    q_ermessen: {
      station: "ermessen",
      kind: "frage",
      norm: "§ 40 VwVfG",
      title: "Ist das Ermessen der Behörde auf Null reduziert?",
      text: "Die Befugnisnormen räumen der Behörde Ermessen ein. Ein Anspruch auf Einschreiten besteht nur bei Ermessensreduzierung auf Null; sonst besteht lediglich ein Anspruch auf ermessensfehlerfreie Entscheidung.",
      def: "<b>Merke:</b> Bei Baulichkeiten, die Nachbarrechte beeinträchtigen, ist das Ermessen <u>regelmäßig</u> dahin reduziert, dass nur die Pflicht zur Beseitigung des nachbarrechtswidrigen Zustands verbleibt.",
      options: [
        { label: "Ja, Ermessensreduzierung auf Null", next: "e_anspruch", tone: "pos" },
        { label: "Nein, aber Entscheidung steht noch aus / war fehlerhaft", next: "e_bescheidung", tone: "warn" },
        { label: "Nein, Einschreiten wurde ermessensfehlerfrei abgelehnt", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 80, 81 LBauO i. V. m. § 40 VwVfG",
      title: "Anspruch auf bauaufsichtliches Einschreiten (+)",
      text: "Tatbestand der Befugnisnorm erfüllt, subjektive Rechte verletzt, Ermessen auf Null reduziert – die Behörde MUSS einschreiten.\n\nRechtsschutz: Verpflichtungsklage (§ 42 I Alt. 2 VwGO; begründet nach § 113 V VwGO).\n\nEilrechtsschutz: einstweilige Anordnung nach § 123 I 2 VwGO (Regelungsanordnung). Anordnungsanspruch = der Einschreitensanspruch (glaubhaft, wenn die Hauptsache Aussicht auf Erfolg hat); Anordnungsgrund = drohende Verfestigung der baulichen Situation durch Schaffung vollendeter Tatsachen."
    },

    e_bescheidung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 113 V 2 VwGO",
      title: "Nur Anspruch auf ermessensfehlerfreie Entscheidung",
      text: "Ohne Ermessensreduzierung auf Null besteht kein Anspruch auf das Einschreiten selbst, wohl aber auf eine ermessensfehlerfreie (Neu-)Bescheidung des Antrags (Bescheidungsurteil, § 113 V 2 VwGO)."
    },

    e_tb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 80, 81 LBauO",
      title: "Kein Anspruch: Tatbestand der Befugnisnorm fehlt",
      text: "Die Behörde dürfte selbst gar nicht einschreiten – ohne erfüllten Tatbestand der Befugnisnorm scheidet ein Anspruch Dritter auf Einschreiten von vornherein aus."
    },

    e_drittschutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Schutznormtheorie",
      title: "Kein Anspruch: keine drittschützende Norm verletzt",
      text: "Das Vorhaben ist allenfalls objektiv rechtswidrig. Da der Nachbar nicht in eigenen Rechten verletzt ist, hat er keinen Anspruch auf Einschreiten – die Entscheidung bleibt im (objektiv-rechtlichen) Ermessen der Behörde."
    },

    e_planungshoheit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 BauGB",
      title: "Kein Anspruch der Gemeinde",
      text: "Die Planungshoheit der Gemeinde ist nicht verletzt – ihr Einvernehmen war nicht erforderlich, wurde eingeholt oder rechtmäßig ersetzt. Ein Anspruch auf bauaufsichtliches Einschreiten besteht nicht."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 40 VwVfG",
      title: "Kein Anspruch: Ablehnung ermessensfehlerfrei",
      text: "Die Behörde hat das Einschreiten ermessensfehlerfrei abgelehnt. Ohne Ermessensreduzierung auf Null besteht kein durchsetzbarer Anspruch auf bauaufsichtliches Einschreiten."
    }
  },

  routers: {
    "@recht": function (flags) {
      return flags.wer === "gemeinde" ? "q_planungshoheit" : "q_schutznorm";
    }
  }
});
