import React, { useMemo, useState } from 'react';
import './componentCss/Cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuantity } from '../store/cartSlice';
import Navbar from './Navbar';

function Cart() {
  const allProducts = useSelector(state => state.cart.products);
  const products = useMemo(() => allProducts.filter(p => p.quantity > 0), [allProducts]);
  const dispatch = useDispatch();

  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [productToRemove, setProductToRemove] = useState(null);

  const handleDecrease = (product) => {
    if (product.quantity === 1) {
      setProductToRemove(product);
      setShowModal(true);
    } else {
      dispatch(updateQuantity({ id: product.id, delta: -1 }));
    }
  };

  const confirmRemove = () => {
    if (productToRemove) {
      dispatch(updateQuantity({ id: productToRemove.id, delta: -1 }));
      setShowModal(false);
      setProductToRemove(null);
    }
  };

  const cancelRemove = () => {
    setShowModal(false);
    setProductToRemove(null);
  };

  const total = products.reduce((sum, p) => sum + p.price * p.quantity, 0);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <h1>Your Cart</h1>
        <div className="cart-products">
          {products.length === 0 && <p>Your cart is empty.</p>}
          {products.map(product => (
            <div className="cart-product" key={product.id}>
              <img src={product.image} alt={product.name} width={80} />
              <div>
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <div>
                  <button onClick={() => handleDecrease(product)}>-</button>
                  <span style={{ margin: '0 10px' }}>{product.quantity}</span>
                  <button onClick={() => dispatch(updateQuantity({ id: product.id, delta: 1 }))}>+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <h2>Total: ${total.toFixed(2)}</h2>
        <button className="checkout-btn" disabled={products.length === 0}>Checkout</button>
      </div>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000
        }}>
          <div style={{
            background: '#fff',
            padding: '32px 24px',
            borderRadius: 12,
            boxShadow: '0 4px 24px rgba(0,0,0,0.12)',
            minWidth: 300,
            textAlign: 'center'
          }}>
            <p>Remove <b>{productToRemove?.name}</b> from cart?</p>
            <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 16 }}>
              <button
                onClick={confirmRemove}
                style={{
                  background: '#73472e',
                  color: '#fff',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 20px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >Yes</button>
              <button
                onClick={cancelRemove}
                style={{
                  background: '#eee',
                  color: '#333',
                  border: 'none',
                  borderRadius: 8,
                  padding: '8px 20px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >No</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;