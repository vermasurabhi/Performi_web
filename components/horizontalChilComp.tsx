'use client';

import React, { useState, useEffect, useRef } from "react";

const calcDynamicHeight = (objectWidth: number): number => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

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

const applyScrollListener = (
  ref: React.RefObject<HTMLDivElement>,
  setTranslateX: (value: number) => void
) => {
  window.addEventListener("scroll", () => {
    if (ref.current) {
      const offsetTop = -ref.current.offsetTop;
      setTranslateX(offsetTop);
    }
  });
};

interface HorizontalChildCompProps {
  children: React.ReactNode;
}

export default function HorizontalChildComp({ children }: HorizontalChildCompProps) {
  const [dynamicHeight, setDynamicHeight] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const objectRef = useRef<HTMLDivElement>(null);

  const resizeHandler = () => {
    handleDynamicHeight(objectRef, setDynamicHeight);
  };

  useEffect(() => {
    handleDynamicHeight(objectRef, setDynamicHeight);
    window.addEventListener("resize", resizeHandler);
    applyScrollListener(containerRef, setTranslateX);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: dynamicHeight ? `${dynamicHeight}px` : '100vh',
      }}
    >
      <div
        ref={containerRef}
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <div
          ref={objectRef}
          style={{
            position: 'absolute',
            height: '100%',
            willChange: 'transform',
            transform: `translateX(${translateX}px)`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
