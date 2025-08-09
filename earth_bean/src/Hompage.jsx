import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    navigate('/cart');
  };

  const processRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
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

  return (
    <div>
      <Navbar />

      {/* Hero section */}
      <div className='hero-container'>
        <div className='hero-text'>
          <h1>Crafted from Earth, Brewed for You.</h1>
          <h2>Sustainably sourced coffee rooted in tradition and taste.</h2>
        </div>
        <div className='hero-image'>
          <img src='/hero-img.png' alt='hero' />
        </div>
      </div>

      {/* About section */}
      <div className='about-container'>
        <div className='about-text'>
          <h1><strong>Our Passion for Coffee</strong></h1>
          <p>
            We believe every cup tells a story. From bean to brew, we carefully craft each step to bring you unparalleled flavor and quality.
          </p>
        </div>
        <img className="about-splash-img" src="/coffee-splash2.png" alt="coffee splash" />
      </div>

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

      {/* process */}
      <section className="process-section">
        <h2 className='process-title'>Our Process</h2>
        <div className='process-wrapper'>

          <div className='process-container fade-in' ref={el => processRef.current[0] = el}>
            <div className='process-text'>
              <h3>Step 1: Selecting the Finest Beans</h3>
              <p>We carefully handpick the highest quality coffee beans from sustainable farms to ensure the best flavor and aroma.</p>
            </div>
            <div className='process-image'>
              <img src='/process1.jpg' alt='Selecting coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in' ref={el => processRef.current[1] = el}>
            <div className='process-text'>
              <h3>Step 2: Drying the Beans</h3>
              <p>The beans are dried under the sun or in modern drying machines to preserve their natural taste and freshness.</p>
            </div>
            <div className='process-image'>
              <img src='/process2.jpg' alt='Drying coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in' ref={el => processRef.current[2] = el}>
            <div className='process-text'>
              <h3>Step 3: Roasting, Grinding, and Brewing</h3>
              <p>Our experts roast the beans to perfection, grind them freshly, and brew your coffee to deliver the richest flavor.</p>
            </div>
            <div className='process-image'>
              <img src='/process3.png' alt='Roasting and brewing coffee' />
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;