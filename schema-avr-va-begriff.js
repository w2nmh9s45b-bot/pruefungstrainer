/*
 * Prüfungsschema: Vorliegen eines Verwaltungsakts (§ 35 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "2.1.2 LZ 2 b Begriff des VA" (Dr. Konrad – Definitionen aller sechs Merkmale)
 *  - "Skript Teil 2 - Thema 2 Der Verwaltungsakt"
 *  - Gesetze: VwVfG § 35 (Volltext geprüft); in RLP anwendbar über § 1 LVwVfG,
 *    Behördenbegriff § 2 LVwVfG
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-va-begriff",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Der Verwaltungsakt",
  title: "Vorliegen eines Verwaltungsakts (§ 35 VwVfG)",
  description: "Prüfung aller sechs Begriffsmerkmale des VA: Maßnahme, Behörde, öffentliches Recht, Regelung, Einzelfall (inkl. Allgemeinverfügung § 35 S. 2) und Außenwirkung – mit allen Abgrenzungen (Realakt, Vorbereitungshandlung, Sonderstatusverhältnis).",
  start: "start",
  stations: [
    { id: "massnahme", label: "Maßnahme" },
    { id: "behoerde", label: "Behörde" },
    { id: "oer", label: "Öff. Recht" },
    { id: "regelung", label: "Regelung" },
    { id: "einzelfall", label: "Einzelfall" },
    { id: "aussen", label: "Außenwirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Verwaltungsakt liegt vor",
    neg: "Ergebnis: kein Verwaltungsakt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "massnahme",
      kind: "frage",
      norm: "§ 35 S. 1 VwVfG",
      title: "Liegt eine Maßnahme vor?",
      text: "Verwaltungsakt ist jede Verfügung, Entscheidung oder andere hoheitliche Maßnahme, die eine Behörde zur Regelung eines Einzelfalles auf dem Gebiet des öffentlichen Rechts trifft und die auf unmittelbare Rechtswirkung nach außen gerichtet ist (§ 35 S. 1 VwVfG; in RLP anwendbar über § 1 LVwVfG). Die sechs Merkmale werden nacheinander geprüft.",
      def: "<b>Maßnahme</b> = jedes einseitige, zweckgerichtete Handeln mit Erklärungsgehalt.<br><br><b>Keine Maßnahme:</b><br>• Abschluss von Verträgen (nicht ein-, sondern zweiseitig),<br>• versehentliche Handlungen, z. B. Verkehrsunfall (keine Zweckrichtung),<br>• bloßes Nichtstun (kein Erklärungsgehalt), es sei denn, ein Gesetz qualifiziert das Schweigen (z. B. Genehmigungsfiktion § 42a VwVfG).",
      hint: "Probleme beim Merkmal der Maßnahme sind in Klausuren selten – kurz feststellen und weitergehen.",
      options: [
        { label: "Ja, einseitiges zweckgerichtetes Handeln mit Erklärungsgehalt", next: "q_behoerde", tone: "pos" },
        { label: "Nein, zweiseitige Regelung (Vertrag)", detail: "ggf. öffentlich-rechtlicher Vertrag §§ 54 ff. VwVfG", next: "e_kein_va_massnahme", tone: "neg" },
        { label: "Nein, kein Erklärungsgehalt / keine Zweckrichtung", next: "e_kein_va_massnahme", tone: "neg" }
      ]
    },

    q_behoerde: {
      station: "behoerde",
      kind: "frage",
      norm: "§ 2 LVwVfG (§ 1 IV VwVfG)",
      title: "Handelt eine Behörde?",
      def: "<b>Behörde</b> = jede Stelle, die Aufgaben der öffentlichen Verwaltung wahrnimmt.<br><b>Öffentliche Verwaltung</b> = jede staatliche Tätigkeit, die weder Gesetzgebung noch Rechtsprechung noch Regierungstätigkeit ist.<br><br><b>Beachte:</b><br>• Auch eine einzelne Person oder ein Gremium kann Behörde sein, wenn ihr die Entscheidungsbefugnis übertragen ist (z. B. Ortsbürgermeister beim Sitzungsausschluss nach § 38 GemO, Gemeinderat beim Ausschluss nach § 31 GemO).<br>• <b>Beliehene</b> nehmen staatliche Aufgaben im eigenen Namen wahr und sind selbst Behörde (z. B. TÜV-Sachverständiger bei der Hauptuntersuchung).<br>• <b>Verwaltungshelfer</b> handeln nur für die beauftragende Stelle und sind selbst keine Behörde (z. B. Bauunternehmer, der auf Anweisung Verkehrsschilder aufstellt).",
      options: [
        { label: "Ja, Stelle nimmt Aufgaben der öffentlichen Verwaltung wahr", next: "q_oer", tone: "pos" },
        { label: "Ja, Beliehener handelt im eigenen Namen", next: "q_oer", tone: "pos" },
        { label: "Nein, bloßer Verwaltungshelfer oder Privater", next: "e_kein_va_behoerde", tone: "neg" }
      ]
    },

    q_oer: {
      station: "oer",
      kind: "frage",
      norm: "§ 35 S. 1 VwVfG",
      title: "Handelt die Behörde auf dem Gebiet des öffentlichen Rechts?",
      def: "<b>Abgrenzungstheorien:</b><br>• <b>Subordinationstheorie:</b> öffentlich-rechtlich, wenn die Behörde dem Bürger im Verhältnis der Über-/Unterordnung gegenübertritt.<br>• <b>Modifizierte Subjektstheorie</b> (h. M.): öffentlich-rechtlich, wenn die angewendete Norm ausschließlich den Staat als Hoheitsträger berechtigt oder verpflichtet.<br><br><b>Problemfälle:</b><br>• <b>Hausverbot:</b> nach h. M. entscheidet der Zweck – dient es der Sicherung der öffentlich-rechtlichen Aufgabenerfüllung, ist es öffentlich-rechtlich.<br>• <b>Zwei-Stufen-Theorie</b> bei Vergabe öffentlicher Einrichtungen und Subventionen: das „Ob“ der Vergabe ist stets öffentlich-rechtlich, nur das „Wie“ kann privatrechtlich geregelt werden.",
      options: [
        { label: "Ja, öffentlich-rechtlich (mod. Subjektstheorie / Über-Unterordnung)", next: "q_regelung", tone: "pos" },
        { label: "Ja, „Ob“-Entscheidung nach der Zwei-Stufen-Theorie", detail: "z. B. Zulassung zur Stadthalle, Bewilligung einer Subvention", next: "q_regelung", tone: "pos" },
        { label: "Nein, privatrechtliches Handeln (fiskalisch)", detail: "z. B. Materialeinkauf, privatrechtliche Miete", next: "e_kein_va_oer", tone: "neg" }
      ]
    },

    q_regelung: {
      station: "regelung",
      kind: "frage",
      norm: "§ 35 S. 1 VwVfG",
      title: "Trifft die Maßnahme eine Regelung?",
      def: "<b>Regelung</b> = auf die unmittelbare Setzung einer Rechtsfolge gerichtet, d. h. ein Recht und/oder eine Pflicht wird begründet, geändert, aufgehoben oder verbindlich festgestellt bzw. verneint oder der Rechtszustand einer Sache bestimmt.<br><br><b>Abzugrenzen (wichtigstes Merkmal!):</b><br>• <b>Realakte</b> – auf tatsächlichen Erfolg gerichtet (Straßenreinigung, Auszahlung eines bewilligten Zuschusses, behördliche Warnung),<br>• <b>Vorbereitungshandlungen</b> – führen die Rechtsfolge nicht unmittelbar herbei (Aufforderung zur MPU, Einzelbewertung einer Klausur als Teil der Endnote).",
      options: [
        { label: "Ja, unmittelbare Setzung einer Rechtsfolge", next: "q_einzelfall", tone: "pos" },
        { label: "Nein, Realakt (tatsächlicher Erfolg)", next: "e_kein_va_regelung", tone: "neg" },
        { label: "Nein, bloße Vorbereitungshandlung", next: "e_kein_va_regelung", tone: "neg" }
      ]
    },

    q_einzelfall: {
      station: "einzelfall",
      kind: "frage",
      norm: "§ 35 S. 1, S. 2 VwVfG",
      title: "Regelt die Maßnahme einen Einzelfall?",
      def: "<b>Grundfall (konkret-individuell):</b> „Ein Einzelfall liegt zumindest dann vor, wenn sich die Regelung auf einen konkreten Sachverhalt bezieht und an eine bestimmte Person richtet.“<br><br><b>Allgemeinverfügung (§ 35 S. 2 VwVfG) – drei Varianten:</b><br>1. <b>adressatenbezogen:</b> an einen nach allgemeinen Merkmalen bestimmten oder bestimmbaren Personenkreis (z. B. Auflösung einer Versammlung),<br>2. <b>sachbezogen:</b> Regelung der öffentlich-rechtlichen Eigenschaft einer Sache (z. B. Widmung einer Straße),<br>3. <b>benutzungsregelnd:</b> Regelung der Benutzung einer solchen Sache (z. B. Verkehrszeichen!).<br><br><b>Abgrenzung zu abstrakt-generellen Regelungen</b> (Rechtsverordnung, Satzung): je länger die zeitliche, je größer die räumliche Geltung und je mehr potenziell Betroffene, desto eher Rechtsnorm.",
      options: [
        { label: "Ja, konkreter Sachverhalt + bestimmte Person(en)", next: "q_aussen", tone: "pos" },
        { label: "Ja, Allgemeinverfügung nach § 35 S. 2 VwVfG", detail: "z. B. Verkehrszeichen, Versammlungsauflösung, Widmung", next: "q_aussen", tone: "pos" },
        { label: "Nein, abstrakt-generelle Regelung", detail: "Rechtsverordnung oder Satzung – Rechtsnorm, kein VA", next: "e_kein_va_einzelfall", tone: "neg" }
      ]
    },

    q_aussen: {
      station: "aussen",
      kind: "frage",
      norm: "§ 35 S. 1 VwVfG",
      title: "Ist die Regelung auf unmittelbare Außenwirkung gerichtet?",
      def: "<b>Außenwirkung</b> = die Regelung (Rechtsfolge) muss sich an eine außerhalb der Verwaltung stehende Person richten.<br><br><b>Keine Außenwirkung:</b> innerorganisatorische Maßnahmen, Schriftverkehr zwischen Behörden, innerdienstliche Weisungen gegenüber Beamten, Verwaltungsvorschriften.",
      hint: "Problem Sonderstatusverhältnis (Beamte, Schüler, Strafgefangene, Ratsmitglieder): Außenwirkung (+), wenn die Regelung den Betroffenen nicht nur als Glied der Verwaltung trifft (Betriebsverhältnis), sondern in seiner persönlichen Rechtsstellung (Grundverhältnis) – z. B. Entlassung, Versetzung in den Ruhestand, Schulverweis.",
      options: [
        { label: "Ja, Adressat steht außerhalb der Verwaltung", next: "e_va", tone: "pos" },
        { label: "Ja, Sonderstatus: Grundverhältnis betroffen", detail: "persönliche Rechtsstellung, nicht nur Dienstbetrieb", next: "e_va", tone: "pos" },
        { label: "Nein, rein verwaltungsinterne Maßnahme (Betriebsverhältnis)", next: "e_kein_va_aussen", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_va: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 35 VwVfG",
      title: "Verwaltungsakt liegt vor",
      text: "Alle sechs Begriffsmerkmale des § 35 VwVfG sind erfüllt: Maßnahme, Behörde, auf dem Gebiet des öffentlichen Rechts, Regelung, Einzelfall (bzw. Allgemeinverfügung nach § 35 S. 2) und unmittelbare Außenwirkung.\n\nFolgen: Der VA wird mit Bekanntgabe wirksam (§ 43 I VwVfG), gegen ihn sind Widerspruch (§§ 68 ff. VwGO) und Anfechtungsklage statthaft, und er kann Grundlage der Verwaltungsvollstreckung sein.\n\nWeiter geht es mit den Schemata „Wirksamkeit und Bekanntgabe“ sowie „Rechtmäßigkeit eines Verwaltungsakts (Vollprüfung)“."
    },

    e_kein_va_massnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 S. 1 VwVfG",
      title: "Kein VA: keine (einseitige) Maßnahme",
      text: "Es fehlt bereits an einer Maßnahme im Sinne eines einseitigen, zweckgerichteten Handelns mit Erklärungsgehalt. Bei zweiseitigen Regelungen kommt ein öffentlich-rechtlicher Vertrag (§§ 54 ff. VwVfG) in Betracht – dann gelten dessen Regeln (eigenes Schema in FS II)."
    },

    e_kein_va_behoerde: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 LVwVfG",
      title: "Kein VA: keine Behörde",
      text: "Die handelnde Stelle nimmt keine Aufgaben der öffentlichen Verwaltung im eigenen Namen wahr. Verwaltungshelfer handeln für die beauftragende Behörde – deren Handeln ist dieser zuzurechnen; der Helfer selbst erlässt keinen VA."
    },

    e_kein_va_oer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 S. 1 VwVfG",
      title: "Kein VA: privatrechtliches Handeln",
      text: "Die Behörde handelt auf dem Gebiet des Privatrechts (fiskalisches Handeln oder zweite Stufe der Zwei-Stufen-Theorie). Rechtsschutz ist dann vor den ordentlichen Gerichten zu suchen (§ 13 GVG); die Handlungsform VA scheidet aus."
    },

    e_kein_va_regelung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 S. 1 VwVfG",
      title: "Kein VA: keine Regelung",
      text: "Die Maßnahme setzt keine unmittelbare Rechtsfolge – es handelt sich um einen Realakt oder eine bloße Vorbereitungshandlung.\n\nRechtsschutz: Gegen Realakte kommt die allgemeine Leistungsklage (auf Unterlassen oder Folgenbeseitigung) in Betracht; Verfahrenshandlungen können nach § 44a VwGO grundsätzlich nur zusammen mit der Sachentscheidung angegriffen werden."
    },

    e_kein_va_einzelfall: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 VwVfG",
      title: "Kein VA: abstrakt-generelle Regelung",
      text: "Die Regelung betrifft keinen Einzelfall, sondern eine unbestimmte Vielzahl von Fällen und Personen – es liegt eine Rechtsnorm (Rechtsverordnung oder Satzung) vor.\n\nRechtsschutz gegen Satzungen und Rechtsverordnungen unterhalb des Landesgesetzes: Normenkontrolle nach § 47 I Nr. 2 VwGO i. V. m. § 4 AGVwGO vor dem OVG Koblenz oder Inzidentkontrolle."
    },

    e_kein_va_aussen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 35 S. 1 VwVfG",
      title: "Kein VA: keine Außenwirkung",
      text: "Die Maßnahme wirkt nur verwaltungsintern (innerdienstliche Weisung, Behördenschriftverkehr, Organisationsakt) oder trifft den Betroffenen im Sonderstatusverhältnis nur im Betriebsverhältnis. Eine unmittelbare Rechtswirkung nach außen fehlt – kein VA."
    }
  },

  routers: {}
});
