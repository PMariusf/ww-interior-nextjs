# WW Interior

Nettside for WW Interior ved Wenche-Johanne Føynar Wie i Bergen. Bygget med Next.js-kompatible React-sider, TypeScript og Tailwind CSS. For Sites-hosting bruker prosjektet Vinext, som gjør at Next.js App Router-kode kan bygges for Sites-runtime.

## Krav

- Node.js 24 (se `.nvmrc`)
- pnpm 11.25.0

## Start i VS Code

1. Pakk ut prosjektet og åpne mappen `ww-interior-nextjs` i VS Code.
2. Åpne VS Code-terminalen (**Terminal → New Terminal**).
3. Installer avhengighetene én gang:

   ```bash
   npm run install:ci
   ```

4. Start utviklingsserveren:

   ```bash
   npm run dev
   ```

5. Åpne adressen som vises i terminalen, vanligvis `http://localhost:5173`.

## Hvor du redigerer

- `app/page.tsx` — seksjoner, tekst, bilder og lenker
- `app/globals.css` — Tailwind-oppsett og globale stiler
- `app/layout.tsx` — språk og sidetittel/beskrivelse
- `next.config.ts` — konfigurasjon for eksterne bilder

Bildene er foreløpige stemningsbilder. Bytt dem til godkjente bilder fra WW Interiors egne prosjekter når de er tilgjengelige.

## Bygg

```bash
npm run build
```

`.openai/hosting.json` er koblet til det eksisterende private WW Interior-prosjektet i Sites. Behold `project_id` uendret dersom du publiserer derfra.
