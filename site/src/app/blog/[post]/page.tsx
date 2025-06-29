import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import { PageLayout } from '@/src/components/PageLayout';
import DateComponent from '@/src/components/Date';

// Define the frontmatter interface
interface PostFrontmatter {
  title?: string;
  date?: string;
  author?: string;
  excerpt?: string;
  description?: string;
  [key: string]: unknown;
}

// Function to parse date from post filename (format: YYYYMMDD-slug.mdx)
function extractDateFromFilename(filename: string): string | null {
  const match = filename.match(/^(\d{8})-(.+)$/);
  if (match && match[1]) {
    const dateStr = match[1];
    // Format: YYYYMMDD -> YYYY-MM-DD
    return `${dateStr.slice(0, 4)}-${dateStr.slice(4, 6)}-${dateStr.slice(6, 8)}`;
  }
  return null;
}

// Function to find MDX files in the posts directory
async function findBlogPost(slug: string) {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const fileNames = fs.readdirSync(postsDir);

  // Find the file that ends with the slug
  const fileName = fileNames.find((file) => file.includes(slug));

  if (fileName) {
    const fullPath = path.join(postsDir, fileName);
    const source = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(source);

    // Extract date from filename if available
    const dateFromFilename = extractDateFromFilename(fileName);

    return {
      slug,
      fileName,
      frontmatter: {
        ...matterResult.data,
        date: matterResult.data.date || dateFromFilename,
      } as PostFrontmatter,
    };
  }

  return null;
}

type PageParams = {
  post: string;
};

// Generate metadata for the page
export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const { post } = params;
  const postData = await findBlogPost(post);

  if (!postData) {
    return {
      title: 'Blog Post Not Found - Carinya Parc',
      description: 'The requested blog post could not be found.',
    };
  }

  const { frontmatter } = postData;

  return {
    title: `${frontmatter.title || post} - Blog - Carinya Parc`,
    description: frontmatter.excerpt || frontmatter.description || 'Blog post from Carinya Parc',
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt || frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
    },
  };
}

// Generate static paths for the blog posts
export async function generateStaticParams(): Promise<PageParams[]> {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    // Extract the slug from the filename (format: YYYYMMDD-slug.mdx)
    const slug = fileName.replace(/^\d{8}-(.+)\.mdx$/, '$1');
    return { post: slug };
  });
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const { post } = params;
  const postData = await findBlogPost(post);

  if (!postData) {
    notFound();
  }

  const { fileName, frontmatter } = postData;

  let ContentComponent;
  try {
    ContentComponent = (await import(`@/content/posts/${fileName}`)).default;
  } catch (error) {
    console.error('Error loading blog post MDX file:', error);
    notFound();
  }

  return (
    <div className="min-h-screen">
      <PageLayout variant="narrow">
        <article className="prose max-w-none">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{frontmatter.title}</h1>
          {frontmatter.date && (
            <div className="text-gray-600 mb-6">
              <DateComponent dateString={frontmatter.date} />
              {frontmatter.author && <span> • By {frontmatter.author}</span>}
            </div>
          )}
          <ContentComponent />
        </article>
      </PageLayout>
    </div>
  );
}
