# Mall of America Interactive Sales Deck

A cinematic, browser-based sales deck designed to help Mall of America commercial teams convert leasing, sponsorship, and event opportunities into action.

## Live Demo

- Live URL: Add after deployment
- Repository: Add public GitHub link

## Tech Stack

| Layer | Technology |
| --- | --- |
| Frontend | React 19 + Vite |
| Styling | Tailwind CSS v4 + Custom CSS variables |
| Animation | Framer Motion |
| Routing | React Router |
| HTTP Client | Axios via centralized services layer |
| Backend | Node.js + Express 5 + MongoDB (Mongoose) |
| Dev Tooling | Nodemon |
| Icons | Lucide React |
| Fonts | Playfair Display + DM Sans |

## Folder Structure

- client: React application and interactive deck experience
- server: Express API for contact and inquiry handling

## Setup Instructions

### 1. Clone and Install

```bash
# from project root
cd client
npm install

cd ../server
npm install
```

### 2. Configure Environment Variables

Frontend:
- Copy client/.env.example to client/.env
- Set VITE_API_BASE_URL to your backend API URL

Backend:
- Copy server/.env.example to server/.env
- Set PORT, MONGO_URI, JWT_SECRET, CLIENT_URL

### 3. Run Development

```bash
cd client
npm run dev

cd ../server
npm run dev
```

## Core Product Decisions

- Dark, cinematic visual system with premium gold accents to position MOA as a destination platform
- Non-linear sticky navigation so decision-makers can jump by business priority
- Video-first hero and modular sections to maximize emotional impact in the first moments
- Dedicated services layer with centralized api connector to keep components clean and scalable

## API Services Layer

All client API communication is centralized in:
- client/src/services/apiConnector.js

Feature services:
- authService.js
- inquiryService.js
- contactService.js
- analyticsService.js

No components or pages make direct axios or fetch calls.

## AI Usage

Suggested AI workflow used for this build direction:
- Midjourney for cinematic environment renders
- DALL-E for section visuals where official media is limited
- Claude or GPT for messaging refinement and content strategy drafts

## What I Would Improve With More Time

- Replace placeholder video with licensed official MOA footage pipeline
- Add CMS-driven content blocks for sales team updates
- Add advanced analytics dashboard for section-level engagement insights
- Add robust authentication and admin inquiry management UI

## Deployment

Frontend:
```bash
cd client
vercel --prod
```

Backend:
```bash
cd server
vercel --prod
```

Set environment variables in your deployment dashboard before publishing.

## GitHub + Vercel Ready Checklist

1. Create GitHub repository and push code

```bash
git init
git add .
git commit -m "Initial MOA sales deck submission"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. Deploy backend first on Vercel (Project 1)
- Import repository in Vercel
- Set Root Directory to `server`
- Framework Preset: `Other`
- Build command: leave default
- Output directory: not required

Required backend environment variables:
- `MONGO_URI`
- `CLIENT_URL` (your deployed frontend URL)
- `JWT_SECRET`
- `NODE_ENV=production`

3. Deploy frontend on Vercel (Project 2)
- Import same repository again in Vercel
- Set Root Directory to `client`
- Framework Preset: `Vite`

Required frontend environment variables:
- `VITE_API_BASE_URL=https://<your-backend-vercel-domain>/api`
- `VITE_APP_NAME=Mall of America Sales Deck`

4. Re-deploy backend once frontend URL is final
- Update backend `CLIENT_URL` to exact frontend production URL
- Trigger redeploy in Vercel

5. Final smoke checks
- Open `https://<backend-domain>/api/health`
- Submit inquiry from frontend contact page
- Verify data appears in MongoDB collection
