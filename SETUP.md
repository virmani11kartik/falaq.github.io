# Setup Instructions for Fashion with Falaq

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to http://localhost:3000

## Adding Your Images

The website is currently using placeholder text for images. To add your actual images:

1. **Organize Your Photos**
   - Place lookbook photos in: `public/images/looks/`
   - Place blog images in: `public/images/blog/`
   - Place hero images in: `public/images/hero/`

2. **Name Your Files**
   Use descriptive names matching the content files:
   - `spring-brunch.jpg`
   - `coastal-summer.jpg`
   - etc.

3. **Update Content Files** (Optional)
   The markdown files in `content/looks/` and `content/blog/` already reference image paths.
   Make sure your image filenames match these references, or update the paths in the markdown files.

## Customization Tips

### Changing Colors
Edit `tailwind.config.js`:
```js
colors: {
  cream: '#YOUR_COLOR',
  sand: '#YOUR_COLOR',
  // etc.
}
```

### Adding New Looks
1. Create a new `.md` file in `content/looks/`
2. Copy the format from existing look files
3. Update the frontmatter and content
4. Add corresponding images to `public/images/looks/`

### Adding Blog Posts
1. Create a new `.md` file in `content/blog/`
2. Copy the format from existing blog files
3. Update the frontmatter and content
4. Add corresponding images to `public/images/blog/`

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

### Other Platforms
```bash
npm run build
npm run start
```

## Content Structure

### Look Frontmatter
```yaml
title: "Look Title"
slug: "url-slug"
date: "2024-01-01"
category: "Season/Occasion"
season: "Spring/Summer/Fall/Winter"
tags: ["tag1", "tag2"]
coverImage: "/images/looks/image.jpg"
galleryImages: ["/images/looks/img1.jpg"]
caption: "Description"
```

### Blog Post Frontmatter
```yaml
title: "Post Title"
slug: "url-slug"
date: "2024-01-01"
category: "Category Name"
coverImage: "/images/blog/image.jpg"
excerpt: "Brief description"
```

## Troubleshooting

### Module Not Found Errors
```bash
npm install
```

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Build Errors
1. Check all markdown files for proper frontmatter
2. Ensure all image paths exist
3. Run `npm run build` to see detailed errors

## Features to Enhance

- [ ] Add actual images to replace placeholders
- [ ] Set up analytics (Google Analytics, Plausible, etc.)
- [ ] Configure email form backend
- [ ] Add newsletter subscription
- [ ] Optimize images with Next.js Image component
- [ ] Add more looks and blog posts
- [ ] Set up CMS (optional - Contentful, Sanity, etc.)

## Support

For issues or questions:
- Check the README.md
- Review Next.js documentation: https://nextjs.org/docs
- Contact: hello@fashionwithfalaq.com

---

Happy styling! 👗✨
