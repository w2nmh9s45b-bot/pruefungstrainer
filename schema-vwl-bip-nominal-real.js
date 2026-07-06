/*
 * VWL-Schema: Nominales vs. reales BIP – interaktiver Rechner
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 * Tool-Knoten: das Auto-Beispiel aus der PLE (Preise/Mengen 2021 und 2022 einstellbar);
 * nominales und reales BIP samt Wachstumsraten werden live berechnet.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "LV 3.4 VWL II_PLE 01 - 04" (Lutz), Kap. 1.2 (BIP-Definition, nominal/real,
 *    Auto-Beispiel 30.000/34.000 € · 100/90 Stück)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-bip-nominal-real",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Volkswirtschaftliche Gesamtrechnung",
  title: "Nominales vs. reales BIP (Rechner)",
  description: "Das Auto-Beispiel der PLE zum Selbst-Einstellen: Preise und Stückzahlen zweier Jahre ändern und live sehen, warum das nominale BIP wachsen kann, während die Wirtschaft real schrumpft – und warum nur das reale BIP Wachstum misst.",
  start: "start",
  stations: [
    { id: "begriff", label: "BIP-Begriff" },
    { id: "rechner", label: "Rechner" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: verstanden",
    neg: "Ergebnis: Preisillusion",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriff",
      kind: "frage",
      norm: "BIP-Definition",
      title: "Was misst das Bruttoinlandsprodukt?",
      def: "Das <b>Bruttoinlandsprodukt (BIP)</b> gibt den <b>Gesamtwert aller Güter</b> (Waren und Dienstleistungen) an, die <b>innerhalb eines Zeitraums</b> und <b>innerhalb der Landesgrenzen</b> dem <b>Endverbrauch</b> dienen.<br><br>• Maß für die wirtschaftliche Leistung einer Volkswirtschaft, Grundlage für Konjunktur- und Wachstumsanalysen<br>• <b>Produktionsindikator</b>: An der Höhe erkennt man, ob die Volkswirtschaft gewachsen oder geschrumpft ist<br>• Die <b>Spitzenkennzahl</b> der Volkswirtschaft<br><br><b>Wirtschaftswachstum</b> = Zu- bzw. Abnahme des BIP im Vergleich zum Vorjahr.",
      options: [
        { label: "Zum Rechner: nominal vs. real", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "Preisbereinigung",
      title: "Auto-Volkswirtschaft: Wächst sie wirklich?",
      def: "Modell aus der PLE: In einer Volkswirtschaft werden <b>nur Autos</b> produziert und verkauft. Stelle Preise und Stückzahlen ein:<br>• <b>Nominales BIP</b> = Menge × Preis <b>des jeweiligen Jahres</b> (aktuelle Marktpreise)<br>• <b>Reales BIP</b> = Menge des Berichtsjahres × Preis <b>des Vorjahres/Basisjahres</b> (preisbereinigt)",
      tool: '<div class="tool"><div class="tool-title">🎛 BIP-Rechner (Auto-Beispiel)</div>' +
        '<div class="tool-row"><label for="bip-p0">Preis je Auto 2021 (€)</label><input type="number" id="bip-p0" value="30000" step="1000" min="1"></div>' +
        '<div class="tool-row"><label for="bip-q0">Produktion 2021 (Stück)</label><input type="number" id="bip-q0" value="100" step="5" min="1"></div>' +
        '<div class="tool-row"><label for="bip-p1">Preis je Auto 2022 (€)</label><input type="number" id="bip-p1" value="34000" step="1000" min="1"></div>' +
        '<div class="tool-row"><label for="bip-q1">Produktion 2022 (Stück)</label><input type="number" id="bip-q1" value="90" step="5" min="0"></div>' +
        '<div class="tool-read" id="bip-out">…</div></div>',
      setup: function (root) {
        var p0 = root.querySelector("#bip-p0"), q0 = root.querySelector("#bip-q0");
        var p1 = root.querySelector("#bip-p1"), q1 = root.querySelector("#bip-q1");
        var out = root.querySelector("#bip-out");
        function fmt(n) { return Math.round(n).toLocaleString("de-DE"); }
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function upd() {
          var a = parseFloat(p0.value), b = parseFloat(q0.value);
          var c = parseFloat(p1.value), d = parseFloat(q1.value);
          if (!(a > 0) || !(b > 0) || !(c > 0) || !(d >= 0)) { out.innerHTML = "Bitte gültige Werte eingeben."; return; }
          var nom0 = a * b, nom1 = c * d, real1 = a * d;
          var gNom = (nom1 - nom0) / nom0 * 100;
          var gReal = (real1 - nom0) / nom0 * 100;
          var diag;
          if (gNom >= 0 && gReal < 0) diag = '<span class="tool-flag bad">PREISILLUSION!</span> Das nominale BIP wächst nur, weil die Preise gestiegen sind – REAL ist die Wirtschaft geschrumpft (weniger Güter produziert).';
          else if (gReal >= 0 && gNom >= 0) diag = '<span class="tool-flag ok">Reales Wachstum</span> Die Güterproduktion hat tatsächlich zugenommen.';
          else if (gReal < 0) diag = '<span class="tool-flag bad">Reale Schrumpfung</span> Die Güterproduktion hat abgenommen.';
          else diag = '<span class="tool-flag mid">Nominal rückläufig</span> Preisrückgang überlagert die Mengenentwicklung.';
          out.innerHTML =
            "Nominales BIP 2021 = " + fmt(b) + " × " + fmt(a) + " € = <b>" + fmt(nom0) + " €</b><br>" +
            "Nominales BIP 2022 = " + fmt(d) + " × " + fmt(c) + " € = <b>" + fmt(nom1) + " €</b> (" + (gNom >= 0 ? "+" : "") + f1(gNom) + " %)<br>" +
            "Reales BIP 2022 (Preise 2021) = " + fmt(d) + " × " + fmt(a) + " € = <b>" + fmt(real1) + " €</b> (" + (gReal >= 0 ? "+" : "") + f1(gReal) + " %)<br>" + diag;
        }
        [p0, q0, p1, q1].forEach(function (inp) { inp.addEventListener("input", upd); });
        upd();
      },
      hint: "PLE-Lösung mit den Startwerten: nominal 3,0 Mio. → 3,06 Mio. € (+2,0 %), real aber nur 2,7 Mio. € (−10,0 %) – die Wirtschaft ist geschrumpft!",
      options: [
        { label: "Welches BIP misst also das Wirtschaftswachstum?", next: "e_real", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_real: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Reales BIP",
      title: "Nur das reale BIP misst Wirtschaftswachstum",
      text: "Das NOMINALE BIP misst den Wert der Güter zu AKTUELLEN Marktpreisen – es steigt auch dann, wenn nur die Preise steigen. Zur Messung des Wirtschaftswachstums ist es daher NICHT geeignet.\n\nDas REALE BIP misst den Wert der Güter zu Preisen eines BASISJAHRES bzw. des Vorjahres – es ist preisbereinigt (die Preissteigerung wird herausgerechnet) und zeigt die TATSÄCHLICHE Erhöhung oder Verringerung der Güterproduktion.\n\nPLE-Beispiel: nominal +2 % (3,0 → 3,06 Mio. €), real −10 % (nur noch 90 statt 100 Autos, bewertet zu 30.000 €) – trotz 'Wachstum' auf dem Papier ist die Wirtschaft geschrumpft.\n\nQuerverbindungen: Die Preisbereinigung nutzt den Preisindex (→ Schema 'VPI & Inflationsrate'); das %-Wachstum des realen BIP ist das Messkonzept des Wachstumsziels im magischen Viereck (→ Schema 'Magisches Viereck (Regler)')."
    }
  }
});
