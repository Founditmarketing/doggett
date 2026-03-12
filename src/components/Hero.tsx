import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "./animations/SplitText";
import Magnetic from "./animations/Magnetic";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
      {/* Background with Parallax */}
      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0 origin-bottom"
      >
        {/* Video/Image Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent z-10" />
          <img
            src="/assets/lady_justice_macro_hero.png"
            alt="Blind Justice Statue"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 max-w-screen-xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-champagne/50"></div>
          <span className="text-champagne text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            Alexandria, Louisiana
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6 py-2 flex flex-col items-center">
          <SplitText
            text="Fewer words, more work."
            delay={0.3}
            className="text-5xl md:text-7xl lg:text-[7rem] font-serif font-light leading-[1] max-w-6xl tracking-tight text-white justify-center"
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-alabaster-muted max-w-2xl font-light mb-16 leading-loose"
        >
          Advocating fiercely for our clients in all Personal Injury, Family, and Succession matters, from beginning to end.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-8 items-center"
        >
          <Magnetic intensity={0.3}>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="tel:3188883644"
              className="group flex justify-center items-center px-8 lg:px-12 py-5 bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] block"
            >
              <span className="relative z-10 font-medium transition-colors duration-500 group-hover:text-white">Request Consultation</span>
              <div className="absolute inset-0 bg-obsidian transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 ease-out z-0"></div>
            </motion.a>
          </Magnetic>
          <Magnetic intensity={0.2}>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#expertise"
              className="group text-xs uppercase tracking-[0.2em] text-white flex items-center gap-4 transition-colors duration-300 hover:text-champagne block"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:bg-champagne group-hover:w-16 transition-all duration-500"></span>
              Explore Our Practice
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        className="absolute bottom-12 right-12 hidden lg:flex flex-col items-center gap-6 z-30"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 rotate-90 origin-right translate-x-1/2">Scroll</span>
        <div className="w-[1px] h-24 bg-white/10 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/3 bg-champagne"
          />
        </div>
      </motion.div>
    </section>
  );
}
