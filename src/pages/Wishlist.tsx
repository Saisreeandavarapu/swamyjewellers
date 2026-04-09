import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const Wishlist: React.FC = () => {
  const { wishlist, toggleWishlist } = useCart();

  // Get full product data for items in wishlist
  const wishlistedProducts = products.filter(p => wishlist.includes(p.id));

  if (wishlistedProducts.length === 0) {
    return (
      <div className="bg-luxury-cream min-h-[70vh] flex flex-col items-center justify-center p-6">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100">
          <div className="bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <Heart className="text-gold" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-luxury-black mb-4">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-10 leading-relaxed font-light">
            Keep track of the pieces you love. Start browsing our collection and add your favorites here.
          </p>
          <Link to="/shop" className="btn-gold block">
            EXPLORE COLLECTION
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-luxury-black">My Wishlist</h1>
          <p className="text-gray-500 mt-2">{wishlistedProducts.length} items saved for later</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistedProducts.map((product) => (
            <div key={product.id} className="relative group">
              <ProductCard 
                product={product} 
                onQuickView={() => {}} // We'll disable or handle quickview separately if needed
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link to="/shop" className="flex items-center text-luxury-black font-bold text-sm hover:text-gold transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            CONTINUE BROWSING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
