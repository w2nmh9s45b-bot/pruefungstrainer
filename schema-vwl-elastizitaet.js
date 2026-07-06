/*
 * VWL-Schema: Elastizitäten – interaktiver Rechner + Deutung
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 * Tool-Knoten: Preis-/Mengenrechner für die direkte Preiselastizität mit Live-Deutung
 * (elastisch/unelastisch) und Umsatzwirkung; Presets = Skript-Beispiele.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 8.3.4 (Nachfrageelastizitäten; Beispiele
 *    Eisdiele Pietro, Cocktailbar, Benzin/Mineralölsteuer)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-elastizitaet",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Preisbildung & Elastizität",
  title: "Elastizitäten (Rechner)",
  description: "Direkte Preiselastizität live berechnen (Skript-Beispiele Eisdiele & Cocktailbar als Presets): elastisch oder unelastisch – und was macht der Umsatz? Dazu Kreuzpreis- und Einkommenselastizität einordnen.",
  start: "start",
  stations: [
    { id: "rechner", label: "Rechner" },
    { id: "arten", label: "Weitere Arten" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: gedeutet",
    neg: "Ergebnis: Sonderfall",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "rechner",
      kind: "frage",
      norm: "E = ΔMenge % ÷ ΔPreis %",
      title: "Direkte Preiselastizität der Nachfrage berechnen",
      def: "Eine <b>Elastizität</b> misst die Stärke eines (ceteris paribus isolierten) Ursache-Wirkungs-Bezugs: Um wie viel Prozent ändert sich die Wirkung, wenn die Ursache um ein Prozent geändert wird?<br><br><b>Direkte Preiselastizität der Nachfrage:</b><br>E = relative Mengenänderung ÷ relative Preisänderung<br><br>Bei normalem Nachfrageverhalten ist das Ergebnis immer negativ – das Minuszeichen wird aus Vereinfachungsgründen weggelassen (nur bei der direkten Preiselastizität!).",
      tool: '<div class="tool"><div class="tool-title">🎛 Elastizitäts-Rechner</div>' +
        '<div class="tool-row"><label for="el-p0">Alter Preis (€)</label><input type="number" id="el-p0" value="3.00" step="0.10" min="0.01"></div>' +
        '<div class="tool-row"><label for="el-p1">Neuer Preis (€)</label><input type="number" id="el-p1" value="3.30" step="0.10" min="0.01"></div>' +
        '<div class="tool-row"><label for="el-x0">Alte Menge</label><input type="number" id="el-x0" value="20" step="1" min="1"></div>' +
        '<div class="tool-row"><label for="el-x1">Neue Menge</label><input type="number" id="el-x1" value="16" step="1" min="0"></div>' +
        '<div style="margin:4px 0 2px"><button type="button" class="tool-preset" id="el-pre1">🍨 Eisdiele (3 → 3,30 € · 20 → 16)</button>' +
        '<button type="button" class="tool-preset" id="el-pre2">🍹 Cocktailbar (5 → 7 € · 800 → 600)</button></div>' +
        '<div class="tool-read" id="el-out">…</div></div>',
      setup: function (root) {
        var p0 = root.querySelector("#el-p0"), p1 = root.querySelector("#el-p1");
        var x0 = root.querySelector("#el-x0"), x1 = root.querySelector("#el-x1");
        var out = root.querySelector("#el-out");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function upd() {
          var a = parseFloat(p0.value), b = parseFloat(p1.value);
          var c = parseFloat(x0.value), d = parseFloat(x1.value);
          if (!(a > 0) || !(b > 0) || !(c > 0) || !(d >= 0)) { out.innerHTML = "Bitte gültige Werte eingeben."; return; }
          var dp = (b - a) / a * 100, dx = (d - c) / c * 100;
          if (dp === 0) { out.innerHTML = "Der Preis hat sich nicht geändert – Elastizität nicht definiert. Ändere den neuen Preis."; return; }
          var e = Math.abs(dx / dp);
          var u0 = a * c, u1 = b * d;
          var kat, flag;
          if (dx === 0) { kat = "vollkommen unelastisch (E = 0): Die Menge reagiert gar nicht."; flag = '<span class="tool-flag bad">E = 0</span>'; }
          else if (e > 1.001) { kat = "ELASTISCH (E &gt; 1): Die Mengenänderung ist relativ größer als die Preisänderung."; flag = '<span class="tool-flag ok">elastisch</span>'; }
          else if (e < 0.999) { kat = "UNELASTISCH (E &lt; 1): Die Mengenänderung ist relativ kleiner als die Preisänderung."; flag = '<span class="tool-flag mid">unelastisch</span>'; }
          else { kat = "proportional elastisch (E = 1)."; flag = '<span class="tool-flag mid">E = 1</span>'; }
          var ums;
          if (u1 > u0) ums = "steigt von " + f2(u0) + " € auf <b>" + f2(u1) + " €</b>";
          else if (u1 < u0) ums = "sinkt von " + f2(u0) + " € auf <b>" + f2(u1) + " €</b>";
          else ums = "bleibt bei <b>" + f2(u0) + " €</b>";
          out.innerHTML =
            "Preisänderung: <b>" + f1(dp) + " %</b> · Mengenänderung: <b>" + f1(dx) + " %</b><br>" +
            "E = |" + f1(dx) + " % ÷ " + f1(dp) + " %| = <b>" + f2(e) + "</b> " + flag + "<br>" +
            kat + "<br>Umsatz (= Ausgaben der Kunden) " + ums + ".";
        }
        [p0, p1, x0, x1].forEach(function (inp) { inp.addEventListener("input", upd); });
        root.querySelector("#el-pre1").addEventListener("click", function () {
          p0.value = "3.00"; p1.value = "3.30"; x0.value = "20"; x1.value = "16"; upd();
        });
        root.querySelector("#el-pre2").addEventListener("click", function () {
          p0.value = "5.00"; p1.value = "7.00"; x0.value = "800"; x1.value = "600"; upd();
        });
        upd();
      },
      hint: "Skript-Lösungen: Eisdiele E = 2,0 (elastisch – Umsatz sinkt bei Preiserhöhung). Cocktailbar E = 0,625 (unelastisch – Umsatz steigt trotz Mengenrückgang).",
      options: [
        { label: "Elastische Nachfrage deuten (E > 1)", next: "e_elastisch", tone: "pos" },
        { label: "Unelastische Nachfrage deuten (E < 1)", next: "e_unelastisch", tone: "warn" },
        { label: "Weitere Elastizitätsarten einordnen", next: "q_arten", tone: "neutral" }
      ]
    },

    q_arten: {
      station: "arten",
      kind: "frage",
      norm: "3 Elastizitätsarten",
      title: "Kreuzpreis- oder Einkommenselastizität?",
      def: "Die drei Kennzahlen zur Beurteilung des Kundenverhaltens:<br><br>1. <b>Direkte Preiselastizität</b>: Mengenänderung bei Gut A wegen Preisänderung bei Gut A (Rechner oben).<br>2. <b>Kreuzpreiselastizität</b> (indirekte Preiselastizität): Mengenänderung bei Gut C wegen <b>Preisänderung bei Gut B</b>.<br>3. <b>Einkommenselastizität</b>: Mengenänderung wegen <b>Einkommensänderung</b>.",
      options: [
        { label: "Preis von Gut B ändert die Nachfrage nach Gut C → Kreuzpreiselastizität", next: "q_kreuz", tone: "neutral" },
        { label: "Einkommen ändert die Nachfrage → Einkommenselastizität", next: "q_einkommen", tone: "neutral" }
      ]
    },

    q_kreuz: {
      station: "arten",
      kind: "frage",
      norm: "Kreuzpreiselastizität",
      title: "Welches Vorzeichen hat die Kreuzpreiselastizität?",
      def: "E = Nachfrageänderung % bei Gut C ÷ Preisänderung % bei Gut B<br><br>Das <b>Vorzeichen</b> verrät die Güterbeziehung:<br>• <b>positiv</b>: Preis B ↑ → Nachfrage C ↑ (C ersetzt B)<br>• <b>negativ</b>: Preis B ↑ → Nachfrage C ↓ (C wird zusammen mit B gekauft)<br>• <b>≈ 0</b>: keine Beziehung",
      options: [
        { label: "Positiv → Substitutionsgüter", detail: "Butter teurer → mehr Margarine", next: "e_substitut", tone: "pos" },
        { label: "Negativ → Komplementärgüter", detail: "Benzin teurer → weniger Autos", next: "e_komplement", tone: "neg" }
      ]
    },

    q_einkommen: {
      station: "arten",
      kind: "frage",
      norm: "Einkommenselastizität",
      title: "Wie reagiert die Nachfrage auf mehr Einkommen?",
      def: "E = Nachfrageänderung % bei Gut D ÷ Einkommensänderung %<br><br>Einordnung nach dem Skript:<br>• <b>normale Güter</b>: Nachfrage steigt mit dem Einkommen<br>• <b>inferiore Güter</b>: Nachfrage sinkt bei steigendem Einkommen (Billigprodukte werden ersetzt)<br>• <b>einkommensunabhängige Güter</b>: kaum Reaktion (Grundnahrungsmittel, Salz)",
      options: [
        { label: "Steigt → normales Gut", next: "e_normal", tone: "pos" },
        { label: "Sinkt → inferiores Gut", next: "e_inferior", tone: "neg" },
        { label: "Bleibt (fast) gleich → einkommensunabhängig", next: "e_unabhaengig", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_elastisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "E > 1",
      title: "Elastische Nachfrage: Preiserhöhung kostet Umsatz",
      text: "Die relative Mengenänderung ist GRÖSSER als die relative Preisänderung (E > 1).\n\nFolge für den Umsatz (= Ausgaben der Kunden):\n• bei Preissteigerung → Umsatz SINKT\n• bei Preissenkung → Umsatz STEIGT\n\nSkript-Beispiel Eisdiele Pietro: 3,00 → 3,30 € (+10 %), 20 → 16 Kugeln (−20 %) → E = 2,0. Umsatz fällt von 60,00 € auf 52,80 € – die Preiserhöhung lohnt sich NICHT.\n\nTypisch elastisch: Güter mit vielen Substituten, Luxusgüter, aufschiebbare Käufe."
    },

    e_unelastisch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "E < 1",
      title: "Unelastische Nachfrage: Preiserhöhung bringt Umsatz",
      text: "Die relative Mengenänderung ist KLEINER als die relative Preisänderung (E < 1).\n\nFolge für den Umsatz:\n• bei Preissteigerung → Umsatz STEIGT\n• bei Preissenkung → Umsatz SINKT\n\nSkript-Beispiel Cocktailbar: 5 → 7 € (+40 %), 800 → 600 Drinks (−25 %) → E = 0,625. Umsatz steigt von 4.000 € auf 4.200 €.\n\nSkript-Aufgabe Benzin: E = 0,24; für −10 % Menge braucht es +41,7 % Preis → der Benzinpreis müsste von 2,00 € auf rund 2,83 € steigen (Rechnung: 10 % ÷ 0,24 = 41,67 %). Typisch unelastisch: lebensnotwendige Güter ohne Ausweichmöglichkeit (Benzin, Medikamente, Strom). Extremfall E = 0: vollkommen unelastisch – Menge reagiert gar nicht."
    },

    e_substitut: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kreuzpreiselastizität > 0",
      title: "Substitutionsgüter",
      text: "Positive Kreuzpreiselastizität: Steigt der Preis von Gut B, weichen die Kunden auf Gut C aus – die Güter ERSETZEN einander (Butter/Margarine, Bahn/Auto, Kaffee/Tee).\n\nJe höher der Wert, desto enger die Substitutionsbeziehung – wichtig auch für die Marktabgrenzung im Wettbewerbsrecht (welche Produkte gehören zum selben 'relevanten Markt'?).\n\nMikro-Anschluss: Der Preisanstieg des Substituts verschiebt die Nachfragekurve des betrachteten Gutes nach RECHTS (→ Schema 'Angebot & Nachfrage: Verschiebung analysieren')."
    },

    e_komplement: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Kreuzpreiselastizität < 0",
      title: "Komplementärgüter",
      text: "Negative Kreuzpreiselastizität: Steigt der Preis von Gut B, sinkt auch die Nachfrage nach Gut C – die Güter ERGÄNZEN einander und werden gemeinsam nachgefragt (Drucker/Toner, Auto/Benzin, Kaffee/Kaffeemaschine).\n\nMikro-Anschluss: Der Preisanstieg des Komplements verschiebt die Nachfragekurve des betrachteten Gutes nach LINKS – Preis und Menge sinken (→ Schema 'Angebot & Nachfrage: Verschiebung analysieren')."
    },

    e_normal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Einkommenselastizität > 0",
      title: "Normales Gut",
      text: "Positive Einkommenselastizität: Mit steigendem Einkommen wird MEHR nachgefragt.\n\nFaustregel innerhalb der normalen Güter: Werte über 1 kennzeichnen Güter, deren Nachfrage überproportional mit dem Einkommen wächst (hochwertige Konsumgüter, Reisen) – Werte zwischen 0 und 1 stehen für unterproportionales Wachstum (viele Güter des täglichen Bedarfs).\n\nEinkommenszuwachs verschiebt die Nachfragekurve normaler Güter nach rechts: Preis und Menge steigen."
    },

    e_inferior: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Einkommenselastizität < 0",
      title: "Inferiores Gut",
      text: "Negative Einkommenselastizität: Mit steigendem Einkommen wird WENIGER nachgefragt – die Konsumenten steigen auf höherwertige Alternativen um.\n\nKlassische Beispiele: einfache Grundnahrungsmittel (Discounter-Eigenmarken), Second-Hand-Ware, Fernbusreisen.\n\nSpiegelbildlich gilt: In der Rezession (sinkende Einkommen) steigt die Nachfrage nach inferioren Gütern – ein brauchbarer Konjunkturindikator aus dem Alltag."
    },

    e_unabhaengig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Einkommenselastizität ≈ 0",
      title: "Einkommensunabhängiges Gut",
      text: "Die Nachfrage reagiert (fast) nicht auf Einkommensänderungen – typisch für gesättigte Grundbedarfe wie Salz, Streichhölzer oder Leitungswasser.\n\nZusammenfassung der drei Elastizitätsarten:\n1. direkte Preiselastizität → Preisempfindlichkeit (elastisch/unelastisch/vollkommen unelastisch)\n2. Kreuzpreiselastizität → Güterbeziehung (Substitut/Komplement)\n3. Einkommenselastizität → Gütertyp (normal/inferior/einkommensunabhängig)"
    }
  }
});
