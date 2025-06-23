'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Button asChild variant="ghost" className="text-green-600 hover:text-green-700">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold text-green-900 mb-6">
              Life on the <span className="text-amber-600">Land</span>
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Follow our regeneration journey through detailed updates, insights, and lessons
              learned as we transform Carinya Parc into a thriving ecosystem.
            </p>
          </motion.div>
        </div>
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
                <Card className="overflow-hidden border-green-100 shadow-lg">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="relative h-64 lg:h-full">
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-amber-600 hover:bg-amber-700">Featured</Badge>
                      </div>
                    </div>
                    <CardContent className="p-8 lg:p-12">
                      <div className="flex items-center space-x-4 text-sm text-green-600 mb-4">
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
                      <p className="text-green-700 text-lg mb-6 leading-relaxed">{post.content}</p>
                      <Button className="bg-green-600 hover:bg-green-700">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts
              .filter((post) => !post.featured)
              .map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full overflow-hidden border-green-100 hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={post.image || '/placeholder.svg'}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-4 text-xs text-green-600 mb-2">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="w-fit border-green-600 text-green-600 mb-3"
                      >
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-semibold text-green-900 group-hover:text-green-700 transition-colors">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-green-700 mb-4 line-clamp-3">{post.excerpt}</p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-green-600 text-green-600 hover:bg-green-50"
                      >
                        Read More <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
              Get the latest updates from our regeneration journey delivered to your inbox. Learn
              about sustainable farming practices and environmental restoration.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-green-900 focus:outline-none focus:ring-2 focus:ring-amber-600"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 px-6">Subscribe</Button>
              </div>
              <p className="text-sm text-green-200 mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12 border-t border-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6" />
                <span className="text-xl font-bold">Carinya Parc</span>
              </div>
              <p className="text-green-200">
                Regenerating the Australian landscape through sustainable farming and environmental
                restoration.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-green-200">
                <div className="flex items-center">
                  <span>315 Warraba Road, The Branch NSW 2425</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-green-200 hover:text-white">
                  Home
                </Link>
                <Link href="/our-farm" className="block text-green-200 hover:text-white">
                  Our Farm
                </Link>
                <Link href="/regeneration" className="block text-green-200 hover:text-white">
                  Regeneration Project
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-green-200">
            <p>&copy; 2024 Carinya Parc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
