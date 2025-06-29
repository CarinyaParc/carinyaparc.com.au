import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import Image from 'next/image';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    hr: () => <hr className="my-8 border-gray-200" />,
    a: ({ href, children }) => (
      <Link href={href || '#'} className="text-eucalyptus-600 hover:text-eucalyptus-500 underline">
        {children}
      </Link>
    ),
    img: (props) => (
      <Image
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="rounded-lg my-4"
        {...props}
        alt={props.alt || ''}
      />
    ),
  };
}
