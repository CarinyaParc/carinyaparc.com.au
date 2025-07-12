import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import matter from 'gray-matter';

// Define the Recipe frontmatter interface
interface RecipeFrontmatter {
  title?: string;
  date?: string;
  author?: string;
  description?: string;
  servings?: number;
  prepTime?: string;
  cookTime?: string;
  totalTime?: string;
  ingredients?: string[];
  tags?: string[];
  [key: string]: unknown;
}

// Function to check if a recipe exists and get its data
function getRecipePath(slug: string): string | null {
  const mdxPath = path.join(process.cwd(), 'content', 'recipes', `${slug}.mdx`);

  if (fs.existsSync(mdxPath)) {
    return mdxPath;
  }

  return null;
}

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: Promise<{ recipe: string }>;
}): Promise<Metadata> {
  // Await the params promise
  const { recipe } = await params;
  const recipePath = getRecipePath(recipe);

  if (!recipePath) {
    return {
      title: 'Recipe Not Found - Carinya Parc',
      description: 'The requested recipe could not be found.',
    };
  }

  // Read the recipe content
  const source = fs.readFileSync(recipePath, 'utf8');
  const { data: frontmatter } = matter(source) as { data: RecipeFrontmatter };

  return {
    title: `${frontmatter.title || recipe} - Recipe - Carinya Parc`,
    description: frontmatter.description || 'A delicious recipe from Carinya Parc',
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      type: 'article',
      publishedTime: frontmatter.date,
      authors: frontmatter.author ? [frontmatter.author] : undefined,
    },
  };
}

// Generate static paths for the recipes
export function generateStaticParams(): Array<{ recipe: string }> {
  const recipesDir = path.join(process.cwd(), 'content', 'recipes');
  const fileNames = fs.readdirSync(recipesDir);

  return fileNames.map((fileName) => ({
    recipe: fileName.replace(/\.mdx$/, ''),
  }));
}

// Recipe page component
export default async function RecipePage({ params }: { params: Promise<{ recipe: string }> }) {
  const { recipe } = await params;
  const recipePath = getRecipePath(recipe);

  if (!recipePath) {
    notFound();
  }

  // Read the recipe content
  const source = fs.readFileSync(recipePath, 'utf8');
  const { data: frontmatter } = matter(source) as { data: RecipeFrontmatter };

  try {
    // Import the MDX file directly
    const Content = (await import(`@/content/recipes/${recipe}.mdx`)).default;

    // Function to format ISO duration to human readable format
    const formatDuration = (isoDuration?: string) => {
      if (!isoDuration) return null;

      // Basic parsing of PT15M format
      const minutes = isoDuration.match(/PT(\d+)M/)?.[1];
      const hours = isoDuration.match(/PT(\d+)H/)?.[1];

      if (hours && minutes) {
        return `${hours} hr ${minutes} min`;
      } else if (hours) {
        return `${hours} hr`;
      } else if (minutes) {
        return `${minutes} min`;
      }
      return isoDuration;
    };

    return (
      <main className="isolate min-h-screen">
        <div className="relative isolate overflow-hidden py-24 sm:py-32">
          <div className="container mx-auto max-w-4xl px-4 prose prose-eucalyptus">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">{frontmatter.title}</h1>

            {/* Recipe metadata */}
            <div className="bg-stone-100 p-4 rounded-lg mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {frontmatter.servings && (
                  <div>
                    <p className="font-semibold text-sm">Servings</p>
                    <p>{frontmatter.servings}</p>
                  </div>
                )}
                {frontmatter.prepTime && (
                  <div>
                    <p className="font-semibold text-sm">Prep Time</p>
                    <p>{formatDuration(frontmatter.prepTime)}</p>
                  </div>
                )}
                {frontmatter.cookTime && (
                  <div>
                    <p className="font-semibold text-sm">Cook Time</p>
                    <p>{formatDuration(frontmatter.cookTime)}</p>
                  </div>
                )}
                {frontmatter.totalTime && (
                  <div>
                    <p className="font-semibold text-sm">Total Time</p>
                    <p>{formatDuration(frontmatter.totalTime)}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Display ingredients if they're in the frontmatter */}
            {frontmatter.ingredients && frontmatter.ingredients.length > 0 && (
              <div className="mb-6">
                <h2>Ingredients</h2>
                <ul>
                  {frontmatter.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
            )}

            <Content />

            {/* Display tags if present */}
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {frontmatter.tags.map((tag, index) => (
                    <span key={index} className="bg-stone-200 px-2 py-1 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error('Error loading recipe MDX file:', error);
    notFound();
  }
}
