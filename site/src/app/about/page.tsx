import { Metadata } from 'next';
import {
  SectionWithImageTiles,
  SectionHeader,
  SectionTag,
  SectionTitle,
  SectionDescription,
  SectionContent,
  TextContent,
  ContentHeading,
  ContentParagraph,
  ImageTiles,
  ImageTile,
  StatsSection,
  StatsLabel,
  StatsGrid,
  StatItem,
} from '@/src/components/SectionWithImageTiles';

export const metadata: Metadata = {
  title: 'About - Carinya Parc',
  description:
    "Discover the story of Carinya Parc, our peaceful home where we're regenerating land, building community, and demonstrating ecological stewardship in practice.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <SectionWithImageTiles>
        <SectionHeader>
          <SectionTag>About Carinya Parc</SectionTag>
          <SectionTitle>
            Regenerating Country <br />
            One Landscape at a Time
          </SectionTitle>
          <SectionDescription>
            Discover the story of Carinya Parc, our peaceful home where we're regenerating land,
            building community, and demonstrating ecological stewardship in practice.
          </SectionDescription>
        </SectionHeader>
        <SectionContent>
          <TextContent>
            <ContentHeading>Our Mission</ContentHeading>
            <ContentParagraph>
              At Carinya Parc, we're transforming a 42-hectare former grazing property into a living
              demonstration of regenerative agriculture and ecological restoration. Nestled on the
              mid-north coast of New South Wales, our land has been resting since early 2024—giving
              us time to observe, plan and begin the journey of renewal.
            </ContentParagraph>
            <ContentParagraph>
              What drives us? A vision of thriving landscapes where biodiversity, food production
              and community connection work in harmony to heal Country.
            </ContentParagraph>
          </TextContent>

          <ImageTiles>
            <ImageTile src="/images/img_10.jpg" alt="Carinya Parc landscape" />
            <ImageTile src="/images/img_8.jpg" alt="Carinya Parc river" offset />
            <ImageTile src="/images/img_12.jpg" alt="Native plantings" />
            <ImageTile src="/images/img_23.jpg" alt="Farm dam" offset />
          </ImageTiles>

          <StatsSection>
            <StatsLabel>Our Regeneration Plan</StatsLabel>
            <StatsGrid>
              <StatItem label="Hectares to Rewild" value="10+" />
              <StatItem label="Natives to Plant" value="30,000" />
              <StatItem label="Riparian Repair" value="400m" />
              <StatItem label="Farm Dams" value="5" lastInRow />
            </StatsGrid>
          </StatsSection>
        </SectionContent>
      </SectionWithImageTiles>

      {/* Carinya meaning */}
      <section className="relative isolate overflow-hidden bg-white py-8 sm:py-12">
        <div className="mx-auto max-w-2xl lg:max-w-6xl border-y border-eucalyptus-500 py-16">
          <h3 className="text-center text-2xl font-bold text-eucalyptus-400">
            What does Carinya mean?
          </h3>
          <figure className="mt-8">
            <blockquote className="text-center text-xl/8 font-medium text-gray-900 sm:text-2xl/9">
              <p>
                <strong>Carinya</strong> is an Aboriginal Australian word, primarily from the
                Awabakal language of the Newcastle-Lake Macquarie region, that translates to{' '}
                <span className="text-eucalyptus-600 font-semibold">"peaceful home"</span> or{' '}
                <span className="text-eucalyptus-600 font-semibold">"happy home"</span>.
              </p>
            </blockquote>
          </figure>
        </div>
      </section>
    </main>
  );
}
