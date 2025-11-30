'use client';

import Image from 'next/image';
import Container from './Container';
import Section from './Section';

export default function Hero() {
  return (
    <Section background="white" padding="xl" className="min-h-screen flex items-center pt-32">
      <Container size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Section - Text with Purple Border */}
          <div className="rounded-lg">
            <div className="mb-4">
              <Image
                src="/assests/logo.svg"
                alt="Performi Logo"
                width={180}
                height={60}
                className="h-12 w-auto mb-6"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-normal leading-[1] mb-6">
              <span className="text-deep-olive">Grow on</span>
              <br />
              <span className="text-deep-red text-6xl md:text-5xl lg:text-6xl">Pinterest</span>
              <span className="text-deep-olive"> With</span>
              <br />
              <span className="text-deep-red text-6xl md:text-5xl lg:text-6xl">Clarity,</span>
              <br />
              <span className="text-deep-red text-6xl md:text-5xl lg:text-6xl">Control </span>
              <span className="text-deep-olive">&</span>
              <br />
              <span className="text-deep-red text-6xl md:text-5xl lg:text-6xl">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 font-thin leading-relaxed lg:pr-4">
              Turn every pin, every link, and every idea into something meaningful – with insights that actually matter.
            </p>
          </div>

          {/* Right Section - 3x3 Grid Collage */}
          <div className="grid grid-cols-3 gap-1">
            {/* Top Row */}
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-warm-olive rounded-sm"></div>
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src="/assests/homeimage/p5.jpg"
                alt="Feature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-deep-red to-deep-olive rounded-sm"></div>
            
            {/* Middle Row */}
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src="/assests/homeimage/p1.jpg"
                alt="Feature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src="/assests/homeimage/p2.jpg"
                alt="Feature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-soft-pink to-beige rounded-sm"></div>
            
            {/* Bottom Row */}
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src="/assests/homeimage/p3.jpg"
                alt="Feature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="aspect-square bg-gradient-to-br from-deep-red to-warm-olive rounded-sm"></div>
            <div className="aspect-square rounded-sm overflow-hidden relative">
              <Image
                src="/assests/homeimage/p4.jpg"
                alt="Feature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

