/*
 * Prüfungsschema: Verlust der Bezüge bei schuldhaftem Fernbleiben (§ 15 LBesG)
 * Fach: Besoldungsrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BesR, FS III):
 *  - "Besoldungsrecht FSIII-V 2025_2026" (Hartmann/Schmorleiz), S. 30-34
 *    (Prüfungsschema § 15 LBesG mit 4 Tatbestandsmerkmalen, Rechtsfolgen, Verfahren)
 *  - Gesetze: LBesG § 15; LBG § 81; BeamtStG §§ 34, 39, 47 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "besr-fernbleiben",
  subject: "Besoldungsrecht",
  fs: ["FS3"],
  area: "Verlust und Rückforderung",
  title: "Schuldhaftes Fernbleiben vom Dienst (§ 15 LBesG)",
  description: "Verlust der Bezüge kraft Gesetzes bei unentschuldigtem Fehlen: Dienstpflicht – Fernbleiben – ohne Genehmigung – schuldhaft, dazu Rechtsfolgen (tageweiser/stundenweiser Verlust), feststellender VA und die Sonderfälle Freiheitsstrafe und U-Haft.",
  start: "start",
  stations: [
    { id: "pflicht", label: "Dienstpflicht" },
    { id: "fernbleiben", label: "Fernbleiben" },
    { id: "schuld", label: "Verschulden" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Verlust der Bezüge",
    neg: "Ergebnis: kein Verlust",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Sonderfall"
  },

  nodes: {

    start: {
      station: "pflicht",
      kind: "frage",
      norm: "§ 34 I BeamtStG, § 81 LBG",
      title: "(1) Beamter mit Dienstpflicht: Bestand eine nach Ort und Zeit festgelegte Dienstpflicht?",
      def: "Beamte müssen sich mit <b>vollem persönlichem Einsatz</b> ihrem Beruf widmen (§ 34 I BeamtStG) und dürfen dem Dienst nicht ohne Genehmigung fernbleiben (§ 81 I LBG; Ausnahme Dienstunfähigkeit, § 81 II LBG). Folgen einer Verletzung (§ 81 III LBG): <b>Verlust der Bezüge nach § 15 LBesG</b> + ggf. Disziplinarverfahren (§ 47 BeamtStG).<br><br>Im Rahmen des § 15 LBesG zählt nur die Nichterfüllung einer <b>nach Ort und Zeit festgelegten</b> Dienstpflicht (Arbeitszeit am zugewiesenen Arbeitsplatz, § 34 BeamtStG, § 81 LBG, ArbZVO).<br><br><b>KEINE Dienstpflicht besteht z. B.:</b> außerhalb der Arbeitszeit, bei bewilligtem (Sonder-)Urlaub, bei <b>Krankheit</b>, bei Rechtfertigungsgründen (staatsbürgerliche Pflichten, Hilfe in Notfällen), bei Verbot der Führung der Dienstgeschäfte (§ 39 BeamtStG) oder vorläufiger Dienstenthebung (§ 45 LDG).<br><br><b>Problemfall:</b> unvorhersehbare tatsächliche Verhinderungen (Naturereignis, Ausfall von Verkehrsmitteln, Stau/Glatteis) – hier liegt <b>i. d. R. KEIN Rechtfertigungsgrund</b> vor; entscheidend wird dann das Verschulden.",
      options: [
        { label: "Dienstpflicht bestand", next: "q_fernbleiben", tone: "pos" },
        { label: "Keine Dienstpflicht", next: "e_keine_pflicht", tone: "neg" },
        { label: "Sonderfall Haft (§ 15 II)", next: "e_haft", tone: "warn" }
      ]
    },

    q_fernbleiben: {
      station: "fernbleiben",
      kind: "frage",
      norm: "§ 15 I LBesG",
      title: "(2) Fernbleiben: Hat der Beamte den Arbeitsplatz nicht angetreten?",
      def: "<b>Fernbleiben</b> = der Beamte sucht den Arbeitsplatz in zeitlicher und örtlicher Hinsicht nicht auf. Das Antreten muss <b>am Arbeitsplatz</b> erfolgen – wer den ganzen Tag in der Kantine des Verwaltungsgebäudes sitzt, bleibt dem Dienst fern!<br><br><b>KEIN Fall des § 15 LBesG:</b><br>• <b>passive Resistenz</b> am Arbeitsplatz (Arbeitsverweigerung bei Anwesenheit) – dann nur Disziplinarrecht,<br>• wenn die versäumte Arbeitszeit <b>nachgeholt</b> wird (z. B. nacharbeiten dürfen bei Verspätung) – das Tatbestandsmerkmal entfällt.<br><br>Auch das Fernbleiben für <b>Teile eines Tages</b> genügt (§ 15 I 2 LBesG) – schon zwei unentschuldigte Stunden führen zum anteiligen Verlust.",
      options: [
        { label: "Fernbleiben liegt vor", next: "q_genehmigung", tone: "pos" },
        { label: "Kein Fernbleiben / nachgearbeitet", next: "e_kein_fernbleiben", tone: "neg" }
      ]
    },

    q_genehmigung: {
      station: "fernbleiben",
      kind: "frage",
      norm: "§ 15 I 1 LBesG",
      title: "(3) Ohne Genehmigung: Wurde das Fernbleiben (nachträglich) genehmigt?",
      def: "Der Dienstvorgesetzte kann das Fernbleiben <b>genehmigen</b> – z. B. zur Erledigung von Privatangelegenheiten im Rahmen des Überstundenausgleichs, für Arztbesuche etc. Bei genehmigtem Fernbleiben besteht schon keine Dienstpflicht.<br><br>In der Prüfung ist v. a. relevant, ob eine <b>nachträgliche Genehmigung</b> erteilt wurde (z. B. Verspätung wird durch Nacharbeiten „geheilt“ und genehmigt).",
      options: [
        { label: "Keine Genehmigung", next: "q_schuld", tone: "pos" },
        { label: "Genehmigung (auch nachträglich)", next: "e_genehmigt", tone: "neg" }
      ]
    },

    q_schuld: {
      station: "schuld",
      kind: "frage",
      norm: "§ 15 I 1 LBesG",
      title: "(4) Schuldhaft: Handelte der Beamte vorsätzlich oder fahrlässig?",
      def: "<b>Schuldhaft</b> = vorsätzlich oder fahrlässig nicht zum Dienst erschienen.<br><br>• Zu prüfen sind <b>Schuldausschließungsgründe</b>.<br>• Verschulden liegt auch vor, wenn sich der Beamte vorsätzlich oder fahrlässig <b>in eine Situation begibt</b>, die ihm das rechtzeitige Antreten nicht gestattet (z. B. Weg zur Dienststelle ohne „Pufferzeit“ bei angekündigtem Glatteis).<br>• Das Verschulden muss sich unmittelbar auf die Erfüllung der Dienstpflichten beziehen.<br><br><b>Beispiel (Übung 3):</b> Wer im Winter wegen Glatteis zu spät kommt und nicht nacharbeiten darf, verliert die Bezüge nur, wenn ihm die Verspätung vorzuwerfen ist (keine Pufferzeit trotz vorhersehbarer Lage = fahrlässig).",
      options: [
        { label: "Verschulden liegt vor", next: "e_verlust", tone: "pos" },
        { label: "Kein Verschulden", next: "e_kein_verschulden", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_verlust: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 15 I LBesG, § 81 III LBG",
      title: "Verlust der Bezüge kraft Gesetzes",
      text: "Der Beamte verliert für die Zeit des Fernbleibens die Bezüge (§ 15 I 1 LBesG). Die Rechtsfolge tritt KRAFT GESETZES ein – der Dienstherr hat KEIN Ermessen.\n\nBERECHNUNG:\n• Tageweiser Verlust: entsprechend § 4 III LBesG wird für jeden Verlusttag 1/28, 1/29, 1/30 oder 1/31 einbehalten. Dienstfreie Tage zählen mit, wenn ein Arbeitstag davor UND/ODER danach versäumt wird.\n• Teile eines Tages (§ 15 I 2 LBesG): erst den Tagesanteil nach § 4 III ermitteln, dann durch 1/5 der durchschnittlichen Wochenarbeitszeit teilen (= Stundenanteil).\n\nVERFAHREN:\n1. Ermittlung und Anhörung des Beamten,\n2. FESTSTELLUNG des Verlusts durch den Dienstvorgesetzten (§ 81 III 1 LBG, § 15 I 3 LBesG) – ein feststellender VA i. S. d. § 1 LVwVfG i. V. m. § 35 VwVfG: Die Rechtsfolge tritt zwar kraft Gesetzes ein, kann aber nur durch eine die Höhe konkretisierende Feststellung geltend gemacht werden,\n3. schriftliche Mitteilung an den Beamten (§ 81 III 1 LBG),\n4. bereits gezahlte Bezüge: Rückforderung nach § 16 LBesG (eigener Rückforderungs-VA – Schema „Rückforderung von Bezügen\"; die Feststellung nach § 15 schafft die Rechtsgrundlosigkeit),\n5. daneben: disziplinarrechtliche Prüfung (§ 47 BeamtStG).\n\nKein Fall der Anordnung sofortiger Vollziehung und keine Ermessensausübung nötig (Übung 3 Nr. 2)."
    },

    e_haft: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 15 II LBesG",
      title: "Sonderfälle: Freiheitsstrafe und Untersuchungshaft",
      text: "• FREIHEITSSTRAFE: Der Vollzug einer von einem deutschen Gericht rechtskräftig verhängten Freiheitsstrafe GILT als schuldhaftes Fernbleiben (§ 15 II 1 LBesG) – Verlust der Bezüge für die Haftzeit.\n\n• UNTERSUCHUNGSHAFT: Für die Zeit der U-Haft wird die Besoldung UNTER DEM VORBEHALT DER RÜCKFORDERUNG weitergezahlt (§ 15 II 2 LBesG) – die Bezüge sind also NICHT sofort einzustellen! Erst wenn der Beamte wegen des dem Haftbefehl zugrunde liegenden Sachverhalts rechtskräftig zu einer Freiheitsstrafe verurteilt wird, ist die gezahlte Besoldung zurückzuerstatten (§ 15 II 3 LBesG).\n\nDer Vorbehalt begründet zugleich die verschärfte Haftung im Rückforderungsverfahren – die Entreicherungseinrede ist abgeschnitten (§ 16 II LBesG i. V. m. § 820 BGB; Schema „Rückforderung von Bezügen\")."
    },

    e_keine_pflicht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 I LBesG",
      title: "Keine Dienstpflicht – kein Verlust",
      text: "Ohne eine nach Ort und Zeit festgelegte Dienstpflicht scheidet § 15 LBesG aus. Das gilt insbesondere bei Krankheit (Dienstunfähigkeit), bewilligtem Urlaub/Sonderurlaub, Rechtfertigungsgründen oder außerhalb der Arbeitszeit.\n\nAchtung Klausurfalle (Übung 3): Reicht der dienstunfähig erkrankte Beamte die ärztliche Bescheinigung verspätet ein, verliert er NICHT die Bezüge – die Krankheit selbst lässt die Dienstpflicht entfallen; die verspätete Vorlage ist nur ein Dienstvergehen (Disziplinarrecht), kein Fall des § 15 LBesG.\n\nDie Alimentation läuft weiter (Alimentationsprinzip: Anspruch besteht für den Eintritt in das Dienst- und Treueverhältnis, nicht für die tatsächliche Arbeitsleistung)."
    },

    e_kein_fernbleiben: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 I LBesG",
      title: "Kein Fernbleiben",
      text: "Wer am Arbeitsplatz anwesend ist, aber nicht (richtig) arbeitet (passive Resistenz/Arbeitsverweigerung), bleibt nicht \"fern\" – § 15 LBesG greift nicht; es bleibt beim Disziplinarrecht (§ 47 BeamtStG).\n\nEbenso entfällt das Merkmal, wenn die versäumte Zeit nachgearbeitet wird (z. B. genehmigtes Nacharbeiten nach unverschuldeter Verspätung).\n\nMerke: Das bloße Betreten des Gebäudes genügt umgekehrt NICHT als Dienstantritt – maßgeblich ist der Arbeitsplatz (Kantinen-Fall: Fernbleiben +)."
    },

    e_genehmigt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 I 1 LBesG",
      title: "Genehmigtes Fernbleiben",
      text: "Bei (auch nachträglich) genehmigtem Fernbleiben fehlt es am Tatbestandsmerkmal \"ohne Genehmigung\" – im Grunde besteht bereits keine Dienstpflicht. Kein Verlust der Bezüge.\n\nTypische Fälle: Freistellung im Rahmen des Überstundenausgleichs, genehmigte Arztbesuche, Arbeitsbefreiung."
    },

    e_kein_verschulden: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 15 I 1 LBesG",
      title: "Kein Verschulden – kein Verlust",
      text: "Ohne Vorsatz oder Fahrlässigkeit (oder bei Schuldausschließungsgründen) tritt der Verlust der Bezüge nicht ein.\n\nAber: Die Anforderungen sind streng – wer sich ohne Pufferzeit auf den Weg macht, obwohl Verkehrsprobleme absehbar waren, handelt fahrlässig. Unverschuldet ist das Fernbleiben etwa bei einem völlig unvorhersehbaren Ereignis trotz ausreichender Zeitplanung.\n\nHinweis: Auch ohne Bezügeverlust kann eine disziplinarrechtliche Würdigung in Betracht kommen, wenn andere Pflichten verletzt wurden."
    }
  }
});
