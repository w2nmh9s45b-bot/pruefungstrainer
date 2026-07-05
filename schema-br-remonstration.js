/*
 * Prüfungsschema: Remonstration (§ 36 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 5 - Beamtenpflichten" (Minor) 2024/2025, Ziff. 5.3.2 h)
 *  - Gesetze: BeamtStG §§ 35, 36 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-remonstration",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Pflichten und Rechte",
  title: "Remonstration (§ 36 BeamtStG)",
  description: "Die Pflicht zum rechtmäßigen Handeln und das zweistufige Remonstrationsverfahren: Bedenken unverzüglich beim unmittelbaren Vorgesetzten geltend machen, dann beim nächsthöheren – Befreiung von der eigenen Verantwortung, die absoluten Grenzen (Menschenwürde, Strafbarkeit) und der Sonderfall Gefahr im Verzug.",
  start: "start",
  stations: [
    { id: "pflicht", label: "Pflicht" },
    { id: "stufe1", label: "1. Stufe" },
    { id: "stufe2", label: "2. Stufe" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: ausführen (befreit)",
    neg: "Ergebnis: nicht ausführen",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 36 I, § 35 I BeamtStG",
      title: "Ausgangslage: Eigenverantwortung trifft Folgepflicht",
      def: "<b>Spannungsfeld:</b> Beamte tragen für die Rechtmäßigkeit ihrer dienstlichen Handlungen die <b>volle persönliche Verantwortung</b> (§ 36 I BeamtStG) – zugleich müssen sie dienstliche <b>Anordnungen ausführen</b> und allgemeine Richtlinien befolgen (<b>Folgepflicht</b>, § 35 I 2 BeamtStG; Ausnahme: gesetzliche Weisungsfreiheit).<br><br>Die Auflösung bietet das <b>Remonstrationsverfahren</b> (§ 36 II BeamtStG): Wer Bedenken gegen die <b>Rechtmäßigkeit</b> einer Anordnung hat, ist <b>verpflichtet</b> zu remonstrieren (Remonstrationspflicht – zugleich Remonstrationsrecht).<br><br><b>Klausur-Einstieg:</b> Hat der Beamte Bedenken gegen die Rechtmäßigkeit der dienstlichen Anordnung?",
      options: [
        { label: "Bedenken vorhanden", next: "q_stufe1", tone: "pos" },
        { label: "Anordnung offensichtlich unzulässig?", next: "q_grenzen", tone: "warn" },
        { label: "Gefahr im Verzug", next: "e_gefahr", tone: "warn" }
      ]
    },

    q_stufe1: {
      station: "stufe1",
      kind: "frage",
      norm: "§ 36 II 1 BeamtStG",
      title: "1. Stufe: Bedenken unverzüglich beim unmittelbaren Vorgesetzten",
      def: "Die Bedenken sind <b>unverzüglich</b> (ohne schuldhaftes Zögern) <b>auf dem Dienstweg</b> – also zunächst bei der/dem <b>unmittelbaren Vorgesetzten</b> – geltend zu machen (§ 36 II 1 BeamtStG).<br><br>Formfrei, aber aus Beweisgründen empfiehlt sich die Schriftform. Inhaltlich: konkrete rechtliche Bedenken benennen (nicht bloße Zweckmäßigkeitskritik – dagegen gibt es keine Remonstration, nur die Gegenvorstellung).<br><br><b>Reaktion des Vorgesetzten?</b>",
      options: [
        { label: "Anordnung wird aufgehoben/geändert", next: "e_erledigt", tone: "pos" },
        { label: "Anordnung wird aufrechterhalten", next: "q_stufe2", tone: "neutral" }
      ]
    },

    q_stufe2: {
      station: "stufe2",
      kind: "frage",
      norm: "§ 36 II 2, 3 BeamtStG",
      title: "2. Stufe: Bestehen die Bedenken fort – nächsthöhere Vorgesetzte?",
      def: "Werden die Bedenken nicht ausgeräumt und bestehen sie fort, hat sich der Beamte an die <b>nächsthöhere Vorgesetzte / den nächsthöheren Vorgesetzten</b> zu wenden (§ 36 II 2 BeamtStG).<br><br><b>Wird die Anordnung (erneut) bestätigt:</b><br>• Der Beamte <b>muss sie ausführen</b> …<br>• … und ist <b>von der eigenen Verantwortung befreit</b> (§ 36 II 3 BeamtStG),<br>• auf <b>Verlangen</b> ist ihm die Bestätigung <b>schriftlich</b> zu erteilen (§ 36 II 4 BeamtStG).<br><br><b>Es sei denn, eine absolute Grenze greift</b> – dann darf trotz Bestätigung nicht ausgeführt werden.",
      options: [
        { label: "Bestätigt – Grenzen prüfen", next: "q_grenzen", tone: "pos" },
        { label: "Anordnung wird aufgehoben", next: "e_erledigt", tone: "pos" }
      ]
    },

    q_grenzen: {
      station: "stufe2",
      kind: "frage",
      norm: "§ 36 II 4 BeamtStG",
      title: "Absolute Grenzen: Menschenwürde, Strafbarkeit, Ordnungswidrigkeit",
      def: "Die Ausführungspflicht (und die Befreiungswirkung) entfällt, wenn das aufgetragene Verhalten<br><br>• die <b>Würde des Menschen verletzt</b> oder<br>• <b>strafbar oder ordnungswidrig</b> ist <b>und</b> die Strafbarkeit/Ordnungswidrigkeit <b>für den Beamten erkennbar</b> ist<br><br>(§ 36 II 4 BeamtStG). In diesen Fällen <b>darf die Anordnung nicht befolgt werden</b> – führt der Beamte sie dennoch aus, trägt er die volle (auch straf-)rechtliche Verantwortung selbst.",
      options: [
        { label: "Grenze überschritten", next: "e_verweigern", tone: "neg" },
        { label: "Keine Grenze verletzt", next: "e_ausfuehren", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ausfuehren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 36 II 3, 4 BeamtStG",
      title: "Ausführen – von der Verantwortung befreit",
      text: "Nach bestätigter Remonstration muss der Beamte die Anordnung ausführen und ist von der EIGENEN VERANTWORTUNG BEFREIT (§ 36 II 3 BeamtStG) – disziplinar- wie haftungsrechtlich (die Remonstration wirkt bei § 48 BeamtStG als Rechtfertigung).\n\nPraxis-Checkliste:\n1. Bedenken dokumentieren,\n2. beide Stufen des Dienstwegs einhalten (unmittelbarer → nächsthöherer Vorgesetzter),\n3. auf Verlangen schriftliche Bestätigung geben lassen (§ 36 II 4 – Beweissicherung!),\n4. ausführen.\n\nDie Verantwortung für die Rechtmäßigkeit liegt dann bei den bestätigenden Vorgesetzten.\n\nMerke: Die Befreiung wirkt nicht bei den absoluten Grenzen (Menschenwürde, erkennbare Strafbarkeit/OWi) – dort besteht ein Ausführungsverbot."
    },

    e_verweigern: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 II 4 BeamtStG",
      title: "Ausführung verweigern (Ausführungsverbot)",
      text: "Verletzt das aufgetragene Verhalten die Menschenwürde oder ist es (für den Beamten erkennbar) strafbar oder ordnungswidrig, DARF die Anordnung NICHT ausgeführt werden – auch nach doppelter Bestätigung nicht (§ 36 II 4 BeamtStG).\n\n• Die Verweigerung ist hier keine Verletzung der Folgepflicht (§ 35 I), sondern Pflichterfüllung,\n• führt der Beamte dennoch aus, haftet er selbst: strafrechtlich (kein \"Befehlsnotstand\" im Beamtenrecht), disziplinarrechtlich und ggf. nach § 48 BeamtStG,\n• zur Absicherung: Verweigerung und Gründe schriftlich dokumentieren, Vorgesetzte informieren.\n\nDie Grenzen sind eng auszulegen – bloße Rechtswidrigkeit unterhalb der Strafbarkeitsschwelle rechtfertigt die Verweigerung nach bestätigter Remonstration NICHT."
    },

    e_erledigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 36 II BeamtStG",
      title: "Remonstration erfolgreich",
      text: "Die Anordnung wurde aufgehoben oder geändert – die Remonstration hat ihren Zweck erfüllt: Sie schützt die Rechtsordnung (Gesetzmäßigkeit der Verwaltung, Art. 20 III GG) und den Beamten zugleich.\n\nMerke: Die Remonstration ist PFLICHT, nicht nur Recht (§ 36 II 1: \"haben ... geltend zu machen\"). Wer erkannte Rechtmäßigkeitsbedenken verschweigt und die rechtswidrige Anordnung einfach ausführt, verletzt seine Pflichten aus § 36 und kann sich später nicht auf die Weisung berufen.\n\nAbzugrenzen: Gegen UNZWECKMÄSSIGE (aber rechtmäßige) Anordnungen gibt es keine Remonstration – hier bleibt die Gegenvorstellung; die Folgepflicht (§ 35 I 2) besteht."
    },

    e_gefahr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 36 III BeamtStG",
      title: "Gefahr im Verzug: verkürztes Verfahren",
      text: "Verlangt die Vorgesetzte/der Vorgesetzte die SOFORTIGE Ausführung, weil Gefahr im Verzug besteht und die Entscheidung der/des höheren Vorgesetzten nicht rechtzeitig herbeigeführt werden kann, gilt das zweistufige Verfahren nicht (§ 36 III BeamtStG):\n\n• Die Anordnung ist auszuführen (sofern keine absolute Grenze – Menschenwürde, erkennbare Strafbarkeit/OWi – entgegensteht),\n• die Befreiung von der eigenen Verantwortung tritt entsprechend ein (§ 36 II 3, 4 gilt),\n• die Bestätigung ist auf Verlangen nachträglich schriftlich zu erteilen.\n\nPraxisrelevant etwa im Ordnungs- und Katastrophenschutzdienst, wo Eilentscheidungen keine Remonstrationskaskade zulassen."
    }
  }
});
