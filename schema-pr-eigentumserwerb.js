/*
 * Prüfungsschema: Rechtsgeschäftlicher Eigentumserwerb an beweglichen Sachen, §§ 929 ff. BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "2.1.3 PR 37-38 – OLE Skript – Sachenrecht 1" (Rankenhohn, FS I) – Besitz, Eigentum, § 929
 *  - "2.1.3 PR 45-46 – OLE Skript – Sachenrecht 2" (Rankenhohn, FS I) – §§ 930, 933
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff) – Prüfungsschema §§ 929 ff., gutgläubiger Erwerb
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 90, 185, 854 ff., 868, 903, 929–935, 1006)
 *
 * Stationen: einigung → uebergabe → einigsein → berechtigung → gutglaube → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-eigentumserwerb-mobilien",
  subject: "Privatrecht",
  area: "Sachenrecht",
  title: "Eigentumserwerb an beweglichen Sachen, §§ 929 ff. BGB",
  description: "Einigung, Übergabe und ihre Surrogate (§§ 929 S. 1, 929 S. 2, 930, 931), Einigsein und Berechtigung – einschließlich des gutgläubigen Erwerbs vom Nichtberechtigten (§§ 932–935 BGB).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "einigung", label: "Einigung" },
    { id: "uebergabe", label: "Übergabe" },
    { id: "einigsein", label: "Einigsein" },
    { id: "berechtigung", label: "Berechtigung" },
    { id: "gutglaube", label: "Gutgläubiger Erwerb" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "einigung",
      kind: "frage",
      norm: "§ 929 S. 1 BGB",
      title: "Liegt eine dingliche Einigung vor?",
      text: "Obersatz: „E könnte das Eigentum an der Sache nach § 929 S. 1 BGB erworben haben.“ Die Einigung ist ein dinglicher Vertrag (zwei Willenserklärungen, §§ 104–185 BGB anwendbar): Veräußerer und Erwerber müssen sich einig sein, dass das Eigentum an einer BESTIMMTEN Sache übergehen soll.",
      def: "<b>Trennungs- und Abstraktionsprinzip:</b> Verpflichtungsgeschäft (z. B. Kaufvertrag) und Verfügungsgeschäft (Übereignung) sind zu trennen und in ihrer Wirksamkeit unabhängig. Schwerer Fehler: hier den Kaufvertrag prüfen! <b>Bestimmtheitsgrundsatz:</b> Gegenstand muss eine bestimmte Sache sein – bloße Bestimmbarkeit genügt (anders als im Schuldrecht) nicht. <b>Minderjährige:</b> Übereignung AN den Minderjährigen lediglich rechtlich vorteilhaft (§ 107 BGB); Übereignung eigener Sachen DURCH ihn schwebend unwirksam (§§ 107, 108 BGB); Übereignung fremder Sachen neutral.",
      options: [
        { label: "Ja, dingliche Einigung liegt vor", next: "q_uebergabe", tone: "pos" },
        { label: "Nein", detail: "z. B. nur Besitzüberlassung gewollt (Leihe, Miete)", next: "e_keine_einigung", tone: "neg" }
      ]
    },

    q_uebergabe: {
      station: "uebergabe",
      kind: "frage",
      norm: "§§ 929–931 BGB",
      title: "Übergabe oder Übergabesurrogat?",
      text: "Wegen des Publizitätsprinzips muss zur Einigung ein nach außen erkennbarer Akt hinzukommen – die Übergabe oder eines ihrer Surrogate.",
      def: "<b>Übergabe (§ 929 S. 1):</b> vollständiger Besitzverlust des Veräußerers, Besitzerwerb des Erwerbers (auch über Besitzdiener/-mittler), Besitzübertragungswille. Realakt – Stellvertretung nicht möglich! <b>§ 929 S. 2 (brevi manu traditio):</b> Erwerber besitzt bereits. <b>§ 930 (Besitzkonstitut):</b> Veräußerer bleibt unmittelbarer Besitzer aufgrund eines Besitzmittlungsverhältnisses (§ 868 BGB) – Hauptfall Sicherungsübereignung. <b>§ 931:</b> Abtretung des Herausgabeanspruchs, wenn ein Dritter besitzt.",
      options: [
        { label: "Übergabe (§ 929 S. 1 BGB)", next: "q_einigsein", set: { variante: "929" }, tone: "pos" },
        { label: "Erwerber ist schon im Besitz (§ 929 S. 2 BGB)", next: "q_einigsein", set: { variante: "929s2" }, tone: "pos" },
        { label: "Besitzkonstitut (§§ 929 S. 1, 930 BGB)", detail: "z. B. Sicherungsübereignung: Veräußerer bleibt unmittelbarer Besitzer", next: "q_einigsein", set: { variante: "930" }, tone: "pos" },
        { label: "Abtretung des Herausgabeanspruchs (§§ 929 S. 1, 931 BGB)", detail: "Dritter besitzt die Sache", next: "q_einigsein", set: { variante: "931" }, tone: "pos" },
        { label: "Weder Übergabe noch Surrogat", next: "e_keine_uebergabe", tone: "neg" }
      ]
    },

    q_einigsein: {
      station: "einigsein",
      kind: "frage",
      norm: "§ 929 S. 1 BGB",
      title: "Einigsein im Zeitpunkt der Übergabe (bzw. des Surrogats)?",
      text: "Die Parteien müssen sich (noch/wieder) einig sein, wenn die Übergabe bzw. das Surrogat vollzogen wird – ein durchgängiges Einigsein zwischen Einigung und Übergabe ist nicht erforderlich.",
      hint: "Es besteht eine Vermutung für das Fortbestehen des Einigungswillens; am Einigsein fehlt es erst, wenn das Abrücken von der Einigung dem anderen erkennbar geworden ist (§§ 133, 157 BGB).",
      options: [
        { label: "Ja, einig im maßgeblichen Zeitpunkt", next: "q_berechtigung", tone: "pos" },
        { label: "Nein, Einigung vorher erkennbar widerrufen", next: "e_kein_einigsein", tone: "neg" }
      ]
    },

    q_berechtigung: {
      station: "berechtigung",
      kind: "frage",
      norm: "§§ 903, 185 BGB",
      title: "War der Veräußerer zur Übereignung berechtigt?",
      text: "Berechtigt ist der Eigentümer (§ 903 S. 1 BGB), sofern keine Verfügungsbeschränkung besteht (z. B. § 80 I InsO), sowie der mit Einwilligung des Berechtigten handelnde Nichteigentümer (§ 185 I BGB).",
      hint: "Ist unklar, wer Eigentümer ist, hilft die Eigentumsvermutung zugunsten des Besitzers (Rechtsgedanke des § 1006 BGB).",
      options: [
        { label: "Ja, Veräußerer ist Eigentümer", next: "e_erwerb_berechtigt", tone: "pos" },
        { label: "Ja, Ermächtigung nach § 185 I BGB (Einwilligung)", next: "e_erwerb_berechtigt", tone: "pos" },
        { label: "Nichtberechtigter – aber Genehmigung nach § 185 II BGB", detail: "Der Berechtigte genehmigt die Verfügung nachträglich", next: "e_erwerb_berechtigt", tone: "warn" },
        { label: "Nichtberechtigter ohne Zustimmung", detail: "Gutgläubiger Erwerb nach §§ 932 ff. BGB prüfen", next: "q_verkehrsgeschaeft", tone: "neg" }
      ]
    },

    /* ================= Gutgläubiger Erwerb ================= */

    q_verkehrsgeschaeft: {
      station: "gutglaube",
      kind: "frage",
      norm: "§§ 932 ff. BGB",
      title: "Liegt ein Verkehrsgeschäft vor?",
      text: "Der gutgläubige Erwerb setzt ein Rechtsgeschäft im Sinne eines Verkehrsgeschäfts voraus: Auf Veräußerer- und Erwerberseite müssen (wirtschaftlich) verschiedene Personen beteiligt sein. Bei gesetzlichem Eigentumserwerb ist gutgläubiger Erwerb ausgeschlossen.",
      options: [
        { label: "Ja, Verkehrsgeschäft", next: "@gutglaube_norm", tone: "pos" },
        { label: "Nein", next: "e_kein_erwerb", tone: "neg" }
      ]
    },

    q_932: {
      station: "gutglaube",
      kind: "frage",
      norm: "§ 932 BGB",
      title: "Gutgläubiger Erwerb bei Übergabe (§ 932 BGB)?",
      text: "Bei der Übereignung nach § 929 BGB wird der Erwerber auch dann Eigentümer, wenn die Sache nicht dem Veräußerer gehört – es sei denn, er ist nicht in gutem Glauben. Rechtsscheinträger ist der Besitz des Veräußerers (§ 1006 I BGB).",
      def: "<b>Gutgläubigkeit (§ 932 II BGB):</b> Nicht in gutem Glauben ist, wer positive Kenntnis oder grob fahrlässige Unkenntnis davon hat, dass die Sache nicht dem Veräußerer gehört. Maßgeblicher Zeitpunkt: Vollendung des Erwerbstatbestands.",
      options: [
        { label: "Erwerber gutgläubig", next: "q_abhanden", tone: "pos" },
        { label: "Bösgläubig (Kenntnis / grob fahrlässige Unkenntnis)", next: "e_boesglaeubig", tone: "neg" }
      ]
    },

    q_933: {
      station: "gutglaube",
      kind: "frage",
      norm: "§ 933 BGB",
      title: "Gutgläubiger Erwerb beim Besitzkonstitut (§ 933 BGB)?",
      text: "Beim Erwerb nach §§ 929, 930 BGB wird der gutgläubige Erwerber erst Eigentümer, wenn ihm die Sache vom Veräußerer ÜBERGEBEN wird und er zu diesem Zeitpunkt noch in gutem Glauben ist. Das bloße Besitzkonstitut genügt als Rechtsschein nicht.",
      options: [
        { label: "Sache wurde inzwischen übergeben, Erwerber (noch) gutgläubig", next: "q_abhanden", tone: "pos" },
        { label: "Keine Übergabe erfolgt", next: "e_933_keine_uebergabe", tone: "neg" },
        { label: "Bei Übergabe bösgläubig", next: "e_boesglaeubig", tone: "neg" }
      ]
    },

    q_934: {
      station: "gutglaube",
      kind: "frage",
      norm: "§ 934 BGB",
      title: "Gutgläubiger Erwerb bei Abtretung des Herausgabeanspruchs (§ 934 BGB)?",
      text: "Ist der Veräußerer mittelbarer Besitzer, wird der gutgläubige Erwerber mit der Abtretung des Anspruchs Eigentümer (§ 934 Alt. 1); andernfalls erst, wenn er den Besitz von dem Dritten erlangt (§ 934 Alt. 2).",
      options: [
        { label: "Voraussetzungen des § 934 BGB erfüllt, Erwerber gutgläubig", next: "q_abhanden", tone: "pos" },
        { label: "Nein bzw. bösgläubig", next: "e_boesglaeubig", tone: "neg" }
      ]
    },

    q_abhanden: {
      station: "gutglaube",
      kind: "frage",
      norm: "§ 935 BGB",
      title: "Ist die Sache dem Eigentümer abhandengekommen?",
      text: "Der gutgläubige Erwerb ist ausgeschlossen, wenn die Sache dem Eigentümer gestohlen worden, verloren gegangen oder sonst abhandengekommen war (§ 935 I BGB).",
      def: "<b>Abhandenkommen:</b> unfreiwilliger Verlust des unmittelbaren Besitzes. Wer die Sache verleiht oder vermietet, verliert den Besitz freiwillig – kein Abhandenkommen! <b>Rückausnahme (§ 935 II BGB):</b> Geld, Inhaberpapiere und öffentlich versteigerte Sachen können auch dann gutgläubig erworben werden.",
      options: [
        { label: "Nein, Besitz freiwillig aufgegeben (z. B. verliehen)", next: "e_erwerb_gutglaeubig", tone: "pos" },
        { label: "Ja, abhandengekommen (gestohlen, verloren)", next: "q_935ii", tone: "neg" }
      ]
    },

    q_935ii: {
      station: "gutglaube",
      kind: "frage",
      norm: "§ 935 II BGB",
      title: "Greift die Rückausnahme des § 935 II BGB?",
      text: "Geld, Inhaberpapiere und Sachen, die im Wege öffentlicher Versteigerung veräußert werden, können trotz Abhandenkommens gutgläubig erworben werden.",
      options: [
        { label: "Ja (Geld / Inhaberpapier / öffentliche Versteigerung)", next: "e_erwerb_gutglaeubig", tone: "warn" },
        { label: "Nein", next: "e_abhanden", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_erwerb_berechtigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 929 ff. BGB",
      title: "Eigentumserwerb vom Berechtigten (+)",
      text: "Einigung, Übergabe (bzw. Surrogat), Einigsein und Berechtigung liegen vor – der Erwerber ist Eigentümer geworden.\n\nMerke: Wegen des Abstraktionsprinzips bleibt die Übereignung auch dann wirksam, wenn das zugrunde liegende Verpflichtungsgeschäft (z. B. der Kaufvertrag) unwirksam ist – Rückabwicklung dann über §§ 812 ff. BGB."
    },

    e_erwerb_gutglaeubig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      kicker: "Ergebnis: Erwerb vom Nichtberechtigten",
      norm: "§§ 932 ff. BGB",
      title: "Gutgläubiger Eigentumserwerb (+)",
      text: "Der Erwerber hat das Eigentum vom Nichtberechtigten gutgläubig erworben. Der frühere Eigentümer hat sein Eigentum verloren – ein Herausgabeanspruch aus § 985 BGB besteht nicht mehr.\n\nAusgleich auf schuldrechtlicher Ebene: Gegen den nichtberechtigt Verfügenden § 816 I 1 BGB (Erlösherausgabe) und §§ 823 ff. BGB; beim unentgeltlichen Erwerb Herausgabeanspruch gegen den Erwerber aus § 816 I 2 BGB."
    },

    e_keine_einigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 929 S. 1 BGB",
      title: "Kein Eigentumserwerb – keine Einigung (–)",
      text: "Es fehlt an der dinglichen Einigung über den Eigentumsübergang. Sollte nur der Besitz übergehen (Miete, Leihe, Verwahrung), bleibt der Veräußerer Eigentümer."
    },

    e_keine_uebergabe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 929–931 BGB",
      title: "Kein Eigentumserwerb – Publizitätsakt fehlt (–)",
      text: "Weder Übergabe noch ein Übergabesurrogat liegen vor. Ohne den nach außen erkennbaren Publizitätsakt geht das Eigentum nicht über."
    },

    e_kein_einigsein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 929 S. 1 BGB",
      title: "Kein Eigentumserwerb – Einigsein fehlt (–)",
      text: "Im Zeitpunkt der Übergabe bestand keine Einigkeit mehr über den Eigentumsübergang; das erkennbare Abrücken von der Einigung verhindert den Erwerb."
    },

    e_kein_erwerb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 932 ff. BGB",
      title: "Kein gutgläubiger Erwerb – kein Verkehrsgeschäft (–)",
      text: "Ohne Verkehrsgeschäft findet kein gutgläubiger Erwerb statt. Der bisherige Eigentümer bleibt Eigentümer; ihm stehen § 985 BGB und ggf. Ansprüche aus §§ 812 ff., 823 ff. BGB zu."
    },

    e_933_keine_uebergabe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 933 BGB",
      title: "Kein gutgläubiger Erwerb – Übergabe fehlt (–)",
      text: "Beim Erwerb über ein Besitzkonstitut (§§ 929, 930 BGB) vom Nichtberechtigten verlangt § 933 BGB die tatsächliche Übergabe. Solange sie aussteht, bleibt der bisherige Eigentümer Eigentümer – erst mit gutgläubiger Übergabe vollzieht sich der Erwerb."
    },

    e_boesglaeubig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 932 II BGB",
      title: "Kein gutgläubiger Erwerb – Bösgläubigkeit (–)",
      text: "Der Erwerber kannte die fehlende Eigentümerstellung des Veräußerers oder sie blieb ihm infolge grober Fahrlässigkeit unbekannt. Der bisherige Eigentümer bleibt Eigentümer; § 985 BGB besteht fort."
    },

    e_abhanden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 935 I BGB",
      title: "Kein gutgläubiger Erwerb – Sache abhandengekommen (–)",
      text: "Die Sache war dem Eigentümer abhandengekommen (unfreiwilliger Besitzverlust, z. B. Diebstahl). Ein gutgläubiger Erwerb scheidet aus – der Eigentümer kann die Sache nach § 985 BGB auch vom gutgläubigen Besitzer herausverlangen."
    }
  },

  routers: {
    "@gutglaube_norm": function (flags) {
      if (flags.variante === "930") return "q_933";
      if (flags.variante === "931") return "q_934";
      return "q_932";
    }
  }
});
