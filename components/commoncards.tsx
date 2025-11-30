'use client';

import { ReactNode } from 'react';
import Heading from './Heading';
import Text from './Text';

interface CommonCardProps {
  heading: string;
  bodyText: string | ReactNode;
  headingBgColor?: 'deep-red' | 'deep-olive' | 'warm-olive' | 'coral-pink';
  bodyBgColor?: 'soft-pink' | 'beige' | 'warm-olive';
  className?: string;
}

export default function CommonCard({
  heading,
  bodyText,
  headingBgColor = 'deep-red',
  bodyBgColor = 'soft-pink',
  className = ''
}: CommonCardProps) {
  const headingBgColors = {
    'deep-red': 'bg-deep-red',
    'deep-olive': 'bg-deep-olive',
    'warm-olive': 'bg-warm-olive',
    'coral-pink': 'bg-coral-pink',
  };

  const bodyBgColors = {
    'soft-pink': 'bg-soft-pink',
    'beige': 'bg-beige',
    'warm-olive': 'bg-warm-olive',
  };

  return (
    <div className={`rounded-card overflow-hidden ${className}`}>
      {/* Top Section - Heading Area */}
      <div className={`${headingBgColors[headingBgColor]} px-8 py-12 flex items-center justify-center`}>
        <h2 
          className="font-heading font-normal text-white text-center text-3xl md:text-4xl lg:text-5xl"
          style={{ fontFamily: 'var(--font-suranna), serif' }}
        >
          {heading}
        </h2>
      </div>

      {/* Bottom Section - Body Text Area */}
      <div className={`${bodyBgColors[bodyBgColor]} px-8 py-12`}>
        {typeof bodyText === 'string' ? (
          <Text size="md" color="deep-olive" weight="thin" className="leading-relaxed">
            {bodyText}
          </Text>
        ) : (
          <div className="text-base md:text-lg text-deep-olive font-thin leading-relaxed">
            {bodyText}
          </div>
        )}
      </div>
    </div>
  );
}

