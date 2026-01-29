import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const narrativeSteps = [
    {
      title: "The Raw Cherry",
      description: "It all starts with a single cherry, hand-picked at peak ripeness from the high-altitude volcanic soils.",
      color: "from-red-600/80 to-green-700/80", // Placeholder gradient
      bg: "bg-stone-200"
    },
    {
      title: "The Roast",
      description: "Carefully roasted in small batches to unlock complex aromas of chocolate and spice.",
      color: "from-amber-700/80 to-stone-900/80",
      bg: "bg-amber-50"
    },
    {
      title: "The Grind",
      description: "Precision ground to ensure the perfect extraction, releasing the soul of the bean.",
      color: "from-stone-800 to-stone-950",
      bg: "bg-stone-300"
    },
    {
      title: "Earth & Bean",
      description: "Delivered to you. Pure, ethical, and an experience in every cup.",
      color: "from-coffee-800 to-coffee-600",
      bg: "bg-cream-50"
    }
  ];

  // Opacity transforms for each step
  const opacity1 = useTransform(scrollYProgress, [0, 0.2, 0.25], [1, 1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.25], [1, 0.8]);

  const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0]);
  const scale2 = useTransform(scrollYProgress, [0.25, 0.55], [0.8, 1]);

  const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.8, 0.85], [0, 1, 1, 0]);
  const scale3 = useTransform(scrollYProgress, [0.55, 0.85], [0.8, 1]);

  const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 1], [0, 1, 1]);
  const scale4 = useTransform(scrollYProgress, [0.85, 1], [0.8, 1]);

  return (
    <section ref={targetRef} className="relative h-[400vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0 transition-colors duration-700 ease-in-out bg-cream-50" />

        {/* Narrative Container */}
        <div className="relative w-full max-w-6xl mx-auto px-6 h-full flex flex-col justify-center items-center">
           
           {/* Step 1: Cherry */}
           <motion.div style={{ opacity: opacity1, scale: scale1 }} className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl z-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className={`w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br ${narrativeSteps[0].color} shadow-inner flex items-center justify-center`}>
                    <span className="text-white font-serif italic text-2xl">Raw Cherry Image</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-coffee-900 mb-6">{narrativeSteps[0].title}</h2>
                <p className="text-xl text-coffee-700 font-light leading-relaxed">{narrativeSteps[0].description}</p>
              </div>
           </motion.div>

           {/* Step 2: Roast */}
           <motion.div style={{ opacity: opacity2, scale: scale2 }} className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl z-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className={`w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br ${narrativeSteps[1].color} shadow-inner flex items-center justify-center`}>
                     <span className="text-white font-serif italic text-2xl">Roasted Bean Image</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-coffee-900 mb-6">{narrativeSteps[1].title}</h2>
                <p className="text-xl text-coffee-700 font-light leading-relaxed">{narrativeSteps[1].description}</p>
              </div>
           </motion.div>

           {/* Step 3: Grind */}
           <motion.div style={{ opacity: opacity3, scale: scale3 }} className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl z-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className={`w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br ${narrativeSteps[2].color} shadow-inner flex items-center justify-center`}>
                    <span className="text-white font-serif italic text-2xl">Ground Coffee Image</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-coffee-900 mb-6">{narrativeSteps[2].title}</h2>
                <p className="text-xl text-coffee-700 font-light leading-relaxed">{narrativeSteps[2].description}</p>
              </div>
           </motion.div>

           {/* Step 4: Package */}
           <motion.div style={{ opacity: opacity4, scale: scale4 }} className="absolute inset-0 flex items-center justify-center">
              <div className="text-center max-w-2xl z-10 p-8 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <div className={`w-64 h-64 mx-auto mb-8 rounded-full bg-gradient-to-br ${narrativeSteps[3].color} shadow-inner flex items-center justify-center`}>
                    <span className="text-white font-serif italic text-2xl">Product Image</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-serif text-coffee-900 mb-6">{narrativeSteps[3].title}</h2>
                <p className="text-xl text-coffee-700 font-light leading-relaxed">{narrativeSteps[3].description}</p>
                <button className="mt-8 px-8 py-3 bg-coffee-800 text-cream-50 font-serif text-lg tracking-wider rounded-full hover:bg-coffee-700 transition-colors">
                    Shop Collection
                </button>
              </div>
           </motion.div>

      </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50 z-20">
         <span className="text-coffee-900 text-sm tracking-widest uppercase">Scroll to Explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
