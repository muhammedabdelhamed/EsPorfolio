import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <p className="text-lg font-semibold">Eslam.dev</p>
            <p className="text-gray-400 mt-2">Web Developer & Digital Marketing Specialist</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eslam.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}