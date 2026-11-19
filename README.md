# Girish Lade — Personal Portfolio & LadeStack Showcase

A responsive, multi-page personal portfolio website for **Girish Balaso Lade** (`Girish Lade`) — UI/UX Designer, Full-Stack Developer, and Founder of **LadeStack** (`https://ladestack.in/`), based in Pune, Maharashtra, India.

Built as a single-column (`max-w-[540px]`) dark frosted-glass web application over a fixed coastal dusk backdrop, combining tactile `motion/react` choreography, client-side routing, transparent project documentation, and technical writing utilities.

---

## Table of Contents

- [Core Features](#core-features)
- [Routes & Pages](#routes--pages)
- [Technical Notes Engine (Reading Time, Copy Link & Related Posts)](#technical-notes-engine-reading-time-copy-link--related-posts)
- [Projects Catalog](#projects-catalog)
- [Design System & Motion Tokens](#design-system--motion-tokens)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started & Scripts](#getting-started--scripts)
- [Testing & Verification](#testing--verification)
- [Build & Deployment Notes](#build--deployment-notes)
- [Updating Portfolio Content](#updating-portfolio-content)
- [Architecture & Transparency Notes](#architecture--transparency-notes)
- [Contact & Public Profiles](#contact--public-profiles)

---

## Core Features

- **Fixed Atmospheric Backdrop & Glass Surface Hierarchy**
  - A full-viewport, non-repeating fixed backdrop (`SiteBackground.tsx`) stays anchored across all route transitions, layered behind centered translucent dark glass cards (`GlassCard` and `GlassCardHero`).
- **Dual-Mode Navigation**
  - **Desktop (`md+`)**: Floating vertical icon rail (`FloatingNavigation.tsx`) pinned on the right side of the viewport with shared-element `layoutId` active indicator and hover tooltips.
  - **Mobile (`< md`)**: Compact fixed bottom glass navigation dock (`MobileNavigation.tsx`) with `aria-current` support and tactile tap feedback.
  - Nested routes (e.g., `/projects/gb-coder` and `/blog/designing-local-first-web-applications`) automatically highlight their parent section via `normalizeRouteSection()`.
- **Animated Route Transitions & Scroll Reveal**
  - Top-level `MotionConfig reducedMotion="user"` respects system motion preferences.
  - `AnimatePresence mode="wait"` drives smooth route enter/exit transitions in `App.tsx`, while `RouteSync` resets scroll position and updates `document.title` per route.
- **Interactive Capabilities & Journey Accordions**
  - Expandable/collapsible `Accordion.tsx` lists with animated height/opacity (`accordionVariants`), supporting both compact capability pills (`CAPABILITIES` on `/`) and detailed practice entries (`JOURNEY_PRACTICE` on `/about`).
- **Honest Client-Side Contact & Updates Workflows**
  - `ContactForm.tsx` validates inputs (`validateContactForm`) and generates a pre-filled `mailto:admin@ladestack.in` handoff alongside one-click message copying—explicitly disclosing that no remote backend captures form submissions.
  - `NewsletterCard.tsx` validates emails (`validateNewsletterEmail`), stores addresses locally in `localStorage` (`girish_updates_waitlist`), and provides a direct `mailto:` fallback when no mailing-list backend is connected.

---

## Routes & Pages

| Route | Component | Purpose & Key Sections |
| :--- | :--- | :--- |
| `/` | `HomePage` | Identity hero (`GL` studio mark, short bio, primary CTAs), interactive 3-card fanned portfolio preview (`GB Coder`, `LadeStack`, `LS PDF`), infinite positioning strip, `Capabilities` accordion, personal philosophy quote card, `Notes & Writing` preview (top 4 posts), `PhilosophyCard`, `NewsletterCard`, `ConnectCard`, and `SiteFooter`. |
| `/projects` | `ProjectsPage` | Header hero with `BackButton` and staggered vertical stack of all 9 `PROJECTS` rendered via `ProjectCard`. |
| `/projects/:slug` | `ProjectDetailPage` | 4:3 cover hero with `BackButton`, category/status subtitle, role bar, optional source repository link, live project CTA, `Overview` (with honest `disclaimer` callout when applicable), numbered `Primary Use Cases`, `Technologies & Focus`, official link summary card, and fallback "Project not found" view. |
| `/blog` | `BlogPage` | Header hero and complete staggered list of all 5 Technical Notes via `BlogCard`. |
| `/blog/:slug` | `BlogDetailPage` | 4:3 cover hero with `BackButton`, `Copy Link` button with portal toast notification, category & estimated reading time (`Technical Note · Category · X min read`), structured article body (`summary`, headed sections, unboxed `Topics:` footer), **Related Posts** card (2 suggested posts), `NewsletterCard`, `ConnectCard`, and fallback "Note not found" view. |
| `/about` | `AboutPage` | Editorial hero card, extended engineering-to-software biography, `Education Foundation`, `Journey & Practice` detailed accordion, and `PhilosophyCard`. |
| `/contact` | `ContactPage` | Direct email header (`admin@ladestack.in`), interactive `ContactForm`, chat-bubble `ContactFaqCard` (`CONTACT_FAQS`), `NewsletterCard`, and `ConnectCard`. |
| `*` | `NotFoundPage` | Clean fallback route for unrecognized paths with navigation back to `/`. |

---

## Technical Notes Engine (Reading Time, Copy Link & Related Posts)

All blog utilities are implemented as pure, unit-tested TypeScript functions in `src/utils/portfolioHelpers.ts` and consumed by `src/pages/BlogDetailPage.tsx`:

### 1. Estimated Reading Time
- `countWords(text)` and `getArticleWordCount(article)` sum words across `title`, `summary`, and every section's optional `heading` and `body`.
- `estimateReadingTimeMinutes(article, wordsPerMinute = 200)` returns `Math.max(1, Math.ceil(words / wordsPerMinute))`.
- Rendered in the `BlogDetailPage` hero metadata line with `tabular-nums` (e.g., `Technical Note · Web Architecture · 2 min read`).

### 2. Copy Link + Portal Toast
- Clicking **Copy Link** constructs the canonical URL via `getBlogPostUrl(window.location.origin, article.slug)`.
- Attempts `navigator.clipboard.writeText(url)` first and automatically falls back to a hidden `<textarea>` + `document.execCommand('copy')` when browser clipboard permissions are restricted.
- Renders a solid-surface (`#121216`) confirmation or error toast via `ReactDOM.createPortal(..., document.body)` so `backdrop-filter` and transformed `<PageTransition>` ancestors never cause visual bleed-through. Auto-dismisses after `3200ms`.

### 3. Related Posts Matching
- Every `BlogArticle` in `src/data/portfolio.ts` carries a `category` and `tags[]` array.
- `getSharedPostTags(currentPost, candidatePost)` performs case-insensitive tag intersection while preserving tag order.
- `getRelatedBlogPosts(currentPost, allPosts = BLOG_POSTS, limit = 2)`:
  1. Excludes the active article (`post.slug !== currentPost.slug`).
  2. Scores each candidate post:
     $$\text{score} = |\text{sharedTags}| + (\text{sameCategory} \;?\; 2 : 0)$$
  3. Sorts descending by score and preserves original `allPosts` order on ties.
  4. Returns the top `2` posts.
- `BlogDetailPage` displays these 2 suggestions inside a **Related Posts** `GlassCard` below the article body, showing each post's category, estimated reading time, and up to two shared tags in clean unboxed metadata.

#### Current Technical Notes (`BLOG_POSTS`)

| Slug | Title | Category | Tags |
| :--- | :--- | :--- | :--- |
| `designing-local-first-web-applications` | Designing Local-First Web Applications | Web Architecture | `local-first`, `browser-first`, `indexeddb`, `privacy`, `portability` |
| `building-development-workflows-in-the-browser` | Building Development Workflows in the Browser | Developer Tooling | `browser-first`, `developer-tools`, `webcontainers`, `monaco-editor`, `portability` |
| `designing-useful-documentation-systems` | Designing Useful Documentation Systems | Developer Tooling | `documentation`, `markdown`, `pdf`, `developer-tools`, `portability` |
| `ai-assistance-without-losing-user-control` | AI Assistance Without Losing User Control | AI & Engineering | `ai-workflows`, `byok`, `developer-tools`, `privacy`, `verification` |
| `shipping-discoverable-multilingual-websites` | Shipping Discoverable Multilingual Websites | Web Architecture | `astro`, `technical-seo`, `localization`, `static-sites`, `documentation` |

---

## Projects Catalog

Defined in `PROJECTS` inside `src/data/portfolio.ts`:

1. **LadeStack** (`/projects/ladestack`) — Developer Ecosystem · Product Platform (`https://ladestack.in/`)
2. **GB Coder** (`/projects/gb-coder`) — Developer Tools · Online IDE (`https://code.ladestack.in/`)
3. **LS PDF** (`/projects/ls-pdf`) — Documents · PDF Toolkit (`https://pdf.ladestack.in/`)
4. **MD2PDF** (`/projects/md2pdf`) — Documentation · Markdown Publishing (`https://md2pdf.ladestack.in/`)
5. **Bharat Land Converter** (`/projects/bharat-land-converter`) — Engineering & Measurement · Unit Converter (`https://land.ladestack.in/`)
6. **Swift Resume** (`/projects/swift-resume`) — Career Productivity · Resume Builder (`https://resume.ladestack.in/`)
7. **LS Image Compressor** (`/projects/ls-image-compressor`) — Image Utilities · Web Performance (`https://img.ladestack.in/`)
8. **GameHub** (`/projects/gamehub`) — Games · Interactive Frontend (`https://games-ladestack.vercel.app/`)
9. **LadeStack Drive** (`/projects/ladestack-drive`) — File Management · Storage Experiment (`https://drive.ladestack.in/`, explicitly marked **`Experimental / Verification Pending`**)

---

## Design System & Motion Tokens

### Styling & Theme (`src/index.css` & `index.html`)
- **Typography**: `Plus Jakarta Sans` (UI & editorial body) and `JetBrains Mono` (code/monogram/topic metadata), loaded via Google Fonts in `index.html` and mapped in `@theme`.
- **Palette Tokens**:
  - Background / Ink Dark: `#09090b`
  - Accent White: `#ffffff` (hover `#e4e4e7`, rgb: `255, 255, 255`)
  - Glass Surface: `rgba(14, 14, 16, 0.72)` / Dense: `rgba(11, 11, 13, 0.84)`
  - Hairline Borders: `rgba(255, 255, 255, 0.085)` (hover `rgba(255, 255, 255, 0.16)`)
- **Layout Geometry**: Single-column container (`max-w-[540px]`), large rounded cards (`28px` / `32px`), subtle dark custom scrollbars, and unboxed `·`-separated metadata lines.

### Motion Choreography (`src/motion/variants.ts`)
- **Easings & Springs**: `easeOutExpo` (`[0.16, 1, 0.3, 1]`), `easeSubtle` (`[0.22, 1, 0.36, 1]`), `springTactile`, and `springGentle`.
- **Variants**: `pageVariants`, `cardVariants`, `sectionVariants`, `staggerContainerVariants`, `staggerItemVariants`, `buttonVariants`, `navItemVariants`, `imageVariants`, `accordionVariants`, and `overlayVariants`.

---

## Tech Stack

| Category | Package / Tool | Version |
| :--- | :--- | :--- |
| UI Framework | `react` / `react-dom` | `^19.0.1` |
| Routing | `react-router-dom` | `^7.18.5` |
| Language | `typescript` | `^7.0.2` |
| Build Tool | `vite` / `@vitejs/plugin-react` | `^8.3.0` / `^6.1.1` |
| Styling | `tailwindcss` / `@tailwindcss/vite` | `^4.3.3` |
| Animation | `motion` (`motion/react`) | `^12.23.24` |
| Icons | `lucide-react` | `^0.546.0` |
| TS Runner & Tests | `tsx` + built-in `node:test` | `^4.21.0` |

> Note: `package.json` also includes `@google/genai`, `express`, and `dotenv` from the starter workspace template, though the portfolio application itself runs purely as a client-side Vite/React SPA without server routes or AI runtime calls.

---

## Project Structure

```text
.
├── index.html                        # Entry HTML, fonts (Plus Jakarta Sans, JetBrains Mono), OG/meta tags
├── metadata.json                     # App metadata & capabilities declaration
├── package.json                      # Scripts & dependencies
├── tsconfig.json                     # TypeScript compiler options
├── vite.config.ts                    # Vite + React + Tailwind v4 + unbundled src/assets copy plugin
├── .env.example                      # Template environment variables
└── src/
    ├── App.tsx                       # MotionConfig, BrowserRouter, RouteSync, AnimatePresence routes
    ├── main.tsx                      # React root mount
    ├── index.css                     # Tailwind v4 import, @theme tokens, root variables, scrollbar styles
    ├── assets/
    │   └── images/                   # Generated architectural & editorial visual assets
    ├── components/
    │   ├── Accordion.tsx             # Animated pill & detailed accordions
    │   ├── AnimatedButton.tsx        # Tactile primary/dark button & link wrapper
    │   ├── BackButton.tsx            # Route back button with chevron motion
    │   ├── BlogCard.tsx              # Technical note preview row with optional metadata override
    │   ├── ConnectCard.tsx           # Social & email links card
    │   ├── ContactFaqCard.tsx        # Chat-bubble FAQ conversation layout
    │   ├── ContactForm.tsx           # Validated contact form with mailto & clipboard handoff
    │   ├── FloatingNavigation.tsx    # Desktop right-rail floating icon dock
    │   ├── GlassCard.tsx             # Translucent GlassCard & GlassCardHero containers
    │   ├── MobileNavigation.tsx      # Mobile bottom navigation dock
    │   ├── MotionReveal.tsx          # Viewport-triggered reveal wrapper
    │   ├── NewsletterCard.tsx        # Local waitlist capture + mailto fallback card
    │   ├── PageShell.tsx             # Centered 540px column + PageTransition wrapper
    │   ├── PhilosophyCard.tsx        # Product philosophy highlight card
    │   ├── ProjectCard.tsx           # Project cover & summary card
    │   ├── ProjectDetailSection.tsx  # Structured section wrapper for project detail views
    │   ├── SectionHeading.tsx        # Reusable eyebrow/title/subtitle header
    │   ├── SiteBackground.tsx        # Fixed full-bleed coastal dusk background & subtle vignette
    │   ├── SiteFooter.tsx            # Brand attribution & copyright footer
    │   └── SocialLinks.tsx           # Icon links for GitHub, LinkedIn, Instagram, CodePen, Email
    ├── data/
    │   └── portfolio.ts              # Typed portfolio profile, capabilities, journey, projects, blog posts, FAQs
    ├── motion/
    │   └── variants.ts               # Centralized Motion tokens & animation variants
    ├── pages/
    │   ├── HomePage.tsx
    │   ├── ProjectsPage.tsx
    │   ├── ProjectDetailPage.tsx
    │   ├── BlogPage.tsx
    │   ├── BlogDetailPage.tsx
    │   ├── AboutPage.tsx
    │   ├── ContactPage.tsx
    │   └── NotFoundPage.tsx
    └── utils/
        ├── portfolioHelpers.ts       # Validation, mailto builders, slug lookup, reading time, related posts
        └── portfolioHelpers.test.ts  # Node test suite for pure helper logic
```

---

## Getting Started & Scripts

### Prerequisites
- **Node.js** (v20+ recommended for `--test` + `tsx` compatibility)
- **npm**

### Installation & Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start the Vite dev server on http://localhost:3000
npm run dev
```

### Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts Vite development server bound to `0.0.0.0:3000`. |
| `npm run build` | Compiles production bundle into `dist/` and copies `src/assets/` into `dist/src/assets/`. |
| `npm run preview` | Serves the production `dist/` build locally for inspection. |
| `npm run lint` | Runs `tsc --noEmit` to verify strict TypeScript types across the codebase. |
| `npm run clean` | Removes `dist/` and `server.js`. |

---

## Testing & Verification

Pure business logic in `src/utils/portfolioHelpers.ts` is tested independently of the React DOM using Node's native test runner via `tsx`:

```bash
npx --yes tsx --test src/utils/portfolioHelpers.test.ts
```

The test suite covers:
- Contact form validation (`validateContactForm`) and email validation (`validateNewsletterEmail`)
- URL-encoded `mailto:` payload generation (`buildMailtoHref`)
- Project & blog slug lookups (`getProjectBySlug`, `getBlogPostBySlug`), including `"Experimental / Verification Pending"` metadata on `ladestack-drive`
- Route-to-navigation-section normalization (`normalizeRouteSection`)
- Word counting, estimated reading time calculation, and formatting (`countWords`, `getArticleWordCount`, `estimateReadingTimeMinutes`, `formatReadingTime`)
- Canonical blog URL normalization (`getBlogPostUrl`)
- Tag/category similarity ranking and edge cases (`getSharedPostTags`, `getRelatedBlogPosts`)

Run a full pre-deploy check with:

```bash
npx --yes tsx --test src/utils/portfolioHelpers.test.ts && npm run lint && npm run build
```

---

## Build & Deployment Notes

- **Unbundled Asset Copying (`vite.config.ts`)**: `SITE_ASSETS` references images via root-relative paths (`/src/assets/images/...`). The custom `copy-unbundled-src-assets` Vite build plugin copies `src/assets` into `dist/src/assets` during `npm run build` so all hero and cover images resolve reliably in production.
- **SPA Client-Side Routing**: Because the app uses `BrowserRouter` (`History` API) for clean paths like `/projects/gb-coder` and `/blog/designing-local-first-web-applications`, static hosts (Vercel, Netlify, Cloudflare Pages, Nginx) should be configured to rewrite unknown paths to `/index.html`.
- **HMR Control**: `vite.config.ts` respects `DISABLE_HMR=true` to disable HMR and file watching in automated environments.

---

## Updating Portfolio Content

All portfolio copy, projects, technical notes, capabilities, and FAQs live in a single typed module: `src/data/portfolio.ts`.

- **Add a Project**: Append a `ProjectItem` object to `PROJECTS`. Set `status: 'experimental'` and `statusNote` / `disclaimer` if a project is unverified or experimental.
- **Add a Technical Note**: Append a `BlogArticle` object to `BLOG_POSTS` with a unique `slug`, `category`, `tags[]`, `summary`, `coverImage`, and `paragraphs[]`. Reading time, canonical copy URLs, and **Related Posts** recommendations update automatically.
- **Update Profile / Socials**: Edit `PROFILE`, `CAPABILITIES`, `JOURNEY_PRACTICE`, or `CONTACT_FAQS` in `src/data/portfolio.ts`.

---

## Architecture & Transparency Notes

- **No Fabricated Claims or Telemetry**: All portfolio copy avoids unverified metrics, synthetic testimonials, or invented dates. `LadeStack Drive` is explicitly labeled `Experimental / Verification Pending`.
- **Client-Only Forms**: Neither `ContactForm` nor `NewsletterCard` posts data to an external server; both clearly inform the visitor and offer direct email (`mailto:`) / clipboard alternatives.

---

## Contact & Public Profiles

- **Website / Brand**: [ladestack.in](https://ladestack.in/)
- **Email**: `admin@ladestack.in`
- **GitHub**: [github.com/girishlade111](https://github.com/girishlade111)
- **LinkedIn**: [linkedin.com/in/girish-lade](https://www.linkedin.com/in/girish-lade/)
- **Instagram**: [instagram.com/girish_lade_](https://www.instagram.com/girish_lade_/)
- **CodePen**: [codepen.io/Girish-Lade-the-looper](https://codepen.io/Girish-Lade-the-looper)
