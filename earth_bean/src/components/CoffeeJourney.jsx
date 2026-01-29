import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Flame, Package as PackageIcon, Truck } from 'lucide-react';

const CoffeeJourney = () => {
  const journeySteps = [
    {
      icon: Leaf,
      title: 'Farm',
      description: 'Hand-picked from sustainable farms at peak ripeness',
      color: 'from-leaf-800 to-leaf-900'
    },
    {
      icon: Droplets,
      title: 'Harvest',
      description: 'Carefully processed using traditional methods',
      color: 'from-coffee-600 to-coffee-700'
    },
    {
      icon: Flame,
      title: 'Roasting',
      description: 'Small-batch roasting to unlock unique flavors',
      color: 'from-coffee-700 to-coffee-900'
    },
    {
      icon: PackageIcon,
      title: 'Packaging',
      description: 'Sealed fresh in eco-friendly materials',
      color: 'from-gold-600 to-coffee-800'
    },
    {
      icon: Truck,
      title: 'Shipping',
      description: 'Delivered to your door within 24 hours',
      color: 'from-coffee-800 to-coffee-900'
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-cream-100 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Our Process
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-coffee-900 mb-4"
          >
            The Story of Your Coffee
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-coffee-600 max-w-2xl mx-auto"
          >
            From the farm to your cup, every step is crafted with care and passion
          </motion.p>
        </div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Connection Line - Hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-leaf-800 via-coffee-700 to-coffee-900 opacity-20" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Icon Circle */}
                  <div className={`relative z-10 w-24 h-24 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                    <Icon className="w-10 h-10 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Step Number */}
                  <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-2 w-8 h-8 rounded-full bg-gold-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-serif text-coffee-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-coffee-600 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Arrow - Hidden on last item and mobile */}
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-8 text-coffee-300">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeJourney;
