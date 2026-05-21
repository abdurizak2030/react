import React from "react";

import {
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
  FaChevronUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#072b5a] text-white relative overflow-hidden">
      
      {/* Subscribe Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Input */}
        <div className="flex w-full max-w-2xl bg-white rounded-full overflow-hidden">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-1 px-8 py-5 text-gray-700 outline-none"
          />

          <button className="bg-[#f0aa3c] hover:bg-[#df992d] transition px-10 py-5 font-bold">
            SUBSCRIBE
          </button>
        </div>

        {/* Social */}
        <div className="flex items-center gap-4">

          <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f0aa3c] transition flex items-center justify-center cursor-pointer">
            <FaTwitter size={18} />
          </div>

          <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f0aa3c] transition flex items-center justify-center cursor-pointer">
            <FaFacebookF size={18} />
          </div>

          <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f0aa3c] transition flex items-center justify-center cursor-pointer">
            <FaYoutube size={18} />
          </div>

          <div className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#f0aa3c] transition flex items-center justify-center cursor-pointer">
            <FaPinterestP size={18} />
          </div>

        </div>
      </div>

      {/* Wave */}
      <div className="w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-16 text-white/10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="
              M0 60
              C 40 20, 80 100, 120 60
              S 200 20, 240 60
              S 320 100, 360 60
              S 440 20, 480 60
              S 560 100, 600 60
              S 680 20, 720 60
              S 800 100, 840 60
              S 920 20, 960 60
              S 1040 100, 1080 60
              S 1160 20, 1200 60
              S 1280 100, 1320 60
              S 1400 20, 1440 60
            "
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Logo/About */}
        <div>
          <h1 className="text-4xl font-serif mb-8">
            Uaques
          </h1>

          <p className="text-white/80 leading-9 text-lg">
            Uaques Drinking water gives five
            steps of water purification.
            Promising quality and ensuring
            the latest technology.
          </p>
        </div>

        {/* About */}
        <div>
          <h2 className="text-3xl font-serif mb-6">
            About Us
          </h2>

          <div className="w-12 h-1 bg-sky-400 mb-8"></div>

          <div className="flex flex-col gap-5 text-white/90">
            <a href="#" className="hover:text-sky-400">
              Why Choose Us
            </a>

            <a href="#" className="hover:text-sky-400">
              Water Bottles
            </a>

            <a href="#" className="hover:text-sky-400">
              Water Dispensers
            </a>

            <a href="#" className="hover:text-sky-400">
              Contact Us
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div>
          <h2 className="text-3xl font-serif mb-6">
            Business Hours
          </h2>

          <div className="w-12 h-1 bg-sky-400 mb-8"></div>

          <div className="space-y-5 text-white/90">
            <p>Monday-Friday: 9am - 5pm</p>
            <p>Saturday: 10am - 4pm</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-3xl font-serif mb-6">
            Contact Us
          </h2>

          <div className="w-12 h-1 bg-sky-400 mb-8"></div>

          <div className="space-y-5 text-white/90">
            <p>3065 Upton Avenue</p>
            <p>Maine 04443 USA</p>
            <p>+1 207-876-1059</p>
            <p>info@example.com</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="bg-[#031d40] py-8 text-center text-white/70">
        Copyright © 2025 Uaques. All rights reserved.
      </div>

      {/* Scroll Top */}
      <button className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 transition shadow-lg flex items-center justify-center">
        <FaChevronUp size={22} />
      </button>

    </footer>
  );
}