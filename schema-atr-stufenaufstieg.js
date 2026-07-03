/*
 * Prüfungsschema: Stufenaufstieg und Stufenlaufzeit (§§ 16 III, 17 I-III TVöD-VKA)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.2.4 (Stufenaufstieg,
 *    leistungsabhängige Verkürzung/Verlängerung, Exkurs Unterbrechungen)
 *  - Lehrplanung FS III PLE 5 (Entgeltgruppen und Stufen, §§ 12, 16, 17)
 *  - Gesetze: TVöD §§ 16 III, 17 I-III (VKA) (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-stufenaufstieg",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Stufenaufstieg und Stufenlaufzeit (§§ 16 III, 17 TVöD-VKA)",
  description: "Regelaufstieg nach Stufenlaufzeiten (1/2/3/4/5 Jahre, Endstufe nach 15 Jahren), Entgelt ab Monatsbeginn (§ 17 I), leistungsabhängige Verkürzung/Verlängerung (§ 17 II) und Behandlung von Unterbrechungen (§ 17 III: anrechenbar, unschädlich, schädlich).",
  start: "start",
  stations: [
    { id: "laufzeit", label: "Laufzeit" },
    { id: "leistung", label: "Leistung" },
    { id: "unterbrechung", label: "Unterbrechung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Aufstieg/Anrechnung",
    neg: "Ergebnis: kein Aufstieg/Rückstufung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "laufzeit",
      kind: "frage",
      norm: "§ 16 III TVöD-VKA",
      title: "Ist die regelmäßige Stufenlaufzeit erreicht?",
      def: "<b>Stufenlaufzeit</b> = die Zeit <b>ununterbrochener Tätigkeit</b> innerhalb <b>derselben Entgeltgruppe</b> bei <b>demselben Arbeitgeber</b>. Nach ihrem Ablauf erreicht die/der Beschäftigte die nächste Stufe (§ 16 III TVöD-VKA) – das Lebensalter spielt KEINE Rolle.<br><br><b>Degressive Staffel (bei durchschnittlicher Leistung):</b><br>• Stufe 2 nach <b>1 Jahr</b> in Stufe 1,<br>• Stufe 3 nach <b>2 Jahren</b> in Stufe 2,<br>• Stufe 4 nach <b>3 Jahren</b> in Stufe 3,<br>• Stufe 5 nach <b>4 Jahren</b> in Stufe 4,<br>• Stufe 6 nach <b>5 Jahren</b> in Stufe 5.<br>→ Endstufe 6 ohne EG-Wechsel nach insgesamt <b>15 Jahren</b>.<br><br><b>Auszahlung (§ 17 I TVöD-VKA):</b> Das Tabellenentgelt der neuen Stufe gibt es <b>vom Beginn des Monats an</b>, in dem die nächste Stufe erreicht wird.<br><br><b>Teilzeit:</b> Zeiten der Teilzeitbeschäftigung werden in <b>vollem Umfang</b> angerechnet (§ 17 III 4 TVöD-VKA).",
      hint: "Beispiel aus dem Skript: Einstellung 15.10.2021 in EG 5 Stufe 2 → Stufe 3 wird am 15.10.2023 erreicht; gezahlt wird das Stufe-3-Entgelt bereits ab 01.10.2023.",
      options: [
        { label: "Ja, Laufzeit abgelaufen, keine Unterbrechung", next: "e_aufstieg", tone: "pos" },
        { label: "Leistungsfrage klären (§ 17 II)", next: "q_leistung", tone: "neutral" },
        { label: "Es gab Unterbrechungen", next: "q_unterbrechung", tone: "warn" }
      ]
    },

    q_leistung: {
      station: "leistung",
      kind: "frage",
      norm: "§ 17 II TVöD-VKA",
      title: "Weicht die Leistung erheblich vom Durchschnitt ab?",
      def: "Die Stufenlaufzeiten des § 16 III setzen eine <b>durchschnittliche Arbeitsleistung</b> voraus. Die <b>Grundentgeltstufen 1 und 2</b> sind nicht leistungsbezogen; erst in den <b>Entwicklungsstufen</b> (ab Aufstieg von 3 nach 4) kann die Leistung berücksichtigt werden:<br><br>• <b>Erheblich ÜBER dem Durchschnitt:</b> Die erforderliche Zeit kann <b>verkürzt</b> werden (§ 17 II 1),<br>• <b>Erheblich UNTER dem Durchschnitt:</b> Die Zeit kann <b>verlängert</b> (oder angehalten) werden (§ 17 II 2); bei Verlängerung ist <b>jährlich zu prüfen</b>, ob die Voraussetzungen noch vorliegen (§ 17 II 3).<br><br><b>Praxisproblem:</b> Messbarkeit! Es müssten Durchschnittsleistung UND Erheblichkeitskriterien definiert werden. Die Tarifvertragsparteien sehen die Regelung als Instrument der Personalentwicklung für <b>Einzelfälle</b> („absolute Leistungsträger“).",
      options: [
        { label: "Durchschnittliche Leistung – Regelaufstieg", next: "e_aufstieg", tone: "pos" },
        { label: "Erheblich überdurchschnittlich", next: "e_verkuerzung", tone: "pos" },
        { label: "Erheblich unterdurchschnittlich", next: "e_verlaengerung", tone: "neg" }
      ]
    },

    q_unterbrechung: {
      station: "unterbrechung",
      kind: "frage",
      norm: "§ 17 III TVöD-VKA",
      title: "Wie ist die Unterbrechung einzuordnen?",
      def: "§ 17 III TVöD-VKA unterscheidet drei Kategorien:<br><br><b>1. ANRECHENBARE Zeiten (§ 17 III 1 Buchst. a–f)</b> – gelten voll als Stufenlaufzeit:<br>a) Beschäftigungsverbote nach dem <b>MuSchG</b>,<br>b) <b>Arbeitsunfähigkeit bis 39 Wochen</b> (§ 22),<br>c) <b>bezahlter Urlaub</b>,<br>d) <b>Sonderurlaub mit anerkanntem dienstlichen/betrieblichen Interesse</b>,<br>e) sonstige Unterbrechungen von <b>weniger als einem Monat im Kalenderjahr</b>,<br>f) Zeiten der <b>vorübergehenden Übertragung einer höherwertigen Tätigkeit</b> (§ 14).<br><br><b>2. UNSCHÄDLICHE Unterbrechungen (§ 17 III 2):</b> andere Zeiten bis zu <b>jeweils 3 Jahren</b>, bei <b>Elternzeit bis zu jeweils 5 Jahren</b> – zählen NICHT als Laufzeit, aber die bisherige Laufzeit bleibt erhalten und läuft danach weiter („jeweils“ = pro Unterbrechungsvorgang, also bis zu 5 Jahre pro Kind; tarifliche Elternzeit umfasst auch unmittelbar anschließenden Sonderurlaub zur Kinderbetreuung).<br><br><b>3. SCHÄDLICHE Unterbrechungen (§ 17 III 3):</b> länger als 3 Jahre (Elternzeit: länger als 5 Jahre).",
      options: [
        { label: "Anrechenbare Zeit (Buchst. a-f)", next: "e_anrechenbar", tone: "pos" },
        { label: "Unschädlich (≤ 3 Jahre / Elternzeit ≤ 5 Jahre)", next: "e_unschaedlich", tone: "warn" },
        { label: "Schädlich (> 3 Jahre / Elternzeit > 5 Jahre)", next: "e_schaedlich", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_aufstieg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 16 III, § 17 I TVöD-VKA",
      title: "Aufstieg in die nächste Stufe",
      text: "Die Stufenlaufzeit (1/2/3/4/5 Jahre ununterbrochene Tätigkeit in derselben Entgeltgruppe beim selben Arbeitgeber, bei durchschnittlicher Leistung) ist abgelaufen – die/der Beschäftigte steigt in die nächsthöhere Stufe auf.\n\nDas Tabellenentgelt der neuen Stufe wird vom BEGINN des Monats gezahlt, in dem die nächste Stufe erreicht wird (§ 17 I TVöD-VKA).\n\nRechenweg für die Klausur: Tag der Stufenzuordnung + Laufzeit (§§ 187 II, 188 II BGB entsprechend) = Tag des Stufenaufstiegs → Entgelt ab Monatsersten dieses Monats."
    },

    e_verkuerzung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 17 II 1 TVöD-VKA",
      title: "Leistungsbedingte Verkürzung der Stufenlaufzeit möglich",
      text: "Bei Leistungen, die ERHEBLICH über dem Durchschnitt liegen, KANN die erforderliche Zeit für das Erreichen der Stufen 4 bis 6 verkürzt werden (§ 17 II 1 TVöD-VKA) – Ermessensentscheidung des Arbeitgebers, kein Automatismus und kein Anspruch.\n\nVoraussetzung ist praktisch ein funktionierendes System der Leistungsfeststellung (Durchschnittsmaßstab + Erheblichkeitskriterien). Gedacht für Einzelfälle („absolute Leistungsträger\") als Instrument der Personalentwicklung und -bindung."
    },

    e_verlaengerung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 17 II 2, 3 TVöD-VKA",
      title: "Leistungsbedingte Verlängerung/Hemmung der Stufenlaufzeit",
      text: "Bei Leistungen, die ERHEBLICH unter dem Durchschnitt liegen, kann die Stufenlaufzeit (Aufstieg in die Stufen 4 bis 6) verlängert oder angehalten werden (§ 17 II 2 TVöD-VKA).\n\nWird verlängert, muss der Arbeitgeber JÄHRLICH prüfen, ob die Voraussetzungen noch vorliegen (§ 17 II 3 TVöD-VKA) – liegt die Leistung wieder im Durchschnitt, läuft die Stufenlaufzeit weiter.\n\nWichtig: Die Grundentgeltstufen 1 und 2 sind nicht leistungsbezogen – dort gibt es keine Verlängerung."
    },

    e_anrechenbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 17 III 1 TVöD-VKA",
      title: "Zeit wird voll auf die Stufenlaufzeit angerechnet",
      text: "Die Unterbrechung fällt unter § 17 III 1 Buchst. a–f TVöD-VKA (Mutterschutz-Beschäftigungsverbote, Arbeitsunfähigkeit bis 39 Wochen, bezahlter Urlaub, Sonderurlaub mit anerkanntem dienstlichen Interesse, sonstige Unterbrechungen unter einem Monat im Kalenderjahr, vorübergehende höherwertige Tätigkeit). Sie gilt in vollem Umfang als ununterbrochene Tätigkeit i. S. d. § 16 III 1 – die Stufenlaufzeit läuft schlicht weiter.\n\nDer Stufenaufstieg erfolgt also zum ursprünglich berechneten Termin."
    },

    e_unschaedlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 17 III 2 TVöD-VKA",
      title: "Unschädliche Unterbrechung: Laufzeit pausiert, bleibt aber erhalten",
      text: "Die Unterbrechung (bis zu jeweils 3 Jahre, bei Elternzeit bis zu jeweils 5 Jahren pro Kind) wird zwar NICHT auf die Stufenlaufzeit angerechnet – sie ist aber unschädlich: Nach der Rückkehr läuft die Stufenlaufzeit dort weiter, wo sie vor der Unterbrechung stand (kein Neubeginn).\n\nBeispiel aus dem Skript: EG 6 Stufe 3, Rest-Laufzeit 18 Monate, dann 2 Jahre unbezahlter Sonderurlaub (§ 28) → nach Wiederaufnahme wird Stufe 4 nach weiteren 18 Monaten erreicht."
    },

    e_schaedlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 17 III 3 TVöD-VKA",
      title: "Schädliche Unterbrechung: eine Stufe zurück, Laufzeit beginnt neu",
      text: "Dauert die Unterbrechung länger als 3 Jahre (Elternzeit: länger als 5 Jahre je Vorgang), erfolgt bei Weiterbeschäftigung die Zuordnung zur NÄCHSTNIEDRIGEREN Stufe gegenüber der vor der Unterbrechung erreichten – jedoch nicht niedriger, als es bei einer Neueinstellung der Fall wäre (Vergleichsberechnung mit § 16 II: mindestens dreijährige einschlägige Berufserfahrung → mindestens Stufe 3!). Die Stufenlaufzeit beginnt mit dem Tag der Arbeitsaufnahme NEU (§ 17 III 3 TVöD-VKA).\n\nBeispiele aus dem Skript:\n• EG 6 Stufe 5 (seit 01.10.2013), 4 Jahre Sonderurlaub ab 01.12.2015 → ab 01.12.2019 Stufe 4, Stufe 5 wieder am 01.12.2023, Stufe 6 erst am 01.12.2028.\n• EG 6 Stufe 3, 4 Jahre Sonderurlaub → an sich Stufe 2, aber Neueinstellungsvergleich (3 Jahre Berufserfahrung = Stufe 3) → es bleibt bei Stufe 3, Laufzeit beginnt neu."
    }
  },

  routers: {}
});
