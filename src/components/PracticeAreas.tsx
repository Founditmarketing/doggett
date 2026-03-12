import { motion } from "motion/react";

const practices = [
  {
    title: "Personal Injury",
    description: "If you are hurt in an accident or through negligence, things change in a split second. You shouldn't have to navigate this alone. We meticulously build your case to ensure maximum recovery while you focus entirely on healing.",
    icon: "I",
    image: "/assets/practice_personal_injury_1773349744037.png"
  },
  {
    title: "Family Law",
    description: "Divorce, custody, and property division require both aggressive advocacy and strategic foresight. We provide discreet, powerful representation to protect your assets, your children, and your peace of mind during pivotal transitions.",
    icon: "II",
    image: "/assets/practice_family_law_1773349757645.png"
  },
  {
    title: "Succession Litigation",
    description: "Protecting a legacy requires uncompromising legal strategies. We handle complex estate disputes, successions, and wealth preservation matters, ensuring your family's assets and final wishes are fiercely defended in court.",
    icon: "III",
    image: "/assets/practice_succession_1773349772080.png"
  }
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-32 bg-alabaster relative border-y border-obsidian/5 overflow-hidden">

      {/* Liquid SVG Filter Definition */}
      <svg style={{ width: 0, height: 0, position: 'absolute' }}>
        <filter id="liquid" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="3" result="noise">
            <animate attributeName="baseFrequency" values="0.015;0.02;0.015" duration="8s" repeatCount="indefinite" />
          </feTurbulence>
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>

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
              className="text-4xl md:text-5xl lg:text-6xl font-serif font-light leading-1.1 text-obsidian"
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
            className="hidden lg:block w-64 text-sm text-obsidian/70 font-light leading-relaxed"
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
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="group relative h-[500px] overflow-hidden bg-white/[0.03] border border-white/10 hover:border-champagne/40 hover:bg-white/[0.05] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              {/* Image Background */}
              <div className="absolute inset-0 bg-obsidian z-0 transition-opacity duration-700 group-hover:opacity-100 opacity-0 overflow-hidden">
                <img
                  src={practice.image}
                  alt={practice.title}
                  style={{ filter: "url(#liquid)" }}
                  className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-125 group-hover:scale-110 transition-transform duration-[2s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-obsidian/20"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="text-champagne/60 font-serif text-5xl mb-12 group-hover:text-champagne transition-colors duration-500 group-hover:-translate-y-2 transform">
                    {practice.icon}
                  </div>
                  <h3 className="text-2xl font-serif mb-6 text-obsidian group-hover:text-white transition-colors duration-300">{practice.title}</h3>
                  <p className="text-obsidian/70 font-light leading-relaxed text-sm group-hover:text-white/90 transition-colors duration-300 line-clamp-4">
                    {practice.description}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-champagne text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                  <span>Explore Protocol</span>
                  <div className="w-8 h-[1px] bg-champagne group-hover:w-12 transition-all duration-500"></div>
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
