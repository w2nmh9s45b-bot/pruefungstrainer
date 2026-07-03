/*
 * Prüfungsschema: Anzeige- und Nachweispflichten bei Arbeitsunfähigkeit (§ 5 EFZG)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 3.3 (Anzeige, Nachweis, ärztl.
 *    Bescheinigung vor dem 4. Tag, Inhalt, Beweiswert, AU im Ausland, eAU)
 *  - Gesetze: EntgFG (EFZG) §§ 5, 7; BGB § 121 (unverzüglich); TVöD § 3 IV
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-nachweispflichten",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Krankheit und Entgelt im Krankheitsfall",
  title: "Anzeige- und Nachweispflichten bei AU (§ 5 EFZG)",
  description: "Pflichten der/des erkrankten Beschäftigten: unverzügliche Anzeige (§ 5 I 1 EFZG), Nachweis durch ärztliche Bescheinigung ab dem vierten Kalendertag (§ 5 I 2, früheres Verlangen § 5 I 3), elektronische AU (eAU, § 5 Ia), Beweiswert, Auslandserkrankung (§ 5 II) und Leistungsverweigerungsrecht des Arbeitgebers (§ 7 EFZG).",
  start: "start",
  stations: [
    { id: "anzeige", label: "Anzeige" },
    { id: "nachweis", label: "Nachweis" },
    { id: "besonderheiten", label: "Besonderheiten" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Pflichten erfüllt",
    neg: "Ergebnis: Pflichtverletzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "anzeige",
      kind: "frage",
      norm: "§ 5 I 1 EFZG",
      title: "Wurde die Arbeitsunfähigkeit UNVERZÜGLICH angezeigt?",
      def: "<b>Anzeigepflicht (§ 5 I 1 EFZG):</b> Die/Der Beschäftigte muss dem Arbeitgeber die <b>Arbeitsunfähigkeit und deren voraussichtliche Dauer unverzüglich</b> mitteilen.<br><br>• <b>Unverzüglich</b> = ohne schuldhaftes Zögern (§ 121 I 1 BGB) → so früh wie möglich <b>am ersten Krankheitstag</b>.<br>• <b>Formfrei:</b> auch telefonisch oder mündlich – es muss nur eine Form gewählt werden, die den Arbeitgeber tatsächlich sicher erreicht.<br>• Richtiger <b>Adressat</b>: ergibt sich aus der Dienst-/Geschäftsordnung des Arbeitgebers (z. B. Fachabteilungsleitung, Büroleitung).<br><br>Die Anzeigepflicht besteht unabhängig von der Nachweispflicht – beide sind getrennt zu prüfen.",
      options: [
        { label: "Ja, unverzüglich am ersten Tag angezeigt", next: "q_nachweis", tone: "pos" },
        { label: "Nein, verspätet oder gar nicht angezeigt", next: "e_anzeige_verletzt", tone: "neg" }
      ]
    },

    q_nachweis: {
      station: "nachweis",
      kind: "frage",
      norm: "§ 5 I 2 EFZG",
      title: "Dauert die AU länger als drei Kalendertage (Nachweispflicht)?",
      def: "<b>Nachweispflicht (§ 5 I 2 EFZG):</b> Dauert die Arbeitsunfähigkeit <b>länger als drei Kalendertage</b> (nicht Arbeitstage!), ist eine <b>ärztliche Bescheinigung</b> über AU und voraussichtliche Dauer vorzulegen – grundsätzlich am <b>vierten Tag</b>, wenn dieser ein Arbeitstag ist.<br><br><b>Fristbeispiele (Skript):</b><br>• 4. Kalendertag = Samstag → Vorlage am folgenden Montag.<br>• AU ab Montag (Fünftagewoche), noch am Donnerstag krank → spätestens Donnerstag vorlegen.<br><br><b>Früheres Verlangen (§ 5 I 3 EFZG):</b> Der Arbeitgeber kann die Vorlage <b>schon früher</b> – auch ab dem <b>ersten Tag</b> – verlangen (Ermessen, keine Begründung nötig; Grenze: nicht willkürlich/schikanös, kein Verstoß gegen Gleichbehandlung/Diskriminierungsverbot).",
      options: [
        { label: "AU ≤ 3 Tage und kein früheres Verlangen", next: "e_kein_nachweis", tone: "pos" },
        { label: "AU > 3 Tage: Bescheinigung fristgerecht vorgelegt", next: "q_eau", tone: "pos" },
        { label: "Bescheinigung nicht (rechtzeitig) vorgelegt", next: "e_nachweis_verletzt", tone: "neg" }
      ]
    },

    q_eau: {
      station: "nachweis",
      kind: "frage",
      norm: "§ 5 Ia EFZG",
      title: "Greift das elektronische AU-Verfahren (eAU)?",
      def: "<b>Elektronische Arbeitsunfähigkeitsbescheinigung (eAU, § 5 Ia EFZG, verpflichtend seit 01.01.2023):</b><br>• Für <b>gesetzlich krankenversicherte</b> Beschäftigte entfällt die Pflicht zur <b>Vorlage</b> einer Papier-AU-Bescheinigung (§ 5 I 2–4 EFZG gilt nicht).<br>• Der/die Versicherte muss sich nur zu den in § 5 I EFZG genannten Zeitpunkten einem <b>Arzt vorstellen</b> und die AU feststellen lassen.<br>• Die Arztpraxis meldet die AU taggleich an die gesetzliche Krankenkasse; der <b>Arbeitgeber ruft die eAU elektronisch ab</b> (Initiator!).<br>• Die/Der Beschäftigte trägt jetzt das <b>Bereitstellungsrisiko</b> (statt früher des Übermittlungsrisikos).<br><br><b>Ausnahme (Papierbescheinigung bleibt):</b> privat Versicherte, Minijobber in Privathaushalten, AU im Ausland, Kind-krank-Fälle.",
      options: [
        { label: "Gesetzlich versichert: eAU festgestellt/abrufbar", next: "q_beweiswert", tone: "pos" },
        { label: "Privat versichert / Auslandsfall: Papierbescheinigung", next: "q_ausland", tone: "neutral" }
      ]
    },

    q_beweiswert: {
      station: "besonderheiten",
      kind: "frage",
      norm: "§ 5 I EFZG (Beweiswert)",
      title: "Ist der Beweiswert der Bescheinigung erschüttert?",
      def: "Der <b>Beweiswert</b> einer ordnungsgemäßen ärztlichen AU-Bescheinigung ist <b>hoch</b>. Der Arbeitgeber kann ihn nicht generell bestreiten, sondern muss durch <b>konkrete Umstände</b> die Beweiskraft <b>erschüttern</b>.<br><br><b>Erschütterungs-Indizien:</b><br>• Erkrankung wurde vorher angekündigt („wenn ich frei bekomme, werde ich krank“),<br>• Verhalten im auffälligen Widerspruch zur AU (Reise, Sportwettkampf),<br>• AU-Bescheinigung passgenau zur Kündigungsfrist.<br><br>Gelingt die Erschütterung, muss die/der Beschäftigte die AU anderweitig <b>beweisen</b> (z. B. Zusatzgutachten, Zeugnis des behandelnden Arztes). Bei Zweifeln kann der Arbeitgeber eine gutachtliche Stellungnahme des <b>Medizinischen Dienstes</b> einholen (vgl. § 275 SGB V); nach § 3 IV TVöD kann er zudem – bei begründeter Veranlassung, auf seine Kosten – einen Nachweis der Arbeitsfähigkeit verlangen.",
      options: [
        { label: "Beweiswert nicht erschüttert", next: "e_erfuellt", tone: "pos" },
        { label: "Beweiswert erschüttert (konkrete Zweifel)", next: "e_beweiswert", tone: "warn" }
      ]
    },

    q_ausland: {
      station: "besonderheiten",
      kind: "frage",
      norm: "§ 5 II EFZG",
      title: "Auslandserkrankung: Wurden die Zusatzpflichten erfüllt?",
      def: "<b>AU im Ausland (§ 5 II EFZG):</b> Zusätzliche Pflichten, wenn sich die/der Beschäftigte bei Beginn der AU im Ausland aufhält:<br>• Mitteilung von <b>AU, voraussichtlicher Dauer UND der Adresse am Aufenthaltsort</b> in der <b>schnellstmöglichen Art</b> der Übermittlung (Telefon, Fax, E-Mail, SMS),<br>• die <b>Übermittlungskosten trägt der Arbeitgeber</b> (Erstattung gegen Nachweis),<br>• bei AU über drei Kalendertage: ärztliche Bescheinigung (§ 5 I 2–4 EFZG gilt entsprechend),<br>• gesetzlich Versicherte müssen zusätzlich die <b>Krankenkasse</b> unverzüglich unterrichten (§ 5 II 3 EFZG),<br>• nach Rückkehr ins Inland: Mitteilung an Arbeitgeber und Krankenkasse.",
      options: [
        { label: "Zusatzpflichten erfüllt", next: "e_erfuellt", tone: "pos" },
        { label: "Pflichten verletzt", next: "e_nachweis_verletzt", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_erfuellt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 5 EFZG",
      title: "Anzeige- und Nachweispflichten erfüllt",
      text: "Die/Der Beschäftigte hat die AU unverzüglich angezeigt (§ 5 I 1 EFZG) und – soweit erforderlich – ordnungsgemäß nachgewiesen (ärztliche Feststellung bzw. eAU, § 5 I 2, Ia EFZG). Der Beweiswert der Bescheinigung ist nicht erschüttert.\n\nDer Entgeltfortzahlungsanspruch (§ 22 TVöD, § 3 EFZG) kann geltend gemacht werden; ein Leistungsverweigerungsrecht des Arbeitgebers nach § 7 EFZG besteht nicht.\n\nMerke: Es besteht grundsätzlich KEINE Pflicht, die Art der Erkrankung (Diagnose) anzugeben – ausnahmsweise aus Treuepflicht, wenn der Arbeitgeber ein berechtigtes Interesse hat (z. B. Ansteckungsgefahr, Publikumsverkehr, Heim)."
    },

    e_kein_nachweis: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 5 I 2, 3 EFZG",
      title: "Kurzerkrankung: keine Bescheinigung erforderlich",
      text: "Bei einer Arbeitsunfähigkeit bis zu drei Kalendertagen muss grundsätzlich keine ärztliche Bescheinigung vorgelegt werden (§ 5 I 2 EFZG im Umkehrschluss) – die Anzeigepflicht (§ 5 I 1) bleibt aber bestehen.\n\nAber: Der Arbeitgeber kann die Vorlage der Bescheinigung nach § 5 I 3 EFZG auch früher – sogar ab dem ersten Tag – verlangen. Das Verlangen steht in seinem Ermessen, bedarf keiner Begründung und unterliegt keiner Billigkeitskontrolle; Grenze ist nur das Willkür-/Schikaneverbot und das Diskriminierungsverbot."
    },

    e_anzeige_verletzt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 5 I 1 EFZG",
      title: "Anzeigepflicht verletzt",
      text: "Die/Der Beschäftigte hat die AU nicht unverzüglich (§ 121 BGB) angezeigt. Der Entgeltfortzahlungsanspruch entfällt dadurch zwar nicht automatisch, die Pflichtverletzung kann aber arbeitsrechtliche Folgen haben:\n\n• Abmahnung, bei beharrlicher Verletzung ggf. verhaltensbedingte Kündigung,\n• Schadensersatz, wenn dem Arbeitgeber durch die verspätete Anzeige ein Schaden entsteht.\n\nDie ANZEIGE (§ 5 I 1) ist von der NACHWEIS-Pflicht (§ 5 I 2) zu trennen: Das Leistungsverweigerungsrecht des § 7 EFZG knüpft an den fehlenden Nachweis an, nicht an die verspätete Anzeige."
    },

    e_nachweis_verletzt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 7 I Nr. 1 EFZG",
      title: "Nachweispflicht verletzt – Leistungsverweigerungsrecht",
      text: "Legt die/der Beschäftigte die erforderliche ärztliche Bescheinigung nicht (rechtzeitig) vor bzw. lässt die eAU nicht feststellen, ist der Arbeitgeber berechtigt, die Fortzahlung des Entgelts zu VERWEIGERN, solange die Pflicht nicht erfüllt wird (§ 7 I Nr. 1 EFZG).\n\nEs handelt sich um ein Leistungsverweigerungsrecht (Zurückbehaltung), nicht um einen endgültigen Wegfall: Wird die Bescheinigung nachgereicht und die AU nachgewiesen, lebt der Anspruch wieder auf.\n\nBei Auslandserkrankung gelten die zusätzlichen Pflichten des § 5 II EFZG entsprechend."
    },

    e_beweiswert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 5 I EFZG (Beweiswert)",
      title: "Beweiswert erschüttert – Beweislast beim Beschäftigten",
      text: "Der Arbeitgeber hat durch konkrete Umstände (z. B. Ankündigung der Erkrankung, Aktivitäten im Widerspruch zur AU, passgenaue Krankschreibung zur Kündigungsfrist) den hohen Beweiswert der ärztlichen Bescheinigung erschüttert.\n\nFolge: Die/Der Beschäftigte muss die Arbeitsunfähigkeit nun anderweitig beweisen – etwa durch ein zusätzliches ärztliches Gutachten oder die Aussage des behandelnden Arztes (Entbindung von der Schweigepflicht).\n\nGelingt der Beweis nicht, entfällt der Entgeltfortzahlungsanspruch. Bei vorgetäuschter AU kommt zudem eine (fristlose) Kündigung in Betracht."
    }
  },

  routers: {}
});
