import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import SplitText from "./animations/SplitText";
import Magnetic from "./animations/Magnetic";

function Starfield(props: any) {
  const ref = useRef<any>();

  // Generate a spherical distribution of 5,000 points
  const sphere = useMemo(() => {
    const float32Array = new Float32Array(5000 * 3);
    random.inSphere(float32Array, { radius: 1.5 });
    return float32Array;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Significantly reduce rotation speed to save CPU cycles on low-end processors
      ref.current.rotation.x -= delta / 30;
      ref.current.rotation.y -= delta / 40;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#d4af37" // Champagne gold
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.6}
        />
      </Points>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-obsidian">
      {/* Background with Parallax and WebGL */}
      <motion.div
        style={{ y: y1, scale, opacity }}
        className="absolute inset-0 z-0 origin-bottom"
      >
        {/* WebGL Particle Canvas (Behind the image base, or overlaid slightly if desired) */}
        <div className="absolute inset-0 z-20 mix-blend-screen opacity-50 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
            <Starfield />
          </Canvas>
        </div>

        {/* Video/Image Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-obsidian/50 mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/60 to-transparent z-10" />
          <img
            src="/assets/lady_justice_macro_hero.png"
            alt="Blind Justice Statue"
            className="w-full h-full object-cover object-center scale-105"
            referrerPolicy="no-referrer"
            fetchPriority="high"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-30 max-w-screen-xl mx-auto px-6 md:px-12 w-full flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 flex flex-col items-center gap-4"
        >
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-champagne/50"></div>
          <span className="text-champagne text-[10px] md:text-xs uppercase tracking-[0.4em] font-medium">
            Alexandria, Louisiana
          </span>
        </motion.div>

        <div className="overflow-hidden mb-6 py-2 flex flex-col items-center">
          <h1 className="flex justify-center w-full">
            <SplitText
              text="Serious Advocacy."
              delay={0.3}
              className="text-[4rem] sm:text-6xl md:text-[5.5rem] lg:text-[7.5rem] font-serif font-light leading-[1] max-w-6xl tracking-tight text-white justify-center drop-shadow-[0_4px_16px_rgba(212,175,55,0.4)] md:drop-shadow-none"
            />
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-base md:text-lg text-alabaster-muted max-w-2xl font-light mb-16 leading-relaxed md:leading-loose px-4"
        >
          Doggett Law Firm represents clients in personal injury, family law, and succession matters throughout Louisiana. I provide direct, strategic representation tailored to the facts.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row gap-8 items-center"
        >
          <Magnetic intensity={0.3}>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="tel:3188883644"
              className="group flex justify-center items-center px-8 lg:px-12 py-5 bg-champagne text-obsidian text-xs uppercase tracking-[0.2em] relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] block"
            >
              <span className="relative z-10 font-medium transition-colors duration-500 group-hover:text-white">Start Free Consultation</span>
              <div className="absolute inset-0 bg-obsidian transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0 ease-out z-0"></div>
            </motion.a>
          </Magnetic>
          <Magnetic intensity={0.2}>
            <motion.a
              whileTap={{ scale: 0.95 }}
              href="#expertise"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('expertise')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group text-xs uppercase tracking-[0.2em] text-white flex items-center gap-4 transition-colors duration-300 hover:text-champagne block cursor-pointer"
            >
              <span className="w-8 h-[1px] bg-white/30 group-hover:bg-champagne group-hover:w-16 transition-all duration-500"></span>
              Explore My Practice
            </motion.a>
          </Magnetic>
        </motion.div>
      </div>

      {/* Modern Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:flex items-center gap-4 rotate-90 origin-right cursor-pointer hover:opacity-100 opacity-80 transition-opacity z-50"
        onClick={() => document.getElementById('the-firm')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.4em] text-white font-medium translate-x-12 aria-hidden">Scroll</span>
        <motion.div
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-20 h-[2px] bg-champagne drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]"
        />
      </motion.div>
    </section>
  );
}
