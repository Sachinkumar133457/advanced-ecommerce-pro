import React, { useState } from 'react';
import { 
  ShoppingBag, Search, User, Heart, Menu, X, Star, ArrowRight, 
  CheckCircle, Trash2, Plus, Minus, ShieldCheck, Truck, RefreshCw, 
  LogOut, Lock, ChevronRight, Sparkles, ShieldAlert, PlusCircle, Flame, Zap
} from 'lucide-react';

const INITIAL_PRODUCTS = [
  {
    id: 1,
    name: "Apex Ultra Wireless Noise-Canceling Headphones",
    category: "Electronics",
    price: 299.00,
    rating: 4.8,
    reviews: 142,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    description: "Experience pristine studio sound quality with industry-leading active noise cancellation and 40-hour battery life. Crafted for ultimate comfort.",
    specs: ["Bluetooth 5.3", "40h Battery", "Active Noise Cancellation", "Hi-Res Audio"]
  },
  {
    id: 2,
    name: "Chronos Heritage Automatic Chronograph",
    category: "Watches",
    price: 450.00,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    description: "Swiss automatic movement housed in surgical-grade stainless steel with genuine Italian leather strap. A timeless statement of elegance.",
    specs: ["Automatic Movement", "Sapphire Crystal", "50m Water Resistant", "Italian Leather"]
  },
  {
    id: 3,
    name: "Lumina Minimalist Desk Lamp",
    category: "Home & Living",
    price: 120.00,
    rating: 4.6,
    reviews: 64,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
    description: "Sleek touch-sensitive architectural desk lamp with adjustable color temperature and Qi wireless charging pad built into the heavy base.",
    specs: ["Touch Controls", "Wireless Charging Base", "Adjustable Warmth", "Aluminum Alloy"]
  },
  {
    id: 4,
    name: "ErgoGrip Pro Wireless Mechanical Keyboard",
    category: "Electronics",
    price: 180.00,
    rating: 4.7,
    reviews: 215,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    description: "Hot-swappable mechanical switches, RGB per-key backlighting, and multi-device Bluetooth connectivity designed for high-performance productivity.",
    specs: ["Hot-Swappable", "Tri-Mode Connection", "RGB Backlit", "Mac & Windows Support"]
  },
  {
    id: 5,
    name: "Nordic Ceramic Pour-Over Coffee Maker",
    category: "Home & Living",
    price: 65.00,
    rating: 4.5,
    reviews: 52,
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
    description: "Hand-glazed ceramic dripper with ergonomic wooden collar and borosilicate glass carafe for the cleanest morning brew.",
    specs: ["Heat-Resistant Glass", "Hand-Glazed Ceramic", "Includes Stainless Filter", "600ml Capacity"]
  },
  {
    id: 6,
    name: "Velocity Carbon Running Sneakers",
    category: "Footwear",
    price: 210.00,
    rating: 4.8,
    reviews: 310,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Engineered with carbon-fiber plate technology and ultra-responsive nitrogen-infused foam for maximum propulsion and endurance.",
    specs: ["Carbon Fiber Plate", "Nitrogen Foam", "Breathable Mesh", "High-Traction Rubber"]
  },
  {
    id: 7,
    name: "AeroZenith Portable Bluetooth Speaker",
    category: "Electronics",
    price: 145.00,
    rating: 4.7,
    reviews: 118,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80",
    description: "360-degree immersive spatial sound with IP67 waterproof rugged build. Your ultimate adventure companion.",
    specs: ["IP67 Waterproof", "360° Sound", "20h Battery", "Party Link Mode"]
  },
  {
    id: 8,
    name: "Urban Explorer Canvas Backpack",
    category: "Accessories",
    price: 95.00,
    rating: 4.6,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Water-repellent waxed canvas backpack with padded 16-inch laptop compartment and anti-theft hidden pocket.",
    specs: ["16-inch Laptop Sleeve", "Waxed Canvas", "YKK Zippers", "Ergonomic Straps"]
  },
  {
    id: 9,
    name: "Solstice Polarized Aviator Sunglasses",
    category: "Accessories",
    price: 130.00,
    rating: 4.7,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=800&q=80",
    description: "Timeless titanium frames with anti-reflective polarized lenses offering 100% UV400 protection.",
    specs: ["Polarized Lenses", "Titanium Frame", "100% UV Protection", "Hard Case Included"]
  },
  {
    id: 10,
    name: "Apex Gaming Mouse Pro",
    category: "Electronics",
    price: 99.00,
    rating: 4.9,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    description: "Ultra-lightweight wireless gaming mouse with 26K DPI optical sensor and optical switches.",
    specs: ["26,000 DPI", "63g Ultra-Light", "70h Battery", "Zero Smoothing"]
  },
  {
    id: 11,
    name: "Minimalist Leather Cardholder",
    category: "Accessories",
    price: 45.00,
    rating: 4.5,
    reviews: 110,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=800&q=80",
    description: "Crafted from full-grain vegetable-tanned leather with RFID blocking technology.",
    specs: ["RFID Blocking", "Full-Grain Leather", "Holds 6 Cards", "Slim Profile"]
  },
  {
    id: 12,
    name: "Zenith Smart Fitness Watch",
    category: "Watches",
    price: 250.00,
    rating: 4.8,
    reviews: 204,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=80",
    description: "Advanced health tracking with ECG, blood oxygen monitoring, and 7-day battery life.",
    specs: ["ECG Monitor", "SpO2 Tracking", "Built-in GPS", "AMOLED Display"]
  },
  {
    id: 13,
    name: "Velvet Luxe Accent Throw Pillow",
    category: "Home & Living",
    price: 40.00,
    rating: 4.4,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
    description: "Plush cotton velvet throw pillow with hidden zipper and hypoallergenic down-alternative insert.",
    specs: ["100% Cotton Velvet", "Hypoallergenic", "Machine Washable", "Hidden Zipper"]
  },
  {
    id: 14,
    name: "Summit Waterproof Hiking Boots",
    category: "Footwear",
    price: 175.00,
    rating: 4.9,
    reviews: 188,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80",
    description: "Durable nubuck leather boots with waterproof breathable membrane and superior traction outsoles.",
    specs: ["Waterproof Membrane", "Nubuck Leather", "Vibram Outsole", "Ankle Support"]
  },
  {
    id: 15,
    name: "Studio Pro Condenser Microphone",
    category: "Electronics",
    price: 220.00,
    rating: 4.8,
    reviews: 96,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80",
    description: "Professional large-diaphragm condenser microphone for pristine vocal recording, streaming, and podcasting.",
    specs: ["Cardioid Pattern", "Low Self-Noise", "Shock Mount Included", "USB-C & XLR"]
  },
  {
    id: 16,
    name: "Aroma Diffuser & Air Purifier",
    category: "Home & Living",
    price: 85.00,
    rating: 4.6,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1602928321679-560bb453f190?auto=format&fit=crop&w=800&q=80",
    description: "Ultrasonic essential oil diffuser with ambient LED lighting and HEPA-grade air purification.",
    specs: ["HEPA Filter", "Ultrasonic Mist", "Ambient LED", "Auto Shut-Off"]
  }
];

