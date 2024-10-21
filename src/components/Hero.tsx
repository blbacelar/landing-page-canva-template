import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-cream to-mustard py-20">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold text-coffee mb-4 font-dreaming">1000 Instagram Posts + Stories</h1>
          <p className="text-xl text-coffee mb-8 font-open">Elevate your Instagram game with our premium Canva templates</p>
          <a href="#" className="bg-sage text-cream px-8 py-3 rounded-md text-lg font-semibold hover:bg-forest transition duration-300">Get Started</a>
        </div>
        <div className="hidden md:block">
          <img src="https://source.unsplash.com/random/600x800?smartphone" alt="Instagram Template Mockup" className="w-64 h-auto rounded-3xl shadow-2xl transform -rotate-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;