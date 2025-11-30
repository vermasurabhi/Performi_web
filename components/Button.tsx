'use client';

import { ReactNode } from 'react';
import Link from 'next/link';


interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles = 'rounded-full font-normal transition-all inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-deep-red text-white hover:bg-deep-red/90',
    secondary: 'bg-coral-pink text-white hover:bg-coral-pink/90',
    outline: 'border-2 border-deep-red text-deep-red hover:bg-deep-red hover:text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

