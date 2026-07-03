/*
 * Prüfungsschema: Persönliche Zulage (§ 14 TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.3 (Vorübergehende Übertragung
 *    einer höherwertigen Tätigkeit: Anspruchsvoraussetzungen a-e, Höhe,
 *    anteilige Zahlung nach § 24 III)
 *  - Lehrplanung FS III OLE 3 (Persönliche Zulage, § 14 TVöD/TV-L)
 *  - Gesetze: TVöD §§ 14, 17 IV 1, 24 III (VKA); GewO § 106; GemO RLP § 47 II;
 *    BGB §§ 187 II, 188 II, 191 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-zulage",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Persönliche Zulage (§ 14 TVöD-VKA)",
  description: "Vorübergehende Übertragung einer höherwertigen Tätigkeit: fünf Anspruchsvoraussetzungen (andere Tätigkeit, Übertragung, höhere Bewertung, vorübergehend nach billigem Ermessen, mindestens ein Monat tatsächliche Ausübung) und Höhe der Zulage (Unterschiedsbetrag der fiktiven Höhergruppierung, § 14 III).",
  start: "start",
  stations: [
    { id: "taetigkeit", label: "Tätigkeit" },
    { id: "uebertragung", label: "Übertragung" },
    { id: "monat", label: "Monatsfrist" },
    { id: "hoehe", label: "Höhe" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch auf Zulage",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "taetigkeit",
      kind: "frage",
      norm: "§ 14 I TVöD-VKA (a)",
      title: "Wird eine ANDERE Tätigkeit ausgeübt?",
      def: "Die vorübergehend auszuübende Tätigkeit muss eine <b>andere</b> Tätigkeit sein als die zur dauerhaften Ausübung übertragene.<br><br><b>Typische Anlässe:</b> Vertretung (Krankheit, Mutterschutz, Elternzeit), vorübergehende Besetzung einer freien Stelle bis zur endgültigen Nachbesetzung, Erprobung auf einer höherwertigen Stelle, zeitlich begrenzte Projektaufgaben.<br><br><b>Beispiel (Skript):</b> D ist dauerhaft der Kfz-Zulassungsstelle zugewiesen; nach schwerer Erkrankung des Sachbearbeiters der Führerscheinstelle nimmt sie bis zu dessen Genesung dort die Aufgaben wahr – andere Tätigkeit ✓.",
      options: [
        { label: "Ja, andere Tätigkeit", next: "q_uebertragung", tone: "pos" },
        { label: "Nein, dieselbe (eigene) Tätigkeit", next: "e_keine_andere", tone: "neg" }
      ]
    },

    q_uebertragung: {
      station: "uebertragung",
      kind: "frage",
      norm: "§ 14 I TVöD-VKA (b), § 106 GewO",
      title: "Wurde die Tätigkeit ÜBERTRAGEN (nicht freiwillig übernommen)?",
      def: "Die andere Tätigkeit muss <b>zur Ausübung übertragen</b> worden sein – durch den Inhaber des <b>Weisungs-/Direktionsrechts</b> (§ 106 GewO): das ist der Arbeitgeber, bei Gemeinden der <b>Bürgermeister</b> (§ 47 II 1 GemO RLP), beim Landkreis der Landrat (§ 41 II 1 LKO) – das Direktionsrecht kann delegiert sein (in der Praxis genügt die Übertragung durch die Personalstelle). An eine <b>Form</b> ist die Übertragung nicht gebunden.<br><br><b>NICHT anspruchsbegründend:</b> die Übernahme von Vertretungsaufgaben „<b>aus freien Stücken</b>“ – wer sich die höherwertigen Aufgaben selbst heranzieht, bekommt keine Zulage.",
      options: [
        { label: "Ja, durch AG/Personalstelle übertragen", next: "q_hoeherwertig", tone: "pos" },
        { label: "Aus freien Stücken übernommen", next: "e_freiwillig", tone: "neg" }
      ]
    },

    q_hoeherwertig: {
      station: "uebertragung",
      kind: "frage",
      norm: "§ 14 I TVöD-VKA (c)",
      title: "Ist die übertragene Tätigkeit HÖHER bewertet?",
      def: "Die übertragene Tätigkeit muss <b>höher bewertet</b> sein – festzustellen durch Vergleich der <b>Stellenbewertungen</b>: Die/Der Beschäftigte müsste <b>hypothetisch nach § 12 TVöD-VKA höher eingruppiert</b> sein, wäre ihr/ihm die Tätigkeit auf Dauer übertragen.<br><br>• Jede höhere Entgeltgruppe genügt (nicht nur die nächsthöhere),<br>• das <b>zeitliche Maß</b> des § 12 II 2, 4, 5 TVöD-VKA (i. d. R. 50 %) muss auch hier erreicht sein – sonst keine Zulage,<br>• bei Vertretung eines <b>Beamten</b>: dessen Stelle zunächst nach den Grundsätzen des § 12 TVöD-VKA bewerten, dann vergleichen,<br>• die Wahrnehmung einer anderen, aber <b>gleich bewerteten</b> Tätigkeit begründet KEINEN Anspruch.",
      options: [
        { label: "Ja, höherwertig (hypothetische Höhergruppierung)", next: "q_voruebergehend", tone: "pos" },
        { label: "Nein, gleich oder niedriger bewertet", next: "e_gleichwertig", tone: "neg" }
      ]
    },

    q_voruebergehend: {
      station: "uebertragung",
      kind: "frage",
      norm: "§ 14 I TVöD-VKA (d)",
      title: "Erfolgte die Übertragung VORÜBERGEHEND nach billigem Ermessen?",
      def: "Der Arbeitgeber muss bei der Ausübung seines durch § 14 TVöD-VKA tariflich erweiterten Direktionsrechts <b>billiges Ermessen</b> wahren (§ 106 GewO, § 315 BGB): Er entscheidet, ob er eine Tätigkeit nur vorübergehend statt dauerhaft überträgt – darf das aber nicht <b>missbräuchlich</b> tun.<br><br>• Die <b>dauerhafte</b> Übertragung (§ 12) ist der Regelfall, die vorübergehende (§ 14) die Ausnahme → sie braucht einen <b>ausreichenden Grund</b> (Vertretung, ungewisse Stellenbesetzung, Erprobung, Projekt),<br>• eine feste zeitliche Obergrenze gibt es nicht – bei komplexen Projekten kann auch eine mehrjährige vorübergehende Übertragung zulässig sein (Mindestmerkmal: zeitliche Begrenzung).",
      options: [
        { label: "Ja, sachlicher Grund für nur vorübergehende Übertragung", next: "q_monat", tone: "pos" },
        { label: "Nein, rechtsmissbräuchlich (Dauerzustand)", next: "e_ermessen", tone: "neg" }
      ]
    },

    q_monat: {
      station: "monat",
      kind: "frage",
      norm: "§ 14 I TVöD-VKA (e), §§ 187 II, 188 II, 191 BGB",
      title: "Wurde die Tätigkeit mindestens EINEN MONAT tatsächlich ausgeübt?",
      def: "Die höherwertige Tätigkeit muss <b>mindestens einen Monat tatsächlich ausgeübt</b> worden sein – das schließt aus, dass bloße <b>Urlaubsvertretungen</b> eine Zulage auslösen.<br><br><b>Fristberechnung:</b> §§ 187 II, 188 II Alt. 2 BGB.<br>• <b>Unterbrechungen</b> (Krankheit, Arbeitsbefreiung § 29, Urlaub) sind für den Anspruch <b>unschädlich</b>, zählen aber bei der Monatsfrist <b>nicht mit</b> – die Frist ist dann nach § 191 BGB zu berechnen (<b>Monat = 30 Tage</b>).<br>• Unterbrechungen NACH Erfüllung des anspruchsbegründenden Monats berühren Anspruch und Höhe nicht mehr – die Zulage wird auch für Zeiten der Entgeltfortzahlung (Krankheit, Urlaub) gezahlt.<br><br><b>Beispiel (Skript):</b> Beginn 10. Mai, krank 21.–23. Mai → 11 Tage (10.–20.05.) + 19 Tage (ab 24.05.) = 30 Tage, erfüllt mit Ablauf des 11. Juni → Anspruch ab 12. Juni, <b>rückwirkend ab dem 10. Mai</b> (erster Tag der Aufgabenwahrnehmung).",
      options: [
        { label: "Ja, ein Monat (ggf. nach § 191 BGB) erfüllt", next: "q_hoehe", tone: "pos" },
        { label: "Nein, kürzer (z. B. zweiwöchige Urlaubsvertretung)", next: "e_monat", tone: "neg" }
      ]
    },

    q_hoehe: {
      station: "hoehe",
      kind: "frage",
      norm: "§ 14 III TVöD-VKA",
      title: "Wie hoch ist die persönliche Zulage?",
      def: "<b>Höhe (§ 14 III TVöD-VKA):</b> Die Zulage bemisst sich nach dem <b>Unterschiedsbetrag</b> zwischen dem aktuellen Tabellenentgelt und dem Tabellenentgelt, das sich bei <b>dauerhafter Übertragung nach § 17 IV 1 TVöD-VKA</b> ergeben hätte („<b>fiktive Höhergruppierung</b>“: stufengleiche Zuordnung, mindestens Stufe 2).<br><br>Sie wird <b>zusätzlich</b> zum Tabellenentgelt monatlich gezahlt.<br><br><b>Teilmonate (§ 24 III TVöD-VKA):</b> Beginnt oder endet die Übertragung im Laufe des Monats, steht die Zulage anteilig zu: Monatsbetrag ÷ Kalendertage des Monats × Anspruchstage.<br><br><b>Beispiel (Skript):</b> EG 6 Stufe 5, vorübergehend EG-7-Tätigkeit 19.08.–04.12. → Unterschiedsbetrag EG 6/5 zu EG 7/5 = 102,37 €; August: 102,37 ÷ 31 × 13 = 42,93 €; Sept.–Nov.: je 102,37 €; Dezember: 102,37 ÷ 31 × 4 = 13,21 €.",
      options: [
        { label: "Unterschiedsbetrag ermittelt", next: "e_anspruch", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 14 I, III TVöD-VKA",
      title: "Anspruch auf persönliche Zulage – rückwirkend ab dem ersten Tag",
      text: "Alle fünf Voraussetzungen des § 14 I TVöD-VKA sind erfüllt: (a) andere Tätigkeit, (b) Übertragung durch den Arbeitgeber, (c) höhere Bewertung (hypothetische Höhergruppierung nach § 12), (d) vorübergehende Übertragung nach billigem Ermessen, (e) mindestens ein Monat tatsächliche Ausübung.\n\nDie Zulage steht RÜCKWIRKEND ab dem ersten Tag der Aufgabenwahrnehmung für die gesamte Dauer der Ausübung zu – auch für Zeiten der Entgeltfortzahlung (Krankheit, Urlaub). Höhe: Unterschiedsbetrag zur fiktiven Höhergruppierung nach § 17 IV 1 TVöD-VKA (§ 14 III), bei Teilmonaten anteilig nach § 24 III TVöD-VKA.\n\nLäuft die Vertretung ins Leere (Stammkraft fällt dauerhaft aus), kommt der Widerruf der vorübergehenden Übertragung in Betracht. Folgt im unmittelbaren Anschluss die DAUERHAFTE Übertragung → Höhergruppierung mit fiktiver Stufenzuordnung ab dem ersten Übertragungstag (Protokollerklärung zu § 17 IV)."
    },

    e_keine_andere: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I TVöD-VKA",
      title: "Keine andere Tätigkeit – kein Zulagenanspruch",
      text: "Die/Der Beschäftigte übt die eigene, dauerhaft übertragene Tätigkeit aus. Mehrarbeit oder höhere Belastung IN der eigenen Tätigkeit begründen keinen Anspruch nach § 14 TVöD-VKA.\n\nHat sich die eigene Tätigkeit dauerhaft qualitativ verändert (höherwertige Aufgaben sind auf Dauer hinzugekommen), ist stattdessen an die Höhergruppierung über § 13 i. V. m. § 12 TVöD-VKA zu denken – Stellenbewertung aktualisieren!"
    },

    e_freiwillig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I TVöD-VKA",
      title: "Übernahme aus freien Stücken – keine Übertragung",
      text: "Die Anspruchsvoraussetzung „Übertragung\" ist nicht erfüllt: Wer Vertretungstätigkeiten ohne Auftrag des Arbeitgebers aus freien Stücken übernimmt, erhält keine persönliche Zulage.\n\nDie Übertragung muss vom Inhaber des Direktionsrechts (Bürgermeister/Landrat, § 47 II 1 GemO bzw. § 41 II 1 LKO – oder der beauftragten Personalstelle) ausgehen; sie ist formfrei, sollte aber aus Beweisgründen dokumentiert werden.\n\nPraxishinweis: Duldet der Arbeitgeber die Wahrnehmung höherwertiger Aufgaben über längere Zeit bewusst, kann darin ausnahmsweise eine KONKLUDENTE Übertragung liegen – dann Voraussetzungen erneut prüfen."
    },

    e_gleichwertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I TVöD-VKA",
      title: "Nicht höherwertig – keine Zulage",
      text: "Die Wahrnehmung einer anderen, aber gleich (oder niedriger) bewerteten Tätigkeit begründet keinen Anspruch auf eine persönliche Zulage. Ebenso fehlt es an der Höherwertigkeit, wenn die höherwertigen Arbeitsvorgänge das nach § 12 II TVöD-VKA maßgebliche Zeitmaß (i. d. R. 50 %) nicht erreichen – dann würde auch die dauerhafte Übertragung nicht zur Höhergruppierung führen.\n\nDie Umsetzung auf einen anderen, gleich bewerteten Arbeitsplatz ist vom Direktionsrecht (§ 106 GewO) gedeckt und löst keine Entgeltfolgen aus."
    },

    e_ermessen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I TVöD-VKA, § 106 GewO",
      title: "Ermessensmissbrauch: faktische Dauerübertragung",
      text: "Die vorübergehende Übertragung ist die Ausnahme und braucht einen ausreichenden Grund. Wird eine höherwertige Tätigkeit ohne sachlichen Grund dauerhaft nur „vorübergehend\" übertragen, um die Höhergruppierung zu umgehen, entspricht das nicht billigem Ermessen.\n\nFolge: Die/Der Beschäftigte kann die Eingruppierung nach der tatsächlich auf Dauer angelegten Übertragung beanspruchen (§§ 12, 13 TVöD-VKA – Tarifautomatik) und die Differenz einklagen (Eingruppierungsfeststellungsklage). Ausschlussfrist des § 37 TVöD beachten: Ansprüche verfallen sechs Monate nach Fälligkeit, wenn sie nicht in Textform geltend gemacht werden!"
    },

    e_monat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 14 I TVöD-VKA",
      title: "Monatsfrist nicht erfüllt – keine Zulage",
      text: "Die höherwertige Tätigkeit wurde keinen vollen Monat (30 Tage bei Unterbrechungen, § 191 BGB) tatsächlich ausgeübt. Der Anspruch nach § 14 TVöD-VKA entsteht nicht – typischer Fall: die bloße Urlaubsvertretung.\n\nGenau deshalb ist die Monatsfrist als Anspruchsvoraussetzung ausgestaltet: Kurzzeitige Vertretungen gehören zu den gegenseitig geschuldeten Rücksichtnahmepflichten und werden nicht gesondert vergütet.\n\nWird die Vertretung später fortgesetzt und in Summe (unter Anwendung des § 191 BGB) ein Monat erreicht, entsteht der Anspruch rückwirkend ab dem ersten Tag."
    }
  },

  routers: {}
});
