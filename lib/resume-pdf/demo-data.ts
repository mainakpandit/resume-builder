import { ResumeData } from "./types";

export const demoResumeData: ResumeData = {
  name: "Mainak Pandit",
  contact: {
    email: "mainakpandit@gmail.com",
    phone: "+91-7807140093",
    linkedin: "linkedin.com/in/mainakpandit",
    website: "mainakpandit.com",
  },
  summary:
    "Senior Frontend Engineer with 5+ years of shipping React and TypeScript products at early stage startups, mostly in small distributed teams. I've worked across the full product cycle: figuring out what to build with founders and PMs, writing the code, measuring what happened, and iterating from there. Comfortable picking up backend work, wiring up analytics, or jumping into unfamiliar parts of the stack when the team needs it. I care about building things that actually work well for the people using them.",
  skills: {
    Languages: "TypeScript, JavaScript (ES6+), HTML5, CSS3",
    "Frontend & Frameworks":
      "React, Next.js, Svelte, SvelteKit, State Management (Redux/Zustand/TanStack Query), RESTful APIs, CSS Modules, Data Visualization",
    "Backend & Tooling":
      "Node.js, Express, Nunjucks, BFF (Backend for Frontend) Patterns",
    "Architecture & Platforms":
      "Frontend Architecture, Monorepo tooling (Nx), Micro-frontends, Design Systems, API Integration Patterns",
    "Performance & Quality":
      "Core Web Vitals, Performance Tuning (load times, bundle size, responsiveness), Accessibility (WCAG/ARIA), A/B testing, Playwright, Jest, Vitest",
    "Tooling & DevOps":
      "Vite, Webpack, CI/CD, GitHub Actions, Storybook, Observability (Datadog, Sentry)",
  },
  experience: [
    {
      company: "Cone (YC S22)",
      location: "Hyderabad, India",
      title: "Founding Frontend Engineer",
      startDate: "07/2023",
      endDate: "02/2026",
      bullets: [
        "Owned frontend architecture and technical direction across two production applications in a 5 engineer startup, working directly with founders on roadmap priorities, product calls, and shipping trade-offs.",
        "Built the proposal creation and signing platform end to end: WYSIWYG editor, Node.js PDF generation service, e-signature flow, and S3 document storage. This ended up being the product surface that drove most of the company's revenue.",
        "Consolidated the PDF rendering pipeline into a single shared source, cutting generation time by 60% and removing a bunch of duplicated logic that was slowing the team down.",
        "Migrated the frontend build from Create React App to Vite and restructured into a monorepo with shared libraries, which cut dev server startup time by roughly 90% and let the team ship noticeably faster.",
        "Improved observability with Datadog and test coverage. Replaced expensive third party tools with in-house alternatives during a budget crunch, saving around $2,000 a month.",
      ],
    },
    {
      company: "Simpl",
      location: "Bangalore, India",
      title: "Software Engineer",
      startDate: "11/2022",
      endDate: "06/2023",
      bullets: [
        "Identified a checkout drop-off, led the design and build of a custom Shopify integration that captured ~90% of checkout traffic and lifted transactions by nearly 60%. Iterated on the flow using conversion data with product and data teams.",
        "Migrated the frontend from Sapper to SvelteKit, which cut build times by about 50% and reduced bundle size by around 20%. The faster builds meant we could test and ship checkout experiments with a much shorter feedback loop.",
        "Built a Chrome extension (internal tool) for locating XPath selectors on Shopify product pages, used by the team to speed up checkout CTA placement across new merchants.",
      ],
    },
    {
      company: "Dukaan",
      location: "Bangalore, India",
      title: "Software Engineer",
      startDate: "04/2022",
      endDate: "10/2022",
      bullets: [
        "Helped design and build a programmatic page generation framework (Node.js + Nunjucks, loosely inspired by Shopify Liquid) that powered merchant storefronts at scale. It let us spin up new stores in minutes instead of days and cut page load times by around 50%.",
        "Wrote the team's first set of frontend coding guidelines and set up automated linting, formatting, and CI checks. Nothing fancy, but it got everyone on the same page and cut down on review friction.",
      ],
    },
    {
      company: "Josh Technology Group",
      location: "Gurugram, India",
      title: "Software Engineer",
      startDate: "02/2021",
      endDate: "04/2022",
      bullets: [
        "Built a shared React + TypeScript component library on Material UI to bring consistency across multiple apps, and led the migration of a legacy Ionic/AngularJS codebase to a modern stack.",
      ],
    },
  ],
  education: [
    {
      institution: "Jaypee University of Information Technology, India",
      location: "",
      degree: "B.Tech, Computer Science",
      startDate: "07/2017",
      endDate: "01/2021",
    },
  ],
};
