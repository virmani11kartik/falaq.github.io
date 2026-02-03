import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const looksDirectory = path.join(process.cwd(), 'content/looks');
const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface Look {
  slug: string;
  title: string;
  date: string;
  category: string;
  season?: string;
  tags: string[];
  coverImage: string;
  galleryImages: string[];
  caption: string;
  content: string;
  stylingNotes?: string;
  tips?: string[];
  shopItems?: ShopItem[];
}

export interface ShopItem {
  itemName: string;
  storeName: string;
  url: string;
  price?: string;
  altUrl?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  category: string;
  coverImage: string;
  excerpt: string;
  content: string;
}

export function getAllLooks(): Look[] {
  const fileNames = fs.readdirSync(looksDirectory);
  const allLooks = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(looksDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        season: data.season,
        tags: data.tags || [],
        coverImage: data.coverImage,
        galleryImages: data.galleryImages || [data.coverImage],
        caption: data.caption,
        content: marked(content),
        stylingNotes: data.stylingNotes,
        tips: data.tips,
        shopItems: parseShopItems(content),
      } as Look;
    });

  return allLooks.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getLookBySlug(slug: string): Look | null {
  try {
    const fullPath = path.join(looksDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      season: data.season,
      tags: data.tags || [],
      coverImage: data.coverImage,
      galleryImages: data.galleryImages || [data.coverImage],
      caption: data.caption,
      content: marked(content),
      stylingNotes: data.stylingNotes,
      tips: data.tips,
      shopItems: parseShopItems(content),
    } as Look;
  } catch (error) {
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        category: data.category,
        coverImage: data.coverImage,
        excerpt: data.excerpt,
        content: marked(content),
      } as BlogPost;
    });

  return allPosts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      coverImage: data.coverImage,
      excerpt: data.excerpt,
      content: marked(content),
    } as BlogPost;
  } catch (error) {
    return null;
  }
}

function parseShopItems(content: string): ShopItem[] {
  const shopItems: ShopItem[] = [];
  const lines = content.split('\n');
  let inShopSection = false;

  for (const line of lines) {
    if (line.includes('## Shop The Look') || line.includes('Shop The Look')) {
      inShopSection = true;
      continue;
    }
    if (inShopSection && line.startsWith('##')) {
      break;
    }
    if (inShopSection && line.trim().startsWith('-')) {
      const match = line.match(/\*\*(.+?)\*\*\s*-\s*(.+?)\s*-\s*(https?:\/\/.+?)(?:\s*-\s*\$?([\d,]+\.?\d*))?/);
      if (match) {
        shopItems.push({
          itemName: match[1].trim(),
          storeName: match[2].trim(),
          url: match[3].trim(),
          price: match[4] ? `$${match[4]}` : undefined,
        });
      }
    }
  }

  return shopItems;
}

export function getUniqueLookCategories(): string[] {
  const looks = getAllLooks();
  const categories = new Set(looks.map((look) => look.category));
  return Array.from(categories).sort();
}

export function getUniqueSeasons(): string[] {
  const looks = getAllLooks();
  const seasons = new Set(looks.filter((look) => look.season).map((look) => look.season!));
  return Array.from(seasons).sort();
}

export function getBlogCategories(): string[] {
  const posts = getAllBlogPosts();
  const categories = new Set(posts.map((post) => post.category));
  return Array.from(categories).sort();
}
