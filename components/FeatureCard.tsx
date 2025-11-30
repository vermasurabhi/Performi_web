'use client';

import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import Section from './Section';
import Container from './Container';

interface FeatureCardProps {
  title: string;
  description: string;
  reverse?: boolean;
}

export default function FeatureCard({ title, description, reverse = false }: FeatureCardProps) {
  return (
    <Section background="white" padding="xl" className="min-h-screen flex items-center">
      <Container size="xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          reverse ? 'lg:grid-flow-dense' : ''
        }`}>
          {/* Pinterest Card - Left or Right based on reverse */}
          <div className={`${reverse ? 'lg:col-start-2' : ''}`}>
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
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-deep-olive text-center leading-tight">
                  {title === 'Create Without Limits' ? (
                    <>
                      Create Without<br />Limits
                    </>
                  ) : (
                    title
                  )}
                </h3>
              </div>
            </div>
          </div>

          {/* Text Description - Right or Left based on reverse */}
          <div className={`${reverse ? 'lg:col-start-1 lg:row-start-1' : ''} flex items-center`}>
            <div className="border-2 border-deep-red rounded-card p-8 bg-beige">
              <p className="text-base md:text-lg text-deep-olive font-thin leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
