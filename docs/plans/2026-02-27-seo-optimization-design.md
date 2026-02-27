# SEO Optimization Design — akindejuh.netlify.app

**Goal:** Rank highly for "Akindeju" and "Akindeju Oluwagbemiga" on Google.

**Approach:** Technical SEO + Social Proof Metadata (Approach 2)

## 1. Rich Metadata (`layout.tsx`)

Expand the `Metadata` export with:

- **Title:** `Akindeju Oluwagbemiga | Software Engineer — React Native, React.js, Node.js`
- **Description:** `Akindeju Oluwagbemiga is a Software Engineer at Benmore Technologies with 4+ years building scalable mobile and web applications. Shipped 15+ apps to 3M+ users across fintech and enterprise. Specializes in React Native, React.js, Node.js, and TypeScript.`
- **Keywords:** Akindeju, Akindeju Oluwagbemiga, akindejuh, Software Engineer Nigeria, React Native Developer, React Developer, Node.js Developer, TypeScript Developer, Benmore Technologies, Mobile App Developer Nigeria, Full Stack Developer
- **metadataBase:** `https://akindejuh.netlify.app`
- **authors:** Akindeju Oluwagbemiga
- **Open Graph:** type website, full title/description, locale en_US, OG image 1200x630
- **Twitter Card:** summary_large_image, creator @akindejuh
- **Canonical URL:** `https://akindejuh.netlify.app`
- **robots:** index: true, follow: true

## 2. JSON-LD Structured Data (Person Schema)

Inject a `<script type="application/ld+json">` in `layout.tsx`:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Akindeju Oluwagbemiga",
  "alternateName": "akindejuh",
  "url": "https://akindejuh.netlify.app",
  "jobTitle": "Software Engineer",
  "worksFor": { "@type": "Organization", "name": "Benmore Technologies" },
  "knowsAbout": ["React Native", "React.js", "Node.js", "TypeScript", "Mobile Development"],
  "sameAs": [
    "https://github.com/akindejuh",
    "https://linkedin.com/in/akindeju-oluwagbemiga-004b95225",
    "https://twitter.com/akindejuh",
    "https://instagram.com/akindejuh"
  ]
}
```

## 3. Sitemap

Create `src/app/sitemap.ts` that generates a sitemap for the static export. Since `output: 'export'` doesn't run the Next.js sitemap API at request time, we generate a static `public/sitemap.xml` instead.

## 4. Updated robots.txt

Add sitemap reference:

```
User-agent: *
Disallow:

Sitemap: https://akindejuh.netlify.app/sitemap.xml
```

## 5. OG Image

Create a static `public/og-image.png` (1200x630) with:
- Name: Akindeju Oluwagbemiga
- Title: Software Engineer
- Dark theme matching portfolio aesthetic
- Generated via canvas/SVG or manually created

## 6. Manifest.json Fix

Update `short_name` and `name` from CRA defaults to actual portfolio info.

## 7. Semantic HTML in Hero

Add visible full name text alongside the @akindejuh handle so Google can index the full name from the page content.
