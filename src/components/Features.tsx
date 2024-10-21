import React from 'react';
import { Layout, Image, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    { icon: <Layout className="h-8 w-8 text-caramel" />, title: '115 Post Templates', description: 'Diverse designs for every Instagram post' },
    { icon: <Image className="h-8 w-8 text-caramel" />, title: '115 Story Templates', description: 'Engaging layouts for your Instagram stories' },
    { icon: <Zap className="h-8 w-8 text-caramel" />, title: 'Easy to Customize', description: 'Quickly edit and personalize in Canva' },
  ];

  return (
    <section id="features" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-coffee mb-12 font-dreaming">Why Choose Our Instagram Templates?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-mustard rounded-lg shadow-md">
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-coffee">{feature.title}</h3>
              <p className="text-coffee">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;