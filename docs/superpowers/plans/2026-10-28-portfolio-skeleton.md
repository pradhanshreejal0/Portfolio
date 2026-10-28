# Portfolio Skeleton Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, responsive developer portfolio skeleton for Shreejal Pradhan (MERN-Stack Developer) featuring real project showcases (including Foundry), interactive section navigation, categorized skills, and contact channels.

**Architecture:** A responsive two-column layout on desktop (sticky sidebar on left, scrollable content feed on right) and mobile top-bar header with drawer navigation. Modular data files (`src/data/projects.js` and `src/data/skills.js`) decouple content from presentation. Reusable UI components provide clean card and badge presentations.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, Lucide React (`lucide-react`).

**Spec:** User request to create the entire portfolio skeleton with real projects (specifically Foundry and MERN stack work) and responsive layout.

## Global Constraints

- Tailwind CSS v4 `@import "tailwindcss";` in `src/index.css`.
- React 19 compatibility (no deprecated lifecycles or incompatible libraries).
- Fully responsive across mobile (<768px) and desktop (>=768px).
- All navigation links (`#about`, `#projects`, `#skills`, `#contact`) correspond to valid section `id`s.
- Clean build passing `npm run build` with zero errors.

## Review Focus

1. Mobile navigation: Hamburger menu opens and closes reliably without trapping scrolling or hiding content.
2. Anchor jumping: Clicking navigation links smoothly scrolls to `#about`, `#projects`, `#skills`, and `#contact`.
3. Outbound links: Links to external URLs (GitHub repo, Foundry live demo) open securely with `rel="noreferrer" target="_blank"`.
4. Empty state / missing images: Project cards render gracefully even if thumbnail images fail to load or are placeholders.
5. Build output: Vite production build completes with zero lint or JSX errors.

---

### Task 1: Portfolio Content Data Layer

**Files:**
- Create: `src/data/projects.js`
- Create: `src/data/skills.js`

**Interfaces:**
- Produces: `projects` array of objects (`{ id, title, subtitle, description, highlights, tags, liveUrl, githubUrl, featured, category }`)
- Produces: `skillsData` array of categories (`{ category, icon, skills: [{ name, level, note }] }`)

- [ ] **Step 1: Create `src/data/projects.js`**
Define real projects:
1. Foundry - Multi-Vendor E-Commerce Platform (Live: `https://foundry-ruby.vercel.app`, Repo: `https://github.com/pradhanshreejal0/Foundry`), MERN stack, Dark & Gold aesthetic, multi-vendor dashboard, JWT auth, cart/checkout.
2. DevPortfolio - Modern Personal Portfolio (Repo: `https://github.com/pradhanshreejal0/Portfolio`), React 19, Tailwind CSS v4, responsive layout.
3. TaskForge - Real-Time Collaborative Task Manager (MERN + Socket.io showcase project).
4. Nexus API - RESTful API Gateway & Auth Service (Node.js, Express, MongoDB, Redis showcase).

- [ ] **Step 2: Create `src/data/skills.js`**
Define categorized skills:
- Frontend: React 19, JavaScript (ES6+), Tailwind CSS v4, HTML5/CSS3, Responsive UI.
- Backend: Node.js, Express.js, RESTful APIs, JWT Authentication, MVC Pattern.
- Database: MongoDB, Mongoose ODM.
- Tools & DevOps: Git, GitHub, Vite, Postman, Vercel, npm/pnpm.

- [ ] **Step 3: Verification**
Verify data structures by importing into a temporary test or validating file syntax.

---

### Task 2: Reusable UI Components

**Files:**
- Create: `src/components/ui/ProjectCard.jsx`
- Create: `src/components/ui/SkillBadge.jsx`
- Create: `src/components/ui/SectionHeading.jsx`

**Interfaces:**
- Consumes: Project objects from `src/data/projects.js`
- Produces: `ProjectCard({ project })`, `SkillBadge({ name, note })`, `SectionHeading({ title, subtitle, id })`

