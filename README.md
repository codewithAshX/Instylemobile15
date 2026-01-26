# RealEstate Website

A modern, customizable real estate website built with Next.js, featuring animations, responsive design, and unique property listings.

## Features

- **Responsive Design**: Optimized for all devices using Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Property Listings**: Showcase properties with detailed information and galleries
- **Customizable**: Easy to modify colors, content, and layout
- **Fast Performance**: Built with Next.js for optimal loading speeds

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

## Project Structure

- `src/app/` - Next.js app router pages
- `src/components/` - Reusable React components
- `public/` - Static assets

## Customization

### Colors
Update the color scheme in `src/app/globals.css` or Tailwind classes throughout the components.

### Content
Modify property data in the page files or create a data file for easier management.

### Images
Replace placeholder images from Unsplash with your own property photos.

## Build for Production

```bash
npm run build
npm start
```

## Deploy

Deploy to Vercel, Netlify, or any static hosting service.

## Technologies Used

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
