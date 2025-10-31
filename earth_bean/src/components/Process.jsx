import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    title: "Step 1: The Beginning",
    text: "Every journey begins with a single cherry. On sunlit coffee farms, skilled hands carefully pick ripe, red cherries at just the right moment of maturity. This careful selection ensures only the finest fruit moves forward, capturing the natural sweetness and depth that define great coffee.",
    image: "/process1.png",
  },
  {
    title: "Step 2: Under the Sun",
    text: "After harvesting, the cherries are gently laid out on wide drying beds to bask in the sunlight. For several days, they are turned and tended to, allowing air and warmth to draw out moisture naturally.",
    image: "/process2.png",
  },
  {
    title: "Step 3: Preparing for Perfection",
    text: "Once dried, the coffee beans undergo a careful transformation in the milling stage. Each batch is sorted, polished, and inspected to ensure only premium beans continue the journey.",
    image: "/process3.png",
  },
  {
    title: "Step 4: The Flavor Awakens",
    text: "In the roastery, the green beans meet heat and magic happens. Through precise control of time and temperature, roasters coax out deep aromas and complex flavors hidden within each bean.",
    image: "/process4.png",
  },
  {
    title: "Step 5: From Beans to Product",
    text: "Once roasted, the coffee is ground and sealed in air-tight bags to lock in freshness. This ensures that every cup brewed later carries the same richness intended by its makers.",
    image: "/process5.png",
  },
  {
    title: "Step 6: The Final Step",
    text: "Finished coffee bags are labeled and prepared for shipment to coffee lovers around the world. What began as a simple cherry now brings warmth and connection to every cup it fills.",
    image: "/process6.png",
  },
];

const Process = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".step-item");

      steps.forEach((el, i) => {
        const fromX = window.innerWidth >= 768 ? (i % 2 === 0 ? -100 : 100) : 0;

        gsap.from(el.querySelector(".step-image"), {
          x: fromX,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(el.querySelector(".step-text"), {
          x: fromX * 0.6,
          y: 30,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.08,
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    }, sectionRef);

    const handleResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-[#f9f5f1] to-[#e8dccf] py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#4e2b1a] mb-16">
          Our Process
        </h2>

        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#d3c4ae] h-full hidden md:block" />

          {/* Steps */}
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`step-item mb-20 flex flex-col md:flex-row items-center md:justify-between ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="step-image md:w-5/12 w-full mb-8 md:mb-0">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-72 object-cover"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="step-text md:w-5/12 w-full text-center md:text-left">
                <h3 className="text-2xl font-semibold text-[#4e2b1a] mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