- [ ] **Step 1: Create `src/components/ui/SectionHeading.jsx`**
Clean section title with subtitle and subtle decorative divider.

- [ ] **Step 2: Create `src/components/ui/SkillBadge.jsx`**
Pill-style badge with hover animation and dark slate contrast styling.

- [ ] **Step 3: Create `src/components/ui/ProjectCard.jsx`**
Card with title, badge tags, description, feature bullets, and live demo / GitHub action buttons with icons.

---

### Task 3: Portfolio Sections

**Files:**
- Create: `src/components/sections/Hero.jsx`
- Create: `src/components/sections/About.jsx`
- Create: `src/components/sections/Projects.jsx`
- Create: `src/components/sections/Skills.jsx`
- Create: `src/components/sections/Contact.jsx`

**Interfaces:**
- Consumes: `src/data/projects.js`, `src/data/skills.js`, UI components from Task 2
- Produces: Section components anchored by `id="hero"`, `id="about"`, `id="projects"`, `id="skills"`, `id="contact"`.

- [ ] **Step 1: Create `Hero.jsx`**
Hero banner with greeting, name "Shreejal Pradhan", "MERN-Stack Developer", introduction, CTA buttons ("Explore Projects", "Get in Touch"), and quick status badge.

- [ ] **Step 2: Create `About.jsx` (`id="about"`)**
Detailed developer narrative: background in fullstack JavaScript development, passion for high-performance responsive web apps, and key pillars (Fullstack Architecture, Clean UI/UX, Performance).

- [ ] **Step 3: Create `Projects.jsx` (`id="projects"`)**
Grid layout rendering `ProjectCard` for all projects, highlighting Foundry as the flagship project with a "Featured Project" badge.

- [ ] **Step 4: Create `Skills.jsx` (`id="skills"`)**
Grouped grid rendering each technical category (Frontend, Backend, Database, Tools) with `SkillBadge`s.

- [ ] **Step 5: Create `Contact.jsx` (`id="contact"`)**
Contact info cards (Email, GitHub, LinkedIn, Location) and an interactive contact message form with client-side submit feedback.

---

### Task 4: Responsive Navigation and Layout Shell

**Files:**
- Modify: `src/components/layouts/Sidebar.jsx`
- Create: `src/components/layouts/MobileNav.jsx`
- Modify: `src/components/layouts/Layout.jsx`
- Modify: `src/pages/Home.jsx`
- Modify: `src/App.jsx`

**Interfaces:**
- Consumes: All section components from Task 3
- Produces: Cohesive responsive layout where navigation seamlessly controls scroll position across mobile and desktop.

- [ ] **Step 1: Enhance `Sidebar.jsx`**
Modernize sidebar with avatar fallback, active link state detection (IntersectionObserver or hash state), social buttons with Lucide icons, and quick resume/contact button.

- [ ] **Step 2: Create `MobileNav.jsx`**
Sticky top bar for screen widths under `md:` (768px), brand avatar/name, hamburger menu button, animated drop-down drawer with nav links.

- [ ] **Step 3: Update `Layout.jsx`**
Integrate `Sidebar` on desktop (`w-72 hidden md:flex sticky top-0 h-screen`), `MobileNav` on mobile (`md:hidden sticky top-0 z-50`), and main scrollable content area.

- [ ] **Step 4: Update `Home.jsx`**
Assemble `<Hero />`, `<About />`, `<Projects />`, `<Skills />`, `<Contact />`, and a clean footer.

- [ ] **Step 5: Update `App.jsx`**
Connect `Layout` and `Home` with smooth scroll behavior.

---

### Task 5: Build Verification and Final Polish

**Files:**
- Verify: Entire `src/` directory
- Run: `npm run build`

- [ ] **Step 1: Build test**
Run `npm run build` to ensure all JSX, imports, and Tailwind classes bundle cleanly without errors.

- [ ] **Step 2: Verify responsive design and interactive elements**
Ensure all links, anchor jumps, and mobile menu toggles operate as expected.
