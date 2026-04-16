# Mall of America DigiDeck

A premium, full-screen interactive sales deck built for high-stakes commercial conversations.
This project reframes a traditional marketing website into a cinematic, chapter-based presentation experience optimized for leasing, sponsorship, and event conversion.

## Submission Context

This repository is prepared as a senior frontend engineering submission.

What this demonstrates:
- Product thinking: transformed the experience model from scroll site to guided executive deck.
- Frontend architecture: modular slide engine with clear separation of layout, content, and behavior.
- Motion craft: transition choreography and component-level animation using Framer Motion.
- Delivery discipline: deployable monorepo structure, environment separation, production hosting on Vercel.

## Live Deployment

- Status: Deployed on Vercel
- Frontend: Add production URL
- Backend API: Add production URL

## Core Experience

- Full-screen slide navigation with chapter-aware top navigation
- 13-slide narrative flow across Overview, Retail, Entertainment, Events, Sponsorship, and Leasing
- Split-layout content slides with directional storytelling
- Gallery and quote slides for visual rhythm and persuasion
- Conversion-focused CTA slide for lead capture pathways

## Technical Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19, Vite |
| Styling | Tailwind CSS v4, custom CSS tokens |
| Motion | Framer Motion |
| Routing | React Router DOM |
| HTTP | Axios service layer |
| Backend | Node.js, Express 5, Mongoose |
| Dev Runtime | Nodemon |
| Design System | Playfair Display + DM Sans, gold-on-graphite theme |

## Architecture Overview

### Frontend

- Slide orchestration: client/src/components/deck
- State and navigation: client/src/context/DeckContext.jsx
- Slide definitions and content model: client/src/data/slides.js
- Slide components: client/src/components/slides
- Shared UI primitives: client/src/components/common

### Backend

- API app bootstrap: server/src/index.js, server/src/app.js
- Domain controllers: auth, contact, inquiry
- Route composition: server/src/routes
- Persistence models: server/src/models

## Engineering Decisions

1. Single source of truth for narrative data
- All slide content and configuration live in one data model (slides.js), reducing coupling and speeding iteration.

2. Componentized storytelling system
- Hero, Feature, Stats, Quote, Gallery, and CTA slide types are reusable and animation-ready.

3. Centralized API connector pattern
- UI components do not call fetch/axios directly; services own request logic for maintainability.

4. Performance-aware UX
- Full viewport rendering with overflow control and bounded layouts to avoid jank in presentation mode.

## Local Development

### Install

```bash
cd client
npm install

cd ../server
npm install
```

### Environment Setup

Frontend env (client/.env):
- VITE_API_BASE_URL

Backend env (server/.env):
- PORT
- MONGO_URI
- JWT_SECRET
- CLIENT_URL

### Run

```bash
cd client
npm run dev

cd ../server
npm run dev
```

## Deployment Notes

The project is configured for split deployment on Vercel:

- Frontend project root: client
- Backend project root: server

Recommended production sequence:
1. Deploy backend and capture API URL.
2. Set frontend VITE_API_BASE_URL.
3. Deploy frontend.
4. Update backend CLIENT_URL with final frontend domain.

## Quality Checklist

- Responsive full-screen rendering
- Animated slide transitions
- Non-broken image and gallery fallbacks
- Chapter navigation and directional arrows
- API-ready structure for contact and inquiry workflows

## Future Enhancements

- Accessibility hardening (reduced-motion mode, keyboard-first slide controls)
- CMS integration for non-technical content updates
- Analytics instrumentation by slide/chapter/CTA
- Visual regression tests for high-confidence release cycles

## Author Note

This build intentionally balances brand storytelling, technical rigor, and conversion focus.
It is designed to be both stakeholder-ready and engineering-scalable.
