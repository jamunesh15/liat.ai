# Mall of America Interactive Sales Deck (Client)

A premium, multi-page React experience built for the Internshala assignment brief. The frontend is designed as a cinematic business pitch tool for leasing, sponsorship, events, and partnership inquiries.

## Highlights

- Multi-page storytelling with route-level transitions
- Tailwind CSS-first UI system (no traditional component CSS dependency)
- Framer Motion animations for section reveal and page transitions
- Professional service-layer API architecture (no direct API calls inside UI components)
- Fully responsive layout with mobile navigation and CTA-first flow
- Executive-style content depth across all core business pages

## Tech Stack

- React 19
- Vite 8
- React Router
- Tailwind CSS 4
- Framer Motion
- Axios

## Project Structure

```text
src/
	components/
		common/
		hero/
		stats/
	pages/
		Home.jsx
		Retail.jsx
		Entertainment.jsx
		Events.jsx
		Sponsorship.jsx
		Leasing.jsx
		Contact.jsx
	services/
		api.js
		apiConnector.js
		contactService.js
		inquiryService.js
		authService.js
	utils/
	App.jsx
	main.jsx
```

## Environment Variables

Create/update [client/.env](.env) with:

```env
VITE_API_BASE_URL=http://localhost:5000/api
VITE_APP_NAME=Mall of America Sales Deck
```

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build production bundle:

```bash
npm run build
```

## API Integration

- All API communication is handled through [src/services/api.js](src/services/api.js)
- [src/services/apiConnector.js](src/services/apiConnector.js) is preserved for assignment/service-layer compatibility
- Contact and inquiry flows are wired through service modules, not components

## Assignment Readiness Checklist

- Tailwind-based premium UI complete
- Page transitions and section animations complete
- Expanded business content across all modules complete
- Contact form integrated with backend API complete
- Production build validation complete

## Recommended Final Submission Add-ons

- Add deployed frontend and backend URLs
- Add 3 to 5 screenshots (desktop + mobile)
- Add a short 60 to 90 second demo video link

