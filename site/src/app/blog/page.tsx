import { getBlogPosts } from '@/src/lib/posts';
import BlogPageClient from '@/src/components/pages/BlogPageClient';

export default async function BlogPage() {
  const allPosts = await getBlogPosts({ limit: 100 });
  const featuredPosts = await getBlogPosts({ featured: true, limit: 1 });
  const recentPosts = await getBlogPosts({ limit: 6, featured: false });

  return (
    <BlogPageClient allPosts={allPosts} featuredPosts={featuredPosts} recentPosts={recentPosts} />
  );
}
