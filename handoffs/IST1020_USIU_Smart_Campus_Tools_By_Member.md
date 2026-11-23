# IST1020 USIU Smart Campus — Tools Used by Each Member

## Project context

**Project:** USIU Smart Campus App  
**Group:** Group 5  
**Course:** IST1020 — Introduction to Information Systems  
**Purpose:** A student-life information system that brings campus information, services, events, support, student accounts, and a campus chatbot into one web application that complements Blackboard.

This document is intended as project context for another AI chat, presentation tool, report-writing tool, or team handoff.

## Team overview

| Member | Admission number | Main role | Main contribution |
|---|---:|---|---|
| Trevor Dzombo | 202618749 | UI/UX Designer and frontend integration | Visual direction, Figma concepts, dashboard and interaction design, frontend review, accessibility/contrast improvements, integration handoffs |
| Emmanuel Leitepa | 202701662 | Chatbot Developer | Gemini-powered chatbot design, chatbot API contract, campus knowledge responses, backend validation, language handling, and chatbot tests |
| Marlies Jowi | 202615650 | Campus Life Features Developer and project owner | Existing AppDeploy project, authentication, database-backed student features, realtime behavior, campus services, events, and deployment coordination |

## Trevor Dzombo — UI/UX and frontend tools

### ChatGPT / Manus

Used for planning, reviewing, debugging, and improving the Smart Campus interface. The AI-assisted workflow helped turn design requirements into React components, CSS styling, interaction details, integration prompts, audit notes, and deployment handoff documentation.

Typical uses included:

- converting the visual brief into implementation tasks;
- reviewing the dashboard, login screen, chatbot interface, and responsive behavior;
- debugging frontend issues such as the missing `@appdeploy/client` dependency in a local environment;
- checking light/dark-mode contrast, tactile interactions, keyboard accessibility, and reduced-motion behavior;
- preparing safe prompts for AppDeploy integration;
- auditing ZIP files and checking that backend credentials were preserved.

### Figma / Figma Make

Used as the design source and visual reference for the USIU Smart Campus direction. Figma helped establish the layout, component language, colors, typography, dashboard structure, and overall student-life experience before implementation.

### React and TypeScript

Used for the frontend application and reusable UI components. The frontend includes the dashboard, login/register interface, navigation, account and notification controls, theme switching, campus-life pages, and chatbot views.

### Tailwind CSS and CSS

Used for layout, responsive styling, theme variables, frosted-glass surfaces, contrast improvements, transitions, focus states, and the USIU blue/yellow visual system.

### AppDeploy

Used as the deployment environment for the existing Smart Campus application. The frontend was prepared to work with AppDeploy’s managed `@appdeploy/client` dependency and existing backend services.

### GitHub and Git

Used for version control, team handoffs, branch-based work, preservation of the canonical repository, and storage of audited frontend/backend ZIP artifacts. The main UI handoff branch is:

```text
feat/usiu-smart-campus-ui
```

Important handoff commits include the audited frontend package, Emmanuel’s backend package, the complete AppDeploy integration package, and the chatbot HTTP 403 repair prompt.

## Emmanuel Leitepa — chatbot and AI tools

### Google AI Studio

Used to explore and configure the Gemini-based chatbot behavior, prompts, model interaction, and response design for USIU campus questions.

### Gemini API

Used as the server-side AI provider for the campus chatbot. The chatbot backend sends questions to Gemini and returns normalized responses to the frontend.

The Gemini key must remain server-side. It must never be placed in React/browser code, GitHub, a ZIP archive, WhatsApp, or a normal chat message.

### Cursor

Used as an AI-assisted code editor for developing and refining the Node.js chatbot backend, helper modules, public campus knowledge data, validation logic, response normalization, and tests.

### Manus

Used for development support, code review, packaging, testing, integration planning, and checking that the chatbot backend could be handed to Marlies without replacing her existing backend.

### Node.js

Used for the chatbot backend service. The backend is an ESM Node.js service designed for Node.js 22 or later.

### Gemini chatbot backend features

The backend package includes:

- `POST /api/chat`;
- `GET /health`;
- question validation and request-size limits;
- conversation-history trimming;
- supported-language handling;
- rate limiting;
- safe missing-key and provider-error responses;
- campus knowledge and event data;
- optional Google Search grounding support;
- normalized sources and optional campus destinations;
- automated API contract tests.

The tested backend suite passed **12 tests with 0 failures** in the audited environment.

## Marlies Jowi — AppDeploy and campus-life tools

### AppDeploy

Used as the main project environment and deployment platform. Marlies’ existing AppDeploy project contains the live application, authentication, database-backed features, demo accounts, managed credentials, API routes, and realtime behavior.

The existing project must be preserved when adding UI or chatbot updates.

### Manus

Used to generate and integrate campus-life features, package project updates, inspect deployment issues, and coordinate the application handoff.

### Cursor

Used as an AI-assisted development environment for implementing and refining the web application, campus features, and project files.

### React / JavaScript / CSS

Used to implement the web app interface and interactions, including:

- login and registration;
- dashboard navigation;
- events;
- campus services;
- lost and found;
- cafeteria;
- finance;
- account controls;
- notifications;
- theme switching;
- realtime behavior.

### Existing backend responsibilities

Marlies’ existing backend includes the application’s authentication and data foundation. The documented routes include:

```text
/api/auth/register
/api/auth/login
/api/auth/session
/api/auth/logout
```

These routes, the database, demo accounts, managed credentials, and realtime behavior must not be replaced by the chatbot backend.

## Shared development and collaboration tools

### GitHub

The shared repository was used for version control and team handoffs. The repository contains the canonical Figma Make application and a separate `handoffs/` directory for AppDeploy-compatible ZIP files and integration documentation.

### ZIP handoff packages

ZIP files were used because the AppDeploy frontend package and the existing GitHub/Figma Make application use different build boundaries. Keeping the AppDeploy package separate reduced the risk of overwriting the existing repository structure.

### Testing and review

The team used build checks, CSS and JavaScript parsing, chatbot client tests, backend API tests, secret scans, archive checksums, and live endpoint checks. The frontend chatbot client was verified to call same-origin:

```text
POST /api/chat
```

At the latest live check, AppDeploy returned an HTML HTTP 403 “Access restricted” response for `/api/chat`. This indicates that the chatbot backend route still needs to be deployed or correctly mapped in AppDeploy; it is not a Gemini answer response.

## Tools and platforms summary

| Area | Tools/platforms |
|---|---|
| UI/UX design | Figma, Figma Make, ChatGPT/Manus |
| Frontend | React, TypeScript, JavaScript, Tailwind CSS, CSS |
| Chatbot | Google AI Studio, Gemini API, Node.js, Cursor, Manus |
| Hosting/deployment | AppDeploy |
| Version control | Git, GitHub |
| Testing/review | Node.js tests, frontend build checks, API contract tests, secret scans, archive checksums |
| Collaboration | GitHub handoffs, ZIP packages, Markdown documentation, AppDeploy integration prompts |

## Important project boundaries

The AI tools accelerated prototyping, implementation, testing, documentation, and handoff preparation. They did not remove the need for human design decisions, code review, backend preservation, integration testing, security checks, and deployment troubleshooting.

The project should not claim that the chatbot is fully live until AppDeploy returns JSON from `POST /api/chat` rather than the current HTML 403 access-restriction page.
