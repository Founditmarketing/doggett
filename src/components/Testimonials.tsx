import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
    {
        quote: "Mr. Doggett achieved more in a few months for my child custody case than previous attorneys had in years. He demonstrated immense compassion and confidence throughout the entire process.",
        author: "Former Client",
        context: "Family Law - Child Custody"
    },
    {
        quote: "Kenneth Doggett, Jr. is a hardworking, honest lawyer that uses facts. The firm has a great response time, and the attorney communicates with clients even on weekends and holidays.",
        author: "Former Client",
        context: "Personal Injury & Litigation"
    },
    {
        quote: "I am extremely grateful for their prompt and professional handling of emergency Power of Attorney papers. They were accessible, respectful, and highly effective when I needed them most.",
        author: "Out-of-State Client",
        context: "Succession & Estate Planning"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="py-16 md:py-20 bg-obsidian-light relative overflow-hidden border-t border-white/5">
            <div className="absolute inset-0 bg-[url('/assets/marble_columns_abstract_1773364755886.png')] bg-cover bg-center opacity-5 mix-blend-luminosity"></div>

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center mb-16">
                    <div className="w-12 h-[1px] bg-champagne mb-8"></div>
                    <span className="text-champagne text-[10px] uppercase tracking-[0.3em] font-medium mb-4">Verdicts & Validation</span>
                    <h2 className="text-3xl md:text-5xl font-serif text-white text-center">Uncompromising Results.</h2>
                </div>

                <div className="relative min-h-[300px]">
                    <Quote className="absolute -top-10 -left-6 md:-left-12 w-20 h-20 text-champagne/10 rotate-180" />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col items-center text-center px-4 md:px-12"
                        >
                            <p className="text-xl md:text-3xl font-light text-white leading-relaxed mb-10 italic">
                                "{testimonials[currentIndex].quote}"
                            </p>

                            <div className="flex flex-col items-center gap-2">
                                <span className="text-champagne font-serif text-xl">{testimonials[currentIndex].author}</span>
                                <span className="text-[10px] uppercase tracking-widest text-alabaster-muted">{testimonials[currentIndex].context}</span>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between pointer-events-none">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto p-2 text-white/30 hover:text-champagne transition-colors transform -translate-x-4 md:-translate-x-12"
                        >
                            <ChevronLeft className="w-8 h-8 md:w-10 md:h-10" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="pointer-events-auto p-2 text-white/30 hover:text-champagne transition-colors transform translate-x-4 md:translate-x-12"
                        >
                            <ChevronRight className="w-8 h-8 md:w-10 md:h-10" />
                        </button>
                    </div>
                </div>

                {/* Indicators */}
                <div className="flex justify-center gap-4 mt-12">
                    {testimonials.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-[2px] transition-all duration-500 ${idx === currentIndex ? 'w-12 bg-champagne' : 'w-4 bg-white/20 hover:bg-white/40'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
