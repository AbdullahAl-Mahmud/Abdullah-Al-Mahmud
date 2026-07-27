# A MAHMUD.LOG × Project Ascend

A single merged portfolio application for **Abdullah Al Mahmud**. It combines the editorial field-log identity of the earlier portfolio with the interactive modes, polished motion, research presentation, GitHub integration, and responsive architecture of Project Ascend.

## Included

- A MAHMUD.LOG brand identity
- PUST campus background
- Research / Engineer / Leadership viewing modes
- Editorial experience timeline
- OpenCLIP biomedical-waste research case study
- PUST Transit concept
- Project-showcase feature
- Live GitHub profile statistics
- Certificates, skills, education, awards, volunteering, and contact sections
- Gallery with an accessible full-screen viewer
- Dark and light themes
- Reduced-motion accessibility support
- Downloadable resume
- Vercel-ready Next.js App Router structure

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production test

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Upload the complete project to a GitHub repository.
2. In Vercel, select **Add New → Project**.
3. Import that GitHub repository.
4. Use **Framework Preset: Next.js**.
5. Keep **Root Directory empty** if `package.json` and the `app` folder are visible on the repository homepage.
6. Keep Build Command, Output Directory, and Install Command on their defaults.
7. Deploy.

Optional environment variable:

```text
NEXT_PUBLIC_SITE_URL=https://your-final-domain.example
```

## Update content

Edit:

```text
data/site.ts
```

## Update images

Images are organized under:

```text
public/images/
public/images/gallery/
public/images/editorial/
```

## Resume

Replace this file while keeping the filename unchanged:

```text
public/resume/abdullah-al-mahmud-cv.pdf
```

## License

MIT License.
