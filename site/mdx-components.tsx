import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({ children }) => <h1 className="mdx-h1">{children}</h1>,
    h2: ({ children }) => <h2 className="mdx-h2">{children}</h2>,
    h3: ({ children }) => <h3 className="mdx-h3">{children}</h3>,
    p: ({ children }) => <p className="mdx-p">{children}</p>,
    ul: ({ children }) => <ul className="mdx-ul">{children}</ul>,
    ol: ({ children }) => <ol className="mdx-ol">{children}</ol>,
    li: ({ children }) => <li className="mdx-li">{children}</li>,
    a: ({ href, children }) => (
      <Link href={href || '#'} className="mdx-link">
        {children}
      </Link>
    ),
    hr: () => <hr className="mdx-hr" />,
    strong: ({ children }) => <strong className="mdx-strong">{children}</strong>,
    em: ({ children }) => <em className="mdx-em">{children}</em>,
    blockquote: ({ children }) => <blockquote className="mdx-blockquote">{children}</blockquote>,
    code: ({ children }) => <code className="mdx-code">{children}</code>,
    img: ({ src, alt, ...props }) => {
      // Handle optimized images
      const imgSrc = src || '';

      return (
        <div className="mdx-img-wrapper">
          <Image
            src={imgSrc}
            alt={alt || ''}
            width={800}
            height={450}
            loading="lazy"
            className="mdx-img"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            {...props}
          />
        </div>
      );
    },
  };
}
