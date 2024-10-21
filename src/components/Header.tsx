import React, { useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-cream shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <Instagram className="h-8 w-8 text-coffee mr-2" />
            <span className="text-xl font-bold text-coffee font-dreaming">
              Bacelar Digital Marketing
            </span>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li>
                <a
                  className="text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  className="text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("full-package")}
                  className="bg-sage text-cream px-4 py-2 rounded-md hover:bg-forest transition duration-300"
                >
                  Buy Now
                </button>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-coffee" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="space-y-2">
              <li>
                <a
                  className="block text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="block text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  className="block text-coffee hover:text-caramel cursor-pointer"
                  onClick={() => {
                    scrollToSection("full-package");
                    setIsMenuOpen(false);
                  }}
                >
                  Pricing
                </a>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("full-package")}
                  className="w-full bg-sage text-cream px-4 py-2 rounded-md hover:bg-forest transition duration-300 mt-2"
                >
                  Buy Now
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
