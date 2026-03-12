import { motion } from "motion/react";

export default function SignatureApproach() {
  return (
    <section id="the-firm" className="py-32 md:py-48 bg-obsidian relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-gradient-to-b from-champagne/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[500px] bg-gradient-to-t from-white/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Magazine-style Image Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[600px] md:h-[800px] w-full"
          >
            <div className="absolute top-0 left-0 w-3/4 h-3/4 overflow-hidden shadow-2xl z-10">
              <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply z-10 border border-white/5"></div>
              <img
                src="/assets/elite_attorney_portrait_1773349709984.png"
                alt="Elite Attorney"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] scale-105 hover:scale-100"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 right-0 w-2/3 h-2/3 overflow-hidden shadow-2xl z-20 border-l-4 border-t-4 border-obsidian"
            >
              <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply z-10"></div>
              <img
                src="/assets/signature_approach_detail_1773349721313.png"
                alt="Legal Document"
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>

            {/* Gold accents */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-champagne/50 z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-champagne/50 z-0"></div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-champagne to-transparent"></div>
              <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">The Signature Approach</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-12 text-white"
            >
              Direct Access to <br />
              <span className="italic text-champagne relative z-10">Elite Counsel.</span>
            </motion.h2>

            <div className="space-y-8 text-alabaster-muted font-light leading-relaxed text-sm md:text-base">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Headquartered in Alexandria, Louisiana, Doggett Law represents personal injury, family, and succession clients. Our firm specializes in all matters, from beginning to end.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Our attorneys have been practicing for decades and have experience in every stage of your case. That means you get an attorney who has handled cases from pre-suit all the way to filing a writ with the Supreme Court.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                Our attorneys make themselves available to speak with you directly about your case. We firmly reject the volume-based model, ensuring you receive the personal attention necessary to protect your best interests.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png"
                alt="Signature"
                className="h-16 opacity-30 invert transition-opacity duration-500 hover:opacity-80"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] font-sans text-alabaster/40 font-medium">Kenneth A. Doggett, Jr.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
