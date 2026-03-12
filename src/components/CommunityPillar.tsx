import { motion } from "motion/react";

export default function CommunityPillar() {
  return (
    <section className="py-32 bg-obsidian-light relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-7 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="aspect-[16/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop" 
                alt="Alexandria Louisiana" 
                className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-obsidian border border-white/10 p-8 hidden md:flex flex-col justify-center">
              <span className="text-champagne text-5xl font-serif mb-2">30+</span>
              <span className="text-xs uppercase tracking-widest text-alabaster/70 leading-relaxed">Years serving<br/>Rapides Parish &amp;<br/>Central Louisiana</span>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 lg:pl-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-champagne"></div>
              <span className="text-champagne text-xs uppercase tracking-[0.2em]">Community Pillar</span>
            </div>
            
            <h2 className="text-4xl font-serif font-light mb-8">
              Deep roots. <br />
              <span className="italic text-white/80">Regional power.</span>
            </h2>
            
            <p className="text-alabaster/70 font-light leading-relaxed mb-8">
              Doggett Law is a local, third-generation law practice that provides quality legal representation throughout all of CENLA. Our office is located in Alexandria, Louisiana, and we have been serving Rapides Parish and surrounding areas for over thirty years.
            </p>
            <p className="text-alabaster/70 font-light leading-relaxed">
              This unique combination of extensive legal acumen and deep regional insight provides our clients with an unparalleled advantage inside and outside the courtroom. We are for our clients and look out for our clients’ best interests.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
