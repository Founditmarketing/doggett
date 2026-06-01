import { useParams, Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import SplitText from "../components/animations/SplitText";

const practiceData: Record<string, any> = {
    "personal-injury": {
        title: "Personal Injury",
        subtitle: "Unflinching Advocacy for the Injured",
        heroImage: "/assets/practice_personal_injury_1773349744037.png",
        overview: "If you are hurt in a car wreck or any other way through someone else’s carelessness, things can change in a split second. My approach to Personal Injury litigation is aggressive, meticulous, and entirely unflinching. I handle catastrophic car and trucking accidents, offshore accidents, severe slip and falls, dog bites, and special victim representation.",
        process: [
            { step: "Immediate Investigation", desc: "I deploy forensic teams to secure crucial evidence before it disappears or gets covered up by corporate defense." },
            { step: "Medical Coordination", desc: "Ensure you receive world-class medical evaluation to fully document the catastrophic nature of your injuries for maximum recovery." },
            { step: "Aggressive Negotiation", desc: "Dismantling insurance company delay-and-deny tactics through overwhelming evidentiary leverage." },
            { step: "Trial Readiness", desc: "I prepare every case as if it will go to trial, which paradoxically forces the highest settlements." }
        ],
        louisianaContext: "CRITICAL: Louisiana enforces one of the strictest statutes of limitations in the country. You possess exactly two years from the date of the incident to file a lawsuit in most injury cases. Furthermore, Louisiana follows a 'comparative fault' system, meaning insurance companies will forcefully attempt to blame you for your own injuries to reduce their payout. Do not speak to them without representation.",
    },
    "family-law": {
        title: "Family Law",
        subtitle: "Protecting Your Legacy and Bloodline",
        heroImage: "/assets/practice_family_law_1773349757645.png",
        overview: "High net-worth divorces and complex custody disputes require discretion, tactical precision, and an ironclad understanding of asset division. I protect your privacy, your children, and your financial legacy with unwavering loyalty. I handle complex business valuations, hidden assets, and severe litigation with a composed hostility that ensures your empire remains intact.",
        process: [
            { step: "Strategic Assessment", desc: "A confidential mapping of all marital assets, business interests, and custody leverage points." },
            { step: "Asset Protection", desc: "Deploying forensic accountants to trace hidden accounts and defend your personal wealth from aggressive opposing counsel." },
            { step: "Custody Architecture", desc: "Building an irrefutable case for parental fitness and securing living arrangements that prioritize your relationship with your children." },
            { step: "Final Resolution", desc: "Whether through surgical mediation or relentless courtroom litigation, I secure your future." }
        ],
        louisianaContext: "Louisiana operates under community property laws, meaning most assets acquired during the marriage are presumed to be owned jointly, 50/50. Dividing complex estates, 401ks, and family-owned LLCs requires deep financial litigation expertise. Fault (such as adultery or abuse) can drastically impact spousal support (alimony) awards under Louisiana law.",
    },
    "succession-law": {
        title: "Succession Law",
        subtitle: "Preserving the Aristocratic Estate",
        heroImage: "/assets/practice_succession_1773349772080.png",
        overview: "Creating a basic estate plan can save your family the burden of making important decisions after you pass away. Having a plan in place offers you the best chance of ensuring that your wishes regarding the distribution of your assets will be followed. I handle sophisticated succession planning, trust formulation, and probate litigation to ensure your legacy remains intact.",
        process: [
            { step: "Estate Auditing", desc: "Comprehensive review of all generational wealth, real estate, and active business interests." },
            { step: "Document Execution", desc: "Drafting ironclad Last Wills and Testaments, Powers of Attorney, and Living Directives." },
            { step: "Probate Navigation", desc: "Shepherding the estate through Louisiana courts swiftly to transfer assets to rightful heirs." },
            { step: "Litigation Defense", desc: "Dismantling fraudulent heir objections and defending the integrity of the original estate plan in court." }
        ],
        louisianaContext: "Louisiana's forced heirship laws are highly unique compared to the rest of the nation. Depending on the age and capabilities of your children, a portion of your estate may be mandated by law to go to them, regardless of your Will. Proper usufruct planning and trust establishment are critical to bypass these rigid state mandates and ensure your spouse translates wealth efficiently.",
    }
};

export default function PracticeArea() {
    const { id } = useParams();
    const data = id ? practiceData[id] : null;

    if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Area not found.</div>;

    return (
        <div className="bg-obsidian min-h-screen text-alabaster pt-32 pb-24">
            {/* Cinematic Hero Header */}
            <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden mb-32 border-b border-white/5">
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-obsidian/40 z-10 mix-blend-multiply"></div>
                <motion.img
                    animate={{ scale: [1, 1.1] }}
                    transition={{ duration: 25, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                    src={data.heroImage}
                    alt={data.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 origin-center"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="mb-8"
                    >
                        <Link to="/" className="inline-flex items-center gap-3 px-6 py-2 border border-white/20 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white hover:bg-champagne hover:text-obsidian hover:border-champagne transition-all duration-500 rounded-full">
                            <ArrowLeft className="w-3 h-3" /> Return to Firm Overview
                        </Link>
                    </motion.div>

                    <div className="overflow-hidden pb-4">
                        <SplitText
                            text={data.title}
                            delay={0.2}
                            className="text-5xl md:text-7xl lg:text-[6rem] font-serif text-white font-light"
                        />
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-2xl text-champagne italic max-w-2xl mt-4"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 md:px-12">
                {/* Magazine Editorial Overview */}
                <section className="mb-32">
                    <div className="flex items-center gap-6 mb-12">
                        <div className="w-16 h-[1px] bg-champagne"></div>
                        <h2 className="text-xs text-champagne uppercase tracking-[0.3em] font-medium">The Approach</h2>
                    </div>

                    <div className="prose prose-invert max-w-none">
                        {/* Lede / First Sentence styling */}
                        <p className="text-2xl md:text-4xl font-light text-white leading-relaxed md:leading-[1.4] mb-8 lg:pr-12">
                            {/* Giant Drop Cap */}
                            <span className="float-left text-7xl md:text-8xl lg:text-[8rem] font-serif text-champagne leading-none pr-6 pt-2 pb-4">
                                {data.overview.charAt(0)}
                            </span>
                            {/* The rest of the first sentence */}
                            {data.overview.slice(1).split('.')[0]}.
                        </p>
                        {/* The rest of the paragraph */}
                        <p className="text-lg md:text-xl font-light text-alabaster-muted leading-loose clear-left max-w-3xl ml-auto border-l border-white/10 pl-8">
                            {data.overview.split('.').slice(1).join('.').trim()}
                        </p>
                    </div>
                </section>

                {/* Staggered Glass Grid Process */}
                <section className="mb-32">
                    <div className="flex items-center justify-end gap-6 mb-16 text-right">
                        <h2 className="text-xs text-champagne uppercase tracking-[0.3em] font-medium">Strategic Protocol</h2>
                        <div className="w-16 h-[1px] bg-champagne"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                        {data.process.map((p: any, idx: number) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className={`relative p-10 lg:p-12 bg-white/[0.02] border border-white/5 hover:border-champagne/30 transition-colors duration-500 group overflow-hidden ${idx % 2 === 1 ? 'md:mt-12' : ''}`}
                            >
                                {/* Giant Watermark Number */}
                                <div className="absolute -bottom-8 -right-4 text-[8rem] lg:text-[12rem] font-serif text-white/[0.03] group-hover:text-champagne/[0.05] transition-colors duration-1000 select-none pointer-events-none leading-none">
                                    0{idx + 1}
                                </div>

                                <div className="relative z-10">
                                    <div className="text-xs uppercase tracking-widest text-champagne mb-4 font-medium flex items-center gap-3">
                                        Phase {idx + 1} <span className="w-4 h-[1px] bg-champagne/50"></span>
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-serif text-white mb-4 group-hover:text-champagne transition-colors duration-500">{p.step}</h3>
                                    <p className="text-alabaster-muted font-light leading-relaxed">{p.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Critical Insight Louisiana Context Box */}
                <section className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="p-10 md:p-16 bg-obsidian-light border-l-4 border-champagne relative shadow-2xl overflow-hidden group"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-champagne/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-champagne/10 text-champagne rounded-sm">
                                    <AlertTriangle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-serif text-white">Critical Insight</h2>
                                    <p className="text-[10px] uppercase tracking-[0.3em] text-champagne mt-1 font-medium">Louisiana Legal Context</p>
                                </div>
                            </div>

                            <p className="text-lg md:text-xl text-alabaster/90 font-light leading-loose">
                                {data.louisianaContext.replace('CRITICAL: ', '')}
                            </p>
                        </div>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
