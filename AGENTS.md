# Repository Guidelines

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project Structure & Module Organization

This is a Next.js App Router site using React, TypeScript, Tailwind CSS, Anime.js, and Lenis. Entry points live in `src/app/`: `page.tsx` composes the page, `layout.tsx` owns document metadata, and `globals.css` contains shared styles. Reusable UI lives in `src/components/`; SVG components are in `src/components/svg/`. Static images and icons belong in `public/` and use root-relative paths such as `/icons/github.svg`.

Use the `@/` alias for imports from `src` (for example, `@/components/train`). Keep reusable visual pieces in `src/components`.

## Build, Test, and Development Commands

- `npm install` installs dependencies from `package-lock.json`.
- `npm run dev` starts the local Next.js development server.
- `npm run lint` runs the ESLint CLI with the Next.js configurations.
- `npm run build` creates the production build and performs Next.js type/build validation.
- `npm run start` serves a completed production build.

No automated test script is currently configured. Run linting and a production build for changes that affect behavior or presentation.

## Coding Style & Naming Conventions

Write TypeScript/TSX with four-space indentation, semicolons, and double-quoted strings. Components use PascalCase names and default exports where surrounding code does (for example, `Train` in `train.tsx`); utilities use camelCase. Keep filenames lowercase and concise. Prefer Tailwind utility classes and retain shared CSS in `src/app/globals.css`. Use native `<img>` elements for images; do not import or use `next/image`.

ESLint imports the `eslint-config-next` core-web-vitals and TypeScript configurations; fix lint findings rather than suppressing them unless there is a documented reason. TypeScript runs in strict mode, so avoid `any` and keep props explicitly typed when they are introduced.

## Testing Guidelines

There is no dedicated test framework or coverage target. For each change, run `npm run lint`; also run `npm run build` when changing components, routes, configuration, or dependencies. If adding tests, place them beside the source or under `src/**/__tests__/` and use names such as `train.test.tsx`.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries such as `Add opengraph image`. Keep each commit focused. Pull requests should explain the user-visible change, link relevant issues, and include before/after screenshots for visual updates. State validation run and any checks not performed.

## Configuration & Assets

Do not commit secrets or credentials. Keep generated output such as `.next/` out of version control. Optimize new assets and use descriptive filenames consistent with `public/icons/`.
