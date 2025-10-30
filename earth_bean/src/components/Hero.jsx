import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const NEXT_VISIBLE = 0.5;
const AUTO_SLIDE_INTERVAL = 5000;
const TRANSITION_DURATION = 'duration-[700ms]';
const CSS_TRANSITION_STYLE = { transition: 'all 0.7s ease-in-out' };

const products = [
  {
    id: 1,
    name: "EARTH & BEAN CLASSIC, BALANCED FLAVOR",
    price: 12.99,
    image: "/product1.png",
    bgColor: "#f2efe9",
    textColor: "#5a6a4d",
    gradientColors: ["#f2efe9", "#e0dacd", "#d1c9bd"],
    description:
      "Balanced Flavor from the Earth. Medium Roast - 100% Arabica - Sustainably Grown. Experience a smooth and harmonious cup that awakens your senses with every sip.",
  },
  {
    id: 2,
    name: "EARTH & BEAN DARK ROAST, RICH & BOLD",
    price: 13.99,
    image: "/product2.png",
    bgColor: "#2c221e",
    textColor: "#e0dcd9",
    gradientColors: ["#2c221e", "#1a1614", "#3d322c"],
    description:
      "Rich, Bold, and Grounded in Nature. Dark Roast - Small Batch - Handcrafted with Care. A powerful and intense coffee for those who seek depth in every drop.",
  },
  {
    id: 3,
    name: "EARTH & BEAN ESPRESSO, BOLD ENERGY",
    price: 14.99,
    image: "/product3.png",
    bgColor: "#7d4a32",
    textColor: "#fdf8e6",
    gradientColors: ["#7d4a32", "#663e2c", "#945c43"],
    description:
      "Bold Energy, Born from the Earth. Espresso Blend - Roasted in Small Batches - Sustainably Harvested. Fuel your day with an invigorating and aromatic espresso experience.",
  },
];


