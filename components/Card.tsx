'use client';

import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'beige';
}

export default function Card({ children, className = '', variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-white',
    gradient: 'gradient-primary',
    beige: 'bg-beige',
  };

  return (
    <div className={`rounded-card p-6 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}

