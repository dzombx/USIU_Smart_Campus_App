# USIU Smart Campus handoffs

This directory contains deployment handoff artifacts for the existing AppDeploy project. The v10 ZIP is intentionally kept separate from the repository's canonical Figma Make application source.

`USIU_Smart_Campus_v10_Login_Contrast.zip` is intended for Marlies to upload into the existing AppDeploy project. It must not be unpacked over this repository's root source tree: the ZIP uses the AppDeploy-managed `@appdeploy/client` boundary and a different package/toolchain from the current Vite 8/Tailwind 4 Figma Make app.

The accompanying audit records the login/authentication review, backend hash comparison, secret scan, chatbot contract checks, and build verification. Emmanuel's remaining work is the backend `POST /api/chat` route; the ZIP does not contain a Gemini key.
