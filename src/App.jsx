import React, { useState } from 'react';
import Navbar from './Navbar'; 
import Hero from './Hero';
import Shop from './Shop';
import About from './About';     
import WaterComposition from './WaterComposition';
import Testimonials from './Testimonials';
import ContactSection from './ContactSection'; 
import Footer from './Footer';

export default function App() {
  const [view, setView] = useState('shop');
  const [cart, setCart] = useState([]);

  const handleCartClick = () => {
    setView('cart');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#eef3f7] antialiased">
     <Navbar onCartClick={() => setView("cart")} cart={cart} />
      
      <div className="h-20"></div>

     <main className="pt-16">
        <Hero />
        <Shop view={view} setView={setView} cart={cart} setCart={setCart} />
      </main>

      <About />
     
      <WaterComposition />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}