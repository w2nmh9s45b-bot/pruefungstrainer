/*
 * Prüfungsschema: Gesetzgebungskompetenz, Art. 30, 70 ff. GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "08. LV 17-20 - Gesetzgebungskompetenz I+II" (Weidenbach, FS I)
 *  - Normen verifiziert an Gesetze/md/Verfassungsrecht/Grundgesetz.md
 *
 * Stationen: grundsatz → ausschliesslich → konkurrierend → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-gesetzgebungskompetenz",
  subject: "Staatsrecht / Europarecht",
  area: "Gesetzgebung",
  title: "Gesetzgebungskompetenz, Art. 70 ff. GG",
  description: "Wer darf das Gesetz erlassen? Vorrecht der Länder (Art. 30, 70 I GG), ausschließliche Gesetzgebung des Bundes (Art. 71, 73 GG, Einzelzuweisungen, Rückausnahme) und konkurrierende Gesetzgebung (Art. 72, 74 GG: Kern-, Bedarfs- und Abweichungskompetenz).",
  fs: ["FS1", "FS2"],
  start: "start",
  stations: [
    { id: "grundsatz", label: "Grundsatz" },
    { id: "ausschliesslich", label: "Ausschließliche GK" },
    { id: "konkurrierend", label: "Konkurrierende GK" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Kompetenz des Bundes",
    neg: "Kompetenz der Länder",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundsatz",
      kind: "frage",
      norm: "Art. 30, 70 I, II GG",
      title: "Wessen Gesetz wird geprüft?",
      text: "Obersatz: Der Bund/das Land könnte für den Erlass des Gesetzes zuständig sein. Grundsätzlich haben die Länder das Recht der Gesetzgebung, soweit das GG nicht dem Bund Gesetzgebungsbefugnisse verleiht (Art. 30, 70 I GG). Die Abgrenzung erfolgt nach den Vorschriften über die ausschließliche und die konkurrierende Gesetzgebung (Art. 70 II GG).",
      def: "<b>Gesetzgebungskompetenz:</b> das Recht, Gesetze erlassen zu dürfen.",
      options: [
        { label: "Bundesgesetz", detail: "Der Bund braucht einen Kompetenztitel aus dem GG", next: "q_art73", tone: "neutral" },
        { label: "Landesgesetz", detail: "Zulässig, soweit keine (Sperr-)Kompetenz des Bundes greift", next: "q_art73", set: { landesgesetz: true }, tone: "neutral" }
      ]
    },

    /* ================= Ausschließliche GK ================= */

    q_art73: {
      station: "ausschliesslich",
      kind: "frage",
      norm: "Art. 71, 73 I GG",
      title: "Katalognummer des Art. 73 I GG einschlägig?",
      text: "Lässt sich die Regelung unter ein Sachgebiet des Art. 73 I GG subsumieren? Auswahl anhand des Sachverhalts begründen!",
      def: "<b>Beispiele Art. 73 I GG:</b> auswärtige Angelegenheiten und Verteidigung (Nr. 1), Staatsangehörigkeit (Nr. 2), Luft- und Eisenbahnverkehr (Nr. 6, 6a), Post und Telekommunikation (Nr. 7), Urheberrecht (Nr. 9), internationaler Terrorismus (Nr. 9a), Waffen und Sprengstoff (Nr. 12), Kernenergie (Nr. 14).",
      hint: "Übungsfälle: Mindestabstand von Kernkraftwerken → Art. 73 I Nr. 14 GG; Komponisten-Rechte → Urheberrecht, Art. 73 I Nr. 9 GG.",
      options: [
        { label: "Ja, Katalognummer einschlägig", next: "@ausschl_folge", set: { ausschl: true }, tone: "pos" },
        { label: "Nein – Einzelzuweisung prüfen", next: "q_einzelzuweisung", tone: "neutral" }
      ]
    },

    q_einzelzuweisung: {
      station: "ausschliesslich",
      kind: "frage",
      norm: "z. B. Art. 21 V, 23 I, 38 III, 54 VII, 59 II, 79 GG",
      title: "Ausschließliche Kompetenz aus spezieller Verfassungsbestimmung (Einzelzuweisung)?",
      text: "Weitere Gegenstände der ausschließlichen Gesetzgebung ergeben sich neben Art. 73 GG aus speziellen Verfassungsbestimmungen. Signalwörter: „Bundesgesetz“ oder Bezug auf den „Bund“.",
      def: "<b>Beispiele:</b> Art. 21 I, V GG (Parteien), Art. 23 I GG (vereintes Europa), Art. 38 I, III GG (Bundestagswahl), Art. 54 VII GG (Wahl des BPräs), Art. 59 I 2, II 1 GG (völkerrechtliche Verträge), Art. 79 I 1, II GG (GG-Änderungen).",
      options: [
        { label: "Ja, Einzelzuweisung greift", next: "@ausschl_folge", set: { ausschl: true }, tone: "pos" },
        { label: "Nein – keine ausschließliche GK des Bundes", detail: "Zwischenergebnis festhalten, dann konkurrierende GK prüfen", next: "q_art74", tone: "neutral" }
      ]
    },

    q_rueckausnahme: {
      station: "ausschliesslich",
      kind: "frage",
      norm: "Art. 71 GG",
      title: "Landesgesetz im Bereich der ausschließlichen GK: Ermächtigung durch Bundesgesetz?",
      text: "Im Bereich der ausschließlichen Gesetzgebung des Bundes haben die Länder die Befugnis zur Gesetzgebung nur, wenn und soweit sie hierzu in einem Bundesgesetz ausdrücklich ermächtigt werden (Art. 71 GG) – und nur für Einzelfragen, keine ganzen Sachgebiete!",
      options: [
        { label: "Ja, ausdrückliche bundesgesetzliche Ermächtigung", next: "e_land_ermaechtigt", tone: "pos" },
        { label: "Nein", next: "e_land_verfassungswidrig", tone: "neg" }
      ]
    },

    /* ================= Konkurrierende GK ================= */

    q_art74: {
      station: "konkurrierend",
      kind: "frage",
      norm: "Art. 72, 74 I GG",
      title: "Katalognummer des Art. 74 I GG (oder Einzelzuweisung) einschlägig?",
      text: "Zwischenergebnis: Keine ausschließliche Gesetzgebungskompetenz des Bundes. ✓\n\nDie konkurrierende Gesetzgebung gliedert sich in drei Unterarten: Kernkompetenz (Art. 72 I), Bedarfskompetenz (Art. 72 II) und Abweichungskompetenz (Art. 72 III GG).",
      def: "<b>Wichtige Sachgebiete des Art. 74 I GG:</b> Nr. 1 (bürgerliches Recht, Strafrecht), Nr. 11 (Recht der Wirtschaft), Nr. 12 (Arbeitsrecht, Sozialversicherung), Nr. 19 (Teile des Gesundheitswesens), Nr. 24 (Abfall, Luftreinhaltung, Lärm). <b>Einzelzuweisungen:</b> Art. 105 II GG (Steuern), Art. 115c, 125a GG.",
      options: [
        { label: "Ja, Katalognummer des Art. 74 I GG", next: "q_kompetenzart", tone: "pos" },
        { label: "Steuern: Art. 105 II GG", detail: "Grundsteuer: Kernkompetenz (105 II 1); übrige Steuern: Verweis auf Art. 72 II GG (105 II 2)", next: "q_kompetenzart", tone: "pos" },
        { label: "Nein, weder Katalog noch Einzelzuweisung", next: "e_laenderkompetenz", tone: "neg" }
      ]
    },

    q_kompetenzart: {
      station: "konkurrierend",
      kind: "frage",
      norm: "Art. 72 I–III GG",
      title: "Welche Unterart der konkurrierenden Gesetzgebung liegt vor?",
      text: "Die Zuordnung erfolgt über die Subtraktionsmethode: Was nicht in Art. 72 II oder III GG aufgezählt ist, gehört zur Kernkompetenz des Art. 72 I GG.",
      def: "<b>Kernkompetenz (Art. 72 I):</b> u. a. Art. 74 I Nr. 1–3, 6, 9, 10, 12, 14, 16–19, 21, 23, 24, 27 GG + Art. 105 II 1 GG. <b>Bedarfskompetenz (Art. 72 II):</b> abschließend Art. 74 I Nr. 4, 7, 11, 13, 15, 19a, 20, 22, 25, 26 GG. <b>Abweichungskompetenz (Art. 72 III):</b> Art. 74 I Nr. 28–33 GG, Art. 84 I 2 GG.",
      options: [
        { label: "Kernkompetenz, Art. 72 I GG", detail: "Vorrangige Zuständigkeit des Bundes – Sperrwirkung", next: "q_kern", tone: "neutral" },
        { label: "Bedarfskompetenz, Art. 72 II GG", detail: "Erforderlichkeit einer bundesgesetzlichen Regelung nötig", next: "q_bedarf", tone: "neutral" },
        { label: "Abweichungskompetenz, Art. 72 III GG", detail: "Nur relevant, wenn ein Landesgesetz vorliegt oder geplant ist", next: "q_abweichung", tone: "neutral" }
      ]
    },

    q_kern: {
      station: "konkurrierend",
      kind: "frage",
      norm: "Art. 72 I GG",
      title: "Kernkompetenz: Hat der Bund von seiner Befugnis Gebrauch gemacht?",
      text: "Die Länder haben die Gesetzgebungsbefugnis nur, solange und soweit der Bund von seiner Befugnis nicht durch Gesetz Gebrauch gemacht hat. Bundesgesetze entfalten Sperrwirkung – entgegenstehende Landesgesetze werden unwirksam.",
      def: "<b>„Soweit“ (sachliche Komponente):</b> Hat der Bund inhaltlich nicht alles ausgeschöpft, verbleibt eine „Lücke“, welche die Länder füllen können – nur bei eindeutigen Anhaltspunkten im Sachverhalt thematisieren.",
      options: [
        { label: "Prüfung für ein Bundesgesetz", detail: "Bund hat die vorrangige Kompetenz", next: "e_bund_konkurrierend", tone: "pos" },
        { label: "Landesgesetz: Bund hat nicht (abschließend) geregelt", detail: "Lücke bzw. kein Gebrauch – Land darf regeln", next: "e_land_konkurrierend", tone: "pos" },
        { label: "Landesgesetz: Bund hat abschließend geregelt", detail: "Sperrwirkung", next: "e_land_verfassungswidrig", tone: "neg" }
      ]
    },

    q_bedarf: {
      station: "konkurrierend",
      kind: "frage",
      norm: "Art. 72 II GG",
      title: "Bedarfskompetenz: Ist die bundesgesetzliche Regelung erforderlich?",
      text: "Der Bund hat das Gesetzgebungsrecht, wenn und soweit die Herstellung gleichwertiger Lebensverhältnisse im Bundesgebiet oder die Wahrung der Rechts- oder Wirtschaftseinheit im gesamtstaatlichen Interesse eine bundesgesetzliche Regelung erforderlich macht.",
      def: "<b>Gleichwertige Lebensverhältnisse:</b> Lebensverhältnisse haben sich in erheblicher, das bundesstaatliche Sozialgefüge beeinträchtigender Weise auseinanderentwickelt (bloße Verbesserung genügt nicht). <b>Rechtseinheit:</b> Vermeidung von Rechtszersplitterung mit unzumutbaren Behinderungen des länderübergreifenden Rechtsverkehrs. <b>Wirtschaftseinheit:</b> Erhaltung der Funktionsfähigkeit des gesamtdeutschen Wirtschaftsraums.",
      hint: "Fällt die Erforderlichkeit später weg, kann ein „Freigabegesetz“ die Landesgesetzgebung wieder öffnen (Art. 72 IV GG).",
      options: [
        { label: "Ja, Erforderlichkeit gegeben", next: "e_bund_konkurrierend", tone: "pos" },
        { label: "Nein, keine Erforderlichkeit", next: "e_laenderkompetenz", tone: "neg" }
      ]
    },

    q_abweichung: {
      station: "konkurrierend",
      kind: "frage",
      norm: "Art. 72 III GG",
      title: "Abweichungskompetenz: Weicht das Land vom Bundesgesetz ab?",
      text: "In den Materien des Art. 72 III GG (u. a. Jagdwesen, Naturschutz, Raumordnung, Wasserhaushalt, Hochschulzulassung) dürfen die Länder abweichende Gesetze erlassen, selbst wenn ein Bundesgesetz existiert.",
      def: "Kein Fall der Sperrwirkung; „Bundesrecht bricht Landesrecht“ (Art. 31 GG) gilt hier nicht – stattdessen gilt das jeweils spätere Gesetz („Wettlauf der Gesetzgeber“, Ping-Pong-Effekt). Bundesgesetze treten frühestens sechs Monate nach Verkündung in Kraft (Art. 72 III 2 GG). Tritt das Landesgesetz außer Kraft, lebt das Bundesgesetz wieder auf.",
      options: [
        { label: "Land macht von der Abweichung Gebrauch", detail: "Bundesgesetz wird in diesem Land nicht angewendet", next: "e_land_konkurrierend", tone: "pos" },
        { label: "Keine Abweichung – Bundesgesetz gilt", next: "e_bund_konkurrierend", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bund_ausschliesslich: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Kompetenz des Bundes",
      title: "Ausschließliche Gesetzgebungskompetenz des Bundes",
      text: "Das Gesetz unterfällt einer Katalognummer des Art. 73 I GG bzw. einer Einzelzuweisung. Der Bund ist zur Regelung der Materie zuständig (Art. 71, 73 GG). Die Länder haben hier grundsätzlich keinerlei Zuständigkeiten (Umkehrschluss aus Art. 71 GG)."
    },
    e_land_ermaechtigt: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Kompetenz kraft Ermächtigung",
      title: "Land kraft ausdrücklicher Ermächtigung zuständig",
      text: "Das Land wurde durch Bundesgesetz ausdrücklich zur Regelung ermächtigt (Art. 71 GG). Beachte: Zulässig ist nur die Regelung von Einzelfragen, nicht ganzer Sachgebiete."
    },
    e_land_verfassungswidrig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      kicker: "Landesgesetz kompetenzwidrig",
      title: "Keine Gesetzgebungskompetenz des Landes",
      text: "Die Materie fällt in die (gesperrte) Kompetenz des Bundes – sei es die ausschließliche Gesetzgebung ohne Ermächtigung (Art. 71 GG) oder die Kernkompetenz mit Sperrwirkung (Art. 72 I GG). Das Landesgesetz ist formell verfassungswidrig."
    },
    e_bund_konkurrierend: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Kompetenz des Bundes",
      title: "Konkurrierende Gesetzgebungskompetenz des Bundes",
      text: "Die Materie unterfällt Art. 74 I GG (bzw. Art. 105 II GG), und Art. 72 II–IV GG stehen der Kompetenz des Bundes nicht entgegen. Der Bund besitzt die (vorrangige) Gesetzgebungskompetenz – sein Gesetz entfaltet in den Fällen des Art. 72 I, II GG Sperrwirkung gegenüber Landesrecht."
    },
    e_land_konkurrierend: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Kompetenz des Landes",
      title: "Gesetzgebungskompetenz des Landes",
      text: "Das Land darf regeln: Der Bund hat von seiner konkurrierenden Kompetenz (noch) keinen bzw. keinen abschließenden Gebrauch gemacht (Art. 72 I GG – vgl. Home-Office-Fall), oder das Land nutzt die Abweichungskompetenz des Art. 72 III GG."
    },
    e_laenderkompetenz: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      kicker: "Vorrecht der Länder",
      title: "Kompetenz der Länder – Bundesgesetz wäre verfassungswidrig",
      text: "Weder eine Katalognummer noch eine Einzelzuweisung greift, bzw. Art. 72 II–IV GG stehen der Bundeskompetenz entgegen. Es bleibt beim Vorrecht der Länder aus Art. 30, 70 I GG. Ein gleichwohl erlassenes Bundesgesetz wäre formell verfassungswidrig."
    }
  },

  routers: {
    "@ausschl_folge": function (flags) {
      return flags.landesgesetz ? "q_rueckausnahme" : "e_bund_ausschliesslich";
    }
  }
});
