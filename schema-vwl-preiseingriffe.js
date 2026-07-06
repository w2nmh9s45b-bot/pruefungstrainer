/*
 * VWL-Schema: Staatliche Preiseingriffe – Höchst-/Mindestpreis-Simulator
 * Fach: Volkswirtschaftslehre (Fachstudium 1/2)
 * Tool-Knoten: gleicher Modellmarkt wie im Gleichgewichts-Simulator; der Slider setzt
 * den staatlichen Preis und zeigt live den entstehenden Überhang und ob der Eingriff
 * überhaupt wirksam ist.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 8.5.3 (direkte staatliche Eingriffe in die
 *    Preisbildung: Höchst-, Mindest-, Festpreise, Folgen und Kritik)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-preiseingriffe",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1", "FS2"],
  area: "Preisbildung & Elastizität",
  title: "Staatliche Preiseingriffe (Simulator)",
  description: "Höchstpreis, Mindestpreis oder Festpreis? Mit dem Slider den staatlichen Preis setzen und live sehen: Wann ist der Eingriff wirksam, welcher Überhang entsteht, wie wird verteilt – und was ist die ökonomische Kritik?",
  start: "start",
  stations: [
    { id: "eingriff", label: "Eingriffsart" },
    { id: "simulator", label: "Simulator" },
    { id: "folgen", label: "Folgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Analyse: abgeschlossen",
    neg: "Analyse: Eingriff wirkungslos",
    frei: "Analyse: Hinweis",
    warn: "Analyse: Zwischenstand"
  },

  nodes: {

    start: {
      station: "eingriff",
      kind: "frage",
      norm: "Direkte Preisbeeinflussung",
      title: "Wie greift der Staat in die Preisbildung ein?",
      def: "Bei der <b>direkten Preisbeeinflussung</b> tritt der Staat nicht als Marktteilnehmer auf, sondern greift direkt in den Preisbildungsmechanismus ein und setzt die <b>Preisfunktionen außer Kraft</b>. Möglichkeiten:<br><br>• <b>Höchstpreis</b>: Obergrenze – Schutz der <b>Verbraucher</b> (wirksam nur UNTER dem Gleichgewichtspreis)<br>• <b>Mindestpreis</b>: Untergrenze – Schutz der <b>Anbieter</b> (wirksam nur ÜBER dem Gleichgewichtspreis)<br>• <b>Festpreis</b>: Preis wird komplett fixiert",
      options: [
        { label: "Höchstpreis analysieren", detail: "z. B. Mietpreisbremse, Preisdeckel in Krisenzeiten", next: "q_hoechst", tone: "neutral" },
        { label: "Mindestpreis analysieren", detail: "z. B. Agrar-Mindestpreise, Mindestlohn als Preis der Arbeit", next: "q_mindest", tone: "neutral" },
        { label: "Festpreis nachschlagen", detail: "z. B. Buchpreisbindung, Gebührenordnungen", next: "e_festpreis", tone: "neutral" }
      ]
    },

    q_hoechst: {
      station: "simulator",
      kind: "frage",
      norm: "Höchstpreis",
      title: "Setze den Höchstpreis – was passiert am Markt?",
      def: "Modellmarkt wie im Gleichgewichts-Simulator (x<sub>N</sub> = 100 − 10p, x<sub>A</sub> = 15p − 25, p* = 5 €). Höchstpreise dienen dem Schutz der Verbraucher und werden insbesondere in <b>Inflations-, Mangel- und Krisensituationen</b> eingeführt. Sie sind nur wirksam, wenn sie <b>unter</b> dem Gleichgewichtspreis liegen.",
      tool: '<div class="tool"><div class="tool-title">🎛 Höchstpreis festlegen</div>' +
        '<div class="tool-row"><label for="hp-p">Höchstpreis (€)</label><span class="tool-val" id="hp-pv">3,50 €</span></div>' +
        '<input type="range" id="hp-p" min="2" max="7" step="0.05" value="3.5">' +
        '<div class="tool-read" id="hp-out">…</div></div>',
      setup: function (root) {
        var sp = root.querySelector("#hp-p"), pv = root.querySelector("#hp-pv"), out = root.querySelector("#hp-out");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function upd() {
          var p = parseFloat(sp.value);
          pv.textContent = f2(p) + " €";
          var xn = Math.max(0, 100 - 10 * p), xa = Math.max(0, 15 * p - 25);
          if (p >= 5) {
            out.innerHTML = '<span class="tool-flag mid">WIRKUNGSLOS</span> Der Höchstpreis liegt auf/über dem Gleichgewichtspreis (5,00 €) – der Markt bildet den Gleichgewichtspreis, die Grenze bindet nicht.';
          } else {
            out.innerHTML = 'Beim Höchstpreis von <b>' + f2(p) + ' €</b>: Nachfrage <b>' + Math.round(xn) + '</b> ME, Angebot nur <b>' + Math.round(xa) + '</b> ME.<br>' +
              '<span class="tool-flag bad">Nachfrageüberhang: ' + Math.round(xn - xa) + ' ME</span> Das Angebot ist beim künstlich niedrigen Preis kleiner als die Nachfrage – und der Preis DARF nicht steigen, um auszugleichen. Je niedriger der Deckel, desto größer die Lücke.';
          }
        }
        sp.addEventListener("input", upd);
        upd();
      },
      options: [
        { label: "Wie werden die knappen Güter jetzt verteilt?", next: "q_hoechst_folgen", tone: "pos" },
        { label: "Höchstpreis liegt über p* → wirkungslos", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_hoechst_folgen: {
      station: "folgen",
      kind: "frage",
      norm: "Verteilung ohne Preis",
      title: "Verteilung beim Nachfrageüberhang – wer bekommt das Gut?",
      def: "Der Preis darf nicht mehr verteilen – an seine Stelle treten laut Skript:<br><br>• Verteilung nach dem Motto „Wer zuerst kommt, mahlt zuerst“ (<b>Windhundverfahren</b>, Warteschlangen)<br>• Verkauf <b>„unter dem Ladentisch“</b> (Schwarzmarkt, Beziehungen)<br>• <b>administratives Zuteilungssystem</b> (Lebensmittelkarten, Bezugsscheine, Wartelisten)",
      options: [
        { label: "Zur Kritik am Höchstpreis", next: "e_hoechst", tone: "pos" }
      ]
    },

    q_mindest: {
      station: "simulator",
      kind: "frage",
      norm: "Mindestpreis",
      title: "Setze den Mindestpreis – was passiert am Markt?",
      def: "Mindestpreise dienen dem <b>Schutz der Anbieter</b> und stellen eine Preisgrenze nach unten dar – unter den Mindestpreis kann der Preis nicht fallen. Sie liegen <b>über</b> dem Gleichgewichtspreis (sonst wirkungslos). Klassisches Beispiel: Agrarmarktordnungen.",
      tool: '<div class="tool"><div class="tool-title">🎛 Mindestpreis festlegen</div>' +
        '<div class="tool-row"><label for="mp-p">Mindestpreis (€)</label><span class="tool-val" id="mp-pv">6,50 €</span></div>' +
        '<input type="range" id="mp-p" min="3" max="9" step="0.05" value="6.5">' +
        '<div class="tool-read" id="mp-out">…</div></div>',
      setup: function (root) {
        var sp = root.querySelector("#mp-p"), pv = root.querySelector("#mp-pv"), out = root.querySelector("#mp-out");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function upd() {
          var p = parseFloat(sp.value);
          pv.textContent = f2(p) + " €";
          var xn = Math.max(0, 100 - 10 * p), xa = Math.max(0, 15 * p - 25);
          if (p <= 5) {
            out.innerHTML = '<span class="tool-flag mid">WIRKUNGSLOS</span> Der Mindestpreis liegt auf/unter dem Gleichgewichtspreis (5,00 €) – der Markt räumt sich beim Gleichgewichtspreis von selbst.';
          } else {
            out.innerHTML = 'Beim Mindestpreis von <b>' + f2(p) + ' €</b>: Angebot <b>' + Math.round(xa) + '</b> ME, Nachfrage nur <b>' + Math.round(xn) + '</b> ME.<br>' +
              '<span class="tool-flag bad">Angebotsüberhang: ' + Math.round(xa - xn) + ' ME</span> Beim künstlich hohen Preis wird mehr produziert, als nachgefragt wird – Produktionsüberschüsse („Butterberge, Milchseen“).';
          }
        }
        sp.addEventListener("input", upd);
        upd();
      },
      options: [
        { label: "Wie geht der Staat mit den Überschüssen um?", next: "q_mindest_folgen", tone: "pos" },
        { label: "Mindestpreis liegt unter p* → wirkungslos", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_mindest_folgen: {
      station: "folgen",
      kind: "frage",
      norm: "Überschussverwertung",
      title: "Maßnahmen gegen die Produktionsüberschüsse",
      def: "Maßnahmen zur Vermeidung bzw. Verwertung der Überschüsse laut Skript:<br><br>• <b>Verringerung des Angebots</b> (z. B. Schlachtprämien, Stilllegungsprämien)<br>• <b>Erhöhung der Nachfrage</b> durch Subventionierung des privaten Verbrauchs (verbilligte Schulmilch)<br>• <b>staatliche Vorratsstellen</b> zwecks Aufkauf der Überschussmengen",
      options: [
        { label: "Zur Kritik am Mindestpreis", next: "e_mindest", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_hoechst: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Höchstpreis",
      title: "Höchstpreis: Nachfrageüberhang + versteckte Verteilungskosten",
      text: "Wirkung: Ein wirksamer Höchstpreis (unter p*) erzeugt einen dauerhaften NACHFRAGEÜBERHANG – das Angebot ist beim künstlich niedrigen Preis kleiner als die Nachfrage.\n\nVerteilung ohne Preismechanismus: Windhundverfahren/Warteschlangen, Verkauf unter dem Ladentisch (Schwarzmarkt), administrative Zuteilung (Lebensmittelkarten, Bezugsscheine, Wartelisten).\n\nKRITIK (Skript): Höchstpreise bewirken keine Korrektur an den URSACHEN, die zur Mangelsituation und Inflation geführt haben – sie VERDECKEN die Probleme! Zusätzlich: Investitionsanreize der Anbieter sinken (das Angebot schrumpft langfristig weiter).\n\nMakro-Anschluss: Staatlich gestoppte Preissteigerungen heißen 'verdeckte (zurückgestaute) Inflation' → Schema 'Inflationsarten bestimmen' (FS 2)."
    },

    e_mindest: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Mindestpreis",
      title: "Mindestpreis: Angebotsüberhang + teure Überschüsse",
      text: "Wirkung: Ein wirksamer Mindestpreis (über p*) führt zu PRODUKTIONSÜBERSCHÜSSEN (Angebotsüberhang) – es wird mehr produziert, als zum hohen Preis nachgefragt wird.\n\nStaatliche Gegenmaßnahmen: Angebotsverringerung (Schlacht-/Stilllegungsprämien), Nachfragesubventionierung (verbilligte Schulmilch), staatliche Vorratsstellen zum Aufkauf der Überschüsse.\n\nKRITIK (Skript): Mindestpreise führen zu Überschussproduktion und hohen Kosten (Exportsubventionen und Vernichtungsaktionen) – der Steuerzahler finanziert die Fehlallokation.\n\nMerke die Symmetrie: Höchstpreis → Schutz der Verbraucher → Nachfrageüberhang. Mindestpreis → Schutz der Anbieter → Angebotsüberhang."
    },

    e_festpreis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Festpreis",
      title: "Festpreis: Preis komplett fixiert",
      text: "Beim Festpreis legt der Staat den Preis vollständig fest (weder darüber noch darunter zulässig) – Beispiele: Buchpreisbindung, staatliche Gebührenordnungen, administrierte Preise in der Planwirtschaft.\n\nWirkung: Je nachdem, ob der Festpreis über oder unter dem Gleichgewichtspreis liegt, entsteht ein Angebots- oder Nachfrageüberhang – der Preis verliert ALLE fünf Funktionen (Information, Ausgleich, Signal, Lenkung, Erziehung).\n\nStaatlich administrierte Preise können zudem Inflationsursache sein (→ Schema 'Inflationsursachen diagnostizieren', FS 2)."
    },

    e_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Nicht bindend",
      title: "Eingriff wirkungslos – Grenze bindet nicht",
      text: "Ein Höchstpreis ÜBER dem Gleichgewichtspreis oder ein Mindestpreis UNTER dem Gleichgewichtspreis ist wirkungslos: Der Markt erreicht sein Gleichgewicht, ohne an die staatliche Grenze zu stoßen.\n\nMerkregel:\n• Höchstpreis wirksam nur UNTER p* (er soll Verbraucher vor 'zu hohen' Preisen schützen),\n• Mindestpreis wirksam nur ÜBER p* (er soll Anbietern 'auskömmliche' Preise sichern).\n\nTeste es im Simulator: Schiebe den Regler über bzw. unter 5,00 € und beobachte, wann ein Überhang entsteht."
    }
  }
});
