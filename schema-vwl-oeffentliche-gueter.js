/*
 * VWL-Schema: Öffentliche Güter & Marktversagen prüfen
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 2.3 (öffentliche Güter, Nichtrivalität,
 *    Nicht-Ausschluss, Trittbrettfahrer, meritorische Güter, Marktversagen)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-oeffentliche-gueter",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Grundlagen des Wirtschaftens",
  title: "Öffentliche Güter & Marktversagen",
  description: "Zweistufige Prüfung wie im Skript: Nichtrivalität im Konsum? Nicht-Ausschluss (Trittbrettfahrer)? Dazu meritorische/demeritorische Güter und die Abgrenzung echtes vs. politisches Marktversagen.",
  start: "start",
  stations: [
    { id: "rivalitaet", label: "Rivalität" },
    { id: "ausschluss", label: "Ausschluss" },
    { id: "folge", label: "Folgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: öffentliches Gut",
    neg: "Diagnose: privates Gut",
    frei: "Diagnose: Sonderfall",
    warn: "Diagnose: Zwischenstand"
  },

  routers: {
    "@auswerten": function (f) {
      if (f.rival === false && f.ausschluss === false) return "q_folge";
      if (f.rival === true && f.ausschluss === true) return "e_privat";
      return "e_misch";
    }
  },

  nodes: {

    start: {
      station: "rivalitaet",
      kind: "frage",
      norm: "Kriterium 1: Rivalität",
      title: "Rivalisiert der Konsum?",
      def: "<b>Nichtrivalität im Konsum</b> liegt vor, wenn<br>• ein Gut von vielen Konsumenten <b>gleichzeitig</b> konsumiert werden kann, ohne dass der Konsum einer anderen Person beeinträchtigt wird, <b>und</b><br>• die Nutzung durch einen weiteren Konsumenten <b>keine weiteren volkswirtschaftlichen Ressourcen</b> verbraucht.<br><br>Beispiele: Deich, Straßenbeleuchtung, Landesverteidigung, städtische Grünanlage (bis zur Überfüllung).",
      options: [
        { label: "Nein – Nichtrivalität", detail: "Zusätzliche Nutzer stören niemanden und kosten nichts extra.", set: { rival: false }, next: "q_ausschluss", tone: "pos" },
        { label: "Ja – Konsum rivalisiert", detail: "Was einer konsumiert, kann kein anderer konsumieren (Brötchen, Arzttermin).", set: { rival: true }, next: "q_ausschluss", tone: "neg" }
      ]
    },

    q_ausschluss: {
      station: "ausschluss",
      kind: "frage",
      norm: "Kriterium 2: Ausschlussprinzip",
      title: "Können Nicht-Zahler vom Konsum ausgeschlossen werden?",
      def: "<b>Nicht-Ausschluss</b> (Versagen des Marktausschlussprinzips) liegt vor, wenn potenzielle Konsumenten nicht von der Nutzung ausgeschlossen werden können – auch dann nicht, wenn sie keinen angemessenen Beitrag zur Finanzierung leisten (<b>„Trittbrettfahrer“</b>).<br><br>Beim <b>privaten Gut</b> wird der Nicht-Zahler dagegen im Regelfall ausgeschlossen (kein Geld → kein Brötchen).",
      options: [
        { label: "Nein – Ausschluss nicht möglich", detail: "Jeder profitiert, ob er zahlt oder nicht (Deich, Straßenbeleuchtung).", set: { ausschluss: false }, next: "@auswerten", tone: "pos" },
        { label: "Ja – Ausschluss möglich", detail: "Zugang lässt sich über Preis/Eintritt/Vertrag steuern.", set: { ausschluss: true }, next: "@auswerten", tone: "neg" }
      ]
    },

    q_folge: {
      station: "folge",
      kind: "frage",
      norm: "Konsequenz",
      title: "Warum stellt der Markt dieses Gut nicht bereit?",
      def: "Beide Kriterien erfüllt → <b>rein öffentliches Gut</b>. Die Konsequenzen laut Skript:<br><br>• Bei <b>Nichtrivalität</b> ist es nicht sinnvoll, Preise zu fordern – zusätzlicher Konsum verbraucht keine Ressourcen.<br>• Bei <b>Nicht-Ausschluss</b> lassen sich Preisforderungen nicht durchsetzen – kein rational handelnder Konsument zahlt für etwas, das er auch gratis bekommt (Trittbrettfahrer).<br>• Also produziert <b>kein privater Unternehmer</b> das Gut → <b>der Staat stellt es bereit</b> (finanziert über Steuern).",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_oeffentlich", tone: "pos" },
        { label: "Und was ist mit Gütern per politischem Beschluss?", next: "e_politisch", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_oeffentlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Rein öffentliches Gut",
      title: "Rein öffentliches Gut – echtes Marktversagen",
      text: "Nichtrivalität im Konsum + Nicht-Ausschluss = rein öffentliches Gut. Der Preismechanismus funktioniert hier nicht → ECHTES Marktversagen. Der Staat stellt das Gut bereit.\n\nEchtes Marktversagen umfasst laut Skript drei Fälle:\n1. rein öffentliche Güter,\n2. externe Effekte (→ Schema 'Externe Effekte & Umweltpolitik'),\n3. Monopole (→ Schema 'Wettbewerbsbeschränkung prüfen (GWB)').\n\nDavon zu trennen: POLITISCHES Marktversagen – der Markt funktioniert zwar, aber seine Ergebnisse sind politisch oder gesellschaftlich nicht akzeptabel (z. B. Verteilungsergebnisse)."
    },

    e_privat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Privates Gut",
      title: "Privates Gut – der Markt funktioniert",
      text: "Rivalität im Konsum + funktionierender Ausschluss = privates Gut. Der Nicht-Zahler wird von der Nutzung ausgeschlossen, der Konsum des einen schließt den des anderen aus. Bereitstellung über den Markt, Preisbildung über Angebot und Nachfrage.\n\nTrotzdem kann der Staat eingreifen, wenn er das Marktergebnis korrigieren will → meritorische Güter: Güter, von denen angenommen wird, dass sie einen größeren Nutzen stiften könnten, als sich in der (bei freier Marktwirtschaft) bestehenden Nachfrage widerspiegelt (z. B. Vorsorgeuntersuchungen, Bildung, Museen). Gegenstück: demeritorische Güter (Tabak, Alkohol) – hier dämpft der Staat den Konsum (Steuern, Verbote)."
    },

    e_misch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Mischfall",
      title: "Mischfall – kein rein öffentliches Gut",
      text: "Nur eines der beiden Kriterien ist erfüllt – das Gut ist kein REIN öffentliches Gut.\n\nTypische Konstellationen:\n• Nichtrivalität, aber Ausschluss möglich (Schwimmbad, Museum, Streaming): Der Markt KANN anbieten; bietet die öffentliche Hand trotzdem an, liegt ein öffentliches Gut aufgrund eines POLITISCHEN BESCHLUSSES vor (häufig zugleich meritorisch).\n• Rivalität, aber kein Ausschluss (übernutzte Gemeinschaftsressourcen wie Fischgründe): Übernutzungsgefahr – der Staat reguliert.\n\nFür die Klausur reicht die Skript-Systematik: rein öffentliche Güter (beide Kriterien erfüllt) und öffentliche Güter per politischem Beschluss."
    },

    e_politisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Politischer Beschluss",
      title: "Öffentliche Güter aufgrund politischen Beschlusses",
      text: "Neben den REIN öffentlichen Gütern (Nichtrivalität + Nicht-Ausschluss) gibt es öffentliche Güter aufgrund eines politischen Beschlusses: Der Staat bietet sie an, obwohl der Markt sie grundsätzlich bereitstellen könnte – etwa ÖPNV, Museen, Volkshochschule, Schwimmbad.\n\nBegründung ist oft ihr meritorischer Charakter: Sie stiften (nach politischer Einschätzung) mehr Nutzen, als die private Nachfrage erkennen lässt. Hier liegt kein echtes, sondern allenfalls politisches Marktversagen vor: Die Wettbewerbsergebnisse sind politisch oder gesellschaftlich nicht akzeptabel."
    }
  }
});
