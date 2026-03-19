import { motion } from "motion/react";

export default function LocalSeo() {
  return (
    <section className="py-24 md:py-32 bg-obsidian-light relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[url('/assets/kenneth_and_dad_walking.jpg')] bg-cover bg-center opacity-10 mix-blend-luminosity grayscale"></div>
      
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/2"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-champagne"></div>
            <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Local Authority</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8 leading-tight">
            Rooted in <span className="italic text-champagne">Central Louisiana.</span>
          </h2>
          <p className="text-alabaster-muted font-light leading-relaxed mb-6 text-sm md:text-base">
            Doggett Law Firm is uniquely positioned to handle high-stakes litigation across Alexandria, Pineville, and the greater CENLA region. Our deep ties to the community and comprehensive understanding of local courts provide our clients with a distinct tactical advantage.
          </p>
          <p className="text-alabaster-muted font-light leading-relaxed mb-8 text-sm md:text-base">
            From the Ninth Judicial District Court to the appellate circuits, we bring elite, uncompromising legal counsel directly to Rapides Parish and beyond.
          </p>
          <div className="flex flex-wrap gap-4">
            {["Alexandria", "Pineville", "Rapides Parish", "Grant Parish", "Avoyelles Parish"].map((location, i) => (
              <span key={i} className="text-[10px] uppercase tracking-widest text-white/50 border border-white/10 px-4 py-2 bg-white/5">
                {location}
              </span>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="md:w-1/2 relative h-[500px] w-full"
        >
          <div className="absolute inset-0 border border-white/10 p-2">
            <div className="w-full h-full relative overflow-hidden bg-obsidian border border-white/5">
              <img 
                src="/assets/kenneth_and_dad_walking.jpg" 
                alt="Kenneth and his dad walking in Central Louisiana" 
                className="w-full h-full object-cover grayscale contrast-125 mix-blend-luminosity opacity-80 hover:opacity-100 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent"></div>
            </div>
          </div>
          {/* Decorative Accent */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b border-l border-champagne/40 z-0"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-champagne/40 z-0"></div>
        </motion.div>
      </div>
    </section>
  );
}
