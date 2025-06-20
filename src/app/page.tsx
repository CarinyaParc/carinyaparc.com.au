'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Leaf, Heart, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Hero,
  HeroContent,
  HeroImage,
  HeroTitle,
  HeroText,
  HeroLocation,
  HeroActions,
  HeroButton,
  HeroLink,
} from '@/components/Hero';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero>
        <HeroImage>
          <Image
            src="/images/hero_image.jpg"
            alt="Carinya Parc landscape"
            fill
            priority
            className="absolute inset-0 -z-10 object-cover opacity-80 brightness-50"
          />
        </HeroImage>
        <HeroContent>
          <HeroTitle>
            Restoring the Land,
            <span className="text-eucalyptus-600"> Nurturing the Future</span>
          </HeroTitle>
          <HeroText>
            Welcome to Carinya Parc, where we're dedicated to regenerating the Australian landscape
            through sustainable farming practices and environmental restoration.
          </HeroText>
          <HeroLocation>315 Warraba Road, The Branch NSW 2425</HeroLocation>
          <HeroActions>
            <HeroButton href="/our-farm">Learn Our Story</HeroButton>
            <HeroLink href="/regeneration">View Our Project</HeroLink>
          </HeroActions>
        </HeroContent>
      </Hero>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">Our Mission</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              We're committed to transforming degraded land into thriving ecosystems through
              innovative regenerative practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Land Regeneration',
                description:
                  'Restoring soil health and biodiversity through sustainable practices and native plantings.',
              },
              {
                icon: Heart,
                title: 'Environmental Care',
                description:
                  'Protecting and enhancing natural habitats while creating productive agricultural systems.',
              },
              {
                icon: Users,
                title: 'Community Impact',
                description:
                  'Building connections with local communities and sharing knowledge about sustainable farming.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-green-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-900 mb-4">{feature.title}</h3>
                    <p className="text-green-700">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">
              Latest from the Land
            </h2>
            <p className="text-xl text-green-700">
              Follow our journey as we transform Carinya Parc
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Soil Testing Complete',
                date: 'March 2024',
                excerpt:
                  "We've completed comprehensive soil testing across the property to guide our regeneration strategy.",
                image: '/placeholder.svg?height=300&width=400',
              },
              {
                title: 'Native Tree Planting',
                date: 'February 2024',
                excerpt:
                  'First phase of native tree planting is underway with over 500 seedlings planted this month.',
                image: '/placeholder.svg?height=300&width=400',
              },
              {
                title: 'Water System Planning',
                date: 'January 2024',
                excerpt:
                  'Designing sustainable water management systems to support both agriculture and wildlife.',
                image: '/placeholder.svg?height=300&width=400',
              },
            ].map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Image
                    src={post.image || '/placeholder.svg'}
                    alt={post.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="text-sm text-green-600 mb-2">{post.date}</div>
                    <h3 className="text-xl font-semibold text-green-900 mb-3">{post.title}</h3>
                    <p className="text-green-700 mb-4">{post.excerpt}</p>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-green-600 text-green-600"
                    >
                      <Link href="/blog">Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/blog">
                View All Updates <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
