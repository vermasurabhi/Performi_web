import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 gradient-primary rounded-card p-12 md:p-16 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-normal text-deep-olive mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-deep-olive/80 font-thin max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
          </div>

          {/* Introduction Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Introduction
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                At Performi, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Pinterest-focused creation, scheduling, and analytics platform.
              </p>
            </div>
          </div>

          {/* Information We Collect Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Information We Collect
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email address, password)</li>
                <li>Content you create, upload, or schedule through our platform</li>
                <li>Pinterest account information and access tokens (with your permission)</li>
                <li>Payment information (processed securely through third-party providers)</li>
              </ul>
            </div>
          </div>

          {/* How We Use Your Information Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              How We Use Your Information
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process and schedule your Pinterest content</li>
                <li>Generate analytics and insights about your Pinterest performance</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments and questions</li>
              </ul>
            </div>
          </div>

          {/* Data Security Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Data Security
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
            </div>
          </div>

          {/* Your Rights Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Your Rights
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                You have the right to access, update, or delete your personal information at any time. You can also revoke access to your Pinterest account through our platform settings or directly through Pinterest.
              </p>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Contact Us
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                If you have any questions about this Privacy Policy, please contact us at privacy@performi.com.
              </p>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-8 border-t border-soft-pink/30">
            <p className="text-sm text-deep-olive/60 font-thin">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
