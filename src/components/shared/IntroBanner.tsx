import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Timer } from 'lucide-react';

const IntroBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft <= 0) {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-black/70 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.8, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.8, y: 20 }}
          className="relative w-full max-w-lg bg-white rounded-[2rem] overflow-hidden shadow-2xl border-4 border-primary"
        >
          {/* Baby Pink Header */}
          <div className="bg-primary p-8 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -mr-16 -mt-16 blur-2xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-gold/20 rounded-full -ml-12 -mb-12 blur-xl" />
            
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block mb-4 text-white"
            >
              <Gift size={48} />
            </motion.div>
            
            <h2 className="text-3xl font-serif font-bold text-luxury-black mb-2">Exquisite Welcome!</h2>
            <p className="text-luxury-charcoal uppercase tracking-widest text-xs font-bold">Special Opening Offer</p>
          </div>

          {/* Content */}
          <div className="p-10 text-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-4xl font-serif font-bold text-gold">FLAT 25% OFF</h3>
              <p className="text-gray-500 font-light italic">On your first purchase above ₹50,000</p>
            </div>

            <div className="flex items-center justify-center space-x-2 text-primary-dark font-bold bg-primary-light py-3 rounded-xl">
              <Timer size={20} />
              <span className="uppercase tracking-widest text-sm">Valid for: {timeLeft} seconds</span>
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="w-full btn-gold py-4 text-lg font-bold shadow-lg"
            >
              RECLAIM OFFER NOW
            </button>

            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 text-xs hover:text-gray-600 transition-colors uppercase tracking-widest"
            >
              Maybe Later
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="absolute top-4 right-4 text-luxury-black/40 hover:text-luxury-black transition-colors"
          >
            <X size={24} />
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default IntroBanner;
