import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';

// types for Next.js 15 async params/searchParams
type Params = Promise<{ slug: string }>;
type SearchParams = Promise<Record<string, string | string[] | undefined>>;

const CONTENT_DIRECTORIES = ['', 'legal', 'blog'];

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Params;
  searchParams?: SearchParams;
}): Promise<Metadata> {
  const { slug } = await params;
  let frontmatter = null;

  for (const dir of CONTENT_DIRECTORIES) {
    const filePath = path.join(process.cwd(), 'content', dir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      const source = fs.readFileSync(filePath, 'utf8');
      frontmatter = matter(source).data;
      break;
    }
  }

  if (!frontmatter) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${frontmatter.title} – Carinya Parc`,
    description: frontmatter.description,
  };
}

export default async function Page({ params }: { params: Params; searchParams?: SearchParams }) {
  const { slug } = await params;

  // …your existing MDX lookup and import logic…
  let ContentComponent;
  let frontmatter = null;
  let contentPath = '';

  for (const dir of CONTENT_DIRECTORIES) {
    const filePath = path.join(process.cwd(), 'content', dir, `${slug}.mdx`);
    if (fs.existsSync(filePath)) {
      contentPath = dir ? `${dir}/${slug}` : slug;
      
      // Parse frontmatter with gray-matter to ensure proper separation
      const source = fs.readFileSync(filePath, 'utf8');
      const matterResult = matter(source);
      frontmatter = matterResult.data;
      
      // Ensure the file has properly formatted frontmatter
      if (!source.trim().startsWith('---')) {
        // If not properly formatted, rewrite the file
        const formattedContent = `---
${Object.entries(frontmatter).map(([key, value]) => `${key}: ${JSON.stringify(value)}`).join('\n')}
---

${matterResult.content}`;
        fs.writeFileSync(filePath, formattedContent);
      }
      
      break;
    }
  }

  if (!contentPath) notFound();

  try {
    ContentComponent = (await import(`@/content/${contentPath}.mdx`)).default;
  } catch {
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
