# AGENTS.md — SandBox17

## Project Overview
Angular 18 **portfolio + sandbox** app with **SSR (Angular Universal)** via Express. It serves as a personal portfolio (Alex Nesteruk) and a place to experiment with features like the Tee Times finder.

## Architecture

### Standalone Components (no NgModules)
Every component uses `standalone: true`. There are no `NgModule` declarations — all dependencies are listed directly in each component's `imports` array.

### Routing (`src/app/app.routes.ts`)
| Path | Component | Loading |
|---|---|---|
| `/` | `HomeComponent` | Eager |
| `/about` | `AboutComponent` | Eager |
| `/tee-times` | `TeeTimesComponent` | **Lazy** (dynamic `import()`) |

`TeeTimesComponent` is the only lazy-loaded route. New feature routes should follow its pattern:
```ts
{ path: 'my-feature', loadComponent: () => import('./my-feature/my-feature.component').then(m => m.MyFeatureComponent) }
```

### SSR Setup
- `server.ts` — Express app using `CommonEngine`; add REST API endpoints here under `server.get('/api/**', ...)`
- `src/app/app.config.server.ts` — merges `appConfig` with `provideServerRendering()`
- `src/main.server.ts` — SSR bootstrap entry
- `prerender: true` in `angular.json` — static pages are pre-rendered at build time
- Run the built SSR server: `node dist/sand-box17/server/server.mjs`

## Services (`src/app/service/`)
- **`GithubService`** — fetches raw file content from a URL via `HttpClient` (`responseType: 'text'`). Used by `HomeComponent` to pull `test-config.json` from a GitHub repo. `HomeComponent` also re-declares it in `providers: [GithubService]` (redundant given `providedIn: 'root'`; do not repeat this pattern).
- **`TeeTimesService`** — returns **mock** golf course data (`of(courses).pipe(delay(1000))`). No real API call is made; replacing it with a live endpoint is the expected next step.

## Key Components
- **`HomeComponent`** — the entire portfolio landing page (all sections in one component: welcome, intro, about-me, portfolio, contact, footer). Section navigation uses anchor IDs (`#home`, `#about`, etc.), not the Angular router.
- **`SlideOutNavComponent`** — reusable animated drawer with 4 directions (`left`/`right`/`top`/`bottom`). All template HTML is currently **commented out** (WIP). Animation states follow the pattern `{position}{Open|Closed}` (e.g. `leftOpen`).

## Styles (`src/styles/`)
Global styles flow: `styles.scss` → `main.scss` → `partials/_all.scss` + `vendor/normalize.scss` + `modules/_all.scss`.

- **Variables** — `src/styles/modules/_colors.scss`; always use these (e.g. `$accent: #22471a`, `$light-beige: #eaece5`)
- **Mixins** — `src/styles/modules/_mixins.scss`:
  - `@include container()` — centered, max-width wrapper
  - `@include mq($width)` — mobile-first media query
- **Per-section partials** live in `src/styles/partials/` (e.g. `_portfolio.scss`, `_nav.scss`)
- New component-specific styles go in the component's own `.scss` file; shared/section styles go in `src/styles/partials/`

## Developer Workflows
```bash
npm start           # dev server at http://localhost:4200 (hot reload)
npm run build       # production build → dist/sand-box17/{browser,server}
npm run watch       # incremental dev build
npm test            # Karma/Jasmine unit tests (headless Chrome)
npm run serve:ssr:SandBox17  # serve the built SSR bundle
```

## Conventions
- SCSS is configured as the default style language (`angular.json` schematics). Always use `.scss`.
- Component selector prefix is `app-` (enforced by CLI).
- `HttpClient` is provided globally via `provideHttpClient()` in `app.config.ts` — do not add it to individual component providers.
- Use `booleanAttribute` transform for boolean `@Input`s (see `SlideOutNavComponent.isOpen`).

