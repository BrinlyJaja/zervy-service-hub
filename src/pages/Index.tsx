
import { useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ImageSlider from "@/components/ImageSlider";
import Waitlist from "@/components/Waitlist";

const Index = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  const openWaitlist = () => setIsWaitlistOpen(true);
  const closeWaitlist = () => setIsWaitlistOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Hero onJoinWaitlist={openWaitlist} />
      <Features />
      <ImageSlider />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-animated-gradient animate-gradient-shift opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ready to Transform Your Service Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of Nigerians who are waiting for the future of service discovery. 
            Be part of the Zervy revolution!
          </p>
          <button
            onClick={openWaitlist}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Join the Waitlist Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Zervy
          </h3>
          <p className="text-gray-400 mb-4">
            Connecting customers with certified artisans across Nigeria and expanding throughout Africa.
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Zervy. All rights reserved. Coming soon to transform your service experience.
          </p>
        </div>
      </footer>

      <Waitlist isOpen={isWaitlistOpen} onClose={closeWaitlist} />
    </div>
  );
};

export default Index;