const getInitialProducts = () => {
  const saved = localStorage.getItem('luxemarket_products');
  if (saved) {
    try {
      return JSON.parse(saved);
    } catch (e) {
      return INITIAL_PRODUCTS;
    }
  }
  return INITIAL_PRODUCTS;
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const [products, setProducts] = useState(getInitialProducts);
  const [cart, setCart] = useState([{ ...INITIAL_PRODUCTS[0], quantity: 1 }]);
  const [wishlistIds, setWishlistIds] = useState([1, 4, 7]);

  const [user, setUser] = useState(null);
  const [authMode, setAuthMode] = useState('login');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');

  const [newProductForm, setNewProductForm] = useState({
    name: '',
    category: 'Electronics',
    price: '',
    image: '',
    description: '',
    specs: ''
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const [checkoutForm, setCheckoutForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    paymentMethod: 'online'
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`🛒 ${product.name} added to cart!`);
  };

  const buyNow = (product) => {
    addToCart(product);
    setCurrentPage('cart');
  };

  const updateQuantity = (id, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : null;
      }
      return item;
    }).filter(Boolean));
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
    showToast("❌ Item has been removed from cart");
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const finalTotalAmount = cartTotal * 1.08;
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleWishlist = (productId, e) => {
    if (e) e.stopPropagation();
    setWishlistIds(prev => {
      if (prev.includes(productId)) {
        showToast("💔 Product has been removed from wishlist");
        return prev.filter(id => id !== productId);
      } else {
        showToast("💖 Product liked! Saved to your wishlist!");
        return [...prev, productId];
      }
    });
  };

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (!emailInput || !passwordInput) {
      alert("Please fill in all required fields.");
      return;
    }
    const isAdmin = emailInput.toLowerCase() === 'admin@luxemarket.com';
    const loggedUser = {
      name: isAdmin ? 'Admin Master' : (nameInput || emailInput.split('@')[0]),
      email: emailInput,
      role: isAdmin ? 'admin' : 'customer',
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${emailInput}`
    };
    setUser(loggedUser);
    showToast(`👋 Welcome back, ${loggedUser.name}!`);
    setCurrentPage('home');
    setEmailInput('');
    setPasswordInput('');
    setNameInput('');
  };

  const handleGoogleLogin = () => {
    const googleUser = {
      name: "Alex Johnson",
      email: "alex.johnson@gmail.com",
      role: "customer",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    };
    setUser(googleUser);
    showToast("✨ Successfully logged in with Google!");
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setUser(null);
    showToast("🔒 Logged out successfully");
    setCurrentPage('home');
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProductForm.name || !newProductForm.price || !newProductForm.image) {
      alert("Please fill in all required fields.");
      return;
    }
    const newProd = {
      id: Date.now(),
      name: newProductForm.name,
      category: newProductForm.category,
      price: parseFloat(newProductForm.price),
      rating: 5.0,
      reviews: 1,
      image: newProductForm.image,
      description: newProductForm.description || "New premium product.",
      specs: newProductForm.specs ? newProductForm.specs.split(',').map(s => s.trim()) : ["Premium Quality"]
    };
    const updatedProducts = [newProd, ...products];
    setProducts(updatedProducts);
    localStorage.setItem('luxemarket_products', JSON.stringify(updatedProducts));
    setNewProductForm({ name: '', category: 'Electronics', price: '', image: '', description: '', specs: '' });
    showToast("👑 Product successfully added and saved permanently!");
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      const updatedProducts = products.filter(p => p.id !== id);
      setProducts(updatedProducts);
      localStorage.setItem('luxemarket_products', JSON.stringify(updatedProducts));
      showToast("🗑 Product deleted successfully");
    }
  };

  // CHECKOUT HANDLER (Razorpay / COD)
  const handleCheckoutSubmit = (e) => {
    e.preventDefault();

    if (checkoutForm.paymentMethod === 'cod') {
      alert("Order placed successfully with Cash on Delivery!");
      setCart([]);
      setCurrentPage('success');
    } else {
      // Razorpay Online Payment Flow
      try {
        const options = {
          key: "rzp_test_TjPdpd5VIVXKJK", 
          amount: Math.round(finalTotalAmount * 100),
          currency: "INR",
          name: "LuxeMarket",
          description: "Purchase Payment",
          handler: function (response) {
            alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
            setCart([]);
            setCurrentPage('success');
          },
          prefill: {
            name: checkoutForm.fullName || (user ? user.name : "Customer"),
            email: checkoutForm.email || (user ? user.email : "customer@example.com"),
            contact: "9999999999"
          },
          theme: {
            color: "#4f46e5"
          }
        };

        if (window.Razorpay) {
          const paymentWindow = new window.Razorpay(options);
          paymentWindow.open();
        } else {
          alert("Razorpay SDK is not loaded. Please include the script in index.html or use COD.");
        }
      } catch (error) {
        console.error("Payment failed:", error);
        alert("Something went wrong with the payment.");
      }
    }
  };

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const likedProducts = products.filter(p => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900/90 backdrop-blur-xl text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 animate-fade-in border border-slate-700/80 shadow-indigo-500/10">
          <Sparkles className="w-5 h-5 text-indigo-400 animate-spin" />
          <span className="text-sm font-semibold tracking-wide">{toastMessage}</span>
        </div>
      )}

      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-2xl border-b border-slate-800/80 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <button 
              onClick={() => { setCurrentPage('home'); setSelectedCategory('All'); setSearchQuery(''); }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">
                Luxe<span className="text-indigo-500">Market</span>
              </span>
            </button>

            <nav className="hidden md:flex items-center gap-2">
              <button onClick={() => setCurrentPage('home')} className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-all ${currentPage === 'home' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>Home</button>
              <button onClick={() => setCurrentPage('shop')} className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-all ${currentPage === 'shop' ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shadow-lg shadow-indigo-500/10' : 'text-slate-400 hover:text-white hover:bg-slate-900'}`}>Shop</button>
              {user?.role === 'admin' && (
                <button onClick={() => setCurrentPage('admin')} className={`px-4 py-2.5 rounded-2xl text-sm font-bold transition-all flex items-center gap-2 ${currentPage === 'admin' ? 'bg-rose-600/20 text-rose-400 border border-rose-500/30' : 'text-rose-400 hover:bg-rose-950/30'}`}>
                  <ShieldAlert className="w-4 h-4" /> Admin Panel
                </button>
              )}
            </nav>
          </div>

          <div className="hidden lg:flex items-center relative w-80">
            <Search className="absolute left-4 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search luxury products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') setCurrentPage('shop'); }}
              className="w-full bg-slate-900/90 border border-slate-800 focus:border-indigo-500 focus:bg-slate-900 pl-11 pr-4 py-3 rounded-2xl text-sm text-white outline-none transition-all shadow-inner"
            />
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentPage('wishlist')}
              className="relative p-3 rounded-2xl bg-slate-900/80 hover:bg-rose-950/40 text-rose-400 transition-all border border-slate-800 hover:border-rose-500/30 group shadow-md"
              title="Liked Wishlist"
            >
              <Heart className="w-5 h-5 fill-rose-500 text-rose-500 group-hover:scale-110 transition-transform" />
              {wishlistIds.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white rounded-full text-[11px] font-black w-5 h-5 flex items-center justify-center shadow-lg shadow-rose-500/50">
                  {wishlistIds.length}
                </span>
              )}
            </button>

            <button 
              onClick={() => setCurrentPage('cart')}
              className="relative p-3 rounded-2xl bg-slate-900/80 hover:bg-indigo-950/40 text-indigo-400 transition-all flex items-center gap-2.5 border border-slate-800 hover:border-indigo-500/30 group shadow-md"
              title="Cart"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-indigo-600 text-white rounded-full text-[11px] font-black flex items-center justify-center shadow-lg shadow-indigo-600/50">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-sm font-bold text-slate-200">
                ${cartTotal.toFixed(2)}
              </span>
            </button>

            {user ? (
              <div className="relative group ml-1">
                <button className="flex items-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all">
                  <img src={user.avatar} alt={user.name} className="w-9 h-9 rounded-xl object-cover shadow-md" />
                  <span className="hidden md:inline text-sm font-bold text-slate-200 pr-2">{user.name.split(' ')[0]}</span>
                </button>
                <div className="absolute right-0 mt-3 w-56 bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl py-3 hidden group-hover:block z-50 animate-fade-in backdrop-blur-2xl">
                  <div className="px-5 py-3 border-b border-slate-800/80">
                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Signed in as</p>
                    <p className="text-sm font-black text-white truncate mt-0.5">{user.name}</p>
                    <span className="inline-block mt-2 px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
                      {user.role}
                    </span>
                  </div>
                  {user.role === 'admin' && (
                    <button onClick={() => setCurrentPage('admin')} className="w-full text-left px-5 py-3 text-sm text-rose-400 hover:bg-rose-950/30 font-semibold flex items-center gap-2.5 transition-colors">
                      <ShieldAlert className="w-4 h-4" /> Admin Dashboard
                    </button>
                  )}
                  <button onClick={handleLogout} className="w-full text-left px-5 py-3 text-sm text-rose-400 hover:bg-rose-950/30 font-semibold flex items-center gap-2.5 transition-colors">
                    <LogOut className="w-4 h-4" /> Logout
                  </button>
                </div>
              </div>
            ) : (
              <button 
                onClick={() => setCurrentPage('login')}
                className="ml-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white px-6 py-3 rounded-2xl text-sm font-black shadow-xl shadow-indigo-600/30 transition-all hover:scale-105 flex items-center gap-2"
              >
                <User className="w-4 h-4" /> Login
              </button>
            )}

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-3 rounded-2xl bg-slate-900 text-slate-300 border border-slate-800">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-6 space-y-4 animate-fade-in shadow-2xl">
            <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-bold text-slate-300">Home</button>
            <button onClick={() => { setCurrentPage('shop'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-bold text-slate-300">Shop</button>
            <button onClick={() => { setCurrentPage('wishlist'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-bold text-rose-400">Liked Wishlist ({wishlistIds.length})</button>
            {user?.role === 'admin' && (
              <button onClick={() => { setCurrentPage('admin'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 font-bold text-rose-500">Admin Panel</button>
            )}
            {!user && (
              <button onClick={() => { setCurrentPage('login'); setMobileMenuOpen(false); }} className="block w-full py-3.5 bg-indigo-600 text-white rounded-2xl text-center font-black shadow-lg shadow-indigo-600/30">Login / Register</button>
            )}
          </div>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow">
        
        {currentPage === 'home' && (
          <div className="space-y-24 pb-24">
            
            {/* HERO SECTION */}
            <section className="relative pt-16 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950/60 via-slate-950 to-slate-950">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/20 to-pink-600/20 blur-[140px] pointer-events-none rounded-full"></div>
              
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2.5 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-inner animate-pulse">
                    <Flame className="w-4 h-4 text-pink-500 fill-pink-500" /> New Generation Luxury E-Commerce 2026
                  </div>
                  
                  <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-[1.1]">
                    Experience <br />
                    <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
                      Next-Level Living
                    </span>
                  </h1>
                  
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                    Explore our curated catalog meticulously crafted for modern tech enthusiasts, luxury connoisseurs, and lifestyle innovators. Tap the heart to curate your personal wishlist!
                  </p>
                  
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                    <button 
                      onClick={() => setCurrentPage('shop')}
                      className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white px-9 py-5 rounded-3xl font-black shadow-2xl shadow-indigo-600/40 transition-all hover:scale-105 flex items-center gap-3 group text-base"
                    >
                      Explore Catalog <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <button 
                      onClick={() => setCurrentPage('wishlist')}
                      className="bg-slate-900/90 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 px-8 py-5 rounded-3xl font-bold transition-all flex items-center gap-3 text-base shadow-lg"
                    >
                      <Heart className="w-5 h-5 fill-rose-500 text-rose-500" /> My Liked Wishlist ({wishlistIds.length})
                    </button>
                  </div>

                  <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800/80 max-w-lg mx-auto lg:mx-0">
                    <div>
                      <p className="text-2xl font-black text-white">{products.length}+</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Curated Products</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-indigo-400">4.9★</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Verified Quality</p>
                    </div>
                    <div>
                      <p className="text-2xl font-black text-pink-400">24/7</p>
                      <p className="text-xs text-slate-400 font-semibold mt-0.5">Priority Support</p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-[40px] blur-3xl opacity-25 animate-float"></div>
                  
                  <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-slate-800 p-6 rounded-[36px] shadow-2xl space-y-6">
                    <div className="relative overflow-hidden rounded-3xl h-[340px]">
                      <img 
                        src={products[0]?.image || INITIAL_PRODUCTS[0].image} 
                        alt="Hero Product" 
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-slate-800 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400 fill-amber-400" />
                        <span className="text-xs font-black text-white">Bestseller #1</span>
                      </div>
                      <button 
                        onClick={(e) => toggleWishlist(products[0]?.id, e)}
                        className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-md transition-all shadow-xl ${wishlistIds.includes(products[0]?.id) ? 'bg-rose-500 text-white scale-110' : 'bg-slate-950/80 text-white hover:bg-slate-900'}`}
                      >
                        <Heart className={`w-5 h-5 ${wishlistIds.includes(products[0]?.id) ? 'fill-white' : ''}`} />
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                          {products[0]?.category}
                        </span>
                        <span className="text-2xl font-black text-white">${products[0]?.price.toFixed(2)}</span>
                      </div>
                      <h3 className="text-lg font-black text-white line-clamp-1">{products[0]?.name}</h3>
                      <div className="flex gap-3 pt-2">
                        <button 
                          onClick={() => addToCart(products[0])}
                          className="flex-1 bg-indigo-600 hover:bg-indigo-500 text-white py-3.5 rounded-2xl font-bold shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 text-sm"
                        >
                          <ShoppingBag className="w-4 h-4" /> Add to Cart
                        </button>
                        <button 
                          onClick={() => { setSelectedProduct(products[0]); setCurrentPage('product'); }}
                          className="px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-2xl font-bold text-sm transition-all"
                        >
                          Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* TRENDING PRODUCTS GRID */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
                <div>
                  <span className="text-indigo-400 font-black text-xs uppercase tracking-widest">Featured Collection</span>
                  <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">Trending Masterpieces</h2>
                </div>
                <button 
                  onClick={() => setCurrentPage('shop')} 
                  className="text-indigo-400 font-black hover:text-indigo-300 flex items-center gap-2 group bg-indigo-600/10 border border-indigo-500/20 px-6 py-3 rounded-2xl transition-all self-start sm:self-auto"
                >
                  View All Products <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.slice(0, 8).map(product => {
                  const isLiked = wishlistIds.includes(product.id);
                  return (
                    <div 
                      key={product.id}
                      className="bg-slate-900/80 backdrop-blur-xl rounded-[32px] border border-slate-800 hover:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative overflow-hidden bg-slate-950 h-72">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <button 
                            onClick={(e) => toggleWishlist(product.id, e)}
                            className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-xl transition-all shadow-xl ${isLiked ? 'bg-rose-500 text-white scale-110' : 'bg-slate-950/80 text-slate-300 hover:bg-slate-900 hover:text-white'}`}
                          >
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
                          </button>
                          
                          <button 
                            onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}
                            className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold backdrop-blur-xs text-sm"
                          >
                            Quick View
                          </button>
                        </div>
                        <div className="p-6 space-y-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                          <h3 
                            onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}
                            className="font-black text-white line-clamp-1 hover:text-indigo-400 cursor-pointer transition-colors text-base"
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{product.rating}</span>
                            <span className="text-slate-500 font-semibold">({product.reviews})</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 pt-0 flex items-center justify-between mt-2">
                        <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white p-3.5 rounded-2xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        )}

        {/* SHOP PAGE */}
        {currentPage === 'shop' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-black tracking-tight text-white">Shop</h1>
                <p className="text-slate-400 mt-1">Browse our complete collection of premium products.</p>
              </div>
              {user?.role === 'admin' && (
                <button 
                  onClick={() => setCurrentPage('admin')}
                  className="bg-rose-600 hover:bg-rose-500 text-white px-6 py-3.5 rounded-2xl font-black text-sm shadow-xl shadow-rose-600/30 flex items-center gap-2.5 self-start transition-all"
                >
                  <PlusCircle className="w-5 h-5" /> Add New Product (Admin)
                </button>
              )}
            </div>

            <div className="bg-slate-900/80 backdrop-blur-2xl p-6 rounded-[32px] border border-slate-800 shadow-xl flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex flex-wrap gap-2.5 w-full md:w-auto">
                {['All', 'Electronics', 'Watches', 'Home & Living', 'Footwear', 'Accessories'].map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-5 py-3 rounded-2xl text-sm font-black transition-all ${selectedCategory === cat ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/50' : 'bg-slate-950 text-slate-400 hover:bg-slate-800 hover:text-white border border-slate-800'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="relative w-full md:w-80">
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text"
                  placeholder="Filter products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 pl-11 pr-4 py-3 rounded-2xl text-sm text-white outline-none transition-all shadow-inner"
                />
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="text-center py-24 bg-slate-900/60 rounded-[36px] border border-slate-800 space-y-4">
                <p className="text-lg font-bold text-slate-300">No products found matching your search.</p>
                <button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} className="text-indigo-400 font-bold hover:underline">
                  Reset filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filteredProducts.map(product => {
                  const isLiked = wishlistIds.includes(product.id);
                  return (
                    <div 
                      key={product.id}
                      className="bg-slate-900/80 backdrop-blur-xl rounded-[32px] border border-slate-800 hover:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative overflow-hidden bg-slate-950 h-72">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <button 
                            onClick={(e) => toggleWishlist(product.id, e)}
                            className={`absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-xl transition-all shadow-xl ${isLiked ? 'bg-rose-500 text-white scale-110' : 'bg-slate-950/80 text-slate-300 hover:bg-slate-900 hover:text-white'}`}
                          >
                            <Heart className={`w-5 h-5 ${isLiked ? 'fill-white' : ''}`} />
                          </button>

                          <button 
                            onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}
                            className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold backdrop-blur-xs text-sm"
                          >
                            View Details
                          </button>
                        </div>
                        <div className="p-6 space-y-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                            {product.category}
                          </span>
                          <h3 
                            onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}
                            className="font-black text-white line-clamp-1 hover:text-indigo-400 cursor-pointer transition-colors text-base"
                          >
                            {product.name}
                          </h3>
                          <div className="flex items-center gap-1.5 text-amber-400 text-xs font-black">
                            <Star className="w-4 h-4 fill-current" />
                            <span>{product.rating}</span>
                            <span className="text-slate-500 font-semibold">({product.reviews})</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 pt-0 flex items-center justify-between mt-2">
                        <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                        <button 
                          onClick={() => addToCart(product)}
                          className="bg-indigo-600 hover:bg-indigo-500 text-white p-3.5 rounded-2xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
                          title="Add to Cart"
                        >
                          <ShoppingBag className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* LIKED WISHLIST PAGE */}
        {currentPage === 'wishlist' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <div className="flex items-center gap-4 bg-slate-900/60 p-6 rounded-[32px] border border-slate-800">
              <div className="w-14 h-14 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-3xl flex items-center justify-center shadow-lg">
                <Heart className="w-7 h-7 fill-rose-500" />
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight text-white">Your Liked Products ({likedProducts.length})</h1>
                <p className="text-slate-400 mt-0.5 text-sm">These are all the products you have saved by clicking the heart icon.</p>
              </div>
            </div>

            {likedProducts.length === 0 ? (
              <div className="text-center py-24 bg-slate-900/60 rounded-[36px] border border-slate-800 space-y-4 shadow-xl">
                <Heart className="w-20 h-20 text-slate-700 mx-auto" />
                <p className="text-xl font-bold text-slate-300">You haven't liked any products yet!</p>
                <button 
                  onClick={() => setCurrentPage('shop')}
                  className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-indigo-600/30 transition-all"
                >
                  Explore Shop
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {likedProducts.map(product => (
                  <div 
                    key={product.id}
                    className="bg-slate-900/80 backdrop-blur-xl rounded-[32px] border border-slate-800 hover:border-slate-700 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative overflow-hidden bg-slate-950 h-72">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <button 
                          onClick={(e) => toggleWishlist(product.id, e)}
                          className="absolute top-4 right-4 p-3 rounded-2xl bg-rose-500 text-white shadow-xl scale-110 hover:bg-rose-600 transition-colors"
                        >
                          <Heart className="w-5 h-5 fill-white" />
                        </button>
                      </div>
                      <div className="p-6 space-y-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                          {product.category}
                        </span>
                        <h3 
                          onClick={() => { setSelectedProduct(product); setCurrentPage('product'); }}
                          className="font-black text-white line-clamp-1 hover:text-indigo-400 cursor-pointer transition-colors text-base"
                        >
                          {product.name}
                        </h3>
                        <p className="text-sm text-slate-400 line-clamp-2">{product.description}</p>
                      </div>
                    </div>
                    <div className="p-6 pt-0 flex items-center justify-between mt-2">
                      <span className="text-2xl font-black text-white">${product.price.toFixed(2)}</span>
                      <button 
                        onClick={() => addToCart(product)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-2xl shadow-lg shadow-indigo-600/30 font-black text-sm transition-all hover:scale-105"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ADMIN DASHBOARD */}
        {currentPage === 'admin' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
            <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 rounded-[36px] shadow-2xl border border-rose-500/20 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-3">
                <span className="bg-rose-500 text-white px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                  Admin Control Center
                </span>
                <h1 className="text-3xl sm:text-4xl font-black tracking-tight">Welcome, Admin Master</h1>
                <p className="text-slate-300 text-sm max-w-xl">From here you can add new products and permanently delete unwanted products.</p>
              </div>
              <div className="bg-slate-900/80 backdrop-blur-xl px-8 py-6 rounded-3xl border border-slate-800 shadow-xl">
                <p className="text-xs text-slate-400 uppercase font-black tracking-widest">Total Catalog Size</p>
                <p className="text-4xl font-black text-white mt-1">{products.length} Products</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-[36px] border border-slate-800 shadow-xl space-y-6 h-fit">
                <div className="flex items-center gap-3.5 border-b border-slate-800 pb-5">
                  <div className="w-12 h-12 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-2xl flex items-center justify-center font-bold">
                    <Plus className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-black text-white">Add New Product</h2>
                </div>

                <form onSubmit={handleAddProduct} className="space-y-4">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Product Name</label>
                    <input 
                      required
                      type="text"
                      placeholder="e.g. Smart 4K OLED TV"
                      value={newProductForm.name}
                      onChange={e => setNewProductForm({...newProductForm, name: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-rose-500 outline-none shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Category</label>
                    <select 
                      value={newProductForm.category}
                      onChange={e => setNewProductForm({...newProductForm, category: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-rose-500 outline-none shadow-inner"
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Watches">Watches</option>
                      <option value="Home & Living">Home & Living</option>
                      <option value="Footwear">Footwear</option>
                      <option value="Accessories">Accessories</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Price ($)</label>
                    <input 
                      required
                      type="number"
                      step="0.01"
                      placeholder="199.00"
                      value={newProductForm.price}
                      onChange={e => setNewProductForm({...newProductForm, price: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-rose-500 outline-none shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Image URL</label>
                    <input 
                      required
                      type="url"
                      placeholder="https://images.unsplash.com/..."
                      value={newProductForm.image}
                      onChange={e => setNewProductForm({...newProductForm, image: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-rose-500 outline-none shadow-inner"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Description</label>
                    <textarea 
                      rows="3"
                      placeholder="Product details..."
                      value={newProductForm.description}
                      onChange={e => setNewProductForm({...newProductForm, description: e.target.value})}
                      className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-rose-500 outline-none resize-none shadow-inner"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-rose-600 hover:bg-rose-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-rose-600/30 transition-all text-base"
                  >
                    Publish Product
                  </button>
                </form>
              </div>

              <div className="lg:col-span-2 bg-slate-900/80 backdrop-blur-xl p-8 rounded-[36px] border border-slate-800 shadow-xl space-y-6">
                <h2 className="text-xl font-black text-white border-b border-slate-800 pb-5">Manage & Delete Products</h2>
                
                <div className="space-y-4 max-h-[620px] overflow-y-auto pr-2">
                  {products.map(product => (
                    <div key={product.id} className="flex items-center justify-between p-4 rounded-2xl border border-slate-800 bg-slate-950/60 hover:bg-slate-950 transition-all gap-4">
                      <div className="flex items-center gap-4">
                        <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded-2xl shadow-md" />
                        <div>
                          <span className="text-[10px] font-black text-indigo-400 uppercase bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full">{product.category}</span>
                          <h4 className="font-black text-white text-sm line-clamp-1 mt-1">{product.name}</h4>
                          <p className="text-xs font-black text-slate-400 mt-0.5">${product.price.toFixed(2)}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteProduct(product.id)}
                        className="bg-rose-500/10 hover:bg-rose-600 text-rose-400 hover:text-white p-3 rounded-2xl transition-all border border-rose-500/20 shadow-md"
                        title="Delete Product"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PRODUCT DETAILS PAGE */}
        {currentPage === 'product' && selectedProduct && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
            <button 
              onClick={() => setCurrentPage('shop')}
              className="text-sm font-black text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors"
            >
              ← Back to Shop
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="bg-slate-900/80 backdrop-blur-xl rounded-[36px] border border-slate-800 p-6 shadow-2xl relative">
                <img 
                  src={selectedProduct.image} 
                  alt={selectedProduct.name}
                  className="w-full h-[500px] object-cover rounded-[28px]"
                />
                <button 
                  onClick={(e) => toggleWishlist(selectedProduct.id, e)}
                  className={`absolute top-10 right-10 p-3.5 rounded-2xl backdrop-blur-xl shadow-2xl ${wishlistIds.includes(selectedProduct.id) ? 'bg-rose-500 text-white scale-110' : 'bg-slate-950/80 text-white hover:bg-slate-900'}`}
                >
                  <Heart className={`w-6 h-6 ${wishlistIds.includes(selectedProduct.id) ? 'fill-white' : ''}`} />
                </button>
              </div>

              <div className="space-y-8">
                <div>
                  <span className="text-xs font-black uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
                    {selectedProduct.category}
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">{selectedProduct.name}</h1>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex items-center text-amber-400 font-black">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="ml-1 text-base">{selectedProduct.rating}</span>
                    </div>
                    <span className="text-slate-600">•</span>
                    <span className="text-sm text-slate-400 font-semibold">{selectedProduct.reviews} Verified Reviews</span>
                  </div>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white">
                  ${selectedProduct.price.toFixed(2)}
                </div>

                <p className="text-slate-300 leading-relaxed text-base">
                  {selectedProduct.description}
                </p>

                <div className="border-t border-b border-slate-800 py-6 space-y-4">
                  <h3 className="font-black text-white text-base">Key Specifications:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {selectedProduct.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-slate-300 font-semibold">
                        <CheckCircle className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-2">
                  <button 
                    onClick={() => addToCart(selectedProduct)}
                    className="flex-1 bg-slate-900 hover:bg-slate-800 border-2 border-indigo-500 text-indigo-400 font-black py-5 rounded-3xl shadow-lg transition-all flex items-center justify-center gap-3 text-base"
                  >
                    <ShoppingBag className="w-5 h-5" /> Add to Cart
                  </button>
                  <button 
                    onClick={() => buyNow(selectedProduct)}
                    className="flex-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black py-5 rounded-3xl shadow-2xl shadow-indigo-600/40 transition-all flex items-center justify-center gap-3 text-base"
                  >
                    Buy Now <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CART PAGE */}
        {currentPage === 'cart' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
            <h1 className="text-3xl font-black tracking-tight text-white">Shopping Cart ({cartCount})</h1>

            {cart.length === 0 ? (
              <div className="text-center py-24 bg-slate-900/60 rounded-[36px] border border-slate-800 space-y-4 shadow-xl">
                <ShoppingBag className="w-20 h-20 text-slate-700 mx-auto" />
                <p className="text-xl font-bold text-slate-300">Your cart is empty.</p>
                <button onClick={() => setCurrentPage('shop')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-2xl font-black shadow-xl shadow-indigo-600/30">Start Shopping</button>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-4">
                  {cart.map(item => (
                    <div key={item.id} className="bg-slate-900/80 backdrop-blur-xl p-6 rounded-[32px] border border-slate-800 shadow-xl flex items-center gap-6">
                      <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-2xl shadow-md" />
                      <div className="flex-1 space-y-1.5">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">{item.category}</span>
                        <h3 className="font-black text-white line-clamp-1 text-base">{item.name}</h3>
                        <p className="text-lg font-black text-white">${item.price.toFixed(2)}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center border border-slate-800 rounded-2xl overflow-hidden bg-slate-950">
                          <button onClick={() => updateQuantity(item.id, -1)} className="p-3 hover:bg-slate-800 text-slate-300"><Minus className="w-4 h-4" /></button>
                          <span className="px-4 font-black text-sm text-white">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="p-3 hover:bg-slate-800 text-slate-300"><Plus className="w-4 h-4" /></button>
                        </div>
                        <button onClick={() => removeFromCart(item.id)} className="p-3.5 text-rose-400 hover:bg-rose-500/10 rounded-2xl border border-rose-500/20"><Trash2 className="w-5 h-5" /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-900/80 backdrop-blur-xl p-8 rounded-[36px] border border-slate-800 shadow-xl space-y-6 h-fit">
                  <h3 className="text-xl font-black text-white">Order Summary</h3>
                  <div className="space-y-3.5 text-sm text-slate-400 font-semibold border-b border-slate-800 pb-6">
                    <div className="flex justify-between"><span>Subtotal</span><span className="font-black text-white">${cartTotal.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Shipping</span><span className="font-black text-emerald-400">FREE</span></div>
                    <div className="flex justify-between"><span>Estimated Tax</span><span className="font-black text-white">${(cartTotal * 0.08).toFixed(2)}</span></div>
                  </div>
                  <div className="flex justify-between text-xl font-black text-white"><span>Total</span><span>${finalTotalAmount.toFixed(2)}</span></div>
                  <button onClick={() => setCurrentPage('checkout')} className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black py-5 rounded-3xl shadow-2xl shadow-indigo-600/40 transition-all flex items-center justify-center gap-3 text-base">
                    Proceed to Checkout <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* CHECKOUT PAGE (WITH RAZORPAY AND COD) */}
        {currentPage === 'checkout' && (
          <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">
            <button 
              onClick={() => setCurrentPage('cart')}
              className="text-sm font-black text-slate-400 hover:text-indigo-400 flex items-center gap-2 transition-colors"
            >
              ← Back to Cart
            </button>
            <h1 className="text-3xl font-black tracking-tight text-white">Secure Checkout</h1>
            
            <form onSubmit={handleCheckoutSubmit} className="bg-slate-900/80 backdrop-blur-xl p-8 sm:p-10 rounded-[36px] border border-slate-800 shadow-2xl space-y-8">
              <h2 className="text-xl font-black text-white border-b border-slate-800 pb-5">Shipping Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div><label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Full Name</label><input required type="text" value={checkoutForm.fullName} onChange={e => setCheckoutForm({...checkoutForm, fullName: e.target.value})} placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" /></div>
                <div><label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Email Address</label><input required type="email" value={checkoutForm.email} onChange={e => setCheckoutForm({...checkoutForm, email: e.target.value})} placeholder="john@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" /></div>
                <div className="sm:col-span-2"><label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Street Address</label><input required type="text" value={checkoutForm.address} onChange={e => setCheckoutForm({...checkoutForm, address: e.target.value})} placeholder="123 Luxury Lane" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" /></div>
                <div><label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">City</label><input required type="text" value={checkoutForm.city} onChange={e => setCheckoutForm({...checkoutForm, city: e.target.value})} placeholder="New York" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" /></div>
                <div><label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Postal Code</label><input required type="text" value={checkoutForm.zip} onChange={e => setCheckoutForm({...checkoutForm, zip: e.target.value})} placeholder="10001" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" /></div>
              </div>

              <h2 className="text-xl font-black text-white border-b border-slate-800 pt-4 pb-5">Payment Method</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className={`border p-5 rounded-3xl flex items-center gap-4 cursor-pointer transition-all ${checkoutForm.paymentMethod === 'online' ? 'border-indigo-500 bg-indigo-600/10 shadow-lg shadow-indigo-600/10' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
                  <input type="radio" name="payment" defaultChecked onChange={() => setCheckoutForm({...checkoutForm, paymentMethod: 'online'})} />
                  <span className="font-black text-sm text-white">Pay Online (Razorpay / UPI / Card)</span>
                </label>
                <label className={`border p-5 rounded-3xl flex items-center gap-4 cursor-pointer transition-all ${checkoutForm.paymentMethod === 'cod' ? 'border-indigo-500 bg-indigo-600/10 shadow-lg shadow-indigo-600/10' : 'border-slate-800 bg-slate-950 text-slate-400'}`}>
                  <input type="radio" name="payment" onChange={() => setCheckoutForm({...checkoutForm, paymentMethod: 'cod'})} />
                  <span className="font-black text-sm text-white">Cash on Delivery (COD)</span>
                </label>
              </div>

              <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black py-5 rounded-3xl shadow-2xl shadow-indigo-600/40 transition-all text-base mt-6">
                {checkoutForm.paymentMethod === 'online' ? `Pay Online & Place Order ($${finalTotalAmount.toFixed(2)})` : `Place Order (COD) ($${finalTotalAmount.toFixed(2)})`}
              </button>
            </form>
          </div>
        )}

        {/* SUCCESS PAGE */}
        {currentPage === 'success' && (
          <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
            <div className="w-24 h-24 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/20 animate-bounce">
              <CheckCircle className="w-12 h-12" />
            </div>
            <h1 className="text-4xl font-black text-white">Order Placed Successfully!</h1>
            <p className="text-slate-400 max-w-md mx-auto leading-relaxed">Thank you for your purchase. Your order has been placed and is currently being prepared for lightning-fast shipping.</p>
            <button onClick={() => setCurrentPage('home')} className="bg-indigo-600 hover:bg-indigo-500 text-white px-9 py-4 rounded-3xl font-black shadow-2xl shadow-indigo-600/30 transition-all">
              Return to Home
            </button>
          </div>
        )}

        {/* LOGIN PAGE */}
        {currentPage === 'login' && (
          <div className="max-w-md mx-auto px-4 py-16">
            <div className="bg-slate-900/90 backdrop-blur-2xl p-8 sm:p-10 rounded-[36px] border border-slate-800 shadow-2xl space-y-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-gradient-to-tr from-indigo-600 to-pink-600 text-white rounded-3xl flex items-center justify-center mx-auto shadow-xl shadow-indigo-600/30">
                  <Lock className="w-8 h-8" />
                </div>
                <h1 className="text-2xl font-black text-white">
                  {authMode === 'login' ? 'Welcome Back' : 'Create Account'}
                </h1>
                <p className="text-xs text-slate-400 font-semibold">
                  For admin login, use email: <code className="text-rose-400 font-black">admin@luxemarket.com</code>
                </p>
              </div>

              <button 
                onClick={handleGoogleLogin}
                className="w-full bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-200 font-bold py-4 px-4 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"/>
                  <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.95H1.19v3.15C3.17 21.36 7.23 24 12 24z"/>
                  <path fill="#FBBC05" d="M5.28 14.25c-.25-.72-.38-1.49-.38-2.25s.13-1.53.38-2.25V6.6H1.19C.43 8.13 0 9.87 0 12s.43 3.87 1.19 5.4l4.09-3.15z"/>
                  <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.23 0 3.17 2.64 1.19 6.6l4.09 3.15c.95-2.84 3.6-4.95 6.72-4.95z"/>
                </svg>
                Continue with Google
              </button>

              <div className="flex items-center gap-4 text-slate-600 text-xs uppercase tracking-widest font-black">
                <div className="flex-grow border-t border-slate-800"></div>
                <span>Or email</span>
                <div className="flex-grow border-t border-slate-800"></div>
              </div>

              <form onSubmit={handleAuthSubmit} className="space-y-4">
                {authMode === 'signup' && (
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input type="text" value={nameInput} onChange={e => setNameInput(e.target.value)} placeholder="John Doe" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" />
                  </div>
                )}
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input required type="email" value={emailInput} onChange={e => setEmailInput(e.target.value)} placeholder="john@example.com" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-wider mb-2">Password</label>
                  <input required type="password" value={passwordInput} onChange={e => setPasswordInput(e.target.value)} placeholder="••••••••" className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-sm text-white focus:border-indigo-500 outline-none shadow-inner" />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 text-white font-black py-4 rounded-2xl shadow-xl shadow-indigo-600/30 transition-all text-base mt-2">
                  {authMode === 'login' ? 'Sign In' : 'Create Account'}
                </button>
              </form>

              <div className="text-center text-sm pt-2">
                {authMode === 'login' ? (
                  <p className="text-slate-400 font-medium">Don't have an account? <button onClick={() => setAuthMode('signup')} className="text-indigo-400 font-bold hover:underline">Sign Up</button></p>
                ) : (
                  <p className="text-slate-400 font-medium">Already have an account? <button onClick={() => setAuthMode('login')} className="text-indigo-400 font-bold hover:underline">Sign In</button></p>
                )}
              </div>
            </div>
          </div>
        )}

      </main>

      {/* FEATURES BAR (90% WIDTH) */}
      <section className="mx-auto px-4 sm:px-6 lg:px-8 mt-16" style={{ width: '90%' }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-900/60 backdrop-blur-2xl p-8 rounded-[36px] border border-slate-800 shadow-2xl">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/5">
              <Truck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-black text-white text-lg">Express Shipping</h3>
              <p className="text-sm text-slate-400 font-medium">Free delivery on orders over $100</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-3xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center shadow-lg shadow-purple-500/5">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-black text-white text-lg">Secure Encryption</h3>
              <p className="text-sm text-slate-400 font-medium">100% protected payment gateways</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-3xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center shadow-lg shadow-pink-500/5">
              <RefreshCw className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-black text-white text-lg">30-Day Returns</h3>
              <p className="text-sm text-slate-400 font-medium">Hassle-free money back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-900 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-pink-600 flex items-center justify-center text-white"><ShoppingBag className="w-4 h-4" /></div>
              <span className="text-xl font-black text-white">LuxeMarket</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">Ultra stylish futuristic e-commerce store with curated products, interactive wishlist, and secure admin management.</p>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-xs tracking-widest text-indigo-400">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><button onClick={() => setCurrentPage('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setCurrentPage('shop')} className="hover:text-white transition-colors">Explore Catalog</button></li>
              <li><button onClick={() => setCurrentPage('wishlist')} className="hover:text-white transition-colors">Liked Wishlist</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-xs tracking-widest text-indigo-400">Categories</h4>
            <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
              <li><button onClick={() => { setSelectedCategory('Electronics'); setCurrentPage('shop'); }} className="hover:text-white transition-colors">Electronics</button></li>
              <li><button onClick={() => { setSelectedCategory('Watches'); setCurrentPage('shop'); }} className="hover:text-white transition-colors">Watches</button></li>
              <li><button onClick={() => { setSelectedCategory('Home & Living'); setCurrentPage('shop'); }} className="hover:text-white transition-colors">Home & Living</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-black text-white mb-4 uppercase text-xs tracking-widest text-indigo-400">Newsletter</h4>
            <p className="text-sm text-slate-400 mb-3 font-medium">Subscribe for exclusive updates and VIP drops.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your email" className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 text-sm w-full text-white outline-none focus:border-indigo-500 shadow-inner" />
              <button onClick={() => showToast("✨ Successfully subscribed!")} className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-3 rounded-2xl font-black text-sm shadow-lg shadow-indigo-600/30">Join</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}