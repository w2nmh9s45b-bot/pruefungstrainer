/*
 * Prüfungsschema: Wirksamkeit der Befristung (§§ 3, 14 ff. TzBfG, § 30 TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 1.6.3 (Befristungsarten, Sachgründe
 *    § 14 I Nr. 1-8, sachgrundlose Befristung § 14 II, § 21 BEEG, Schriftform,
 *    Prüfungsschema, Rechtsfolgen, § 30 TVöD-Besonderheiten)
 *  - Gesetze: TzBfG §§ 3, 14, 15, 16, 17, 21; TVöD § 30; BGB §§ 125, 126 II;
 *    BEEG § 21 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-befristung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Arbeitsvertrag und Befristung",
  title: "Befristung des Arbeitsvertrags (TzBfG, § 30 TVöD)",
  description: "Ist die Befristung wirksam? Befristungsarten (§§ 3, 21 TzBfG), Schriftform (§ 14 IV TzBfG), Sachgründe des § 14 I Nr. 1–8, sachgrundlose Befristung (§ 14 II: 2 Jahre, 3 Verlängerungen, Vorbeschäftigungsverbot), § 21 BEEG, TVöD-Besonderheiten (§ 30) und Rechtsfolgen (§§ 15, 16, 17 TzBfG).",
  start: "start",
  stations: [
    { id: "vertrag", label: "Vertrag" },
    { id: "form", label: "Schriftform" },
    { id: "zulaessig", label: "Zulässigkeit" },
    { id: "folgen", label: "Rechtsfolgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Befristung wirksam",
    neg: "Ergebnis: Befristung unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vertrag",
      kind: "frage",
      norm: "§§ 145 ff. BGB, §§ 3, 21 TzBfG",
      title: "Welche Befristungsart liegt vor?",
      def: "Vorfrage: <b>ordnungsgemäßes Zustandekommen</b> des Arbeitsvertrages nach den allgemeinen Regeln des BGB (Schema „Arbeitsvertrag“).<br><br><b>Das befristete Arbeitsverhältnis</b> endet mit Fristablauf, <b>ohne dass es einer Kündigung bedarf</b> (§ 620 III BGB i. V. m. TzBfG).<br><br><b>Befristungsarten (§ 3 I, § 21 TzBfG):</b><br>• <b>Kalendermäßige Befristung:</b> Ende datumsmäßig bestimmt oder bestimmbar („bis zum 31.12.2026“, „ab 01.03. für 3 Monate“),<br>• <b>Zweckbefristung:</b> Dauer ergibt sich aus Art, Zweck oder Beschaffenheit der Arbeitsleistung – das Ereignis ist sicher, nur das WANN ist offen („bis zur Fertigstellung des Projekts“, „bis zur Rückkehr des erkrankten Mitarbeiters“),<br>• <b>Auflösende Bedingung (§ 21 TzBfG):</b> schon das OB des Ereignisses ist ungewiss; zulässig nur mit Sachgrund i. S. d. § 14 I TzBfG.<br><br><b>Merke:</b> Bei Zweckbefristung und auflösender Bedingung endet das Arbeitsverhältnis frühestens <b>zwei Wochen</b> nach Zugang der schriftlichen Unterrichtung über die Zweckerreichung (<b>Auslauffrist</b>, § 15 II, § 21 TzBfG). Die Kombination von Zweckbefristung/Bedingung mit einer zeitlichen Höchstbefristung ist zulässig (BAG v. 22.04.2009 – 7 AZR 768/07).",
      options: [
        { label: "Kalendermäßige Befristung", next: "q_form", tone: "neutral" },
        { label: "Zweckbefristung", next: "q_form", tone: "neutral" },
        { label: "Auflösende Bedingung", set: { bedingung: true }, next: "q_form", tone: "neutral" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "§ 14 IV TzBfG, § 126 II BGB",
      title: "Ist die Befristungsabrede schriftlich UND vor Vertragsbeginn vereinbart?",
      def: "Die Befristung bedarf zu ihrer Wirksamkeit zwingend der <b>Schriftform</b> (§ 14 IV TzBfG) – konstitutiv!<br><br><b>Anforderungen:</b><br>• Unterzeichnung <b>beider Parteien auf derselben Urkunde</b> (§ 126 II BGB),<br>• Unterzeichnung <b>VOR Vertragsbeginn und vor Arbeitsaufnahme</b>,<br>• auch jede <b>Verlängerung</b> bedarf der Schriftform und muss noch <b>während der Laufzeit</b> des zu verlängernden Vertrages vereinbart werden.<br><br><b>Rechtsfolge des Formverstoßes:</b> Nicht Gesamtnichtigkeit nach § 125 BGB – die speziellere Regelung des § 16 S. 1 TzBfG ordnet an: Es ist ein <b>unbefristetes</b> Arbeitsverhältnis zustande gekommen.",
      options: [
        { label: "Ja, Schriftform gewahrt, vor Arbeitsaufnahme", next: "@grund_weiche", tone: "pos" },
        { label: "Nein, nur mündlich oder erst nach Arbeitsaufnahme", next: "e_unbefristet_form", tone: "neg" }
      ]
    },

    q_grund: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 14 TzBfG",
      title: "Worauf wird die Befristung gestützt?",
      def: "<b>Prüfungsreihenfolge der Zulässigkeit:</b><br>a) <b>Sachlicher Grund</b> gemäß § 14 I TzBfG (Regelfall),<br>b) <b>gesetzliche Sonderregelungen</b> (z. B. § 21 BEEG – Vertretung wegen Mutterschutz/Elternzeit),<br>c) <b>Befristung ohne Sachgrund</b> gemäß § 14 II, IIa, III TzBfG (Ausnahme!).<br><br>Die sachgrundlose Befristung darf nur gewählt werden, wenn erkennbar kein sachlicher Grund vorliegt – sie ist an enge formale Grenzen gebunden.",
      options: [
        { label: "Sachgrund (§ 14 I TzBfG)", next: "q_sachgrund", tone: "neutral" },
        { label: "Ohne Sachgrund (§ 14 II TzBfG)", next: "q_sachgrundlos", tone: "neutral" },
        { label: "§ 21 BEEG (Elternzeit-/Mutterschutzvertretung)", next: "e_beeg", tone: "neutral" }
      ]
    },

    q_bedingung_hinweis: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 21 TzBfG",
      title: "Auflösende Bedingung: Sachgrund zwingend erforderlich!",
      def: "Für die <b>auflösende Bedingung</b> verlangt § 21 TzBfG stets einen <b>sachlichen Grund i. S. d. § 14 I TzBfG</b> – eine „sachgrundlose auflösende Bedingung“ gibt es nicht.<br><br>Prüfe deshalb direkt den Sachgrundkatalog: Trägt einer der Gründe des § 14 I 2 Nr. 1–8 TzBfG (oder ein gleichwertiger Grund) die Bedingung?<br><br><b>Klassiker im öD:</b> Rückkehr der erkrankten Stammkraft (Nr. 3); tarifliche auflösende Bedingung des § 33 II TVöD (Rentenbescheid wegen Erwerbsminderung – eigenes Schema „Beendigung ohne Kündigung“).",
      options: [
        { label: "Weiter zur Sachgrundprüfung", next: "q_sachgrund", tone: "warn" }
      ]
    },

    q_sachgrund: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 14 I 2 Nr. 1-8 TzBfG",
      title: "Liegt ein sachlicher Grund i. S. d. § 14 I TzBfG vor?",
      def: "§ 14 I 2 TzBfG nennt <b>acht Beispielsgründe</b> („insbesondere“ – nicht abschließend; andere, den Wertungsmaßstäben entsprechende Gründe möglich, BAG v. 16.03.2005 – 7 AZR 289/04):<br><br><b>Nr. 1 – vorübergehender Bedarf:</b> Prognose erforderlich, dass nach Vertragsende mit hinreichender Sicherheit kein dauerhafter Bedarf mehr besteht (Bsp.: Schulbuchausleihe Mai–September, Corona-Impfzentrum). Daueraufgaben mit zu knapper Personalausstattung rechtfertigen NICHT; bloße Unsicherheit über die Entwicklung genügt nicht.<br><b>Nr. 2 – Anschlussbeschäftigung nach Ausbildung/Studium</b> (sozialer Überbrückungszweck; praktisch relevant erst für Befristungen über 2 Jahre).<br><b>Nr. 3 – Vertretung</b> eines anderen Arbeitnehmers (Krankheit, Urlaub, Elternzeit; Kausalzusammenhang nötig; auch mittelbare Vertretung/Vertretungskette – der Bedarf ist hier gleichbleibend, es wird nur die Personallücke geschlossen).<br><b>Nr. 4 – Eigenart der Arbeitsleistung</b> (Bühnenkünstler, Solisten, Berufsfußballer – Fall des Mainzer Torhüters Heinz Müller, BAG v. 16.01.2018 – 7 AZR 312/16; persönliche Referenten).<br><b>Nr. 5 – Erprobung</b> (i. d. R. max. 6 Monate; längere Erprobung nur, wenn sie in angemessenem Verhältnis zur Tätigkeit steht).<br><b>Nr. 6 – in der Person liegende Gründe</b> (ausdrücklicher Wunsch des Beschäftigten, befristete Aufenthaltserlaubnis, Werkstudenten).<br><b>Nr. 7 – Haushaltsmittel</b>, die für eine befristete Beschäftigung bestimmt sind (Sonderbefristungsrecht öD; konkrete Zwecksetzung für eine Aufgabe von vorübergehender Dauer nötig – das bloße Haushaltsjahr oder allgemeine Sparzwänge genügen NICHT).<br><b>Nr. 8 – gerichtlicher Vergleich</b> (z. B. Prozessbeschäftigung für die Dauer des Kündigungsschutzstreits).",
      options: [
        { label: "Ja, Sachgrund liegt vor", next: "q_tvoed", tone: "pos" },
        { label: "Nein, kein tragfähiger Grund", next: "e_unbefristet_grund", tone: "neg" }
      ]
    },

    q_sachgrundlos: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 14 II TzBfG",
      title: "Hält die sachgrundlose Befristung die Grenzen des § 14 II TzBfG ein?",
      def: "<b>Nur kalendermäßige</b> Befristung möglich. Grenzen:<br>• <b>Höchstdauer 2 Jahre</b> insgesamt,<br>• bis dahin höchstens <b>dreimalige Verlängerung</b> (nahtlos anschließend, nur die Laufzeit ändern – sonst liegt ein Neuabschluss vor!),<br>• <b>Absolutes Vorbeschäftigungsverbot</b> (§ 14 II 2 TzBfG): unzulässig, wenn mit DEMSELBEN Arbeitgeber bereits zuvor ein befristetes oder unbefristetes Arbeitsverhältnis bestand.<br><br><b>BAG-Ausnahmen vom Vorbeschäftigungsverbot</b> (nach BVerfG v. 06.06.2018; BAG v. 23.01.2019 – 7 AZR 733/16):<br>• Vorbeschäftigung liegt <b>sehr lange zurück</b> (22 Jahre erfüllen das, BAG v. 21.08.2019 – 7 AZR 452/17),<br>• Vorbeschäftigung war <b>ganz anders geartet</b> (Musikschullehrer für Gesang → Bauingenieur, BAG v. 16.09.2020 – 7 AZR 552/19),<br>• Vorbeschäftigung war von <b>sehr kurzer Dauer</b> (bis zu 3 Monate in Anlehnung an § 622 V 1 BGB, BAG v. 15.12.2021 – 7 AZR 233/21).<br><br>Merke: Ein Berufsausbildungsverhältnis ist KEIN Arbeitsverhältnis – im Anschluss an die Ausbildung ist die sachgrundlose Befristung deshalb möglich (max. 2 Jahre).",
      options: [
        { label: "Grenzen eingehalten, keine schädliche Vorbeschäftigung", next: "q_tvoed", tone: "pos" },
        { label: "Länger als 2 Jahre / mehr als 3 Verlängerungen", next: "e_unbefristet_grund", tone: "neg" },
        { label: "Schädliche Vorbeschäftigung beim selben AG", next: "e_unbefristet_grund", tone: "neg" }
      ]
    },

    q_tvoed: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 30 TVöD",
      title: "TVöD anwendbar: Sind die Besonderheiten des § 30 TVöD gewahrt?",
      def: "§ 30 I 1 TVöD verweist auf das TzBfG und andere Gesetze; die <b>Absätze 2–5 gelten nur</b> für Beschäftigte im Tarifgebiet West, deren Tätigkeit vor dem 01.01.2005 der Rentenversicherung der <b>Angestellten</b> unterlegen hätte (§ 30 I 2 TVöD).<br><br><b>Befristung MIT Sachgrund (§ 30 II TVöD):</b><br>• kalendermäßig nur bis <b>5 Jahre</b> je Einzelvertrag,<br>• bevorzugte Berücksichtigung bei der Besetzung von <b>Dauerarbeitsplätzen</b>.<br><br><b>Befristung OHNE Sachgrund (§ 30 III TVöD):</b><br>• Mindestvertragsdauer <b>6 Monate</b>; Vertrag „soll“ 12 Monate nicht unterschreiten,<br>• vor Ablauf: Prüfung einer unbefristeten oder befristeten Weiterbeschäftigung.<br><br><b>Probezeit (§ 30 IV TVöD):</b> ohne Sachgrund die ersten <b>6 Wochen</b>, mit Sachgrund die ersten <b>6 Monate</b>; Kündigung innerhalb der Probezeit mit einer Frist von <b>2 Wochen zum Monatsschluss</b>.<br><b>Ordentliche Kündigung nach der Probezeit (§ 30 V TVöD):</b> nur zulässig, wenn die Vertragsdauer mindestens 12 Monate beträgt; eigene Fristenstaffel (mehr als 6 Monate: 4 Wochen, mehr als 1 Jahr: 6 Wochen zum Monatsschluss; mehr als 2 Jahre: 3 Monate, mehr als 3 Jahre: 4 Monate zum Kalendervierteljahresschluss). Unterbrechungen bis zu 3 Monaten sind unschädlich.",
      options: [
        { label: "§ 30 TVöD eingehalten bzw. nicht einschlägig", next: "q_ende", tone: "pos" },
        { label: "Verstoß gegen § 30 TVöD (z. B. über 5 Jahre)", next: "e_unbefristet_grund", tone: "neg" }
      ]
    },

    q_ende: {
      station: "folgen",
      kind: "frage",
      norm: "§ 15 TzBfG",
      title: "Rechtsfolge der WIRKSAMEN Befristung: Wie endet das Arbeitsverhältnis?",
      def: "<b>Ende ohne Kündigung (§ 15 TzBfG):</b><br>• kalendermäßig: mit <b>Ablauf der vereinbarten Zeit</b> (§ 15 I),<br>• zweckbefristet: mit <b>Zweckerreichung</b>, frühestens zwei Wochen nach Zugang der schriftlichen Unterrichtung (§ 15 II),<br>• auflösende Bedingung: entsprechend, § 21 i. V. m. § 15 II TzBfG.<br><br><b>Ordentliche Kündigung während der Laufzeit?</b> Grundsätzlich ausgeschlossen (systemwidrig) – nur zulässig, wenn einzelvertraglich oder tarifvertraglich vereinbart (§ 15 III TzBfG). Im öD eröffnet <b>§ 30 V TVöD</b> die ordentliche Kündigung. Die außerordentliche Kündigung (§ 626 BGB) bleibt stets möglich.<br><br><b>Weiterarbeit nach Fristablauf</b> mit Wissen des Arbeitgebers ohne unverzüglichen Widerspruch → das Arbeitsverhältnis gilt als auf unbestimmte Zeit verlängert (§ 15 V TzBfG).",
      options: [
        { label: "Alles geprüft – Befristung trägt", next: "e_wirksam", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 14, 15 TzBfG, § 30 TVöD",
      title: "Befristung wirksam – Arbeitsverhältnis endet mit Fristablauf/Zweckerreichung",
      text: "Die Befristung ist formwirksam (§ 14 IV TzBfG) und zulässig (Sachgrund nach § 14 I bzw. Grenzen des § 14 II TzBfG und des § 30 TVöD eingehalten). Das Arbeitsverhältnis endet nach § 15 TzBfG, ohne dass es einer Kündigung bedarf.\n\nWill die/der Beschäftigte die Befristung dennoch angreifen: Entfristungsklage (Befristungskontrollklage) zum Arbeitsgericht innerhalb von DREI WOCHEN nach dem vereinbarten Ende (§ 17 S. 1 TzBfG) – sonst gilt die Befristung als von Anfang an wirksam (§ 17 S. 2 TzBfG i. V. m. § 7 KSchG)."
    },

    e_unbefristet_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 IV, § 16 S. 1 TzBfG",
      title: "Formverstoß: unbefristetes Arbeitsverhältnis",
      text: "Die Befristungsabrede ist mangels Schriftform (bzw. wegen Unterzeichnung erst nach Vertragsbeginn/Arbeitsaufnahme) unwirksam. § 125 BGB gilt nicht – nach der spezielleren Regelung des § 16 S. 1 TzBfG ist der Arbeitsvertrag als AUF UNBESTIMMTE ZEIT geschlossen anzusehen.\n\nZur Beendigung bedarf es jetzt einer Kündigung. Sie ist frühestens zum vereinbarten Fristende zulässig (§ 16 S. 1 Hs. 2 TzBfG); beruht die Unwirksamkeit ALLEIN auf dem Formmangel, kann auch schon vorher ordentlich gekündigt werden (§ 16 S. 2 TzBfG)."
    },

    e_unbefristet_grund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 16 S. 1 TzBfG",
      title: "Befristung unwirksam: unbefristetes Arbeitsverhältnis",
      text: "Die Befristung ist materiell unzulässig (kein tragfähiger Sachgrund, Überschreitung der Grenzen des § 14 II TzBfG, Verstoß gegen das Vorbeschäftigungsverbot oder gegen § 30 TVöD). Rechtsfolge des § 16 S. 1 TzBfG: Das Arbeitsverhältnis gilt als auf unbestimmte Zeit geschlossen und wird über das vereinbarte Fristende hinaus fortgesetzt.\n\nZur Beendigung bedarf es einer ordentlichen Kündigung, frühestens zum vereinbarten Fristende (§ 16 S. 1 Hs. 2 TzBfG).\n\nProzessual: Die Unwirksamkeit muss die/der Beschäftigte mit der Entfristungsklage binnen drei Wochen nach dem vereinbarten Ende geltend machen (§ 17 TzBfG) – sonst Wirksamkeitsfiktion."
    },

    e_beeg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 21 BEEG",
      title: "Sonderbefristungsrecht: Vertretung nach § 21 BEEG",
      text: "Ein sachlicher Grund liegt vor, wenn ein Arbeitnehmer zur Vertretung eines anderen eingestellt wird für die Dauer (a) der Beschäftigungsverbote nach dem MuSchG, (b) einer Elternzeit oder (c) einer auf Tarifvertrag beruhenden Arbeitsfreistellung zur Kinderbetreuung (z. B. Sonderurlaub nach § 28 TVöD) – zuzüglich einer angemessenen Einarbeitungszeit (§ 21 I, II BEEG).\n\nMöglich ist kalendermäßige Befristung ODER Zweckbefristung („bis zum Ende der Elternzeit\", § 21 III BEEG). § 21 BEEG ist eine eigenständige Regelung neben § 14 I 2 Nr. 3 TzBfG und geht weiter: Absatz 4 gewährt dem Arbeitgeber ein SONDERKÜNDIGUNGSRECHT, das § 14 TzBfG nicht kennt.\n\nIm Übrigen gelten Schriftform (§ 14 IV TzBfG) und die Rechtsfolgen der §§ 15–17 TzBfG entsprechend."
    }
  },

  routers: {
    /* Bei auflösender Bedingung ist der sachgrundlose Weg versperrt (§ 21
       TzBfG) – der Router leitet nach der Formprüfung entsprechend. */
    "@grund_weiche": function (flags) {
      return flags.bedingung ? "q_bedingung_hinweis" : "q_grund";
    }
  }
});
