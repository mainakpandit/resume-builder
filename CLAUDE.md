# Claude Code Instructions for This Project

> This file guides Claude Code on how to contribute to this Next.js full stack project. Read it fully before writing or modifying any code.

---

## Project Overview

This is a full stack **Next.js** application. It uses modern Next.js conventions including the App Router, Server Components, and API Routes (or Route Handlers). The stack may include a database layer, authentication, and third-party integrations — check existing files before assuming anything about the setup.

---

## Critical: Read the Framework Docs First

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

Before writing **any** Next.js code:

1. Open `node_modules/next/dist/docs/` and read the guide relevant to your task.
2. Do not rely on memory of older Next.js APIs (`getServerSideProps`, `getStaticProps`, `pages/` directory patterns, etc.) unless confirmed present in the codebase.
3. If a deprecation notice appears anywhere, treat it as a hard blocker and use the recommended alternative.

---

## Folder Structure Conventions

Follow the structure already present in the repo. Do not invent new top-level directories. Typical layout to respect:

```
app/                  # App Router: layouts, pages, loading, error boundaries
  (route-groups)/     # Grouped routes with shared layouts
  api/                # Route Handlers (not pages/api)
components/           # Shared UI components
  ui/                 # Primitive/base components
lib/                  # Utility functions, helpers, shared logic
hooks/                # Custom React hooks (client-side only)
types/                # TypeScript type definitions
public/               # Static assets
```

If the project deviates from this, follow what is already there rather than reorganizing.

---

## Code Quality Standards

### TypeScript

- Use strict TypeScript throughout. No `any` unless absolutely unavoidable, and always leave a comment explaining why.
- Define explicit return types for all functions, especially async ones.
- Use `interface` for object shapes and `type` for unions, intersections, and aliases.
- Co-locate types with the code that uses them unless they are shared across multiple modules.

### React and Components

- Default to **React Server Components (RSC)**. Only add `"use client"` when the component genuinely needs browser APIs, event listeners, or client-side state.
- Keep components small and focused. If a component exceeds ~150 lines, consider splitting it.
- Use **named exports** for components, not default exports, except for page files (`page.tsx`, `layout.tsx`) which Next.js requires as default exports.
- Avoid prop drilling beyond two levels. Reach for context or co-location instead.

### Data Fetching

- Fetch data in Server Components wherever possible.
- Use Next.js built-in `fetch` with appropriate caching options (`cache`, `next.revalidate`) rather than client-side `useEffect` fetching.
- Never expose secrets or internal data structures to the client. Validate and shape data server-side before passing to client components.

### API Routes (Route Handlers)

- Place all Route Handlers under `app/api/`.
- Always validate request bodies and query parameters before processing. Use a schema library (e.g. Zod) if it is already in the project.
- Return typed `NextResponse` objects with appropriate HTTP status codes.
- Never trust client-supplied data without validation.

### Error Handling

- Use `error.tsx` boundaries at the appropriate route segment level.
- Wrap async server actions and data fetching in try/catch. Surface user-friendly errors, never raw stack traces.
- Log errors server-side with enough context to debug (route, user action, input shape).

### Styling

- Follow whatever styling solution is already in use (Tailwind CSS, CSS Modules, etc.). Do not introduce a new styling approach without being asked.
- Avoid inline styles except for truly dynamic values that cannot be expressed as classes.

### State Management

- Prefer URL state (`useSearchParams`, `useRouter`) for shareable or bookmarkable state.
- Use `useState` and `useReducer` for local UI state.
- Only introduce a global state library (Zustand, Jotai, etc.) if one already exists in the project.

---

## Performance Best Practices

- Use `next/image` for all images. Set explicit `width` and `height` or use `fill` with a positioned parent.
- Use `next/font` for font loading. Never import fonts via a `<link>` tag in the document head.
- Lazy-load heavy client components with `dynamic()` and `{ ssr: false }` where appropriate.
- Avoid large client bundles. Run `next build` and check the bundle analyzer output before finalizing any significant feature.
- Memoize expensive computations with `useMemo` and `useCallback` only when a measurable performance problem exists, not preemptively.

---

## Security

- Sanitize all user input before rendering or storing it.
- Use environment variables for all secrets. Never hardcode API keys, tokens, or credentials.
- Check `.env.example` (if present) to understand which variables are required before adding new ones.
- Apply authentication checks at the server level (middleware or Server Components), not only in the UI.
- Set appropriate HTTP headers (`Content-Security-Policy`, `X-Frame-Options`, etc.) via `next.config` or middleware.

---

## Testing

- Write tests alongside the code that is being changed. Do not defer tests to a separate pass.
- Follow whatever test framework is already configured (Jest, Vitest, Playwright, etc.).
- Unit test pure functions and utilities. Integration test API routes. Use end-to-end tests for critical user flows.

---

## Git and Commits

- Make atomic commits: one logical change per commit.
- Write commit messages in the imperative mood: `Add auth middleware`, not `Added auth middleware`.
- Do not commit `node_modules`, `.env`, or generated build artifacts.

---

## What to Do Before Opening a PR

1. Run `next build` and confirm there are no type errors or build failures.
2. Run the linter (`eslint`) and fix all warnings, not just errors.
3. Run the test suite and confirm all tests pass.
4. Review the diff yourself before submitting. Remove debug logs, commented-out code, and leftover TODOs that are not intentional.

---

## What NOT to Do

- Do not install new dependencies without checking if an equivalent utility already exists in the project.
- Do not rename or move existing files unless directly asked to refactor.
- Do not change configuration files (`next.config`, `tsconfig.json`, `eslint.config`) without explicit instruction.
- Do not guess at missing context. If the task requires knowing how authentication, the database, or a third-party service works in this project, read the existing implementation first.
