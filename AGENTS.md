<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Repository Conventions

- **Architecture**: Next.js 16 App Router + TypeScript + Tailwind CSS configured for static export (`output: "export"`, `basePath`).
- **Data-Driven Content**: All section content must reside in typed files under `data/` (`profile.ts`, `projects.ts`, `experience.ts`, `skills.ts`, `socials.ts`, `certificates.ts`). Never hardcode copy inside components.
- **Styling & Motion**: Use CSS variables and motion tokens defined in `app/globals.css`. Support `prefers-reduced-motion`.
- **Strict TypeScript**: No `any`, no `@ts-ignore`, no unused code. Ensure `npm run typecheck` and `npm run lint` pass successfully.
- **Mobile First**: Fully responsive at 320px, 390px, 768px, 1440px, and 1920px with zero horizontal overflow and 44px+ touch targets.
