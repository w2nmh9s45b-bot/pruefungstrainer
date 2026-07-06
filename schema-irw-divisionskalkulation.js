/*
 * IRW-Schema: Divisionskalkulation (Rechner) – Wasserwerk & Bäderbetrieb mit Zuschuss-Slider
 * Fach: Internes Rechnungswesen (FS 2)
 * Zwei Tool-Knoten: (1) einfache Division am Wasserwerk (1,46 €/m³),
 * (2) mehrfache Division am Bäderbetrieb (7,50/11,20/5,30 €) – ergänzt um einen
 * Eintrittspreis-Slider, der live den Zuschussbedarf zeigt (OLE-04-Gedanke).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - OLE 04 (Lutz): Prämissen und Beispiele der einfachen und mehrfachen
 *    Divisionskalkulation (Wasserwerk, Städtisches Freibad), Selbstkosten und
 *    Zuschussbedarf bei politischen Preisen
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-divisionskalkulation",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenträger & Kalkulation",
  title: "Divisionskalkulation (Rechner)",
  description: "Einfach und mehrfach dividieren: Wasserwerk (ein homogenes Produkt) und Bäderbetrieb (drei Endkostenstellen) – mit Eintrittspreis-Slider für den Zuschussbedarf pro Besucher.",
  start: "start",
  stations: [
    { id: "einfach", label: "Einfach" },
    { id: "mehrfach", label: "Mehrfach" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: kalkuliert",
    neg: "Ergebnis: Grenze",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "einfach",
      kind: "frage",
      norm: "Wasserwerk",
      title: "Einfache Divisionskalkulation: ein Produkt, eine Division",
      def: "Prämissen: nur EIN homogenes Produkt, keine Lagerbestandsveränderungen, keine Kostenstellenrechnung nötig. Kommunales Wasserwerk:",
      tool: '<div class="tool"><div class="tool-title">🚰 Einfache Division (Wasserwerk)</div>' +
        '<div class="tool-row"><label for="dk-k">Gesamtkosten der Periode (€)</label><input type="number" id="dk-k" value="2774000" step="10000" min="0"></div>' +
        '<div class="tool-row"><label for="dk-m">Erzeugte Menge (m³)</label><input type="number" id="dk-m" value="1900000" step="10000" min="1"></div>' +
        '<div class="tool-read" id="dk-out">…</div></div>',
      setup: function (root) {
        var k = root.querySelector("#dk-k"), m = root.querySelector("#dk-m"), out = root.querySelector("#dk-out");
        function upd() {
          var K = parseFloat(k.value) || 0, M = parseFloat(m.value) || 1;
          var st = K / M;
          out.innerHTML = "Selbstkosten je m³ = " + K.toLocaleString("de-DE") + " € ÷ " + M.toLocaleString("de-DE") + " m³ = <b>" +
            st.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " €/m³</b><br>" +
            (Math.abs(st - 1.46) < 0.005
              ? '<span class="tool-flag ok">✓ Skript-Lösung: 1,46 €/m³</span> Die kostendeckende Gebühr je Kubikmeter Frischwasser.'
              : '<span class="tool-flag ok">Formel</span> k = Gesamtkosten ÷ Leistungsmenge – ohne Trennung in Einzel-/Gemeinkosten.');
        }
        [k, m].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      options: [
        { label: "Mehrere Produkte? → mehrfache Division (Bäderbetrieb)", next: "q_mehrfach", tone: "pos" }
      ]
    },

    q_mehrfach: {
      station: "mehrfach",
      kind: "frage",
      norm: "Bäderbetrieb",
      title: "Mehrfache Division + Zuschussbedarf im Bäderbetrieb",
      def: "Je Endkostenstelle eine eigene Division (Kostenstellenrechnung zwingend!). Städtisches Freibad mit drei Bereichen – stelle zusätzlich den politischen Eintrittspreis ein und beobachte den Zuschussbedarf:",
      tool: '<div class="tool"><div class="tool-title">🏊 Mehrfache Division (drei Endkostenstellen)</div>' +
        '<div class="tool-row"><label for="mb-k1">Schwimmhalle: Kosten (€) / Besucher</label><input type="number" id="mb-k1" value="975000" step="5000" min="0"> <input type="number" id="mb-b1" value="130000" step="5000" min="1"></div>' +
        '<div class="tool-row"><label for="mb-k2">Sauna: Kosten (€) / Besucher</label><input type="number" id="mb-k2" value="168000" step="1000" min="0"> <input type="number" id="mb-b2" value="15000" step="1000" min="1"></div>' +
        '<div class="tool-row"><label for="mb-k3">Solarium: Kosten (€) / Besucher</label><input type="number" id="mb-k3" value="106000" step="1000" min="0"> <input type="number" id="mb-b3" value="20000" step="1000" min="1"></div>' +
        '<div class="tool-row"><label for="mb-p">Politischer Eintrittspreis Schwimmhalle (€)</label><span class="tool-val" id="mb-pv">4,50 €</span></div>' +
        '<input type="range" id="mb-p" min="0" max="12" step="0.5" value="4.5">' +
        '<div class="tool-read" id="mb-out">…</div></div>',
      setup: function (root) {
        var ids = ["mb-k1", "mb-b1", "mb-k2", "mb-b2", "mb-k3", "mb-b3"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var sp = root.querySelector("#mb-p"), pv = root.querySelector("#mb-pv"), out = root.querySelector("#mb-out");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function upd() {
          var k1 = +el["mb-k1"].value || 0, b1 = +el["mb-b1"].value || 1;
          var k2 = +el["mb-k2"].value || 0, b2 = +el["mb-b2"].value || 1;
          var k3 = +el["mb-k3"].value || 0, b3 = +el["mb-b3"].value || 1;
          var p = parseFloat(sp.value);
          pv.textContent = f2(p) + " €";
          var s1 = k1 / b1, s2 = k2 / b2, s3 = k3 / b3;
          var zb = s1 - p;
          var txt = "Selbstkosten je Besucher: Schwimmhalle <b>" + f2(s1) + " €</b> · Sauna <b>" + f2(s2) + " €</b> · Solarium <b>" + f2(s3) + " €</b><br>" +
            "Schwimmhalle: Eintritt " + f2(p) + " € vs. Selbstkosten " + f2(s1) + " € → ";
          if (zb > 0.005) {
            txt += "<b>Zuschussbedarf " + f2(zb) + " € je Besucher</b> (gesamt: " + Math.round(zb * b1).toLocaleString("de-DE") + " €/Jahr aus dem Haushalt)<br>" +
              '<span class="tool-flag bad">Politischer Preis</span> Der Eintritt deckt die Selbstkosten nicht – die Differenz braucht das Budget des Bäderbereichs (Haushaltsplanaufstellung!).';
          } else {
            txt += "<b>kostendeckend" + (zb < -0.005 ? " mit Überschuss " + f2(-zb) + " €" : "") + "</b><br>" +
              '<span class="tool-flag ok">✓ Kostendeckung erreicht</span> Ab ' + f2(s1) + ' € Eintritt trägt sich die Schwimmhalle selbst – Selbstkosten = kostendeckende Benutzungsgebühr.';
          }
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        sp.addEventListener("input", upd);
        upd();
      },
      hint: "Skript-Lösung: 7,50 € / 11,20 € / 5,30 €. OLE-04-Beispiel zum Zuschuss: Selbstkosten 11 €, Eintritt 4,50 € → 6,50 € Zuschussbedarf je Besucher.",
      options: [
        { label: "Kalkulation steht – Ergebnis anzeigen", next: "e_fertig", tone: "pos" },
        { label: "Und wenn eine Stelle MEHRERE Sorten erbringt?", next: "e_grenze", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Division",
      title: "Divisionskalkulation: der direkte Weg zu den Stückkosten",
      text: "EINFACHE Division (ein homogenes Produkt im ganzen Betrieb, keine Lagerveränderung, keine Kostenstellenrechnung nötig): k = Gesamtkosten ÷ Menge – Wasserwerk: 2.774.000 € ÷ 1.900.000 m³ = 1,46 €/m³.\n\nMEHRFACHE Division (mehrere verschiedenartige Produkte, jede in eigener Endkostenstelle – kommunaltypisch!): je Stelle eine eigene Division, Kostenstellenrechnung zwingend – Bäderbetrieb: 7,50 € / 11,20 € / 5,30 € je Besucher.\n\nDie Selbstkosten sind zugleich die kostendeckende Gebühr; liegt der politische Preis darunter, entsteht Zuschussbedarf (Selbstkosten − Preis) – eine zentrale Information für die Budgetierung im Haushalt."
    },

    e_grenze: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Verfahrensgrenze",
      title: "Mehrere Sorten in EINER Stelle: Division reicht nicht mehr",
      text: "Die mehrfache Divisionskalkulation setzt voraus, dass in jeder Endkostenstelle genau EIN Produkt erstellt wird. Erbringt eine Endkostenstelle mehrere ARTÄHNLICHE Leistungen (Perso/Pass/Kinderausweis; 35/50/100-l-Tonnen; Kita-Altersgruppen), lässt sich nicht mehr einfach durch eine Gesamtmenge teilen – die Sorten beanspruchen die Stelle unterschiedlich stark.\n\nDann kommt die ÄQUIVALENZZIFFERNKALKULATION (gewogene Division) zum Zug: Das stabile Kostenverhältnis der Sorten wird über Äquivalenzziffern abgebildet, die Mengen werden in Recheneinheiten der Bezugssorte umgerechnet.\n\nWeiter im Schema „Äquivalenzziffern (Rechner)“ mit Kita- und Müllabfuhr-Beispiel."
    }
  }
});
