/*
 * Prüfungsschema: Herausgabeanspruch des Eigentümers, § 985 BGB (Vindikation)
 *
 * Quellen (Obsidian-Vault "Brain", Modul 2 Privatrecht):
 *  - "Praesentation Fachstudium I" (Birtel-Kaldenhoff, FS I) – Schema § 985 (Folie 330 ff.)
 *  - "2.1.3 PR 37-38 – OLE Skript – Sachenrecht 1" (Rankenhohn) – Besitz, Besitzarten
 *  - Normen: Gesetze/md/Zivil und Privatrecht/BGB.md (§§ 197, 854, 855, 868, 929 ff., 985, 986)
 *
 * Stationen: eigentum → besitz → recht → ergebnis
 */

window.SCHEMATA = window.SCHEMATA || [];

window.SCHEMATA.push({
  id: "pr-herausgabe-985",
  subject: "Privatrecht",
  area: "Sachenrecht",
  title: "Herausgabeanspruch des Eigentümers, § 985 BGB",
  description: "Vindikation: Eigentum des Anspruchstellers (inkl. Prüfung von Eigentumsverlust und gutgläubigem Erwerb), Besitz des Anspruchsgegners und kein Recht zum Besitz (§ 986 BGB).",
  fs: ["FS1"],
  start: "start",
  stations: [
    { id: "eigentum", label: "Eigentum" },
    { id: "besitz", label: "Besitz des Gegners" },
    { id: "recht", label: "Kein Recht zum Besitz" },
    { id: "ergebnis", label: "Ergebnis" }
  ],

  nodes: {

    start: {
      station: "eigentum",
      kind: "frage",
      norm: "§ 985 BGB",
      title: "War der Anspruchsteller ursprünglich Eigentümer?",
      text: "Obersatz: „A könnte gegen B einen Anspruch auf Herausgabe der Sache aus § 985 BGB haben.“ Die Vindikation kann als dingliches Recht vor vertraglichen und anderen gesetzlichen Ansprüchen geprüft werden. Erster Schritt: die Eigentumslage – bei unklarer Lage chronologisch („historisch“) prüfen.",
      def: "<b>Eigentum (§ 903 BGB):</b> das umfassendste dingliche Recht – rechtliche Sachherrschaft. <b>Besitz:</b> nur die tatsächliche, willensgetragene Sachherrschaft (§ 854 BGB). Beide strikt trennen!",
      options: [
        { label: "Ja, ursprünglich Eigentümer", next: "q_verlust", tone: "pos" },
        { label: "Nein, nie Eigentümer gewesen", next: "e_kein_eigentum", tone: "neg" }
      ]
    },

    q_verlust: {
      station: "eigentum",
      kind: "frage",
      norm: "§§ 929 ff. BGB",
      title: "Hat er das Eigentum zwischenzeitlich verloren?",
      text: "Eigentumsverlust insbesondere durch: eigene Übereignung (§§ 929 ff. BGB), Verfügung eines Dritten mit Zustimmung (§ 185 BGB), gutgläubigen Erwerb eines Dritten (§§ 932–935 BGB), Verbindung/Vermischung/Verarbeitung (§§ 946 ff. BGB), Ersitzung (§ 937 BGB).",
      hint: "Detailprüfung der Übereignung und des gutgläubigen Erwerbs: Schema „Eigentumserwerb an beweglichen Sachen“. Bei abhandengekommenen Sachen (§ 935 I BGB) scheidet gutgläubiger Erwerb aus – der Eigentümer bleibt Eigentümer.",
      options: [
        { label: "Nein, Eigentum besteht fort", next: "q_besitz", tone: "pos" },
        { label: "Ja, wirksam übereignet oder gutgläubig erworben", next: "e_eigentum_verloren", tone: "neg" }
      ]
    },

    q_besitz: {
      station: "besitz",
      kind: "frage",
      norm: "§ 854 BGB",
      title: "Ist der Anspruchsgegner Besitzer der Sache?",
      text: "Der Anspruchsgegner muss Besitzer sein – unmittelbarer (§ 854 BGB) oder mittelbarer Besitzer (§ 868 BGB).",
      def: "<b>Besitz:</b> tatsächliche Sachherrschaft, getragen von einem natürlichen Besitzwillen (auch Geschäftsunfähige können besitzen). <b>Besitzdiener (§ 855 BGB):</b> übt die Sachherrschaft weisungsgebunden für einen anderen aus (z. B. Arbeitnehmer) – er ist NICHT Besitzer, der Anspruch richtet sich gegen den „Herrn“. <b>Mittelbarer Besitz (§ 868 BGB):</b> Besitz über einen Besitzmittler kraft Besitzmittlungsverhältnisses (z. B. Vermieter–Mieter).",
      options: [
        { label: "Ja, unmittelbarer Besitzer", next: "q_recht", tone: "pos" },
        { label: "Ja, mittelbarer Besitzer", detail: "Herausgabe durch Abtretung des Herausgabeanspruchs bzw. Anweisung an den Besitzmittler", next: "q_recht", tone: "pos" },
        { label: "Nein, nur Besitzdiener (§ 855 BGB)", detail: "Anspruchsgegner ist der dahinterstehende Besitzer", next: "e_kein_besitz", tone: "neg" },
        { label: "Nein, besitzt die Sache nicht (mehr)", next: "e_kein_besitz", tone: "neg" }
      ]
    },

    q_recht: {
      station: "recht",
      kind: "frage",
      norm: "§ 986 BGB",
      title: "Hat der Besitzer ein Recht zum Besitz?",
      text: "Der Besitzer kann die Herausgabe verweigern, wenn er (oder der mittelbare Besitzer, von dem er sein Besitzrecht ableitet) dem Eigentümer gegenüber zum Besitz berechtigt ist (§ 986 I BGB). Dogmatisch: rechtshindernde Einwendung, keine Einrede.",
      def: "<b>Eigenes Besitzrecht:</b> i. d. R. aus schuldrechtlichem Vertrag (Miete, Leihe, Pacht, noch nicht erfüllter Kauf) oder dinglichem Recht (Nießbrauch, Pfandrecht). <b>Abgeleitetes Besitzrecht:</b> Beispiel – A vermietet an B, B untervermietet berechtigt an C: C kann sich gegenüber A auf das von B abgeleitete Besitzrecht berufen (§ 986 I 1 Alt. 2 BGB).",
      options: [
        { label: "Nein, kein Recht zum Besitz", next: "e_herausgabe", tone: "pos" },
        { label: "Ja, eigenes Besitzrecht", detail: "z. B. wirksamer Miet- oder Leihvertrag", next: "e_besitzrecht", tone: "neg" },
        { label: "Ja, abgeleitetes Besitzrecht", detail: "Vom berechtigten Zwischenbesitzer abgeleitet, § 986 I 1 Alt. 2 BGB", next: "e_besitzrecht", tone: "neg" }
      ]
    },

    /* ================= Ergebnisse ================= */

    e_herausgabe: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "pos",
      norm: "§ 985 BGB",
      title: "Herausgabeanspruch besteht (+)",
      text: "Der Anspruchsteller ist Eigentümer, der Anspruchsgegner unberechtigter Besitzer – die Sache ist herauszugeben.\n\nErgänzend: Ansprüche aus dem Eigentümer-Besitzer-Verhältnis (§§ 987 ff. BGB – Nutzungen, Schadensersatz, Verwendungen). Verjährung: 30 Jahre (§ 197 I Nr. 2 BGB)."
    },

    e_kein_eigentum: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 985 BGB",
      title: "Kein Anspruch – Anspruchsteller nicht Eigentümer (–)",
      text: "Ohne Eigentümerstellung keine Vindikation. Zu prüfen bleiben besitzrechtliche Ansprüche (§§ 861 f. BGB bei verbotener Eigenmacht) sowie schuldrechtliche Herausgabeansprüche (z. B. § 546 BGB, §§ 812 ff. BGB)."
    },

    e_eigentum_verloren: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 929 ff., 932 ff. BGB",
      title: "Kein Anspruch – Eigentum verloren (–)",
      text: "Der Anspruchsteller hat sein Eigentum verloren (etwa durch wirksame Übereignung oder gutgläubigen Erwerb eines Dritten); § 985 BGB scheidet aus.\n\nWICHTIG für die Klausur: Jetzt an die schuldrechtlichen Ausgleichsansprüche denken – § 816 I 1 BGB (Erlösherausgabe gegen den nichtberechtigt Verfügenden), § 816 I 2 BGB (gegen den unentgeltlichen Erwerber), §§ 812 ff. BGB und §§ 823 ff. BGB."
    },

    e_kein_besitz: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§§ 854, 855 BGB",
      title: "Kein Anspruch gegen diesen Gegner – kein Besitz (–)",
      text: "Der in Anspruch Genommene ist nicht (mehr) Besitzer. Der Anspruch aus § 985 BGB ist gegen den tatsächlichen Besitzer zu richten; beim Besitzdiener gegen den dahinterstehenden Besitzherrn.\n\nBei schuldhafter Besitzaufgabe nach Rechtshängigkeit: §§ 989, 990 BGB."
    },

    e_besitzrecht: {
      station: "ergebnis",
      kind: "ergebnis",
      verdict: "neg",
      norm: "§ 986 I BGB",
      title: "Kein durchsetzbarer Anspruch – Recht zum Besitz (–)",
      text: "Der Besitzer ist dem Eigentümer gegenüber (selbst oder abgeleitet) zum Besitz berechtigt; die Herausgabe kann verweigert werden.\n\nDer Anspruch „lebt auf“, sobald das Besitzrecht endet (z. B. mit Beendigung des Mietverhältnisses – dann auch § 546 I BGB)."
    }
  }
});
