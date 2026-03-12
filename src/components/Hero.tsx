import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image / Video Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-obsidian/60 z-10" /> {/* Dark overlay */}
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Law Office"
          className="w-full h-full object-cover scale-105 animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6 flex flex-col items-center gap-2"
        >
          <span className="text-champagne text-xs md:text-sm uppercase tracking-[0.3em] font-medium">
            Alexandria, Louisiana
          </span>
          <span className="text-alabaster/60 text-xs uppercase tracking-[0.2em]">
            Fewer words, more work.
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-light leading-[1.1] mb-8 max-w-5xl"
        >
          A Third-Generation <br />
          <span className="italic text-champagne">Legacy of Resolve.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-lg md:text-xl text-alabaster/70 max-w-2xl font-light mb-12 leading-relaxed"
        >
          Providing quality legal representation in Personal Injury, Family Law, and Succession. When the stakes are highest, we are your steadfast guide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <a
            href="tel:3188883644"
            className="px-8 py-4 bg-champagne text-obsidian font-medium uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300"
          >
            Call 318-888-3644
          </a>
          <a
            href="#expertise"
            className="px-8 py-4 border border-white/20 text-alabaster font-medium uppercase tracking-widest text-sm hover:border-champagne hover:text-champagne transition-colors duration-300"
          >
            Explore Our Practice
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-alabaster/50">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: [0, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-full h-1/2 bg-champagne"
          />
        </div>
      </motion.div>

      <style>{`
        @keyframes slowZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
}
