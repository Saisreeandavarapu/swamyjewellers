import React from 'react';
import { X, ShoppingCart, Heart, Phone } from 'lucide-react';
import { type Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'framer-motion';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();

  if (!product) return null;

  const isWishlisted = wishlist.includes(product.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-gold hover:text-white transition-all shadow-md"
          >
            <X size={20} />
          </button>

          {/* image section */}
          <div className="w-full md:w-1/2 bg-gray-50 aspect-square md:aspect-auto">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop';
              }}
            />
          </div>

          {/* info section */}
          <div className="w-full md:w-1/2 p-8 overflow-y-auto">
            <div className="mb-6">
              <span className="text-gold uppercase tracking-widest font-bold text-xs">
                {product.category} | {product.material}
              </span>
              <h2 className="text-3xl font-serif font-bold text-luxury-black mt-2">
                {product.name}
              </h2>
              <div className="flex items-center space-x-3 mt-4">
                <span className="text-2xl font-bold text-gold">
                  ₹{product.price.toLocaleString('en-IN')}
                </span>
                <span className="text-gray-400 line-through">
                  ₹{(product.price * 1.2).toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-col space-y-4">
              <button
                onClick={() => {
                  addToCart(product);
                  onClose();
                }}
                className="w-full flex items-center justify-center space-x-2 bg-gold hover:bg-gold-dark text-white py-4 rounded-full font-bold transition-all transform hover:scale-[1.02]"
              >
                <ShoppingCart size={20} />
                <span>ADD TO CART</span>
              </button>

              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`flex items-center justify-center space-x-2 border py-3 rounded-full transition-all ${
                    isWishlisted 
                      ? 'bg-gold/10 border-gold text-gold' 
                      : 'border-gray-200 text-gray-600 hover:border-gold hover:text-gold'
                  }`}
                >
                  <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
                  <span>{isWishlisted ? 'WISHLISTED' : 'WISHLIST'}</span>
                </button>

                <a
                  href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 border border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-full transition-all"
                >
                  <Phone size={18} />
                  <span>INQUIRE</span>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium tracking-wide">
              <span>SKU: SW-{product.id}0029</span>
              <span className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                In Stock & Ready to Ship
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuickViewModal;
