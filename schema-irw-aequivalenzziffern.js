/*
 * IRW-Schema: Äquivalenzziffernkalkulation (Rechner) – Kita & Müllabfuhr
 * Fach: Internes Rechnungswesen (FS 2)
 * Tool-Knoten mit Preset-Buttons: Kindergarten "Rasselbande" (408.500 €,
 * ÄZ über den Betreuungsschlüssel, kRE = 4.300 €) und die Müllabfuhr-Übung
 * (1.240.000 €, ÄZ 0,9/1,0/1,4, 52 Leerungen im Jahr).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 13-14 (Lutz bzw. Lutz/Bersch): Äquivalenzziffernkalkulation – Prämissen,
 *    fünf Durchführungsschritte, Kita-Beispiel mit Lösungstabelle, Müllabfuhr-Übung
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-aequivalenzziffern",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenträger & Kalkulation",
  title: "Äquivalenzziffern (Rechner)",
  description: "Artähnliche Sorten gerecht kalkulieren: Mengen × Äquivalenzziffern = Recheneinheiten, Gesamtkosten ÷ Σ RE = Kosten je RE, × ÄZ = Stückkosten je Sorte – mit Kita- und Müllabfuhr-Preset.",
  start: "start",
  stations: [
    { id: "prinzip", label: "Prinzip" },
    { id: "rechner", label: "Rechner" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: kalkuliert",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "prinzip",
      kind: "frage",
      norm: "5 Schritte",
      title: "Gewogene Division in fünf Schritten",
      def: "Für ARTÄHNLICHE Leistungen mit stabilem Kostenverhältnis (Abfallbeseitigung, Krankenhäuser, Friedhöfe, Kitas, Schulen):<br><br>1. <b>Bezugssorte</b> festlegen → ÄZ = 1,0<br>2. Übrige <b>ÄZ</b> nach den beobachteten Kostenrelationen (Messungen)<br>3. <b>Recheneinheiten</b> = Menge × ÄZ (alle Sorten in „Bezugssorten-Währung“)<br>4. <b>Kosten je RE</b> = Gesamtkosten ÷ Σ RE<br>5. <b>Stückkosten je Sorte</b> = kRE × ÄZ (Gesamtkosten der Sorte = Stückkosten × Menge)<br><br>Kita-Beispiel: Betreuungsschlüssel als ÄZ-Basis – Hort (1 : 16) = Bezugssorte 1,0; Altersstufe 0–3 (1 : 8) = doppelt so teuer → ÄZ 2,0; Altersstufe 3–6 (1 : 12) → ÄZ 1,33 (= 16/12 ≈ 1,3333).",
      options: [
        { label: "Zum Rechner mit beiden Skript-Beispielen", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "Kita & Müllabfuhr",
      title: "Rechne die Sorten in Recheneinheiten um!",
      def: "Wähle ein Preset oder trage eigene Werte ein (Sorte 3 ist die Bezugssorte mit ÄZ 1,0):",
      tool: '<div class="tool"><div class="tool-title">⚖️ Äquivalenzziffern-Rechner</div>' +
        '<div class="tool-row"><button type="button" class="tool-preset" id="az-preset1">Preset: Kita „Rasselbande“</button><button type="button" class="tool-preset" id="az-preset2">Preset: Müllabfuhr-Übung</button></div>' +
        '<div class="tool-row"><label for="az-gk">Gesamtkosten (€)</label><input type="number" id="az-gk" value="408500" step="500" min="0"></div>' +
        '<div class="tool-row"><label id="az-l1" for="az-m1">Kinder 0–3: Menge / ÄZ</label><input type="number" id="az-m1" value="20" step="1" min="0"> <input type="number" id="az-z1" value="2" step="0.01" min="0"></div>' +
        '<div class="tool-row"><label id="az-l2" for="az-m2">Kinder 3–6: Menge / ÄZ</label><input type="number" id="az-m2" value="30" step="1" min="0"> <input type="number" id="az-z2" value="1.3333" step="0.01" min="0"></div>' +
        '<div class="tool-row"><label id="az-l3" for="az-m3">Hort (Bezugssorte): Menge / ÄZ</label><input type="number" id="az-m3" value="15" step="1" min="0"> <input type="number" id="az-z3" value="1" step="0.01" min="0"></div>' +
        '<div class="tool-read" id="az-out">…</div></div>',
      setup: function (root) {
        var ids = ["az-gk", "az-m1", "az-z1", "az-m2", "az-z2", "az-m3", "az-z3"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var labels = [root.querySelector("#az-l1"), root.querySelector("#az-l2"), root.querySelector("#az-l3")];
        var out = root.querySelector("#az-out");
        var namen = ["Kinder 0–3", "Kinder 3–6", "Hort"];
        function f(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }); }
        function upd() {
          var gk = +el["az-gk"].value || 0;
          var m = [+el["az-m1"].value || 0, +el["az-m2"].value || 0, +el["az-m3"].value || 0];
          var z = [+el["az-z1"].value || 0, +el["az-z2"].value || 0, +el["az-z3"].value || 0];
          var re = [m[0] * z[0], m[1] * z[1], m[2] * z[2]];
          var sumRE = re[0] + re[1] + re[2];
          if (!sumRE) { out.innerHTML = "Bitte Mengen und ÄZ eingeben."; return; }
          var kre = gk / sumRE;
          var txt = "";
          for (var i = 0; i < 3; i++) {
            var ki = kre * z[i];
            txt += namen[i] + ": " + f(m[i]) + " × ÄZ " + f(z[i], 2) + " = <b>" + f(re[i], 0) + " RE</b> → Stückkosten " + f(ki, 2) + " € → Sortenkosten " + f(ki * m[i], 0) + " €<br>";
          }
          txt += "Σ RE = <b>" + f(sumRE, 0) + "</b> · Kosten je RE = " + f(gk) + " € ÷ " + f(sumRE, 0) + " = <b>" + f(kre, 4) + " €</b><br>";
          if (Math.abs(kre - 4300) < 5) {
            txt += '<span class="tool-flag ok">✓ Kita-Lösung</span> kRE = 4.300 €: Hort 4.300 €/Kind (64.500 €), 0–3 8.600 €/Kind (172.000 €), 3–6 5.733 €/Kind (172.000 €).';
          } else if (Math.abs(kre - 0.7452) < 0.01) {
            txt += '<span class="tool-flag ok">✓ Müllabfuhr-Lösung</span> kRE ≈ 0,7452 €: 35 l → 0,67 €, 50 l → 0,75 €, 100 l → 1,04 € je Leerung.';
          } else {
            txt += '<span class="tool-flag ok">Eigenes Szenario</span> Kontrolle: Σ aller Sortenkosten = Gesamtkosten.';
          }
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        function setVals(gk, mm, zz, nn) {
          el["az-gk"].value = gk;
          el["az-m1"].value = mm[0]; el["az-m2"].value = mm[1]; el["az-m3"].value = mm[2];
          el["az-z1"].value = zz[0]; el["az-z2"].value = zz[1]; el["az-z3"].value = zz[2];
          namen = nn;
          labels[0].textContent = nn[0] + ": Menge / ÄZ";
          labels[1].textContent = nn[1] + ": Menge / ÄZ";
          labels[2].textContent = nn[2] + " (Bezugssorte): Menge / ÄZ";
          upd();
        }
        root.querySelector("#az-preset1").addEventListener("click", function () {
          setVals(408500, [20, 30, 15], [2, 1.3333, 1], ["Kinder 0–3", "Kinder 3–6", "Hort"]);
        });
        root.querySelector("#az-preset2").addEventListener("click", function () {
          setVals(1240000, [104000, 156000, 1352000], [0.9, 1.4, 1], ["35-l-Tonne (2.000 × 52)", "100-l-Tonne (3.000 × 52)", "50-l-Tonne (26.000 × 52)"]);
        });
        upd();
      },
      hint: "Müllabfuhr-Übung: 35 l ist 10 % billiger als 50 l → ÄZ 0,9; 100 l ist 40 % teurer → ÄZ 1,4; Bezugssorte 50 l. Leerungen = Behälter × 52 Wochen.",
      options: [
        { label: "Kalkulation steht – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "ÄZK",
      title: "Äquivalenzziffernkalkulation: gerecht dank Gewichtung",
      text: "Die ÄZK ist eine GEWOGENE Divisionskalkulation: Statt durch die Leistungsmenge wird durch die Zahl der RECHENEINHEITEN geteilt – die mit den Äquivalenzziffern gewichteten Mengen. So trägt jede Sorte die Kosten entsprechend ihrer tatsächlichen Beanspruchung (Verursachungsprinzip!).\n\nKita-Referenz: 95 RE, kRE = 408.500 ÷ 95 = 4.300 € → Hort 4.300 €, Altersstufe 0–3 8.600 €, Altersstufe 3–6 5.733 € je Kind (Sortenkosten 64.500 / 172.000 / 172.000 €).\n\nMüllabfuhr-Referenz: 1.664.000 RE, kRE ≈ 0,7452 € → 35 l ≈ 0,67 €, 50 l ≈ 0,75 €, 100 l ≈ 1,04 € je Leerung – die Basis der Abfallgebühren-Kalkulation.\n\nVoraussetzung bleibt das STABILE Kostenverhältnis: Die ÄZ gelten über längere Zeit und werden durch Messungen ermittelt. Ändern sich die Relationen, müssen die Ziffern neu bestimmt werden."
    }
  }
});
