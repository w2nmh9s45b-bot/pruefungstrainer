/*
 * IRW-Schema: Geschäftsvorfall einordnen – Auszahlung? Aufwand? Kosten?
 * Fach: Internes Rechnungswesen (FS 2)
 * Der Klausur-Klassiker aus OLE 01 / PLE 02-03: die Prüfkaskade über die
 * Bestandsgrößen (ZMB → Geldvermögen → Reinvermögen → Betriebszweck) mit den
 * Original-Übungsfällen (Beamtenbezüge, Vorratsverbrauch, Kredittilgung u. a.).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 01 (Lutz): Begriffssystematik, Strömungs-/Bestandsgrößen, Beispiele
 *  - PLE 02-03 (Lutz): Lösungen des Arbeitsauftrags, Kosten-/Leistungsdefinition
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-stromgroessen",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Grundlagen & Begriffe",
  title: "Geschäftsvorfall einordnen: Auszahlung – Aufwand – Kosten",
  description: "Die Prüfkaskade über die Bestandsgrößen: Fließt Geld (ZMB)? Sinkt das Reinvermögen (Ressourcenverzehr)? Ist der Verzehr betriebsbedingt? Mit den Übungsfällen aus dem Skript (Beamtenbezüge, Vorräte, Kredittilgung, Grundstück).",
  start: "start",
  stations: [
    { id: "system", label: "System" },
    { id: "zmb", label: "ZMB" },
    { id: "rv", label: "Reinvermögen" },
    { id: "kosten", label: "Betriebszweck" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Einordnung steht",
    neg: "Ergebnis: kein Ressourcenverzehr",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  resultExtras: function (flags, node) {
    if (node !== "e_aufwand" && node !== "e_aufwand_neutral") return "";
    return flags.auszahlung
      ? "Zusätzlich gilt: Der Zahlungsmittelbestand sinkt – es liegt AUCH eine Auszahlung (und Ausgabe) vor."
      : "Der Zahlungsmittelbestand ist nicht berührt – es liegt KEINE Auszahlung vor (Buchgröße ohne Geldfluss).";
  },

  nodes: {

    start: {
      station: "system",
      kind: "frage",
      norm: "Begriffssystematik",
      title: "Das Prüfgerüst: Stromgrößen verändern Bestandsgrößen",
      def: "Vier Begriffspaare (Stromgrößen) wirken auf drei Bestandsgrößen:<br><br>• <b>Auszahlung/Einzahlung</b> → <b>Zahlungsmittelbestand</b> (Kasse + Girokonto)<br>• <b>Ausgabe/Einnahme</b> → <b>Geldvermögen</b> (ZMB + Forderungen − Verbindlichkeiten)<br>• <b>Aufwand/Ertrag</b> → <b>Reinvermögen</b> (Geldvermögen + Sachvermögen)<br>• <b>Kosten/Leistung</b> → Reinvermögen, aber nur der BETRIEBSBEDINGTE Verzehr<br><br>Im internen Rewe werden Auszahlung/Ausgabe vereinfachend gleich behandelt – elementar ist der Unterschied <b>Auszahlung ↔ Aufwand</b>!",
      hint: "Prüfschema je Vorgang: ZMB? Forderungen? Verbindlichkeiten? Sachvermögen? → Was ändert sich per Saldo beim Reinvermögen?",
      options: [
        { label: "Vorgang prüfen (Kaskade starten)", next: "q_zmb", tone: "pos" }
      ]
    },

    q_zmb: {
      station: "zmb",
      kind: "frage",
      norm: "Auszahlung?",
      title: "Schritt 1: Fließt Geld – sinkt der Zahlungsmittelbestand?",
      def: "Eine <b>Auszahlung</b> liegt vor, wenn der Vorgang den Zahlungsmittelbestand (Kasse, Bank) verringert – der tatsächliche Zahlungsmittelabfluss. <i>Merke: Auszahlung bedeutet, dass Geld fließt!</i><br><br>Beispiele: Banküberweisung der Bezüge, Barzahlung, Kredittilgung.<br>KEINE Auszahlung: Abschreibung, Verbrauch gelagerter Vorräte, Kauf auf Ziel (nur Ausgabe – Verbindlichkeit entsteht).",
      options: [
        { label: "Ja – Geld fließt ab", next: "q_rv", set: { auszahlung: true }, tone: "pos" },
        { label: "Nein – kein Geldfluss", next: "q_rv", set: { auszahlung: false }, tone: "neg" }
      ]
    },

    q_rv: {
      station: "rv",
      kind: "frage",
      norm: "Aufwand?",
      title: "Schritt 2: Sinkt per Saldo das Reinvermögen?",
      def: "Durchlaufe das Prüfschema:<br><br><b>ZMB + Forderungen − Verbindlichkeiten (= Geldvermögen) + Sachvermögen (inkl. Vorräte) = Reinvermögen</b><br><br>• Grundstück gegen Bank bezahlt: ZMB −, Sachvermögen + → Reinvermögen unverändert = <b>Aktivtausch</b>, kein Aufwand<br>• Kredit getilgt: ZMB −, Verbindlichkeiten − → Reinvermögen unverändert = Aktiv-Passiv-Minderung, kein Aufwand<br>• Vorräte verbraucht: Sachvermögen − → Reinvermögen − = <b>Aufwand ohne Auszahlung</b><br>• Bezüge überwiesen: ZMB −, sonst nichts → Reinvermögen − = Auszahlung UND Aufwand",
      options: [
        { label: "Reinvermögen sinkt → Ressourcenverzehr (Aufwand)", next: "q_betrieb", tone: "pos" },
        { label: "Reinvermögen bleibt gleich → kein Aufwand", next: "e_kein_aufwand", tone: "neg" }
      ]
    },

    q_betrieb: {
      station: "kosten",
      kind: "frage",
      norm: "Kosten?",
      title: "Schritt 3: Ist der Verzehr leistungsbedingt (Betriebszweck)?",
      def: "<b>Kosten</b> sind der bewertete, LEISTUNGSBEDINGTE (betriebsbedingte, sachzielbezogene) Güterverzehr – er muss mit den Produkten der Verwaltung zusammenhängen.<br><br>Skript-Beispiel: Die Spende einer Kommune an ein SOS-Kinderdorf ist Ressourcenverbrauch (= Aufwand), steht aber mit keinem Produkt in Verbindung → <b>keine Kosten</b> (betriebsfremder Aufwand).<br><br>Auch außerordentliche (Hochwasserschaden) und periodenfremde Verzehre (Steuernachzahlung) gehen nicht bzw. nicht in dieser Höhe in die Kostenrechnung → Abgrenzungs-Schema.",
      options: [
        { label: "Ja – betriebsbedingt → auch Kosten", next: "e_aufwand", tone: "pos" },
        { label: "Nein – betriebsfremd/außerordentlich/periodenfremd", next: "e_aufwand_neutral", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kein_aufwand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Kein Ressourcenverzehr",
      title: "Kein Aufwand – allenfalls Auszahlung/Ausgabe",
      text: "Das Reinvermögen bleibt unverändert, also liegt KEIN Aufwand und erst recht keine Kostenposition vor.\n\nTypische Fälle:\n• Grundstückskauf gegen Banküberweisung: ZMB sinkt, Sachvermögen steigt – reiner AKTIVTAUSCH; nur Auszahlung (und Ausgabe).\n• Kredittilgung: ZMB sinkt, Verbindlichkeiten sinken – Aktiv-Passiv-Minderung; nur Auszahlung.\n• Kauf auf Ziel: noch nicht einmal eine Auszahlung, sondern nur eine AUSGABE (Geldvermögen sinkt über die Verbindlichkeit); das Geld fließt erst bei Bezahlung.\n\nMerke: Auszahlung ≠ Aufwand – die beiden trennt das Sach- und Schuldenbild des Reinvermögens."
    },

    e_aufwand: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Zweckaufwand/Grundkosten",
      title: "Aufwand UND Kosten (Zweckaufwand = Grundkosten)",
      text: "Das Reinvermögen sinkt durch einen betriebsbedingten Güterverzehr: Der Vorgang ist AUFWAND im externen Rewe und geht mit GLEICHEM Betrag als KOSTEN in die Kostenrechnung ein (Zweckaufwand/Grundkosten).\n\nSkript-Fälle: Überweisung der Beamtenbezüge (Auszahlung + Aufwand + Kosten), Verbrauch von Vorräten (Aufwand + Kosten ohne Auszahlung), Überweisung von FK-Zinsen, Materialverbrauch, Energiekosten, Versicherungen, Kfz-Steuer, Sozialversicherungsaufwendungen.\n\nDenk daran: Es gibt auch Kosten OHNE Aufwand – die Zusatzkosten (kalkulatorische Eigenkapitalzinsen); sie tauchen nur in der Kostenrechnung auf → Schema „Aufwand und Kosten abgrenzen“."
    },

    e_aufwand_neutral: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Neutraler Aufwand",
      title: "Aufwand ohne Kostencharakter (neutraler Aufwand)",
      text: "Es liegt zwar ein Ressourcenverzehr (Aufwand) vor, aber er ist nicht leistungsbedingt bzw. gehört nicht in die Kostenrechnung der laufenden Periode:\n\n• BETRIEBSFREMD: kein Zusammenhang mit dem Betriebszweck (Spenden, ausgeliehener, aber weiterbezahlter Mitarbeiter, Pacht für ein betriebsfremdes Grundstück)\n• AUSSERORDENTLICH: unüblich, zufallsbedingt, nicht planbar (Hochwasser-, Feuerschäden, Diebstahl, Vandalismus) – würde Kalkulation und Jahresvergleiche verfälschen\n• PERIODENFREMD: gehört in eine andere Periode (Steuernachzahlung, Gerichtsgebühren für den Vorjahresprozess, Besoldungsnachzahlung)\n\nDetails und die Gegenrichtung (Zusatzkosten) im Schema „Aufwand und Kosten abgrenzen“."
    }
  }
});
