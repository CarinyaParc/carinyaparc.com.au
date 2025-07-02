import { Metadata } from 'next';
import HeroWithTiles from '@/src/components/HeroWithTiles';
import { generatePageMetadata } from '@/src/lib/generateMetadata';

// Define stats data
const stats = [
  { label: 'Hectares to Rewild', value: '10+' },
  { label: 'Natives to Plant', value: '30,000' },
  { label: 'Riparian Repair', value: '400m' },
  { label: 'Farm Dams', value: '5' },
]

export const metadata: Metadata = generatePageMetadata({
  title: 'About - Carinya Parc',
  description: "Discover the story of Carinya Parc, our peaceful home where we're regenerating land, building community, and demonstrating ecological stewardship in practice.",
  path: '/about',
  image: '/images/img_10.jpg',
  keywords: [
    'about',
    'our story',
    'mission',
    'ecological restoration',
    'regeneration',
    'community',
    'The Branch NSW',
  ],
});

export default function AboutPage() {
  return (
    <main className="isolate">
      {/* Hero section */}
      <section>
        <HeroWithTiles
          variant="light"
          title="Regenerating Country One Landscape at a Time"
          subtitle="About Carinya Parc"
          description="Discover the story of Carinya Parc, our peaceful home where we're regenerating land, building community, and demonstrating ecological stewardship in practice."
          tileImages={[
            { src: "/images/img_9.jpg", alt: "Carinya Parc landscape" },
            { src: "/images/img_8.jpg", alt: "Carinya Parc river" },
            { src: "/images/img_13.jpg", alt: "Native plantings" },
            { src: "/images/img_23.jpg", alt: "Farm dam" },
            { src: "/images/img_16.jpg", alt: "Carinya Parc landscape" } // Duplicating first image to ensure we have 5 for the layout
          ]}
        />
      </section>

      {/* Carinya meaning */}
      <section className="isolate py-8 sm:py-12">
        <div className="mx-auto max-w-2xl lg:max-w-6xl border-y border-charcoal-100 py-16">
          <h2 className="text-center text-3xl font-bold text-eucalyptus-600">
            What does Carinya mean?
          </h2>
          <figure className="mt-8">
            <blockquote className="text-center text-xl/9 font-medium text-charcoal-600 sm:text-xl/9">
              <p>
                <strong>Carinya</strong> is an Aboriginal Australian word, <br /> primarily from the
                Awabakal language of the Newcastle-Lake Macquarie region, <br /> that translates to{' '}
                <span className="text-eucalyptus-600 font-semibold">"peaceful home"</span> or{' '}
                <span className="text-eucalyptus-600 font-semibold">"happy home"</span>.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>

      {/* Mission section with stats */}
      <section className="isolate py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 sm:mt-0 lg:px-8 xl:-mt-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-eucalyptus-600 sm:text-4xl">Our Mission</h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                <p className="text-xl/8 font-medium text-charcoal-500">
                  At Carinya Parc, we're transforming a 42-hectare former grazing property into a living
                  demonstration of regenerative agriculture and ecological restoration. Nestled on the
                  mid-north coast of New South Wales, our land has been resting since early 2024—giving
                  us time to observe, plan and begin the journey of renewal.
                </p>
                <p className="mt-10 max-w-xl text-lg/7 font-medium text-charcoal-500">
                  What drives us? A vision of thriving landscapes where biodiversity, food production
                  and community connection work in harmony to heal Country.
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-center">
                <dl className="w-64 space-y-8 xl:w-80">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                      <dt className="text-base/7 text-charcoal-500">{stat.label}</dt>
                      <dd className="text-5xl font-semibold tracking-tight text-eucalyptus-600">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image section */}
      <section>
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
            <img
              alt=""
              src="/images/img_23.jpg"
              className="aspect-5/2 w-full object-cover xl:rounded-3xl"
            />
        </div>
      </section>

      
    </main>
  );
}
