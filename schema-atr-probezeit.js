/*
 * Prüfungsschema: Probezeit (§ 2 IV, § 30 IV TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.5.2 (Probezeit: Grundsatz,
 *    Ausnahme, Zweck, Berechnung §§ 187 f. BGB, Verkürzung/Verlängerung)
 *  - Lehrplanung FS III PLE 2 ("Dauer der Probezeit bei befristeten und
 *    unbefristeten Arbeitsverhältnissen bestimmen können")
 *  - Gesetze: TVöD §§ 2 IV, 30 IV, 34 I 1; BGB §§ 187 II, 188 II, III, 622 III
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-probezeit",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Arbeitsvertrag und Befristung",
  title: "Probezeit (§ 2 IV, § 30 IV TVöD)",
  description: "Dauer der Probezeit bei unbefristeten (6 Monate) und befristeten Arbeitsverhältnissen (6 Wochen/6 Monate), Wegfall bei Azubi-Übernahme, Fristberechnung nach §§ 187 II, 188 II BGB, Kündigung in der Probezeit, Verkürzung und Verlängerung.",
  start: "start",
  stations: [
    { id: "art", label: "Vertragsart" },
    { id: "dauer", label: "Dauer" },
    { id: "berechnung", label: "Berechnung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Probezeit bestimmt",
    neg: "Ergebnis: keine Probezeit",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "art",
      kind: "frage",
      norm: "§ 2 IV TVöD",
      title: "Welcher Fall liegt vor?",
      def: "<b>Probezeit</b> = die erste Phase des Arbeitsverhältnisses, die der <b>Einführung und Einarbeitung</b> des Arbeitnehmers und der <b>Erprobung</b> seiner Kenntnisse und Fähigkeiten für eine dauernde Anstellung dient. Sie gibt dem Arbeitgeber Gelegenheit, seine Einstellungsentscheidung zu überprüfen.<br><br><b>Grundsatz (§ 2 IV TVöD):</b> Die <b>ersten sechs Monate</b> der Beschäftigung <b>gelten</b> als Probezeit, soweit nicht eine kürzere Zeit vereinbart ist – die Probezeit entsteht also kraft Tarifvertrags bei jeder Begründung eines Arbeitsverhältnisses, ohne dass sie vereinbart werden müsste.<br><br><b>Ausnahme (§ 30 IV TVöD):</b> Bei befristeten Arbeitsverträgen <b>ohne sachlichen Grund</b> gelten nur die ersten <b>sechs Wochen</b> als Probezeit (mit Sachgrund: sechs Monate).",
      options: [
        { label: "Unbefristetes Arbeitsverhältnis", next: "q_azubi", tone: "neutral" },
        { label: "Befristet MIT Sachgrund", next: "e_befristet_sachgrund", tone: "neutral" },
        { label: "Befristet OHNE Sachgrund", next: "e_befristet_ohne", tone: "neutral" }
      ]
    },

    q_azubi: {
      station: "art",
      kind: "frage",
      norm: "§ 2 IV TVöD (Praxis/Muster-ArbV)",
      title: "Wird ein Azubi im unmittelbaren Anschluss an die Ausbildung übernommen?",
      def: "Die Probezeit <b>entfällt</b> bei Übernahme einer/eines Auszubildenden <b>im unmittelbaren Anschluss</b> an ein <b>erfolgreich abgeschlossenes</b> Ausbildungsverhältnis (nach TVAöD) in ein Arbeitsverhältnis <b>bei derselben Dienststelle oder demselben Betrieb</b>.<br><br>Im Muster-Arbeitsvertrag lautet § 3 dann: „Eine Probezeit ist nicht vereinbart.“<br><br><b>Grund:</b> Der Arbeitgeber kennt die Person und ihre Leistungen bereits aus der Ausbildung – eine Erprobung wäre sinnlos.",
      options: [
        { label: "Ja, unmittelbare Übernahme nach Ausbildung", next: "e_keine_probezeit", tone: "neg" },
        { label: "Nein, normale Neueinstellung", next: "q_verkuerzung", tone: "pos" }
      ]
    },

    q_verkuerzung: {
      station: "dauer",
      kind: "frage",
      norm: "§ 2 III, IV TVöD",
      title: "Wurde die Probezeit verkürzt oder soll sie verlängert werden?",
      def: "<b>Verkürzung/Verzicht:</b> Nach § 2 IV TVöD zulässig („soweit nicht eine kürzere Zeit vereinbart ist“) – erfordert eine <b>Nebenabrede</b> nach § 2 III TVöD (Schriftform!).<br><br><b>Verlängerung – zwei Fälle:</b><br>• <b>Innerhalb des Sechsmonatsrahmens:</b> unproblematisch, wenn einvernehmlich vereinbart und insgesamt sechs Monate nicht überschritten werden.<br>• <b>Über sechs Monate hinaus:</b> Bei beiderseitiger Tarifbindung stehen §§ 3 I, 4 I TVG entgegen (unmittelbare und zwingende Wirkung). Nur bei Tarifgeltung kraft <b>Verweisungsklausel</b> ist die Verlängerung ausnahmsweise möglich, wenn unvorhergesehene Arbeitsausfälle vorliegen und die ausgefallene Zeit im Verhältnis zur Gesamtprobezeit nicht unerheblich ist (z. B. lange Erkrankung – Alternative wäre sonst nur die Probezeitkündigung).<br><br><b>Merke:</b> Die Probezeit läuft unabhängig davon, ob tatsächlich gearbeitet wird (auch bei Krankheit!).",
      options: [
        { label: "Regelfall: 6 Monate", next: "q_berechnung", tone: "pos" },
        { label: "Wirksam verkürzt (Nebenabrede)", next: "q_berechnung", tone: "warn" },
        { label: "Verlängerung über 6 Monate bei Tarifbindung", next: "e_verlaengerung_unzulaessig", tone: "neg" }
      ]
    },

    q_berechnung: {
      station: "berechnung",
      kind: "frage",
      norm: "§§ 187 II, 188 II, III BGB",
      title: "Wie wird die Probezeit berechnet?",
      def: "Die Probezeit läuft vom <b>rechtlichen Beginn</b> des Arbeitsverhältnisses an – das ist der im Arbeitsvertrag <b>vereinbarte Termin</b>, nicht der Tag der tatsächlichen Arbeitsaufnahme.<br><br><b>Fristberechnung:</b><br>• Der Einstellungstag zählt mit (<b>§ 187 II 1 BGB</b> – Beginn des Tages),<br>• Ende: mit Ablauf des Tages des letzten Monats, der dem Tag <b>vorhergeht</b>, der durch seine Zahl dem Anfangstag entspricht (<b>§ 188 II Alt. 2 BGB</b>),<br>• fehlt dieser Tag im letzten Monat, endet die Frist mit Ablauf des letzten Tages dieses Monats (<b>§ 188 III BGB</b>).<br><br><b>Beispiel:</b> Einstellung zum 1. Januar, Arbeitsaufnahme erst 2. Januar → Probezeit läuft ab 1. Januar und endet mit Ablauf des 30. Juni.",
      options: [
        { label: "Berechnung klar", next: "q_kuendigung", tone: "pos" }
      ]
    },

    q_kuendigung: {
      station: "berechnung",
      kind: "frage",
      norm: "§ 34 I 1 TVöD",
      title: "Welche Bedeutung hat die Probezeit für die Kündigung?",
      def: "<b>Kündigungsfrist in der Probezeit:</b> Bis zum Ende des sechsten Monats seit Beginn des Arbeitsverhältnisses beträgt die Kündigungsfrist <b>zwei Wochen zum Monatsschluss</b> (§ 34 I 1 TVöD; bei befristeten Verträgen: § 30 IV 2 TVöD). Vgl. auch § 622 III BGB (dort: zwei Wochen ohne festen Endtermin – der TVöD ist spezieller).<br><br><b>Kein allgemeiner Kündigungsschutz:</b> Das KSchG greift erst nach sechsmonatigem Bestand des Arbeitsverhältnisses (Wartezeit, § 1 I KSchG) – in der Probezeit bedarf die Kündigung also keiner sozialen Rechtfertigung.<br><br><b>Aber:</b> Schriftform (§ 623 BGB), Personalratsbeteiligung nach dem LPersVG und besondere Kündigungsverbote (z. B. § 17 MuSchG) gelten auch in der Probezeit!",
      options: [
        { label: "Verstanden", next: "e_probezeit", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_probezeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 2 IV TVöD",
      title: "Probezeit: sechs Monate ab rechtlichem Beginn",
      text: "Die ersten sechs Monate der Beschäftigung gelten als Probezeit (§ 2 IV TVöD), gerechnet ab dem arbeitsvertraglich vereinbarten Beginn (§ 187 II BGB, Ende nach § 188 II, III BGB).\n\nWährend der Probezeit: Kündigung mit zwei Wochen zum Monatsschluss (§ 34 I 1 TVöD), kein KSchG-Schutz (Wartezeit § 1 I KSchG läuft parallel).\n\nBeispiel: Beginn 01.01. → Ende der Probezeit mit Ablauf des 30.06. Eine Kündigung, die am 15.06. zugeht, wirkt mit Frist von zwei Wochen zum Monatsschluss zum 30.06."
    },

    e_befristet_sachgrund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 30 IV 1 TVöD",
      title: "Befristet mit Sachgrund: Probezeit sechs Monate",
      text: "Bei befristeten Arbeitsverträgen MIT sachlichem Grund gelten die ersten sechs Monate als Probezeit (§ 30 IV 1 TVöD). Innerhalb der Probezeit kann mit einer Frist von zwei Wochen zum Monatsschluss gekündigt werden (§ 30 IV 2 TVöD).\n\nBeachte: § 30 II–V TVöD gilt nur für Beschäftigte im Tarifgebiet West, deren Tätigkeit vor dem 01.01.2005 der Angestellten-Rentenversicherung unterlegen hätte (§ 30 I 2 TVöD).\n\nNach Ablauf der Probezeit ist die ordentliche Kündigung des befristeten Vertrags nur zulässig, wenn die Vertragsdauer mindestens zwölf Monate beträgt (§ 30 V 1 TVöD)."
    },

    e_befristet_ohne: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 30 IV 1 TVöD",
      title: "Befristet ohne Sachgrund: Probezeit nur sechs Wochen",
      text: "Bei befristeten Arbeitsverträgen OHNE sachlichen Grund gelten nur die ersten sechs Wochen als Probezeit (§ 30 IV 1 TVöD). Auch hier: Kündigung innerhalb der Probezeit mit einer Frist von zwei Wochen zum Monatsschluss (§ 30 IV 2 TVöD).\n\nHintergrund: Die sachgrundlose Befristung ist ohnehin auf höchstens zwei Jahre begrenzt (§ 14 II TzBfG) und muss nach § 30 III TVöD mindestens sechs Monate dauern – eine sechsmonatige Probezeit wäre unverhältnismäßig lang.\n\nNach Ablauf der Probezeit: ordentliche Kündigung nur bei Vertragsdauer von mindestens zwölf Monaten (§ 30 V 1 TVöD), mit der Fristenstaffel des § 30 V 2 TVöD."
    },

    e_keine_probezeit: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 IV TVöD, TVAöD",
      title: "Keine Probezeit bei unmittelbarer Azubi-Übernahme",
      text: "Wird die/der Auszubildende im unmittelbaren Anschluss an ein erfolgreich abgeschlossenes Ausbildungsverhältnis bei derselben Dienststelle/demselben Betrieb übernommen, entfällt die Probezeit (vgl. Fußnote 7 zum VKA-Muster-Arbeitsvertrag: „Eine Probezeit ist nicht vereinbart.\").\n\nKonsequenz: Es gilt sofort die normale Kündigungsfristenstaffel des § 34 I TVöD. Die KSchG-Wartezeit (§ 1 I KSchG: sechs Monate BESTAND des Arbeitsverhältnisses) läuft allerdings unabhängig davon – Ausbildungszeiten werden darauf nicht angerechnet."
    },

    e_verlaengerung_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 3 I, 4 I TVG",
      title: "Verlängerung über sechs Monate: bei Tarifbindung unzulässig",
      text: "Bei beiderseitig tarifgebundenen Parteien wirkt § 2 IV TVöD unmittelbar und zwingend (§§ 3 I, 4 I TVG) – eine Verlängerung der Probezeit über den Sechsmonatsrahmen hinaus ist unwirksam.\n\nNur bei Tarifgeltung kraft arbeitsvertraglicher Verweisung ist eine Verlängerung ausnahmsweise und einvernehmlich möglich, wenn unvorhergesehene Arbeitsausfälle (z. B. lange Erkrankung) vorliegen und die ausgefallene Zeit im Verhältnis zur Gesamtprobezeit erheblich ist.\n\nPraxis-Alternative des Arbeitgebers bei nicht abgeschlossener Erprobung: Kündigung noch innerhalb der Probezeit (§ 34 I 1 TVöD) – ggf. verbunden mit dem Angebot eines neuen Arbeitsvertrags."
    }
  },

  routers: {}
});
