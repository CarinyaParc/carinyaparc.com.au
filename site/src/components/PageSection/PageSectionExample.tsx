'use client';

import { CloudUpload, Lock, Server } from 'lucide-react';
import {
  PageSectionA,
  Content,
  Eyebrow,
  Title,
  Description,
  FeaturesList,
  Image,
} from './PageSectionA';

// Sample features data
const features = [
  {
    name: 'Regenerative Agriculture',
    description:
      'Building soil health through no-till practices, diverse cover cropping, and holistic grazing management.',
    icon: CloudUpload,
  },
  {
    name: 'Native Reforestation',
    description:
      'Planting over 30,000 native trees to create habitat corridors and enhance biodiversity.',
    icon: Lock,
  },
  {
    name: 'Community Involvement',
    description:
      'Regular volunteer planting days and workshops to share knowledge and build community.',
    icon: Server,
  },
];

export default function PageSectionExample() {
  return (
    <PageSectionA>
      <Content>
        <Eyebrow>Our Approach</Eyebrow>
        <Title>Regenerating Land, Growing Community</Title>
        <Description>
          At Carinya Parc, we're transforming 42 hectares of previously degraded land into thriving
          woodland, diverse habitat corridors, and productive agroforestry systems.
        </Description>
        <FeaturesList items={features} />
      </Content>
      <Image src="/images/hero_image.jpg" alt="Carinya Parc landscape" />
    </PageSectionA>
  );
}
