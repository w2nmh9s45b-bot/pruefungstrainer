# Deployment – Stand 06.07.2026

**Status: LIVE.** Die App ist online unter **https://w2nmh9s45b-bot.github.io/pruefungstrainer/** (GitHub Pages, Branch `main`, Ordner `/root`, HTTPS erzwungen). Repo: https://github.com/w2nmh9s45b-bot/pruefungstrainer (public). Alle Dateien wurden per Drag & Drop hochgeladen und per SHA-256 gegen die lokalen Dateien verifiziert (byte-identisch).

**Update 06.07.2026 (2):** Zweites Modul-3-Fach **Internes Rechnungswesen** (18 Einträge: 17 Schemata FS 2 + Glossar mit 91 Begriffen; 7 Rechner/Simulatoren mit den Original-Skript-Beispielen, u. a. BAB/ILV mit Anbau- und Stufenleiterverfahren) – damit 187 Schemata in 10 Fächern; Service-Worker-Cache auf `pruefungstrainer-v11` erhöht.

**Update 06.07.2026:** Neues Modul **3 „Wirtschaft"** mit dem Fach **Volkswirtschaftslehre** (28 Einträge: 27 Schemata FS 1/2 + Definitionen-Glossar mit 103 Begriffen; erstmals interaktive Regler-Tools und Glossar-Rubrik, dafür `styles.css` und `app.js` erweitert) – damit 169 Schemata in 9 Fächern; Service-Worker-Cache auf `pruefungstrainer-v10` erhöht.

**Update 05.07.2026 (2):** Neues Fach **Beamtenrecht** (Modul 6, 21 Schemata, alle FS 2) ergänzt – damit 141 Schemata in 8 Fächern; Service-Worker-Cache auf `pruefungstrainer-v9` erhöht.

**Update 05.07.2026:** Neues Fach **Besoldungsrecht** (Modul 6, 17 Schemata, alle FS 3) ergänzt – damit 120 Schemata in 7 Fächern; Service-Worker-Cache auf `pruefungstrainer-v8` erhöht.

**Update 03.07.2026 (abends):** Neues Fach **Arbeits- und Tarifrecht** (Modul 6, 24 Schemata, FS 3); Cache `pruefungstrainer-v7`.

**Update 03.07.2026:** Neues Fach **Staatsrecht/Europarecht** (Modul 2, 21 Schemata, FS1/FS2) ergänzt; Service-Worker-Cache auf `pruefungstrainer-v5` erhöht. Hinweis: Der GitHub-Pages-Deploy-Schritt kann sporadisch mit „Deployment failed, try again later" abbrechen (transienter Infrastrukturfehler, Build ist ok); dann genügt ein erneuter Commit oder ein Re-run des Actions-Workflows, um den Deploy anzustoßen.

**Update-Workflow für künftige Änderungen:** Lokal in `/Users/moritzschmidt/Brain/Apps/Pruefungstrainer` ändern, `git add -A && git commit -m "..."`, dann die geänderten Dateien erneut über die GitHub-Weboberfläche hochladen (Datei anklicken → Stift-Icon „Edit this file“ oder erneut per Drag & Drop auf `/upload/main`). Ohne Terminal-Zugriff auf `git push` (kein Token hinterlegt) bleibt der Weg über die Weboberfläche nötig, siehe „Weg B" unten.

**Dein GitHub-Konto:** `w2nmh9s45b-bot` – erstellt am 08.06.2026 über **„Sign in with Apple“** (mit deiner Apple-ID, E-Mail-Relay `w2nmh9s45b@privaterelay.appleid.com`). Es gibt kein gespeichertes Passwort auf dem Mac; der Login läuft über Apple.

## Weg A (empfohlen): einmal einloggen, dann erledigt Claude den Rest

1. In Chrome auf **github.com → Sign in → „Continue with Apple“** einloggen (Face ID/Apple-ID-Bestätigung).
2. Claude sagen: „GitHub ist eingeloggt – deploye den Prüfungstrainer.“
   Claude erstellt dann das Repo `pruefungstrainer`, lädt die Dateien hoch und aktiviert GitHub Pages (Settings → Pages → Branch `main`, `/ (root)`).
3. Danach auf dem iPhone öffnen: `https://w2nmh9s45b-bot.github.io/pruefungstrainer/` → Teilen → **„Zum Home-Bildschirm“**.

## Weg B: selbst per GitHub-Weboberfläche (ohne Kommandozeile)

1. Auf github.com einloggen → **New repository** → Name `pruefungstrainer`, **Public** (nötig für Pages im Free-Plan) → Create.
2. „uploading an existing file“ anklicken → ALLE Dateien aus diesem Ordner (inkl. `icons/`-Ordner, ohne `.git`/`.claude`) hineinziehen → Commit.
3. Repo → **Settings → Pages** → Source „Deploy from a branch“, Branch `main`, Ordner `/ (root)` → Save.
4. Nach 1–2 Minuten ist die App unter `https://w2nmh9s45b-bot.github.io/pruefungstrainer/` erreichbar.

## Weg C: per Terminal (falls einmal ein Token/`gh` eingerichtet ist)

```bash
cd "/Users/moritzschmidt/Brain/Apps/Pruefungstrainer"
gh auth login              # einmalig (Browser-Flow)
gh repo create pruefungstrainer --public --source=. --push
gh api repos/w2nmh9s45b-bot/pruefungstrainer/pages -X POST -f 'source[branch]=main' -f 'source[path]=/'
```

## Sofort nutzen (ohne Internet-Hosting)

Am Mac läuft die App jederzeit lokal:

```bash
cd "/Users/moritzschmidt/Brain/Apps/Pruefungstrainer"
python3 -m http.server 8741
# → http://localhost:8741
```

**Hinweis Update-Verhalten:** Der Service Worker cached aggressiv. Die Cache-Version wurde auf `pruefungstrainer-v3` erhöht – installierte Geräte laden die neue Version (mit Kommunalrecht) beim nächsten Öffnen mit Internetverbindung automatisch.
