import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, features }) => (
  <div className="bg-cream rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
    <div className="px-6 py-8">
      <h3 className="text-2xl font-semibold text-center mb-4 text-coffee font-dreaming">{title}</h3>
      <div className="text-center mb-6">
        <span className="text-4xl font-bold text-coffee">${price}</span>
      </div>
      <ul className="mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center mb-2">
            <Check className="h-5 w-5 text-sage mr-2" />
            <span className="text-coffee">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-sage text-cream py-2 px-4 rounded-md hover:bg-forest transition duration-300">
        Buy Now
      </button>
    </div>
  </div>
);

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Minimalist Pack",
      price: 19,
      features: [
        "25 Instagram Post Templates",
        "25 Instagram Story Templates",
        "Lifetime Access",
        "Easy to Customize in Canva"
      ]
    },
    {
      title: "Colorful Collection",
      price: 24,
      features: [
        "30 Instagram Post Templates",
        "30 Instagram Story Templates",
        "Lifetime Access",
        "Easy to Customize in Canva"
      ]
    },
    {
      title: "Elegant Suite",
      price: 29,
      features: [
        "35 Instagram Post Templates",
        "35 Instagram Story Templates",
        "Lifetime Access",
        "Easy to Customize in Canva"
      ]
    },
    {
      title: "Modern Bundle",
      price: 34,
      features: [
        "40 Instagram Post Templates",
        "40 Instagram Story Templates",
        "Lifetime Access",
        "Easy to Customize in Canva"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-sage to-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cream mb-12 font-dreaming">Choose Your Perfect Template Pack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-coffee font-dreaming">Want it all?</h3>
          <div className="bg-gradient-to-r from-mustard to-caramel rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-3xl font-bold mb-4 text-coffee font-dreaming">Complete Instagram Package</h4>
            <p className="text-xl mb-6 text-coffee">Get all 1000 templates for a special price!</p>
            <div className="text-4xl font-bold mb-6 text-coffee">$99</div>
            <button className="bg-sage text-cream px-8 py-3 rounded-md text-lg font-semibold hover:bg-forest transition duration-300">
              Get the Full Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;