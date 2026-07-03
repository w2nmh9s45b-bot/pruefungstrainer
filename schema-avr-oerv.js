/*
 * Prüfungsschema: Öffentlich-rechtlicher Vertrag (§§ 54 ff. VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Pruefungsschema oeffentlich-rechtlicher Vertrag" (Schmitt – Vorliegen,
 *    Wirksamkeit, Nichtigkeit § 59 II vor § 59 I, Rechtsfolgen)
 *  - "FS II – 5. Oeffentlich rechtlicher Vertrag", "Uebersicht oeffentlich-rechtlicher Vertrag"
 *  - Gesetze: VwVfG §§ 54–62 (Volltext geprüft); BGB §§ 125, 134
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-oerv",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Handlungsformen der Verwaltung",
  title: "Öffentlich-rechtlicher Vertrag (§§ 54 ff. VwVfG)",
  description: "Anspruch aus örV: Abgrenzung zum Privatrechtsvertrag, subordinations- und koordinationsrechtlicher Vertrag, Vergleichs- und Austauschvertrag (§§ 55, 56 – Koppelungsverbot!), Schriftform § 57, Nichtigkeitsgründe § 59 II vor § 59 I und die Rechtsfolgen einschließlich Erstattungsanspruch.",
  start: "start",
  stations: [
    { id: "vorliegen", label: "örV?" },
    { id: "formell", label: "Form & Einigung" },
    { id: "nichtig", label: "Nichtigkeit" },
    { id: "folgen", label: "Rechtsfolgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Vertrag wirksam",
    neg: "Ergebnis: Vertrag nichtig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vorliegen",
      kind: "frage",
      norm: "§ 54 S. 1 VwVfG",
      title: "Liegt ein öffentlich-rechtlicher Vertrag vor?",
      text: "Ein Rechtsverhältnis auf dem Gebiet des öffentlichen Rechts kann durch Vertrag begründet, geändert oder aufgehoben werden, soweit Rechtsvorschriften nicht entgegenstehen (§ 54 S. 1 VwVfG).",
      def: "<b>1. Vertragliche (zweiseitige) Regelung:</b> übereinstimmende Willenserklärungen; jeder Beteiligte hatte gleichberechtigten Einfluss auf den Inhalt (Abgrenzung zum mitwirkungsbedürftigen VA!).<br><b>2. Auf dem Gebiet des öffentlichen Rechts:</b> maßgeblich ist der <b>Vertragsgegenstand</b> – ist die geschuldete (Haupt-)Leistung dem öffentlichen Recht zuzuordnen? Bei mehreren Regelungen entscheidet der Gesamtcharakter.<br><br>Ist der Gegenstand privatrechtlich, liegt ein privatrechtlicher Vertrag vor → Zivilrechtsweg (§ 13 GVG).",
      options: [
        { label: "Zweiseitige Regelung mit ö.-r. Gegenstand", next: "q_art", tone: "pos" },
        { label: "Privatrechtlicher Vertragsgegenstand", next: "e_privat", tone: "neg" },
        { label: "Einseitige Regelung", detail: "dann VA – anderes Schema", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_art: {
      station: "vorliegen",
      kind: "frage",
      norm: "§ 54 S. 2, §§ 55, 56 VwVfG",
      title: "Subordinations- oder koordinationsrechtlicher Vertrag?",
      def: "<b>Subordinationsrechtlicher Vertrag (§ 54 S. 2):</b> Die Behörde schließt den Vertrag mit jemandem, an den sie sonst einen VA richten würde (Über-/Unterordnungsverhältnis). Nur für ihn gelten §§ 55, 56 und § 59 II!<br>• <b>Vergleichsvertrag (§ 55):</b> Beseitigung einer bei verständiger Würdigung bestehenden Ungewissheit durch gegenseitiges Nachgeben,<br>• <b>Austauschvertrag (§ 56):</b> der Bürger verspricht eine Gegenleistung für die Leistung der Behörde.<br><br><b>Koordinationsrechtlicher Vertrag:</b> zwischen prinzipiell gleichgeordneten Rechtsträgern (z. B. zwei Gemeinden – Zweckvereinbarung).",
      options: [
        { label: "Subordinationsrechtlich (Behörde ↔ Bürger)", next: "q_form", set: { subordination: true }, tone: "neutral" },
        { label: "Koordinationsrechtlich (gleichgeordnete Träger)", next: "q_form", tone: "neutral" }
      ]
    },

    q_form: {
      station: "formell",
      kind: "frage",
      norm: "§ 57, § 58 VwVfG",
      title: "Sind Schriftform und erforderliche Zustimmungen gewahrt?",
      def: "<b>Formelle Anforderungen:</b><br>• <b>Zuständigkeit</b> der handelnden Behörde (Fachgesetze),<br>• <b>Schriftform (§ 57 VwVfG):</b> soweit nicht durch Rechtsvorschrift eine andere Form vorgeschrieben ist (z. B. notarielle Beurkundung bei Grundstücksübertragung, § 311b BGB über § 62 S. 2 VwVfG). Verstoß → Nichtigkeit nach § 59 I VwVfG i. V. m. § 125 BGB!<br>• <b>Zustimmung Dritter und anderer Behörden (§ 58 VwVfG):</b> Ein Vertrag, der in Rechte eines Dritten eingreift, wird erst mit dessen schriftlicher Zustimmung wirksam (§ 58 I); Ersetzt der Vertrag einen VA, der der Genehmigung/Mitwirkung einer anderen Behörde bedarf, gilt Entsprechendes (§ 58 II).",
      options: [
        { label: "Ja, Form und Zustimmungen gewahrt", next: "q_einigung", tone: "pos" },
        { label: "Schriftform verletzt", next: "e_nichtig_form", tone: "neg" },
        { label: "Zustimmung Dritter fehlt (noch)", next: "e_schwebend", tone: "warn" }
      ]
    },

    q_einigung: {
      station: "formell",
      kind: "frage",
      norm: "§ 62 S. 2 VwVfG i. V. m. §§ 145 ff. BGB",
      title: "Liegt eine wirksame Einigung vor?",
      def: "Auch der örV setzt zwei übereinstimmende <b>Willenserklärungen</b> voraus – Angebot und Annahme. Über § 62 S. 2 VwVfG gelten ergänzend die Vorschriften des BGB entsprechend: §§ 145 ff. BGB (Vertragsschluss), §§ 164 ff. BGB (Stellvertretung), §§ 116 ff. BGB (Willensmängel, Anfechtung).",
      options: [
        { label: "Ja, Einigung wirksam", next: "@nichtig_weiche", tone: "pos" },
        { label: "Nein, kein wirksamer Konsens", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_59_2: {
      station: "nichtig",
      kind: "frage",
      norm: "§ 59 II VwVfG",
      title: "Nichtigkeit des subordinationsrechtlichen Vertrags (§ 59 II)?",
      text: "§ 59 II VwVfG ist lex specialis und daher VOR § 59 I VwVfG zu prüfen – er gilt nur für subordinationsrechtliche Verträge.",
      def: "<b>Nichtig ist der Vertrag, wenn (§ 59 II VwVfG):</b><br><b>Nr. 1:</b> ein VA entsprechenden Inhalts <b>nichtig</b> wäre (§ 44 VwVfG – z. B. tatsächliche Unmöglichkeit),<br><b>Nr. 2:</b> ein VA entsprechenden Inhalts nicht nur wegen eines Verfahrens-/Formfehlers i. S. d. § 46 <b>rechtswidrig</b> wäre und dies <b>den Vertragschließenden bekannt</b> war (kollusives Zusammenwirken),<br><b>Nr. 3:</b> die Voraussetzungen eines <b>Vergleichsvertrags</b> (§ 55) nicht vorlagen UND ein VA entsprechenden Inhalts rechtswidrig wäre (keine Ungewissheit oder kein gegenseitiges Nachgeben),<br><b>Nr. 4:</b> sich die Behörde beim <b>Austauschvertrag</b> eine nach § 56 <b>unzulässige Gegenleistung</b> versprechen lässt.",
      hint: "Nr. 4 ist oft der Schwerpunkt – weiter zur Detailprüfung des § 56.",
      options: [
        { label: "Nr. 1 oder Nr. 2 erfüllt", next: "e_nichtig_59_2", tone: "neg" },
        { label: "Nr. 3: Scheinvergleich + rechtswidriger Inhalt", next: "e_nichtig_59_2", tone: "neg" },
        { label: "Austauschvertrag – § 56 prüfen (Nr. 4)", next: "q_56", tone: "warn" },
        { label: "Kein Fall des § 59 II", next: "q_59_1", tone: "pos" }
      ]
    },

    q_56: {
      station: "nichtig",
      kind: "frage",
      norm: "§ 56 VwVfG",
      title: "Ist die Gegenleistung des Bürgers nach § 56 VwVfG zulässig?",
      def: "<b>Steht die Leistung der Behörde in ihrem ERMESSEN (§ 56 I):</b> Die Gegenleistung muss<br>• für einen <b>bestimmten Zweck</b> vereinbart sein,<br>• der Behörde zur <b>Erfüllung ihrer öffentlichen Aufgaben</b> dienen,<br>• <b>angemessen</b> sein (VHM; hat sich der Bürger eingelassen, ist i. d. R. von Angemessenheit auszugehen) und<br>• im <b>sachlichen Zusammenhang</b> mit der Leistung der Behörde stehen (<b>Koppelungsverbot!</b>).<br><br><b>Besteht auf die Leistung ein ANSPRUCH (§ 56 II):</b> Nur eine solche Gegenleistung ist zulässig, die bei Erlass eines VA Inhalt einer Nebenbestimmung nach § 36 VwVfG sein könnte.",
      options: [
        { label: "Gegenleistung zulässig", next: "q_59_1", tone: "pos" },
        { label: "Koppelungsverbot / Unangemessenheit – unzulässig", next: "e_nichtig_59_2", tone: "neg" }
      ]
    },

    q_59_1: {
      station: "nichtig",
      kind: "frage",
      norm: "§ 59 I VwVfG i. V. m. § 134 BGB",
      title: "Nichtigkeit nach § 59 I VwVfG (alle örV)?",
      def: "Der örV ist nichtig, wenn sich die Nichtigkeit aus der <b>entsprechenden Anwendung des BGB</b> ergibt – v. a.:<br>• <b>§ 125 BGB</b> (Formmangel),<br>• <b>§ 134 BGB</b> (Verstoß gegen ein gesetzliches Verbot): Erforderlich ist ein qualifizierter Verstoß – Abwägung zwischen Vertragsverbindlichkeit und dem von der verletzten Norm geschützten Interesse; Verbotsgesetz nur, wenn die Gültigkeit des Vertrags „unerträglich“ wäre, insb. wenn das Gesetz Inhalt oder Handlungsform klar und unmissverständlich verbietet (z. B. Vertragsformverbot bei der Beamtenernennung, Vereinbarungen in Abgabenangelegenheiten),<br>• <b>§ 138 BGB</b> (Sittenwidrigkeit), §§ 116 ff. BGB.<br><br><b>Merke:</b> Ein NUR rechtswidriger örV (unterhalb der Nichtigkeitsschwelle) bleibt WIRKSAM – anders als beim VA gibt es keine bloße „Aufhebbarkeit“!",
      options: [
        { label: "Kein Nichtigkeitsgrund", next: "q_folgen", tone: "pos" },
        { label: "Verbotsgesetz / Formmangel / Sittenwidrigkeit", next: "e_nichtig_59_1", tone: "neg" }
      ]
    },

    q_folgen: {
      station: "folgen",
      kind: "frage",
      norm: "§§ 60–62 VwVfG",
      title: "Ist der Anspruch untergegangen oder undurchsetzbar?",
      def: "Der wirksame Vertrag begründet die vereinbarten Leistungsansprüche (Anspruch entstanden). Weiter zu prüfen:<br><br><b>Anspruch untergegangen?</b><br>• Erfüllung und Surrogate (§ 62 S. 2 VwVfG i. V. m. §§ 362 ff. BGB),<br>• Leistungsstörungen (§§ 275, 280 ff., 320 ff. BGB entsprechend),<br>• <b>Kündigung wegen wesentlicher Änderung der Verhältnisse (§ 60 I VwVfG):</b> Anpassung oder Kündigung, wenn die Verhältnisse sich seit Vertragsschluss so wesentlich geändert haben, dass das Festhalten unzumutbar ist; die Behörde kann auch kündigen, um schwere Nachteile für das Gemeinwohl abzuwenden (§ 60 I 2); Kündigung schriftlich mit Begründung (§ 60 II).<br><br><b>Anspruch durchsetzbar?</b> Einreden (§§ 214, 273, 320 BGB entspr.), Treu und Glauben (§ 242 BGB entspr.).<br><br><b>Vollstreckung (§ 61 VwVfG):</b> nur bei ausdrücklicher Unterwerfung; sonst muss auch die Behörde KLAGEN (Leistungsklage) – aus dem örV darf kein VA zur Durchsetzung erlassen werden!",
      options: [
        { label: "Anspruch besteht und ist durchsetzbar", next: "e_wirksam", tone: "pos" },
        { label: "Untergegangen (Erfüllung / Kündigung § 60)", next: "e_untergegangen", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 54 ff. VwVfG",
      title: "Wirksamer örV – Anspruch besteht",
      text: "Der öffentlich-rechtliche Vertrag ist wirksam zustande gekommen (Einigung, Schriftform, keine Nichtigkeitsgründe nach § 59 II/I VwVfG). Der geltend gemachte Leistungsanspruch ist entstanden, nicht untergegangen und durchsetzbar.\n\nDurchsetzung: allgemeine Leistungsklage vor dem Verwaltungsgericht (§ 40 I VwGO – öffentlich-rechtliche Streitigkeit); Vollstreckung nach § 61 VwVfG nur bei Unterwerfungserklärung, sonst aus dem Urteil (§ 168 ff. VwGO)."
    },

    e_privat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 13 GVG",
      title: "Privatrechtlicher Vertrag",
      text: "Der Vertragsgegenstand ist dem Privatrecht zuzuordnen. Es gelten die Vorschriften des BGB unmittelbar; für Streitigkeiten ist der Zivilrechtsweg eröffnet (§ 13 GVG). Beachte bei Leistungsverwaltung die Zwei-Stufen-Theorie: das „Ob“ der Vergabe bleibt öffentlich-rechtlich."
    },

    e_kein_vertrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 145 ff. BGB entspr.",
      title: "Kein wirksamer Vertragsschluss",
      text: "Es fehlt an übereinstimmenden Willenserklärungen bzw. an einer zweiseitigen Regelung. Ein Anspruch aus Vertrag scheidet aus; zu prüfen bleibt, ob ein VA (ggf. mitwirkungsbedürftig) oder eine Zusicherung vorliegt."
    },

    e_schwebend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Ergebnis: schwebend unwirksam",
      norm: "§ 58 VwVfG",
      title: "Schwebende Unwirksamkeit bis zur Zustimmung",
      text: "Der Vertrag greift in Rechte eines Dritten ein bzw. ersetzt einen mitwirkungsbedürftigen VA. Er wird erst wirksam, wenn der Dritte schriftlich zustimmt bzw. die andere Behörde in der vorgeschriebenen Form mitwirkt (§ 58 VwVfG). Bis dahin bestehen keine durchsetzbaren Ansprüche."
    },

    e_nichtig_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 59 I VwVfG i. V. m. § 125 BGB",
      title: "Vertrag nichtig: Schriftformverstoß",
      text: "Die nach § 57 VwVfG gebotene Schriftform (bzw. die speziellere Form, z. B. notarielle Beurkundung nach § 311b BGB) wurde nicht gewahrt – der Vertrag ist nach § 59 I VwVfG i. V. m. § 125 BGB nichtig.\n\nBereits erbrachte Leistungen sind über den allgemeinen öffentlich-rechtlichen Erstattungsanspruch rückabzuwickeln (eigenes Schema „Folgenbeseitigung & Erstattung“)."
    },

    e_nichtig_59_2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 59 II VwVfG",
      title: "Subordinationsrechtlicher Vertrag nichtig (§ 59 II)",
      text: "Ein Nichtigkeitsgrund des § 59 II VwVfG liegt vor (nichtiger VA-Inhalt, beidseitig bekannte Rechtswidrigkeit, Scheinvergleich oder unzulässige Gegenleistung nach § 56 – Koppelungsverbot).\n\nFolgen: Der nichtige Vertrag entfaltet keine Rechtswirkungen. Teilnichtigkeit führt im Zweifel zur Gesamtnichtigkeit (§ 59 III VwVfG). Bereits erbrachte Leistungen werden über den allgemeinen öffentlich-rechtlichen Erstattungsanspruch zurückgefordert."
    },

    e_nichtig_59_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 59 I VwVfG",
      title: "Vertrag nichtig (§ 59 I VwVfG i. V. m. BGB)",
      text: "Die entsprechende Anwendung der BGB-Nichtigkeitsgründe (insb. § 134 BGB – Verbotsgesetz, § 138 BGB, § 125 BGB) führt zur Nichtigkeit des Vertrags. Ist nur ein Teil nichtig, ist der Vertrag im Ganzen nichtig, wenn nicht anzunehmen ist, dass er auch ohne den nichtigen Teil geschlossen worden wäre (§ 59 III VwVfG).\n\nRückabwicklung über den allgemeinen öffentlich-rechtlichen Erstattungsanspruch."
    },

    e_untergegangen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      kicker: "Ergebnis: Anspruch erloschen",
      norm: "§ 60, § 62 S. 2 VwVfG",
      title: "Vertrag wirksam, Anspruch aber untergegangen",
      text: "Der Vertrag war wirksam, der Anspruch ist jedoch durch Erfüllung, Leistungsstörungsrecht oder Kündigung nach § 60 VwVfG (wesentliche Änderung der Verhältnisse / Abwehr schwerer Gemeinwohlnachteile) erloschen. Bei Pflichtverletzungen kommen Sekundäransprüche über § 62 S. 2 VwVfG i. V. m. §§ 280 ff. BGB in Betracht."
    }
  },

  routers: {
    /* § 59 II gilt nur für subordinationsrechtliche Verträge –
       koordinationsrechtliche springen direkt zu § 59 I. */
    "@nichtig_weiche": function (flags) {
      return flags.subordination ? "q_59_2" : "q_59_1";
    }
  }
});
