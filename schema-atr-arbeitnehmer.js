/*
 * Prüfungsschema: Arbeitnehmereigenschaft (§ 611a BGB)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 1.5 (Arbeitnehmer, Arbeitgeber,
 *    Arbeitnehmergruppen, Ausnahmen) und 1.6.2 (Abgrenzung Dienst-/Werkvertrag)
 *  - Gesetze: BGB § 611a (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-arbeitnehmer",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Grundlagen des Arbeits- und Tarifrechts",
  title: "Arbeitnehmereigenschaft (§ 611a BGB)",
  description: "Ist die Person Arbeitnehmer/in? Privatrechtlicher Vertrag, Arbeit im Dienst eines anderen, Weisungsgebundenheit und persönliche Abhängigkeit (Gesamtbetrachtung), Abgrenzung zu Beamten, Selbstständigen, Werkunternehmern; Arbeitnehmergruppen (Azubis, Volontäre, Praktikanten).",
  start: "start",
  stations: [
    { id: "vertrag", label: "Vertrag" },
    { id: "arbeit", label: "Arbeitsleistung" },
    { id: "abhaengig", label: "Abhängigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Arbeitnehmer/in",
    neg: "Ergebnis: kein/e Arbeitnehmer/in",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vertrag",
      kind: "frage",
      norm: "§ 611a I 1 BGB",
      title: "Liegt ein privatrechtlicher Vertrag zugrunde?",
      text: "§ 611a I 1 BGB: Durch den Arbeitsvertrag wird der Arbeitnehmer im Dienste eines anderen zur Leistung weisungsgebundener, fremdbestimmter Arbeit in persönlicher Abhängigkeit verpflichtet.",
      def: "<b>Arbeitnehmer</b> = wer aufgrund eines <b>privatrechtlichen Vertrages</b> im Dienste eines anderen zur Leistung weisungsgebundener, fremdbestimmter Arbeit in persönlicher Abhängigkeit verpflichtet ist (§ 611a I BGB).<br><br>Die drei Grundelemente des Arbeitnehmerbegriffs:<br>1. <b>privatrechtlicher Vertrag</b>,<br>2. <b>Leistung von Arbeit</b>,<br>3. <b>im Dienst eines Anderen</b> (fremdbestimmt, persönlich abhängig).<br><br><b>KEIN privatrechtlicher Vertrag:</b><br>• <b>Beamte</b> (öffentlich-rechtliches Dienst- und Treueverhältnis, Begründung durch Ernennung),<br>• Richter, Soldaten,<br>• Arbeit im Rahmen des <b>Familienverhältnisses</b> (familienrechtliche Mitarbeitspflicht, kein Vertrag).",
      options: [
        { label: "Ja, privatrechtlicher Vertrag", next: "q_arbeit", tone: "pos" },
        { label: "Nein, Ernennung zum Beamten", next: "e_beamter", tone: "neg" },
        { label: "Mitarbeit im Familienverhältnis", next: "e_familie", tone: "neg" }
      ]
    },

    q_arbeit: {
      station: "arbeit",
      kind: "frage",
      norm: "§ 611a I BGB / §§ 611, 631 BGB",
      title: "Wird ARBEIT im Dienst eines anderen geschuldet (nicht ein Erfolg)?",
      def: "Geschuldet sein muss die <b>Tätigkeit als solche</b> (Arbeitsleistung), nicht ein bestimmter Erfolg.<br><br><b>Abgrenzung:</b><br>• <b>Werkvertrag (§§ 631 ff. BGB):</b> geschuldet ist ein bestimmter <b>Erfolg</b> (z. B. fertiges Gutachten, reparierte Heizung) → kein Arbeitsverhältnis.<br>• <b>Selbstständiger Dienstvertrag (§§ 611 ff. BGB):</b> Dienste werden von <b>Selbstständigen</b> geleistet (Rechtsanwalt, freischaffender Architekt, Arzt) – Tätigkeit ja, aber ohne persönliche Abhängigkeit.<br>• <b>Arbeitsvertrag (§ 611a BGB):</b> Unterfall des Dienstvertrags – Arbeit in persönlicher Abhängigkeit.<br><br>Der Arbeitsvertrag ist ein privatrechtlicher, schuldrechtlicher, gegenseitiger <b>Austauschvertrag</b>: Arbeit gegen Vergütung (§ 611a I, II BGB) – daneben Treue- und Fürsorgepflichten als Nebenpflichten.",
      options: [
        { label: "Tätigkeit im Dienst eines anderen geschuldet", next: "q_weisung", tone: "pos" },
        { label: "Bestimmter Erfolg geschuldet (Werkvertrag)", next: "e_werkvertrag", tone: "neg" }
      ]
    },

    q_weisung: {
      station: "abhaengig",
      kind: "frage",
      norm: "§ 611a I 2-4 BGB",
      title: "Ist die Arbeit weisungsgebunden und fremdbestimmt (persönliche Abhängigkeit)?",
      def: "<b>Weisungsgebunden</b> ist, wer <b>nicht im Wesentlichen frei</b> seine Tätigkeit gestalten und seine Arbeitszeit bestimmen kann (§ 611a I 3 BGB).<br><br>Das Weisungsrecht kann <b>Inhalt, Durchführung, Zeit und Ort</b> der Tätigkeit betreffen (§ 611a I 2 BGB; vgl. § 106 GewO).<br><br><b>Kriterien der persönlichen Abhängigkeit:</b><br>• fremdbestimmte Arbeit, Eingliederung in den Betrieb/die Verwaltung,<br>• Grad der Abhängigkeit hängt auch von der <b>Eigenart der Tätigkeit</b> ab,<br>• erforderlich ist eine <b>Gesamtbetrachtung aller Umstände</b> (§ 611a I 5 BGB).",
      hint: "Merke § 611a I 6 BGB: Entscheidend ist die TATSÄCHLICHE Durchführung des Vertragsverhältnisses – nicht die Bezeichnung im Vertrag! Ein als „freie Mitarbeit\" bezeichneter Vertrag kann in Wahrheit ein Arbeitsvertrag sein (Scheinselbstständigkeit).",
      options: [
        { label: "Ja, weisungsgebunden und persönlich abhängig", next: "q_gruppe", tone: "pos" },
        { label: "Nein, im Wesentlichen freie Gestaltung", next: "e_selbststaendig", tone: "neg" }
      ]
    },

    q_gruppe: {
      station: "abhaengig",
      kind: "frage",
      norm: "§§ 3-19 BBiG, TVAöD/TVPöD",
      title: "Gehört die Person einer besonderen Arbeitnehmergruppe an?",
      def: "<b>Arbeitnehmergruppen:</b><br>• <b>Beschäftigte</b> (früher: Angestellte und Arbeiter) – die Unterscheidung ist rentenrechtlich aufgehoben und in TVöD/TV-L entfallen; der TVöD nennt alle einheitlich „Beschäftigte“.<br>• <b>Auszubildende:</b> erhalten aufgrund eines Berufsausbildungsvertrages (§§ 3–19 BBiG) systematisch eine berufliche Grundausbildung in einem anerkannten Ausbildungsberuf. Ein Berufsausbildungsverhältnis ist <b>kein Arbeitsverhältnis</b> i. e. S. – es gilt der TVAöD.<br>• <b>Volontäre:</b> ohne Azubi-Status zum Zweck der Ausbildung unentgeltlich oder gegen geringe Vergütung beschäftigt.<br>• <b>Praktikanten:</b> unterziehen sich einer bestimmten Tätigkeit und Ausbildung im Betrieb/in der Verwaltung (im öD: TVPöD).",
      options: [
        { label: "Normale/r Beschäftigte/r", next: "e_arbeitnehmer", tone: "pos" },
        { label: "Auszubildende/r, Volontär/in, Praktikant/in", next: "e_sondergruppe", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_arbeitnehmer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 611a BGB",
      title: "Arbeitnehmereigenschaft liegt vor",
      text: "Die Person leistet aufgrund privatrechtlichen Vertrags weisungsgebundene, fremdbestimmte Arbeit in persönlicher Abhängigkeit – sie ist Arbeitnehmer/in i. S. d. § 611a BGB (im TVöD: „Beschäftigte/r\").\n\nFolgen: Das gesamte Arbeitnehmerschutzrecht ist anwendbar (KSchG, BUrlG, EFZG, ArbZG, MuSchG, TzBfG usw.); bei Tarifbindung oder Bezugnahme gilt der TVöD (Schema „Anwendbarkeit des TVöD\").\n\nArbeitgeber ist übrigens, wer einen anderen als Arbeitnehmer beschäftigt (BAG, Urt. v. 21.01.1999 – 2 AZR 648/97) – natürliche oder juristische Person, z. B. eine Gebietskörperschaft wie die Stadt Lahnstein."
    },

    e_sondergruppe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 3-19 BBiG, § 26 BBiG",
      title: "Sondergruppe – Schutzrecht gilt, aber Besonderheiten beachten",
      text: "Auszubildende, Volontäre und Praktikanten sind in die Arbeitsorganisation eingegliedert und genießen weitgehend den Schutz des Arbeitsrechts. Besonderheiten:\n\n• Auszubildende: Berufsausbildungsvertrag nach §§ 3–19 BBiG, im öffentlichen Dienst gilt der TVAöD (nicht der TVöD). Ein Berufsausbildungsverhältnis ist KEIN Arbeitsverhältnis – wichtig für Beschäftigungszeit (§ 34 III TVöD) und Stufenzuordnung (§ 16 II TVöD): Ausbildungszeiten zählen dort nicht.\n• Praktikanten im öD: TVPöD (Sozialarbeiter, Erzieher, Rettungsassistenten); ein Berufspraktikum nach TVPöD gilt ausnahmsweise als einschlägige Berufserfahrung.\n• Nach erfolgreicher Ausbildung und unmittelbarer Übernahme entfällt die Probezeit (§ 2 IV TVöD-Praxis, vgl. Muster-Arbeitsvertrag)."
    },

    e_beamter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 3 I BeamtStG",
      title: "Beamte sind keine Arbeitnehmer",
      text: "Beamte stehen in einem öffentlich-rechtlichen Dienst- und Treueverhältnis, das durch Ernennung (Verwaltungsakt) begründet wird – nicht durch privatrechtlichen Vertrag. Sie fallen nicht unter den persönlichen Geltungsbereich des Arbeitsrechts.\n\nFür sie gelten BeamtStG, LBG RLP und das Besoldungsrecht (LBesG) – siehe die Fächer Beamtenrecht und Besoldungsrecht. Rechtsweg bei Streitigkeiten: Verwaltungsgericht (nicht Arbeitsgericht)."
    },

    e_familie: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 611a BGB (Umkehrschluss)",
      title: "Familienrechtliche Mitarbeit – kein Arbeitsverhältnis",
      text: "Wer Arbeit lediglich im Rahmen des Familienverhältnisses leistet (z. B. Mithilfe im elterlichen Betrieb aufgrund familiärer Verbundenheit, § 1619 BGB), ist kein Arbeitnehmer – es fehlt der privatrechtliche Austauschvertrag.\n\nAbgrenzung im Einzelfall: Wird tatsächlich ein Arbeitsvertrag (auch konkludent) geschlossen und Vergütung gezahlt, kann auch unter Familienangehörigen ein Arbeitsverhältnis bestehen."
    },

    e_werkvertrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 631 ff. BGB",
      title: "Werkvertrag – kein Arbeitsverhältnis",
      text: "Der Werkvertrag zielt auf die Herbeiführung eines bestimmten ERFOLGES ab (§ 631 BGB), nicht auf die Arbeitsleistung als solche. Der Werkunternehmer organisiert seine Leistung selbst und trägt das Unternehmerrisiko – er ist kein Arbeitnehmer.\n\nAber Vorsicht: Bezeichnung ist nicht entscheidend (§ 611a I 6 BGB). Wird der „Werkunternehmer\" tatsächlich wie ein Arbeitnehmer in den Betrieb eingegliedert und nach Weisung tätig (Scheinwerkvertrag), liegt in Wahrheit ein Arbeitsverhältnis vor."
    },

    e_selbststaendig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 611 ff. BGB",
      title: "Selbstständige Tätigkeit – kein Arbeitsverhältnis",
      text: "Wer im Wesentlichen frei seine Tätigkeit gestalten und seine Arbeitszeit bestimmen kann (Umkehrschluss aus § 611a I 3 BGB), ist selbstständig – z. B. Angehörige der freien Berufe (Ärzte, Rechtsanwälte, Architekten) und echte „freie Mitarbeiter\". Es gilt das Recht des (selbstständigen) Dienstvertrags (§§ 611 ff. BGB), kein Arbeitsrecht.\n\nGesamtbetrachtung nicht vergessen: Maßgeblich ist die tatsächliche Durchführung. Stellt sich die „freie Mitarbeit\" als weisungsgebundene, eingegliederte Tätigkeit dar, liegt Scheinselbstständigkeit vor – dann Arbeitsverhältnis mit allen Schutzrechten (und ggf. Nachzahlung von Sozialversicherungsbeiträgen)."
    }
  },

  routers: {}
});
