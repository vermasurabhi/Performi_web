import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 gradient-primary rounded-card p-12 md:p-16 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-normal text-deep-olive mb-6">
              About Suranna
            </h1>
            <p className="text-xl md:text-2xl text-deep-olive/80 font-thin max-w-2xl mx-auto">
              Elegant, minimal, and designed for creators who want clarity, control, and confidence on Pinterest.
            </p>
          </div>

          {/* Mission Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                At Suranna, we believe that creating and managing Pinterest content should feel effortless, inspiring, and empowering. We've built a platform that combines the elegance of Pinterest's visual aesthetic with powerful tools that give creators the insights and control they need to grow.
              </p>
              <p>
                Our mission is to transform how creators approach Pinterest — from chaotic scheduling to strategic planning, from guessing what works to knowing exactly what drives results.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Our Vision
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                We envision a world where every creator has the tools and insights they need to turn their Pinterest presence into a meaningful, growth-driven channel. Where planning feels like creativity, not work. Where data empowers decisions, not overwhelms them.
              </p>
              <p>
                Suranna is more than a platform — it's a partner in your Pinterest journey, designed with the soft, feminine aesthetic and clean elegance that makes creating feel like an art form.
              </p>
            </div>
          </div>

          {/* Illustration Tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="aspect-square rounded-card bg-soft-pink"></div>
            <div className="aspect-square rounded-card bg-beige"></div>
            <div className="aspect-square rounded-card gradient-primary"></div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
