import React from "react";

export default function WaterComposition() {
  
  const bottomMinerals = [
    { name: "Nitrates", value: "2 mg/L" },
    { name: "Bicarbonates", value: "157 mg/L" },
    { name: "Sulphates", value: "5.6 mg/L" },
    { name: "Sodium", value: "0.4 mg/L" },
  ];

  return (
    <section className="bg-[#f8fafc] py-20 px-6 sm:px-10 max-w-7xl mx-auto font-sans relative overflow-hidden">
      
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-normal text-gray-900 font-serif tracking-wide">
          Uaquas Basic Water <br />
          <span className="font-light">Composition</span>
        </h2>
    
        <div className="mt-4 flex justify-center gap-1">
          <span className="w-2 h-1 bg-amber-500 rounded-full"></span>
          <span className="w-5 h-1 bg-amber-500 rounded-full animate-pulse"></span>
          <span className="w-2 h-1 bg-amber-500 rounded-full"></span>
        </div>
      </div>

   
      <div className="grid lg:grid-cols-3 gap-12 items-center max-w-6xl mx-auto relative z-10">
        
    
        <div className="space-y-16 text-center lg:text-right">

          <div className="group transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-3 justify-center lg:justify-start">
              <span className="text-3xl font-black text-sky-400/40 tracking-tighter select-none font-mono">K+</span>
              <h3 className="text-xl font-bold text-gray-800 font-serif">Potassium</h3>
            </div>
            <p className="text-blue-600 font-bold text-sm mt-1">2.5 mg/L</p>
            <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto lg:mr-0 leading-relaxed">
              To purify water 2.5mg potassium is needed for every liter.
            </p>
          
            <div className="hidden lg:block border-t border-dashed border-gray-300 w-24 mt-4 ml-auto"></div>
          </div>

          {/* Fluoride */}
          <div className="group transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-3 justify-center lg:justify-start">
              <span className="text-3xl font-black text-sky-400/40 tracking-tighter select-none font-mono">Fl-</span>
              <h3 className="text-xl font-bold text-gray-800 font-serif">Fluoride</h3>
            </div>
            <p className="text-blue-600 font-bold text-sm mt-1">0.5 mg/L</p>
            <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto lg:mr-0 leading-relaxed">
              Fluoride is needed to purify 1 liter of water.
            </p>
            <div className="hidden lg:block border-t border-dashed border-gray-300 w-24 mt-4 ml-auto"></div>
          </div>
        </div>

      
        <div className="relative flex justify-center items-center py-6">
         
          <div className="absolute w-72 h-72 md:w-96 md:h-96 border border-sky-200/50 rounded-full animate-ping [animation-duration:4s]"></div>
          <div className="absolute w-64 h-64 md:w-80 md:h-80 border border-sky-300/30 rounded-full animate-pulse"></div>
          
       
          <div className="relative z-10 p-4 drop-shadow-[0_20px_35px_rgba(14,165,233,0.15)] transition-transform duration-500 hover:scale-105">
            <img
              src="water-glass-1.png" 
              alt="Glass of pure water"
              className="w-56 md:w-64 h-auto object-contain mx-auto mix-blend-multiply"
            />
          </div>
        </div>

       
        <div className="space-y-16 text-center lg:text-left">
         
          <div className="group transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row items-center gap-3 justify-center lg:justify-start">
              <span className="text-3xl font-black text-sky-400/40 tracking-tighter select-none font-mono">Cl-</span>
              <h3 className="text-xl font-bold text-gray-800 font-serif">Chloride</h3>
            </div>
            <p className="text-blue-600 font-bold text-sm mt-1">350 mg/L</p>
            <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto lg:ml-0 leading-relaxed">
              To purify water give 350mg chlorine for every liter of water.
            </p>
            <div className="hidden lg:block border-t border-dashed border-gray-300 w-24 mt-4 mr-auto"></div>
          </div>

          {/* Magnesium */}
          <div className="group transition-all duration-300 transform hover:-translate-y-1">
            <div className="flex flex-col lg:flex-row items-center gap-3 justify-center lg:justify-start">
              <span className="text-3xl font-black text-sky-400/40 tracking-tighter select-none font-mono">Mg+</span>
              <h3 className="text-xl font-bold text-gray-800 font-serif">Magnesium</h3>
            </div>
            <p className="text-blue-600 font-bold text-sm mt-1">14.5 mg/L</p>
            <p className="text-gray-500 text-sm mt-2 max-w-xs mx-auto lg:ml-0 leading-relaxed">
              14.5mg of magnesium will be required to purify every liter.
            </p>
            <div className="hidden lg:block border-t border-dashed border-gray-300 w-24 mt-4 mr-auto"></div>
          </div>
        </div>

      </div>

    
      <div className="mt-24 max-w-5xl mx-auto border-t border-gray-200/80 pt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center items-center justify-center">
          {bottomMinerals.map((mineral, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              <h4 className="text-lg font-bold text-gray-800 font-serif transition-colors duration-200 group-hover:text-blue-600">
                {mineral.name}
              </h4>
              <p className="text-sm font-semibold text-gray-500 mt-1">
                {mineral.value}
              </p>
              
            
              {index < 3 && (
                <div className="hidden md:block absolute -right-4 top-1/3 text-gray-300 select-none pointer-events-none transform translate-x-1/2">
                  <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 2C8 10 12 5 18 28" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}