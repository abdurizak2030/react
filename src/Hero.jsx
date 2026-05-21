import React from "react";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('https://uaques.smartdemowp.com/wp-content/uploads/2021/04/ice-1.png')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-sky-200 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-cyan-200 rounded-full blur-3xl opacity-30 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      </div>

      {/* MAIN CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
        
        {/* LEFT SIDE */}
        <div className="space-y-6 animate-[fadeInUp_1s_ease]">
          {/* SMALL TEXT */}
          <p className="inline-block px-4 py-2 rounded-full border border-sky-100 bg-sky-50 text-sky-500 uppercase tracking-[4px] text-xs md:text-sm font-bold animate-[slideLeft_1s_ease]">
            Understand the importance of life
          </p>

          {/* TITLE */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900 font-serif overflow-hidden">
            <span className="block animate-[bounce_1.5s_ease]">
              Pure & Healthy
            </span>
            <span className="block bg-gradient-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent animate-[pulse_2s_ease_infinite]">
              Drinking Water
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="max-w-md text-base md:text-lg text-gray-600 leading-relaxed font-medium animate-[slideRight_1.2s_ease]">
            Enjoy pure, laboratory-tested water that boosts your health, vitality, and keeps you refreshed every single day.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 flex-wrap pt-4 animate-[fadeInUp_1.5s_ease]">
            <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-110 active:scale-95">
              ORDER TODAY
            </button>
            <button className="px-8 py-4 rounded-full bg-yellow-400 hover:bg-gray-900 text-gray-900 hover:text-white font-bold shadow-xl shadow-yellow-400/30 transition-all duration-300 hover:scale-110 active:scale-95">
              FREE ESTIMATE
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end items-center animate-[fadeInUp_1.5s_ease]">
          {/* GLOW */}
          <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-sky-300/40 rounded-full blur-3xl animate-pulse"></div>

          {/* FLOATING BALLS */}
          <div className="absolute top-10 right-10 w-12 h-12 bg-sky-400 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-10 left-10 w-16 h-16 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>

          {/* BOTTLE IMAGE */}
          <img
            src="double-bottle.png"
            alt="Water Bottle"
            className="relative z-10 w-72 md:w-80 lg:w-[460px] object-contain drop-shadow-[0_25px_25px_rgba(0,162,232,0.25)] animate-bounce"
          />
        </div>

      </div>
    </section>
  );
}