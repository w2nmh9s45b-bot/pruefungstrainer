/*
 * VWL-Schema: VGR-Rechner – Entstehung, Verwendung, Verteilung
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 * Zwei Tool-Knoten: Verwendungsrechnung (BIP aus C + G + I + Außenbeitrag) und
 * Verteilungsrechnung (BIP → BNE → Volkseinkommen, Lohnquote) – mit den
 * Original-Zahlen der Arbeitsaufträge 1 und 2 aus der PLE als Presets.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "LV 3.4 VWL II_PLE 01 - 04" (Lutz), Kap. 1.4–1.6 (Entstehungs-, Verwendungs-,
 *    Verteilungsrechnung, Lohn-/Gewinnquote, sekundäre Verteilung; Arbeitsaufträge 1+2)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-vgr-rechner",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Volkswirtschaftliche Gesamtrechnung",
  title: "VGR-Rechner: BIP → BNE → Volkseinkommen",
  description: "Die drei Rechnungen der VGR mit den Original-Arbeitsaufträgen der PLE: Entstehungsrechnung (Wertschöpfungskette Bauer–Bäcker), Verwendungsrechnung (C + G + I + Außenbeitrag) und Verteilungsrechnung bis zum Volkseinkommen samt Lohnquote – alles live nachrechenbar.",
  start: "start",
  stations: [
    { id: "uebersicht", label: "VGR" },
    { id: "rechnung", label: "Rechnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Rechnung steht",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "uebersicht",
      kind: "frage",
      norm: "3 Rechnungen",
      title: "Volkswirtschaftliche Gesamtrechnung: Welcher Rechenweg?",
      def: "Die <b>VGR</b> verschafft einen detaillierten Überblick über die Leistungsfähigkeit einer Volkswirtschaft (Kennzahlen: BIP, BNE, Volkseinkommen) – wichtige Grundlage wirtschaftspolitischer Entscheidungen. Zuständig: Statistisches Bundesamt und Eurostat.<br><br>Ihr Kernstück sind drei Rechnungen:<br>• <b>Entstehungsrechnung</b>: WO wird das BIP erwirtschaftet? (Wirtschaftsbereiche)<br>• <b>Verwendungsrechnung</b>: WOFÜR werden die Güter verwendet? (Konsum, Investition, Ausland)<br>• <b>Verteilungsrechnung</b>: WEM fließen die Einkommen zu? (Arbeit, Unternehmen/Vermögen)",
      options: [
        { label: "Entstehungsrechnung (Wertschöpfungskette)", next: "q_entstehung", tone: "neutral" },
        { label: "Verwendungsrechnung (Rechner)", next: "q_verwendung", tone: "neutral" },
        { label: "Verteilungsrechnung: BIP → BNE → Volkseinkommen (Rechner)", next: "q_verteilung", tone: "neutral" }
      ]
    },

    q_entstehung: {
      station: "rechnung",
      kind: "frage",
      norm: "Entstehungsrechnung",
      title: "Wertschöpfung statt Doppelzählung: Bauer → Müller → Bäcker",
      def: "<b>Schema:</b> Produktionswert − Vorleistungen = <b>Bruttowertschöpfung</b> (+ Gütersteuern − Gütersubventionen = <b>BIP</b> zu Marktpreisen)<br><br>PLE-Beispiel (Brot-Kette):<br>• Bauer verkauft Weizen für 100 € → Wertschöpfung <b>100</b> (keine Vorleistung)<br>• Müller macht Mehl, verkauft für 150 € → 150 − 100 = <b>50</b><br>• Bäcker backt Brot, verkauft für 200 € → 200 − 150 = <b>50</b><br>• Supermarkt verkauft für 230 € → 230 − 200 = <b>30</b><br>→ Bruttowertschöpfung gesamt: <b>230 €</b> = Wert des Endprodukts – die Vorleistungen werden abgezogen, sonst würde der Weizen viermal gezählt!",
      hint: "Die Entstehungsrechnung zeigt, in welcher Höhe die einzelnen Wirtschaftsbereiche zum BIP beitragen – über lange Zeiträume wird so der Strukturwandel sichtbar (primärer Sektor: Landwirtschaft/Urproduktion · sekundärer: Bergbau/Industrie, nimmt ab · tertiärer: Dienstleistungen, nimmt zu).",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_entstehung", tone: "pos" }
      ]
    },

    q_verwendung: {
      station: "rechnung",
      kind: "frage",
      norm: "Verwendungsrechnung",
      title: "BIP über die Nachfrageseite berechnen (Arbeitsauftrag 2)",
      def: "<b>Schema:</b> Private Konsumausgaben + Konsumausgaben des Staates + Bruttoinvestitionen (Nettoinvestitionen + Abschreibungen, inkl. Vorratsveränderungen) + <b>Außenbeitrag</b> (Exporte − Importe) = <b>BIP zu Marktpreisen</b>",
      tool: '<div class="tool"><div class="tool-title">🎛 Verwendungsrechnung (Geldeinheiten)</div>' +
        '<div class="tool-row"><label for="vw-c">Privater Konsum</label><input type="number" id="vw-c" value="2084" step="1"></div>' +
        '<div class="tool-row"><label for="vw-g">Konsum des Staates</label><input type="number" id="vw-g" value="705" step="1"></div>' +
        '<div class="tool-row"><label for="vw-i">Bruttoinvestitionen</label><input type="number" id="vw-i" value="791" step="1"></div>' +
        '<div class="tool-row"><label for="vw-ex">Exporte</label><input type="number" id="vw-ex" value="968" step="1"></div>' +
        '<div class="tool-row"><label for="vw-im">Importe</label><input type="number" id="vw-im" value="907" step="1"></div>' +
        '<div class="tool-read" id="vw-out">…</div></div>',
      setup: function (root) {
        var ids = ["vw-c", "vw-g", "vw-i", "vw-ex", "vw-im"];
        var out = root.querySelector("#vw-out");
        function fmt(n) { return Math.round(n).toLocaleString("de-DE"); }
        function upd() {
          var v = ids.map(function (id) { return parseFloat(root.querySelector("#" + id).value); });
          if (v.some(function (x) { return isNaN(x); })) { out.innerHTML = "Bitte gültige Werte eingeben."; return; }
          var ab = v[3] - v[4];
          var bip = v[0] + v[1] + v[2] + ab;
          out.innerHTML =
            "Außenbeitrag = Exporte − Importe = " + fmt(v[3]) + " − " + fmt(v[4]) + " = <b>" + fmt(ab) + "</b>" +
            (ab >= 0 ? ' <span class="tool-flag ok">Exportüberschuss</span>' : ' <span class="tool-flag mid">Importüberschuss</span>') + "<br>" +
            "BIP = " + fmt(v[0]) + " + " + fmt(v[1]) + " + " + fmt(v[2]) + " + " + fmt(ab) + " = <b>" + fmt(bip) + "</b><br>" +
            "Anteile: privater Konsum " + fmt(v[0] / bip * 100) + " % · Staat " + fmt(v[1] / bip * 100) + " % · Investitionen " + fmt(v[2] / bip * 100) + " %";
        }
        ids.forEach(function (id) { root.querySelector("#" + id).addEventListener("input", upd); });
        upd();
      },
      hint: "PLE-Lösung (Arbeitsauftrag 2): Außenbeitrag 61 → BIP = 2.084 + 705 + 791 + 61 = 3.641 Geldeinheiten. Faustregel Deutschland: über die Hälfte privater Konsum, je rund ein Fünftel Staat und Investitionen; Exportüberschüsse seit 1993.",
      options: [
        { label: "Weiter zur Verteilungsrechnung (BIP → BNE → VE)", next: "q_verteilung", tone: "pos" },
        { label: "Ergebnis anzeigen", next: "e_verwendung", tone: "neutral" }
      ]
    },

    q_verteilung: {
      station: "rechnung",
      kind: "frage",
      norm: "Verteilungsrechnung",
      title: "Vom BIP zum Volkseinkommen (Arbeitsaufträge 1 + 2)",
      def: "<b>Schema:</b><br>BIP zu Marktpreisen<br>+ Primäreinkommen aus der übrigen Welt<br>− Primäreinkommen an die übrige Welt<br>= <b>Bruttonationaleinkommen (BNE)</b> <i>(Wechsel Inlands- → Inländerkonzept)</i><br>− Abschreibungen<br>− Produktions- und Importabgaben an den Staat<br>+ Subventionen<br>= <b>Volkseinkommen</b> (= Arbeitnehmerentgelt + Unternehmens- und Vermögenseinkommen)<br><br><b>Lohnquote</b> = Arbeitnehmerentgelt ÷ Volkseinkommen × 100 (AN-Entgelt leer lassen, wenn nicht gefragt).",
      tool: '<div class="tool"><div class="tool-title">🎛 Verteilungsrechnung</div>' +
        '<div class="tool-row"><label for="vt-bip">BIP zu Marktpreisen</label><input type="number" id="vt-bip" value="368" step="1"></div>' +
        '<div class="tool-row"><label for="vt-pe">Primäreink. AUS der übrigen Welt</label><input type="number" id="vt-pe" value="11" step="1"></div>' +
        '<div class="tool-row"><label for="vt-pa">Primäreink. AN die übrige Welt</label><input type="number" id="vt-pa" value="9" step="1"></div>' +
        '<div class="tool-row"><label for="vt-ab">Abschreibungen</label><input type="number" id="vt-ab" value="65" step="1"></div>' +
        '<div class="tool-row"><label for="vt-pi">Produktions-/Importabgaben</label><input type="number" id="vt-pi" value="30" step="1"></div>' +
        '<div class="tool-row"><label for="vt-su">Subventionen</label><input type="number" id="vt-su" value="16" step="1"></div>' +
        '<div class="tool-row"><label for="vt-an">Arbeitnehmerentgelt (optional)</label><input type="number" id="vt-an" value="" step="1" placeholder="–"></div>' +
        '<div style="margin:4px 0 2px"><button type="button" class="tool-preset" id="vt-pre1">📋 Arbeitsauftrag 1</button>' +
        '<button type="button" class="tool-preset" id="vt-pre2">📋 Arbeitsauftrag 2 (mit Lohnquote)</button></div>' +
        '<div class="tool-read" id="vt-out">…</div></div>',
      setup: function (root) {
        var f = {};
        ["bip", "pe", "pa", "ab", "pi", "su", "an"].forEach(function (k) { f[k] = root.querySelector("#vt-" + k); });
        var out = root.querySelector("#vt-out");
        function fmt(n) { return Math.round(n).toLocaleString("de-DE"); }
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function upd() {
          var bip = parseFloat(f.bip.value), pe = parseFloat(f.pe.value), pa = parseFloat(f.pa.value);
          var ab = parseFloat(f.ab.value), pi = parseFloat(f.pi.value), su = parseFloat(f.su.value);
          if ([bip, pe, pa, ab, pi, su].some(function (x) { return isNaN(x); })) { out.innerHTML = "Bitte gültige Werte eingeben."; return; }
          var bne = bip + pe - pa;
          var ve = bne - ab - pi + su;
          var html =
            "BNE = " + fmt(bip) + " + " + fmt(pe) + " − " + fmt(pa) + " = <b>" + fmt(bne) + "</b><br>" +
            "Volkseinkommen = " + fmt(bne) + " − " + fmt(ab) + " − " + fmt(pi) + " + " + fmt(su) + " = <b>" + fmt(ve) + "</b>";
          var an = parseFloat(f.an.value);
          if (!isNaN(an) && ve > 0) {
            var lq = an / ve * 100;
            html += "<br>Lohnquote = " + fmt(an) + " ÷ " + fmt(ve) + " × 100 = <b>" + f1(lq) + " %</b> · Rest (Unternehmens- u. Vermögenseinkommen): <b>" + f1(100 - lq) + " %</b>";
            html += '<br><span class="tool-flag ' + (lq >= 60 && lq <= 75 ? "ok" : "mid") + '">Faustregel: Verhältnis ≈ 2 : 1 (AN-Entgelte : Unternehmens-/Vermögenseinkommen)</span>';
          }
          out.innerHTML = html;
        }
        Object.keys(f).forEach(function (k) { f[k].addEventListener("input", upd); });
        root.querySelector("#vt-pre1").addEventListener("click", function () {
          f.bip.value = "368"; f.pe.value = "11"; f.pa.value = "9"; f.ab.value = "65"; f.pi.value = "30"; f.su.value = "16"; f.an.value = ""; upd();
        });
        root.querySelector("#vt-pre2").addEventListener("click", function () {
          f.bip.value = "3641"; f.pe.value = "124"; f.pa.value = "154"; f.ab.value = "473"; f.pi.value = "460"; f.su.value = "67"; f.an.value = "1907"; upd();
        });
        upd();
      },
      hint: "PLE-Lösungen: Arbeitsauftrag 1 → BNE 370, Volkseinkommen 291. Arbeitsauftrag 2 → BNE 3.611, Volkseinkommen 2.745, Lohnquote ≈ 69,5 %.",
      options: [
        { label: "Und was ist die SEKUNDÄRE Einkommensverteilung?", next: "q_sekundaer", tone: "pos" },
        { label: "Ergebnis anzeigen", next: "e_verteilung", tone: "neutral" }
      ]
    },

    q_sekundaer: {
      station: "rechnung",
      kind: "frage",
      norm: "Primär → sekundär",
      title: "Vom Primäreinkommen zum verfügbaren Einkommen",
      def: "Die <b>Primärverteilung</b> ergibt sich direkt aus dem Produktionsprozess (Entlohnung der Produktionsfaktoren – funktionale Einkommensverteilung). Durch die staatliche <b>Umverteilung</b> über Steuern und Transfers wird daraus die <b>Sekundärverteilung</b>:<br><br>Primäreinkommen der privaten Haushalte<br>− direkte Steuern (Einkommensteuer, Kapitalertragsteuer)<br>− Nettosozialbeiträge (Sozialversicherung)<br>+ monetäre Sozialleistungen (Transfers, z. B. Wohngeld)<br>= <b>verfügbares Einkommen</b> der privaten Haushalte (für Konsum und Sparen)",
      options: [
        { label: "Komplett – Ergebnis anzeigen", next: "e_verteilung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_entstehung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Entstehungsrechnung",
      title: "Entstehungsrechnung: Wertschöpfung je Wirtschaftsbereich",
      text: "Schema: Produktionswert − Vorleistungen = Bruttowertschöpfung; + Gütersteuern (z. B. Mehrwertsteuer) − Gütersubventionen = BIP zu Marktpreisen.\n\nKernidee: Nur die WERTSCHÖPFUNG jeder Stufe zählt – Vorleistungen (Roh-, Hilfs-, Betriebsstoffe, bezogene Dienstleistungen) werden abgezogen, sonst käme es zu Doppelzählungen (Brot-Beispiel: 100 + 50 + 50 + 30 = 230 = Endverkaufspreis).\n\nSubventionen werden abgezogen, weil sie keinen von den Unternehmen geschaffenen Wert darstellen, sondern staatliche Hilfen sind.\n\nAussage: Die Entstehungsrechnung zeigt die Beiträge der Wirtschaftsbereiche zum BIP – und über lange Zeiträume den STRUKTURWANDEL (sekundärer Sektor ↓, tertiärer Sektor ↑)."
    },

    e_verwendung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verwendungsrechnung",
      title: "Verwendungsrechnung: Wer fragt die Güter nach?",
      text: "Schema: Private Konsumausgaben + Konsumausgaben des Staates + Bruttoinvestitionen + Außenbeitrag (Exporte − Importe) = BIP zu Marktpreisen.\n\nGrößenordnungen für Deutschland (PLE): über die Hälfte des BIP entfällt auf die privaten Konsumausgaben; je etwa ein Fünftel auf Konsum des Staates (Verwaltung, Sicherheit, Bildung, Gesundheit – unentgeltlich bereitgestellt) und auf Investitionen (Bauten, Ausrüstungen, F&E, Vorräte).\n\nAußenbeitrag: Deutschland erzielt seit 1993 stets Exportüberschüsse – positive Impulse fürs Wachstum, aber Spannungsfeld zum Ziel 'außenwirtschaftliches Gleichgewicht' im magischen Viereck.\n\nArbeitsauftrag 2: BIP = 2.084 + 705 + 791 + (968 − 907) = 3.641."
    },

    e_verteilung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Verteilungsrechnung",
      title: "Verteilungsrechnung: Vom BIP zum Volkseinkommen",
      text: "Der Rechenweg:\nBIP + Primäreinkommen aus der übrigen Welt − Primäreinkommen an die übrige Welt = BNE (Wechsel vom Inlands- zum Inländerkonzept!)\nBNE − Abschreibungen − Produktions-/Importabgaben + Subventionen = VOLKSEINKOMMEN.\n\nDas Volkseinkommen verteilt sich funktional auf Arbeitnehmerentgelt + Unternehmens- und Vermögenseinkommen (Faustregel großer Wirtschaftsnationen ≈ 2:1).\n\nLOHNQUOTE = AN-Entgelt ÷ Volkseinkommen × 100 – bekannteste Kennziffer der funktionalen Verteilung; Aussagekraft nimmt ab, weil rund 40 % aller Vermögenseinkommen inzwischen auf Arbeitnehmerhaushalte entfallen. Die 'Gewinnquote' (Rest) enthält auch Zins-, Dividenden-, Pacht- und Mieteinkünfte.\n\nÜber Steuern und Transfers wird aus der Primär- die Sekundärverteilung → verfügbares Einkommen (Konsum + Sparen).\n\nLösungen: AA 1: BNE 370, VE 291 · AA 2: BNE 3.611, VE 2.745, Lohnquote 69,5 %."
    }
  }
});
