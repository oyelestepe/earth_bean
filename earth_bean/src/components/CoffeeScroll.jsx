import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoffeeScroll = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const frameCount = 103; // Based on the actual number of frames found

  // Load image sequence
  useEffect(() => {
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        // Construct filename with padding (e.g., ezgif-frame-001.jpg)
        const frameIndex = String(i).padStart(3, '0');
        // Since assets are in src/assets/sequance, and they are usually bundled by Vite
        // We'll use a dynamic import approach or a relative path that Vite understands
        // For local dev with Vite, the easiest way to handle many images is to import them or use public
        // But since they are in src/assets/sequance, we'll try to import them dynamically
        img.src = new URL(`../assets/sequance/ezgif-frame-${frameIndex}.jpg`, import.meta.url).href;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImages(loadedImages);
          }
        };
        loadedImages.push(img);
    }
  }, []);

  useEffect(() => {
    if (images.length !== frameCount) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const render = (index) => {
      const img = images[index];
      if (!img) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const ratio = Math.min(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      context.clearRect(0, 0, canvasWidth, canvasHeight);
      // Background color match
      context.fillStyle = '#faf7f2';
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.drawImage(img, x, y, newWidth, newHeight);
    };

    // Set initial canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render(0); // Render first frame on resize
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // GSAP Scroll Animation
    const scrollObj = { frame: 0 };
    
    const tl = gsap.to(scrollObj, {
      frame: frameCount - 1,
      snap: 'frame',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom', // Finish sequence exactly when unpinning
        scrub: true, // Direct mapping to scroll
      },
      onUpdate: () => render(Math.round(scrollObj.frame))
    });

    // Narrative text animations
    const texts = gsap.utils.toArray('.narrative-text');
    
    // 0% - 15%: "Earth & Bean. Pure Origin."
    gsap.fromTo('.text-1', 
        { opacity: 0, y: 50 },
        { 
            opacity: 1, y: 0, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: '0% top',
                end: '8% top',
                scrub: true,
            }
        }
    );
    gsap.to('.text-1', {
        opacity: 0, y: -50,
        scrollTrigger: {
            trigger: containerRef.current,
            start: '12% top',
            end: '15% top',
            scrub: true,
        }
    });

    // 20% - 35%: "The journey begins with the cherry."
    gsap.fromTo('.text-2', 
        { opacity: 0, x: -100 },
        { 
            opacity: 1, x: 0, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: '20% top',
                end: '28% top',
                scrub: true,
            }
        }
    );
    gsap.to('.text-2', {
        opacity: 0, x: -100,
        scrollTrigger: {
            trigger: containerRef.current,
            start: '32% top',
            end: '35% top',
            scrub: true,
        }
    });

    // 40% - 55%: "Roasted for Depth. Ground for Flavor."
    gsap.fromTo('.text-3', 
        { opacity: 0, x: 100 },
        { 
            opacity: 1, x: 0, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: '40% top',
                end: '48% top',
                scrub: true,
            }
        }
    );
    gsap.to('.text-3', {
        opacity: 0, x: 100,
        scrollTrigger: {
            trigger: containerRef.current,
            start: '52% top',
            end: '55% top',
            scrub: true,
        }
    });

    // 65% - 77%: "Earth & Bean."
    gsap.fromTo('.text-4', 
        { opacity: 0, scale: 0.8 },
        { 
            opacity: 1, scale: 1, 
            scrollTrigger: {
                trigger: containerRef.current,
                start: '65% top',
                end: '75% top',
                scrub: true,
            }
        }
    );

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      tl.kill();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [images]);

  return (
    <div ref={containerRef} className="relative h-[450vh] w-full bg-[#faf7f2]">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full object-contain"
        />
        
        {/* Narrative Overlays */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 pointer-events-none">
          
          <div className="text-1 narrative-text text-center max-w-2xl opacity-0">
             <h1 className="text-5xl md:text-7xl font-serif text-coffee-900/90 mb-4">Earth & Bean.</h1>
             <p className="text-xl md:text-2xl font-sans text-coffee-900/70">Pure Origin.</p>
          </div>

          <div className="text-2 narrative-text absolute left-8 md:left-24 text-left max-w-md opacity-0">
             <h2 className="text-4xl md:text-5xl font-serif text-coffee-900/90 mb-4">The journey begins with the cherry.</h2>
             <p className="text-lg md:text-xl font-sans text-coffee-900/70">Hand-picked at the peak of ripeness.</p>
          </div>

          <div className="text-3 narrative-text absolute right-8 md:right-24 text-right max-w-md opacity-0">
             <h2 className="text-4xl md:text-5xl font-serif text-coffee-900/90 mb-4">Roasted for Depth.</h2>
             <p className="text-lg md:text-xl font-sans text-coffee-900/70 mb-4">Ground for Flavor.</p>
             <p className="text-base md:text-lg font-sans text-coffee-900/60 italic">Precision in every step.</p>
          </div>

          <div className="text-4 narrative-text text-center max-w-2xl opacity-0">
             <h2 className="text-5xl md:text-7xl font-serif text-coffee-900/90 mb-8">Earth & Bean.</h2>
             <button className="pointer-events-auto px-10 py-4 bg-coffee-900 text-cream-50 rounded-full font-sans text-lg hover:bg-leaf-900 transition-colors duration-300">
                Experience the Ritual
             </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CoffeeScroll;
