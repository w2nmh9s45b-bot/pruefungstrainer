/*
 * Prüfungsschema: Rechtmäßigkeit einer Maßnahme der Bauaufsichtsbehörde
 * (§§ 59, 80, 81, 82 LBauO RLP)
 *
 * Quelle (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff), Kapitel
 *    "Maßnahmen der Bauaufsichtsbehörde" (Folien 140 ff.)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "bauaufsicht-massnahmen",
  subject: "Baurecht",
  area: "Bauaufsicht / Eingriff",
  title: "Maßnahmen der Bauaufsichtsbehörde, §§ 59, 80–82 LBauO",
  description: "Rechtmäßigkeit von Baueinstellung, Versiegelung, Nutzungsuntersagung, Beseitigungs- und Abbruchanordnung: Ermächtigungsgrundlage, formelle Rechtmäßigkeit, Tatbestand (formelle/materielle Illegalität), Störerauswahl und Ermessen (Bestandsschutz, Duldung, Art. 3 GG).",
  start: "start",
  stations: [
    { id: "egl", label: "Ermächtigungsgrundlage" },
    { id: "formell", label: "Formell" },
    { id: "tatbestand", label: "Tatbestand" },
    { id: "stoerer", label: "Verantwortlicher" },
    { id: "ermessen", label: "Ermessen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Maßnahme rechtmäßig",
    neg: "Ergebnis: Maßnahme rechtswidrig",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    /* ================= A. Ermächtigungsgrundlage ================= */

    start: {
      station: "egl",
      kind: "frage",
      norm: "§§ 59, 80–82 LBauO",
      title: "Welche Maßnahme hat die Behörde getroffen (oder beabsichtigt sie)?",
      text: "Neben die präventive Baukontrolle (Genehmigungsverfahren) tritt die repressive Kontrolle durch die bauaufsichtlichen Eingriffsbefugnisse. Da die Maßnahme in Rechte eingreift, ist eine Ermächtigungsgrundlage erforderlich.",
      def: "<b>Befugnisnormen:</b> Generalklausel § 59 I 1 LBauO · Bauüberwachung § 78 LBauO · Baueinstellung § 80 I, Versiegelung/Sicherstellung § 80 II LBauO · Beseitigungsanordnung § 81 S. 1 Alt. 1, Nutzungsuntersagung § 81 S. 1 Alt. 2 LBauO · Abbruchanordnung § 82 LBauO.<br><br><b>Subsidiarität:</b> Die Generalklausel des § 59 LBauO tritt zurück, wenn eine spezielle Befugnisnorm einschlägig ist.",
      hint: "Aufbau (Modul 1 / AVR): Ermächtigungsgrundlage → formelle Rechtmäßigkeit → materielle Rechtmäßigkeit (Tatbestand + Rechtsfolge/Ermessen).",
      options: [
        { label: "Baueinstellung", detail: "§ 80 I LBauO – Stopp laufender Bauarbeiten", next: "q_zustaendig", set: { m: "einstellung" }, tone: "neutral" },
        { label: "Versiegelung / Sicherstellung", detail: "§ 80 II LBauO – Bauarbeiten werden trotz Einstellung fortgesetzt", next: "q_zustaendig", set: { m: "versiegelung" }, tone: "neutral" },
        { label: "Nutzungsuntersagung", detail: "§ 81 S. 1 Alt. 2 LBauO – Verbot der (weiteren) Nutzung", next: "q_zustaendig", set: { m: "nutzung" }, tone: "neutral" },
        { label: "Beseitigungsanordnung", detail: "§ 81 S. 1 Alt. 1 LBauO – Abriss/Beseitigung der Anlage", next: "q_zustaendig", set: { m: "beseitigung" }, tone: "neutral" },
        { label: "Abbruchanordnung", detail: "§ 82 LBauO – verfallende, ungenutzte Anlage", next: "q_zustaendig", set: { m: "abbruch" }, tone: "neutral" },
        { label: "Sonstige Maßnahme (Generalklausel)", detail: "§ 59 I 1 LBauO – z. B. Aufforderung, einen Bauantrag oder Unterlagen einzureichen", next: "q_subsidiar", set: { m: "general" }, tone: "neutral" }
      ]
    },

    q_subsidiar: {
      station: "egl",
      kind: "frage",
      norm: "§ 59 I 1 LBauO",
      title: "Greift wirklich keine spezielle Standardmaßnahme?",
      text: "Die baurechtliche Generalklausel ist nur anwendbar, wenn keine der Standardmaßnahmen (§§ 78, 80, 81, 82 LBauO) einschlägig ist.",
      hint: "Geht es nicht einmal um eine bauliche Anlage oder eine Anlage i. S. d. § 1 I 2 LBauO (z. B. Absicherung eines abrutschenden Baugrundstücks), kommt die polizeiliche Generalklausel § 9 I 1 Hs. 1 POG in Betracht.",
      options: [
        { label: "Richtig, keine Standardmaßnahme einschlägig", next: "q_zustaendig", tone: "pos" },
        { label: "Doch, eine Standardmaßnahme ist einschlägig", detail: "Dann ist diese die richtige Ermächtigungsgrundlage", next: "e_subsidiar", tone: "warn" }
      ]
    },

    /* ================= B. Formelle Rechtmäßigkeit ================= */

    q_zustaendig: {
      station: "formell",
      kind: "frage",
      norm: "§§ 60, 58 I LBauO; § 1 LVwVfG i. V. m. § 3 I Nr. 1 VwVfG",
      title: "Hat die zuständige Behörde gehandelt?",
      text: "Sachlich zuständig ist die untere Bauaufsichtsbehörde (§ 60 i. V. m. § 58 I LBauO): Stadtverwaltung bei kreisfreien und großen kreisangehörigen Städten, sonst die Kreisverwaltung. Örtlich zuständig ist die Behörde, in deren Bezirk das Grundstück liegt.",
      options: [
        { label: "Ja, sachlich und örtlich zuständig", next: "q_anhoerung", tone: "pos" },
        { label: "Nein, unzuständige Behörde", next: "e_unzustaendig", tone: "neg" }
      ]
    },

    q_anhoerung: {
      station: "formell",
      kind: "frage",
      norm: "§ 1 LVwVfG i. V. m. § 28 I VwVfG",
      title: "Wurde der Betroffene vor Erlass angehört?",
      text: "Die Maßnahme ist ein belastender Verwaltungsakt – vor Erlass ist der Betroffene anzuhören. Eine besondere Form ist für die Maßnahme nicht vorgeschrieben (formfrei).",
      options: [
        { label: "Ja, Anhörung durchgeführt", next: "@tatbestand", tone: "pos" },
        { label: "Nein, aber Ausnahme nach § 28 II/III VwVfG", detail: "z. B. Gefahr im Verzug bei der Baueinstellung", next: "@tatbestand", tone: "warn" },
        { label: "Nein, Anhörung fehlt", next: "q_heilung", tone: "neg" }
      ]
    },

    q_heilung: {
      station: "formell",
      kind: "frage",
      norm: "§ 1 LVwVfG i. V. m. § 45 I Nr. 3, II VwVfG",
      title: "Wurde die Anhörung nachgeholt (Heilung)?",
      text: "Der Anhörungsmangel ist unbeachtlich, wenn die Anhörung nachgeholt wird – möglich bis zum Abschluss der letzten Tatsacheninstanz eines verwaltungsgerichtlichen Verfahrens.",
      options: [
        { label: "Ja, nachgeholt – Mangel geheilt", next: "@tatbestand", tone: "warn" },
        { label: "Nein", next: "e_anhoerung", tone: "neg" }
      ]
    },

    /* ================= C. Tatbestand je Maßnahme ================= */

    q_tb_einstellung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 80 I LBauO",
      title: "Sind die Bauarbeiten formell illegal?",
      text: "Bauarbeiten dürfen regelmäßig bereits dann eingestellt werden, wenn sie formell illegal erfolgen – selbst wenn das Bauwerk offensichtlich materiell genehmigungsfähig ist (OVG RP, Urt. v. 22.05.1996 – 8 A 11880/95).",
      def: "<b>Formelle Illegalität:</b> Das Vorhaben ist genehmigungspflichtig, es liegt aber keine Baugenehmigung vor, oder bei der Ausführung wird von der Genehmigung abgewichen.<br><b>Materielle Illegalität:</b> Das Vorhaben verletzt materielles öffentliches (Bau-)Recht.<br><b>Merke:</b> Bei genehmigungsfreien Vorhaben ist nur materielle Illegalität möglich.",
      hint: "Die materielle Genehmigungsfähigkeit wird erst auf der Rechtsfolgenseite (Ermessen) relevant.",
      options: [
        { label: "Ja – Bauen ohne Genehmigung („Schwarzbau“)", next: "q_stoerer", tone: "pos" },
        { label: "Ja – Abweichung von der erteilten Genehmigung", next: "q_stoerer", tone: "pos" },
        { label: "Nein – Genehmigung liegt vor / wird eingehalten", next: "e_tb_fehlt", tone: "neg" }
      ]
    },

    q_tb_versiegelung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 80 II LBauO",
      title: "Werden die Bauarbeiten trotz Baueinstellung fortgesetzt?",
      text: "Tatbestand der Versiegelung/Sicherstellung: Entgegen einer angeordneten Baueinstellung werden die Bauarbeiten fortgesetzt. Rechtsfolge: Die Baustelle kann versiegelt, Bauprodukte und Geräte können sichergestellt werden.",
      options: [
        { label: "Ja, Fortsetzung trotz Einstellungsverfügung", next: "q_stoerer", tone: "pos" },
        { label: "Nein", detail: "Dann fehlt der Tatbestand des § 80 II LBauO", next: "e_tb_fehlt", tone: "neg" }
      ]
    },

    q_tb_nutzung: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 81 S. 1 Alt. 2 LBauO",
      title: "Ist die Nutzung formell illegal?",
      text: "Tatbestand: formelle Illegalität der baulichen oder anderen Anlage. Eine Nutzungsuntersagung ist auch möglich, wenn eine genehmigte Anlage anders als in der genehmigten Art genutzt wird oder diese Nutzung unmittelbar bevorsteht.",
      def: "<b>Formelle Illegalität:</b> genehmigungspflichtig, aber ohne Genehmigung – oder Abweichung von der genehmigten Nutzungsart (z. B. „Gewerbe“ genehmigt, tatsächlich Wohnen).",
      options: [
        { label: "Ja, Nutzung ohne erforderliche Genehmigung", next: "q_stoerer", tone: "pos" },
        { label: "Ja, Nutzung weicht von der genehmigten Art ab (oder steht unmittelbar bevor)", next: "q_stoerer", tone: "pos" },
        { label: "Nein", next: "e_tb_fehlt", tone: "neg" }
      ]
    },

    q_tb_beseitigung1: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 81 S. 1 Alt. 1 LBauO",
      title: "Ist die Anlage formell illegal?",
      text: "Die Beseitigungsanordnung ist der intensivste Eingriff (Art. 14 GG). Sie setzt deshalb kumulativ formelle UND materielle Illegalität voraus – und dass nicht auf andere Weise rechtmäßige Zustände hergestellt werden können (§ 81 S. 1 letzter Hs. LBauO).",
      def: "<b>Formelle Illegalität:</b> genehmigungspflichtig, aber keine Baugenehmigung bzw. Abweichung von ihr.",
      options: [
        { label: "Ja, formell illegal", next: "q_tb_beseitigung2", tone: "pos" },
        { label: "Nein (Genehmigung liegt vor / genehmigungsfrei)", detail: "Bei genehmigungsfreien Vorhaben genügt die materielle Illegalität", next: "q_tb_beseitigung2", tone: "warn" }
      ]
    },

    q_tb_beseitigung2: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 81 S. 1 Alt. 1 LBauO",
      title: "Ist die Anlage auch materiell illegal?",
      def: "<b>Materielle Illegalität:</b> Die Anlage verletzt materielles öffentliches Baurecht – Bauplanungsrecht, Bauordnungsrecht oder sonstige öffentlich-rechtliche Vorschriften (Prüfung wie beim Anspruch auf Baugenehmigung).",
      options: [
        { label: "Ja, materiell illegal", next: "q_bestandsschutz", tone: "pos" },
        { label: "Nein, materiell legal / offensichtlich genehmigungsfähig", detail: "Dann scheidet die Beseitigung aus – milderes Mittel: Aufforderung, einen Bauantrag zu stellen", next: "e_nur_formell", tone: "neg" }
      ]
    },

    q_bestandsschutz: {
      station: "tatbestand",
      kind: "frage",
      norm: "Art. 14 I GG",
      title: "Genießt die Anlage Bestandsschutz?",
      text: "Der passive Bestandsschutz schließt die materielle Illegalität aus: Die Anlage darf erhalten und genutzt werden, obwohl sie heute so nicht mehr errichtet werden dürfte.",
      def: "<b>Passiver Bestandsschutz (+), wenn</b> die Anlage (1) zum Zeitpunkt der Errichtung wirksam genehmigt wurde (bestandskräftige Baugenehmigung) <b>oder</b> (2) ungenehmigt errichtet wurde, aber nach der Errichtung für einen gewissen Zeitraum (mindestens drei Monate) mit dem materiellen Baurecht vereinbar war.",
      hint: "Verwirkung hilft dagegen nicht: Ordnungsrechtliche Eingriffsbefugnisse können durch behördliche Untätigkeit nicht verwirkt werden.",
      options: [
        { label: "Nein, kein Bestandsschutz", next: "q_andere_weise", tone: "pos" },
        { label: "Ja, Bestandsschutz greift", next: "e_bestandsschutz", tone: "neg" }
      ]
    },

    q_andere_weise: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 81 S. 1 letzter Hs. LBauO",
      title: "Können rechtmäßige Zustände auf andere Weise hergestellt werden?",
      text: "Die Beseitigung ist nur zulässig, „wenn nicht auf andere Weise rechtmäßige Zustände herbeigeführt werden können“ – Ausdruck des Übermaßverbots wegen des intensiven Eingriffs in Art. 14 GG.",
      options: [
        { label: "Nein – nur die Beseitigung schafft rechtmäßige Zustände", next: "q_stoerer", tone: "pos" },
        { label: "Ja – z. B. nachträgliche Genehmigung, Teilrückbau, Nutzungsuntersagung genügt", next: "e_andere_weise", tone: "neg" }
      ]
    },

    q_tb_abbruch: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 82 LBauO",
      title: "Liegen die Voraussetzungen der Abbruchanordnung vor?",
      text: "Tatbestand (kumulativ):\n1. bauliche Anlage,\n2. wird über einen längeren Zeitraum (= mehrere Jahre) nicht genutzt und\n3. verfällt: Die bauliche Substanz ist beschädigt und mit einer Vergrößerung der Schäden ist zu rechnen.",
      options: [
        { label: "Ja, alle drei Voraussetzungen erfüllt", next: "q_stoerer", tone: "pos" },
        { label: "Nein, mindestens eine Voraussetzung fehlt", next: "e_tb_fehlt", tone: "neg" }
      ]
    },

    q_tb_general: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 59 I 1 LBauO",
      title: "Liegt ein Verstoß gegen baurechtliche oder sonstige öffentlich-rechtliche Vorschriften vor?",
      text: "Tatbestand der Generalklausel: Verstoß gegen baurechtliche oder sonstige öffentlich-rechtliche Vorschriften (und kein Eingreifen spezieller Standardmaßnahmen). Rechtsfolge: die erforderlichen Maßnahmen nach pflichtgemäßem Ermessen – z. B. Aufforderung, einen Bauantrag zu stellen oder Unterlagen einzureichen.",
      options: [
        { label: "Ja, Verstoß liegt vor", next: "q_stoerer", tone: "pos" },
        { label: "Nein", next: "e_tb_fehlt", tone: "neg" }
      ]
    },

    /* ================= D. Verantwortlicher (Störerauswahl) ================= */

    q_stoerer: {
      station: "stoerer",
      kind: "frage",
      norm: "§§ 54–57 LBauO",
      title: "Richtet sich die Maßnahme gegen einen Verantwortlichen?",
      text: "Zwischenergebnis: Der Tatbestand der Befugnisnorm ist erfüllt. ✓\n\nDie Maßnahme muss sich gegen einen baurechtlich Verantwortlichen richten.",
      def: "<b>Verantwortliche:</b> Bauherrin/Bauherr (§ 54 LBauO) · andere am Bau Beteiligte im Rahmen ihres Wirkungskreises (§ 54 LBauO) · Eigentümer/Erbbauberechtigte des Grundstücks (§ 54 II LBauO) · Besitzer wie Mieter und Pächter (§ 54 II 3 LBauO) · Entwurfsverfasser (§ 56 LBauO) · Bauleiter (§ 56a LBauO) · Unternehmer (§ 57 LBauO).",
      hint: "Der Eigentümer ist als Zustandsverantwortlicher auch dann richtiger Adressat, wenn ihm das Verhalten seiner Mieter nicht zurechenbar ist (z. B. Nutzungsuntersagung gegen den Vermieter einer illegal genutzten Wohnung).",
      options: [
        { label: "Ja, Adressat ist Verantwortlicher i. S. d. §§ 54 ff. LBauO", next: "q_ermessen", tone: "pos" },
        { label: "Nein, Maßnahme trifft einen Nichtverantwortlichen", next: "e_stoerer", tone: "neg" }
      ]
    },

    /* ================= E. Rechtsfolge / Ermessen ================= */

    q_ermessen: {
      station: "ermessen",
      kind: "frage",
      norm: "§ 1 LVwVfG i. V. m. § 40 VwVfG, § 114 VwGO",
      title: "Ist das Ermessen fehlerfrei ausgeübt?",
      text: "Auf der Rechtsfolgenseite sind Eingriffsermessen (ob), Auswahlermessen (gegen wen) und der Umfang des Einschreitens zu prüfen – einschließlich Verhältnismäßigkeit.",
      def: "<b>Typische Problemfelder:</b> offensichtliche Genehmigungsfähigkeit · Duldung/widersprüchliches Verhalten · Gleichbehandlung (Art. 3 GG) · Verhältnismäßigkeit (z. B. drohende Obdachlosigkeit bei Nutzungsuntersagung – i. d. R. nur Frage der Vollstreckung/Fristsetzung).",
      options: [
        { label: "Ja, keine Ermessensfehler ersichtlich", next: "e_rechtmaessig", tone: "pos" },
        { label: "Problem: Vorhaben/Nutzung ist offensichtlich genehmigungsfähig", next: "q_genehmigungsfaehig", tone: "warn" },
        { label: "Problem: frühere Duldung durch die Behörde", next: "q_duldung", tone: "warn" },
        { label: "Problem: gegen vergleichbare Fälle wird nicht vorgegangen (Art. 3 GG)", next: "q_art3", tone: "warn" },
        { label: "Maßnahme ist unverhältnismäßig", detail: "z. B. Beseitigung, obwohl Teilrückbau genügt", next: "e_unverhaeltnismaessig", tone: "neg" }
      ]
    },

    q_genehmigungsfaehig: {
      station: "ermessen",
      kind: "frage",
      norm: "§§ 80, 81 LBauO",
      title: "Offensichtliche Genehmigungsfähigkeit – welche Maßnahme steht in Rede?",
      text: "Die materielle Genehmigungsfähigkeit wird beim Ermessen relevant:\n\n• Nutzungsuntersagung (§ 81 S. 1 Alt. 2): Ist die Nutzung offensichtlich genehmigungsfähig, ist die Untersagung in der Regel ermessensfehlerhaft.\n• Baueinstellung (§ 80 I): Das Fehlen der Genehmigung rechtfertigt die Einstellung grundsätzlich auch bei offensichtlicher Genehmigungsfähigkeit – ermessensfehlerhaft nur in absoluten Ausnahmefällen.",
      options: [
        { label: "Nutzungsuntersagung trotz offensichtlicher Genehmigungsfähigkeit", next: "e_ermessen_genf", tone: "neg" },
        { label: "Baueinstellung – kein absoluter Ausnahmefall", detail: "Die Einstellung bleibt regelmäßig ermessensfehlerfrei", next: "q_ermessen", tone: "pos" }
      ]
    },

    q_duldung: {
      station: "ermessen",
      kind: "frage",
      norm: "§ 38 VwVfG; Treu und Glauben",
      title: "Welche Art von Duldung liegt vor?",
      text: "Das Gebrauchmachen von einer Eingriffsermächtigung kann ermessensfehlerhaft sein, wenn sich die Behörde in Widerspruch zu ihrem früheren Verhalten setzt und schutzwürdiges Vertrauen verletzt.",
      def: "<b>Passive (faktische) Duldung:</b> Die Behörde nimmt den illegalen Zustand längere Zeit nur hin – begründet <u>kein</u> schutzwürdiges Vertrauen.<br><b>Aktive Duldung:</b> Die Behörde gibt erkennbar (mindestens konkludent) zu erkennen, dass sie nicht einschreiten will – Zusicherung (§ 38 VwVfG) oder Duldungs-VA. Eine Duldung darf nur widerruflich, bedingt oder befristet erteilt werden, sonst käme sie einer Genehmigung gleich (Art. 20 III GG).",
      hint: "Verwirkung scheidet aus: Eingriffsbefugnisse bestehen im öffentlichen Interesse fort und können nicht durch Untätigkeit verwirkt werden.",
      options: [
        { label: "Nur passive Duldung (bloßes Nichtstun)", detail: "Kein Vertrauenstatbestand – Ermessen bleibt insoweit fehlerfrei", next: "q_ermessen", tone: "pos" },
        { label: "Aktive, noch wirksame Duldung (Zusicherung/Duldungs-VA)", next: "e_ermessen_duldung", tone: "neg" }
      ]
    },

    q_art3: {
      station: "ermessen",
      kind: "frage",
      norm: "Art. 3 I GG",
      title: "Gibt es einen sachlichen Grund für die Ungleichbehandlung?",
      text: "Faustformel: Ermessensfehler wegen Art. 3 GG, wenn in einem abgrenzbaren Gebiet eine größere Anzahl rechtswidriger Anlagen vorhanden ist, gegen die ohne sachlichen Grund nicht vorgegangen wird. „Keine Gleichheit im Unrecht“ gilt nicht ohne Weiteres.",
      def: "<b>Sachliche Gründe:</b> systematisches, planvolles Vorgehen nacheinander (Eingriffs-/Beseitigungskonzept, ggf. Liste und Übersichtsplan) · Abwarten eines Musterprozesses · vorrangiges Vorgehen gegen Neubauten (Abwenden der Verschärfung rechtswidriger Umstände).",
      options: [
        { label: "Ja, sachlicher Grund vorhanden", detail: "z. B. dokumentiertes Eingriffskonzept", next: "q_ermessen", tone: "pos" },
        { label: "Nein, willkürliches Herausgreifen", next: "e_ermessen_art3", tone: "neg" }
      ]
    },

    /* ================= F. Ergebnisse ================= */

    e_rechtmaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 59, 80–82 LBauO",
      title: "Die bauaufsichtliche Maßnahme ist rechtmäßig",
      text: "Ermächtigungsgrundlage, formelle und materielle Rechtmäßigkeit liegen vor; das Ermessen ist fehlerfrei ausgeübt.\n\nDurchsetzung: notfalls im Verwaltungszwang (LVwVG), z. B. Zwangsgeld oder Ersatzvornahme.\n\nRechtsschutz des Betroffenen: Widerspruch und Anfechtungsklage (§ 42 I Alt. 1 VwGO); wurde die sofortige Vollziehung angeordnet (§ 80 II 1 Nr. 4 VwGO), Antrag nach § 80 V VwGO."
    },

    e_subsidiar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 59 I 1 LBauO",
      title: "Generalklausel gesperrt – Standardmaßnahme prüfen",
      text: "Die Generalklausel tritt subsidiär zurück, wenn eine spezielle Befugnisnorm einschlägig ist. Starte das Schema neu und wähle die einschlägige Standardmaßnahme (§§ 80, 81, 82 LBauO)."
    },

    e_unzustaendig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 60, 58 I LBauO",
      title: "Formell rechtswidrig: Behörde unzuständig",
      text: "Die Maßnahme wurde nicht von der sachlich bzw. örtlich zuständigen Bauaufsichtsbehörde erlassen und ist damit formell rechtswidrig."
    },

    e_anhoerung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 28 I VwVfG",
      title: "Formell rechtswidrig: Anhörung fehlt",
      text: "Die erforderliche Anhörung wurde weder durchgeführt noch nachgeholt (§ 45 I Nr. 3 VwVfG); eine Ausnahme nach § 28 II/III VwVfG greift nicht. Die Maßnahme ist formell rechtswidrig."
    },

    e_tb_fehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 59, 80–82 LBauO",
      title: "Materiell rechtswidrig: Tatbestand nicht erfüllt",
      text: "Die Tatbestandsvoraussetzungen der gewählten Befugnisnorm liegen nicht vor. Die Maßnahme ist rechtswidrig und verletzt den Adressaten in seinen Rechten (Art. 14 I, Art. 2 I GG)."
    },

    e_nur_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 81 S. 1 Alt. 1 LBauO",
      title: "Beseitigung scheidet aus: nur formelle Illegalität",
      text: "Die Beseitigungsanordnung setzt formelle UND materielle Illegalität voraus. Ist die Anlage materiell legal bzw. genehmigungsfähig, kommen nur mildere Mittel in Betracht – insbesondere die Aufforderung, einen Bauantrag zu stellen (§ 59 I LBauO), oder eine Nutzungsuntersagung/Baueinstellung wegen formeller Illegalität."
    },

    e_bestandsschutz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 14 I GG",
      title: "Beseitigung scheidet aus: Bestandsschutz",
      text: "Die Anlage genießt passiven Bestandsschutz – sie wurde einst wirksam genehmigt oder war nach ihrer Errichtung mindestens drei Monate mit dem materiellen Baurecht vereinbar. Die für die Beseitigung erforderliche materielle Illegalität fehlt."
    },

    e_andere_weise: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 81 S. 1 letzter Hs. LBauO",
      title: "Beseitigung unzulässig: milderes Mittel möglich",
      text: "Rechtmäßige Zustände können auf andere Weise herbeigeführt werden (z. B. nachträgliche Genehmigung, Teilrückbau, Nutzungsuntersagung). Die vollständige Beseitigung wäre unverhältnismäßig."
    },

    e_stoerer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 54–57 LBauO",
      title: "Rechtswidrig: falscher Adressat",
      text: "Die Maßnahme richtet sich gegen eine Person, die nicht baurechtlich verantwortlich ist (§§ 54–57 LBauO). Sie ist bereits deshalb rechtswidrig."
    },

    e_ermessen_genf: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 81 S. 1 Alt. 2 LBauO, § 40 VwVfG",
      title: "Ermessensfehler: offensichtliche Genehmigungsfähigkeit",
      text: "Ist die untersagte Nutzung offensichtlich genehmigungsfähig, ist es in der Regel ermessensfehlerhaft, sie zu untersagen. Die Behörde muss den Betroffenen stattdessen auf das Genehmigungsverfahren verweisen (Aufforderung zur Antragstellung)."
    },

    e_ermessen_duldung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 38 VwVfG, Treu und Glauben",
      title: "Ermessensfehler: aktive Duldung",
      text: "Die Behörde hat den Zustand aktiv geduldet (Zusicherung bzw. Duldungs-VA) und setzt sich mit dem Einschreiten in Widerspruch zu ihrem früheren Verhalten. Solange die Duldung wirksam ist (nicht widerrufen, Befristung nicht abgelaufen), ist die Maßnahme ermessensfehlerhaft."
    },

    e_ermessen_art3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Art. 3 I GG",
      title: "Ermessensfehler: Verstoß gegen den Gleichbehandlungsgrundsatz",
      text: "In einem abgrenzbaren Gebiet wird gegen eine größere Anzahl vergleichbarer rechtswidriger Anlagen ohne sachlichen Grund nicht vorgegangen. Das Herausgreifen einzelner ist ermessensfehlerhaft; die Behörde braucht ein Eingriffskonzept."
    },

    e_unverhaeltnismaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Übermaßverbot",
      title: "Ermessensfehler: Unverhältnismäßigkeit",
      text: "Die Maßnahme ist zur Herstellung rechtmäßiger Zustände nicht erforderlich oder unangemessen (z. B. vollständige Beseitigung statt Teilrückbau). Sie ist ermessensfehlerhaft und damit rechtswidrig."
    }
  },

  routers: {
    /* Tatbestandsprüfung je nach gewählter Maßnahme */
    "@tatbestand": function (flags) {
      return {
        einstellung: "q_tb_einstellung",
        versiegelung: "q_tb_versiegelung",
        nutzung: "q_tb_nutzung",
        beseitigung: "q_tb_beseitigung1",
        abbruch: "q_tb_abbruch",
        general: "q_tb_general"
      }[flags.m] || "q_tb_general";
    }
  }
});
