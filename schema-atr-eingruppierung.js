/*
 * Prüfungsschema: Eingruppierung (§ 12 TVöD-VKA, Tarifautomatik)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 2.6.2.1 (Zuordnung zu den
 *    Entgeltgruppen, Eingruppierungsgrundsätze, Tarifautomatik)
 *  - OPW FS 1: "Anlage 1 zum TVoeD (VKA)_Entgeltordnung" (Tätigkeitsmerkmale)
 *  - Gesetze: TVöD §§ 12, 13, 15 (VKA) (Volltext geprüft)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-eingruppierung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Entgelt (TVöD-VKA)",
  title: "Eingruppierung (§ 12 TVöD-VKA)",
  description: "Tarifautomatik: Der Beschäftigte IST eingruppiert – Zuordnung zur Entgeltgruppe nach der auszuübenden, auf Dauer übertragenen Tätigkeit, 50-%-Regel für Arbeitsvorgänge (bzw. abweichendes zeitliches Maß), persönliche Voraussetzungen und Tätigkeitsmerkmale der Entgeltordnung (Anlage 1).",
  start: "start",
  stations: [
    { id: "grundsatz", label: "Tarifautomatik" },
    { id: "taetigkeit", label: "Tätigkeit" },
    { id: "mass", label: "Zeitmaß" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: eingruppiert",
    neg: "Ergebnis: keine (höhere) Eingruppierung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "grundsatz",
      kind: "frage",
      norm: "§ 12 II 1 TVöD-VKA",
      title: "Grundsatz verstanden: Wie funktioniert die Tarifautomatik?",
      def: "<b>Eingruppierung</b> = Zuordnung der/des Beschäftigten zu einer <b>Entgeltgruppe</b> (EG 1–15) nach der Wertigkeit der Tätigkeit. Zusammen mit der <b>Stufe</b> (§§ 16, 17) ergibt sie das monatliche <b>Tabellenentgelt</b> (§ 15 I, II TVöD, Anlage A).<br><br><b>Tarifautomatik (§ 12 II 1 TVöD-VKA):</b> Die/Der Beschäftigte <b>IST eingruppiert</b> – nicht: „wird eingruppiert“. Die Eingruppierung ist ein <b>Akt der Rechtsanwendung</b> ohne rechtsgestaltende Wirkung: Sie ergibt sich <b>automatisch</b> aus der Wertigkeit der übertragenen Tätigkeit (festgestellt durch <b>Stellenbewertung</b> – Studiengebiet OPW).<br><br>Sobald die bewertete Stelle besetzt ist, entsteht ein <b>einklagbarer tariflicher Entgeltanspruch</b> – ohne weitere Maßnahme des Arbeitgebers. § 12 II TVöD ist Anspruchsnorm!<br><br><b>NICHT maßgeblich sind:</b> die Ausweisung im Stellenplan, die Angabe im Arbeitsvertrag (nur deklaratorisch), Qualität und Quantität der Aufgabenerledigung durch den Stelleninhaber.",
      options: [
        { label: "Klar – weiter zu den Voraussetzungen", next: "q_auszuueben", tone: "pos" }
      ]
    },

    q_auszuueben: {
      station: "taetigkeit",
      kind: "frage",
      norm: "§ 12 II 1, 2 TVöD-VKA",
      title: "Wird auf die AUSZUÜBENDE Tätigkeit abgestellt?",
      def: "Bewertet werden nur die <b>auszuübenden</b> Tätigkeiten – d. h. die Tätigkeiten, die sich aus der <b>Arbeitsplatz-/Stellenbeschreibung</b> des Arbeitgebers oder durch Übertragung (z. B. Geschäftsverteilungsplan) ergeben.<br><br><b>NICHT maßgeblich:</b><br>• freiwillig ohne Übertragung wahrgenommene Aufgaben („sich Arbeit heranziehen“ hilft nicht),<br>• die tatsächlich ausgeübten Tätigkeiten, soweit sie von der Übertragung abweichen,<br>• wie GUT oder WIE VIEL die/der Beschäftigte arbeitet (Leistung spielt bei der Stufe eine Rolle, nicht bei der Entgeltgruppe).",
      options: [
        { label: "Ja, übertragene/auszuübende Tätigkeit betrachtet", next: "q_dauer", tone: "pos" },
        { label: "Nur freiwillig übernommene Aufgaben", next: "e_nicht_uebertragen", tone: "neg" }
      ]
    },

    q_dauer: {
      station: "taetigkeit",
      kind: "frage",
      norm: "§ 12 II TVöD-VKA / § 14 TVöD-VKA",
      title: "Ist die Tätigkeit auf DAUER übertragen?",
      def: "Die Tätigkeit muss <b>nicht nur vorübergehend</b>, sondern <b>auf Dauer</b> übertragen sein.<br><br><b>Abgrenzung:</b> Bei nur <b>vorübergehender</b> Übertragung einer höherwertigen Tätigkeit ändert sich die Eingruppierung NICHT – die/der Beschäftigte erhält stattdessen eine <b>persönliche Zulage nach § 14 TVöD-VKA</b> (eigenes Schema).<br><br>Entwickelt sich die übertragene Tätigkeit <b>nicht nur vorübergehend</b> qualitativ in eine höhere oder niedrigere Entgeltgruppe, greift § 13 TVöD-VKA (Eingruppierung in besonderen Fällen) – Folge ist dann die Höher- bzw. Herabgruppierung (§ 17 IV TVöD, eigenes Schema).",
      options: [
        { label: "Ja, dauerhaft übertragen", next: "q_mass", tone: "pos" },
        { label: "Nur vorübergehend übertragen", next: "e_zulage", tone: "warn" }
      ]
    },

    q_mass: {
      station: "mass",
      kind: "frage",
      norm: "§ 12 II 2, 4, 5 TVöD-VKA",
      title: "Erfüllen Arbeitsvorgänge im geforderten Zeitmaß die Tätigkeitsmerkmale?",
      def: "Die gesamte auszuübende Tätigkeit entspricht den Tätigkeitsmerkmalen einer Entgeltgruppe, wenn <b>zeitlich mindestens zur Hälfte (50 %) Arbeitsvorgänge</b> anfallen, die für sich genommen die Anforderungen eines oder mehrerer Tätigkeitsmerkmale dieser Entgeltgruppe erfüllen (§ 12 II 2 TVöD-VKA).<br><br><b>Arbeitsvorgang</b> = Arbeitsleistungen (einschließlich Zusammenhangsarbeiten), die bezogen auf den Aufgabenkreis zu einem <b>abgrenzbaren Arbeitsergebnis</b> führen (z. B. „Bearbeitung eines Bauantrags“ als Ganzes).<br><br><b>Ausnahme – anderes zeitliches Maß (§ 12 II 5):</b> Ist in einem Tätigkeitsmerkmal ein anderes Maß bestimmt, gilt dieses – z. B. in Teil A Abschnitt I Ziffer 3 der Entgeltordnung für <b>EG 7 (20 %)</b> und <b>EG 8 (33 1/3 %) „selbständige Leistungen“</b>.",
      options: [
        { label: "Ja, 50 % (bzw. abweichendes Maß) erreicht", next: "q_persoenlich", tone: "pos" },
        { label: "Nein, zeitliches Maß nicht erreicht", next: "e_mass", tone: "neg" }
      ]
    },

    q_persoenlich: {
      station: "mass",
      kind: "frage",
      norm: "§ 12 II 6 TVöD-VKA",
      title: "Sind geforderte persönliche Voraussetzungen erfüllt?",
      def: "Stellt ein Tätigkeitsmerkmal eine <b>Anforderung an die Person</b> (z. B. „Ingenieur“, Meisterprüfung, „gründliche und vielseitige Fachkenntnisse“, mehrjährige Berufserfahrung), muss auch diese <b>persönliche Voraussetzung</b> erfüllt sein (§ 12 II 6 TVöD-VKA).<br><br><b>Maßgebliche Tätigkeitsmerkmale:</b> <b>Entgeltordnung VKA</b> = Anlage 1 zum TVöD (§ 12 I 1 TVöD-VKA). Der Hauptteil der Beschäftigten einer Kommunalverwaltung ist einzugruppieren nach <b>Teil A (Allgemeiner Teil), Abschnitt I (Allgemeine Tätigkeitsmerkmale), Ziffer 3 (Entgeltgruppen 2 bis 12 – Büro-, Buchhalterei-, sonstiger Innendienst und Außendienst)</b> – mit den aufbauenden Merkmalen: einfachere Tätigkeiten → gründliche Fachkenntnisse → vielseitige Fachkenntnisse → selbständige Leistungen (Anteile!) → besondere Schwierigkeit und Bedeutung usw.",
      options: [
        { label: "Ja, persönliche Voraussetzungen erfüllt", next: "e_eingruppiert", tone: "pos" },
        { label: "Nein (z. B. geforderter Abschluss fehlt)", next: "e_persoenlich", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_eingruppiert: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 12 II TVöD-VKA",
      title: "Eingruppierung in die Entgeltgruppe kraft Tarifautomatik",
      text: "Alle vier Voraussetzungen sind erfüllt: (1) auszuübende, übertragene Tätigkeit, (2) auf Dauer übertragen, (3) Arbeitsvorgänge im geforderten zeitlichen Maß (Regel: mindestens 50 %; abweichend z. B. EG 7: 20 %, EG 8: 33 1/3 % selbständige Leistungen), (4) persönliche Voraussetzungen. Die/Der Beschäftigte IST in die Entgeltgruppe eingruppiert, deren Tätigkeitsmerkmalen die Wertigkeit ihrer/seiner Arbeit entspricht (Tarifautomatik).\n\nEs besteht ein unmittelbar einklagbarer Anspruch auf das Tabellenentgelt dieser Entgeltgruppe (§ 15 I, II TVöD i. V. m. Anlage A) – falscher Ausweis im Stellenplan oder Arbeitsvertrag ändert daran nichts (Eingruppierungsfeststellungsklage zum Arbeitsgericht).\n\nWeiter geht es mit der Stufenzuordnung (§ 16 TVöD-VKA, eigenes Schema)."
    },

    e_nicht_uebertragen: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 12 II 2 TVöD-VKA",
      title: "Freiwillig übernommene Aufgaben zählen nicht",
      text: "Für die Eingruppierung zählen nur die vom Arbeitgeber übertragenen, auszuübenden Tätigkeiten (Stellenbeschreibung, Geschäftsverteilungsplan). Aufgaben, die sich die/der Beschäftigte ohne Übertragung selbst „herangezogen\" hat, bleiben außer Betracht – auch wenn sie höherwertig sind.\n\nPraxis-Tipp aus der Organisationsarbeit: Weichen tatsächliche Aufgaben dauerhaft von der Stellenbeschreibung ab, ist die Stellenbeschreibung zu aktualisieren und die Stelle neu zu bewerten – erst die (konkludente) ÜBERTRAGUNG löst die Tarifautomatik aus."
    },

    e_zulage: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 14 TVöD-VKA",
      title: "Nur vorübergehend übertragen: keine Umgruppierung, sondern Zulage",
      text: "Die nur vorübergehende Übertragung einer höherwertigen Tätigkeit (Vertretung, kommissarische Wahrnehmung, Erprobung) hat KEINEN Einfluss auf die Eingruppierung nach § 12 TVöD-VKA und das Tabellenentgelt.\n\nAls finanziellen Ausgleich gewährt § 14 TVöD-VKA eine persönliche Zulage, wenn die höherwertige Tätigkeit mindestens einen Monat tatsächlich ausgeübt wurde – Voraussetzungen und Höhe im eigenen Schema „Persönliche Zulage (§ 14 TVöD)\".\n\nWird die höherwertige Tätigkeit im unmittelbaren Anschluss DAUERHAFT übertragen, erfolgt die Höhergruppierung; für die Stufenzuordnung wird dann fiktiv auf den ersten Tag der vorübergehenden Übertragung abgestellt (Protokollerklärung zu § 17 IV TVöD-VKA)."
    },

    e_mass: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 12 II 2, 4, 5 TVöD-VKA",
      title: "Zeitliches Maß nicht erreicht – keine (höhere) Eingruppierung",
      text: "Die Arbeitsvorgänge, die die Anforderungen der angestrebten Entgeltgruppe erfüllen, machen weniger als die Hälfte (bzw. weniger als das abweichend bestimmte Maß) der Gesamttätigkeit aus. Die Tätigkeit entspricht damit insgesamt nicht den Tätigkeitsmerkmalen dieser Entgeltgruppe.\n\nDie Eingruppierung richtet sich nach der Entgeltgruppe, deren Merkmale die Gesamttätigkeit im geforderten Umfang erfüllt (ggf. die niedrigere EG).\n\nGestaltungshinweis für die Organisationsarbeit: Über den Zuschnitt der Arbeitsvorgänge (Stellenbeschreibung!) lässt sich die Bewertung beeinflussen – Zusammenhangsarbeiten sind dem Arbeitsvorgang zuzurechnen, dessen Ergebnis sie dienen."
    },

    e_persoenlich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 12 II 6 TVöD-VKA",
      title: "Persönliche Voraussetzung fehlt",
      text: "Das Tätigkeitsmerkmal verlangt eine bestimmte persönliche Voraussetzung (z. B. abgeschlossene Hochschulbildung, Meisterprüfung, bestimmte Berufserfahrung), die die/der Beschäftigte nicht erfüllt. Die Eingruppierung in diese Entgeltgruppe scheidet aus (§ 12 II 6 TVöD-VKA).\n\nHäufig sehen die Tätigkeitsmerkmale dann Auffangregelungen für „sonstige Beschäftigte\" vor, die aufgrund gleichwertiger Fähigkeiten und Erfahrungen entsprechende Tätigkeiten ausüben – dann ist DIESES Merkmal zu prüfen.\n\nEs bleibt sonst bei der Entgeltgruppe, deren Merkmale vollständig erfüllt sind."
    }
  },

  routers: {}
});
