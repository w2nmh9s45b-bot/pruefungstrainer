/*
 * IRW-Schema: Innerbetriebliche Leistungsverrechnung – Anbau vs. Stufenleiter (Simulator)
 * Fach: Internes Rechnungswesen (FS 2)
 * Zwei Tool-Knoten mit dem Grundbeispiel des Skripts ("Buch der Kollegen"):
 * VK A 36.000 € / 1.800 qm, VK B 7.200 € / 120 h, EK I 150.000 €, EK II 170.000 €.
 * Anbauverfahren: 21,43 €/qm & 68,57 €/h → 173.314 / 189.886.
 * Stufenleiter: 20 €/qm & 91,43 €/h → 172.857 / 190.343 (+ Rangordnungsregel).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 09-12 (Lutz): Sekundärkostenverrechnung, Verfahrensübersicht, Anbau- und
 *    Stufenleiterverfahren mit vollständigen Rechenbeispielen und der Regel zur
 *    Anordnung der Vorkostenstellen (geringster Bezug zuerst)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-ilv-simulator",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenstellen & BAB",
  title: "Innerbetriebliche Leistungsverrechnung (Simulator)",
  description: "BAB Teil II zum Nachrechnen: Anbau- und Stufenleiterverfahren am Original-Beispiel – Verrechnungssätze live, Endsummen im Vergleich und die Rangordnungsregel für die Reihenfolge der Vorkostenstellen.",
  start: "start",
  stations: [
    { id: "verfahren", label: "Verfahren" },
    { id: "anbau", label: "Anbau" },
    { id: "stufe", label: "Stufenleiter" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: verrechnet",
    neg: "Ergebnis: Verfahrensgrenze",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "verfahren",
      kind: "frage",
      norm: "Genauigkeit",
      title: "Welche Leistungsbeziehungen kann das Verfahren verrechnen?",
      def: "In Teil II des BAB werden die Vorkostenstellen auf die Endkostenstellen umgelegt (bis sie auf null stehen). Die Verfahren unterscheiden sich darin, wie viele Leistungsbeziehungen ZWISCHEN den Vorkostenstellen sie erfassen:<br><br>• <b>Anbauverfahren</b>: KEINE VK↔VK-Beziehungen – nur VK → EK (einfachstes, ungenauestes Verfahren; Anordnung der VK egal)<br>• <b>Stufenleiterverfahren</b>: EINSEITIGE Beziehungen (treppenförmig von links nach rechts; abgerechnete Stellen werden nicht mehr belastet)<br>• Gutschrift-Lastschrift-, Iterations- und mathematisches Verfahren (gegenseitige Beziehungen): nur bei den Betriebswirten – hier nicht behandelt",
      options: [
        { label: "Anbauverfahren durchrechnen", next: "q_anbau", tone: "pos" },
        { label: "Direkt zum Stufenleiterverfahren", next: "q_stufe", tone: "pos" }
      ]
    },

    q_anbau: {
      station: "anbau",
      kind: "frage",
      norm: "Anbauverfahren",
      title: "Anbauverfahren: nur die Leistungen an die Endkostenstellen zählen",
      def: "Grundbeispiel: VK A (Gesamtleistung 1.800 qm, davon 120 qm an VK B – die beim Anbau UNTER DEN TISCH fallen), VK B (120 h, davon 15 h an VK A – ebenfalls unbeachtlich). Verrechnungssatz = Primärkosten ÷ Leistung an die ENDkostenstellen:",
      tool: '<div class="tool"><div class="tool-title">🏗 Anbau-Rechner</div>' +
        '<div class="tool-row"><label for="an-pka">Primärkosten VK A (€)</label><input type="number" id="an-pka" value="36000" step="1000" min="0"></div>' +
        '<div class="tool-row"><label for="an-pkb">Primärkosten VK B (€)</label><input type="number" id="an-pkb" value="7200" step="100" min="0"></div>' +
        '<div class="tool-row"><label for="an-qm1">VK A → EK I (qm)</label><input type="number" id="an-qm1" value="960" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="an-qm2">VK A → EK II (qm)</label><input type="number" id="an-qm2" value="720" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="an-h1">VK B → EK I (h)</label><input type="number" id="an-h1" value="40" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="an-h2">VK B → EK II (h)</label><input type="number" id="an-h2" value="65" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="an-ek1">Primärkosten EK I (€)</label><input type="number" id="an-ek1" value="150000" step="5000" min="0"></div>' +
        '<div class="tool-row"><label for="an-ek2">Primärkosten EK II (€)</label><input type="number" id="an-ek2" value="170000" step="5000" min="0"></div>' +
        '<div class="tool-read" id="an-out">…</div></div>',
      setup: function (root) {
        var ids = ["an-pka", "an-pkb", "an-qm1", "an-qm2", "an-h1", "an-h2", "an-ek1", "an-ek2"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var out = root.querySelector("#an-out");
        function f(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
        function upd() {
          var pka = +el["an-pka"].value || 0, pkb = +el["an-pkb"].value || 0;
          var qm1 = +el["an-qm1"].value || 0, qm2 = +el["an-qm2"].value || 0;
          var h1 = +el["an-h1"].value || 0, h2 = +el["an-h2"].value || 0;
          var ek1 = +el["an-ek1"].value || 0, ek2 = +el["an-ek2"].value || 0;
          var qmSum = qm1 + qm2, hSum = h1 + h2;
          if (!qmSum || !hSum) { out.innerHTML = "Bitte Leistungsmengen eingeben."; return; }
          var sA = pka / qmSum, sB = pkb / hSum;
          var e1 = ek1 + qm1 * sA + h1 * sB, e2 = ek2 + qm2 * sA + h2 * sB;
          out.innerHTML = "Satz VK A = " + f(pka) + " € ÷ " + f(qmSum) + " qm = <b>" + f(sA, 4) + " €/qm</b> · Satz VK B = " + f(pkb) + " € ÷ " + f(hSum) + " h = <b>" + f(sB, 4) + " €/h</b><br>" +
            "EK I = " + f(ek1) + " + " + f(qm1 * sA, 0) + " + " + f(h1 * sB, 0) + " = <b>" + f(e1, 0) + " €</b><br>" +
            "EK II = " + f(ek2) + " + " + f(qm2 * sA, 0) + " + " + f(h2 * sB, 0) + " = <b>" + f(e2, 0) + " €</b><br>" +
            (Math.abs(e1 - 173314) < 2 && Math.abs(e2 - 189886) < 2
              ? '<span class="tool-flag ok">✓ Skript-Lösung</span> 21,4285714285 €/qm und 68,5714285714 €/h → 173.314 € und 189.886 €. Mit allen Nachkommastellen rechnen!'
              : '<span class="tool-flag ok">Kontrolle</span> Beide VK stehen auf null; Summe EK I + EK II = Gesamtkosten aller Stellen.');
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        upd();
      },
      hint: "Beim Anbauverfahren werden die 120 qm an VK B und die 15 h an VK A schlicht ignoriert – deshalb rechnet VK A nur mit 1.680 qm und VK B nur mit 105 h.",
      options: [
        { label: "Und mit einseitigen Beziehungen? → Stufenleiter", next: "q_stufe", tone: "pos" },
        { label: "Wo liegt der Fehler des Anbauverfahrens?", next: "e_anbau", tone: "warn" }
      ]
    },

    q_stufe: {
      station: "stufe",
      kind: "frage",
      norm: "Stufenleiter",
      title: "Stufenleiterverfahren: Treppe von links nach rechts",
      def: "Jetzt werden auch die Leistungen ZWISCHEN den Vorkostenstellen einseitig verrechnet. <b>Anordnungsregel:</b> Zuerst wird die VK abgerechnet, die wertmäßig am WENIGSTEN von anderen VK bezieht. Eine abgerechnete VK kann nicht mehr belastet werden; umgelegt werden Primär- UND erhaltene Sekundärkosten:",
      tool: '<div class="tool"><div class="tool-title">🪜 Stufenleiter-Rechner</div>' +
        '<div class="tool-row"><label for="st-pka">Primärkosten VK A (€)</label><input type="number" id="st-pka" value="36000" step="1000" min="0"></div>' +
        '<div class="tool-row"><label for="st-pkb">Primärkosten VK B (€)</label><input type="number" id="st-pkb" value="7200" step="100" min="0"></div>' +
        '<div class="tool-row"><label for="st-qmb">VK A → VK B (qm)</label><input type="number" id="st-qmb" value="120" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="st-qm1">VK A → EK I (qm)</label><input type="number" id="st-qm1" value="960" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="st-qm2">VK A → EK II (qm)</label><input type="number" id="st-qm2" value="720" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="st-ha">VK B → VK A (h)</label><input type="number" id="st-ha" value="15" step="1" min="0"></div>' +
        '<div class="tool-row"><label for="st-h1">VK B → EK I (h)</label><input type="number" id="st-h1" value="40" step="5" min="0"></div>' +
        '<div class="tool-row"><label for="st-h2">VK B → EK II (h)</label><input type="number" id="st-h2" value="65" step="5" min="0"></div>' +
        '<div class="tool-read" id="st-out">…</div></div>',
      setup: function (root) {
        var ids = ["st-pka", "st-pkb", "st-qmb", "st-qm1", "st-qm2", "st-ha", "st-h1", "st-h2"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var out = root.querySelector("#st-out");
        var EK1P = 150000, EK2P = 170000;
        function f(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
        function upd() {
          var pka = +el["st-pka"].value || 0, pkb = +el["st-pkb"].value || 0;
          var qmb = +el["st-qmb"].value || 0, qm1 = +el["st-qm1"].value || 0, qm2 = +el["st-qm2"].value || 0;
          var ha = +el["st-ha"].value || 0, h1 = +el["st-h1"].value || 0, h2 = +el["st-h2"].value || 0;
          var gesA = qmb + qm1 + qm2, gesB = ha + h1 + h2;
          if (!gesA || !gesB) { out.innerHTML = "Bitte Leistungsmengen eingeben."; return; }
          var bezugA = ha * (pkb / gesB);
          var bezugB = qmb * (pka / gesA);
          var txt = "Rangordnung: A bezieht " + f(bezugA, 0) + " € von B · B bezieht " + f(bezugB, 0) + " € von A → <b>" + (bezugA <= bezugB ? "A zuerst" : "B zuerst") + "</b> (geringster Bezug zuerst)<br>";
          var e1, e2;
          if (bezugA <= bezugB) {
            var s1 = pka / gesA;
            var anB = qmb * s1;
            var s2 = (pkb + anB) / (h1 + h2 || 1);
            txt += "Satz A = " + f(pka) + " ÷ " + f(gesA) + " qm = <b>" + f(s1, 4) + " €/qm</b> (Umlage an VK B: " + f(anB, 0) + " €)<br>" +
              "Satz B = (" + f(pkb) + " + " + f(anB, 0) + ") ÷ " + f(h1 + h2) + " h = <b>" + f(s2, 4) + " €/h</b> (die " + ha + " h an A verfallen)<br>";
            e1 = EK1P + qm1 * s1 + h1 * s2;
            e2 = EK2P + qm2 * s1 + h2 * s2;
          } else {
            var t1 = pkb / gesB;
            var anA = ha * t1;
            var t2 = (pka + anA) / (qm1 + qm2 || 1);
            txt += "Satz B = " + f(pkb) + " ÷ " + f(gesB) + " h = <b>" + f(t1, 4) + " €/h</b> (Umlage an VK A: " + f(anA, 0) + " €)<br>" +
              "Satz A = (" + f(pka) + " + " + f(anA, 0) + ") ÷ " + f(qm1 + qm2) + " qm = <b>" + f(t2, 4) + " €/qm</b><br>";
            e1 = EK1P + h1 * t1 + qm1 * t2;
            e2 = EK2P + h2 * t1 + qm2 * t2;
          }
          txt += "EK I = <b>" + f(e1, 0) + " €</b> · EK II = <b>" + f(e2, 0) + " €</b><br>" +
            (Math.abs(e1 - 172857) < 2 && Math.abs(e2 - 190343) < 2
              ? '<span class="tool-flag ok">✓ Skript-Lösung</span> 20 €/qm und 91,4285714285 €/h → 172.857 € und 190.343 € (vgl. Anbau: 173.314 / 189.886 – genauer, weil die 2.400 € an VK B mitverrechnet werden).'
              : '<span class="tool-flag ok">Kontrolle</span> Beide VK auf null; gegenseitige Restbeziehung bleibt unverrechnet (Verfahrensgrenze).');
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        upd();
      },
      hint: "Skript-Rangordnung: A bezieht 15 h × 60 €/h = 900 €, B bezieht 120 qm × 20 €/qm = 2.400 € → A wird zuerst abgerechnet.",
      options: [
        { label: "Beide Verfahren im Urteil (Ergebnis)", next: "e_vergleich", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anbau: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Anbauverfahren",
      title: "Anbauverfahren: einfach, aber systematisch ungenau",
      text: "Leistungsbeziehungen zwischen den Vorkostenstellen werden vernachlässigt – die Vorkostenstellen weisen dadurch nicht alle Kosten aus, die sie verursachen bzw. beziehen, und dieser Fehler überträgt sich auf die Endkostenstellen: Deren Gemeinkostenanteile sind nicht mehr verursachungsgerecht.\n\nIm Beispiel: Die 120 qm, die VK A für VK B bereitstellt (2.400 € wert), und die 15 h der VK B für VK A (900 €) verschwinden einfach aus der Rechnung.\n\nDafür ist das Verfahren am einfachsten, und die Anordnung der Vorkostenstellen im BAB spielt keine Rolle. Wer es genauer will, nimmt das Stufenleiterverfahren – ganz genau (gegenseitige Beziehungen) wird es erst mit Iterations-/mathematischem Verfahren, die hier nicht behandelt werden."
    },

    e_vergleich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verfahrensvergleich",
      title: "Anbau vs. Stufenleiter: Genauigkeit gegen Aufwand",
      text: "ANBAUVERFAHREN: verrechnet nur VK → EK. Einfach, Reihenfolge egal – aber alle VK↔VK-Beziehungen fallen weg (Beispiel: EK I 173.314 €, EK II 189.886 €).\n\nSTUFENLEITERVERFAHREN: verrechnet zusätzlich EINSEITIGE VK-Beziehungen, treppenförmig von links nach rechts; eine abgerechnete Stelle wird nicht mehr belastet, umgelegt werden Primär- plus erhaltene Sekundärkosten (sonst „bleiben Kosten hängen“). ANORDNUNGSREGEL: Die Stelle mit dem wertmäßig geringsten Bezug von anderen VK zuerst (Beispiel: A mit 900 € vor B mit 2.400 € → EK I 172.857 €, EK II 190.343 €). Der Restfehler aus gegenseitigen Beziehungen lässt sich nur minimieren, nicht vermeiden.\n\nIn der Klausur: Verteilungsschlüssel werden vorgegeben; Verrechnungssätze mit ALLEN Nachkommastellen weiterrechnen, nur Endergebnisse runden; Kontrolle: Vorkostenstellen am Ende auf null, Gesamtsumme unverändert."
    }
  }
});
