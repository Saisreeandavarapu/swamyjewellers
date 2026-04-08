import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton: React.FC = () => {
  const whatsappNumber = '919876543210';
  const phoneNumber = '+911234567890';
  const message = encodeURIComponent("Namaste Swamy Jewellers! I'm interested in viewing your latest collections.");

  return (
    <div className="fixed bottom-6 right-6 z-[40] flex flex-col items-center space-y-4">
      {/* Call Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        href={`tel:${phoneNumber}`}
        className="bg-sky-600 text-white p-4 rounded-full shadow-2xl hover:bg-sky-700 transition-all group relative"
        title="Call Us"
      >
        <PhoneCall size={24} />
        <span className="absolute right-full mr-4 bg-white text-luxury-black px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Call Experts
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
        href={`https://wa.me/${whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all group relative"
        title="WhatsApp Us"
      >
        <MessageCircle size={24} />
        <span className="absolute right-full mr-4 bg-white text-luxury-black px-3 py-1 rounded-md text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
          Chat on WhatsApp
        </span>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
        </span>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
