import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";
import Magnetic from "./animations/Magnetic";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, scale: 0.95, pointerEvents: "none" as const },
    open: { opacity: 1, scale: 1, pointerEvents: "auto" as const }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? "bg-obsidian/75 backdrop-blur-xl border-white/5 py-4 shadow-2xl shadow-obsidian/50"
          : "bg-transparent border-transparent py-8"
          }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className={`w-10 h-10 border flex items-center justify-center transition-colors duration-500 ${isScrolled ? 'border-champagne/50 group-hover:border-champagne' : 'border-white/30 group-hover:border-white'}`}>
              <span className={`font-serif text-2xl leading-none transition-colors duration-500 ${isScrolled ? 'text-champagne' : 'text-white'}`}>D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-[0.2em] uppercase text-alabaster leading-none">
                Doggett
              </span>
              <span className={`text-[0.65rem] tracking-[0.3em] uppercase leading-none mt-1 transition-colors duration-500 ${isScrolled ? 'text-champagne' : 'text-alabaster-muted'}`}>
                Law Firm
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            {["Expertise", "Results", "The Firm", "Contact"].map((item) => (
              <React.Fragment key={item}>
                <Magnetic intensity={0.15}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 relative group block ${isScrolled ? 'text-alabaster-muted hover:text-white' : 'text-white/80 hover:text-white'}`}
                  >
                    {item}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-champagne transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </Magnetic>
              </React.Fragment>
            ))}

            <a href="tel:3188883644" className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${isScrolled ? 'text-champagne hover:text-white' : 'text-champagne hover:text-white'}`}>
              (318) 888-3644
            </a>

            <Magnetic intensity={0.2}>
              <a
                href="#contact"
                className={`px-7 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-500 block ${isScrolled
                  ? "bg-champagne text-obsidian hover:bg-white"
                  : "bg-white text-obsidian hover:bg-champagne hover:text-white"
                  }`}
              >
                Consultation
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white z-50 relative p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-obsidian flex flex-col justify-center items-center"
          >
            <div className="absolute inset-0 bg-noise opacity-20"></div>
            <div className="flex flex-col items-center gap-8 z-10">
              {["Expertise", "Results", "The Firm", "Contact"].map((item, i) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif text-white hover:text-champagne transition-colors"
                >
                  <span className="text-sm font-sans text-champagne mr-4 opacity-60">0{i + 1}</span>
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                href="tel:3188883644"
                className="text-xl font-serif text-champagne hover:text-white transition-colors mt-4"
              >
                (318) 888-3644
              </motion.a>
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 px-8 py-4 border border-champagne text-champagne text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-colors"
              >
                Request Private Consultation
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
