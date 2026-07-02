/*
 * Prüfungsschema: Wahl und Ernennung des Bürgermeisters (§§ 53, 54 GemO, KWG)
 * Fach: Kommunalrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 5 Kommunalrecht, FS III):
 *  - "KomR - FS_III - LV 05 - PLE_05 - Organ Buergermeister, Allgemeines zur Bestellung"
 *  - "KomR - FS_III - LEV06 - PLE_06 - persoenliche Waehlbarkeitsvoraussetzungen;
 *    Wahlverfahren bei Urwahl" (Böhle)
 *  - "KomR - FS_III - LV 07 - PLE_07 - Wahl des Buergermeisters durch den Rat;
 *    Ernennung des Buergermeisters" (Böhle)
 *  - Gesetze: GemO RLP §§ 53, 54 (Volltext geprüft); KWG §§ 4, 60, 62-65
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "komr-bmwahl",
  subject: "Kommunalrecht",
  fs: ["FS3"],
  area: "Organ Bürgermeister · Wahlen",
  title: "Wahl des Bürgermeisters (§ 53 GemO)",
  description: "Bestellung des Bürgermeisters: Urwahl durch die Bürger (Mehrheitswahl, Stichwahl, Wiederholungswahl), ausnahmsweise Wahl durch den Gemeinderat (§ 53 II i. V. m. § 40 GemO), Wählbarkeitsvoraussetzungen, Ernennungshindernisse und Amtsübergabe (§ 54 GemO).",
  start: "start",
  stations: [
    { id: "modus", label: "Wahlmodus" },
    { id: "voraus", label: "Wählbarkeit" },
    { id: "verfahren", label: "Wahlverfahren" },
    { id: "ernennung", label: "Ernennung" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Wahl/Bestellung wirksam",
    neg: "Ergebnis: Wahl/Bestellung fehlerhaft",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "modus",
      kind: "frage",
      norm: "§ 53 I, II GemO, Art. 50 LV",
      title: "Wie wird der Bürgermeister bestellt?",
      text: "Die Bestellung erfolgt zweistufig: WAHL und anschließende ERNENNUNG zum Beamten (§ 54 GemO). Grundsatz ist die Urwahl durch die Bürger in allgemeiner, gleicher, geheimer, unmittelbarer und freier Wahl (§ 53 I 1 GemO).",
      def: "<b>Wahl durch den Gemeinderat nur ausnahmsweise (§ 53 II GemO):</b><br>• Zur Urwahl ist KEINE gültige Bewerbung eingereicht worden – die Wahl fällt aus (§ 53 II 1), oder<br>• der einzige Bewerber wird weder bei der ersten Wahl noch bei der Wiederholungswahl gewählt (§ 53 II 3).<br>Dann wählt der Rat nach den Bestimmungen des § 40 GemO (§ 53 II 2); die Wahl eines ehrenamtlichen BM soll spätestens acht Wochen nach der ausgefallenen Wahl erfolgen (Ordnungsfrist).",
      options: [
        { label: "Urwahl durch die Bürger", next: "q_zeitpunkt", set: { modus: "urwahl" }, tone: "neutral" },
        { label: "Wahl durch den Gemeinderat (§ 53 II GemO)", next: "q_ratswahl", set: { modus: "rat" }, tone: "neutral" }
      ]
    },

    q_zeitpunkt: {
      station: "modus",
      kind: "frage",
      norm: "§ 53 V, VI GemO",
      title: "Zeitpunkt der Wahl und Ausschreibung eingehalten?",
      def: "<b>Hauptamtlicher BM</b> (Ablauf Amtszeit / Ruhestand): Nachfolger frühestens 9, spätestens 3 Monate VOR Freiwerden der Stelle wählen (§ 53 V 1).<br><b>Andere Fälle:</b> spätestens 3 Monate NACH Freiwerden (§ 53 V 2).<br><b>Ausschreibung:</b> Stelle des hauptamtlichen BM spätestens am 69. Tag vor der Wahl öffentlich ausschreiben (§ 53 VI).<br>Die Fristen des § 53 V sind Ordnungsfristen – ein Verstoß macht die Wahl nicht ungültig.",
      options: [
        { label: "Ja, eingehalten", next: "q_waehlbar", tone: "pos" },
        { label: "Ordnungsfrist überschritten", detail: "unschädlich für die Gültigkeit der Wahl", next: "q_waehlbar", tone: "warn" }
      ]
    },

    q_waehlbar: {
      station: "voraus",
      kind: "frage",
      norm: "§ 53 III, IV GemO, § 4 II KWG",
      title: "Erfüllt der Bewerber die persönlichen Wählbarkeitsvoraussetzungen?",
      text: "Persönliche (bewerberabhängige) Wählbarkeitsvoraussetzungen muss der Bewerber ZUM ZEITPUNKT DER WAHL erfüllen.",
      def: "<b>§ 53 III GemO (kumulativ):</b><br>• Deutscher i. S. d. Art. 116 I GG oder Unionsbürger mit Wohnsitz in Deutschland,<br>• Vollendung des 18. Lebensjahres am Wahltag,<br>• kein Ausschluss der Wählbarkeit nach § 4 II KWG,<br>• Gewähr des jederzeitigen Eintretens für die freiheitliche demokratische Grundordnung,<br>• beim HAUPTAMTLICHEN BM: am Wahltag noch nicht 65 Jahre alt (§ 53 III 2).<br><b>Beim EHRENAMTLICHEN BM zusätzlich:</b> Bürgerstatus der Gemeinde (§ 53 IV Nr. 1, § 18 GemO) – Dauervoraussetzung bis zum Amtsende (sonst Entlassung kraft Gesetzes, § 7 III 2 LBG).",
      options: [
        { label: "Ja, wählbar", next: "@verfahren", tone: "pos" },
        { label: "Nein", next: "e_nicht_waehlbar", tone: "neg" }
      ]
    },

    q_urwahl_verfahren: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 53 I GemO, §§ 60, 63 KWG",
      title: "Urwahl: Ist das Wahlverfahren ordnungsgemäß abgelaufen?",
      def: "<b>Mehrheitswahl (§ 53 I 2, 3):</b> Gewählt ist, wer MEHR ALS DIE HÄLFTE der gültigen Stimmen erhält. Jeder Wähler hat eine Stimme (§ 63 II 1 KWG); bei nur einem Bewerber Ja-/Nein-Stimme (§ 63 II 2, 3 KWG); leerer Stimmzettel, unklare Kennzeichnung, Vorbehalt/Zusatz = ungültig (§§ 58, 38 KWG).<br><b>Stichwahl (§ 53 I 4):</b> Erreicht keiner die Mehrheit → Stichwahl der beiden Stimmhöchsten binnen 21 Tagen (§ 60 III KWG); bei Gleichstand um den Einzug entscheidet das Los (§ 53 I 5); gewählt ist, wer die höchste Stimmenzahl erhält (§ 53 I 7), bei Gleichstand Los (§ 53 I 8).<br><b>Wiederholungswahl (§ 53 I 6, 9):</b> wenn ein Stichwahl-Bewerber vor der Stichwahl stirbt oder die Wählbarkeit verliert – oder wenn der EINZIGE Bewerber nicht gewählt wird; binnen 3 Monaten als Neuwahl (§ 60 IV KWG, § 82 II KWO).<br><b>Abgrenzung Nachholungswahl (§ 62 VII KWG):</b> Bewerber stirbt/verliert Wählbarkeit nach Zulassung, aber VOR der ersten Wahl – Wahl findet nicht statt, Nachholung binnen 3 Monaten.",
      hint: "Das Wahlergebnis stellt der Wahlausschuss fest (§ 64 KWG); der Gewählte wird benachrichtigt und zur Annahme aufgefordert (§§ 58, 44 KWG). Der Bürgermeister ist Wahlleiter (§ 7 KWG) – bei eigener Kandidatur Vertretungsregelung beachten.",
      options: [
        { label: "Ja, Verfahren ordnungsgemäß, Mehrheit erreicht", next: "q_ernennung", tone: "pos" },
        { label: "Nein, Wahlfehler", detail: "Wahlprüfung nach dem KWG (Einspruch, §§ 48 ff. KWG) – nicht § 43 GemO!", next: "e_wahlfehler_urwahl", tone: "neg" }
      ]
    },

    q_ratswahl: {
      station: "verfahren",
      kind: "frage",
      norm: "§ 53 II 2 i. V. m. § 40 GemO",
      title: "Ratswahl: Voraussetzungen und Verfahren nach § 40 GemO eingehalten?",
      def: "<b>Voraussetzungen der Ratswahl:</b> ausgefallene Urwahl mangels gültiger Bewerbung (§ 53 II 1) oder erfolglose Wahl + Wiederholungswahl des einzigen Bewerbers (§ 53 II 3). Beim hauptamtlichen BM ist vor der Ratswahl eine NEUE Stellenausschreibung erforderlich (wesentliche Änderung des Besetzungsverfahrens).<br><b>Verfahren (§ 40 GemO):</b> Wahlvorschlag (II), dreistufiges Verfahren – mehr als die Hälfte → Wiederholungswahl (alle Vorgeschlagenen) → Stichwahl → Los (III), Auszählungsregeln (IV), Wahl in öffentlicher Sitzung durch Stimmzettel in GEHEIMER Abstimmung – beim BM nach § 53 II zwingend (§ 40 V).",
      hint: "Für die Sitzung gelten alle Verfahrensvorschriften des Sachbeschlusses (§§ 34, 35, 39 GemO) – prüfe sie im Schema „Rechtmäßigkeit eines Ratsbeschlusses (Vollprüfung)“. § 22 GemO gilt bei Wahlen nicht (§ 22 III).",
      options: [
        { label: "Ja, ordnungsgemäß gewählt", next: "q_waehlbar_rat", tone: "pos" },
        { label: "Nein, Verfahrensfehler", detail: "Rechtsschutz: Wahlbeschwerde jedes Ratsmitglieds, § 43 GemO", next: "e_wahlfehler_rat", tone: "neg" }
      ]
    },

    q_waehlbar_rat: {
      station: "voraus",
      kind: "frage",
      norm: "§ 53 III, IV GemO",
      title: "Erfüllt der vom Rat Gewählte die Wählbarkeitsvoraussetzungen?",
      text: "Die allgemeinen Wahl- und persönlichen Wählbarkeitsvoraussetzungen sind mit denen der Urwahl identisch (§ 53 III, IV GemO) – nur der Wahlmodus hat sich geändert.",
      options: [
        { label: "Ja", next: "q_ernennung", tone: "pos" },
        { label: "Nein", next: "e_nicht_waehlbar", tone: "neg" }
      ]
    },

    q_ernennung: {
      station: "ernennung",
      kind: "frage",
      norm: "§ 54 GemO, § 7 BeamtStG",
      title: "Liegen die Ernennungsvoraussetzungen vor – bestehen Ernennungshindernisse?",
      def: "<b>Ernennung (§ 54 I GemO):</b> ehrenamtlicher BM → Ehrenbeamter (§ 5 BeamtStG, § 7 LBG); hauptamtlicher BM → Beamter auf Zeit (§ 4 II lit. a BeamtStG, § 8 LBG).<br><b>Persönliche Voraussetzungen:</b> § 7 BeamtStG (Deutscher/EU, fdGO), 18. Lebensjahr (§ 119 I LBG).<br><b>Ernennungshindernisse nur beim EHRENAMTLICHEN BM (§ 53 IV Nr. 1–4):</b> fehlender Bürgerstatus, entgeltlicher Dienst bei Gemeinde/VG/Verband/gemeindebeherrschtem Unternehmen, Sparkassenvorstand, Beauftragung mit Staatsaufsicht/überörtlicher Prüfung. Eine dennoch vorgenommene Ernennung ist NICHTIG (§ 7 II LBG); späterer Eintritt = Entlassungsgrund (§ 7 III LBG).<br><b>Merke:</b> Die Inkompatibilitäten sind KEINE Wählbarkeitshindernisse, da sie nach der Wahl beseitigt werden können.",
      options: [
        { label: "Ja, keine Hindernisse", next: "e_bestellt", tone: "pos" },
        { label: "Nein, Ernennungshindernis", next: "e_hindernis", tone: "neg" },
        { label: "Die zugrunde liegende Wahl war unwirksam", next: "e_nichtige_ernennung", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_bestellt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 53, 54 GemO",
      title: "Bürgermeister wirksam bestellt",
      text: "Wahl und Ernennung sind ordnungsgemäß erfolgt. Zur Amtsübergabe gehören (§ 54 I GemO):\n• Aushändigung der Ernennungsurkunde in öffentlicher Sitzung,\n• VEREIDIGUNG (rechtsbegründender Akt – Eidverweigerung führt zur Entlassung, § 23 I Nr. 1 BeamtStG),\n• EINFÜHRUNG in das Amt (symbolischer Akt).\nVereidigung und Einführung entfallen bei der Wiederwahl.\n\nZuständig für Ernennung, Vereidigung und Einführung: der Amtsvorgänger oder dessen allgemeiner Vertreter, ausnahmsweise ein vom Gemeinderat beauftragtes Ratsmitglied (§ 54 II GemO)."
    },

    e_nicht_waehlbar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 53 III GemO",
      title: "Bewerber nicht wählbar",
      text: "Die persönlichen Wählbarkeitsvoraussetzungen (§ 53 III GemO, § 4 II KWG; beim ehrenamtlichen BM auch der Bürgerstatus) liegen zum Wahlzeitpunkt nicht vor. Die Wahl eines nicht wählbaren Bewerbers ist materiell rechtswidrig.\n\nBei der Ratswahl beachte: Die persönlichen Wählbarkeitsvoraussetzungen sind mit der Wahlbeschwerde (§ 43 GemO) NICHT rügefähig – sie sind keine verfahrensrechtlichen Gründe. Ihre Verletzung schlägt aber auf die Ernennung durch (Nichtigkeit, § 7 II LBG bzw. § 11 BeamtStG)."
    },

    e_wahlfehler_urwahl: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 48 ff. KWG",
      title: "Urwahl fehlerhaft – Wahlprüfung nach dem KWG",
      text: "Fehler bei der Urwahl (Direktwahl durch die Bürger) werden NICHT über § 43 GemO angegriffen, sondern im Wahlprüfungsverfahren nach dem Kommunalwahlgesetz (Einspruch gegen die Wahl, §§ 48 ff. KWG; ggf. Wiederholungswahl nach §§ 52, 58 KWG).\n\nAuch der Kommunalverfassungsstreit scheidet aus – Streitigkeiten im Rahmen der Kommunalwahl sind dem Rechtsschutzsystem des KWG zugewiesen."
    },

    e_wahlfehler_rat: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 43 GemO",
      title: "Ratswahl fehlerhaft – Wahlbeschwerde möglich",
      text: "Bei der Wahl durch den Gemeinderat führt ein Verfahrensfehler zur Ungültigkeit, wenn er sich TATSÄCHLICH auf das Wahlergebnis ausgewirkt hat (Besonderheit der Fehlerfolgen bei Wahlen).\n\nRechtsschutz: Jedes Ratsmitglied (auch der Vorsitzende) kann binnen zwei Wochen Wahlbeschwerde bei der Aufsichtsbehörde erheben (§ 43 I GemO) – gestützt nur auf verfahrensrechtliche Gründe. Details im Schema „Wahlbeschwerde, § 43 GemO“."
    },

    e_hindernis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 53 IV GemO, § 7 II, III LBG",
      title: "Ernennungshindernis",
      text: "Beim ehrenamtlichen Bürgermeister steht ein Hindernis des § 53 IV GemO (fehlender Bürgerstatus oder Inkompatibilität) der Ernennung entgegen. Eine dennoch vorgenommene Ernennung ist NICHTIG (§ 7 II LBG).\n\nTritt der Umstand erst nach der Ernennung ein, ist er Entlassungsgrund (§ 7 III LBG). Der Gewählte kann das Hindernis (außer dem Bürgerstatus als Dauervoraussetzung) vor der Ernennung beseitigen – z. B. das Beschäftigungsverhältnis bei der Gemeinde beenden."
    },

    e_nichtige_ernennung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 11 I Nr. 3c BeamtStG",
      title: "Nichtige Ernennung wegen unwirksamer Wahl",
      text: "Die Ernennung setzt eine wirksame Wahl voraus: Eine unwirksame Wahl zieht die NICHTIGKEIT der Ernennung nach sich (§ 11 I Nr. 3c BeamtStG).\n\nDie Wahl ist daher unverzüglich fehlerfrei zu wiederholen; bis dahin führt der bisherige Amtsinhaber bzw. der allgemeine Vertreter die Geschäfte."
    }
  },

  routers: {
    "@verfahren": function (flags) {
      return flags.modus === "rat" ? "q_ratswahl" : "q_urwahl_verfahren";
    }
  }
});
