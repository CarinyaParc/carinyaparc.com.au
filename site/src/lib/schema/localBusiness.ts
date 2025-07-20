// src/lib/schema/localBusiness.ts
export interface LocalBusinessSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    '@type': string;
    latitude: number;
    longitude: number;
  };
  openingHours?: string[];
}

export function generateLocalBusinessSchema(data: {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: { latitude: number; longitude: number };
  openingHours?: string[];
}): LocalBusinessSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: data.name,
    description: data.description,
    address: {
      '@type': 'PostalAddress',
      ...data.address,
    },
    ...(data.geo && {
      geo: {
        '@type': 'GeoCoordinates',
        ...data.geo,
      },
    }),
    ...(data.openingHours && { openingHours: data.openingHours }),
  };
}
