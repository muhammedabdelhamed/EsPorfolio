import React from 'react';
import { Menu, X, Code } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-indigo-600" />
            <span className="font-bold text-xl">eslam.dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-indigo-600">About</a>
            <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-indigo-600">Portfolio</a>
            <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Portfolio</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 rounded-md">Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
}