# Upload the merged portfolio to GitHub

## Recommended: GitHub Desktop

1. Install and open GitHub Desktop.
2. Sign in to your GitHub account.
3. Clone your portfolio repository.
4. Open the cloned repository folder on your computer.
5. Delete the old website files inside the cloned repository folder.
6. Copy **all files and folders from this project** into the cloned repository folder.
7. GitHub Desktop will list the changes.
8. Commit with: `Merge A MAHMUD.LOG and Project Ascend`.
9. Click **Push origin**.

## Correct repository homepage

Your GitHub repository homepage must show these folders and files:

```text
app/
components/
data/
public/
package.json
next.config.ts
postcss.config.mjs
tsconfig.json
README.md
```

Inside `app/`, GitHub must show:

```text
globals.css
layout.tsx
page.tsx
robots.ts
sitemap.ts
```

Do not upload `page.tsx`, `layout.tsx`, or `globals.css` directly to the repository homepage. They belong inside the `app` folder.

## Vercel settings

```text
Framework Preset: Next.js
Root Directory: leave empty
Build Command: default
Output Directory: default
Install Command: default
```
