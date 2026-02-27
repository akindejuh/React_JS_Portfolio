# Next.js 16 + Node.js 22 Upgrade Design

**Goal:** Upgrade from Node.js 20 → 22 LTS and Next.js 15 → 16 (latest) with React 19.

**Breaking changes relevant to this project:**
1. React 18 → 19.2 (required by Next 16)
2. Turbopack now default bundler (no custom webpack, should be clean)
3. `next lint` removed — migrate to ESLint CLI
4. Modern Sass API (sass-loader v16)
5. ESLint flat config

**Not affected:** No middleware, no `next/image`, no AMP, no server APIs, no dynamic routes.

## Steps

1. Install Node 22 via nvm, add .nvmrc
2. Upgrade next, react, react-dom, types, eslint
3. Migrate lint script from `next lint` to `eslint .`
4. Update next.config.ts (remove deprecated sassOptions if possible)
5. Build verification with Turbopack
