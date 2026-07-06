/*
 * VWL-Schema: Güterart klassifizieren (alle Skript-Klassifikationen in einem Durchlauf)
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 2.3 (Güterarten inkl. Übungsaufgabe Geschäftszentrum)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-gueterarten",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Grundlagen des Wirtschaftens",
  title: "Güterart klassifizieren",
  description: "Ein konkretes Gut (z. B. aus der Skript-Übung: Wellnessbehandlung, städtische Grünanlage, Backzutaten) durch alle Klassifikationen führen: Verfügbarkeit, Beschaffenheit, Verwendungsdauer, Verwendungsort, Interdependenzen – mit vollständigem Klassifikations-Ergebnis.",
  start: "start",
  stations: [
    { id: "verfuegbar", label: "Verfügbarkeit" },
    { id: "beschaffen", label: "Beschaffenheit" },
    { id: "verwendung", label: "Verwendung" },
    { id: "beziehung", label: "Beziehungen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Diagnose: klassifiziert",
    neg: "Diagnose: freies Gut",
    frei: "Diagnose: Hinweis",
    warn: "Diagnose: Zwischenstand"
  },

  routers: {
    "@nach_beschaffenheit": function (f) {
      /* Dienstleistungen sind nicht lagerfähig – die Gebrauchs-/Verbrauchsgut-Frage
         stellt sich nur bei Sachgütern */
      return f.beschaffen === "Dienstleistung" ? "q_verwendungsort" : "q_dauer";
    }
  },

  resultExtras: function (flags) {
    var out = [];
    if (flags.beschaffen) out.push("Beschaffenheit: " + flags.beschaffen);
    if (flags.dauer) out.push("Verwendungsdauer: " + flags.dauer);
    if (flags.ort) out.push("Verwendungsort: " + flags.ort);
    if (flags.bez) out.push("Interdependenz: " + flags.bez);
    return out;
  },

  nodes: {

    start: {
      station: "verfuegbar",
      kind: "frage",
      norm: "Verfügbarkeit",
      title: "Ist das Gut knapp – oder frei verfügbar?",
      def: "<b>Güter</b> sind alle Mittel, die zur Befriedigung menschlicher Bedürfnisse geeignet sind. Gemessen an den Bedürfnissen sind die meisten Güter <b>knapp</b>, weil die Produktionsfaktoren (Arbeit, Umwelt, Kapital) begrenzt sind.<br><br>• <b>Freie Güter</b>: ohne Einsatz von Produktionsfaktoren unbegrenzt verfügbar, kein Preis (z. B. Atemluft, Sonnenlicht).<br>• <b>Wirtschaftliche Güter</b>: knapp, müssen i. d. R. produziert werden, haben einen Preis.",
      options: [
        { label: "Knapp → wirtschaftliches Gut", detail: "Es muss produziert oder bewirtschaftet werden und hat einen Preis.", next: "q_beschaffenheit", tone: "pos" },
        { label: "Unbegrenzt verfügbar → freies Gut", detail: "Kein Produktionsaufwand, kein Preis.", next: "e_frei", tone: "neg" }
      ]
    },

    q_beschaffenheit: {
      station: "beschaffen",
      kind: "frage",
      norm: "Beschaffenheit",
      title: "Sachgut oder Dienstleistung?",
      def: "Klassifikation nach der <b>Beschaffenheit</b>:<br>• <b>Sachgüter</b>: materielle, greifbare Güter (Brötchen, Gartenhaus, Eheringe).<br>• <b>Dienstleistungen</b>: immaterielle Leistungen, Produktion und Verbrauch fallen zusammen (ärztliche Behandlung, Rechtsberatung, VHS-Kurs).",
      options: [
        { label: "Sachgut (materiell)", set: { beschaffen: "Sachgut" }, next: "@nach_beschaffenheit", tone: "neutral" },
        { label: "Dienstleistung (immateriell)", set: { beschaffen: "Dienstleistung" }, next: "@nach_beschaffenheit", tone: "neutral" }
      ]
    },

    q_dauer: {
      station: "beschaffen",
      kind: "frage",
      norm: "Verwendungsdauer",
      title: "Gebrauchsgut oder Verbrauchsgut?",
      def: "Klassifikation nach der <b>Zeitdauer der Verwendung</b> (nur bei Sachgütern sinnvoll):<br>• <b>Gebrauchsgüter</b> (dauerhafte Güter): mehrfach nutzbar (Waschmaschine, Gartenhaus, Kassensystem).<br>• <b>Verbrauchsgüter</b> (nicht dauerhafte Güter): gehen bei der Nutzung unter (Brötchen, Backzutaten, Benzin).",
      options: [
        { label: "Dauerhaft → Gebrauchsgut", set: { dauer: "Gebrauchsgut (dauerhaft)" }, next: "q_verwendungsort", tone: "neutral" },
        { label: "Wird verbraucht → Verbrauchsgut", set: { dauer: "Verbrauchsgut (nicht dauerhaft)" }, next: "q_verwendungsort", tone: "neutral" }
      ]
    },

    q_verwendungsort: {
      station: "verwendung",
      kind: "frage",
      norm: "Verwendungsort",
      title: "Konsumgut oder Produktionsgut?",
      def: "Klassifikation nach dem <b>Verwendungsort</b>:<br>• <b>Konsumgüter</b>: dienen unmittelbar der Bedürfnisbefriedigung der privaten Haushalte (Müsli-Brötchen, Baby-Schnuller, Eheringe).<br>• <b>Produktionsgüter</b> (Investitionsgüter): werden im Produktionsprozess von Unternehmen eingesetzt (Backzutaten für Bäckereien, Kassensysteme, Maschinen).<br><br><i>Achtung Skript-Übung: Dasselbe Gut kann je nach Verwender beides sein – Mehl im Haushalt = Konsumgut, Mehl in der Bäckerei = Produktionsgut!</i>",
      options: [
        { label: "Konsumgut (privater Endverbrauch)", set: { ort: "Konsumgut" }, next: "q_beziehung", tone: "neutral" },
        { label: "Produktionsgut (Einsatz im Unternehmen)", set: { ort: "Produktionsgut/Investitionsgut" }, next: "q_beziehung", tone: "neutral" }
      ]
    },

    q_beziehung: {
      station: "beziehung",
      kind: "frage",
      norm: "Interdependenzen",
      title: "Steht das Gut in Beziehung zu anderen Gütern?",
      def: "Klassifikation nach den <b>Interdependenzen</b>:<br>• <b>Substitutionsgüter</b>: können einander ersetzen (Butter ↔ Margarine, Bahn ↔ Auto).<br>• <b>Komplementärgüter</b>: ergänzen einander, werden zusammen nachgefragt (Drucker + Toner, Auto + Benzin).<br><br><i>Wichtig für die Kreuzpreiselastizität: Preis des einen ändert die Nachfrage nach dem anderen → Schema 'Elastizitäten'.</i>",
      options: [
        { label: "Ersetzt ein anderes Gut → Substitutionsgut", set: { bez: "Substitutionsgut" }, next: "q_oeffentlich", tone: "neutral" },
        { label: "Ergänzt ein anderes Gut → Komplementärgut", set: { bez: "Komplementärgut" }, next: "q_oeffentlich", tone: "neutral" },
        { label: "Keine besondere Beziehung", set: { bez: "keine (unabhängiges Gut)" }, next: "q_oeffentlich", tone: "neutral" }
      ]
    },

    q_oeffentlich: {
      station: "beziehung",
      kind: "frage",
      norm: "Ausschließbarkeit & Rivalität",
      title: "Privates oder öffentliches Gut?",
      def: "Die letzte Klassifikation (nach <b>Ausschließbarkeit und Rivalität</b>) entscheidet, ob der Markt das Gut bereitstellen kann:<br>• <b>Privates Gut</b>: Nicht-Zahler werden ausgeschlossen, Konsum rivalisiert.<br>• <b>Öffentliches Gut</b>: Nichtrivalität + Nicht-Ausschluss (z. B. städtische Grünanlage, Deich).<br><br>Die genaue Prüfung mit Trittbrettfahrer-Problem und Marktversagen übernimmt das eigene Schema <b>'Öffentliche Güter & Marktversagen'</b>.",
      options: [
        { label: "Privates Gut – Klassifikation abschließen", next: "e_klassifiziert", tone: "pos" },
        { label: "Könnte öffentlich/meritorisch sein – Hinweis mitnehmen", next: "e_oeffentlich_hinweis", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_klassifiziert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Wirtschaftliches Gut",
      title: "Gut vollständig klassifiziert",
      text: "Das wirtschaftliche Gut ist nach allen Skript-Kriterien eingeordnet (siehe unten).\n\nSo läuft auch die Skript-Übung 'Geschäftszentrum': Jedes Angebot (Wellnessbehandlung, VHS-Kurs, Eheringe, ärztliche Behandlung, Gartenhäuser, Backzutaten, Grünanlage, Müsli-Brötchen, Baby-Schnuller, Rechtsberatung, Kassensysteme, Kreditberatung) wird der Reihe nach klassifiziert: verfügbar → Beschaffenheit → Dauer → Verwendungsort → Interdependenz → privat/öffentlich.\n\nZusatzkategorien nach Wohlfahrtswirkung: meritorische Güter (stiften mehr Nutzen, als die Nachfrage zeigt – z. B. Vorsorgeuntersuchung) und demeritorische Güter (Gegenteil – z. B. Tabak) → Schema 'Öffentliche Güter & Marktversagen'."
    },

    e_oeffentlich_hinweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "Weiterprüfen",
      title: "Verdacht: öffentliches oder meritorisches Gut",
      text: "Die Grundklassifikation steht (siehe unten) – aber ob wirklich ein öffentliches Gut vorliegt, entscheiden zwei Kriterien: Nichtrivalität im Konsum und Nicht-Ausschluss (Versagen des Marktausschlussprinzips).\n\nPrüfe jetzt das Schema 'Öffentliche Güter & Marktversagen': Dort klärst du Trittbrettfahrer-Problem, echtes vs. politisches Marktversagen und die meritorischen Güter.\n\nSkript-Beispiel: Die städtische Grünanlage ist das klassische öffentliche Gut der Übungsaufgabe."
    },

    e_frei: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Freies Gut",
      title: "Freies Gut – keine weitere Klassifikation",
      text: "Freie Güter sind unbegrenzt verfügbar, ohne Produktionsaufwand und ohne Preis. Sie sind kein Gegenstand des Wirtschaftens – die weiteren Klassifikationen (Sachgut/Dienstleistung usw.) gelten nur für wirtschaftliche Güter.\n\nMerke: Die Einordnung kann kippen! Sauberes Trinkwasser oder Bauland sind längst wirtschaftliche Güter; auch 'Luft' wird über Emissionsrechte teilweise bewirtschaftet."
    }
  }
});
