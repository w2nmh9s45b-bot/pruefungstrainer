/*
 * Prüfungsschema: Beginn und Ende des Besoldungsanspruchs (§ 4 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 14-22
 *    (Anspruchsgrundlage, Beginn § 4 II, Planstelleneinweisung, Ende § 4 IV-VI)
 *  - Gesetze: LBesG § 4; LHO § 49 II; GemHVO § 20 Nr. 1; BeamtStG § 8 IV;
 *    LBG §§ 10 II, 27 II (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-anspruch",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Anspruch und Zahlung",
  title: "Beginn und Ende des Besoldungsanspruchs (§ 4 LBesG)",
  description: "Ab welchem Tag besteht der Anspruch auf (höhere) Besoldung – Wirksamkeit der Ernennung, rückwirkende Planstelleneinweisung bei Beförderungen (§ 49 II LHO) – und bis zu welchem Tag wird gezahlt (§ 4 IV–VI LBesG)?",
  start: "start",
  stations: [
    { id: "grundlage", label: "Anspruch" },
    { id: "beginn", label: "Beginn" },
    { id: "ende", label: "Ende" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch bestimmt",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "grundlage",
      kind: "frage",
      norm: "§ 4 I LBesG",
      title: "Worum geht es: Beginn oder Ende des Anspruchs?",
      def: "„Auf die Besoldung besteht ein Anspruch“ (§ 4 I LBesG) – eine <b>klarstellende Norm</b>: Der Anspruch folgt bereits aus dem Alimentationsprinzip (Art. 33 V GG), § 4 I LBesG wird im Einleitungssatz aber stets <b>mitzitiert</b>:<br><br><i>„Der Beamte XY hat nach dem Alimentationsprinzip (Art. 33 V GG) und nach § 4 I LBesG Anspruch auf Besoldung …“</i><br><br>Danach ist zu klären, <b>ab wann</b> (§ 4 II) bzw. <b>bis wann</b> (§ 4 IV–VI) der Anspruch besteht.",
      options: [
        { label: "Beginn des Anspruchs (§ 4 II)", next: "q_beginn", tone: "pos" },
        { label: "Ende des Anspruchs (§ 4 IV–VI)", next: "q_ende", tone: "neutral" }
      ]
    },

    q_beginn: {
      station: "beginn",
      kind: "frage",
      norm: "§ 4 II LBesG",
      title: "Welcher Fall des Anspruchsbeginns liegt vor?",
      def: "§ 4 II LBesG unterscheidet drei Konstellationen:<br><br><b>1. Ernennung/Versetzung/Übernahme/Übertritt (§ 4 II 1):</b> Der Anspruch entsteht mit dem Tag, an dem die Maßnahme <b>wirksam</b> wird – der Standardfall bei Einstellung UND Beförderung.<br><br><b>2. Rückwirkende Planstelleneinweisung (§ 4 II 2):</b> Bedarf es keiner Ernennung oder erfolgt eine <b>rückwirkende Einweisung in eine Planstelle</b>, entsteht der Anspruch mit dem in der <b>Einweisungsverfügung</b> bestimmten Tag.<br><br><b>3. Kommunale Wahlbeamte (§ 4 II 3):</b> Wird ein Amt nach § 24 LBesG (i. V. m. LKomBesVO) eingestuft, entsteht der Anspruch mit der Maßnahme, die der Einweisungsverfügung entspricht.",
      options: [
        { label: "Einstellung/Versetzung (Regelfall)", next: "q_wirksamkeit", tone: "pos" },
        { label: "Beförderung mit Planstelleneinweisung", next: "q_planstelle", tone: "neutral" },
        { label: "Hauptamtlicher Wahlbeamter", next: "e_wahlbeamter", tone: "warn" }
      ]
    },

    q_wirksamkeit: {
      station: "beginn",
      kind: "frage",
      norm: "§ 8 IV BeamtStG, § 10 II LBG, § 27 II LBG",
      title: "Wann wird die Maßnahme wirksam? (FS-II-Wissen!)",
      def: "Der Besoldungsbeginn ist an die <b>beamtenrechtliche Wirksamkeit</b> gekoppelt:<br><br>• <b>Ernennung:</b> wirksam mit <b>Aushändigung der Ernennungsurkunde</b> oder dem in der Urkunde bestimmten <b>späteren</b> Tag (§ 10 II LBG). Eine <b>rückwirkende Ernennung ist unzulässig und insoweit unwirksam</b> (§ 8 IV BeamtStG) – „mit Wirkung zum 01.07.“ auf einer erst am 06.07. ausgehändigten Urkunde hilft besoldungsrechtlich also nichts!<br>• <b>Versetzung mit Dienstherrnwechsel:</b> maßgeblich ist der in der Versetzungsverfügung bestimmte Tag (§ 27 II LBG) – ab dann besteht der Anspruch gegen den <b>neuen</b> Dienstherrn.<br>• <b>Übernahme/Übertritt</b> (z. B. bei Körperschaftsumbildung): § 27 III LBG, § 16 BeamtStG.",
      options: [
        { label: "Wirksamkeit bestimmt", next: "e_beginn_regel", tone: "pos" }
      ]
    },

    q_planstelle: {
      station: "beginn",
      kind: "frage",
      norm: "§ 49 II LHO, § 20 Nr. 1 GemHVO",
      title: "Rückwirkende Planstelleneinweisung bei Beförderung?",
      def: "Bei jeder Verleihung eines statusrechtlichen Amtes (§ 8 III BeamtStG) wird der Beamte in eine <b>Planstelle</b> eingewiesen (gesondertes Schreiben neben der Urkunde). Für Kommunalbeamte verweist <b>§ 20 Nr. 1 GemHVO</b> auf § 49 I, II LHO.<br><br><b>Möglichkeit 1 – Monatsbeginn (§ 49 II 1 LHO):</b> Einweisung mit Wirkung vom <b>Ersten des Monats, in dem die Ernennung wirksam wird</b> (Beförderung 18.05. → Einweisung zum 01.05. möglich).<br><br><b>Möglichkeit 2 – Rückwirkung bis 3 Monate (§ 49 II 2 LHO):</b> Einweisung mit Rückwirkung von <b>höchstens drei Monaten</b> zum Ersten eines Monats, wenn<br>1. eine besetzbare Planstelle vorhanden war,<br>2. der Beamte während des Rückwirkungszeitraums die <b>Obliegenheiten dieses oder eines gleichwertigen Amtes</b> wahrgenommen hat und<br>3. die <b>beamtenrechtlichen Voraussetzungen</b> der Beförderung erfüllt waren.<br><br><i>Ergänzung (VV Nr. 2.3 zu § 49 LHO): Die Einweisung zum Monatsersten ist auch möglich, wenn die Voraussetzungen erst im Laufe des Einweisungsmonats eintreten.</i>",
      options: [
        { label: "Rückwirkende Einweisung erfolgt", next: "e_beginn_rueckwirkend", tone: "pos" },
        { label: "Keine Rückwirkung – Regelfall", next: "e_beginn_regel", tone: "neutral" }
      ]
    },

    q_ende: {
      station: "ende",
      kind: "frage",
      norm: "§ 4 IV–VI LBesG",
      title: "Wie endet das Beamtenverhältnis?",
      def: "<b>Grundsatz (§ 4 IV LBesG):</b> Der Besoldungsanspruch endet mit <b>Ablauf des Tages</b>, an dem der Beamte aus dem Dienstverhältnis ausscheidet (Beendigungsgründe: §§ 21 ff. BeamtStG, §§ 30 ff. LBG – FS-II-Wissen). Beim Eintritt/der Versetzung in den Ruhestand beginnt am nächsten Tag der Anspruch auf <b>Versorgung</b> (LBeamtVG).<br><br><b>Ausnahmen – Weiterzahlung für drei weitere Monate:</b><br>• Versetzung in den <b>einstweiligen Ruhestand</b> (§ 4 V LBesG; vgl. §§ 41–43 LBG): Bezüge des Tages vor der Versetzung werden für den Monat der Mitteilung und die folgenden drei Monate weitergezahlt,<br>• <b>Abwahl eines Wahlbeamten</b> (§ 4 VI LBesG; vgl. § 55 GemO, § 49 LKO): entsprechende Anwendung.",
      options: [
        { label: "Regulärer Beendigungsfall", next: "e_ende_regel", tone: "pos" },
        { label: "Einstweiliger Ruhestand / Abwahl", next: "e_ende_ausnahme", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_beginn_regel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 II 1 LBesG",
      title: "Anspruch ab Wirksamkeit der Maßnahme",
      text: "Der Besoldungsanspruch (bzw. der Anspruch auf die höhere Besoldung nach einer Beförderung) entsteht mit dem Tag, an dem die Ernennung, Versetzung, Übernahme oder der Übertritt wirksam wird (§ 4 II 1 LBesG).\n\nBeispiel: Aushändigung der Ernennungsurkunde am 06.07. „mit Wirkung zum 01.07.\" → wirksam erst am 06.07. (§ 10 II LBG; Rückwirkungsverbot § 8 IV BeamtStG). Besoldung ab 06.07.; für den Juli ist der Anspruch nach § 4 III LBesG tagegenau zu berechnen (Schema „Besoldung für einen Teilmonat\").\n\nAber: Wird gleichzeitig rückwirkend in eine Planstelle eingewiesen, gilt der Einweisungstag (§ 4 II 2 LBesG) – dann volle Monatsbezüge ab dem 01.07."
    },

    e_beginn_rueckwirkend: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 II 2 LBesG, § 49 II LHO",
      title: "Anspruch ab dem Tag der Einweisungsverfügung",
      text: "Bei rückwirkender Einweisung in die Planstelle entsteht der Anspruch (auf die höhere Besoldung) mit dem in der Einweisungsverfügung bestimmten Tag (§ 4 II 2 LBesG) – höchstens drei Monate rückwirkend, jeweils zum Ersten eines Monats (§ 49 II 2 LHO; für Kommunalbeamte über § 20 Nr. 1 GemHVO).\n\nAbgrenzung für die Klausur (Übung 2): \n• Die BEFÖRDERUNG ist die Verleihung eines anderen Amtes mit höherem Grundgehalt (§ 8 I Nr. 3 BeamtStG) – ein mitwirkungsbedürftiger VA, wirksam mit Urkundenaushändigung, Rückwirkung unzulässig.\n• Die PLANSTELLENEINWEISUNG ist eine haushaltsrechtliche Maßnahme (kein VA gegenüber dem Beamten im Ernennungssinne), die ausnahmsweise zurückwirken darf und so den Besoldungsanspruch vorverlagert.\n\nTypische Anwendungsfälle der Rückwirkung: verzögerte Urkundenaushändigung (Krankheit, Urlaub, Organisationsverschulden), obwohl der Beamte die höherwertigen Aufgaben längst wahrnimmt."
    },

    e_wahlbeamter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 4 II 3, § 24 LBesG",
      title: "Kommunale Wahlbeamte: LKomBesVO",
      text: "Bei hauptamtlichen kommunalen Wahlbeamten auf Zeit (Bürgermeister, Landräte, Beigeordnete) richtet sich die Einstufung nach § 24 LBesG i. V. m. der LKomBesVO – die Besoldungsgruppe (LBesO A/B) hängt v. a. von der EINWOHNERZAHL der Gebietskörperschaft ab (z. B. OB von Mainz: erste zwei Jahre B 8, danach B 9).\n\nDer Besoldungsanspruch entsteht mit der Maßnahme, die der Einweisungsverfügung entspricht (§ 4 II 3 LBesG).\n\nBesonderheit am Ende der Amtszeit: Bei Abwahl werden die Bezüge für den Monat der Mitteilung und drei weitere Monate weitergezahlt (§ 4 VI LBesG)."
    },

    e_ende_regel: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 IV LBesG",
      title: "Anspruch bis zum Ablauf des Ausscheidenstages",
      text: "Der Besoldungsanspruch endet mit Ablauf des Tages, an dem der Beamte aus dem Dienstverhältnis ausscheidet (§ 4 IV LBesG).\n\n• Ruhestand: ab dem Folgetag Versorgung nach dem LBeamtVG (Alimentation läuft als Versorgung weiter – lebenslang).\n• Entlassung/Ausscheiden im Laufe eines Monats (z. B. zum 15.05.): tagegenaue Berechnung nach § 4 III LBesG (Schema „Besoldung für einen Teilmonat\").\n\nMerke: Beendigungszeitpunkte der einzelnen Beendigungsgründe (§§ 21 ff. BeamtStG, §§ 30 ff. LBG) sind FS-II-Wissen und werden hier vorausgesetzt."
    },

    e_ende_ausnahme: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 4 V, VI LBesG",
      title: "Weiterzahlung: einstweiliger Ruhestand / Abwahl",
      text: "Abweichend vom Grundsatz werden die Bezüge WEITERGEZAHLT:\n\n• Einstweiliger Ruhestand (§ 4 V LBesG): Für den Monat, in dem die Versetzung mitgeteilt wurde, und die folgenden DREI Monate werden die Bezüge des Vortages weitergezahlt (Änderungen beim Familienzuschlag werden berücksichtigt; Aufwandsentschädigungen nur bis zum Ruhestandsbeginn). Vgl. §§ 41–43 LBG.\n\n• Abwahl eines Wahlbeamten auf Zeit (§ 4 VI LBesG): entsprechende Anwendung des Abs. 5; an die Stelle der Mitteilung tritt die Mitteilung über die Abwahl bzw. der bestimmte Beendigungszeitpunkt (vgl. § 55 GemO, § 49 LKO).\n\nErst danach setzt die Versorgung ein."
    }
  }
});
