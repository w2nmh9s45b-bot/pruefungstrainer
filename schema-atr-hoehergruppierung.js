/*
 * Prüfungsschema: Höher- und Herabgruppierung (§ 17 IV TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.2.5/2.6.2.6 (Höhergruppierung,
 *    Herabgruppierung, stufengleiche Zuordnung, Protokollerklärung) und
 *    Kap. 2.6.3.3 (Höhergruppierung nach vorübergehender Übertragung)
 *  - Lehrplanung FS III PLE 6 (Höhergruppierung, §§ 17 IV TVöD)
 *  - Gesetze: TVöD § 17 IV (VKA) (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-hoehergruppierung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Höher- und Herabgruppierung (§ 17 IV TVöD-VKA)",
  description: "Stufenzuordnung bei Wechsel der Entgeltgruppe: stufengleiche Höhergruppierung (mindestens Stufe 2, Stufenlaufzeit beginnt neu, Wirkung ab Monatsbeginn), Herabgruppierung (stufengleich, Laufzeit wird angerechnet) und Sonderfall der Höhergruppierung im Anschluss an eine vorübergehende Übertragung.",
  start: "start",
  stations: [
    { id: "anlass", label: "Anlass" },
    { id: "zuordnung", label: "Stufenzuordnung" },
    { id: "wirkung", label: "Wirkung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Zuordnung bestimmt",
    neg: "Ergebnis: keine Umgruppierung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "anlass",
      kind: "frage",
      norm: "§§ 12, 13 TVöD-VKA",
      title: "Was ist der Anlass des Entgeltgruppenwechsels?",
      def: "<b>Höhergruppierung</b> = Eingruppierung in eine <b>höhere</b> Entgeltgruppe. Sie erfolgt nur im Zusammenhang mit einer höherwertigen Tätigkeit:<br>• Der Arbeitgeber überträgt <b>auf Dauer</b> eine qualitativ höherwertige Tätigkeit (§ 12 TVöD-VKA, Tarifautomatik!) ODER<br>• die übertragene Tätigkeit hat sich <b>nicht nur vorübergehend</b> in eine höhere Entgeltgruppe entwickelt (§ 13 TVöD-VKA).<br><br><b>Herabgruppierung</b> = Eingruppierung in eine <b>niedrigere</b> Entgeltgruppe (z. B. nach Umsetzung auf eine geringer bewertete Stelle, Neubewertung der Stelle).<br><br><b>Nur vorübergehende</b> Übertragung einer höherwertigen Tätigkeit → KEINE Höhergruppierung, sondern persönliche Zulage (§ 14 TVöD-VKA, eigenes Schema).",
      options: [
        { label: "Dauerhafte Höhergruppierung (EG 2-14 → höher)", next: "q_hoeher", tone: "pos" },
        { label: "Herabgruppierung", next: "q_herab", tone: "neutral" },
        { label: "Nur vorübergehende Übertragung", next: "e_nur_zulage", tone: "warn" }
      ]
    },

    q_hoeher: {
      station: "zuordnung",
      kind: "frage",
      norm: "§ 17 IV 1, 2 TVöD-VKA",
      title: "Höhergruppierung: Welcher Stufe wird die/der Beschäftigte zugeordnet?",
      def: "<b>Stufengleiche Zuordnung (§ 17 IV 1 TVöD-VKA):</b> Bei Höhergruppierung aus den EG 2 bis 14 werden Beschäftigte <b>derselben Stufe</b> zugeordnet, die sie in der niedrigeren Entgeltgruppe erreicht haben – <b>mindestens jedoch der Stufe 2</b>.<br><br><b>Stufenlaufzeit (§ 17 IV 2):</b> Sie beginnt in der höheren Entgeltgruppe <b>mit dem Tag der Höhergruppierung NEU</b> – die vollständige Laufzeit der Stufe ist neu zu durchlaufen (anders bei der Herabgruppierung!).<br><br><b>Sonderregel:</b> Höhergruppierung aus der EG 1 → § 17 IVa TVöD-VKA.<br><br><b>Beispiel (Skript):</b> EG 6 Stufe 4, am 01.07.2023 werden dauerhaft Tätigkeiten der EG 7 übertragen → Höhergruppierung kraft Tarifautomatik in EG 7 <b>Stufe 4</b>; die dortige Stufenlaufzeit (4 Jahre bis Stufe 5) beginnt am 01.07.2023 neu.",
      options: [
        { label: "Stufengleich zugeordnet, Laufzeit neu", next: "q_anschluss", tone: "pos" }
      ]
    },

    q_anschluss: {
      station: "zuordnung",
      kind: "frage",
      norm: "Protokollerklärung zu § 17 IV TVöD-VKA",
      title: "Erfolgte die Höhergruppierung im Anschluss an eine VORÜBERGEHENDE Übertragung?",
      def: "<b>Protokollerklärung zu § 17 IV TVöD-VKA (seit 01.01.2020):</b> Werden höherwertige Tätigkeiten <b>im unmittelbaren Anschluss</b> an die vorübergehende Übertragung (§ 14) <b>dauerhaft</b> übertragen, werden die Beschäftigten hinsichtlich der Stufenzuordnung so gestellt, <b>als wäre die Höhergruppierung bereits am ersten Tag der vorübergehenden Übertragung erfolgt</b> (fiktive Rückrechnung).<br><br>• Unmittelbarer Anschluss: nur arbeitsfreie Tage/Wochenenden/Feiertage dazwischen unschädlich,<br>• die Höhergruppierung muss in <b>dieselbe Entgeltgruppe</b> führen (nicht zwingend dieselbe Tätigkeit).<br><br><b>Beispiel (Skript):</b> EG 6 Stufe 3; ab 01.01.2022 vorübergehend, ab 01.07.2022 dauerhaft EG-8-Tätigkeit → Stufenzuordnung fiktiv zum 01.01.2022: EG 8 Stufe 3, Stufenlaufzeit ab 01.01.2022 → Stufe 4 zum 01.01.2025.",
      options: [
        { label: "Ja – fiktive Zuordnung ab erstem Übertragungstag", next: "e_anschluss", tone: "pos" },
        { label: "Nein, normale Höhergruppierung", next: "e_hoeher", tone: "pos" }
      ]
    },

    q_herab: {
      station: "zuordnung",
      kind: "frage",
      norm: "§ 17 IV 3 TVöD-VKA",
      title: "Herabgruppierung: Stufe und Stufenlaufzeit?",
      def: "Bei Eingruppierung in eine <b>niedrigere</b> Entgeltgruppe wird die/der Beschäftigte <b>stufengleich</b> zugeordnet (§ 17 IV 3 Hs. 1 TVöD-VKA) – also derselben Stufe, die in der bisherigen (höheren) Entgeltgruppe erreicht war.<br><br><b>Wichtiger Unterschied zur Höhergruppierung:</b> Die Stufenlaufzeit beginnt NICHT neu – die in der bisherigen Entgeltgruppe <b>zurückgelegte Stufenlaufzeit wird angerechnet</b> (§ 17 IV 3 Hs. 2 TVöD-VKA).<br><br><b>Beispiel (Skript):</b> EG 6, seit 01.03.2022 in Stufe 3; am 01.03.2023 Herabgruppierung in EG 5, dort ebenfalls Stufe 3. Das bereits verbrachte eine Jahr wird angerechnet → Stufe 4 der EG 5 wird am 01.03.2025 erreicht (3-Jahres-Laufzeit minus 1 Jahr = noch 2 Jahre).",
      options: [
        { label: "Verstanden", next: "e_herab", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_hoeher: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 17 IV 1, 2, 4 TVöD-VKA",
      title: "Höhergruppierung: stufengleich, Laufzeit neu, Wirkung ab Monatsbeginn",
      text: "Die/Der Beschäftigte wird in der höheren Entgeltgruppe DERSELBEN Stufe zugeordnet (mindestens Stufe 2, § 17 IV 1). Die Stufenlaufzeit beginnt mit dem Tag der Höhergruppierung NEU (§ 17 IV 2).\n\nWIRKSAMKEIT: Die Höhergruppierung wirkt vom BEGINN DES MONATS, in dem sie vorgenommen wird (§ 17 IV 4 TVöD-VKA). Beispiel Skript: Höhergruppierung mit Wirkung vom 18.05.2023 → Entgelt aus der neuen EG bereits ab 01.05.2023.\n\nKlausurhinweis Jahressonderzahlung: Der Bemessungssatz richtet sich nach der EG am 1. September – eine Höhergruppierung z. B. von EG 8 nach EG 9a zum 01.09. kann wegen des niedrigeren Prozentsatzes (84,51 % → 70,28 %) die Jahressonderzahlung mindern!"
    },

    e_anschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Protokollerklärung zu § 17 IV TVöD-VKA",
      title: "Fiktive Stufenzuordnung ab dem ersten Tag der vorübergehenden Übertragung",
      text: "Wegen des unmittelbaren Anschlusses der dauerhaften an die vorübergehende Übertragung wird die/der Beschäftigte so gestellt, als sei die Höhergruppierung schon am ersten Tag der vorübergehenden Übertragung erfolgt: Die stufengleiche Zuordnung UND der Beginn der neuen Stufenlaufzeit werden auf diesen Tag zurückbezogen.\n\nDamit gehen die als Vertretung geleisteten Monate für den nächsten Stufenaufstieg in der höheren Entgeltgruppe nicht verloren.\n\nBeispiel: vorübergehend ab 01.01.2022 (EG 8), dauerhaft ab 01.07.2022 → Zuordnung EG 8 Stufe 3 fiktiv zum 01.01.2022, Stufe 4 nach dreijähriger Laufzeit zum 01.01.2025."
    },

    e_herab: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 17 IV 3 TVöD-VKA",
      title: "Herabgruppierung: stufengleich mit Anrechnung der Laufzeit",
      text: "Bei der Herabgruppierung erfolgt die Zuordnung stufengleich in die niedrigere Entgeltgruppe; die dort maßgebliche Stufenlaufzeit läuft nicht neu an – die in der bisherigen Entgeltgruppe zurückgelegte Zeit wird angerechnet (§ 17 IV 3 TVöD-VKA).\n\nZum Hintergrund: Die Herabgruppierung folgt aus der Tarifautomatik (§§ 12, 13 TVöD-VKA), wenn dauerhaft eine niedriger bewertete Tätigkeit auszuüben ist. Einseitig kann der Arbeitgeber die VERTRAGLICH geschuldete Tätigkeit aber nur im Rahmen des Direktionsrechts (§ 106 GewO) ändern – ist die höherwertige Tätigkeit vertraglich zugesichert, bedarf es einer Änderungskündigung oder -vereinbarung."
    },

    e_nur_zulage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 14 TVöD-VKA",
      title: "Keine Umgruppierung – persönliche Zulage prüfen",
      text: "Die nur VORÜBERGEHENDE Übertragung einer höherwertigen Tätigkeit ändert die Eingruppierung nicht (§ 12 TVöD-VKA stellt auf die dauerhaft auszuübende Tätigkeit ab).\n\nStattdessen: persönliche Zulage nach § 14 TVöD-VKA, wenn die höherwertige Tätigkeit mindestens einen Monat tatsächlich ausgeübt wurde – Details im eigenen Schema „Persönliche Zulage\".\n\nWird die Tätigkeit später im unmittelbaren Anschluss dauerhaft übertragen, greift die Protokollerklärung zu § 17 IV TVöD-VKA (fiktive Stufenzuordnung ab dem ersten Tag der vorübergehenden Übertragung)."
    }
  },

  routers: {}
});
