/*
 * Prüfungsschema: Aufhebung von VA – Rücknahme und Widerruf (§§ 48, 49 VwVfG)
 * Fach: Allgemeines Verwaltungsrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 AVR, FS II):
 *  - "Aufhebung" (Weil – Bestandskraft, Weichenstellung § 48/§ 49, Übersichten)
 *  - "Ausschluss der Berufung auf das Vertrauen" (Dr. Schmidt – § 48 II 3
 *    Nr. 1–3 mit allen Definitionen)
 *  - "2.2.2 Skript OLE... Wiederaufgreifen des Verfahrens"
 *  - Gesetze: VwVfG §§ 48, 49, 49a, 51 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "avr-aufhebung",
  subject: "Allgemeines Verwaltungsrecht",
  fs: ["FS2"],
  area: "Aufhebung von Verwaltungsakten",
  title: "Rücknahme und Widerruf (§§ 48, 49 VwVfG)",
  description: "Durchbrechung der Bestandskraft: die Weichen rechtswidrig/rechtmäßig und belastend/begünstigend, Vertrauensschutz nach § 48 II mit den Ausschlussgründen des S. 3, Ausgleich nach § 48 III, Jahresfrist, Widerrufsgründe des § 49 II/III, Entschädigung § 49 VI und Erstattung § 49a VwVfG.",
  start: "start",
  stations: [
    { id: "vor", label: "Vorprüfung" },
    { id: "weiche", label: "Weichenstellung" },
    { id: "vertrauen", label: "Vertrauensschutz" },
    { id: "frist", label: "Frist & Ermessen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Aufhebung möglich",
    neg: "Ergebnis: Aufhebung unzulässig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "vor",
      kind: "frage",
      norm: "§§ 48 ff. VwVfG",
      title: "Gilt eine Spezialvorschrift für die Aufhebung?",
      text: "Mit Ablauf der Rechtsbehelfsfrist wird der VA formell bestandskräftig (unanfechtbar); die Beteiligten sind an ihn gebunden (materielle Bestandskraft). Die §§ 48, 49 VwVfG erlauben der BEHÖRDE die Durchbrechung dieser Bestandskraft – der Bürger kann daneben das Wiederaufgreifen des Verfahrens nach § 51 VwVfG beantragen.",
      def: "<b>Vorprüfung:</b> Die §§ 48, 49 VwVfG sind subsidiär – zuerst ist die Anwendbarkeit von <b>Spezialvorschriften</b> zu prüfen, z. B. § 15 GastG (Rücknahme/Widerruf der Gaststättenerlaubnis), §§ 44 ff. SGB X im Sozialrecht, § 130 AO im Abgabenrecht.",
      options: [
        { label: "Keine Spezialvorschrift – §§ 48, 49 VwVfG anwendbar", next: "q_rw", tone: "pos" },
        { label: "Spezialvorschrift einschlägig", next: "e_spezial", tone: "warn" }
      ]
    },

    q_rw: {
      station: "weiche",
      kind: "frage",
      norm: "§ 48 / § 49 VwVfG",
      title: "War der VA rechtswidrig oder rechtmäßig?",
      def: "<b>Erste Weiche:</b><br>• <b>rechtswidriger</b> VA → <b>Rücknahme</b>, § 48 VwVfG,<br>• <b>rechtmäßiger</b> VA → <b>Widerruf</b>, § 49 VwVfG.<br><br><b>Maßgeblicher Zeitpunkt:</b> die Sach- und Rechtslage bei <b>Bekanntgabe</b> des VA. Wird ein ursprünglich rechtmäßiger VA durch spätere Änderung der Rechtslage „rechtswidrig“, bleibt es beim Widerruf nach § 49 (z. B. Zuschuss nach später verschärftem Gesetz).",
      options: [
        { label: "VA war rechtswidrig → Rücknahme (§ 48)", next: "q_48_belastend", tone: "neutral" },
        { label: "VA war rechtmäßig → Widerruf (§ 49)", next: "q_49_belastend", tone: "neutral" }
      ]
    },

    /* ---------- Rücknahme § 48 ---------- */

    q_48_belastend: {
      station: "weiche",
      kind: "frage",
      norm: "§ 48 I VwVfG",
      title: "Rücknahme: belastender oder begünstigender VA?",
      def: "<b>Begünstigender VA</b> (Legaldefinition § 48 I 2 VwVfG) = VA, der ein Recht oder einen rechtlich erheblichen Vorteil begründet oder bestätigt hat.<br><br><b>Zweite Weiche:</b><br>• <b>belastender</b> rechtswidriger VA: Rücknahme nach Ermessen, ganz oder teilweise, mit Wirkung für Zukunft oder Vergangenheit (§ 48 I 1),<br>• <b>begünstigender</b> rechtswidriger VA: nur unter den Einschränkungen der Absätze 2 bis 4 (Vertrauensschutz!).<br><br>Maßgeblich ist die Wirkung für den ADRESSATEN (bei VA mit Drittwirkung ggf. differenzieren).",
      options: [
        { label: "Belastender VA (§ 48 I 1)", next: "e_48_belastend", tone: "pos" },
        { label: "Begünstigend: Geld- oder teilbare Sachleistung (§ 48 II)", detail: "z. B. Subvention, Zuschuss, laufende Leistung", next: "q_48_2_vertrauen", tone: "neutral" },
        { label: "Begünstigend: sonstiger VA (§ 48 III)", detail: "z. B. Baugenehmigung, Erlaubnis, Beamtenernennung", next: "e_48_3", tone: "neutral" }
      ]
    },

    q_48_2_vertrauen: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 48 II 1, 2 VwVfG",
      title: "Hat der Begünstigte auf den Bestand vertraut?",
      def: "Die Rücknahme ist ausgeschlossen, soweit der Begünstigte auf den Bestand des VA <b>vertraut</b> hat und sein Vertrauen unter Abwägung mit dem öffentlichen Interesse an der Rücknahme <b>schutzwürdig</b> ist (§ 48 II 1).<br><br><b>Regelbeispiele schutzwürdigen Vertrauens (§ 48 II 2):</b> Der Begünstigte hat<br>• die gewährten Leistungen <b>verbraucht</b> oder<br>• eine <b>Vermögensdisposition</b> getroffen, die er nicht mehr oder nur unter unzumutbaren Nachteilen rückgängig machen kann.",
      options: [
        { label: "Vertrauen betätigt (Verbrauch / Disposition)", next: "q_48_2_ausschluss", tone: "pos" },
        { label: "Kein betätigtes Vertrauen", next: "q_48_frist", set: { kein_vertrauen: true }, tone: "neg" }
      ]
    },

    q_48_2_ausschluss: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 48 II 3 Nr. 1–3 VwVfG",
      title: "Ist die Berufung auf Vertrauen ausgeschlossen („Rückwärtsprüfung“)?",
      def: "<b>Auf Vertrauen kann sich der Begünstigte NICHT berufen, wenn er (§ 48 II 3):</b><br><b>Nr. 1:</b> den VA durch <b>arglistige Täuschung, Drohung oder Bestechung</b> erwirkt hat.<br>– <i>Arglist:</i> (bedingt) vorsätzliche Irreführung, gerichtet auf den Erklärungswillen der Behörde; <i>Täuschung:</i> Vorspiegeln unrichtiger Tatsachen (Anlehnung an § 263 StGB); <i>Drohung:</i> Inaussichtstellen eines künftigen Übels; <i>Bestechung:</i> jede Vorteilsgewährung als Gegenleistung.<br><b>Nr. 2:</b> den VA durch <b>in wesentlicher Beziehung unrichtige oder unvollständige Angaben</b> erwirkt hat (verschuldensunabhängig! Ursache liegt in der Sphäre des Bürgers),<br><b>Nr. 3:</b> die <b>Rechtswidrigkeit kannte oder infolge grober Fahrlässigkeit nicht kannte</b> (grob fahrlässig: einfachste, ganz naheliegende Überlegungen nicht angestellt; Parallelwertung in der Laiensphäre).<br><br><b>Folge (§ 48 II 4):</b> In diesen Fällen wird der VA in der Regel mit Wirkung für die VERGANGENHEIT zurückgenommen.",
      options: [
        { label: "Ausschlussgrund liegt vor", next: "q_48_frist", set: { ausschluss: true }, tone: "neg" },
        { label: "Kein Ausschlussgrund", next: "q_48_2_abwaegung", tone: "pos" }
      ]
    },

    q_48_2_abwaegung: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 48 II 1 VwVfG",
      title: "Abwägung: Überwiegt das Vertrauen das Rücknahmeinteresse?",
      def: "Das betätigte Vertrauen ist gegen das <b>öffentliche Interesse an der Rücknahme</b> (Gesetzmäßigkeit der Verwaltung, Schonung öffentlicher Mittel) abzuwägen. In den Regelbeispielsfällen des § 48 II 2 ist das Vertrauen „in der Regel“ schutzwürdig.",
      options: [
        { label: "Vertrauen überwiegt", next: "e_48_2_ausgeschlossen", tone: "pos" },
        { label: "Rücknahmeinteresse überwiegt", next: "q_48_frist", tone: "neg" }
      ]
    },

    q_48_frist: {
      station: "frist",
      kind: "frage",
      norm: "§ 48 IV VwVfG",
      title: "Ist die Jahresfrist des § 48 IV VwVfG gewahrt?",
      def: "Erhält die Behörde von Tatsachen Kenntnis, welche die Rücknahme rechtfertigen, ist die Rücknahme nur innerhalb <b>eines Jahres seit Kenntnisnahme</b> zulässig (§ 48 IV 1) – Entscheidungsfrist ab positiver Kenntnis ALLER entscheidungserheblichen Tatsachen (auch derer für die Ermessensausübung).<br><br><b>Ausnahme (§ 48 IV 2):</b> Die Frist gilt NICHT im Fall des § 48 II 3 <b>Nr. 1</b> (arglistige Täuschung, Drohung, Bestechung) – bei Nr. 2 und Nr. 3 gilt sie dagegen!",
      options: [
        { label: "Frist gewahrt (oder Nr.-1-Fall)", next: "e_48_2_ruecknahme", tone: "pos" },
        { label: "Jahresfrist verstrichen", next: "e_frist_abgelaufen", tone: "neg" }
      ]
    },

    /* ---------- Widerruf § 49 ---------- */

    q_49_belastend: {
      station: "weiche",
      kind: "frage",
      norm: "§ 49 I, II VwVfG",
      title: "Widerruf: belastender oder begünstigender VA?",
      def: "<b>Belastender rechtmäßiger VA (§ 49 I):</b> Widerruf nach Ermessen mit Wirkung für die Zukunft – AUSSER ein VA gleichen Inhalts müsste erneut erlassen werden (gebundene Entscheidung, Legalitätsprinzip) oder der Widerruf ist aus anderen Gründen unzulässig (z. B. Gleichbehandlung).<br><br><b>Begünstigender rechtmäßiger VA (§ 49 II, III):</b> Widerruf nur in den gesetzlich aufgezählten Fällen (Umkehrschluss: sonst unzulässig!).",
      options: [
        { label: "Belastender VA (§ 49 I)", next: "q_49_1", tone: "neutral" },
        { label: "Begünstigender VA (§ 49 II)", next: "q_49_2", tone: "neutral" },
        { label: "Begünstigend: Geld-/Sachleistung für einen Zweck (§ 49 III)", next: "q_49_3", tone: "neutral" }
      ]
    },

    q_49_1: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 49 I VwVfG",
      title: "Steht das Legalitätsprinzip dem Widerruf entgegen?",
      def: "Der Widerruf eines rechtmäßigen belastenden VA ist unzulässig, wenn ein VA <b>gleichen Inhalts erneut erlassen werden müsste</b> (bei gebundenen Entscheidungen) oder wenn er <b>aus anderen Gründen unzulässig</b> wäre (z. B. Selbstbindung, Gleichbehandlung gleichgelagerter Fälle).",
      options: [
        { label: "Nein – Widerruf nach Ermessen möglich", next: "e_49_1", tone: "pos" },
        { label: "Ja – VA müsste erneut erlassen werden", next: "e_49_1_unzulaessig", tone: "neg" }
      ]
    },

    q_49_2: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 49 II 1 Nr. 1–5 VwVfG",
      title: "Liegt ein Widerrufsgrund nach § 49 II VwVfG vor?",
      def: "<b>Widerruf eines rechtmäßigen begünstigenden VA – nur mit Wirkung für die ZUKUNFT und nur wenn (§ 49 II 1):</b><br><b>Nr. 1:</b> der Widerruf durch Rechtsvorschrift zugelassen oder im VA <b>vorbehalten</b> ist (Widerrufsvorbehalt!),<br><b>Nr. 2:</b> eine <b>Auflage nicht (fristgerecht) erfüllt</b> wurde,<br><b>Nr. 3:</b> die Behörde aufgrund <b>nachträglich eingetretener Tatsachen</b> berechtigt wäre, den VA nicht zu erlassen, und ohne Widerruf das öffentliche Interesse gefährdet würde,<br><b>Nr. 4:</b> aufgrund einer <b>geänderten Rechtsvorschrift</b> (soweit noch kein Gebrauch/Leistungsempfang) und Gefährdung des öffentlichen Interesses,<br><b>Nr. 5:</b> um <b>schwere Nachteile für das Gemeinwohl</b> zu verhüten oder zu beseitigen.<br><br><b>Frist:</b> § 49 II 2 i. V. m. § 48 IV (Jahresfrist ab Kenntnis).",
      options: [
        { label: "Widerrufsgrund (+), Jahresfrist gewahrt", next: "e_49_2", tone: "pos" },
        { label: "Kein Widerrufsgrund", next: "e_49_2_unzulaessig", tone: "neg" },
        { label: "Jahresfrist verstrichen", next: "e_frist_abgelaufen", tone: "neg" }
      ]
    },

    q_49_3: {
      station: "vertrauen",
      kind: "frage",
      norm: "§ 49 III VwVfG",
      title: "Zweckverfehlung oder Auflagenverstoß bei Leistungs-VA?",
      def: "Ein rechtmäßiger VA, der eine einmalige oder laufende <b>Geldleistung oder teilbare Sachleistung zur Erfüllung eines bestimmten Zwecks</b> gewährt, kann auch <b>mit Wirkung für die Vergangenheit</b> widerrufen werden, wenn (§ 49 III 1):<br><b>Nr. 1:</b> die Leistung nicht, nicht alsbald oder <b>nicht für den Zweck</b> verwendet wird (Zweckverfehlung),<br><b>Nr. 2:</b> eine <b>Auflage</b> nicht oder nicht fristgerecht erfüllt wird.<br><br><b>Frist:</b> § 49 III 2 i. V. m. § 48 IV (Jahresfrist).",
      options: [
        { label: "Zweckverfehlung / Auflagenverstoß, Frist gewahrt", next: "e_49_3", tone: "pos" },
        { label: "Kein Widerrufsgrund nach § 49 III", next: "e_49_2_unzulaessig", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_spezial: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "lex specialis",
      title: "Spezialvorschrift geht vor",
      text: "Die Aufhebung richtet sich nach der spezialgesetzlichen Regelung (z. B. § 15 GastG, §§ 44 ff. SGB X, § 130 AO). Die §§ 48, 49 VwVfG treten zurück; ihre Wertungen (Vertrauensschutz, Fristen) können aber zur Auslegung herangezogen werden."
    },

    e_48_belastend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 48 I 1 VwVfG",
      title: "Rücknahme des rechtswidrigen belastenden VA möglich",
      text: "Die Behörde KANN den rechtswidrigen belastenden VA auch nach Unanfechtbarkeit ganz oder teilweise mit Wirkung für die Zukunft oder Vergangenheit zurücknehmen (§ 48 I 1 VwVfG) – pflichtgemäßes Ermessen.\n\nWichtig: Der Bürger hat grundsätzlich KEINEN Anspruch auf Rücknahme eines bestandskräftigen VA, sondern nur einen Anspruch auf ermessensfehlerfreie Entscheidung; daneben kommt das Wiederaufgreifen des Verfahrens nach § 51 VwVfG in Betracht (Änderung der Sach-/Rechtslage, neue Beweismittel, Wiederaufnahmegründe – Antrag binnen drei Monaten, § 51 III)."
    },

    e_48_2_ausgeschlossen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 48 II 1 VwVfG",
      title: "Rücknahme unzulässig: schutzwürdiges Vertrauen",
      text: "Der Begünstigte hat auf den Bestand des VA vertraut, sein Vertrauen betätigt (Verbrauch der Leistung/Vermögensdisposition) und die Abwägung fällt zu seinen Gunsten aus. Die Rücknahme des Leistungs-VA ist ausgeschlossen, „soweit“ das Vertrauen reicht (§ 48 II 1 VwVfG)."
    },

    e_48_2_ruecknahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 48 II, IV, § 49a VwVfG",
      title: "Rücknahme des Leistungs-VA möglich",
      text: "Vertrauensschutz steht nicht entgegen (kein betätigtes Vertrauen, Ausschlussgrund nach § 48 II 3 oder überwiegendes Rücknahmeinteresse); die Jahresfrist ist gewahrt. Die Behörde entscheidet nach pflichtgemäßem Ermessen; in den Fällen des § 48 II 3 wird in der Regel mit Wirkung für die Vergangenheit zurückgenommen (§ 48 II 4).\n\nRückabwicklung: Bereits erbrachte Leistungen sind nach § 49a I VwVfG zu erstatten (Festsetzung durch schriftlichen VA). Für den Umfang gelten die §§ 818 ff. BGB entsprechend (§ 49a II 1); auf ENTREICHERUNG kann sich der Begünstigte nicht berufen, soweit er die Umstände kannte oder grob fahrlässig nicht kannte, die zur Rücknahme geführt haben (§ 49a II 2)."
    },

    e_48_3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 48 III VwVfG",
      title: "Rücknahme sonstiger begünstigender VA: möglich, aber Ausgleich",
      text: "Sonstige rechtswidrige begünstigende VA (z. B. Baugenehmigung) können nach Ermessen zurückgenommen werden – der Vertrauensschutz wirkt hier nicht als Rücknahmesperre, sondern über einen VERMÖGENSAUSGLEICH: Auf Antrag ist der Vermögensnachteil auszugleichen, den der Betroffene durch sein Vertrauen auf den Bestand erleidet, soweit das Vertrauen schutzwürdig ist (§ 48 III 1, 2 i. V. m. II 3 VwVfG).\n\nGrenzen: Ausgleich nicht über das Bestandsinteresse hinaus (§ 48 III 3); Geltendmachung binnen eines Jahres nach Hinweis der Behörde (§ 48 III 5). Jahresfrist für die Rücknahme: § 48 IV.\n\nKlausurklassiker: Bauherr hebt nach Erteilung der (rechtswidrigen) Baugenehmigung die Baugrube aus – Rücknahme bleibt möglich, aber die Aufwendungen sind zu ersetzen."
    },

    e_49_1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 49 I VwVfG",
      title: "Widerruf des belastenden VA möglich",
      text: "Der rechtmäßige belastende VA kann nach pflichtgemäßem Ermessen ganz oder teilweise mit Wirkung für die ZUKUNFT widerrufen werden (§ 49 I VwVfG). Eine Wirkung für die Vergangenheit sieht § 49 I nicht vor."
    },

    e_49_1_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 49 I VwVfG",
      title: "Widerruf unzulässig: VA müsste erneut ergehen",
      text: "Da ein VA gleichen Inhalts erneut erlassen werden müsste (gebundene Entscheidung – Legalitätsprinzip) oder der Widerruf aus anderen Gründen (Gleichbehandlung, Selbstbindung) unzulässig ist, scheidet der Widerruf nach § 49 I VwVfG aus."
    },

    e_49_2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 49 II, VI VwVfG",
      title: "Widerruf des begünstigenden VA möglich (ex nunc)",
      text: "Ein Widerrufsgrund nach § 49 II 1 Nr. 1–5 VwVfG liegt vor; die Behörde entscheidet nach pflichtgemäßem Ermessen, nur mit Wirkung für die Zukunft.\n\nENTSCHÄDIGUNG (§ 49 VI VwVfG): Wird der VA in den Fällen der Nr. 3–5 widerrufen (nachträgliche Tatsachen, Rechtsänderung, schwere Gemeinwohlnachteile), hat die Behörde den Betroffenen auf Antrag für den Vermögensnachteil zu entschädigen, den er durch sein schutzwürdiges Vertrauen erleidet – § 48 III 3–5 gilt entsprechend."
    },

    e_49_3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 49 III, § 49a VwVfG",
      title: "Widerruf des Leistungs-VA möglich – auch für die Vergangenheit",
      text: "Wegen Zweckverfehlung bzw. Auflagenverstoß kann der zweckgebundene Leistungs-VA nach Ermessen auch mit Wirkung für die VERGANGENHEIT widerrufen werden (§ 49 III VwVfG – wichtigster Fall: Subventionswiderruf).\n\nDie bereits erbrachten Leistungen sind nach § 49a VwVfG zu erstatten; der erstattungspflichtige Betrag wird durch schriftlichen VA festgesetzt. Entreicherung (§ 818 III BGB entspr.) ist ausgeschlossen, soweit der Begünstigte die maßgeblichen Umstände kannte oder grob fahrlässig nicht kannte (§ 49a II 2 VwVfG)."
    },

    e_49_2_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 49 II VwVfG (Umkehrschluss)",
      title: "Widerruf unzulässig: kein Widerrufsgrund",
      text: "Der rechtmäßige begünstigende VA darf nur in den abschließend aufgezählten Fällen des § 49 II bzw. III VwVfG widerrufen werden. Liegt keiner vor, bleibt der VA bestehen – der Bestandsschutz des Bürgers überwiegt."
    },

    e_frist_abgelaufen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 48 IV VwVfG",
      title: "Aufhebung unzulässig: Jahresfrist verstrichen",
      text: "Seit der positiven Kenntnis der Behörde von den die Aufhebung rechtfertigenden Tatsachen ist mehr als ein Jahr vergangen (§ 48 IV 1 VwVfG, ggf. i. V. m. § 49 II 2/III 2). Die Aufhebung ist verfristet.\n\nAusnahme: Bei arglistiger Täuschung, Drohung oder Bestechung (§ 48 II 3 Nr. 1) gilt die Jahresfrist nicht (§ 48 IV 2 VwVfG) – bei bloß unrichtigen Angaben (Nr. 2) oder Kenntnis der Rechtswidrigkeit (Nr. 3) gilt sie dagegen sehr wohl!"
    }
  },

  routers: {}
});
