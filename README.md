# Wilky Productions — Website

Rebuilt site for Wilky Productions: video, photo, web design, and graphic
design services. Built with Next.js (App Router), TypeScript, and Tailwind
CSS v4. Deploys to Vercel from GitHub.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4
- Deployed on Vercel, version controlled on GitHub

## Structure

```
app/
  page.tsx              Home
  videography/           Videography service page
  photography/           Photography service page
  aerial/                 Aerial Photo & Video service page
  web-design/             Web Design service page
  marketing/              Marketing service page
  google-ads/             Google Advertising service page
  graphic-design/         Graphic Design service page
  work/                   Portfolio / work gallery
  contact/                Contact page + form
  api/contact/            Form submission handler (stubbed — see below)
components/               Shared UI (Header, Footer, ServiceCard, Reveal, etc.)
lib/site.ts               Site-wide content: nav, services, contact info
```

## Design system

- **Colors:** near-black (`--ink`), white (`--paper`), light gray (`--mist`),
  cyan accent (`--signal` / `--signal-deep`) — all defined in
  `app/globals.css`.
- **Type:** Anton (bold block headlines), Kaushan Script (cursive accents),
  Work Sans (body copy) — set up in `app/layout.tsx`.
- **Motion:** `components/Reveal.tsx` wraps content in a fade/slide-in
  animation that triggers on scroll (via framer-motion), and respects
  `prefers-reduced-motion` automatically.

## Local development (in GitHub Codespaces or locally)

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (Codespaces will prompt you to open this in a
forwarded port).

## Editing content

Nav links, service descriptions, contact info, and social links all live in
`lib/site.ts` — edit that file first for most content changes.

## Contact form

`app/api/contact/route.ts` currently logs form submissions to the server
console so the form works end-to-end without any extra setup. Before
launch, wire it up to an actual email service, for example
[Resend](https://resend.com):

```bash
npm install resend
```

```ts
// app/api/contact/route.ts
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "Wilky Productions <noreply@wilkyproductions.com>",
  to: "hello@wilkyproductions.com",
  subject: `New inquiry from ${name}`,
  text: message,
});
```

Add `RESEND_API_KEY` as an environment variable in Vercel (Project Settings
→ Environment Variables) once you have one.

## Deploying

1. Push this repo to GitHub.
2. In [Vercel](https://vercel.com), click **Add New → Project**, import the
   GitHub repo, and accept the default Next.js build settings.
3. Point your domain (`wilkyproductions.com`) at Vercel under
   **Project Settings → Domains**.
4. Every push to `main` auto-deploys; pushes to other branches get preview
   URLs.

## Still to do

- [ ] Swap the placeholder favicon (`app/favicon.ico`) for the real logo mark
- [ ] Replace all "Project photo" / "Aerial still" / "Featured reel" placeholders
      with real images and video
- [ ] Wire up `app/api/contact/route.ts` to an email service
- [ ] Fill in real phone/email/social links in `lib/site.ts` if different
      from placeholders
