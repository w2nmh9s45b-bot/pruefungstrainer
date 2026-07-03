/*
 * Prüfungsschema: Übertragung und Verfall des Erholungsurlaubs (§ 7 III BUrlG, § 26 II a TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 4.7-4.11 (Übertragung nach BUrlG/
 *    TVöD, Zwei-Stufen-Modell, Übertragung bei Erkrankung 15-Monats-Frist,
 *    Urlaub und Mutterschutz/Elternzeit, Wichtig-zu-wissen)
 *  - Gesetze: BUrlG §§ 7 III, 8, 13; TVöD § 26 II a; MuSchG § 24; BEEG § 17;
 *    BGB § 611a I, § 626 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-urlaubsuebertragung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Urlaub",
  title: "Übertragung und Verfall des Urlaubs (§ 7 III BUrlG, § 26 II a TVöD)",
  description: "Übertragung des Resturlaubs ins Folgejahr: Grundsatz des Verfalls zum Jahresende, Übertragungstatbestände (§ 7 III BUrlG), zweistufige tarifliche Regelung (Antritt bis 31.03. bzw. 31.05., § 26 II a TVöD), 15-Monats-Frist bei Langzeiterkrankung und Sonderfälle Mutterschutz/Elternzeit.",
  start: "start",
  stations: [
    { id: "grundsatz", label: "Grundsatz" },
    { id: "tatbestand", label: "Übertragung" },
    { id: "erkrankung", label: "Erkrankung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Urlaub bleibt erhalten",
    neg: "Ergebnis: Urlaub verfallen",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundsatz",
      kind: "frage",
      norm: "§ 7 III 1 BUrlG, § 26 I 5 TVöD",
      title: "Konnte der Urlaub im laufenden Kalenderjahr genommen werden?",
      def: "<b>Grundsatz (§ 7 III 1 BUrlG, § 26 I 5 TVöD):</b> Der Erholungsurlaub muss im <b>laufenden Kalenderjahr</b> gewährt und genommen werden. Wird er nicht genommen, <b>verfällt</b> er grundsätzlich zum Jahresende.<br><br><b>Wichtige EuGH/BAG-Einschränkung (Mitwirkungsobliegenheit):</b> Der Urlaub verfällt nur, wenn der Arbeitgeber die/den Beschäftigten zuvor <b>konkret aufgefordert</b> hat, den Urlaub zu nehmen, und <b>rechtzeitig auf den drohenden Verfall hingewiesen</b> hat. Fehlt dieser Hinweis, verfällt der Urlaub nicht (BAG/EuGH – „Mitwirkungsobliegenheit des Arbeitgebers“).<br><br>Ausnahmsweise Übertragung ins Folgejahr, wenn ein Übertragungsgrund vorliegt (nächste Station).",
      options: [
        { label: "Urlaub konnte genommen werden (kein Grund)", next: "e_verfall", tone: "neg" },
        { label: "Urlaub konnte nicht genommen werden", next: "q_tatbestand", tone: "warn" }
      ]
    },

    q_tatbestand: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 7 III 2 BUrlG, § 26 II a TVöD-VKA",
      title: "Liegt ein Übertragungstatbestand vor – und welche Stufe greift?",
      def: "<b>Übertragung nur bei bestimmten Gründen (§ 7 III 2 BUrlG):</b><br>• <b>dringende betriebliche Gründe</b> oder<br>• <b>in der Person des Arbeitnehmers liegende Gründe</b> (v. a. Erkrankung).<br><br><b>Zwei-Stufen-Modell aus § 26 II a TVöD-VKA + § 7 III BUrlG</b> (tariflich günstiger – es genügt der ANTRITT, nicht der Verbrauch):<br><br><b>1. Stufe:</b> Liegt ein Übertragungstatbestand des § 7 III BUrlG vor → übertragener Urlaub muss bis zum <b>31.03.</b> des Folgejahres <b>angetreten</b> werden.<br><br><b>2. Stufe:</b> Kann der nach Stufe 1 übertragene Urlaub wegen<br>a) <b>Arbeitsunfähigkeit</b> oder<br>b) aus <b>betrieblichen/dienstlichen Gründen</b> (nicht „dringend“!)<br>nicht bis 31.03. angetreten werden → weitere Übertragung, Antritt bis <b>31.05.</b> des Folgejahres.",
      options: [
        { label: "Übertragungsgrund → Antritt bis 31.03.", next: "e_uebertragung_31_03", tone: "pos" },
        { label: "AU / betriebliche Gründe → Antritt bis 31.05.", next: "e_uebertragung_31_05", tone: "pos" },
        { label: "Dauerhafte Erkrankung (über Jahre)", next: "q_erkrankung", tone: "warn" },
        { label: "Kein Übertragungsgrund", next: "e_verfall", tone: "neg" }
      ]
    },

    q_erkrankung: {
      station: "erkrankung",
      kind: "frage",
      norm: "§ 7 III BUrlG (BAG/EuGH), § 26 II a S. 2 TVöD",
      title: "Langzeiterkrankung: Gesetzlicher Mindesturlaub oder tariflicher Mehrurlaub?",
      def: "Bei durchgehender <b>Arbeitsunfähigkeit</b>, die die Urlaubnahme über das Jahr und den Übertragungszeitraum hinaus verhindert, gelten Sonderfristen:<br><br><b>Gesetzlicher (Mindest-)Urlaub:</b> verfällt <b>erst 15 Monate nach Ablauf des Urlaubsjahres</b> = am <b>31.03. des ÜBERNÄCHSTEN Kalenderjahres</b> (BAG v. 07.08.2012 – 9 AZR 353/10; EuGH „Schulte“/„KHS“).<br><br><b>Tariflicher Mehrurlaub</b> (über den gesetzlichen Mindesturlaub hinaus): erlischt weiterhin nach § 26 II a S. 2 TVöD-VKA am <b>31.05.</b> des dem Urlaubsjahr folgenden Jahres (BAG v. 22.05.2012 – 9 AZR 575/10).<br><br>→ Bei Langzeit-AU sind die beiden Urlaubs-„Töpfe“ also getrennt zu behandeln.",
      options: [
        { label: "Gesetzlicher Mindesturlaub", next: "e_15_monate", tone: "pos" },
        { label: "Tariflicher Mehrurlaub", next: "e_mehrurlaub", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_uebertragung_31_03: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 II a S. 1 TVöD-VKA, § 7 III BUrlG",
      title: "Übertragung – Antritt bis 31.03. des Folgejahres",
      text: "Es liegt ein Übertragungstatbestand des § 7 III BUrlG vor (dringende betriebliche oder in der Person liegende Gründe). Der Resturlaub wird ins Folgejahr übertragen und muss dort bis zum 31.03. ANGETRETEN werden (§ 26 II a S. 1 TVöD-VKA).\n\nGünstiger als das BUrlG: Nach der tariflichen Regelung genügt der ANTRITT bis 31.03. – der Urlaub darf in den April hineinragen. Nach dem BUrlG allein müsste er bis 31.03. gewährt UND genommen sein.\n\nWird der übertragene Urlaub bis 31.03. nicht angetreten, verfällt er (vorbehaltlich der 2. Stufe und der Mitwirkungsobliegenheit des Arbeitgebers)."
    },

    e_uebertragung_31_05: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 26 II a S. 2 TVöD-VKA",
      title: "Zweite Stufe – Antritt bis 31.05. des Folgejahres",
      text: "Konnte der nach Stufe 1 übertragene Urlaub wegen Arbeitsunfähigkeit oder aus betrieblichen/dienstlichen Gründen (ohne die Zuspitzung „dringend\") nicht bis zum 31.03. angetreten werden, verlängert sich der Übertragungszeitraum: Antritt bis zum 31.05. des Folgejahres (§ 26 II a S. 2 TVöD-VKA).\n\nAuch hier genügt der ANTRITT des Resturlaubs am 31.05. Danach verfällt der Urlaub – vorbehaltlich der Sonderregeln bei Langzeiterkrankung (15-Monats-Frist beim gesetzlichen Mindesturlaub) und der arbeitgeberseitigen Mitwirkungsobliegenheit."
    },

    e_15_monate: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 7 III BUrlG (BAG/EuGH)",
      title: "Langzeit-AU: gesetzlicher Mindesturlaub verfällt erst nach 15 Monaten",
      text: "Ist die/der Beschäftigte aus gesundheitlichen Gründen durchgehend an der Urlaubnahme gehindert, verfällt der gesetzliche MINDESTurlaub erst 15 Monate nach Ablauf des Urlaubsjahres – also am 31.03. des übernächsten Kalenderjahres (BAG v. 07.08.2012 – 9 AZR 353/10; v. 18.09.2012 – 9 AZR 623/10).\n\nBeispiel: Mindesturlaub aus dem Jahr 2024 verfällt bei durchgehender AU erst mit Ablauf des 31.03.2026.\n\nDer tarifliche MEHRurlaub folgt einer eigenen (kürzeren) Frist (§ 26 II a S. 2 TVöD: 31.05. des Folgejahres) – beide Töpfe getrennt betrachten."
    },

    e_mehrurlaub: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 26 II a S. 2 TVöD-VKA",
      title: "Tariflicher Mehrurlaub erlischt am 31.05. des Folgejahres",
      text: "Der über den gesetzlichen Mindesturlaub hinausgehende tarifliche Mehrurlaub unterliegt nicht der 15-Monats-Rechtsprechung: Er erlischt auch bei Langzeiterkrankung nach § 26 II a S. 2 TVöD-VKA am 31.05. des dem Urlaubsjahr folgenden Jahres (BAG v. 22.05.2012 – 9 AZR 575/10 für TVöD; 9 AZR 618/10 für TV-L).\n\nPraktische Folge: Bei einer sich über mehrere Jahre erstreckenden Erkrankung bleibt nur der gesetzliche Mindesturlaub (20 Arbeitstage in der 5-Tage-Woche) über die 15-Monats-Frist erhalten; der tarifliche Mehrurlaub (die darüber hinausgehenden 10 Tage) verfällt früher."
    },

    e_verfall: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 7 III 1 BUrlG",
      title: "Urlaub verfallen",
      text: "Ohne Übertragungstatbestand verfällt der nicht genommene Urlaub mit Ablauf des Kalenderjahres (§ 7 III 1 BUrlG, § 26 I 5 TVöD).\n\nABER prüfen: Nach EuGH/BAG verfällt der Urlaub nur, wenn der Arbeitgeber seiner Mitwirkungsobliegenheit nachgekommen ist – also die/den Beschäftigten rechtzeitig und konkret aufgefordert hat, den Urlaub zu nehmen, und auf den drohenden Verfall hingewiesen hat. Fehlt dieser Hinweis, bleibt der Urlaub trotz Jahresablaufs bestehen.\n\nMerke außerdem (Skript, Kap. 4.11): kein Urlaub im Vorgriff, kein eigenmächtiger Urlaubsantritt (Selbstbeurlaubung kann wichtigen Grund für fristlose Kündigung nach § 626 BGB bilden, BAG v. 20.05.2021 – 2 AZR 457/20), keine dem Urlaubszweck widersprechende Erwerbstätigkeit (§ 8 BUrlG), Urlaubsanspruch ist höchstpersönlich."
    }
  },

  routers: {}
});
