# USIU Smart Campus handoffs

This directory contains deployment handoff artifacts for the existing AppDeploy project. The v10 ZIP is intentionally kept separate from the repository's canonical Figma Make application source.

`USIU_Smart_Campus_v10_Login_Contrast.zip` is intended for Marlies to upload into the existing AppDeploy project. It must not be unpacked over this repository's root source tree: the ZIP uses the AppDeploy-managed `@appdeploy/client` boundary and a different package/toolchain from the current Vite 8/Tailwind 4 Figma Make app.

The accompanying audit records the login/authentication review, backend hash comparison, secret scan, chatbot contract checks, and build verification. Emmanuel's backend is also included as a separate ZIP handoff with its own audit. It must be deployed or mounted non-destructively and must not replace Marlies' authentication, database, credentials, routes, or realtime behavior. The archive contains no Gemini key; `GEMINI_API_KEY` must be configured only as a server-side managed secret.

`USIU_Smart_Campus_Complete_AppDeploy_Handoff.zip` combines the consolidated frontend ZIP, Emmanuel's backend ZIP, a copy-paste integration prompt, and checksums for the complete handoff. The prompt specifically requires the dashboard UI to be applied and verified instead of applying only the login changes.
