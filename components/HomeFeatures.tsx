'use client';

import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';

const features = [
  {
    title: 'Create Without Limits',
    description: 'Creating fresh Pins should feel fun, not tiring. Our platform gives you a smooth, enjoyable experience for turning your ideas into stunning posts. Upload your images, add your link, write your message — or let our AI help you craft the perfect title and description. You can create one Pin at a time or upload dozens in a single go. It\'s fast, simple, and designed to match your workflow.',
  },
  {
    title: 'Plan Your Pinterest Like a Pro',
    description: 'Schedule your posts with ease using our visual calendar. Drag and drop your content, set optimal posting times, and maintain consistency across your Pinterest strategy. Our intuitive interface makes it simple to plan weeks or months ahead, ensuring your content reaches your audience at the perfect moment.',
  },
  {
    title: 'Analytics & Insights',
    description: 'Turn every pin, every link, and every idea into something meaningful — with insights that actually matter. Understand what\'s working, what\'s not, and how to optimize your strategy for maximum growth. Our analytics give you clarity without the overwhelm.',
  },
  {
    title: 'Bulk Upload',
    description: 'Save time and streamline your workflow with bulk upload capabilities. Upload multiple images at once, apply consistent styling, and schedule them all in a single session. Perfect for creators who want to batch their content creation.',
  },
  {
    title: 'AI Title & Description Generation',
    description: 'Let our AI help you craft the perfect title and description for every Pin. Get suggestions that are optimized for Pinterest\'s algorithm while maintaining your unique voice and style. Create faster, post smarter.',
  },
];

export default function HomeFeaturesPage() {
  const [showDetails, setShowDetails] = useState<Set<number>>(new Set());

  const toggleDetails = (index: number) => {
    setShowDetails(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="border-2 border-deep-red rounded-card p-4 bg-white"
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Heart className="text-deep-red" size={20} strokeWidth={2} fill="none" />
                  <MessageCircle className="text-deep-red" size={20} strokeWidth={2} fill="none" />
                  <Share2 className="text-deep-red" size={20} strokeWidth={2} />
                  <MoreHorizontal className="text-deep-red" size={20} strokeWidth={2} />
                </div>
                <button 
                  onClick={() => toggleDetails(index)}
                  className="px-4 py-1.5 bg-deep-red text-white rounded-lg text-sm font-normal hover:bg-deep-red/90 transition-colors"
                >
                  {showDetails.has(index) ? 'Title' : 'Details'}
                </button>
              </div>
                
                {/* Content Area */}
                <div className="bg-beige rounded-lg p-12 min-h-[400px] flex items-center justify-center">
                  {showDetails.has(index) ? (
                    <p className="text-base md:text-lg text-deep-olive font-thin leading-relaxed text-center">
                      {feature.description}
                    </p>
                  ) : (
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-deep-olive text-center leading-tight">
                      {feature.title}
                    </h3>
                  )}
                </div>

              </div>
            ))}
          </div>
          
        </div>
      </section>

  );
}
