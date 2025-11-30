'use client';

import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

interface PinterestCardProps {
  title: string;
}

export default function PinterestCard({ title }: PinterestCardProps) {
  return (
    <div className="border-2 border-deep-red rounded-card p-4 bg-white max-w-md mx-auto lg:max-w-full">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Heart className="text-deep-red" size={20} strokeWidth={2} fill="none" />
          <MessageCircle className="text-deep-red" size={20} strokeWidth={2} fill="none" />
          <Share2 className="text-deep-red" size={20} strokeWidth={2} />
          <MoreHorizontal className="text-deep-red" size={20} strokeWidth={2} />
        </div>
        <button className="px-4 py-1.5 bg-deep-red text-white rounded-full text-sm font-normal hover:bg-deep-red/90 transition-colors">
          SAVE
        </button>
      </div>
      
      {/* Content Area */}
      <div className="bg-beige rounded-lg p-12 min-h-[400px] flex items-center justify-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-deep-olive text-center leading-tight break-words">
          {title.split(' ').map((word, i, arr) => (
            <span key={i}>
              {word}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h3>
      </div>
    </div>
  );
}

