'use client';

import Section from './Section';
import Container from './Container';
import Heading from './Heading';
import Text from './Text';
import Grid from './Grid';
import FeatureCard from './FeatureCard';
import { Zap, Shield, Palette, Rocket, Heart, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Performance',
    description: 'Lightning-fast loading times and optimized performance',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Enterprise-grade security for your peace of mind',
  },
  {
    icon: Palette,
    title: 'Beautiful Design',
    description: 'Modern and elegant design that stands out',
  },
  {
    icon: Rocket,
    title: 'Easy to Use',
    description: 'Intuitive interface that anyone can master',
  },
  {
    icon: Heart,
    title: 'User Centric',
    description: 'Built with user experience as the top priority',
  },
  {
    icon: Star,
    title: 'Premium Quality',
    description: 'Top-tier quality in every aspect of the product',
  },
];

export default function Features() {
  return (
    <Section background="white" padding="xl">
      <Container size="lg">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Features
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl mx-auto">
            Everything you need to create amazing experiences
          </Text>
        </div>
        
        <Grid cols={3} gap="lg">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

