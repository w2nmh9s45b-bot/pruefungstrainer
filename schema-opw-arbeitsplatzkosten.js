/*
 * OPW-Schema: Kosten eines Arbeitsplatzes – KGSt-Rechner
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 * Tool-Knoten: Personalkosten + Arbeitsplatztyp (Büro/Nicht-Büro) + Wochenarbeitszeit
 * → Sachkosten (9.700 € bzw. 10 % PK), Gemeinkosten (20 %/15 %), Jahres- und
 * Stundenwert nach KGSt-Bericht 11/2022.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - 2023-07-13-B-11-2022_Kosten-eines-Arbeitsplatzes (KGSt-Bericht 11/2022:
 *    Sachkostenpauschale 9.700 € inkl. IT 3.450 €; Verwaltungs-Overhead 10 % +
 *    Fachbereichs-Overhead mind. 10 % → Büro mind. 20 %, Nicht-Büro 15 %;
 *    Normalarbeitszeit 1.590/1.631/1.671/1.712 h; Jahreswert-Schema)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-arbeitsplatzkosten",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Stellenwirtschaft",
  title: "Kosten eines Arbeitsplatzes (KGSt-Rechner)",
  description: "Was kostet die Stelle wirklich? Personalkosten plus KGSt-Pauschalen für Sach- und Gemeinkosten – der Rechner liefert Jahres- und Stundenwert für Kalkulation und Wirtschaftlichkeitsuntersuchung.",
  start: "start",
  stations: [
    { id: "bausteine", label: "Bausteine" },
    { id: "rechner", label: "Rechner" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kosten stehen",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "bausteine",
      kind: "frage",
      norm: "KGSt-Bericht 11/2022",
      title: "Die drei Kostenbausteine eines Arbeitsplatzes",
      def: "Der KGSt-Bericht „Kosten eines Arbeitsplatzes“ addiert:<br><br>• <b>Personalkosten</b> (KGSt-Tabellen: inkl. Versorgungszuschlag, Beihilfe, Sozialleistungen)<br>• <b>Sachkosten</b>: Büroarbeitsplatz pauschal <b>9.700 €</b> (Raumkosten ~4.455 €, Büroausstattung, Geschäftskosten, IT <b>3.450 €</b>); Nicht-Büroarbeitsplatz: <b>10 % der Personalkosten</b><br>• <b>Gemeinkosten</b>: Verwaltungs-Overhead <b>10 %</b> der Brutto-Personalkosten + Fachbereichs-Overhead <b>mindestens 10 %</b> (Amtsleitung, Sekretariat, interne Dienste) → Büro insgesamt <b>mind. 20 %</b>, Nicht-Büro <b>15 %</b> (örtliche Spannbreite 10–40 %)<br><br>Verwendung: Gebühren-/Entgeltkalkulation, interne Leistungsverrechnung, Wirtschaftlichkeitsuntersuchungen, NAK-Richtwerte der Stellenbemessung.",
      options: [
        { label: "Zum Rechner: Jahres- und Stundenwert", next: "q_rechner", tone: "pos" }
      ]
    },

    q_rechner: {
      station: "rechner",
      kind: "frage",
      norm: "Jahres-/Stundenwert",
      title: "Berechne die Arbeitsplatzkosten!",
      def: "Personalkosten aus der KGSt-Tabelle eintragen (Beispiel: A 9 ≈ 82.900 €), Typ und Wochenarbeitszeit wählen:",
      tool: '<div class="tool"><div class="tool-title">💼 Arbeitsplatzkosten-Rechner (KGSt)</div>' +
        '<div class="tool-row"><label for="ak-pk">Personalkosten/Jahr (€, KGSt-Tabelle)</label><input type="number" id="ak-pk" value="82900" step="1000" min="0"></div>' +
        '<div class="tool-row"><label for="ak-typ">Arbeitsplatztyp</label><select id="ak-typ"><option value="buero">Büroarbeitsplatz</option><option value="nicht">Nicht-Büroarbeitsplatz</option></select></div>' +
        '<div class="tool-row"><label for="ak-gk">Gemeinkostenzuschlag (%)</label><input type="number" id="ak-gk" value="20" step="5" min="0" max="40"></div>' +
        '<div class="tool-row"><label for="ak-az">Normalarbeitszeit</label><select id="ak-az"><option value="1590">39 Std./W. → 1.590 h (Beschäftigte)</option><option value="1631">40 Std./W. → 1.631 h (Beamte)</option><option value="1671">41 Std./W. → 1.671 h</option></select></div>' +
        '<div class="tool-read" id="ak-out">…</div></div>',
      setup: function (root) {
        var pk = root.querySelector("#ak-pk"), typ = root.querySelector("#ak-typ"), gk = root.querySelector("#ak-gk"), az = root.querySelector("#ak-az"), out = root.querySelector("#ak-out");
        function eur(n) { return Math.round(n).toLocaleString("de-DE") + " €"; }
        function upd() {
          var PK = +pk.value || 0;
          var buero = typ.value === "buero";
          var sach = buero ? 9700 : PK * 0.10;
          var gkP = (+gk.value || 0) / 100;
          var gemein = PK * gkP;
          var jahr = PK + sach + gemein;
          var stunden = parseInt(az.value, 10);
          var satz = jahr / stunden;
          var txt = "Personalkosten <b>" + eur(PK) + "</b> + Sachkosten <b>" + eur(sach) + "</b> (" + (buero ? "Büro-Pauschale" : "10 % der PK") + ") + Gemeinkosten <b>" + eur(gemein) + "</b> (" + (gkP * 100).toFixed(0) + " % der PK)<br>" +
            "= Jahreswert <b>" + eur(jahr) + "</b><br>" +
            "÷ " + stunden.toLocaleString("de-DE") + " h Normalarbeitszeit = Stundenwert <b>" + satz.toFixed(2).replace(".", ",") + " €/h</b><br>";
          if (buero && gkP < 0.20) {
            txt += '<span class="tool-flag bad">Zuschlag zu niedrig</span> KGSt-Empfehlung für Büroarbeitsplätze: insgesamt MINDESTENS 20 % (10 % Verwaltungs- + mind. 10 % Fachbereichs-Overhead).';
          } else if (!buero && gkP !== 0.15) {
            txt += '<span class="tool-flag ok">Hinweis</span> Für Nicht-Büroarbeitsplätze empfiehlt die KGSt 15 % Gemeinkostenzuschlag.';
          } else {
            txt += '<span class="tool-flag ok">✓ KGSt-konform</span> Pauschalen vor Ort prüfen (kostenintensive Ausstattung? eigene Overhead-Berechnung?) – dann einheitlich anwenden.';
          }
          out.innerHTML = txt;
        }
        [pk, gk].forEach(function (el) { el.addEventListener("input", upd); });
        [typ, az].forEach(function (el) { el.addEventListener("change", upd); });
        upd();
      },
      hint: "Beispiel: 82.900 € PK (Büro, 20 %, 40 Std./W.) → 82.900 + 9.700 + 16.580 = 109.180 €/Jahr ≈ 66,94 €/h. Für Produktkosten: Stundenwert × Bearbeitungszeit.",
      options: [
        { label: "Wofür brauche ich diese Werte? (Ergebnis)", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Einsatzfelder",
      title: "Vom Arbeitsplatz-Jahreswert zur Kalkulation",
      text: "Der Jahreswert (Personal- + Sach- + Gemeinkosten) und der Stundenwert (Jahreswert ÷ KGSt-Normalarbeitszeit: 1.590 h bei 39, 1.631 h bei 40 Wochenstunden – allgemeine Verwaltung) sind Universalwerkzeuge:\n\n• GEBÜHREN- UND ENTGELTKALKULATION: Stundenwert × mittlere Bearbeitungszeit = Personalkostenanteil des Produkts (plus weitere Kosten → KLR/Divisionskalkulation)\n• INTERNE LEISTUNGSVERRECHNUNG und Verwaltungskostenerstattung\n• WIRTSCHAFTLICHKEITSUNTERSUCHUNGEN: Eigenleistung vs. Vergabe braucht die VOLLEN Arbeitsplatzkosten – wer nur Bruttogehälter vergleicht, rechnet sich Eigenleistung schön (Overhead!)\n• TEILZEIT: pauschal anteilig oder differenziert (Sachkosten teils arbeitsplatz-, teils personengebunden – Kap. 6 des Berichts)\n\nGrenzen: Die Pauschalen (Stand 2022/2023) ersetzen keine örtliche Rechnung – bei kostenintensiver Ausstattung oder eigener Overhead-Quote örtliche Werte bilden und einheitlich anwenden.\n\nPraxisbrücke: Genau dieser Bericht liegt in deinem Arbeits-Vault – Grundlage für WU nach § 7 BHO-Arbeitsanleitung und für die Kapitalwert-Module deiner Arbeitsvorgänge-App."
    }
  }
});
