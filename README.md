# Project Ascend v2

A production-oriented portfolio for **Abdullah Al Mahmud**, built with Next.js App Router, TypeScript, Framer Motion, next-themes, and accessible custom CSS.

## Important: upload the folders, not only the files

Your GitHub repository homepage must show this exact structure:

```text
app/
components/
data/
public/
package.json
next.config.ts
tsconfig.json
eslint.config.mjs
README.md
LICENSE
```

Inside `app/`, GitHub must show:

```text
app/globals.css
app/layout.tsx
app/page.tsx
app/robots.ts
app/sitemap.ts
```

Do **not** upload `page.tsx`, `layout.tsx`, or `globals.css` directly into the repository root.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy to Vercel

1. Create or clean a GitHub repository.
2. Upload all folders and files shown above while preserving the folder structure.
3. Import the repository into Vercel.
4. Use **Framework Preset: Next.js**.
5. Leave **Root Directory empty** because `package.json` and `app/` are in the repository root.
6. Leave Build Command, Output Directory, and Install Command at their defaults.
7. Deploy.

## Update portfolio content

Most content is centralized in:

```text
data/site.ts
```

Replace the profile photo at:

```text
public/images/abdullah-portrait.jpg
```

Replace the CV at:

```text
public/resume/abdullah-al-mahmud-cv.pdf
```

## Notes

- GitHub statistics are loaded from the public GitHub API in the browser.
- Certificate PDF/image previews can be added later when the files are available.
- Replace the placeholder URL in `app/sitemap.ts` after Vercel assigns the final domain.

## License

MIT.
