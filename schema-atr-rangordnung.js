/*
 * Prüfungsschema: Rangordnung der Rechtsquellen und Normenkollision
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 1.3 (Rechtsgrundlagen) und 1.4
 *    (Rangprinzip, Günstigkeitsprinzip, Spezialitäts-/Ordnungs-/Ablöseprinzip)
 *  - Lehrplanung FS III OLE 1 ("Normenkollisionen auflösen können")
 *  - Gesetze: TVG § 4 III (Öffnungsklausel), TVöD § 23 II 3 (Beispiel)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-rangordnung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Grundlagen des Arbeits- und Tarifrechts",
  title: "Rangordnung und Günstigkeitsprinzip (Normenkollision)",
  description: "Mehrere Rechtsquellen regeln denselben Gegenstand (Gesetz, Tarifvertrag, Betriebs-/Dienstvereinbarung, Arbeitsvertrag): Auflösung über Rangprinzip, Günstigkeitsprinzip (objektiver Maßstab, Öffnungsklausel § 4 III TVG) und Spezialitäts-/Ablöseprinzip.",
  start: "start",
  stations: [
    { id: "kollision", label: "Kollision" },
    { id: "rang", label: "Rangprinzip" },
    { id: "guenstig", label: "Günstigkeit" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: anwendbare Norm gefunden",
    neg: "Ergebnis: Regelung unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "kollision",
      kind: "frage",
      norm: "Rechtsquellenlehre",
      title: "Regeln mehrere Rechtsquellen denselben Sachverhalt (Normenkollision)?",
      def: "<b>Rechtsquellen des Arbeitsrechts</b> (von oben nach unten):<br>1. <b>EU-Recht</b> (EUV, AEUV, Verordnungen, Richtlinien)<br>2. <b>Grundgesetz</b>/Landesverfassung (insb. Art. 2, 3, 5, 6, 9 III, 12 GG; Kompetenz: Art. 74 I Nr. 12 GG – konkurrierende Gesetzgebung)<br>3. <b>Gesetze</b> (BGB, KSchG, BUrlG, TzBfG, ArbZG, MuSchG, EFZG, AGG, TVG …) und Rechtsverordnungen<br>4. <b>Tarifverträge</b> (Verbands-/Flächentarifvertrag wie TVöD/TV-L oder Firmen-/Haustarifvertrag)<br>5. <b>Betriebs-/Dienstvereinbarungen</b> (zwischen Arbeitgeber/Dienststelle und Betriebs-/Personalrat, vgl. § 76 LPersVG)<br>6. <b>Arbeitsvertrag</b><br>7. <b>Betriebliche Übung</b><br>8. <b>Direktionsrecht</b> des Arbeitgebers (§ 106 GewO)<br><br>Eine <b>Kollision</b> liegt vor, wenn mindestens zwei dieser Quellen denselben Regelungsgegenstand (z. B. Urlaubsdauer, Kündigungsfrist) unterschiedlich regeln.",
      options: [
        { label: "Ja, mehrere Regelungen zum selben Gegenstand", next: "q_rangstufe", tone: "pos" },
        { label: "Nein, nur eine Regelung einschlägig", next: "e_keine_kollision", tone: "neutral" }
      ]
    },

    q_rangstufe: {
      station: "rang",
      kind: "frage",
      norm: "Rangprinzip",
      title: "Stehen die kollidierenden Regelungen auf verschiedenen Rangstufen?",
      def: "<b>Rangprinzip (Normenpyramide):</b> Von mehreren Normen, die einen Sachverhalt regeln, gilt grundsätzlich die <b>höherrangige</b> Norm.<br><br><b>Beispiele:</b> Ein Arbeitsvertrag darf nicht gegen zwingendes Gesetz verstoßen (Lohn unter dem MiLoG-Mindestlohn oder Arbeitszeit über der ArbZG-Grenze = unwirksam). Ein Gesetz darf nicht gegen GG oder EU-Recht verstoßen.<br><br><b>Gleiche Rangstufe</b> (z. B. zwei Tarifverträge, zwei Betriebsvereinbarungen): Dann hilft das Rangprinzip nicht weiter → Spezialitäts- und Ordnungs-/Ablöseprinzip.",
      options: [
        { label: "Verschiedene Rangstufen (z. B. Gesetz ↔ Arbeitsvertrag)", next: "q_zwingend", tone: "pos" },
        { label: "Gleiche Rangstufe (z. B. zwei Tarifverträge)", next: "q_spezialitaet", tone: "warn" }
      ]
    },

    q_zwingend: {
      station: "rang",
      kind: "frage",
      norm: "Rangprinzip",
      title: "Zwischenergebnis nach dem Rangprinzip bilden – weicht die NIEDRIGERE Norm ab?",
      def: "<b>Prüfungsreihenfolge (Merksatz aus dem Skript):</b> Immer ZUERST das Rangprinzip anwenden und ein Zwischenergebnis bilden. ERST DANN prüfen, ob das Günstigkeitsprinzip zu einem anderen Endergebnis führt.<br><br>Weicht die niedrigere Regelung von der höheren ab, ist zu unterscheiden:<br>• Abweichung <b>zugunsten</b> des Arbeitnehmers → Günstigkeitsprinzip kann die Abweichung retten,<br>• Abweichung <b>zulasten</b> des Arbeitnehmers → grundsätzlich unwirksam, es sei denn, die höherrangige Norm ist <b>dispositiv</b> (abdingbar) oder enthält eine <b>Öffnungsklausel</b>.",
      options: [
        { label: "Niedrigere Norm ist für den AN GÜNSTIGER", next: "q_guenstiger", tone: "pos" },
        { label: "Niedrigere Norm ist für den AN UNGÜNSTIGER", next: "q_oeffnung", tone: "warn" },
        { label: "Kein inhaltlicher Widerspruch", next: "e_keine_kollision", tone: "neutral" }
      ]
    },

    q_guenstiger: {
      station: "guenstig",
      kind: "frage",
      norm: "Günstigkeitsprinzip",
      title: "Ist die Regelung OBJEKTIV günstiger für den Arbeitnehmer?",
      def: "<b>Günstigkeitsprinzip</b> = aus der Rechtsprechung entwickelte, international anerkannte Kollisionsregel: Von mehreren anwendbaren Normen hat diejenige Vorrang, die für den Arbeitnehmer <b>objektiv am günstigsten</b> ist. Es durchbricht das Rangprinzip.<br><br><b>Objektiv</b> heißt: Es kommt NICHT auf die subjektive Sicht des einzelnen Arbeitnehmers an. Eine zweimonatige Kündigungsfrist ist objektiv besser als eine einmonatige – auch wenn der Arbeitnehmer schnell wechseln möchte, kann er sich nicht auf die kürzere berufen.<br><br><b>Beispiele:</b> Gesetz 4 Wochen Urlaub, Arbeitsvertrag 6 Wochen → Arbeitsvertrag gilt. Arbeitsvertrag 4 Wochen, Tarifvertrag 5 Wochen → Tarifvertrag gilt, die ungünstigere Vertragsklausel ist unwirksam.",
      options: [
        { label: "Ja, objektiv günstiger", next: "e_guenstiger", tone: "pos" },
        { label: "Nur subjektiv „günstiger“ (Einzelfallwunsch)", next: "e_subjektiv", tone: "neg" }
      ]
    },

    q_oeffnung: {
      station: "guenstig",
      kind: "frage",
      norm: "§ 4 III TVG",
      title: "Lässt eine Öffnungsklausel die ungünstigere Abweichung zu?",
      def: "Abweichungen vom <b>Tarifvertrag</b> zuungunsten des Arbeitnehmers sind nur zulässig, wenn der Tarifvertrag sie <b>ausdrücklich gestattet</b> – sog. <b>Öffnungsklausel</b> (§ 4 III TVG).<br><br><b>Beispiele für Öffnungsklauseln im TVöD:</b> § 6 IV TVöD (abweichende Arbeitszeitregelungen), § 23 II 3 TVöD (günstigere Ausgestaltung des Jubiläumsgeldes durch Betriebs-/Dienstvereinbarung).<br><br>Bei <b>Gesetzen</b> entsprechend: Abweichung zulasten des AN nur, wenn das Gesetz <b>tarifdispositiv</b> ist (z. B. § 13 I BUrlG: Abweichung von §§ 1, 2, 3 I BUrlG nur durch Tarifvertrag und nur, soweit der gesetzliche Mindestschutz nicht unterschritten wird; § 622 IV BGB: abweichende Kündigungsfristen durch Tarifvertrag).<br><br>In einer anwendbaren <b>Betriebs-/Dienstvereinbarung</b> dürfen tariflich geregelte Arbeitsbedingungen grundsätzlich nicht geändert werden.",
      options: [
        { label: "Ja, Öffnungsklausel/tarifdispositives Recht", next: "e_oeffnung", tone: "pos" },
        { label: "Nein, keine Öffnungsklausel", next: "e_unwirksam", tone: "neg" }
      ]
    },

    q_spezialitaet: {
      station: "guenstig",
      kind: "frage",
      norm: "Spezialitäts-/Ablöseprinzip",
      title: "Gleichrangige Normen: Wie wird die Kollision aufgelöst?",
      def: "Bei Rechtsquellen <b>gleichen Rangs</b> gilt das Günstigkeitsprinzip NICHT. Stattdessen:<br><br><b>Spezialitätsgrundsatz:</b> Die Rechtsquelle geht vor, die nach Weite und Tiefe ihres Anwendungsbereichs <b>spezieller</b> auf den Sachverhalt passt.<br>• Haustarifvertrag geht dem Flächentarifvertrag vor.<br>• Spezielle Kündigungsschutzvorschriften (Schwangere § 17 MuSchG, Elternzeit § 18 BEEG) gehen den allgemeinen Kündigungsregeln vor.<br><br><b>Ordnungs-/Ablöseprinzip:</b> Die <b>neuere</b> Regelung verdrängt die ältere gleichen Rangs – typisch bei Tarifverträgen: Der neue Tarifvertrag löst den alten ab (Ausnahme: der neue TV verweist auf fortgeltende Passagen des alten).",
      options: [
        { label: "Speziellere Norm anwenden", next: "e_speziell", tone: "pos" },
        { label: "Neuere Norm anwenden (Ablösung)", next: "e_abloesung", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_keine_kollision: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "frei",
      norm: "Rechtsquellenlehre",
      title: "Keine Kollision – einschlägige Norm unmittelbar anwenden",
      text: "Regelt nur eine Rechtsquelle den Sachverhalt (oder stimmen die Regelungen inhaltlich überein), stellt sich kein Kollisionsproblem. Die einschlägige Norm ist anzuwenden.\n\nDenke daran: Auch der arbeitsrechtliche Gleichbehandlungsgrundsatz (Gewohnheitsrecht) kann Ansprüche begründen – der Arbeitgeber darf bei selbst geschaffenen Regelungen (z. B. freiwilliges Weihnachtsgeld) einzelne Arbeitnehmer einer vergleichbaren Gruppe nicht willkürlich schlechter stellen und keine sachfremden Gruppen bilden."
    },

    e_guenstiger: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Günstigkeitsprinzip",
      title: "Die günstigere (niederrangige) Regelung gilt",
      text: "Das Günstigkeitsprinzip durchbricht das Rangprinzip: Die für den Arbeitnehmer objektiv günstigere Regelung hat Vorrang, auch wenn sie auf einer niedrigeren Rangstufe steht (z. B. übertariflicher Urlaub im Arbeitsvertrag).\n\nKlausuraufbau: (1) Rangprinzip → Zwischenergebnis, (2) Günstigkeitsvergleich (objektiv, bezogen auf den Sachgegenstand) → Endergebnis."
    },

    e_subjektiv: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Günstigkeitsprinzip",
      title: "Kein Vorrang – Günstigkeit ist objektiv zu bestimmen",
      text: "Der Günstigkeitsvergleich erfolgt nach objektivem Maßstab, nicht nach den Wünschen des Einzelnen. Die längere Kündigungsfrist, der höhere Urlaub, das höhere Entgelt sind objektiv günstiger – der Arbeitnehmer kann sich nicht auf die objektiv ungünstigere Norm berufen, selbst wenn sie ihm im Einzelfall gelegen käme.\n\nEs bleibt beim Ergebnis des Rangprinzips: Die höherrangige Norm gilt."
    },

    e_oeffnung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 4 III TVG",
      title: "Abweichung wirksam – Öffnungsklausel greift",
      text: "Der Tarifvertrag lässt die Abweichung ausdrücklich zu (Öffnungsklausel, § 4 III TVG) bzw. das Gesetz ist (tarif-)dispositiv. Die abweichende, an sich ungünstigere Regelung ist deshalb wirksam und anzuwenden.\n\nAber Grenze beachten: Gesetzlicher MINDESTSCHUTZ (z. B. Mindesturlaub §§ 1, 3 BUrlG, § 13 BUrlG; Entgeltfortzahlung § 12 EFZG) kann auch durch Tarifvertrag nicht unterschritten werden – nur zugunsten der Beschäftigten darf abgewichen werden."
    },

    e_unwirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Rangprinzip, § 4 III TVG",
      title: "Abweichende Regelung unwirksam – höherrangige Norm gilt",
      text: "Ohne Öffnungsklausel ist jede Abweichung vom anwendbaren Tarifvertrag (bzw. vom zwingenden Gesetz) zuungunsten des Arbeitnehmers unwirksam. An die Stelle der unwirksamen Abrede tritt die höherrangige Regelung (Tarifnorm/Gesetz).\n\nBeispiele: Arbeitsvertraglicher Lohn unter dem MiLoG-Mindestlohn, Arbeitszeit über der ArbZG-Grenze, weniger Urlaub als der Tarifvertrag vorsieht – jeweils unwirksam; es gilt die höherrangige Norm."
    },

    e_speziell: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Spezialitätsgrundsatz",
      title: "Die speziellere Norm geht vor",
      text: "Bei gleichrangigen Normen verdrängt die speziellere die allgemeinere Regelung (lex specialis derogat legi generali). Der Haustarifvertrag geht dem Flächentarifvertrag vor; besondere Kündigungsschutznormen gehen den allgemeinen vor.\n\nDas Günstigkeitsprinzip spielt auf gleicher Rangstufe keine Rolle."
    },

    e_abloesung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Ordnungs-/Ablöseprinzip",
      title: "Die neuere Norm löst die ältere ab",
      text: "Die jüngere Regelung gleichen Rangs verdrängt die ältere (Ablöseprinzip) – auch dann, wenn die neue Regelung für den Arbeitnehmer ungünstiger ist. Typischer Fall: Ein neuer Tarifvertrag tritt an die Stelle des alten.\n\nAusnahme: Der neue Tarifvertrag ordnet die Fortgeltung einzelner Passagen des alten ausdrücklich an."
    }
  },

  routers: {}
});
