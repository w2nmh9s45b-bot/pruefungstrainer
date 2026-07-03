/*
 * Prüfungsschema: Entgelt im Krankheitsfall – Entgeltfortzahlung (§ 22 I TVöD-VKA, § 3 EFZG)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 3.1-3.2 (Allgemeines, Anspruch auf
 *    Entgeltfortzahlung, Bestehen Arbeitsverhältnis, AU infolge Krankheit,
 *    Verschulden, Dauer, Wiederholungserkrankung § 3 I 2 EFZG)
 *  - Lehrplanung FS III OLE 4 (Krankheit und Entgelt im Krankheitsfall,
 *    § 22 TVöD/TV-L, EFZG)
 *  - Gesetze: TVöD § 22 (VKA); EntgFG (EFZG) §§ 3, 12; BGB §§ 187 ff.
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-entgeltfortzahlung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Krankheit und Entgelt im Krankheitsfall",
  title: "Entgeltfortzahlung im Krankheitsfall (§ 22 I TVöD, § 3 EFZG)",
  description: "Anspruch auf Fortzahlung des Entgelts für sechs Wochen: bestehendes Arbeitsverhältnis, Arbeitsunfähigkeit infolge Krankheit (Kausalität), fehlendes Verschulden (Vorsatz/grobe Fahrlässigkeit), Dauer (42 Kalendertage) und Wiederholungs-/Fortsetzungserkrankung (§ 3 I 2 EFZG).",
  start: "start",
  stations: [
    { id: "arbeitsverhaeltnis", label: "Arbeitsverh." },
    { id: "au", label: "AU + Kausalität" },
    { id: "verschulden", label: "Verschulden" },
    { id: "dauer", label: "Dauer" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Entgeltfortzahlung",
    neg: "Ergebnis: keine Entgeltfortzahlung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "arbeitsverhaeltnis",
      kind: "frage",
      norm: "§ 22 I 1 TVöD-VKA, § 3 EFZG",
      title: "Besteht ein Arbeitsverhältnis (Anspruchsgrundlage)?",
      def: "<b>Entgelt im Krankheitsfall</b> (§ 22 TVöD-VKA) ist der Oberbegriff für die <b>Entgeltfortzahlung</b> (Abs. 1) und den <b>Krankengeldzuschuss</b> (Abs. 2, 3 – eigenes Schema).<br><br><b>Gesetzliche Grundlage:</b> das <b>EFZG</b> regelt die Pflicht zur Entgeltfortzahlung bei unverschuldeter krankheitsbedingter AU. Soweit § 22 TVöD nur das EFZG wiederholt (z. B. sechs Wochen, § 3 EFZG), hat er keine eigene konstitutive Bedeutung.<br><br><b>§ 22 TVöD ist günstiger:</b> Er verzichtet auf die <b>vierwöchige Wartezeit</b> des § 3 III EFZG – der Anspruch besteht <b>ab Beginn des Arbeitsverhältnisses</b> (zulässig, da das EFZG nach § 12 EFZG unabdingbar, aber günstigere Regelungen erlaubt sind).<br><br><b>Bereits bei Vertragsschluss krank?</b> Wer schon bei Arbeitsantritt arbeitsunfähig ist und es bleibt, hat keinen Anspruch (BAG v. 26.07.1989 – 5 AZR 301/88).",
      options: [
        { label: "Ja, Arbeitsverhältnis besteht (ab Tag 1)", next: "q_au", tone: "pos" },
        { label: "Schon bei Arbeitsantritt durchgehend krank", next: "e_kein_av", tone: "neg" }
      ]
    },

    q_au: {
      station: "au",
      kind: "frage",
      norm: "§ 22 I 1 TVöD-VKA",
      title: "Liegt Arbeitsunfähigkeit INFOLGE Krankheit vor (Kausalität)?",
      def: "Der Anspruch setzt <b>drei getrennte Voraussetzungen</b> voraus:<br>a) es liegt eine <b>Krankheit</b> vor,<br>b) diese hat zur <b>Arbeitsunfähigkeit</b> geführt,<br>c) <b>Kausalität</b> zwischen Krankheit und AU.<br><br><b>Krankheit</b> = jeder <b>regelwidrige körperliche oder geistige Zustand</b>.<br><br><b>Arbeitsunfähigkeit</b> = die Unfähigkeit zur Leistung der <b>vertraglich geschuldeten</b> Arbeit; auch, wenn die Arbeit nur unter der Gefahr fortgesetzt werden könnte, den Zustand in absehbarer Zeit zu verschlimmern.<br><br>Maßgeblich ist die <b>objektive ärztliche Bewertung</b> nach medizinischen Kriterien (BAG v. 26.07.1989 – 5 AZR 301/88). Eine Schönheits-OP oder Sterilisation ist keine „Krankheit“; Komplikationen daraus aber ggf. schon (dann aber Verschulden prüfen).",
      options: [
        { label: "Ja, AU kausal auf Krankheit zurückzuführen", next: "q_verschulden", tone: "pos" },
        { label: "Nein, keine Krankheit / keine Kausalität", next: "e_keine_au", tone: "neg" }
      ]
    },

    q_verschulden: {
      station: "verschulden",
      kind: "frage",
      norm: "§ 22 I 1 TVöD-VKA (Protokollerklärung)",
      title: "Ist die Arbeitsunfähigkeit UNVERSCHULDET?",
      def: "§ 22 I TVöD-VKA gewährt Entgeltfortzahlung nur bei <b>unverschuldeter</b> Arbeitsverhinderung. Nicht jedes Verschulden schadet:<br><br><b>Protokollerklärung zu § 22 I 1:</b> Ein Verschulden liegt <b>nur</b> vor, wenn die AU <b>vorsätzlich oder grob fahrlässig</b> herbeigeführt wurde (spezieller arbeitsrechtlicher Verschuldensbegriff – „Verschulden gegen sich selbst“).<br><br><b>Grob fahrlässiges Selbstverschulden</b> z. B. bei:<br>• medizinisch nicht indizierten Eingriffen (ästhetische OP, Tätowierung, Piercing) mit Komplikationen,<br>• ggf. Alkohol-/Drogenexzess, grober Verkehrsverstoß, Schlägerei (Provokateur), missglückter Suizid – Einzelfallwertung.<br><br><b>KEIN schädliches Verschulden:</b> normale Sportverletzung (nicht besonders gefährliche Sportart), einfache Fahrlässigkeit.",
      options: [
        { label: "Unverschuldet (kein Vorsatz/grobe Fahrlässigkeit)", next: "q_dauer", tone: "pos" },
        { label: "Vorsätzlich / grob fahrlässig herbeigeführt", next: "e_verschulden", tone: "neg" }
      ]
    },

    q_dauer: {
      station: "dauer",
      kind: "frage",
      norm: "§ 22 I 1 TVöD-VKA, § 3 I 2 EFZG",
      title: "Dauer: Erste Erkrankung oder Wiederholung derselben Krankheit?",
      def: "<b>Grundsatz (§ 22 I 1 TVöD-VKA):</b> Entgeltfortzahlung bis zur Dauer von <b>sechs Wochen</b> = <b>42 Kalendertage</b> (nicht Kalenderwochen!). Fristberechnung nach §§ 187 ff. BGB.<br>• Krankmeldung vor Arbeitsbeginn: Tag zählt.<br>• Erkrankung erst nach getaner Arbeit: Sechs-Wochen-Frist beginnt am nächsten Tag.<br><br><b>Wiederholungs-/Fortsetzungserkrankung (§ 3 I 2 EFZG, über § 22 I 2 TVöD):</b> Beruht die erneute AU auf <b>demselben Grundleiden</b>, gibt es einen NEUEN Sechs-Wochen-Anspruch nur, wenn<br>• <b>Nr. 1:</b> die/der Beschäftigte vor der erneuten AU <b>mindestens sechs Monate</b> nicht wegen derselben Krankheit arbeitsunfähig war, ODER<br>• <b>Nr. 2:</b> seit Beginn der ERSTEN AU wegen derselben Krankheit <b>zwölf Monate</b> abgelaufen sind.<br><br>Sonst wird die frühere AU-Zeit auf die sechs Wochen <b>angerechnet</b>.",
      options: [
        { label: "Erste Erkrankung / neue Krankheit", next: "e_sechs_wochen", tone: "pos" },
        { label: "Wiederholung, aber 6 Monate frei / 12 Monate seit Beginn", next: "e_neuer_anspruch", tone: "pos" },
        { label: "Wiederholung innerhalb der Fristen", next: "e_anrechnung", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_sechs_wochen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 22 I 1 TVöD-VKA",
      title: "Entgeltfortzahlung für sechs Wochen (42 Kalendertage)",
      text: "Alle Voraussetzungen liegen vor: bestehendes Arbeitsverhältnis (ab Tag 1, keine Wartezeit dank § 22 TVöD), Arbeitsunfähigkeit infolge Krankheit (Kausalität) und kein schädliches Verschulden (Vorsatz/grobe Fahrlässigkeit). Der Anspruch besteht für bis zu sechs Wochen = 42 Kalendertage.\n\nHöhe: nach § 21 TVöD-VKA (grundsätzlich das Entgelt, das ohne die AU zugestanden hätte).\n\nWird die/der Beschäftigte vor Ablauf der sechs Wochen wieder arbeitsfähig, endet die Fortzahlung mit Ablauf des Tages, der dem Tag der Arbeitsfähigkeit vorangeht. Danach kommt der Krankengeldzuschuss in Betracht (§ 22 II, III TVöD – eigenes Schema).\n\nNicht vergessen: Anzeige- und Nachweispflichten nach § 5 EFZG (eigenes Schema)."
    },

    e_neuer_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 3 I 2 Nr. 1, 2 EFZG",
      title: "Neuer Sechs-Wochen-Anspruch trotz Wiederholung",
      text: "Obwohl die erneute Arbeitsunfähigkeit auf derselben Krankheit beruht, entsteht ein neuer voller Sechs-Wochen-Anspruch, weil eine der Alternativen des § 3 I 2 EFZG erfüllt ist:\n• Nr. 1: vor der erneuten AU war die/der Beschäftigte mindestens sechs Monate NICHT wegen derselben Krankheit arbeitsunfähig (Rückrechnung vom Beginn der erneuten AU), ODER\n• Nr. 2: seit Beginn der ERSTEN AU wegen derselben Krankheit sind zwölf Monate abgelaufen.\n\nBeispiel (Skript, Nr. 2): AU 01.08.–31.05. des Folgejahres, dann erneut 10.08.–28.08.; da am 01.08. des Folgejahres seit Beginn der ersten AU zwölf Monate abgelaufen sind, besteht erneut Anspruch für die volle Dauer."
    },

    e_anrechnung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 3 I 2 EFZG (Anrechnung)",
      title: "Wiederholungserkrankung: frühere AU-Zeiten werden angerechnet",
      text: "Da die erneute Arbeitsunfähigkeit auf demselben Grundleiden beruht und weder die Sechs-Monats- (Nr. 1) noch die Zwölf-Monats-Grenze (Nr. 2) erfüllt ist, wird die bereits verbrauchte Entgeltfortzahlungszeit auf die sechs Wochen angerechnet.\n\nBeispiel (Skript): Hüftleiden im Mai vier Wochen AU (Entgeltfortzahlung erhalten), im Oktober desselben Jahres wegen derselben Krankheit erneut drei Wochen AU → Entgelt nur noch für weitere zwei Wochen (6 Wochen minus 4 Wochen).\n\nNach Ausschöpfung der sechs Wochen greift – bei entsprechender Beschäftigungszeit – der Krankengeldzuschuss (§ 22 III TVöD)."
    },

    e_kein_av: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 3 I EFZG",
      title: "Kein Anspruch – bereits bei Arbeitsantritt arbeitsunfähig",
      text: "Ist die/der Arbeitnehmer/in schon bei Abschluss des Arbeitsvertrags arbeitsunfähig krank und besteht die AU auch noch zu dem Zeitpunkt fort, zu dem die Arbeit vereinbarungsgemäß anzutreten wäre, besteht kein Anspruch auf Entgeltfortzahlung (BAG v. 26.07.1989 – 5 AZR 301/88 und 5 AZR 491/88) – arbeitsvertragliche Rechte und Pflichten entstehen erst mit dem rechtlichen Beginn des Arbeitsverhältnisses.\n\nWer dagegen ab dem Einstellungstag (ohne je gearbeitet zu haben) erkrankt, hat Anspruch – die Sechs-Wochen-Frist läuft dann ab dem Einstellungstag (§ 187 II 1 BGB)."
    },

    e_keine_au: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 I 1 TVöD-VKA",
      title: "Keine Arbeitsunfähigkeit infolge Krankheit",
      text: "Es fehlt an einer der drei Voraussetzungen (Krankheit / Arbeitsunfähigkeit / Kausalität). Beispiele: Der regelwidrige Zustand hindert die vertraglich geschuldete Tätigkeit nicht (keine AU), oder die Arbeitsverhinderung beruht auf anderen Gründen (Behördengang, Kinderbetreuung) – dann ggf. Arbeitsbefreiung nach § 29 TVöD, nicht Entgeltfortzahlung nach § 22.\n\nOhne Arbeitsunfähigkeit infolge Krankheit besteht kein Entgeltfortzahlungsanspruch nach § 22 I TVöD-VKA."
    },

    e_verschulden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 22 I 1 TVöD-VKA (Protokollerklärung)",
      title: "Verschuldete Arbeitsunfähigkeit – kein Anspruch",
      text: "Die Arbeitsunfähigkeit wurde vorsätzlich oder grob fahrlässig herbeigeführt (Protokollerklärung zu § 22 I 1 TVöD-VKA). In diesem Fall besteht kein Anspruch auf Entgeltfortzahlung.\n\nTypische Fälle grob fahrlässigen Selbstverschuldens: Komplikationen nach medizinisch nicht indizierten Eingriffen (ästhetische OP, Tätowierung, Piercing). Bei Alkohol-/Verkehrsverstößen, Schlägereien oder besonders gefährlichem Sport ist im Einzelfall zu prüfen, ob die hohe Schwelle der groben Fahrlässigkeit erreicht ist.\n\nDie Beweislast für das Verschulden trägt der Arbeitgeber."
    }
  },

  routers: {}
});
