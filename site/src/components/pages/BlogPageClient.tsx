'use client';

import PageHeader from '@/src/components/sections/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@repo/ui/button';
import { Card, CardContent } from '@repo/ui/card';
import { Badge } from '@repo/ui/badge';
import { PostsLatest } from '@/src/components/posts/PostsLatest';
import type { Post } from '@/src/lib/posts';

// Page header configuration
const pageHeaderProps = {
  variant: 'dark' as const,
  align: 'center' as const,
  title: 'Life on Pasture',
  subtitle: 'Our Blog',
  description:
    'Follow our regeneration journey through detailed updates, insights, and lessons learned as we transform Carinya Parc into a thriving ecosystem.',
  backgroundImage: '/images/img_23.jpg',
  backgroundImageAlt: 'Carinya Parc landscape',
};

// Available post categories
const categories = ['All', 'Soil Health', 'Biodiversity', 'Water Systems', 'Education', 'Wildlife'];

interface BlogPageClientProps {
  allPosts: Post[];
  featuredPosts: Post[];
  recentPosts: Post[];
}

export default function BlogPageClient({
  allPosts,
  featuredPosts,
  recentPosts,
}: BlogPageClientProps) {
  // Get the featured post or use the first post
  const featuredPost = featuredPosts[0] || allPosts[0];

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button asChild variant="ghost" className="text-green-600 hover:text-green-700">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Page Header */}
      <section>
        <PageHeader {...pageHeaderProps} />
      </section>

      {/* Featured Post Section */}
      {featuredPost && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card className="overflow-hidden border-eucalyptus-100 shadow-lg">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <Image
                      src={featuredPost.imageUrl}
                      alt={featuredPost.title}
                      fill
                      className="object-cover"
                      quality={80}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-amber-600 hover:bg-amber-700">Featured</Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 text-sm text-charcoal-600 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {featuredPost.formattedDate}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />5 min read
                      </div>
                      {featuredPost.tags && featuredPost.tags.length > 0 && (
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {featuredPost.tags[0]}
                        </div>
                      )}
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-green-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    <p className="text-eucalyptus-600 text-lg mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <Button className="bg-eucalyptus-600 hover:bg-eucalyptus-400" asChild>
                      <Link href={featuredPost.href}>
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Button
                  variant={category === 'All' ? 'default' : 'outline'}
                  size="sm"
                  className={
                    category === 'All'
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'border-green-600 text-green-600 hover:bg-green-50'
                  }
                >
                  {category}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <PostsLatest
          title="Recent Articles"
          subtitle="Explore our latest insights and updates from the farm"
          posts={recentPosts}
          viewAllLink=""
        />
      </section>
    </div>
  );
}
