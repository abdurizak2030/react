import React, { useState } from "react";
import {
  Search,
  ShoppingCart,
  Menu,
  X,
  Phone,
  ChevronRight,
} from "lucide-react";

export default function Navbar({ onCartClick, cart = [] }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      {/* OVERLAY */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            
            {/* LEFT SIDE: LOGO & DELIVERY */}
            <div className="flex items-center gap-10">
              {/* LOGO */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border-4 border-sky-400 border-t-transparent rotate-45"></div>
                <h1 className="text-2xl font-bold text-gray-800">Uaques</h1>
              </div>

              {/* PHONE / DELIVERY */}
              <div className="hidden md:flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Get Free Delivery</p>
                  <p className="font-bold text-gray-800">812-070-5692</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: NAV LINKS, SEARCH, CART & MOBILE MENU */}
            <div className="flex items-center gap-8 text-gray-700">
              {/* NAVIGATION LINKS */}
              <nav className="hidden lg:flex items-center gap-8 font-semibold text-gray-700">
                {/* HOME */}
                <div className="relative group">
                  <button className="flex items-center gap-1 hover:text-yellow-400 transition">
                    <a href="#home">HOME</a>
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200">
                    <div className="bg-white shadow-xl rounded-xl p-4 w-52">
                      <a href="#home1" className="block hover:text-yellow-400 mb-2 text-sm">Home Page One</a>
                      <a href="#home2" className="block hover:text-yellow-400 text-sm">Home Page Two</a>
                    </div>
                  </div>
                </div>

                {/* PAGES */}
                <div className="relative group">
                  <button className="flex items-center gap-1 hover:text-yellow-400 transition">
                    <a href="#pages">PAGES</a>
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200">
                    <div className="bg-white shadow-xl rounded-xl p-4 w-52">
                      <a href="#about" className="block hover:text-yellow-400 mb-2 text-sm">About Us</a>
                      <a href="#services" className="block hover:text-yellow-400 mb-2 text-sm">Services</a>
                      <a href="#error" className="block hover:text-yellow-400 text-sm">Error Page</a>
                    </div>
                  </div>
                </div>

                {/* SHOP */}
                <div className="relative group">
                  <button className="flex items-center gap-1 hover:text-yellow-400 transition">
                    <a href="#shop">SHOP</a>
                  </button>
                  <div className="absolute left-0 top-full pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-200">
                    <div className="bg-white shadow-xl rounded-xl p-4 w-52">
                      <a href="#shop" className="block hover:text-yellow-400 mb-2 text-sm">Our Shop</a>
                      <a href="#shop-columns" className="block hover:text-yellow-400 text-sm">Shop Columns</a>
                    </div>
                  </div>
                </div>

                {/* CONTACT */}
                <a href="#contact" className="hover:text-yellow-400 transition">CONTACT</a>
              </nav>

              {/* SEARCH */}
              <Search className="cursor-pointer hover:text-yellow-400 transition" />

              {/* CART BUTTON */}
              <button
                onClick={onCartClick}
                className="relative w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition active:scale-95"
              >
                <ShoppingCart size={18} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* MOBILE MENU BUTTON */}
              <button className="lg:hidden hover:text-yellow-400 transition" onClick={() => setMenuOpen(true)}>
                <Menu size={30} />
              </button>
            </div>

          </div>
        </div>

        {/* MOBILE MENU SIDEBAR */}
        <div className={`fixed top-0 right-0 h-full w-80 bg-[#1f1f1f] text-white z-50 transform transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
            <h2 className="text-xl font-bold">Uaques</h2>
            <button onClick={() => setMenuOpen(false)} className="hover:text-yellow-400 transition">
              <X size={26} />
            </button>
          </div>
          <div className="mt-2">
            {[
              { name: "HOME", link: "#home1" },
              { name: "PAGES", link: "#about" },
              { name: "SHOP", link: "#shop" },
              { name: "ELEMENT", link: "#elements" },
              { name: "BLOG", link: "#blog-grid" },
              { name: "CONTACT", link: "#contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between px-5 py-4 border-b border-white/10 hover:bg-white/5 hover:text-yellow-400 transition"
              >
                <span className="text-sm font-semibold">{item.name}</span>
                <div className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-md group-hover:bg-yellow-400 transition">
                  <ChevronRight size={18} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

