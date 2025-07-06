import React, { useState, useEffect, useRef } from 'react';
import './componentCss/Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../store/cartSlice';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [modalProduct, setModalProduct] = useState(null); // Track product for removal confirmation
  const cartRef = useRef(null);
  const dispatch = useDispatch();

  // Get total quantity from Redux
  const totalItems = useSelector(state =>
    state.cart.products.reduce((sum, p) => sum + p.quantity, 0)
  );
  const cartProducts = useSelector(state =>
    state.cart.products.filter(p => p.quantity > 0)
  );

  // Calculate total balance
  const totalBalance = cartProducts.reduce(
    (sum, p) => sum + (p.price || 0) * p.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close cart dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }
    if (showCart) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showCart]);

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

  return (
    <nav className={isScrolled ? 'navbar transparent' : 'navbar'}>
      Earth & Bean
      <div style={{ position: 'absolute', right: 30, top: 20 }}>
        <button
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
            outline: 'none'
          }}
          onClick={() => setShowCart(!showCart)}
          aria-label="Cart"
        >
          {/* Simple cart SVG icon */}
          <svg width="32" height="32" fill="none" stroke="#73472e" strokeWidth="2" viewBox="0 0 24 24">
            <circle cx="9" cy="21" r="1.5"/>
            <circle cx="19" cy="21" r="1.5"/>
            <path d="M2 2h2l3.6 7.59a2 2 0 0 0 1.7 1.16l9.72.25a2 2 0 0 0 1.98-1.73l1.1-7.27H6"/>
          </svg>
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: 0,
              right: 0,
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
        {/* Cart dropdown */}
        {showCart && (
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
            {cartProducts.length === 0 ? (
              <p style={{margin: 0}}>Your cart is empty.</p>
            ) : (
              <>
                <ul className="cart-dropdown-list">
                  {cartProducts.map(product => (
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
                {/* Total balance */}
                <div
                  style={{
                    borderTop: '1px solid #eee',
                    marginTop: 12,
                    paddingTop: 12,
                    textAlign: 'right',
                    fontWeight: 'bold',
                    fontSize: 16
                  }}
                >
                  Total: ${totalBalance.toFixed(2)}
                </div>
              </>
            )}
          </div>
        )}
        {/* Modal for confirming removal */}
        {modalProduct && (
          <div
            style={{
              position: 'fixed',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 2000
            }}
          >
            <div
              style={{
                background: '#fff',
                borderRadius: 10,
                padding: 32,
                boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
                minWidth: 320,
                textAlign: 'center'
              }}
            >
              <h4 style={{marginTop: 0}}>Remove Item?</h4>
              <p>Are you sure you want to remove <b>{modalProduct.name}</b> from your cart?</p>
              <div style={{marginTop: 24, display: 'flex', justifyContent: 'center', gap: 16}}>
                <button
                  onClick={handleConfirmRemove}
                  style={{
                    background: '#73472e',
                    color: '#fff',
                    border: 'none',
                    borderRadius: 6,
                    padding: '8px 20px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
                <button
                  onClick={handleCancelRemove}
                  style={{
                    background: '#eee',
                    color: '#73472e',
                    border: 'none',
                    borderRadius: 6,
                    padding: '8px 20px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
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