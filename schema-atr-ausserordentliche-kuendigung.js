/*
 * Prüfungsschema: Außerordentliche Kündigung (§ 626 BGB, § 34 II TVöD)
 * Fach: Arbeits- und Tarifrecht (Fachstudium 3)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6 ATR, FS III):
 *  - Lehrplanung FS III PLE 3 ("Kündigungsgründe unterscheiden können")
 *  - "ATR_3. EA_Skript_2023_2024_V06" Kap. 4.11 (Selbstbeurlaubung als
 *    wichtiger Grund, BAG v. 20.05.2021 - 2 AZR 457/20)
 *  - Gesetze: BGB § 626 (Volltext geprüft), § 623; TVöD § 34 II
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "atr-ausserordentliche-kuendigung",
  subject: "Arbeits- und Tarifrecht",
  fs: ["FS3"],
  area: "Beendigung des Arbeitsverhältnisses",
  title: "Außerordentliche Kündigung (§ 626 BGB)",
  description: "Fristlose Kündigung aus wichtigem Grund: zweistufige Prüfung (wichtiger Grund „an sich\" und Interessenabwägung im Einzelfall), Abmahnungserfordernis, Zwei-Wochen-Frist (§ 626 II BGB), Schriftform, Personalratsbeteiligung und Besonderheiten bei Unkündbaren (§ 34 II TVöD).",
  start: "start",
  stations: [
    { id: "erklaerung", label: "Erklärung" },
    { id: "grund", label: "Wichtiger Grund" },
    { id: "abwaegung", label: "Abwägung" },
    { id: "frist", label: "2-Wochen-Frist" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Kündigung wirksam",
    neg: "Ergebnis: Kündigung unwirksam",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "erklaerung",
      kind: "frage",
      norm: "§§ 623, 130 BGB",
      title: "Formwirksame Kündigungserklärung mit Zugang?",
      def: "Auch die außerordentliche Kündigung ist eine einseitige, <b>empfangsbedürftige Willenserklärung</b>:<br>• <b>Schriftform</b> zwingend (§ 623 BGB, elektronische Form ausgeschlossen),<br>• wirksam mit <b>Zugang</b> (§ 130 I BGB),<br>• der Kündigungsgrund muss NICHT in der Erklärung stehen – aber: Auf Verlangen muss der Kündigende den Grund <b>unverzüglich schriftlich mitteilen</b> (§ 626 II 3 BGB).<br><br>Vor der Kündigung ist der <b>Personalrat</b> nach dem LPersVG zu beteiligen (bei außerordentlicher Kündigung: Anhörung) – sonst Unwirksamkeit.",
      options: [
        { label: "Ja, schriftlich, zugegangen, Personalrat beteiligt", next: "q_grund_ansich", tone: "pos" },
        { label: "Formmangel / Personalrat übergangen", next: "e_formnichtig", tone: "neg" }
      ]
    },

    q_grund_ansich: {
      station: "grund",
      kind: "frage",
      norm: "§ 626 I BGB (1. Stufe)",
      title: "Liegt ein wichtiger Grund „an sich\" vor?",
      text: "§ 626 I BGB: Das Dienstverhältnis kann von jedem Vertragsteil aus wichtigem Grund ohne Einhaltung einer Kündigungsfrist gekündigt werden, wenn Tatsachen vorliegen, auf Grund derer dem Kündigenden unter Berücksichtigung aller Umstände des Einzelfalles und unter Abwägung der Interessen beider Vertragsteile die Fortsetzung des Dienstverhältnisses bis zum Ablauf der Kündigungsfrist oder bis zu der vereinbarten Beendigung des Dienstverhältnisses nicht zugemutet werden kann.",
      def: "<b>Zweistufige Prüfung (BAG st. Rspr.):</b><br><b>1. Stufe:</b> Ist der Sachverhalt <b>„an sich“</b> – d. h. typischerweise, ohne die Einzelfallumstände – geeignet, einen wichtigen Grund abzugeben?<br><br><b>Anerkannte Fallgruppen:</b><br>• <b>beharrliche Arbeitsverweigerung</b>,<br>• <b>eigenmächtiger Urlaubsantritt / Selbstbeurlaubung</b> (BAG v. 20.05.2021 – 2 AZR 457/20),<br>• Straftaten zulasten des Arbeitgebers (Diebstahl, Unterschlagung, <b>Arbeitszeitbetrug</b>, Spesenbetrug),<br>• grobe Beleidigungen, Tätlichkeiten, sexuelle Belästigung,<br>• <b>Vortäuschen der Arbeitsunfähigkeit</b>,<br>• Annahme von Schmiergeldern (im öD besonders gravierend: Vorteilsannahme §§ 331 ff. StGB).<br><br><b>Kein</b> wichtiger Grund „an sich“: bloße Schlechtleistung, einmalige Unpünktlichkeit, Krankheit als solche.",
      options: [
        { label: "Ja, Fallgruppe einschlägig", next: "q_abmahnung", tone: "pos" },
        { label: "Nein, kein derartiger Sachverhalt", next: "e_kein_grund", tone: "neg" }
      ]
    },

    q_abmahnung: {
      station: "abwaegung",
      kind: "frage",
      norm: "Ultima-ratio-Grundsatz",
      title: "War eine vorherige Abmahnung erforderlich – und liegt sie vor?",
      def: "Die außerordentliche Kündigung ist <b>ultima ratio</b>. Bei <b>steuerbarem Verhalten</b> ist grundsätzlich zunächst eine <b>Abmahnung</b> erforderlich (Prognoseprinzip: künftige Vertragstreue soll ermöglicht werden).<br><br><b>Abmahnung</b> = Rüge einer konkreten Pflichtverletzung mit der Aufforderung zu vertragsgemäßem Verhalten und der <b>Androhung arbeitsrechtlicher Konsequenzen</b> für den Wiederholungsfall (Hinweis-, Rüge- und Warnfunktion).<br><br><b>Entbehrlich</b> ist die Abmahnung, wenn<br>• eine Verhaltensänderung in Zukunft <b>nicht zu erwarten</b> ist oder<br>• die Pflichtverletzung <b>so schwer</b> wiegt, dass ihre Hinnahme dem Arbeitgeber offensichtlich unzumutbar ist (z. B. Diebstahl, Tätlichkeit).",
      options: [
        { label: "Abmahnung lag vor / war entbehrlich", next: "q_abwaegung", tone: "pos" },
        { label: "Abmahnung erforderlich, aber nicht erfolgt", next: "e_abmahnung_fehlt", tone: "neg" }
      ]
    },

    q_abwaegung: {
      station: "abwaegung",
      kind: "frage",
      norm: "§ 626 I BGB (2. Stufe)",
      title: "Interessenabwägung: Ist die Fortsetzung bis zum Fristablauf unzumutbar?",
      def: "<b>2. Stufe:</b> Umfassende <b>Interessenabwägung im Einzelfall</b> – dem Kündigenden darf die Fortsetzung des Arbeitsverhältnisses <b>auch nur bis zum Ablauf der ordentlichen Kündigungsfrist</b> nicht zumutbar sein.<br><br><b>Abwägungsgesichtspunkte:</b><br>• Schwere und Folgen der Pflichtverletzung, Grad des Verschuldens,<br>• Dauer und störungsfreier Verlauf des Arbeitsverhältnisses,<br>• Lebensalter, Unterhaltspflichten, Wiederholungsgefahr,<br>• mildere Mittel: Abmahnung, Versetzung, <b>ordentliche statt außerordentliche</b> Kündigung.<br><br><b>Bei „Unkündbaren“ (§ 34 II TVöD):</b> Da die ordentliche Kündigung ausgeschlossen ist, kommt bei dringenden betrieblichen Gründen ausnahmsweise die <b>außerordentliche Kündigung mit notwendiger Auslauffrist</b> (entsprechend der fiktiven ordentlichen Frist) in Betracht – an ihre Rechtfertigung stellt das BAG erheblich strengere Anforderungen.",
      options: [
        { label: "Ja, Unzumutbarkeit überwiegt", next: "q_frist", tone: "pos" },
        { label: "Nein, mildere Mittel zumutbar", next: "e_abwaegung", tone: "neg" }
      ]
    },

    q_frist: {
      station: "frist",
      kind: "frage",
      norm: "§ 626 II BGB",
      title: "Ist die Zwei-Wochen-Frist gewahrt?",
      text: "§ 626 II BGB: Die Kündigung kann nur innerhalb von zwei Wochen erfolgen. Die Frist beginnt mit dem Zeitpunkt, in dem der Kündigungsberechtigte von den für die Kündigung maßgebenden Tatsachen Kenntnis erlangt.",
      def: "<b>Ausschlussfrist:</b> Die außerordentliche Kündigung muss dem Empfänger <b>innerhalb von zwei Wochen</b> ZUGEHEN.<br><br>• Fristbeginn: <b>sichere und umfassende Kenntnis</b> des Kündigungsberechtigten (beim Bürgermeister/der Personalstelle) von den maßgebenden Tatsachen,<br>• bei Aufklärungsmaßnahmen (Anhörung des Beschäftigten, Ermittlungen): Fristbeginn erst nach deren – zügig durchgeführtem – Abschluss,<br>• Fristberechnung: §§ 187 I, 188 II BGB.<br><br>Nach Fristablauf ist NUR die außerordentliche Kündigung wegen dieses Sachverhalts ausgeschlossen – eine ordentliche verhaltensbedingte Kündigung (falls nicht § 34 II TVöD entgegensteht) bleibt möglich.",
      options: [
        { label: "Ja, binnen zwei Wochen ab Kenntnis zugegangen", next: "e_wirksam", tone: "pos" },
        { label: "Nein, Frist versäumt", next: "e_frist", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_wirksam: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 626 BGB",
      title: "Außerordentliche Kündigung wirksam – Arbeitsverhältnis endet sofort",
      text: "Es liegt ein wichtiger Grund „an sich\" vor, die Interessenabwägung geht zulasten der/des Beschäftigten aus (Abmahnung lag vor oder war entbehrlich), und die Kündigung ist formwirksam innerhalb der Zwei-Wochen-Frist des § 626 II BGB zugegangen. Das Arbeitsverhältnis endet mit Zugang der fristlosen Kündigung.\n\nAuch hier gilt: Angriff nur binnen drei Wochen mit der Kündigungsschutzklage (§§ 13, 4, 7 KSchG).\n\nFolgeprobleme für die Klausur: Sperrzeit beim Arbeitslosengeld (§ 159 I Nr. 1 SGB III), keine Jahressonderzahlung bei Ausscheiden vor dem 1. Dezember (§ 20 I TVöD), Urlaubsabgeltung (§ 7 IV BUrlG), Arbeitspapiere und Zeugnis (§ 35 TVöD)."
    },

    e_formnichtig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 623 BGB, LPersVG",
      title: "Kündigung unwirksam – Form- oder Beteiligungsmangel",
      text: "Ohne Schriftform (§ 623 BGB – eigenhändige Unterschrift, keine E-Mail!) oder ohne ordnungsgemäße Beteiligung des Personalrats nach dem LPersVG ist die außerordentliche Kündigung unwirksam.\n\nBeachte: Der Formmangel kann nicht durch Nachholung geheilt werden – erforderlich ist eine NEUE formwirksame Kündigung. Für diese läuft die Zwei-Wochen-Frist des § 626 II BGB weiter; ist sie inzwischen abgelaufen, scheidet die außerordentliche Kündigung wegen dieses Vorfalls aus."
    },

    e_kein_grund: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 626 I BGB",
      title: "Kein wichtiger Grund – Kündigung unwirksam",
      text: "Der Sachverhalt ist schon „an sich\" nicht geeignet, einen wichtigen Grund abzugeben (bloße Schlechtleistung, einmalige geringfügige Verspätung, Krankheit als solche). Die außerordentliche Kündigung ist unwirksam.\n\nDem Arbeitgeber bleibt ggf. die ordentliche (verhaltens- oder personenbedingte) Kündigung nach vorheriger Abmahnung – Schema „Ordentliche Kündigung\".\n\nEine unwirksame außerordentliche Kündigung kann nach § 140 BGB in eine ordentliche Kündigung umgedeutet werden, wenn der Wille zur unbedingten Beendigung erkennbar ist und die Voraussetzungen der ordentlichen Kündigung (einschließlich Personalratsbeteiligung für DIESE Kündigungsart!) vorliegen."
    },

    e_abmahnung_fehlt: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Ultima-ratio-Grundsatz",
      title: "Fehlende Abmahnung – Kündigung unverhältnismäßig",
      text: "Bei steuerbarem Fehlverhalten ist die Abmahnung das mildere, vorrangige Mittel. Ohne sie ist die außerordentliche Kündigung unverhältnismäßig und damit unwirksam, wenn eine Verhaltensänderung zu erwarten gewesen wäre und die Pflichtverletzung nicht so schwer wiegt, dass jede Hinnahme ausscheidet.\n\nDer Arbeitgeber sollte jetzt förmlich abmahnen (Dokumentation in der Personalakte, Beteiligungsrechte beachten) – im Wiederholungsfall trägt die Kündigung dann eher."
    },

    e_abwaegung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 626 I BGB",
      title: "Interessenabwägung geht zugunsten der/des Beschäftigten aus",
      text: "Unter Berücksichtigung aller Umstände des Einzelfalls (lange beanstandungsfreie Beschäftigungszeit, geringes Verschulden, keine Wiederholungsgefahr, Unterhaltspflichten) ist dem Arbeitgeber die Fortsetzung zumindest bis zum Ablauf der ordentlichen Kündigungsfrist zumutbar. Die außerordentliche Kündigung ist unwirksam.\n\nIn Betracht kommt stattdessen die ordentliche Kündigung (falls nicht durch § 34 II TVöD ausgeschlossen) oder – bei Unkündbaren aus dringenden betrieblichen Gründen – ausnahmsweise die außerordentliche Kündigung mit notwendiger Auslauffrist."
    },

    e_frist: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 626 II BGB",
      title: "Zwei-Wochen-Frist versäumt – außerordentliche Kündigung ausgeschlossen",
      text: "Die Kündigung ist nicht innerhalb von zwei Wochen ab sicherer Kenntnis des Kündigungsberechtigten von den maßgebenden Tatsachen zugegangen (§ 626 II BGB, Ausschlussfrist). Sie ist allein deshalb unwirksam – auf das Gewicht des Kündigungsgrundes kommt es nicht mehr an.\n\nDer Gesetzgeber unterstellt: Wer länger als zwei Wochen zuwartet, dem ist die Fortsetzung offenbar doch zumutbar.\n\nWegen desselben Sachverhalts bleibt nur die ordentliche Kündigung (soweit zulässig); bei Dauertatbeständen (fortdauernde Pflichtverletzung) beginnt die Frist allerdings immer wieder neu."
    }
  },

  routers: {}
});
