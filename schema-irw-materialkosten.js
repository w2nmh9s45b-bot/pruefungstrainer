/*
 * IRW-Schema: Materialkosten-Rechner – Verbrauchsermittlung & gewogener Durchschnittspreis
 * Fach: Internes Rechnungswesen (FS 2)
 * Zwei Tool-Knoten: (1) Befund- vs. Skontrationsrechnung mit Schwund-Ermittlung
 * (Ringbuch-Beispiel), (2) gewogener periodischer Durchschnittspreis mit dem
 * Original-Streusalz-Beispiel des Bauhofs (245 t · 69,84 €/t = 17.110 €).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 InRW, FS II):
 *  - PLE 04-08 (Lutz): Materialkosten – Zugangsverfahren, Befundrechnung,
 *    Skontrationsrechnung (Vor-/Nachteile), Bewertung zum gewogenen periodischen
 *    Durchschnittspreis inkl. Rundungsregel („nur das Endergebnis runden!“)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "irw-materialkosten",
  subject: "Internes Rechnungswesen",
  fs: ["FS2"],
  area: "Kostenartenrechnung",
  title: "Materialkosten-Rechner (Verbrauch & Bewertung)",
  description: "Materialkosten = verbrauchte Menge × Preis. Schritt 1: Verbrauch per Befund- oder Skontrationsrechnung (mit Schwund). Schritt 2: Bewertung zum gewogenen periodischen Durchschnittspreis – das Streusalz-Beispiel live.",
  start: "start",
  stations: [
    { id: "methode", label: "Methode" },
    { id: "verbrauch", label: "Verbrauch" },
    { id: "preis", label: "Bewertung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Materialkosten stehen",
    neg: "Ergebnis: Methodengrenze",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "methode",
      kind: "frage",
      norm: "3 Methoden",
      title: "Wie wird der Materialverbrauch ermittelt?",
      def: "Kosten entstehen erst durch den VERBRAUCH des Materials – nicht durch Kauf oder Lagerung. Drei Methoden der Verbrauchsermittlung:<br><br>• <b>Zugangsverfahren</b>: Zugang = Verbrauch (keine echte Erhebung) – nur bei geringwertigem Material mit geringen Bestandsschwankungen vertretbar; typisch für Betriebe OHNE echte KLR<br>• <b>Befundrechnung (Inventurmethode)</b>: Verbrauch = Anfangsbestand + Zugang − Endbestand (lt. Inventur)<br>• <b>Skontrationsrechnung (Fortschreibung)</b>: Verbrauch laufend über Materialentnahmescheine; deckt zusätzlich den Schwund auf",
      options: [
        { label: "Befund & Skontration am Beispiel durchrechnen", next: "q_verbrauch", tone: "pos" },
        { label: "Warum reicht das Zugangsverfahren nicht?", next: "e_zugang", tone: "warn" }
      ]
    },

    q_verbrauch: {
      station: "verbrauch",
      kind: "frage",
      norm: "Ringbuch-Beispiel",
      title: "Verbrauch ermitteln – und den Schwund entlarven",
      def: "Gemeinde M, Büromateriallager (Ringbücher): Anfangsbestand 1.000, zwei Lieferungen à 500. Gib Inventur-Endbestand und Entnahmen lt. Materialentnahmescheinen ein:",
      tool: '<div class="tool"><div class="tool-title">📦 Verbrauchs-Rechner (Befund vs. Skontration)</div>' +
        '<div class="tool-row"><label for="mk-ab">Anfangsbestand (lt. Inventur, Stück)</label><input type="number" id="mk-ab" value="1000" step="50" min="0"></div>' +
        '<div class="tool-row"><label for="mk-zu">Zugänge (lt. Beleg, Stück)</label><input type="number" id="mk-zu" value="1000" step="50" min="0"></div>' +
        '<div class="tool-row"><label for="mk-eb">Ist-Endbestand (lt. Inventur, Stück)</label><input type="number" id="mk-eb" value="780" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="mk-ent">Entnahmen lt. Materialentnahmescheinen (Stück)</label><input type="number" id="mk-ent" value="1200" step="10" min="0"></div>' +
        '<div class="tool-read" id="mk-out1">…</div></div>',
      setup: function (root) {
        var ab = root.querySelector("#mk-ab"), zu = root.querySelector("#mk-zu"), eb = root.querySelector("#mk-eb"), ent = root.querySelector("#mk-ent"), out = root.querySelector("#mk-out1");
        function upd() {
          var AB = parseFloat(ab.value) || 0, ZU = parseFloat(zu.value) || 0, EB = parseFloat(eb.value) || 0, ENT = parseFloat(ent.value) || 0;
          var befund = AB + ZU - EB;
          var sollEB = AB + ZU - ENT;
          var schwund = sollEB - EB;
          var txt = "<b>Befundrechnung:</b> Verbrauch = " + AB + " + " + ZU + " − " + EB + " = <b>" + befund + " Stück</b> (eine Gesamtzahl – ohne Kostenstellenbezug, Schwund unsichtbar)<br>" +
            "<b>Skontration:</b> Soll-Endbestand = " + AB + " + " + ZU + " − " + ENT + " = <b>" + sollEB + " Stück</b>; echter Verbrauch lt. Scheinen = <b>" + ENT + " Stück</b><br>";
          if (schwund > 0) {
            txt += '<span class="tool-flag bad">Schwund: ' + schwund + " Stück</span> Soll-Endbestand (" + sollEB + ") − Ist-Endbestand (" + EB + ") – nur die Skontration deckt diesen nicht verbrauchsbedingten Abgang auf!";
          } else if (schwund === 0) {
            txt += '<span class="tool-flag ok">✓ Kein Schwund</span> Soll- und Ist-Endbestand stimmen überein – Lager und Belege passen zusammen.';
          } else {
            txt += '<span class="tool-flag bad">Ist &gt; Soll (' + (-schwund) + ' Stück)</span> Mehr im Lager als fortgeschrieben – Hinweis auf Zähl- oder Belegfehler (nicht erfasste Rückgaben?).';
          }
          out.innerHTML = txt;
        }
        [ab, zu, eb, ent].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      hint: "Skript-Beispiele: Befund mit EB 1.200 → Verbrauch 800; Skontration mit Entnahmen 1.200 → Soll-EB 800. Die Skontration ist aufwändiger (Scheine auswerten), erlaubt aber kostenstellen-/kostenträgerweise und unterjährige Erfassung plus Verbrauchskontrolle.",
      options: [
        { label: "Weiter zur Bewertung: Welcher Preis gilt?", next: "q_preis", tone: "pos" }
      ]
    },

    q_preis: {
      station: "preis",
      kind: "frage",
      norm: "Streusalz-Beispiel",
      title: "Der gewogene periodische Durchschnittspreis",
      def: "Bauhof, Streusalzlager 2020: Anfangsbestand 120 t (Geldwert 7.680 €), vier Zugänge, Endbestand 65 t. Bei schwankenden Einkaufspreisen wird am Periodenende JEDER Verbrauch mit dem GEWOGENEN Durchschnittspreis bewertet:",
      tool: '<div class="tool"><div class="tool-title">🧂 Durchschnittspreis-Rechner (Streusalz)</div>' +
        '<div class="tool-row"><label for="dp-abm">Anfangsbestand (t)</label><input type="number" id="dp-abm" value="120" step="10" min="0"></div>' +
        '<div class="tool-row"><label for="dp-abw">Geldwert Anfangsbestand (€)</label><input type="number" id="dp-abw" value="7680" step="100" min="0"></div>' +
        '<div class="tool-row"><label for="dp-m1">Zugang Januar: t × €/t</label><input type="number" id="dp-m1" value="60" step="5" min="0"> <input type="number" id="dp-p1" value="76" step="1" min="0"></div>' +
        '<div class="tool-row"><label for="dp-m2">Zugang Februar: t × €/t</label><input type="number" id="dp-m2" value="40" step="5" min="0"> <input type="number" id="dp-p2" value="77" step="1" min="0"></div>' +
        '<div class="tool-row"><label for="dp-m3">Zugang August: t × €/t</label><input type="number" id="dp-m3" value="50" step="5" min="0"> <input type="number" id="dp-p3" value="69" step="1" min="0"></div>' +
        '<div class="tool-row"><label for="dp-m4">Zugang Oktober: t × €/t</label><input type="number" id="dp-m4" value="40" step="5" min="0"> <input type="number" id="dp-p4" value="72" step="1" min="0"></div>' +
        '<div class="tool-row"><label for="dp-eb">Endbestand (t)</label><input type="number" id="dp-eb" value="65" step="5" min="0"></div>' +
        '<div class="tool-read" id="dp-out">…</div></div>',
      setup: function (root) {
        var ids = ["dp-abm", "dp-abw", "dp-m1", "dp-p1", "dp-m2", "dp-p2", "dp-m3", "dp-p3", "dp-m4", "dp-p4", "dp-eb"];
        var el = {};
        ids.forEach(function (i) { el[i] = root.querySelector("#" + i); });
        var out = root.querySelector("#dp-out");
        function f(n, d) { return n.toLocaleString("de-DE", { minimumFractionDigits: d, maximumFractionDigits: d }); }
        function upd() {
          var abm = parseFloat(el["dp-abm"].value) || 0, abw = parseFloat(el["dp-abw"].value) || 0;
          var mengen = [parseFloat(el["dp-m1"].value) || 0, parseFloat(el["dp-m2"].value) || 0, parseFloat(el["dp-m3"].value) || 0, parseFloat(el["dp-m4"].value) || 0];
          var preise = [parseFloat(el["dp-p1"].value) || 0, parseFloat(el["dp-p2"].value) || 0, parseFloat(el["dp-p3"].value) || 0, parseFloat(el["dp-p4"].value) || 0];
          var eb = parseFloat(el["dp-eb"].value) || 0;
          var summeM = abm, summeW = abw;
          for (var i = 0; i < 4; i++) { summeM += mengen[i]; summeW += mengen[i] * preise[i]; }
          if (summeM <= 0) { out.innerHTML = "Bitte Mengen eingeben."; return; }
          var dp = summeW / summeM;
          var verbrauch = summeM - eb;
          var mk = verbrauch * dp;
          var txt = "Gesamtmenge = <b>" + f(summeM, 0) + " t</b> · Gesamtwert = <b>" + f(summeW, 0) + " €</b><br>" +
            "Gewogener Ø-Preis = " + f(summeW, 0) + " € : " + f(summeM, 0) + " t = <b>" + f(dp, 4) + " €/t</b> <i>(mit allen Nachkommastellen weiterrechnen!)</i><br>" +
            "Verbrauch = " + f(summeM, 0) + " − " + f(eb, 0) + " = <b>" + f(verbrauch, 0) + " t</b><br>" +
            "Materialkosten = " + f(verbrauch, 0) + " t × Ø-Preis = <b>" + f(mk, 0) + " €</b><br>";
          if (Math.abs(mk - 17110) < 1) {
            txt += '<span class="tool-flag ok">✓ Skript-Lösung getroffen</span> 245 t × 69,8387096774 €/t = 17.110 € – erst das ENDERGEBNIS wird gerundet; auch der Endbestand wird mit dem Ø-Preis bewertet.';
          } else {
            txt += '<span class="tool-flag bad">Eigenes Szenario</span> Skript-Werte: 310 t / 21.650 € → 69,838… €/t; Verbrauch 245 t; Materialkosten 17.110 €.';
          }
          out.innerHTML = txt;
        }
        ids.forEach(function (i) { el[i].addEventListener("input", upd); });
        upd();
      },
      hint: "„Gewogen“ = jeder Preis wird mit seiner Einkaufsmenge gewichtet. Zwischenrunden verboten – nur das Endergebnis wird gerundet!",
      options: [
        { label: "Materialkosten stehen – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_zugang: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Zugangsverfahren",
      title: "Zugangsverfahren: die Notlösung ohne Verbrauchserhebung",
      text: "Beim Zugangsverfahren wird unterstellt, dass alles in der Periode beschaffte Material auch verbraucht wurde (Zugang = Verbrauch) – ohne jede explizite Erhebung.\n\nDas ist die typische Verfahrensweise rein ausgabenorientierter Erfassung, also von Betrieben OHNE richtige KLR, und bestenfalls vertretbar bei geringwertigen Materialien mit geringen Bestandsschwankungen (der Erhebungsaufwand wäre größer als der Nutzen).\n\nFür eine echte Kostenrechnung braucht es Befund- oder Skontrationsrechnung: Nur sie liefern den tatsächlichen Verbrauch – und nur die Skontration zusätzlich Kostenstellenbezug, unterjährige Werte, Verbrauchskontrolle und den Schwund."
    },

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "MK = Menge × Preis",
      title: "Materialkosten: Menge und Preis sauber getrennt ermittelt",
      text: "Der Zweischritt des Skripts:\n\n1. VERBRAUCHSERMITTLUNG – Befundrechnung (AB + Zugang − EB; einfach, aber ohne Stellenzuordnung, ohne unterjährige Werte, Schwund unsichtbar) oder Skontrationsrechnung (Materialentnahmescheine mit Kostenstelle/Kostenträger; Soll-EB vs. Ist-EB deckt den Schwund auf; dafür organisatorisch aufwändiger).\n\n2. BEWERTUNG – bei schwankenden Anschaffungspreisen (Rabatte, Saison, Inflation) zum gewogenen periodischen Durchschnittspreis: Summe der Geldwerte ÷ Summe der Mengen; damit werden alle Verbräuche UND der Endbestand bewertet.\n\nStreusalz-Referenz: 245 t × 69,8387096774 €/t = 17.110 € – Rechenregel: mit allen Nachkommastellen rechnen, nur das Endergebnis runden. Als Kostenstelleneinzelkosten wandern die Materialkosten dann per Entnahmeschein in den BAB."
    }
  }
});
