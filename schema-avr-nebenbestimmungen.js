/*
 * Prüfungsschema: Nebenbestimmungen zum VA (§ 36 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS I):
 *  - "AVR OLE 24 – Nebenbestimmungen zum Verwaltungsakt" (Rankenhohn –
 *    Abgrenzung Inhaltsbestimmung, Arten, § 36 I/II/III, Beispiele)
 *  - Gesetze: VwVfG § 36 (Volltext geprüft); § 5 GastG, § 12 BImSchG als
 *    spezialgesetzliche Beispiele
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-nebenbestimmungen",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS1"],
  area: "Der Verwaltungsakt",
  title: "Nebenbestimmungen zum VA (§ 36 VwVfG)",
  description: "Echte Nebenbestimmung oder Inhaltsbestimmung? Befristung, Bedingung, Widerrufsvorbehalt, Auflage und Auflagenvorbehalt mit Definitionen; Zulässigkeit nach § 36 I/II VwVfG, Grenzen des § 36 III und Rechtsschutz gegen belastende Nebenbestimmungen.",
  start: "start",
  stations: [
    { id: "abgrenzung", label: "Abgrenzung" },
    { id: "art", label: "Art der NB" },
    { id: "zulaessig", label: "Zulässigkeit" },
    { id: "grenzen", label: "Grenzen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: NB zulässig",
    neg: "Ergebnis: NB unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§ 36 VwVfG",
      title: "Liegt überhaupt eine echte Nebenbestimmung vor?",
      text: "Die Nebenbestimmung ist ein Zusatz zu einem Verwaltungsakt, der dessen Regelungsinhalt erweitert oder beschränkt. Sie ermöglicht statt der strikten Ablehnung ein „Ja, aber“ – und muss sich von der Regelung des Haupt-VA unterscheiden (eigene, unterscheidbare Regelung aus Sicht eines objektiven Empfängers).",
      def: "<b>KEINE Nebenbestimmung:</b><br>• <b>Inhaltsbestimmungen</b> – regeln nur die Reichweite des Haupt-VA:<br>&nbsp;&nbsp;– „aliud“ / modifizierte Genehmigung (qualitativ anders als beantragt, z. B. Flachdach statt Satteldach genehmigt),<br>&nbsp;&nbsp;– „Minus“ / Teilgenehmigung (quantitativ weniger, z. B. Erlaubnis nur für 3 Jahre statt unbefristet beantragt),<br>• <b>bloße Hinweise auf die Rechtslage</b> (z. B. Hinweis auf das Erlöschen der Baugenehmigung nach § 74 LBauO).",
      options: [
        { label: "Echte NB mit eigener, unterscheidbarer Regelung", next: "q_art", tone: "pos" },
        { label: "Inhaltsbestimmung (aliud / Minus)", next: "e_inhaltsbestimmung", tone: "warn" },
        { label: "Bloßer Hinweis auf die Rechtslage", next: "e_hinweis", tone: "warn" }
      ]
    },

    q_art: {
      station: "art",
      kind: "frage",
      norm: "§ 36 II Nr. 1–5 VwVfG",
      title: "Welche Art von Nebenbestimmung liegt vor?",
      def: "<b>Unselbständige NB</b> (Teil des Haupt-VA, „erlassen mit“ – beeinflussen dessen Wirksamkeit unmittelbar):<br>• <b>Befristung</b> (Nr. 1): Vergünstigung/Belastung ist nach Beginn, Ende oder Dauer an einen bestimmten Zeitraum gebunden,<br>• <b>Bedingung</b> (Nr. 2): Beginn (aufschiebend) oder Ende (auflösend) hängt vom ungewissen Eintritt eines zukünftigen Ereignisses ab,<br>• <b>Widerrufsvorbehalt</b> (Nr. 3): Befugnis der Behörde, den rechtmäßigen VA unter bestimmten Voraussetzungen mit Wirkung für die Zukunft zu beenden.<br><br><b>Selbständige NB</b> (nach h. M. eigene VAs, „verbunden mit“ – selbst vollstreckbar):<br>• <b>Auflage</b> (Nr. 4): dem Adressaten wird zusätzlich ein Tun, Dulden oder Unterlassen vorgeschrieben,<br>• <b>Auflagenvorbehalt</b> (Nr. 5): Vorbehalt der nachträglichen Aufnahme, Änderung oder Ergänzung einer Auflage.",
      hint: "Abgrenzung Bedingung/Auflage: Die Bedingung suspendiert, zwingt aber nicht; die Auflage zwingt, suspendiert aber nicht (sie ist selbständig durchsetzbar, lässt die Wirksamkeit des Haupt-VA aber unberührt). Der Katalog des § 36 II ist nach h. M. nicht abschließend.",
      options: [
        { label: "Befristung, Bedingung oder Widerrufsvorbehalt (unselbständig)", next: "q_egl", tone: "neutral" },
        { label: "Auflage oder Auflagenvorbehalt (selbständig)", next: "q_egl", tone: "neutral" }
      ]
    },

    q_egl: {
      station: "zulaessig",
      kind: "frage",
      norm: "Spezialgesetz / § 36 VwVfG",
      title: "Auf welcher Grundlage wird die NB beigefügt?",
      def: "Als Maßnahme, die in Rechte des Betroffenen eingreift, bedarf die NB einer gesetzlichen Grundlage.<br><br><b>Prüfreihenfolge:</b><br>1. <b>Spezialgesetzliche Regelung</b> (vorrangig!) – z. B. § 5 I GastG (Auflagen zur Gaststättenerlaubnis), § 12 BImSchG,<br>2. sonst <b>§ 36 VwVfG</b> – dann entscheidet der Rechtscharakter des Haupt-VA (gebunden oder Ermessen).",
      options: [
        { label: "Spezialgesetzliche NB-Ermächtigung", next: "q_grenzen", tone: "pos" },
        { label: "§ 36 VwVfG – Haupt-VA ist gebundene Entscheidung", next: "q_gebunden", tone: "neutral" },
        { label: "§ 36 VwVfG – Haupt-VA steht im Ermessen", next: "q_ermessen", tone: "neutral" }
      ]
    },

    q_gebunden: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 36 I VwVfG",
      title: "Gebundener VA: Ist die NB nach § 36 I VwVfG zulässig?",
      def: "Bei einem VA, auf den ein <b>Anspruch</b> besteht, ist eine NB nur zulässig, wenn<br>• sie durch <b>Rechtsvorschrift zugelassen</b> ist, oder<br>• sie <b>sicherstellen soll, dass die gesetzlichen Voraussetzungen des VA erfüllt werden</b> – d. h. erst die NB räumt bestehende Versagungsgründe aus.<br><br><b>Beispiel:</b> Das Bauvorhaben verstößt gegen Brandschutzvorschriften – statt Ablehnung wird die Baugenehmigung mit der Verpflichtung erteilt, eine Brandschutzmauer zu errichten.",
      options: [
        { label: "Ja, durch Rechtsvorschrift zugelassen", next: "q_grenzen", tone: "pos" },
        { label: "Ja, NB stellt gesetzliche Voraussetzungen sicher", next: "q_grenzen", tone: "pos" },
        { label: "Nein, keine der Varianten", next: "e_unzulaessig_36_1", tone: "neg" }
      ]
    },

    q_ermessen: {
      station: "zulaessig",
      kind: "frage",
      norm: "§ 36 II VwVfG",
      title: "Ermessens-VA: NB nach pflichtgemäßem Ermessen?",
      def: "Steht der Erlass des Haupt-VA im <b>Ermessen</b> der Behörde, darf er nach pflichtgemäßem Ermessen auch mit einer NB nach § 36 II Nr. 1–5 VwVfG erlassen werden.<br><br><b>Beispiel:</b> Sondernutzungserlaubnis für Werbung auf dem Gehweg, beschränkt auf bestimmte Zeiten, um den Verkehr nicht zu belasten.<br><br>Das Ermessen muss fehlerfrei ausgeübt werden (§ 40 VwVfG – Nichtgebrauch, Fehlgebrauch, Überschreitung prüfen).",
      options: [
        { label: "Ermessen fehlerfrei ausgeübt", next: "q_grenzen", tone: "pos" },
        { label: "Ermessensfehler bei der Beifügung", next: "e_unzulaessig_ermessen", tone: "neg" }
      ]
    },

    q_grenzen: {
      station: "grenzen",
      kind: "frage",
      norm: "§ 36 III VwVfG",
      title: "Wahrt die NB die Grenzen des § 36 III VwVfG?",
      def: "<b>Allgemeine Schranke (§ 36 III VwVfG):</b> Die NB darf dem <b>Zweck des VA nicht zuwiderlaufen</b>. Sie muss<br>• <b>sachgerecht und sachbezogen</b> sein (sachlicher Zusammenhang mit der Hauptregelung – <b>Koppelungsverbot</b>!),<br>• dem Grundsatz der <b>Verhältnismäßigkeit</b> entsprechen.<br><br><b>Beispiel unzulässiger Koppelung:</b> Die Gaststättenerlaubnis wird davon abhängig gemacht, dass der Wirt auf zulässige Erweiterungen der Gaststätte verzichtet.",
      options: [
        { label: "Ja, sachbezogen und verhältnismäßig", next: "e_zulaessig", tone: "pos" },
        { label: "Nein, Zweckwidrigkeit / Koppelungsverbot verletzt", next: "e_unzulaessig_grenzen", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_zulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 36 VwVfG",
      title: "Die Nebenbestimmung ist rechtmäßig",
      text: "Die NB beruht auf einer tauglichen Grundlage (Spezialgesetz bzw. § 36 I/II VwVfG), wahrt die Grenzen des § 36 III VwVfG und ist verhältnismäßig. Der Haupt-VA konnte mit dieser NB erlassen werden.\n\nDurchsetzung: Auflagen sind als selbständige VAs eigenständig vollstreckbar; bei Nichterfüllung kommt außerdem der Widerruf des Haupt-VA nach § 49 II 1 Nr. 2 VwVfG in Betracht."
    },

    e_inhaltsbestimmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 36 VwVfG",
      title: "Keine NB, sondern Inhaltsbestimmung (aliud / Minus)",
      text: "Die Bestimmung legt nur den Inhalt bzw. die Reichweite des Haupt-VA fest und trifft keine eigenständige, gesondert durchsetzbare Regelung. § 36 VwVfG ist nicht anwendbar.\n\nRechtsschutz: Wer mehr oder etwas anderes will, als genehmigt wurde, muss im Wege des Verpflichtungswiderspruchs/-klage auf die uneingeschränkte bzw. beantragte Genehmigung vorgehen – eine isolierte Anfechtung scheidet aus."
    },

    e_hinweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 35 VwVfG",
      title: "Bloßer Hinweis auf die Rechtslage – keine Regelung",
      text: "Der Zusatz wiederholt nur, was ohnehin kraft Gesetzes gilt (z. B. gesetzliche Erlöschensfristen). Ihm fehlt der Regelungscharakter – er ist weder VA noch Nebenbestimmung und kann nicht angefochten werden."
    },

    e_unzulaessig_36_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 I VwVfG",
      title: "NB unzulässig: Anspruchs-VA darf nicht beschränkt werden",
      text: "Auf den Haupt-VA besteht ein gesetzlicher Anspruch. Eine NB ist weder durch Rechtsvorschrift zugelassen noch dient sie der Sicherstellung der gesetzlichen Voraussetzungen – sie ist nach § 36 I VwVfG unzulässig und rechtswidrig.\n\nRechtsschutz: Gegen belastende NB ist nach h. M. die ISOLIERTE Anfechtungsklage statthaft, sofern die NB vom Haupt-VA trennbar ist und der VA ohne sie sinnvoll und rechtmäßig bestehen bleiben kann (bei unselbständigen NB letztlich eine Frage der Begründetheit)."
    },

    e_unzulaessig_ermessen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 II, § 40 VwVfG",
      title: "NB unzulässig: Ermessensfehler",
      text: "Die Beifügung der NB beruht auf einer fehlerhaften Ermessensausübung (§ 40 VwVfG) und ist rechtswidrig.\n\nRechtsschutz: isolierte Anfechtung der NB (h. M.), sofern trennbar; andernfalls Verpflichtungsklage auf Erlass des VA ohne die belastende NB."
    },

    e_unzulaessig_grenzen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 36 III VwVfG",
      title: "NB unzulässig: Verstoß gegen § 36 III VwVfG",
      text: "Die NB läuft dem Zweck des Haupt-VA zuwider, steht in keinem sachlichen Zusammenhang mit ihm (Koppelungsverbot) oder ist unverhältnismäßig. Sie ist rechtswidrig.\n\nRechtsschutz: isolierte Anfechtung der NB (h. M.), sofern der Haupt-VA ohne die NB sinnvoll und rechtmäßig bestehen bleiben kann."
    }
  },

  routers: {}
});
