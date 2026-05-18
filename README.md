<div align="center">
  <a href="https://github.com/Zawwarsami16">
    <img src="https://raw.githubusercontent.com/Zawwarsami16/Zawwarsami16/main/assets/studio-mark.svg" alt="part of the Anteroom Studio surface · github.com/Zawwarsami16" width="900" height="56" style="max-width:100%"/>
  </a>
</div>

# engineering-portfolio

[![License](https://img.shields.io/badge/License-MIT-ff003c?style=flat-square&labelColor=0a0a0a)](LICENSE)
[![Next.js](https://img.shields.io/badge/next.js-16-ff003c?style=flat-square&logo=nextdotjs&logoColor=ff003c&labelColor=0a0a0a)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-19-ff003c?style=flat-square&logo=react&logoColor=ff003c&labelColor=0a0a0a)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-ff003c?style=flat-square&logo=typescript&logoColor=ff003c&labelColor=0a0a0a)](https://www.typescriptlang.org/)
[![Live](https://img.shields.io/badge/live-zawwarsami.com-ff003c?style=flat-square&labelColor=0a0a0a)](https://zawwarsami.com)

My personal site — work, writing, and the projects I'm building under [Anteroom Studio](https://github.com/anteroom-studio).

**Live: [zawwarsami.com](https://zawwarsami.com/)**

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
