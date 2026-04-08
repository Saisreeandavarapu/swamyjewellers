import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="bg-luxury-cream min-h-[70vh] flex flex-col items-center justify-center p-6">
        <div className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-lg w-full border border-gray-100">
          <div className="bg-primary/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
            <ShoppingBag className="text-gold" size={40} />
          </div>
          <h2 className="text-3xl font-serif font-bold text-luxury-black mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-10 leading-relaxed font-light">
            Looks like you haven't added any luxury pieces to your collection yet. Start browsing our exquisite range today.
          </p>
          <Link to="/shop" className="btn-gold block">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-luxury-cream min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-serif font-bold text-luxury-black">Shopping Bag</h1>
          <p className="text-gray-500 mt-2">{cart.length} items in your basket</p>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Cart Items List */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="hidden md:grid grid-cols-6 p-6 border-b border-gray-100 text-[10px] uppercase tracking-widest font-bold text-gray-400">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="p-6 border-b border-gray-100 last:border-0 grid grid-cols-1 md:grid-cols-6 gap-6 items-center">
                  <div className="col-span-1 md:col-span-3 flex items-center space-x-6">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-24 h-32 object-cover rounded-xl shadow-sm"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800';
                      }}
                    />
                    <div>
                      <h4 className="font-serif font-bold text-lg text-luxury-black">{item.name}</h4>
                      <p className="text-xs uppercase tracking-widest text-gold mt-1">Material: {item.material}</p>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-600 flex items-center text-xs font-bold mt-4 md:hidden"
                      >
                        <Trash2 size={14} className="mr-1" /> REMOVE
                      </button>
                    </div>
                  </div>

                  <div className="hidden md:block text-center font-bold">
                    ₹{item.price.toLocaleString('en-IN')}
                  </div>

                  <div className="flex justify-center">
                    <div className="flex items-center border border-gray-200 rounded-full px-2 py-1">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-2 hover:text-gold transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2 hover:text-gold transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between md:block text-right">
                    <span className="md:hidden text-gray-400 text-sm">Total:</span>
                    <span className="font-bold text-gold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                  </div>

                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="hidden md:flex absolute right-12 text-gray-200 hover:text-red-400 p-2 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center px-4">
              <Link to="/shop" className="flex items-center text-luxury-black font-bold text-sm hover:text-gold transition-colors">
                <ArrowLeft size={16} className="mr-2" />
                CONTINUE SHOPPING
              </Link>
              <button 
                onClick={clearCart}
                className="text-gray-400 text-xs font-bold hover:text-red-500 tracking-widest"
              >
                CLEAR BAG
              </button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 sticky top-32">
              <h3 className="text-2xl font-serif font-bold mb-8">Order Summary</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span className="text-luxury-black font-bold">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-500 font-bold uppercase text-xs tracking-widest">Free</span>
                </div>
                <div className="flex justify-between text-gray-500 pb-4 border-b border-gray-100">
                  <span>Taxes (GST)</span>
                  <span className="text-luxury-black font-bold">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-xl font-serif font-bold pt-4">
                  <span>Total Payable</span>
                  <span className="text-gold">₹{cartTotal.toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="p-4 bg-primary/10 rounded-xl mb-8 border border-primary/20">
                <p className="text-xs text-luxury-charcoal leading-relaxed">
                  🔒 Secure transaction. Your data is protected by industry-standard encryption.
                </p>
              </div>

              <button className="w-full btn-gold py-5 text-xl font-bold tracking-widest shadow-lg transform active:scale-95">
                PROCEED TO CHECKOUT
              </button>

              <div className="mt-8 grid grid-cols-4 gap-2 opacity-50">
                <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="Visa" className="h-6 object-contain pointer-events-none" />
                <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="Mastercard" className="h-6 object-contain pointer-events-none" />
                <img src="https://cdn-icons-png.flaticon.com/128/196/196566.png" alt="PayPal" className="h-6 object-contain pointer-events-none" />
                <img src="https://cdn-icons-png.flaticon.com/128/2504/2504932.png" alt="UPI" className="h-6 object-contain pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
