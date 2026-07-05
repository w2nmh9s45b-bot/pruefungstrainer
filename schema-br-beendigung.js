/*
 * Prüfungsschema: Beendigung des Beamtenverhältnisses (Überblick, § 21 BeamtStG)
 * Fach: Beamtenrecht (Fachstudium 2)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 BR, FS II):
 *  - PP-Skript "Block 4 - Beendigung von Beamtenverhältnissen" (Minor) 2024/2025
 *  - Skript "Folgen mangelnder Pflichterfüllung" (OLE 03), Übungsfall R
 *  - Gesetze: BeamtStG §§ 21, 24; LBG § 35; LDG § 8 (Volltexte geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "br-beendigung",
  subject: "Beamtenrecht",
  fs: ["FS2"],
  area: "Beendigung",
  title: "Beendigung des Beamtenverhältnisses (§ 21 BeamtStG)",
  description: "Die Weiche über die Beendigungsgründe: Tod (ungeschrieben) – Entlassung (kraft Gesetzes/durch VA) – Verlust der Beamtenrechte (§ 24: Strafurteil) – Entfernung aus dem Dienst (LDG) – Ruhestand. Der Beamte verliert seine Rechte nur aus den im Gesetz genannten Gründen.",
  start: "start",
  stations: [
    { id: "grundsatz", label: "Grundsatz" },
    { id: "grund", label: "Grund" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Beendigung (+)",
    neg: "Ergebnis: keine Beendigung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Verfahren nötig"
  },

  nodes: {

    start: {
      station: "grundsatz",
      kind: "frage",
      norm: "§ 21 BeamtStG",
      title: "Grundsatz: Nur gesetzliche Beendigungsgründe",
      def: "Der Beamte darf <b>nicht aus anderen als den im Gesetz genannten Gründen</b> seine Rechte aus dem BV verlieren (Lebenszeitprinzip, Art. 33 V GG).<br><br><b>§ 21 BeamtStG zählt auf:</b> Das Beamtenverhältnis endet durch<br>• Nr. 1: <b>Entlassung</b>,<br>• Nr. 2: <b>Verlust der Beamtenrechte</b>,<br>• Nr. 3: <b>Entfernung aus dem Beamtenverhältnis</b> nach den Disziplinargesetzen,<br>• Nr. 4: Eintritt oder Versetzung in den <b>Ruhestand</b>.<br><br>Dazu der ungeschriebene Grund <b>Tod</b> („Können Beamte in den Himmel kommen? – Nein, das BV endet mit dem Tod.“).<br><br>Je nach BV-Art bestehen unterschiedliche Bindungsstärken: Der Lebenszeitbeamte ist am stärksten geschützt (i. d. R. Ruhestand statt Entlassung), der Widerrufsbeamte am schwächsten (jederzeitige Entlassung, § 23 IV).",
      options: [
        { label: "Entlassung", next: "e_entlassung_weiche", tone: "pos" },
        { label: "Strafurteil (§ 24)", next: "q_verlust", tone: "warn" },
        { label: "Schweres Dienstvergehen (LDG)", next: "e_entfernung", tone: "warn" },
        { label: "Ruhestand / Tod", next: "e_ruhestand_tod", tone: "neutral" }
      ]
    },

    q_verlust: {
      station: "grund",
      kind: "frage",
      norm: "§ 24 I BeamtStG",
      title: "Verlust der Beamtenrechte: Reicht die Verurteilung?",
      def: "Das BV <b>endet kraft Gesetzes mit der Rechtskraft des Urteils</b>, wenn der Beamte im <b>ordentlichen Strafverfahren</b> durch Urteil eines <b>deutschen</b> Gerichts verurteilt wird (§ 24 I BeamtStG):<br><br>• wegen einer <b>vorsätzlichen Tat</b> zu <b>Freiheitsstrafe von mindestens einem Jahr</b> oder<br>• wegen einer vorsätzlichen Tat, die nach den Vorschriften über <b>Friedensverrat, Hochverrat, Gefährdung des demokratischen Rechtsstaates oder Landesverrat</b> strafbar ist, zu Freiheitsstrafe von mindestens <b>sechs Monaten</b>.<br><br><b>Wichtig (Übungsfall R):</b> Die <b>Strafaussetzung zur Bewährung</b> ist nur eine Maßnahme des Strafvollzugs – sie berührt die Wirkung des § 24 <b>nicht</b>! Ein Jahr Freiheitsstrafe auf Bewährung wegen vorsätzlicher Steuerhinterziehung genügt.<br><br>Kein Fall des § 24: Geldstrafen, Freiheitsstrafen unter einem Jahr (bei „normalen“ Delikten), fahrlässige Taten, Strafbefehle unterhalb der Schwelle – dann bleibt das Disziplinarverfahren.",
      options: [
        { label: "Schwelle erreicht", next: "e_verlust", tone: "pos" },
        { label: "Darunter", next: "e_kein_verlust", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_entlassung_weiche: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§§ 22, 23 BeamtStG",
      title: "Entlassung: kraft Gesetzes oder durch VA?",
      text: "Die Entlassung tritt entweder KRAFT GESETZES ein (§ 22 BeamtStG – \"sind entlassen\": automatisch, ohne Verfügung; der Tag der Beendigung ist nur deklaratorisch festzustellen, § 30 I LBG) oder sie wird DURCH VERWALTUNGSAKT verfügt (§ 23 BeamtStG – \"sind zu entlassen\"/\"können entlassen werden\").\n\nWeiter in den Detail-Schemata:\n• \"Entlassung kraft Gesetzes (§ 22 BeamtStG)\" – Staatsangehörigkeitsverlust, anderes Dienst-/Amtsverhältnis, BaZ beim selben Dienstherrn, Laufbahnprüfung,\n• \"Entlassung durch Verwaltungsakt (§ 23 BeamtStG)\" – Diensteidverweigerung, fehlende Wartezeit, Dienstunfähigkeit ohne Ruhestand, eigener Antrag, Probe- und Widerrufsbeamte, mit Verfahren und Fristen (§§ 31, 32 LBG).\n\nWirkung: Mit der Entlassung enden Besoldungsanspruch (§ 4 IV LBesG) und grundsätzlich alle Ansprüche gegen den Dienstherrn (§ 32 II LBG); ggf. Nachversicherung in der gesetzlichen Rentenversicherung (§§ 181 ff. SGB VI)."
    },

    e_verlust: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 24 I BeamtStG, § 35 LBG",
      title: "Verlust der Beamtenrechte kraft Gesetzes",
      text: "Mit RECHTSKRAFT des Urteils endet das Beamtenverhältnis automatisch – ohne weiteren Rechtsakt (§ 24 I BeamtStG); die Wirkungen regelt § 35 LBG.\n\nÜbungsfall R (Skript): Amtsrat R wird wegen vorsätzlicher Steuerhinterziehung zu einem Jahr Freiheitsstrafe AUF BEWÄHRUNG verurteilt, Urteil rechtskräftig am 20.04.2020 → R verliert – unbesehen einer parallel laufenden Entlassungsverfügung – spätestens mit der Rechtskraft seine Beamtenrechte. Die Bewährung ändert nichts.\n\nFolgen:\n• Verlust von Besoldung und Versorgung; Nachversicherung (§§ 181 ff. SGB VI),\n• kein Führen der Amtsbezeichnung,\n• bei Ruhestandsbeamten entsprechend: Aberkennung des Ruhegehalts im Disziplinarweg bzw. § 59 LBeamtVG.\n\nDaneben ist das strafrechtliche Verhalten regelmäßig auch ein Dienstvergehen – bei laufendem Strafverfahren beachte das Verhältnis zum Disziplinarverfahren (Aussetzung, Bindungswirkung der Feststellungen)."
    },

    e_kein_verlust: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 24 I BeamtStG, § 47 BeamtStG",
      title: "Schwelle nicht erreicht: Disziplinarweg",
      text: "Unterhalb der Schwellen des § 24 I BeamtStG (1 Jahr bzw. 6 Monate bei Staatsschutzdelikten, jeweils Vorsatz) endet das BV NICHT kraft Gesetzes.\n\nAber: Die Straftat ist regelmäßig ein DIENSTVERGEHEN (§ 47 BeamtStG – bei außerdienstlichem Verhalten mit der Erheblichkeitsschwelle des § 47 I 2). Dann:\n• Disziplinarverfahren einleiten (Legalitätsprinzip, § 22 I LDG),\n• Maßnahmenkatalog bis zur Entfernung aus dem Dienst (§§ 3, 8 LDG – nur durch das VG Trier auf Disziplinarklage),\n• beachte das Verbot der Doppelbestrafung (§ 13 I Nr. 1 LDG: nach unanfechtbarer Strafe/Buße kein Verweis, keine Geldbuße, keine Kürzung des Ruhegehalts wegen desselben Sachverhalts).\n\nDetails: Schemata \"Dienstvergehen\" und \"Disziplinarverfahren\"."
    },

    e_entfernung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 21 Nr. 3, § 47 BeamtStG, § 8 LDG",
      title: "Entfernung aus dem Dienst (schwerste Disziplinarmaßnahme)",
      text: "Hat der Beamte ein SCHWERES Dienstvergehen (§ 47 I BeamtStG) begangen und dadurch das Vertrauen des Dienstherrn oder der Allgemeinheit ENDGÜLTIG verloren, kann das VERWALTUNGSGERICHT auf Disziplinarklage des Dienstvorgesetzten die Entfernung aus dem Dienst verhängen (§§ 8, 40 LDG) – nie die Behörde selbst!\n\n• Zuständig: VG Trier (Kammer für Disziplinarsachen), 2. Instanz OVG RLP in Koblenz (§ 53 LDG) – keine weitere Instanz,\n• Beispiel aus dem Skript: Selbstbeurlaubung einer Lehrerin mit unrichtigem Attest für die \"Dschungelcamp\"-Begleitung 2016,\n• flankierend: vorläufige Dienstenthebung + Einbehalt bis zur Hälfte der Bezüge (§ 45 LDG),\n• für Beamte auf Probe/Widerruf gibt es die Entfernung nicht – stattdessen Entlassung (§ 23 III 1 Nr. 1, IV BeamtStG; §§ 3 III 2, 114 LDG: nur Verweis und Geldbuße als Maßnahmen).\n\nDetails: Schema \"Disziplinarverfahren\"."
    },

    e_ruhestand_tod: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "§ 21 Nr. 4 BeamtStG",
      title: "Ruhestand (und Tod)",
      text: "TOD: ungeschriebener Beendigungsgrund – das BV endet zwangsläufig; es schließt sich die Hinterbliebenenversorgung an (LBeamtVG).\n\nRUHESTAND (§ 21 Nr. 4 BeamtStG): eigentlich keine echte Beendigung – das aktive BV wandelt sich in ein RUHESTANDSBEAMTENVERHÄLTNIS um (Befreiung von der Dienstleistungspflicht; aktives BV und Ruhestand bilden eine rechtliche Einheit: Alimentation läuft als Versorgung weiter, Treuepflicht und Disziplinargewalt bestehen fort).\n\nDrei Wege in den Ruhestand (Details: Schema \"Ruhestand\"):\n1. EINTRITT wegen Erreichens der Altersgrenze (§ 25 BeamtStG, §§ 37, 38 LBG – 67. Lebensjahr),\n2. VERSETZUNG auf Antrag (§ 39 LBG – ab 63, Schwerbehinderte ab 60/61),\n3. VERSETZUNG wegen Dienstunfähigkeit (§§ 26, 28 BeamtStG, §§ 44-47 LBG).\n\nStets erforderlich: versorgungsrechtliche WARTEZEIT von fünf Jahren (§ 32 BeamtStG, § 11 I Nr. 1 LBeamtVG) – sonst Entlassung statt Ruhestand (§ 23 I Nr. 2 BeamtStG)."
    }
  }
});
