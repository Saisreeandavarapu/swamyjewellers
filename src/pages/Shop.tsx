import React, { useState, useMemo, useEffect } from 'react';
import { products, categories, materials } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import QuickViewModal from '../components/ui/QuickViewModal';
import { Filter, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const Shop: React.FC = () => {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  
  // Filters state
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeMaterial, setActiveMaterial] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(1000000);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [searchQuery, setSearchQuery] = useState('');

  // Handle URL params
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    const mat = params.get('material');
    if (cat) setActiveCategory(cat);
    if (mat) setActiveMaterial(mat);
  }, [location]);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchCat = activeCategory === 'All' || product.category + 's' === activeCategory || product.category === activeCategory;
      const matchMat = activeMaterial === 'All' || product.material === activeMaterial;
      const matchPrice = product.price <= priceRange;
      const matchSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchMat && matchPrice && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'newest') return b.id.localeCompare(a.id);
      return 0;
    });
  }, [activeCategory, activeMaterial, priceRange, sortBy, searchQuery]);

  return (
    <div className="bg-luxury-cream min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-4">
            Our Collection
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Browse through our curated range of exquisite jewellery, crafted with passion and precision.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar Filters - Desktop */}
          <aside className="hidden lg:block w-64 space-y-10">
            {/* Search */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg border-b border-gold/20 pb-2">Search</h4>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="What are you looking for?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gray-200 rounded-lg py-3 px-4 pl-10 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <Search className="absolute left-3 top-3.5 text-gray-400" size={16} />
              </div>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg border-b border-gold/20 pb-2">Category</h4>
              <div className="space-y-2">
                {['All', ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`block w-full text-left py-1 text-sm transition-colors ${
                      activeCategory === cat ? 'text-gold font-bold' : 'text-gray-600 hover:text-gold'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div className="space-y-4">
              <h4 className="font-serif font-bold text-lg border-b border-gold/20 pb-2">Material</h4>
              <div className="space-y-2">
                {['All', ...materials].map((mat) => (
                  <button
                    key={mat}
                    onClick={() => setActiveMaterial(mat)}
                    className={`block w-full text-left py-1 text-sm transition-colors ${
                      activeMaterial === mat ? 'text-gold font-bold' : 'text-gray-600 hover:text-gold'
                    }`}
                  >
                    {mat}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-gold/20 pb-2">
                <h4 className="font-serif font-bold text-lg">Price Range</h4>
                <span className="text-xs text-gold font-bold">Up to ₹{priceRange.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min="5000"
                max="1000000"
                step="5000"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between text-[10px] text-gray-500 font-bold">
                <span>₹5,000</span>
                <span>₹1,000,000+</span>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              <div className="text-sm text-gray-500 font-medium">
                Showing <span className="text-luxury-black font-bold">{filteredProducts.length}</span> results
              </div>
              
              <div className="flex items-center space-x-4">
                {/* Mobile Filter Toggle */}
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center space-x-2 text-sm font-bold text-luxury-black border border-gray-200 px-4 py-2 rounded-lg"
                >
                  <Filter size={16} />
                  <span>Filters</span>
                </button>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-400 hidden sm:inline">Sort by:</span>
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="text-sm font-bold text-luxury-black bg-transparent border-none focus:ring-0 cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest Arrivals</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onQuickView={setSelectedProduct} 
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl py-20 text-center border border-dashed border-gray-200">
                <div className="bg-primary/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="text-gold" size={24} />
                </div>
                <h3 className="text-xl font-serif font-bold text-luxury-black mb-2">No products found</h3>
                <p className="text-gray-500 text-sm mb-6">Try adjusting your filters or search terms.</p>
                <button 
                  onClick={() => {
                    setActiveCategory('All');
                    setActiveMaterial('All');
                    setPriceRange(1000000);
                    setSearchQuery('');
                  }}
                  className="text-gold font-bold text-sm tracking-widest border-b border-gold"
                >
                  CLEAR ALL FILTERS
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Mobile Filter Drawer */}
      <AnimatePresence>
        {isMobileFilterOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileFilterOpen(false)}
              className="fixed inset-0 bg-black/60 z-[70] backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed right-0 top-0 h-full w-[85%] max-w-sm bg-white z-[80] shadow-2xl p-6 lg:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-serif font-bold">Filters</h3>
                <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-gray-100 rounded-full">
                  <X size={20} />
                </button>
              </div>

              {/* Mobile Filter Content - Same as desktop sidebar but bigger targets */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...categories].map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeCategory === cat ? 'bg-gold text-white shadow-md' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold">Material</h4>
                  <div className="flex flex-wrap gap-2">
                    {['All', ...materials].map((mat) => (
                      <button
                        key={mat}
                        onClick={() => setActiveMaterial(mat)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          activeMaterial === mat ? 'bg-gold text-white shadow-md' : 'bg-gray-100 text-gray-600'
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold uppercase tracking-widest text-xs text-gold">Shop by Price</h4>
                  <input
                    type="range"
                    min="5000"
                    max="1000000"
                    step="5000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full accent-gold"
                  />
                  <div className="flex justify-between text-sm font-bold text-luxury-black">
                    <span>Under: ₹{priceRange.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <button 
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full bg-luxury-black text-white font-bold py-4 rounded-xl mt-8 tracking-widest text-sm"
                >
                  APPLY FILTERS
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Shop;
