'use client';

import { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: 'deep-olive' | 'deep-red' | 'white';
}

export default function Heading({ 
  children, 
  level = 1, 
  className = '',
  color = 'deep-olive'
}: HeadingProps) {
  const colors = {
    'deep-olive': 'text-deep-olive',
    'deep-red': 'text-deep-red',
    'white': 'text-white',
  };

  const sizes = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl lg:text-5xl',
    3: 'text-2xl md:text-3xl lg:text-4xl',
    4: 'text-xl md:text-2xl lg:text-3xl',
    5: 'text-lg md:text-xl lg:text-2xl',
    6: 'text-base md:text-lg lg:text-xl',
  };

  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const classes = `font-heading font-normal ${sizes[level]} ${colors[color]} ${className}`;

  return <Tag className={classes}>{children}</Tag>;
}

