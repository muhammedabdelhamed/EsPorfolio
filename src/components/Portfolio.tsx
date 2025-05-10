import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    
    {
      title: 'YAZ Studio',
      description: 'Marketing Agency',
      image: '/YazStudio.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://yazstudio21.com/'
    },
    {
      title: 'Drippin EG',
      description: 'E Commerce Store',
      image: '/DrippinEg.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://drippin-eg.com/'
    },
    {
      title: 'Golden Trade',
      description: 'Crypto Trading Site',
      image: '/goldenTrade.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://goldentrade1.com/'
    },
    {
      title: 'The Brave Unit',
      description: 'Security Company',
      image: '\Brave.jpg',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://thebraveunit.com/'
    },
    {
      title: 'Movix',
      description: 'Movies Website Front end Development',
      image: '/FrontEndReactJS.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://movix-clone-three.vercel.app/'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Portfolio</h2>
          <p className="text-xl text-gray-600">Featured projects and campaigns</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  View Project <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
