'use client';

import React from "react";
import HorizontalScroll from "./horizontalChilComp";

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

const SampleCard = ({ value, label }: { value: string; label: string }) => (
  <div
    style={{
      position: 'relative',
      height: '300px',
      width: '500px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      marginRight: '75px',
      flexShrink: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      borderRadius: '30px',
      border: '2px solid rgba(169, 68, 74, 0.3)',
      padding: '32px',
    }}
  >
    <div
      style={{
        fontSize: '7rem',
        fontWeight: 'normal',
        color: '#a9444a',
        marginBottom: '24px',
        fontFamily: 'var(--font-suranna), serif',
      }}
    >
      {value}
    </div>
    <div
      style={{
        fontSize: '3rem',
        fontWeight: 'normal',
        color: '#a9444a',
        fontFamily: 'var(--font-suranna), serif',
      }}
    >
      {label}
    </div>
  </div>
);

const SampleCards = React.memo(() =>
  stats.map((stat, i) => (
    <SampleCard key={`stat-${i}`} value={stat.value} label={stat.label} />
  ))
);

export const HorizontalScrollComponent = () => (
  <main>
    <section
      className="gradient-primary"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <HorizontalScroll>
        <div
          style={{
            position: 'relative',
            height: '100%',
            padding: '0 0 0 150px',
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <SampleCards />
        </div>
      </HorizontalScroll>
    </section>
  </main>
);