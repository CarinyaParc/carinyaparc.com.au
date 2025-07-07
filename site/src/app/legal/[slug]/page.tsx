// app/legal/[slug]/page.tsx

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

function legalPageExists(slug: string): boolean {
  const mdxPath = path.join(process.cwd(), 'content', 'legal', `${slug}.mdx`);
  return fs.existsSync(mdxPath);
}

export default async function LegalPage({ params }: PageProps) {
  // params is a Promise now
  const { slug } = await params;

  if (!legalPageExists(slug)) {
    notFound();
  }

  try {
    const content = await import(`@/content/legal/${slug}.mdx`);
    const Content = content.default;

    return (
      <main className="isolate min-h-screen">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div className="container mx-auto max-w-4xl px-4 prose prose-eucalyptus">
            <Content />
          </div>
        </div>
      </main>
    );
  } catch {
    notFound();
  }
}

export function generateStaticParams() {
  const legalDir = path.join(process.cwd(), 'content', 'legal');

  try {
    const files = fs.readdirSync(legalDir);
    return files
      .filter((file) => file.endsWith('.mdx'))
      .map((file) => ({
        slug: file.replace(/\.mdx$/, ''),
      }));
  } catch {
    return [];
  }
}
