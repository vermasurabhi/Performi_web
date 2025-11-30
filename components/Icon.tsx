'use client';

import { LucideIcon } from 'lucide-react';

interface IconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  color?: 'deep-red' | 'deep-olive' | 'white' | 'coral-pink';
}

export default function Icon({ 
  icon: IconComponent, 
  size = 24, 
  className = '',
  color = 'deep-red'
}: IconProps) {
  const colors = {
    'deep-red': 'text-deep-red',
    'deep-olive': 'text-deep-olive',
    'white': 'text-white',
    'coral-pink': 'text-coral-pink',
  };

  return (
    <IconComponent 
      size={size} 
      className={`${colors[color]} ${className}`}
    />
  );
}

