import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import LiquidImage from "./animations/LiquidImage";

const practices = [
  {
    title: "Personal Injury",
    slug: "personal-injury",
    description: "If you are hurt in a car wreck or any other way through someone else’s carelessness, things can change in a split second. We believe you shouldn’t have to go through this alone.",
    icon: "I",
    image: "/assets/practice_personal_injury_1773349744037.png"
  },
  {
    title: "Family Law",
    slug: "family-law",
    description: "When a couple separates or divorces, the law governs custody, support, and the division of marital property and debt. We are ready to assist you through these critical procedures.",
    icon: "II",
    image: "/assets/practice_family_law_1773349757645.png"
  },
  {
    title: "Succession Law",
    slug: "succession-law",
    description: "Creating an estate plan can save your family the burden of making important decisions after you pass away. Having a plan ensures your wishes regarding assets are followed.",
    icon: "III",
    image: "/assets/practice_succession_1773349772080.png"
  }
];

export default function PracticeAreas() {
  const navigate = useNavigate();

  return (
    <section id="expertise" className="py-20 md:py-24 bg-obsidian relative border-y border-white/5 overflow-hidden">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6 mb-8"
            >
              <div className="w-12 h-[1px] bg-champagne"></div>
              <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">Areas of Authority</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-1.1 text-white"
            >
              Our Singular <br />
              <span className="italic text-champagne w-fit relative">
                Focus.
                <motion.span
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 1 }}
                  className="absolute -bottom-2 left-0 h-[1px] bg-champagne hidden md:block"
                />
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="hidden lg:block w-64 text-sm text-alabaster-muted font-light leading-relaxed"
          >
            We don't dabble. We maintain strict focus on high-stakes litigation across three distinct areas of law.
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/practice/${practice.slug}`)}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[500px] overflow-hidden bg-white/[0.03] border border-champagne/30 md:border-white/10 md:hover:border-champagne/40 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-obsidian z-0 transition-opacity duration-700 group-hover:opacity-100 opacity-0 overflow-hidden">
                <LiquidImage
                  src={practice.image}
                  alt={practice.title}
                  className="absolute inset-0 w-full h-full opacity-40 mix-blend-luminosity scale-125 group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-champagne/40 font-serif text-5xl mb-12 group-hover:text-champagne transition-colors duration-500 group-hover:-translate-y-2 transform">
                    {practice.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-6 text-white group-hover:text-champagne transition-colors duration-300">{practice.title}</h3>
                  <p className="text-white/90 font-normal leading-relaxed text-[15px] group-hover:text-white transition-colors duration-300">
                    {practice.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-champagne text-[11px] uppercase tracking-[0.2em] font-medium opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                  <span>Explore Practice Area</span>
                  <div className="w-12 h-[1px] bg-champagne md:w-8 md:group-hover:w-16 transition-all duration-500"></div>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-champagne w-0 group-hover:w-full transition-all duration-1000 ease-out z-20"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
