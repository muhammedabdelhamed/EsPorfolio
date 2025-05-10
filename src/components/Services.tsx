import React from 'react';
import { Code, Layout, Search, TrendingUp, Share2, Database } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies and best practices.'
    },
    {
      icon: <Search className="h-8 w-8 text-indigo-600" />,
      title: 'SEO Optimization',
      description: 'Strategic optimization to improve search rankings and increase organic traffic.'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: 'Digital Marketing',
      description: 'Results-driven marketing campaigns that drive growth and engagement.'
    },
    {
      icon: <Share2 className="h-8 w-8 text-indigo-600" />,
      title: 'Social Media',
      description: 'Strategic social media management to build and engage your audience.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Services</h2>
          <p className="text-xl text-gray-600">Comprehensive digital solutions for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
