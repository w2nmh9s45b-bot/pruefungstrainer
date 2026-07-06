/*
 * VWL-Schema: Art der Arbeitslosigkeit diagnostizieren
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 5.2.3 (Arten der Arbeitslosigkeit)
 *  - "2023 VWL OLE 3 Produktionsfaktor Arbeit" (Definitionen der vier Arten + Unterarten)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-arbeitslosigkeit",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Produktionsfaktoren & Arbeitsmarkt",
  title: "Art der Arbeitslosigkeit diagnostizieren",
  description: "Saisonal, friktionell, konjunkturell oder strukturell? Anhand von Dauer, Ursache und Reichweite die Art der Arbeitslosigkeit bestimmen – bei struktureller AL bis in die fünf Unterarten.",
  start: "start",
  stations: [
    { id: "muster", label: "Erscheinungsbild" },
    { id: "diagnose", label: "Diagnose" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: Art bestimmt",
    neg: "Diagnose: keine AL",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  nodes: {

    start: {
      station: "muster",
      kind: "frage",
      norm: "4 Arten",
      title: "Welches Muster zeigt die Arbeitslosigkeit?",
      def: "Das Skript unterscheidet vier Arten:<br>• <b>saisonale</b> AL – jahreszeitlich bedingt<br>• <b>friktionelle</b> AL – kurzfristiger Übergang zwischen zwei Stellen<br>• <b>konjunkturelle</b> AL – gesamtwirtschaftlicher Abschwung<br>• <b>strukturelle</b> AL – dauerhafte Veränderung der Wirtschaftsstrukturen<br><br>Frage zuerst nach <b>Dauer, Ursache und Reichweite</b> (eine Branche? eine Region? alle?).",
      options: [
        { label: "Tritt regelmäßig zu bestimmten Jahreszeiten auf", detail: "z. B. Baugewerbe im Winter, Tourismus außerhalb der Saison", next: "e_saisonal", tone: "neutral" },
        { label: "Kurze Übergangszeit zwischen zwei Beschäftigungen", detail: "Stellenwechsel, Suchphase nach Kündigung", next: "e_friktionell", tone: "neutral" },
        { label: "Trifft (fast) alle Branchen gleichzeitig", detail: "Nachfragerückgang in der Gesamtwirtschaft", next: "q_konjunktur", tone: "neutral" },
        { label: "Dauerhaft – die Wirtschaftsstruktur hat sich verändert", detail: "Anforderungsprofile passen nicht mehr zu den Beschäftigten", next: "q_strukturell", tone: "neutral" }
      ]
    },

    q_konjunktur: {
      station: "diagnose",
      kind: "frage",
      norm: "Konjunkturelle AL",
      title: "Hängt die Arbeitslosigkeit am Konjunkturzyklus?",
      def: "<b>Konjunkturelle Arbeitslosigkeit</b> ist auf eine <b>Unterauslastung des Produktionspotenzials</b> zurückzuführen, die mehr oder weniger <b>alle Branchen</b> der Volkswirtschaft in gleicher Weise trifft.<br><br>Kennzeichen: Sie entsteht im Abschwung/in der Rezession und verschwindet im Aufschwung wieder (im Bild der Transformationskurve: Punkt <b>unterhalb</b> der Kurve).",
      options: [
        { label: "Ja – folgt dem Auf und Ab der Gesamtwirtschaft", next: "e_konjunkturell", tone: "pos" },
        { label: "Nein – betrifft dauerhaft nur bestimmte Branchen/Regionen", next: "q_strukturell", tone: "warn" }
      ]
    },

    q_strukturell: {
      station: "diagnose",
      kind: "frage",
      norm: "Strukturelle AL: 5 Unterarten",
      title: "Welche spezielle Ursache steckt dahinter?",
      def: "<b>Strukturelle Arbeitslosigkeit</b> wird u. a. durch Veränderungen der Wirtschaftsstrukturen und die sich dadurch verändernden <b>Anforderungsprofile</b> für die Beschäftigten verursacht. Spezielle Ursachen laut Skript:",
      options: [
        { label: "Ganze Wirtschaftszweige schrumpfen → sektorale AL", detail: "z. B. Kohle, Stahl, Textilindustrie", next: "e_sektoral", tone: "neutral" },
        { label: "Bestimmte Regionen betroffen → regionale AL", detail: "strukturschwache Räume, Abwanderung", next: "e_regional", tone: "neutral" },
        { label: "Technik ersetzt Arbeitsplätze → technologische AL", detail: "Automatisierung, Digitalisierung, KI", next: "e_technologisch", tone: "neutral" },
        { label: "Löhne über Markträumungsniveau → tariflohnbedingte AL / Qualifikation passt nicht → qualifikationsbedingte AL", detail: "zwei weitere Unterarten in einem Schritt", next: "e_tarif_quali", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_saisonal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Saisonale AL",
      title: "Saisonale Arbeitslosigkeit",
      text: "Entsteht durch schwächere wirtschaftliche Aktivitäten einzelner Wirtschaftsbereiche während bestimmter Jahreszeiten – z. B. Baugewerbe und Außengastronomie im Winter.\n\nTypisch: regelmäßig wiederkehrend, vorhersehbar, auf bestimmte Branchen begrenzt.\n\nGegenmaßnahmen: Saison-Kurzarbeitergeld, wetterunabhängige Bauverfahren, Diversifizierung des Angebots."
    },

    e_friktionell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Friktionelle AL",
      title: "Friktionelle Arbeitslosigkeit (Such-/Fluktuations-AL)",
      text: "Grundsätzlich von kurzer Dauer: Der Zeitraum zwischen dem Ende einer Tätigkeit und der Aufnahme einer neuen Beschäftigung ist kurz. Sie entsteht freiwillig (z. B. Eigenkündigung) oder unfreiwillig (Arbeitgeberkündigung).\n\nFriktionelle AL ist in einer dynamischen Marktwirtschaft unvermeidbar und weitgehend unproblematisch – selbst bei 'Vollbeschäftigung' ist die Arbeitslosenquote deshalb nie 0 %.\n\nGegenmaßnahmen: schnellere Vermittlung, Transparenz am Arbeitsmarkt (Jobbörsen, Arbeitsagentur)."
    },

    e_konjunkturell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Konjunkturelle AL",
      title: "Konjunkturelle Arbeitslosigkeit",
      text: "Ursache ist die Unterauslastung des Produktionspotenzials im Abschwung – sie trifft mehr oder weniger alle Branchen in gleicher Weise.\n\nWirtschaftspolitische Antwort: antizyklische Stabilisierungspolitik (expansive Fiskal- und Geldpolitik in der Rezession) – Ziel 'hoher Beschäftigungsstand' des magischen Vierecks (§ 1 StWG).\n\nVertiefung in FS 2: Schemata 'Konjunkturphase diagnostizieren' und 'Magisches Viereck (Regler)'."
    },

    e_sektoral: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strukturell: sektoral",
      title: "Strukturelle AL – sektorale Ursache",
      text: "Ganze Wirtschaftszweige (Sektoren) verlieren dauerhaft an Bedeutung – klassische Beispiele: Steinkohlebergbau, Stahl- und Textilindustrie.\n\nVGR-Anschluss: In Industrieländern nimmt der sekundäre Sektor (Bergbau, Industrie) kontinuierlich ab, der tertiäre Sektor (Dienstleistungen) zu – dieser Strukturwandel ist in der Entstehungsrechnung des BIP über lange Zeiträume ablesbar (→ Schema 'VGR-Rechner', FS 2).\n\nGegenmaßnahmen: Strukturpolitik, Umschulung, Ansiedlungsförderung."
    },

    e_regional: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strukturell: regional",
      title: "Strukturelle AL – regionale Ursache",
      text: "Bestimmte Regionen sind dauerhaft überdurchschnittlich betroffen (strukturschwache Räume, einseitige Wirtschaftsstruktur, Abwanderung von Betrieben).\n\nGegenmaßnahmen: regionale Wirtschaftsförderung, Infrastrukturausbau, Mobilitätshilfen – auch ein Thema der Gemeinschaftsaufgabe 'Verbesserung der regionalen Wirtschaftsstruktur'."
    },

    e_technologisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strukturell: technologisch",
      title: "Strukturelle AL – technologische Ursache",
      text: "Technischer Fortschritt (Automatisierung, Digitalisierung, KI) ersetzt bestimmte Tätigkeiten – die freigesetzten Arbeitskräfte passen ohne Qualifizierung nicht auf die neu entstehenden Stellen.\n\nOLE-3-Aufgabe: 'Wie kann sich die Digitalisierung auf den Produktionsfaktor Arbeit auswirken?' – zweischneidig: Wegfall von Routinetätigkeiten einerseits, neue Berufe und Produktivitätsgewinne andererseits; entscheidend sind Ausbildungsstand und Weiterbildung (qualitative Bestimmungsfaktoren der Arbeit)."
    },

    e_tarif_quali: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Strukturell: tariflohnbedingt / qualifikationsbedingt",
      title: "Strukturelle AL – tariflohnbedingt oder qualifikationsbedingt",
      text: "TARIFLOHNBEDINGTE AL: Liegen (Tarif-)Löhne über dem markträumenden Niveau, wird Arbeit für Unternehmen zu teuer – ein Teil des Arbeitsangebots findet keine Beschäftigung.\n\nQUALIFIKATIONSBEDINGTE AL: Die Qualifikation der Arbeitsuchenden passt nicht zu den Anforderungsprofilen der offenen Stellen (Mismatch) – gleichzeitig Fachkräftemangel UND Arbeitslosigkeit möglich.\n\nBeide sind Unterarten der strukturellen AL (neben sektoral, regional, technologisch). Gegenmaßnahmen: Qualifizierung/Weiterbildung, flexible Tarifgestaltung, Vermittlung."
    }
  }
});
