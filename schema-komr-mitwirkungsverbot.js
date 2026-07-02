/*
 * Prüfungsschema: Mitwirkungsverbot / Ausschließungsgründe (§ 22 GemO)
 * Fach: Kommunalrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS II):
 *  - "Schema § 22 GemO – Ausschluss von Ratsmitgliedern (Mitwirkungsverbot)"
 *  - "FS II - KomR - Skript 07. - Ausschliessungsgruende"
 *  - Gesetze: GemO RLP § 22 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-mitwirkungsverbot",
  subject: "Kommunalrecht",
  fs: ["FS2"],
  area: "Sitzungsrecht · Befangenheit",
  title: "Mitwirkungsverbot, § 22 GemO",
  description: "Ausschluss von Ratsmitgliedern wegen Sonderinteresses: betroffener Personenkreis, persönliche Voraussetzungen (Nr. 1–3, Angehörige), sachliche Voraussetzungen (unmittelbarer Vor-/Nachteil, Satzungs-Sonderfälle), Ausnahmen des § 22 III sowie Verfahren, Rechtsfolgen und Heilung.",
  start: "start",
  stations: [
    { id: "kreis", label: "Personenkreis" },
    { id: "pers", label: "Persönlich" },
    { id: "sach", label: "Sachlich" },
    { id: "ausnahme", label: "Ausnahmen" },
    { id: "folge", label: "Rechtsfolge" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Mitwirkungsverbot (+)",
    neg: "Ergebnis: kein Mitwirkungsverbot",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "kreis",
      kind: "frage",
      norm: "§ 22 I 1 GemO",
      title: "Gehört die Person zum betroffenen Personenkreis?",
      text: "Einleitungssatz (auswendig!): „Ein Ausschließungsgrund liegt vor, wenn die Person zum betroffenen Personenkreis des § 22 GemO gehört und die persönliche sowie die sachlichen Voraussetzungen der Vorschrift erfüllt sind.“ Sinn und Zweck (§ 30 I GemO): ausschließliche Gemeinwohlorientierung, Vertrauen in „saubere“ Ratsarbeit, Vermeidung des bösen Anscheins.",
      def: "<b>Erfasst:</b><br>• Bürger mit Ehrenamt (§ 13 II i. V. m. § 18 I GemO): Ratsmitglieder, Ausschussmitglieder, ehrenamtliche Beigeordnete, Ortsbürgermeister,<br>• Einwohner mit ehrenamtlicher Tätigkeit (§ 13 I i. V. m. § 18 II GemO),<br>• hauptamtliche Bürgermeister und Beigeordnete.",
      options: [
        { label: "Ja, erfasste Person", next: "q_pers", tone: "pos" },
        { label: "Nein – Beschäftigte / Beamte der Verwaltung", detail: "für sie gelten §§ 20, 21 VwVfG und § 52 LBG, nicht § 22 GemO", next: "e_kein_kreis", tone: "neg" }
      ]
    },

    q_pers: {
      station: "pers",
      kind: "frage",
      norm: "§ 22 I 1 Nr. 1–3 GemO",
      title: "Welche persönliche Voraussetzung kommt in Betracht?",
      def: "<b>Nr. 1:</b> Entscheidung kann der Person SELBST, einem ANGEHÖRIGEN (§ 22 II) oder einer kraft Gesetzes oder Vollmacht VERTRETENEN Person einen unmittelbaren Vor-/Nachteil bringen.<br><b>Nr. 2:</b> Gutachten oder sonstige Tätigkeit zum Beratungsgegenstand in anderer als öffentlicher Eigenschaft.<br><b>Nr. 3:</b> a) gegen Entgelt beschäftigt (Arbeitgeber/Dienstherr betroffen), b) Organ einer juristischen Person (Vorstand, Aufsichtsrat u. ä. – nicht als Vertreter der Gemeinde, § 88 I GemO), c) Gesellschafter einer GbR / Vorstand eines nichtrechtsfähigen Vereins – jeweils bei unmittelbarem persönlichem oder wirtschaftlichem Interesse.",
      options: [
        { label: "Nr. 1: selbst betroffen oder vertretene Person", detail: "gesetzliche Vertretung (GmbH-GF § 35 GmbHG, Vereinsvorstand § 26 BGB) oder Vollmacht (§§ 164 ff. BGB: Architekt, RA, Makler)", next: "q_vorteil", tone: "neutral" },
        { label: "Nr. 1: Angehöriger betroffen", next: "q_angehoerig", tone: "neutral" },
        { label: "Nr. 2: Gutachten / sonstige Tätigkeit", detail: "Sonderfall – führt OHNE sachliche Voraussetzungen zum Ausschluss", next: "q_ausnahme", set: { nr2: true }, tone: "warn" },
        { label: "Nr. 3: Arbeitgeber / Organstellung / GbR", next: "q_widerstreit", tone: "neutral" },
        { label: "Keine Fallgruppe einschlägig", next: "e_kein_verbot", tone: "neg" }
      ]
    },

    q_angehoerig: {
      station: "pers",
      kind: "frage",
      norm: "§ 22 II GemO",
      title: "Ist die betroffene Person Angehöriger i. S. d. § 22 II GemO?",
      def: "<b>Angehörige (+):</b> Ehegatten (auch nach Scheidung, § 22 II 2), eingetragene Lebenspartner (auch ehemalige), Verwandte bis zum 3. Grad (Eltern/Kinder 1°, Großeltern/Enkel/Geschwister 2°, Urgroßeltern/Neffe/Nichte/Onkel/Tante 3°), Ehegatten/Lebenspartner eigener Verwandter bis zum 2. Grad, Verschwägerte bis zum 2. Grad.<br><b>KEINE Angehörigen (–):</b> Cousin/Cousine (4. Grad!), Verlobte, eheähnliche Gemeinschaft, „Schwippschwager“ (keine Schwägerschaft).<br><b>Fortdauer:</b> Die Angehörigeneigenschaft besteht fort, auch wenn die begründende Ehe/Lebenspartnerschaft nicht mehr besteht (§ 22 II 2 – „Schwiegermütter sammeln“).",
      options: [
        { label: "Ja, Angehöriger", next: "q_vorteil", tone: "pos" },
        { label: "Nein", detail: "z. B. Cousin (4. Grad), Verlobte, Schwippschwager", next: "e_kein_verbot", tone: "neg" }
      ]
    },

    q_widerstreit: {
      station: "pers",
      kind: "frage",
      norm: "§ 22 I 1 Nr. 3, I 2 GemO",
      title: "Nr. 3: Besteht ein Interessenwiderstreit?",
      def: "Die unter Nr. 3 a–c Bezeichneten müssen ein <b>unmittelbares persönliches oder wirtschaftliches Interesse</b> an der Entscheidung haben.<br><b>Rückausnahme (§ 22 I 2, nur Nr. 3a):</b> Kein Verbot, wenn nach den tatsächlichen Umständen der Beschäftigung anzunehmen ist, dass sich der Betroffene NICHT in einem Interessenwiderstreit befindet (z. B. Beratungsgegenstand berührt nicht seinen Aufgabenbereich, keine leitende Stellung).<br><b>Abgrenzung Verein:</b> vertretungsberechtigter Gesamtvorstand → Nr. 1 (§ 26 BGB); einzelnes Vorstandsmitglied → Nr. 3b; einfaches Vereinsmitglied → KEIN Verbot.",
      options: [
        { label: "Ja, Interessenwiderstreit", next: "q_vorteil", tone: "pos" },
        { label: "Nein (Rückausnahme § 22 I 2)", next: "e_kein_verbot", tone: "neg" }
      ]
    },

    q_vorteil: {
      station: "sach",
      kind: "frage",
      norm: "§ 22 I 1 Nr. 1 GemO",
      title: "Sachliche Voraussetzung 1: Kann die Entscheidung einen Vor- oder Nachteil bringen?",
      def: "<b>Vor-/Nachteil</b> = jede rechtliche, materielle oder ideelle (Ansehen/Ruf) Besser- oder Schlechterstellung im Vergleich zur Situation VOR der Entscheidung. Der Eintritt muss weder zwangsläufig sein noch genügt jede vage Möglichkeit – er muss nach allgemeiner Lebenserfahrung mit <b>hinreichender Wahrscheinlichkeit</b> zu erwarten sein. Maßgeblich sind die in Betracht kommenden Entscheidungsmöglichkeiten, nicht das Ergebnis.",
      options: [
        { label: "Ja, möglicher Vor-/Nachteil", next: "q_unmittelbar", tone: "pos" },
        { label: "Nein", next: "e_kein_verbot", tone: "neg" }
      ]
    },

    q_unmittelbar: {
      station: "sach",
      kind: "frage",
      norm: "§ 22 I 1 Nr. 1 GemO",
      title: "Sachliche Voraussetzung 2: Ist der Vor-/Nachteil UNMITTELBAR?",
      def: "<b>Modifizierte formale Theorie (auswendig!):</b> Eine Entscheidung wirkt unmittelbar, wenn zu ihrer Umsetzung kein weiterer, inhaltlich eigenständiger rechtsbegründender Akt erforderlich ist – insbesondere wenn die anschließende Ausführungshandlung nur ein rein formaler Vollzugsakt ohne eigenen Ermessensspielraum ist.<br><b>Sonderproblem Satzungen:</b><br>• <b>Maßnahmesatzung</b> (abstrakt-generell, braucht Vollzugs-VA): Unmittelbarkeit (–) – z. B. Hundesteuer-, Gebühren-, Erschließungsbeitragssatzung.<br>• <b>Einzelfallsatzung</b> (konkret-individuell): Unmittelbarkeit (+) – z. B. Bebauungsplan (§ 10 BauGB), Veränderungssperre (§ 14 BauGB); Verbot gilt im GESAMTEN mehrstufigen Verfahren, auch in vorberatenden Ausschüssen.<br>• <b>Flächennutzungsplan:</b> grundsätzlich (–); Ausnahme: Konzentrationsflächen i. S. d. § 35 III 3 BauGB (BVerwG, Urt. v. 26.04.2007).",
      options: [
        { label: "Ja, unmittelbar", next: "q_ausnahme", tone: "pos" },
        { label: "Nein", detail: "z. B. Maßnahmesatzung – weiterer eigenständiger Akt nötig", next: "e_kein_verbot_unmittelbar", tone: "neg" }
      ]
    },

    q_ausnahme: {
      station: "ausnahme",
      kind: "frage",
      norm: "§ 22 III GemO",
      title: "Greift eine Ausnahme des § 22 III GemO?",
      def: "<b>Kein Mitwirkungsverbot bei:</b><br>• <b>Wahlen</b> (vgl. VV Nr. 2 zu § 40 GemO) – der Kandidat darf sogar für sich selbst stimmen; Beschlüsse nach § 47 II GemO sind keine Wahlen.<br>• <b>Gruppeninteressen:</b> Betroffenheit lediglich als Angehöriger einer Berufsgruppe oder eines Bevölkerungsteils, deren gemeinsame Belange berührt werden (Wesen der repräsentativen Demokratie) – meist fehlt es dann ohnehin an der Unmittelbarkeit (z. B. Hundesteuer-, Haushaltssatzung).",
      options: [
        { label: "Ja, Wahl oder Gruppeninteresse", next: "e_kein_verbot_ausnahme", tone: "neg" },
        { label: "Nein, keine Ausnahme", next: "q_verstoss", tone: "pos" }
      ]
    },

    q_verstoss: {
      station: "folge",
      kind: "frage",
      norm: "§ 22 IV, V GemO",
      title: "Wurde das Mitwirkungsverbot beachtet?",
      def: "<b>Umfang des Ausschlusses:</b> keine beratende oder entscheidende Mitwirkung – auch nicht in Ausschüssen (fehlerhafte Vorberatung „infiziert“ die Ratsentscheidung). Öffentliche Sitzung: Sitzungstisch verlassen, Aufenthalt nur im Zuhörerbereich – bloßes Abrücken genügt NICHT (OVG RP, Urt. v. 12.05.2016 – 1 C 10321/15, vgl. § 22 IV). Nichtöffentliche Sitzung: den Raum verlassen.<br><b>Verfahren (§ 22 V):</b> Mitteilungspflicht des Betroffenen an den BM VOR der Beratung; im Zweifelsfall entscheidet bei Ratsmitgliedern der GEMEINDERAT in nichtöffentlicher Sitzung, in Abwesenheit des Betroffenen nach dessen Anhörung; im Übrigen der Bürgermeister.",
      options: [
        { label: "Ja, Ausschluss beachtet", next: "e_verbot", tone: "pos" },
        { label: "Nein – Person hat trotz Verbots mitgewirkt", next: "q_heilung", set: { verstoss: "mitgewirkt" }, tone: "neg" },
        { label: "Umgekehrt: mitwirkungsberechtigte Person wurde zu Unrecht ausgeschlossen", detail: "nur bei (rechtswidriger) Zweifelsfallentscheidung; freiwilliges Verlassen nach bloßem Hinweis des BM ist KEIN Ausschluss", next: "q_heilung", set: { verstoss: "ausgeschlossen" }, tone: "neg" }
      ]
    },

    q_heilung: {
      station: "folge",
      kind: "frage",
      norm: "§ 22 VI GemO",
      title: "Ist der Verstoß nach § 22 VI GemO geheilt?",
      text: "Spezialgesetzliche Fehlerfolge: Die Entscheidung ist unwirksam (§ 22 VI 1) – unabhängig davon, ob der Fehler entscheidungserheblich war! Die allgemeine Fehlerfolgenlehre ist NICHT anzuwenden.",
      def: "<b>Heilung (§ 22 VI 2):</b> Die Entscheidung gilt als von Anfang an wirksam, wenn nicht binnen <b>3 Monaten</b> der Bürgermeister ihre Ausführung aussetzt oder die Aufsichtsbehörde sie beanstandet.<br><b>Grenze (§ 22 VI 3):</b> keine Wirksamkeit gegenüber demjenigen, der vor Fristablauf einen förmlichen Rechtsbehelf einlegt, wenn der Mangel im Verfahren festgestellt wird.<br><b>Satzungen (§ 22 VI 5):</b> stattdessen Jahresfrist des § 24 VI GemO.",
      options: [
        { label: "Ja, geheilt", next: "e_geheilt", tone: "warn" },
        { label: "Nein", next: "e_unwirksam", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verbot: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 I, IV GemO",
      title: "Mitwirkungsverbot besteht – und wurde beachtet",
      text: "Alle Voraussetzungen des § 22 GemO liegen kumulativ vor; die Person wurde ordnungsgemäß von Beratung und Entscheidung ausgeschlossen (öffentliche Sitzung: Zuhörerbereich; nichtöffentliche Sitzung: Raum verlassen).\n\nDer Beschluss leidet insoweit an keinem Fehler.\n\nMerke für die Beschlussfähigkeit: Sind wegen § 22 so viele Mitglieder ausgeschlossen, dass weniger als die Hälfte anwesend ist, gilt die verminderte Beschlussfähigkeit (1/3, § 39 II HS 1); darunter entscheidet der BM (§ 39 II HS 2)."
    },

    e_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 VI 1 GemO",
      title: "Entscheidung unwirksam (§ 22 VI GemO)",
      text: "Die Entscheidung ist nach der spezialgesetzlichen Fehlerfolge des § 22 VI 1 GemO unwirksam – der Fehler allein genügt, auf Entscheidungserheblichkeit kommt es nicht an. Eine Heilung ist nicht eingetreten.\n\nDie ausgesetzte oder beanstandete Entscheidung ist unverzüglich unter Vermeidung des Fehlers zu wiederholen (§ 22 VI 4 GemO).\n\nRechtsschutz des zu Unrecht ausgeschlossenen Ratsmitglieds: Kommunalverfassungsstreit (Feststellungsklage) wegen Verletzung seiner Mitgliedschaftsrechte."
    },

    e_geheilt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 22 VI 2 GemO",
      title: "Verstoß geheilt – Entscheidung von Anfang an wirksam",
      text: "Binnen drei Monaten hat weder der Bürgermeister die Ausführung ausgesetzt noch die Aufsichtsbehörde beanstandet – die Entscheidung gilt als von Anfang an wirksam (§ 22 VI 2 GemO).\n\nAusnahme: Gegenüber demjenigen, der vor Fristablauf einen förmlichen Rechtsbehelf eingelegt hat, tritt die Wirksamkeit nicht ein, wenn der Mangel im Verfahren festgestellt wird (§ 22 VI 3 GemO).\n\nBei Satzungsbeschlüssen gilt statt der Dreimonatsfrist die Jahresfrist des § 24 VI GemO (§ 22 VI 5)."
    },

    e_kein_kreis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 20, 21 VwVfG, § 52 LBG",
      title: "Kein Fall des § 22 GemO",
      text: "Beschäftigte und Beamte der (Verbands-)Gemeindeverwaltung gehören nicht zum betroffenen Personenkreis des § 22 GemO. Für sie gelten die Befangenheitsregeln der §§ 20, 21 VwVfG und § 52 LBG (Dienstrecht)."
    },

    e_kein_verbot: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 I GemO",
      title: "Kein Mitwirkungsverbot",
      text: "Die Voraussetzungen des § 22 GemO liegen nicht kumulativ vor – die Person darf an Beratung und Entscheidung mitwirken.\n\nWird sie dennoch ausgeschlossen (durch Zweifelsfallentscheidung des Rates), wäre der Beschluss seinerseits nach § 22 VI 1 Alt. 2 GemO unwirksam!"
    },

    e_kein_verbot_unmittelbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 I 1 Nr. 1 GemO",
      title: "Kein Mitwirkungsverbot: Unmittelbarkeit fehlt",
      text: "Zur Umsetzung der Entscheidung ist ein weiterer, inhaltlich eigenständiger rechtsbegründender Akt erforderlich (modifizierte formale Theorie) – der mögliche Vor-/Nachteil tritt nicht unmittelbar ein.\n\nKlassiker: Die Gebührensatzung (Maßnahmesatzung) betrifft eine unbestimmte Vielzahl von Fällen; der Betroffene müsste erst einen gebührenpflichtigen Tatbestand verwirklichen, und es ergeht ein Gebühren-VA. Das Ratsmitglied, das die gemeindliche Minigolf-Anlage nutzt, darf über die Gebührenerhöhung mitentscheiden."
    },

    e_kein_verbot_ausnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 III GemO",
      title: "Kein Mitwirkungsverbot: Ausnahme des § 22 III GemO",
      text: "Bei Wahlen und bei bloßen Gruppeninteressen besteht kein Mitwirkungsverbot (§ 22 III GemO).\n\nBei Wahlen darf der Kandidat mitstimmen – auch für sich selbst; ein „Verlassen des Sitzungstisches“ ist gerade nicht erforderlich. Die Betroffenheit als Teil einer Berufsgruppe oder eines Bevölkerungsteils entspricht dem Wesen der repräsentativen Demokratie."
    }
  },

  routers: {}
});
