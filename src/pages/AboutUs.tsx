import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, History, Heart, Users } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-luxury-cream">

      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/banners/image copy 6.png"
            className="w-full h-full object-cover"
            alt="Jewellery Crafting"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white px-4 sm:px-6">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-serif font-bold mb-3 sm:mb-4"
          >
            Our Legacy
          </motion.h1>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-16 sm:w-24 h-1 bg-gold mx-auto mb-4 sm:mb-6"
          />

          <p className="text-sm sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mx-auto font-light tracking-wide">
            Crafting stories of elegance and tradition since 1985.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-14 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 md:gap-16 items-center">

            {/* Text */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              <span className="text-gold font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs">
                Our Story
              </span>

              <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-luxury-black leading-tight">
                A Journey of Three Decades
              </h2>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base md:text-lg">
                Founded in the heart of the city by Mr. Swamy, our journey began with a simple mission: to provide the purest gold and the finest craftsmanship to our beloved patrons.
              </p>

              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Over the last 30 years, Swamy Jewellers has evolved from a small boutique to a world-renowned name in luxury jewellery. Every piece we create is a testament to our commitment to quality, authenticity, and the timeless beauty of heritage designs.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-4 sm:pt-6">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gold/10 p-2 sm:p-3 rounded-xl text-gold">
                    <History size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-luxury-black text-sm sm:text-base">1985</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Inception
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-gold/10 p-2 sm:p-3 rounded-xl text-gold">
                    <Trophy size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-luxury-black text-sm sm:text-base">50+ Awards</div>
                    <div className="text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest font-bold">
                      Design Excellence
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
                <img
                  src="/products/image copy 3.png"
                  className="w-full h-full object-cover"
                  alt="Jeweller at work"
                />
              </div>

              {/* Floating Badge FIXED for mobile */}
              <div className="absolute -top-6 -left-4 sm:-top-10 sm:-left-10 bg-white p-4 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl border border-gold/10">
                <div className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-gold mb-1">
                  35+
                </div>
                <div className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-luxury-charcoal">
                  Years of Trust
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">

          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-3 sm:mb-4">
              Our Core Values
            </h2>
            <div className="w-16 sm:w-20 h-1 bg-gold mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10 md:gap-12">
            {[
              {
                title: "Uncompromising Purity",
                text: "We deal only in BIS hallmarked gold and certified diamonds to ensure peace of mind for our customers.",
                icon: <ShieldCheck className="text-gold" size={32} />
              },
              {
                title: "Expert Artisanship",
                text: "Our master craftsmen combine traditional techniques with modern technology to create masterpieces.",
                icon: <Users className="text-gold" size={32} />
              },
              {
                title: "Customer Legacy",
                text: "We believe in building relationships that span generations, serving families through their most vital milestones.",
                icon: <Heart className="text-gold" size={32} />
              }
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 sm:p-8 md:p-10 bg-luxury-cream rounded-2xl sm:rounded-3xl text-center space-y-4 sm:space-y-6 hover:shadow-xl transition-shadow border border-gold/5"
              >
                <div className="flex justify-center">{v.icon}</div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-luxury-black">
                  {v.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-light text-sm sm:text-base">
                  {v.text}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

const ShieldCheck = ({ className, size }: { className?: string; size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default AboutUs;