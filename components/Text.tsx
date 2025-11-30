'use client';

import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'deep-olive' | 'deep-red' | 'white' | 'muted' | 'soft-pink' | 'beige' | 'warm-olive';
  weight?: 'thin' | 'normal' | 'semibold';
}

export default function Text({ 
  children, 
  className = '',
  size = 'md',
  color = 'deep-olive',
  weight = 'thin'
}: TextProps) {
  const sizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
  };

  const colors = {
    'deep-olive': 'text-deep-olive',
    'deep-red': 'text-deep-red',
    'white': 'text-white',
    'muted': 'text-deep-olive/70',
    'soft-pink': 'text-soft-pink',
    'beige': 'text-beige',
    'warm-olive': 'text-warm-olive',
  };

  const weights = {
    thin: 'font-thin',
    normal: 'font-normal',
    semibold: 'font-semibold',
  };

  const classes = `${sizes[size]} ${colors[color]} ${weights[weight]} ${className}`;

  return <p className={classes}>{children}</p>;
}

