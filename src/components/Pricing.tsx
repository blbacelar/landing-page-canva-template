import React from "react";
import { Check } from "lucide-react";

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingOption> = ({ title, price, features }) => (
  <div className="bg-cream rounded-lg shadow-md p-6 flex flex-col">
    <h3 className="text-2xl font-bold text-coffee mb-4">{title}</h3>
    <div className="text-3xl font-bold text-caramel mb-6">{price}</div>
    <ul className="flex-grow">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center mb-2">
          <Check className="h-5 w-5 text-sage mr-2" />
          <span className="text-coffee">{feature}</span>
        </li>
      ))}
    </ul>
    <button className="mt-6 bg-sage text-cream px-4 py-2 rounded-md hover:bg-forest transition duration-300">
      Choose Plan
    </button>
  </div>
);

const Pricing: React.FC = () => {
  const pricingOptions: PricingOption[] = [
    {
      title: "Starter Pack",
      price: "$29",
      features: [
        "25 Post Templates",
        "25 Story Templates",
        "Basic Customization",
      ],
    },
    {
      title: "Pro Pack",
      price: "$49",
      features: [
        "50 Post Templates",
        "50 Story Templates",
        "Advanced Customization",
      ],
    },
    {
      title: "Business Pack",
      price: "$79",
      features: [
        "100 Post Templates",
        "100 Story Templates",
        "Premium Support",
      ],
    },
    {
      title: "Enterprise Pack",
      price: "$129",
      features: [
        "250 Post Templates",
        "250 Story Templates",
        "Dedicated Account Manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-sage to-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-cream mb-12 font-dreaming">
          Choose Your Perfect Template Pack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingOptions.map((option, index) => (
            <PricingCard key={index} {...option} />
          ))}
        </div>
        <div id="full-package" className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-coffee font-dreaming">
            Want it all?
          </h3>
          <div className="bg-gradient-to-r from-mustard to-caramel rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h4 className="text-3xl font-bold mb-4 text-coffee font-dreaming">
              Complete Instagram Package
            </h4>
            <p className="text-xl mb-6 text-coffee">
              Get all 1000 templates for a special price!
            </p>
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
