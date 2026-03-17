import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="bg-obsidian min-h-screen text-alabaster pt-32 pb-24">
      {/* Header */}
      <div className="relative py-20 border-b border-white/5 mb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-champagne/5 to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-champagne" />
            <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Legal</span>
            <div className="w-16 h-[1px] bg-champagne" />
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-light tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-alabaster-muted font-light">Last updated: March 17, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="prose prose-invert max-w-none space-y-12">

          {/* Introduction */}
          <section>
            <p className="text-lg text-alabaster-muted font-light leading-loose">
              Doggett Law Firm ("we," "our," or "us") is committed to protecting the privacy of our clients and website visitors. This Privacy Policy explains how we collect, use, and share personal information when you visit our website at <strong className="text-white">doggettlaw.net</strong>, use our services, or interact with us through SMS messaging.
            </p>
          </section>

          {/* Section 1 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">1. What Personal Information We Collect</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              We may collect the following types of personal information:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Contact Information:</strong> Name, email address, phone number, and mailing address.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Case Information:</strong> Details related to your legal matter that you provide during consultations or through our contact forms.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Technical Information:</strong> IP address, browser type, device information, and browsing behavior on our website.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">SMS & Communication Data:</strong> Phone numbers provided for SMS opt-in, message history, and consent records.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">2. How We Use Your Personal Information</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              We use your personal information for the following purposes:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>To provide legal services and communicate with you regarding your case.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>To respond to your inquiries and contact form submissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>To send SMS messages related to appointment reminders, case updates, and customer care (with your consent).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>To improve our website functionality and user experience.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>To comply with legal obligations and professional ethical requirements.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">3. Who We Share Your Personal Information With</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              We do not sell or rent your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Legal & Court Proceedings:</strong> When necessary for your legal representation or as required by law.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Service Providers:</strong> With trusted third parties who assist in operating our website and business (e.g., hosting, email services), subject to confidentiality agreements.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">With Your Consent:</strong> When you explicitly authorize us to share your information.</span>
              </li>
            </ul>
          </section>

          {/* Section 4 - SMS Consent (Critical for compliance) */}
          <section className="border-t border-white/10 pt-10">
            <div className="bg-white/[0.03] border border-champagne/20 p-8 md:p-10">
              <h2 className="text-2xl font-serif text-white mb-6">4. SMS Consent & Privacy</h2>
              <p className="text-alabaster-muted font-light leading-loose mb-6">
                When you opt in to receive SMS messages from Doggett Law Firm, your consent and personal information related to SMS communications are handled with the utmost care.
              </p>
              <div className="bg-champagne/10 border border-champagne/30 p-6 mb-6">
                <p className="text-white font-medium leading-relaxed text-lg">
                  SMS consent is not shared with third parties or affiliates for marketing or any other purpose.
                </p>
              </div>
              <p className="text-alabaster-muted font-light leading-loose">
                Your phone number and SMS opt-in data will only be used for the purposes you consented to, including appointment reminders, case updates, account notifications, and customer care communications. We will never sell, lease, or share your SMS consent information.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">5. Data Security</h2>
            <p className="text-alabaster-muted font-light leading-loose">
              We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure. We strive to use commercially acceptable means to protect your personal data but cannot guarantee its absolute security.
            </p>
          </section>

          {/* Section 6 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">6. Your Rights</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              You have the right to:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Request access to or deletion of your personal information.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Opt out of SMS communications at any time by replying <strong className="text-white">STOP</strong> to any SMS message.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Contact us for questions about SMS messaging by replying <strong className="text-white">HELP</strong> or visiting <a href="https://doggettlaw.net" className="text-champagne hover:text-white transition-colors underline underline-offset-4">doggettlaw.net</a>.</span>
              </li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">7. Changes to This Policy</h2>
            <p className="text-alabaster-muted font-light leading-loose">
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated "Last updated" date. We encourage you to review this policy periodically.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">8. Contact Us</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-6">
              If you have any questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-white/[0.03] border border-white/10 p-8">
              <p className="text-white font-medium mb-1">Doggett Law Firm</p>
              <p className="text-alabaster-muted font-light">1100 Martin Luther King Drive, Suite A</p>
              <p className="text-alabaster-muted font-light mb-4">Alexandria, LA 71301</p>
              <p className="text-alabaster-muted font-light">
                Phone: <a href="tel:3188883644" className="text-champagne hover:text-white transition-colors">(318) 888-3644</a>
              </p>
              <p className="text-alabaster-muted font-light">
                Email: <a href="mailto:kenneth@doggettlaw.net" className="text-champagne hover:text-white transition-colors">kenneth@doggettlaw.net</a>
              </p>
            </div>
          </section>

          {/* Cross-link to Terms */}
          <section className="border-t border-white/10 pt-10 text-center">
            <p className="text-alabaster-muted font-light">
              See also our{" "}
              <Link to="/terms" className="text-champagne hover:text-white transition-colors underline underline-offset-4">
                SMS Terms &amp; Conditions
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
