/*
 * IK-Schema: Vier Seiten einer Nachricht – interaktiver Nachrichten-Analysator
 * Fach: Interaktion und Kommunikation (FS 1)
 * Tool-Knoten: Aussage wählen (Ampel-Klassiker + Übungsfälle aus dem Lehrbrief),
 * dann die vier Seiten einzeln aufdecken – Nachrichtenanalyse zum Anfassen.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - OLE02 LV09 GrundlagenKommunikation (Kommunikationsquadrat, Ampel-Beispiel,
 *    explizite/implizite Botschaften, Nachrichtenanalyse, Übungstabelle nach Plate)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-vier-seiten",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Kommunikationsmodelle",
  title: "Vier Seiten einer Nachricht (Analysator)",
  description: "Schulz von Thuns Kommunikationsquadrat interaktiv: Aussage wählen, die vier Seiten (Sache, Selbstkundgabe, Beziehung, Appell) einzeln aufdecken – mit dem Ampel-Klassiker und den Übungsfällen des Lehrbriefs.",
  start: "start",
  stations: [
    { id: "modell", label: "Quadrat" },
    { id: "analyse", label: "Analysator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Analyse steht",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modell",
      kind: "frage",
      norm: "Kommunikationsquadrat",
      title: "Eine Äußerung – vier Botschaften",
      def: "Schulz von Thun (aufbauend auf Watzlawicks 2. Axiom und Bühlers Organon-Modell): Jede Äußerung enthält <b>vier Typen von Botschaften</b> gleichzeitig – deshalb ist Kommunikation „so kompliziert und störanfällig, aber auch so aufregend“:<br><br>• <b>Sachinhalt</b>: Worüber informiere ich?<br>• <b>Selbstkundgabe</b>: Was gebe ich von mir preis? (Ich-Botschaften – gewollte Selbstdarstellung UND unfreiwillige Selbstenthüllung)<br>• <b>Beziehung</b>: Was halte ich von dir, wie stehen wir zueinander? (Du- und Wir-Botschaften – hier hat der Empfänger das empfindlichste Ohr)<br>• <b>Appell</b>: Wozu möchte ich dich veranlassen? (offen oder versteckt = Manipulation)<br><br>Die Quadratform zeigt: Alle vier Seiten sind prinzipiell <b>gleichrangig</b>. Aufgaben des Modells: Sensibilisierung + Repertoire-Erweiterung.",
      options: [
        { label: "Zum Analysator: Aussagen zerlegen", next: "q_analyse", tone: "pos" }
      ]
    },

    q_analyse: {
      station: "analyse",
      kind: "frage",
      norm: "Nachrichtenanalyse",
      title: "Decke die vier Seiten auf!",
      def: "Wähle eine Aussage und tippe dann auf die Seiten des Quadrats. Überlege VORHER selbst, was auf der Seite stecken könnte – es gibt viele plausible Deutungen, nicht die eine richtige:",
      tool: '<div class="tool"><div class="tool-title">🗣 Nachrichten-Analysator</div>' +
        '<div class="tool-row"><button type="button" class="tool-preset" id="vs-a0">Ampel-Klassiker</button><button type="button" class="tool-preset" id="vs-a1">Früh Schluss?</button><button type="button" class="tool-preset" id="vs-a2">Macht nichts aus?</button></div>' +
        '<div class="tool-row"><button type="button" class="tool-preset" id="vs-a3">Fall Meyer</button><button type="button" class="tool-preset" id="vs-a4">Aktenstapel</button></div>' +
        '<div class="tool-read" id="vs-satz" style="font-weight:700">…</div>' +
        '<div class="tool-row"><button type="button" class="tool-preset" id="vs-s1">📋 Sachinhalt</button><button type="button" class="tool-preset" id="vs-s2">💭 Selbstkundgabe</button></div>' +
        '<div class="tool-row"><button type="button" class="tool-preset" id="vs-s3">🤝 Beziehung</button><button type="button" class="tool-preset" id="vs-s4">👉 Appell</button></div>' +
        '<div class="tool-read" id="vs-out">Erst eine Aussage wählen, dann Seiten aufdecken.</div></div>',
      setup: function (root) {
        var faelle = [
          { satz: "Der Mann zur Frau am Steuer: „Du, da vorne ist grün!“", s: "Die Ampel steht auf Grün.", k: "Ich habe es eilig – und ich bin wach und innerlich dabei.", b: "Ich traue dir nicht recht zu, ohne meine Hilfe optimal zu fahren (Du-Botschaft: hilfsbedürftig).", a: "Gib ein bisschen Gas, dann schaffen wir es noch bei Grün!" },
          { satz: "Der Chef zum Mitarbeiter: „Sie machen heute aber früh Schluss!“", s: "Sie beenden die Arbeit heute früher als üblich.", k: "Ich hätte auch gern frei.", b: "Du bist faul.", a: "Bleib noch länger." },
          { satz: "Die Chefin zur Mitarbeiterin: „Das macht Ihnen doch nichts aus, oder?“", s: "Es gibt eine zusätzliche Aufgabe zu übernehmen.", k: "Ich höre (angeblich) auf deine Befindlichkeiten.", b: "Du bist eine pflichtbewusste Mitarbeiterin.", a: "Sag bloß nicht „Doch!“ – eine ambivalente Botschaft." },
          { satz: "Kollegin zu Kollegin: „Hast du den Fall Meyer schon bearbeitet?“", s: "Es geht um den Bearbeitungsstand des Falls Meyer.", k: "Ich bin nicht auf dem aktuellen Stand.", b: "Du bist für den Fall Meyer verantwortlich.", a: "Sage mir bitte, wie der aktuelle Stand ist." },
          { satz: "Kollege zu Kollege: „Auf deinem Schreibtisch stapeln sich aber auch die Akten!“", s: "Auf dem Schreibtisch liegen viele unerledigte Akten.", k: "Ich fühle mich ungerecht behandelt (ich stresse mich, wo du schlampst).", b: "Du lässt dir aber Zeit.", a: "Arbeite doch effizienter." }
        ];
        var akt = null, offen = {};
        var satzEl = root.querySelector("#vs-satz"), out = root.querySelector("#vs-out");
        function zeige() {
          if (!akt) return;
          var teile = [];
          if (offen.s) teile.push("📋 <b>Sachinhalt:</b> " + akt.s);
          if (offen.k) teile.push("💭 <b>Selbstkundgabe:</b> " + akt.k);
          if (offen.b) teile.push("🤝 <b>Beziehung:</b> " + akt.b);
          if (offen.a) teile.push("👉 <b>Appell:</b> " + akt.a);
          if (!teile.length) { out.innerHTML = "Jetzt die Seiten aufdecken – erst selbst überlegen!"; return; }
          var txt = teile.join("<br>");
          if (offen.s && offen.k && offen.b && offen.a) {
            txt += '<br><span class="tool-flag ok">✓ Komplette Nachrichtenanalyse</span> Alle vier Seiten expliziert – genau das verlangt die Klausuraufgabe „Nachrichtenanalyse“.';
          }
          out.innerHTML = txt;
        }
        function waehle(i) {
          akt = faelle[i];
          offen = {};
          satzEl.innerHTML = akt.satz;
          zeige();
        }
        ["vs-a0", "vs-a1", "vs-a2", "vs-a3", "vs-a4"].forEach(function (id, i) {
          root.querySelector("#" + id).addEventListener("click", function () { waehle(i); });
        });
        root.querySelector("#vs-s1").addEventListener("click", function () { offen.s = true; zeige(); });
        root.querySelector("#vs-s2").addEventListener("click", function () { offen.k = true; zeige(); });
        root.querySelector("#vs-s3").addEventListener("click", function () { offen.b = true; zeige(); });
        root.querySelector("#vs-s4").addEventListener("click", function () { offen.a = true; zeige(); });
        waehle(0);
      },
      hint: "Merkhilfe: Selbstkundgabe = Ich-Botschaften, Beziehung = Du- und Wir-Botschaften. Beim Ampel-Beispiel richtet sich der barsche Konter der Frau („Fährst du oder fahre ich?“) nicht gegen die Sache, sondern gegen die Beziehungsbotschaft!",
      options: [
        { label: "Explizit oder implizit – was ist der Unterschied?", next: "e_explizit", tone: "pos" },
        { label: "Analyse verstanden – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_explizit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Explizit/implizit",
      title: "Explizite und implizite Botschaften – und das Nicht-Gesagte",
      text: "In der Regel tritt EINE Seite offen hervor (explizite Botschaft), die anderen bleiben verdeckt (implizit) und müssen herausgehört werden: Bei „Räum dein Zimmer auf!“ ist der Appell explizit; implizit schwingen mit „Es ist unordentlich“ (Sache), „Du bist schlampig“ (Beziehung), „Ich mag es ordentlich“ (Selbstkundgabe). Bei „Es ist unordentlich hier“ ist es genau umgekehrt.\n\nWichtig: Die HAUPTbotschaft wird oft implizit gesendet – über nonverbale Signale (Harfen-Metapher: Ein „schräger Unterton“ macht den Vierklang zum Missklang).\n\nGrenze des Modells (laut Schulz von Thun selbst): Es analysiert nur die tatsächlich gemachte Äußerung. Oft ist aber das NICHT-Gesagte bedeutsamer – der Empfänger empfängt „zwei Quadrate“: das der tatsächlichen und das der erwarteten, aber unterlassenen Äußerung."
    },

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Nachrichtenanalyse",
      title: "Nachrichtenanalyse: das Steuerungsinstrument für gelungene Kommunikation",
      text: "Die Nachrichtenanalyse expliziert die impliziten Bestandteile einer Äußerung – alle vier Seiten werden durchleuchtet. Es gibt dabei viele PLAUSIBLE Deutungen, nicht die eine richtige; entscheidend ist die nachvollziehbare Begründung.\n\nBewertung des Modells (Halla-Heißen & Saremba): Das Wissen um die vier Seiten gibt Sender UND Empfänger ein machtvolles Steuerungsinstrument an die Hand – wer weiß, dass er nie nur auf der Sachebene sendet, gestaltet schwierige Situationen bewusster und erlebt seltener das „Das habe ich doch gar nicht so gemeint!“. Die fehlende strenge empirische Prüfung wird kritisiert, dem Modell aber Plausibilität und hoher Praxisnutzen bescheinigt.\n\nWie der Empfänger einseitig hören kann → Schema „Empfangsgewohnheiten: das übergroße Ohr“."
    }
  }
});
