'use client';

import Section from './Section';
import Container from './Container';
import Heading from './Heading';
import Text from './Text';
import Image from 'next/image';

export default function InsightSection2() {
  return (
    <Section background="white" padding="xl" className="min-h-screen flex items-center">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-stretch">
          {/* Left vertical half */}


          {/* Right vertical half, split horizontally */}
          <div className="flex flex-col gap-1.5">

          <div className="bg-deep-olive p-8">
              <Text size="md" color="soft-pink" weight="thin" className="leading-relaxed">
              This platform is crafted for bloggers, small businesses, Pinterest creators, influencers, 
              designers, fashion lovers, food experts, DIY makers, and affiliate marketers. Whether you're 
              sharing ideas, promoting products, or building a brand, the experience stays smooth, simple, 
              and enjoyable.
              </Text>
            </div>

            <div className="bg-beige p-6 flex items-center justify-center">
              <Image 
                src="/assests/workingLady.png" 
                alt="Working lady illustration" 
                width={300} 
                height={160}
                className="object-contain"
              />
            </div>

            {/* Bottom: description card */}

          </div>
          <div className="bg-deep-red text-beige flex items-center px-10 py-16">
            <h2 className="font-heading font-normal text-white space-y-2 leading-tight text-[60px] md:text-4xl lg:text-[80px]">
              <span className="block md:py-2">Built for</span>
              <span className="block md:py-2">Every</span>
              <span className="block md:py-2">Pinterest</span>
              <span className="block md:py-2">Creator</span>
            </h2>
          </div>
        </div>
      </Container>
    </Section>
  );
}


