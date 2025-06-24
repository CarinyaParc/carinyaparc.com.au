'use client';

import { motion } from 'framer-motion';
import { MapPin, Leaf, Heart, Target, Users, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/src/components/ui/button';
import { Card, CardContent } from '@/src/components/ui/card';

export default function OurFarmPage() {
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
              About <span className="text-amber-600">Carinya Parc</span>
            </h1>
            <p className="text-xl text-green-700 max-w-3xl mx-auto mb-8">
              Our story begins with a vision to transform degraded land into a thriving ecosystem
              that benefits both the environment and the community.
            </p>
            <div className="flex items-center justify-center text-green-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span className="text-lg">315 Warraba Road, The Branch NSW 2425</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-green-700 text-lg">
                <p>
                  Carinya Parc represents more than just a farm – it's a commitment to healing the
                  land and creating a sustainable future for generations to come. Located in the
                  beautiful Manning Valley of New South Wales, our property spans diverse landscapes
                  that offer unique opportunities for regenerative agriculture.
                </p>
                <p>
                  When we first acquired this land, we saw potential where others saw challenges.
                  Years of conventional farming had left the soil depleted and the natural
                  ecosystems fragmented. But we also saw an opportunity to demonstrate that with
                  care, patience, and the right approach, the land could be restored to its former
                  vitality.
                </p>
                <p>
                  Today, we're implementing cutting-edge regenerative practices that work with
                  nature rather than against it. Our approach combines traditional Aboriginal land
                  management wisdom with modern sustainable farming techniques.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Carinya Parc landscape view"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-4">Our Values</h2>
            <p className="text-xl text-green-700 max-w-3xl mx-auto">
              Everything we do is guided by our core values and commitment to sustainable practices.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Leaf,
                title: 'Sustainability',
                description:
                  'Every decision we make considers the long-term health of the land and environment.',
              },
              {
                icon: Heart,
                title: 'Stewardship',
                description:
                  'We see ourselves as caretakers of the land, responsible for its wellbeing.',
              },
              {
                icon: Target,
                title: 'Innovation',
                description:
                  'We embrace new technologies and methods that support regenerative agriculture.',
              },
              {
                icon: Users,
                title: 'Community',
                description:
                  'We believe in sharing knowledge and building connections with our neighbors.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center border-green-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <value.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green-900 mb-4">{value.title}</h3>
                    <p className="text-green-700">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Property map and features"
                width={800}
                height={600}
                className="rounded-2xl shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-green-900 mb-6">The Property</h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Location</h3>
                  <p className="text-green-700">
                    Situated in The Branch, NSW, our property benefits from the region's favorable
                    climate and rich agricultural heritage. The Manning Valley provides an ideal
                    environment for diverse farming practices.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Landscape</h3>
                  <p className="text-green-700">
                    The property features rolling hills, natural water sources, and diverse soil
                    types that support a variety of agricultural and conservation activities.
                  </p>
                </div>
                <div className="border-l-4 border-green-600 pl-6">
                  <h3 className="text-xl font-semibold text-green-900 mb-2">Potential</h3>
                  <p className="text-green-700">
                    With careful planning and regenerative practices, we're transforming this land
                    into a model of sustainable agriculture and environmental restoration.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Follow Our Journey</h2>
            <p className="text-xl text-green-200 mb-8 max-w-3xl mx-auto">
              Stay updated on our regeneration progress and learn about sustainable farming
              practices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Link href="/regeneration">View Our Project</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-green-900"
              >
                <Link href="/blog">Read Our Blog</Link>
              </Button>
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
                  <MapPin className="h-4 w-4 mr-2" />
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
                <Link href="/regeneration" className="block text-green-200 hover:text-white">
                  Regeneration Project
                </Link>
                <Link href="/blog" className="block text-green-200 hover:text-white">
                  Life on the Land
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
