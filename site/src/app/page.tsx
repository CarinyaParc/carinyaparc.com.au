import { getBlogPosts } from '@/src/lib/posts';
import HomePageClient from '@/src/components/pages/HomePageClient';

export default async function HomePage() {
  const latestPosts = await getBlogPosts({ limit: 3 });

  return <HomePageClient latestPosts={latestPosts} />;
}
