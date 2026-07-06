/*
 * OPW-Schema: Organisationspläne zuordnen (AGP, VGP, GVP, Stellenplan, Aktenplan, DGO)
 * Fach: Organisationsmanagement und Personalwirtschaft (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/OPW, FS 1):
 *  - Skript_FS I 2023 Kap. 2.8 (alle Pläne; KGSt-Aufgabenhauptgruppen; DGO)
 *  - OPW 08_KGSt_Muster-Aufgabengliederungsplan
 *  - Normen verifiziert: § 15 III GemO (Unterrichtung/Aushang VGP+GVP),
 *    § 96 IV Nr. 4 GemO (Stellenplan als Haushaltsplan-Bestandteil; das Skript
 *    nennt hierfür ungenau § 95 GemO)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "opw-orgaplaene",
  subject: "Organisationsmanagement und Personalwirtschaft",
  fs: ["FS1"],
  area: "Aufbauorganisation",
  title: "Organisationspläne zuordnen",
  description: "Welcher Plan beantwortet welche Frage? Aufgabengliederungs-, Verwaltungsgliederungs-, Geschäftsverteilungs-, Stellen- und Aktenplan plus DGO – mit den GemO-Fundstellen.",
  start: "start",
  stations: [
    { id: "frage", label: "Leitfrage" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Plan bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "frage",
      kind: "frage",
      norm: "Organisationspläne",
      title: "Welche Frage soll der Plan beantworten?",
      def: "Die Aufbauorganisation und die Grundzüge der Abläufe werden in <b>Organisationsplänen und Dienstvorschriften</b> dokumentiert – transparent für Personal und Außenstehende. Ordne nach der Leitfrage zu:",
      options: [
        { label: "WELCHE Aufgaben gibt es überhaupt?", next: "e_agp", tone: "pos" },
        { label: "WELCHE Einheiten wurden gebildet – und wer macht WAS?", next: "e_vgp_gvp", tone: "pos" },
        { label: "WELCHE Stellen dürfen besetzt werden (Geld!)?", next: "e_stellenplan", tone: "pos" },
        { label: "Wie laufen Schriftgut und täglicher Dienst?", next: "e_akten_dgo", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_agp: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Aufgabengliederungsplan",
      title: "Aufgabengliederungsplan: das Aufgabeninventar nach KGSt",
      text: "Der AGP stellt alle Aufgaben sachlich geordnet zusammen – nach KGSt gegliedert in Aufgabenhauptgruppen, Aufgabengruppen und Einzelaufgaben mit dreistelliger Kennziffer.\n\nDie acht Aufgabenhauptgruppen (1. Ziffer): 1 Allgemeine Verwaltung · 2 Finanzen · 3 Recht, Sicherheit und Ordnung · 4 Schule und Kultur · 5 Soziales, Jugend und Gesundheit · 6 Bauwesen · 7 Öffentliche Einrichtungen · 8 Wirtschaft und Verkehr.\n\nBeispiel aus dem Skript: 131 = „Information von Presse, Rundfunk und Fernsehen“ (1 Allgemeine Verwaltung → 13 Presse- und Öffentlichkeitsarbeit → 131 Einzelaufgabe).\n\nDer AGP ist Ausgangspunkt der gesamten Organisationsstruktur – die Struktur folgt den Aufgaben, nicht umgekehrt. Sein „Gegenstück“ auf der Geldseite ist der Haushaltsplan (welche Aufgaben sind mit Mitteln hinterlegt?)."
    },

    e_vgp_gvp: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "VGP + GVP",
      title: "Verwaltungsgliederungs- und Geschäftsverteilungsplan",
      text: "VERWALTUNGSGLIEDERUNGSPLAN (VGP): zeigt – aufbauend auf dem AGP – die tatsächlich gebildeten ORGANISATIONSEINHEITEN, also die konkrete Aufbauorganisation; grafisch als Organigramm.\n\nGESCHÄFTSVERTEILUNGSPLAN (GVP, auch Aufgabenverteilungsplan): verteilt die Aufgaben auf Einheiten und STELLEN – wer ist wofür zuständig? Abstrakt: die Zusammenführung von AGP und VGP.\n\nRechtsgrundlage (am Volltext verifiziert): Nach § 15 Abs. 3 GemO haben Gemeinden mit hauptamtlicher Verwaltung die Einwohner über ihren Verwaltungsgliederungs- UND Geschäftsverteilungsplan in geeigneter Form zu unterrichten und beide im Dienstgebäude an geeigneter Stelle AUSZUHÄNGEN. Für Landkreise gelten die LKO-Verweisungen entsprechend.\n\nPraxis Lahnstein: Organigramm-Fortschreibung = Pflege des VGP; die ADGA ergänzt die Abläufe."
    },

    e_stellenplan: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Stellenplan",
      title: "Stellenplan: das Besetzungsrecht im Haushaltsplan",
      text: "Der STELLENPLAN ist Teil des Haushaltsplans – nach dem verifizierten Volltext besteht der Haushaltsplan gemäß § 96 Abs. 4 GemO aus Ergebnishaushalt, Finanzhaushalt, den Teilhaushalten und (Nr. 4) dem Stellenplan. (Das Skript nennt hierfür ungenau „§ 95 Abs. 1 GemO“ – § 95 regelt die Haushaltssatzung, die den Haushaltsplan festsetzt.)\n\nInhalt: die erforderlichen Stellen der Beamten und Beschäftigten, getrennt nach Organisationseinheiten sowie nach Besoldungs- und Entgeltgruppen.\n\nDie zentrale Regel: NUR im Stellenplan ausgewiesene Stellen dürfen besetzt werden – der Stellenplan ist das „Gegenstück“ zum Verwaltungsgliederungsplan und das Scharnier zwischen Organisation und Haushalt (Abweichungen nur in den engen Grenzen des Haushaltsrechts).\n\nHier docken Stellenbewertung (welche Wertigkeit weist der Plan aus?) und Stellenbemessung (wie viele Stellen braucht es?) an."
    },

    e_akten_dgo: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Aktenplan + DGO",
      title: "Aktenplan und Dienst- und Geschäftsordnung",
      text: "AKTENPLAN: regelt den gesamten Schriftgutverkehr – Ziel ist Übersicht und Struktur der Ablage, für jeden nachvollziehbar (heute die Grundlage jeder E-Akte).\n\nDIENST- UND GESCHÄFTSORDNUNG (DGO): enthält die grundlegenden Vorgaben zur ABLAUForganisation – tägliche Dienstzeit, Verhalten im Dienst, Dienstversäumnisse, Urlaubs- und Krankheitsfälle, äußere Form der Sachbearbeitung, Entscheidungs- und UNTERSCHRIFTSBEFUGNIS, Dienstreisen.\n\nBei Bedarf ergänzen BESONDERE Dienst-/Geschäftsanweisungen einzelne Felder (z. B. Beschaffungsordnung, Anweisung für Vollstreckungsbeamte).\n\nEinordnung: AGP, VGP, GVP und Stellenplan dokumentieren die AUFBAU-Seite; Aktenplan und DGO die ABLAUF-Seite – zusammen machen sie die Organisation transparent (Lahnstein-Pendant zur DGO: die ADGA)."
    }
  }
});
