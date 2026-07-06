/*
 * IK-Schema: Sozialer Konflikt? Begriff, Formen und Entstehungstheorien
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Gesamtpraesentation soziale Konflikte_2022_ILIAS (Definition nach Glasl,
 *    Bewertungs-/Beurteilungs-/Verteilungs-/Beziehungskonflikt, heiße/kalte Konflikte)
 *  - SK_Arbeitstext_Fragen_Theorien (Reaktanztheorie, Selbstwertschutz/-erhöhung)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-konfliktbegriff",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Konflikte & Mobbing",
  title: "Sozialer Konflikt: Begriff & Formen",
  description: "Liegt überhaupt ein sozialer Konflikt vor (Glasl-Definition)? Und worum geht es: Ziele, Wege, Güter oder Anerkennung? Mit heißen/kalten Erscheinungsformen und den Entstehungstheorien.",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "form", label: "Konfliktform" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Konfliktform bestimmt",
    neg: "Ergebnis: kein sozialer Konflikt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "Definition (Glasl)",
      title: "Liegt ein sozialer Konflikt vor?",
      def: "Ein <b>sozialer Konflikt</b> ist<br>• eine <b>Interaktion</b>,<br>• bei der es <b>Unvereinbarkeiten</b> gibt,<br>• sodass die Umsetzung dessen, was man wahrnimmt, denkt, fühlt und will, durch (einen) andere(n) <b>beeinträchtigt</b> wird.<br><br>Alle drei Elemente müssen erfüllt sein – prüfe den Fall:",
      options: [
        { label: "Interaktion + Unvereinbarkeit + Beeinträchtigung liegen vor", next: "q_form", tone: "pos" },
        { label: "Nur unterschiedliche Meinungen, niemand wird beeinträchtigt", next: "e_kein", tone: "neg" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "4 Konfliktformen",
      title: "Worum geht es bei dem Konflikt? (inhaltliche Abgrenzung)",
      def: "Die Präsentation unterscheidet vier Formen nach dem Konfliktgegenstand:<br><br>• Uneinigkeit über <b>ZIELE</b><br>• Uneinigkeit über <b>WEGE</b> (Ziel geteilt)<br>• Streit um <b>knappe Güter</b>, die nicht wie gewünscht verteilt werden können<br>• verletztes Bedürfnis nach <b>Anerkennung/Akzeptanz</b>",
      hint: "Äußerliche Abgrenzung daneben: HEISSE Konflikte (offene Konfrontation, überzeugen/drängen wollen) vs. KALTE Konflikte (unsichtbar: Sabotage, Blockade, Verzögerung – oft nur noch Schädigungsabsicht).",
      options: [
        { label: "Uneinigkeit über Ziele", next: "e_bewertung", tone: "pos" },
        { label: "Uneinigkeit über Wege", next: "e_beurteilung", tone: "pos" },
        { label: "Kampf um knappe Güter/Ressourcen", next: "e_verteilung", tone: "pos" },
        { label: "Es geht (eigentlich) um Anerkennung", next: "e_beziehung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kein: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Kein Konflikt",
      title: "Noch kein sozialer Konflikt – nur eine Differenz",
      text: "Unterschiedliche Wahrnehmungen, Meinungen oder Interessen allein sind noch KEIN sozialer Konflikt: Es fehlt die BEEINTRÄCHTIGUNG bei der Umsetzung des eigenen Wollens durch den anderen (Glasl-Definition).\n\nSolche Differenzen sind Alltag und oft produktiv – sie werden erst zum Konflikt, wenn eine Partei die Verwirklichung ihrer Vorstellungen durch die andere behindert sieht (und darauf reagiert).\n\nPraxisnutzen der Prüfung: Nicht jede Meinungsverschiedenheit „konfliktisieren“ – aber echte Konflikte auch nicht als bloße Missverständnisse verharmlosen. Wenn die Definition erfüllt ist → Konfliktform bestimmen und die Eskalationsstufe prüfen (Schema „Glasl-Eskalations-Simulator“)."
    },

    e_bewertung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Bewertungskonflikt",
      title: "Bewertungskonflikt: Uneinigkeit über Ziele",
      text: "Die Kontrahenten wollen unvereinbare Handlungspläne realisieren, weil sie die ZIELE unterschiedlich bewerten – Beispiel der Präsentation: Leistungssteigerung vs. Arbeitszufriedenheit als Ziel derselben Organisationsmaßnahme.\n\nLösungsansatz: Ziele offenlegen, Prioritäten aushandeln, übergeordnete gemeinsame Ziele suchen (in der Verwaltung oft: der gesetzliche Auftrag).\n\nAbgrenzung: Ist man sich über das Ziel einig und streitet nur über den Weg dorthin, liegt ein BEURTEILUNGSkonflikt vor."
    },

    e_beurteilung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Beurteilungskonflikt",
      title: "Beurteilungskonflikt: Uneinigkeit über Wege",
      text: "Beide Seiten teilen das ZIEL, halten aber unvereinbare WEGE für richtig – Beispiel: Ziel Leistungssteigerung, strittiger Weg „Stechuhr einführen“.\n\nTypisch: Man beurteilt Nutzen und Erfolgswahrscheinlichkeit der Handlungspläne unterschiedlich – oft wegen unterschiedlicher Informationen oder Erfahrungen.\n\nLösungsansatz: gemeinsame Informationsbasis schaffen, Kriterien für den Wegevergleich vereinbaren, ggf. Erprobung/Pilot. Beurteilungskonflikte sind die „sachlichste“ Konfliktform – solange sie nicht (verdeckt) ein Beziehungskonflikt sind."
    },

    e_verteilung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verteilungskonflikt",
      title: "Verteilungskonflikt: Kampf um knappe Güter",
      text: "Die Kontrahenten beurteilen Nutzen und Erfolgsaussichten eines Handlungsplans GLEICH – aber sie können ihn nicht gleichzeitig realisieren, weil die Kontrolle über die angestrebten Güter nicht im gewünschten Sinne verteilt werden kann (Präsentations-Definition).\n\nKlassiker in der Verwaltung: Stellen, Budget, Räume, Beförderungsdienstposten, attraktive Aufgaben.\n\nLösungsansatz: transparente Verteilungskriterien, Kompromisse und Paketlösungen, ggf. Entscheidung durch die zuständige Leitung – wichtig ist, dass das VERFAHREN als fair erlebt wird."
    },

    e_beziehung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Beziehungskonflikt",
      title: "Beziehungskonflikt: Es geht um Anerkennung – oft getarnt!",
      text: "Ein Beziehungskonflikt entsteht, wenn das Grundbedürfnis nach ANERKENNUNG und AKZEPTANZ verletzt wird. Die Auseinandersetzung dient einer besseren Beziehungsdefinition oder mehr Anerkennung – wird aber häufig auf der FALSCHEN Ebene geführt und „tarnt“ sich als Bewertungs-, Beurteilungs- oder Verteilungskonflikt (Präsentation).\n\nDiagnose-Hinweis: Wenn Sachlösungen den Streit nie beenden und sich immer neue „Sachthemen“ finden, steckt meist die Beziehungsebene dahinter (vgl. Eisbergmodell und Watzlawicks 2. Axiom).\n\nZur Entstehung liefern die Theorien Erklärungen: REAKTANZ (Widerstand gegen empfundene Freiheitseinschränkungen) und SELBSTWERTSCHUTZ (Konflikte bedrohen den Selbstwert → Schuldzuweisungen, Schwarz-Weiß-Denken, verzerrte Wahrnehmung; je niedriger der Selbstwert, desto heftiger die Reaktion). Lösung nur über die Beziehungsebene: Klärungsgespräch → Schema „Konfliktgespräch“."
    }
  }
});
