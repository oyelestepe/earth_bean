import React from 'react';
import { motion } from 'framer-motion';
import { Star, Truck, Shield, Sprout, Coffee } from 'lucide-react';

const TrustBar = () => {
  const trustItems = [
    {
      icon: Star,
      label: '4.9/5 Rating',
      description: 'Customer satisfaction'
    },
    {
      icon: Truck,
      label: '24-Hour Shipping',
      description: 'Fast delivery'
    },
    {
      icon: Shield,
      label: 'Secure Payment',
      description: '100% protected'
    },
    {
      icon: Sprout,
      label: 'Direct from Producer',
      description: 'Farm to cup'
    },
    {
      icon: Coffee,
      label: 'Freshly Roasted',
      description: 'Weekly batches'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-cream-50 to-cream-100 border-y border-coffee-100">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white border-2 border-coffee-200 flex items-center justify-center mb-3 group-hover:border-gold-500 group-hover:bg-gold-50 transition-all duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-coffee-700 group-hover:text-gold-600 transition-colors duration-300" strokeWidth={2} />
                </div>
                <h3 className="font-semibold text-coffee-900 text-sm md:text-base mb-1">
                  {item.label}
                </h3>
                <p className="text-xs md:text-sm text-coffee-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
