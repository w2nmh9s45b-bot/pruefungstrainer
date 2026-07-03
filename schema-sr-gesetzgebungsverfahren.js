/*
 * Prüfungsschema: Gesetzgebungsverfahren des Bundes, Art. 76–78, 82 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "12. LE 12 und LE 13 - Gesetzgebungsverfahren" (Weidenbach, FS I)
 *  - "2.1.1 StVR 23-24 OLE Gesetzgebungsverfahren" (FS I)
 *  - "StVR II OLE LE 6 - Der Bundesrat" (Breitbach, FS II)
 *  - Normen verifiziert an Grundgesetz.md, BTGO_2025.md, BWahlG.md
 *    (§ 1 I BWahlG: der Bundestag besteht seit der Wahlrechtsreform aus 630 Abgeordneten)
 *
 * Stationen: einleitung → hauptbt → hauptbr → abschluss → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-gesetzgebungsverfahren",
  subject: "Staatsrecht / Europarecht",
  area: "Gesetzgebung",
  title: "Gesetzgebungsverfahren, Art. 76 ff. GG",
  description: "Die drei Abschnitte des Bundesgesetzgebungsverfahrens: Einleitungsverfahren (Gesetzesinitiative, Art. 76 GG), Hauptverfahren in Bundestag (Lesungen, Beschlussfähigkeit, Mehrheiten) und Bundesrat (Zustimmungs-/Einspruchsgesetz, Vermittlungsausschuss), Abschlussverfahren (Gegenzeichnung, Ausfertigung, Verkündung, Art. 82 GG).",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "einleitung", label: "Einleitung" },
    { id: "hauptbt", label: "Bundestag" },
    { id: "hauptbr", label: "Bundesrat" },
    { id: "abschluss", label: "Abschluss" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Verfahren ordnungsgemäß",
    neg: "Verfahrensfehler",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    /* ================= I. Einleitungsverfahren ================= */

    start: {
      station: "einleitung",
      kind: "frage",
      norm: "Art. 76 I GG",
      title: "Wer hat die Gesetzesvorlage eingebracht (Initiativrecht)?",
      text: "Gesetzesvorlagen werden beim Bundestag eingebracht durch die Bundesregierung, aus der Mitte des Bundestages oder durch den Bundesrat (Art. 76 I GG).",
      def: "<b>Formelle Gesetze („Parlamentsgesetze“):</b> Gesetze, die im förmlichen Gesetzgebungsverfahren der Art. 76 ff. GG von der Legislative erlassen werden. Drei Abschnitte: Einleitung (Art. 76), Hauptverfahren (Art. 77), Abschluss (Art. 82 GG).",
      options: [
        { label: "Bundesregierung, Art. 76 I 1. Alt. GG", detail: "Beschluss als Kollegialorgan (Art. 62 GG) mit Stimmenmehrheit; Kanzler/einzelne Minister haben kein eigenes Initiativrecht", next: "q_vorverfahren_breg", tone: "neutral" },
        { label: "Mitte des Bundestages, Art. 76 I 2. Alt. GG", detail: "Fraktion oder 5 % der Mitglieder (§ 76 I GOBT)", next: "q_mitte", tone: "neutral" },
        { label: "Bundesrat, Art. 76 I 3. Alt. GG", detail: "Beschluss mit Mehrheit seiner Stimmen (Art. 52 III 1 GG)", next: "q_vorverfahren_br", tone: "neutral" },
        { label: "Einzelner Abgeordneter / sonstiger", next: "q_gobt_verstoss", tone: "warn" }
      ]
    },

    q_vorverfahren_breg: {
      station: "einleitung",
      kind: "frage",
      norm: "Art. 76 II GG",
      title: "Vorverfahren: Vorlage zunächst dem Bundesrat zugeleitet?",
      text: "Vorlagen der Bundesregierung sind zunächst dem Bundesrat zuzuleiten („erster Durchgang“); dieser kann innerhalb von sechs Wochen Stellung nehmen (Verlängerung auf neun Wochen möglich, Eilfall drei Wochen). Eine Pflicht zur Stellungnahme besteht nicht.",
      hint: "Bei Missachtung der Fristen bleibt das Gesetz grundsätzlich rechtmäßig – bloße formale Ordnungsvorschrift. In der Praxis wird das Vorverfahren oft durch Einbringung über eine Bundestagsfraktion umgangen.",
      options: [
        { label: "Ja, ordnungsgemäß / Fristverstoß unbeachtlich", next: "q_lesungen", tone: "pos" },
        { label: "Zuleitung komplett unterblieben", detail: "Verstoß gegen Art. 76 II GG selbst", next: "e_fehler_einleitung", tone: "neg" }
      ]
    },

    q_vorverfahren_br: {
      station: "einleitung",
      kind: "frage",
      norm: "Art. 76 III GG",
      title: "Vorverfahren: Vorlage über die Bundesregierung zugeleitet?",
      text: "Vorlagen des Bundesrates sind dem Bundestag durch die Bundesregierung zuzuleiten; sie soll innerhalb von sechs Wochen ihre Auffassung darlegen (Art. 76 III GG).",
      options: [
        { label: "Ja, ordnungsgemäß", next: "q_lesungen", tone: "pos" },
        { label: "Fristverstoß", detail: "Unbeachtlich – formale Ordnungsvorschrift", next: "q_lesungen", tone: "warn" }
      ]
    },

    q_mitte: {
      station: "einleitung",
      kind: "frage",
      norm: "§ 76 I GOBT",
      title: "Vorlage von einer Fraktion oder 5 % der Mitglieder unterzeichnet?",
      text: "Nach § 76 I GOBT müssen Vorlagen aus der Mitte des Bundestages von einer Fraktion oder von 5 % der Mitglieder des Bundestages unterzeichnet sein (bei 630 Mitgliedern nach § 1 I BWahlG: mindestens 32 Abgeordnete).",
      options: [
        { label: "Ja, Quorum erreicht", next: "q_lesungen", tone: "pos" },
        { label: "Nein, Quorum verfehlt", next: "q_gobt_verstoss", tone: "warn" }
      ]
    },

    q_gobt_verstoss: {
      station: "einleitung",
      kind: "frage",
      norm: "Art. 76 I GG / GOBT",
      title: "Folge eines Verstoßes (nur) gegen die GOBT?",
      text: "Die GOBT ist autonome Satzung / bloßes Parlamentsinnenrecht ohne Gesetzescharakter (Geschäftsordnungsautonomie, Art. 40 I 2 GG). Verstöße gegen bloßes Innenrecht führen nicht zur Verfassungswidrigkeit des Gesetzes – anders nur, wenn zugleich das GG selbst verletzt ist.",
      hint: "Übungsfall: 36 von 736 Abgeordneten bringen eine Vorlage ein → Verstoß gegen § 76 I GOBT, aber nicht gegen Art. 76 I GG (dort keine Zahl genannt) → Gesetz kann wirksam beschlossen werden.",
      options: [
        { label: "Nur GOBT verletzt – unbeachtlich", next: "q_lesungen", tone: "pos" },
        { label: "Zugleich GG verletzt", next: "e_fehler_einleitung", tone: "neg" }
      ]
    },

    /* ================= II. Hauptverfahren Bundestag ================= */

    q_lesungen: {
      station: "hauptbt",
      kind: "frage",
      norm: "Art. 77 I GG, §§ 78 ff. GOBT",
      title: "Beratungen (Lesungen) im Bundestag durchgeführt?",
      text: "Nach § 78 I GOBT finden drei Beratungen statt: 1. Beratung (Aussprache oder Ausschussüberweisung, §§ 79, 80 GOBT), 2. Beratung mit Änderungsanträgen (§§ 81, 82 GOBT), 3. Beratung (§§ 84, 85 GOBT).",
      hint: "Das GG fordert weder eine bestimmte Zahl an Lesungen noch Ausschüsse – nur einen Beschluss (Art. 77 I 1 GG). Verstöße gegen die GOBT allein machen das Gesetz nicht verfassungswidrig. Der BT verhandelt öffentlich (Art. 42 I GG).",
      options: [
        { label: "Lesungen ordnungsgemäß / Abweichung nur von GOBT", next: "q_beschlussfaehig", tone: "pos" }
      ]
    },

    q_beschlussfaehig: {
      station: "hauptbt",
      kind: "frage",
      norm: "§ 45 GOBT",
      title: "War der Bundestag beschlussfähig?",
      text: "Die Beschlussfähigkeit (mehr als die Hälfte der Mitglieder anwesend, § 45 I GOBT) ist im GG nicht geregelt. Solange die Beschlussunfähigkeit nicht nach § 45 II GOBT festgestellt wurde, gilt der Bundestag (widerlegbar) als beschlussfähig – ein Verstoß ist dann unbeachtlich.",
      options: [
        { label: "Beschlussfähig / Unfähigkeit nicht festgestellt", next: "q_mehrheit", tone: "pos" },
        { label: "Beschlussunfähigkeit festgestellt", next: "e_fehler_bt", tone: "neg" }
      ]
    },

    q_mehrheit: {
      station: "hauptbt",
      kind: "frage",
      norm: "Art. 42 II 1, 77 I 1, 79 II, 121 GG",
      title: "Mit welcher Mehrheit wurde beschlossen – und welche war nötig?",
      text: "Grundsatz: einfache Mehrheit der abgegebenen Stimmen (Abstimmungsmehrheit, Art. 42 II 1 GG) – Enthaltungen zählen nicht. Ausnahmen: „Kanzlermehrheit“ = Mehrheit der gesetzlichen Mitglieder (Art. 121 GG, derzeit 316 von 630); Zweidrittelmehrheit der Mitglieder bei GG-Änderungen (Art. 79 II GG: 420 von 630).",
      options: [
        { label: "Einfaches Gesetz – Abstimmungsmehrheit erreicht", next: "q_gesetzart", tone: "pos" },
        { label: "Verfassungsänderndes Gesetz – 2/3 der Mitglieder erreicht", next: "q_gesetzart", set: { verfassungsaendernd: true }, tone: "pos" },
        { label: "Erforderliche Mehrheit nicht erreicht", next: "e_fehler_bt", tone: "neg" }
      ]
    },

    /* ================= II. Hauptverfahren Bundesrat ================= */

    q_gesetzart: {
      station: "hauptbr",
      kind: "frage",
      norm: "Art. 77 II–IV, 78 GG",
      title: "Zustimmungs- oder Einspruchsgesetz?",
      text: "Zwischenergebnis: Ordnungsgemäßer Gesetzesbeschluss des Bundestages. ✓\n\nDer Bundesrat wirkt am Zustandekommen mit (Art. 50 GG – föderatives Element; Dauerorgan aus Mitgliedern der Landesregierungen, Art. 51 GG, derzeit 69 Stimmen, imperatives Mandat, einheitliche Stimmabgabe nach Art. 51 III 2 GG).",
      def: "<b>Zustimmungsgesetze:</b> ausdrückliche Zustimmung des BR im GG vorgesehen – z. B. verfassungsändernde Gesetze (Art. 79 II GG) und viele Gesetze, die Länderinteressen berühren. <b>Einspruchsgesetze</b> (Regelfall): Zustimmung nicht erforderlich, BR kann nur Einspruch einlegen.",
      options: [
        { label: "Zustimmungsgesetz", next: "q_zustimmung", tone: "neutral" },
        { label: "Einspruchsgesetz", next: "q_einspruch", tone: "neutral" }
      ]
    },

    q_zustimmung: {
      station: "hauptbr",
      kind: "frage",
      norm: "Art. 77 II, IIa, 78, 52 III 1 GG",
      title: "Hat der Bundesrat zugestimmt?",
      text: "Beschlüsse des BR bedürfen mindestens der Mehrheit seiner Stimmen (absolute Mehrheit: 35 von 69, Art. 52 III 1 GG); bei GG-Änderungen 2/3 der Stimmen (46 von 69, Art. 79 II GG). Bei Zustimmungsgesetzen können auch BT und BReg den Vermittlungsausschuss anrufen (Art. 77 II GG).",
      def: "<b>Vermittlungsausschuss (Art. 77 II GG):</b> 16 Mitglieder des BT + 16 des BR. Schlägt er Änderungen vor, ist erneute Beschlussfassung des BT erforderlich („4. Lesung“); danach entscheidet der BR endgültig.",
      options: [
        { label: "Ja, Zustimmung mit erforderlicher Mehrheit", detail: "Gesetz kommt zustande (Art. 78 GG)", next: "q_gegenzeichnung", tone: "pos" },
        { label: "Nein, Zustimmung endgültig verweigert", next: "e_gescheitert", tone: "neg" },
        { label: "Uneinheitliche Stimmabgabe eines Landes", detail: "Art. 51 III 2 GG: alle Stimmen dieses Landes ungültig", next: "q_zustimmung_ungueltig", tone: "warn" }
      ]
    },

    q_zustimmung_ungueltig: {
      station: "hauptbr",
      kind: "frage",
      norm: "Art. 51 III 2 GG",
      title: "Reicht die Mehrheit auch ohne die ungültigen Stimmen?",
      text: "Werden die Stimmen eines Landes uneinheitlich abgegeben, sind sie ungültig. Weisungswidrige, aber einheitliche Stimmabgabe des Stimmführers bleibt dagegen im Außenverhältnis wirksam (Konsequenzen nur im Innenverhältnis: Abberufung, Entlassung).",
      options: [
        { label: "Ja, erforderliche Mehrheit trotzdem erreicht", next: "q_gegenzeichnung", tone: "pos" },
        { label: "Nein, Mehrheit verfehlt", next: "e_gescheitert", tone: "neg" }
      ]
    },

    q_einspruch: {
      station: "hauptbr",
      kind: "frage",
      norm: "Art. 77 III, IV, 78 GG",
      title: "Hat der Bundesrat Einspruch eingelegt?",
      text: "Will der BR Einspruch einlegen, muss er zuerst den Vermittlungsausschuss anrufen (Art. 77 III GG). Legt er nach dessen Verfahren keinen Einspruch ein, ist das Gesetz zustande gekommen (Art. 78 GG).",
      options: [
        { label: "Kein Einspruch", detail: "Gesetz kommt zustande, Art. 78 GG", next: "q_gegenzeichnung", tone: "pos" },
        { label: "Einspruch eingelegt", next: "q_zurueckweisung", tone: "warn" }
      ]
    },

    q_zurueckweisung: {
      station: "hauptbr",
      kind: "frage",
      norm: "Art. 77 IV GG",
      title: "Hat der Bundestag den Einspruch zurückgewiesen?",
      text: "Der BT kann den Einspruch mit der „gleichen“ Mehrheit zurückweisen, mit welcher der BR ihn eingelegt hat: Einspruch mit Mehrheit der Stimmen des BR → Mehrheit der Mitglieder des BT (Art. 121 GG); Einspruch mit 2/3-Mehrheit → 2/3 der Abstimmenden, mindestens Mitgliedermehrheit (Art. 77 IV GG).",
      options: [
        { label: "Ja, Einspruch zurückgewiesen", detail: "Gesetz kommt zustande, Art. 78 GG", next: "q_gegenzeichnung", tone: "pos" },
        { label: "Nein, erforderliche Mehrheit verfehlt", next: "e_gescheitert", tone: "neg" }
      ]
    },

    /* ================= III. Abschlussverfahren ================= */

    q_gegenzeichnung: {
      station: "abschluss",
      kind: "frage",
      norm: "Art. 58, 82 I GG",
      title: "Gegenzeichnung und Ausfertigung erfolgt?",
      text: "Zwischenergebnis: Das Gesetz ist zustande gekommen (Art. 78 GG). ✓\n\nEs folgt: (1) Gegenzeichnung durch die Bundesregierung (Art. 58 GG), (2) Ausfertigung durch den Bundespräsidenten (Art. 82 I GG).",
      def: "<b>Ausfertigung:</b> Der BPräs bestätigt die Übereinstimmung der Urschrift mit dem beschlossenen Text (Authentizitätsprüfung) und den ordnungsgemäßen Verlauf des Verfahrens (Legalitätsprüfung). <b>Prüfungsrecht:</b> formell vollumfänglich; materiell nach h. M. nur bei evidenten Fehlern (Details im Schema „Bundespräsident“).",
      options: [
        { label: "Ja, gegengezeichnet und ausgefertigt", next: "q_verkuendung", tone: "pos" },
        { label: "BPräs verweigert die Ausfertigung", next: "e_ausfertigung_verweigert", tone: "warn" }
      ]
    },

    q_verkuendung: {
      station: "abschluss",
      kind: "frage",
      norm: "Art. 82 I, II GG",
      title: "Verkündung im Bundesgesetzblatt und Inkrafttreten?",
      text: "Verkündung = amtliche Veröffentlichung im BGBl. (Teil I: innerstaatliche Gesetze und RVOen; Teil II: völkerrechtliche Verträge). Sie gibt dem Bürger Gelegenheit, aus amtlicher Quelle Kenntnis zu erlangen (Rechtsstaatsprinzip) und schließt das Verfahren ab.",
      def: "<b>Inkrafttreten:</b> Jedes Gesetz soll den Tag des Inkrafttretens bestimmen (Art. 82 II 1 GG). Fehlt die Bestimmung, tritt es mit dem 14. Tag nach Ablauf des Ausgabetags des BGBl. in Kraft (Art. 82 II 2 GG).",
      options: [
        { label: "Verkündet – Verfahren abgeschlossen", next: "e_ordnungsgemaess", tone: "pos" },
        { label: "Nicht verkündet", next: "e_fehler_abschluss", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ordnungsgemaess: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Gesetzgebungsverfahren ordnungsgemäß durchlaufen",
      text: "Einleitung (Art. 76 GG), Hauptverfahren in Bundestag und Bundesrat (Art. 77, 78 GG) und Abschlussverfahren (Gegenzeichnung, Ausfertigung, Verkündung, Art. 58, 82 GG) sind eingehalten. Das Gesetz ist formell verfassungsgemäß zustande gekommen und mit Inkrafttreten wirksam. In RLP entsprechen sich: Art. 82 I GG ≙ Art. 113 I LV, Art. 79 GG ≙ Art. 129 LV."
    },
    e_fehler_einleitung: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Verfahrensfehler im Einleitungsverfahren",
      text: "Es liegt ein beachtlicher Verstoß gegen Art. 76 GG vor (nicht bloß gegen die GOBT oder gegen bloße Fristvorschriften). Das Gesetz ist formell verfassungswidrig."
    },
    e_fehler_bt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Fehler im Hauptverfahren des Bundestages",
      text: "Der Gesetzesbeschluss ist nicht wirksam zustande gekommen: Entweder wurde die festgestellte Beschlussunfähigkeit missachtet oder die erforderliche Mehrheit (Art. 42 II 1, 121, 79 II GG) nicht erreicht."
    },
    e_gescheitert: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Gesetz gescheitert",
      text: "Das Gesetz ist nicht zustande gekommen (Art. 78 GG): Der Bundesrat hat die erforderliche Zustimmung endgültig verweigert bzw. sein Einspruch wurde vom Bundestag nicht mit der erforderlichen Mehrheit zurückgewiesen."
    },
    e_ausfertigung_verweigert: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Ausfertigung verweigert",
      text: "Der Bundespräsident hat die Ausfertigung verweigert. Das ist nur zulässig bei formellen Fehlern oder evidenten materiellen Verfassungsverstößen (z. B. Verstoß gegen Art. 79 III GG); bloße Zweifel genügen nicht. Details im Schema „Bundespräsident“."
    },
    e_fehler_abschluss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein wirksames Gesetz ohne Verkündung",
      text: "Ohne Verkündung im Bundesgesetzblatt ist das Gesetzgebungsverfahren nicht abgeschlossen; das Gesetz kann nicht in Kraft treten (Art. 82 GG, Rechtsstaatsprinzip)."
    }
  }
});
