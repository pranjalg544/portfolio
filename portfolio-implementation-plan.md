# Portfolio Website — Implementation Plan
**For: Pranjal Gupta | Stack: HTML, CSS, JavaScript (vanilla) | Tool: Google Antigravity**

---

## 1. Goal & Design Philosophy

Build a clean, professional, single-page portfolio that reads as **hand-crafted, not AI-generated**. Concretely, that means avoiding the tell-tale patterns of templated AI sites:

**Avoid:**
- Purple-blue gradients everywhere, glassmorphism cards, generic "hero with floating blobs"
- Overused emoji as icons, centered-everything layouts, excessive rounded corners (border-radius: 20px on every element)
- Generic Inter/Poppins + stock "gradient text" headings
- Cliché copy like "Passionate developer who loves turning ideas into reality 🚀"
- Symmetrical 3-column grids for everything
- Overly bouncy scroll animations on every element

**Aim for instead:**
- A restrained, opinionated visual identity: one accent color, one or two typefaces, deliberate whitespace
- Asymmetry and a real grid system (not just flex-wrap centered cards)
- Content-first sections — let the projects and CV data carry the page, not decoration
- Subtle, purposeful motion (fade/slide on scroll, once — not looping, not parallax-heavy)
- Real personality in copy, rewritten from the CV in first-person, concise, no buzzword soup

---

## 2. Tech Stack & Structure

Plain HTML/CSS/JS, no frameworks, no build step — easy to host on GitHub Pages / Netlify.

```
portfolio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css
│   ├── layout.css
│   ├── components.css
│   └── animations.css
├── js/
│   ├── main.js          (nav toggle, scroll spy, smooth scroll)
│   └── scrollReveal.js  (IntersectionObserver-based reveal on scroll)
├── assets/
│   ├── images/           (profile photo, project screenshots/mockups)
│   ├── icons/             (SVG icons — hand-picked, not a random icon-font kit)
│   └── resume.pdf         (downloadable CV)
└── README.md
```

Instruct Antigravity to keep CSS split by concern (not one 2000-line file) and JS minimal/vanilla — no jQuery, no unnecessary libraries.

---

## 3. Design System (give Antigravity explicit tokens, don't let it improvise)

**Color palette — ✅ CHOSEN: Option A — Warm Neutral Light**

| Token | Value | Role |
|-------|-------|------|
| `--bg` | `#FAFAF7` | Page background |
| `--bg-2` | `#F2F2EE` | Card / elevated surfaces |
| `--bg-3` | `#E8E8E3` | Project visuals, deeper surfaces |
| `--text` | `#1A1A1A` | Body text |
| `--text-muted` | `#555550` | Secondary text |
| `--text-dim` | `#9A9A94` | Labels, metadata |
| `--accent` | `#C1502E` | Terracotta — links, CTAs, markers |
| `--accent-dark` | `#A84226` | Hover state for accent |
| `--border` | `rgba(26,26,26,0.08)` | Subtle dividers |
| `--border-2` | `rgba(26,26,26,0.16)` | Stronger borders on hover |

~~Option B — Cool minimal: `#0F0F10` dark background (initial build, replaced)~~

Accent color used sparingly — labels, one CTA button, section markers. No gradients.

**Typography:**
- Headings: a distinctive serif or geometric sans (e.g. "Fraunces", "Space Grotesk", or "General Sans") — not Poppins/Inter default
- Body: a clean readable sans (e.g. "Inter" is fine for body text only, or "IBM Plex Sans")
- Type scale: define via CSS variables (e.g. `--fs-h1: clamp(2.5rem, 5vw, 4.5rem)`), use `clamp()` for fluid sizing instead of media-query-only jumps

**Spacing:** 8px base unit system (`--space-1: 8px` through `--space-8: 64px`) — consistent rhythm instead of arbitrary padding values.

**Grid:** CSS Grid for layout sections, asymmetric column splits (e.g. 40/60) rather than uniform 3-up cards everywhere.

---

## 4. Site Structure & Content Mapping (from CV)

### Section 1 — Hero
- Name: **Pranjal Gupta**
- One-line positioning statement (rewritten, not copy-pasted CV objective): e.g. "CS undergrad building AI/ML systems — from satellite imagery to safety tech."
- Location: Bangalore / Delhi (studying)
- CTA buttons: "View Projects", "Download Resume"
- Keep it text-led; skip stock illustration or 3D blob graphics

### Section 2 — About
- Short narrative, 3–4 sentences, first-person, rewritten from the CV objective — no corporate buzzwords ("passionate", "cross-functional", "eager to grow") lifted directly
- Mention: B.Tech CSE @ Faculty of Technology, University of Delhi (2024–2028), CGPA 8.20
- Optional: quick facts list (location, current focus area, interests)

### Section 3 — Experience
- **Pracverse — Computer Vision Intern** (Apr–Aug 2026, Delhi)
  - Gesture-controlled drone system: hand-gesture capture → real-time flight commands
  - Built hand-tracking/gesture-recognition pipeline using OpenCV + MediaPipe
- Present as a simple timeline or single detailed card — not a generic "experience grid"

### Section 4 — Projects (the core of the page — give these the most visual weight)
Each project as its own block with: title, one-line tagline, tech stack tags, 2–3 bullet outcomes, links (GitHub icon), and if possible a screenshot/diagram placeholder.