export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [productWidth, setProductWidth] = useState(650);

  const current = products[activeIndex];
  const initialGradient = `linear-gradient(135deg, ${products[0].gradientColors.join(", ")})`;
  const [backgroundGradient, setBackgroundGradient] = useState(initialGradient);

  // Ref'ler artık animasyon için gerekli değil, ancak DOM elementlerini tutmak için kalabilir.
  const bgRef = useRef(null); 
  const textRef = useRef(null);
  const imageRefs = useRef([]);
  const dotsRef = useRef(null); 

  const nextSlide = () => setActiveIndex((i) => (i + 1) % products.length);
  const prevSlide = () => setActiveIndex((i) => (i - 1 + products.length) % products.length);
  const goToSlide = (index) => setActiveIndex(index);


  // Otomatik slider
  useEffect(() => {
    const interval = setInterval(() => nextSlide(), AUTO_SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  // Responsive genişlik ayarı
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setProductWidth(250);
      else if (window.innerWidth < 1024) setProductWidth(400);
      else setProductWidth(650);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Arka planı güncelleme (GSAP'siz, sadece CSS geçişi)
  useEffect(() => {
      const newGradient = `linear-gradient(135deg, ${current.gradientColors.join(", ")})`;
      setBackgroundGradient(newGradient);
  }, [activeIndex, current.gradientColors]);


  // Görsel ve Metin Stilleri, sadece JS state'ine göre belirlenecek
  const getImageStyle = (i) => {
    let baseStyle = {
      ...CSS_TRANSITION_STYLE,
      position: "absolute",
      width: `${productWidth}px`,
      cursor: "pointer",
      transformOrigin: "bottom", // Tailwind sınıfına eklendi
      zIndex: 1 // Varsayılan z-index
    };

    if (i === activeIndex) {
      // Aktif görsel
      return {
        ...baseStyle,
        opacity: 1,
        transform: "translateX(0) scale(1.05)",
        zIndex: 12,
      };
    } else if (i === (activeIndex + 1) % products.length) {
      // Bir sonraki görsel (küçük ve yanda)
      return {
        ...baseStyle,
        opacity: 0.8,
        transform: `translateX(${productWidth * NEXT_VISIBLE}px) scale(0.95)`,
        width: `${productWidth * 0.9}px`,
        zIndex: 10,
      };
    } else {
      // Diğer, gizli görseller
      return {
        ...baseStyle,
        opacity: 0,
        transform: "translateX(1000px) scale(0.8)",
        zIndex: 1,
      };
    }
  };

  return (
    <section
      ref={bgRef}
      className={`relative flex flex-col lg:flex-row items-center justify-between overflow-hidden px-6 sm:px-10 lg:px-20 ${TRANSITION_DURATION}`}
      style={{
        ...CSS_TRANSITION_STYLE, // Arka plan için geçişi etkinleştir
        background: backgroundGradient,
        minHeight: "100vh",
        paddingTop: "4rem",
        paddingBottom: "4rem",
      }}
    >
      
      {/* Overlay (Artık animasyon katmanı olarak kullanılmayacak, sadece z-index yer tutucu) */}
      <div
        className="absolute w-full h-full pointer-events-none overflow-hidden"
        style={{ zIndex: 5 }}
      />
      
      {/* Sol Metin (Content) */}
      <div className="max-w-xl z-20 w-full text-center lg:text-left lg:w-2/5 lg:pt-20 lg:pb-20 lg:pr-10">
        <div ref={textRef} key={activeIndex} className={`transition-all ${TRANSITION_DURATION}`} style={CSS_TRANSITION_STYLE}>
          <h1
            className={`text-4xl sm:text-6xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight ${TRANSITION_DURATION}`}
            style={{
              ...CSS_TRANSITION_STYLE, // Metin rengi geçişi
              background: `linear-gradient(to right, ${current.textColor}, ${current.textColor}cc)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {current.name}
          </h1>

          <p
            className={`mt-6 sm:mt-8 text-lg sm:text-xl font-light max-w-md leading-relaxed mx-auto lg:mx-0 ${TRANSITION_DURATION}`}
            style={{ ...CSS_TRANSITION_STYLE, color: current.textColor + "dd" }}
          >
            {current.description}
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-6 justify-center lg:justify-start">
            <p
              className={`text-3xl sm:text-4xl font-bold ${TRANSITION_DURATION}`}
              style={{ ...CSS_TRANSITION_STYLE, color: current.textColor }}
            >
              ${current.price}
            </p>

            <button
              className="mt-4 sm:mt-0 px-8 py-3 rounded-full font-semibold text-white text-lg transition duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${current.textColor}, ${current.textColor}cc)`,
                color: current.textColor === "#2c221e" ? "#fdf8e6" : "#fff",
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>


      {/* Sağ Görseller */}
      <div className="relative flex items-center justify-center w-full lg:w-[800px] h-[400px] sm:h-[500px] lg:h-full mt-10 lg:mt-0 z-20">
        {products.map((p, i) => (
          <img
            key={p.id}
            ref={(el) => (imageRefs.current[i] = el)}
            src={p.image}
            alt={p.name}
            // Görsel stili, GSAP yerine doğrudan JS ve CSS Transition ile verilir.
            style={getImageStyle(i)}
            className="drop-shadow-2xl"
          />
        ))}
      </div>

      {/* Navigasyon Kontrolleri (Oklar ve Noktalar) */}
      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 flex flex-col items-end gap-4 z-30">
        
        {/* Sayfalama Noktaları (Dots) */}
        <div ref={dotsRef} className="flex gap-2 transition duration-300">
            {products.map((_, i) => (
                <button
                    key={i}
                    onClick={() => goToSlide(i)}
                    className="w-2.5 h-2.5 rounded-full transition-all duration-300"
                    style={{
                        backgroundColor: i === activeIndex 
                            ? current.textColor
                            : current.textColor + "40",
                        transform: i === activeIndex ? "scale(1.2)" : "scale(1)",
                        opacity: i === activeIndex ? 1 : 0.7,
                    }}
                />
            ))}
        </div>
        
        {/* Kontrol Okları */}
        <div className="flex gap-3">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full backdrop-blur-sm transition duration-300 border border-current hover:bg-white/30"
            style={{ color: current.textColor }}
          >
            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 rounded-full backdrop-blur-sm transition duration-300 border border-current hover:bg-white/30"
            style={{ color: current.textColor }}
          >
            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
          </button>
        </div>
      </div>
    </section>
  );
}