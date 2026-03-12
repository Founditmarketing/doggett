import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const victories = [
  { amount: "$4.2M", type: "Personal Injury", detail: "Commercial Trucking Collision" },
  { amount: "Secured", type: "Family Law", detail: "High-Net-Worth Asset Division" },
  { amount: "$1.8M", type: "Personal Injury", detail: "Workplace Negligence" },
  { amount: "Resolved", type: "Succession", detail: "Complex Multi-Generational Estate" },
];

export default function EliteResults() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="results" ref={containerRef} className="py-32 md:py-48 bg-obsidian relative overflow-hidden">
      {/* Background Image with Parallax Mask */}
      <motion.div style={{ y: yOffset }} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-obsidian mix-blend-multiply border border-white/5"></div>
        <img
          src="https://images.unsplash.com/photo-1542459955-f76ea59103c8?q=80&w=2000&auto=format&fit=crop"
          alt="Gavel"
          className="w-full h-[150%] object-cover object-top grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-[1px] bg-champagne"></div>
              <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Verified Outcomes</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-1.1 text-white">
              A Legacy Built on <br />
              <span className="italic text-champagne">Decisive Victories.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-alabaster-muted font-light text-sm leading-relaxed"
          >
            <p>Past performance is not a guarantee of future results, but it remains the absolute strongest indicator of capability. We prepare every single case as if trial is inevitable, securing maximum leverage.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {victories.map((victory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="glass-panel p-12 flex flex-col justify-center items-center text-center group hover:bg-white/5 transition-all duration-700 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <h3 className="text-4xl md:text-5xl xl:text-6xl font-serif text-white mb-6 group-hover:text-champagne group-hover:scale-110 transition-all duration-700 transform relative z-10">
                {victory.amount}
              </h3>

              <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-champagne group-hover:w-16 transition-all duration-500 relative z-10"></div>

              <p className="text-[10px] uppercase tracking-[0.2em] text-alabaster/80 mb-3 relative z-10">{victory.type}</p>
              <p className="text-xs font-serif italic text-alabaster-muted relative z-10">{victory.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
