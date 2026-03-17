import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

export default function MobileFAB() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Delay appearance slightly so it doesn't clash with the preloader
        const timer = setTimeout(() => setIsVisible(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 15, stiffness: 100 }}
            className="md:hidden fixed bottom-6 right-6 z-50"
        >
            {/* Outer Pulse Ring */}
            <motion.div
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-full bg-champagne/20"
            />

            {/* Interactive Button */}
            <a
                href="tel:318-888-3644"
                className="relative flex items-center justify-center w-14 h-14 rounded-full bg-obsidian/90 backdrop-blur-md border border-champagne/40 text-champagne shadow-[0_8px_32px_rgba(0,0,0,0.5)] active:scale-90 transition-transform"
            >
                <Phone className="w-6 h-6 fill-champagne/20" />
            </a>
        </motion.div>
    );
}
