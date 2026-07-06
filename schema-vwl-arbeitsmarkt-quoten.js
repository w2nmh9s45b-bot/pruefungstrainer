/*
 * VWL-Schema: Erwerbsquote & Arbeitslosenquote (interaktiver Rechner)
 * Fach: Volkswirtschaftslehre (Fachstudium 1)
 * Tool-Knoten: Eingabefelder für Gesamtbevölkerung, Erwerbstätige, Arbeitslose –
 * live werden Erwerbspersonen, Erwerbsquote und Arbeitslosenquote berechnet
 * (Voreinstellung = Übungsaufgabe aus OLE 3).
 *
 * Quellen (Obsidian-Vault "Brain", Modul 3 VWL, FS I):
 *  - "2023 VWL Skript" (Göbel-Porz), Kap. 5.2.2 (Grundbegriffe Produktionsfaktor Arbeit)
 *  - "2023 VWL OLE 3 Produktionsfaktor Arbeit" (Quoten-Formeln, Übungsaufgabe)
 *  - SGB III § 138 (Volltext geprüft: Gesetze/md/Sozialrecht/SGB_3.md)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "vwl-arbeitsmarkt-quoten",
  subject: "Volkswirtschaftslehre",
  fs: ["FS1"],
  area: "Produktionsfaktoren & Arbeitsmarkt",
  title: "Erwerbs- & Arbeitslosenquote (Rechner)",
  description: "Gesamtbevölkerung, Erwerbstätige und Arbeitslose eingeben – die App rechnet live Erwerbspersonen, Erwerbsquote und Arbeitslosenquote (Übungsaufgabe aus OLE 3 voreingestellt). Dazu: Arbeitslose (§ 138 SGB III) vs. Erwerbslose (ILO).",
  start: "start",
  stations: [
    { id: "begriffe", label: "Begriffe" },
    { id: "rechner", label: "Rechner" },
    { id: "abgrenzung", label: "SGB vs. ILO" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kennzahlen stehen",
    neg: "Ergebnis: Begriff geklärt",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "begriffe",
      kind: "frage",
      norm: "Erwerbskategorien",
      title: "Die Bevölkerung nach Erwerbskategorien einteilen",
      def: "Die Einteilung laut Skript (von außen nach innen):<br><br>• <b>Gesamtbevölkerung</b> = Wohnbevölkerung lt. amtlicher Statistik<br>• <b>Nichterwerbspersonen</b> = üben keine auf Erwerb gerichtete Tätigkeit aus (Kinder, Schüler, Rentner, Pensionäre)<br>• <b>Erwerbspersonen</b> = können arbeiten, haben aber nicht zwingend einen Arbeitsplatz – sie umfassen <b>Erwerbstätige UND Arbeitslose</b><br>• <b>Erwerbstätige</b> = Erwerbspersonen − Arbeitslose (Selbstständige oder abhängig Beschäftigte, verfügen immer über einen Arbeitsplatz)<br><br><b>Merksatz:</b> Erwerbstätige sind immer auch Erwerbspersonen – aber nicht jede Erwerbsperson ist erwerbstätig, denn zu den Erwerbspersonen zählen auch die Arbeitslosen.",
      options: [
        { label: "Verstanden – zum Quoten-Rechner", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "Erwerbsquote · Arbeitslosenquote",
      title: "Quoten berechnen (Übungsaufgabe OLE 3)",
      def: "<b>Erwerbsquote</b> = Erwerbspersonen ÷ Gesamtbevölkerung × 100<br><i>(Wie viel Prozent der Bevölkerung sind am Arbeitsprozess beteiligt oder könnten es sein?)</i><br><br><b>Arbeitslosenquote</b> = Arbeitslose ÷ Erwerbspersonen × 100 = Arbeitslose ÷ (Arbeitslose + Erwerbstätige) × 100<br><i>(relative Unterauslastung des Arbeitskräfteangebots)</i>",
      tool: '<div class="tool"><div class="tool-title">🎛 Quoten-Rechner</div>' +
        '<div class="tool-row"><label for="aq-bev">Gesamtbevölkerung (Mio.)</label><input type="number" id="aq-bev" value="80.5" step="0.5" min="1"></div>' +
        '<div class="tool-row"><label for="aq-et">Erwerbstätige (Mio.)</label><input type="number" id="aq-et" value="43" step="0.5" min="0"></div>' +
        '<div class="tool-row"><label for="aq-al">Arbeitslose (Mio.)</label><input type="number" id="aq-al" value="3" step="0.1" min="0"></div>' +
        '<div class="tool-read" id="aq-out">…</div></div>',
      setup: function (root) {
        var bev = root.querySelector("#aq-bev"), et = root.querySelector("#aq-et"), al = root.querySelector("#aq-al");
        var out = root.querySelector("#aq-out");
        function f1(n) { return n.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 }); }
        function upd() {
          var b = parseFloat(bev.value), e = parseFloat(et.value), a = parseFloat(al.value);
          if (!(b > 0) || !(e >= 0) || !(a >= 0)) { out.innerHTML = "Bitte gültige Werte eingeben."; return; }
          var ep = e + a;
          var eq = ep / b * 100;
          var alq = ep > 0 ? a / ep * 100 : 0;
          var warnTxt = ep > b ? '<br><span class="tool-flag bad">Achtung</span> Erwerbspersonen können nicht größer als die Gesamtbevölkerung sein!' : "";
          out.innerHTML =
            "Erwerbspersonen = Erwerbstätige + Arbeitslose = <b>" + f1(ep) + " Mio.</b><br>" +
            "Erwerbsquote = " + f1(ep) + " ÷ " + f1(b) + " × 100 = <b>" + f1(eq) + " %</b><br>" +
            "Arbeitslosenquote = " + f1(a) + " ÷ " + f1(ep) + " × 100 = <b>" + f1(alq) + " %</b>" + warnTxt;
        }
        [bev, et, al].forEach(function (inp) { inp.addEventListener("input", upd); });
        upd();
      },
      hint: "Skript-Lösung mit den Startwerten: Erwerbspersonen 46 Mio. → Erwerbsquote 57,1 %, Arbeitslosenquote 6,5 %.",
      options: [
        { label: "Weiter: Wer zählt eigentlich als arbeitslos?", next: "q_sgb_ilo", tone: "pos" }
      ]
    },

    q_sgb_ilo: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§ 138 SGB III · ILO",
      title: "Arbeitslose (SGB III) oder Erwerbslose (ILO)?",
      def: "Zwei Konzepte, zwei Quoten:<br><br><b>Arbeitslos (§ 138 SGB III / BA-Statistik):</b> wer keine Beschäftigung hat (<b>weniger als 15 Wochenstunden</b>, § 138 III SGB III), Arbeit sucht (Eigenbemühungen), dem Arbeitsmarkt zur Verfügung steht und bei einer Agentur für Arbeit bzw. einem Träger der Grundsicherung <b>gemeldet</b> ist.<br><br><b>Erwerbslos (ILO / Statistisches Bundesamt):</b> 15–74 Jahre, im Berichtszeitraum <b>nicht eine Stunde pro Woche</b> gearbeitet, aktiv in den letzten 4 Wochen gesucht, verfügbar innerhalb von 2 Wochen – Meldung bei der BA <b>nicht</b> erforderlich (international vergleichbar).<br><br><i>Folge: Die Erwerbslosenquote (ILO) liegt regelmäßig deutlich unter der Arbeitslosenquote (SGB) – Skript-Beispiel April 2023: 3,2 % vs. 5,7 %.</i>",
      options: [
        { label: "Minijob mit 10 Wochenstunden → nach SGB III trotzdem arbeitslos", detail: "Unter 15 Wochenstunden schließt die Beschäftigung die Arbeitslosigkeit nicht aus – nach ILO wäre die Person dagegen erwerbstätig (≥ 1 Stunde).", next: "e_fertig", tone: "pos" },
        { label: "Nicht gemeldet, sucht aber aktiv → nur ILO-erwerbslos", detail: "Ohne Meldung keine registrierte Arbeitslosigkeit – wohl aber Erwerbslosigkeit nach ILO.", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kennzahlen komplett",
      title: "Arbeitsmarkt-Kennzahlen sicher beherrscht",
      text: "Formeln:\n• Erwerbspersonen = Erwerbstätige + Arbeitslose\n• Erwerbsquote = Erwerbspersonen ÷ Gesamtbevölkerung × 100\n• Arbeitslosenquote = Arbeitslose ÷ Erwerbspersonen × 100\n\nBegriffsabgrenzung:\n• Arbeitslose (§ 138 SGB III): < 15 Wochenstunden, arbeitsuchend, verfügbar, GEMELDET – Quote der Bundesagentur für Arbeit.\n• Erwerbslose (ILO): keine Stunde Arbeit, aktive Suche (4 Wochen), verfügbar (2 Wochen) – Quote des Statistischen Bundesamts, international vergleichbar.\n\nDie Bestimmungsfaktoren des Arbeitsangebots: quantitativ (Bevölkerungsentwicklung = natürliche Entwicklung + Migrationssaldo; Erwerbsverhalten: Berufseinstieg, Arbeitszeit, Renteneintritt) und qualitativ (Ausbildungsstand, Alterspyramide: Pyramide/Glocke/Zwiebel).\n\nWeiter mit dem Schema 'Art der Arbeitslosigkeit diagnostizieren'."
    }
  }
});
