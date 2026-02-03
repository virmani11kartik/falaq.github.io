import Link from 'next/link';
import { getAllLooks, getUniqueLookCategories } from '@/lib/content';
import LooksClient from './LooksClient';

export default function LooksPage() {
  const allLooks = getAllLooks();
  const categories = ['All', ...getUniqueLookCategories()];

  return <LooksClient looks={allLooks} categories={categories} />;
}
