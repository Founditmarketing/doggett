import { Link } from "react-router-dom";

export default function Terms() {
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
            SMS Terms &amp; Conditions
          </h1>
          <p className="text-alabaster-muted font-light">Last updated: March 17, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <div className="prose prose-invert max-w-none space-y-12">

          {/* SMS Terms of Service */}
          <section>
            <div className="bg-white/[0.03] border border-champagne/20 p-8 md:p-10">
              <h2 className="text-2xl font-serif text-white mb-6">SMS Terms of Service</h2>
              <p className="text-lg text-alabaster-muted font-light leading-loose">
                By opting into SMS from a web form or other medium, you are agreeing to receive SMS messages from <strong className="text-white">Doggett Law Firm</strong>. This includes SMS messages for customer care, appointment reminders, case updates, and account notifications. Message frequency varies. Message and data rates may apply. See our privacy policy at{" "}
                <Link to="/privacy" className="text-champagne hover:text-white transition-colors underline underline-offset-4">
                  doggettlaw.net/privacy
                </Link>
                . Message <strong className="text-white">HELP</strong> for help. Reply <strong className="text-white">STOP</strong> to any message to opt out.
              </p>
            </div>
          </section>

          {/* Section 1 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">1. Message Types</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              When you opt in to SMS communications from Doggett Law Firm, you may receive the following types of messages:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Appointment Reminders:</strong> Notifications about upcoming consultations and scheduled meetings.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Case Updates:</strong> Status updates and important information regarding your legal matter.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Account Notifications:</strong> Administrative messages related to your client account.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span><strong className="text-white">Customer Care:</strong> Responses to your inquiries and follow-up communications.</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">2. Messaging Frequency</h2>
            <p className="text-alabaster-muted font-light leading-loose">
              Messaging frequency may vary depending on the nature of your legal matter and interactions with our firm. You may receive periodic messages based on appointment schedules, case milestones, and your direct inquiries.
            </p>
          </section>

          {/* Section 3 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">3. Rates & Charges</h2>
            <p className="text-alabaster-muted font-light leading-loose">
              <strong className="text-white">Message and data rates may apply.</strong> Standard messaging and data fees from your wireless carrier may apply to SMS messages sent and received. Please consult your wireless plan or contact your carrier for details about your specific messaging plan.
            </p>
          </section>

          {/* Section 4 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">4. Opting Out</h2>
            <div className="bg-champagne/10 border border-champagne/30 p-6 mb-6">
              <p className="text-white font-medium leading-relaxed text-lg">
                To opt out at any time, text <strong>STOP</strong> to any SMS message you receive from Doggett Law Firm.
              </p>
            </div>
            <p className="text-alabaster-muted font-light leading-loose">
              After sending STOP, you will receive a one-time confirmation message. You will no longer receive SMS messages from us unless you opt in again. Please note that opting out of SMS does not affect other communication channels (email, phone calls) related to your legal matter.
            </p>
          </section>

          {/* Section 5 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">5. Getting Help</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              For assistance with SMS messaging:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Text <strong className="text-white">HELP</strong> to any message for immediate assistance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Visit our website at <a href="https://doggettlaw.net" className="text-champagne hover:text-white transition-colors underline underline-offset-4">doggettlaw.net</a>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Call us at <a href="tel:3188883644" className="text-champagne hover:text-white transition-colors">(318) 888-3644</a>.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>Email us at <a href="mailto:kenneth@doggettlaw.net" className="text-champagne hover:text-white transition-colors">kenneth@doggettlaw.net</a>.</span>
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">6. Privacy & Consent</h2>
            <p className="text-alabaster-muted font-light leading-loose mb-4">
              Your privacy is important to us. Please review our full privacy policy for details on how we collect, use, and protect your personal information:
            </p>
            <ul className="list-none space-y-3 text-alabaster-muted font-light">
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>
                  Visit{" "}
                  <Link to="/privacy" className="text-champagne hover:text-white transition-colors underline underline-offset-4">
                    Privacy Policy
                  </Link>{" "}
                  for our privacy policy.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 bg-champagne rounded-full mt-2.5 shrink-0" />
                <span>
                  Visit{" "}
                  <Link to="/terms" className="text-champagne hover:text-white transition-colors underline underline-offset-4">
                    Terms &amp; Conditions
                  </Link>{" "}
                  for our Terms of Service.
                </span>
              </li>
            </ul>
            <p className="text-alabaster-muted font-light leading-loose mt-6">
              SMS consent is not shared with third parties or affiliates for marketing or any other purpose.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">7. Changes to These Terms</h2>
            <p className="text-alabaster-muted font-light leading-loose">
              We reserve the right to modify these SMS Terms &amp; Conditions at any time. Changes will be effective when posted on this page. Continued use of SMS services after any changes constitutes your acceptance of the updated terms.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t border-white/10 pt-10">
            <h2 className="text-2xl font-serif text-white mb-6">8. Contact Information</h2>
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

          {/* Cross-link to Privacy */}
          <section className="border-t border-white/10 pt-10 text-center">
            <p className="text-alabaster-muted font-light">
              See also our{" "}
              <Link to="/privacy" className="text-champagne hover:text-white transition-colors underline underline-offset-4">
                Privacy Policy
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
