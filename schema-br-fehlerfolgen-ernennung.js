/*
 * Prüfungsschema: Fehlerfolgen der Ernennung (Überblicks-Weiche)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 3 - Ernennungsrecht" (Minor) 2024/2025, Ziff. 3.6
 *  - Gesetze: BeamtStG §§ 8, 11, 12; LBG §§ 12, 13; VwVfG § 42
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-fehlerfolgen-ernennung",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Fehlerhafte Ernennung",
  title: "Fehlerfolgen der Ernennung (Überblick)",
  description: "Die Weiche für jede fehlerhafte Ernennung: Nichternennung (Nullum) – nichtige Ernennung (§ 11) – teilweise unwirksame Ernennung (§ 8 IV) – wirksame, aber rücknehmbare Ernennung (§ 12) – fehlerhafte, aber wirksame Ernennung; dazu die Wirksamkeit der Amtshandlungen (§§ 12 III, 13 III LBG).",
  start: "start",
  stations: [
    { id: "system", label: "System" },
    { id: "einordnung", label: "Einordnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ernennung wirksam",
    neg: "Ergebnis: unwirksam/nichtig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: rücknehmbar"
  },

  nodes: {

    start: {
      station: "system",
      kind: "frage",
      norm: "§§ 8, 11, 12 BeamtStG",
      title: "Das System der Fehlerfolgen (abschließend!)",
      def: "Verstößt Zustandekommen oder Inhalt der Ernennung gegen Rechtsvorschriften, richten sich die Folgen <b>ausschließlich</b> nach den <b>§§ 11, 12 und 8 BeamtStG</b> (i. V. m. §§ 12, 13 LBG) – <b>abschließende Spezialregelungen</b> mit Rücksicht auf <b>Rechtssicherheit und Ämterstabilität</b>; sie verdrängen das VwVfG (insb. §§ 44, 48).<br><br><b>Andere</b> als die dort genannten Mängel berühren die Gültigkeit <b>nicht</b>!<br><br>Fünf mögliche Rechtsfolgen:<br>• <b>Nichternennung</b> („Nullum“ – noch weniger als nichtig),<br>• <b>nichtige</b> Ernennung (§ 11 – rechtlich existent, aber ohne Wirksamkeit),<br>• <b>teilweise unwirksame</b> Ernennung (§ 8 IV – Rückwirkung),<br>• zunächst wirksame, aber <b>rücknehmbare</b> Ernennung (§ 12),<br>• <b>fehlerhafte, aber wirksame</b> Ernennung („nicht so schlimm“).",
      options: [
        { label: "Fehler einordnen", next: "q_einordnung", tone: "pos" }
      ]
    },

    q_einordnung: {
      station: "einordnung",
      kind: "frage",
      norm: "§§ 8, 11, 12 BeamtStG",
      title: "Welcher Fehler liegt vor?",
      def: "<b>Fehlersuche</b> anhand des Sachverhalts (Urkundenwortlaut, Zuständigkeit, Person, Verfahren) und Zuordnung:<br><br>• <b>Wesensmängel</b> (Dienstherrnfähigkeit, Unterschrift, Einwilligung, Aushändigung, BV-Art) → Nichternennung,<br>• <b>Katalog des § 11 I</b> (Urkundenformulierung/-form, sachliche Unzuständigkeit, Staatsangehörigkeit, Ämterfähigkeit, unwirksame Wahl) → Nichtigkeit (Heilung prüfen!),<br>• <b>rückwirkender Wirksamkeitstag</b> → § 8 IV („insoweit“ unwirksam),<br>• <b>Katalog des § 12 I</b> (Zwang/arglistige Täuschung/Bestechung; fehlende LPA-/Aufsichtsbehörden-Mitwirkung u. a.) → wirksam, aber zurückzunehmen,<br>• <b>alles andere</b> (fehlende Ausschreibung, fehlender Personalrat, überschrittenes Höchstalter, fehlende Laufbahnbefähigung, Schreibfehler …) → fehlerhaft, aber wirksam.",
      options: [
        { label: "Wesensmangel (Nullum)", next: "e_nullum", tone: "neg" },
        { label: "§ 11-Katalog (Nichtigkeit)", next: "e_nichtig", tone: "neg" },
        { label: "§ 12-Katalog (Rücknahme)", next: "e_ruecknahme", tone: "warn" },
        { label: "Sonstiger Fehler", next: "e_wirksam", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_nullum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 8 II BeamtStG",
      title: "Nichternennung (Nullum)",
      text: "Es fehlt an einem Wesensmerkmal – ein Beamtenverhältnis ist überhaupt nicht entstanden:\n(1) Dienstherrnfähigkeit der Behörde, (2) Urkundenform/eigenhändige Unterschrift, (3) wirksame Einwilligung, (4) ordnungsgemäße Aushändigung oder (5) ernennungsfähiges Beamtenverhältnis (§ 4 BeamtStG abschließend).\n\nVAs werden erst mit Bekanntgabe rechtlich existent – ohne (wirksame) Aushändigung liegt ein Nicht-VA vor.\n\nPraktische Abwicklung wie bei der Nichtigkeit: Amtshandlungen des \"Scheinbeamten\" sind aus Vertrauensschutzgründen nach außen voll gültig (§ 12 III LBG analog); gezahlte Leistungen können belassen werden; ggf. faktisches Dienstverhältnis (Details im Ergebnis \"Nichtig\").\n\nHeilung: nicht möglich – die Ernennung muss korrekt neu vollzogen werden."
    },

    e_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 11 BeamtStG, § 12 I LBG",
      title: "Nichtige Ernennung (§ 11 BeamtStG)",
      text: "Die Ernennung ist rechtlich existent, erlangt aber weder äußere noch innere Wirksamkeit (vgl. § 43 III VwVfG) – wenn ein Nichtigkeitsgrund des § 11 I vorliegt UND keine Heilung nach § 11 II erfolgt (Detailprüfung: Schema \"Nichtigkeit der Ernennung\").\n\nFOLGEN:\n• Die Unwirksamkeit ist ohne förmliche Feststellung von jedermann zu beachten; aus Gründen der Rechtssicherheit ist die Nichtigkeit dem Beamten aber SCHRIFTLICH bekanntzugeben (§ 12 I LBG; Rechtsgedanke § 44 V VwVfG) und die Fortführung der Dienstgeschäfte zu verbieten,\n• AMTSHANDLUNGEN des Scheinbeamten sind nach außen in gleicher Weise gültig, wie wenn die Ernennung wirksam gewesen wäre (§ 12 III LBG) – Vertrauensschutz für die Bürger!,\n• GEZAHLTE LEISTUNGEN (Besoldung) können belassen werden (§ 12 III 2 LBG); es liegt eine Leistung ohne Rechtsgrund vor (§ 812 BGB) – Rückforderung im Einzelfall prüfen (§ 16 II LBesG),\n• nach h. M. besteht bei tatsächlicher Dienstaufnahme ein FAKTISCHES öffentlich-rechtliches Dienstverhältnis eigener Art mit Gehaltsanspruch; eine Umdeutung in ein privatrechtliches Arbeitsverhältnis ist NICHT möglich."
    },

    e_ruecknahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 12 BeamtStG, § 13 LBG",
      title: "Wirksam, aber zurückzunehmen (§ 12 BeamtStG)",
      text: "Die Fälle des § 12 BeamtStG führen NICHT automatisch zur Unwirksamkeit: Ohne Rücknahme ist und bleibt die Ernennung WIRKSAM! Erst die Rücknahmeverfügung (selbst ein VA) beseitigt die Wirksamkeit mit Wirkung für die Vergangenheit (\"ex tunc\").\n\n§ 12 BeamtStG ist lex specialis zu § 48 VwVfG (der bei Ernennungen NICHT herangezogen werden darf).\n\nPraxisrelevante Rücknahmegründe:\n• § 12 I Nr. 1: Herbeiführung durch ZWANG, ARGLISTIGE TÄUSCHUNG oder BESTECHUNG (+ Kausalität),\n• § 12 I Nr. 4: unterbliebene landesrechtlich vorgeschriebene MITWIRKUNG des LPA oder der Aufsichtsbehörde (nicht erfolgreich nachgeholt).\n\nDie vollständige Prüfung (formell/materiell, Fristen des § 13 LBG, Wirkung) im Schema \"Rücknahme der Ernennung\".\n\nAmtshandlungen bleiben auch hier nach außen gültig, Leistungen können belassen werden (§ 13 III i. V. m. § 12 III LBG)."
    },

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 11, 12 BeamtStG (Umkehrschluss), § 42 VwVfG",
      title: "Fehlerhaft, aber wirksam (Ämterstabilität)",
      text: "Leidet die Urkunde an einem Fehler, der weder nach § 11 zur Nichtigkeit führt noch nach § 12 zur Rücknahme berechtigt, ist die Ernennung WIRKSAM – Grundsatz der Ämterstabilität.\n\nTypische \"nicht so schlimme\" Fehler:\n• SCHREIBFEHLER und offenbare Unrichtigkeiten (Datum \"01.01.2032\" statt 2023; falsch geschriebener Name \"Meier\"/\"Maier\"; vergessener Bindestrich) → nach dem Rechtsgedanken des § 42 VwVfG jederzeit korrigierbar. Abgrenzung: offenbar unrichtig ist der Widerspruch zwischen Gewolltem und Erklärtem nur, wenn ohne Weiteres erkennbar ist, was die Behörde POSITIV wollte,\n• RECHENFEHLER/ADV-Fehler (Besoldungshöhe 34.567,80 € statt 3.456,78 €),\n• Verfahrensfehler außerhalb der Kataloge: unterbliebene AUSSCHREIBUNG, fehlende PERSONALRATS-, Gleichstellungs- oder Gremienbeteiligung (ausdrücklich KEIN Fall des § 12 I Nr. 4 – dort zählen nur LPA und Aufsichtsbehörde!),\n• materielle Mängel außerhalb der Kataloge: Höchstalter überschritten, Laufbahnbefähigung oder Planstelle fehlt, Probezeit nicht abgeleistet.\n\nKonsequenz: Der Beamte ist und bleibt Beamter; Konsequenzen allenfalls disziplinar-/haftungsrechtlich auf Behördenseite oder im Konkurrentenstreit (vor Aushändigung!)."
    }
  }
});
