import { getAllBlogPosts, getBlogCategories } from '@/lib/content';
import BlogClient from './BlogClient';

export default function BlogPage() {
  const allPosts = getAllBlogPosts();
  const categories = ['All', ...getBlogCategories()];

  return <BlogClient posts={allPosts} categories={categories} />;
}
