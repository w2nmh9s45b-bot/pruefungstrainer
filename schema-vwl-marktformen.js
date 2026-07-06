/*
 * VWL-Schema: Marktform & Verhaltensweise bestimmen
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 8.1, 8.2 (Marktformen, vollkommener Markt,
 *    Marktform und Verhaltensweise)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-marktformen",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1", "FS2"],
  area: "Wettbewerb & Marktformen",
  title: "Marktform & Verhaltensweise",
  description: "Polypol, Oligopol oder Monopol? Über die Anbieterzahl zur Marktform, dann zur typischen Verhaltensweise (Anpassung, Strategie, Preisfixierer) – und der Check: vollkommener oder unvollkommener Markt?",
  start: "start",
  stations: [
    { id: "markt", label: "Markt" },
    { id: "form", label: "Marktform" },
    { id: "verhalten", label: "Verhalten" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Einordnung: bestimmt",
    neg: "Einordnung: Extremfall",
    frei: "Einordnung: Hinweis",
    warn: "Einordnung: Zwischenstand"
  },

  nodes: {

    start: {
      station: "markt",
      kind: "frage",
      norm: "Markt",
      title: "Um welchen Markt geht es – und wie vollkommen ist er?",
      def: "<b>Markt</b> = ökonomischer (gedanklicher) Ort, an dem Angebot und Nachfrage zusammentreffen (Wochenmarkt, Börse, Internet …). Unterscheidungen: nach <b>Marktobjekt</b> (Güter-, Faktor-, Devisenmarkt), <b>Marktzugang</b> (offen/beschränkt/geschlossen), <b>Marktlage</b> (Käufermarkt/Verkäufermarkt), <b>Vollkommenheitsgrad</b> und <b>Anbieterzahl</b>.<br><br>Ein Markt ist <b>vollkommen</b>, wenn: 1) <b>homogene</b> Güter, 2) vollständige <b>Markttransparenz</b>, 3) <b>keine Präferenzen</b> (räumlich, zeitlich, persönlich), 4) <b>unendlich schnelle Reaktion</b>. Fehlt eine Bedingung → unvollkommener Markt.",
      options: [
        { label: "Alle 4 Bedingungen erfüllt → vollkommener Markt", detail: "In der Realität kommt nur die Börse dem Modell nahe.", next: "q_anzahl", tone: "pos" },
        { label: "Mindestens eine Bedingung fehlt → unvollkommener Markt", detail: "Der Regelfall in der Realität.", next: "q_anzahl", tone: "warn" }
      ]
    },

    q_anzahl: {
      station: "form",
      kind: "frage",
      norm: "Anbieterzahl & Marktanteil",
      title: "Wie viele Anbieter teilen sich den Markt?",
      def: "Klassifikation nach <b>Anzahl und Marktanteil</b> (Angebotsseite – dort lag der Forschungsschwerpunkt; zunehmend interessiert aber auch Nachfragemacht, insbesondere im Handel):<br><br>• <b>Polypol</b>: viele kleine Anbieter<br>• <b>Oligopol</b>: wenige Anbieter<br>• <b>Monopol</b>: ein Anbieter",
      options: [
        { label: "Viele kleine Anbieter → Polypol", set: { form: "Polypol" }, next: "e_polypol", tone: "neutral" },
        { label: "Wenige Anbieter → Oligopol", set: { form: "Oligopol" }, next: "q_oligopol", tone: "neutral" },
        { label: "Ein Anbieter → Monopol", set: { form: "Monopol" }, next: "e_monopol", tone: "neutral" }
      ]
    },

    q_oligopol: {
      station: "verhalten",
      kind: "frage",
      norm: "Oligopol: Strategie",
      title: "Wie verhalten sich die Oligopolisten zueinander?",
      def: "Im <b>Oligopol</b> beobachten sich die wenigen Anbieter gegenseitig – ihre Verhaltensweise ist <b>Strategie</b> (nicht bloße Anpassung). Drei Grundmuster:<br><br>• <b>defensiv (friedlich)</b>: Preisfriede, Preisführerschaft, Nichtpreiswettbewerb – Ziel: Erhaltung der Marktanteile<br>• <b>defensiv (kooperativ)</b>: Fusion, Konzern, Kartell, Absprache – Ziel: Gewinnmaximierung durch Kooperation<br>• <b>offensiv (kämpferisch)</b>: Preiswettbewerb, starker Nichtpreiswettbewerb – Ziel: Marktverdrängung",
      options: [
        { label: "Friedlich: Preisfriede / Preisführerschaft", set: { verhalten: "defensiv-friedlich" }, next: "e_oligopol", tone: "neutral" },
        { label: "Kooperativ: Absprache / Kartell / Fusion", detail: "Achtung: kartellrechtliche Grenzen!", set: { verhalten: "defensiv-kooperativ" }, next: "e_oligopol_kartell", tone: "warn" },
        { label: "Kämpferisch: Preiskampf / Verdrängung", set: { verhalten: "offensiv" }, next: "e_oligopol", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_polypol: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Polypol",
      title: "Polypol: Anpassung an den Marktpreis",
      text: "Viele kleine Anbieter – kein einzelner kann den Preis beeinflussen. Verhaltensweise: ANPASSUNG (Mengenanpasser): Der Anbieter nimmt den Marktpreis als gegeben und passt nur seine Menge an.\n\nLiegt zusätzlich ein VOLLKOMMENER Markt vor (homogen, transparent, präferenzfrei, unendlich schnelle Reaktion), spricht man von VOLLSTÄNDIGER KONKURRENZ – das Modell, in dem sich der Gleichgewichtspreis idealtypisch bildet (→ Schema 'Marktgleichgewicht & Preisbildung (Simulator)').\n\nJe näher ein realer Markt diesem Ideal kommt, desto besser erfüllt der Preis seine Funktionen (Information, Ausgleich, Signal, Lenkung, Erziehung)."
    },

    e_oligopol: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Oligopol",
      title: "Oligopol: strategisches Verhalten",
      text: "Wenige Anbieter mit spürbarer gegenseitiger Abhängigkeit – jede Preisaktion provoziert Reaktionen der Konkurrenten. Typische Muster:\n\n• defensiv-friedlich: Preisfriede, Preisführerschaft (einer setzt den Preis, die anderen folgen), Ausweichen auf NICHTPREISWETTBEWERB (Werbung, Qualität, Service) – Ziel: Marktanteile erhalten.\n• offensiv-kämpferisch: Preiswettbewerb bis zum Verdrängungskampf – Ziel: Marktverdrängung.\n\nBeispiele: Mineralölkonzerne, Mobilfunkanbieter, Lebensmitteleinzelhandel.\n\nDie kooperative Variante (Kartell, Absprachen) ist kartellrechtlich verboten → eigenes Ergebnis."
    },

    e_oligopol_kartell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Oligopol → § 1 GWB",
      title: "Kooperatives Oligopol: Kartellgefahr!",
      text: "Gewinnmaximierung durch Kooperation (Absprache, Kartell) oder Zusammenschluss (Fusion, Konzern) ist die defensive-kooperative Strategie des Oligopols – und genau hier greift das Wettbewerbsrecht:\n\n• Absprachen/Kartelle → Kartellverbot § 1 GWB,\n• Zusammenschlüsse → Fusionskontrolle §§ 35 ff. GWB.\n\nPrüfe weiter im Schema 'Wettbewerbsbeschränkung prüfen (GWB)'.\n\nMerke: Marktform beschreibt die STRUKTUR, das GWB bewertet das VERHALTEN – ein Oligopol ist als solches legal, die Absprache nicht."
    },

    e_monopol: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Monopol",
      title: "Monopol: Preis- oder Mengenfixierer",
      text: "Ein einziger Anbieter beherrscht den Markt. Verhaltensweise: PREIS-/MENGENFIXIERER – der Monopolist setzt entweder den Preis oder die Menge (nicht beides zugleich; die Nachfragekurve setzt die Grenze).\n\nProbleme: keine Kontrolle durch Konkurrenz, Gefahr überhöhter Preise, verminderte Innovationsanreize – Monopole zählen zum ECHTEN Marktversagen.\n\nStaatliche Antworten: Missbrauchsaufsicht (§§ 18, 19 GWB – Vermutung der Marktbeherrschung ab 40 % Marktanteil), Regulierung natürlicher Monopole (Netze: Strom, Schiene, Wasser), teils staatliche Bereitstellung.\n\nWeiter im Schema 'Wettbewerbsbeschränkung prüfen (GWB)'."
    }
  }
});
