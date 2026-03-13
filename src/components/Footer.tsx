import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-obsidian pt-32 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-champagne/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">

          {/* Brand Column */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="flex items-center gap-3 mb-8 cursor-pointer group">
              <div className="w-12 h-12 border border-champagne/30 group-hover:border-champagne flex items-center justify-center transition-colors duration-500">
                <span className="font-serif text-3xl leading-none text-champagne">D</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-[0.2em] uppercase text-alabaster leading-none">
                  Doggett
                </span>
                <span className="text-[0.65rem] tracking-[0.3em] uppercase leading-none mt-1.5 text-alabaster-muted">
                  Law Firm
                </span>
              </div>
            </div>
            <p className="text-alabaster-muted leading-relaxed font-light mb-8 max-w-sm text-sm">
              Doggett Law is a local third generation law practice that provides quality legal representation throughout all of CENLA.
            </p>
            <a
              href="tel:3188883644"
              className="inline-block border-b border-champagne text-champagne hover:text-white hover:border-white transition-colors pb-1 tracking-widest uppercase text-sm"
            >
              Call (318) 888-3644
            </a>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-2"></div>

          {/* Contact Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-8 font-medium">Headquarters</h4>
            <address className="not-italic flex flex-col gap-4 text-alabaster-muted font-light">
              <p>1100 Martin Luther King Drive<br />Suite A<br />Alexandria, LA 71301</p>
              <a href="mailto:kenneth@doggettlaw.net" className="hover:text-champagne transition-colors w-fit">kenneth@doggettlaw.net</a>
            </address>
          </div>

          {/* Links Column */}
          <div className="md:col-span-4 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-champagne mb-8 font-medium">Focus Areas</h4>
            <ul className="flex flex-col gap-4 text-alabaster-muted font-light">
              <li>
                <a href="#expertise" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-4 h-[1px] bg-champagne/30 group-hover:bg-champagne transition-colors"></span>
                  Personal Injury
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-4 h-[1px] bg-champagne/30 group-hover:bg-champagne transition-colors"></span>
                  Family Law
                </a>
              </li>
              <li>
                <a href="#expertise" className="hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="w-4 h-[1px] bg-champagne/30 group-hover:bg-champagne transition-colors"></span>
                  Succession Litigation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* SEO Text Block */}
        <div className="pt-8 mb-8 border-t border-white/5">
          <p className="text-[10px] sm:text-xs text-alabaster-muted/40 font-light leading-relaxed max-w-5xl mx-auto text-center">
            Doggett Law Firm provides elite legal representation across Central Louisiana (CENLA), including Rapides Parish, Grant Parish, Avoyelles Parish, and surrounding areas. Kenneth A. Doggett, Jr. specializes in high-stakes personal injury litigation (car accidents, commercial trucking collisions, wrongful death), complex high-net-worth family law and divorce, and contested succession litigation. Our Alexandria-based attorneys are dedicated to securing maximum leverage and decisive victories for our clients, from pre-suit negotiation to Supreme Court filings.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-alabaster-muted/50 font-light">
          <p>&copy; {new Date().getFullYear()} Doggett Law Firm. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/kenneth-doggett-54036720a/" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">LinkedIn</a>
            <a href="https://www.facebook.com/doggettlaw" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">Facebook</a>
            <a href="https://www.instagram.com/kennethadoggett/" target="_blank" rel="noreferrer" className="hover:text-champagne transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
