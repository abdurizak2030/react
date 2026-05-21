import React, { useState } from "react";
import {
  ShoppingCart,
  X,
  Plus,
  Minus,
  Search,
  ChevronUp,
  ChevronDown,
} from "lucide-react";

export default function Shop({ view, setView, cart, setCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [detailQty, setDetailQty] = useState(1);

  const products = [
    {
      id: 1,
      title: "Diamond Spark Water",
      image: "double-bottle.png",
      oldPrice: "$35.50",
      newPrice: 30,
      desc: "Diamond Spark Water ensuring your health and safety is fully purified and enriched with minerals.",
    },
    {
      id: 2,
      title: "Diamond Mineral Water",
      image: "double-bottle.png",
      oldPrice: "$18.00",
      newPrice: 13.5,
      desc: "Diamond Mineral Water ensuring your health and safety is fully purified and enriched with minerals.",
    },
    {
      id: 3,
      title: "Classic Spark Water",
      image: "double-bottle.png",
      oldPrice: "$29.50",
      newPrice: 23,
      desc: "Classic Spark Water ensuring your health and safety is fully purified and enriched with minerals.",
    },
  ];

  const addToCart = (product, customQty = 1) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + customQty }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: customQty }]);
    }
  };

  const updateQty = (id, amount) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  
  const subtotal = cart.reduce(
    (acc, item) => acc + item.newPrice * item.quantity,
    0
  );

  return (
    <section id="shop" className="bg-[#eef3f7] py-20 px-4 relative overflow-hidden min-h-screen">
      {/* ANIMATIONS */}
      <style>{`
        @keyframes floatCard { 0%, 100% { transform:translateY(0px); } 50% { transform:translateY(-15px); } }
        @keyframes pulseGlow { 0%, 100% { box-shadow:0 0 0px #38bdf8; } 50% { box-shadow:0 0 30px #38bdf8; } }
        @keyframes spinBorder { 0% { transform:rotate(0deg); } 100% { transform:rotate(360deg); } }
      `}</style>

      {/* VIEW 1: SHOP MAIN PAGE */}
      {view === "shop" && (
        <>
          <div className="text-center mb-14 relative z-10 pt-16">
            <h1 className="text-5xl md:text-7xl font-bold text-[#1d1d1d]">Shop</h1>
            <p className="text-gray-500 mt-4">Home / Bottle / Naturally Mineral Water</p>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 relative z-10">
            {products.map((product, index) => (
              <div
                key={product.id}
                className="relative rounded-[30px] overflow-hidden cursor-pointer"
                onClick={() => {
                  setSelectedProduct(product);
                  setDetailQty(1);
                  setView("detail");
                  window.scrollTo(0, 0);
                }}
                style={{ animation: `floatCard 5s ease-in-out infinite ${index * 0.5}s` }}
              >
                <div
                  className="absolute inset-[-3px] rounded-[30px] bg-gradient-to-r from-sky-400 via-blue-500 to-cyan-400"
                  style={{ animation: "spinBorder 5s linear infinite" }}
                ></div>
                
                <div className="relative bg-white p-8 rounded-[30px] h-full z-10 flex flex-col justify-between">
                  <div className="flex justify-center relative">
                    <div
                      className="absolute w-44 h-44 bg-sky-200 rounded-full blur-3xl opacity-40"
                      style={{ animation: "pulseGlow 5s ease-in-out infinite" }}
                    ></div>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-72 object-contain hover:scale-110 transition duration-500 relative z-10"
                    />
                  </div>
                  
                  <div className="text-center mt-8">
                    <span className="bg-gray-100 px-4 py-1 rounded-full text-xs text-gray-500">2 x 5L Bottles</span>
                    <h2 className="text-3xl font-bold mt-5 text-[#1d1d1d]">{product.title}</h2>
                    <p className="text-gray-500 mt-4 leading-8 line-clamp-2">{product.desc}</p>
                    <div className="mt-5">
                      <p className="line-through text-gray-300 text-2xl font-bold">{product.oldPrice}</p>
                      <p className="text-[#f4a340] text-3xl font-bold">${product.newPrice.toFixed(2)}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      className="mt-8 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full flex items-center gap-3 mx-auto transition font-semibold shadow-xl"
                    >
                      <ShoppingCart size={18} /> ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* VIEW 2: PRODUCT DETAIL VIEW */}
      {view === "detail" && selectedProduct && (
        <div className="max-w-7xl mx-auto bg-white p-6 md:p-16 rounded-[40px] relative shadow-sm mt-20">
          <button
            onClick={() => setView("shop")}
            className="absolute top-6 left-6 text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-2 rounded-full transition"
          >
            ← Back to Shop
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
            <div>
              <div className="relative bg-white rounded-lg p-6 flex justify-center">
                <Search size={26} className="absolute top-6 right-6 text-black opacity-60" />
                <img src={selectedProduct.image} alt={selectedProduct.title} className="max-h-[450px] object-contain" />
              </div>
              <div className="flex gap-6 mt-8 justify-center lg:justify-start">
                <div className="w-24 h-24 border-2 border-cyan-400 bg-white rounded-xl flex items-center justify-center p-2">
                  <img src={selectedProduct.image} className="object-contain" alt="" />
                </div>
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-cyan-100 blur-xl"></div>
                </div>
                <div className="w-24 h-24 bg-gray-50 rounded-xl flex items-center justify-center p-2 opacity-40 border">
                  <img src={selectedProduct.image} className="object-contain" alt="" />
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold text-[#111] leading-tight">
                {selectedProduct.title}
              </h1>
              <div className="mt-5 inline-block bg-[#ececec] text-gray-600 px-6 py-2 rounded-full text-lg">
                2 x 5L Bottles
              </div>
              <p className="mt-8 text-xl md:text-2xl leading-relaxed text-gray-500">
                {selectedProduct.desc} Experience premium hydration sourced directly from pure natural springs, crafted for your daily health and wellness.
              </p>
              <div className="mt-8">
                <p className="text-gray-300 text-4xl line-through font-medium">{selectedProduct.oldPrice}</p>
                <p className="text-[#e8a03b] text-6xl font-semibold mt-2 underline decoration-1 underline-offset-8">
                  ${selectedProduct.newPrice.toFixed(2)}
                </p>
              </div>
              <p className="text-[#9ca000] text-xl font-medium mt-8">100 in stock</p>
              
              <div className="flex flex-wrap items-center gap-6 mt-6">
                <div className="bg-[#f1f1f1] rounded-full px-8 py-4 flex items-center gap-8">
                  <span className="text-3xl font-medium text-gray-700 w-6 text-center select-none">{detailQty}</span>
                  <div className="flex flex-col gap-1 border-l border-gray-300 pl-3">
                    <ChevronUp className="w-5 h-5 cursor-pointer text-gray-500 hover:text-black" onClick={() => setDetailQty((p) => p + 1)} />
                    <ChevronDown className="w-5 h-5 cursor-pointer text-gray-500 hover:text-black" onClick={() => setDetailQty((p) => (p > 1 ? p - 1 : 1))} />
                  </div>
                </div>
                <button
                  onClick={() => addToCart(selectedProduct, detailQty)}
                  className="border-2 border-cyan-400 bg-white text-gray-800 rounded-full px-12 py-4 flex items-center gap-4 hover:bg-cyan-50 transition"
                >
                  <ShoppingCart size={24} className="text-cyan-500" /> 
                  <span className="text-xl font-bold tracking-wide">BUY NOW</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* VIEW 3: CART VIEW */}
      {view === "cart" && (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-[40px] shadow-sm mt-20">
          <div className="flex items-center justify-between border-b pb-6">
            <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-3">
              <ShoppingCart size={36} className="text-sky-500" /> Your Shopping Cart
            </h1>
            <button
              onClick={() => setView("shop")}
              className="text-sm font-semibold bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-full transition"
            >
              Back to Shop
            </button>
          </div>

          <div className="mt-8 space-y-6">
            {cart.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-gray-400 text-2xl">Your shopping cart is currently empty.</p>
                <button
                  onClick={() => setView("shop")}
                  className="mt-6 bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-full font-bold transition"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4 max-h-[50vh] overflow-y-auto pr-2">
                  {cart.map((item) => (
                    <div key={item.id} className="flex flex-wrap md:flex-nowrap items-center gap-6 border-b pb-6 relative group">
                      <img src={item.image} alt={item.title} className="w-28 h-28 object-contain bg-gray-50 rounded-2xl p-2 border" />
                      
                      <div className="flex-1 min-w-[200px]">
                        <h2 className="font-bold text-gray-800 text-xl">{item.title}</h2>
                        <p className="text-gray-400 text-sm mt-1">2 x 5L Bottles</p>
                        <p className="text-sky-500 font-extrabold text-lg mt-2">${item.newPrice.toFixed(2)}</p>
                      </div>
                      
                      <div className="flex items-center gap-4 bg-gray-100 px-4 py-2 rounded-full">
                        <button onClick={() => updateQty(item.id, -1)} className="w-8 h-8 rounded-full bg-white hover:bg-gray-200 flex items-center justify-center text-gray-700 font-bold transition">
                          <Minus size={14} />
                        </button>
                        <span className="font-bold text-gray-800 text-lg w-6 text-center">{item.quantity}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="w-8 h-8 rounded-full bg-sky-500 text-white hover:bg-sky-600 flex items-center justify-center font-bold transition">
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="text-right min-w-[100px]">
                        <p className="text-gray-400 text-xs">Total</p>
                        <p className="font-bold text-gray-800 text-xl">${(item.newPrice * item.quantity).toFixed(2)}</p>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-300 hover:text-red-500 p-2 md:opacity-0 group-hover:opacity-100 transition absolute top-0 right-0 md:relative md:top-auto md:right-auto"
                      >
                        <X size={24} />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-8 rounded-3xl flex flex-col md:flex-row justify-between items-center gap-6 mt-8">
                  <div>
                    <p className="text-gray-500 text-lg">Subtotal:</p>
                    <p className="text-orange-500 text-4xl font-black mt-1">${subtotal.toFixed(2)}</p>
                  </div>
                  <button
                    onClick={() => alert("Checkout system is coming soon!")}
                    className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white px-12 py-4 rounded-full font-bold text-xl tracking-wide transition shadow-xl shadow-sky-200"
                  >
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}