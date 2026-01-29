import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinalCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1920&h=1080&fit=crop" 
          alt="Coffee background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-coffee-900/95 via-coffee-900/90 to-coffee-800/95" />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-gold-400 font-semibold tracking-widest uppercase text-sm mb-6">
              Start Your Journey
            </span>
            
            <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight">
              Experience Coffee<br />Like Never Before
            </h2>
            
            <p className="text-xl md:text-2xl text-cream-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              From farm to cup, every bean tells a story of passion, sustainability, and exceptional flavor
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setTimeout(() => {
                    const productsSection = document.querySelector('[data-section="products"]');
                    if (productsSection) {
                      productsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="group px-8 py-4 bg-gold-500 text-coffee-900 rounded-full font-semibold text-lg flex items-center gap-2 hover:bg-gold-400 transition-all duration-300 shadow-xl hover:shadow-2xl"
              >
                <ShoppingBag className="w-5 h-5" />
                Shop Our Collection
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                Learn Our Story
              </motion.button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">4.9/5</p>
                  <p className="text-sm text-cream-100">Customer Rating</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">50+</p>
                  <p className="text-sm text-cream-100">Partner Farms</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">100%</p>
                  <p className="text-sm text-cream-100">Sustainable</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">24h</p>
                  <p className="text-sm text-cream-100">Fast Shipping</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream-50 to-transparent pointer-events-none" />
    </section>
  );
};

export default FinalCTA;
