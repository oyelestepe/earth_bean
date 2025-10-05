import { useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cartSlice';
import { useNavigate } from 'react-router-dom';
import LoadingSpinner from './components/LoadingSpinner';

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
        <Navbar />
        <LoadingSpinner />
        <Footer />
      </div>
    );
  }

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

          <div className='process-container fade-in visible' ref={el => processRef.current[0] = el}>
            <div className='process-text'>
              <h3>Step 1: The Beginning</h3>
              <p>Every journey begins with a single cherry. On sunlit coffee farms, skilled hands carefully pick ripe, red cherries at just the right moment of maturity. This careful selection ensures only the finest fruit moves forward, capturing the natural sweetness and depth that define great coffee. Each harvest reflects the dedication of the farmers and the harmony between soil, climate, and care.</p>
            </div>
            <div className='process-image'>
              <img src='/process1.png' alt='Selecting coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in visible' ref={el => processRef.current[1] = el}>
            <div className='process-text'>
              <h3>Step 2: Under the Sun</h3>
              <p>After harvesting, the cherries are gently laid out on wide drying beds to bask in the sunlight. For several days, they are turned and tended to, allowing air and warmth to draw out moisture naturally. This slow, patient process is essential it preserves the beans’ natural oils and develops their full-bodied flavor. The result is a bean that carries the essence of the land and the sun that ripened it.</p>
            </div>
            <div className='process-image'>
              <img src='/process2.png' alt='Drying coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in visible' ref={el => processRef.current[2] = el}>
            <div className='process-text'>
              <h3>Step 3: Preparing for Perfection</h3>
              <p>Once dried, the coffee beans undergo a careful transformation in the milling stage. Their outer layers are removed, leaving clean, green beans ready for the next phase. Each batch is sorted, polished, and inspected to ensure only premium beans continue the journey. This stage bridges nature and craftsmanship refining what the earth has created into something ready for artistry.</p>
            </div>
            <div className='process-image'>
              <img src='/process3.png' alt='Roasting and brewing coffee' />
            </div>
          </div>

          <div className='process-container fade-in visible' ref={el => processRef.current[1] = el}>
            <div className='process-text'>
              <h3>Step 4: The Flavor Awakens</h3>
              <p>In the roastery, the green beans meet heat and magic happens. Through precise control of time and temperature, roasters coax out deep aromas and complex flavors hidden within each bean. The color shifts from green to golden to rich brown, releasing a symphony of scents that fill the air. Every roast profile tells a story of balance, patience, and passion for perfection.</p>
            </div>
            <div className='process-image'>
              <img src='/process4.png' alt='Drying coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in visible' ref={el => processRef.current[1] = el}>
            <div className='process-text'>
              <h3>Step 5: From Beans to Product</h3>
              <p>Once roasted, the coffee is ground in carefully calibrated machines that preserve aroma and texture. Each batch is measured with precision to maintain consistency across every package. Immediately after grinding, the coffee is sealed in air-tight bags to lock in its freshness and protect its delicate flavors. This stage ensures that every cup brewed later carries the same richness intended by its makers.</p>
            </div>
            <div className='process-image'>
              <img src='/process5.png' alt='Drying coffee beans' />
            </div>
          </div>

          <div className='process-container fade-in visible' ref={el => processRef.current[1] = el}>
            <div className='process-text'>
              <h3>Step 6: The Final Step</h3>
              <p>At last, the journey reaches its destination. Finished coffee bags are labeled, boxed, and prepared for shipment to cafés, stores, and coffee lovers around the world. Each package represents the work of countless hands from farmers to roasters united by a shared love for coffee. What began as a simple cherry now stands ready to bring warmth, aroma, and connection to every cup it fills.</p>
            </div>
            <div className='process-image'>
              <img src='/process6.png' alt='Drying coffee beans' />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Homepage;