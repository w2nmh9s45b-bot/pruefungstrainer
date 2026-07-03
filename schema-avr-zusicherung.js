/*
 * Prüfungsschema: Zusage und Zusicherung (§ 38 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "FS II – 4. Zusage, Zusicherung" (Dr. Steffen Schmidt – Begriff, Rechtsnatur,
 *    Wirksamkeit, § 38 II und III)
 *  - "2.2.2 Skript OLE 10 Zusage und Zusicherung"
 *  - Gesetze: VwVfG § 38 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-zusicherung",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Handlungsformen der Verwaltung",
  title: "Zusicherung (§ 38 VwVfG)",
  description: "Abgrenzung Zusage/Zusicherung/Auskunft, Rechtsbindungswille, Wirksamkeitsvoraussetzungen (zuständige Behörde, Schriftform, Beteiligung), Aufhebung nach § 38 II und Wegfall der Bindung bei Änderung der Sach- oder Rechtslage (§ 38 III).",
  start: "start",
  stations: [
    { id: "begriff", label: "Begriff" },
    { id: "wirksam", label: "Wirksamkeit" },
    { id: "bindung", label: "Bindung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Bindung besteht",
    neg: "Ergebnis: keine Bindung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "§ 38 I 1 VwVfG",
      title: "Liegt eine Zusicherung vor?",
      def: "<b>Zusage</b> = verbindliche Selbstverpflichtung der Behörde zu einem bestimmten künftigen Tun, Dulden oder Unterlassen.<br><b>Zusicherung (§ 38 I 1 VwVfG)</b> = Unterfall der Zusage: die Zusage, einen bestimmten <b>VA später zu erlassen oder zu unterlassen</b>. Nach h. M. ist die Zusicherung selbst ein VA.<br><br><b>Erforderlich:</b> Rechtsbindungswille – durch Auslegung zu ermitteln (§ 133 BGB analog).<br><b>Abzugrenzen:</b><br>• bloße <b>Auskunft</b>/unverbindliche Erklärung (kein Bindungswille),<br>• politische Absichtserklärung,<br>• unmittelbare Sachregelung (die beantragte Subvention wird schon GEWÄHRT – dann Haupt-VA),<br>• Vorbescheid (regelt einen Teil verbindlich, z. B. Bauvorbescheid § 72 LBauO).",
      options: [
        { label: "Selbstverpflichtung zum Erlass/Unterlassen eines VA mit Bindungswillen", next: "q_wirksam", tone: "pos" },
        { label: "Bloße Auskunft / Absichtserklärung", next: "e_keine_zusicherung", tone: "neg" },
        { label: "Bereits unmittelbare Sachregelung", detail: "dann liegt schon der VA selbst vor", next: "e_sachregelung", tone: "warn" }
      ]
    },

    q_wirksam: {
      station: "wirksam",
      kind: "frage",
      norm: "§ 38 I 1 VwVfG",
      title: "Ist die Zusicherung wirksam erteilt worden?",
      def: "<b>Wirksamkeitsvoraussetzungen (§ 38 I 1 VwVfG):</b><br>• Erteilung durch die <b>zuständige Behörde</b>,<br>• <b>SCHRIFTFORM</b> – eine mündliche Zusicherung ist UNWIRKSAM (Wirksamkeitsvoraussetzung, nicht bloße Ordnungsvorschrift!).<br><br><b>Verfahren (§ 38 I 2 VwVfG):</b> Ist vor dem Erlass des zugesicherten VA die Anhörung Beteiligter oder die Mitwirkung einer anderen Behörde/eines Ausschusses vorgeschrieben, darf die Zusicherung erst NACH Anhörung bzw. Mitwirkung gegeben werden.",
      hint: "Ein Anspruch auf Erteilung einer Zusicherung besteht grundsätzlich nicht – sie steht im Ermessen der Behörde.",
      options: [
        { label: "Zuständige Behörde + Schriftform gewahrt", next: "q_rechtmaessig", tone: "pos" },
        { label: "Nur mündlich erteilt", next: "e_unwirksam_form", tone: "neg" },
        { label: "Unzuständige Behörde", next: "e_unwirksam_zust", tone: "neg" }
      ]
    },

    q_rechtmaessig: {
      station: "bindung",
      kind: "frage",
      norm: "§ 38 II VwVfG",
      title: "Ist die Zusicherung aufgehoben worden?",
      def: "Auf die Zusicherung sind die VA-Vorschriften entsprechend anzuwenden (§ 38 II VwVfG, nach h. M. klarstellend):<br>• <b>Nichtigkeit:</b> § 44 VwVfG entsprechend,<br>• <b>Heilung:</b> § 45 VwVfG entsprechend,<br>• <b>Rücknahme</b> einer rechtswidrigen Zusicherung: § 48 VwVfG entsprechend,<br>• <b>Widerruf</b> einer rechtmäßigen Zusicherung: § 49 VwVfG entsprechend.<br><br>Eine rechtswidrige, aber nicht nichtige und nicht zurückgenommene Zusicherung bleibt WIRKSAM und bindet die Behörde!",
      options: [
        { label: "Nicht aufgehoben, nicht nichtig", next: "q_38_3", tone: "pos" },
        { label: "Zurückgenommen / widerrufen (§§ 48, 49 entspr.)", next: "e_aufgehoben", tone: "neg" },
        { label: "Nichtig (§ 44 entspr.)", next: "e_aufgehoben", tone: "neg" }
      ]
    },

    q_38_3: {
      station: "bindung",
      kind: "frage",
      norm: "§ 38 III VwVfG",
      title: "Hat sich die Sach- oder Rechtslage nachträglich geändert?",
      def: "<b>Wegfall der Bindung (§ 38 III VwVfG):</b> Ändert sich nach Abgabe der Zusicherung die Sach- oder Rechtslage derart, dass die Behörde bei Kenntnis der nachträglich eingetretenen Änderung<br>• die Zusicherung <b>nicht gegeben hätte</b> (1. Alt.) oder<br>• sie aus rechtlichen Gründen <b>nicht hätte geben dürfen</b> (2. Alt.),<br>ist die Behörde an die Zusicherung <b>nicht mehr gebunden</b> – kraft Gesetzes, ohne dass es einer Aufhebung bedarf!<br><br>§ 38 III ist Spezialregelung gegenüber § 49 II 1 Nr. 3 und 4 VwVfG.<br><br><b>Beispiele:</b> Änderung der Subventionspolitik, wesentliche Verschlechterung der Haushaltslage, Rechtsänderung. KEINE Änderung i. d. S.: Die Behörde erkennt nur nachträglich, dass die Sach-/Rechtslage von Anfang an anders war (dann ggf. Rücknahme nach § 48 entspr.).",
      options: [
        { label: "Nein, Sach- und Rechtslage unverändert", next: "e_bindung", tone: "pos" },
        { label: "Ja, relevante Änderung eingetreten", next: "e_38_3", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bindung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 38 VwVfG",
      title: "Die Zusicherung bindet – Anspruch auf den zugesicherten VA",
      text: "Die Zusicherung wurde wirksam erteilt (zuständige Behörde, Schriftform), ist weder aufgehoben noch nichtig, und die Bindung ist nicht nach § 38 III VwVfG entfallen.\n\nDer Begünstigte hat einen ANSPRUCH auf Erlass des zugesicherten VA – Anspruchsgrundlage ist die Zusicherung selbst. Durchsetzung: Verpflichtungswiderspruch und Verpflichtungsklage (§ 42 I Alt. 2 VwGO). Auch bei Ermessens-VA führt die wirksame Zusicherung zur Selbstbindung (Ermessensreduzierung auf Null)."
    },

    e_keine_zusicherung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 I VwVfG",
      title: "Keine Zusicherung – keine Bindung",
      text: "Es fehlt der Rechtsbindungswille: Eine bloße Auskunft, Beratung oder politische Absichtserklärung verpflichtet die Behörde nicht zum Erlass des VA.\n\nBei FALSCHER Auskunft kommen aber Amtshaftungsansprüche in Betracht (§ 839 BGB i. V. m. Art. 34 GG – Pflicht zur richtigen und vollständigen Auskunft, eigenes Schema)."
    },

    e_sachregelung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 35 VwVfG",
      title: "Unmittelbare Sachregelung – der VA liegt bereits vor",
      text: "Die Erklärung der Behörde regelt die Sache bereits selbst (z. B. Bewilligung der Subvention) oder verbindlich in Teilen (Vorbescheid). Dann gelten unmittelbar die Regeln über den VA – einer Zusicherung bedarf es nicht mehr."
    },

    e_unwirksam_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 I 1 VwVfG",
      title: "Zusicherung unwirksam: Schriftform fehlt",
      text: "Die mündliche „Zusicherung“ ist mangels Schriftform unwirksam (§ 38 I 1 VwVfG) – die Schriftform ist Wirksamkeitsvoraussetzung. Ein Anspruch auf den VA lässt sich daraus nicht herleiten.\n\nBeachte: Eine zu gerichtlichem Protokoll erklärte Selbstverpflichtung der Behörde (z. B. im Prozessvergleich) wahrt nach h. M. die Schriftform (§ 62 S. 2 VwVfG i. V. m. § 127a BGB-Rechtsgedanke)."
    },

    e_unwirksam_zust: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 I 1 VwVfG",
      title: "Zusicherung unwirksam: unzuständige Behörde",
      text: "Die Zusicherung wurde nicht von der für den Erlass des zugesicherten VA zuständigen Behörde erteilt. Sie bindet nicht; ein Vertrauensschaden kann allenfalls über die Amtshaftung liquidiert werden."
    },

    e_aufgehoben: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 II i. V. m. §§ 44, 48, 49 VwVfG",
      title: "Zusicherung beseitigt – keine Bindung mehr",
      text: "Die Zusicherung ist nichtig oder wurde nach den entsprechend anwendbaren §§ 48, 49 VwVfG zurückgenommen bzw. widerrufen (dabei gelten Vertrauensschutz und Jahresfrist entsprechend – Schema „Rücknahme und Widerruf“). Ein Anspruch auf den zugesicherten VA besteht nicht mehr."
    },

    e_38_3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 III VwVfG",
      title: "Bindung kraft Gesetzes entfallen (§ 38 III VwVfG)",
      text: "Wegen der nachträglichen Änderung der Sach- oder Rechtslage ist die Behörde an die Zusicherung nicht mehr gebunden – automatisch, ohne Aufhebungsakt. Der Bürger kann den zugesicherten VA nicht mehr beanspruchen; Vertrauensinvestitionen sind ggf. über Entschädigungsansprüche abzuwickeln."
    }
  },

  routers: {}
});
