import { motion } from "motion/react";
import ScrubText from "./animations/ScrubText";
import { Award } from "lucide-react";

export default function SignatureApproach() {
  return (
    <section id="the-firm" className="py-20 md:py-32 bg-obsidian relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-gradient-to-b from-champagne/5 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-[500px] bg-gradient-to-t from-white/5 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Magazine-style Image Layout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative h-[600px] md:h-[800px] w-full"
          >
            <div className="absolute top-0 left-0 w-[85%] h-[85%] md:w-4/5 md:h-4/5 overflow-hidden shadow-2xl z-10">
              <div className="absolute inset-0 bg-obsidian/20 mix-blend-multiply z-10 border border-white/5"></div>
              <div className="w-full h-full bg-obsidian flex items-center justify-center relative">
                <img src="/assets/kendogheadshot-8581.JPEG" alt="Kenneth A. Doggett, Jr." className="absolute inset-0 w-full h-full object-cover object-top grayscale mix-blend-luminosity brightness-75 contrast-125" />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 right-0 w-[45%] h-[35%] md:w-2/5 md:h-[35%] overflow-hidden shadow-2xl z-20 border-l-4 border-t-4 border-obsidian"
            >
              <div className="absolute inset-0 bg-obsidian/30 mix-blend-multiply z-10"></div>
              <img
                src="/assets/legal_briefs_macro_1773364741473.png"
                alt="Legal Document"
                className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-110"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </motion.div>

            {/* Gold accents */}
            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-16 h-16 md:w-24 md:h-24 border-t-2 border-l-2 md:border-t md:border-l border-champagne md:border-champagne/50 z-0"></div>
            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-16 h-16 md:w-24 md:h-24 border-b-2 border-r-2 md:border-b md:border-r border-champagne md:border-champagne/50 z-0"></div>
          </motion.div>

          {/* Text Content */}
          <div className="lg:col-start-8 lg:col-span-5 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6 mb-12"
            >
              <div className="w-16 h-[1px] bg-gradient-to-r from-champagne to-transparent"></div>
              <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">The Signature Approach</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-[1.1] mb-12 text-white"
            >
              Direct Access to <br />
              <span className="italic text-champagne relative z-10">Elite Counsel.</span>
            </motion.h2>

            <div className="text-alabaster-muted font-light leading-loose text-sm md:text-base lg:text-lg mb-8 max-w-2xl flex flex-col gap-6">
              <ScrubText
                text="Headquartered in Alexandria, Louisiana, Doggett Law represents personal injury, family, and succession clients. Our firm specializes in all matters, from beginning to end."
              />
              <ScrubText
                text="Our attorneys have practice experience ranging from pre-suit negotiation all the way to filing writs with the Supreme Court. We recognize that the injuries you sustain impact not only you but your entire family."
              />
              <ScrubText
                text="Whether you're injured, navigating a complex divorce, or structuring legacy estate planning, we custom-tailor our aggressive litigation strategies to ensure your best interests are protected. We make ourselves available to speak with you directly about your case."
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-16 pt-8 border-t border-white/10"
            >
              <div className="grid grid-cols-2 gap-8 mb-12">
                <div>
                  <h4 className="text-champagne text-xs uppercase tracking-widest mb-3 font-medium">Bar Admissions</h4>
                  <p className="text-sm text-alabaster-muted font-light leading-relaxed">Louisiana State Bar<br />Texas State Bar</p>
                </div>
                <div>
                  <h4 className="text-champagne text-xs uppercase tracking-widest mb-3 font-medium">Education & Honors</h4>
                  <p className="text-sm text-alabaster-muted font-light leading-relaxed mb-4">
                    J.D. — Southern University Law Center<br />
                    B.A. — Louisiana Tech University
                  </p>
                  <div className="inline-flex items-center gap-3 border border-champagne/30 bg-champagne/5 px-4 py-2 mt-2">
                    <Award className="w-5 h-5 text-champagne" />
                    <span className="text-[10px] uppercase tracking-widest text-champagne font-medium">2020 Top 10 Under 40 (NACDA)</span>
                  </div>
                </div>
              </div>
              <div className="relative h-24 md:h-20 w-full min-h-[96px] max-w-[300px] mb-2 cursor-pointer group flex items-center">
                <svg viewBox="0 -20 400 160" className="w-full h-full stroke-champagne md:stroke-champagne/80 group-hover:stroke-champagne transition-colors duration-500 fill-none stroke-[4px] md:stroke-[2px] drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] md:drop-shadow-none" strokeLinecap="round" strokeLinejoin="round">
                  {/* MOBILE FALLBACK (Pure CSS) */}
                  <path
                    className="md:hidden animate-signature-draw"
                    d="M 30,20 C 20,40 15,90 25,100 C 35,110 40,80 50,70 C 60,60 90,40 70,30 C 50,20 40,50 60,100 C 70,110 80,90 85,80 M 100,90 L 100,92 M 120,80 C 130,50 140,50 150,90 C 155,100 145,100 135,100 C 120,100 125,70 145,70 C 155,70 160,90 170,100 M 180,95 L 180,97"
                  />
                  <path
                    className="md:hidden animate-signature-draw"
                    d="M 200,40 C 180,40 180,100 200,100 C 220,100 230,80 230,40 C 230,20 200,20 190,40 C 180,60 180,90 200,100 M 235,100 C 245,80 255,80 250,60 C 245,40 230,60 230,80 C 230,100 245,100 255,90 M 265,100 C 275,80 290,40 280,30 C 270,20 250,50 250,90 C 250,130 270,140 280,110 C 290,80 300,50 310,50 C 330,50 320,100 330,120 C 340,140 360,110 370,80 M 270,40 L 320,30 M 340,60 C 350,60 350,100 360,100 C 370,100 370,60 380,60 C 390,60 390,100 400,100"
                    style={{ animationDelay: '1s' }}
                  />

                  {/* DESKTOP (Framer Motion) */}
                  <motion.path
                    className="hidden md:block"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 1.5, ease: [0.33, 1, 0.68, 1], delay: 1 }}
                    d="M 30,20 C 20,40 15,90 25,100 C 35,110 40,80 50,70 C 60,60 90,40 70,30 C 50,20 40,50 60,100 C 70,110 80,90 85,80 M 100,90 L 100,92 M 120,80 C 130,50 140,50 150,90 C 155,100 145,100 135,100 C 120,100 125,70 145,70 C 155,70 160,90 170,100 M 180,95 L 180,97"
                  />
                  <motion.path
                    className="hidden md:block"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "50px" }}
                    transition={{ duration: 2.5, ease: [0.33, 1, 0.68, 1], delay: 2.2 }}
                    d="M 200,40 C 180,40 180,100 200,100 C 220,100 230,80 230,40 C 230,20 200,20 190,40 C 180,60 180,90 200,100 M 235,100 C 245,80 255,80 250,60 C 245,40 230,60 230,80 C 230,100 245,100 255,90 M 265,100 C 275,80 290,40 280,30 C 270,20 250,50 250,90 C 250,130 270,140 280,110 C 290,80 300,50 310,50 C 330,50 320,100 330,120 C 340,140 360,110 370,80 M 270,40 L 320,30 M 340,60 C 350,60 350,100 360,100 C 370,100 370,60 380,60 C 390,60 390,100 400,100"
                  />
                </svg>
              </div>
              <p className="mt-6 text-[11px] uppercase tracking-[0.2em] font-sans text-alabaster/40 font-medium">Kenneth A. Doggett, Jr.</p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
