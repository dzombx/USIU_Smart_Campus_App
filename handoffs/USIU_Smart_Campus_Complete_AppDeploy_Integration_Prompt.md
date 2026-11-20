# USIU Smart Campus — complete AppDeploy integration prompt

Target existing AppDeploy project:
`https://smart-campus-etaz3o.v2.appdeploy.ai/`

The attached package contains the authoritative frontend handoff and Emmanuel's tested chatbot backend. Update the existing project; do not create a new project.

## Required order of work

1. Make a backup/version of the current AppDeploy project before changing anything.
2. Inspect the current project and compare it file-by-file against the frontend archive, especially `source/src/App.tsx`, `source/src/index.css`, and every file under `source/src/chatbot/`.
3. Apply the complete frontend implementation from the archive. Do not apply only the login changes or a partial visual diff. The dashboard implementation in `source/src/App.tsx` is part of the required update.
4. Keep `@appdeploy/client` as an AppDeploy-managed dependency. Do not install it manually, remove it, or replace its imports.
5. Do not replace, delete, or rewrite the existing backend. Preserve authentication, the database, demo accounts, managed credentials, all `/api/auth/*` routes, existing API contracts, and realtime behavior.
6. Do not add a map screen or new routes. Keep the existing route structure and use the supplied UI within the existing application structure.
7. Use the frontend ZIP's existing asset and component paths. In particular, preserve the campus hero asset reference `/resources/campus-hero.webp` if that asset is already available in AppDeploy.

## Frontend files to apply

Use the frontend archive as the source of truth for these UI files:

- `source/src/App.tsx`
- `source/src/index.css`
- all files under `source/src/chatbot/`
- only the compatible frontend assets/configuration needed by those files

The dashboard must visibly include the consolidated design, not merely the login refinements. Verify the following in the deployed preview:

- USIU blue/yellow visual system is consistent across light and dark modes.
- Dashboard welcome/name anchor is prominent and uses the intended hero treatment.
- Dashboard cards and tiles use the frosted-glass treatment with readable contrast.
- Calendar/date text is readable in both themes.
- Light/dark mode toggle persists and has sufficient contrast.
- Account and notification controls work without changing backend contracts.
- Chatbot bubble is visible on all relevant pages in the bottom-right.
- Full chatbot view uses blue user bubbles and yellow assistant bubbles with readable text.
- UI transitions remain lightweight, tactile, keyboard-accessible, and respectful of reduced-motion preferences.
- Desktop layout is preserved first; do not remove responsive behavior for smaller screens.

Do not substitute a simplified dashboard, placeholder cards, a generic template, or an AI-generated redesign. The supplied `App.tsx` and `index.css` must be applied and then verified in the preview.

## Chatbot integration

The frontend must continue using same-origin:

```text
POST /api/chat
```

with the existing request contract. Do not put `GEMINI_API_KEY` or any other API key in browser code.

Deploy `usiu-smart-campus-chatbot-backend.zip` as a separate Node.js 22+ backend service, or selectively mount its `/api/chat` route into the existing backend after inspecting the real server. Do not copy its root files over the existing backend and do not overwrite Marlies' authentication or database code.

Configure this only through AppDeploy's server-side managed secrets:

```text
GEMINI_API_KEY=<managed server secret>
```

The key must not be committed to GitHub, included in the ZIP, placed in React code, or sent through WhatsApp/chat.

Map the existing frontend's same-origin `/api/chat` path to the deployed chatbot service. Verify:

```text
GET /health
```

returns HTTP 200 with `{ "status": "ok" }`, then test:

```json
{
  "question": "What facilities are available?",
  "history": [],
  "language": "en"
}
```

The response should contain `answer`, `sourceIds`, `webSources`, `destination`, and `speechLanguage`. Until this route is live, preserve the frontend's connection-error state rather than hiding the failure.

## Required verification report

Before claiming completion, report:

- backup/version identifier;
- exact frontend files changed;
- confirmation that the dashboard, not only the login page, was updated;
- build result and deployed preview URL;
- confirmation that the dashboard checklist above was visually verified;
- `/health` and `/api/chat` results;
- confirmation that `/api/auth/*`, database, credentials, demo accounts, and realtime behavior were preserved;
- any remaining limitation or manual step.

If any requested UI file cannot be applied because of a conflict, stop and report the exact conflict instead of silently keeping the old dashboard.
