import React from 'react';
import Hero from '../imgs/hero.jpg';
import { Code, Megaphone, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <Code className="h-12 w-12 text-indigo-600" />
              <Megaphone className="h-12 w-12 text-indigo-600" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Eslam Gamal
            </h1>
            <h1 className="text-xl md:text-3xl font-bold text-gray-900 mb-6">
              Web Developer & Digital<br className="hidden md:block" /> Marketing Specialist
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Crafting beautiful websites and driving digital growth through strategic marketing solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#portfolio" 
                className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-indigo-100 rounded-full blur-lg opacity-75"></div>
              <img
                src={Hero}
                alt="Eslam Gamal"
                className="relative w-64 h-64 object-cover rounded-full border-4 border-white shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}