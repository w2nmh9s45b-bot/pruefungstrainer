/*
 * VWL-Schema: Marktgleichgewicht & Preisbildung – interaktiver Markt-Simulator
 * Fach: Volkswirtschaftslehre (Fachstudium 1/2)
 * Tool-Knoten: Preis-Slider auf einem Modellmarkt (lineare N- und A-Funktion);
 * live werden nachgefragte/angebotene Menge, Überhang und Preistendenz angezeigt.
 * Aufgabe: den Gleichgewichtspreis finden.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 8.5 (Preisbildung bei vollständiger Konkurrenz,
 *    Marktgleichgewicht, Überhänge, Konsumenten-/Produzentenrente, Preisfunktionen)
 *  - "Ueberblick VWL FS II" (Preisbildung ist auch FS-II-Stoff)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-marktgleichgewicht",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1", "FS2"],
  area: "Preisbildung & Elastizität",
  title: "Marktgleichgewicht (Simulator)",
  description: "Mit dem Preis-Slider den Modellmarkt räumen: Wo herrscht Nachfrageüberhang, wo Angebotsüberhang, wo liegt der Gleichgewichtspreis? Danach Konsumenten-/Produzentenrente und die fünf Funktionen des Marktpreises.",
  start: "start",
  stations: [
    { id: "modell", label: "Modell" },
    { id: "simulator", label: "Simulator" },
    { id: "funktionen", label: "Preisfunktionen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Markt geräumt",
    neg: "Ergebnis: Ungleichgewicht",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modell",
      kind: "frage",
      norm: "Vollständige Konkurrenz",
      title: "Das Modell: Preisbildung bei vollständiger Konkurrenz",
      def: "Von <b>vollständiger Konkurrenz</b> spricht man, wenn neben den Bedingungen des <b>vollkommenen Marktes</b> (homogen, transparent, präferenzfrei, unendlich schnelle Reaktion) die Marktform des <b>Polypols</b> vorliegt.<br><br>Elemente des Marktmodells:<br>• <b>Marktgleichgewicht</b>: Angebot = Nachfrage beim Gleichgewichtspreis<br>• <b>Nachfrageüberhang</b> (Angebotslücke): unterhalb des Gleichgewichtspreises<br>• <b>Angebotsüberhang</b> (Nachfragelücke): oberhalb des Gleichgewichtspreises<br><br><i>In der Realität existieren keine Märkte, die dem Modell voll entsprechen – die Börse kommt ihm recht nahe.</i>",
      options: [
        { label: "Zum Simulator: Gleichgewichtspreis finden", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "Modellmarkt",
      title: "Finde den Preis, der den Markt räumt!",
      def: "Modellmarkt mit linearen Funktionen:<br>• Nachfrage: <b>x<sub>N</sub> = 100 − 10 · p</b><br>• Angebot: <b>x<sub>A</sub> = 15 · p − 25</b><br><br>Bewege den Preis-Slider und beobachte die Mengen. Der Markt ist <b>geräumt</b>, wenn x<sub>N</sub> = x<sub>A</sub>.",
      tool: '<div class="tool"><div class="tool-title">🎛 Markt-Simulator: Preis einstellen</div>' +
        '<div class="tool-row"><label for="mg-p">Preis p (€)</label><span class="tool-val" id="mg-pv">3,00 €</span></div>' +
        '<input type="range" id="mg-p" min="2" max="9" step="0.05" value="3">' +
        '<svg viewBox="0 0 320 212" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<line x1="30" y1="182" x2="312" y2="182" stroke="currentColor" opacity=".35"></line>' +
        '<line x1="30" y1="8" x2="30" y2="182" stroke="currentColor" opacity=".35"></line>' +
        '<text x="306" y="196" font-size="9" text-anchor="end" fill="currentColor" opacity=".65">Menge x →</text>' +
        '<text x="36" y="16" font-size="9" fill="currentColor" opacity=".65">↑ Preis p</text>' +
        '<line x1="30" y1="12" x2="310" y2="182" stroke="var(--info)" stroke-width="2.5"></line>' +
        '<text x="292" y="176" font-size="10" font-weight="700" fill="var(--info)">N</text>' +
        '<line x1="30" y1="153.7" x2="310" y2="40.3" stroke="var(--warn)" stroke-width="2.5"></line>' +
        '<text x="294" y="38" font-size="10" font-weight="700" fill="var(--warn)">A</text>' +
        '<circle cx="170" cy="97" r="4" fill="var(--accent)" opacity=".55"></circle>' +
        '<line id="mg-linie" x1="30" y1="131" x2="310" y2="131" stroke="var(--neg)" stroke-width="1.5" stroke-dasharray="5 4"></line>' +
        '<circle id="mg-dn" cx="226" cy="131" r="5" fill="var(--info)" stroke="#fff" stroke-width="1.5"></circle>' +
        '<circle id="mg-da" cx="86" cy="131" r="5" fill="var(--warn)" stroke="#fff" stroke-width="1.5"></circle>' +
        '</svg>' +
        '<div class="tool-read" id="mg-out">…</div></div>',
      setup: function (root) {
        var sp = root.querySelector("#mg-p"), pv = root.querySelector("#mg-pv"), out = root.querySelector("#mg-out");
        var linie = root.querySelector("#mg-linie"), dn = root.querySelector("#mg-dn"), da = root.querySelector("#mg-da");
        function f2(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
        function upd() {
          var p = parseFloat(sp.value);
          var xn = Math.max(0, 100 - 10 * p);
          var xa = Math.max(0, 15 * p - 25);
          pv.textContent = f2(p) + " €";
          var y = (182 - p * 17).toFixed(1);
          linie.setAttribute("y1", y); linie.setAttribute("y2", y);
          dn.setAttribute("cx", (30 + xn * 2.8).toFixed(1)); dn.setAttribute("cy", y);
          da.setAttribute("cx", (30 + xa * 2.8).toFixed(1)); da.setAttribute("cy", y);
          var txt = "Nachgefragte Menge x<sub>N</sub> = <b>" + Math.round(xn) + "</b> · angebotene Menge x<sub>A</sub> = <b>" + Math.round(xa) + "</b><br>";
          if (Math.abs(p - 5) < 0.051) {
            linie.setAttribute("stroke", "var(--pos)");
            txt += '<span class="tool-flag ok">✓ MARKTGLEICHGEWICHT</span> Bei p* = 5,00 € ist x<sub>N</sub> = x<sub>A</sub> = 50: Der Markt ist geräumt – kein Überhang, kein Anpassungsdruck.';
          } else if (p < 5) {
            linie.setAttribute("stroke", "var(--neg)");
            txt += '<span class="tool-flag bad">Nachfrageüberhang: ' + Math.round(xn - xa) + ' ME</span> (Angebotslücke) – der Preis liegt UNTER dem Gleichgewicht. Käufer überbieten sich → <b>Preis steigt</b>, Anbieter dehnen die Produktion aus.';
          } else {
            linie.setAttribute("stroke", "var(--neg)");
            txt += '<span class="tool-flag bad">Angebotsüberhang: ' + Math.round(xa - xn) + ' ME</span> (Nachfragelücke) – der Preis liegt ÜBER dem Gleichgewicht. Läger füllen sich → <b>Preis sinkt</b>, Produktion wird zurückgefahren.';
          }
          out.innerHTML = txt;
        }
        sp.addEventListener("input", upd);
        upd();
      },
      hint: "Rechnerisch: 100 − 10p = 15p − 25 → 125 = 25p → p* = 5,00 €, x* = 50 ME.",
      options: [
        { label: "Gleichgewicht gefunden – was gilt dort?", next: "q_renten", tone: "pos" },
        { label: "Was passiert im Ungleichgewicht?", next: "e_ungleich", tone: "warn" }
      ]
    },

    q_renten: {
      station: "funktionen",
      kind: "frage",
      norm: "Konsumenten-/Produzentenrente",
      title: "Wer profitiert im Gleichgewicht besonders?",
      def: "Im Gleichgewicht entstehen zwei „Renten“:<br><br>• <b>Konsumentenrente</b> = Differenz aus der <b>Zahlungsbereitschaft</b> eines Konsumenten und dem tatsächlich zu zahlenden Preis (alle Käufer, die mehr gezahlt hätten als p*, sparen die Differenz).<br>• <b>Produzentenrente</b> = Differenz aus dem <b>Verkaufspreis</b> und dem Betrag, zu dem der Anbieter bereit gewesen wäre zu verkaufen.<br><br>Im Diagramm: die Flächen zwischen Nachfragekurve bzw. Angebotskurve und der Preislinie.",
      options: [
        { label: "Weiter zu den Funktionen des Marktpreises", next: "q_funktionen", tone: "pos" }
      ]
    },

    q_funktionen: {
      station: "funktionen",
      kind: "frage",
      norm: "5 Preisfunktionen",
      title: "Welche Funktion des Marktpreises ist gemeint?",
      def: "Preise, die sich durch das Zusammenspiel von Angebot und Nachfrage bilden, erfüllen wichtige Funktionen – umso besser, je näher der Markt am vollkommenen Polypol ist:<br><br>• <b>Informationsfunktion</b>: Der Preis enthält Informationen über den „Wert“ des Gutes.<br>• <b>Ausgleichsfunktion</b>: Der Preis gleicht Angebot und Nachfrage aus.<br>• <b>Signalfunktion</b>: Der Preis signalisiert die Knappheit eines Gutes.<br>• <b>Lenkungsfunktion (Allokationsfunktion)</b>: Der Preis lenkt die Produktionsfaktoren auf knappe Märkte.<br>• <b>Erziehungsfunktion (Sanktionsfunktion)</b>: Der Preis bewirkt sparsamen Umgang mit knappen Gütern.",
      options: [
        { label: "Alle fünf verstanden – Ergebnis anzeigen", next: "e_gleichgewicht", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_gleichgewicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Marktgleichgewicht",
      title: "Marktgleichgewicht: Der Preis räumt den Markt",
      text: "Beim Gleichgewichtspreis p* stimmen geplante Nachfrage und geplantes Angebot überein (im Simulator: p* = 5,00 €, x* = 50 ME) – der Preismechanismus hat die unabhängig aufgestellten Pläne von Haushalten und Unternehmen koordiniert.\n\nDie fünf Funktionen des Marktpreises: Information (Wert des Gutes), Ausgleich (Angebot = Nachfrage), Signal (Knappheit), Lenkung/Allokation (Faktoren auf knappe Märkte), Erziehung/Sanktion (sparsamer Umgang).\n\nDazu die Renten: Konsumentenrente (Zahlungsbereitschaft − Preis) und Produzentenrente (Preis − Verkaufsbereitschaft) messen den Vorteil aus dem Tausch.\n\nGreift der Staat direkt in die Preisbildung ein (Höchst-/Mindestpreise), werden diese Funktionen außer Kraft gesetzt → Schema 'Staatliche Preiseingriffe (Simulator)'."
    },

    e_ungleich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Überhang",
      title: "Ungleichgewicht: Der Preis passt sich an",
      text: "Liegt der Preis UNTER dem Gleichgewicht, entsteht ein NACHFRAGEÜBERHANG (Angebotslücke): Nicht alle Kaufwilligen kommen zum Zug, Käufer überbieten sich, der Preis steigt – gleichzeitig lohnt sich für Anbieter die Mehrproduktion.\n\nLiegt der Preis ÜBER dem Gleichgewicht, entsteht ein ANGEBOTSÜBERHANG (Nachfragelücke): Läger füllen sich, Anbieter unterbieten sich, der Preis sinkt.\n\nIn beiden Fällen treibt der Marktmechanismus den Preis zum Gleichgewicht zurück – vorausgesetzt, die Preisbildung ist FREI. Verhindert der Staat die Anpassung (Höchst-/Mindestpreis), bleibt der Überhang dauerhaft bestehen → Schema 'Staatliche Preiseingriffe (Simulator)'."
    }
  }
});
