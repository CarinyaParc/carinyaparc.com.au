// app/blog/[post]/page.tsx
import '@/src/styles/pages/blog.css';

import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';
import DateComponent from '@/src/components/ui/Date';
import { BASE_URL, SITE_TITLE } from '@/src/lib/constants';

// Define the frontmatter interface
interface PostFrontmatter {
  title?: string;
  date?: string;
  author?: string;
  excerpt?: string;
  description?: string;
  image?: string;
  tags?: string[];
  featured?: boolean;
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

// Function to check if a blog post exists and get its data
function getBlogPostPath(slug: string): string | null {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const fileNames = fs.readdirSync(postsDir);

  // Find the file that includes the slug
  const fileName = fileNames.find((file) => file.includes(slug));

  if (fileName) {
    return path.join(postsDir, fileName);
  }

  return null;
}

// Generate JSON-LD schema for blog post
function generateArticleSchema(postData: PostFrontmatter, slug: string): string {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: postData.title || 'Blog Post',
    description: postData.excerpt || postData.description || 'Blog post from Carinya Parc',
    author: {
      '@type': 'Person',
      name: postData.author || 'Jonathan Daddia',
      url: `${BASE_URL}/about/jonathan`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_TITLE,
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/logo.png`,
        width: 600,
        height: 600,
      },
    },
    datePublished: postData.date || new Date().toISOString().split('T')[0],
    dateModified: postData.date || new Date().toISOString().split('T')[0],
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    url: `${BASE_URL}/blog/${slug}`,
    image: postData.image ? `${BASE_URL}${postData.image}` : `${BASE_URL}/images/hero_image.jpg`,
    articleSection: 'Blog',
    wordCount: 2000, // Approximate word count
    keywords: Array.isArray(postData.tags)
      ? postData.tags.join(', ')
      : 'regenerative farming, sustainable agriculture, permaculture',
    about: {
      '@type': 'Thing',
      name: 'Regenerative Agriculture',
      description: 'Sustainable farming practices that restore soil health and biodiversity',
    },
    isPartOf: {
      '@type': 'Blog',
      name: `${SITE_TITLE} Blog`,
      url: `${BASE_URL}/blog`,
    },
  };

  return JSON.stringify(schema);
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ post: string }>;
}): Promise<Metadata> {
  // Await the params promise
  const { post } = await params;

  const postPath = getBlogPostPath(post);

  if (!postPath) {
    return {
      title: 'Blog Post Not Found - Carinya Parc',
      description: 'The requested blog post could not be found.',
    };
  }

  const source = fs.readFileSync(postPath, 'utf8');
  const { data: frontmatter } = matter(source);
  const fileName = path.basename(postPath);
  const dateFromFilename = extractDateFromFilename(fileName);

  const postData = {
    ...frontmatter,
    date: frontmatter.date || dateFromFilename,
  } as PostFrontmatter;

  return {
    title: `${postData.title || post} - Blog - Carinya Parc`,
    description: postData.excerpt || postData.description || 'Blog post from Carinya Parc',
    openGraph: {
      title: postData.title,
      description: postData.excerpt || postData.description,
      type: 'article',
      publishedTime: postData.date,
      authors: postData.author ? [postData.author] : undefined,
      tags: Array.isArray(postData.tags) ? postData.tags : undefined,
      images: postData.image ? [{ url: `${BASE_URL}${postData.image}` }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: postData.title,
      description: postData.excerpt || postData.description,
      images: postData.image ? [`${BASE_URL}${postData.image}`] : undefined,
    },
    alternates: {
      canonical: `${BASE_URL}/blog/${post}`,
    },
  };
}

// Generate static paths for the blog posts
export function generateStaticParams(): Array<{ post: string }> {
  const postsDir = path.join(process.cwd(), 'content', 'posts');
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    // Extract the slug from the filename (format: YYYYMMDD-slug.mdx)
    const slug = fileName.replace(/^\d{8}-(.+)\.mdx$/, '$1');
    return { post: slug };
  });
}

// Blog post page component
export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post } = await params;
  const postPath = getBlogPostPath(post);

  if (!postPath) {
    notFound();
  }

  // Read the post content
  const source = fs.readFileSync(postPath, 'utf8');
  const { data: frontmatter } = matter(source);
  const fileName = path.basename(postPath);
  const dateFromFilename = extractDateFromFilename(fileName);

  // Merge frontmatter with date from filename if needed
  const postData = {
    ...frontmatter,
    date: frontmatter.date || dateFromFilename,
  } as PostFrontmatter;

  // Generate JSON-LD schema
  const articleSchema = generateArticleSchema(postData, post);

  try {
    // Import the MDX file directly
    const Content = (await import(`@/content/posts/${fileName}`)).default;

    return (
      <>
        {/* JSON-LD Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: articleSchema }} />

        <main className="isolate min-h-screen">
          <div className="relative isolate overflow-hidden py-24 sm:py-32">
            <div className="container mx-auto max-w-4xl px-4">
              <article className="blog-prose">
                <header>
                  <h1>{postData.title}</h1>
                  {postData.date && (
                    <div className="blog-meta">
                      <DateComponent dateString={postData.date} />
                      {postData.author && <span> • By {postData.author}</span>}
                      {Array.isArray(postData.tags) && postData.tags.length > 0 && (
                        <div className="blog-tags">
                          {postData.tags.map((tag, index) => (
                            <span key={index} className="blog-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {postData.excerpt && (
                    <div className="blog-excerpt">
                      <p>{postData.excerpt}</p>
                    </div>
                  )}
                </header>
                <Content />
              </article>
            </div>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error loading blog post MDX file:', error);
    notFound();
  }
}
