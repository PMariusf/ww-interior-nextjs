# WW Interior

Nettside for WW Interior ved Wenche-Johanne Føynar Wie i Bergen. Bygget med Next.js App Router, TypeScript og Tailwind CSS.

## Kom i gang i VS Code

1. Klon repoet fra GitHub.
2. Åpne mappen `ww-interior-nextjs` i VS Code.
3. Bruk Node.js 22.13 eller nyere. Prosjektet anbefaler Node-versjonen i `.nvmrc`.
4. Åpne VS Code-terminalen (**Terminal → New Terminal**) og installer pakkene:

   ```bash
   npm run install:ci
   ```

5. Start utviklingsserveren:

   ```bash
   npm run dev
   ```

6. Åpne [http://localhost:3000](http://localhost:3000).

## Hvor du redigerer

- `app/page.tsx` — seksjoner, tekst, bilder og lenker
- `app/globals.css` — Tailwind-oppsett og globale stiler
- `app/layout.tsx` — språk, sidetittel og beskrivelse
- `public/images/` — lokale bilder brukt på nettsiden

## Kontroller og bygg

```bash
npm run lint
npx tsc --noEmit
npm run build
```