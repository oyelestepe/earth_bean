import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Earth & Bean didn’t just give me coffee they gave me a ritual. Each sip feels smooth, balanced, and alive.",
    author: "Marcus J.",
    role: "Coffee Enthusiast",
  },
  {
    quote:
      "The aroma, the taste, the energy… It’s perfection in every cup. Truly the best espresso I’ve ever tried.",
    author: "Sophie L.",
    role: "Designer",
  },
  {
    quote:
      "From packaging to flavor, everything screams quality. I’ve switched entirely to Earth & Bean for my mornings.",
    author: "David R.",
    role: "Photographer",
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gradient-to-b from-[#f4ede4] to-[#e0d3c2] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#4e2b1a] mb-10">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between text-left"
            >
              <Quote className="text-[#c7a45a] w-10 h-10 mb-4" />
              <p className="text-gray-700 italic mb-6 leading-relaxed">
                “{item.quote}”
              </p>

              <div>
                <div className="flex text-[#c7a45a] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="#c7a45a" className="w-5 h-5" />
                  ))}
                </div>
                <p className="font-semibold text-[#4e2b1a]">{item.author}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
