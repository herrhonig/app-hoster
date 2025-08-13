# app-hoster

Web application dedicated to connect multiple mini-apps.

### Requirements
- Node.js 22+
- npm 10+

### Project structure
- `packages/server`: Fastify TypeScript backend (port `5174`)
- `packages/web`: Vite + React TypeScript frontend (port `5173`)

### Getting started
- Install dependencies: `npm install`
- Start both apps (concurrently): `npm run dev`
  - Or individually: `npm run dev -w server` and `npm run dev -w web`
- Build all: `npm run build`
- Start built server only: `npm run build -w server && npm run start -w server`

### Dev proxy
The web dev server proxies API calls to the backend:
- `/health` -> `http://localhost:5174/health`
- `/api/*` -> `http://localhost:5174`

### API
- `GET /health` → `{ status: "ok" }`
- `GET /api/apps` → sample list of apps

### Notes
- Frontend is available at `http://localhost:5173`
- Backend is available at `http://localhost:5174`
