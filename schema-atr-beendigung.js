/*
 * Prüfungsschema: Beendigung des Arbeitsverhältnisses ohne Kündigung (§ 33 TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - Lehrplanung FS III PLE 3 ("Beendigung des Arbeitsverhältnisses ohne
 *    Kündigung"), Muster-Arbeitsvertrag § 5 (Skript Kap. 2.5.1)
 *  - Gesetze: TVöD §§ 30, 33 (Volltext geprüft); TzBfG § 15; BGB §§ 623, 620;
 *    SGB VI § 41 S. 3
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-beendigung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Beendigung des Arbeitsverhältnisses",
  title: "Beendigung ohne Kündigung (§ 33 TVöD)",
  description: "Beendigungstatbestände ohne Kündigung: Fristablauf/Zweckerreichung (§ 30 TVöD, § 15 TzBfG), Erreichen der Regelaltersgrenze (§ 33 I a), Auflösungsvertrag (§ 33 I b, § 623 BGB), Rentenbescheid wegen Erwerbsminderung als auflösende Bedingung (§ 33 II–IV) und Tod des Beschäftigten.",
  start: "start",
  stations: [
    { id: "tatbestand", label: "Tatbestand" },
    { id: "voraussetzungen", label: "Voraussetzungen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Arbeitsverhältnis endet",
    neg: "Ergebnis: keine Beendigung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 33 TVöD, § 620 BGB",
      title: "Welcher Beendigungstatbestand kommt in Betracht?",
      def: "Das Arbeitsverhältnis kann <b>ohne Kündigung</b> enden durch:<br><br>• <b>Zeitablauf/Zweckerreichung</b> beim befristeten Arbeitsvertrag (§ 620 I, III BGB, § 15 TzBfG, § 30 TVöD),<br>• <b>Erreichen der Regelaltersgrenze</b> (§ 33 I Buchst. a TVöD),<br>• <b>Auflösungsvertrag</b> – jederzeit im gegenseitigen Einvernehmen (§ 33 I Buchst. b TVöD),<br>• <b>Rentenbescheid wegen voller oder teilweiser Erwerbsminderung</b> auf unbestimmte Dauer (§ 33 II TVöD – tarifliche auflösende Bedingung),<br>• <b>Tod</b> der/des Beschäftigten (höchstpersönliche Leistungspflicht, § 613 BGB; vgl. Sterbegeld § 23 III TVöD).<br><br><b>NICHT automatisch beendet</b> wird das Arbeitsverhältnis durch bloße (auch lange) Krankheit!",
      options: [
        { label: "Befristungsablauf / Zweckerreichung", next: "e_befristung", tone: "neutral" },
        { label: "Regelaltersgrenze erreicht", next: "q_alter", tone: "neutral" },
        { label: "Auflösungsvertrag", next: "q_aufloesung", tone: "neutral" },
        { label: "Rentenbescheid Erwerbsminderung", next: "q_rente", tone: "neutral" }
      ]
    },

    q_alter: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "§ 33 I a TVöD",
      title: "Wurde das Alter für die abschlagsfreie Regelaltersrente vollendet?",
      def: "Das Arbeitsverhältnis endet, ohne dass es einer Kündigung bedarf, <b>mit Ablauf des Monats</b>, in dem die/der Beschäftigte das <b>gesetzlich festgelegte Alter zum Erreichen der Regelaltersrente</b> vollendet hat (§ 33 I Buchst. a TVöD; Regelaltersgrenze: schrittweise Anhebung auf 67, §§ 35, 235 SGB VI).<br><br><b>Ausnahme – Hinausschieben:</b> Arbeitgeber und Beschäftigte/r können <b>während des Arbeitsverhältnisses</b> vereinbaren, den Beendigungszeitpunkt hinauszuschieben (§ 41 S. 3 SGB VI – auch mehrfach).<br><br><b>Weiterbeschäftigung nach dem Ende (§ 33 V TVöD):</b> neuer schriftlicher Arbeitsvertrag erforderlich; dieser kann jederzeit mit einer Frist von <b>vier Wochen zum Monatsende</b> gekündigt werden, wenn nichts anderes vereinbart ist.",
      options: [
        { label: "Ja, Regelaltersgrenze erreicht, kein Hinausschieben", next: "e_alter", tone: "pos" },
        { label: "Hinausschieben nach § 41 S. 3 SGB VI vereinbart", next: "e_hinausschieben", tone: "warn" }
      ]
    },

    q_aufloesung: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "§ 33 I b TVöD, § 623 BGB",
      title: "Ist der Auflösungsvertrag formwirksam geschlossen?",
      def: "<b>Auflösungsvertrag (Aufhebungsvertrag)</b> = Vertrag, durch den Arbeitgeber und Beschäftigte/r das Arbeitsverhältnis <b>jederzeit im gegenseitigen Einvernehmen</b> beenden (§ 33 I Buchst. b TVöD). Kündigungsfristen und Kündigungsschutz gelten hier nicht.<br><br><b>Form:</b> Die Beendigung durch Auflösungsvertrag bedarf zu ihrer Wirksamkeit der <b>Schriftform</b>; die <b>elektronische Form ist ausgeschlossen</b> (§ 623 BGB). Ein mündlicher oder per E-Mail geschlossener Aufhebungsvertrag ist nichtig (§ 125 BGB).<br><br><b>Praxishinweise:</b> Vor Abschluss an sozialversicherungsrechtliche Folgen denken (Sperrzeit beim Arbeitslosengeld, § 159 SGB III); keine Personalratsbeteiligung erforderlich (kein einseitiger Akt).",
      options: [
        { label: "Ja, schriftlich (§ 623 BGB)", next: "e_aufloesung", tone: "pos" },
        { label: "Nur mündlich / per E-Mail", next: "e_form_nichtig", tone: "neg" }
      ]
    },

    q_rente: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "§ 33 II TVöD",
      title: "Rente wegen Erwerbsminderung: auf unbestimmte Dauer oder auf Zeit?",
      def: "Das Arbeitsverhältnis endet ferner, wenn der/dem Beschäftigten der <b>Bescheid eines Rentenversicherungsträgers zugestellt</b> wird, wonach sie/er eine <b>Rente auf unbestimmte Dauer wegen voller oder teilweiser Erwerbsminderung</b> erhält (§ 33 II 1 TVöD).<br><br>• Pflicht: Beschäftigte/r muss den Arbeitgeber von der Zustellung <b>unverzüglich unterrichten</b> (§ 33 II 2).<br>• <b>Ende:</b> mit Ablauf des dem <b>Rentenbeginn vorangehenden Tages</b>, frühestens jedoch <b>zwei Wochen</b> nach Zugang der schriftlichen Mitteilung des Arbeitgebers über den Eintritt der auflösenden Bedingung (§ 33 II 3).<br>• Bei erforderlicher <b>Zustimmung des Integrationsamtes</b> (§ 175 SGB IX, schwerbehinderte Menschen): Ende erst mit Zustellung des Zustimmungsbescheids (§ 33 II 4).<br><br><b>Rente auf ZEIT:</b> Das Arbeitsverhältnis endet NICHT, sondern <b>ruht</b> für den Bewilligungszeitraum (§ 33 II 5, 6 TVöD).",
      options: [
        { label: "Rente auf unbestimmte Dauer", next: "q_weiterbeschaeftigung", tone: "pos" },
        { label: "Rente auf Zeit", next: "e_ruhen", tone: "warn" }
      ]
    },

    q_weiterbeschaeftigung: {
      station: "voraussetzungen",
      kind: "frage",
      norm: "§ 33 III TVöD",
      title: "Teilweise Erwerbsminderung: Wurde Weiterbeschäftigung beantragt?",
      def: "Bei <b>teilweiser</b> Erwerbsminderung endet bzw. ruht das Arbeitsverhältnis <b>NICHT</b>, wenn<br>• die/der Beschäftigte nach ihrem/seinem vom Rentenversicherungsträger festgestellten Leistungsvermögen auf dem bisherigen oder einem <b>anderen geeigneten und freien Arbeitsplatz weiterbeschäftigt werden könnte</b>,<br>• <b>dringende dienstliche/betriebliche Gründe</b> nicht entgegenstehen UND<br>• die/der Beschäftigte die Weiterbeschäftigung <b>innerhalb von zwei Wochen</b> nach Zugang des Rentenbescheids <b>schriftlich beantragt</b> (§ 33 III TVöD).<br><br><b>Sonderfall § 33 IV TVöD:</b> Verzögert die/der Beschäftigte schuldhaft den Rentenantrag oder ist sie/er nicht gesetzlich rentenversichert, tritt an die Stelle des Rentenbescheids das <b>Gutachten des Amtsarztes</b>; das Arbeitsverhältnis endet dann mit Ablauf des Monats der Bekanntgabe.",
      options: [
        { label: "Volle Erwerbsminderung oder kein Weiterbeschäftigungsantrag", next: "e_erwerbsminderung", tone: "pos" },
        { label: "Teilweise EM + fristgerechter Antrag + geeigneter Platz", next: "e_weiterbeschaeftigung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_befristung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 15 TzBfG, § 30 TVöD",
      title: "Ende durch Fristablauf bzw. Zweckerreichung",
      text: "Das wirksam befristete Arbeitsverhältnis endet mit Ablauf der vereinbarten Zeit (§ 15 I TzBfG) bzw. bei Zweckbefristung mit Zweckerreichung, frühestens zwei Wochen nach Zugang der schriftlichen Unterrichtung (§ 15 II TzBfG) – ohne dass es einer Kündigung bedarf.\n\nVoraussetzung ist die WIRKSAMKEIT der Befristung (Schriftform § 14 IV TzBfG, Sachgrund bzw. § 14 II TzBfG, § 30 TVöD) – dazu das eigene Schema „Befristung des Arbeitsvertrags\". Ist die Befristung unwirksam, gilt das Arbeitsverhältnis als unbefristet (§ 16 TzBfG) und muss gekündigt werden."
    },

    e_alter: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 33 I a TVöD",
      title: "Ende mit Ablauf des Monats der Regelaltersgrenze",
      text: "Das Arbeitsverhältnis endet automatisch mit Ablauf des Monats, in dem die/der Beschäftigte das gesetzlich festgelegte Alter zum Erreichen der Regelaltersrente vollendet (§ 33 I Buchst. a TVöD) – einer Kündigung bedarf es nicht. Die Klausel ist als tarifliche Altersgrenzenregelung anerkannt (sachlicher Grund i. S. d. Befristungsrechts).\n\nBei gewünschter Weiterbeschäftigung: neuer schriftlicher Arbeitsvertrag (§ 33 V TVöD; Kündigung dann mit vier Wochen zum Monatsende möglich) oder rechtzeitiges Hinausschieben des Beendigungszeitpunkts nach § 41 S. 3 SGB VI noch während des laufenden Arbeitsverhältnisses."
    },

    e_hinausschieben: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 41 S. 3 SGB VI",
      title: "Beendigung hinausgeschoben – Arbeitsverhältnis läuft weiter",
      text: "Durch die während des Arbeitsverhältnisses getroffene Vereinbarung ist der Beendigungszeitpunkt (ggf. mehrfach) hinausgeschoben (§ 41 S. 3 SGB VI, ausdrücklich in § 33 I Buchst. a TVöD vorbehalten). Das Arbeitsverhältnis endet erst zum neu vereinbarten Termin.\n\nWichtig: Die Vereinbarung muss VOR Erreichen der Altersgrenze geschlossen werden und nur den Endtermin verschieben – sonst handelt es sich um einen neuen (Befristungs-)Vertrag mit den Anforderungen des TzBfG."
    },

    e_aufloesung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 33 I b TVöD, § 623 BGB",
      title: "Ende durch Auflösungsvertrag",
      text: "Das Arbeitsverhältnis endet zum vereinbarten Zeitpunkt durch den schriftlich geschlossenen Auflösungsvertrag (§ 33 I Buchst. b TVöD, § 623 BGB). Kündigungsfristen, KSchG und besondere Kündigungsverbote gelten für die einvernehmliche Aufhebung nicht.\n\nZu bedenken bleiben: mögliche Sperrzeit beim Arbeitslosengeld (§ 159 SGB III), Verlust von Ansprüchen mit Stichtagen (z. B. Jahressonderzahlung, wenn das Arbeitsverhältnis am 1. Dezember nicht mehr besteht, § 20 I TVöD) und Zeugnisanspruch (§ 35 TVöD)."
    },

    e_form_nichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 623, § 125 BGB",
      title: "Auflösungsvertrag formnichtig – Arbeitsverhältnis besteht fort",
      text: "Die Beendigung von Arbeitsverhältnissen durch Auflösungsvertrag bedarf zu ihrer Wirksamkeit der Schriftform; die elektronische Form ist ausgeschlossen (§ 623 BGB). Der nur mündlich oder per E-Mail/Scan geschlossene Aufhebungsvertrag ist nichtig (§ 125 S. 1 BGB).\n\nDas Arbeitsverhältnis besteht unverändert fort – beide Seiten bleiben zur Leistung verpflichtet. Die Schriftform verlangt eigenhändige Unterschriften beider Parteien auf derselben Urkunde (§ 126 II BGB)."
    },

    e_erwerbsminderung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 33 II TVöD",
      title: "Ende kraft auflösender Bedingung (Erwerbsminderungsrente)",
      text: "Mit Zustellung des Rentenbescheids über eine Rente auf unbestimmte Dauer wegen voller oder teilweiser Erwerbsminderung endet das Arbeitsverhältnis mit Ablauf des dem Rentenbeginn vorangehenden Tages – frühestens jedoch zwei Wochen nach Zugang der schriftlichen Mitteilung des Arbeitgebers über den Eintritt der auflösenden Bedingung (§ 33 II 1, 3 TVöD).\n\nBei schwerbehinderten Menschen ist die Zustimmung des Integrationsamtes erforderlich (§ 175 SGB IX); liegt sie bei Beendigung noch nicht vor, endet das Arbeitsverhältnis erst mit Zustellung des Zustimmungsbescheids (§ 33 II 4 TVöD).\n\nDogmatisch handelt es sich um eine tarifliche auflösende Bedingung (§ 21 TzBfG) – der Sachgrund liegt im dauerhaften Wegfall der Arbeitsfähigkeit bei gleichzeitiger Rentenabsicherung."
    },

    e_ruhen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 33 II 5, 6 TVöD",
      title: "Rente auf Zeit: Arbeitsverhältnis ruht nur",
      text: "Wird die Erwerbsminderungsrente nur auf Zeit gewährt, endet das Arbeitsverhältnis NICHT. Es ruht für den Bewilligungszeitraum (§ 33 II 5, 6 TVöD); für den Beginn des Ruhens gilt die Zwei-Wochen-Regel des § 33 II 3 entsprechend.\n\nFolgen des Ruhens: Hauptpflichten (Arbeit/Entgelt) sind suspendiert; der Erholungsurlaub vermindert sich für jeden vollen Kalendermonat des Ruhens um ein Zwölftel (§ 26 II Buchst. c TVöD); das Arbeitsverhältnis als solches – und damit z. B. der Anspruch auf die Jahressonderzahlung dem Grunde nach (Stichtag 1. Dezember) – bleibt bestehen."
    },

    e_weiterbeschaeftigung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 33 III TVöD",
      title: "Keine Beendigung – Anspruch auf Weiterbeschäftigung",
      text: "Bei teilweiser Erwerbsminderung endet (bzw. ruht) das Arbeitsverhältnis nicht, wenn die/der Beschäftigte nach dem festgestellten Leistungsvermögen auf dem bisherigen oder einem anderen geeigneten und freien Arbeitsplatz weiterbeschäftigt werden könnte, dringende dienstliche bzw. betriebliche Gründe nicht entgegenstehen und die Weiterbeschäftigung innerhalb von zwei Wochen nach Zugang des Rentenbescheids schriftlich beantragt wurde (§ 33 III TVöD).\n\nDas Arbeitsverhältnis wird dann – ggf. mit angepasster Tätigkeit und Arbeitszeit – fortgesetzt. Die Eingruppierung richtet sich nach der neuen auszuübenden Tätigkeit (§ 12 TVöD, Tarifautomatik)."
    }
  },

  routers: {}
});
