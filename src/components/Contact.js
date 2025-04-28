import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      {/* Background Image with opacity */}
      <div className="absolute inset-0">
        <img
          src="/images/contact-background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-100"
        />
      </div>

      {/* Foreground content */}
      <div className="relative z-10 max-w-6xl w-full bg-white/100 backdrop-blur-xl p-12 rounded-3xl shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-400 transition-all placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-400 transition-all placeholder-gray-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Type your message..."
                className="w-full bg-white/80 border border-gray-300 p-4 rounded-xl focus:outline-none focus:border-blue-400 transition-all placeholder-gray-500 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 text-gray-700">
            <div className="flex items-start gap-4">
              <Mail className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p>support@move37capital.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p>+1 (212) 555-1234</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-blue-500 w-6 h-6 mt-1" />
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p>GR145 WeWork, Salapuria<br />Bengaluru, IN 560076</p>
              </div>
            </div>

            <p className="text-gray-600 text-sm mt-6">
              We typically respond within 1-2 business days. For urgent inquiries, please call.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
