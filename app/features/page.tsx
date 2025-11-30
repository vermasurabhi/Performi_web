'use client';

import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const features = [
  {
    title: 'Pin Creation & AI Assistance',
    description: 'Creating fresh Pins should feel fun, not tiring. Our platform gives you a smooth, enjoyable experience for turning your ideas into stunning posts. Upload your images, add your link, write your message — or let our AI help you craft the perfect title and description. You can create one Pin at a time or upload dozens in a single go. It\'s fast, simple, and designed to match your workflow.',
    image: '/assests/feature_section/pin1.jpg',
  },
  {
    title: 'Bulk Pin Upload',
    description: 'Save time and streamline your workflow with bulk upload capabilities. Upload multiple images at once, apply consistent styling, and schedule them all in a single session. Perfect for creators who want to batch their content creation and maintain consistency across their Pinterest boards.',
    image: '/assests/feature_section/pin2.jpg',
  },
  {
    title: 'Smart Scheduling',
    description: 'Schedule your posts with ease using our visual calendar. Drag and drop your content, set optimal posting times, and maintain consistency across your Pinterest strategy. Our intelligent scheduling system analyzes your audience engagement patterns to suggest the best times to post.',
    image: '/assests/feature_section/pin3.jpg',
  },
  {
    title: 'Performance Dashboard',
    description: 'Turn every pin, every link, and every idea into something meaningful — with insights that actually matter. Understand what\'s working, what\'s not, and how to optimize your strategy for maximum growth. Our comprehensive dashboard gives you clarity without the overwhelm.',
    image: '/assests/feature_section/pin4.jpg',
  },
  {
    title: 'Affiliate Link Management',
    description: 'Easily manage and track all your affiliate links across your Pinterest content. Organize links by campaign, track click-through rates, and optimize your affiliate strategy. Keep your links organized and monitor their performance in one centralized location.',
    image: '/assests/feature_section/pin9.jpg',
  },
  {
    title: 'Trend Discovery',
    description: 'Stay ahead of the curve with our trend discovery tools. Identify emerging topics, popular keywords, and trending content in your niche. Discover what your audience is searching for and create content that resonates with current Pinterest trends.',
    image: '/assests/feature_section/pin7.jpg',
  },
  {
    title: 'AI-Powered Growth Suggestions',
    description: 'Let our AI analyze your Pinterest performance and provide personalized growth suggestions. Get recommendations on content strategy, posting frequency, optimal board organization, and engagement tactics tailored specifically to your account\'s performance data.',
    image: '/assests/feature_section/pin6.jpg',
  },

  {
    title: 'Pin Cleanup Tool',
    description: 'Keep your Pinterest boards organized and optimized with our cleanup tool. Identify and remove underperforming pins, update outdated content, and maintain a clean, professional presence. Streamline your boards for better discoverability and engagement.',
    image: '/assests/feature_section/pin5.jpg',
  },
  {
    title: 'Content History & Library',
    description: 'Access your complete content history and build a searchable library of all your pins. Find past content quickly, repurpose successful pins, and maintain a comprehensive archive of your Pinterest journey. Never lose track of your best-performing content.',
    image: '/assests/feature_section/pin8.jpg',
  },
  {
    title: 'Account Health Monitoring',
    description: 'Monitor your Pinterest account health with real-time insights. Track your account status, identify potential issues, and receive alerts about important changes. Ensure your account stays in good standing and optimize for long-term growth and success.',
    image: '/assests/feature_section/pin10.jpg',
  },
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-normal text-deep-olive mb-6">
              Features
            </h1>
            <p className="text-xl md:text-2xl text-deep-olive/80 font-thin max-w-2xl mx-auto">
              Everything you need to grow on Pinterest with clarity, control, and confidence.
            </p>
          </div>

          {/* Pinterest Style Masonry Layout */}
          <div 
            className="columns-2 md:columns-2 lg:columns-3 gap-4"
            style={{ columnGap: '0.75rem' }}
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="break-inside-avoid mb-4 group relative overflow-hidden rounded-card cursor-pointer"
              >
                {/* Image Container */}
                <div className="relative w-full overflow-hidden rounded-card">
                  <div className="relative w-full">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      width={400}
                      height={600}
                      className="w-full h-auto object-cover transition-all duration-300 group-hover:blur-md group-hover:scale-110"
                      unoptimized
                    />
                  </div>
                  
                  {/* Overlay with Title on Hover */}
                  <div className="absolute inset-0 bg-deep-olive/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-normal text-white text-center px-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <Footer />
    </main>
  );
}
