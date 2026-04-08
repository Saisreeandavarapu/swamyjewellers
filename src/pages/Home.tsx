import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ui/ProductCard';
import QuickViewModal from '../components/ui/QuickViewModal';
import { ArrowRight, Star, ShieldCheck, Truck, Trophy, Sparkles, Gem } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  const heroSlides = [
    {
      title: "Timeless Elegance",
      subtitle: "EXQUISITE DIAMOND COLLECTIONS",
      description: "Discover the brilliance of handcrafted diamond masterpieces designed for your most precious moments.",
      image: '/banners/image.png',
      btnText: "Shop Diamonds",
      btnLink: "/shop?material=Diamond"
    },
    {
      title: "Royal Heritage",
      subtitle: "22K TRADITIONAL GOLD",
      description: "Celebrate tradition with our heritage gold collection, inspired by the royal artisanship of ancient India.",
      image: '/banners/image copy.png',
      btnText: "Explore Gold",
      btnLink: "/shop?material=Gold"
    },
    {
      title: "Handcrafted Luxury",
      subtitle: "SILVER & PRECIOUS STONES",
      description: "Contemporary silver jewellery designed for the modern woman who values understated luxury.",
      image: '/banners/image copy 2.png',
      btnText: "Explore Silver",
      btnLink: "/shop?material=Silver"
    },
    {
      title: "The Bridal Edit",
      subtitle: "WEDDING SPECIALS",
      description: "Make your big day unforgettable with our exclusive bridal ensembles that capture the essence of luxury.",
      image: '/banners/image copy 3.png',
      btnText: "View Bridal",
      btnLink: "/shop?category=Necklace"
    },
    {
      title: "Bespoke Jewelry",
      subtitle: "CUSTOM DESIGNED FOR YOU",
      description: "Work with our master artisans to create a one-of-a-kind piece that reflects your unique story.",
      image: '/banners/image copy 4.png',
      btnText: "Start Designing",
      btnLink: "/contact"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-scroll logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[85vh] bg-luxury-cream overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img 
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].title}
              className="w-full h-full object-cover transform scale-105"
            />
            
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-6 md:px-12">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="max-w-2xl text-white"
                >
                  <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm mb-4 block">
                    {heroSlides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">
                    {heroSlides[currentSlide].title}
                  </h1>
                  <p className="text-lg text-gray-100 mb-10 leading-relaxed font-light">
                    {heroSlides[currentSlide].description}
                  </p>
                  <div className="flex space-x-4">
                    <Link to={heroSlides[currentSlide].btnLink} className="btn-gold text-lg">
                      {heroSlides[currentSlide].btnText}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Hero Navigation Controls */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === idx ? 'bg-gold w-10' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Desktop Grid */}
          <div className="hidden lg:grid grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck size={32} />, title: "100% Certified", desc: "BIS Hallmarked & GIA Certified" },
              { icon: <Truck size={32} />, title: "Secure Delivery", desc: "Insured Shipping Worldwide" },
              { icon: <Trophy size={32} />, title: "30 Years Legacy", desc: "Trusted by over 1M Families" },
              { icon: <Star size={32} />, title: "Handcrafted", desc: "Unique Designer Pieces" }
            ].map((badge, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-secondary p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-primary-light p-4 rounded-2xl text-gold">
                  {badge.icon}
                </div>
                <div>
                  <h4 className="font-bold text-luxury-black uppercase tracking-widest text-xs mb-1">
                    {badge.title}
                  </h4>
                  <p className="text-[10px] text-gray-400 font-medium">
                    {badge.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Auto-Scroll Marquee */}
          <div className="lg:hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="flex space-x-6 w-[200%]"
            >
              {[1, 2].map((iter) => (
                <div key={iter} className="flex space-x-6 w-full">
                  {[
                    { icon: <ShieldCheck size={24} />, title: "100% Certified" },
                    { icon: <Truck size={24} />, title: "Secure Delivery" },
                    { icon: <Trophy size={24} />, title: "30 Years Legacy" },
                    { icon: <Star size={24} />, title: "Handcrafted" }
                  ].map((badge, idx) => (
                    <div
                      key={idx}
                      className="bg-primary-light/30 border border-primary/10 p-6 rounded-2xl flex items-center space-x-4 min-w-[200px]"
                    >
                      <div className="text-gold">{badge.icon}</div>
                      <h4 className="font-bold text-luxury-black uppercase tracking-widest text-[10px]">
                        {badge.title}
                      </h4>
                    </div>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heritage Section (NEW) */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <span className="text-gold font-bold tracking-widest text-xs uppercase mb-4 block">Our Heritage</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight">
                A Thirty Year Legacy of <span className="text-primary-dark">Trust</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 font-light">
                Since 1985, Swamy Jewellers has been a beacon of purity and excellence in the world of high jewelry. What started as a small family boutique has grown into a prestigious institution, serving generation after generation with the same unwavering commitment to transparency and artistic perfection.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-3xl font-serif font-bold text-gold">1985</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">The Inception</p>
                </div>
                <div>
                  <h4 className="text-3xl font-serif font-bold text-gold">1M+</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">Happy Families</p>
                </div>
              </div>
            </motion.div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                <img src="/banners/image copy 5.png" className="w-full h-full object-cover" alt="Heritage" />
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-gold/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-luxury-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-bold tracking-widest text-xs uppercase">Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Shop By Category</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Necklaces', image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800' },
              { name: 'Rings', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800' },
              { name: 'Earrings', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800' }
            ].map((cat) => (
              <Link 
                key={cat.name} 
                to={`/shop?category=${cat.name}`}
                className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg"
              >
                <img 
                  src={cat.image} 
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-serif font-bold text-white mb-2">{cat.name}</h3>
                  <div className="flex items-center text-gold font-bold text-sm tracking-widest transition-transform group-hover:translate-x-2">
                    VIEW COLLECTION <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Craftsmanship Section (NEW) */}
      <section className="py-24 bg-luxury-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-20 opacity-10">
          <Sparkles size={300} strokeWidth={0.5} />
        </div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <Gem className="text-gold mx-auto mb-6" size={48} />
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Unrivaled Craftsmanship</h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Every Swamy creation is a masterpiece born from hundreds of hours of painstaking labor. Our master artisans blend age-old hand-forging techniques with cutting-edge technology to achieve a level of detail that borders on the impossible.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Precision Design", desc: "Digital modeling ensures every facet is perfect before a single gram of gold is cast." },
              { title: "Hand Selection", desc: "Only the top 1% of diamonds that pass our rigorous 4C+ quality check are selected." },
              { title: "Ethical Sourcing", desc: "We ensure our materials are sourced responsibly, adhering to strict Kimberly Process standards." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-all">
                <h4 className="text-xl font-serif font-bold text-gold mb-4">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div className="max-w-xl">
              <span className="text-gold font-bold tracking-widest text-xs uppercase">Treasured Picks</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">Best Selling Pieces</h2>
            </div>
            <Link to="/shop" className="text-luxury-black font-bold tracking-widest text-sm border-b-2 border-gold pb-1 mt-6 md:mt-0 hover:text-gold transition-colors">
              VIEW ALL PRODUCTS
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setSelectedProduct} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1000" 
                  className="w-full h-full object-cover"
                  alt="Happy Customer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl max-w-xs md:max-w-sm hidden md:block">
                <div className="flex text-gold mb-4">
                  {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The gold necklace I purchased for my daughter's wedding was even more breathtaking in person. Extraordinary craftsmanship!"
                </p>
                <div className="font-bold">— Priya S., Hyderabad</div>
              </div>
            </div>
            <div>
              <span className="text-gold font-bold tracking-widest text-xs uppercase">Testimonials</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-8">Voices of Luxury</h2>
              <div className="space-y-8">
                {[
                  { name: "Ananya Kapur", loc: "Mumbai", text: "Truly the most premium experience I've had shopping online. Secure delivery and beautiful packaging." },
                  { name: "Rahul Verma", loc: "Bangalore", text: "The quality of diamonds at Swamy Jewellers is top-notch. Highly recommend for engagement rings." }
                ].map((t, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gold/10">
                    <p className="text-lg text-luxury-charcoal leading-relaxed mb-4">"{t.text}"</p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-bold text-secondary-dark mr-4">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-luxury-black">{t.name}</div>
                        <div className="text-xs text-gray-500">{t.loc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default Home;
