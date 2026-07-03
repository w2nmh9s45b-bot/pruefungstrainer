/*
 * Prüfungsschema: Zusatzurlaub für schwerbehinderte Menschen (§ 208 SGB IX)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 5 (Zusatzurlaub für schwerbehinderte
 *    Menschen: Anspruchsgrundlage, Berechtigte, Entstehung, Dauer, Teilurlaub,
 *    Zwölftelung, Rundung, Übertragung § 208 III)
 *  - Gesetze: SGB IX §§ 2, 208, 152; BUrlG §§ 4, 5; TVöD § 26 II a, b
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-zusatzurlaub",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Urlaub",
  title: "Zusatzurlaub für schwerbehinderte Menschen (§ 208 SGB IX)",
  description: "Anspruch auf fünf Arbeitstage bezahlten Zusatzurlaub: Anspruchsberechtigte (GdB ≥ 50, § 2 II SGB IX), Entstehung (deklaratorischer Bescheid, rückwirkend möglich), Dauer und Umrechnung, Zwölftelung bei unterjährigem Eintritt/Wegfall der Schwerbehinderteneigenschaft (§ 208 II) bzw. des Beschäftigungsverhältnisses (§§ 4, 5 BUrlG) und Übertragung (§ 208 III).",
  start: "start",
  stations: [
    { id: "berechtigt", label: "Berechtigung" },
    { id: "dauer", label: "Dauer" },
    { id: "teilurlaub", label: "Teilurlaub" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zusatzurlaub besteht",
    neg: "Ergebnis: kein Zusatzurlaub",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "berechtigt",
      kind: "frage",
      norm: "§ 208 I 1, § 2 II SGB IX",
      title: "Ist die Person schwerbehindert (GdB von wenigstens 50)?",
      def: "<b>Anspruchsgrundlage (§ 208 I 1 SGB IX):</b> Schwerbehinderte Menschen haben Anspruch auf einen <b>bezahlten zusätzlichen Urlaub von fünf Arbeitstagen</b> im Urlaubsjahr (bei Fünf-Tage-Woche). Die Vorschrift ist <b>nicht abdingbar</b>.<br><br><b>Anspruchsberechtigt (§ 2 II SGB IX):</b> nur Menschen mit einem <b>Grad der Behinderung (GdB) von wenigstens 50</b>.<br><br><b>NICHT berechtigt:</b> <b>Gleichgestellte</b> mit einem GdB von weniger als 50, aber mindestens 30 (§ 2 III SGB IX) – sie haben KEINEN Anspruch auf Zusatzurlaub.<br><br>Der Zusatzurlaub verlängert den gesetzlichen Mindesturlaub (BUrlG) bzw. den tariflichen Urlaubsanspruch um fünf Tage; er wird dem Erholungsurlaub hinzugerechnet.",
      options: [
        { label: "Ja, GdB ≥ 50 (schwerbehindert)", next: "q_entstehung", tone: "pos" },
        { label: "Nur gleichgestellt (GdB 30 bis < 50)", next: "e_gleichgestellt", tone: "neg" }
      ]
    },

    q_entstehung: {
      station: "berechtigt",
      kind: "frage",
      norm: "§ 208 I, § 152 SGB IX",
      title: "Wann ist der Anspruch entstanden (Bescheidwirkung)?",
      def: "<b>Entstehung des Anspruchs:</b> mit der Anerkennung der Schwerbehinderteneigenschaft (§ 2 I, II SGB IX). Maßgeblich ist der <b>Zeitpunkt der Feststellung</b> des GdB von wenigstens 50 – <b>nicht das Ausstellungsdatum</b> des Bescheids.<br><br><b>Der Bescheid ist nur DEKLARATORISCH</b> (feststellend), nicht konstitutiv – der Anspruch kann daher auch <b>rückwirkend</b> entstehen (§ 152 I, II SGB IX; BAG v. 25.06.1996 – 9 AZR 182/95).<br><br>Beispiel: Wird die Schwerbehinderung im Dezember rückwirkend ab Juni festgestellt, besteht der (ggf. gezwölftelte) Zusatzurlaub bereits ab Juni.",
      options: [
        { label: "Ganzjährig schwerbehindert", next: "q_dauer", tone: "pos" },
        { label: "Eigenschaft nur einen Teil des Jahres / rückwirkend", next: "q_zwoelftel", tone: "warn" }
      ]
    },

    q_dauer: {
      station: "dauer",
      kind: "frage",
      norm: "§ 208 I 1 SGB IX",
      title: "Wie viele Tage – und wie bei anderer Wochenarbeitstage-Verteilung?",
      def: "<b>Regeldauer:</b> <b>fünf Arbeitstage</b> im Kalenderjahr, bezogen auf die Fünf-Tage-Woche (§ 208 I 1 Hs. 1 SGB IX).<br><br><b>Andere Verteilung (§ 208 I 1 Hs. 2 SGB IX):</b> Verteilt sich die regelmäßige Arbeitszeit auf mehr oder weniger als fünf Arbeitstage, erhöht oder vermindert sich der Zusatzurlaub entsprechend (6-Tage-Woche: 6 Tage; 3-Tage-Woche: 3 Tage).<br><br><b>Rundung bei Umrechnung:</b> Ergeben sich Bruchteile wegen anderer Verteilung, sind sie <b>weder auf- noch abzurunden</b> – weder § 208 II 2 SGB IX noch § 5 II BUrlG noch die tariflichen Rundungsregeln (§ 26 I 3, 4 TVöD) gelten hier. In der Praxis werden die Bruchteile in Stunden umgerechnet und als freie Zeit gewährt.<br><br><b>Günstigere Regelungen</b> (längerer Zusatzurlaub) durch Tarif/Betrieb bleiben unberührt (§ 208 I 2 SGB IX).",
      options: [
        { label: "Fünf-Tage-Woche → 5 Tage (ganzjährig)", next: "e_voll", tone: "pos" },
        { label: "Andere Verteilung → umgerechnet", next: "e_voll", tone: "pos" }
      ]
    },

    q_zwoelftel: {
      station: "teilurlaub",
      kind: "frage",
      norm: "§ 208 II SGB IX / §§ 4, 5 BUrlG",
      title: "Welcher Zwölftelungsgrund liegt vor?",
      def: "Zwei verschiedene Zwölftelungsregeln – je nach Grund:<br><br><b>1. Unterjähriger Eintritt/Wegfall der SCHWERBEHINDERTENEIGENSCHAFT (§ 208 II SGB IX):</b> Für jeden vollen Monat der im Beschäftigungsverhältnis vorliegenden Schwerbehinderteneigenschaft ein Zwölftel des Zusatzurlaubs. <b>Rundung (§ 208 II 2):</b> Bruchteile ≥ ½ Tag → aufrunden (nur AUFrunden, keine Abrundungsregel!).<br><br><b>2. Unterjähriger Beginn/Ende des BESCHÄFTIGUNGSVERHÄLTNISSES:</b> Die tarifliche Zwölftelung des § 26 II b TVöD gilt für den Zusatzurlaub NICHT. Wegen des Mindesturlaubscharakters ist entsprechend <b>§§ 4, 5 BUrlG</b> zu zwölfteln – Zwölftelung nur in den drei Fällen des § 5 I BUrlG (Wartezeit nicht erfüllt / Ausscheiden vor Wartezeit / Ausscheiden in erster Jahreshälfte). Rundung dann nach § 5 II BUrlG.",
      hint: "Skript-Beispiel: SB-Feststellung rückwirkend ab 01.06., 5-Tage-Woche → 5 × 7/12 = 2,92 → aufgerundet 3 Arbeitstage Zusatzurlaub (§ 208 II SGB IX).",
      options: [
        { label: "Unterjährige Schwerbehinderteneigenschaft (§ 208 II)", next: "e_zwoelftel_sb", tone: "warn" },
        { label: "Unterjähriges Beschäftigungsverhältnis (§§ 4, 5 BUrlG)", next: "e_zwoelftel_bv", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 208 I SGB IX",
      title: "Voller Zusatzurlaub (fünf Arbeitstage)",
      text: "Der schwerbehinderte Mensch (GdB ≥ 50) hat Anspruch auf fünf Arbeitstage bezahlten Zusatzurlaub im Kalenderjahr, bei anderer Verteilung der Arbeitszeit entsprechend umgerechnet (§ 208 I SGB IX). Der Zusatzurlaub wird dem Erholungsurlaub hinzugerechnet.\n\nBruchteile aus der Umrechnung werden weder auf- noch abgerundet (keine Rundungsvorschrift), sondern in der Praxis in Stunden als freie Zeit gewährt.\n\nFür die Übertragung ins Folgejahr gelten die urlaubsrechtlichen Regelungen des Beschäftigungsverhältnisses (§ 208 III SGB IX) – im TVöD also § 26 II a TVöD-VKA (Antritt bis 31.03., bei AU/betrieblichen Gründen bis 31.05.)."
    },

    e_zwoelftel_sb: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 208 II SGB IX",
      title: "Gezwölftelter Zusatzurlaub (unterjährige Schwerbehinderung)",
      text: "Besteht die Schwerbehinderteneigenschaft nicht während des ganzen Kalenderjahres, ist der Zusatzurlaub zu zwölfteln: für jeden vollen Monat der im Beschäftigungsverhältnis vorliegenden Schwerbehinderteneigenschaft ein Zwölftel (§ 208 II 1 SGB IX). Bruchteile ≥ ½ Tag werden aufgerundet (§ 208 II 2 SGB IX) – eine Abrundungsregel fehlt (Mindesturlaubscharakter), sodass verbleibende Bruchteile als Zeitanteil zu gewähren sind.\n\nBeispiele (Skript): Feststellung rückwirkend ab 01.06. → 5 × 7/12 = 2,92 → aufgerundet 3 Tage. Ab 01.08. → 5 × 5/12 = 2,08 → 2 volle Tage plus Zeitanteil von 0,08 eines Arbeitstages (≈ 38 min).\n\nDer so ermittelte Zusatzurlaub kann bei nicht ganzjährigem Beschäftigungsverhältnis nicht erneut gemindert werden (§ 208 II 3 SGB IX)."
    },

    e_zwoelftel_bv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 4, 5 BUrlG",
      title: "Gezwölftelter Zusatzurlaub (unterjähriges Beschäftigungsverhältnis)",
      text: "Bei Beginn oder Ende des Beschäftigungsverhältnisses im Laufe des Kalenderjahres wird der Zusatzurlaub NICHT nach § 26 II b TVöD gezwölftelt, sondern wegen seines Mindesturlaubscharakters in entsprechender Anwendung der §§ 4, 5 BUrlG.\n\nEine Zwölftelung ist nach § 5 I BUrlG nur zulässig, wenn die/der Beschäftigte\n• wegen Nichterfüllung der Wartezeit (§ 4: 6 Monate) keinen vollen Anspruch mehr erreicht (Eintritt in der 2. Jahreshälfte),\n• vor erfüllter Wartezeit ausscheidet oder\n• nach erfüllter Wartezeit in der ERSTEN Jahreshälfte ausscheidet.\n\nWer nach erfüllter Wartezeit in der ZWEITEN Jahreshälfte ausscheidet, hat den vollen Zusatzurlaub. Rundung nach § 5 II BUrlG (Bruchteile ≥ ½ Tag aufrunden)."
    },

    e_gleichgestellt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 III, § 208 SGB IX",
      title: "Gleichgestellte haben keinen Anspruch auf Zusatzurlaub",
      text: "Gleichgestellte Menschen mit einem GdB von weniger als 50, aber mindestens 30 (§ 2 III SGB IX) haben KEINEN Anspruch auf den Zusatzurlaub nach § 208 SGB IX – dieser setzt einen GdB von wenigstens 50 voraus (§ 2 II SGB IX).\n\nGleichstellung vermittelt andere Schutzrechte (z. B. besonderen Kündigungsschutz, §§ 168 ff. SGB IX), aber eben nicht den zusätzlichen Urlaub.\n\nEs bleibt beim regulären Erholungsurlaub (§ 26 TVöD, BUrlG)."
    }
  },

  routers: {}
});
