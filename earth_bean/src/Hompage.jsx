import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';
import Testimonial from './components/Testimonial';
import Process from './components/Process';
import About from './components/About';

function Homepage() {
  const [isLoading, setIsLoading] = useState(true);
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const processRef = useRef([]);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('Process section visible:', entry.target);
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    processRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  if (isLoading) {
    return (
      <div>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />
      <About />

      {/* products */}
      <div className='products'>
        <h1>Our Products</h1>
        <div className='product-wrapper'>
          {products.map(product => (
            <div className='product' key={product.id}>
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
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
      <Testimonial />
      <Process />
      <Footer />
    </div>
  );
}

export default Homepage;