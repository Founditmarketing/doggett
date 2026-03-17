import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const detailedResults = [
  {
    category: "Personal Injury",
    verdict: "$4.2 Million",
    subtitle: "Commercial Trucking Collision",
    challenge: "The defendant, a massive national logistics corporation immediately attempted to suppress critical telemetry data from the rig following a devastating rear-end collision on I-49. They offered a fraction of the policy limit, blaming our client for 'sudden stopping'.",
    strategy: "Doggett Law filed an immediate emergency injunction to secure the rig's black box data and deployed biomechanical crash reconstructionists the same evening. We deposed the corporate safety director, forcing him to admit under oath that the driver had skipped two mandatory DOT rest periods.",
    outcome: "Faced with undeniable bad-faith actions and a shattered defense, the logistics company capitulated one week before trial, paying $4.2M to ensure our client's lifetime medical care and lost earning capacity were completely secured.",
    image: "/assets/legal_briefs_macro_1773364741473.png"
  },
  {
    category: "Family Law",
    verdict: "Full Custody & Asset Preservation",
    subtitle: "High-Net-Worth Antagonistic Divorce",
    challenge: "Our client's estranged spouse launched a scorched-earth campaign to entirely sever custody and lay claim to a fourth-generation family-owned LLC, utilizing aggressive opposing counsel known for attrition tactics.",
    strategy: "We preemptively secured forensic accountants to trace the precise commingling of marital assets vs. separate ancestral property. While opposing counsel filed frivolous motions to drain our client's cash reserves, we focused a laser-like offensive on the spouse's documented erratic behavior, culminating in a devastating psychological evaluation.",
    outcome: "Our client retained 100% ownership of the ancestral LLC, paid zero spousal support, and was awarded sole domiciliary custody of the minor children, preserving the family's bloodline and enterprise in a single decisive court order.",
    image: "/assets/practice_family_law_1773349757645.png"
  },
  {
    category: "Succession Litigation",
    verdict: "$2.1M Estate Defended",
    subtitle: "Fraudulent Heir Objection",
    challenge: "Following the passing of a prominent local patriarch, an estranged 'heir' emerged with a highly suspicious, recently amended will that attempted to disinherit our client entirely. The opposition was banking on our client settling out of grief.",
    strategy: "We do not settle fraudulent claims. We brought in graphology (handwriting) experts to forensically dismantle the forged signature on the amendment. Simultaneously, we subpoenaed the medical records of the deceased to conclusively prove a lack of testamentary capacity during the dates the forged document was allegedly executed.",
    outcome: "The judge tossed the fraudulent amendment on the second day of the hearing. Our client's rightful inheritance of the $2.1M estate was completely restored, and the opposing party was pursued for sanctions and legal fees.",
    image: "/assets/practice_succession_1773349772080.png"
  }
];

export default function Results() {
  return (
    <div className="bg-obsidian min-h-screen text-alabaster pt-32 pb-24">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-24 text-center">
           <div className="w-16 h-[1px] bg-champagne mx-auto mb-8"></div>
           <h1 className="text-5xl md:text-7xl font-serif text-white font-light tracking-tight mb-6">
             Decisive <span className="italic text-champagne">Victories.</span>
           </h1>
           <p className="text-xl text-alabaster-muted font-light max-w-2xl mx-auto leading-relaxed">
             We prepare every case as if trial is inevitable. Explore the anatomy of our strategic triumphs inside and outside the courtroom.
           </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-32">
          {detailedResults.map((result, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
               {/* Visual Side */}
               <div className="w-full lg:w-5/12 relative h-[400px] md:h-[500px] group overflow-hidden">
                 <div className="absolute inset-0 bg-obsidian z-10 mix-blend-color"></div>
                 <div className="absolute inset-0 border border-champagne/20 z-20 m-4 group-hover:scale-[0.96] transition-transform duration-700"></div>
                 <img src={result.image} alt={result.category} className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-80 group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
                 
                 {/* Verdict Banner Overlay */}
                 <div className="absolute bottom-10 left-0 bg-champagne text-obsidian px-8 py-5 z-30 shadow-2xl flex flex-col transform group-hover:-translate-y-2 transition-transform duration-500">
                    <span className="text-[10px] uppercase tracking-widest font-medium mb-1">Recovered / Awarded</span>
                    <span className="text-3xl md:text-4xl font-serif">{result.verdict}</span>
                 </div>
               </div>

               {/* Content Side */}
               <div className="w-full lg:w-7/12">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-[1px] bg-champagne/50"></div>
                    <span className="text-champagne text-xs uppercase tracking-[0.2em]">{result.category}</span>
                 </div>
                 
                 <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 border-b border-white/10 pb-6">{result.subtitle}</h2>
                 
                 <div className="space-y-8">
                   <div>
                     <h3 className="text-[10px] uppercase tracking-[0.3em] text-alabaster/40 font-medium mb-3">The Challenge</h3>
                     <p className="text-alabaster-muted font-light leading-loose text-base md:text-lg">{result.challenge}</p>
                   </div>
                   
                   <div>
                     <h3 className="text-[10px] uppercase tracking-[0.3em] text-alabaster/40 font-medium mb-3">The Strategy</h3>
                     <p className="text-alabaster-muted font-light leading-loose text-base md:text-lg">{result.strategy}</p>
                   </div>
                   
                   <div>
                     <h3 className="text-[10px] uppercase tracking-[0.3em] text-champagne font-medium mb-3">The Outcome</h3>
                     <p className="text-white font-light leading-loose text-base md:text-lg">{result.outcome}</p>
                   </div>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-40 border-t border-white/5 pt-12 text-center">
            <p className="text-xs text-alabaster/30 font-light max-w-4xl mx-auto uppercase tracking-widest leading-relaxed">
              * Case outcomes are illustrative and not a guarantee of future results. Each matter involves unique facts and circumstances. The $4.2M settlement cited above reflects a gross recovery prior to the deduction of attorney's fees, litigation expenses, and medical liens.
            </p>
        </div>

      </div>
    </div>
  );
}
