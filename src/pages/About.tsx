import { motion } from "motion/react";
import { Award, Sword, Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-obsidian min-h-screen text-alabaster pt-32 pb-24">
      {/* Cinematic Hero Header */}
      <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden mb-32 border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40 z-10 mix-blend-multiply"></div>
        <motion.div
          animate={{ scale: [1, 1.1] }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-obsidian-light via-obsidian-muted to-obsidian opacity-40 origin-center"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-[1px] bg-champagne"></div>
            <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium">The Firm</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white font-light tracking-tight mb-6 drop-shadow-xl">
            Three Generations of <br className="hidden md:block" />
            <span className="italic text-champagne">Unflinching Litigation.</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-2xl text-alabaster font-light max-w-3xl mt-4 leading-relaxed px-4"
          >
            Rooted in Alexandria. Feared in the courtroom. I do not settle for less than my clients deserve.
          </motion.p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12">
        {/* Core Philosophy */}
        <section className="mb-32">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/3 pt-4">
              <h2 className="text-xs text-champagne uppercase tracking-[0.3em] font-medium mb-6">Our Philosophy</h2>
              <div className="w-16 h-[1px] bg-champagne hidden md:block"></div>
            </div>
            
            <div className="md:w-2/3 prose prose-invert max-w-none">
              <p className="text-2xl md:text-3xl font-light text-white leading-relaxed mb-8">
                <span className="float-left text-7xl md:text-[6rem] font-serif text-champagne leading-none pr-6 pt-2 pb-4 inline-block">F</span>
                ounded on the principle that aggressive, highly-prepared litigation is the only language insurance companies and opposing counsel understand, Doggett Law Firm operates unlike traditional defense-oriented practices.
              </p>
              <p className="text-lg text-alabaster-muted font-light leading-loose mb-6">
                For over three generations, the Doggett name has been synonymous with legal excellence in Rapides Parish and throughout Central Louisiana. My lineage of jurisprudence provides me with an intrinsic understanding of the local judiciary—a tactical advantage that out-of-town mega-firms simply cannot replicate. 
              </p>
              <p className="text-lg text-alabaster-muted font-light leading-loose">
                I maintain a deliberately low case volume. This allows me to personally investigate, strategize, and litigate every single matter. You will not be relegated to a junior associate or a paralegal. When you engage Doggett Law, you engage elite counsel directly. I prepare every grievance, every divorce petition, and every succession dispute as if trial is inevitable. Paradoxically, it is this overwhelming readiness for war that forces the maximum pre-trial settlements my clients enjoy.
              </p>
            </div>
          </div>
        </section>

        {/* Lead Attorney Profile */}
        <section className="mb-32">
          <div className="bg-white/[0.02] border border-white/5 p-12 lg:p-16 relative overflow-hidden group hover:border-champagne/30 transition-colors duration-700">
            {/* Abstract bg element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-champagne/5 rounded-full blur-[80px] group-hover:bg-champagne/10 transition-colors duration-1000"></div>

            <div className="relative z-10 flex flex-col lg:flex-row gap-16">
              <div className="lg:w-2/5 flex flex-col items-start">

                <h3 className="text-3xl font-serif text-white mb-2">Kenneth A. Doggett, Jr.</h3>
                <p className="text-sm uppercase tracking-widest text-champagne font-medium mb-8">Lead Litigation Counsel</p>
                
                <div className="space-y-6 w-full">
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-2">Education</h4>
                    <p className="text-sm font-light text-alabaster">J.D., Southern University Law Center<br/>B.A., Louisiana Tech University</p>
                  </div>
                  <div className="border-b border-white/10 pb-4">
                    <h4 className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-2">Bar Admissions</h4>
                    <p className="text-sm font-light text-alabaster">Louisiana State Bar<br/>Texas State Bar</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-alabaster/40 mb-2">Accolades</h4>
                    <div className="flex items-center gap-2">
                       <Award className="w-4 h-4 text-champagne" />
                       <p className="text-sm font-light text-champagne">2020 Top 10 Under 40 (NACDA)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 border-l-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-16 flex flex-col justify-center">
                <QuoteIcon className="w-12 h-12 text-champagne/20 mb-6" />
                <h4 className="text-2xl font-serif text-white font-light italic leading-relaxed mb-8">
                  "Insurance empires are built on the presumption that victims will buckle under pressure and accept a fraction of their worth. My job is to shatter that presumption, overwhelmingly and surgically."
                </h4>
                <p className="text-base text-alabaster-muted font-light leading-loose mb-6">
                  Kenneth A. Doggett, Jr. continues a multi-generational legacy of legal authority. Driven by a visceral disdain for corporate bullying and bureaucratic injustice, Kenneth focuses exclusively on plaintiff personal injury, complex family asset division, and succession protection.
                </p>
                <p className="text-base text-alabaster-muted font-light leading-loose">
                  Rather than settling for "fair" compensation, Kenneth employs advanced forensic modeling, biomechanical experts, and aggressive deposition tactics to corner opposition long before stepping foot inside the courtroom. His approach is methodical, unflinching, and tailored uniquely to the survival and prosperity of his clients' families.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Action Call */}
        <section className="mb-12 text-center">
             <div className="w-12 h-[1px] bg-champagne mx-auto mb-8"></div>
             <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">Do Not Navigate This Alone.</h2>
             <p className="text-alabaster-muted font-light max-w-2xl mx-auto mb-10">I invite you to reach out for a strictly confidential consultation. Discover the exact tactical advantage a third-generation litigator brings to your legal battle.</p>
             <Link to="/#contact" className="inline-flex items-center gap-4 group px-8 py-4 bg-champagne text-obsidian text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors duration-500">
                Secure Elite Counsel <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
             </Link>
        </section>

      </div>
    </div>
  );
}

function QuoteIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}
