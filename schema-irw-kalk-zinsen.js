/*
 * IRW-Schema: Kalkulatorische Zinsen – Durchschnittswertverzinsung (Rechner)
 * Fach: Internes Rechnungswesen (FS 2)
 * Tool-Knoten: Zahlenfelder für AW, Abzugskapital, Zinssatz und die Wahl
 * abnutzbar/nicht abnutzbar – mit den Original-Beispielen (80.000 € / 15.000 €
 * Zuweisung / 10 % → 3.250 €).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 04-08 (Lutz): kalk. Zinsen, betriebsnotwendiges Kapital, Abzugskapital,
 *    Durchschnittswertverzinsung, Grundstücks-Sonderfall, Zinssatz-Praxis (LfF/Kommunen)
 *  - PLE 02-03 (Lutz): kalk. EK-Zinsen als Zusatzkosten (Opportunitätskosten)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-kalk-zinsen",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kalkulatorische Kosten",
  title: "Kalkulatorische Zinsen (Rechner)",
  description: "Wertverzehr durch Kapitalbindung: betriebsnotwendiges Kapital abgrenzen (Abzugskapital!), dann Durchschnittswertverzinsung rechnen – abnutzbar (AW ÷ 2 × i) oder Grundstück (AW × i).",
  start: "start",
  stations: [
    { id: "grundlagen", label: "Grundlagen" },
    { id: "rechner", label: "Rechner" },
    { id: "zinssatz", label: "Zinssatz" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zinsen berechnet",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundlagen",
      kind: "frage",
      norm: "Kapitalbindung",
      title: "Warum Zinsen auf das GESAMTE Kapital?",
      def: "Kalkulatorische Zinsen erfassen den Wertverzehr durch <b>Kapitalbindung</b>: Sie umfassen die zu zahlenden <b>Fremdkapitalzinsen</b> UND die kalkulatorischen <b>Eigenkapitalzinsen</b> (Opportunitätskosten der entgangenen Geldanlage – im ext. Rewe verboten, in der KLR Zusatzkosten).<br><br>Angesetzt werden sie für das gesamte <b>betriebsnotwendige Kapital</b>, unabhängig von der Finanzierungsstruktur – als EINE Kostenart „kalk. Zinsen“:<br><br>betriebsnotwendiges Anlagevermögen<br>+ betriebsnotwendiges Umlaufvermögen <i>(in Verwaltungen i. d. R. verzichtbar)</i><br>− <b>Abzugskapital</b> (Zuweisungen, Zuschüsse)<br>= betriebsnotwendiges Kapital",
      options: [
        { label: "Zum Rechner: Durchschnittswertverzinsung", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "AW ÷ 2 × i",
      title: "Durchschnittswertverzinsung: Wie hoch sind die kalk. Zinsen?",
      def: "Bei linearer Abschreibung sinkt die Kapitalbindung von AW auf 0 – durchschnittlich gebunden ist der HALBE Anschaffungswert. Der wird jedes Jahr gleich verzinst (Praxis-Standard). Bei nicht abnutzbaren Gütern (Grundstücke!) bleibt der volle AW gebunden:",
      tool: '<div class="tool"><div class="tool-title">💰 Zins-Rechner (Durchschnittswertmethode)</div>' +
        '<div class="tool-row"><label for="kz-aw">Anschaffungswert (€)</label><input type="number" id="kz-aw" value="80000" step="5000" min="0"></div>' +
        '<div class="tool-row"><label for="kz-zu">Abzugskapital: Zuweisungen/Zuschüsse (€)</label><input type="number" id="kz-zu" value="15000" step="5000" min="0"></div>' +
        '<div class="tool-row"><label for="kz-i">Kalk. Zinssatz (%)</label><input type="number" id="kz-i" value="10" step="0.5" min="0"></div>' +
        '<div class="tool-row"><label for="kz-art">Vermögensgegenstand</label><select id="kz-art"><option value="ab">abnutzbar (Maschine, Fahrzeug)</option><option value="grund">nicht abnutzbar (Grundstück)</option></select></div>' +
        '<div class="tool-read" id="kz-out">…</div></div>',
      setup: function (root) {
        var aw = root.querySelector("#kz-aw"), zu = root.querySelector("#kz-zu"), zi = root.querySelector("#kz-i"), art = root.querySelector("#kz-art"), out = root.querySelector("#kz-out");
        function eur(n) { return n.toLocaleString("de-DE", { maximumFractionDigits: 0 }) + " €"; }
        function upd() {
          var AW = parseFloat(aw.value) || 0, ZU = parseFloat(zu.value) || 0, i = (parseFloat(zi.value) || 0) / 100;
          var bnk = Math.max(0, AW - ZU);
          var grund = art.value === "grund";
          var basis = grund ? bnk : bnk / 2;
          var zins = basis * i;
          var txt = "Betriebsnotwendiges Kapital = " + eur(AW) + " − " + eur(ZU) + " (Abzugskapital) = <b>" + eur(bnk) + "</b><br>" +
            (grund
              ? "Nicht abnutzbar → keine Abschreibung, volle Bindung: Zinsbasis = <b>" + eur(bnk) + "</b><br>Kalk. Zinsen = " + eur(bnk) + " × " + (i * 100).toLocaleString("de-DE") + " % = <b>" + eur(zins) + " pro Jahr</b><br>"
              : "Abnutzbar → durchschnittliche Bindung = " + eur(bnk) + " ÷ 2 = <b>" + eur(basis) + "</b><br>Kalk. Zinsen = " + eur(basis) + " × " + (i * 100).toLocaleString("de-DE") + " % = <b>" + eur(zins) + " pro Jahr</b> (in jedem Jahr der Nutzungsdauer gleich)<br>");
          if (!grund && Math.abs(zins - 3250) < 1) {
            txt += '<span class="tool-flag ok">✓ Skript-Beispiel getroffen</span> (80.000 − 15.000) ÷ 2 × 10 % = 3.250 €/Jahr. Ohne Abzugskapital wären es 80.000 ÷ 2 × 10 % = 4.000 €.';
          } else {
            txt += '<span class="tool-flag ok">Formeln</span> abnutzbar: (AW − Abzugskapital) ÷ 2 × i · Grundstück: (AW − Abzugskapital) × i.';
          }
          out.innerHTML = txt;
        }
        [aw, zu, zi].forEach(function (el) { el.addEventListener("input", upd); });
        art.addEventListener("change", upd);
        upd();
      },
      hint: "Skript-Beispiele: 80.000 €, 5 J., 10 % → Ø 40.000 € gebunden → 4.000 €/Jahr; mit 15.000 € Zuweisung → 32.500 € → 3.250 €/Jahr.",
      options: [
        { label: "Welcher Zinssatz gilt in der Praxis?", next: "q_zinssatz", tone: "pos" }
      ]
    },

    q_zinssatz: {
      station: "zinssatz",
      kind: "frage",
      norm: "Zinssatz-Wahl",
      title: "Woher kommt der kalkulatorische Zinssatz?",
      def: "Theoretisch kommen drei Sätze in Betracht: reiner <b>EK-Zinssatz</b>, reiner <b>FK-Zinssatz</b> oder ein <b>Mischzinssatz</b>.<br><br>Praxis:<br>• <b>Landesbehörden</b> rechnen mit dem Festzinssatz, den das <b>Landesamt für Finanzen</b> jährlich festlegt und bekannt gibt.<br>• <b>Kommunen</b> können individuell nach ihren tatsächlichen Kapitalverhältnissen rechnen: mit Eigenkapital → individueller <b>Mischzinssatz</b>; verschuldete Kommunen mit negativem EK → langfristiger <b>FK-Zinssatz</b>.",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kalk. Zinsen",
      title: "Kalkulatorische Zinsen: Kapitalbindung kostet – egal wessen Kapital",
      text: "Der Dreischritt vor der Berechnung:\n1. KAPITALHÖHE: betriebsnotwendiges Anlagevermögen (+ Umlaufvermögen, in Verwaltungen meist verzichtbar) − ABZUGSKAPITAL (Zuweisungen und Zuschüsse stehen zinsfrei zur Verfügung!)\n2. BEWERTUNG während der Nutzungsdauer: herrschende Meinung zu Anschaffungswerten; die jährliche Wertminderung wird über die DURCHSCHNITTSWERTVERZINSUNG erfasst – verzinst wird der halbe AW, dadurch sind die Zinsen jedes Jahr gleich hoch. Grundstücke werden nicht abgeschrieben → voller AW × i.\n3. ZINSSATZ: Land = Festzinssatz des LfF; Kommunen = Mischzinssatz nach Kapitalverhältnissen, bei negativem EK der langfristige FK-Zinssatz.\n\nMerkformeln: abnutzbar → kalk. Zinsen = (AW ÷ 2) × i · nicht abnutzbar → AW × i.\n\nZusammen mit der kalkulatorischen Abschreibung bilden die kalk. Zinsen die KAPITALKOSTEN – als Gemeinkosten laufen sie über den BAB in die Gebührenkalkulation."
    }
  }
});