1. **Genricycle** — DBMS Healthcare & Sustainability Platform
   - Stack: HTML, TypeScript, JavaScript, CSS, Python
   - Multi-role platform (patients, doctors, delivery partners, labs) — telemedicine, lab tracking, pharma logistics
   - AI chatbot for support; backend handles transactions/orders/secure profiles

2. **NaariRakshak** — AI-Powered Women's Commute-Safety App
   - Stack: Flutter, Dart, Twilio API, OpenStreetMap
   - Cross-platform safety companion: SOS alerts, live location sharing via Twilio, OSM route tracking

3. **LISS-IV SAR-Guided Cloud Removal** — ISRO Hackathon
   - Stack: Python, PyTorch, U-Net (ResNet-34), Sentinel-1 SAR, Streamlit
   - Fuses cloudy optical imagery with SAR data to reconstruct cloud-free scenes
   - **33.62 dB PSNR, 0.96 SSIM** on validation — call this metric out visually, it's your strongest quantifiable result
   - Built full pipeline + interactive Streamlit demo

4. **ELIGIFY** — Automated Exam Eligibility System
   - Stack: HTML5, CSS3, JS, MVC, OpenCV, Python, Flask, Tesseract OCR
   - Flask app automating eligibility checks via dual-strategy PDF parser (PyPDF2 + OCR fallback), REST API, OpenCV preprocessing, MVC structure, SQL backend

> Tip for Antigravity: don't force all 4 into identical-height cards. Let the SAR project (strongest, most technical) get a slightly larger/featured treatment.

### Section 5 — Skills
- Group logically instead of one flat tag-cloud: Languages (C/C++, Python), Web (HTML5, CSS3, JavaScript), Data (DBMS, MySQL, Data Structures)
- Simple typographic list or minimal grid — skip animated progress bars/percentage skill meters (a classic AI-template cliché and not meaningful for skill levels anyway)

### Section 6 — Education
- Faculty of Technology, University of Delhi — B.Tech CSE, 2024–2028, CGPA 8.20/10
- Presidency PU College — Intermediate, 92%, 2023
- R.T.N.E.T Public School — High School, GPA 8.9/10, 2021
- Compact timeline/list, not oversized cards

### Section 7 — Contact
- Email: pranjalg544@gmail.com
- Phone: +91 807 342 6101
- LinkedIn: linkedin.com/in/pranjalgupta544
- GitHub: github.com/pranjalg544
- Simple direct layout — plain links/icons, not a contact form (no backend) unless you want to wire one via Formspree/EmailJS

---

## 5. Interaction & Motion

- Sticky/minimal nav bar with scroll-spy highlighting current section
- Smooth scroll to anchors
- Scroll-triggered reveal via `IntersectionObserver` — fade + slight translateY, **only on first entry**, short duration (300–400ms), staggered slightly for lists
- Hover states: underline/color shift on links, subtle scale (1.02) on project cards — nothing bouncy or spinning
- No autoplay carousels, no cursor-follow effects, no particle backgrounds

---

## 6. Responsiveness & Accessibility

- Mobile-first CSS, breakpoints at ~600px / 900px / 1200px
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`) for structure and SEO
- All images with `alt` text; icons with `aria-label` where interactive
- Color contrast meeting WCAG AA against chosen background
- Keyboard-navigable nav and links; visible focus states (don't remove `outline` without replacing it)

---

## 7. Performance & Deployment

- No external UI frameworks/libraries — keep bundle near-zero JS
- Compress/serve images in WebP with fallback, lazy-load below-the-fold images (`loading="lazy"`)
- Self-host any custom fonts (or use `font-display: swap` with Google Fonts) to avoid layout shift
- Deploy target: GitHub Pages or Netlify (static, no server needed)

---

## 8. Suggested Build Order (for Antigravity to execute step by step)

1. Scaffold folder structure and empty files as above
2. Build `reset.css` + `variables.css` (colors, type scale, spacing tokens) first — lock the design system before writing components
3. Build HTML skeleton for all sections with semantic tags and placeholder content
4. Style section by section: Hero → Nav → About → Experience → Projects → Skills → Education → Contact → Footer
5. Add responsive breakpoints per section as it's built (not all at the end)
6. Add `main.js` (nav toggle + smooth scroll + scroll-spy)
7. Add `scrollReveal.js` (IntersectionObserver reveal animations) last, once static layout is solid
8. Cross-browser/device check, accessibility pass, performance pass (Lighthouse)
9. Add real assets (profile photo, project screenshots, resume.pdf) replacing placeholders
10. Deploy

---

## 9. Prompt Notes for Google Antigravity

When handing this to Antigravity, also explicitly tell it:
- "Do not use Bootstrap/Tailwind/any CSS framework — vanilla CSS only"
- "Pick one accent color and one distinctive heading font, and stay consistent — no gradient text, no glassmorphism"
- "Rewrite all copy in first person, natural tone — don't just restate CV bullet points verbatim"
- "Feature the LISS-IV SAR project prominently — it has quantifiable results (33.62 dB PSNR, 0.96 SSIM)"
- "Keep animations subtle — one-time scroll reveals only, no continuous loops"

---

## 10. Changelog

| Date | Change |
|------|--------|
| 2026-09-08 | **Initial build** — full portfolio scaffolded (HTML, 5 CSS files, 2 JS files). Dark cool-minimal palette (Option B) initially used. |
| 2026-09-08 | **Resume wired** — `CV.pdf` copied to `assets/resume.pdf`; `download="Pranjal_Gupta_Resume.pdf"` added to nav and hero resume links so clicking triggers a download instead of opening in-browser. |
