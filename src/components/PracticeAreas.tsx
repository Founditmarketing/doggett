import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { X } from "lucide-react";
import LiquidImage from "./animations/LiquidImage";
const practices = [
  {
    title: "Personal Injury",
    description: "If you are hurt in a car wreck or any other way through someone else’s carelessness, things can change in a split second. We believe you shouldn’t have to go through this alone.",
    longDescription: "Our approach to Personal Injury litigation is aggressive, meticulous, and entirely unflinching. We handle catastrophic car and trucking accidents, offshore accidents, severe slip and falls, dog bites, and special victim representation. We immediately launch comprehensive investigations, securing crucial evidence and dismantling insurance company defense tactics.\n\nCRITICAL: Louisiana enforces one of the strictest statutes of limitations in the country. You possess exactly one year from the date of the incident to file a lawsuit in most cases. Do not wait.",
    icon: "I",
    image: "/assets/practice_personal_injury_1773349744037.png"
  },
  {
    title: "Family Law",
    description: "When a couple separates or divorces, the law governs custody, support, and the division of marital property and debt. We are ready to assist you through these critical procedures.",
    longDescription: "High net-worth divorces and complex custody disputes require discretion, tactical precision, and an ironclad understanding of asset division. We protect your privacy, your children, and your financial legacy with unwavering loyalty. We handle complex business valuations, hidden assets, and severe litigation with a composed hostility that ensures your empire remains intact.",
    icon: "II",
    image: "/assets/practice_family_law_1773349757645.png"
  },
  {
    title: "Succession Law",
    description: "Creating an estate plan can save your family the burden of making important decisions after you pass away. Having a plan ensures your wishes regarding assets are followed.",
    longDescription: "Creating a basic estate plan can save your family the burden of making important decisions should you become incapacitated or after you pass away. Having a plan in place now offers you the best chance of ensuring that your wishes regarding the distribution of your assets or medical care will be followed. We handle sophisticated succession planning, trust formulation, and probate litigation to ensure your legacy remains intact.",
    icon: "III",
    image: "/assets/practice_succession_1773349772080.png"
  }
];

export default function PracticeAreas() {
  const [selectedPractice, setSelectedPractice] = useState<typeof practices[0] | null>(null);

  return (
    <section id="expertise" className="py-32 bg-obsidian relative border-y border-white/5 overflow-hidden">

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
              onClick={() => setSelectedPractice(practice)}
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
                  <p className="text-alabaster/90 font-light leading-relaxed text-sm group-hover:text-white transition-colors duration-300 line-clamp-4">
                    {practice.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-champagne text-[10px] uppercase tracking-[0.2em] font-medium opacity-100 translate-x-0 md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500">
                  <span>Explore Protocol</span>
                  <div className="w-12 h-[1px] bg-champagne md:w-8 md:group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>

              {/* Bottom decorative bar */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-champagne w-0 group-hover:w-full transition-all duration-1000 ease-out z-20"></div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedPractice && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPractice(null)}
              className="absolute inset-0 bg-obsidian/90 backdrop-blur-xl transition-opacity"
            />

            <motion.div
              layoutId={`practice-card-${selectedPractice.title}`}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-4xl bg-obsidian border border-white/10 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Image Half */}
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <div className="absolute inset-0 bg-obsidian/40 mix-blend-multiply z-10" />
                <img
                  src={selectedPractice.image}
                  alt={selectedPractice.title}
                  className="w-full h-full object-cover scale-105"
                  loading="lazy"
                />
              </div>

              {/* Content Half */}
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative overflow-y-auto">
                <button
                  onClick={() => setSelectedPractice(null)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
                >
                  <X size={20} />
                </button>

                <div className="text-champagne font-serif text-3xl mb-4">
                  {selectedPractice.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-serif text-white mb-6 leading-tight">
                  {selectedPractice.title}
                </h3>
                <div className="w-12 h-[1px] bg-champagne mb-8" />

                <p className="text-alabaster/90 font-light leading-relaxed mb-8">
                  {selectedPractice.longDescription}
                </p>

                <div className="mt-auto pt-8 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setSelectedPractice(null)}
                    className="group inline-flex items-center gap-4 text-xs tracking-[0.2em] uppercase text-champagne hover:text-white transition-colors"
                  >
                    <span>Schedule Confidential Consultation</span>
                    <div className="w-8 h-[1px] bg-champagne group-hover:w-12 group-hover:bg-white transition-all duration-300" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
