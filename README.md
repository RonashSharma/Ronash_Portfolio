# Ronash Sharma — Portfolio Site

Personal portfolio site. Plain HTML/CSS/JS. No framework, no build step, no backend.
Deployed on Vercel, auto-redeploys on every `git push`.

Live goal: a recruiter lands here, understands who you are and what you've built in under
30 seconds, and can download your Resume or reach you without hunting.

---

## 1. Folder structure

```
Ronash_Portfolio/
├── index.html      → page structure ONLY. No hardcoded names/projects/skills in here.
├── style.css        → design tokens (colors, type, spacing) + layout rules
├── script.js         → reads data.js and renders it into index.html at load time
├── data.js            → ALL editable content lives here: profile, projects, skills
├── README.md            → this file
└── assets/
    ├── README.txt         → filename rules for the PDFs
    ├── Ronash_Sharma_Resume.pdf   → you provide this
    └── Ronash_Sharma_CV.pdf       → you provide this
```

**Rule of thumb:** if you're updating content (new project, new skill, new job title), you edit
`data.js` only. If you're updating design (colors, spacing, fonts), you edit `style.css` only.
You should almost never need to touch `index.html` or `script.js` again after this initial setup.

---

## 2. Design reference (so future-you knows why it looks this way)

| Token | Value | Used for |
|---|---|---|
| Mist (background) | `#EFF2F4` | Page background |
| Paper (cards) | `#FFFFFF` | Card/panel backgrounds |
| Ink (text) | `#12151C` | Primary text |
| Slate (secondary text) | `#4B5563` | Descriptions, labels |
| Pulse (accent) | `#0E9C88` | Links, status, hover states |
| Amber | `#E2A33D` | Reserved, currently unused — don't add more accent colors without a reason |

Fonts: **Space Grotesk** (headings), **Inter** (body text), **JetBrains Mono** (labels/tags/hero row)
— loaded from Google Fonts in `index.html`, no local font files needed.

Signature element: the hero renders like a terminal/dataframe header row
(`name: ... role: ... status: ...`) with a blinking cursor — deliberate choice, ties the design
to your actual daily tools (dataframes, terminal) instead of a generic hero banner.

---

## 3. How to update content

Open `data.js`. Three objects:

- **`PROFILE`** — name, role, location, status, headline, summary, contact info. Edit these
  fields directly; they flow into the hero and contact section automatically.
- **`PROJECTS`** — array of project objects (`title`, `tag`, `description`, `stack`, `link`).
  To add a new project, copy an existing object, edit the fields, add a comma. Order in the
  array = display order on the site, so put your strongest project first.
- **`SKILLS`** — array of skill groups (`group` name + `items` list). Add a new group or append
  to an existing `items` array as your skills grow.

**Hard rule, same as your CV/Resume:** never add a project or skill here that isn't real. This
file is a public-facing claim about what you've done.

To update your Resume/CV: overwrite the PDF file in `assets/` with the same filename. The
download buttons link by filename, so no HTML changes needed.

---

## 4. First-time deploy

**A. Push to GitHub**

From inside the `Ronash_Portfolio/` folder:

```
git init
git add .
git commit -m "Initial portfolio site: hero, projects, skills, resume/CV links, contact"
git branch -M main
git remote add origin https://github.com/RonashSharma/Ronash_Portfolio.git
git push -u origin main
```

If the repo doesn't exist yet on GitHub: create it first at github.com/new, name it `Ronash_Portfolio`,
do **not** initialize it with a README (you already have one) — then run the commands above.

**B. Connect Vercel**

1. Go to vercel.com, sign in with your GitHub account
2. "Add New Project" → select the `Ronash_Portfolio` repo
3. Framework Preset: **Other** (this is static HTML — no build command, no output directory needed)
4. Click Deploy
5. You'll get a live URL like `ronash-portfolio.vercel.app` within ~30-60 seconds

**C. Optional — custom domain later**
Vercel supports adding a custom domain (e.g. `ronashsharma.dev`) for free if you buy one — not
needed now, the default `.vercel.app` URL is fine to put on your CV/LinkedIn.

---

## 5. Every future update (the whole workflow)

```
git add .
git commit -m "Describe what changed, e.g. 'Add RAG project, update skills'"
git push
```

That's it. No manual redeploy step — Vercel watches the `main` branch and rebuilds automatically
on every push. Check the Vercel dashboard if you want to confirm a deploy succeeded.

---

## 6. Troubleshooting

- **Resume/CV button downloads nothing / 404s** → filename in `assets/` doesn't exactly match
  what's in `index.html` (`Ronash_Sharma_Resume.pdf` / `Ronash_Sharma_CV.pdf`). Check for typos,
  case sensitivity matters.
- **New project not showing up** → check `data.js` for a missing comma or unclosed bracket in
  the `PROJECTS` array — a JS syntax error there will silently break the whole render.
- **Site looks fine locally but broken on Vercel** → almost always a file path issue (e.g.
  `assets/` folder wasn't pushed to GitHub). Check the repo on GitHub directly to confirm all
  files are there.
