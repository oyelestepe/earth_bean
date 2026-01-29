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
    <section className="bg-cream-100 py-24 px-6 border-t border-coffee-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-coffee-900 mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col justify-between text-left border border-coffee-50"
            >
              <Quote className="text-gold-500 w-10 h-10 mb-6" />
              <p className="text-coffee-700 italic mb-8 leading-relaxed text-lg font-light">
                “{item.quote}”
              </p>

              <div>
                <div className="flex text-gold-500 mb-3 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" className="w-4 h-4" />
                  ))}
                </div>
                <p className="font-bold text-coffee-900 font-serif text-lg">{item.author}</p>
                <p className="text-sm text-coffee-600">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
