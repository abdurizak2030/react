import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "They are giving free water service. Where I see that some companies say that they serve water within 2hr but they do not. In that case uaques serve water with the exact time they want.",
      name: "BRENDON TAYLOR",
      role: "CEO & FOUNDER",
      image:
        "https://randomuser.me/api/portraits/men/32.jpg",
    },

    {
      text: "Best drinking water company I have ever used. Their support and fast delivery service are truly impressive and professional.",
      name: "JESSICA SMITH",
      role: "MANAGER",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
    },

    {
      text: "Very clean and healthy water. The bottles always arrive fresh and on time every single day.",
      name: "MICHAEL JOHN",
      role: "CUSTOMER",
      image:
        "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="bg-[#f7f7f7] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-10 items-start mb-20">

          {/* LEFT */}
          <div className="animate-fade-right">
            <h2 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight">
              Our Testimonials
            </h2>

            <div className="w-12 h-1 bg-yellow-400 rounded-full mt-5"></div>
          </div>

          {/* RIGHT */}
          <div className="animate-fade-left">
            <div className="w-[2px] h-24 bg-blue-500 mb-5"></div>

            <p className="text-gray-500 leading-8 text-lg">
              Why people believe in us is because we do not believe in
              word of mouth we believe in work. We try to give you the
              best thats why some of our clients give us a testimonials
            </p>
          </div>
        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative text-center">

          {/* QUOTE ICON */}
          <div className="absolute left-1/2 -translate-x-1/2 top-10 text-[180px] text-blue-100 font-black opacity-50 select-none">
            ”
          </div>

          {/* TEXT */}
          <div className="relative z-10 max-w-4xl mx-auto">

            <p className="text-2xl md:text-3xl italic text-gray-700 leading-[1.8] transition-all duration-700 animate-fade-up">
              {testimonials[current].text}
            </p>

            {/* BUTTONS */}
            <div className="flex justify-between items-center mt-10">

              <button
                onClick={prevSlide}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                onClick={nextSlide}
                className="w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* USER */}
            <div className="mt-14 flex flex-col items-center">

              <img
                src={testimonials[current].image}
                alt=""
                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl animate-pulse"
              />

              <h3 className="mt-6 text-blue-700 font-bold text-xl">
                {testimonials[current].name}
              </h3>

              <p className="text-gray-500 text-sm tracking-[2px] mt-1">
                {testimonials[current].role}
              </p>
            </div>

            {/* SMALL IMAGES */}
            <div className="flex justify-center gap-6 mt-12">

              {testimonials.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt=""
                  onClick={() => setCurrent(index)}
                  className={`w-16 h-16 rounded-full object-cover cursor-pointer transition-all duration-300 ${
                    current === index
                      ? "scale-125 border-4 border-blue-500 shadow-xl"
                      : "opacity-50 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}