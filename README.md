# pauloesb.dev

Personal portfolio and CV website for Paulo Borba - Software Engineer.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling

## Features

- Modern single-page CV design
- Dark mode with glassmorphism effects
- Responsive layout for all devices
- SEO optimized with Open Graph and Twitter cards
- JSON-LD structured data for rich search results

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
  app/
    layout.tsx    # Root layout with metadata
    page.tsx      # Main CV page
    globals.css   # Global styles and Tailwind
public/
    favicon.svg   # Site favicon
    preview.png   # Social media preview image
    robots.txt    # Crawler instructions
    sitemap.xml   # Sitemap for SEO
```

## Deployment

Deploy on [Vercel](https://vercel.com) or any platform that supports Next.js.

## License

MIT
