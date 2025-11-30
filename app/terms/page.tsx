import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16 gradient-primary rounded-card p-12 md:p-16 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-normal text-deep-olive mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl md:text-2xl text-deep-olive/80 font-thin max-w-2xl mx-auto">
              Please read these terms carefully before using our platform.
            </p>
          </div>

          {/* Agreement to Terms Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Agreement to Terms
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                By accessing or using Performi, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.
              </p>
            </div>
          </div>

          {/* Use License Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Use License
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                Permission is granted to temporarily use Performi for personal or commercial Pinterest content creation and scheduling. This license does not include:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modifying or copying the platform's code or design</li>
                <li>Using the service for any unlawful purpose</li>
                <li>Attempting to reverse engineer or extract source code</li>
                <li>Removing any copyright or proprietary notations</li>
              </ul>
            </div>
          </div>

          {/* User Accounts Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              User Accounts
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                You are responsible for maintaining the security of your account and password. Performi cannot and will not be liable for any loss or damage from your failure to comply with this security obligation. You are responsible for all activities that occur under your account.
              </p>
            </div>
          </div>

          {/* Content Responsibility Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Content Responsibility
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                You are solely responsible for all content you create, upload, or schedule through Performi. You agree not to use the service to post, upload, or transmit any content that is illegal, harmful, or violates any third-party rights, including Pinterest's terms of service.
              </p>
            </div>
          </div>

          {/* Payment Terms Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Payment Terms
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                If you purchase a subscription, you agree to pay the fees specified at the time of purchase. Subscriptions automatically renew unless cancelled. Refunds are provided according to our refund policy, available upon request.
              </p>
            </div>
          </div>

          {/* Limitation of Liability Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Limitation of Liability
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                In no event shall Performi, its directors, employees, or agents be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </div>
          </div>

          {/* Changes to Terms Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through the platform. Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-normal text-deep-red mb-6">
              Contact Information
            </h2>
            <div className="space-y-4 text-lg text-deep-olive/80 font-thin leading-relaxed">
              <p>
                If you have any questions about these Terms and Conditions, please contact us at legal@performi.com.
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
