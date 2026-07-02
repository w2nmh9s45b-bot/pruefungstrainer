/*
 * Prüfungsschema: Grundstücksrecht – Eigentumserwerb §§ 873, 925 BGB,
 * Grundbuchberichtigung § 894 BGB und Auflassungsvormerkung §§ 883 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "PR-PowerPoint Folien (2. Studienjahr)" (Breitbach, FS II) – Sachenrecht Folien 213 ff.
 *    (Erwerb §§ 873, 925; Schema § 894; Auflassungsvormerkung §§ 883, 888)
 *  - "Planungsstruktur PR FS II" – Grundstücksrecht (4 Lehreinheiten, inkl. § 892)
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 311b, 873, 883, 888, 892, 894, 899, 925)
 *
 * Stationen: einstieg → verpflichtung → auflassung → eintragung → berechtigung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-grundstueck",
  subject: "Privatrecht",
  area: "Grundstücksrecht",
  title: "Eigentumserwerb an Grundstücken, §§ 873, 925 BGB",
  description: "Notarieller Kaufvertrag (§ 311b), Auflassung (§ 925), Eintragung (§ 873), Einigsein und Berechtigung inkl. gutgläubigem Erwerb (§ 892) – dazu Grundbuchberichtigung (§ 894) und Auflassungsvormerkung (§§ 883, 888).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "einstieg", label: "Fallkonstellation" },
    { id: "verpflichtung", label: "Verpflichtungsgeschäft" },
    { id: "auflassung", label: "Auflassung (§ 925)" },
    { id: "eintragung", label: "Eintragung (§ 873)" },
    { id: "berechtigung", label: "Berechtigung / § 892" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "einstieg",
      kind: "frage",
      norm: "§§ 873, 894, 883 BGB",
      title: "Worum geht es im Fall?",
      text: "Grundstücke sind unbewegliche Sachen (§ 90 BGB): katastermäßig vermessene, im Grundbuch unter eigener Nummer geführte Teile der Erdoberfläche. Gebäude sind wesentliche Bestandteile (§§ 93, 94 BGB) und nicht sonderrechtsfähig.",
      options: [
        { label: "Eigentumserwerb an einem Grundstück", detail: "§§ 873, 925 BGB – Auflassung + Eintragung", next: "q_311b", tone: "neutral" },
        { label: "Grundbuch ist unrichtig – Berichtigung", detail: "§ 894 BGB – Anspruch auf Zustimmung zur Berichtigung", next: "q_894_unrichtig", set: { pfad: "894" }, tone: "neutral" },
        { label: "Sicherung des Übereignungsanspruchs", detail: "Auflassungsvormerkung, §§ 883 ff. BGB", next: "q_883_anspruch", set: { pfad: "883" }, tone: "neutral" }
      ]
    },

    /* ================= Erwerb §§ 873, 925 ================= */

    q_311b: {
      station: "verpflichtung",
      kind: "frage",
      norm: "§ 311b I BGB",
      title: "Ist das Verpflichtungsgeschäft formwirksam?",
      text: "Der Grundstückskaufvertrag (§ 433 BGB) bedarf der notariellen Beurkundung (§ 311b I 1 BGB). Formmangel → Nichtigkeit (§ 125 S. 1 BGB).",
      def: "<b>Heilung (§ 311b I 2 BGB):</b> Der ohne Beachtung der Form geschlossene Vertrag wird seinem ganzen Inhalt nach gültig, wenn Auflassung UND Eintragung erfolgen. <b>Merke (Abstraktionsprinzip):</b> Die Nichtigkeit des Kaufvertrags lässt die Wirksamkeit der Übereignung unberührt – dann aber Rückabwicklung über §§ 812 ff. BGB.",
      options: [
        { label: "Ja, notariell beurkundet", next: "q_auflassung", tone: "pos" },
        { label: "Nein, aber Heilung durch Auflassung + Eintragung", detail: "§ 311b I 2 BGB", next: "q_auflassung", tone: "warn" },
        { label: "Nein, formnichtig ohne Heilung", detail: "Kaufvertrag nichtig – die dingliche Prüfung geht dennoch weiter (Abstraktionsprinzip)!", next: "q_auflassung", set: { kvNichtig: true }, tone: "warn" }
      ]
    },

    q_auflassung: {
      station: "auflassung",
      kind: "frage",
      norm: "§§ 873 I, 925 BGB",
      title: "Liegt eine wirksame Auflassung vor?",
      text: "Die Auflassung ist die zur Übertragung des Grundstückseigentums erforderliche Einigung. Sie muss bei GLEICHZEITIGER Anwesenheit beider Teile vor einer zuständigen Stelle erklärt werden (§ 925 I 1 BGB) – zuständig ist jeder Notar (§ 925 I 2 BGB).",
      def: "<b>Kein höchstpersönliches Geschäft:</b> Stellvertretung (§ 164 BGB) ist zulässig – die Parteien müssen nicht persönlich erscheinen. <b>Form:</b> Die mündliche Erklärung vor dem Notar genügt materiell; praktisch wird notariell beurkundet, weil das Grundbuchamt die Auflassung nur in öffentlich beurkundeter Form nachgewiesen bekommt (§ 29 GBO). <b>Bedingungsfeindlich:</b> § 925 II BGB – Auflassung unter Bedingung oder Zeitbestimmung ist unwirksam.",
      options: [
        { label: "Ja, Auflassung wirksam erklärt", next: "q_eintragung", tone: "pos" },
        { label: "Nein", next: "e_keine_auflassung", tone: "neg" }
      ]
    },

    q_eintragung: {
      station: "eintragung",
      kind: "frage",
      norm: "§ 873 I BGB",
      title: "Wurde der Erwerber ins Grundbuch eingetragen?",
      text: "Neben der Einigung ist die Eintragung der Rechtsänderung in das Grundbuch erforderlich (§ 873 I BGB). Die Eintragung selbst richtet sich nach der GBO; Grundbuchamt ist das Amtsgericht.",
      options: [
        { label: "Ja, eingetragen", next: "q_einigsein", tone: "pos" },
        { label: "Nein, noch nicht eingetragen", next: "e_keine_eintragung", tone: "neg" }
      ]
    },

    q_einigsein: {
      station: "eintragung",
      kind: "frage",
      norm: "§ 873 II BGB",
      title: "Bestand die Einigung bei der Eintragung noch (Einigsein)?",
      text: "Vor der Eintragung sind die Beteiligten an die Einigung nur in den Fällen des § 873 II BGB gebunden – insbesondere wenn die Erklärungen notariell beurkundet sind. Dann ist die Auflassung unwiderruflich; sonst kann sie bis zur Eintragung widerrufen werden.",
      options: [
        { label: "Ja – Auflassung notariell beurkundet (bindend, § 873 II BGB)", detail: "Ein „Widerruf“ ist unbeachtlich", next: "q_berechtigung", tone: "pos" },
        { label: "Ja – nicht gebunden, aber kein Widerruf erfolgt", next: "q_berechtigung", tone: "pos" },
        { label: "Nein – wirksam widerrufen vor Eintragung", next: "e_widerrufen", tone: "neg" }
      ]
    },

    q_berechtigung: {
      station: "berechtigung",
      kind: "frage",
      norm: "§§ 873, 185 BGB",
      title: "War der Veräußerer berechtigt?",
      text: "Berechtigt ist der Eigentümer (bzw. wer mit Einwilligung des Eigentümers verfügt, § 185 I BGB) – maßgeblich im Zeitpunkt der Eintragung.",
      options: [
        { label: "Ja, Eigentümer / § 185 BGB", next: "e_erwerb", tone: "pos" },
        { label: "Nein – Nichtberechtigter (Bucheigentümer)", detail: "Gutgläubiger Erwerb kraft öffentlichen Glaubens des Grundbuchs, § 892 BGB", next: "q_892", tone: "neg" }
      ]
    },

    q_892: {
      station: "berechtigung",
      kind: "frage",
      norm: "§ 892 BGB",
      title: "Gutgläubiger Erwerb vom Bucheigentümer (§ 892 BGB)?",
      text: "Zugunsten des Erwerbers gilt der Inhalt des Grundbuchs als richtig (öffentlicher Glaube). Voraussetzungen: (1) Rechtsgeschäft i. S. e. Verkehrsgeschäfts, (2) Veräußerer als Eigentümer eingetragen (Grundbuch unrichtig), (3) kein Widerspruch eingetragen (§ 899 BGB), (4) keine positive Kenntnis des Erwerbers von der Unrichtigkeit.",
      hint: "Anders als bei § 932 BGB schadet nur POSITIVE Kenntnis – grob fahrlässige Unkenntnis ist unschädlich! Ein „Abhandenkommen“ wie bei § 935 BGB gibt es nicht.",
      options: [
        { label: "Alle Voraussetzungen (+)", next: "e_erwerb_892", tone: "pos" },
        { label: "Widerspruch eingetragen oder Kenntnis der Unrichtigkeit", next: "e_kein_892", tone: "neg" }
      ]
    },

    /* ================= § 894: Grundbuchberichtigung ================= */

    q_894_unrichtig: {
      station: "verpflichtung",
      kind: "frage",
      norm: "§ 894 BGB",
      title: "Ist das Grundbuch unrichtig?",
      text: "Unrichtigkeit = Diskrepanz zwischen formeller Rechtslage (Grundbuchinhalt) und materieller Rechtslage (wirkliche Rechtslage).",
      def: "<b>Beispiele:</b> Auflassung nichtig, aber Erwerber eingetragen · Erbfolge außerhalb des Grundbuchs (§ 1922 BGB) · Anfechtung der Auflassung mit ex-tunc-Wirkung (§ 142 I BGB).",
      options: [
        { label: "Ja, formelle ≠ materielle Rechtslage", next: "q_894_parteien", tone: "pos" },
        { label: "Nein, Grundbuch stimmt", next: "e_894_richtig", tone: "neg" }
      ]
    },

    q_894_parteien: {
      station: "auflassung",
      kind: "frage",
      norm: "§ 894 BGB",
      title: "Richtiger Anspruchsteller und Anspruchsgegner?",
      def: "<b>Anspruchsberechtigt:</b> derjenige, dessen Recht nicht oder nicht richtig eingetragen ist (der wahre Eigentümer). <b>Anspruchsgegner:</b> derjenige, dessen (Buch-)Position durch die Berichtigung betroffen wird (der zu Unrecht Eingetragene).",
      options: [
        { label: "Ja, passt", next: "e_894", tone: "pos" },
        { label: "Nein", next: "e_894_falsch", tone: "neg" }
      ]
    },

    /* ================= §§ 883 ff.: Vormerkung ================= */

    q_883_anspruch: {
      station: "verpflichtung",
      kind: "frage",
      norm: "§ 883 I BGB",
      title: "Besteht ein sicherbarer Anspruch?",
      text: "Die Vormerkung sichert einen schuldrechtlichen Anspruch auf dingliche Rechtsänderung an einem Grundstück – klassisch den Übereignungsanspruch des Käufers aus § 433 I 1 BGB (auch künftige/bedingte Ansprüche, § 883 I 2 BGB).",
      def: "<b>Warum?</b> Der Erwerb nach § 873 BGB ist „gestreckt“: Zwischen Zahlung und Eintragung könnte der noch eingetragene Verkäufer das Grundstück nochmals – gutgläubig wirksam – an einen Dritten übereignen. Die Vormerkung schließt diese Lücke.",
      options: [
        { label: "Ja, wirksamer Übereignungsanspruch", next: "q_883_bestellung", tone: "pos" },
        { label: "Nein, Anspruch besteht nicht", detail: "Die Vormerkung ist streng akzessorisch", next: "e_883_kein_anspruch", tone: "neg" }
      ]
    },

    q_883_bestellung: {
      station: "auflassung",
      kind: "frage",
      norm: "§§ 883 I, 885 BGB",
      title: "Wurde die Vormerkung wirksam bestellt?",
      text: "Erforderlich: Bewilligung des Betroffenen (§ 885 I BGB, i. d. R. der Verkäufer) oder einstweilige Verfügung UND Eintragung im Grundbuch – durch den Berechtigten (Eigentümer) oder kraft guten Glaubens.",
      options: [
        { label: "Ja, bewilligt und eingetragen", next: "q_883_verstoss", tone: "pos" },
        { label: "Nein", next: "e_883_nicht_bestellt", tone: "neg" }
      ]
    },

    q_883_verstoss: {
      station: "berechtigung",
      kind: "frage",
      norm: "§ 883 II BGB",
      title: "Wurde vormerkungswidrig verfügt?",
      text: "Eine Verfügung, die nach der Eintragung der Vormerkung getroffen wird, ist insoweit unwirksam, als sie den gesicherten Anspruch vereiteln oder beeinträchtigen würde (§ 883 II 1 BGB) – RELATIVE Unwirksamkeit nur gegenüber dem Vormerkungsberechtigten.",
      options: [
        { label: "Ja, Dritter wurde als Eigentümer eingetragen", detail: "Zustimmungsanspruch gegen den Dritten, § 888 I BGB", next: "e_883_schutz", tone: "warn" },
        { label: "Nein, keine widersprechende Verfügung", next: "e_883_gesichert", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_erwerb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 873 I, 925 BGB",
      title: "Eigentumserwerb am Grundstück (+)",
      text: "Auflassung und Eintragung liegen vor, die Parteien waren einig, der Veräußerer berechtigt – der Erwerber ist Eigentümer geworden.\n\nWar der Kaufvertrag formnichtig, ist er durch Auflassung + Eintragung geheilt (§ 311b I 2 BGB); blieb er nichtig, erfolgt die Rückabwicklung über §§ 812 ff. BGB (Abstraktionsprinzip)."
    },

    e_erwerb_892: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Erwerb kraft öffentlichen Glaubens",
      norm: "§ 892 BGB",
      title: "Gutgläubiger Erwerb vom Bucheigentümer (+)",
      text: "Der Erwerber hat kraft des öffentlichen Glaubens des Grundbuchs wirksam vom Nichtberechtigten erworben. Der wahre (frühere) Eigentümer verliert sein Recht.\n\nSeine Ausgleichsansprüche: § 816 I BGB gegen den Verfügenden, ggf. §§ 823 ff., 812 ff. BGB."
    },

    e_kein_892: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 892, 899 BGB",
      title: "Kein gutgläubiger Erwerb (–)",
      text: "Der öffentliche Glaube des Grundbuchs ist zerstört (eingetragener Widerspruch, § 899 BGB) oder der Erwerber kannte die Unrichtigkeit positiv. Der wahre Eigentümer bleibt Eigentümer – er kann Berichtigung nach § 894 BGB verlangen."
    },

    e_keine_auflassung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 925 BGB",
      title: "Kein Erwerb – Auflassung fehlt oder unwirksam (–)",
      text: "Ohne wirksame Auflassung (gleichzeitige Anwesenheit vor dem Notar, keine Bedingung, § 925 II BGB) kein Eigentumsübergang. Aus dem wirksamen Kaufvertrag bleibt der Anspruch auf Übereignung (§ 433 I 1 BGB) – notfalls einklagbar."
    },

    e_keine_eintragung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 873 I BGB",
      title: "Kein Erwerb – Eintragung steht aus (–)",
      text: "Der Erwerbstatbestand ist „gestreckt“: Ohne Eintragung kein Eigentumsübergang. Schutz des Erwerbers in der Zwischenzeit: Auflassungsvormerkung (§§ 883 ff. BGB)!"
    },

    e_widerrufen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 873 II BGB",
      title: "Kein Erwerb – Einigung wirksam widerrufen (–)",
      text: "Mangels Bindung nach § 873 II BGB konnte die Einigung bis zur Eintragung widerrufen werden; im Zeitpunkt der Eintragung fehlte das Einigsein. Bei notariell beurkundeter Auflassung wäre der Widerruf dagegen unbeachtlich gewesen."
    },

    e_894: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Berichtigungsanspruch",
      norm: "§ 894 BGB",
      title: "Anspruch auf Zustimmung zur Grundbuchberichtigung (+)",
      text: "Der wahre Berechtigte kann von demjenigen, dessen Recht durch die Berichtigung betroffen wird, die ZUSTIMMUNG zur Berichtigung des Grundbuchs verlangen (nicht: „Berichtigung“ selbst – die nimmt das Grundbuchamt vor).\n\nSicherung des Anspruchs: Eintragung eines Widerspruchs im Wege der einstweiligen Verfügung (§ 899 BGB) – er zerstört den guten Glauben Dritter."
    },

    e_894_richtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 894 BGB",
      title: "Kein Berichtigungsanspruch – Grundbuch richtig (–)",
      text: "Formelle und materielle Rechtslage stimmen überein; für eine Berichtigung ist kein Raum."
    },

    e_894_falsch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 894 BGB",
      title: "Anspruch scheitert an den Parteien (–)",
      text: "Der Anspruch steht nur dem wirklich Berechtigten zu und richtet sich nur gegen den, dessen Buchposition durch die Berichtigung betroffen wäre."
    },

    e_883_gesichert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 883 BGB",
      title: "Anspruch wirksam durch Vormerkung gesichert (+)",
      text: "Die Auflassungsvormerkung sichert den Übereignungsanspruch: Spätere vormerkungswidrige Verfügungen sind dem Berechtigten gegenüber relativ unwirksam (§ 883 II BGB); die Vormerkung verhindert zugleich den gutgläubigen Erwerb Dritter."
    },

    e_883_schutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Vormerkung schützt",
      norm: "§§ 883 II, 888 I BGB",
      title: "Vormerkungswidrige Verfügung – Zustimmungsanspruch (+)",
      text: "Die Verfügung an den Dritten ist gegenüber dem Vormerkungsberechtigten relativ unwirksam (§ 883 II 1 BGB). Der eingetragene Dritte muss die Zustimmung zur Eintragung des Vormerkungsberechtigten als Eigentümer erteilen (§ 888 I BGB).\n\nAblauf: Der Käufer verlangt vom Verkäufer weiterhin Auflassung (§ 433 I 1 BGB) und vom Dritten die Zustimmung nach § 888 I BGB."
    },

    e_883_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 883 I BGB",
      title: "Keine wirksame Vormerkung – Anspruch fehlt (–)",
      text: "Die Vormerkung ist streng akzessorisch: Ohne (wirksamen) gesicherten Anspruch entsteht sie nicht bzw. erlischt sie. Eine „forderungsentkleidete“ Vormerkung schützt nicht."
    },

    e_883_nicht_bestellt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 885 BGB",
      title: "Vormerkung nicht wirksam bestellt (–)",
      text: "Ohne Bewilligung (oder einstweilige Verfügung) und Eintragung besteht kein Vormerkungsschutz. Der Käufer trägt das Risiko vormerkungswidriger Zwischenverfügungen – gutgläubiger Erwerb Dritter nach § 892 BGB bleibt möglich."
    }
  }
});
