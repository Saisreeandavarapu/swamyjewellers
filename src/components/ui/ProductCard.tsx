import React from 'react';
import { ShoppingCart, Heart, Eye } from 'lucide-react';
import { type Product } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onQuickView }) => {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-50">
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

        {/* Action Buttons (Overlay) */}
        <div className="absolute -bottom-12 group-hover:bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
          <button
            onClick={() => onQuickView(product)}
            className="bg-white text-luxury-black p-2 rounded-full hover:bg-gold hover:text-white transition-all shadow-md"
            title="Quick View"
          >
            <Eye size={18} />
          </button>
          <button
            onClick={() => addToCart(product)}
            className="bg-white text-luxury-black p-2 rounded-full hover:bg-gold hover:text-white transition-all shadow-md"
            title="Add to Cart"
          >
            <ShoppingCart size={18} />
          </button>
          <button
            onClick={() => toggleWishlist(product.id)}
            className={`p-2 rounded-full transition-all shadow-md ${
              isWishlisted ? 'bg-gold text-white' : 'bg-white text-luxury-black hover:bg-gold hover:text-white'
            }`}
            title="Add to Wishlist"
          >
            <Heart size={18} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">
          {product.category}
        </p>
        <h3 className="font-serif text-lg text-luxury-black mb-2 truncate px-2">
          {product.name}
        </h3>
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
