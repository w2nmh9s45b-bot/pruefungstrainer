/*
 * IK-Schema: Anerkennungs- und Kritikgespräch als Führungsinstrumente
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - GF_Anerkennungsgespraech_2022, GF_Kritikgespraech_2022 (je nach Neuberger,
 *    Das Mitarbeitergespräch), GF_Funktionen von Anerkennungs- und Kritikgespraechen
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-kritik-anerkennung",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Gesprächsführung & Führung",
  title: "Anerkennungs- & Kritikgespräch",
  description: "Zwei wertende Führungsinstrumente, ein Ziel: künftige Zusammenarbeit sichern. Die Anerkennungs-Regeln und die neun Kritik-Hinweise nach Neuberger – inklusive Sandwich-Falle.",
  start: "start",
  stations: [
    { id: "wahl", label: "Instrument" },
    { id: "kritik", label: "Kritik-Hinweise" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Gespräch geplant",
    neg: "Ergebnis: Fallstrick",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "wahl",
      kind: "frage",
      norm: "Wertende Gespräche",
      title: "Anerkennen oder kritisieren?",
      def: "In beiden Gesprächen werden Leistungen oder Verhaltensweisen eines Mitarbeiters/einer Mitarbeiterin zum Gegenstand einer <b>wertenden Stellungnahme</b> der Führungskraft. Beide erfüllen wichtige Funktionen: <b>Orientierung</b> (Woran bin ich?) und <b>Lernen</b> (Was soll ich fortführen/ändern?).",
      options: [
        { label: "Gute Leistung würdigen → Anerkennungsgespräch", next: "e_anerkennung", tone: "pos" },
        { label: "Fehlverhalten/Fehlleistung ansprechen → Kritikgespräch", next: "q_kritik", tone: "warn" },
        { label: "Kritik nett verpacken: Lob – Kritik – Lob?", next: "e_sandwich", tone: "neg" }
      ]
    },

    q_kritik: {
      station: "kritik",
      kind: "frage",
      norm: "Neuberger: 9 Hinweise",
      title: "Die neun Hinweise für das Kritikgespräch",
      def: "1. <b>Ziel klären</b>: Abreagieren oder langfristig produktive Zusammenarbeit sichern? Nur Letzteres rechtfertigt das Gespräch – und braucht die unverzerrten GRÜNDE des Fehlverhaltens.<br>2. <b>Positiven Kontakt herstellen</b>: entspannte Atmosphäre, entpersonalisieren („ein sachliches Problem lösen“), nicht auf die Folter spannen, nichts beschönigen.<br>3. <b>Von Tatsachen ausgehen</b>: keine Gerüchte; MA an der Tatsachenfindung beteiligen und ZUM REDEN bringen; Verhalten statt Person kritisieren („in Situation X keine Initiative gezeigt“).<br>4. <b>Klare Sprache</b>: nicht mehrdeutig, nicht übertrieben scharf, nicht schonungsvoll-unehrlich.<br>5. <b>Unter vier Augen</b>: öffentliche Kritik erzwingt Verteidigung und verhärtet die Fronten.<br>6. <b>Schonend</b>: Fehler lokalisieren, nicht generalisieren; wenige Kritikpunkte (sonst schaltet der MA ab).<br>7. <b>Konstruktiv</b>: Verbesserung anbieten, MA an der Lösungssuche beteiligen.<br>8. <b>Sachlich, nicht affektiv</b>: Wutausbrüche einschüchtern; ggf. entschuldigen; Schlussstrich ziehen können.<br>9. <b>Positiver Abschluss</b>: Vertrauen aussprechen – der letzte Eindruck haftet.",
      options: [
        { label: "Verstanden – Ergebnis anzeigen", next: "e_kritik", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_anerkennung: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Anerkennungsgespräch",
      title: "Anerkennung: sofort, konkret, auch für die Anstrengung",
      text: "Regeln aus dem Skript:\n\n• SOFORT anerkennen: Erwünschtes Verhalten wird eher wiederholt, wenn die Anerkennung zeitnah folgt.\n• Auch ANSTRENGUNG und guten Willen würdigen – besonders bei neuen Aufgaben, nicht nur das Resultat.\n• Auch wer nichts mehr hinzulernen muss, erwartet Anerkennung: Bleibt sie aus, wird das als Tadel gedeutet oder entmutigt.\n• KEIN anlassloses Lob – sonst entsteht der Verdacht: „Da will mich jemand ködern.“\n\nWarum „no news is good news“ ein Führungsfehler ist: Zu geizige Anerkennung verletzt die ORIENTIERUNGSFUNKTION (die MA wissen nicht, woran sie sind) und die LERNFUNKTION (das Gute wird nicht betont – war etwa etwas falsch?).\n\nHandwerk: die Feedback-Regeln (beschreibend, konkret, Ich-Botschaft) gelten auch fürs Loben."
    },

    e_kritik: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Kritikgespräch",
      title: "Kritik als kooperative Ursachensuche – nicht als Tribunal",
      text: "Der rote Faden der neun Neuberger-Hinweise: Wenn das Ziel die langfristig produktive und befriedigende Zusammenarbeit ist, wird Kritik zur GEMEINSAMEN Problemlösung – sachlich, unter vier Augen, auf Tatsachen gestützt, auf das Verhalten (nicht die Person) bezogen, dosiert, konstruktiv und mit positivem Abschluss.\n\nDie Hauptaufgabe der Führungskraft ist dabei paradox: den MA ZUM REDEN bringen – denn je mehr sie selbst spricht, desto weniger erfährt sie über die wahren Gründe. Und ohne Ursache keine wirksame Vermeidung.\n\nTypische Fehlbilder aus dem Skript: Leviten lesen, polterndes Übertönen der eigenen Unbehaglichkeit, Kritik über Umwege durchsickern lassen, so vorsichtig kritisieren, dass es niemand merkt – alles erkauft Augenblickserfolge mit Verhärtung, Fügsamkeit oder Resignation.\n\nVorbereitung und Rahmen wie beim Konfliktgespräch: Zeit VOR dem Gespräch und Zeit FÜR das Gespräch einplanen."
    },

    e_sandwich: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "Sandwich-Falle",
      title: "Die Sandwich-Taktik: schnell entlarvt, dauerhaft teuer",
      text: "Die Idee klingt charmant: jeden Kritikpunkt zwischen zwei Anerkennungen platzieren. Das Skript warnt aber ausdrücklich vor dem Nachteil:\n\nNach kurzer Zeit entlarvt der Mitarbeiter/die Mitarbeiterin die Ja-aber-Taktik als floskelhaftes Gerede – und akzeptiert dann KEINE Anerkennung mehr, weil Lob erfahrungsgemäß nur noch der aufmunternde Vorspann eines Tadels ist.\n\nDamit beschädigt die Sandwich-Taktik beide Instrumente zugleich: Die Kritik kommt nicht klar an (Hinweis 4: klare Sprache!), und das Lob verliert seinen Wert (Orientierungs- und Lernfunktion der Anerkennung).\n\nBesser: Anerkennung und Kritik TRENNEN – jedes zu seinem Anlass, zeitnah, konkret und ehrlich. Ein positiver GesprächsABSCHLUSS (Hinweis 9: Vertrauen in die künftige Zusammenarbeit) ist übrigens kein Sandwich – er verpackt die Kritik nicht, sondern rahmt die Beziehung."
    }
  }
});
