/*
 * Prüfungsschema: Anwendbarkeit des TVöD (§ 1 TVöD, § 3 TVG)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.1-2.4 (Geltungsbereich TVöD/TV-L,
 *    Tarifgebundenheit, Verweisungsklauseln) und Kap. 1.3.2 (Tarifverträge)
 *  - Lehrplanung FS III PLE 1 ("Anwendbarkeit des TVöD/TV-L fallbezogen prüfen")
 *  - Gesetze: TVöD §§ 1, 38, 39 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-anwendbarkeit",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Grundlagen des Arbeits- und Tarifrechts",
  title: "Anwendbarkeit des TVöD",
  description: "Gilt der TVöD für das Arbeitsverhältnis? Sachlicher, persönlicher, räumlicher und zeitlicher Geltungsbereich (§ 1 TVöD), Tarifgebundenheit durch Mitgliedschaft (§ 3 TVG) und arbeitsvertragliche Bezugnahme (statische/dynamische Verweisung).",
  start: "start",
  stations: [
    { id: "person", label: "Arbeitnehmer" },
    { id: "sachlich", label: "Sachlich" },
    { id: "persoenlich", label: "Tarifbindung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: TVöD anwendbar",
    neg: "Ergebnis: TVöD nicht anwendbar",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "person",
      kind: "frage",
      norm: "§ 611a BGB / § 1 I TVöD",
      title: "Steht die Person überhaupt in einem Arbeitsverhältnis?",
      def: "Der TVöD gilt nur für <b>Arbeitnehmerinnen und Arbeitnehmer</b> – im TVöD „<b>Beschäftigte</b>“ genannt (§ 1 I TVöD).<br><br><b>Arbeitnehmer (§ 611a BGB)</b> = wer aufgrund eines <b>privatrechtlichen Vertrags</b> im Dienste eines anderen zu <b>weisungsgebundener, fremdbestimmter Arbeit in persönlicher Abhängigkeit</b> verpflichtet ist.<br><br><b>NICHT erfasst:</b><br>• <b>Beamte</b> – sie stehen in einem öffentlich-rechtlichen Dienst- und Treueverhältnis (eigenes Rechtsgebiet: Beamtenrecht),<br>• <b>Selbstständige/freie Mitarbeiter</b>,<br>• <b>Auszubildende</b> – für sie gilt der TVAöD (eigener Tarifvertrag).",
      hint: "Erster Unterschied zum Beamtenrecht: Das Arbeitsverhältnis beruht auf privatrechtlichem Vertrag, das Beamtenverhältnis auf Ernennung (Verwaltungsakt).",
      options: [
        { label: "Ja, Arbeitnehmer/in (Beschäftigte/r)", next: "q_sachlich", tone: "pos" },
        { label: "Nein, Beamtin/Beamter", next: "e_beamter", tone: "neg" },
        { label: "Auszubildende/r", next: "e_azubi", tone: "warn" }
      ]
    },

    q_sachlich: {
      station: "sachlich",
      kind: "frage",
      norm: "§ 1 I TVöD",
      title: "Sachlicher Geltungsbereich: Wer ist der Arbeitgeber?",
      def: "Der TVöD gilt für Beschäftigte, die in einem Arbeitsverhältnis stehen<br>• zum <b>Bund</b> (Bundesrepublik Deutschland) – „Bundesbeschäftigte“ – oder<br>• zu einem Arbeitgeber, der <b>Mitglied eines Mitgliedverbandes der Vereinigung der kommunalen Arbeitgeberverbände (VKA)</b> ist – „Kommunalbeschäftigte“ (z. B. Städte, Verbandsgemeinden, Landkreise).<br><br><b>Abgrenzung:</b> Für Beschäftigte der <b>Länder</b> gilt der <b>TV-L</b> (Tarifgemeinschaft deutscher Länder, 15 Länder einschließlich RLP – nicht Hessen).<br><br><b>Spartenorientierung:</b> Neben dem Allgemeinen Teil (§§ 1–39) gelten durchgeschriebene Fassungen je Dienstleistungsbereich, für die Kommunalverwaltung der <b>TVöD-V</b> (Verwaltung).",
      options: [
        { label: "Kommune (VKA-Mitglied) oder Bund", next: "q_ausnahme", tone: "pos" },
        { label: "Bundesland (z. B. Land RLP)", next: "e_tvl", tone: "warn" },
        { label: "Privater Arbeitgeber", next: "q_bezugnahme_privat", tone: "neg" }
      ]
    },

    q_ausnahme: {
      station: "sachlich",
      kind: "frage",
      norm: "§ 1 II TVöD",
      title: "Greift eine Ausnahme vom Geltungsbereich (§ 1 II TVöD)?",
      def: "§ 1 II TVöD nimmt bestimmte Beschäftigtengruppen <b>ausdrücklich aus</b>, z. B.:<br>• leitende Angestellte i. S. d. § 5 III BetrVG, wenn Arbeitsbedingungen einzelvertraglich besonders vereinbart sind, sowie <b>außertariflich</b> Beschäftigte über der höchsten Entgeltgruppe,<br>• <b>Chefärztinnen/Chefärzte</b>,<br>• Beschäftigte, für die <b>Sonder-Tarifverträge</b> gelten (z. B. Versorgungsbetriebe TV-V, Nahverkehr, Waldarbeit, Ärzte an kommunalen Krankenhäusern),<br>• <b>Auszubildende, Volontäre, Praktikanten</b> (eigene Tarifverträge: TVAöD, TVPöD),<br>• geringfügig Beschäftigte i. S. v. § 8 I Nr. 2 SGB IV (kurzfristige Beschäftigung) u. a.",
      hint: "Klausurtipp: § 1 II TVöD einmal komplett durchlesen – die Ausnahmen werden gern als Aufhänger in Sachverhalte eingebaut.",
      options: [
        { label: "Keine Ausnahme einschlägig", next: "q_tarifbindung", tone: "pos" },
        { label: "Ausnahme nach § 1 II TVöD greift", next: "e_ausnahme", tone: "neg" }
      ]
    },

    q_tarifbindung: {
      station: "persoenlich",
      kind: "frage",
      norm: "§ 3 I, § 4 I TVG",
      title: "Besteht beiderseitige Tarifgebundenheit (§ 3 I TVG)?",
      def: "Ein Tarifvertrag gilt <b>unmittelbar und zwingend</b> (§ 4 I TVG) nur bei <b>beiderseitiger Tarifgebundenheit</b> („doppelte Tarifbindung“, § 3 I TVG):<br>• <b>Arbeitgeber</b> ist Mitglied des Arbeitgeberverbandes (bzw. schließt den TV selbst ab) UND<br>• <b>Arbeitnehmer</b> ist Mitglied der tarifschließenden <b>Gewerkschaft</b> (z. B. ver.di).<br><br>Dann gelten die Tarifnormen kraft Gesetzes – ohne dass es einer Vereinbarung im Arbeitsvertrag bedarf. Abweichungen zuungunsten des Beschäftigten sind unwirksam (Günstigkeitsprinzip, § 4 III TVG).",
      options: [
        { label: "Ja, beide Seiten tarifgebunden", next: "e_unmittelbar", tone: "pos" },
        { label: "Nein, Beschäftigte/r ist nicht Gewerkschaftsmitglied", next: "q_bezugnahme", tone: "warn" }
      ]
    },

    q_bezugnahme: {
      station: "persoenlich",
      kind: "frage",
      norm: "Arbeitsvertrag (Bezugnahmeklausel)",
      title: "Enthält der Arbeitsvertrag eine Bezugnahmeklausel auf den TVöD?",
      def: "Ohne Tarifbindung nach § 3 I TVG findet der TVöD nur Anwendung, wenn ihn die Parteien <b>arbeitsvertraglich in Bezug nehmen</b> (Verweisungsklausel/Gleichstellungsabrede). Die Tarifnormen werden dann <b>Bestandteil des Arbeitsvertrages</b> – es tritt aber keine Tarifbindung im gesetzlichen Sinne ein.<br><br><b>Arten der Verweisung:</b><br>• <b>Statische Verweisung:</b> Es gilt der TVöD in der bei Vertragsschluss geltenden Fassung – Tarifänderungen wirken NICHT.<br>• <b>Dynamische Verweisung (Regelfall im öD):</b> Es gilt der TVöD „in der jeweils geltenden Fassung“ – Tarifänderungen werden automatisch Vertragsinhalt (so das Muster des Arbeitsvertrags: „Das Arbeitsverhältnis bestimmt sich nach dem TVöD … und den ergänzenden, ändernden oder ersetzenden Tarifverträgen …“).",
      hint: "In der Praxis des öffentlichen Dienstes wird praktisch immer die dynamische Verweisung vereinbart – der Arbeitgeber will alle Beschäftigten gleich behandeln.",
      options: [
        { label: "Ja, dynamische Verweisung", next: "e_bezugnahme_dyn", tone: "pos" },
        { label: "Ja, statische Verweisung", next: "e_bezugnahme_stat", tone: "warn" },
        { label: "Keine Verweisungsklausel", next: "e_keine_anwendung", tone: "neg" }
      ]
    },

    q_bezugnahme_privat: {
      station: "persoenlich",
      kind: "frage",
      norm: "Arbeitsvertrag (Bezugnahmeklausel)",
      title: "Wendet der private Arbeitgeber den TVöD kraft Vereinbarung an?",
      def: "Ein privater Arbeitgeber fällt nicht unter den sachlichen Geltungsbereich des § 1 I TVöD. Er kann den TVöD aber <b>freiwillig per arbeitsvertraglicher Bezugnahme</b> anwenden (häufig bei kommunalen Gesellschaften in Privatrechtsform, Wohlfahrtsverbänden usw.).<br><br><b>Wichtig für Folgefragen:</b> Ein Arbeitgeber, der den TVöD nur durch Inbezugnahme oder Haustarifvertrag anwendet, ist <b>nicht „vom Geltungsbereich des TVöD erfasst“</b> – das spielt z. B. bei der Anerkennung von Beschäftigungszeiten nach § 34 III 3 TVöD eine Rolle (eigenes Schema „Beschäftigungszeit“).",
      options: [
        { label: "Ja, Bezugnahmeklausel vorhanden", next: "e_bezugnahme_dyn", tone: "pos" },
        { label: "Nein", next: "e_keine_anwendung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_unmittelbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 1 TVöD, §§ 3 I, 4 I TVG",
      title: "TVöD gilt unmittelbar und zwingend",
      text: "Der sachliche Geltungsbereich (Bund/VKA-Mitglied, keine Ausnahme nach § 1 II) ist eröffnet und beide Parteien sind tarifgebunden (§ 3 I TVG). Die Normen des TVöD gelten unmittelbar und zwingend (§ 4 I TVG).\n\nRäumlich gilt der TVöD im gesamten Bundesgebiet (Begriffe Tarifgebiet West/Ost: § 38 TVöD), zeitlich seit 01.10.2005 (§ 39 TVöD); für Alt-Beschäftigte gilt ergänzend der Überleitungstarifvertrag TVÜ-VKA.\n\nAbweichende einzelvertragliche Abreden sind nur wirksam, wenn sie für die/den Beschäftigten günstiger sind oder der Tarifvertrag sie ausdrücklich zulässt (§ 4 III TVG, Öffnungsklausel – Schema „Rangordnung und Günstigkeitsprinzip\")."
    },

    e_bezugnahme_dyn: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Arbeitsvertrag i. V. m. TVöD",
      title: "TVöD gilt kraft dynamischer Bezugnahme",
      text: "Der TVöD ist durch die arbeitsvertragliche Verweisungsklausel in seiner jeweils geltenden Fassung Inhalt des Arbeitsverhältnisses geworden – Tarifänderungen (z. B. Entgelterhöhungen) wirken automatisch.\n\nBeachte: Es besteht keine Tarifbindung im gesetzlichen Sinne (§ 3 I TVG). Die Tarifnormen wirken nur als Vertragsrecht – im Kollisionsfall stehen sie auf der Rangstufe des Arbeitsvertrags, nicht des Tarifvertrags."
    },

    e_bezugnahme_stat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Arbeitsvertrag i. V. m. TVöD",
      title: "TVöD gilt nur in der Fassung bei Vertragsschluss (statisch)",
      text: "Bei der statischen Verweisung gilt der TVöD in der zum Zeitpunkt des Vertragsschlusses geltenden Fassung unverändert fort. Spätere Tarifänderungen (Entgeltrunden, neue Regelungen) werden NICHT automatisch Vertragsinhalt.\n\nDas ist im öffentlichen Dienst die absolute Ausnahme – im Zweifel ist durch Auslegung (§§ 133, 157 BGB) zu ermitteln, ob nicht doch eine dynamische Verweisung gewollt war."
    },

    e_tvl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 1 TV-L",
      title: "Landesbeschäftigte: TV-L statt TVöD",
      text: "Für Arbeitnehmer der Länder, die Mitglied der Tarifgemeinschaft deutscher Länder (TdL) sind, gilt der TV-L (in Kraft seit 01.11.2006; Überleitung: TVÜ-L). Der TV-L gilt für 15 Bundesländer einschließlich Rheinland-Pfalz – NICHT für Hessen (aus der TdL ausgetreten, eigener TV-H).\n\nDie Regelungssystematik (Probezeit, Beschäftigungszeit, Entgelt, Urlaub) entspricht weitgehend dem TVöD – die Prüfung läuft parallel mit den §§ des TV-L."
    },

    e_beamter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 4 BeamtStG",
      title: "Kein Arbeitsverhältnis – Beamtenrecht statt Arbeitsrecht",
      text: "Beamte stehen in einem öffentlich-rechtlichen Dienst- und Treueverhältnis (§ 3 I BeamtStG), das durch Ernennung (Verwaltungsakt, § 8 BeamtStG) begründet wird – nicht durch privatrechtlichen Vertrag. Arbeitsrecht und TVöD sind unanwendbar.\n\nEs gelten stattdessen BeamtStG, LBG RLP, LBesG usw. (Fächer Beamtenrecht und Besoldungsrecht). Merke die Doppelstruktur des öffentlichen Dienstrechts: Beamtenrecht (öffentlich-rechtlich) einerseits, Arbeits- und Tarifrecht der Beschäftigten (privatrechtlich) andererseits."
    },

    e_azubi: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 1 II TVöD, TVAöD",
      title: "Auszubildende: TVAöD, nicht TVöD",
      text: "Auszubildende sind vom Geltungsbereich des TVöD ausgenommen. Ihr Berufsausbildungsverhältnis (§§ 3–19 BBiG) richtet sich nach dem Tarifvertrag für Auszubildende des öffentlichen Dienstes (TVAöD).\n\nMerke für später: Ein Berufsausbildungsverhältnis ist KEIN Arbeitsverhältnis – deshalb zählen Ausbildungszeiten weder zur Beschäftigungszeit (§ 34 III TVöD) noch begründen sie einschlägige Berufserfahrung bei der Stufenzuordnung (§ 16 II TVöD). Wird die/der Auszubildende im unmittelbaren Anschluss übernommen, entfällt aber die Probezeit."
    },

    e_ausnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 II TVöD",
      title: "Ausnahme greift – TVöD nicht anwendbar",
      text: "Die Beschäftigtengruppe ist nach § 1 II TVöD ausdrücklich vom Geltungsbereich ausgenommen (z. B. Sonder-Tarifvertrag, außertarifliche Beschäftigte, Chefärzte, Auszubildende/Praktikanten mit eigenem Tarifwerk).\n\nDas Arbeitsverhältnis richtet sich dann nach dem einschlägigen Spezialtarifvertrag bzw. allein nach Arbeitsvertrag und Gesetz."
    },

    e_keine_anwendung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 3 I TVG (Umkehrschluss)",
      title: "TVöD findet keine Anwendung",
      text: "Es besteht weder beiderseitige Tarifgebundenheit (§ 3 I TVG) noch eine arbeitsvertragliche Bezugnahme. Das Arbeitsverhältnis richtet sich ausschließlich nach dem Vertragsinhalt und den gesetzlichen Regelungen (BGB, KSchG, BUrlG, EFZG, TzBfG usw.).\n\nPraxishinweis öffentlicher Dienst: Kommunale Arbeitgeber vereinbaren die Anwendung des TVöD regelmäßig mit ALLEN Beschäftigten (Gleichbehandlung), sodass dieser Fall dort kaum vorkommt."
    }
  },

  routers: {}
});
