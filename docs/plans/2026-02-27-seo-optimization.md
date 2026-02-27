# SEO Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Make akindejuh.netlify.app rank highly when anyone searches "Akindeju" or "Akindeju Oluwagbemiga" on Google.

**Architecture:** Expand Next.js Metadata API in `layout.tsx` with rich meta tags, Open Graph, Twitter Cards, and JSON-LD Person schema. Add static sitemap, OG image, and semantic HTML improvements to the hero section.

**Tech Stack:** Next.js 15 (App Router, static export), TypeScript, Schema.org JSON-LD

---

### Task 1: Expand Metadata in layout.tsx

**Files:**
- Modify: `src/app/layout.tsx:1-12`

**Step 1: Replace the metadata export**

Replace the entire `metadata` export in `src/app/layout.tsx` with rich metadata including Open Graph, Twitter Cards, canonical URL, keywords, and author info. The title should lead with "Akindeju Oluwagbemiga" for name-based search ranking. Set `metadataBase` to `https://akindejuh.netlify.app`. Include OG image reference at `/og-image.png` (1200x630).

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: Build succeeds with no type errors.

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): add rich metadata with Open Graph and Twitter Cards"
```

---

### Task 2: Add JSON-LD Structured Data

**Files:**
- Modify: `src/app/layout.tsx:14-24` (the RootLayout component)

**Step 1: Add JSON-LD Person schema**

Add a `<script type="application/ld+json">` inside `<head>` in the RootLayout component. The JSON-LD should use Schema.org Person type with:
- name: "Akindeju Oluwagbemiga"
- alternateName: "akindejuh"
- url: "https://akindejuh.netlify.app"
- image: "https://akindejuh.netlify.app/logo.jpg"
- jobTitle: "Software Engineer"
- worksFor: Benmore Technologies
- alumniOf: Federal University of Technology, Akure
- knowsAbout: React Native, React.js, Node.js, TypeScript, JavaScript, Mobile/Web Development
- sameAs: GitHub, LinkedIn, Twitter, Instagram profiles

Note: The JSON-LD content is a static string we fully control — this is the standard Next.js pattern for structured data injection.

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/app/layout.tsx
git commit -m "feat(seo): add JSON-LD Person schema structured data"
```

---

### Task 3: Add Semantic Name to Hero Section

**Files:**
- Modify: `src/sections/hero.tsx:81-88`

**Step 1: Add full name as visible text**

Below the `<h1>@akindejuh</h1>` and before the accent line divider, add a `<p>` element containing "Akindeju Oluwagbemiga" styled in `text-[#737373]` with `font-space-grotesk-500 text-lg md:text-xl mt-3`. This gives Google crawlable full-name text on the page.

**Step 2: Verify build compiles**

Run: `npm run build`
Expected: Build succeeds.

**Step 3: Commit**

```bash
git add src/sections/hero.tsx
git commit -m "feat(seo): add full name to hero for search indexing"
```

---

### Task 4: Create Static Sitemap and Update robots.txt

**Files:**
- Create: `public/sitemap.xml`
- Modify: `public/robots.txt`

**Step 1: Create sitemap.xml**

Since the app uses `output: 'export'` (static), create a static XML sitemap at `public/sitemap.xml` with one entry for `https://akindejuh.netlify.app`, priority 1.0, changefreq monthly, lastmod 2026-02-27.

**Step 2: Update robots.txt**

Replace `public/robots.txt` to allow all agents and reference the sitemap:

```
User-agent: *
Disallow:

Sitemap: https://akindejuh.netlify.app/sitemap.xml
```

**Step 3: Commit**

```bash
git add public/sitemap.xml public/robots.txt
git commit -m "feat(seo): add sitemap.xml and update robots.txt"
```

---

### Task 5: Create OG Image

**Files:**
- Create: `public/og-image.png`

**Step 1: Generate a 1200x630 OG image**

Create a 1200x630px PNG image with:
- Dark background (#0a0a0a) matching the portfolio theme
- "Akindeju Oluwagbemiga" in large white text (centered)
- "Software Engineer" subtitle in accent color
- Clean, minimal design

Use a Node.js canvas script, SVG conversion, or any image generation approach.

**Step 2: Verify file exists**

```bash
file public/og-image.png
```

Expected: PNG image data, 1200 x 630

**Step 3: Commit**

```bash
git add public/og-image.png
git commit -m "feat(seo): add Open Graph preview image"
```

---

### Task 6: Fix manifest.json

**Files:**
- Modify: `public/manifest.json`

**Step 1: Update manifest with correct app info**

Replace CRA defaults: `short_name` to "akindejuh", `name` to "Akindeju Oluwagbemiga — Software Engineer", `theme_color` and `background_color` to "#0a0a0a" to match the dark portfolio theme.

**Step 2: Commit**

```bash
git add public/manifest.json
git commit -m "fix(seo): update manifest.json from CRA defaults"
```

---

### Task 7: Final Build Verification

**Step 1: Run full build**

Run: `npm run build`
Expected: Build succeeds with no errors.

**Step 2: Inspect the output HTML**

```bash
head -50 out/index.html
```

Expected: Should contain meta tags for description, Open Graph, Twitter, canonical URL, and the JSON-LD script tag.
