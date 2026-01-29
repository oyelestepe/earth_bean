import React, { useState } from 'react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { IoLogoGithub } from "react-icons/io5";

function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer className="bg-coffee-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-serif mb-4 text-gold-400">Earth & Bean</h3>
            <p className="text-cream-100 mb-6 leading-relaxed">
              Premium coffee roasted fresh, sourced sustainably, delivered with care.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/oyelestepe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <IoLogoGithub className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Our Story</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Shop Coffee</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Brewing Guides</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">Returns</a></li>
              <li><a href="#" className="text-cream-100 hover:text-gold-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-gold-400">Stay Connected</h4>
            <p className="text-cream-100 mb-4 text-sm">
              Get brewing tips and exclusive offers
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-cream-100/60 focus:outline-none focus:border-gold-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-500 text-coffee-900 rounded-lg font-semibold hover:bg-gold-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-cream-100 text-sm">
              © {new Date().getFullYear()} Earth & Bean. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-cream-100">
              <a href="#" className="hover:text-gold-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-gold-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
