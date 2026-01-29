import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, setCartOpen } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get total quantity from Redux
  const totalItems = useSelector(state =>
    state.cart.products.reduce((sum, p) => sum + p.quantity, 0)
  );
  const cartProducts = useSelector(state =>
    state.cart.products.filter(p => p.quantity > 0)
  );
  const totalBalance = cartProducts.reduce(
    (sum, p) => sum + (p.price || 0) * p.quantity,
    0
  );

  const cartOpen = useSelector(state => state.cart.cartOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close cart when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        dispatch(setCartOpen(false));
      }
    }
    if (cartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [cartOpen, dispatch]);

  // Modal handlers
  const handleMinusClick = (product) => {
    if (product.quantity === 1) {
      setModalProduct(product);
    } else {
      dispatch(updateQuantity({ id: product.id, delta: -1 }));
    }
  };

  const handleConfirmRemove = () => {
    if (modalProduct) {
      dispatch(updateQuantity({ id: modalProduct.id, delta: -1 }));
      setModalProduct(null);
    }
  };

  const handleCancelRemove = () => {
    setModalProduct(null);
  };

  const selectedProducts = useSelector(state => state.cart.products);
  const filteredProducts = useMemo(
    () => selectedProducts.filter(p => p.quantity > 0),
    [selectedProducts]
  );

  // When cart icon clicked:
  const handleCartClick = () => {
    dispatch(setCartOpen(!cartOpen));
  };

  return (
    <nav className={clsx(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 flex items-center justify-between',
      isScrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent'
    )}>
      
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-serif font-bold text-coffee-900 tracking-tight cursor-pointer" onClick={() => navigate('/')}>
        Earth & Bean
      </h1>

      {/* Right Actions */}
      <div className="flex items-center gap-6 relative">
        <button 
          className='relative p-2 text-coffee-800 hover:text-coffee-600 transition-colors'
          onClick={handleCartClick} 
          aria-label="Cart">
          <BsCart2 className='w-6 h-6'/>
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-coffee-600 text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full">
              {totalItems}
            </span>
          )}
        </button>
        
        <button className='p-2 text-coffee-800 hover:text-coffee-600 transition-colors'>
          <FaRegUser className='w-5 h-5' onClick={() => navigate('/login')} />
        </button>

        {/* Cart Dropdown */}
        <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            ref={cartRef}
            className="absolute top-full right-0 mt-4 w-80 bg-white rounded-xl shadow-xl border border-coffee-100 overflow-hidden"
          >
            <div className="p-4 border-b border-coffee-100 bg-cream-50">
                <h3 className="font-serif text-lg text-coffee-900 m-0">Your Cart</h3>
            </div>
            
            <div className="max-h-96 overflow-y-auto p-4">
            {filteredProducts.length === 0 ? (
              <p className="text-coffee-600 text-center py-4">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {filteredProducts.map(product => (
                    <li key={product.id} className="flex items-center gap-3">
                      <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md" />
                      <div className="flex-1">
                          <p className="font-medium text-coffee-900 text-sm">{product.name}</p>
                          <p className="text-xs text-coffee-600">${product.price}</p>
                      </div>
                      <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-100">
                        <button
                          onClick={() => handleMinusClick(product)}
                          className="w-6 h-6 flex items-center justify-center text-coffee-700 hover:bg-gray-200 rounded"
                        >-</button>
                        <span className="w-8 text-center text-sm font-medium">{product.quantity}</span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: product.id, delta: 1 }))}
                          className="w-6 h-6 flex items-center justify-center text-coffee-700 hover:bg-gray-200 rounded"
                        >+</button>
                      </div>
                    </li>
                  ))}
              </ul>
            )}
            </div>

            {filteredProducts.length > 0 && (
                 <div className="p-4 bg-gray-50 border-t border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-coffee-700">Total:</span>
                        <span className="font-bold text-lg text-coffee-900">${totalBalance.toFixed(2)}</span>
                    </div>
                    <button 
                        className="w-full bg-coffee-800 text-white py-3 rounded-lg font-medium hover:bg-coffee-900 transition-colors"
                        onClick={()=> navigate("/cart")}
                    >
                        Checkout
                    </button>
                 </div>
            )}
          </motion.div>
        )}
        </AnimatePresence>

        {/* Modal */}
        {modalProduct && (
          <div className='fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm'>
            <div className='bg-white p-6 rounded-2xl shadow-2xl max-w-sm w-full mx-4'>
              <h4 className="font-serif text-xl text-coffee-900 mb-2">Remove Item?</h4>
              <p className="text-coffee-700 mb-6">Are you sure you want to remove <b>{modalProduct.name}</b> from your cart?</p>
              <div className="flex gap-3 justify-end">
                <button className='px-4 py-2 text-coffee-700 hover:bg-gray-100 rounded-lg transition-colors'
                  onClick={handleCancelRemove}>
                  Cancel
                </button>
                <button className='px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors shadow-md'
                  onClick={handleConfirmRemove}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;