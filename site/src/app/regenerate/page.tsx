import HeaderWithStats from '@/src/components/sections/HeaderWithStats';

export default function RegeneratePage() {
  const links = [
    { name: 'Volunteer Opportunities', href: '/regenerate#volunteer' },
    { name: 'Support Projects', href: '/regenerate#support' },
    { name: 'Learn and Share', href: '/regenerate#learn' },
    { name: 'Regeneration FAQ', href: '/regeneration/faq' },
  ];

  const stats = [
    { name: 'Hectares Being Restored', value: '42' },
    { name: 'Native Trees Planned', value: '30,000+' },
    { name: 'River Frontage (meters)', value: '400' },
    { name: 'Ecological Zones', value: '5' },
  ];

  return (
    <main className="min-h-screen">
      <HeaderWithStats
        subtitle="Regenerate with Us"
        title="Healing Land Through Ecological Restoration"
        description="Join us as we transform 42 hectares of former grazing land into thriving, biodiverse ecosystems through strategic restoration, wildlife corridors, and regenerative agroforestry."
        backgroundImage="/images/img_5.jpg"
        backgroundImageAlt="Carinya Parc landscape being regenerated"
        links={links}
        stats={stats}
      />

      {/* Additional page content will be added in future tasks */}
    </main>
  );
}
