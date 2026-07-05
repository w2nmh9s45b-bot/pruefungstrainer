/*
 * Prüfungsschema: Disziplinarverfahren (LDG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - Skript "Folgen mangelnder Pflichterfuellung" (OLE 03) 2024/2025, Ziff. 7.4
 *  - Gesetze: LDG §§ 3-13, 22, 26-36, 45, 47, 53, 112 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-disziplinarverfahren",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Pflichtverletzung und Disziplinarrecht",
  title: "Disziplinarverfahren (LDG)",
  description: "Vom Verdacht zur Maßnahme: Einleitungspflicht (Legalitätsprinzip § 22 LDG), behördliches Verfahren (Ermittlungen, rechtliches Gehör, \"SAUZE\"-Beweismittel), Maßnahmenkatalog mit Opportunitätsprinzip und Bemessung (§§ 3, 11 LDG), gerichtliches Verfahren (VG Trier), vorläufige Dienstenthebung mit Bezügeeinbehalt (§ 45 LDG) und Verwertungsverbot (§ 112 LDG).",
  start: "start",
  stations: [
    { id: "einleitung", label: "Einleitung" },
    { id: "verfahren", label: "Verfahren" },
    { id: "massnahme", label: "Maßnahme" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Maßnahme bestimmt",
    neg: "Ergebnis: Einstellung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderinstrument"
  },

  nodes: {

    start: {
      station: "einleitung",
      kind: "frage",
      norm: "§ 22 I LDG",
      title: "Einleitung: Legalitätsprinzip („ob“ des Verfahrens)",
      def: "Liegen <b>konkrete Anhaltspunkte</b> vor, die den <b>Verdacht eines Dienstvergehens</b> rechtfertigen, <b>hat</b> der Dienstvorgesetzte ein Disziplinarverfahren einzuleiten (§ 22 I 1 LDG) – <b>kein Ermessen</b> (Legalitätsprinzip)!<br><br>Zwecke des Disziplinarrechts:<br>• <b>Ordnungsfunktion:</b> Beamtendisziplin, Funktionsfähigkeit des öD, Ansehen der Beamtenschaft,<br>• <b>Schutzfunktion:</b> Ämterstabilität, Unabhängigkeit der Beamten (kein Maßregeln nach Gutdünken).<br><br>Vorfrage stets: Liegt überhaupt ein Dienstvergehen vor (§ 47 BeamtStG – eigenes Schema)?<br><br><b>Parallel laufende Strafverfahren:</b> Verbot der Doppelbestrafung (§ 13 I Nr. 1 LDG): Nach unanfechtbarer Strafe/Geldbuße dürfen wegen desselben Sachverhalts <b>kein Verweis, keine Geldbuße und keine Kürzung des Ruhegehalts</b> mehr verhängt werden.",
      options: [
        { label: "Verfahren eingeleitet", next: "q_verfahren", tone: "pos" },
        { label: "Vorläufige Dienstenthebung?", next: "e_dienstenthebung", tone: "warn" }
      ]
    },

    q_verfahren: {
      station: "verfahren",
      kind: "frage",
      norm: "§§ 26–36 LDG",
      title: "Behördliches Disziplinarverfahren: Ermittlungen und rechtliches Gehör",
      def: "• <b>Ermittlungsführer</b> kann bestellt werden (§ 28 LDG),<br>• <b>Beweiserhebung</b> (§§ 29, 30 LDG) nach pflichtgemäßem Ermessen – Merkwort „<b>SAUZE</b>“: <b>S</b>achverständige · <b>A</b>ugenschein · <b>U</b>rkunden · <b>Z</b>eugen · <b>E</b>id (eidliche Vernehmung durch das VG auf Ersuchen),<br>• <b>rechtliches Gehör</b> (§§ 26, 36 LDG): Unterrichtung über die Einleitung (sobald ohne Gefährdung der Aufklärung möglich), Eröffnung der Vorwürfe, Hinweis auf Äußerungs- und Schweigerecht sowie Bevollmächtigten/Beistand; vor Abschluss: wesentliches Ergebnis bekannt geben, eine Woche für Beweisanträge, Gelegenheit zur abschließenden Äußerung,<br>• <b>Herausgabe von Schriftgut</b> (§ 31 LDG); <b>Beschlagnahme/Durchsuchung</b> nur durch das VG auf Antrag (§ 32 LDG – Art. 13 GG!),<br>• <b>Protokoll</b> über jede Anhörung und Beweiserhebung (§ 34 LDG).<br><br><b>Ergebnis der Ermittlungen?</b>",
      options: [
        { label: "Dienstvergehen festgestellt", next: "q_massnahme", tone: "pos" },
        { label: "Nicht festgestellt", next: "e_einstellung", tone: "neg" }
      ]
    },

    q_massnahme: {
      station: "massnahme",
      kind: "frage",
      norm: "§§ 3, 11 LDG",
      title: "Maßnahme: Opportunitätsprinzip und Bemessung",
      def: "Über die Verhängung entscheiden die Disziplinarorgane nach <b>pflichtgemäßem Ermessen</b> (§ 11 I 1 LDG – Opportunitätsprinzip; „Ermessensreduzierung auf Null“ in den Fällen des § 11 II LDG).<br><br><b>Maßnahmenkatalog (§ 3 LDG):</b><br>• aktive Beamte (§ 3 I): <b>Verweis</b> (§ 4) → <b>Geldbuße</b> (§ 5) → <b>Kürzung der Dienstbezüge</b> (§ 6) → <b>Zurückstufung</b> (§ 7) → <b>Entfernung aus dem Dienst</b> (§ 8),<br>• Ruhestandsbeamte (§ 3 II): Kürzung (§ 9) / <b>Aberkennung des Ruhegehalts</b> (§ 10),<br>• <b>Probe-/Widerrufsbeamte:</b> nur Verweis und Geldbuße (§§ 3 III 2, 114 LDG) – bei schwereren Vergehen: <b>Entlassung</b> (§ 23 III Nr. 1, IV BeamtStG),<br>• Ehrenbeamte: Verweis, Geldbuße, Entfernung (§ 3 III 1).<br><br><b>Bemessung (§ 11 I 2 LDG):</b> Verhältnismäßigkeit; <b>Milderungsgründe</b> (Persönlichkeitsbild, Reue/Geständnis, familiäre Situation) vs. <b>Erschwernisgründe</b> (Leugnen, Vertuschen, Schuldabschieben).<br><br>Unterhalb der Schwelle: <b>missbilligende Äußerungen</b> (§ 3 IV LDG).",
      options: [
        { label: "Verweis bis Zurückstufung", next: "e_massnahme", tone: "pos" },
        { label: "Entfernung aus dem Dienst", next: "e_entfernung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_massnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 3–7, 11 LDG",
      title: "Disziplinarmaßnahme durch Disziplinarverfügung",
      text: "Verweis, Geldbuße, Kürzung der Dienstbezüge und (je nach Zuständigkeit) Zurückstufung werden im behördlichen Verfahren durch DISZIPLINARVERFÜGUNG ausgesprochen – nach Bemessung gemäß § 11 LDG (Schwere, Persönlichkeitsbild, Vertrauensbeeinträchtigung; Milderungs-/Erschwernisgründe).\n\nBeachte:\n• Verbot der Doppelbestrafung (§ 13 I Nr. 1 LDG) nach strafgerichtlicher Ahndung desselben Sachverhalts (kein Verweis, keine Geldbuße, keine Ruhegehaltskürzung),\n• Rechtsschutz des Beamten: Widerspruch und Anfechtungsklage vor der Kammer für Disziplinarsachen (VG Trier),\n• VERWERTUNGSVERBOT (§ 112 LDG): Nach Ablauf der maßnahmenabhängigen Frist (Beginn: Unanfechtbarkeit) gilt der Beamte als nicht mehr betroffen – die Vorgänge sind aus der Personalakte zu ENTFERNEN und zu VERNICHTEN; auf Antrag unterbleibt die Entfernung (wenn entlastend, § 112 III 2 LDG)."
    },

    e_entfernung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 8, 40, 53 LDG",
      title: "Entfernung aus dem Dienst: nur durch das Gericht",
      text: "Die schwerste Maßnahme setzt ein schweres Dienstvergehen mit ENDGÜLTIGEM Vertrauensverlust voraus und wird NUR durch das VERWALTUNGSGERICHT auf DISZIPLINARKLAGE des Dienstvorgesetzten verhängt (§§ 8, 40 LDG).\n\n• Zuständig: VG TRIER (zentrale Kammer für Disziplinarsachen), 2. Instanz: OVG Rheinland-Pfalz in Koblenz (§ 53 LDG) – weitere Instanzen gibt es nicht,\n• Wirkung: Beendigung des BV (§ 21 Nr. 3 BeamtStG), Verlust von Besoldung/Versorgung, Nachversicherung; Unterhaltsbeitrag möglich,\n• bei Ruhestandsbeamten entspricht dem die Aberkennung des Ruhegehalts (§ 10 LDG),\n• Beispiel (Skript): Selbstbeurlaubung einer Lehrerin mit unrichtigem Attest zur \"Dschungelcamp\"-Begleitung.\n\nFlankierend im laufenden Verfahren: vorläufige Dienstenthebung + Einbehalt von bis zur Hälfte der Bezüge (§ 45 LDG)."
    },

    e_dienstenthebung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 45 LDG",
      title: "Vorläufige Dienstenthebung und Bezügeeinbehalt",
      text: "Gleichzeitig mit oder nach Einleitung des Disziplinarverfahrens kann die zuständige Behörde den Beamten VORLÄUFIG DES DIENSTES ENTHEBEN, wenn voraussichtlich auf Entfernung aus dem Dienst erkannt wird ODER das Verbleiben den Dienstbetrieb/die Ermittlungen wesentlich beeinträchtigen würde (§ 45 I LDG).\n\n• EINBEHALT von Teilen der Dienstbezüge – HÖCHSTENS DIE HÄLFTE –, wenn voraussichtlich auf Entfernung erkannt wird (§ 45 II LDG); je nach Verfahrensausgang verfallen die Beträge oder sind nachzuzahlen (§§ 107, 108 LDG),\n• Übungsfall R (U-Haft): Die vorläufige Dienstenthebung selbst ist wegen der Haft entbehrlich – der Bezügeeinbehalt nach § 45 II LDG bleibt der richtige (und einzige) Weg in die Besoldung einzugreifen (NICHT: \"Einstellung der Zahlung\" durch schlichten Bescheid!),\n• Rechtsschutz: Antrag beim VG auf Aussetzung der Dienstenthebung/des Einbehalts (§ 47 LDG),\n• abzugrenzen: Verbot der Führung der Dienstgeschäfte aus zwingenden dienstlichen Gründen (§ 39 BeamtStG, § 53 LBG – max. Übergangsinstrument ohne Disziplinarcharakter)."
    },

    e_einstellung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 LDG",
      title: "Einstellung des Verfahrens",
      text: "Wird ein Dienstvergehen nicht festgestellt (oder ist eine Maßnahme unzulässig/unangemessen), wird das Disziplinarverfahren eingestellt.\n\nMögliche Konstellationen:\n• Tatvorwurf nicht erweislich (in dubio pro reo),\n• kein Dienstvergehen (Filter des § 47 I 2 BeamtStG bei außerdienstlichem Verhalten nicht erfüllt; keine Schuld),\n• Maßnahmeverbot wegen Doppelbestrafung (§ 13 LDG) oder Zeitablaufs,\n• Opportunität: Absehen von einer Maßnahme trotz Vergehens (§ 11 LDG), wenn Ordnungs- und Schutzzweck sie nicht erfordern – dann allenfalls missbilligende Äußerung (§ 3 IV LDG).\n\nFolgen: Einbehaltene Bezüge sind nachzuzahlen (§ 108 LDG); Vorgänge unterliegen dem Personalakten-Schutz; eine erneute Verfolgung desselben Sachverhalts ist grundsätzlich ausgeschlossen."
    }
  }
});
