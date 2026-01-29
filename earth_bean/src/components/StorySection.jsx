import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const StorySection = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    
    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden">
             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                
                {/* Image Side */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                    <motion.div style={{scale: 1.1}} className="absolute inset-0 bg-coffee-800">
                         {/* Placeholder for Story Image */}
                         <div className="w-full h-full bg-coffee-200 flex items-center justify-center">
                            <span className="text-coffee-900/50 font-serif text-4xl">Farm Layout Image</span>
                         </div>
                    </motion.div>
                </div>

                {/* Text Side */}
                <motion.div ref={ref} style={{ y, opacity }} className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 leading-tight">
                        Cultivating Community,<br/>
                        <span className="italic text-coffee-600">Preserving Nature.</span>
                    </h2>
                    <p className="text-lg text-coffee-700 leading-relaxed">
                        At Earth & Bean, we believe that great coffee is more than just a drink—it's a relationship between the earth, the farmer, and you. Our beans are sourced directly from sustainable micro-lots where biodiversity thrives.
                    </p>
                    <p className="text-lg text-coffee-700 leading-relaxed">
                        Every cup you brew supports regenerative agriculture practices that heal the soil and ensure a vibrant future for coffee communities around the globe.
                    </p>
                    
                    <button className="group flex items-center gap-3 text-coffee-800 font-medium tracking-wide border-b border-coffee-800 pb-1 hover:text-coffee-600 hover:border-coffee-600 transition-all">
                        Read Our Full Story
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </motion.div>
             </div>
        </section>
    );
};

export default StorySection;
