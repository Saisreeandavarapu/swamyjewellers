import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import QuickViewModal from '../components/ui/QuickViewModal';

const Jewellery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Gold' | 'Diamond' | 'Silver'>('Gold');
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const filteredProducts = products.filter(p => p.material === activeTab);

  return (
    <div className="bg-luxury-cream pb-24 min-h-screen">
      {/* Category Header */}
      <div className="relative py-24 bg-luxury-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/banners/image copy 3.png"
            className="w-full h-full object-cover"
            alt="Jewellery Pattern"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-serif font-bold text-white mb-6"
          >
            Collections by Type
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto font-light leading-relaxed text-sm md:text-base"
          >
            Explore our curated collections categorized by their precious metals and gemstones.
          </motion.p>
        </div>
      </div>

      {/* Tabs */}
      <div className="container mx-auto px-6 -mt-10 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-2 rounded-2xl shadow-xl flex max-w-lg mx-auto border border-gray-100 overflow-x-auto no-scrollbar"
        >
          {(['Gold', 'Diamond', 'Silver'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 md:py-4 px-4 md:px-6 rounded-xl font-bold text-[10px] md:text-sm tracking-widest transition-all whitespace-nowrap ${activeTab === tab
                ? 'bg-gold text-white shadow-lg'
                : 'text-gray-500 hover:text-gold'
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Products Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard
                    product={product}
                    onQuickView={setSelectedProduct}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-serif text-xl">New items arriving soon in the {activeTab} collection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Material Info */}
      <section className="container mx-auto px-4 sm:px-6 mb-16 sm:mb-20 lg:mb-24">
        <div className="bg-white rounded-3xl sm:rounded-[2.5rem] lg:rounded-[3rem] 
                  p-6 sm:p-10 md:p-14 lg:p-20 
                  shadow-sm border border-[#D4AF37]/10 
                  overflow-hidden relative">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

            {/* Text Content */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-4 sm:mb-6 italic text-[#D4AF37]">
                The {activeTab} Standard
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed font-light text-sm sm:text-base">

                {activeTab === 'Gold' && (
                  <>
                    <p>
                      Our Gold collection is crafted exclusively using 22K and 18K BIS Hallmarked gold, ensuring the highest standards of purity and value.
                    </p>
                    <p>
                      From traditional temple jewellery to contemporary minimalist designs, our gold pieces are built to be heirlooms for generations.
                    </p>
                  </>
                )}

                {activeTab === 'Diamond' && (
                  <>
                    <p>
                      Every diamond at Swamy Jewellers is GIA, IGI, or HRD certified. We select only the top 1% of diamonds that meet our strict 4C criteria.
                    </p>
                    <p>
                      Experience unparalleled sparkle with our signature cuts and precision-set designs that maximize fire and brilliance.
                    </p>
                  </>
                )}

                {activeTab === 'Silver' && (
                  <>
                    <p>
                      Crafted in high-quality 925 Sterling Silver, our silver collection offers elegance that is versatile and modern.
                    </p>
                    <p>
                      Each piece is finished with an anti-tarnish rhodium coating to maintain its brilliant luster for years to come.
                    </p>
                  </>
                )}

              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src={
                    activeTab === 'Gold'
                      ? "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=800"
                      : activeTab === 'Diamond'
                        ? "https://images.unsplash.com/photo-1598560917505-59a3ad559071?w=800"
                        : "/products/image copy 6.png"
                  }
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  alt={activeTab}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Jewellery;
