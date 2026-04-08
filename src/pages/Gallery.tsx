import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Camera } from 'lucide-react';

const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1573408302115-992bc0633095?w=800', category: 'Fine Jewelry' },
  { id: 2, url: 'https://images.unsplash.com/photo-1601121141461-9d6617582c3c?w=800', category: 'Gold Heritage' },
  { id: 3, url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800', category: 'Diamond Bands' },
  { id: 4, url: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800', category: 'Statement Pieces' },
  { id: 5, url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800', category: 'Royal Earrings' },
  { id: 6, url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800', category: 'Luxe Bridal' },
  { id: 7, url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800', category: 'Bridal Rings' },
  { id: 8, url: 'https://images.unsplash.com/photo-1596944924616-7b38e7cf63bc?w=800', category: 'Temple Gold' },
  { id: 9, url: 'https://images.unsplash.com/photo-1618403088890-3d9ff6f4c8b1?w=800', category: 'Artisan Sets' },
  { id: 10, url: 'https://images.unsplash.com/photo-1512163143273-bde0e3cc7407?w=800', category: 'Minimalist' },
  { id: 11, url: 'https://images.unsplash.com/photo-1589128777073-263566ae5e4d?w=800', category: 'Classic' },
  { id: 12, url: 'https://images.unsplash.com/photo-1617038220319-276d3cfab60e?w=800', category: 'Emerald Luxury' },
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-luxury-cream pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-luxury-black mb-4">
            Visual Gallery
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            A visual storytelling of our finest creations and the moments they celebrate.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image) => (
            <motion.div
              layoutId={`img-${image.id}`}
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(image.url)}
              className="relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 break-inside-avoid"
            >
              <img 
                src={image.url} 
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                alt={image.category}
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white">
                <ZoomIn size={32} className="mb-2" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">{image.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Follow us on Instagram</h3>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform"
            >
              <Camera size={20} />
              <span>@SWAMYJEWELLERS</span>
            </a>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white hover:text-gold transition-colors p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              layoutId={`img-${galleryImages.find(i => i.url === selectedImage)?.id}`}
              src={selectedImage}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              alt="Gallery Preview"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
