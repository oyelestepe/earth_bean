import React, { useState, useEffect, useRef, useMemo } from 'react';
import './componentCss/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity, setCartOpen } from '../store/cartSlice';
import { useNavigate } from 'react-router-dom'
import { BsCart2 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import Cart from './Cart';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [modalProduct, setModalProduct] = useState(null);
  const cartRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate('/cart');

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart dropdown dışına tıklayınca kapat
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

  // Cart ikonuna tıklayınca:
  const handleCartClick = () => {
    dispatch(setCartOpen(!cartOpen));
  };

  return (
    <nav className={isScrolled ? 'navbar transparent' : 'navbar'}>
      <a href="/" className='text-xl'>Earth & Bean</a>
      <div style={{ position: 'absolute', right: 30, top: 20 }}>
        <button className='cart-icon-btn'
          onClick={handleCartClick} aria-label="Cart">
          <BsCart2 className='cart-icon'/>
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '3px',
              right: '-10px',
              background: '#73472e',
              color: '#fff',
              borderRadius: '50%',
              padding: '2px 7px',
              fontSize: '12px',
              fontWeight: 'bold'
            }}>
              {totalItems}
            </span>
          )}
        </button>
        <button className='user-icon-btn'>
          <FaRegUser className='user-icon' onClick={() => navigate('/login')} />
        </button>
        {/* Cart dropdown */}
        {cartOpen && (
          <div
            ref={cartRef}
            className="cart-dropdown"
            style={{
              position: 'absolute',
              right: 0,
              top: 40,
              width: 320,
              background: '#fff',
              border: '1px solid #eee',
              borderRadius: 12,
              boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
              zIndex: 1000,
              padding: 16
            }}
          >
            <h3 style={{margin: 0, marginBottom: 12}}>Cart</h3>
            {filteredProducts.length === 0 ? (
              <p style={{margin: 0}}>Your cart is empty.</p>
            ) : (
              <>
                <ul className="cart-dropdown-list">
                  {filteredProducts.map(product => (
                    <li key={product.id} className="cart-dropdown-item">
                      <img src={product.image} alt={product.name} width={40} />
                      <span className="cart-dropdown-name">{product.name}</span>
                      <div className="cart-dropdown-qty">
                        <button
                          onClick={() => handleMinusClick(product)}
                          className="cart-dropdown-btn"
                        >-</button>
                        <span>{product.quantity}</span>
                        <button
                          onClick={() => dispatch(updateQuantity({ id: product.id, delta: 1 }))}
                          className="cart-dropdown-btn"
                        >+</button>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className='cart-total-container'>
                  <div className='go-to-cart'>
                    <button className='go-to-cart-btn' onClick={()=> navigate("/cart")}>Go to Cart</button>
                  </div>
                  <div className='total-balance'>
                    Total: ${totalBalance.toFixed(2)}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
        {/* Modal for confirming removal */}
        {modalProduct && (
          <div className='modal-overlay'>
            <div className='modal-content'>
              <h4 style={{marginTop: 0}}>Remove Item?</h4>
              <p>Are you sure you want to remove <b>{modalProduct.name}</b> from your cart?</p>
              <div className='' style={{marginTop: 24, display: 'flex', justifyContent: 'center', gap: 16}}>
                <button className='remove-btn'
                  onClick={handleConfirmRemove}>
                  Remove
                </button>
                <button className='cancel-btn'
                  onClick={handleCancelRemove}>
                  Cancel
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