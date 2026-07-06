/*
 * IK-Schema: Watzlawick-Axiom bestimmen (5 Grundsätze der Kommunikation)
 * Fach: Interaktion und Kommunikation (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - OLE02 LV09 GrundlagenKommunikation (allgemeines Kommunikationsmodell,
 *    fünf Axiome mit Verwaltungsbeispielen nach Halla-Heißen & Saremba)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-axiome",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Kommunikationsmodelle",
  title: "Watzlawick: Axiom bestimmen",
  description: "Man kann nicht nicht kommunizieren – aber welches der fünf Axiome passt zum Fall? Vom allgemeinen Kommunikationsmodell (6 Bestandteile) zu den fünf Grundsätzen mit Verwaltungsbeispielen.",
  start: "start",
  stations: [
    { id: "modell", label: "Grundmodell" },
    { id: "axiom", label: "Axiome" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Axiom bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modell",
      kind: "frage",
      norm: "6 Bestandteile",
      title: "Erst das Grundgerüst: Wann liegt überhaupt Kommunikation vor?",
      def: "Das <b>allgemeine Kommunikationsmodell</b> nennt sechs Bestandteile:<br>1. Sender und Empfänger<br>2. eine Nachricht (sachliche Information)<br>3. ein gemeinsames Zeichensystem/<b>Code</b> (enkodieren ↔ dekodieren)<br>4. die Fähigkeit beider zur De-/Enkodierung (wach, aufmerksam)<br>5. ein <b>Kanal</b> (visuell, akustisch …)<br>6. ein <b>Kontext</b><br><br>WIE sich Kommunikation abspielt, beschreiben darauf aufbauend die fünf <b>Axiome</b> (beweislos vorausgesetzte Grundsätze, die in JEDER Kommunikationssituation gelten) von Watzlawick, Beavin und Jackson.",
      options: [
        { label: "Zum Fall: Welches Axiom ist einschlägig?", next: "q_axiom", tone: "pos" }
      ]
    },

    q_axiom: {
      station: "axiom",
      kind: "frage",
      norm: "5 Axiome",
      title: "Was beschreibt der Fall im Kern?",
      def: "Ordne die Situation dem passenden Grundsatz zu:",
      options: [
        { label: "Auch Schweigen/Wegsehen wird gedeutet", next: "e_ax1", tone: "pos" },
        { label: "Der Ton macht die Musik: Sache + Beziehung", next: "e_ax2", tone: "pos" },
        { label: "Beide sehen sich als Reagierende (Teufelskreis)", next: "e_ax3", tone: "pos" },
        { label: "Worte sagen A, Körpersprache sagt B", next: "e_ax4", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_ax1: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Axiom 1",
      title: "Man kann nicht nicht kommunizieren",
      text: "Alles, was wir tun, wird gedeutet – sogar Nichtstun, wenn es als Unterlassung oder Absicht verstanden wird (Heringer).\n\nVerwaltungsbeispiele des Skripts: Der Mitarbeiter geht nicht ans Telefon, als er die Chef-Durchwahl im Display sieht; die Mitarbeiterin am Infoschalter wendet sich ab, als eine Bürgerin die Halle betritt. Beides sendet Botschaften, ob gewollt oder nicht.\n\nKonsequenz für die Verwaltungspraxis: Auch Nicht-Reagieren (liegen gelassene Anträge, ausbleibende Rückrufe) kommuniziert – nämlich Desinteresse oder Geringschätzung. Wer das weiß, gestaltet auch sein „Schweigen“ bewusst."
    },

    e_ax2: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Axiom 2",
      title: "Inhalts- und Beziehungsaspekt – die Beziehung bestimmt die Bedeutung",
      text: "Jede Kommunikation hat einen Inhalts- UND einen Beziehungsaspekt: Neben dem sachlichen Gehalt schwingt immer mit, wie die Beziehung zwischen den Partnern gesehen wird – und die Beziehung bestimmt die inhaltliche Bedeutung.\n\nSkript-Beispiel: „Haben Sie das Gutachten tatsächlich ganz allein geschrieben?“ – freundlich lächelnd gefragt ist es Hochachtung, ohne Blickkontakt und abgewandt Misstrauen.\n\nVeranschaulichung: das EISBERGMODELL – der Sachinhalt ist die sichtbare Spitze, der (größere) Beziehungsteil liegt unter der Wasseroberfläche. Auf diesem Axiom baut das Kommunikationsquadrat von Schulz von Thun auf → Schema „Vier Seiten einer Nachricht (Analysator)“."
    },

    e_ax3: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Axiom 3",
      title: "Interpunktion: Kommunikation ist Ursache und Wirkung",
      text: "Die Beteiligten teilen den Kommunikationsverlauf unterschiedlich in Ursache und Wirkung ein (Interpunktion): Was für die eine Person die Ursache ist, ist für die andere die Wirkung – und umgekehrt.\n\nSkript-Beispiel (Schulz von Thun): Herr Neuchef leidet unter der „zickigen“ Frau Mundauf, die „auf Opposition macht“; Frau Mundauf leidet unter dem autoritären, herabsetzenden Chef und „macht deshalb den Mund auf“. Jeder Teufelskreis hat zwei subjektive Varianten – jede Seite sieht sich nur als Reagierende.\n\nKonsequenz: Wer den Teufelskreis erkennt, kann ihn AUFLÖSEN, statt über den „Anfang“ zu streiten – z. B. per Metakommunikation („Wie kommunizieren wir hier eigentlich miteinander?“)."
    },

    e_ax4: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Axiome 4 + 5",
      title: "Digital/analog – und symmetrisch/komplementär",
      text: "AXIOM 4: Kommunikation erfolgt digital UND analog. Für unsere Zwecke: digital = verbal (vermittelt den Inhaltsaspekt; bei gemeinsamem Zeichenvorrat relativ eindeutig), analog = nonverbal (vermittelt den Beziehungsaspekt: Blick, Gestik, Mimik, Haltung, Berührung, Nähe/Distanz, Paralinguistik, Selbstdarstellungsmittel, Raum). Nonverbales braucht Zusatzinformationen zur korrekten Deutung – Skript-Beispiel: der zurückgelehnte Kollege mit den Armen hinterm Kopf und Blick aufs Handy sendet, ob er will oder nicht.\n\nAXIOM 5: Kommunikation verläuft SYMMETRISCH (Beziehung auf Gleichheit, „Augenhöhe“, spiegelbildliche Redeanteile – zwei Kolleginnen stimmen ihre Beiträge ab) oder KOMPLEMENTÄR (Unterschiedlichkeit: übergeordnete und untergeordnete Position ergänzen sich – Vorgesetzter bittet um Vermerk bis Termin). Wichtig: komplementär heißt nicht besser/schlechter; mit dem Rollenwechsel ändert sich die Beziehung."
    }
  }
});
