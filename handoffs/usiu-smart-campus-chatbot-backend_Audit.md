# Emmanuel backend handoff audit

## Artifact

- `usiu-smart-campus-chatbot-backend.zip`
- SHA-256: `5bcdac619d3465ffbf422ad83c2a43269dccd3debd0de68ece0a7f3b374403ef`

## Verification completed

- Installed dependencies with `npm ci --ignore-scripts --no-audit --no-fund`.
- Ran `npm test`: **12 passed, 0 failed**.
- Confirmed the package is a separate Node.js ESM service requiring Node.js 22 or later.
- Confirmed the service exposes `GET /health` and `POST /api/chat` and returns the frontend contract: `answer`, `sourceIds`, `webSources`, `destination`, and `speechLanguage`.
- Confirmed validation, request-size limits, history trimming, language handling, rate limiting, missing-key behavior, safe provider errors, and method handling through the automated tests.
- Confirmed the archive does not contain a populated Gemini key, private key, frontend API key, or password. `.env.example` contains only the empty `GEMINI_API_KEY=` placeholder.

## Safe integration boundary

This is a **handoff artifact only**. It has not been merged into the repository application and does not replace Marlies' backend. Do not overwrite the existing backend entrypoint, authentication routes, database, demo accounts, credentials, realtime behavior, or other API routes.

Marlies should either deploy it as a separate Node.js 22 service and map the same-origin `/api/chat` path to it, or have the existing backend owner selectively mount the route after inspecting the actual AppDeploy server. Configure `GEMINI_API_KEY` only as an AppDeploy/server-side managed secret. Never place it in GitHub, WhatsApp, frontend code, or browser requests.

Until `/api/chat` is deployed, the frontend should retain its chatbot connection-error state.
