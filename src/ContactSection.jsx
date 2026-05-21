import React, { useState } from 'react';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
   
    <section id="contact" className="max-w-7xl mx-auto px-6 py-16 bg-white text-gray-800 my-8 shadow-md rounded-2xl border border-gray-100 transition-all duration-500">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        
       
        <div className="md:col-span-4 space-y-8">
          <div>
            <h2 className="text-3xl font-serif text-slate-900 mb-2">Send a Message</h2>
            <div className="flex space-x-1 text-amber-500 font-bold text-xl select-none">
              <span>~</span><span>~</span><span>~</span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                <Phone size={20} className="transform -scale-x-100" />
              </div>
              <div className="pt-2 text-[15px]">
                <p><span className="font-bold">Call Us</span> +1 207-876-1059</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                <MapPin size={20} />
              </div>
              <div className="pt-2 text-[15px] text-gray-600 leading-relaxed">
                <p>3065 Upton Avenue, Guilford,</p>
                <p>Maine 04443 USA</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                <Mail size={20} />
              </div>
              <div className="pt-2 text-[15px]">
                <p><span className="font-bold">E-mail</span> sales@example.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                <Clock size={20} />
              </div>
              <div className="pt-1 text-[15px] text-gray-600 leading-relaxed">
                <p>Monday-Friday: 9am to 5pm Saturday:</p>
                <p>10am to 4pm Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

       
        <div className="md:col-span-8 space-y-8">
          <div>
            <h2 className="text-3xl font-serif text-slate-900 mb-2">Contact Information</h2>
            <div className="flex space-x-1 text-amber-500 font-bold text-xl select-none">
              <span>~</span><span>~</span><span>~</span>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Your Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/70 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-200 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Email address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/70 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-200 transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/70 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-200 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/70 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-gray-200 transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 block">Message</label>
              <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full px-5 py-4 bg-gray-50/70 border border-transparent rounded-[2rem] focus:outline-none focus:bg-white focus:border-gray-200 transition-colors resize-none"></textarea>
            </div>

            <div className="pt-2">
              <button type="submit" className="px-8 py-3.5 border-2 border-amber-500 text-slate-900 font-bold uppercase tracking-wider text-xs rounded-full hover:bg-amber-500 hover:text-white transition-all duration-300">
                Submit Now
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
}