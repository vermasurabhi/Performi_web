'use client';

import Section from './Section';
import Container from './Container';
import Heading from './Heading';
import Text from './Text';

export default function InsightSection1() {
  return (
    <Section background="white" padding="xl" className="min-h-screen flex items-center max-h-[100vh]">
      <Container size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 items-stretch">
          {/* Left vertical half */}
          <div className="bg-warm-olive text-beige flex items-center px-10 py-16">
            <h2 className="font-heading font-normal text-white space-y-2 leading-tight text-[60px] md:text-4xl lg:text-[80px]">
              <span className="block md:py-2">Ad Spend</span>
              <span className="block md:py-2">and</span>
              <span className="block md:py-2">Revenue</span>
              <span className="block md:py-2">Insights</span>
            </h2>
          </div>

          {/* Right vertical half, split horizontally */}
          <div className="flex flex-col gap-1.5">
            {/* Top: sample chart */}
            <div className="bg-beige p-6 flex items-center justify-center">
              <svg viewBox="0 0 300 160" className="w-full h-full max-h-64">
                {/* Axes */}
                <line x1="30" y1="10" x2="30" y2="140" stroke="#b6a89a" strokeWidth="1" />
                <line x1="30" y1="140" x2="280" y2="140" stroke="#b6a89a" strokeWidth="1" />

                {/* Spend (deep red) */}
                <polyline
                  fill="none"
                  stroke="#a9444a"
                  strokeWidth="2"
                  points="30,130 80,120 130,100 180,110 230,70 280,40"
                />

                {/* Ads (coral pink) */}
                <polyline
                  fill="none"
                  stroke="#e0857f"
                  strokeWidth="2"
                  points="30,120 80,110 130,80 180,90 230,80 280,60"
                />

                {/* Revenue (deep olive) */}
                <polyline
                  fill="none"
                  stroke="#4e5033"
                  strokeWidth="2"
                  points="30,125 80,115 130,90 180,85 230,75 280,65"
                />
              </svg>
            </div>

            {/* Bottom: description card */}
            <div className="bg-soft-pink p-8">
              <Text size="md" color="deep-olive" weight="thin" className="leading-relaxed">
                Running promotions or paid campaigns? Easily track how much you're spending and how much you're earning.
                Clear comparisons help you measure your return on investment. You'll instantly know which campaigns are
                profitable and which need improvement, helping you make smarter decisions with your money.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}


