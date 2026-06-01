import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

interface ScrubTextProps {
    text: string;
    className?: string;
}

const Word = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const characters = children.split("");
    const amount = range[1] - range[0];
    const step = amount / children.length;

    return (
        <span className="relative mr-[1ex] mt-[0.25em]">
            {characters.map((char, i) => {
                const start = range[0] + step * i;
                const end = range[0] + step * (i + 1);
                return (
                    <Character key={i} progress={progress} range={[start, end]}>
                        {char}
                    </Character>
                );
            })}
        </span>
    );
};

const Character = ({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) => {
    const opacity = useTransform(progress, range, [0.1, 1]);
    return (
        <motion.span style={{ opacity }} className="inline-block transition-opacity duration-100">
            {children}
        </motion.span>
    );
};

export default function ScrubText({ text, className = "" }: ScrubTextProps) {
    const container = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start 85%", "start 30%"]
    });

    const words = text.split(" ");

    return (
        <p ref={container} className={`flex flex-wrap ${className}`}>
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>
                        {word}
                    </Word>
                );
            })}
        </p>
    );
}
