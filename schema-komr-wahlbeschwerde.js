/*
 * Prüfungsschema: Wahlbeschwerde – Anfechtung von Wahlen (§ 43 GemO)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR-FS III-LV_21 - PLE 15 Anfechtung von Wahlen - Wesen des besonderen
 *    Rechtsbehelfs - Zulaessigkeit" (Böhle)
 *  - "KomR-FS III-LV_22 - PLE 16 - Begruendetheit, Entscheidung der Aufsichtsbehoerde
 *    und Rechtsschutz" (Böhle)
 *  - "FS III - KomR - 06. Wahlbeschwerde - Skript"
 *  - Gesetze: GemO RLP §§ 43, 118 (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-wahlbeschwerde",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Rechtsschutz · Wahlen",
  title: "Wahlbeschwerde, § 43 GemO",
  description: "Der förmliche Rechtsbehelf außerhalb der VwGO gegen Wahlen des Gemeinderats: Statthaftigkeit, Beschwerdebefugnis, Zwei-Wochen-Frist, Begründetheit (nur verfahrensrechtliche Gründe!), Entscheidung der Aufsichtsbehörde und Klage zum Verwaltungsgericht.",
  start: "start",
  stations: [
    { id: "statthaft", label: "Statthaftigkeit" },
    { id: "zul", label: "Zulässigkeit" },
    { id: "begr", label: "Begründetheit" },
    { id: "entsch", label: "Entscheidung & Klage" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Wahlbeschwerde erfolgreich",
    neg: "Ergebnis: Wahlbeschwerde ohne Erfolg",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "statthaft",
      kind: "frage",
      norm: "§ 43 I GemO",
      title: "Ist die Wahlbeschwerde statthaft?",
      text: "Ratsmitglieder haben grundsätzlich KEIN subjektives Recht auf rechtmäßige Beschlüsse – gegen (vermeintlich) rechtswidrige Sachbeschlüsse können sie nicht förmlich vorgehen. ANDERS bei Wahlen: § 43 GemO gibt jedem Ratsmitglied ein subjektiv-öffentliches Recht auf ein ordnungsgemäßes Wahlverfahren und dazu den förmlichen Rechtsbehelf der Wahlbeschwerde (außerhalb der VwGO).",
      def: "<b>Statthaft gegen:</b> eine vom GEMEINDERAT vorgenommene Wahl (Beigeordnete, BM nach § 53 II, Ausschussmitglieder …) mit dem Ziel der Ungültigerklärung. Wahl = Beschluss, der die Auswahl oder Bestimmung einer oder mehrerer Personen zum Gegenstand hat (VV Nr. 2 zu § 40). Grundsätzlich ist eine „positive“ Wahlentscheidung nötig; ein negativer Ausgang genügt, wenn Fehler bei der Mehrheitsermittlung gerügt werden.",
      options: [
        { label: "Ja, Wahl durch den Gemeinderat", next: "q_befugnis", tone: "pos" },
        { label: "Nein – Urwahl durch die Bürger (GR-/BM-Direktwahl)", detail: "Wahlprüfung nach dem KWG, nicht § 43 GemO", next: "e_kwg", tone: "neg" },
        { label: "Nein – Sachbeschluss des Rates", next: "e_sachbeschluss", tone: "neg" }
      ]
    },

    q_befugnis: {
      station: "zul",
      kind: "frage",
      norm: "§ 43 I 1 GemO",
      title: "Ist der Beschwerdeführer beschwerdebefugt?",
      def: "<b>Beschwerdebefugt:</b><br>• ALLE gewählten Ratsmitglieder – unabhängig davon, ob sie an der Sitzung teilgenommen haben,<br>• der VORSITZENDE (Bürgermeister) als „gesetzliches Ratsmitglied“ – auch ein etwa ruhendes Stimmrecht (§ 36 III 2 Nr. 1) und sein Aussetzungsrecht stehen dem nicht entgegen (Wahlbeschwerde sichert Individualinteressen, Aussetzung nur öffentliche Interessen).<br><b>NICHT befugt:</b> unterlegene Bewerber ohne Ratsmandat, Beigeordnete ohne Stimmrecht, ausgeschiedene Ratsmitglieder.",
      options: [
        { label: "Ja, (gewähltes oder gesetzliches) Ratsmitglied", next: "q_frist", tone: "pos" },
        { label: "Nein", detail: "z. B. unterlegener Bewerber ohne Mandat", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_frist: {
      station: "zul",
      kind: "frage",
      norm: "§ 43 I 1 GemO",
      title: "Frist, Form und Adressat gewahrt?",
      def: "<b>Frist:</b> ZWEI WOCHEN ab dem Zeitpunkt der Wahl (Tag der Wahl = Ereignistag, § 187 I BGB). Ausschlussfrist – die Beschwerde muss innerhalb der Frist EINGEGANGEN sein (Absendung genügt nicht).<br><b>Form:</b> formfrei (aus Beweisgründen üblicherweise schriftlich oder zur Niederschrift).<br><b>Adressat:</b> die nach § 118 GemO zuständige Aufsichtsbehörde (Kreisverwaltung bzw. ADD).",
      options: [
        { label: "Ja, fristgerecht bei der Aufsichtsbehörde eingegangen", next: "q_begruendet", tone: "pos" },
        { label: "Nein, Frist versäumt oder falscher Adressat", next: "e_unzulaessig", tone: "neg" }
      ]
    },

    q_begruendet: {
      station: "begr",
      kind: "frage",
      norm: "§ 43 I 2 GemO",
      title: "Begründetheit: Ist die Wahl aus VERFAHRENSRECHTLICHEN Gründen rechtswidrig?",
      text: "Die Beschwerde kann nur auf verfahrensrechtliche Gründe gestützt werden (§ 43 I 2 GemO). Historischer Zweck: Es sollte verhindert werden, dass eine Wahl wegen angeblich mangelnder „Eignung des Bewerbers“ gekippt wird.",
      def: "<b>Verfahrensrechtliche Gründe (rügefähig):</b><br>• die gesamte FORMELLE Rechtmäßigkeit: Zuständigkeit (Verbands-/Organkompetenz), Einberufung, TO-Änderung, Sitzungsform, Beschlussfähigkeit, Beschlussfassung, Wahlverfahren § 40 II–V,<br>• aus der materiellen Prüfung NUR die ALLGEMEINEN (bewerberunabhängigen) Wahlvoraussetzungen (Hauptsatzungsregelung, Ausschreibung …).<br><b>NICHT rügefähig:</b> die PERSÖNLICHEN Wählbarkeitsvoraussetzungen (§ 53 III) – sie sind keine verfahrensrechtlichen Gründe!<br><b>Und:</b> Der Verfahrensfehler muss sich TATSÄCHLICH auf das Wahlergebnis ausgewirkt haben (Fehlerfolgen bei Wahlen).",
      hint: "Die Prüfung der Wahl selbst führst du mit den Schemata „Vollprüfung Ratsbeschluss“ (Verfahren) bzw. „Wahl eines Beigeordneten“.",
      options: [
        { label: "Ja – Verfahrensfehler mit tatsächlicher Ergebnisauswirkung", next: "q_entscheidung", set: { begruendet: true }, tone: "pos" },
        { label: "Nein – Wahl verfahrensfehlerfrei / Fehler ohne Auswirkung", next: "q_entscheidung", set: { begruendet: false }, tone: "neg" },
        { label: "Gerügt sind nur persönliche Wählbarkeitsmängel", next: "e_unbegruendet_person", tone: "neg" }
      ]
    },

    q_entscheidung: {
      station: "entsch",
      kind: "frage",
      norm: "§ 43 GemO",
      title: "Wie entscheidet die Aufsichtsbehörde?",
      text: "Die Aufsichtsbehörde entscheidet durch VERWALTUNGSAKT: Sie erklärt die Wahl für ungültig oder weist die Beschwerde zurück.",
      options: [
        { label: "Sie gibt der Beschwerde statt (Wahl ungültig)", next: "@stattgabe", tone: "neutral" },
        { label: "Sie weist die Beschwerde zurück", next: "@zurueckweisung", tone: "neutral" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_stattgabe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 43 GemO",
      title: "Wahl für ungültig erklärt",
      text: "Die zulässige und begründete Wahlbeschwerde hat Erfolg: Die Aufsichtsbehörde erklärt die Wahl für ungültig (VA).\n\nAdressaten: der begünstigte Beschwerdeführer, die GEMEINDE (belastend – nicht der Rat) und die zunächst gewählte Person (sie verliert die Rechtsposition des „Gewähltseins“; eine bereits erfolgte Ernennung ist nichtig, § 11 I Nr. 3c BeamtStG).\n\nKlage gegen die Stattgabe: ANFECHTUNGSKLAGE ohne Vorverfahren (§ 43 II GemO) – klagebefugt sind die Gemeinde, die übrigen Ratsmitglieder und die zunächst gewählte Person. Beklagter: das Land RLP als Rechtsträger der Aufsichtsbehörde (§ 78 I Nr. 1 VwGO).\n\nDie Wahl ist sodann fehlerfrei zu wiederholen."
    },

    e_stattgabe_falsch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 43 II GemO",
      title: "Stattgabe trotz unbegründeter Beschwerde – Anfechtung",
      text: "Die Aufsichtsbehörde hat der Beschwerde stattgegeben, obwohl die Wahl verfahrensfehlerfrei war (oder der Fehler sich nicht auswirkte). Die Ungültigerklärung ist rechtswidrig.\n\nGegen sie können die Gemeinde, die übrigen Ratsmitglieder und die zunächst gewählte Person ANFECHTUNGSKLAGE ohne Vorverfahren erheben (§ 43 II GemO). Beklagter ist das Land RLP (§ 78 I Nr. 1 VwGO). Das VG hebt die Entscheidung auf – die Wahl bleibt gültig."
    },

    e_zurueckweisung_falsch: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 43 II GemO",
      title: "Zurückweisung trotz begründeter Beschwerde – Verpflichtungsklage",
      text: "Die Aufsichtsbehörde hat die begründete Beschwerde zu Unrecht zurückgewiesen. Das beschwerdeführende Ratsmitglied kann ohne Vorverfahren VERPFLICHTUNGSKLAGE auf Erlass der Ungültigerklärung erheben (§ 43 II GemO; § 42 I Alt. 2 VwGO).\n\nBeklagter: das Land RLP als Rechtsträger der Aufsichtsbehörde.\n\nKosten: trägt im Ergebnis regelmäßig die GEMEINDE (§ 18 IV GemO) – das Ratsmitglied verteidigt als „Amtswalter“ seine Mitgliedschaftsrechte, nicht Privatinteressen."
    },

    e_zurueckweisung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 GemO",
      title: "Wahlbeschwerde zurückgewiesen – Wahl bleibt gültig",
      text: "Die Beschwerde ist unbegründet: Die Wahl ist verfahrensrechtlich nicht zu beanstanden (bzw. der Fehler blieb ohne tatsächliche Auswirkung auf das Ergebnis). Die Aufsichtsbehörde weist die Beschwerde durch VA zurück; Adressat ist der Beschwerdeführer, die Gemeinde erhält die Entscheidung zur Kenntnis.\n\nDem Beschwerdeführer bliebe die (aussichtslose) Verpflichtungsklage ohne Vorverfahren (§ 43 II GemO)."
    },

    e_unzulaessig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I GemO",
      title: "Wahlbeschwerde unzulässig",
      text: "Die Beschwerde scheitert bereits an der Zulässigkeit – fehlende Beschwerdebefugnis (kein Ratsmitglied) oder Versäumung der zweiwöchigen Ausschlussfrist.\n\nMerke: Auch der unterlegene BEWERBER ohne Ratsmandat ist nicht beschwerdebefugt; ausgeschiedene Ratsmitglieder ebenfalls nicht (gefestigte Rechtsprechung)."
    },

    e_unbegruendet_person: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I 2 GemO",
      title: "Unbegründet: persönliche Wählbarkeit nicht rügefähig",
      text: "Die persönlichen (bewerberabhängigen) Wählbarkeitsvoraussetzungen sind KEINE verfahrensrechtlichen Gründe i. S. d. § 43 I 2 GemO – die Wahlbeschwerde kann darauf nicht gestützt werden.\n\nFehlende Wählbarkeit wird stattdessen über die Kommunalaufsicht (§ 121 GemO), die Aussetzung (§ 42 GemO) oder im Ernennungsverfahren korrigiert (nichtige Ernennung, § 7 II LBG / § 11 BeamtStG)."
    },

    e_kwg: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 48 ff. KWG",
      title: "Falscher Rechtsbehelf: Wahlprüfung nach dem KWG",
      text: "Gegen die URWAHL des Gemeinderats oder des Bürgermeisters durch die Bürger richtet sich der Rechtsschutz nach dem Kommunalwahlgesetz (Einspruch/Wahlprüfungsverfahren, §§ 48 ff. KWG), nicht nach § 43 GemO.\n\n§ 43 GemO erfasst nur Wahlen, die DER GEMEINDERAT vorgenommen hat."
    },

    e_sachbeschluss: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 I GemO",
      title: "Kein Rechtsbehelf gegen Sachbeschlüsse",
      text: "Gegen (vermeintlich) rechtswidrige SACHbeschlüsse haben Ratsmitglieder keinen förmlichen Rechtsbehelf – es gibt kein subjektives Recht auf rechtmäßige Beschlüsse, und ein Anspruch auf Einschreiten der Kommunalaufsicht oder auf Aussetzung durch den BM besteht nicht.\n\nNur wenn der Beschluss in eigene MITGLIEDSCHAFTSRECHTE eingreift (z. B. rechtswidriger Ausschluss nach § 22 V), kommt der Kommunalverfassungsstreit in Betracht."
    }
  },

  routers: {
    "@stattgabe": function (flags) {
      return flags.begruendet ? "e_stattgabe" : "e_stattgabe_falsch";
    },
    "@zurueckweisung": function (flags) {
      return flags.begruendet ? "e_zurueckweisung_falsch" : "e_zurueckweisung";
    }
  }
});
