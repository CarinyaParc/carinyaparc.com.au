import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';

// Types for Next.js 15 async params/searchParams
type Params = Promise<{ slug: string[] }>;
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

// Unified function to find MDX files for any route pattern
async function findMdxFile(slugParts: string[]) {
  // Handle multi-part slugs like /about/property
  if (slugParts.length > 1) {
    const parentDir = slugParts[0];
    const subSlug = slugParts[1];
    if (parentDir && subSlug) {
      const mdxPath = path.join(process.cwd(), 'content', parentDir, `${subSlug}.mdx`);

      if (fs.existsSync(mdxPath)) {
        const source = fs.readFileSync(mdxPath, 'utf8');
        const matterResult = matter(source);
        return {
          contentPath: `${parentDir}/${subSlug}`,
          frontmatter: matterResult.data,
        };
      }
    }
  }

  // Handle single-part slugs like /about
  else if (slugParts.length === 1) {
    const slug = slugParts[0];
    if (slug) {
      const indexPath = path.join(process.cwd(), 'content', slug, 'index.mdx');

      if (fs.existsSync(indexPath)) {
        const source = fs.readFileSync(indexPath, 'utf8');
        const matterResult = matter(source);
        return {
          contentPath: `${slug}/index`,
          frontmatter: matterResult.data,
        };
      }
    }
  }

  // Not found
  return null;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
  searchParams?: SearchParams;
}): Promise<Metadata> {
  const { slug: slugParts } = await params;
  const fileResult = await findMdxFile(slugParts);

  if (!fileResult) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  const { frontmatter } = fileResult;

  return {
    title: `${frontmatter.title || slugParts.join(' - ')} – Carinya Parc`,
    description: frontmatter.description || '',
  };
}

export default async function Page({ params }: { params: Params; searchParams?: SearchParams }) {
  const { slug: slugParts } = await params;
  const fileResult = await findMdxFile(slugParts);

  if (!fileResult) {
    notFound();
  }

  const { contentPath, frontmatter } = fileResult;

  let ContentComponent;
  try {
    ContentComponent = (await import(`@/content/${contentPath}.mdx`)).default;
  } catch (error) {
    console.error('Error loading MDX file:', error);
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl prose prose-eucalyptus">
      {frontmatter?.date && (
        <p className="text-sm text-gray-500 mb-4">Published: {frontmatter.date}</p>
      )}
      <ContentComponent />
    </div>
  );
}
