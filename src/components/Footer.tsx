import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-forest text-cream py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Bacelar Digital Marketing. All rights reserved.</p>
        <p className="mt-2">
          <Link to="/privacy-policy" className="hover:text-mustard mr-4">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-mustard">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;