'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

// Fade-in animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function RegenerationProject() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-green-700 dark:text-green-500">
              Our Regeneration Project
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              Restoring the land through holistic management and natural processes.
            </p>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-500">
                Our Approach to Regeneration
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                At Carinya Parc, we believe in working with nature rather than against it. Our
                regeneration project is based on the principles of restoration ecology and
                regenerative agriculture, with the goal of increasing biodiversity, improving soil
                health, and enhancing water cycles.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                We're currently in the assessment and planning phase, mapping the property's
                ecological assets and challenges to create a comprehensive regeneration strategy
                that addresses the specific needs of our land.
              </p>
            </motion.div>

            <div className="my-12 aspect-[16/9] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/regeneration-landscape.jpg"
                alt="Carinya Parc regeneration area"
                width={1200}
                height={675}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-700 dark:text-green-500">
                Key Focus Areas
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Our regeneration efforts are concentrated in these critical areas:
              </p>
            </motion.div>

            <div className="space-y-12">
              {/* Soil Health */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-500">
                    Soil Health Restoration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Healthy soil is the foundation of any regenerative system. We're implementing
                    practices to increase soil organic matter, improve structure, and enhance the
                    soil microbiome.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Baseline soil testing across different ecosystems</li>
                    <li>Strategic application of compost and organic matter</li>
                    <li>Minimizing soil disturbance and implementing no-till practices</li>
                    <li>Cover cropping to build soil structure</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/soil-health.jpg"
                    alt="Healthy soil with earthworms"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Water Management */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="md:order-2">
                  <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-500">
                    Water Cycle Restoration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Water is a precious resource that we aim to manage effectively. Our goal is to
                    slow, spread, and sink water on our property to maximize its benefits.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Mapping water flows and identifying erosion hotspots</li>
                    <li>Implementing swales and water harvesting earthworks</li>
                    <li>Revegetating riparian zones to protect water quality</li>
                    <li>Creating small ponds and wetland areas to support biodiversity</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg md:order-1">
                  <Image
                    src="/images/water-management.jpg"
                    alt="Natural water feature"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>

              {/* Native Vegetation */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-green-700 dark:text-green-500">
                    Native Vegetation Restoration
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Native plants provide habitat for wildlife, protect soil, and contribute to the
                    overall resilience of the ecosystem. We're working to enhance and expand native
                    vegetation across the property.
                  </p>
                  <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Plant biodiversity surveys to identify existing native species</li>
                    <li>Seed collection from local provenance species</li>
                    <li>Strategic revegetation of degraded areas with native trees and shrubs</li>
                    <li>Creating wildlife corridors to connect habitat fragments</li>
                  </ul>
                </div>
                <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/native-vegetation.jpg"
                    alt="Native Australian plants"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Tracking */}
      <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-12"
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-green-700 dark:text-green-500">
                Monitoring Our Progress
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We believe in the importance of tracking our regeneration efforts to ensure we're
                moving in the right direction. Through regular monitoring and documentation, we can
                adapt our practices and celebrate our successes.
              </p>
            </motion.div>

            <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-500">
                How We Track Changes
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="font-bold mr-2">📷</span>
                  <span>Photo monitoring points established across the property</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">🔬</span>
                  <span>Annual soil testing to track improvements in soil health</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">🦋</span>
                  <span>Biodiversity surveys to document changes in flora and fauna</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold mr-2">📊</span>
                  <span>Detailed record-keeping of all management activities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
