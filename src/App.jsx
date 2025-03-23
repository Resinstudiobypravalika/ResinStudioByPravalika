import React, { useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const HomePage = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handlePayment = () => {
    if (!window.Razorpay) {
      alert('Razorpay script not loaded. Please try again.');
      return;
    }

    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID',
      amount: 1000 * 100,
      currency: 'INR',
      name: 'ResinStudioByPravalika',
      description: 'Purchase Resin Art',
      image: 'https://via.placeholder.com/100x100?text=Logo',
      handler: (response) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Customer Name',
        email: 'customer@example.com',
        contact: '9999999999'
      },
      theme: {
        color: '#6366F1'
      }
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 text-gray-900 font-serif">
      <motion.header 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white shadow-lg p-8 sticky top-0 z-50 backdrop-blur-md bg-opacity-90"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.h1 
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 tracking-wide"
          >ResinStudioByPravalika</motion.h1>
          <nav>
            <Button variant="outline" className="mr-4 hover:scale-105 transition">Gallery</Button>
            <Button variant="outline" className="hover:scale-105 transition">Contact</Button>
          </nav>
        </div>
      </motion.header>

      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="py-16 max-w-7xl mx-auto text-center"
      >
        <h2 className="text-5xl font-bold text-purple-600 mb-8">🎨 ResinStudioByPravalika | Resin Artistry 🌟</h2>
        <p className="text-2xl mb-4">🌈 <strong>Handcrafted Creations:</strong> From stunning jewelry to mesmerizing home decor.</p>
        <p className="text-2xl mb-4">🔮 <strong>Custom Orders:</strong> Personalized designs made to order—DM for details.</p>
        <p className="text-2xl mb-4">💡 <strong>Behind the Scenes:</strong> Get a glimpse into the creative process and learn tips & tricks.</p>
        <p className="text-2xl mb-4">🌍 <strong>Shipping Worldwide:</strong> Bringing beauty to your doorstep, no matter where you are.</p>
        <p className="text-2xl mb-4">📍 <strong>Based in Hyderabad</strong></p>
        <p className="text-2xl">✨ <strong>Follow</strong> for updates, exclusive drops, and creative inspiration!</p>
      </motion.section>

      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="py-20 max-w-7xl mx-auto"
      >
        <h2 className="text-7xl font-bold text-center text-blue-700 mb-16">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              key={item}
            >
              <Card className="overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition transform hover:-translate-y-3">
                <img src={`https://via.placeholder.com/400?text=Resin+Art+${item}`} alt={`Resin Art ${item}`} className="w-full h-72 object-cover" />
                <CardContent className="p-8">
                  <h3 className="text-4xl font-bold">Resin Art #{item}</h3>
                  <p className="text-lg text-gray-700">Unique handcrafted resin piece.</p>
                  <Button className="bg-green-600 text-white mt-4 w-full transition hover:scale-105" onClick={handlePayment}>Buy Now</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="bg-white py-20"
      >
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-7xl font-bold text-purple-600 mb-12">Contact</h2>
          <p className="text-2xl mb-8">Get in touch for custom orders or inquiries!</p>
        </div>
      </motion.section>

      <footer className="bg-gray-900 text-white text-center py-8">
        <p className="text-xl">&copy; 2025 ResinStudioByPravalika. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
