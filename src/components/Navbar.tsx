import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-obsidian/90 backdrop-blur-md py-4 shadow-lg shadow-black/20" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 border border-champagne flex items-center justify-center">
            <span className="font-serif text-champagne text-xl leading-none">D</span>
          </div>
          <span className="font-serif text-2xl tracking-widest uppercase text-alabaster">
            Doggett <span className="text-champagne">Law</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {["Expertise", "Results", "The Firm", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-sm uppercase tracking-widest text-alabaster/70 hover:text-champagne transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2 border border-champagne text-champagne text-sm uppercase tracking-widest hover:bg-champagne hover:text-obsidian transition-all duration-300"
          >
            Private Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-alabaster"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-obsidian border-b border-white/10"
        >
          <div className="flex flex-col px-6 py-8 gap-6">
            {["Expertise", "Results", "The Firm", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif uppercase tracking-widest text-alabaster/80 hover:text-champagne"
              >
                {item}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
