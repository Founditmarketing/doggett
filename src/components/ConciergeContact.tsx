import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

export default function ConciergeContact() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    details: ""
  });

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0
    })
  };

  const [direction, setDirection] = useState(1);

  const navigate = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const inputClasses = "w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-light focus:outline-none focus:border-champagne transition-colors placeholder-white/20";

  return (
    <section id="contact" className="py-32 md:py-48 bg-obsidian relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[url('/assets/contact_confidential_setting_1773349805860.png')] bg-cover bg-center opacity-10 mix-blend-luminosity"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent"></div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-16 h-16 border border-champagne/30 mx-auto mb-8 flex items-center justify-center rotate-45"
          >
            <div className="w-12 h-12 border border-champagne/10 -rotate-45 flex items-center justify-center flex-col">
              <span className="text-champagne font-serif text-xl leading-none">D</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-light mb-6 text-white"
          >
            Initiate a <span className="italic text-champagne">Confidential Inquiry.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-alabaster-muted font-light text-sm max-w-xl mx-auto"
          >
            Submit preliminary details regarding your matter. All correspondence is strictly confidential and reviewed exclusively by our senior legal team.
          </motion.p>
        </div>

        <div className="glass-panel relative overflow-hidden shadow-2xl">
          {/* Elegant Progress Line */}
          <div className="absolute top-0 left-0 h-[2px] bg-white/5 w-full z-20">
            <motion.div
              className="h-full bg-champagne"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </div>

          <div className="p-8 md:p-16 min-h-[450px] relative flex flex-col justify-center">
            <AnimatePresence mode="wait" custom={direction}>
              {step === 1 && (
                <motion.div
                  key="step1"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-10 w-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-champagne font-serif text-2xl italic">01.</span>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-alabaster">Identify Yourself</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-champagne/80 font-medium">Full Legal Name</label>
                      <input
                        type="text"
                        className={inputClasses}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] uppercase tracking-widest text-champagne/80 font-medium">Direct Telephone</label>
                      <input
                        type="tel"
                        className={inputClasses}
                        placeholder="(555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="space-y-3 md:col-span-2">
                      <label className="text-[10px] uppercase tracking-widest text-champagne/80 font-medium">Electronic Mail</label>
                      <input
                        type="email"
                        className={inputClasses}
                        placeholder="john.doe@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-8">
                    <button
                      onClick={() => navigate(2)}
                      disabled={!formData.name || (!formData.email && !formData.phone)}
                      className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white disabled:opacity-30 transition-all"
                    >
                      <span className="transition-colors group-hover:text-champagne">Proceed</span>
                      <span className="w-12 h-[1px] bg-white group-hover:bg-champagne group-hover:w-16 transition-all duration-300"></span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-10 w-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-champagne font-serif text-2xl italic">02.</span>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-alabaster">Nature of Request</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {["Personal Injury", "Family Law", "Succession"].map((type) => (
                      <button
                        key={type}
                        onClick={() => setFormData({ ...formData, inquiryType: type })}
                        className={`py-8 px-6 border transition-all duration-300 flex flex-col items-center justify-center gap-4 group ${formData.inquiryType === type
                          ? "border-champagne bg-champagne/5 text-champagne"
                          : "border-white/10 text-alabaster-muted hover:border-white/30 hover:text-white"
                          }`}
                      >
                        <div className={`w-2 h-2 rounded-full transition-colors ${formData.inquiryType === type ? 'bg-champagne' : 'bg-transparent border border-white/20 group-hover:border-white/50'}`}></div>
                        <span className="text-xs uppercase tracking-[0.15em] text-center">{type}</span>
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-8">
                    <button
                      onClick={() => navigate(1)}
                      className="text-[10px] uppercase tracking-widest text-alabaster-muted hover:text-white transition-colors"
                    >
                      &larr; Return
                    </button>
                    <button
                      onClick={() => navigate(3)}
                      disabled={!formData.inquiryType}
                      className="group flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-white disabled:opacity-30 transition-all"
                    >
                      <span className="transition-colors group-hover:text-champagne">Proceed</span>
                      <span className="w-12 h-[1px] bg-white group-hover:bg-champagne group-hover:w-16 transition-all duration-300"></span>
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-10 w-full"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-champagne font-serif text-2xl italic">03.</span>
                    <h3 className="text-xs uppercase tracking-[0.3em] text-alabaster">Executive Summary</h3>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] uppercase tracking-widest text-champagne/80 font-medium">Brief Description of Circumstances</label>
                    <textarea
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Please delineate your situation..."
                    />
                  </div>
                  <p className="text-[10px] text-alabaster/30 leading-relaxed max-w-2xl font-light">
                    * By submitting this inquiry, you acknowledge that transmission of information does not create an attorney-client relationship. Do not submit sensitive or classified materials via this initial form.
                  </p>

                  <div className="flex justify-between items-center pt-8">
                    <button
                      onClick={() => navigate(2)}
                      className="text-[10px] uppercase tracking-widest text-alabaster-muted hover:text-white transition-colors"
                    >
                      &larr; Return
                    </button>
                    <button
                      onClick={() => {
                        alert("Inquiry Dispatched. A member of our team will coordinate with you shortly.");
                        navigate(1);
                        setFormData({ name: "", email: "", phone: "", inquiryType: "", details: "" });
                      }}
                      className="px-10 py-4 bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] font-medium hover:bg-white transition-colors duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)]"
                    >
                      Dispatch Inquiry
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
