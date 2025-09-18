# Alpheya — Next.js Landing + Auth + Upload

Demo project built with **Next.js 14 + TypeScript**:

- Landing page (video, gradient tiles, testimonial carousel)
- Authentication (Google OAuth + validated form)
- Protected dashboard with **PDF/DOCX upload**

## 🔧 Setup

1. Clone and install:
   ```bash
   npm i # or yarn
   ```
2. Create `.env.local`:
   ```ini
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=replace_with_strong_secret
   GOOGLE_CLIENT_ID=...apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=...
   ```
3. ## 🚀 Setup:
   ```bash
    # Install dependencies
    npm install
    # or npm/yarn
    
    # Create .env.local
    cp .env.example .env.local
    
    # Run dev server
    npm dev   # http://localhost:3000
    
    # Production
    npm build && npm start

   ```
## ✅ Test scenarios

- Landing loads video and carousel rotates every 5s, pauses on hover/focus.
- Sign in with Google (OAuth) → redirected to `/landing`.
- Upload PDF/DOCX → server validates type/size, returns success message.

## ♿ Accessibility

- Keyboard-focusable controls; `aria-live` on testimonials; color contrast via MUI theme.

## 🧪 Quality

- ESLint + Prettier; strict TypeScript.