/*
 * VWL-Schema: Magisches Viereck (§ 1 StWG) – interaktives Regler-Tool
 * Fach: Volkswirtschaftslehre (Fachstudium 2)
 * Tool-Knoten: vier Schieberegler (Inflationsrate, Arbeitslosenquote, reales Wachstum,
 * Leistungsbilanzsaldo) – die App bewertet live die Zielerreichung je Ecke des Vierecks.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS II):
 *  - "Inflation Skript OLE VWL II" (Göbel-Porz), Kap. 1.4 (Ziele, § 1 StWG wörtlich
 *    zitiert, Messkonzepte, magisches Sechseck)
 *  - Hinweis: Das StabG/StWG liegt nicht als Volltext im Gesetze-Vault; der Wortlaut
 *    des § 1 StWG ist dem Skript entnommen. Die Ampel-Richtwerte sind Faustwerte der
 *    Literatur – § 1 StWG selbst nennt KEINE Zahlenwerte.
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-magisches-viereck",
  subject: "Volkswirtschaftslehre",
  fs: ["FS2"],
  area: "Konjunktur & Stabilisierung",
  title: "Magisches Viereck (Regler)",
  description: "Vier Regler, vier Ziele des § 1 StWG: Preisniveaustabilität, hoher Beschäftigungsstand, außenwirtschaftliches Gleichgewicht, stetiges und angemessenes Wachstum. Stelle die Wirtschaftslage ein und sieh live, welche Ecken des Vierecks grün werden – und warum alle vier zugleich 'Magie' wären.",
  start: "start",
  stations: [
    { id: "gesetz", label: "§ 1 StWG" },
    { id: "regler", label: "Zielerreichung" },
    { id: "magie", label: "Warum magisch?" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ziele geklärt",
    neg: "Ergebnis: Zielkonflikt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "gesetz",
      kind: "frage",
      norm: "§ 1 StWG",
      title: "Das gesamtwirtschaftliche Gleichgewicht (§ 1 StWG)",
      def: "Vier wirtschaftspolitische Ziele sind gesetzlich normiert – § 1 des Gesetzes zur Förderung der Stabilität und des Wachstums der Wirtschaft (StWG, 1967):<br><br><i>„Bund und Länder haben bei ihren wirtschafts- und finanzpolitischen Maßnahmen die Erfordernisse des gesamtwirtschaftlichen Gleichgewichts zu beachten. Die Maßnahmen sind so zu treffen, dass sie im Rahmen der marktwirtschaftlichen Ordnung gleichzeitig zur <b>Stabilität des Preisniveaus</b>, zu einem <b>hohen Beschäftigungsstand</b> und <b>außenwirtschaftlichem Gleichgewicht</b> bei <b>stetigem und angemessenem Wirtschaftswachstum</b> beitragen.“</i><br><br>Messkonzepte: Verbraucherpreisindex · Arbeitslosenquote · Leistungsbilanz · reales BIP (%-Zuwachsrate).",
      options: [
        { label: "Zum Regler-Tool: Zielerreichung prüfen", next: "q_regler", tone: "pos" }
      ]
    },

    q_regler: {
      station: "regler",
      kind: "frage",
      norm: "4 Ziele · 4 Regler",
      title: "Stelle die Wirtschaftslage ein!",
      def: "Bewege die vier Regler und beobachte die Ecken des Vierecks. Die Ampelgrenzen sind <b>Faustwerte der Literatur</b> (das Gesetz nennt keine Zahlen): Preisstabilität ≈ <b>0–2 %</b> Inflation (EZB-Ziel: nahe 2 %) · Vollbeschäftigung ≈ ALQ unter <b>4 %</b> · angemessenes Wachstum ≈ <b>2–3 %</b> real · außenwirtschaftliches Gleichgewicht ≈ Leistungsbilanzsaldo zwischen <b>−2 und +2 %</b> des BIP.",
      tool: '<div class="tool"><div class="tool-title">🎛 Magisches Viereck einstellen</div>' +
        '<div class="tool-row"><label for="mv-inf">Inflationsrate (VPI)</label><span class="tool-val" id="mv-infv">2,0 %</span></div>' +
        '<input type="range" id="mv-inf" min="-2" max="12" step="0.1" value="2">' +
        '<div class="tool-row"><label for="mv-alq">Arbeitslosenquote</label><span class="tool-val" id="mv-alqv">5,5 %</span></div>' +
        '<input type="range" id="mv-alq" min="0" max="12" step="0.1" value="5.5">' +
        '<div class="tool-row"><label for="mv-bip">Reales BIP-Wachstum</label><span class="tool-val" id="mv-bipv">1,0 %</span></div>' +
        '<input type="range" id="mv-bip" min="-4" max="6" step="0.1" value="1">' +
        '<div class="tool-row"><label for="mv-lb">Leistungsbilanzsaldo (% des BIP)</label><span class="tool-val" id="mv-lbv">4,0 %</span></div>' +
        '<input type="range" id="mv-lb" min="-6" max="9" step="0.1" value="4">' +
        '<svg viewBox="0 0 320 196" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<polygon points="160,22 288,98 160,174 32,98" fill="none" stroke="var(--accent)" stroke-width="2"></polygon>' +
        '<circle id="mv-c1" cx="160" cy="22" r="9" fill="var(--pos)"></circle>' +
        '<text x="160" y="12" font-size="9.5" font-weight="700" text-anchor="middle" fill="currentColor">Preisniveaustabilität</text>' +
        '<circle id="mv-c2" cx="288" cy="98" r="9" fill="var(--neg)"></circle>' +
        '<text x="288" y="120" font-size="9.5" font-weight="700" text-anchor="middle" fill="currentColor">Beschäftigung</text>' +
        '<circle id="mv-c3" cx="160" cy="174" r="9" fill="var(--neg)"></circle>' +
        '<text x="160" y="192" font-size="9.5" font-weight="700" text-anchor="middle" fill="currentColor">Wachstum</text>' +
        '<circle id="mv-c4" cx="32" cy="98" r="9" fill="var(--neg)"></circle>' +
        '<text x="32" y="120" font-size="9.5" font-weight="700" text-anchor="middle" fill="currentColor">Außenwirtschaft</text>' +
        '<text id="mv-score" x="160" y="103" font-size="15" font-weight="800" text-anchor="middle" fill="var(--accent)">1 / 4</text>' +
        '</svg>' +
        '<div class="tool-read" id="mv-out">…</div></div>',
      setup: function (root) {
        var inf = root.querySelector("#mv-inf"), alq = root.querySelector("#mv-alq");
        var bip = root.querySelector("#mv-bip"), lb = root.querySelector("#mv-lb");
        var out = root.querySelector("#mv-out"), score = root.querySelector("#mv-score");
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function setVal(id, v) { root.querySelector(id).textContent = f1(v) + " %"; }
        function upd() {
          var vInf = parseFloat(inf.value), vAlq = parseFloat(alq.value);
          var vBip = parseFloat(bip.value), vLb = parseFloat(lb.value);
          setVal("#mv-infv", vInf); setVal("#mv-alqv", vAlq); setVal("#mv-bipv", vBip); setVal("#mv-lbv", vLb);
          var okInf = vInf >= 0 && vInf <= 2;
          var okAlq = vAlq < 4;
          var okBip = vBip >= 2 && vBip <= 3;
          var okLb = Math.abs(vLb) <= 2;
          root.querySelector("#mv-c1").setAttribute("fill", okInf ? "var(--pos)" : "var(--neg)");
          root.querySelector("#mv-c2").setAttribute("fill", okAlq ? "var(--pos)" : "var(--neg)");
          root.querySelector("#mv-c3").setAttribute("fill", okBip ? "var(--pos)" : "var(--neg)");
          root.querySelector("#mv-c4").setAttribute("fill", okLb ? "var(--pos)" : "var(--neg)");
          var n = (okInf ? 1 : 0) + (okAlq ? 1 : 0) + (okBip ? 1 : 0) + (okLb ? 1 : 0);
          score.textContent = n + " / 4";
          function flag(ok, txtOk, txtBad) {
            return ok ? '<span class="tool-flag ok">✓ ' + txtOk + "</span>" : '<span class="tool-flag bad">✕ ' + txtBad + "</span>";
          }
          var diag = "";
          if (vInf < 0) diag = " Achtung: negatives Preisniveau = DEFLATION – ebenfalls Zielverfehlung!";
          if (vBip < 0 && vInf > 3) diag = " Deine Einstellung zeigt STAGFLATION: Stagnation/Schrumpfung bei hoher Inflation – die schwierigste Lage für die Stabilisierungspolitik.";
          out.innerHTML =
            flag(okInf, "Preisniveau stabil (0–2 %)", "Preisziel verfehlt") +
            flag(okAlq, "Vollbeschäftigung (< 4 %)", "Beschäftigungsziel verfehlt") +
            flag(okBip, "Wachstum angemessen (2–3 %)", "Wachstumsziel verfehlt") +
            flag(okLb, "Außenwirtschaft ausgeglichen (±2 %)", "Außenwirtschaftliches Ungleichgewicht") +
            "<br><b>" + n + " von 4 Zielen</b> erreicht." +
            (n === 4 ? " 🎉 Alle vier gleichzeitig – genau DAS gelingt in der Realität wegen der Zielkonflikte praktisch nie. Deshalb: „magisches“ Viereck!" : diag);
        }
        [inf, alq, bip, lb].forEach(function (s) { s.addEventListener("input", upd); });
        upd();
      },
      options: [
        { label: "Warum heißt es eigentlich „magisch“?", next: "q_magie", tone: "pos" }
      ]
    },

    q_magie: {
      station: "magie",
      kind: "frage",
      norm: "Zielkonflikte",
      title: "Warum „magisches“ Viereck?",
      def: "<b>Gesamtwirtschaftliches Gleichgewicht</b> liegt vor, wenn alle Produktionsfaktoren vollbeschäftigt sind und sich alle Märkte (Arbeits-, Kredit-, Gütermärkte) ausgleichen – die <b>gleichzeitige</b> Verwirklichung aller vier Ziele.<br><br>„Magisch“, weil zwischen den Zielen <b>Konflikte</b> bestehen: Wer im Boom die Beschäftigung weiter anheizt, riskiert Inflation; wer die Inflation restriktiv bekämpft, bremst Wachstum und Beschäftigung; Exportüberschüsse fördern Beschäftigung, verletzen aber das außenwirtschaftliche Gleichgewicht. Alle vier zugleich zu treffen, grenzt an Zauberei.",
      options: [
        { label: "Und das magische Sechseck?", next: "e_sechseck", tone: "neutral" },
        { label: "Ergebnis: Viereck komplett", next: "e_viereck", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_viereck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 1 StWG",
      title: "Magisches Viereck: Ziele und Messkonzepte sitzen",
      text: "Die vier Ziele des § 1 StWG mit ihren Messkonzepten:\n1. Stabilität des Preisniveaus → Verbraucherpreisindex (VPI)\n2. Hoher Beschäftigungsstand → Arbeitslosenquote\n3. Außenwirtschaftliches Gleichgewicht → Leistungsbilanz\n4. Stetiges und angemessenes Wirtschaftswachstum → reales BIP (%-Zuwachsrate)\n\n'Magisch': Wegen der Zielkonflikte ist die gleichzeitige Verwirklichung praktisch unmöglich – die Politik muss gewichten.\n\nTräger der Stabilisierungspolitik: Fiskalpolitik (Einsatz der öffentlichen Finanzen, antizyklisch nach dem StWG) und Geld-/Kreditpolitik (EZB; 'Verstetigungspolitik', Monetarismus).\n\nRichtwerte im Tool sind Literatur-Faustwerte – § 1 StWG selbst nennt KEINE Zahlen (Klausurhinweis!)."
    },

    e_sechseck: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Magisches Sechseck",
      title: "Magisches Sechseck: zwei Ziele mehr",
      text: "Unter Berücksichtigung von\n5. GERECHTER EINKOMMENS- UND VERMÖGENSVERTEILUNG und\n6. UMWELTSCHUTZ\nspricht man vom MAGISCHEN SECHSECK.\n\nDie Erweiterung verschärft die Zielkonflikte weiter: Wachstum ↔ Umweltschutz (Ressourcenverbrauch), Verteilungsgerechtigkeit ↔ Leistungsanreize.\n\nQuerverbindungen: Verteilung → sekundäre Einkommensverteilung in der VGR (Schema 'VGR-Rechner'); Umweltschutz → externe Effekte und Art. 20a GG (Schema 'Externe Effekte & Umweltpolitik', FS 1); Diskussion um die 'sozial-ökologische Marktwirtschaft' (Schema 'Wirtschaftssystem einordnen', FS 1)."
    }
  }
});
