/*
 * Prüfungsschema: Der Bundesrat, Art. 50–53 GG
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Staats- und Verfassungsrecht):
 *  - "StVR II OLE LE 6 - Der Bundesrat" (Breitbach, FS II)
 *  - "01. Skript StVR FS II 2024_2025" (Breitbach/Jagatic)
 *  - Normen verifiziert an Grundgesetz.md
 *
 * Stationen: stellung → mandat → abstimmung → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-bundesrat",
  subject: "Staatsrecht / Europarecht",
  area: "Staatsorganisation",
  title: "Bundesrat, Art. 50–53 GG",
  description: "Das föderative Element: Stellung als Dauerorgan, Zusammensetzung (Art. 51 GG), imperatives Mandat der Mitglieder, einheitliche Stimmabgabe und Stimmführerschaft sowie Mehrheiten (Art. 52 III, 79 II GG).",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "stellung", label: "Stellung" },
    { id: "mandat", label: "Mandat" },
    { id: "abstimmung", label: "Abstimmung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Wirksam / zulässig",
    neg: "Unwirksam / unzulässig",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "stellung",
      kind: "frage",
      norm: "Art. 50, 51 GG",
      title: "Stellung und Zusammensetzung des Bundesrats",
      text: "Durch den Bundesrat wirken die Länder bei Gesetzgebung und Verwaltung des Bundes und in EU-Angelegenheiten mit (Art. 50 GG) – das föderative Element. Der BR ist Dauerorgan: sein Bestehen hängt nicht von Legislaturperioden ab; nach Landtagswahlen werden nur einzelne Mitglieder ausgetauscht.",
      def: "<b>Mitglieder (Art. 51 I GG):</b> Mitglieder der Landesregierungen, die sie bestellen und abberufen – nicht gewählt, sondern entsandt. <b>Doppelfunktion:</b> als Landesregierungsmitglied Exekutive, als BR-Mitglied v. a. Legislative. <b>Stimmen (Art. 51 II GG):</b> je nach Einwohnerzahl 3–6 Stimmen, insgesamt derzeit 69. <b>Inkompatibilität:</b> BR-Mitglieder können nicht zugleich Bundestagsabgeordnete sein. <b>Präsident (Art. 52 I GG):</b> auf ein Jahr gewählt (Turnus der Ministerpräsidenten); zugleich Abwesenheitsvertreter des BPräs (Art. 57 GG).",
      options: [
        { label: "Rechtsstellung der BR-Mitglieder prüfen", next: "q_mandat", tone: "neutral" },
        { label: "Abstimmung im Bundesrat prüfen", next: "q_einheitlich", tone: "neutral" }
      ]
    },

    q_mandat: {
      station: "mandat",
      kind: "frage",
      norm: "Art. 51 I 1, III 2 GG",
      title: "Imperatives Mandat: Ist das BR-Mitglied an Weisungen gebunden?",
      text: "Anders als Bundestagsabgeordnete (freies Mandat, Art. 38 I 2 GG) haben Bundesratsmitglieder ein imperatives Mandat: Sie sind bei der Stimmabgabe an die Weisungen ihrer Landesregierung gebunden (abzuleiten aus Art. 51 I 1 – jederzeitige Abberufbarkeit –, Art. 51 III 2, 53a I 3 Hs. 2, 77 II 3 GG).",
      hint: "Praxis: Das Landeskabinett legt vor der BR-Sitzung das Abstimmungsverhalten fest; bei Uneinigkeit in einer Koalition wird Enthaltung vereinbart.",
      options: [
        { label: "Mitglied stimmt weisungsgemäß", next: "q_einheitlich", tone: "pos" },
        { label: "Mitglied verstößt gegen die Weisung", next: "q_weisungsverstoss", tone: "warn" }
      ]
    },

    q_weisungsverstoss: {
      station: "mandat",
      kind: "frage",
      norm: "Art. 51 GG",
      title: "Folge des Weisungsverstoßes: Außen- oder Innenverhältnis?",
      def: "<b>Außenverhältnis:</b> Die weisungswidrige Stimmabgabe ist <b>gültig</b> und wird protokolliert. <b>Innenverhältnis:</b> Die Missachtung kann Konsequenzen haben – umgehende Abberufung, ggf. Entlassung als Minister/politischer Beamter.",
      options: [
        { label: "Wirkung der Stimme im Bundesrat", next: "e_stimme_gueltig", tone: "pos" },
        { label: "Konsequenzen für das Mitglied", next: "e_innenverhaeltnis", tone: "warn" }
      ]
    },

    q_einheitlich: {
      station: "abstimmung",
      kind: "frage",
      norm: "Art. 51 III 2 GG",
      title: "Wurden die Stimmen des Landes einheitlich abgegeben?",
      text: "Die Stimmen eines Landes können nur einheitlich und nur durch anwesende Mitglieder oder deren Vertreter abgegeben werden (Art. 51 III 2 GG) – also alle mit „Ja“, „Nein“ oder „Enthaltung“.",
      def: "<b>Stimmführerschaft:</b> In der Praxis gibt ein Stimmführer alle Stimmen seines Landes ab, auch wenn kein weiterer Landesvertreter anwesend ist – vom BVerfG 2002 als verfassungsgemäß anerkannt.",
      options: [
        { label: "Ja, einheitlich (ggf. durch Stimmführer)", next: "q_mehrheit", tone: "pos" },
        { label: "Nein, uneinheitlich (z. B. 3x Ja, 1x Nein)", next: "e_ungueltig", tone: "neg" }
      ]
    },

    q_mehrheit: {
      station: "abstimmung",
      kind: "frage",
      norm: "Art. 52 III 1, 79 II GG",
      title: "Erforderliche Mehrheit erreicht?",
      text: "Der Bundesrat fasst seine Beschlüsse grundsätzlich mit mindestens der Mehrheit seiner Stimmen – absolute Mehrheit: 35 von 69 (Art. 52 III 1 GG). Abweichend verlangt Art. 79 II GG bei Verfassungsänderungen eine 2/3-Mehrheit: 46 von 69 Stimmen.",
      options: [
        { label: "Einfacher Beschluss: ≥ 35 Stimmen", next: "e_beschluss", tone: "pos" },
        { label: "GG-Änderung: ≥ 46 Stimmen", next: "e_beschluss", tone: "pos" },
        { label: "Mehrheit verfehlt", next: "e_kein_beschluss", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_stimme_gueltig: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Weisungswidrige Stimme ist gültig",
      text: "Die Stimmabgabe entgegen der Weisung der Landesregierung ist im Außenverhältnis wirksam und wird protokolliert – das Abstimmungsergebnis des Bundesrats bleibt bestehen. Die Weisungsbindung wirkt nur im Innenverhältnis."
    },
    e_innenverhaeltnis: {
      station: "ergebnis", kind: "ergebnis", verdict: "warn",
      title: "Konsequenzen im Innenverhältnis",
      text: "Das weisungswidrig handelnde Bundesratsmitglied kann von seiner Landesregierung umgehend abberufen (Art. 51 I 1 GG) und darüber hinaus als Minister/politischer Beamter entlassen werden. Auf die Gültigkeit der abgegebenen Stimmen hat dies keinen Einfluss."
    },
    e_ungueltig: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Uneinheitliche Stimmabgabe – alle Stimmen ungültig",
      text: "Werden die Stimmen eines Landes uneinheitlich abgegeben, verstößt dies gegen Art. 51 III 2 GG – sämtliche Stimmen dieses Landes werden als ungültig gewertet. Ob der Beschluss dennoch zustande kommt, hängt davon ab, ob die erforderliche Mehrheit ohne diese Stimmen erreicht wird."
    },
    e_beschluss: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Beschluss des Bundesrats wirksam",
      text: "Die Stimmen wurden einheitlich abgegeben und die erforderliche Mehrheit (Art. 52 III 1 GG: 35 von 69; bei Verfassungsänderungen Art. 79 II GG: 46 von 69) ist erreicht. Der Beschluss ist wirksam zustande gekommen. Hinweis: In der LV RLP gibt es keine Entsprechung zum Bundesrat."
    },
    e_kein_beschluss: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Beschluss nicht zustande gekommen",
      text: "Die erforderliche Stimmenmehrheit wurde verfehlt. Der Bundesrat hat den Beschluss nicht gefasst – bei Zustimmungsgesetzen scheitert damit das Gesetz (Art. 78 GG)."
    }
  }
});
