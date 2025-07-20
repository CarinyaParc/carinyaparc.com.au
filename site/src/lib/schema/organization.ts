// src/lib/schema/organization.ts
export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
}

export function generateOrganizationSchema(config: {
  name: string;
  url: string;
  logoUrl: string;
}): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    logo: config.logoUrl,
  };
}
