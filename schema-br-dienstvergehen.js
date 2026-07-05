/*
 * Prüfungsschema: Dienstvergehen und Folgen der Pflichtverletzung (§ 47 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - Skript "Folgen mangelnder Pflichterfuellung" (OLE 03) 2024/2025
 *  - Gesetze: BeamtStG §§ 47, 48; LBG §§ 60, 61, 81; LBesG § 15; StGB §§ 331 ff.
 *    (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-dienstvergehen",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Pflichtverletzung und Disziplinarrecht",
  title: "Dienstvergehen und Folgen der Pflichtverletzung (§ 47 BeamtStG)",
  description: "Die Prüfung des Dienstvergehens (Beamter – Pflichtverletzung – Verschulden – keine Rechtfertigung) mit der Abgrenzung inner-/außerdienstlich (§ 47 I 2-Filter) und der Vier-Felder-Überblick der Folgen: allgemeine beamtenrechtliche, haftungsrechtliche (§ 48), strafrechtliche und disziplinarrechtliche Konsequenzen.",
  start: "start",
  stations: [
    { id: "tatbestand", label: "Dienstvergehen" },
    { id: "abgrenzung", label: "innen/außen" },
    { id: "folgen", label: "Folgen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Dienstvergehen (+)",
    neg: "Ergebnis: kein Dienstvergehen",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Folge bestimmt"
  },

  nodes: {

    start: {
      station: "tatbestand",
      kind: "frage",
      norm: "§ 47 I BeamtStG",
      title: "Prüfschema Dienstvergehen: Beamter – Pflichtverletzung – Verschulden",
      def: "Beamte begehen ein <b>Dienstvergehen</b>, wenn sie <b>schuldhaft</b> die ihnen obliegenden Pflichten verletzen (§ 47 I 1 BeamtStG).<br><br><b>Prüfung (Skript):</b><br>1. <b>Beamteneigenschaft</b> (auch Ruhestandsbeamte: § 47 II BeamtStG, § 61 LBG),<br>2. <b>Verletzung einer Dienstpflicht</b> – Tun oder pflichtwidriges Unterlassen; die konkrete Pflicht benennen (§§ 33 ff. BeamtStG, §§ 49 ff. LBG; <b>Wohlverhaltenspflicht § 34 S. 3 als subsidiäre Generalklausel</b>),<br>3. <b>Verschulden</b> – Vorsatz oder Fahrlässigkeit,<br>4. <b>keine Rechtfertigungs-/Schuldausschließungsgründe</b> (Notwehr, Notstand, Nötigung, Unzurechnungsfähigkeit; <b>erfolgreiche Remonstration</b> befreit!),<br>5. <b>Bewusstsein der Pflichtwidrigkeit</b> (kein unvermeidbarer Verbotsirrtum, § 17 StGB analog).",
      options: [
        { label: "Alle Merkmale (+) – wo verletzt?", next: "q_abgrenzung", tone: "pos" },
        { label: "Merkmal fehlt", next: "e_kein_dv", tone: "neg" }
      ]
    },

    q_abgrenzung: {
      station: "abgrenzung",
      kind: "frage",
      norm: "§ 47 I 1, 2 BeamtStG",
      title: "Innerdienstlich oder außerdienstlich? (materielle Abgrenzung!)",
      def: "Die Abgrenzung erfolgt <b>nicht</b> nach Dienstort oder Dienstzeit, sondern <b>materiell nach der Rechtsnatur der verletzten Pflicht</b>:<br><br>• <b>innerdienstlich (§ 47 I 1):</b> Die verletzte Pflicht entstammt dem speziell für Beamte geltenden <b>öffentlich-rechtlichen Pflichtenkreis</b> (oder der Wohlverhaltenspflicht in ihrer innerdienstlichen Ausprägung),<br>• <b>außerdienstlich (§ 47 I 2):</b> Die verletzte Norm betrifft nur die <b>für jeden Bürger geltende Rechtsordnung</b> – auch bei mittelbaren Auswirkungen auf den Dienst (Beispiel: private Beleidigung eines Bürgers am erlaubt genutzten Diensttelefon = außerdienstlich!).<br><br><b>Der Filter des § 47 I 2:</b> Außerdienstliches Verhalten ist <b>nur dann</b> ein Dienstvergehen, wenn es nach den Umständen des Einzelfalls <b>in besonderem Maße geeignet</b> ist, das Vertrauen <b>in einer für das Amt bedeutsamen Weise</b> zu beeinträchtigen – beides gesondert prüfen!<br><br><b>Beispiel (Übungsfall R):</b> Vorsätzliche Steuerhinterziehung eines Amtsrats = außerdienstlich; wer Rechtsverstöße der Bürger zu ahnden hat, wird an höheren Maßstäben gemessen – vorsätzliche Straftat → Vertrauensbeeinträchtigung in besonderem Maße (+).",
      options: [
        { label: "Innerdienstlich", next: "q_folgen", tone: "pos" },
        { label: "Außerdienstlich + Filter (+)", next: "q_folgen", tone: "pos" },
        { label: "Außerdienstlich, Filter (−)", next: "e_kein_dv", tone: "neg" }
      ]
    },

    q_folgen: {
      station: "folgen",
      kind: "frage",
      norm: "§§ 47, 48 BeamtStG",
      title: "Die vier Folgen-Felder: Welche Konsequenz ist gefragt?",
      def: "Folgen mangelnder Pflichterfüllung (Übersicht):<br><br>• <b>allgemeine beamtenrechtliche Folgen:</b> Entlassung bei Diensteidverweigerung (§ 23 I Nr. 1), Verlust der Besoldung bei unentschuldigtem Fernbleiben (§ 81 III LBG, § 15 LBesG – Fach BesR!) + Verlust ruhegehaltfähiger Dienstzeit (§ 13 I Nr. 4 LBeamtVG), Entlassung des Probebeamten bei schwerem Dienstvergehen (§ 23 III Nr. 1), jederzeitige Entlassung des Widerrufsbeamten (§ 23 IV),<br>• <b>haftungsrechtliche Folgen (§ 48 BeamtStG, § 60 LBG):</b> Schadensersatz im Innenverhältnis,<br>• <b>strafrechtliche Folgen:</b> Jedermann-Delikte, unechte Amtsdelikte (schärfere Strafe für Amtsträger: Gefangenenbefreiung, Verwahrungsbruch, Körperverletzung im Amt), <b>echte Amtsdelikte</b> (nur von Amtsträgern: Bestechlichkeit, Falschbeurkundung, §§ 331 ff. StGB); ab 1 Jahr Freiheitsstrafe (vorsätzlich): Beendigung kraft Gesetzes (§ 24!),<br>• <b>disziplinarrechtliche Folgen</b> (§ 47 III BeamtStG → LDG – eigenes Schema).",
      options: [
        { label: "Schadensersatz (§ 48)", next: "e_haftung", tone: "warn" },
        { label: "Disziplinarrecht", next: "e_disziplinar", tone: "warn" },
        { label: "Beamtenrechtliche Folge", next: "e_beamtenrechtlich", tone: "warn" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_haftung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 48 BeamtStG, § 60 LBG",
      title: "Schadensersatzpflicht im Innenverhältnis",
      text: "Tatbestandsvoraussetzungen (§ 48 BeamtStG – Innenverhältnis Dienstherr/Beamter):\n1. Beamter,\n2. Verletzung einer ihm obliegenden Pflicht,\n3. VERSCHULDEN – HAFTUNGSPRIVILEG: nur VORSATZ und GROBE FAHRLÄSSIGKEIT! Kein Rechtfertigungsgrund (Notwehr; erfolgreiche REMONSTRATION schließt die Haftung aus),\n4. SCHADEN beim Dienstherrn, dessen Aufgaben wahrgenommen wurden (unmittelbarer/mittelbarer Schaden – § 60 LBG),\n5. adäquate Kausalität zwischen Pflichtverletzung und Schaden.\n\nRechtsfolge: Schadensersatz nach §§ 249 ff. BGB.\n\nAbzugrenzen vom AUSSENVERHÄLTNIS: Schädigt der Beamte in Ausübung des Amtes einen Bürger, haftet der Staat (Amtshaftung, § 839 BGB i. V. m. Art. 34 GG – Schema im AVR); der Rückgriff gegen den Beamten ist wieder auf Vorsatz/grobe Fahrlässigkeit beschränkt (Art. 34 S. 2 GG).\n\nBei Überzahlungen der Besoldung kann § 48 BeamtStG neben § 16 II LBesG stehen (Bescheid auf beide stützen)."
    },

    e_disziplinar: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 47 III BeamtStG, LDG",
      title: "Disziplinarrechtliche Folgen: weiter zum LDG",
      text: "Das Nähere regelt das Landesdisziplinargesetz (§ 47 III BeamtStG) – Details im Schema \"Disziplinarverfahren (LDG)\":\n\n• LEGALITÄTSPRINZIP für die Einleitung (§ 22 I LDG: bei konkreten Anhaltspunkten MUSS eingeleitet werden),\n• OPPORTUNITÄTSPRINZIP für die Maßnahme (§ 11 LDG: pflichtgemäßes Ermessen),\n• Maßnahmenkatalog § 3 LDG: Verweis, Geldbuße, Kürzung der Dienstbezüge, Zurückstufung, Entfernung aus dem Dienst (aktive Beamte); Kürzung/Aberkennung des Ruhegehalts (Ruhestandsbeamte),\n• Zwecke: Ordnungsfunktion (Disziplin, Funktionsfähigkeit, Ansehen) UND Schutzfunktion (Ämterstabilität, Unabhängigkeit).\n\nUnterhalb der Schwelle: MISSBILLIGENDE ÄUSSERUNGEN (Ermahnung, Rüge – § 3 IV LDG, aus der Geschäftsleitungs-/Weisungsbefugnis; Verhältnismäßigkeit: Kritikgespräch als milderes Mittel)."
    },

    e_beamtenrechtlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§§ 22–24 BeamtStG, § 15 LBesG",
      title: "Allgemeine beamtenrechtliche Folgen",
      text: "Je nach verletzter Pflicht und Status:\n\n• DIENSTEIDVERWEIGERUNG (§ 38 BeamtStG) → zwingende Entlassung (§ 23 I Nr. 1), fristlos mit Zustellung,\n• UNENTSCHULDIGTES FERNBLEIBEN (§ 81 I LBG) → Verlust der Besoldung kraft Gesetzes (§ 81 III LBG, § 15 LBesG – Schema im Fach Besoldungsrecht) + Verlust der ruhegehaltfähigen Dienstzeit (§ 13 I Nr. 4 LBeamtVG) + Disziplinarverfahren,\n• SCHWERES DIENSTVERGEHEN des PROBEbeamten → Entlassung (§ 23 III Nr. 1 – \"fiktive\" Kürzung der Dienstbezüge als Maßstab, § 7 LDG),\n• Fehlverhalten des WIDERRUFSbeamten → Entlassung (§ 23 IV; Anwärtern soll die Prüfung ermöglicht werden),\n• Nichtweiterführung des Amtes durch Beamte auf Zeit → Entlassung (§ 8 II LBG),\n• STRAFURTEIL ≥ 1 Jahr (vorsätzlich) → Beendigung kraft Gesetzes (§ 24 BeamtStG – Schema \"Beendigung\"),\n• LEISTUNGSMÄNGEL unterhalb der Pflichtverletzung → Hemmung des Stufenaufstiegs (§ 29 VI LBesG), Beurteilung."
    },

    e_kein_dv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 47 I BeamtStG",
      title: "Kein Dienstvergehen",
      text: "Es fehlt an einem Tatbestandsmerkmal:\n\n• keine Pflichtverletzung (Verhalten war zulässig – z. B. gemäßigte politische Betätigung, sachliche Kritik),\n• kein VERSCHULDEN (weder Vorsatz noch Fahrlässigkeit) oder Rechtfertigung (Notwehr, Notstand, erfolgreiche Remonstration – § 36 II 3 BeamtStG befreit von der Verantwortung!),\n• unvermeidbarer Verbotsirrtum,\n• AUSSERDIENSTLICHES Verhalten unterhalb des § 47 I 2-Filters: nicht in besonderem Maße geeignet, das Vertrauen amtsbedeutsam zu beeinträchtigen (Bagatellen, reine Privatsphäre ohne Amtsbezug).\n\nFolge: kein Disziplinarverfahren bzw. Einstellung (§ 38 LDG). Zulässig bleiben ggf. missbilligende Äußerungen ohne Disziplinarcharakter (§ 3 IV LDG) und Kritikgespräche – auch sie unterliegen aber dem Verhältnismäßigkeitsgrundsatz."
    }
  }
});
