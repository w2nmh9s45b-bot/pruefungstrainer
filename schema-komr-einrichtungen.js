/*
 * Prüfungsschema: Anspruch auf Zulassung zu einer öffentlichen Einrichtung
 * (§ 14 II-IV GemO; Anschluss- und Benutzungszwang § 26 GemO)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR - FS III LE 28 - OLE 05 - Oeffentliche Einrichtungen - Begriff und
 *    Benutzungsanspruch" (Schäfer)
 *  - "KomR-FS III-LV-29 PLE 21 - Einschraenkung Benutzungsanspruch / Ausgestaltung
 *    Benutzungsverhaeltnis" (Böhle)
 *  - "FS III - KomR - 08. Oeffentliche Einrichtungen - Skript"
 *  - Gesetze: GemO RLP §§ 14, 26 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-einrichtungen",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Öffentliche Einrichtungen",
  title: "Zulassung zur öffentlichen Einrichtung (§ 14 GemO)",
  description: "Anspruch auf Benutzung öffentlicher Einrichtungen: Begriff und Widmung, Kreis der Berechtigten (§ 14 II–IV GemO, Parteienprivileg), Einschränkungen (Widmungszweck, Satzung, Kapazität), Zwei-Stufen-Theorie, private Trägerschaft sowie Anschluss- und Benutzungszwang (§ 26 GemO).",
  start: "start",
  stations: [
    { id: "einrichtung", label: "Öffentl. Einrichtung" },
    { id: "berechtigt", label: "Berechtigte" },
    { id: "umfang", label: "Einschränkungen" },
    { id: "durchsetzung", label: "Durchsetzung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zulassungsanspruch besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: eingeschränkter Anspruch"
  },

  nodes: {

    start: {
      station: "einrichtung",
      kind: "frage",
      norm: "§ 14 II GemO",
      title: "Handelt es sich um eine ÖFFENTLICHE Einrichtung der Gemeinde?",
      def: "<b>Öffentliche Einrichtung</b> = Leistungsangebot, das die Gemeinde im öffentlichen Interesse (Daseinsvorsorge) in Erfüllung ihrer Aufgaben schafft, unterhält und den Einwohnern zur Benutzung zur Verfügung stellt – unabhängig von der Rechtsform.<br><b>Öffentlich-rechtlicher Charakter durch:</b> WIDMUNG (Hoheitsakt – auch konkludent, durch bekanntgemachten Ratsbeschluss, Satzung oder Allgemeinverfügung) + tatsächliche INDIENSTSTELLUNG (Realakt).<br><b>Beispiele:</b> Grillhütte, Bürgerhaus, Schwimmbad, Museum, Bücherei, Friedhof, Kita, amtlicher Teil des Amtsblatts.",
      hint: "Organkompetenz: Errichtung, Erweiterung, Übernahme und Aufhebung → Gemeinderat (§ 32 II Nr. 14 GemO, Ratsvorbehalt); die Zulassung im Einzelfall → Bürgermeister (Geschäft der laufenden Verwaltung, § 47 I 2 Nr. 3 GemO), solange der Widmungszweck gewahrt ist.",
      options: [
        { label: "Ja, gewidmete öffentliche Einrichtung", next: "q_berechtigt", tone: "pos" },
        { label: "Nein – öffentliche Sache im Gemeingebrauch", detail: "Straßen, Wege, Plätze, Ruhebänke: Nutzung jederzeit ohne Zulassung", next: "e_gemeingebrauch", tone: "neutral" },
        { label: "Nein – Verwaltungs- oder Fiskalvermögen", detail: "Rathaus, Bauhof, vermietete Wohnungen", next: "e_kein_oe", tone: "neg" }
      ]
    },

    q_berechtigt: {
      station: "berechtigt",
      kind: "frage",
      norm: "§ 14 II–IV GemO, § 5 PartG",
      title: "Gehört der Antragsteller zum Kreis der Anspruchsberechtigten?",
      def: "<b>Anspruchsberechtigt (subjektiv-öffentliches Recht aus § 14 II GemO i. V. m. der Widmung):</b><br>• alle EINWOHNER der Gemeinde (§ 13 I, § 14 II),<br>• Auswärtige („Forensen“) mit Grundbesitz oder Gewerbebetrieb – beschränkt auf grundstücks-/betriebsbezogene Einrichtungen (§ 14 III),<br>• juristische Personen und Personenvereinigungen mit Sitz, Grundstück oder Gewerbe in der Gemeinde (§ 14 IV).<br><b>Parteienprivileg (§ 5 PartG, Art. 21 GG):</b> Anspruch auf GLEICHBEHANDLUNG – wurde die Einrichtung anderen Parteien überlassen, ist sie auch weiteren Parteien zu überlassen (unabhängig von Sitz/Untergliederung); § 5 PartG ist keine eigene Anspruchsnorm.<br><b>Selbstbindung der Verwaltung (Art. 3 I GG):</b> faktische Erweiterung des Widmungszwecks durch ständige Praxis bindet die Gemeinde in gleichgelagerten Fällen.",
      options: [
        { label: "Ja, berechtigt", next: "q_widmung", tone: "pos" },
        { label: "Ja, über Parteienprivileg / Selbstbindung", next: "q_widmung", tone: "pos" },
        { label: "Nein", detail: "z. B. auswärtiger Verein ohne Bezug zur Gemeinde", next: "e_nicht_berechtigt", tone: "neg" }
      ]
    },

    q_widmung: {
      station: "umfang",
      kind: "frage",
      norm: "§ 14 II GemO („im Rahmen des geltenden Rechts“)",
      title: "Hält sich die begehrte Nutzung im Rahmen des Widmungszwecks?",
      def: "Der Anspruch besteht nur im Rahmen der WIDMUNG. Schließt sie bestimmte Nutzungen aus (z. B. „keine politischen Veranstaltungen“ im Bürgerhaus), kann die Gemeinde entsprechende Anfragen ablehnen – auch von Parteien.<br><b>Neutralitätspflicht:</b> Unzulässig ist es aber, eine Veranstaltung wegen ihrer ZIELE abzulehnen – eine nicht vom BVerfG verbotene Partei darf nicht wegen (vermeintlicher) Verfassungsfeindlichkeit ausgeschlossen werden.",
      options: [
        { label: "Ja, widmungsgemäße Nutzung", next: "q_satzung", tone: "pos" },
        { label: "Nein, Widmungszweck nicht umfasst", next: "e_widmung", tone: "neg" }
      ]
    },

    q_satzung: {
      station: "umfang",
      kind: "frage",
      norm: "Benutzungssatzung/-ordnung",
      title: "Stehen Benutzungsregeln oder Schutzgründe entgegen?",
      def: "<b>Zulässige Einschränkungen:</b><br>• Benutzungssatzung/-ordnung (Öffnungszeiten, hygienische Anforderungen – Grenze: Gleichbehandlung und Diskriminierungsverbot, vgl. OVG RP zum „Burkini-Verbot“, Beschl. v. 12.06.2019 – 10 B 10515/19),<br>• drohende BESCHÄDIGUNG/Zerstörung der Einrichtung (§ 78 II 1 GemO – pflegliche Vermögensbehandlung); vorher mildere Mittel (Kaution, Auflagen) prüfen (Verhältnismäßigkeit),<br>• GEFAHREN aus der Einrichtung selbst (z. B. Einsturzgefahr),<br>• absehbare Straftaten/Ordnungswidrigkeiten im Rahmen der Veranstaltung.",
      options: [
        { label: "Nein, keine entgegenstehenden Regeln", next: "q_kapazitaet", tone: "pos" },
        { label: "Ja, rechtmäßige Einschränkung greift", next: "e_eingeschraenkt", tone: "neg" }
      ]
    },

    q_kapazitaet: {
      station: "umfang",
      kind: "frage",
      norm: "Kapazitätsgrenzen",
      title: "Reicht die Kapazität der Einrichtung aus?",
      def: "Der Benutzungsanspruch verpflichtet die Gemeinde NICHT zur Kapazitätserweiterung (Ausnahme: Pflichtaufgaben wie die Abwasserbeseitigung).<br><b>Bei erschöpfter Kapazität</b> wandelt sich der Zulassungsanspruch in einen Anspruch auf ERMESSENSFEHLERFREIE Auswahlentscheidung – nach sachgerechten, objektiven Kriterien (z. B. Prioritätsprinzip, bewährte Nutzer, ggf. Losentscheid); Willkürverbot!",
      options: [
        { label: "Ja, Kapazität vorhanden", next: "q_traeger", tone: "pos" },
        { label: "Nein, Kapazität erschöpft", next: "e_auswahl", tone: "warn" }
      ]
    },

    q_traeger: {
      station: "durchsetzung",
      kind: "frage",
      norm: "Zwei-Stufen-Theorie",
      title: "Wie ist die Einrichtung organisiert – wer gewährt den Zugang?",
      def: "<b>Rechtsnatur der Zulassung („OB“):</b> stets ÖFFENTLICH-RECHTLICH (Verwaltungsakt) – unabhängig von der Organisationsform; Streitigkeiten über die Zulassung gehören vor die Verwaltungsgerichte.<br><b>Ausgestaltung der Benutzung („WIE“):</b> öffentlich-rechtlich (Benutzungssatzung, Gebühren-VA) oder privatrechtlich (Benutzungsordnung, Mietvertrag, AGB) – <b>Zwei-Stufen-Theorie</b>: „OB“ öffentlich-rechtlich, „WIE“ ggf. privatrechtlich.<br><b>Privatrechtlicher Träger (GmbH):</b> Auch dann liegt eine öffentliche Einrichtung vor; die Gemeinde trifft eine EINWIRKUNGS- und VERSCHAFFUNGSPFLICHT gegenüber dem Berechtigten, solange sie ihren Einfluss durchsetzen kann – einklagbar als öffentlich-rechtliche Streitigkeit.",
      options: [
        { label: "Gemeinde selbst (Regie-/Eigenbetrieb, AöR)", next: "e_anspruch", tone: "neutral" },
        { label: "Privatrechtlich organisierter Träger (z. B. GmbH)", next: "e_verschaffung", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 14 II GemO",
      title: "Anspruch auf Zulassung (+)",
      text: "Der Antragsteller hat aus § 14 II (ggf. III, IV) GemO i. V. m. der Widmung einen Anspruch auf Zulassung zur Benutzung der öffentlichen Einrichtung.\n\nDie Zulassungsentscheidung ist ein Verwaltungsakt. Rechtsschutz bei Ablehnung: Verpflichtungswiderspruch und Verpflichtungsklage (§ 42 I Alt. 2 VwGO); wegen Zeitablaufs (Veranstaltungstermin!) regelmäßig einstweilige Anordnung nach § 123 VwGO.\n\nDas „WIE“ der Benutzung richtet sich nach der Ausgestaltung (öffentlich-rechtlich oder privatrechtlich – Zwei-Stufen-Theorie); Entgelte: Benutzungsgebühren (KAG) oder privatrechtliche Entgelte."
    },

    e_verschaffung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 14 II GemO, Art. 3 GG",
      title: "Einwirkungs- und Verschaffungsanspruch gegen die Gemeinde",
      text: "Wird die öffentliche Einrichtung von einem rechtlich verselbständigten (privatrechtlichen) Träger betrieben, bleibt sie öffentliche Einrichtung. Der Berechtigte hat gegen die GEMEINDE einen Anspruch darauf, dass sie auf den Träger einwirkt und ihm den Zugang verschafft – solange die Gemeinde imstande ist, ihren Einfluss (Gesellschafterrechte) durchzusetzen.\n\nDieser Anspruch ist eine öffentlich-rechtliche Streitigkeit (Verwaltungsrechtsweg); der Nutzungsvertrag selbst kommt dann privatrechtlich mit dem Träger zustande (Zwei-Stufen-Theorie)."
    },

    e_auswahl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Art. 3 I GG",
      title: "Nur Anspruch auf ermessensfehlerfreie Auswahlentscheidung",
      text: "Bei erschöpfter Kapazität besteht kein Anspruch auf Zulassung, sondern nur auf eine ermessensfehlerfreie Auswahl nach sachgerechten und objektiven Kriterien (Prioritätsprinzip, Losentscheid o. ä. – Willkürverbot, Art. 3 I GG).\n\nDie Gemeinde ist nicht verpflichtet, die Kapazität auszuweiten – anders nur bei Pflichtaufgaben (z. B. Abwasserbeseitigung).\n\nRechtsschutz: Bescheidungsklage bzw. einstweilige Anordnung (§ 123 VwGO) auf fehlerfreie Neubescheidung."
    },

    e_eingeschraenkt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 II GemO",
      title: "Kein Anspruch: rechtmäßige Einschränkung",
      text: "Die begehrte Nutzung scheitert an einer rechtmäßigen Einschränkung – Benutzungsregelung, Schutz der Einrichtung (§ 78 II 1 GemO) oder Gefahrenabwehr. Voraussetzung ist stets, dass die Einschränkung ihrerseits mit Gleichbehandlungsgrundsatz, Diskriminierungsverbot und Verhältnismäßigkeit vereinbar ist.\n\nPrüfe ggf. mildere Mittel (Auflagen, Kaution) – sonst wird die Versagung ermessensfehlerhaft."
    },

    e_widmung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 II GemO",
      title: "Kein Anspruch: Nutzung vom Widmungszweck nicht gedeckt",
      text: "Der Zulassungsanspruch reicht nur so weit wie die Widmung. Eine widmungsfremde Nutzung kann die Gemeinde ablehnen – auch gegenüber Parteien, sofern die Ablehnung neutral an der NUTZUNGSART (nicht an den Zielen des Nutzers) anknüpft und der Gleichbehandlungsgrundsatz gewahrt bleibt.\n\nBeachte die Selbstbindung: Wurde die Einrichtung in der Praxis bereits für vergleichbare Nutzungen überlassen, ist der Widmungszweck faktisch erweitert (Art. 3 I GG)."
    },

    e_nicht_berechtigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 II–IV GemO",
      title: "Kein Anspruch: nicht anspruchsberechtigt",
      text: "Der Antragsteller gehört nicht zum Kreis der Berechtigten des § 14 II–IV GemO (kein Einwohner, kein Grundbesitz/Gewerbe, kein Sitz in der Gemeinde) und kann sich weder auf das Parteienprivileg noch auf eine Selbstbindung der Verwaltung berufen.\n\nDie Gemeinde KANN Auswärtige nach pflichtgemäßem Ermessen zulassen – ein Rechtsanspruch besteht nicht."
    },

    e_gemeingebrauch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Straßen- und Wegerecht",
      title: "Öffentliche Sache im Gemeingebrauch",
      text: "Öffentliche Sachen im Gemeingebrauch (Straßen, Wege, Plätze, Ruhebänke, Schutzhütten) können im Rahmen ihrer Zweckbindung jederzeit, von jedermann, ungefragt und unentgeltlich genutzt werden – einer Zulassung nach § 14 GemO bedarf es nicht.\n\nFür übermäßige oder zweckfremde Nutzung gilt das Sondernutzungsrecht (LStrG)."
    },

    e_kein_oe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 II GemO",
      title: "Keine öffentliche Einrichtung",
      text: "Sachen im Verwaltungsgebrauch (Rathaus, Bauhof, Dienstfahrzeuge) und im Fiskalvermögen (vermietete Wohnungen, verpachtete Grundstücke) sind keine öffentlichen Einrichtungen – ein Zulassungsanspruch aus § 14 II GemO besteht nicht.\n\nBei fiskalischem Handeln gelten die zivilrechtlichen Regeln (aber: Grundrechtsbindung der Verwaltung auch im Fiskalbereich, Art. 1 III GG – „keine Flucht ins Privatrecht“).\n\nExkurs § 26 GemO: Umgekehrt kann die Gemeinde bei ÖFFENTLICHEM BEDÜRFNIS durch SATZUNG den Anschluss- (grundstücksbezogen) und Benutzungszwang (personenbezogen) für dem Gemeinwohl dienende Einrichtungen vorschreiben (Wasser, Abwasser, Fernwärme u. a.); Ausnahmen müssen in der Satzung geregelt sein (§ 26 II)."
    }
  },

  routers: {}
});
