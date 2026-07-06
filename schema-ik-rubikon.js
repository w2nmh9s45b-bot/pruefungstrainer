/*
 * IK-Schema: Motivation & Volition – Rubikon-Modell (Phasen-Slider) + WOOP-Trainer
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 * Zwei Tool-Knoten: (1) Slider über die vier Handlungsphasen mit Motivation/Volition-
 * Anzeige und Rubikon-Übergang, (2) WOOP-Trainer mit vier Eingabefeldern, der den
 * persönlichen Wenn-dann-Plan zusammensetzt.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - Gesamtpraesentation zum Themenblock Motivation (Motive/Anreize, 3 Basismotive
 *    nach McClelland, intrinsisch/extrinsisch, Volition, Rubikon-Modell:
 *    Abwägen/Wählen – Planen – Handeln – Bewerten)
 *  - WOOP-Materialien (Oettingen): 0 Overview, 1 Mental Guide, 2 Written Guide
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-rubikon",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Motivation & Führung",
  title: "Rubikon-Modell & WOOP (Trainer)",
  description: "Vom Wunsch zur Tat: die vier Handlungsphasen des Rubikon-Modells zum Schieben (Motivation vs. Volition) – und der WOOP-Trainer, der aus Wish, Outcome, Obstacle und Plan deinen Wenn-dann-Plan baut.",
  start: "start",
  stations: [
    { id: "begriffe", label: "Begriffe" },
    { id: "rubikon", label: "Rubikon" },
    { id: "woop", label: "WOOP" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Umsetzung gesichert",
    neg: "Ergebnis: Stolperstein",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "Motivation & Volition",
      title: "Motive, Anreize – und warum Wollen allein nicht reicht",
      def: "<b>Motive</b> sind Beweggründe und Antriebskräfte des Handelns – der „innere Motor“. Drei Basismotive (McClelland): <b>Anschluss</b> (Kontakte knüpfen/pflegen), <b>Leistung</b> (Herausforderungen meistern), <b>Macht</b> (beeinflussen/beeindrucken).<br><br><b>Anreize</b> sind situative Bedingungen, die Motive so anregen, dass es zum Handeln kommt (Motivation = Person × Situation). <b>Intrinsisch</b>: Anreiz in Handlung oder Ergebnis; <b>extrinsisch</b>: materielle Belohnung oder Lob aus dem Umfeld.<br><br><b>Volition</b> = Willenskraft: das erfolgreiche Streben nach bereits GESETZTEN Zielen (Achtziger & Gollwitzer) – Motivation wählt, Volition setzt um.",
      options: [
        { label: "Zum Rubikon-Modell: die vier Phasen", next: "q_rubikon", tone: "pos" }
      ]
    },

    q_rubikon: {
      station: "rubikon",
      kind: "frage",
      norm: "Rubikon-Modell",
      title: "In welcher Handlungsphase steckst du?",
      def: "Das <b>Rubikon-Modell der Handlungsphasen</b> beschreibt den Weg vom Wunsch zur bewerteten Tat. Mit der Zielentscheidung wird – wie Cäsar am Fluss – „der Rubikon überschritten“: Aus Wünschen wird verbindliches Wollen.",
      tool: '<div class="tool"><div class="tool-title">🏛 Rubikon-Phasen-Slider</div>' +
        '<div class="tool-row"><label for="ru-p">Handlungsphase</label><span class="tool-val" id="ru-pv">1</span></div>' +
        '<input type="range" id="ru-p" min="1" max="4" step="1" value="1">' +
        '<div class="tool-read" id="ru-out">…</div></div>',
      setup: function (root) {
        var phasen = [
          { name: "ABWÄGEN / WÄHLEN", art: "Motivation (prädezisional)", txt: "Wünsche und Anliegen vergleichen: Was ist mir wichtig, was ist realisierbar? Am Ende steht die ZIELENTSCHEIDUNG – der Schritt über den Rubikon: Aus dem Wunsch wird ein verbindliches Ziel.", flag: "Vor-Entscheidungsphase" },
          { name: "PLANEN", art: "Volition (präaktional)", txt: "Die Umsetzung vorbereiten: Wann, wo und wie will ich handeln? Vorsätze und Wenn-dann-Pläne schmieden – hier setzt WOOP an (nächster Schritt dieses Schemas).", flag: "Vor-Handlungsphase" },
          { name: "HANDELN", art: "Volition (aktional)", txt: "Das Ziel umsetzen und gegen Ablenkungen ABSCHIRMEN: dranbleiben, Hindernisse überwinden, ggf. Anstrengung steigern.", flag: "Handlungsphase" },
          { name: "BEWERTEN", art: "Motivation (postaktional)", txt: "Ergebnis mit dem Ziel vergleichen: Erreicht? Woran lag es? Schlussfolgerungen für künftige Ziele ziehen – hier schließt der Kreis zum Abwägen.", flag: "Nach-Handlungsphase" }
        ];
        var sl = root.querySelector("#ru-p"), pv = root.querySelector("#ru-pv"), out = root.querySelector("#ru-out");
        function upd() {
          var n = parseInt(sl.value, 10), p = phasen[n - 1];
          pv.textContent = n + " / 4";
          var txt = "<b>Phase " + n + ": " + p.name + "</b> · " + p.flag + "<br>" + p.txt + "<br>" +
            '<span class="tool-flag ' + (p.art.indexOf("Volition") === 0 ? "bad" : "ok") + '">' + p.art + "</span> " +
            (n === 1 ? "Noch diesseits des Rubikons – es geht ums WÄHLEN." : (n === 4 ? "Wieder Motivation: Das Bewerten speist das nächste Abwägen." : "Jenseits des Rubikons – jetzt zählt der WILLE (Umsetzung), nicht mehr das Wünschen."));
          out.innerHTML = txt;
        }
        sl.addEventListener("input", upd);
        upd();
      },
      hint: "Merksatz: Motivation (Phasen 1 und 4) wählt und bewertet Ziele – Volition (Phasen 2 und 3) plant und schirmt die Umsetzung ab.",
      options: [
        { label: "Zur Umsetzungshilfe: WOOP ausprobieren", next: "q_woop", tone: "pos" }
      ]
    },

    q_woop: {
      station: "woop",
      kind: "frage",
      norm: "WOOP (Oettingen)",
      title: "Dein WOOP: Wish – Outcome – Obstacle – Plan",
      def: "<b>WOOP</b> (wissenschaftlich: Mental Contrasting with Implementation Intentions, MCII) ist die Strategie für die Volitionsphasen. Die bahnbrechende Frage lautet: <i>„Was hält Sie davon ab, Ihren Wunsch zu erreichen?“</i> – das Hindernis liegt IN dir. Fülle die vier Felder aus:",
      tool: '<div class="tool"><div class="tool-title">✨ WOOP-Trainer</div>' +
        '<div class="tool-row"><label for="wo-w">W – Wunsch (wichtig + realistisch, 3–6 Wörter)</label><input type="text" id="wo-w" placeholder="z. B. Klausurstoff KLR sicher beherrschen"></div>' +
        '<div class="tool-row"><label for="wo-o">O – bestes Ergebnis (lebhaft vorstellen!)</label><input type="text" id="wo-o" placeholder="z. B. gelassen in die Klausur gehen"></div>' +
        '<div class="tool-row"><label for="wo-h">O – inneres Haupthindernis</label><input type="text" id="wo-h" placeholder="z. B. abends aufs Handy schauen"></div>' +
        '<div class="tool-row"><label for="wo-p">P – meine Wenn-dann-Handlung</label><input type="text" id="wo-p" placeholder="z. B. Handy in den Flur legen und 25 min lernen"></div>' +
        '<div class="tool-read" id="wo-out">…</div></div>',
      setup: function (root) {
        var w = root.querySelector("#wo-w"), o = root.querySelector("#wo-o"), h = root.querySelector("#wo-h"), p = root.querySelector("#wo-p");
        var out = root.querySelector("#wo-out");
        function esc(t) { return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
        function upd() {
          var teile = [];
          if (w.value.trim()) teile.push("🎯 <b>Wunsch:</b> " + esc(w.value.trim()));
          if (o.value.trim()) teile.push("🌅 <b>Bestes Ergebnis:</b> " + esc(o.value.trim()));
          if (h.value.trim()) teile.push("🧱 <b>Inneres Hindernis:</b> " + esc(h.value.trim()));
          if (!teile.length) { out.innerHTML = "Die vier Schritte nacheinander ausfüllen – Reihenfolge ist Teil der Methode!"; return; }
          var txt = teile.join("<br>");
          if (h.value.trim() && p.value.trim()) {
            txt += '<br><span class="tool-flag ok">✓ Dein Wenn-dann-Plan</span> <b>WENN ' + esc(h.value.trim()) + ", DANN " + esc(p.value.trim()) + "!</b><br><i>Diesen Satz einprägen oder aufschreiben – er verknüpft das Hindernis automatisch mit deiner Reaktion (Implementation Intention).</i>";
          } else if (teile.length >= 2) {
            txt += "<br><i>Weiter ausfüllen – erst der Wenn-dann-Plan macht aus dem Wunsch eine Umsetzungsstrategie.</i>";
          }
          out.innerHTML = txt;
        }
        [w, o, h, p].forEach(function (el) { el.addEventListener("input", upd); });
        upd();
      },
      hint: "WOOP wirkt in allen Lebensbereichen (Gesundheit, Arbeit, Studium, Beziehungen) und hilft besonders, wenn man „feststeckt“ – Reihenfolge und mentales Ausmalen (Outcome VOR Obstacle) sind entscheidend (Oettingen).",
      options: [
        { label: "Plan steht – Ergebnis anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Rubikon + WOOP",
      title: "Vom Wunsch über den Rubikon bis zum Wenn-dann-Plan",
      text: "Das Rubikon-Modell trennt vier Phasen: ABWÄGEN/WÄHLEN (Motivation – bis zur Zielentscheidung, dem Überschreiten des Rubikons), PLANEN (Volition – Wann/Wo/Wie), HANDELN (Volition – umsetzen und abschirmen), BEWERTEN (Motivation – Ergebnis prüfen, lernen).\n\nDie Skript-Botschaft: Viele Vorhaben scheitern nicht am Wollen, sondern an der UMSETZUNG – deshalb braucht es Strategien für die Phasen 2 und 3. WOOP liefert sie: Wunsch (wichtig und realistisch, 3–6 Wörter), bestes Ergebnis lebhaft vorstellen, das INNERE Haupthindernis identifizieren („Was hält mich ab?“) und einen Wenn-dann-Plan formulieren, der Hindernis und Reaktion fest verdrahtet.\n\nFür die Führungsarbeit gilt dasselbe im Team: Ziele klar entscheiden (nicht ewig abwägen lassen), Umsetzung konkret planen lassen, Hindernisse offen ansprechen – und Ergebnisse gemeinsam bewerten. Was im Kopf VOR der Handlung passiert, erklären Heckhausens Erwartungen und das Selbstbewertungsmodell → Schema „Motivationsmodelle“."
    }
  }
});
