# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a Next.js 16 project using the App Router with TypeScript and Tailwind CSS v4.

### Structure

- `src/app/` - App Router pages and layouts
- `public/` - Static assets

### Key Technologies

- **Next.js 16** with App Router
- **React 19** with Server Components by default
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling (configured via `@tailwindcss/postcss`)
