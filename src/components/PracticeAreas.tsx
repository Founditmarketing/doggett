import { motion } from "motion/react";

const practices = [
  {
    title: "Personal Injury",
    description: "If you are hurt in a car wreck, offshore accident, slip and fall, or through someone else’s negligence, things can change in a split second. You shouldn’t have to go through this alone, so we are here to fight for you.",
    icon: "01"
  },
  {
    title: "Family Law",
    description: "When a couple separates or divorces, the law governs custody of children, child support, and the division of marital property and debt. There are procedures you must follow and proof you need. We are ready to assist you.",
    icon: "02"
  },
  {
    title: "Succession Law",
    description: "Creating a basic estate plan can save your family the burden of making important decisions after you pass away. Having a plan in place ensures that your wishes regarding the distribution of your assets will be followed.",
    icon: "03"
  }
];

export default function PracticeAreas() {
  return (
    <section id="expertise" className="py-32 bg-obsidian-light relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-8 h-[1px] bg-champagne"></div>
            <span className="text-champagne text-xs uppercase tracking-[0.2em]">Authority Centers</span>
            <div className="w-8 h-[1px] bg-champagne"></div>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-serif font-light"
          >
            Areas of <span className="italic text-champagne">Mastery</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {practices.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative p-8 lg:p-12 border border-white/10 hover:border-champagne/50 transition-colors duration-500 bg-obsidian"
            >
              <div className="text-champagne/30 font-serif text-6xl mb-8 group-hover:text-champagne transition-colors duration-500">
                {practice.icon}
              </div>
              <h3 className="text-2xl font-serif mb-6 text-alabaster">{practice.title}</h3>
              <p className="text-alabaster/60 font-light leading-relaxed text-sm mb-8">
                {practice.description}
              </p>
              <div className="flex items-center gap-2 text-champagne text-xs uppercase tracking-widest font-medium cursor-pointer group-hover:gap-4 transition-all duration-300">
                <span>Learn More</span>
                <span className="text-lg leading-none">&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
