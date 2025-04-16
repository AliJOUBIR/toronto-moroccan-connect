
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Site Title */}
          <Link to="/" className="flex items-center space-x-2">
            <Logo size="sm" />
            <div>
              <span className="font-decorative font-bold text-morocco-red text-lg md:text-xl">
                Moroccan<span className="text-morocco-green">TO</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-800 hover:text-morocco-red font-medium">Home</Link>
            <Link to="/blog" className="text-gray-800 hover:text-morocco-red font-medium">Blog</Link>
            <Link to="/events" className="text-gray-800 hover:text-morocco-red font-medium">Events</Link>
            <Link to="/map" className="text-gray-800 hover:text-morocco-red font-medium">Map</Link>
            <Link to="/jobs" className="text-gray-800 hover:text-morocco-red font-medium">Jobs</Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <Button variant="ghost" className="text-gray-800 hover:text-morocco-red">
              Login
            </Button>
            <Button className="bg-morocco-red hover:bg-morocco-red/90">
              Join Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageSwitcher />
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2">
            <div className="flex flex-col space-y-3 py-3">
              <Link to="/" className="text-gray-800 hover:text-morocco-red font-medium py-2" onClick={toggleMenu}>Home</Link>
              <Link to="/blog" className="text-gray-800 hover:text-morocco-red font-medium py-2" onClick={toggleMenu}>Blog</Link>
              <Link to="/events" className="text-gray-800 hover:text-morocco-red font-medium py-2" onClick={toggleMenu}>Events</Link>
              <Link to="/map" className="text-gray-800 hover:text-morocco-red font-medium py-2" onClick={toggleMenu}>Map</Link>
              <Link to="/jobs" className="text-gray-800 hover:text-morocco-red font-medium py-2" onClick={toggleMenu}>Jobs</Link>
              <div className="flex space-x-2 pt-2">
                <Button variant="outline" className="flex-1">Login</Button>
                <Button className="flex-1 bg-morocco-red hover:bg-morocco-red/90">Join Us</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
