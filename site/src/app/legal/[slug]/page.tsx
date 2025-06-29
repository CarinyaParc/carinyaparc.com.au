import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import { PageLayout } from '@/src/components/PageLayout';

// Define the Legal frontmatter interface
interface LegalFrontmatter {
  title?: string;
  description?: string;
  lastUpdated?: string;
  [key: string]: unknown;
}

// Function to find MDX files in the legal directory
async function findLegalPage(slug: string) {
  const mdxPath = path.join(process.cwd(), 'content', 'legal', `${slug}.mdx`);

  if (fs.existsSync(mdxPath)) {
    const source = fs.readFileSync(mdxPath, 'utf8');
    const matterResult = matter(source);
    return {
      slug,
      frontmatter: matterResult.data as LegalFrontmatter,
    };
  }

  return null;
}

type Props = {
  params: { slug: string };
  searchParams?: Record<string, string | string[] | undefined>;
};

// Generate metadata for the page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const pageData = await findLegalPage(slug);

  if (!pageData) {
    return {
      title: 'Legal Document Not Found - Carinya Parc',
      description: 'The requested legal document could not be found.',
    };
  }

  const { frontmatter } = pageData;

  return {
    title: `${frontmatter.title || slug} - Legal - Carinya Parc`,
    description: frontmatter.description || 'Legal document from Carinya Parc',
  };
}

// Generate static paths for the legal pages
export async function generateStaticParams() {
  const legalDir = path.join(process.cwd(), 'content', 'legal');
  const fileNames = fs.readdirSync(legalDir);

  return fileNames.map((fileName) => ({
    slug: fileName.replace(/\.mdx$/, ''),
  }));
}

export default async function LegalPage({ params }: Props) {
  const { slug } = params;
  const pageData = await findLegalPage(slug);

  if (!pageData) {
    notFound();
  }

  const { frontmatter } = pageData;

  let ContentComponent;
  try {
    ContentComponent = (await import(`@/content/legal/${slug}.mdx`)).default;
  } catch (error) {
    console.error('Error loading legal MDX file:', error);
    notFound();
  }

  return (
    <div className="min-h-screen">
      <PageLayout variant="narrow">
        <div className="prose max-w-none">
          {frontmatter.lastUpdated && (
            <div className="text-sm text-gray-500 mb-4">
              Last updated: {frontmatter.lastUpdated}
            </div>
          )}
          <ContentComponent />
        </div>
      </PageLayout>
    </div>
  );
}
