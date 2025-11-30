# Landing Page

A modern, responsive landing page built with Next.js, Tailwind CSS, and Lucide React icons.

## Features

- 🎨 Centralized theme configuration
- 📱 Fully responsive design
- ⚡ Fast performance with Next.js
- 🎯 Clean folder structure
- 🎭 Beautiful UI with Tailwind CSS
- 🔧 TypeScript support

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Theme Configuration

All colors and fonts can be updated from a single file:

- **Colors**: Edit `lib/theme.ts` to update the 6 theme colors
- **Fonts**: The fonts (Suranna and Josefin Sans Thin) are configured in `app/layout.tsx` and `app/globals.css`

## Project Structure

```
├── app/              # Next.js app directory
│   ├── layout.tsx    # Root layout
│   ├── page.tsx      # Home page
│   └── globals.css   # Global styles
├── components/       # React components
├── lib/             # Utilities and theme
├── hooks/           # Custom React hooks
├── api/             # API routes
└── pages/           # Additional pages (if using pages router)
```

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React Icons

# Performi
