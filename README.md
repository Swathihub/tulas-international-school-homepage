# Tula's International School Homepage

This project is a complete responsive homepage redesign for Tula's International School (TIS) built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features & Enhancements

- **Modern & Premium Design**: Custom color palette matching TIS branding, with high-quality visual hierarchy, typography, and spacing.
- **Scroll-Triggered Reveals**: Key sections and cards smoothly animate into view as the user scrolls, creating a dynamic, engaging experience (via Framer Motion `whileInView`).
- **Scroll Progress Indicator**: A fixed green progress bar at the top of the screen provides intuitive feedback on page depth.
- **Interactive Micro-animations**: Subtle hover states, staggered children animations, and smooth transitions.
- **Responsive Layouts**: Fully responsive design adapting intentionally across mobile, tablet, and desktop viewports, rather than just scaling down.
- **Accessible & Semantic**: Uses semantic HTML5, clear structure, and appropriate contrast ratios.

## Architecture

- **`app/page.tsx`**: Main entry point assembling all sections.
- **`components/layout/`**: Contains the global `Navbar` and `Footer`.
- **`components/sections/`**: Modular components for each section (`hero`, `about`, `programs`, `achievements`, `cta`).
- **`components/ui/`**: Reusable UI components (like `scroll-progress`).
- **`lib/utils.ts`**: Utility functions like `cn` for Tailwind class merging.

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Setup & Development

1. Clone the repository and install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build & Deployment

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm run start
```

This project is configured and ready to be deployed on Vercel or any Next.js-compatible hosting platform.

## Implementation Notes

- **Tailwind CSS v4**: Uses the latest Tailwind PostCSS integration.
- **Framer Motion**: Animations are kept performant (hardware accelerated) and utilize the `useScroll` hook for the progress indicator.
- **Lucide React**: Used for clean, consistent SVG icons throughout the design.
- The project is fully type-checked and uses ESLint to ensure code quality.
