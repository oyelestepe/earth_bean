import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Flame, Beaker, Package, GraduationCap } from 'lucide-react';

const WhyUs = () => {
  const values = [
    {
      icon: MapPin,
      title: 'Directly from the Farm',
      description: 'We work directly with coffee farmers, ensuring fair prices and the highest quality beans from sustainable farms.'
    },
    {
      icon: Flame,
      title: 'Weekly Fresh Roast',
      description: 'Your coffee is roasted fresh every week, guaranteeing maximum flavor and aroma in every cup.'
    },
    {
      icon: Beaker,
      title: 'Tasting Profile Analysis',
      description: 'Each batch undergoes rigorous cupping and analysis to ensure consistent quality and unique flavor profiles.'
    },
    {
      icon: Package,
      title: 'Sustainable Packaging',
      description: 'Eco-friendly, recyclable packaging that keeps your coffee fresh while protecting our planet.'
    },
    {
      icon: GraduationCap,
      title: 'Coffee Training & Content',
      description: 'Access to brewing guides, coffee education, and expert tips to elevate your coffee experience.'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-coffee-900"
          >
            The Earth & Bean Difference
          </motion.h2>
        </div>

        {/* Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group p-8 rounded-2xl bg-cream-50 border border-coffee-100 hover:border-gold-400 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-coffee-700 to-coffee-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <Icon className="w-8 h-8 text-gold-300" strokeWidth={2} />
                </div>
                <h3 className="text-xl font-serif text-coffee-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-coffee-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
