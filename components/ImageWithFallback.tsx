'use client';

import Image, { ImageProps } from 'next/image';
import { useState } from 'react';

type ImageWithFallbackProps = Omit<ImageProps, 'src' | 'alt'> & {
  src: string;
  alt: string;
  fallback?: string;
};

export function ImageWithFallback({
  src,
  alt,
  fallback = '/images/fallback.jpeg',
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      unoptimized
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback);
        }
      }}
    />
  );
}
