/*
 * Prüfungsschema: Sonderurlaub und Arbeitsbefreiung (§§ 28, 29 TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - Lehrplanung FS III PLE 12 (Arbeitsbefreiung und Sonderurlaub, §§ 28, 29
 *    TVöD/TV-L, WLE 1 Workshop)
 *  - "ATR_3. EA_Skript_2023_2024_V06" (Sonderurlaub § 28 im Kontext
 *    Beschäftigungszeit/Stufenlaufzeit)
 *  - Gesetze: TVöD §§ 28, 29 (VKA) (Volltext geprüft); BGB § 616;
 *    § 45 SGB V (Kind-krank)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-arbeitsbefreiung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Urlaub",
  title: "Sonderurlaub und Arbeitsbefreiung (§§ 28, 29 TVöD)",
  description: "Abgrenzung von unbezahltem Sonderurlaub (§ 28 TVöD, wichtiger Grund) und bezahlter Arbeitsbefreiung aus besonderen Anlässen (§ 29 TVöD, § 616 BGB): abschließender Anlasskatalog des § 29 I, staatsbürgerliche Pflichten (§ 29 II) und Ermessens-Arbeitsbefreiung (§ 29 III).",
  start: "start",
  stations: [
    { id: "art", label: "Art" },
    { id: "anlass", label: "Anlass" },
    { id: "umfang", label: "Umfang" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Freistellung",
    neg: "Ergebnis: keine (bezahlte) Freistellung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§§ 28, 29 TVöD-VKA",
      title: "Bezahlte Arbeitsbefreiung oder unbezahlter Sonderurlaub?",
      def: "<b>Sonderurlaub (§ 28 TVöD-VKA):</b> Beschäftigte können bei Vorliegen eines <b>wichtigen Grundes</b> unter <b>Verzicht auf die Fortzahlung des Entgelts</b> Sonderurlaub erhalten – also <b>UNBEZAHLT</b>. „Kann“-Regelung: Entscheidung des Arbeitgebers nach Ermessen; kein Rechtsanspruch.<br><br><b>Arbeitsbefreiung (§ 29 TVöD-VKA):</b> Freistellung aus besonderen Anlässen unter <b>Fortzahlung des Entgelts</b> (§ 21 TVöD) – also <b>BEZAHLT</b>. § 29 konkretisiert und verdrängt den dispositiven § 616 BGB (vorübergehende Verhinderung).<br><br><b>Folgen des unbezahlten Sonderurlaubs (§ 28):</b> Er bleibt bei der Beschäftigungszeit i. e. S. grundsätzlich unberücksichtigt (§ 34 III 2 TVöD – außer vorher anerkanntes dienstliches Interesse) und mindert den Erholungsurlaub bei ruhendem Arbeitsverhältnis (§ 26 II c TVöD).",
      options: [
        { label: "Bezahlte Arbeitsbefreiung (§ 29) prüfen", next: "q_anlass", tone: "neutral" },
        { label: "Unbezahlter Sonderurlaub (§ 28)", next: "e_sonderurlaub", tone: "warn" }
      ]
    },

    q_anlass: {
      station: "anlass",
      kind: "frage",
      norm: "§ 29 I TVöD-VKA",
      title: "Liegt ein Anlass des abschließenden Katalogs (§ 29 I TVöD) vor?",
      def: "<b>§ 29 I TVöD-VKA</b> zählt die Fälle des § 616 BGB <b>ABSCHLIESSEND</b> auf, in denen bezahlte Freistellung gewährt wird:<br>a) <b>Niederkunft</b> der Ehefrau/Lebenspartnerin/Lebensgefährtin → 1 Arbeitstag,<br>b) <b>Tod</b> von Ehegatte/Lebenspartner, Kind oder Elternteil → 2 Arbeitstage,<br>c) <b>Umzug</b> aus dienstlichem/betrieblichem Grund → 1 Arbeitstag,<br>d) <b>25-/40-jähriges Arbeitsjubiläum</b> → 1 Arbeitstag,<br>e) <b>schwere Erkrankung</b> einer/eines im Haushalt lebenden Angehörigen (1 Tag/Jahr), eines Kindes unter 12 (bis 4 Tage/Jahr, wenn kein Anspruch nach § 45 SGB V), einer Betreuungsperson (bis 4 Tage/Jahr) – Freistellung nach Buchst. e insgesamt max. 5 Arbeitstage/Jahr (§ 29 I 3),<br>f) <b>ärztliche Behandlung</b> von Beschäftigten während der Arbeitszeit → erforderliche nachgewiesene Abwesenheitszeit inkl. Wegezeiten.",
      options: [
        { label: "Ja, Katalog-Anlass (§ 29 I)", next: "e_bezahlt", tone: "pos" },
        { label: "Staatsbürgerliche Pflicht (§ 29 II)", next: "q_staatsbuerger", tone: "neutral" },
        { label: "Sonstiger dringender Fall (§ 29 III)", next: "e_ermessen", tone: "warn" },
        { label: "Kein erfasster Anlass", next: "e_kein_anlass", tone: "neg" }
      ]
    },

    q_staatsbuerger: {
      station: "anlass",
      kind: "frage",
      norm: "§ 29 II TVöD-VKA",
      title: "Staatsbürgerliche Pflicht: Besteht ein Ersatzanspruch?",
      def: "<b>§ 29 II TVöD-VKA:</b> Bei Erfüllung <b>allgemeiner staatsbürgerlicher Pflichten</b> nach deutschem Recht (z. B. Schöffe, Zeuge vor Gericht, ehrenamtliche Wahlhelfer-/Wahlvorstandstätigkeit, kommunale Mandatsträger) besteht Anspruch auf Entgeltfortzahlung nur <b>insoweit, als die/der Beschäftigte nicht Ansprüche auf Ersatz des Entgelts</b> geltend machen kann.<br><br>• Voraussetzung: Die Arbeitsbefreiung ist <b>gesetzlich vorgeschrieben</b> und die Pflicht kann nicht außerhalb der Arbeitszeit (ggf. nach Verlegung) wahrgenommen werden.<br>• Das fortgezahlte Entgelt gilt in Höhe des Ersatzanspruchs als <b>Vorschuss</b>; die/der Beschäftigte muss den Ersatzanspruch geltend machen und die Beträge an den Arbeitgeber abführen (§ 29 II 2, 3).",
      options: [
        { label: "Kein/geringerer Entschädigungsanspruch", next: "e_staatsbuerger", tone: "pos" },
        { label: "Voller Entgeltersatz durch Dritten", next: "e_ersatz", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bezahlt: {
      station: "umfang",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 I TVöD-VKA",
      title: "Bezahlte Arbeitsbefreiung im tariflichen Umfang",
      text: "Der Anlass ist im abschließenden Katalog des § 29 I TVöD-VKA erfasst. Die/Der Beschäftigte wird im dort genannten Umfang unter Fortzahlung des Entgelts (§ 21 TVöD) von der Arbeit freigestellt.\n\nBeispiele: Tod von Ehegatte/Kind/Elternteil 2 Arbeitstage; Niederkunft der Ehefrau/Partnerin 1 Tag; dienstlich veranlasster Umzug 1 Tag; 25-/40-jähriges Arbeitsjubiläum 1 Tag; ärztliche Behandlung während der Arbeitszeit im erforderlichen Umfang.\n\nBei schwerer Erkrankung von Angehörigen (Buchst. e) gilt: nur wenn keine andere Person zur Pflege/Betreuung sofort zur Verfügung steht und ärztlich bescheinigt; insgesamt höchstens 5 Arbeitstage im Kalenderjahr (§ 29 I 2, 3)."
    },

    e_staatsbuerger: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 29 II TVöD-VKA",
      title: "Arbeitsbefreiung für staatsbürgerliche Pflicht (ergänzend)",
      text: "Die gesetzlich vorgeschriebene staatsbürgerliche Pflicht kann nicht außerhalb der Arbeitszeit wahrgenommen werden; ein voller Entgeltersatz durch Dritte besteht nicht. Der Arbeitgeber zahlt das Entgelt fort, soweit kein (bzw. nur ein geringerer) Ersatzanspruch besteht (§ 29 II 1 TVöD-VKA).\n\nSoweit ein Ersatzanspruch besteht, gilt das fortgezahlte Entgelt als Vorschuss; die/der Beschäftigte muss den Ersatzanspruch geltend machen und die erhaltenen Beträge an den Arbeitgeber abführen (§ 29 II 2, 3).\n\nPraxisrelevanz für die Stelle im Wahlamt: ehrenamtliche Wahlvorstände und Wahlhelfer erfüllen eine staatsbürgerliche Pflicht i. S. d. § 29 II."
    },

    e_ermessen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 29 III TVöD-VKA",
      title: "Arbeitsbefreiung nach Ermessen (§ 29 III)",
      text: "In sonstigen dringenden Fällen KANN der Arbeitgeber Arbeitsbefreiung unter Fortzahlung des Entgelts bis zu drei Arbeitstagen gewähren (§ 29 III 1 TVöD-VKA) – Ermessensentscheidung, kein Anspruch.\n\nIn begründeten Fällen kann bei Verzicht auf das Entgelt (unbezahlt) kurzfristige Arbeitsbefreiung gewährt werden, wenn die dienstlichen/betrieblichen Verhältnisse es gestatten (§ 29 III 2). Zu den „begründeten Fällen\" können auch Anlässe gehören, für die nach § 29 I kein Anspruch besteht (z. B. Umzug aus persönlichen Gründen – Protokollerklärung zu § 29 III 2).\n\nFür längere Freistellungen bleibt der unbezahlte Sonderurlaub nach § 28 TVöD."
    },

    e_sonderurlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 28 TVöD-VKA",
      title: "Unbezahlter Sonderurlaub (§ 28 TVöD)",
      text: "Bei Vorliegen eines wichtigen Grundes kann der Arbeitgeber unter Verzicht auf die Entgeltfortzahlung Sonderurlaub gewähren (§ 28 TVöD-VKA) – unbezahlt, Kann-Entscheidung nach Ermessen, kein Rechtsanspruch. Typische Gründe: längere Auslandsaufenthalte, private Weiterbildung, Pflege naher Angehöriger (soweit nicht Pflegezeitgesetz), Kinderbetreuung über die Elternzeit hinaus.\n\nRechtsfolgen beachten:\n• Die Zeit bleibt bei der Beschäftigungszeit i. e. S. grundsätzlich unberücksichtigt – außer der Arbeitgeber hat VOR Antritt schriftlich ein dienstliches/betriebliches Interesse anerkannt (§ 34 III 2 TVöD).\n• Bei Ruhen des Arbeitsverhältnisses vermindert sich der Erholungsurlaub um ein Zwölftel je vollen Kalendermonat (§ 26 II c TVöD).\n• Auswirkungen auf die Stufenlaufzeit (§ 17 III TVöD): bis 3 Jahre unschädlich, darüber schädlich (eigenes Schema)."
    },

    e_kein_anlass: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 29 I TVöD-VKA",
      title: "Kein Anlass für bezahlte Arbeitsbefreiung",
      text: "Der Anlass ist weder vom abschließenden Katalog des § 29 I TVöD-VKA noch von § 29 II (staatsbürgerliche Pflicht) erfasst. Ein Anspruch auf bezahlte Freistellung besteht nicht (§ 29 I ist abschließend und verdrängt den dispositiven § 616 BGB).\n\nIn Betracht kommen: Arbeitsbefreiung nach Ermessen des Arbeitgebers (§ 29 III, bis zu 3 Tage bezahlt in dringenden Fällen bzw. unbezahlt in begründeten Fällen) oder unbezahlter Sonderurlaub bei wichtigem Grund (§ 28 TVöD)."
    },

    e_ersatz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 29 II TVöD-VKA",
      title: "Voller Entgeltersatz – keine zusätzliche Fortzahlung",
      text: "Kann die/der Beschäftigte für die Zeit der staatsbürgerlichen Pflicht vollen Ersatz des Entgelts von dritter Seite verlangen, besteht insoweit kein Anspruch auf Entgeltfortzahlung durch den Arbeitgeber (§ 29 II 1 TVöD-VKA – „nur insoweit, als ... nicht Ansprüche auf Ersatz des Entgelts geltend machen\").\n\nDie/Der Beschäftigte ist freizustellen, muss den Entgeltersatz aber beim zuständigen Kostenträger geltend machen. Eine Doppelzahlung (Entgelt + Ersatz) soll vermieden werden."
    }
  },

  routers: {}
});
