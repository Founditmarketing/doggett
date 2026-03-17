import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MobileFAB from "./components/MobileFAB";
import Home from "./pages/Home";
import PracticeArea from "./pages/PracticeArea";
import About from "./pages/About";
import Results from "./pages/Results";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./components/ScrollToTop";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ReactLenis } from "lenis/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading for the dramatic reveal
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  const content = (
    <div className="min-h-screen bg-obsidian text-alabaster selection:bg-champagne selection:text-obsidian">

      {/* Cinematic Preloader */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col items-center justify-center"
          >
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif text-3xl md:text-5xl tracking-[0.3em] text-white uppercase"
              >
                Doggett
              </motion.div>
            </div>
            <div className="overflow-hidden mt-4">
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs md:text-sm tracking-[0.4em] text-champagne uppercase"
              >
                Law Firm
              </motion.div>
            </div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "200px" }}
              transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              className="h-[1px] bg-white/20 mt-8"
            />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-obsidian text-alabaster selection:bg-champagne selection:text-obsidian flex flex-col relative">
        <Router>
          <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-champagne text-obsidian px-6 py-3 font-medium text-sm font-sans tracking-widest uppercase shadow-lg">
            Skip to main content
          </a>
          <ScrollToTop />
          <Navbar />
          <main id="main-content" className="flex-1 w-full" aria-label="Main Content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/practice/:id" element={<PracticeArea />} />
              <Route path="/about" element={<About />} />
              <Route path="/results" element={<Results />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
          <MobileFAB />
        </Router>
      </div>
    </div>
  );

  if (isMobile) {
    return content;
  }

  return (
    <ReactLenis root options={{ lerp: 0.05, duration: 1.5, smoothWheel: true }}>
      {content}
    </ReactLenis>
  );
}
