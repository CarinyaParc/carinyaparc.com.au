'use client';

import PageHeader from '@/src/components/PageHeader';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@repo/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';
import { Badge } from '@/src/components/ui/badge';
import { PostsLatest } from '@/src/components/PostsLatest';

// We use 'use client' so metadata must be in a separate file or layout.tsx

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

const blogPosts = [
  {
    id: 1,
    title: 'First Season Soil Testing Results',
    excerpt:
      'Our comprehensive soil analysis reveals the current state of the land and guides our regeneration strategy for the coming years.',
    content:
      "After months of preparation, we've completed our first comprehensive soil testing across all areas of Carinya Parc. The results provide fascinating insights into the current state of our land and will guide our regeneration efforts moving forward.",
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Soil Health',
    image: '/placeholder.svg?height=400&width=600',
    featured: true,
  },
  {
    id: 2,
    title: 'Native Tree Planting Milestone',
    excerpt:
      "We've successfully planted over 500 native trees across the property, creating the foundation for our biodiversity restoration efforts.",
    content:
      "This month marks a significant milestone in our regeneration project - we've planted over 500 native trees across Carinya Parc. Each tree was carefully selected based on our soil analysis and local ecosystem requirements.",
    date: 'February 28, 2024',
    readTime: '4 min read',
    category: 'Biodiversity',
    image: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 3,
    title: 'Water Management System Design',
    excerpt:
      'Planning sustainable water systems that will support both our agricultural goals and wildlife habitat creation.',
    content:
      "Water is life, and designing effective water management systems is crucial for our regeneration success. We're implementing a comprehensive approach that includes swales, ponds, and rainwater harvesting.",
    date: 'February 10, 2024',
    readTime: '6 min read',
    category: 'Water Systems',
    image: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding Regenerative Agriculture',
    excerpt:
      'An introduction to the principles and practices that guide our approach to land restoration and sustainable farming.',
    content:
      "Regenerative agriculture goes beyond sustainability - it's about actively improving the land while producing food. Here's how we're applying these principles at Carinya Parc.",
    date: 'January 25, 2024',
    readTime: '7 min read',
    category: 'Education',
    image: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 5,
    title: 'Wildlife Corridor Planning',
    excerpt:
      'Creating connected habitats that allow native wildlife to thrive and move freely across the landscape.',
    content:
      "Wildlife corridors are essential for maintaining biodiversity and ecosystem health. We're designing pathways that connect different habitat areas across our property and beyond.",
    date: 'January 12, 2024',
    readTime: '5 min read',
    category: 'Wildlife',
    image: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
  {
    id: 6,
    title: 'Composting Systems Setup',
    excerpt:
      'Building the foundation for soil health improvement through strategic composting and organic matter management.',
    content:
      "Healthy soil starts with organic matter, and composting is one of our key strategies for building soil health. We've established multiple composting systems across the property.",
    date: 'December 20, 2023',
    readTime: '4 min read',
    category: 'Soil Health',
    image: '/placeholder.svg?height=400&width=600',
    featured: false,
  },
];

const categories = ['All', 'Soil Health', 'Biodiversity', 'Water Systems', 'Education', 'Wildlife'];

export default function BlogPage() {
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

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blogPosts
            .filter((post) => post.featured)
            .map((post) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="overflow-hidden border-eucalyptus-100 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
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
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </div>
                        <div className="flex items-center">
                          <Tag className="h-4 w-4 mr-1" />
                          {post.category}
                        </div>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-green-900 mb-4">
                        {post.title}
                      </h2>
                      <p className="text-eucalyptus-600 text-lg mb-6 leading-relaxed">
                        {post.content}
                      </p>
                      <Button className="bg-eucalyptus-600 hover:bg-eucalyptus-400">
                        Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
        </div>
      </section>

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
          posts={blogPosts
            .filter((post) => !post.featured)
            .map((post) => ({
              id: post.id,
              title: post.title,
              href: `/blog/${post.id}`,
              description: post.excerpt,
              imageUrl: post.image,
              date: post.date,
              datetime: post.date,
            }))}
          viewAllLink=""
        />
      </section>
    </div>
  );
}
