/*
 * Prüfungsschema: Zustandekommen und Form des Arbeitsvertrags (§ 611a BGB, § 2 TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 1.6 (Arbeitsverhältnis/Arbeitsvertrag)
 *    und 2.5.1 (Arbeitsvertrag nach TVöD, Muster-Arbeitsvertrag, Nebenabreden)
 *  - Lehrplanung FS III PLE 2 (Abschluss und Inhalt des Arbeitsvertrages)
 *  - Gesetze: BGB §§ 145 ff., 611a; TVöD § 2 (Volltext geprüft); NachwG
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-arbeitsvertrag",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Arbeitsvertrag und Befristung",
  title: "Zustandekommen und Form des Arbeitsvertrags",
  description: "Einigung nach §§ 145 ff. BGB, Vertrags- und Abschlussfreiheit, Formfreiheit vs. Schriftform des § 2 I TVöD (nur deklaratorisch!), Nachweisgesetz, Nebenabreden (§ 2 III TVöD – konstitutive Schriftform) und Vertragsänderung.",
  start: "start",
  stations: [
    { id: "einigung", label: "Einigung" },
    { id: "form", label: "Form" },
    { id: "inhalt", label: "Inhalt" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Vertrag wirksam",
    neg: "Ergebnis: kein wirksamer Vertrag",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "einigung",
      kind: "frage",
      norm: "§§ 145 ff. BGB",
      title: "Haben sich die Parteien geeinigt (Angebot und Annahme)?",
      def: "Das Zustandekommen des Arbeitsvertrages folgt den <b>allgemeinen Regeln des Privatrechts</b>: <b>zwei übereinstimmende Willenserklärungen</b> – Angebot und Annahme (§§ 145 ff. BGB).<br><br><b>Vertragstheorie (h. M.):</b> Das Arbeitsverhältnis ist das Rechtsverhältnis, das zwischen Arbeitnehmer und Arbeitgeber <b>aufgrund des Arbeitsvertrages</b> entsteht. (Mindermeinung „Eingliederungstheorie“: Begründung erst durch Eingliederung in den Betrieb.)<br><br><b>Abschlussfreiheit:</b> Auf den Abschluss besteht grundsätzlich kein Rechtsanspruch. Schon mit Aufnahme von <b>Vertragsverhandlungen</b> entsteht aber ein vertragsähnliches Vertrauensverhältnis – bei Pflichtverletzung drohen Schadensersatzansprüche (vorvertragliche Pflichten, c.i.c.).",
      hint: "Allgemeine Rechtsgeschäftslehre gilt: Geschäftsfähigkeit (§§ 104 ff. BGB), Stellvertretung (§§ 164 ff. BGB), Anfechtung (§§ 119 ff., 123 BGB) – Grundlagen aus dem Privatrecht (Modul 2) anwenden.",
      options: [
        { label: "Ja, übereinstimmende Willenserklärungen", next: "q_form", tone: "pos" },
        { label: "Nein, keine Einigung", next: "e_kein_vertrag", tone: "neg" }
      ]
    },

    q_form: {
      station: "form",
      kind: "frage",
      norm: "§ 2 I TVöD / § 105 GewO",
      title: "Wurde der Arbeitsvertrag nur mündlich geschlossen – ist das schädlich?",
      def: "<b>Grundsatz der Formfreiheit</b> (§ 105 GewO): Der Arbeitsvertrag kann mündlich, schriftlich oder durch schlüssiges Verhalten geschlossen werden.<br><br><b>§ 2 I TVöD:</b> „Der Arbeitsvertrag wird schriftlich abgeschlossen.“ – Diese Vorschrift ist nach h. M. nur <b>DEKLARATORISCH</b> (Beweissicherung/Dokumentation), <b>nicht konstitutiv</b>. Ein Verstoß macht den Vertrag NICHT unwirksam (Umkehrschluss aus § 2 III TVöD, der für Nebenabreden Wirksamkeit ausdrücklich von der Schriftform abhängig macht).<br><br><b>Konstitutive Schriftform gilt dagegen für:</b><br>• die <b>Befristungsabrede</b> (§ 14 IV TzBfG – eigenes Schema „Befristung“),<br>• <b>Nebenabreden</b> (§ 2 III TVöD),<br>• Kündigung und Auflösungsvertrag (§ 623 BGB).",
      options: [
        { label: "Unbefristeter Vertrag, nur mündlich – trotzdem wirksam", next: "q_nachweis", tone: "pos" },
        { label: "Es geht um eine BEFRISTUNG ohne Schriftform", next: "e_befristung_form", tone: "warn" },
        { label: "Schriftlich geschlossen", next: "q_nachweis", tone: "pos" }
      ]
    },

    q_nachweis: {
      station: "form",
      kind: "frage",
      norm: "§ 2 NachwG",
      title: "Hat der Arbeitgeber die Niederschrift nach dem Nachweisgesetz ausgehändigt?",
      def: "Nach § 2 I NachwG ist der Arbeitgeber verpflichtet, dem Arbeitnehmer eine <b>Niederschrift über die wesentlichen Vertragsbedingungen</b> auszuhändigen (Name/Anschrift der Parteien, Beginn, Arbeitsort, Tätigkeit, Entgelt, Arbeitszeit, Urlaub, Kündigungsfristen, Hinweis auf Tarifverträge/Dienstvereinbarungen u. a.).<br><br><b>Funktion:</b> Beweiserleichterung für den Arbeitnehmer im Streitfall. Auf die Verpflichtung kann nur in Ausnahmefällen verzichtet werden (§ 2 IV NachwG).<br><br><b>Wichtig:</b> Der Nachweis ist <b>keine Wirksamkeitsvoraussetzung</b> – auch ohne Niederschrift besteht der Arbeitsvertrag. Der Verstoß kann aber Schadensersatzansprüche und (seit 2022) ein Bußgeld auslösen.",
      options: [
        { label: "Ja, Niederschrift ausgehändigt", next: "q_nebenabrede", tone: "pos" },
        { label: "Nein – Vertrag bleibt trotzdem wirksam", next: "q_nebenabrede", tone: "warn" }
      ]
    },

    q_nebenabrede: {
      station: "inhalt",
      kind: "frage",
      norm: "§ 2 III TVöD",
      title: "Wurde (auch) eine Nebenabrede getroffen – und ist sie schriftlich?",
      def: "<b>Nebenabreden</b> = Abmachungen zwischen Arbeitgeber und Beschäftigten, die sich <b>nicht auf die beiderseitigen Hauptpflichten</b> (Arbeitsleistung und Entgeltzahlung) beziehen.<br><br><b>Beispiele:</b> Verkürzung der Probezeit, Fahrtkostenzuschuss Wohnung–Arbeitsstätte, Rückzahlungsverpflichtung für Ausbildungskosten.<br><br><b>§ 2 III TVöD:</b> Nebenabreden sind <b>nur wirksam, wenn sie schriftlich vereinbart werden</b> – hier ist die Schriftform KONSTITUTIV (anders als beim Arbeitsvertrag selbst, § 2 I TVöD). Sie können ggf. gesondert gekündigt werden, wenn dies vereinbart ist (vgl. Muster-Arbeitsvertrag: zwei Wochen zum Monatsschluss).",
      options: [
        { label: "Nebenabrede schriftlich vereinbart", next: "q_inhalt", tone: "pos" },
        { label: "Nebenabrede nur mündlich", next: "e_nebenabrede_unwirksam", tone: "neg" },
        { label: "Keine Nebenabrede", next: "q_inhalt", tone: "neutral" }
      ]
    },

    q_inhalt: {
      station: "inhalt",
      kind: "frage",
      norm: "§ 2 TVöD / Muster-Arbeitsvertrag",
      title: "Welchen Inhalt hat der Arbeitsvertrag im öffentlichen Dienst typischerweise?",
      def: "<b>Inhaltsfreiheit:</b> Der Inhalt kann frei vereinbart werden – <b>vorbehaltlich</b> anzuwendender kollektivrechtlicher Regelungen (TVöD!). Wegen der dynamischen Bezugnahme ist der Arbeitsvertrag im öD kurz; typischer Aufbau des VKA-Musters:<br>• § 1: Einstellung ab … auf unbestimmte Zeit, Voll-/Teilzeit; Pflicht zu Sonn-/Feiertags-, Schicht-, Mehrarbeit bei dienstlicher Notwendigkeit,<br>• § 2: <b>Bezugnahmeklausel</b> („bestimmt sich nach dem TVöD … in der jeweils geltenden Fassung einschließlich TVÜ-VKA“) mit Sparte (TVöD-V …),<br>• § 3: Probezeit sechs Monate (§ 2 IV TVöD),<br>• § 4: <b>Eingruppierung</b> in Entgeltgruppe … (nur deklaratorische Angabe – es gilt die Tarifautomatik!),<br>• § 5: Beendigung ohne Kündigung bei Regelaltersgrenze/Erwerbsminderung (§ 33 TVöD),<br>• § 6: Nebenabreden.<br><br><b>Änderung des Vertrags:</b> durch <b>Änderungsvertrag</b> (einvernehmlich) oder <b>Änderungskündigung</b> (Kündigung verbunden mit Angebot geänderter Bedingungen).",
      options: [
        { label: "Verstanden – Vertrag wirksam zustande gekommen", next: "e_wirksam", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§§ 145 ff., 611a BGB, § 2 TVöD",
      title: "Arbeitsvertrag wirksam zustande gekommen",
      text: "Angebot und Annahme liegen vor; Formmängel stehen nicht entgegen (Schriftform des § 2 I TVöD ist nur deklaratorisch). Das Arbeitsverhältnis ist begründet – mit den Hauptpflichten Arbeitsleistung gegen Entgelt (§ 611a BGB) und den Nebenpflichten (Treuepflicht des Beschäftigten, Fürsorgepflicht des Arbeitgebers).\n\nDenke in der Klausur an die Folgethemen: Probezeit (§ 2 IV TVöD), Eingruppierung kraft Tarifautomatik (§ 12 TVöD-VKA), Nachweis nach NachwG."
    },

    e_kein_vertrag: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 145 ff. BGB",
      title: "Kein Vertrag – keine Einigung",
      text: "Ohne übereinstimmende Willenserklärungen kommt kein Arbeitsvertrag zustande. Zu prüfen bleibt:\n\n• Wurde die Arbeit trotzdem tatsächlich aufgenommen, gelten die Grundsätze des fehlerhaften (faktischen) Arbeitsverhältnisses – für die Vergangenheit wird das Arbeitsverhältnis wie ein wirksames behandelt (Vergütung!), für die Zukunft kann sich jede Partei jederzeit lösen.\n• Ansprüche aus vorvertraglichem Schuldverhältnis (c.i.c., §§ 280 I, 311 II, 241 II BGB), z. B. bei abgebrochenen Vertragsverhandlungen oder falschen Auskünften."
    },

    e_befristung_form: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "warn",
      norm: "§ 14 IV, § 16 TzBfG",
      title: "Befristung ohne Schriftform: Vertrag wirksam, aber UNBEFRISTET",
      text: "Die BEFRISTUNGSABREDE bedarf zwingend der Schriftform (§ 14 IV TzBfG, § 126 II BGB – beide Unterschriften auf derselben Urkunde, VOR Vertragsbeginn und Arbeitsaufnahme).\n\nFehlt die Schriftform, ist NICHT der ganze Vertrag nichtig (§ 125 BGB wird verdrängt): Nach der spezielleren Regelung des § 16 S. 1 TzBfG gilt der Arbeitsvertrag als auf unbestimmte Zeit geschlossen. Zur Beendigung bedarf es dann einer Kündigung.\n\nVertiefung im eigenen Schema „Befristung des Arbeitsvertrags (TzBfG)\"."
    },

    e_nebenabrede_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 2 III TVöD",
      title: "Nebenabrede unwirksam – Hauptvertrag bleibt bestehen",
      text: "Die nur mündlich getroffene Nebenabrede ist unwirksam – § 2 III TVöD macht die Wirksamkeit ausdrücklich von der Schriftform abhängig (konstitutives Formerfordernis).\n\nDer Arbeitsvertrag im Übrigen bleibt wirksam; nur die Nebenabrede entfaltet keine Rechtswirkung. Der Beschäftigte kann aus ihr keine Ansprüche (z. B. auf den mündlich zugesagten Fahrtkostenzuschuss) herleiten."
    }
  },

  routers: {}
});
