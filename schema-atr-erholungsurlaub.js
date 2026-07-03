/*
 * Prüfungsschema: Erholungsurlaub – Dauer und Teilurlaub (§ 26 TVöD-VKA, BUrlG)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 4.1-4.6 (Dauer, Umrechnung
 *    Wochenarbeitstage, Zwölftelung § 26 II b, Vergleich mit BUrlG-Mindesturlaub
 *    § 3/§ 5, Rundung, Verbot von Doppelansprüchen § 6 BUrlG)
 *  - Lehrplanung FS III PLE 10/11 (Erholungsurlaub, § 26 TVöD, BUrlG)
 *  - Gesetze: TVöD § 26 (VKA); BUrlG §§ 3, 5, 6, 13 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-erholungsurlaub",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Urlaub",
  title: "Erholungsurlaub: Dauer und Teilurlaub (§ 26 TVöD, BUrlG)",
  description: "Ermittlung des Erholungsurlaubsanspruchs: 30 Arbeitstage bei Fünf-Tage-Woche (§ 26 I 2), Umrechnung bei anderer Verteilung (§ 26 I 3), Zwölftelung bei unterjährigem Beginn/Ende (§ 26 II b), zwingender Vergleich mit dem gesetzlichen Mindesturlaub (§§ 3, 5 BUrlG) und Verbot von Doppelansprüchen (§ 6 BUrlG).",
  start: "start",
  stations: [
    { id: "dauer", label: "Grunddauer" },
    { id: "verteilung", label: "Verteilung" },
    { id: "zwoelftel", label: "Zwölftelung" },
    { id: "vergleich", label: "BUrlG-Vergleich" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Urlaubsanspruch ermittelt",
    neg: "Ergebnis: kein (weiterer) Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "dauer",
      kind: "frage",
      norm: "§ 26 I 1, 2 TVöD-VKA",
      title: "Grunddauer: Wie viele Urlaubstage bei Fünf-Tage-Woche?",
      def: "<b>Erholungsurlaub</b> = die jährlich zu gewährende Freistellung von der Arbeit unter Fortzahlung des Entgelts (§ 26 I 1 TVöD-VKA, § 21 TVöD).<br><br><b>Grunddauer (§ 26 I 2 TVöD-VKA):</b> Bei Verteilung der wöchentlichen Arbeitszeit auf <b>fünf Tage</b> in der Kalenderwoche: <b>30 Arbeitstage</b> im Kalenderjahr.<br><br><b>Teilzeit:</b> Teilzeitbeschäftigte in der Fünf-Tage-Woche erhalten <b>denselben</b> Urlaub (30 Arbeitstage) wie Vollzeitbeschäftigte – die Zahl der WOCHENARBEITSTAGE zählt, nicht die tägliche Stundenzahl.<br><br><b>Verhältnis zum BUrlG:</b> Das BUrlG regelt nur den gesetzlichen <b>Mindesturlaub</b> als Arbeitnehmerschutz (§ 13 BUrlG); der TVöD darf davon nur zugunsten der Beschäftigten abweichen (Günstigkeitsprinzip).",
      options: [
        { label: "Fünf-Tage-Woche → 30 Arbeitstage", next: "q_zwoelftel", tone: "pos" },
        { label: "Andere Verteilung als 5 Tage/Woche", next: "q_verteilung", tone: "neutral" }
      ]
    },

    q_verteilung: {
      station: "verteilung",
      kind: "frage",
      norm: "§ 26 I 3 TVöD-VKA",
      title: "Andere Verteilung: Wie wird umgerechnet?",
      def: "<b>Umrechnung (§ 26 I 3 TVöD-VKA):</b> Bei einer anderen Verteilung als auf fünf Tage erhöht oder vermindert sich der Urlaubsanspruch <b>entsprechend</b> der Zahl der Wochenarbeitstage.<br><br>Formel: <b>30 × (individuelle Wochenarbeitstage ÷ 5)</b>.<br>• 6-Tage-Woche: 36 Arbeitstage,<br>• 3-Tage-Woche: 18 Arbeitstage,<br>• 2-Tage-Woche: 12 Arbeitstage.<br><br>Der <b>Freistellungszeitraum</b> von rund 6 Kalenderwochen bleibt dabei stets gleich.<br><br><b>Wichtig (§ 4.2 Skript):</b> Anzupassen ist NUR bei Änderung der ANZAHL der Wochenarbeitstage. Eine bloße Änderung der Arbeitszeit (Stunden) bei gleichbleibender Zahl der Arbeitstage berührt die Urlaubsdauer nicht (EuGH/BAG).",
      options: [
        { label: "Umrechnung vorgenommen", next: "q_zwoelftel", tone: "pos" }
      ]
    },

    q_zwoelftel: {
      station: "zwoelftel",
      kind: "frage",
      norm: "§ 26 II b TVöD-VKA",
      title: "Beginnt oder endet das Arbeitsverhältnis im Laufe des Jahres?",
      def: "<b>Zwölftelung (§ 26 II Buchst. b Hs. 1 TVöD-VKA):</b> Beginnt oder endet das Arbeitsverhältnis im Laufe des Jahres, gibt es für jeden <b>vollen Monat des Arbeitsverhältnisses ein Zwölftel</b> des Jahresurlaubs.<br><br>• „Monat“ = <b>Beschäftigungsmonat</b> (ab dem Eintrittstag gerechnet), „Jahr“ = Kalenderjahr.<br>• <b>Rundung (§ 26 I 4):</b> Bruchteil ≥ ½ Urlaubstag → auf einen vollen Tag aufrunden; Bruchteil < ½ → abrunden.<br><br><b>Beispiel (Skript):</b> Eintritt 10. Juni, Austritt 15. Dezember → sechs volle Beschäftigungsmonate → 6/12 des Erholungsurlaubs.<br><br><b>ACHTUNG:</b> § 26 II b Hs. 2 stellt klar: „§ 5 BUrlG bleibt unberührt“ – die tarifliche Zwölftelung darf den gesetzlichen Mindesturlaub NICHT unterschreiten (nächste Station!).",
      options: [
        { label: "Ganzjährig beschäftigt – keine Zwölftelung", next: "e_voll", tone: "pos" },
        { label: "Unterjähriger Beginn/Ende → Zwölftelung", next: "q_vergleich", tone: "warn" }
      ]
    },

    q_vergleich: {
      station: "vergleich",
      kind: "frage",
      norm: "§§ 3, 5 BUrlG",
      title: "Vergleich: Unterschreitet der tarifliche Teilurlaub den gesetzlichen Mindesturlaub?",
      def: "Bei jedem Teilurlaub ist ein <b>Vergleich</b> zwischen tariflichem Teilurlaub (§ 26 TVöD) und gesetzlichem Mindesturlaub (BUrlG) vorzunehmen – der höhere Wert gilt.<br><br><b>Gesetzlicher Mindesturlaub (§ 3 BUrlG):</b> <b>24 Werktage</b> (= alle Tage außer Sonn-/Feiertage, § 3 II) bezogen auf die 6-Tage-Woche → in der <b>5-Tage-Woche = 20 Arbeitstage</b> (4-Tage: 16, 3-Tage: 12).<br><br><b>§ 5 I BUrlG erlaubt eine Zwölftelung des gesetzlichen Mindesturlaubs NUR in drei Fällen:</b><br>a) Nichterfüllung der Wartezeit (6 Monate, § 4) im Kalenderjahr,<br>b) Ausscheiden VOR erfüllter Wartezeit,<br>c) Ausscheiden in der <b>ersten Jahreshälfte</b> nach erfüllter Wartezeit.<br><br>→ Wer nach dem 01.07. eintritt, weniger als 6 Monate bleibt oder in der 1. Jahreshälfte ausscheidet: Mindesturlaub darf gezwölftelt werden. Sonst gilt der VOLLE Mindesturlaub!",
      hint: "Skript-Beispiel: Ausscheiden 15.07. (Wartezeit erfüllt), 6 Monate beschäftigt → tariflich 30/12×6 = 15 Tage, aber § 5 I BUrlG greift NICHT (Ausscheiden in 2. Jahreshälfte) → voller Mindesturlaub 20 Tage → Anspruch 20 Arbeitstage.",
      options: [
        { label: "§ 5 I BUrlG greift → tariflicher Teilurlaub gilt", next: "e_teilurlaub", tone: "pos" },
        { label: "§ 5 I BUrlG greift NICHT → voller Mindesturlaub (20 Tage)", next: "q_doppel", tone: "warn" },
        { label: "Tariflicher Teilurlaub ≥ Mindesturlaub", next: "e_teilurlaub", tone: "pos" }
      ]
    },

    q_doppel: {
      station: "vergleich",
      kind: "frage",
      norm: "§ 6 I BUrlG",
      title: "Verbot von Doppelansprüchen: Schon Urlaub beim früheren Arbeitgeber?",
      def: "<b>§ 6 I BUrlG (Verbot von Doppelansprüchen):</b> Kein Anspruch auf Urlaub, soweit für dasselbe Kalenderjahr bereits von einem <b>früheren Arbeitgeber</b> Urlaub gewährt (oder abgegolten) wurde.<br><br>Der frühere Arbeitgeber muss bei Beendigung eine <b>Bescheinigung</b> über gewährten/abgegoltenen Urlaub aushändigen (§ 6 II BUrlG).<br><br><b>Beispiel (Skript):</b> A scheidet 30.06. bei der VG W aus, wo er im Januar bereits 18 Tage Urlaub erhielt (Anspruch dort nach Zwölftelung nur 15 Tage → 3 Tage „zu viel“). Beim neuen AG (Landkreis R, Eintritt 01.07.) stehen ihm 6/12 × 30 = 15 Tage zu, davon sind die 3 zu viel genommenen Tage abzuziehen → 12 Arbeitstage.",
      options: [
        { label: "Kein Vorurlaub / bereits berücksichtigt", next: "e_mindesturlaub", tone: "pos" },
        { label: "Vorurlaub anzurechnen", next: "e_doppel", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 I TVöD-VKA",
      title: "Voller Jahresurlaub",
      text: "Bei ganzjährigem Bestand des Arbeitsverhältnisses besteht der volle Jahresurlaub: 30 Arbeitstage in der Fünf-Tage-Woche (§ 26 I 2 TVöD-VKA), bei anderer Verteilung entsprechend umgerechnet (§ 26 I 3: 30 × Wochenarbeitstage ÷ 5).\n\nDer Erholungsurlaub ist grundsätzlich im laufenden Kalenderjahr zu gewähren und zu nehmen (§ 26 I 5); zur Übertragung ins Folgejahr siehe das eigene Schema „Urlaubsübertragung und Verfall\".\n\nHinweis: Bei Ruhen des Arbeitsverhältnisses (z. B. Elternzeit, Rente auf Zeit) vermindert sich der Urlaub für jeden vollen Kalendermonat um ein Zwölftel (§ 26 II c TVöD-VKA)."
    },

    e_teilurlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 II b TVöD-VKA",
      title: "Tariflicher Teilurlaub (gezwölftelt)",
      text: "Der Urlaubsanspruch ist zu zwölfteln: für jeden vollen Beschäftigungsmonat ein Zwölftel des Jahresurlaubs (§ 26 II b Hs. 1 TVöD-VKA), Bruchteile ≥ ½ Tag aufrunden (§ 26 I 4).\n\nHier liegt der tarifliche Teilurlaub mindestens so hoch wie der gesetzliche Mindesturlaub (bzw. § 5 I BUrlG erlaubt die Zwölftelung), sodass es beim tariflichen Ergebnis bleibt.\n\nBeispiel (Skript): Ausscheiden 31.05. in der Fünf-Tage-Woche → 30 × 5/12 = 12,5 → aufgerundet 13 Arbeitstage."
    },

    e_mindesturlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 II b Hs. 2 TVöD-VKA, §§ 3, 5 BUrlG",
      title: "Gesetzlicher Mindesturlaub geht vor (20 Arbeitstage)",
      text: "Der tarifliche gezwölftelte Teilurlaub darf den gesetzlichen Mindesturlaub nicht unterschreiten (§ 26 II b Hs. 2 TVöD: „§ 5 BUrlG bleibt unberührt\"). Da einer der drei Zwölftelungsfälle des § 5 I BUrlG NICHT vorliegt (z. B. Eintritt in der ersten Jahreshälfte / Ausscheiden in der zweiten Jahreshälfte nach erfüllter Wartezeit), ist der volle Mindesturlaub zu gewähren: in der Fünf-Tage-Woche 20 Arbeitstage (§ 3 BUrlG: 24 Werktage × 5/6).\n\nBeispiel (Skript): Eintritt 01.06., Fünf-Tage-Woche → tariflich 30/12 × 7 = 17,5 ≈ 18 Tage; § 5 I BUrlG greift nicht → Mindesturlaub 20 Tage → Anspruch 20 Arbeitstage."
    },

    e_doppel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 6 I BUrlG",
      title: "Anrechnung des beim früheren Arbeitgeber gewährten Urlaubs",
      text: "Nach dem Verbot von Doppelansprüchen (§ 6 I BUrlG) ist der beim früheren Arbeitgeber für dasselbe Kalenderjahr bereits gewährte (oder abgegoltene) Urlaub auf den Anspruch beim neuen Arbeitgeber anzurechnen.\n\nBeispiel (Skript): Neuer Anspruch beim Landkreis R für das zweite Halbjahr 6/12 × 30 = 15 Tage; vom früheren AG wurden im Kalenderjahr 20 Tage gewährt, davon entfallen 10 auf das zweite Halbjahr → 15 − 10 = 5 Arbeitstage verbleibender Urlaubsanspruch.\n\nGrundlage der Anrechnung ist die Urlaubsbescheinigung des früheren Arbeitgebers (§ 6 II BUrlG)."
    }
  },

  routers: {}
});
