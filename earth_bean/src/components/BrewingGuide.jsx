import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, Droplet, Zap, Filter, Snowflake } from 'lucide-react';

const BrewingGuide = () => {
  const [activeMethod, setActiveMethod] = useState(0);

  const brewingMethods = [
    {
      icon: Coffee,
      name: 'French Press',
      time: '4-5 minutes',
      grind: 'Coarse',
      ratio: '1:15',
      steps: [
        'Heat water to 200°F (93°C)',
        'Add coarse ground coffee to press',
        'Pour hot water and stir gently',
        'Place lid and steep for 4 minutes',
        'Press plunger slowly and serve'
      ],
      tip: 'Perfect for a rich, full-bodied cup with natural oils'
    },
    {
      icon: Droplet,
      name: 'V60',
      time: '2.5-3 minutes',
      grind: 'Medium-fine',
      ratio: '1:16',
      steps: [
        'Rinse filter with hot water',
        'Add medium-fine ground coffee',
        'Bloom with 2x coffee weight water for 30s',
        'Pour in circular motion in stages',
        'Total brew time: 2.5-3 minutes'
      ],
      tip: 'Highlights bright, complex flavors and clarity'
    },
    {
      icon: Zap,
      name: 'Espresso',
      time: '25-30 seconds',
      grind: 'Fine',
      ratio: '1:2',
      steps: [
        'Preheat machine and portafilter',
        'Dose 18-20g of fine ground coffee',
        'Distribute and tamp evenly',
        'Extract for 25-30 seconds',
        'Aim for 36-40g output'
      ],
      tip: 'Intense, concentrated shot with rich crema'
    },
    {
      icon: Filter,
      name: 'Filter/Drip',
      time: '5-6 minutes',
      grind: 'Medium',
      ratio: '1:17',
      steps: [
        'Use fresh, filtered water',
        'Add medium ground coffee to filter',
        'Ensure even distribution',
        'Start brew cycle',
        'Serve immediately for best flavor'
      ],
      tip: 'Clean, balanced cup perfect for daily drinking'
    },
    {
      icon: Snowflake,
      name: 'Cold Brew',
      time: '12-24 hours',
      grind: 'Extra coarse',
      ratio: '1:8',
      steps: [
        'Combine coarse coffee with cold water',
        'Stir to ensure all grounds are wet',
        'Cover and refrigerate 12-24 hours',
        'Strain through fine mesh or filter',
        'Dilute concentrate to taste'
      ],
      tip: 'Smooth, low-acid coffee perfect for hot days'
    }
  ];

  const currentMethod = brewingMethods[activeMethod];
  const Icon = currentMethod.icon;

  return (
    <section className="section-padding bg-coffee-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold-400 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Brewing Mastery
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white mb-4"
          >
            How to Brew Your Coffee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-cream-100 max-w-2xl mx-auto"
          >
            Master the art of brewing with our expert guides
          </motion.p>
        </div>

        {/* Method Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {brewingMethods.map((method, index) => {
            const MethodIcon = method.icon;
            return (
              <button
                key={index}
                onClick={() => setActiveMethod(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeMethod === index
                    ? 'bg-gold-500 text-coffee-900 shadow-lg scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <MethodIcon className="w-5 h-5" strokeWidth={2} />
                <span>{method.name}</span>
              </button>
            );
          })}
        </div>

        {/* Method Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeMethod}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20">
              {/* Method Header */}
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-xl">
                  <Icon className="w-10 h-10 text-coffee-900" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-3xl font-serif text-white mb-2">{currentMethod.name}</h3>
                  <div className="flex flex-wrap gap-4 text-sm text-cream-100">
                    <span>⏱️ {currentMethod.time}</span>
                    <span>🔸 {currentMethod.grind} grind</span>
                    <span>⚖️ {currentMethod.ratio} ratio</span>
                  </div>
                </div>
              </div>

              {/* Steps */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gold-300 mb-4">Brewing Steps</h4>
                <ol className="space-y-3">
                  {currentMethod.steps.map((step, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold-500 text-coffee-900 font-bold flex items-center justify-center text-sm">
                        {index + 1}
                      </span>
                      <span className="text-cream-100 pt-1">{step}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>

              {/* Tip */}
              <div className="bg-gold-500/20 border border-gold-400/30 rounded-xl p-4">
                <p className="text-gold-200">
                  <span className="font-semibold text-gold-300">💡 Pro Tip: </span>
                  {currentMethod.tip}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Optional: YouTube Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-cream-100 mb-4">Want to see it in action?</p>
          <button className="px-8 py-4 bg-white text-coffee-900 rounded-full font-semibold hover:bg-gold-400 hover:text-coffee-900 transition-all duration-300 shadow-lg hover:shadow-xl">
            Watch Video Tutorials
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrewingGuide;
