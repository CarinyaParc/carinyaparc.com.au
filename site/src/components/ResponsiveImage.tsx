'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { cn } from '@/src/lib/utils';

interface ResponsiveImageProps extends Omit<ImageProps, 'onLoadingComplete'> {
  aspectRatio?: 'auto' | '1:1' | '4:3' | '16:9' | '21:9';
  fill?: boolean;
  children?: React.ReactNode;
}

export function ResponsiveImage({
  src,
  alt,
  className,
  aspectRatio = 'auto',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  fill = false,
  quality = 85,
  placeholder = 'blur',
  blurDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==',
  ...props
}: ResponsiveImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectRatioClasses = {
    'auto': 'aspect-auto',
    '1:1': 'aspect-square',
    '4:3': 'aspect-4/3',
    '16:9': 'aspect-video',
    '21:9': 'aspect-[21/9]',
  };

  return (
    <div className={cn(
      'overflow-hidden',
      fill ? 'relative w-full h-full' : aspectRatioClasses[aspectRatio],
      className
    )}>
      <Image
        src={src}
        alt={alt || ''}
        fill={fill}
        quality={quality}
        sizes={sizes}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn(
          'object-cover transition-opacity duration-500',
          isLoaded ? 'opacity-100' : 'opacity-0',
          fill ? 'absolute inset-0' : 'h-auto w-full'
        )}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
      
      {/* Show placeholder until image loads */}
      {!isLoaded && !priority && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse" />
      )}
    </div>
  );
} 