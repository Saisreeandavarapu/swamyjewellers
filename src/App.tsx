import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/shared/WhatsAppButton';
import IntroBanner from './components/shared/IntroBanner';
import ScrollToTop from './components/shared/ScrollToTop';
import { ProductSkeleton } from './components/ui/Skeleton';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const Gallery = lazy(() => import('./pages/Gallery'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Contact = lazy(() => import('./pages/Contact'));
const Jewellery = lazy(() => import('./pages/Jewellery'));
const Cart = lazy(() => import('./pages/Cart'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          
          <main className="flex-grow">
            <Suspense fallback={
              <div className="container mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-8">
                {[1,2,3,4].map(i => <ProductSkeleton key={i} />)}
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/jewellery" element={<Jewellery />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <WhatsAppButton />
          <IntroBanner />
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
