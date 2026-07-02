# Deployment – Stand 02.07.2026

**Status: LIVE.** Die App ist online unter **https://w2nmh9s45b-bot.github.io/pruefungstrainer/** (GitHub Pages, Branch `main`, Ordner `/root`, HTTPS erzwungen). Repo: https://github.com/w2nmh9s45b-bot/pruefungstrainer (public). Alle Dateien wurden per Drag & Drop hochgeladen und per SHA-256 gegen die lokalen Dateien verifiziert (byte-identisch).

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
