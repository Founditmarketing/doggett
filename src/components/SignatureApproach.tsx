import { motion } from "motion/react";

export default function SignatureApproach() {
  return (
    <section id="the-firm" className="py-32 bg-obsidian relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-champagne"></div>
              <span className="text-champagne text-xs uppercase tracking-[0.2em]">The Signature Approach</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-light leading-tight mb-8">
              Direct access to <br />
              <span className="italic text-white/80">elite counsel.</span>
            </h2>
            
            <div className="space-y-6 text-alabaster/70 font-light leading-relaxed">
              <p>
                At Doggett Law, we believe in "Fewer words, more work." We reject the volume-based model of traditional legal practice. We operate as a boutique firm by design, ensuring that every client receives personal attention and direct, unfiltered access to their lead attorney.
              </p>
              <p>
                As a third-generation law practice, we bring extensive experience and professionalism to every case. Our attorneys have handled cases from pre-suit all the way to filing a writ with the Supreme Court. We keep a solid track record of maintaining contact with our clients, making sure you do not fall victim to opposing counsel or parties’ short-sighted moves.
              </p>
              <p>
                Whether you’re injured, going through a divorce, or struggling with your estate planning, we customize our support to your individual needs and concerns. We are for our clients and look out for our clients’ best interests.
              </p>
            </div>

            <div className="mt-12">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" 
                alt="Signature" 
                className="h-12 opacity-50 invert"
                referrerPolicy="no-referrer"
              />
              <p className="mt-4 text-sm font-serif italic text-alabaster/50">Kenneth A. Doggett, Jr.</p>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden relative">
              <div className="absolute inset-0 bg-obsidian/20 z-10 mix-blend-multiply"></div>
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop"
                alt="Attorney in office"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-l border-b border-champagne z-20"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 border-r border-t border-champagne z-20"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
