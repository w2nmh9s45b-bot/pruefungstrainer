/*
 * IK-Schema: Teamentwicklung – Phasen-Slider (Tuckman) + Teamrollen
 * Fach: Interaktion und Kommunikation (FS 2 – Soziale Kompetenzen am Arbeitsplatz I)
 * Tool-Knoten: Slider über die vier Phasen der Teamentwicklung mit Merkmalen
 * und passender Führungsaufgabe je Phase.
 *
 * Quellen (Obsidian-Vault "Brain", Modul 6/Soziale Kompetenzen am Arbeitsplatz, FS 2):
 *  - FS II LV 27 PLE Team (Phasen Formung/Konfrontation/Normung/Leistungsphase,
 *    Teamrollen u. a. Teamarbeiter/in und Umsetzer/in)
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "ik-team",
  subject: "Interaktion und Kommunikation",
  fs: ["FS2"],
  area: "Motivation & Führung",
  title: "Teamphasen (Simulator) & Teamrollen",
  description: "Forming, Storming, Norming, Performing: Schiebe dein Team durch die Entwicklungsphasen – mit Merkmalen und der passenden Führungsaufgabe je Phase, dazu die Bedeutung der Teamrollen.",
  start: "start",
  stations: [
    { id: "simulator", label: "Phasen" },
    { id: "rollen", label: "Rollen" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  verdictLabels: {
    pos: "Ergebnis: Team entwickelt",
    neg: "Ergebnis: Stolperstein",
    frei: "Ergebnis: Hinweis",
    warn: "Ergebnis: Zwischenstand"
  },

  nodes: {

    start: {
      station: "simulator",
      kind: "frage",
      norm: "4 Phasen",
      title: "In welcher Phase steckt dein Team?",
      def: "Wie entsteht aus einzelnen Mitarbeitenden ein funktionierendes Team? Über vier typische Entwicklungsphasen (nach Tuckman) – jede mit eigenen Merkmalen und eigener Führungsaufgabe:",
      tool: '<div class="tool"><div class="tool-title">👥 Teamphasen-Simulator</div>' +
        '<div class="tool-row"><label for="tm-p">Entwicklungsphase</label><span class="tool-val" id="tm-pv">1</span></div>' +
        '<input type="range" id="tm-p" min="1" max="4" step="1" value="1">' +
        '<div class="tool-read" id="tm-out">…</div></div>',
      setup: function (root) {
        var phasen = [
          { name: "FORMING (Formung)", txt: "Suche nach Orientierung – in der SACHE (Was ist unsere Aufgabe?) und im BEZIEHUNGSGEFÜGE (Wer sind die anderen, wo ist mein Platz?). Höflich-vorsichtiges Abtasten, wenig echte Auseinandersetzung.", fuehrung: "Führung gibt Struktur: Ziele, Rollen und Regeln klären, Kennenlernen ermöglichen, Sicherheit geben.", cls: "ok" },
          { name: "STORMING (Konfrontation)", txt: "Auseinandersetzungen um Rollen, Einfluss und Vorgehen; Positionskämpfe und Cliquenbildung – bis hin zur „Streitmüdigkeit“. Unbequem, aber ein NOTWENDIGER Durchgang: Hier wird ausgehandelt, was später trägt.", fuehrung: "Führung moderiert Konflikte (Konfliktgespräch!), hält den Rahmen, nimmt Auseinandersetzung nicht persönlich und drückt sie nicht weg.", cls: "bad" },
          { name: "NORMING (Normung)", txt: "Streben nach Einigung: gemeinsame Regeln und Umgangsformen entstehen, funktionierende Beziehungen, Verständnis und Akzeptanz wachsen – auf Sach- wie Beziehungsebene.", fuehrung: "Führung sichert die Vereinbarungen, fördert den Zusammenhalt und beginnt zu delegieren.", cls: "ok" },
          { name: "PERFORMING (Leistungsphase)", txt: "Gemeinsame, effiziente Ausführung: Die Energie fließt in die AUFGABE, Rollen greifen ineinander, das Team steuert sich weitgehend selbst.", fuehrung: "Führung gibt Freiraum, hält Störungen fern, würdigt Leistung (Anerkennungsgespräch) und achtet auf Weiterentwicklung.", cls: "ok" }
        ];
        var sl = root.querySelector("#tm-p"), pv = root.querySelector("#tm-pv"), out = root.querySelector("#tm-out");
        function upd() {
          var n = parseInt(sl.value, 10), p = phasen[n - 1];
          pv.textContent = n + " / 4";
          out.innerHTML = "<b>Phase " + n + ": " + p.name + "</b><br>" + p.txt + "<br>" +
            '<span class="tool-flag ' + p.cls + '">Führungsaufgabe</span> ' + p.fuehrung +
            (n === 2 ? "<br><i>Wichtig: Storming überspringen funktioniert nicht – unterdrückte Konflikte holen das Team später ein.</i>" : "");
        }
        sl.addEventListener("input", upd);
        upd();
      },
      hint: "Die Phasen verlaufen nicht streng linear: Bei neuen Mitgliedern, neuen Aufgaben oder Krisen fällt ein Team zeitweise in frühere Phasen zurück.",
      options: [
        { label: "Und welche Rollen braucht ein Team?", next: "q_rollen", tone: "pos" }
      ]
    },

    q_rollen: {
      station: "rollen",
      kind: "frage",
      norm: "Teamrollen",
      title: "Rollenvielfalt statt Gleichklang",
      def: "Neben den Phasen behandelt LV 27 die <b>Teamrollen</b>: Menschen bringen unterschiedliche Stärken ins Team ein – z. B. die <b>Teamarbeiterin</b> (achtet auf Beziehungen, Klima und Ausgleich) und der <b>Umsetzer</b> (macht aus Plänen und Beschlüssen konkrete Taten).<br><br>Die Pointe: Ein Team aus lauter gleichen Typen ist schwach – erst die <b>Mischung</b> der Rollen deckt alle Aufgaben ab (Ideen, Struktur, Umsetzung, Zusammenhalt, Qualitätssicherung).",
      options: [
        { label: "Zusammenfassung anzeigen", next: "e_fertig", tone: "pos" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_fertig: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "Team & Führung",
      title: "Teams entwickeln sich – Führung entwickelt mit",
      text: "Die vier Phasen (Forming – Storming – Norming – Performing) beschreiben den typischen Weg von der Ansammlung Einzelner zum leistungsfähigen Team. Für die Führungskraft heißt das: den Führungsstil an die PHASE anpassen – viel Struktur am Anfang, Konfliktmoderation im Storming, Vereinbarungen sichern im Norming, Freiraum und Anerkennung im Performing (situatives Führen in Reinform).\n\nTeamROLLEN ergänzen das Bild: Bedeutung hat nicht, dass alle alles gleich gut können, sondern dass die Rollen sich ergänzen – fehlt etwa der Umsetzer, bleibt es bei Plänen; fehlt die Teamarbeiterin, zerreiben Konflikte das Klima.\n\nVerbindungen: Konflikte im Storming → Glasl-Simulator und Konfliktgespräch; Anerkennung im Performing → Anerkennungsgespräch; die Führungsstile → eigenes Schema."
    }
  }
});
