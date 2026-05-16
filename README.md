# Personal portfolio

My personal site — work, writing, and the projects I'm building under [Anteroom Studio](https://github.com/anteroom-studio).

**Live: [zawwarsami](zawwarsami.com)**

## Run it locally

```bash
npm install --legacy-peer-deps
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Stack

- Next.js 16 (App Router)
- React 19, TypeScript
- Tailwind CSS v4
- framer-motion + Lenis for the scroll/motion layer
- Resend for the contact form

## Structure

```
app/         routes (home, about, work, work/[slug], stack, contact)
components/  layout, sections, ui kit, transitions, contact form
lib/         site config, fonts, motion variants, schemas
public/      videos, fonts, og images
```

## Env

Set these in `.env.local` (see `.env.example`):

- `NEXT_PUBLIC_SITE_URL` — public origin for OG / canonical URLs
- `RESEND_API_KEY` — for the contact form (without it the form just no-ops in dev)
- `CONTACT_TO_EMAIL` — where contact submissions go
- `CONTACT_FROM_EMAIL` — must be a Resend-verified domain (or leave blank to use Resend's onboarding sender)

## Scripts

```bash
npm run dev       # dev
npm run build     # production build
npm run start     # serve build
npm run lint
npm run analyze   # bundle analyzer
```

— Zawwar
