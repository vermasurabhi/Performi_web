import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import StatsBanner from '@/components/StatsBanner';
import FeatureCard from '@/components/FeatureCard';
import InsightSection1 from '@/components/InsightSection1';
import Features from '@/components/Features';
import InsightSection2 from '@/components/InsightSection2';
import { HorizontalScrollComponent } from '@/components/horizontalScroll';
import HomeFeaturesPage from '@/components/HomeFeatures';
import CommonCard from '@/components/commoncards';
import Section from '@/components/Section';
import Container from '@/components/Container';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <HorizontalScrollComponent />
      <HomeFeaturesPage />
      <InsightSection1 />
      <InsightSection2 />
      <Section background="white" padding="xl" className="py-20">
        <Container size="lg">
          <CommonCard heading="The Bigger Vision with Performi" 
          bodyText="This platform is just the beginning. We’re building a space where creators can plan smarter, grow faster, and feel supported every step of the way. In the future, you’ll be able to manage multiple Pinterest accounts, collaborate with teams, and use even smarter tools that learn from your posting style. Our goal is simple: to become the most powerful and creator-friendly Pinterest growth platform you’ve ever used."/>
        </Container>
      </Section>
      <Footer />
    </main>
  );
}
