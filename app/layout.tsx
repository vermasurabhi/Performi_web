import type { Metadata } from 'next';
import { Suranna, Josefin_Sans } from 'next/font/google';
import './globals.css';

const suranna = Suranna({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-suranna',
});

const josefinSans = Josefin_Sans({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-josefin',
});

export const metadata: Metadata = {
  title: 'Performi - Grow on Pinterest With Clarity, Control & Confidence',
  description: 'A Pinterest-focused creation, scheduling, and analytics platform offering clarity, control, and confidence for creators.',
  icons: {
    icon: '/assests/logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${suranna.variable} ${josefinSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Suranna&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

