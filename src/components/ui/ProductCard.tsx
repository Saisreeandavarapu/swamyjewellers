import React from 'react';
import { ShoppingCart, Heart, Eye, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { type Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, removeFromCart, updateQuantity, toggleWishlist, wishlist, getItemQuantity } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
        <Link to={`/product/${product.id}`} className="block w-full h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop';
            }}
          />
          
          {/* Shimmer Effect */}
          <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 pointer-events-none" />

          {/* Labels */}
          {product.isBestSeller && (
            <span className="absolute top-3 left-3 bg-gold text-white text-[10px] font-bold px-2 py-1 rounded-sm uppercase tracking-wider">
              Best Seller
            </span>
          )}
        </Link>

        {/* Action Buttons (Overlay) */}
        <div className="absolute -bottom-12 group-hover:bottom-4 left-0 right-0 px-4 transition-all duration-300 opacity-0 group-hover:opacity-100 z-10">
          <div className="flex items-center space-x-2">
            {/* Main Action Area */}
            <div className="flex-grow flex items-center bg-white rounded-full shadow-lg overflow-hidden border border-gray-100 h-10">
              {getItemQuantity(product.id) === 0 ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full h-full flex items-center justify-center space-x-2 text-[10px] font-bold tracking-widest text-luxury-black hover:bg-gold hover:text-white transition-all uppercase"
                >
                  <ShoppingCart size={14} />
                  <span>Add to Bag</span>
                </button>
              ) : (
                <div className="w-full h-full flex items-center justify-between px-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const currentQty = getItemQuantity(product.id);
                      if (currentQty === 1) {
                        removeFromCart(product.id);
                      } else {
                        updateQuantity(product.id, currentQty - 1);
                      }
                    }}
                    className="p-1 hover:text-gold transition-colors"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="text-xs font-bold text-luxury-black">{getItemQuantity(product.id)}</span>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      updateQuantity(product.id, getItemQuantity(product.id) + 1);
                    }}
                    className="p-1 hover:text-gold transition-colors"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              )}
            </div>

            {/* Secondary Actions */}
            <div className="flex space-x-1">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onQuickView(product);
                }}
                className="bg-white text-luxury-black p-2.5 rounded-full hover:bg-gold hover:text-white transition-all shadow-md flex items-center justify-center"
                title="Quick View"
              >
                <Eye size={16} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleWishlist(product.id);
                }}
                className={`p-2.5 rounded-full transition-all shadow-md flex items-center justify-center ${
                  isWishlisted ? 'bg-gold text-white' : 'bg-white text-luxury-black hover:bg-gold hover:text-white'
                }`}
                title="Add to Wishlist"
              >
                <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.id}`}>
          <h3 className="font-serif text-lg text-luxury-black mb-2 hover:text-gold transition-colors truncate px-2">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-gold font-bold text-lg">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          {product.isBestSeller && (
            <span className="text-gray-400 line-through text-sm">
              ₹{(product.price * 1.2).toLocaleString('en-IN')}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
