'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/src/components/ui/card';
import { Heart, Users, Shovel, Sprout, Newspaper, Ticket, TentTree, Trees } from 'lucide-react';

import {
  Hero,
  HeroContent,
  HeroBackgroundImage,
  HeroTitle,
  HeroText,
  HeroLocation,
  HeroActions,
  HeroButton,
} from '@/src/components/Hero';
import {
  SectionWithImage,
  SectionImage,
  SectionContent,
  SectionTitle,
  SectionSubtitle,
  SectionText,
  SectionActions,
  SectionButton,
  SectionLink,
} from '@/src/components/SectionWithImage';
import { PostsLatest } from '@/src/components/PostsLatest';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section>
        <Hero>
          <HeroBackgroundImage
            src="/images/hero_image.jpg"
            alt="Carinya Parc Hero"
            priority
          />
          <HeroContent>
            <HeroTitle>
              Restoring the Land,
              <span className="text-eucalyptus-600"> Nurturing the Future</span>
            </HeroTitle>
            <HeroText>
              Welcome to Carinya Parc. We're creating a living example of how we can heal the land,
              grow nutrient-dense food and build community through regenerative agriculture.
            </HeroText>
            <HeroLocation>The Branch NSW 2425</HeroLocation>
            <HeroActions>
              <HeroButton href="/our-farm">
                Learn Our Story <span aria-hidden="true">→</span>
              </HeroButton>
            </HeroActions>
          </HeroContent>
        </Hero>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-eucalyptus-600 mb-4">Our Mission</h2>
            <p className="text-xl text-eucalyptus-500 max-w-3xl mx-auto">
              To heal land and food systems through hands-on ecological restoration, delivering
              nutrient-dense produce, and inspiring collective action.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Trees,
                title: 'Regeneration over Extraction',
                description:
                  'We prioritise practices that rebuild soil health, biodiversity and water systems rather than deplete them. Ensuring every action leaves the land healthier than we found it.',
              },
              {
                icon: Heart,
                title: 'Stewardship over Ownership',
                description:
                  "We treat the land as borrowed from future generations. Caring for it with respect and humility, guided by both scientific knowledge and nature's own wisdom.",
              },
              {
                icon: Users,
                title: 'Collaboration & Transparency',
                description:
                  'True transformation requires many hands and open sharing. We partner with communities - inviting everyone to learn from our successes and setbacks.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-eucalyptus-600 border-eucalyptus-100 hover:shadow-xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <feature.icon className="h-12 w-12 text-eucalyptus-100 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                    <p className="text-eucalyptus-100">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*Our Story Section*/}
      <section className="bg-eucalyptus-600 py-8 sm:py-12">
        <SectionWithImage variant="dark" imagePosition="right">
          <SectionImage>
            <Image
              src="/images/img_23.jpg"
              alt="Farm landscape"
              fill
              className="object-cover"
              priority
            />
          </SectionImage>
          <SectionContent>
            <SectionSubtitle>Our Story</SectionSubtitle>
            <SectionTitle>Regenerating Land, Growing Community</SectionTitle>
            <SectionText>
              We're transforming 42 hectares (104 acres) of previously degraded land into thriving
              woodland, diverse habitat corridors, and productive agroforestry systems. Founded by
              Jonathan Daddia — strategic leader turned regenerative farmer — our approach combines
              evidence-based ecological practices with community engagement.
            </SectionText>
            <SectionActions>
              <SectionButton href="/about">
                Read Our Story<span aria-hidden="true">&nbsp;→</span>
              </SectionButton>
            </SectionActions>
          </SectionContent>
        </SectionWithImage>
      </section>

      {/*Regenerate Section*/}
      <section className="bg-white py-8 sm:py-12">
        <SectionWithImage variant="light" imagePosition="left">
          <SectionImage>
            <Image src="/images/img_5.jpg" alt="Farm gate" fill className="object-cover" priority />
          </SectionImage>
          <SectionContent>
            <SectionSubtitle>Regenerate with Us</SectionSubtitle>
            <SectionTitle>Help Restore Diversity, For our Native Wildlife</SectionTitle>
            <SectionText>
              How are we restoring biodiversity? Through planting 30,000+ native trees, enhancing
              waterways and creating wildlife corridors spanning our Branch River frontage. You can
              help:
              <ul role="list" className="mt-8 space-y-6">
                <li className="flex gap-x-3">
                  <Shovel className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Join a planting day.</strong> Get your hands
                    dirty at an upcoming planting events.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Sprout className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Support regeneration.</strong> Provide
                    seedlings, fencing and ecological monitoring equipment.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Newspaper className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Follow our progress.</strong> Access open
                    reports tracking soil health, water quality and biodiversity improvements.
                  </span>
                </li>
              </ul>
            </SectionText>
            <SectionActions>
              <SectionButton href="/regeneration">
                Get Involved<span aria-hidden="true">&nbsp;→</span>
              </SectionButton>
            </SectionActions>
          </SectionContent>
        </SectionWithImage>
      </section>

      {/*Experience Section*/}
      <section className="bg-eucalyptus-600 py-8 sm:py-12">
        <SectionWithImage variant="dark" imagePosition="right">
          <SectionImage>
            <Image src="/images/img_9.jpg" alt="Farm gate" fill className="object-cover" priority />
          </SectionImage>
          <SectionContent>
            <SectionSubtitle>Experience the Farm</SectionSubtitle>
            <SectionTitle>Explore Regenerative Farming, Reconnect with Nature</SectionTitle>
            <SectionText>
              Discover regerative farming. Immerse yourself through guided tours, hands-on workshops
              and eco-stays. Explore our permaculture gardens, syntropic food forest and wildlife
              corridors.
              <ul role="list" className="mt-8 space-y-6">
                <li className="flex gap-x-3">
                  <Ticket className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Book a tour.</strong> Small-group experiences
                    led by Jonno.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Trees className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Join a workshop.</strong> Learn practical
                    skills in seed saving, soil building and food preservation
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <TentTree className="h-6 w-6 text-eucalyptus-300" />
                  <span>
                    <strong className="font-semibold">Stay on the land.</strong> Connect deeply with
                    the land through our rustic accommodation options.
                  </span>
                </li>
              </ul>
            </SectionText>
            <SectionActions>
              <SectionButton href="#">Coming Soon!</SectionButton>
              <SectionLink href="#">Sign Up! Be the first to know</SectionLink>
            </SectionActions>
          </SectionContent>
        </SectionWithImage>
      </section>

      {/*Blog Section */}
      <section className="bg-white py-8 sm:py-12">
        <PostsLatest
          title="Life on Pasture"
          subtitle="What's happening on the farm? Follow our journey as we transform Carinya Parc into a thriving regenerative farm."
          posts={[
            {
              id: 1,
              title: 'Soil Testing Complete',
              href: '#',
              description:
                "We've completed comprehensive soil testing across the property to guide our regeneration strategy.",
              imageUrl: '/images/img_6.jpg',
              date: 'March 2024',
              datetime: '2024-03-15',
            },
            {
              id: 2,
              title: 'Native Tree Planting',
              href: '#',
              description:
                'First phase of native tree planting is underway with over 500 seedlings planted this month.',
              imageUrl: '/images/img_8.jpg',
              date: 'February 2024',
              datetime: '2024-02-20',
            },
            {
              id: 3,
              title: 'Water System Planning',
              href: '#',
              description:
                'Designing sustainable water management systems to support both agriculture and wildlife.',
              imageUrl: '/images/img_12.jpg',
              date: 'January 2024',
              datetime: '2024-01-10',
            },
          ]}
          viewAllLink="/blog"
        />
      </section>
    </div>
  );
}
