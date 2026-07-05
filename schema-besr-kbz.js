/*
 * Prüfungsschema: Kinderbezogener Zuschlag (§ 41 IV LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 134-148
 *    (kbZ, Konkurrenz, Reihenfolge/Zählkinder, Teilzeit, § 41 VIII)
 *  - Gesetze: LBesG § 41 IV, VI, VIII; EStG §§ 32, 63, 64 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-kbz",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Familienzuschlag",
  title: "Kinderbezogener Zuschlag (§ 41 IV LBesG)",
  description: "Der zweite Teil des Familienzuschlags: Anspruch bei grundsätzlicher Kindergeldberechtigung (§§ 32, 63 EStG), Höhe nach Anzahl und Reihenfolge der Kinder, die Konkurrenzregel des tatsächlichen Kindergeldbezugs (§ 64 EStG) und die Teilzeit-Situationen.",
  start: "start",
  stations: [
    { id: "anspruch", label: "Anspruch" },
    { id: "hoehe", label: "Höhe" },
    { id: "konkurrenz", label: "Konkurrenz" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: kbZ steht zu",
    neg: "Ergebnis: kein kbZ",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: kbZ (modifiziert)"
  },

  nodes: {

    start: {
      station: "anspruch",
      kind: "frage",
      norm: "§ 41 I 1 Nr. 2, IV 1 LBesG",
      title: "Ist der Beamte für ein Kind grundsätzlich kindergeldberechtigt?",
      def: "<b>Anspruchsvoraussetzung (§ 41 IV 1 LBesG):</b> Dem Beamten steht für das Kind <b>Kindergeld nach dem EStG/BKGG zu</b> – oder es <b>stünde ihm ohne Berücksichtigung von § 64/§ 65 EStG (§§ 3, 4 BKGG) zu</b>.<br><br>Entscheidend ist also die <b>GRUNDSÄTZLICHE Kindergeldberechtigung</b> (§§ 32, 63 EStG) – <b>nicht</b>, wer das Kindergeld tatsächlich aufs Konto bekommt (§ 64 EStG – das zählt erst im Konkurrenzfall)!<br><br>• <b>Kinder:</b> leibliche und Adoptivkinder, außerdem Pflege-/Stiefkinder und Enkelkinder im Haushalt (§ 63 EStG),<br>• <b>beide Elternteile</b> sind grundsätzlich gleichermaßen berechtigt,<br>• berücksichtigungsfähig, <b>solange</b> die Kindergeldberechtigung besteht (§ 32 EStG – z. B. bis 25 in Ausbildung),<br>• ob das Kind <b>im Haushalt</b> des Beamten lebt, ist hier <b>IRRELEVANT</b> (anders als beim 4. Fall des paZ!),<br>• kinderlose Beamte: nie kbZ.<br><br><b>Klausurtipp:</b> Kindergeldberechtigung (§ 32) und tatsächliche Zahlung (§ 64) werden im Sachverhalt stets angegeben – die Paragrafen an der richtigen Stelle nennen genügt.",
      options: [
        { label: "Ja – kindergeldberechtigt", next: "q_hoehe", tone: "pos" },
        { label: "Nein / kein Kind", next: "e_kein_kbz", tone: "neg" }
      ]
    },

    q_hoehe: {
      station: "hoehe",
      kind: "frage",
      norm: "§ 41 IV 2, 4 LBesG",
      title: "Höhe: Anzahl und Reihenfolge der Kinder bestimmen",
      def: "• Die Höhe richtet sich nach der <b>Anzahl der berücksichtigungsfähigen Kinder</b> (§ 41 IV 2 LBesG) – <b>für jedes Kind</b> wird der Tabellenbetrag gezahlt (Anlage 7.1; anders als der paZ, der nur einmal anfällt!). Jedes Kind gesondert prüfen.<br><br>• Auf das Kind entfällt der Betrag nach der <b>für das EStG maßgebenden Reihenfolge</b> (§ 41 IV 4 LBesG): Zählung nach dem <b>Alter</b> – das älteste Kind ist Kind 1 usw. Relevant wegen des <b>erhöhten Zuschlags ab dem dritten Kind</b>: Scheidet ein älteres Kind aus dem Kindergeldbezug aus, rückt das nächstältere nach (Kind 2 wird Kind 1).<br><br>• <b>Zählkinder:</b> Kinder, für die der Anspruch vorrangig einem anderen zusteht (§ 64 EStG) oder ausgeschlossen ist (§ 65 EStG), zählen bei der Reihenfolge mit und können so die Beträge der jüngeren Kinder erhöhen (Übung 11 Fall 3: K 2 lebt bei der Mutter W – für Z ist K 2 Zählkind, sein drittes Kind K 3 erhält den erhöhten Satz).",
      options: [
        { label: "Konkurrenzfall prüfen", next: "q_konkurrenz", tone: "pos" }
      ]
    },

    q_konkurrenz: {
      station: "konkurrenz",
      kind: "frage",
      norm: "§ 41 IV 3 LBesG",
      title: "Konkurrenz (3 von 3): Stünde einer anderen Person im öD für DASSELBE Kind der kbZ zu?",
      def: "<b>Tatbestand:</b> Neben dem Beamten stünde einer <b>anderen Person im öffentlichen Dienst</b> (§ 41 VI LBesG) oder einem Versorgungsberechtigten für <b>das gleiche Kind</b> der kbZ oder ein vergleichbarer Zuschlag zu (typisch: beide Eltern verbeamtet).<br><br><b>Rechtsfolge:</b> Der kbZ wird <b>nicht geteilt</b>, sondern nur an <b>denjenigen</b> gezahlt, dem das <b>Kindergeld tatsächlich gewährt wird</b> oder vorrangig zu gewähren wäre (<b>§ 64 EStG</b>: bei Zusammenleben bestimmen die Eltern den Berechtigten; bei Getrenntleben erhält es, wer das Kind im Haushalt hat).<br><br><b>Skript-Beispiel:</b> Beamter L und Beamtin B haben zwei Kinder, B ist zur Kindergeldberechtigten bestimmt → B erhält den kbZ für beide Kinder, L nichts.<br><br><b>Das ist die dritte Konkurrenzregel im Familienzuschlag</b> – nicht verwechseln: § 41 II 2 (paZ: Hälftelung), § 41 III 3 (paZ: anteilig nach Köpfen), § 41 IV 3 (kbZ: alles oder nichts nach Kindergeldbezug).",
      options: [
        { label: "Konkurrenz: Kindergeld beim Beamten", next: "q_teilzeit", tone: "pos" },
        { label: "Konkurrenz: Kindergeld beim anderen", next: "e_anderer", tone: "neg" },
        { label: "Keine Konkurrenz", next: "q_teilzeit", tone: "pos" }
      ]
    },

    q_teilzeit: {
      station: "konkurrenz",
      kind: "frage",
      norm: "§ 41 IV 5, 6 LBesG",
      title: "Teilzeit: Wird der kbZ gekürzt?",
      def: "Die vier Situationen beim kbZ (parallel zum paZ):<br><br>• <b>Ohne Konkurrenzfall + Teilzeit:</b> zeitratierliche Kürzung nach <b>§ 9 I LBesG</b>. <b>ABER Sockelbetrag:</b> je <b>5,46 €</b> für das erste und zweite Kind sind von der Kürzung ausgenommen (§ 3 S. 2 LBVAnpG 2009/2010, Anlage 7.1 Nr. 2 Sternchen). Rechenweg: (Tabellenwert − 5,46 €) × TZ-Quote + 5,46 €; ab dem dritten Kind volle Kürzung ohne Sockel.<br><br>• <b>Konkurrenzfall + ein Berechtigter vollbeschäftigt/versorgungsberechtigt</b> (§ 41 IV 5 1. Alt.): keine § 9 I-Kürzung → kbZ <b>in voller Höhe</b>.<br><br>• <b>Konkurrenzfall + beide teilzeitbeschäftigt, zusammen ≥ Vollzeit</b> (§ 41 IV 5 2. Alt.; z. B. 50 % + 80 %): ebenfalls <b>volle Höhe</b>.<br><br>• <b>Konkurrenzfall + zusammen &lt; Vollzeit</b> (§ 41 IV 6; z. B. 50 % + 40 %): kbZ <b>anteilig entsprechend der SUMME</b> der individuell vereinbarten Arbeitszeiten (90 % des Tabellenwerts) – zzgl. Sockelbetrags-Regel für Kind 1 und 2.",
      options: [
        { label: "Vollzeit / Kürzungsausnahme greift", next: "e_kbz_voll", tone: "pos" },
        { label: "Teilzeit ohne Konkurrenz", next: "e_kbz_tz", tone: "warn" },
        { label: "Beide TZ, Summe < Vollzeit", next: "e_kbz_summe", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_kbz_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 41 IV 1, 2 LBesG",
      title: "kbZ in voller Höhe",
      text: "Der Beamte erhält den kinderbezogenen Zuschlag für jedes berücksichtigungsfähige Kind in voller Tabellenhöhe (§ 41 I 2 LBesG, Anlage 7.1; Beträge nach der Reihenfolge der Kinder, § 41 IV 4 – erhöht ab Kind 3).\n\nFormulierungsbaustein (Skript): \"Voraussetzung für den kbZ ist nach § 41 I 1 Nr. 2, IV 1 LBesG, dass L ein oder mehrere Kinder hat, für die er grundsätzlich kindergeldberechtigt ist. L hat hier zwei Kinder, für die er als Vater nach §§ 32, 63 EStG Anspruch auf Kindergeld hat. Dass die Eltern die Mutter zur Kindergeldberechtigten bestimmt haben, ist unbeachtlich [sofern die Mutter NICHT im öffentlichen Dienst steht – sonst Konkurrenz!]. Die Höhe richtet sich gem. § 41 IV 2 LBesG nach der Anzahl der berücksichtigungsfähigen Kinder; die Beträge ergeben sich aus § 41 I 2 LBesG, Anlage 7.1.\"\n\nÄnderungen (§ 41 VIII LBesG): Erhöhung rückwirkend ab dem Ersten des Ereignismonats (Geburt); Wegfall erst ab dem Monat, in dem die Voraussetzungen an keinem Tag vorlagen."
    },

    e_kbz_tz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 9 I LBesG, Anlage 7.1 Nr. 2",
      title: "kbZ zeitratierlich mit Sockelbetrag",
      text: "Ohne Konkurrenzfall wird der kbZ bei Teilzeit nach § 9 I LBesG gekürzt – aber je 5,46 € für das erste und zweite Kind bleiben ungekürzt (§ 3 S. 2 LBVAnpG 2009/2010; Anlage 7.1 Nr. 2, Sternchen-Vermerk).\n\nRechenweg (Beispiel 50 % Teilzeit):\n1. Tabellenwert des Kindes nehmen,\n2. minus 5,46 €,\n3. Differenz × 50 %,\n4. plus 5,46 € = Auszahlungsbetrag.\n\nAb dem dritten Kind erfolgt die Kürzung ohne Sockelbetrag (voller Betrag × TZ-Quote).\n\nBeispiel Übung 12 a: A (50 % TZ), verheiratet, zwei Kinder, Ehefrau nicht im öD: paZ hälftig zeitratierlich? Nein – paZ nach § 9 I auf 50 % gekürzt (kein Konkurrenzfall); kbZ für beide Kinder je nach Sockel-Formel."
    },

    e_kbz_summe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 41 IV 6 LBesG",
      title: "kbZ anteilig nach der Summe der Arbeitszeiten",
      text: "Im Konkurrenzfall mit zwei Teilzeitbeschäftigten, die zusammen unter der Vollzeit bleiben, erhält der tatsächlich Berechtigte den kbZ anteilig entsprechend der SUMME der individuell vereinbarten Arbeitszeiten (§ 41 IV 6 LBesG).\n\nBeispiel (Übung 12 c): C (50 %) und Ehefrau (40 %), beide Beamte, C bezieht das Kindergeld → C erhält den kbZ zu 90 % (50 + 40); für Kind 1 und 2 zusätzlich die Sockelbetrags-Regel (5,46 € kürzungsfrei).\n\nZum Vergleich (Übung 12 b): C (50 %) + Ehefrau (80 %) = 130 % ≥ Vollzeit → voller kbZ (§ 41 IV 5 2. Alt.)."
    },

    e_anderer: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 41 IV 3 LBesG",
      title: "kbZ geht an den anderen Berechtigten",
      text: "Im Konkurrenzfall erhält den kbZ für das jeweilige Kind NUR derjenige, dem das Kindergeld tatsächlich gewährt wird oder vorrangig zu gewähren wäre (§ 41 IV 3 LBesG i. V. m. § 64 EStG). Der Beamte, der das Kindergeld nicht bezieht, geht leer aus – der kbZ wird NICHT geteilt.\n\nQuiz Nr. 4: S hat drei Kinder mit drei Frauen, alle Kinder leben bei den Müttern, die auch das Kindergeld erhalten; zwei Mütter sind Beamtinnen → für deren Kinder Konkurrenzfall, Kindergeld bei den Müttern → kein kbZ für S. Für das Kind der dritten Mutter (nicht im öD) besteht KEINE Konkurrenz – S ist grundsätzlich kindergeldberechtigt (§§ 32, 63 EStG) und erhält für dieses eine Kind den kbZ, obwohl das Kindergeld an die Mutter fließt!\n\nMerke: Ohne Konkurrenz entscheidet die GRUNDSÄTZLICHE Berechtigung (§ 63), bei Konkurrenz der TATSÄCHLICHE Bezug (§ 64)."
    },

    e_kein_kbz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 41 IV 1 LBesG",
      title: "Kein kinderbezogener Zuschlag",
      text: "Ohne (grundsätzliche) Kindergeldberechtigung kein kbZ – kinderlose Beamte erhalten ihn nie; ebenso endet er, wenn das Kind aus dem Kindergeldbezug ausscheidet (z. B. Ausbildungsende).\n\nFolgeänderung beachten (§ 41 VIII 2, 3 LBesG): Der (Teil-)Betrag wird nicht mehr gezahlt ab dem Monat, in dem die Anspruchsvoraussetzungen an keinem Tag vorgelegen haben – also ab dem Folgemonat des Wegfalls. Bei den übrigen Kindern rückt die Reihenfolge nach (§ 41 IV 4: Kind 2 wird Kind 1) – die Beträge können sich dadurch ändern.\n\nWird der Wegfall (z. B. Ausbildungsende des Kindes) trotz Merkblatt nicht angezeigt und der kbZ weitergezahlt, droht die Rückforderung mit verschärfter Haftung (§ 16 II LBesG – Schema \"Rückforderung von Bezügen\")."
    }
  }
});
