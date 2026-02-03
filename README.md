# Fashion with Falaq

A modern, elegant fashion blog and lookbook website for fashion consultant Falaq. Built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Lookbook**: Shoppable outfit inspiration organized by season and occasion
- **Blog**: Fashion tips, style guides, and advice articles
- **Dynamic Filtering**: Filter looks by category, season, and tags
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **SEO Optimized**: Meta tags, OpenGraph, and semantic HTML
- **Markdown Content**: Easy content management with markdown files
- **Editorial Design**: Warm, minimal aesthetic with Playfair Display and Karla fonts

## 🎨 Design System

- **Colors**: Cream, sand, taupe, charcoal, and dusty rose
- **Typography**: Playfair Display (headings) + Karla (body)
- **Style**: Editorial, warm, minimal, professional

## 📁 Project Structure

```
fashion-with-falaq/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── looks/             # Lookbook pages
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── work-with-me/      # Services page
│   ├── contact/           # Contact form
│   └── privacy/           # Privacy & disclaimer
├── components/            # Reusable components
│   ├── Header.tsx
│   └── Footer.tsx
├── content/              # Markdown content
│   ├── looks/           # Look markdown files
│   └── blog/            # Blog post markdown files
├── lib/                 # Utilities
│   └── content.ts       # Content parsing functions
└── public/              # Static assets
    └── images/          # Image files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm run start
```

## 📝 Content Management

### Adding a New Look

1. Create a new markdown file in `content/looks/`
2. Follow this format:

```markdown
---
title: "Your Look Title"
slug: "url-friendly-slug"
date: "2024-01-01"
category: "Spring"  # Or Summer, Fall, Winter, Party, etc.
season: "Spring"
tags: ["tag1", "tag2"]
coverImage: "/images/looks/your-image.jpg"
galleryImages:
  - "/images/looks/image1.jpg"
  - "/images/looks/image2.jpg"
caption: "Brief description"
---

# Styling Notes

Your styling content here...

## Shop The Look

- **Item Name** - Store Name - https://store.com - $99.99
```

### Adding a Blog Post

1. Create a new markdown file in `content/blog/`
2. Follow this format:

```markdown
---
title: "Post Title"
slug: "url-slug"
date: "2024-01-01"
category: "Style Tips"
coverImage: "/images/blog/cover.jpg"
excerpt: "Brief excerpt"
---

Your blog content here in markdown...
```

## 🎯 Categories

### Look Categories
- Spring, Summer, Fall, Winter (Seasons)
- Party, Wedding Season, Work/Office, Date Night, Casual/Everyday
- Gym/Athleisure, Travel, Street Style

### Blog Categories
- Style Guide
- Styling Tips
- Seasonal Style
- Style Philosophy
- Sustainable Style

## 🖼️ Images

Place images in the appropriate `public/images/` subdirectories:
- `/public/images/looks/` - Lookbook photos
- `/public/images/blog/` - Blog post images
- `/public/images/hero/` - Homepage hero images

Images are referenced in markdown using paths like `/images/looks/filename.jpg`

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color scheme:

```js
colors: {
  cream: '#FAF8F5',
  sand: '#E8E3DC',
  taupe: '#B5A99A',
  charcoal: '#2B2B2B',
  rose: '#D4A59A',
  'warm-gray': '#5C5551',
}
```

### Fonts
Fonts are imported in `app/globals.css`. To change fonts, update the Google Fonts import and Tailwind configuration.

## 📱 Pages

- `/` - Homepage with featured looks and blog posts
- `/looks` - Lookbook hub with filtering
- `/looks/[slug]` - Individual look detail pages
- `/blog` - Blog hub with category filtering
- `/blog/[slug]` - Individual blog posts
- `/about` - About Falaq
- `/work-with-me` - Services and pricing
- `/contact` - Contact form
- `/privacy` - Privacy policy and affiliate disclosure

## 🌐 SEO

Each page includes:
- Custom meta titles and descriptions
- OpenGraph tags for social sharing
- Semantic HTML structure
- Descriptive alt text (when images are added)

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: Markdown with gray-matter
- **Fonts**: Google Fonts (Playfair Display, Karla)

## 📄 License

This project is created for Falaq's personal fashion blog.

## 🙋‍♀️ Support

For questions or issues, contact: hello@fashionwithfalaq.com

---

Built with ❤️ by Kartik for Falaq
