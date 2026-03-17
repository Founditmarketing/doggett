import { motion, useScroll, useTransform, useInView, animate } from "motion/react";
import { useRef, useEffect, useState } from "react";

const victories = [
  { amount: 4200000, prefix: "$", suffix: "M", formatted: "4.2M", type: "Personal Injury", detail: "Commercial Trucking Collision", description: "Secured after demonstrating catastrophic mechanical failure ignored by corporate safety protocols." },
  { amount: 0, prefix: "Full Custody", suffix: " Awarded", formatted: "Awarded", type: "Family Law", detail: "High-Net-Worth Asset Division", description: "Successfully shielded multi-generational family business assets from aggressive antagonistic claims." },
  { amount: 1800000, prefix: "$", suffix: "M", formatted: "1.8M", type: "Personal Injury", detail: "Workplace Negligence", description: "Obtained maximum policy limits prior to trial initiation due to overwhelming biomechanical evidence." },
  { amount: 2100000, prefix: "$", suffix: "M Preserved", formatted: "2.1M", type: "Succession", detail: "Complex Multi-Generational Estate", description: "Dismantled fraudulent heir objections and preserved the integrity of the original aristocratic estate plan." },
];

function Counter({ from, to, prefix, suffix, formatted }: { from: number, to: number, prefix: string, suffix: string, formatted: string }) {
  const nodeRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (to === 0) {
      node.textContent = `${prefix}${suffix}`;
      return;
    }

    const controls = animate(from, to, {
      duration: 2.5,
      ease: [0.16, 1, 0.3, 1] as any,
      onUpdate(value) {
        if (value > 1000000) {
          node.textContent = `${prefix}${(value / 1000000).toFixed(1)}${suffix}`;
        } else {
          node.textContent = `${prefix}${Math.round(value).toLocaleString()}${suffix}`;
        }
      },
    });

    return () => controls.stop();
  }, [from, to, prefix, suffix, formatted]);

  return <h3 ref={nodeRef} className="text-4xl md:text-5xl xl:text-6xl font-serif text-white mb-6 group-hover:text-champagne transition-colors duration-700 relative z-10" />;
}

export default function EliteResults() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yOffset = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="results" ref={containerRef} className="py-20 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Background Image with Parallax Mask */}
      <motion.div style={{ y: yOffset }} className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-obsidian mix-blend-multiply border border-white/5"></div>
        <img
          src="/assets/marble_columns_abstract_1773364755886.png"
          alt="Dark Marble Courthouse Columns"
          className="w-full h-[150%] object-cover object-top grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian"></div>
      </motion.div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-12">
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

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {victories.map((victory, index) => {
            const cardRef = useRef(null);
            const isInView = useInView(cardRef, { once: true, margin: "0px" });
            const [isHovered, setIsHovered] = useState(false);

            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="glass-panel p-10 flex flex-col justify-center items-center text-center group transition-all duration-700 relative overflow-hidden h-[360px] cursor-default border border-white/5 hover:border-champagne/30 bg-obsidian/80 backdrop-blur-sm"
              >
                {/* Background Hover Reveal */}
                <div
                  className="absolute inset-0 bg-gradient-to-b from-champagne/10 to-transparent transition-opacity duration-700"
                  style={{ opacity: isHovered ? 1 : 0 }}
                />

                {/* Number Section */}
                <motion.div
                  animate={{ y: isHovered ? -20 : 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full flex flex-col items-center"
                >
                  {isInView ? (
                    <Counter
                      from={0}
                      to={victory.amount}
                      prefix={victory.prefix}
                      suffix={victory.suffix}
                      formatted={victory.formatted}
                    />
                  ) : (
                    <h3 className="text-4xl md:text-5xl xl:text-6xl font-serif text-white mb-6 opacity-0">0</h3>
                  )}

                  <div className="w-8 h-[1px] bg-white/20 mb-6 group-hover:bg-champagne group-hover:w-16 transition-all duration-500 relative z-10" />

                  <p className="text-[10px] uppercase tracking-[0.2em] text-alabaster/80 mb-3 relative z-10">{victory.type}</p>
                  <p className="text-xs font-serif italic text-alabaster-muted relative z-10">{victory.detail}</p>
                </motion.div>

                {/* Expanded Story (Revealed on Hover) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: isHovered ? 0.1 : 0, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-8 left-0 w-full px-8 text-xs text-alabaster-muted leading-relaxed font-light"
                >
                  <span className="w-6 h-[1px] bg-champagne/50 block mx-auto mb-4" />
                  {victory.description}
                </motion.div>

              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-[10px] uppercase tracking-widest text-alabaster/30 font-light">
            * Past performance is not a guarantee of future results. We prepare every single case as if trial is inevitable, securing maximum leverage regardless of past verdicts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
