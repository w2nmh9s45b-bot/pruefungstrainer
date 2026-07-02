/*
 * Prüfungsschema: Anspruch auf Nacherfüllung, §§ 437 Nr. 1, 439 BGB
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation FS II - W - 2023" (Birtel-Kaldenhoff) – Schema §§ 437 Nr. 1, 439 (Folie 154 ff.)
 *  - "PR-PowerPoint Folien (2. Studienjahr)" – § 434 BGB n. F. (subjektive/objektive/Montageanforderungen)
 *  - "Privatrecht - FS2 - 2024-25 - Ilias" – Mangelbegriff, Vorrang der Nacherfüllung
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 275, 434, 435, 437–439, 442, 444, 446, 447, 475)
 *
 * Stationen: entstanden → mangel → ausschluss → untergegangen → durchsetzbar → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-kauf-nacherfuellung",
  subject: "Privatrecht",
  area: "Kaufrecht (Gewährleistung)",
  title: "Nacherfüllung, §§ 437 Nr. 1, 439 BGB",
  description: "Wirksamer Kaufvertrag, Sach-/Rechtsmangel (§ 434 n. F.: subjektive, objektive und Montageanforderungen) bei Gefahrübergang, kein Ausschluss (§§ 442, 444), Untergang (§ 275) und Durchsetzbarkeit (§ 439 IV, § 438) – Rechtsfolge: Wahlrecht des Käufers.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "entstanden", label: "Kaufvertrag" },
    { id: "mangel", label: "Mangel bei Gefahrübergang" },
    { id: "ausschluss", label: "Kein Ausschluss" },
    { id: "untergegangen", label: "Nicht untergegangen" },
    { id: "durchsetzbar", label: "Durchsetzbar" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "entstanden",
      kind: "frage",
      norm: "§§ 433, 437 Nr. 1 BGB",
      title: "Liegt ein wirksamer Kaufvertrag vor?",
      text: "Obersatz: „K könnte gegen V einen Anspruch auf Nacherfüllung aus §§ 437 Nr. 1, 439 I BGB haben.“ § 437 BGB ist die Ausgangsnorm aller Mängelrechte – seine Voraussetzungen müssen stets vorliegen.",
      hint: "Die §§ 434 ff. BGB gelten auch für Tausch und Werklieferungsverträge. Der Käufer kann/muss zunächst Nacherfüllung verlangen, ehe er Rücktritt, Minderung oder Schadensersatz geltend macht (Vorrang der Nacherfüllung, Recht des Verkäufers zur „zweiten Andienung“).",
      options: [
        { label: "Ja, wirksamer Kaufvertrag", detail: "Einigung, keine rechtshindernden Einwendungen (Grundschema)", next: "q_mangel_art", tone: "pos" },
        { label: "Nein", next: "e_kein_kv", tone: "neg" }
      ]
    },

    q_mangel_art: {
      station: "mangel",
      kind: "frage",
      norm: "§§ 434, 435 BGB",
      title: "Sach- oder Rechtsmangel?",
      def: "<b>Mangel:</b> negative Abweichung der IST- von der SOLL-Beschaffenheit im Zeitpunkt des Gefahrübergangs. <b>Rechtsmangel (§ 435 BGB):</b> Dritte können in Bezug auf die Sache Rechte gegen den Käufer geltend machen (z. B. Grundstück als öffentliche Straße gewidmet).",
      options: [
        { label: "Sachmangel (§ 434 BGB)", next: "q_434", tone: "neutral" },
        { label: "Rechtsmangel (§ 435 BGB)", next: "q_gefahruebergang", set: { rechtsmangel: true }, tone: "neutral" },
        { label: "Kein Mangel erkennbar", next: "e_kein_mangel", tone: "neg" }
      ]
    },

    q_434: {
      station: "mangel",
      kind: "frage",
      norm: "§ 434 BGB",
      title: "Welche Anforderung des § 434 BGB ist verletzt?",
      text: "Die Sache ist frei von Sachmängeln, wenn sie bei Gefahrübergang den subjektiven Anforderungen, den objektiven Anforderungen UND den Montageanforderungen entspricht (§ 434 I BGB n. F.).",
      def: "<b>Subjektiv (§ 434 II):</b> vereinbarte Beschaffenheit (Nr. 1), vertraglich vorausgesetzte Verwendung (Nr. 2), vereinbartes Zubehör und Anleitungen (Nr. 3). <b>Objektiv (§ 434 III):</b> Eignung für die gewöhnliche Verwendung, übliche und zu erwartende Beschaffenheit (auch nach öffentlichen Äußerungen/Werbung!), Probe/Muster, übliches Zubehör. <b>Montage (§ 434 IV):</b> unsachgemäße Montage oder mangelhafte Anleitung („IKEA-Klausel“). <b>Aliud (§ 434 V):</b> Lieferung einer anderen Sache steht dem Sachmangel gleich.",
      options: [
        { label: "Subjektive Anforderungen verletzt (§ 434 II BGB)", detail: "Abweichung von Vereinbarung oder vorausgesetzter Verwendung", next: "q_gefahruebergang", tone: "neutral" },
        { label: "Objektive Anforderungen verletzt (§ 434 III BGB)", detail: "Eignung/übliche Beschaffenheit – inkl. Werbeaussagen des Herstellers", next: "q_gefahruebergang", tone: "neutral" },
        { label: "Montageanforderungen verletzt (§ 434 IV BGB)", next: "q_gefahruebergang", tone: "neutral" },
        { label: "Falschlieferung / aliud (§ 434 V BGB)", next: "q_gefahruebergang", tone: "neutral" }
      ]
    },

    q_gefahruebergang: {
      station: "mangel",
      kind: "frage",
      norm: "§§ 446, 447 BGB",
      title: "Lag der Mangel bei Gefahrübergang vor?",
      text: "Maßgeblicher Zeitpunkt ist der Gefahrübergang: grundsätzlich die Übergabe an den Käufer (§ 446 BGB); beim Versendungskauf die Übergabe an die Transportperson (§ 447 BGB).",
      hint: "Beim Verbrauchsgüterkauf: Zeigt sich der Mangel innerhalb eines Jahres ab Gefahrübergang, wird vermutet, dass er schon bei Gefahrübergang vorlag (§ 477 BGB).",
      options: [
        { label: "Ja, bei Gefahrübergang vorhanden", next: "q_ausschluss", tone: "pos" },
        { label: "Nein, erst später entstanden", next: "e_kein_mangel", tone: "neg" }
      ]
    },

    q_ausschluss: {
      station: "ausschluss",
      kind: "frage",
      norm: "§§ 442, 444 BGB",
      title: "Ist die Gewährleistung ausgeschlossen?",
      def: "<b>Vertraglicher Ausschluss:</b> möglich, aber unwirksam, soweit der Verkäufer den Mangel arglistig verschwiegen oder eine Beschaffenheitsgarantie übernommen hat (§ 444 BGB); beim Verbrauchsgüterkauf § 476 BGB beachten. <b>Gesetzlicher Ausschluss (§ 442 BGB):</b> Käufer kennt den Mangel bei Vertragsschluss (I 1); bei grob fahrlässiger Unkenntnis nur Rechte bei Arglist oder Garantie (I 2). <b>Arglist:</b> Mangel für möglich halten + damit rechnen, dass der Käufer ihn nicht kennt und bei Kenntnis nicht (so) kaufen würde – auch Angaben „ins Blaue hinein“.",
      options: [
        { label: "Kein Ausschluss", next: "q_untergegangen", tone: "pos" },
        { label: "Vertraglicher Ausschluss – aber Arglist/Garantie", detail: "Ausschluss unwirksam, § 444 BGB – Rechte bleiben", next: "q_untergegangen", tone: "warn" },
        { label: "Wirksamer Ausschluss (§ 442 oder Vertrag)", next: "e_ausschluss", tone: "neg" }
      ]
    },

    q_untergegangen: {
      station: "untergegangen",
      kind: "frage",
      norm: "§§ 362, 275 BGB",
      title: "Ist der Nacherfüllungsanspruch untergegangen?",
      text: "Zwischenergebnis: Der Anspruch ist entstanden. ✓ Er darf nicht durch Erfüllung (§ 362 BGB) oder Unmöglichkeit (§ 275 I BGB) untergegangen sein. Unmöglichkeit für Nachbesserung und Nachlieferung GETRENNT prüfen!",
      def: "<b>Nachlieferung bei der Stückschuld:</b> möglich, wenn der Käufer die Sache nach allgemeinen Kriterien ausgesucht hat und gleichartige Stücke verfügbar sind; ausgeschlossen, wenn es auf den persönlichen Gesamteindruck ankam (z. B. besichtigter Gebrauchtwagen). Bei der Gattungsschuld ist Nachlieferung stets möglich.",
      options: [
        { label: "Nein, mindestens eine Nacherfüllungsvariante möglich", next: "q_439iv", tone: "pos" },
        { label: "Beide Varianten unmöglich (§ 275 I BGB)", detail: "Dann direkt Rücktritt/Minderung/Schadensersatz – ohne Fristsetzung", next: "e_unmoeglich", tone: "neg" }
      ]
    },

    q_439iv: {
      station: "durchsetzbar",
      kind: "frage",
      norm: "§ 439 IV BGB",
      title: "Verweigert der Verkäufer wegen Unverhältnismäßigkeit?",
      text: "Der Verkäufer kann die vom Käufer gewählte Art der Nacherfüllung verweigern, wenn sie nur mit unverhältnismäßigen Kosten möglich ist (Einrede!). Abzuwägen: Wert der mangelfreien Sache, Bedeutung des Mangels, Nachteile für den Käufer (§ 439 IV 2 BGB).",
      def: "<b>Relative Unverhältnismäßigkeit:</b> gewählte Art deutlich teurer als die andere (Faustformel: 5–25 % Mehrkosten, einzelfallabhängig) – Verweisung auf die andere Art. <b>Absolute Unverhältnismäßigkeit:</b> beide Arten unverhältnismäßig teuer – Verkäufer kann die Nacherfüllung insgesamt verweigern (§ 439 IV 3 Hs. 2 BGB).",
      options: [
        { label: "Keine Unverhältnismäßigkeit / Einrede nicht erhoben", next: "q_verjaehrung", tone: "pos" },
        { label: "Relative Unverhältnismäßigkeit", detail: "Nur Verweisung auf die andere Nacherfüllungsart", next: "q_verjaehrung", set: { verweisung: true }, tone: "warn" },
        { label: "Absolute Unverhältnismäßigkeit – Verweigerung insgesamt", next: "e_439iv", tone: "neg" }
      ]
    },

    q_verjaehrung: {
      station: "durchsetzbar",
      kind: "frage",
      norm: "§§ 438, 214 I BGB",
      title: "Ist der Anspruch verjährt (und wird die Einrede erhoben)?",
      text: "Mängelansprüche verjähren nach § 438 BGB – regelmäßig in ZWEI Jahren ab Ablieferung (§ 438 I Nr. 3, II BGB); bei Bauwerken 5 Jahre (Nr. 2), bei dinglichen Herausgaberechten Dritter 30 Jahre (Nr. 1). Bei Arglist gilt die regelmäßige Verjährung (§ 438 III BGB).",
      options: [
        { label: "Nicht verjährt / Einrede nicht erhoben", next: "e_anspruch", tone: "pos" },
        { label: "Verjährt und Einrede erhoben (§ 214 I BGB)", next: "e_verjaehrt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 439 I BGB",
      title: "Anspruch auf Nacherfüllung (+)",
      text: "Der Käufer kann nach seiner Wahl Beseitigung des Mangels (Nachbesserung) oder Lieferung einer mangelfreien Sache (Nachlieferung) verlangen (§ 439 I BGB). Der Verkäufer trägt die zum Zwecke der Nacherfüllung erforderlichen Aufwendungen – Transport-, Wege-, Arbeits- und Materialkosten (§ 439 II BGB), einschließlich Aus- und Einbau (§ 439 III BGB).\n\nErst nach erfolglosem Ablauf einer angemessenen Frist: Rücktritt/Minderung (§§ 437 Nr. 2, 440, 323, 441 BGB) und Schadensersatz (§§ 437 Nr. 3, 280 ff. BGB)."
    },

    e_kein_kv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 433 BGB",
      title: "Kein Anspruch – kein wirksamer Kaufvertrag (–)",
      text: "Ohne wirksamen Kaufvertrag keine Gewährleistungsrechte. Rückabwicklung bereits ausgetauschter Leistungen über §§ 812 ff., 985 BGB."
    },

    e_kein_mangel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 434 BGB",
      title: "Kein Anspruch – kein Mangel bei Gefahrübergang (–)",
      text: "Die Sache entsprach bei Gefahrübergang den subjektiven, objektiven und Montageanforderungen (bzw. der Mangel entstand erst danach in der Sphäre des Käufers). Gewährleistungsrechte scheiden aus."
    },

    e_ausschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 442, 444 BGB",
      title: "Kein Anspruch – Gewährleistung ausgeschlossen (–)",
      text: "Die Mängelhaftung ist wirksam ausgeschlossen (vertraglich ohne Arglist/Garantie bzw. wegen Kenntnis des Käufers nach § 442 I BGB). Beachte beim Verbrauchsgüterkauf die engen Grenzen des § 476 BGB."
    },

    e_unmoeglich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 275 I BGB",
      title: "Nacherfüllung unmöglich – Sekundärrechte ohne Frist",
      text: "Sind beide Arten der Nacherfüllung unmöglich, ist der Nacherfüllungsanspruch nach § 275 I BGB ausgeschlossen. Der Käufer kann dann OHNE Fristsetzung zurücktreten (§§ 437 Nr. 2, 326 V BGB), mindern (§ 441 BGB) oder Schadensersatz statt der Leistung verlangen (§§ 437 Nr. 3, 280 I, III, 283 BGB) – siehe die Schemata „Rücktritt und Minderung“ und „Schadensersatz beim Kauf“."
    },

    e_439iv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 439 IV BGB",
      title: "Nacherfüllung verweigert – Unverhältnismäßigkeit (–)",
      text: "Der Verkäufer verweigert die Nacherfüllung insgesamt berechtigt wegen absoluter Unverhältnismäßigkeit. Der Käufer ist auf die Sekundärrechte verwiesen: Rücktritt/Minderung (§ 440 S. 1 Alt. 1 BGB – Fristsetzung entbehrlich!) und Schadensersatz."
    },

    e_verjaehrt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 438, 214 I BGB",
      title: "Anspruch nicht durchsetzbar – Verjährung (–)",
      text: "Der Nacherfüllungsanspruch ist verjährt; der Verkäufer verweigert die Leistung (§ 214 I BGB).\n\nWichtig: Auch Rücktritt und Minderung sind dann unwirksam (§§ 438 IV, V i. V. m. § 218 BGB) – Gestaltungsrechte verjähren zwar nicht, „verfristen“ aber mit dem Nacherfüllungsanspruch."
    }
  }
});
