import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-cream shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Instagram className="h-8 w-8 text-coffee mr-2" />
          <span className="text-xl font-bold text-coffee font-dreaming">Bacelar Digital Marketing</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#features" className="text-coffee hover:text-caramel">Features</a></li>
            <li><a href="#templates" className="text-coffee hover:text-caramel">Templates</a></li>
            <li><a href="#pricing" className="text-coffee hover:text-caramel">Pricing</a></li>
            <li><a href="#" className="bg-sage text-cream px-4 py-2 rounded-md hover:bg-forest transition duration-300">Buy Now</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;