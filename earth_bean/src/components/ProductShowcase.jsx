import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { motion } from 'framer-motion';

const ProductShowcase = () => {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    return (
        <section className="section-padding bg-cream-100" data-section="products">
            <div className="container-custom">
                <div className="text-center mb-16">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block text-gold-600 font-semibold tracking-widest uppercase text-sm mb-4"
                    >
                        Our Collection
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-serif text-coffee-900"
                    >
                        Roasted to Perfection
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, index) => (
                        <motion.div 
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-2xl transition-all duration-300 border border-coffee-100 hover:border-gold-400 cursor-pointer"
                        >
                            <div className="relative aspect-square mb-6 overflow-hidden rounded-xl bg-gradient-to-br from-cream-50 to-coffee-50 flex items-center justify-center group-hover:from-gold-100 group-hover:to-cream-100 transition-all duration-500">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-3/4 h-3/4 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-serif text-coffee-900 group-hover:text-coffee-800 transition-colors">{product.name}</h3>
                                <span className="text-lg font-semibold text-gold-600">${product.price.toFixed(2)}</span>
                            </div>
                            
                            <p className="text-coffee-600 text-sm mb-6 line-clamp-2">
                                A rich and complex blend with notes of dark chocolate and citrus.
                            </p>

                            <button 
                                onClick={() => dispatch(addToCart(product.id))}
                                className="w-full py-3 bg-gradient-to-r from-coffee-800 to-coffee-900 text-white font-medium rounded-lg hover:from-gold-600 hover:to-gold-500 hover:text-coffee-900 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                                Add to Cart
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
