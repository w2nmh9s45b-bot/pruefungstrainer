/*
 * Prüfungsschema: Unmittelbare Wirkung von Richtlinien, Art. 288 III AEUV
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Europarecht):
 *  - "02. Skript EuropaR FS II 2024_2025" (Breitbach/Jagatic) – V.1. Richtlinien (Fall 24)
 *    Hinweis: Das Skript ist ein Lückenskript; die Prüfungsvoraussetzungen folgen der
 *    gefestigten EuGH-Rechtsprechung (van Duyn, Ratti, Francovich), auf die es verweist.
 *  - Normen verifiziert an AEUV.md und EUV.md
 *
 * Stationen: umsetzung → voraussetzungen → richtung → folgen → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "sr-eur-richtlinie",
  subject: "Staatsrecht / Europarecht",
  area: "Europarecht",
  title: "Richtlinie: unmittelbare Wirkung",
  description: "Kann sich der Bürger direkt auf eine nicht (richtig) umgesetzte Richtlinie berufen? Umsetzungsfrist, inhaltliche Unbedingtheit und Bestimmtheit, Begünstigung (nur vertikal, keine Direktwirkung zulasten Privater) – plus richtlinienkonforme Auslegung und Staatshaftungsanspruch.",
  fs: ["FS2"],
  start: "start",
  stations: [
    { id: "umsetzung", label: "Umsetzung" },
    { id: "voraussetzungen", label: "Voraussetzungen" },
    { id: "richtung", label: "Wirkrichtung" },
    { id: "folgen", label: "Folgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],
  verdictLabels: {
    pos: "Unmittelbare Wirkung (+)",
    neg: "Keine unmittelbare Wirkung",
    frei: "Hinweis",
    warn: "Zwischenstand"
  },

  nodes: {

    start: {
      station: "umsetzung",
      kind: "frage",
      norm: "Art. 288 III AEUV",
      title: "Wurde die Richtlinie ordnungsgemäß und fristgerecht umgesetzt?",
      text: "Obersatz: X könnte sich unmittelbar auf die Richtlinienbestimmung berufen. Grundsätzlich ist die Richtlinie nur für den Mitgliedstaat verbindlich (Art. 288 III AEUV) und wirkt gegenüber dem Bürger erst über das nationale Umsetzungsgesetz.",
      options: [
        { label: "Ja, ordnungsgemäß umgesetzt", next: "e_umgesetzt", tone: "pos" },
        { label: "Nein, gar nicht umgesetzt", next: "q_frist", tone: "warn" },
        { label: "Fehlerhaft/unvollständig umgesetzt", next: "q_frist", tone: "warn" }
      ]
    },

    q_frist: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "Art. 288 III AEUV",
      title: "Ist die Umsetzungsfrist abgelaufen?",
      text: "Erste Voraussetzung der ausnahmsweisen unmittelbaren Wirkung (EuGH): Die in der Richtlinie bestimmte Umsetzungsfrist muss abgelaufen sein – vorher trifft den Mitgliedstaat nur ein Frustrationsverbot (keine Maßnahmen, die das Richtlinienziel ernsthaft gefährden, Art. 4 III EUV).",
      options: [
        { label: "Ja, Frist abgelaufen", next: "q_bestimmt", tone: "pos" },
        { label: "Nein, Frist läuft noch", next: "e_frist_laeuft", tone: "neg" }
      ]
    },

    q_bestimmt: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "EuGH (van Duyn, Ratti)",
      title: "Ist die Bestimmung inhaltlich unbedingt und hinreichend genau?",
      def: "<b>Unbedingt:</b> Die Regelung gilt ohne weitere Bedingungen und lässt den Mitgliedstaaten keinen Umsetzungsspielraum in der Sache. <b>Hinreichend genau:</b> Inhalt, Begünstigte und Verpflichtete lassen sich der Bestimmung selbst entnehmen – sie ist „self-executing“ anwendbar wie eine Norm.",
      options: [
        { label: "Ja, unbedingt und hinreichend bestimmt", next: "q_richtung", tone: "pos" },
        { label: "Nein, Gestaltungsspielraum bleibt", next: "e_unbestimmt", tone: "neg" }
      ]
    },

    q_richtung: {
      station: "richtung",
      kind: "frage",
      norm: "EuGH",
      title: "Wirkrichtung: Wer beruft sich gegen wen?",
      text: "Die unmittelbare Wirkung besteht nur „vertikal“ zugunsten des Bürgers gegenüber dem Staat: Der säumige Mitgliedstaat soll aus seinem Umsetzungsversäumnis keinen Vorteil ziehen. Eine Richtlinie kann dem Einzelnen keine Pflichten auferlegen.",
      options: [
        { label: "Bürger gegen den Staat (begünstigend)", detail: "vertikale Wirkung", next: "e_wirkung", tone: "pos" },
        { label: "Staat gegen den Bürger (belastend)", detail: "umgekehrt vertikal – unzulässig", next: "e_keine_last", tone: "neg" },
        { label: "Privater gegen Privaten", detail: "horizontal – unzulässig", next: "q_konform", tone: "neg" }
      ]
    },

    q_konform: {
      station: "folgen",
      kind: "frage",
      norm: "Art. 4 III EUV, Art. 288 III AEUV",
      title: "Hilft die richtlinienkonforme Auslegung des nationalen Rechts?",
      text: "Zwischen Privaten scheidet die Direktwirkung aus. Nationale Gerichte und Behörden müssen das bestehende nationale Recht aber so weit wie möglich im Lichte von Wortlaut und Zweck der Richtlinie auslegen (Grenze: contra-legem-Auslegung).",
      options: [
        { label: "Ja, nationales Recht ist richtlinienkonform auslegbar", next: "e_konform", tone: "pos" },
        { label: "Nein, Auslegung contra legem nötig", next: "q_haftung", tone: "neg" }
      ]
    },

    q_haftung: {
      station: "folgen",
      kind: "frage",
      norm: "EuGH (Francovich)",
      title: "Unionsrechtlicher Staatshaftungsanspruch?",
      def: "Voraussetzungen (EuGH, Francovich): (1) Die Richtlinie bezweckt, dem Einzelnen <b>Rechte zu verleihen</b>, deren Inhalt bestimmbar ist, (2) <b>hinreichend qualifizierter Verstoß</b> (Nichtumsetzung nach Fristablauf genügt regelmäßig), (3) <b>unmittelbarer Kausalzusammenhang</b> zwischen Verstoß und Schaden.",
      options: [
        { label: "Alle drei Voraussetzungen (+)", next: "e_haftung", tone: "pos" },
        { label: "Eine Voraussetzung fehlt", next: "e_nichts", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_umgesetzt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      kicker: "Reguläre Wirkung",
      title: "Richtlinie wirkt über das Umsetzungsgesetz",
      text: "Die Richtlinie wurde ordnungsgemäß umgesetzt – der Bürger beruft sich auf das nationale Umsetzungsrecht, das richtlinienkonform auszulegen ist. Für eine unmittelbare Wirkung besteht kein Bedürfnis."
    },
    e_frist_laeuft: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine unmittelbare Wirkung – Frist läuft noch",
      text: "Vor Ablauf der Umsetzungsfrist entfaltet die Richtlinie keine unmittelbare Wirkung. Den Mitgliedstaat trifft nur das Frustrationsverbot (Art. 4 III EUV): Er darf das Richtlinienziel nicht ernsthaft gefährden."
    },
    e_unbestimmt: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine unmittelbare Wirkung – nicht hinreichend bestimmt",
      text: "Die Bestimmung ist nicht unbedingt bzw. nicht hinreichend genau – sie belässt dem Mitgliedstaat einen Gestaltungsspielraum und taugt nicht zur unmittelbaren Anwendung. In Betracht kommen richtlinienkonforme Auslegung und Staatshaftung."
    },
    e_wirkung: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      title: "Unmittelbare Wirkung der Richtlinie (+)",
      text: "Alle Voraussetzungen liegen vor: Umsetzungsfrist abgelaufen, keine (ordnungsgemäße) Umsetzung, Bestimmung unbedingt und hinreichend genau, Berufung des Bürgers gegenüber dem Staat. Der Einzelne kann sich unmittelbar auf die Richtlinienbestimmung berufen; entgegenstehendes nationales Recht bleibt unangewendet (Anwendungsvorrang)."
    },
    e_keine_last: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Keine Direktwirkung zulasten des Bürgers",
      text: "Der Staat kann aus einer von ihm nicht umgesetzten Richtlinie keine Pflichten des Bürgers herleiten – die umgekehrt vertikale (belastende) Direktwirkung ist ausgeschlossen. Der säumige Mitgliedstaat darf aus seinem eigenen Versäumnis keinen Vorteil ziehen."
    },
    e_konform: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Mittelbare Wirkung",
      title: "Richtlinienkonforme Auslegung",
      text: "Zwischen Privaten wirkt die Richtlinie mittelbar: Das nationale Recht ist so weit wie möglich im Lichte von Wortlaut und Zweck der Richtlinie auszulegen (Art. 4 III EUV, Art. 288 III AEUV). Damit wird das Richtlinienziel im Ergebnis erreicht, ohne dem Einzelnen unmittelbar Pflichten aufzuerlegen."
    },
    e_haftung: {
      station: "ergebnis", kind: "ergebnis", verdict: "pos",
      kicker: "Staatshaftung",
      title: "Unionsrechtlicher Staatshaftungsanspruch (+)",
      text: "Der Einzelne kann vom säumigen Mitgliedstaat Ersatz des Schadens verlangen, der ihm durch die Nichtumsetzung entstanden ist (EuGH, Francovich): rechtsverleihende Richtlinie, hinreichend qualifizierter Verstoß und Kausalität liegen vor. Durchsetzung vor den nationalen Gerichten."
    },
    e_nichts: {
      station: "ergebnis", kind: "ergebnis", verdict: "neg",
      title: "Kein Anspruch aus der Richtlinie",
      text: "Weder unmittelbare Wirkung noch richtlinienkonforme Auslegung noch Staatshaftung greifen. Dem Einzelnen bleibt nur, auf die Umsetzung hinzuwirken; die Kommission kann ein Vertragsverletzungsverfahren (Art. 258 AEUV) einleiten."
    }
  }
});
