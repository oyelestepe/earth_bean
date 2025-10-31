import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NUMBER_OF_BEANS = 35;

 function About() {
  const beansRef = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const sectionHeight = sectionRef.current.offsetHeight;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    beansRef.current.forEach((bean, i) => {
      const randomX = (Math.random() - 0.5) * 400;
      const randomRot = Math.random() * 360 - 180;
      const randomDelay = Math.random() * 0.3;
      const randomY = sectionHeight + Math.random() * 200;

      tl.fromTo(
        bean,
        {
          y: -sectionHeight / 1.1,
          x: randomX / 2,
          opacity: 0,
          rotate: 0,
          scale: 0.8,
        },
        {
          y: 0,
          x: randomX,
          opacity: 1,
          rotate: randomRot,
          scale: 1,
          duration: 1.8,
          delay: randomDelay,
          ease: "bounce.out",
        },
        i * 0.05
      );
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-start overflow-hidden min-h-screen bg-gradient-to-br from-[#F7F3EE] via-[#F2EAE0] to-[#EBE4DC] px-[5%] shadow-inner"
    >
      {/* Text */}
      <div className="flex-1 max-w-lg z-10 text-left pt-20 pb-40 lg:pb-0">
        <h1 className="text-5xl font-extrabold text-[#5D4037] mb-4 tracking-tight">
          Our Passion, Crafted in Every Bean
        </h1>
        <p className="text-xl leading-relaxed text-[#795548] font-medium">
          We believe every cup tells a unique story. From the careful selection of beans to the precise art of brewing, we dedicate ourselves to delivering an unparalleled experience of flavor and quality.
        </p>
      </div>

      {/* Splash Image */}
      <img
        className="absolute top-1/2 left-[65%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[1000px] z-0 opacity-70 pointer-events-none"
        src="/coffee-splash2.png"
        alt="Coffee Splash"
      />

      {/* Coffee beans */}
      <div className="absolute bottom-0 left-0 w-full h-[200px] flex justify-center items-end overflow-visible pointer-events-none">
        <div className="relative w-full h-full flex justify-center items-end">
          {[...Array(NUMBER_OF_BEANS)].map((_, i) => (
            <img
              key={i}
              ref={(el) => (beansRef.current[i] = el)}
              src="/bean.svg"
              alt="Coffee Bean"
              className="absolute bottom-0 w-26 h-26 opacity-95 will-change-transform"
              style={{
                left: `${(i / NUMBER_OF_BEANS) * 90 + 5}%`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About