/*
 * Prüfungsschema: Nachbarwiderspruch / Anfechtungsklage gegen eine Baugenehmigung
 * (Drittschutz im Baurecht)
 *
 * Quelle (Obsidian-Vault "Brain", Modul 5 Baurecht):
 *  - "Baurecht - Fachstudium III - 2021" (Birtel-Kaldenhoff), Kapitel
 *    "Drittschutz im Baurecht / Nachbarklage" (Folien 93 ff.)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "nachbar-anfechtung",
  subject: "Baurecht",
  area: "Nachbarschutz",
  title: "Nachbarwiderspruch gegen die Baugenehmigung",
  description: "Der Nachbar wehrt sich gegen die dem Bauherrn erteilte Baugenehmigung: Nachbarbegriff, Widerspruchs-/Klagebefugnis (Schutznormtheorie), Fristen und Verwirkung, Verletzung drittschützender Normen (Gebietserhaltung, § 15 BauNVO, Rücksichtnahmegebot) und Eilrechtsschutz.",
  start: "start",
  stations: [
    { id: "konstellation", label: "Konstellation" },
    { id: "zul", label: "Zulässigkeit" },
    { id: "begr", label: "Begründetheit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Rechtsbehelf erfolgreich",
    neg: "Ergebnis: kein Erfolg",
    frei: "Ergebnis: anderes Schema einschlägig",
    warn: "Ergebnis: Hinweis"
  },

  nodes: {

    /* ================= A. Konstellation ================= */

    start: {
      station: "konstellation",
      kind: "frage",
      norm: "§ 42 I, II VwGO",
      title: "Welche Nachbarschutz-Konstellation liegt vor?",
      text: "Die objektive Rechtswidrigkeit einer Baugenehmigung genügt dem Nachbarn nicht – das Baurecht dient grundsätzlich dem Allgemeininteresse. Der Nachbar braucht eine eigene subjektive Rechtsposition (drittschützende Norm).",
      def: "<b>Variante 1:</b> Dem Bauherrn wurde eine Baugenehmigung erteilt → Widerspruch/Anfechtungsklage des Nachbarn (§ 42 I Alt. 1 VwGO).<br><b>Variante 2:</b> Der Bauherr baut ohne bzw. außerhalb der Genehmigung („Schwarzbau“) → Antrag/Verpflichtungsklage auf bauaufsichtliches Einschreiten (§ 42 I Alt. 2 VwGO).",
      options: [
        { label: "Baugenehmigung erteilt – Nachbar will sie anfechten", next: "q_nachbar", tone: "neutral" },
        { label: "Schwarzbau – Nachbar verlangt Einschreiten der Behörde", detail: "Dafür gibt es das eigene Schema „Anspruch auf bauaufsichtliches Einschreiten“", next: "e_verweis_einschreiten", tone: "neutral" }
      ]
    },

    /* ================= B. Zulässigkeit ================= */

    q_nachbar: {
      station: "zul",
      kind: "frage",
      norm: "§ 42 II VwGO",
      title: "Ist der Widerspruchsführer „Nachbar“ im baurechtlichen Sinn?",
      text: "Der Nachbar ist weder Bauherr noch Adressat – er ist Dritter i. S. d. Verwaltungsrechts. Die Baugenehmigung ist ein VA mit Doppelwirkung: Sie begünstigt den Bauherrn und belastet u. U. den Nachbarn.",
      def: "<b>Baurechtliche Nachbarn</b> sind die <b>Eigentümer</b> (und dinglich Berechtigte) der benachbarten Grundstücke. <b>Benachbart</b> sind Grundstücke, die durch das Vorhaben in ihren öffentlich-rechtlich geschützten Belangen berührt sein können.<br><br><b>Merke:</b> Das Bauplanungsrecht ist grundstücks-, nicht personenbezogen – obligatorisch Berechtigte (Mieter, Pächter) sind nicht klagebefugt.",
      options: [
        { label: "Ja, Eigentümer eines benachbarten Grundstücks", next: "q_befugnis", tone: "pos" },
        { label: "Nein, nur Mieter oder Pächter", next: "e_mieter", tone: "neg" },
        { label: "Nein, Grundstück kann nicht betroffen sein", next: "e_kein_nachbar", tone: "neg" }
      ]
    },

    q_befugnis: {
      station: "zul",
      kind: "frage",
      norm: "§ 42 II VwGO (analog)",
      title: "Kann der Nachbar die mögliche Verletzung einer drittschützenden Norm geltend machen?",
      text: "Widerspruchs-/Klagebefugnis: Es muss möglich erscheinen, dass die Baugenehmigung gegen eine Norm verstößt, die gerade auch den Nachbarn schützt (Schutznormtheorie).",
      def: "<b>Schutznormtheorie:</b> Eine Norm ist drittschützend, wenn sie nicht nur den Interessen der Allgemeinheit, sondern auch individuellen Interessen zu dienen bestimmt ist (individualisierende Tatbestandsmerkmale, ggf. durch Auslegung).<br><br><b>Generell drittschützend:</b> Festsetzungen zur <u>Art</u> der baulichen Nutzung (§§ 1–15 BauNVO i. R. d. § 30 I bzw. § 34 II BauGB) – Gebietserhaltungsanspruch · § 15 I BauNVO · § 31 I/II BauGB bei Ausnahmen/Befreiungen von drittschützenden Festsetzungen · im Bauordnungsrecht: Abstandsflächen (§ 8 LBauO), Standsicherheit (§ 13 I 2 LBauO), Brandschutz (§ 15 LBauO), Stellplatzpflicht (§ 47 VII LBauO).<br><b>Nicht drittschützend:</b> das <u>Maß</u> der baulichen Nutzung (nur ausnahmsweise über das Rücksichtnahmegebot).",
      options: [
        { label: "Ja, Verletzung einer drittschützenden Norm erscheint möglich", next: "q_frist", tone: "pos" },
        { label: "Nein, von vornherein ausgeschlossen", next: "e_befugnis", tone: "neg" }
      ]
    },

    q_frist: {
      station: "zul",
      kind: "frage",
      norm: "§ 70 I VwGO",
      title: "Wurde die Baugenehmigung dem Nachbarn bekannt gegeben?",
      text: "Grundsatz: Widerspruch innerhalb eines Monats nach Bekanntgabe an den Beschwerten (§ 70 I 1 VwGO). Problem: Die Baugenehmigung wird meist nur dem Bauherrn bekannt gegeben – gegenüber dem Nachbarn beginnt die Frist dann gar nicht zu laufen.",
      options: [
        { label: "Ja – und Widerspruch binnen Monatsfrist eingelegt", next: "q_verwirkung", tone: "pos" },
        { label: "Ja – aber Monatsfrist versäumt", next: "e_frist", tone: "neg" },
        { label: "Nein, keine Bekanntgabe an den Nachbarn", next: "q_kenntnis", tone: "neutral" }
      ]
    },

    q_kenntnis: {
      station: "zul",
      kind: "frage",
      norm: "§§ 70 I, 58 II VwGO (Treu und Glauben)",
      title: "Hatte der Nachbar zuverlässig Kenntnis – oder hätte er sie haben müssen?",
      text: "Formelle Verwirkung des Verfahrensrechts: Hat der Nachbar auf andere Weise zuverlässig Kenntnis von der Baugenehmigung erlangt oder hätte er sie erlangen müssen (Baugenehmigung drängt sich auf, Nachfrage möglich und zumutbar – z. B. Bauschild/„Roter Punkt“, Baubeginn), muss er sich so behandeln lassen, als sei ihm die Genehmigung in diesem Zeitpunkt bekannt gegeben worden.",
      def: "<b>Folge:</b> Ab (möglicher) zuverlässiger Kenntniserlangung läuft die <b>Jahresfrist</b> entsprechend §§ 70 II, 58 II VwGO.",
      options: [
        { label: "Nein – Widerspruch weiterhin möglich", next: "q_verwirkung", tone: "pos" },
        { label: "Ja, aber Widerspruch innerhalb der Jahresfrist eingelegt", next: "q_verwirkung", tone: "pos" },
        { label: "Ja, und Jahresfrist verstrichen", next: "e_verwirkt_formell", tone: "neg" }
      ]
    },

    q_verwirkung: {
      station: "zul",
      kind: "frage",
      norm: "Treu und Glauben",
      title: "Ist das Abwehrrecht materiell verwirkt?",
      text: "Neben der formellen Verwirkung des Verfahrensrechts kann das materielle Abwehrrecht selbst verwirkt sein.",
      def: "<b>Materielle Verwirkung</b> setzt kumulativ voraus:<br>1. <b>Zeitmoment:</b> Das Recht wurde über einen längeren Zeitraum (länger als die Monatsfrist) nicht geltend gemacht.<br>2. <b>Umstandsmoment:</b> Der Bauherr durfte aufgrund eines bestimmten Verhaltens des Nachbarn darauf vertrauen, dass keine Abwehransprüche mehr kommen, und hat deshalb Maßnahmen durchgeführt, sodass ihm ein unzumutbarer Nachteil entstünde. Bloßes Nichtstun begründet <u>kein</u> Umstandsmoment.",
      hint: "Zur Vermeidung der Verwirkung genügt es, wenn der Nachbar dem Bauherrn deutlich und nachweisbar mitteilt, dass er mit dem Vorhaben nicht einverstanden ist.",
      options: [
        { label: "Nein, keine Verwirkung", next: "q_begr_einstieg", tone: "pos" },
        { label: "Ja, Zeit- und Umstandsmoment erfüllt", next: "e_verwirkt_materiell", tone: "neg" }
      ]
    },

    /* ================= C. Begründetheit ================= */

    q_begr_einstieg: {
      station: "begr",
      kind: "frage",
      norm: "§ 113 I 1 VwGO",
      title: "Begründetheit: Welche drittschützende Position kommt in Betracht?",
      text: "Zwischenergebnis: Der Widerspruch ist zulässig. ✓\n\nBegründet ist er nur, wenn die Baugenehmigung tatsächlich gegen eine den Nachbarn schützende Norm verstößt. Prüfungsreihenfolge bei der Art der Nutzung: (1) Gebietserhaltungsanspruch → (2) Gebietsprägungserhaltungsanspruch → (3) § 15 I 1 BauNVO → (4) Rücksichtnahmegebot.",
      options: [
        { label: "Gebietserhaltungsanspruch", detail: "Vorhaben ist im (faktischen) Baugebiet weder regel- noch ausnahmsweise zulässig", next: "q_gea", tone: "neutral" },
        { label: "Gebietsprägungserhaltungsanspruch", detail: "Vorhaben zulässig, aber nach typischer Nutzungsweise generell störend", next: "q_gpea", tone: "neutral" },
        { label: "§ 15 I 1 BauNVO – prägender Gebietscharakter", detail: "Im Einzelfall nach Lage, Umfang, Anzahl oder Zweckbestimmung widersprechend", next: "q_15_1", tone: "neutral" },
        { label: "Rücksichtnahmegebot", detail: "Vorhaben ist gegenüber dem Nachbarn im Einzelfall rücksichtslos", next: "q_ruecksicht", tone: "neutral" },
        { label: "Drittschützende Norm des Bauordnungsrechts", detail: "z. B. Abstandsflächen § 8 LBauO", next: "q_bauordnung", tone: "neutral" },
        { label: "Keine Verletzung ersichtlich", next: "e_unbegruendet", tone: "neg" }
      ]
    },

    q_gea: {
      station: "begr",
      kind: "frage",
      norm: "§§ 30 I / 34 II BauGB i. V. m. §§ 2–14 BauNVO",
      title: "Ist der Gebietserhaltungsanspruch verletzt?",
      text: "Festsetzungen zur Art der baulichen Nutzung vermitteln einen Anspruch auf Bewahrung der Gebietsart gegen Vorhaben, die dem Baugebiet widersprechen – unabhängig von einer tatsächlichen Beeinträchtigung.",
      def: "<b>Voraussetzungen:</b> (1) Nachbar- und Baugrundstück liegen im <u>selben</u> (auch faktischen, § 34 II BauGB) Baugebiet – „Schicksalsgemeinschaft“/nachbarliches Austauschverhältnis (BVerwG NJW 1994, 1548); (2) das Vorhaben ist dort weder als Regel- noch als Ausnahmebebauung zulässig.<br><b>Kein</b> Gebietserhaltungsanspruch in Gemengelagen und im Außenbereich; er wirkt nicht über die Gebietsgrenzen hinweg.",
      options: [
        { label: "Ja – gebietsfremdes Vorhaben im selben Baugebiet", next: "q_eilbedarf", tone: "pos" },
        { label: "Nein", detail: "Andere Anspruchsgrundlage prüfen", next: "q_begr_einstieg", tone: "neutral" }
      ]
    },

    q_gpea: {
      station: "begr",
      kind: "frage",
      norm: "§§ 2–9 BauNVO (jeweiliger Abs. 1)",
      title: "Ist der Gebietsprägungserhaltungsanspruch verletzt?",
      text: "Ein Vorhaben, das im konkreten Baugebiet regelhaft oder ausnahmsweise zulässig (also mit der Gebietsart vereinbar) ist, kann gleichwohl generell gebietsunverträglich sein, wenn es aufgrund seiner typischen Nutzungsweise störend wirkt (BVerwG NVwZ 2008, 786).",
      def: "<b>Typische Auswirkungen:</b> Art und Weise der Betriebsvorgänge, Umfang, Häufigkeit, Zeitpunkte, An- und Abfahrtsverkehr, Einzugsbereich (Beispiel: großes Dialysezentrum mit erheblichem Verkehr im Wohngebiet).<br><b>Abgrenzung zu § 15 I BauNVO:</b> Dort ist das Vorhaben bei typisierender Betrachtung verträglich, nur im konkreten Einzelfall nicht.",
      options: [
        { label: "Ja – typischerweise störendes Vorhaben", next: "q_eilbedarf", tone: "pos" },
        { label: "Nein", detail: "Andere Anspruchsgrundlage prüfen", next: "q_begr_einstieg", tone: "neutral" }
      ]
    },

    q_15_1: {
      station: "begr",
      kind: "frage",
      norm: "§ 15 I 1 BauNVO",
      title: "Widerspricht das Vorhaben im Einzelfall dem prägenden Gebietscharakter?",
      text: "§ 15 I 1 BauNVO vermittelt allen Bewohnern eines Baugebiets einen Anspruch auf Erhalt des prägenden Gebietscharakters: Auch regel- oder ausnahmsweise zulässige Vorhaben können abgewehrt werden, wenn sie im Einzelfall nach Lage, Umfang, Anzahl oder Zweckbestimmung dem Gebietscharakter widersprechen.",
      hint: "§ 15 I 1 BauNVO kommt erst zum Zuge, wenn das Vorhaben nicht schon generell-typisierend gebietsunverträglich ist (dann greift vorrangig der Gebietsprägungserhaltungsanspruch).",
      options: [
        { label: "Ja – Einzelfallwiderspruch zum Gebietscharakter", next: "q_eilbedarf", tone: "pos" },
        { label: "Nein", detail: "Andere Anspruchsgrundlage prüfen", next: "q_begr_einstieg", tone: "neutral" }
      ]
    },

    q_ruecksicht: {
      station: "begr",
      kind: "frage",
      norm: "§ 15 I 2 BauNVO; § 34 I BauGB; § 31 II BauGB; § 35 III BauGB",
      title: "Ist das Vorhaben gegenüber dem Nachbarn rücksichtslos?",
      text: "Das Rücksichtnahmegebot ist kein übergesetzlicher Grundsatz – es gilt nur, soweit es einfachgesetzlich normiert ist, und schützt nur im konkreten Einzelfall (partiell-konkreter Drittschutz, strenger Maßstab!).",
      def: "<b>Herleitung:</b> im B-Plan-Gebiet § 15 I 2 BauNVO · im faktischen Baugebiet § 34 II BauGB i. V. m. § 15 I 2 BauNVO · in der Gemengelage über das „Einfügen“ (§ 34 I BauGB) · bei Befreiungen über die „Würdigung nachbarlicher Interessen“ (§ 31 II BauGB) · im Außenbereich über schädliche Umwelteinwirkungen bzw. den ungeschriebenen öffentlichen Belang (§ 35 III BauGB).<br><br><b>BVerwG-Formel:</b> Je empfindlicher und schutzwürdiger die Stellung des Begünstigten, desto mehr Rücksichtnahme kann verlangt werden; je verständlicher und unabweisbarer die Interessen des Bauherrn, desto weniger.<br><br><b>Fallgruppen:</b> erdrückende Wirkung übergroßer Baukörper in geringem Abstand („Eingemauertsein“, Silo-Fall) · heranrückende Bebauung: Emittierende Betriebe können sich über § 15 I 2 Alt. 2 BauNVO gegen heranrückende störempfindliche Nutzung wehren.",
      options: [
        { label: "Ja, im konkreten Einzelfall rücksichtslos", next: "q_eilbedarf", tone: "pos" },
        { label: "Nein", detail: "Bloßes Nichteinfügen (z. B. beim Maß) genügt nicht – andere Anspruchsgrundlage prüfen", next: "q_begr_einstieg", tone: "neutral" }
      ]
    },

    q_bauordnung: {
      station: "begr",
      kind: "frage",
      norm: "§§ 8, 13 I 2, 15, 47 VII LBauO",
      title: "Verstößt die Genehmigung gegen eine drittschützende Norm des Bauordnungsrechts?",
      text: "Drittschützend sind insbesondere: Abstandsflächen (§ 8 LBauO), Standsicherheit (§ 13 I 2 LBauO), Brandschutz (§ 15 LBauO) und die Stellplatzpflicht (§ 47 VII LBauO).",
      hint: "Achtung vereinfachtes Genehmigungsverfahren (§ 66 IV LBauO): Dort ist das Bauordnungsrecht nicht Prüfungsmaßstab der Genehmigung – ein Verstoß macht die Genehmigung dann nicht rechtswidrig; der Nachbar muss stattdessen bauaufsichtliches Einschreiten verlangen.",
      options: [
        { label: "Ja – Verstoß, und das Bauordnungsrecht war Prüfungsmaßstab", next: "q_eilbedarf", tone: "pos" },
        { label: "Verstoß, aber vereinfachtes Verfahren (§ 66 IV LBauO)", detail: "→ Schema „Anspruch auf bauaufsichtliches Einschreiten“", next: "e_verweis_einschreiten", tone: "warn" },
        { label: "Nein", detail: "Andere Anspruchsgrundlage prüfen", next: "q_begr_einstieg", tone: "neutral" }
      ]
    },

    q_eilbedarf: {
      station: "begr",
      kind: "frage",
      norm: "§ 212a I BauGB; §§ 80a, 80 V VwGO",
      title: "Droht der Baubeginn – ist Eilrechtsschutz nötig?",
      text: "Widerspruch und Anfechtungsklage des Nachbarn gegen die Baugenehmigung haben KEINE aufschiebende Wirkung (§ 80 II 1 Nr. 3 VwGO i. V. m. § 212a I BauGB) – der Bauherr darf trotz Widerspruchs bauen.",
      def: "<b>Eilrechtsschutz des Nachbarn:</b> (1) Antrag bei der Behörde auf Aussetzung der Vollziehung, § 80a I Nr. 2 i. V. m. § 80 IV VwGO; (2) Antrag beim Gericht auf Anordnung der aufschiebenden Wirkung, § 80a III i. V. m. § 80 V VwGO – begründet, wenn das Aussetzungsinteresse überwiegt; maßgeblich sind die Erfolgsaussichten der Hauptsache (summarische Prüfung).<br><b>Merke:</b> § 212a I BauGB gilt nicht für Bauvorbescheide. Baut der Bauherr trotz angeordneter aufschiebender Wirkung weiter (faktischer Vollzug), gelten §§ 80, 80a VwGO analog.",
      options: [
        { label: "Ja, Eilrechtsschutz erforderlich", next: "e_begruendet", set: { eil: true }, tone: "warn" },
        { label: "Nein, Hauptsacheverfahren genügt", next: "e_begruendet", tone: "neutral" }
      ]
    },

    /* ================= D. Ergebnisse ================= */

    e_begruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 113 I 1 VwGO",
      title: "Widerspruch/Klage des Nachbarn hat Erfolg",
      text: "Die Baugenehmigung verstößt gegen eine den Nachbarn schützende Norm und verletzt ihn dadurch in seinen Rechten. Der Widerspruch ist begründet; eine Anfechtungsklage hätte nach § 113 I 1 VwGO Erfolg – die Baugenehmigung ist aufzuheben."
    },

    e_verweis_einschreiten: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 42 I Alt. 2 VwGO",
      title: "Anderer Rechtsbehelf: Anspruch auf bauaufsichtliches Einschreiten",
      text: "Ohne (wirksame bzw. den Verstoß deckende) Baugenehmigung gibt es nichts anzufechten. Der Nachbar muss bei der Bauaufsichtsbehörde Einschreiten beantragen und notfalls Verpflichtungswiderspruch/-klage erheben (Eilrechtsschutz: § 123 VwGO).\n\nNutze dafür das Schema „Anspruch auf bauaufsichtliches Einschreiten“."
    },

    e_mieter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO",
      title: "Unzulässig: Mieter/Pächter sind nicht klagebefugt",
      text: "Obligatorisch Berechtigte (Mieter, Pächter) sind gegenüber einer Baugenehmigung nicht widerspruchs-/klagebefugt. Das Bauplanungsrecht ist grundstücksbezogen – die benachbarten Grundstücke werden durch ihre Eigentümer „repräsentiert“."
    },

    e_kein_nachbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO",
      title: "Unzulässig: kein Nachbar im Rechtssinn",
      text: "Das Grundstück kann durch das Vorhaben nicht in öffentlich-rechtlich geschützten Belangen berührt werden – es fehlt bereits die Nachbareigenschaft und damit die Widerspruchs-/Klagebefugnis."
    },

    e_befugnis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 42 II VwGO",
      title: "Unzulässig: keine mögliche Verletzung drittschützender Normen",
      text: "Eine Verletzung von Normen, die gerade auch den Nachbarn schützen, ist von vornherein ausgeschlossen (z. B. nur das Maß der baulichen Nutzung betroffen, keine Rücksichtslosigkeit erkennbar). Der Rechtsbehelf ist mangels Widerspruchs-/Klagebefugnis unzulässig."
    },

    e_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 70 I VwGO",
      title: "Unzulässig: Widerspruchsfrist versäumt",
      text: "Die Baugenehmigung wurde dem Nachbarn bekannt gegeben; die Monatsfrist des § 70 I 1 VwGO ist verstrichen. Der Widerspruch ist unzulässig (ggf. Wiedereinsetzung nach § 70 II i. V. m. § 60 VwGO prüfen)."
    },

    e_verwirkt_formell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 70 II, 58 II VwGO",
      title: "Unzulässig: Verfahrensrecht formell verwirkt",
      text: "Der Nachbar hatte zuverlässig Kenntnis von der Baugenehmigung (oder hätte sie haben müssen) und hat die entsprechend §§ 70 II, 58 II VwGO laufende Jahresfrist verstreichen lassen. Nach Treu und Glauben ist der Widerspruch verfristet."
    },

    e_verwirkt_materiell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Treu und Glauben",
      title: "Kein Erfolg: materielles Abwehrrecht verwirkt",
      text: "Zeitmoment und Umstandsmoment liegen vor: Der Bauherr durfte auf das Ausbleiben von Abwehransprüchen vertrauen und hat im Vertrauen darauf Maßnahmen durchgeführt. Das Abwehrrecht des Nachbarn ist verwirkt."
    },

    e_unbegruendet: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 113 I 1 VwGO",
      title: "Zulässig, aber unbegründet",
      text: "Die Baugenehmigung verstößt gegen keine den Nachbarn schützende Norm. Selbst eine objektiv rechtswidrige Genehmigung verletzt den Nachbarn nicht in eigenen Rechten – der Widerspruch bleibt ohne Erfolg."
    }
  },

  routers: {},

  resultExtras: function (flags, node) {
    var extras = [];
    if (node.verdict === "pos" && flags.eil) {
      extras.push("Eilrechtsschutz: Antrag nach § 80a III i. V. m. § 80 V VwGO auf Anordnung der aufschiebenden Wirkung (zulässig schon vor Klageerhebung, § 80 V 2 VwGO). Daneben Antrag an die Behörde nach § 80a I Nr. 2 i. V. m. § 80 IV VwGO möglich.");
    }
    return extras;
  }
});
