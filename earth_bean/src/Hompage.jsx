import React from 'react'
import Navbar from './components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from './store/cartSlice'
import { useNavigate } from 'react-router-dom'
import Footer from './components/Footer'

function Hompage() {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    navigate('/cart');
  };

  return (
    <div>
      <Navbar />
      <div className='hero-container'>
          <div className='hero-text'>
              <h1>Crafted from Earth, Brewed for You.</h1>
              <h2>Sustainably sourced coffee rooted in tradition and taste.</h2>
          </div>
          <div className='hero-image'>
              <img src='hero-img.png' alt='hero' />
          </div>
      </div>

  <div className='about-container'>
<div className='about-text'>
  <h1><strong>Lorem ipsum dolor sit amet.</strong></h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat turpis
    et turpis auctor, tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>
<img className="about-splash-img" src="coffee-splash2.png" alt="coffee splash" />
  </div>

  {/* PRODUCTS */}
      <div className='products'>
        <h1>Our Products</h1>
        <div className='product-wrapper'>
          {products.map(product => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <img src={product.image} alt='product' />
              <p style={{ color: "#fff", fontWeight: "bold", fontSize: "18px" }}>
                ${product.price.toFixed(2)}
              </p>
              <button
                className='product-button'
                onClick={() => handleAddToCart(product.id)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
  {/* PRODUCTS */}

  {/* PROCCESS */}
  <h2 className='process-title'>Our Process</h2>
      <div className='process-wrapper'>
          <div className='process-container'>
              <div className='process-text'>
                  <h3>Step 1</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor enim, non dictum quam. Nulla ut vehicula risus. Phasellus non neque pretium, condimentum ante id, lobortis eros. Mauris vestibulum.</p>
              </div>
              <div className='process-image'>
                  <img src='process1.jpg' alt='process' />
              </div>
          </div>

          <div className='process-container'>
              <div className='process-text'>
                  <h3>Step 2</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor enim, non dictum quam. Nulla ut vehicula risus. Phasellus non neque pretium, condimentum ante id, lobortis eros. Mauris vestibulum.</p>
              </div>
              <div className='process-image'>
                  <img src='process2.jpg' alt='process' />
              </div>
          </div>

          <div className='process-container'>
              <div className='process-text'>
                  <h3>Step 3</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut tempor enim, non dictum quam. Nulla ut vehicula risus. Phasellus non neque pretium, condimentum ante id, lobortis eros. Mauris vestibulum.</p>
              </div>
              <div className='process-image'>
                  <img src='process3.png' alt='process' />
              </div>
          </div>
      </div>
  {/* PROCCESS */}

  <div className=''>
      <h2>lorem ipsum dollar</h2>
      <img src='coffee-cup.png' alt='coffee cup' />
  </div>
<Footer />
  </div>
)
}

export default Hompage