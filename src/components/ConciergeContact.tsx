import { motion } from "motion/react";
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

  return (
    <section id="contact" className="py-32 bg-obsidian relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>
      
      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-6">
            Initiate a <span className="italic text-champagne">Private Consultation</span>
          </h2>
          <p className="text-alabaster/60 font-light text-sm max-w-xl mx-auto">
            Please provide preliminary details regarding your situation. All inquiries are strictly confidential and reviewed directly by our senior legal team.
          </p>
        </div>

        <div className="bg-obsidian-light border border-white/10 p-8 md:p-16 relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 h-1 bg-white/5 w-full">
            <motion.div 
              className="h-full bg-champagne"
              initial={{ width: "33%" }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="min-h-[300px] flex flex-col justify-center">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-serif text-alabaster mb-6">01. Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-alabaster/50">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-alabaster focus:outline-none focus:border-champagne transition-colors"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-alabaster/50">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-alabaster focus:outline-none focus:border-champagne transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-alabaster/50">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full bg-transparent border-b border-white/20 pb-2 text-alabaster focus:outline-none focus:border-champagne transition-colors"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="flex justify-end pt-8">
                  <button 
                    onClick={handleNext}
                    className="px-8 py-3 bg-white text-obsidian text-xs uppercase tracking-widest font-medium hover:bg-champagne transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-serif text-alabaster mb-6">02. Area of Inquiry</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["Personal Injury", "Family Law", "Succession"].map((type) => (
                    <button
                      key={type}
                      onClick={() => setFormData({...formData, inquiryType: type})}
                      className={`p-6 border text-sm tracking-wide transition-all ${
                        formData.inquiryType === type 
                          ? "border-champagne text-champagne bg-champagne/5" 
                          : "border-white/10 text-alabaster/60 hover:border-white/30"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between pt-8">
                  <button 
                    onClick={handlePrev}
                    className="px-8 py-3 border border-white/20 text-alabaster text-xs uppercase tracking-widest hover:border-white/50 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={handleNext}
                    disabled={!formData.inquiryType}
                    className="px-8 py-3 bg-white text-obsidian text-xs uppercase tracking-widest font-medium hover:bg-champagne transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <h3 className="text-xl font-serif text-alabaster mb-6">03. Brief Details</h3>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-alabaster/50">How can we assist you?</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-transparent border-b border-white/20 pb-2 text-alabaster focus:outline-none focus:border-champagne transition-colors resize-none"
                    value={formData.details}
                    onChange={(e) => setFormData({...formData, details: e.target.value})}
                    placeholder="Message..."
                  />
                </div>
                <p className="text-[10px] text-alabaster/40 leading-relaxed italic">
                  *Please do not include confidential or sensitive information in your message. In the event that we are representing a party with opposing interests to your own, we may have a duty to disclose any information you provide to our client.
                </p>
                <div className="flex justify-between pt-8">
                  <button 
                    onClick={handlePrev}
                    className="px-8 py-3 border border-white/20 text-alabaster text-xs uppercase tracking-widest hover:border-white/50 transition-colors"
                  >
                    Back
                  </button>
                  <button 
                    onClick={() => {
                      // Handle submission
                      alert("Thank you. Our office will contact you shortly.");
                      setStep(1);
                      setFormData({name: "", email: "", phone: "", inquiryType: "", details: ""});
                    }}
                    className="px-8 py-3 bg-champagne text-obsidian text-xs uppercase tracking-widest font-medium hover:bg-white transition-colors"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
