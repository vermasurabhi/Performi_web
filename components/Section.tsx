'use client';

import { ReactNode, forwardRef } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gradient' | 'beige' | 'warm-olive';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Section = forwardRef<HTMLElement, SectionProps>(({ 
  children, 
  className = '', 
  background = 'white',
  padding = 'lg'
}, ref) => {
  const backgrounds = {
    white: 'bg-white',
    gradient: 'gradient-primary',
    beige: 'bg-beige',
    'warm-olive': 'bg-warm-olive',
  };

  const paddings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-24 md:py-32',
  };

  return (
    <section ref={ref} className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;

