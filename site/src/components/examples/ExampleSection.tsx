'use client';

import Image from 'next/image';
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
} from '../SectionWithImage';

export function ExampleLightLeftSection() {
  return (
    <SectionWithImage variant="light" imagePosition="left">
      <SectionImage imagePosition="left">
        <Image
          src="/images/img_1.jpg"
          alt="Farm landscape"
          fill
          className="object-cover"
          priority
        />
      </SectionImage>
      <SectionContent imagePosition="left">
        <SectionSubtitle variant="light">Our Farm</SectionSubtitle>
        <SectionTitle variant="light">Sustainable Agriculture</SectionTitle>
        <SectionText variant="light">
          We are committed to regenerative farming practices that restore soil health, biodiversity,
          and ecosystem functions. Our approach focuses on building carbon-rich soil while producing
          nutrient-dense food in a way that heals the land.
        </SectionText>
        <SectionActions>
          <SectionButton href="/our-farm" variant="light">
            Learn More
          </SectionButton>
          <SectionLink href="/products" variant="light">
            View Our Products
          </SectionLink>
        </SectionActions>
      </SectionContent>
    </SectionWithImage>
  );
}

export function ExampleDarkRightSection() {
  return (
    <SectionWithImage variant="dark" imagePosition="right">
      <SectionImage imagePosition="right">
        <Image
          src="/images/img_2.jpg"
          alt="Regeneration project"
          fill
          className="object-cover"
          priority
        />
      </SectionImage>
      <SectionContent imagePosition="right">
        <SectionSubtitle variant="dark">Get Involved</SectionSubtitle>
        <SectionTitle variant="dark">Join Our Regeneration Projects</SectionTitle>
        <SectionText variant="dark">
          We believe in community-driven regeneration. Join us in our mission to restore the
          landscape, increase biodiversity, and build resilience against climate change through
          collaborative regenerative projects.
        </SectionText>
        <SectionActions>
          <SectionButton href="/regeneration/get-involved" variant="dark">
            Volunteer Today
          </SectionButton>
          <SectionLink href="/regeneration" variant="dark">
            Learn More About Our Projects
          </SectionLink>
        </SectionActions>
      </SectionContent>
    </SectionWithImage>
  );
}
