/*
 * IK-Schema: Einseitige Empfangsgewohnheiten – das übergroße Ohr diagnostizieren
 * Fach: Interaktion und Kommunikation (FS 1)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Psychologische Aspekte der Kommunikation, FS 1):
 *  - Einseitige Empfangsgewohnheiten (Sach-, Beziehungs-, Selbstkundgabe-, Appellohr
 *    mit dem durchgängigen Präsentations-Beispiel "Frau Müller / Chefin Frau Meier")
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-empfangsgewohnheiten",
  subject: "Interaktion und Kommunikation",
  fs: ["FS1"],
  area: "Kommunikationsmodelle",
  title: "Empfangsgewohnheiten: das übergroße Ohr",
  description: "Frau Müller präsentiert, die Chefin bringt ein Gegenargument – und je nach Ohr reagiert Frau Müller völlig anders. Diagnostiziere die einseitige Empfangsgewohnheit am Testfall.",
  start: "start",
  stations: [
    { id: "testfall", label: "Testfall" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Ohr bestimmt",
    neg: "Ergebnis: Abgrenzung",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "testfall",
      kind: "frage",
      norm: "4 Ohren",
      title: "Der Testfall: Wie reagiert Frau Müller?",
      def: "Im Idealfall hören wir mit allen vier Ohren gleich gut und entscheiden situativ, worauf wir reagieren. Bei fast allen ist aber EIN Ohr stärker ausgeprägt – bis zum „übergroßen“ Ohr.<br><br><b>Testfall (Skript):</b> Frau Müller hält eine Präsentation. Ihre Chefin Frau Meier bringt ein Gegenargument. Frau Müller denkt …",
      options: [
        { label: "„Interessantes Argument!“ – und nimmt sachlich Stellung", next: "e_sachohr", tone: "pos" },
        { label: "„Sie findet meine Inhalte nicht überzeugend!“ – wird rot, verhaspelt sich", next: "e_beziehungsohr", tone: "pos" },
        { label: "„Die hat es nötig, überall ihren Senf dazuzugeben!“", next: "e_selbstkundgabeohr", tone: "pos" },
        { label: "Sie baut das Argument eilfertig in den Vortrag ein und kommt vom Kurs ab", next: "e_appellohr", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_sachohr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Sachohr",
      title: "Das (große) Sachohr: sachlich bleiben – aber nicht taub für den Rest",
      text: "Menschen mit großem Sachohr hören fast ausschließlich die Sach-Botschaft. Im Testfall ist das ein VORTEIL: Frau Müller nimmt das Gegenargument nicht persönlich, behält einen klaren Kopf und kann inhaltlich Stellung nehmen.\n\nVerhängnisvoll wird das große Sachohr, wenn das eigentliche Problem auf der Beziehungs- oder Selbstkundgabe-Ebene liegt. Skript-Beispiel: Sachbearbeiter B (voller Flur, scharfer Ton): „Ach, Du gehst schon!“ – A antwortet gelassen: „Ja, ich mache jetzt Feierabend!“ A hat nur die Sache gehört; B wollte aber sagen: „Du lässt mich mit der ganzen Arbeit allein“ (Beziehung) und „Ich habe jetzt alles am Hals“ (Selbstkundgabe). Eine Erklärung, WARUM er gerade jetzt geht, hätte B „befrieden“ können.\n\nMerke: Das Sachohr ist richtig, wenn es um die Sache geht – wer aber IMMER nur sachlich hört, ignoriert die zwischenmenschliche Dimension der Kommunikation."
    },

    e_beziehungsohr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Beziehungsohr",
      title: "Das übergroße Beziehungsohr: auf der Beziehungslauer",
      text: "Wer mit übergroßem Beziehungsohr hört, liest in die unschuldigsten Aussagen Stellungnahmen zur eigenen Person hinein: nimmt alles persönlich, fühlt sich schnell angegriffen. Wenn jemand lacht → ausgelacht; wenn jemand wegguckt → gemieden.\n\nIm Testfall bezieht Frau Müller das Gegenargument auf ihre Leistung („Du kennst dich ja gar nicht aus!“), wird rot, ärgert sich und verhaspelt sich – dabei führte die Chefin wohl nur eine sachliche Fachdiskussion. Zweites Skript-Beispiel: Herr Schmidt, dessen Ausflugsvorschlag abgewählt wurde, ist beleidigt – dabei standen Vorschläge zur Abstimmung, keine Vorschlaggeber.\n\nABER: Ein offenes Beziehungsohr ist wertvoll in andauernden Beziehungen – wenn der Kollege einen seit Tagen meidet, gehört es zur Beziehungsarbeit zu fragen, ob man ihn gekränkt hat, statt „die Flöhe husten zu hören“ und zu schweigen."
    },

    e_selbstkundgabeohr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Selbstkundgabeohr",
      title: "Das übergroße Selbstkundgabeohr: Dauer-Diagnose statt Dialog",
      text: "Dieses Ohr lässt keine Nachricht an sich heran, sondern bezieht alles auf die Verfassung des SENDERS. Im Testfall deutet Frau Müller das Gegenargument als Zeichen für das schlechte Selbstbewusstsein ihrer Chefin („Die hat es nötig …“) – die Sachbotschaft gerät völlig in den Hintergrund.\n\nSkript-Beispiel: Kollegin B rollt entnervt die Augen: „Du nervst!“ – A denkt nur: „Ganz schöne Mimose heute!“ und hört nicht, dass die Aussage etwas mit IHR zu tun hat.\n\nVORTEIL des Ohres: Bei launischen Mitmenschen entlastet die diagnostizierende Haltung („Der hat wohl schlecht geschlafen“) – man muss nicht alles auf sich beziehen und sich ständig rechtfertigen.\n\nGRENZE: Sobald das Gegenüber eine echte Beziehungsbotschaft mitteilen will, ist die Haltung „Was ist denn mit dem los?“ gesprächsschädlich – dann muss die Botschaft an die eigene Adresse gehört werden."
    },

    e_appellohr: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Appellohr",
      title: "Das übergroße Appellohr: ständig auf dem Appell-Sprung",
      text: "Wer mit übergroßem Appellohr hört, will es allen recht machen und erfüllt auch UNausgesprochene Erwartungen – hört alles als Aufforderung. Im Testfall baut Frau Müller das Gegenargument eilfertig ein und kommt vom Kurs ab; der Chefin ging es aber gar nicht darum, dass man ihr „nach dem Mund“ redet.\n\nSkript-Beispiel: Eine Kollegin schaut auf die Uhr – die andere beeilt sich sofort („Bin gleich fertig, dann kannst du los!“). Vielleicht wollte die Kollegin nur wissen, wie spät es ist.\n\nHintergrund ist oft Erziehung und Sozialisation: Man hat gute Erfahrungen damit gemacht, Erwartungen zu erfüllen – die EIGENEN Wünsche und Impulse geraten dabei aus dem Blick.\n\nWarnung des Skripts: Vorsicht bei Menschen, die das ausnutzen und ständig Appelle aussenden, damit andere für sie tätig werden. Dann das Appellohr bewusst „auf Durchzug“ schalten und darauf hören, was man selbst will."
    }
  }
});
