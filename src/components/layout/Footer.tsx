import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageSquare, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#FADADD]/70 via-white/60 to-[#FADADD]/50 backdrop-blur-3xl border-t border-white/40 pt-20 pb-10 overflow-hidden">

      {/* Gold Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-70" />

      {/* Glow Effects */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />

      {/* Glass Border Overlay */}
      <div className="absolute inset-0 border border-white/20 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tighter text-black">
                SWAMY
              </span>
              <span className="text-xs uppercase tracking-[0.3em] -mt-1 text-[#D4AF37]">
                Jewellers
              </span>
            </Link>

            <p className="text-gray-700 text-sm leading-relaxed">
              Crafting timeless elegance and heritage since 1985. Our pieces are
              more than just jewellery; they are stories of legacy and love.
            </p>

            <div className="flex space-x-4">
              <a href="#" className="bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm">
                <Globe size={18} />
              </a>
              <a href="#" className="bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={18} />
              </a>
              <a href="#" className="bg-white/50 backdrop-blur-md p-2 rounded-full hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-sm">
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-black">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li><Link to="/" className="hover:text-[#D4AF37] transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Shop All</Link></li>
              <li><Link to="/jewellery" className="hover:text-[#D4AF37] transition-colors">Jewellery Collections</Link></li>
              <li><Link to="/about" className="hover:text-[#D4AF37] transition-colors">Our Story</Link></li>
              <li><Link to="/gallery" className="hover:text-[#D4AF37] transition-colors">Image Gallery</Link></li>
              <li><Link to="/contact" className="hover:text-[#D4AF37] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-black">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start">
                <MapPin className="mr-3 text-[#D4AF37] shrink-0" size={18} />
                <span>123 Jewellery Lane, Heritage Plaza, Hyderabad, India</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-[#D4AF37]" size={18} />
                <a href="tel:+919876543210" className="hover:text-[#D4AF37] transition">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-[#D4AF37]" size={18} />
                <a href="mailto:info@swamyjewellers.com" className="hover:text-[#D4AF37] transition">
                  info@swamyjewellers.com
                </a>
              </li>
              <li className="flex items-center">
                <MessageSquare className="mr-3 text-[#D4AF37]" size={18} />
                <a
                  href="https://wa.me/919876543210?text=I'm%20interested%20in%20your%20jewellery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D4AF37] transition"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif font-semibold mb-6 text-black">Newsletter</h4>
            <p className="text-gray-700 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>

            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/70 backdrop-blur-md border border-white/40 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-[#D4AF37] transition-all"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-[#D4AF37] hover:to-yellow-500 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 uppercase text-xs tracking-widest shadow-md"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 mt-16 pt-8 text-center text-gray-600 text-xs tracking-widest uppercase">
          <p>&copy; {new Date().getFullYear()} Swamy Jewellers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;