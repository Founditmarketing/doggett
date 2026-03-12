import { motion } from "motion/react";

const victories = [
  { amount: "$4.2M", type: "Personal Injury", detail: "Commercial Trucking Collision" },
  { amount: "Secured", type: "Family Law", detail: "High-Net-Worth Asset Division" },
  { amount: "$1.8M", type: "Personal Injury", detail: "Workplace Negligence" },
  { amount: "Resolved", type: "Succession", detail: "Complex Multi-Generational Estate" },
];

export default function EliteResults() {
  return (
    <section id="results" className="py-32 bg-obsidian relative overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-champagne"></div>
              <span className="text-champagne text-xs uppercase tracking-[0.2em]">Elite Results</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-light">
              A legacy of <span className="italic text-white/80">victories.</span>
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-md text-alabaster/60 font-light text-sm"
          >
            <p>Past performance is not a guarantee of future results, but it is the strongest indicator of capability. We prepare every case as if it will go to trial, ensuring maximum leverage at the negotiating table.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {victories.map((victory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-obsidian p-10 flex flex-col justify-center items-center text-center group hover:bg-obsidian-light transition-colors duration-500"
            >
              <h3 className="text-4xl md:text-5xl font-serif text-champagne mb-4 group-hover:scale-110 transition-transform duration-500">{victory.amount}</h3>
              <p className="text-xs uppercase tracking-widest text-alabaster/80 mb-2">{victory.type}</p>
              <p className="text-sm font-serif italic text-alabaster/50">{victory.detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
