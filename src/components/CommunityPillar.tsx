import { motion } from "motion/react";

export default function CommunityPillar() {
  return (
    <section className="py-32 md:py-48 bg-obsidian-light relative border-y border-white/5 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          <motion.div
            className="lg:col-span-7 relative h-[600px] w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply z-10 transition-opacity duration-1000 hover:opacity-0 border border-white/5"></div>
              <img
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop"
                alt="Alexandria Louisiana"
                className="w-full h-full object-cover grayscale opacity-90 hover:grayscale-0 transition-all duration-[2s] scale-105 hover:scale-100"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-8 -right-8 w-64 h-64 bg-obsidian border border-white/10 p-10 hidden md:flex flex-col justify-center shadow-2xl z-20"
            >
              <span className="text-champagne text-6xl font-serif mb-4 leading-none">30+</span>
              <span className="w-12 h-[1px] bg-champagne/50 mb-4"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/70 leading-relaxed font-medium">Years Serving<br />Rapides Parish &amp;<br />Central Louisiana</span>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-5 relative z-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-[1px] bg-gradient-to-r from-champagne to-transparent"></div>
                <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Regional Pillar</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-12 text-white leading-[1.1]">
                Deep Roots. <br />
                <span className="italic text-champagne">Absolute Power.</span>
              </h2>

              <div className="space-y-8 text-alabaster-muted font-light leading-relaxed text-sm">
                <p>
                  Doggett Law Firm is a deeply ingrained, third-generation practice providing world-class legal representation throughout all of CENLA. Located in Alexandria, Louisiana, we have been fiercely defending Rapides Parish and surrounding areas for over three decades.
                </p>
                <p>
                  This unique synthesis of extensive, high-stakes legal acumen and profound regional insight provides our clients with an unparalleled advantage—both inside the courtroom and at the negotiating table. We exist solely to protect our clients' legacies and interests.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-12 inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-champagne group transition-colors duration-300 hover:text-white"
              >
                <span>Read Institutional History</span>
                <span className="w-8 h-[1px] bg-champagne group-hover:bg-white group-hover:w-16 transition-all duration-500"></span>
              </a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
