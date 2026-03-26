import { motion } from "motion/react";

interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.08, delayChildren: delay * i },
        }),
    };

    const child = {
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
        hidden: {
            opacity: 0,
            y: 40,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            } as any,
        },
    };

    return (
        <motion.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", gap: "0.2EM" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={className}
        >
            {words.map((word, index) => (
                <span key={index} style={{ overflow: "hidden", display: "inline-block" }}>
                    <motion.span variants={child} style={{ display: "inline-block" }}>
                        {word}
                    </motion.span>
                    {/* Add non-breaking space after each word except the last to preserve natural spacing but prevent collapse */}
                    {index < words.length - 1 ? "\u00A0" : ""}
                </span>
            ))}
        </motion.div>
    );
}
