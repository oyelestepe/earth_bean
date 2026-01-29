import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Globe, Users } from 'lucide-react';

const BrandValues = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We partner with farms that use sustainable farming practices, protecting biodiversity and ensuring coffee production for generations to come.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
      stats: '100% Sustainable Farms'
    },
    {
      icon: Heart,
      title: 'Fair Trade',
      description: 'Every bean is sourced through fair trade practices, ensuring farmers receive fair compensation and work in safe, ethical conditions.',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
      stats: 'Fair Wages Guaranteed'
    },
    {
      icon: Globe,
      title: 'Eco-Friendly Production',
      description: 'From renewable energy in our roastery to compostable packaging, we minimize our environmental footprint at every step.',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      stats: 'Carbon Neutral Shipping'
    },
    {
      icon: Users,
      title: 'Local Producer Support',
      description: 'We build long-term relationships with small-scale farmers, providing training, resources, and stable income to strengthen communities.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=600&fit=crop',
      stats: '50+ Partner Farms'
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
            Our Values
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-coffee-900 mb-4"
          >
            Coffee with Purpose
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-coffee-600 max-w-2xl mx-auto"
          >
            Every cup you enjoy makes a positive impact on people and planet
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="space-y-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                    <img 
                      src={value.image} 
                      alt={value.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  {/* Stats Badge */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                    <p className="font-semibold text-coffee-900">{value.stats}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2">
                  <div className="max-w-lg">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-leaf-800 to-leaf-900 flex items-center justify-center mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-gold-300" strokeWidth={2} />
                    </div>
                    
                    <h3 className="text-3xl font-serif text-coffee-900 mb-4">
                      {value.title}
                    </h3>
                    
                    <p className="text-lg text-coffee-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gradient-to-r from-leaf-900 to-coffee-900 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-serif mb-4">Join Our Mission</h3>
          <p className="text-cream-100 text-lg mb-6 max-w-2xl mx-auto">
            Every purchase supports sustainable farming, fair wages, and environmental protection
          </p>
          <button className="px-8 py-4 bg-gold-500 text-coffee-900 rounded-full font-semibold hover:bg-gold-400 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            Learn More About Our Impact
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandValues;
