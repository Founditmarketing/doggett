import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { motion } from "motion/react";

const practiceData: Record<string, any> = {
    "personal-injury": {
        title: "Personal Injury",
        subtitle: "Unflinching Advocacy for the Injured",
        heroImage: "/assets/practice_personal_injury_1773349744037.png",
        overview: "If you are hurt in a car wreck or any other way through someone else’s carelessness, things can change in a split second. Our approach to Personal Injury litigation is aggressive, meticulous, and entirely unflinching. We handle catastrophic car and trucking accidents, offshore accidents, severe slip and falls, dog bites, and special victim representation.",
        process: [
            { step: "Immediate Investigation", desc: "We deploy forensic teams to secure crucial evidence before it disappears or gets covered up by corporate defense." },
            { step: "Medical Coordination", desc: "Ensure you receive world-class medical evaluation to fully document the catastrophic nature of your injuries for maximum recovery." },
            { step: "Aggressive Negotiation", desc: "Dismantling insurance company delay-and-deny tactics through overwhelming evidentiary leverage." },
            { step: "Trial Readiness", desc: "We prepare every case as if it will go to trial, which paradoxically forces the highest settlements." }
        ],
        louisianaContext: "CRITICAL: Louisiana enforces one of the strictest statutes of limitations in the country. You possess exactly one year from the date of the incident (prescriptive period) to file a lawsuit in most injury cases. Furthermore, Louisiana follows a 'comparative fault' system, meaning insurance companies will forcefully attempt to blame you for your own injuries to reduce their payout. Do not speak to them without representation.",
    },
    "family-law": {
        title: "Family Law",
        subtitle: "Protecting Your Legacy and Bloodline",
        heroImage: "/assets/practice_family_law_1773349757645.png",
        overview: "High net-worth divorces and complex custody disputes require discretion, tactical precision, and an ironclad understanding of asset division. We protect your privacy, your children, and your financial legacy with unwavering loyalty. We handle complex business valuations, hidden assets, and severe litigation with a composed hostility that ensures your empire remains intact.",
        process: [
            { step: "Strategic Assessment", desc: "A confidential mapping of all marital assets, business interests, and custody leverage points." },
            { step: "Asset Protection", desc: "Deploying forensic accountants to trace hidden accounts and defend your personal wealth from aggressive opposing counsel." },
            { step: "Custody Architecture", desc: "Building an irrefutable case for parental fitness and securing living arrangements that prioritize your relationship with your children." },
            { step: "Final Resolution", desc: "Whether through surgical mediation or relentless courtroom litigation, we secure your future." }
        ],
        louisianaContext: "Louisiana operates under community property laws, meaning most assets acquired during the marriage are presumed to be owned jointly, 50/50. Dividing complex estates, 401ks, and family-owned LLCs requires deep financial litigation expertise. Fault (such as adultery or abuse) can drastically impact spousal support (alimony) awards under Louisiana law.",
    },
    "succession-law": {
        title: "Succession Law",
        subtitle: "Preserving the Aristocratic Estate",
        heroImage: "/assets/practice_succession_1773349772080.png",
        overview: "Creating a basic estate plan can save your family the burden of making important decisions after you pass away. Having a plan in place offers you the best chance of ensuring that your wishes regarding the distribution of your assets will be followed. We handle sophisticated succession planning, trust formulation, and probate litigation to ensure your legacy remains intact.",
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

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!data) return <div className="min-h-screen flex items-center justify-center text-white">Area not found.</div>;

    return (
        <div className="bg-obsidian min-h-screen text-alabaster pt-32 pb-24">
            {/* Hero Header */}
            <div className="relative h-[40vh] md:h-[60vh] w-full overflow-hidden mb-24">
                <div className="absolute inset-0 bg-obsidian/40 z-10 mix-blend-multiply border-b border-champagne/20"></div>
                <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover grayscale opacity-50" />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center">
                    <Link to="/" className="text-champagne flex items-center gap-2 text-xs uppercase tracking-widest hover:text-white transition-colors mb-8">
                        <ArrowLeft className="w-4 h-4" /> Return to Firm Overview
                    </Link>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        {data.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-champagne italic max-w-2xl"
                    >
                        {data.subtitle}
                    </motion.p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 md:px-12">
                {/* Overview */}
                <section className="mb-24">
                    <h2 className="text-sm text-champagne uppercase tracking-[0.3em] mb-8 flex items-center gap-4">
                        <div className="w-8 h-[1px] bg-champagne"></div>
                        The Approach
                    </h2>
                    <p className="text-xl md:text-2xl font-light leading-relaxed text-alabaster-muted">
                        {data.overview}
                    </p>
                </section>

                {/* Process */}
                <section className="mb-24">
                    <h2 className="text-sm text-champagne uppercase tracking-[0.3em] mb-12 flex items-center gap-4">
                        <div className="w-8 h-[1px] bg-champagne"></div>
                        Strategic Protocol
                    </h2>
                    <div className="space-y-12">
                        {data.process.map((p: any, idx: number) => (
                            <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-12 group">
                                <div className="text-champagne font-serif text-4xl opacity-50 group-hover:opacity-100 transition-opacity">
                                    0{idx + 1}.
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif text-white mb-3">{p.step}</h3>
                                    <p className="text-alabaster-muted font-light leading-relaxed">{p.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Louisiana Context */}
                <section className="p-8 md:p-12 border border-champagne/20 bg-champagne/5 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-champagne/10 blur-[50px]"></div>
                    <h2 className="text-2xl font-serif text-white mb-6 flex items-center gap-4 relative z-10">
                        Louisiana Legal Context
                    </h2>
                    <p className="text-alabaster-muted font-light leading-loose relative z-10">
                        {data.louisianaContext}
                    </p>
                </section>
            </div>
        </div>
    );
}
