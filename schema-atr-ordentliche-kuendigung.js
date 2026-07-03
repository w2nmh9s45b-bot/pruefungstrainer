/*
 * Prüfungsschema: Ordentliche Kündigung (§ 34 TVöD, §§ 622 f. BGB, § 1 KSchG)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - Lehrplanung FS III PLE 3 ("Kündigungsgründe unterscheiden können,
 *    Kündigungsfristen berechnen können")
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.5.3 (Beschäftigungszeit für
 *    Kündigungsfristen/Unkündbarkeit)
 *  - Gesetze: TVöD § 34 (Volltext geprüft); BGB §§ 130, 622, 623;
 *    MuSchG § 17; TzBfG § 15 III; § 30 V TVöD
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-ordentliche-kuendigung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Beendigung des Arbeitsverhältnisses",
  title: "Ordentliche Kündigung (§ 34 TVöD, KSchG)",
  description: "Wirksamkeit der ordentlichen Arbeitgeberkündigung: Kündigungserklärung und Zugang (§ 130 BGB), Schriftform (§ 623 BGB), Unkündbarkeit (§ 34 II TVöD), besondere Kündigungsverbote, Personalratsbeteiligung, soziale Rechtfertigung (§ 1 KSchG: personen-, verhaltens-, betriebsbedingt) und Kündigungsfristen (§ 34 I TVöD).",
  start: "start",
  stations: [
    { id: "erklaerung", label: "Erklärung" },
    { id: "ausschluss", label: "Ausschluss" },
    { id: "kschg", label: "KSchG" },
    { id: "frist", label: "Frist" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kündigung wirksam",
    neg: "Ergebnis: Kündigung unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "erklaerung",
      kind: "frage",
      norm: "§§ 130, 623 BGB",
      title: "Liegt eine wirksame Kündigungserklärung vor (Form und Zugang)?",
      def: "<b>Kündigung</b> = einseitige, <b>empfangsbedürftige Willenserklärung</b>, die das Arbeitsverhältnis für die Zukunft beenden soll. Sie wird mit <b>Zugang</b> wirksam (§ 130 I BGB: so in den Machtbereich des Empfängers gelangt, dass unter gewöhnlichen Umständen mit Kenntnisnahme zu rechnen ist – Einwurf in den Hausbriefkasten genügt).<br><br><b>Schriftform (§ 623 BGB):</b> Die Kündigung bedarf zu ihrer Wirksamkeit der Schriftform (eigenhändige Unterschrift, § 126 BGB); die <b>elektronische Form ist ausgeschlossen</b>. Mündliche, telefonische, E-Mail- oder WhatsApp-Kündigungen sind <b>nichtig</b> (§ 125 BGB).<br><br><b>Bedingungsfeindlichkeit:</b> Als Gestaltungsrecht ist die Kündigung grundsätzlich bedingungsfeindlich; zulässig ist nur die Potestativbedingung der Änderungskündigung.",
      options: [
        { label: "Schriftlich erklärt und zugegangen", next: "q_ausschluss", tone: "pos" },
        { label: "Nur mündlich / per E-Mail", next: "e_formnichtig", tone: "neg" }
      ]
    },

    q_ausschluss: {
      station: "ausschluss",
      kind: "frage",
      norm: "§ 34 II TVöD, § 15 III TzBfG",
      title: "Ist die ordentliche Kündigung ausgeschlossen?",
      def: "<b>Tarifliche „Unkündbarkeit“ (§ 34 II TVöD):</b> Arbeitsverhältnisse von Beschäftigten (VKA, Tarifgebiet West), die<br>• das <b>40. Lebensjahr vollendet</b> haben UND<br>• eine <b>Beschäftigungszeit von mehr als 15 Jahren</b> (§ 34 III 1, 2 – i. e. S.!) aufweisen,<br>können durch den Arbeitgeber <b>nur noch aus wichtigem Grund</b> gekündigt werden (außerordentlich, § 626 BGB – ggf. mit Auslauffrist).<br><br><b>Befristete Arbeitsverträge:</b> ordentliche Kündigung nur, wenn einzel- oder tarifvertraglich vereinbart (§ 15 III TzBfG) – im öD über § 30 IV, V TVöD: in der Probezeit 2 Wochen zum Monatsschluss; danach nur bei Vertragsdauer von mindestens 12 Monaten mit eigener Fristenstaffel.",
      options: [
        { label: "Nein, ordentliche Kündigung möglich", next: "q_verbote", tone: "pos" },
        { label: "Unkündbar nach § 34 II TVöD", next: "e_unkuendbar", tone: "neg" },
        { label: "Befristeter Vertrag ohne Kündigungsöffnung", next: "e_befristet", tone: "neg" }
      ]
    },

    q_verbote: {
      station: "ausschluss",
      kind: "frage",
      norm: "§ 17 MuSchG, § 18 BEEG, §§ 168 ff. SGB IX",
      title: "Greifen besondere Kündigungsverbote (Sonderkündigungsschutz)?",
      def: "<b>Besondere Kündigungsverbote</b> gehen als speziellere Normen vor:<br>• <b>Schwangere und Mütter:</b> Kündigungsverbot während der Schwangerschaft und bis vier Monate nach der Entbindung (§ 17 MuSchG); Ausnahme nur mit Zulässigerklärung der obersten Landesbehörde,<br>• <b>Elternzeit:</b> Kündigungsverbot ab Verlangen der Elternzeit (§ 18 BEEG),<br>• <b>Schwerbehinderte Menschen:</b> vorherige <b>Zustimmung des Integrationsamtes</b> erforderlich (§§ 168 ff. SGB IX),<br>• <b>Personalratsmitglieder:</b> ordentliche Kündigung grundsätzlich unzulässig (§ 15 KSchG, LPersVG),<br>• Auszubildende nach der Probezeit (§ 22 BBiG).<br><br><b>Personalratsbeteiligung:</b> Vor jeder Kündigung ist der <b>Personalrat</b> nach dem LPersVG RLP zu beteiligen – eine ohne Beteiligung ausgesprochene Kündigung ist unwirksam (Grundsatz aus § 108 II BPersVG).",
      options: [
        { label: "Kein Sonderkündigungsschutz, Personalrat beteiligt", next: "q_kschg_anwendbar", tone: "pos" },
        { label: "Kündigungsverbot greift / Personalrat nicht beteiligt", next: "e_verbot", tone: "neg" }
      ]
    },

    q_kschg_anwendbar: {
      station: "kschg",
      kind: "frage",
      norm: "§ 1 I, § 23 KSchG",
      title: "Ist das Kündigungsschutzgesetz anwendbar?",
      def: "Das KSchG verlangt <b>soziale Rechtfertigung</b> der Kündigung, wenn<br>• das Arbeitsverhältnis in demselben Betrieb/derselben Verwaltung <b>länger als sechs Monate</b> bestanden hat (<b>Wartezeit</b>, § 1 I KSchG – läuft parallel zur tariflichen Probezeit) UND<br>• der Betrieb i. d. R. <b>mehr als zehn Arbeitnehmer</b> beschäftigt (<b>Kleinbetriebsklausel</b>, § 23 I KSchG – bei Kommunalverwaltungen praktisch immer erfüllt).<br><br>Ist das KSchG nicht anwendbar (Probezeit!), ist die Kündigung ohne sozialen Rechtfertigungsgrund möglich – Grenzen bilden nur Treu und Glauben (§ 242 BGB), das Maßregelungsverbot (§ 612a BGB) und die guten Sitten (§ 138 BGB).",
      options: [
        { label: "Ja, Wartezeit erfüllt, Betriebsgröße erreicht", next: "q_grund", tone: "pos" },
        { label: "Nein (z. B. noch in der Probezeit)", next: "q_frist", tone: "warn" }
      ]
    },

    q_grund: {
      station: "kschg",
      kind: "frage",
      norm: "§ 1 II KSchG",
      title: "Ist die Kündigung sozial gerechtfertigt (Kündigungsgrund)?",
      def: "Sozial gerechtfertigt ist die Kündigung nur, wenn sie durch einen der drei Gründe des § 1 II KSchG <b>bedingt</b> ist:<br><br><b>1. Personenbedingt</b> – Gründe IN der Person: fehlende Eignung/Fähigkeit, die Arbeitsleistung künftig zu erbringen (Hauptfall: <b>krankheitsbedingte Kündigung</b>; dreistufig: negative Gesundheitsprognose → erhebliche Beeinträchtigung betrieblicher Interessen → Interessenabwägung; Verschulden nicht erforderlich).<br><br><b>2. Verhaltensbedingt</b> – steuerbares Fehlverhalten: Pflichtverletzungen wie Arbeitsverweigerung, Unpünktlichkeit, Beleidigungen (grundsätzlich vorherige <b>Abmahnung</b> erforderlich – ultima ratio!).<br><br><b>3. Betriebsbedingt</b> – dringende betriebliche Erfordernisse, die der Weiterbeschäftigung entgegenstehen (Wegfall des Arbeitsplatzes durch Organisationsentscheidung); zusätzlich <b>Sozialauswahl</b> nach Betriebszugehörigkeit, Lebensalter, Unterhaltspflichten, Schwerbehinderung (§ 1 III KSchG).<br><br>Stets zu prüfen: <b>mildere Mittel</b> (Weiterbeschäftigung auf freiem Arbeitsplatz, Änderungskündigung) und Interessenabwägung.",
      options: [
        { label: "Ja, Grund trägt (inkl. Abmahnung/Sozialauswahl)", next: "q_frist", tone: "pos" },
        { label: "Nein, kein tragfähiger Grund", next: "e_sozialwidrig", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§ 34 I TVöD",
      title: "Wurde die richtige Kündigungsfrist gewählt?",
      def: "<b>Kündigungsfristen § 34 I TVöD</b> (verdrängt als tarifliche Regelung § 622 BGB, vgl. § 622 IV BGB):<br><br>• <b>Probezeit</b> (bis Ende des 6. Monats): <b>2 Wochen zum Monatsschluss</b> (§ 34 I 1).<br><br>Im Übrigen nach der <b>Beschäftigungszeit i. e. S.</b> (§ 34 III 1, 2):<br>• bis zu 1 Jahr: <b>1 Monat zum Monatsschluss</b>,<br>• mehr als 1 Jahr: <b>6 Wochen</b>,<br>• mindestens 5 Jahre: <b>3 Monate</b>,<br>• mindestens 8 Jahre: <b>4 Monate</b>,<br>• mindestens 10 Jahre: <b>5 Monate</b>,<br>• mindestens 12 Jahre: <b>6 Monate</b>,<br>jeweils <b>zum Schluss eines Kalendervierteljahres</b> (31.03., 30.06., 30.09., 31.12.).<br><br><b>Berechnung:</b> §§ 186 ff. BGB; maßgeblich ist der Zugang der Kündigung. Die Fristen gelten für BEIDE Seiten (keine für den AN längere Frist als für den AG, vgl. § 622 VI BGB).",
      hint: "Beispiel: Beschäftigungszeit 6 Jahre, Kündigung geht am 20.05. zu → Frist 3 Monate zum Vierteljahresschluss → frühestmöglicher Termin 30.09. (20.08. wäre das Fristende, nächster Vierteljahresschluss danach ist der 30.09.).",
      options: [
        { label: "Frist und Termin korrekt", next: "e_wirksam", tone: "pos" },
        { label: "Zu kurze Frist gewählt", next: "e_falsche_frist", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 34 TVöD, § 1 KSchG",
      title: "Ordentliche Kündigung wirksam",
      text: "Die Kündigung ist formwirksam erklärt und zugegangen, die ordentliche Kündigung ist nicht ausgeschlossen, Sonderkündigungsschutz und Personalratsbeteiligung stehen nicht entgegen, sie ist (soweit das KSchG anwendbar ist) sozial gerechtfertigt und wahrt die Frist des § 34 I TVöD. Das Arbeitsverhältnis endet mit Fristablauf.\n\nDenke an die Folgen: Zeugnisanspruch (§ 35 TVöD), Meldepflichten bei der Agentur für Arbeit (§ 38 SGB III), ggf. anteiliger Urlaub und Urlaubsabgeltung (§ 7 IV BUrlG).\n\nProzessual: Will die/der Beschäftigte die Kündigung angreifen, muss die Kündigungsschutzklage innerhalb von DREI WOCHEN nach Zugang erhoben werden (§ 4 KSchG) – sonst gilt die Kündigung als von Anfang an wirksam (§ 7 KSchG). Zuständig: Arbeitsgericht (§ 2 I Nr. 3 ArbGG)."
    },

    e_formnichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 623, § 125 BGB",
      title: "Kündigung formnichtig",
      text: "Die Kündigung bedarf zu ihrer Wirksamkeit der Schriftform; die elektronische Form ist ausgeschlossen (§ 623 BGB). Die mündliche, telefonische oder per E-Mail/Messenger erklärte Kündigung ist nichtig (§ 125 S. 1 BGB) und beendet das Arbeitsverhältnis nicht.\n\nErforderlich ist die eigenhändige Namensunterschrift des Kündigungsberechtigten auf der Urkunde (§ 126 I BGB) und der Zugang des ORIGINALS beim Empfänger."
    },

    e_unkuendbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 34 II TVöD",
      title: "Ordentliche Kündigung ausgeschlossen (Unkündbarkeit)",
      text: "Die/Der Beschäftigte hat das 40. Lebensjahr vollendet und eine Beschäftigungszeit (§ 34 III 1, 2 TVöD) von mehr als 15 Jahren – das Arbeitsverhältnis kann durch den Arbeitgeber nur noch aus wichtigem Grund gekündigt werden (§ 34 II 1 TVöD, Tarifgebiet West). Wer nach den bis 30.09.2005 geltenden Tarifregelungen unkündbar war, bleibt es (§ 34 II 2 TVöD).\n\nDie ordentliche Arbeitgeberkündigung ist unwirksam. In Betracht kommt nur die außerordentliche Kündigung nach § 626 BGB – bei betrieblichen Gründen allenfalls als außerordentliche Kündigung mit notwendiger Auslauffrist (strenge BAG-Maßstäbe). Die Eigenkündigung der/des Beschäftigten bleibt unberührt."
    },

    e_befristet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 III TzBfG",
      title: "Befristetes Arbeitsverhältnis: ordentliche Kündigung nicht eröffnet",
      text: "Ein befristetes Arbeitsverhältnis ist während der Laufzeit ordentlich nur kündbar, wenn dies einzelvertraglich oder im anwendbaren Tarifvertrag vereinbart ist (§ 15 III TzBfG).\n\nIm Geltungsbereich des TVöD eröffnet § 30 IV, V TVöD die ordentliche Kündigung: innerhalb der Probezeit mit zwei Wochen zum Monatsschluss; nach der Probezeit nur, wenn die Vertragsdauer mindestens zwölf Monate beträgt (Fristen: mehr als 6 Monate → 4 Wochen, mehr als 1 Jahr → 6 Wochen zum Monatsschluss; mehr als 2 Jahre → 3 Monate, mehr als 3 Jahre → 4 Monate zum Vierteljahresschluss).\n\nFehlt eine solche Öffnung, bleibt nur die außerordentliche Kündigung (§ 626 BGB) oder das Abwarten des Fristablaufs."
    },

    e_verbot: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 17 MuSchG, §§ 168 ff. SGB IX, LPersVG",
      title: "Kündigung unwirksam – Sonderkündigungsschutz/Beteiligungsmangel",
      text: "Die Kündigung verstößt gegen ein besonderes Kündigungsverbot (z. B. § 17 MuSchG bei Schwangerschaft, § 18 BEEG in der Elternzeit, fehlende Zustimmung des Integrationsamtes nach §§ 168 ff. SGB IX) oder der Personalrat wurde nicht ordnungsgemäß nach dem LPersVG beteiligt. Sie ist unwirksam.\n\nBeachte bei § 17 MuSchG: Das Verbot gilt auch, wenn der Arbeitgeber die Schwangerschaft bei Kündigungszugang nicht kannte, sofern sie ihm binnen zwei Wochen mitgeteilt wird. Ausnahmsweise kann die oberste Landesbehörde die Kündigung für zulässig erklären (§ 17 II MuSchG).\n\nDie Unwirksamkeit muss regelmäßig binnen drei Wochen mit der Kündigungsschutzklage geltend gemacht werden (§§ 4, 7 KSchG – gilt für alle Unwirksamkeitsgründe)."
    },

    e_sozialwidrig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 1 I, II KSchG",
      title: "Kündigung sozial ungerechtfertigt – unwirksam",
      text: "Die Kündigung ist nicht durch personen-, verhaltens- oder betriebsbedingte Gründe i. S. d. § 1 II KSchG bedingt (bzw. bei betriebsbedingter Kündigung: Sozialauswahl fehlerhaft, § 1 III KSchG; bei verhaltensbedingter: erforderliche Abmahnung fehlt). Sie ist sozialwidrig und damit rechtsunwirksam (§ 1 I KSchG).\n\nDie/Der Beschäftigte muss die Sozialwidrigkeit binnen drei Wochen nach Zugang mit der Kündigungsschutzklage beim Arbeitsgericht geltend machen (§ 4 KSchG) – sonst Wirksamkeitsfiktion (§ 7 KSchG). Obsiegt sie/er, besteht das Arbeitsverhältnis fort; Annahmeverzugslohn (§ 615 BGB) kann nachzuzahlen sein."
    },

    e_falsche_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 34 I TVöD, § 140 BGB",
      title: "Zu kurze Frist: Umdeutung zum nächstzulässigen Termin",
      text: "Eine an sich berechtigte ordentliche Kündigung mit zu kurzer Frist ist nach h. M. nicht insgesamt unwirksam: Sie ist regelmäßig als Kündigung zum nächstzulässigen Termin auszulegen bzw. umzudeuten (§ 140 BGB), wenn der Beendigungswille erkennbar unbedingt ist.\n\nAber Vorsicht: Auch die Nichteinhaltung der Kündigungsfrist muss die/der Beschäftigte ggf. innerhalb der Drei-Wochen-Frist des § 4 KSchG geltend machen, wenn sich die fehlerhafte Frist nur durch Auslegung ermitteln lässt.\n\nZur Fristberechnung: Beschäftigungszeit i. e. S. nach § 34 III 1, 2 TVöD ermitteln (eigenes Schema „Beschäftigungszeit\"), dann Staffel des § 34 I 2 TVöD anwenden – Termin ist der Monats- bzw. Kalendervierteljahresschluss."
    }
  },

  routers: {}
});
