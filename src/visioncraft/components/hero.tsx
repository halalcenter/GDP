import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={containerRef} className="relative h-[200vh]">
      {/* Sticky Hero Content */}
      <motion.div
        style={{ scale, opacity,
          backgroundImage: "url('/bag.png')",
          backgroundSize: "cover",
          backgroundPosition: "center", }}
        className="sticky top-0 h-screen w-full flex flex-col items-center justify-center"
      >
        {/* Background layers */}
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125 md:hidden"
          style={{ backgroundImage: "url('/bag.png')" }}
        ></div>
        <div
          className="absolute inset-0 bg-cover bg-center brightness-125 hidden md:block"
          style={{ backgroundImage: "url('/bag.png')" }}
        ></div>

        {/* Foreground content */}
        <div className="z-10 text-center px-4">
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src="/visioncraft.png"
            alt="visioncraft"
            className="mx-auto w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
          />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-vision-gold font-neoneon text-center md:text-5xl mb-2 z-10"
        >
          UI/UX Bootcamp
          <br />
          By GDP - GraphiXel
        </motion.p>
      </motion.div>
    </section>
  );
};

export default Hero;
