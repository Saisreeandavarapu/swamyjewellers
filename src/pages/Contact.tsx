import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-luxury-cream pb-16 sm:pb-20 md:pb-24">

      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-3 sm:mb-4">
            Contact Us
          </h1>
          <p className="text-gray-500 max-w-md sm:max-w-2xl mx-auto font-light text-sm sm:text-base">
            Have a question about a piece or need expert consultation? Reach out to our specialists today.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 -mt-6 sm:-mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 md:gap-12">

          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 sm:space-x-6">
              <div className="bg-primary/20 p-3 sm:p-4 rounded-xl text-gold">
                <Phone size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-1">Call Us</h4>
                <p className="text-gray-500 text-xs sm:text-sm mb-2">Mon-Sat, 10am to 8pm</p>
                <a href="tel:+919876543210" className="text-gold font-bold text-sm">
                  +91 98765 43210
                </a>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 sm:space-x-6">
              <div className="bg-secondary/20 p-3 sm:p-4 rounded-xl text-secondary-dark">
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-1">Email Us</h4>
                <p className="text-gray-500 text-xs sm:text-sm mb-2">Typically reply in 24h</p>
                <a href="mailto:info@swamyjewellers.com" className="text-gold font-bold text-sm">
                  info@swamyjewellers.com
                </a>
              </div>
            </div>

            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4 sm:space-x-6">
              <div className="bg-gold/10 p-3 sm:p-4 rounded-xl text-gold">
                <MapPin size={20} className="sm:w-6 sm:h-6" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mb-1">Visit Store</h4>
                <p className="text-gray-500 text-xs sm:text-sm">
                  123 Jewellery Lane, Heritage Plaza, Hyderabad, India
                </p>
              </div>
            </div>

            <div className="bg-luxury-black p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-lg text-white">
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <Clock className="text-gold" size={20} />
                <h4 className="font-serif font-bold text-lg sm:text-xl">Opening Hours</h4>
              </div>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-400">
                <li className="flex justify-between"><span>Monday - Saturday</span> <span>10:30 AM - 08:30 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span> <span>11:30 AM - 05:30 PM</span></li>
                <li className="pt-2 border-t border-gray-800 text-[10px] sm:text-xs text-gold">
                  Appointment Recommended for Diamond Consulting
                </li>
              </ul>
            </div>

          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-xl border border-gray-100 max-w-full sm:max-w-2xl mx-auto h-full">

              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-serif font-bold mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  We respond usually within 1-2 hours.
                </p>
              </div>

              <AnimatePresence>
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 sm:py-12 text-center"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle size={28} />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold mb-2">Message Sent!</h4>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      Thank you. We'll be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                        <input className="w-full bg-gray-50 border border-transparent focus:border-gold py-3 px-4 rounded-xl outline-none text-sm" required />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                        <input className="w-full bg-gray-50 border border-transparent focus:border-gold py-3 px-4 rounded-xl outline-none text-sm" required />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Subject</label>
                      <select className="w-full bg-gray-50 border border-transparent focus:border-gold py-3 px-4 rounded-xl text-sm">
                        <option>Product Inquiry</option>
                        <option>Appointment Booking</option>
                        <option>Bespoke Design</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Message</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-transparent focus:border-gold py-3 px-4 rounded-xl text-sm resize-none" required />
                    </div>

                    <button className="w-full btn-gold py-3 sm:py-4 text-xs sm:text-sm flex items-center justify-center space-x-2">
                      <span>SEND MESSAGE</span>
                      <Send size={16} />
                    </button>

                  </form>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16 sm:mt-20 md:mt-24 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-[250px] sm:h-[350px] md:h-[450px] border-4 sm:border-8 border-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=..."
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;