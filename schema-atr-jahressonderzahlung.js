/*
 * Prüfungsschema: Jahressonderzahlung (§ 20 TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.5.2 (Jahressonderzahlung:
 *    Stichtag, Bemessungssatz, Bemessungsgrundlage mit Ausnahmen 1-3,
 *    Zwölftelung mit Ausnahmen, Beispiele)
 *  - Lehrplanung FS III PLE 8 (Jahressonderzahlung, § 20 TVöD/TV-L)
 *  - Gesetze: TVöD § 20 (VKA) mit Protokollerklärungen, § 24 IV (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-jahressonderzahlung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Jahressonderzahlung (§ 20 TVöD-VKA)",
  description: "„Weihnachtsgeld\" im öffentlichen Dienst: Stichtagsregelung (1. Dezember), Bemessungssatz nach Entgeltgruppe am 1. September, Bemessungsgrundlage (Durchschnitt Juli–September mit drei Ausnahmen), Zwölftelung (§ 20 IV) mit Rückausnahmen und Auszahlung mit dem Novemberentgelt.",
  start: "start",
  stations: [
    { id: "anspruch", label: "Anspruch" },
    { id: "satz", label: "Bemessungssatz" },
    { id: "grundlage", label: "Grundlage" },
    { id: "kuerzung", label: "Zwölftelung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Anspruch besteht",
    neg: "Ergebnis: kein Anspruch",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "anspruch",
      kind: "frage",
      norm: "§ 20 I TVöD-VKA",
      title: "Steht die/der Beschäftigte am 1. Dezember im Arbeitsverhältnis?",
      def: "<b>Anspruchsvoraussetzung (§ 20 I TVöD-VKA):</b> Anspruch auf eine Jahressonderzahlung hat, wer <b>am 1. Dezember im Arbeitsverhältnis steht</b> – eine reine <b>Stichtagsregelung</b>.<br><br><b>Es kommt NICHT darauf an:</b><br>• ob am 1. Dezember (oder im Dezember überhaupt) ein <b>Entgeltanspruch</b> besteht – auch bei <b>ruhendem</b> Arbeitsverhältnis (Elternzeit, Sonderurlaub § 28, Rente auf Zeit) besteht der Anspruch <b>dem Grunde nach</b> (ggf. greift die Zwölftelung!),<br>• wie lange das Arbeitsverhältnis vor dem Stichtag bestand oder danach noch andauert – ein Ausscheiden <b>nach</b> dem 1. Dezember (auch durch Kündigung wegen Verschuldens!) berührt den Anspruch nicht.<br><br><b>Kein Anspruch:</b> Ende des Arbeitsverhältnisses mit Ablauf des 30. November oder früher (Rente, Arbeitgeberwechsel, Kündigung, <b>Verbeamtung!</b>) – dann auch nicht anteilig.",
      hint: "Skript-Beispiel: HöV-Absolvent wird zunächst als Beschäftigter (EG 9b) eingestellt und zum 01.12. verbeamtet → am 01.12. kein Arbeitsverhältnis mehr, KEINE Jahressonderzahlung. Verbeamtung zum 02.12. oder 01.01. wäre unschädlich gewesen.",
      options: [
        { label: "Ja, am 1.12. im Arbeitsverhältnis", next: "q_satz", tone: "pos" },
        { label: "Nein, vorher ausgeschieden/verbeamtet", next: "e_kein_anspruch", tone: "neg" }
      ]
    },

    q_satz: {
      station: "satz",
      kind: "frage",
      norm: "§ 20 II TVöD-VKA",
      title: "Bemessungssatz: Welche Entgeltgruppe galt am 1. September?",
      def: "Die Höhe = <b>Bemessungssatz × Bemessungsgrundlage</b> (§ 20 II 1 TVöD-VKA).<br><br><b>Bemessungssatz (Tarifgebiet West)</b> – gestaffelt nach der Entgeltgruppe:<br>• EG 1–8: <b>84,51 %</b> (bis 2021: 79,51 %),<br>• EG 9a–12: <b>70,28 %</b>,<br>• EG 13–15: <b>51,78 %</b>.<br><br><b>Stichtag:</b> maßgeblich ist die Entgeltgruppe am <b>1. September</b> des Jahres (§ 20 II 2 TVöD-VKA); bei Einstellung nach dem 1. September: die EG am Einstellungstag.<br><br><b>Klausur-Klassiker:</b> Höhergruppierung von EG 8 nach EG 9a zum 01.09. → niedrigerer Bemessungssatz (84,51 % → 70,28 %) kann die Jahressonderzahlung mindern; der Höhergruppierungsgewinn gleicht das u. U. nicht aus!",
      options: [
        { label: "Bemessungssatz bestimmt", next: "q_grundlage", tone: "pos" }
      ]
    },

    q_grundlage: {
      station: "grundlage",
      kind: "frage",
      norm: "§ 20 II TVöD-VKA + Protokollerklärung",
      title: "Bemessungsgrundlage: Welcher Zeitraum ist maßgeblich?",
      def: "<b>Grundsatz:</b> das der/dem Beschäftigten in den Monaten <b>Juli, August, September durchschnittlich gezahlte monatliche Entgelt</b> (Summe der drei Monate ÷ 3, Satz 1 der Protokollerklärung zu § 20 II).<br><br><b>Ausnahme 1 – nicht für alle Kalendertage Entgelt:</b> Summe der gezahlten Entgelte ÷ <b>Zahl der Kalendertage mit Entgeltanspruch</b> × <b>30,67</b> (Satz 2 der Protokollerklärung).<br><i>Beispiel (Skript):</i> Einstellung 01.08., EG 5/1, Juli 0 €, Aug./Sep. je 2.576,29 € → 5.152,58 ÷ 61 Tage × 30,67 = <b>2.590,65 €</b> Bemessungsgrundlage.<br><br><b>Ausnahme 2 – Beginn nach dem 30. September:</b> Bemessungszeitraum ist der <b>erste volle Kalendermonat</b> des Arbeitsverhältnisses (§ 20 II 3 TVöD-VKA). Einstellung 10.10. → November; Einstellung 01.12. → Dezember.<br><br><b>Ausnahme 3 – weniger als 30 Kalendertage mit Entgelt im Juli–September</b> (lange AU, Elternzeit, Sonderurlaub): der <b>letzte davor liegende volle Kalendermonat</b> mit Entgeltanspruch (Satz 4 der Protokollerklärung) – notfalls aus dem Vorjahr.",
      options: [
        { label: "Regelfall Juli-September", next: "q_kuerzung", tone: "pos" },
        { label: "Eine der Ausnahmen 1-3 angewendet", next: "q_kuerzung", tone: "warn" }
      ]
    },

    q_kuerzung: {
      station: "kuerzung",
      kind: "frage",
      norm: "§ 20 IV TVöD-VKA",
      title: "Zwölftelung: Gab es Kalendermonate ohne einen Tag Entgeltanspruch?",
      def: "<b>Verminderung (§ 20 IV 1 TVöD-VKA):</b> Der Anspruch vermindert sich um <b>ein Zwölftel für jeden Kalendermonat</b>, in dem die/der Beschäftigte <b>nicht für mindestens einen Tag</b> Anspruch auf Entgelt oder Entgeltfortzahlung (AU, Erholungs-/Zusatzurlaub, § 21) hat.<br><br>Relevant z. B. bei unterjährigem Eintritt, Ablauf der Krankenbezugsfristen, unbezahltem Sonderurlaub, Elternzeit.<br><br><b>Volle KALENDERmonate zählen:</b> Sonderurlaub 16.01.–15.02. → in Januar UND Februar je mindestens ein Entgelttag → <b>keine</b> Kürzung. Sonderurlaub bis Ablauf 15.03. → der volle Februar ohne Entgelt → Kürzung um 1/12.<br><br><b>Rückausnahmen (§ 20 IV 2 TVöD-VKA)</b> – KEINE Kürzung trotz entgeltfreier Monate bei:<br>a) Wehr-/Zivildienst mit Wiederaufnahme vor dem 01.12.,<br>b) <b>Beschäftigungsverboten nach dem MuSchG</b>,<br>c) <b>Elternzeit bis zum Ende des Kalenderjahres, in dem das Kind geboren ist</b>,<br>d) Zeiten mit Anspruch auf <b>Krankengeldzuschuss</b> (auch wenn er wegen der Höhe nicht gezahlt wird).",
      hint: "Skript-Beispiel Elternzeit: Geburt 05.03.2021, Elternzeit bis 04.03.2023 → JSZ 2021 voll (Geburtsjahr!), JSZ 2022 = 0 (12/12 gekürzt), JSZ 2023 um 2/12 gekürzt (Januar + Februar ohne Entgelt, ab März wieder Entgelt).",
      options: [
        { label: "Keine Kürzungsmonate", next: "e_voll", tone: "pos" },
        { label: "Kürzungsmonate vorhanden", next: "e_gezwoelftelt", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_voll: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 20 II, V TVöD-VKA",
      title: "Volle Jahressonderzahlung",
      text: "Jahressonderzahlung = Bemessungssatz (nach EG am 01.09.: EG 1–8 → 84,51 %, EG 9a–12 → 70,28 %, EG 13–15 → 51,78 %, Tarifgebiet West) × Bemessungsgrundlage (Durchschnittsentgelt Juli–September bzw. Ausnahme-Zeitraum). Rundung nach § 24 IV TVöD-VKA (Zwischenrechnungen auf zwei Dezimalstellen).\n\nAUSZAHLUNG: mit dem Tabellenentgelt für November, also grundsätzlich am 30. November (§ 20 V 1 TVöD-VKA).\n\nRechenbeispiel (Skript): Einstellung 01.01.2023, EG 5 Stufe 1, am 01.12.2023 im Arbeitsverhältnis; Bemessungssatz 84,51 %, Bemessungsgrundlage 2.576,29 € → Jahressonderzahlung 2.177,22 € (gerundet)."
    },

    e_gezwoelftelt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 20 IV TVöD-VKA",
      title: "Gekürzte (gezwölftelte) Jahressonderzahlung",
      text: "Für jeden Kalendermonat ohne mindestens einen Tag Entgelt-/Entgeltfortzahlungsanspruch vermindert sich die Jahressonderzahlung um ein Zwölftel (§ 20 IV 1 TVöD-VKA) – es sei denn, eine Rückausnahme des § 20 IV 2 greift (MuSchG-Beschäftigungsverbote, Elternzeit im Geburtsjahr des Kindes, Krankengeldzuschuss-Zeiten, Wehr-/Zivildienst).\n\nGesamtrechenweg (Skript-Beispiel Einstellung 01.08.2023, EG 5/1):\n1. Bemessungsgrundlage: (0 + 2.576,29 + 2.576,29) ÷ 61 Anspruchstage × 30,67 = 2.590,65 €\n2. × Bemessungssatz 84,51 % = 2.189,36 €\n3. Zwölftelung: ÷ 12 × 5 volle Monate mit Entgelt (Aug.–Dez.) = 912,23 € Jahressonderzahlung.\n\nBei mehreren (befristeten) Arbeitsverhältnissen zum selben Arbeitgeber im Kalenderjahr: Bemessungssatz und -grundlage nach dem LETZTEN Arbeitsverhältnis; alle Monate mit mindestens einem Entgelttag zählen (BAG v. 22.03.2017 – 10 AZR 623/15)."
    },

    e_kein_anspruch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 20 I TVöD-VKA",
      title: "Kein Anspruch – Stichtag 1. Dezember verfehlt",
      text: "Wer am 1. Dezember nicht (mehr) in einem Arbeitsverhältnis zum Arbeitgeber steht, hat keinen Anspruch auf die Jahressonderzahlung – auch nicht anteilig für die zurückgelegten Monate. Das gilt bei Beendigung mit Ablauf des 30. November oder früher, z. B. durch Rentenbeginn, Arbeitgeberwechsel, Kündigung oder Übernahme in das Beamtenverhältnis.\n\nDie Stichtagsregelung ist wirksam: Die Jahressonderzahlung honoriert (auch) künftige Betriebstreue.\n\nGestaltungshinweis aus dem Skript-Beispiel: Bei einer geplanten Verbeamtung zum Jahresende lohnt der Blick auf den Termin – Ernennung zum 02.12. statt 01.12. erhält den Anspruch."
    }
  },

  routers: {}
});
