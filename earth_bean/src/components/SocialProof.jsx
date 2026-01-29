import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Instagram } from 'lucide-react';

const SocialProof = () => {
  const reviews = [
    {
      name: 'Sarah Mitchell',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      review: 'The best coffee I\'ve ever had! The freshness is unmatched, and you can really taste the quality in every cup.',
      date: 'January 2026'
    },
    {
      name: 'James Rodriguez',
      avatar: 'https://i.pravatar.cc/150?img=13',
      rating: 5,
      review: 'Earth & Bean has completely changed my morning routine. The direct trade model means I\'m supporting farmers while enjoying incredible coffee.',
      date: 'January 2026'
    },
    {
      name: 'Emily Chen',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      review: 'I love that they roast weekly. The aroma when I open the bag is absolutely divine. Customer service is also top-notch!',
      date: 'December 2025'
    },
    {
      name: 'Michael Thompson',
      avatar: 'https://i.pravatar.cc/150?img=12',
      rating: 5,
      review: 'As a coffee enthusiast, I appreciate the tasting notes and brewing guides. It\'s clear they care about the entire coffee experience.',
      date: 'December 2025'
    }
  ];

  const instagramPosts = [
    { id: 1, image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop' },
    { id: 2, image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop' },
    { id: 3, image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=400&fit=crop' },
    { id: 4, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&h=400&fit=crop' },
    { id: 5, image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=400&h=400&fit=crop' },
    { id: 6, image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=400&fit=crop' }
  ];

  const StarRating = ({ rating }) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < rating ? 'fill-gold-500 text-gold-500' : 'text-coffee-200'}`}
            strokeWidth={1.5}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="section-padding bg-cream-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4"
          >
            Social Proof
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-coffee-900"
          >
            Loved by Coffee Enthusiasts
          </motion.h2>
        </div>

        {/* Customer Reviews */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif text-coffee-900 mb-8 text-center">Customer Reviews</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-coffee-100 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-200" />
                
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={review.avatar} 
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-300"
                  />
                  <div>
                    <h4 className="font-semibold text-coffee-900">{review.name}</h4>
                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating} />
                      <span className="text-xs text-coffee-500">{review.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-coffee-700 leading-relaxed">
                  "{review.review}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram Gallery */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-serif text-coffee-900 mb-3">Share Your Coffee Moments</h3>
            <p className="text-coffee-600 flex items-center justify-center gap-2">
              <Instagram className="w-5 h-5" />
              Tag us <span className="font-semibold text-coffee-800">#earthandbean</span>
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative"
              >
                <img 
                  src={post.image} 
                  alt={`Coffee moment ${post.id}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-coffee-900/0 group-hover:bg-coffee-900/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300"
            >
              <Instagram className="w-5 h-5" />
              Follow us on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
