import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { 
  ShoppingCart, 
  Heart, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw,
  Star,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { motion } from 'framer-motion';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find(p => p.id === id);
  const isWishlisted = product ? wishlist.includes(product.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-luxury-cream">
        <h2 className="text-2xl font-serif font-bold mb-4">Product not found</h2>
        <Link to="/shop" className="btn-gold">Back to Shop</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="bg-luxury-cream min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-center text-xs uppercase tracking-widest text-gray-400 space-x-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link to="/shop" className="hover:text-gold transition-colors">Shop</Link>
            <ChevronRight size={12} />
            <span className="text-luxury-black font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Product Images */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="aspect-[4/5] bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1200';
                }}
              />
              {product.isBestSeller && (
                <span className="absolute top-6 left-6 bg-gold text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Best Seller
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="aspect-square bg-white rounded-xl overflow-hidden border border-gray-100 hover:border-gold transition-colors cursor-pointer opacity-60 hover:opacity-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200';
                    }}
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Product Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <p className="text-gold font-bold uppercase tracking-[0.3em] text-xs mb-2">
                {product.material} Collection / {product.category}
              </p>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-luxury-black mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex text-gold">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-gray-400 text-sm font-medium border-l border-gray-200 pl-4">
                  (24 Reviews)
                </span>
              </div>

              <div className="text-3xl font-bold text-luxury-black mb-8">
                ₹{product.price.toLocaleString('en-IN')}
              </div>

              <p className="text-gray-500 leading-relaxed font-light text-lg mb-10">
                {product.description}
              </p>
            </div>

            {/* Selection Options */}
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center border-2 border-gray-100 rounded-full px-4 py-2 bg-white shadow-inner">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 hover:text-gold transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-bold text-2xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 hover:text-gold transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>

                <button 
                  onClick={handleAddToCart}
                  className="flex-1 btn-gold py-5 shadow-2xl flex items-center justify-center space-x-3 text-lg font-bold tracking-widest"
                >
                  <ShoppingCart size={22} />
                  <span>ADD TO BAG</span>
                </button>

                <button 
                  onClick={() => toggleWishlist(product.id)}
                  className={`p-5 rounded-full border-2 transition-all shadow-md ${
                    isWishlisted 
                      ? 'bg-gold border-gold text-white shadow-gold/20' 
                      : 'bg-white border-gray-100 text-luxury-black hover:border-gold hover:text-gold'
                  }`}
                >
                  <Heart size={22} fill={isWishlisted ? 'white' : 'none'} />
                </button>
              </div>
            </div>

            {/* Product Specifications - NEW */}
            <div className="pt-10 space-y-8">
              <h3 className="text-xl font-serif font-bold text-luxury-black border-b border-gold/20 pb-4">
                Product Information
              </h3>
              <div className="grid grid-cols-2 gap-y-4 text-sm">
                <div className="text-gray-400 font-medium">Product Code</div>
                <div className="text-luxury-black font-bold text-right">SJ-{product.id}02495</div>
                
                <div className="text-gray-400 font-medium">Metal Type</div>
                <div className="text-luxury-black font-bold text-right">{product.material} (Hallmarked)</div>
                
                <div className="text-gray-400 font-medium">Metal Purity</div>
                <div className="text-luxury-black font-bold text-right">{product.material === 'Gold' ? '22K (916)' : '18K / Sterling'}</div>
                
                <div className="text-gray-400 font-medium">Gross Weight</div>
                <div className="text-luxury-black font-bold text-right">12.450 grams</div>
                
                <div className="text-gray-400 font-medium">Occasion</div>
                <div className="text-luxury-black font-bold text-right">Bridal / Anniversary</div>
              </div>
              
              <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm space-y-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="text-gold shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm">BIS Hallmarked</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">This product is certified by the Bureau of Indian Standards (BIS) and carries the hallmark of purity.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Star className="text-gold shrink-0" size={20} />
                  <div>
                    <h5 className="font-bold text-sm">Certified Diamonds</h5>
                    <p className="text-xs text-gray-500 leading-relaxed">All stones are certified by IGI / SGL ensuring the highest standards of color and clarity.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-10">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-white shadow-sm border border-gray-50 rounded-full text-gold">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">100% Purity</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-white shadow-sm border border-gray-50 rounded-full text-gold">
                  <Truck size={20} />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="p-3 bg-white shadow-sm border border-gray-50 rounded-full text-gold">
                  <RotateCcw size={20} />
                </div>
                <span className="text-[8px] font-bold uppercase tracking-widest text-gray-400">Easy Returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Immersive Brand Section - NEW */}
        <div className="mt-32 py-20 bg-white rounded-[3rem] shadow-inner overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
          
          <div className="container mx-auto px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-luxury-black">Refining Elegance Since 1995</h2>
              <p className="text-gray-500 leading-relaxed font-light text-lg">
                At Swamy Jewellers, we believe every piece of jewellery tells a story. Our master craftsmen combine centuries-old traditional techniques with modern design sensibilities to create masterpieces that are passed down through generations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                <div>
                  <div className="text-3xl font-serif font-bold text-gold mb-2">29+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Years of Trust</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gold mb-2">10k+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Designs Created</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gold mb-2">100%</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Transparency</div>
                </div>
                <div>
                  <div className="text-3xl font-serif font-bold text-gold mb-2">Purity</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl font-serif font-bold text-center mb-16">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map((p) => (
                <div 
                  key={p.id} 
                  className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all cursor-pointer group"
                  onClick={() => navigate(`/product/${p.id}`)}
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-4">
                    <img 
                      src={p.image} 
                      alt={p.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-serif font-bold text-luxury-black">{p.name}</h3>
                  <p className="text-gold font-bold mt-2">₹{p.price.toLocaleString('en-IN')}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
