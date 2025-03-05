import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    const smoothScroll = (event: Event) => {
      event.preventDefault();
      const target = event.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href")?.substring(1);
      const targetElement = document.getElementById(targetId || "");

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 60, 
          behavior: "smooth",
        });
      }
    };

    
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", smoothScroll));

    
    return () => {
      links.forEach((link) => link.removeEventListener("click", smoothScroll));
    };
  }, []);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center">
          <img
  src="https://lh3.google.com/u/0/d/1q8QBzgqDhiM5is3Mk04gP_eAbiXBKJwO=w1920-h877-iv1"
  alt="GDP"
  style={{ width: "100px", height: "auto",
    paddingTop:"10px"
   }}
/>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary scroll-smooth">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary scroll-smooth">About</a>
            <a href="#what-we-do" className="text-gray-700 hover:text-primary scroll-smooth">What We Do</a>
            <a href="#inkspace" className="text-gray-700 hover:text-primary scroll-smooth">InkSpace</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#"
                className="block px-3 py-2 text-gray-700 hover:text-primary scroll-smooth"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-primary scroll-smooth"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a href="#what-we-do"
                className="block px-3 py-2 text-gray-700 hover:text-primary scroll-smooth"
                onClick={() => setIsOpen(false)}
              >
                What We Do
              </a>
              <a href="#inkspace"
                className="block px-3 py-2 text-gray-700 hover:text-primary scroll-smooth"
                onClick={() => setIsOpen(false)}
              >
                InkSpace
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
