'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: '10 X',
    label: 'Average Growth',
  },
  {
    value: '50%',
    label: 'Time Saved',
  },
  {
    value: '3 X',
    label: 'Revenue Boost',
  },
];

// Calculate the dynamic height needed for scrolling
const calcDynamicHeight = (objectWidth: number): number => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

// Handle setting the dynamic height based on object width
const handleDynamicHeight = (
  ref: React.RefObject<HTMLDivElement>,
  setDynamicHeight: (height: number) => void
) => {
  if (ref.current) {
    const objectWidth = ref.current.scrollWidth;
    const dynamicHeight = calcDynamicHeight(objectWidth);
    setDynamicHeight(dynamicHeight);
  }
};

// Apply scroll listener to track and update translateX
const applyScrollListener = (
  ref: React.RefObject<HTMLDivElement>,
  setTranslateX: (value: number) => void
) => {
  window.addEventListener('scroll', () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }
  });
};

export default function StatsBanner() {
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener('resize', resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <section className="gradient-primary overflow-x-hidden" style={{ height: '100vh', minHeight: '100vh' }}>
      {/* TallOuterContainer - grows based on horizontal content width */}
      <div
        style={{
          position: 'relative',
          height: dynamicHeight ? `${dynamicHeight}px` : '100vh',
        }}
      >
        {/* StickyInnerContainer - stays fixed in viewport */}
        <div
          ref={containerRef}
          style={{
            position: 'sticky',
            top: 0,
            height: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          {/* HorizontalTranslateContainer - moves horizontally based on scroll */}
          <div
            ref={objectRef}
            style={{
              display: 'flex',
              flexFlow: 'row nowrap',
              alignItems: 'center',
              height: '100%',
              willChange: 'transform',
              transform: `translateX(${translateX}px)`,
            }}
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center text-center w-[80vw] md:w-[60vw] lg:w-[40vw]"
                style={{ margin: '0 16px' }}
              >
                <div className="text-7xl md:text-8xl lg:text-9xl font-heading font-normal text-deep-red mb-6 tracking-wide">
                  {stat.value}
                </div>
                <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-deep-red">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

