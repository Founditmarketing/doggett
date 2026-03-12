import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitText from "./animations/SplitText";

export default function CommunityPillar() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-obsidian border-y border-white/5">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex w-[200vw] h-full">

          {/* Panel 1: Image & Intro */}
          <div className="w-[100vw] h-full flex items-center justify-center px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-screen-2xl mx-auto">

              {/* Stacking Images Container */}
              <div className="relative w-full aspect-[4/5] max-w-lg mx-auto md:ml-auto md:mr-0 z-20">

                <motion.div
                  className="absolute top-0 left-0 w-full h-full shadow-2xl"
                >
                  <div className="w-full h-full border border-champagne/20 relative overflow-hidden group">
                    <img
                      src="/assets/alexandria_la_courthouse_detail.png"
                      alt="Alexandria LA Courthouse Architecture"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </motion.div>

                <div className="absolute -bottom-8 -right-8 w-48 h-48 md:w-64 md:h-64 bg-obsidian border border-white/10 p-8 md:p-10 hidden sm:flex flex-col justify-center shadow-2xl z-20">
                  <span className="text-champagne text-5xl md:text-6xl font-serif mb-4 leading-none">30+</span>
                  <span className="w-12 h-[1px] bg-champagne/50 mb-4"></span>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-alabaster/70 leading-relaxed font-medium">Years Serving<br />Rapides Parish <br />&amp; CENLA</span>
                </div>
              </div>

              <div className="lg:pl-12">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-16 h-[1px] bg-gradient-to-r from-champagne to-transparent"></div>
                  <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Regional Pillar</span>
                </div>

                <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 leading-[1.1]">
                  Institutional <br />
                  <span className="italic text-champagne">Weight.</span>
                </h2>

                <p className="text-alabaster-muted font-light leading-relaxed max-w-md text-sm md:text-base">
                  Doggett Law Firm is a local third generation law practice that provides quality legal representation throughout all of CENLA.
                </p>
              </div>

            </div>
          </div>

          {/* Panel 2: Deep Reading */}
          <div className="w-[100vw] h-full flex items-center justify-center px-6 md:px-12 lg:px-24 border-l border-white/5 relative">
            {/* Background flourish */}
            <div className="absolute top-1/2 left-0 w-[800px] h-[800px] -translate-y-1/2 -translate-x-1/2 bg-champagne/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-4xl mx-auto w-full relative z-10">
              <SplitText
                text="Local Service."
                delay={0}
                className="text-5xl md:text-6xl lg:text-8xl font-serif font-light mb-2 text-white leading-[1]"
              />
              <SplitText
                text="Proven Track Record."
                delay={0}
                className="text-5xl md:text-6xl lg:text-8xl font-serif font-light mb-16 text-champagne italic leading-[1]"
              />

              <div className="space-y-8 text-alabaster/80 font-light leading-relaxed text-sm md:text-base lg:text-lg columns-1 md:columns-2 gap-16 border-l border-champagne/30 pl-8">
                <p>
                  Our office is located in Alexandria, Louisiana. We have been serving Rapides Parish and surrounding areas for over thirty years. Whether you’re injured, going through a divorce, or struggling with your estate planning, we customize our support to your individual needs.
                </p>
                <p>
                  We give special attention to your case and make sure you do not fall victim to opposing counsel or parties’ short-sided moves. We keep a solid track record of maintaining contact with our clients, ensuring you are never left in the dark.
                </p>
              </div>

              <a
                href="#contact"
                className="mt-20 inline-flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-champagne group transition-colors duration-300 hover:text-white"
              >
                <span>Initiate Dialogue</span>
                <span className="w-12 h-[1px] bg-champagne group-hover:bg-white group-hover:w-24 transition-all duration-500"></span>
              </a>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
