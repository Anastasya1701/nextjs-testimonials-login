# Alpheya — Next.js Landing + Auth + Upload

Landing page (video + testimonials with auto-rotate), Sign-in/Sign-up with OAuth, and post-login menu to upload PDF/DOCX.

## 🧱 Stack
- Next.js 14 (App Router), TypeScript
- MUI (custom theme)
- NextAuth (Google OAuth)
- React Hook Form + Zod (validation)
- Embla Carousel (auto-rotate testimonials)

## 🔧 Setup
1. Clone and install:
   ```bash
   pnpm i # or npm i / yarn
   ```
2. Create `.env.local`:
   ```ini
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=replace_with_strong_secret
   GOOGLE_CLIENT_ID=...apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=...
   ```
3. Dev:
   ```bash
   pnpm dev
   ```
4. Deploy: push to GitHub and **Import to Vercel**. Add the same env vars in Vercel Project Settings.

## ✅ Test scenarios
- Landing loads video and carousel rotates every 5s, pauses on hover/focus.
- Sign in with Google (OAuth) → redirected to `/dashboard`.
- Upload PDF/DOCX → server validates type/size, returns success message.

## ♿ Accessibility
- Keyboard-focusable controls; `aria-live` on testimonials; color contrast via MUI theme.

## 🧪 Quality
- ESLint + Prettier; strict TypeScript.

## Notes
- `/api/upload` stores file to `/tmp` (ephemeral in Vercel) for demo; swap to S3/Vercel Blob for persistence.