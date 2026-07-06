/*
 * IK-Schema: Hamburger Verständlichkeitskonzept – Profil-Simulator (4 Regler)
 * Fach: Interaktion und Kommunikation (FS 1)
 * Tool-Knoten: die vier Verständlichmacher als Regler auf der Original-Skala
 * (−2 bis +2); live wird das Textprofil bewertet und mit dem Optimalprofil
 * verglichen (Einfachheit ++, Gliederung ++, Kürze +, Stimulanz 0 bis +).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - Verstaendlichmacher_SvT (die vier Dimensionen und ihre Gegenpole in Selbstvorstellung)
 *  - Lehrplan FS I (OLE 04 Verständlichmacher, Hamburger Verständlichkeitskonzept)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-verstaendlichkeit",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Verständliche Sprache",
  title: "Hamburger Verständlichkeitsmodell (Simulator)",
  description: "Vier Regler, ein Bescheid: Stelle das Profil eines Verwaltungstextes auf den Dimensionen Einfachheit, Gliederung, Kürze und Stimulanz ein – und finde das Optimalprofil der Verständlichkeitsforschung.",
  start: "start",
  stations: [
    { id: "modell", label: "Modell" },
    { id: "simulator", label: "Simulator" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: verständlich",
    neg: "Ergebnis: unverständlich",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modell",
      kind: "frage",
      norm: "4 Verständlichmacher",
      title: "Was macht Texte verständlich?",
      def: "Das <b>Hamburger Verständlichkeitskonzept</b> (Langer/Schulz von Thun/Tausch) beschreibt Texte auf vier Dimensionen – jede mit Gegenpol:<br><br>• <b>Einfachheit</b> ↔ Kompliziertheit: kurze Sätze, bekannte Wörter, Fachwörter erklärt, anschaulich – „wie ein normaler Mensch, nicht wie ein Gelehrter“<br>• <b>Gliederung/Ordnung</b> ↔ Unübersichtlichkeit: äußere Übersichtlichkeit (Absätze, Überschriften, Hervorhebungen) + innere Folgerichtigkeit (logischer Aufbau)<br>• <b>Kürze/Prägnanz</b> ↔ Weitschweifigkeit: viel Information mit wenig Worten – aber nicht zu gedrängt<br>• <b>Zusätzliche Stimulanz</b>: anregende Zusätze (direkte Anrede, Beispiele, wörtliche Rede) – „das Salz in der Informationssuppe“",
      options: [
        { label: "Zum Simulator: Textprofil einstellen", next: "q_simulator", tone: "pos" }
      ]
    },

    q_simulator: {
      station: "simulator",
      kind: "frage",
      norm: "Profil-Simulator",
      title: "Stelle das Profil deines Bescheids ein!",
      def: "Die Verständlichkeitsforschung arbeitet mit Einschätzskalen von <b>−2 bis +2</b> je Dimension. Finde das OPTIMALE Profil – Tipp: Es ist NICHT überall das Maximum!",
      tool: '<div class="tool"><div class="tool-title">📝 Verständlichkeits-Profil</div>' +
        '<div class="tool-row"><label for="hv-e">Einfachheit</label><span class="tool-val" id="hv-ev">0</span></div>' +
        '<input type="range" id="hv-e" min="-2" max="2" step="1" value="0">' +
        '<div class="tool-row"><label for="hv-g">Gliederung / Ordnung</label><span class="tool-val" id="hv-gv">0</span></div>' +
        '<input type="range" id="hv-g" min="-2" max="2" step="1" value="0">' +
        '<div class="tool-row"><label for="hv-k">Kürze / Prägnanz</label><span class="tool-val" id="hv-kv">0</span></div>' +
        '<input type="range" id="hv-k" min="-2" max="2" step="1" value="0">' +
        '<div class="tool-row"><label for="hv-s">Zusätzliche Stimulanz</label><span class="tool-val" id="hv-sv">0</span></div>' +
        '<input type="range" id="hv-s" min="-2" max="2" step="1" value="0">' +
        '<div class="tool-read" id="hv-out">…</div></div>',
      setup: function (root) {
        var se = root.querySelector("#hv-e"), sg = root.querySelector("#hv-g"), sk = root.querySelector("#hv-k"), ss = root.querySelector("#hv-s");
        var ve = root.querySelector("#hv-ev"), vg = root.querySelector("#hv-gv"), vk = root.querySelector("#hv-kv"), vs = root.querySelector("#hv-sv");
        var out = root.querySelector("#hv-out");
        function pp(n) { return (n > 0 ? "+" : "") + n; }
        function upd() {
          var e = parseInt(se.value, 10), g = parseInt(sg.value, 10), k = parseInt(sk.value, 10), s = parseInt(ss.value, 10);
          ve.textContent = pp(e); vg.textContent = pp(g); vk.textContent = pp(k); vs.textContent = pp(s);
          var probleme = [];
          if (e < 2) probleme.push(e <= -1 ? "Kompliziertheit: Schachtelsätze und unerklärte Fachwörter blockieren alles" : "Einfachheit ausbaubar (Wort- und Satzebene)");
          if (g < 2) probleme.push(g <= -1 ? "Unübersichtlichkeit: ohne Absätze und roten Faden geht der Leser verloren" : "Gliederung ausbaubar (Aufbau ankündigen, Absätze, Hervorhebungen)");
          if (k < 1) probleme.push(k <= -1 ? "Weitschweifigkeit: Nebensächliches und Wiederholungen strecken den Text" : "etwas straffen (aufs Wesentliche)");
          if (k === 2) probleme.push("Vorsicht: maximale Verdichtung kann „zu gedrängt“ sein – Kürze ist bei + optimal");
          if (s < 0) probleme.push("ohne jede Stimulanz wirkt der Text langweilig und unpersönlich");
          if (s === 2) probleme.push("zu viel Stimulanz „versalzt die Suppe“ – vom Inhalt ablenkende Spielerei");
          var txt = "Profil: Einfachheit " + pp(e) + " · Gliederung " + pp(g) + " · Kürze " + pp(k) + " · Stimulanz " + pp(s) + "<br>";
          if (e === 2 && g === 2 && k === 1 && (s === 0 || s === 1)) {
            txt += '<span class="tool-flag ok">✓ OPTIMALPROFIL</span> Einfachheit ++ und Gliederung ++ sind Pflicht, Kürze/Prägnanz ist bei + am besten (nicht überkomprimieren!), Stimulanz dosiert bei 0 bis + – genau das Profil der Verständlichkeitsforschung.';
          } else {
            txt += '<span class="tool-flag bad">Noch nicht optimal</span> ' + probleme.join(" · ");
          }
          out.innerHTML = txt;
        }
        [se, sg, sk, ss].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      hint: "Die beiden wichtigsten Dimensionen sind Einfachheit und Gliederung. Kürze wirkt nur positiv bis zu dem Punkt, an dem der Text „zu gedrängt“ wird; Stimulanz ist Gewürz, keine Hauptzutat.",
      options: [
        { label: "Optimalprofil gefunden – Ergebnis anzeigen", next: "e_optimal", tone: "pos" },
        { label: "Warum ist Verwaltungssprache oft das Gegenteil?", next: "e_amtsdeutsch", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_optimal: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Optimalprofil",
      title: "Das Optimalprofil: ++ / ++ / + / 0 bis +",
      text: "Verständliche Texte sind maximal EINFACH (bekannte Wörter, kurze Sätze, Fachbegriffe erklärt), maximal GEGLIEDERT (äußere Übersichtlichkeit UND innere Folgerichtigkeit), angemessen KURZ (aufs Wesentliche, aber nicht gedrängt) und DOSIERT stimulierend (direkte Anrede, Beispiele – das Salz, nicht die Suppe).\n\nFür Behördenschreiben wird das Konzept durch die MAYENER EMPFEHLUNGEN konkret: neun Regeln auf Text-, Satz- und Wortebene → eigenes Schema.\n\nFür besondere Zielgruppen geht die LEICHTE SPRACHE noch weiter (feste Regeln, sehr kurze Sätze, Bilder) – ein eigenes Konzept, das von allgemeiner Verständlichkeit abzugrenzen ist (WLE 02)."
    },

    e_amtsdeutsch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Amtssprache",
      title: "Warum Bescheide oft beim Gegenpol landen",
      text: "Die Gegenpole lesen sich wie eine Beschreibung klassischer Amtssprache: KOMPLIZIERTHEIT („extrem verschachtelte Satzkonstruktionen … nicht selten auch Prestigezwecken dienend“), UNÜBERSICHTLICHKEIT (alles hintereinanderweg, kein roter Faden), WEITSCHWEIFIGKEIT (Voraberklärungen, Nebensächliches) und KEINE STIMULANZ (unpersönlich, keine Anrede, keine Beispiele).\n\nGründe: Fachsprache als Präzisionsinstrument UND Gewohnheit, Absicherungsdenken, Textbausteine.\n\nFolgen: Bürger verstehen Bescheide nicht → Nachfragen, Widersprüche, Frust auf beiden Seiten. Deshalb ist bürgernahe Verwaltungssprache Daueraufgabe (Materialien im Vault: BBB-Arbeitshandbuch, Kreis Soest, Wiesbadener Leitsätze, Broschüre „freundlich & korrekt“) – das Handwerkszeug liefern die Mayener Empfehlungen."
    }
  }
});
