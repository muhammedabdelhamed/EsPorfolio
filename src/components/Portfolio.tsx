import React from 'react';
import { ExternalLink } from 'lucide-react';

export function Portfolio() {
  const projects = [
    
    {
      title: 'ICEJCOM',
      description: 'ICEJCOM Communication Agency',
      image: '/icejcom.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://icejcom.com/'
    },
    {
      title: 'TepTac',
      description: 'TepTac Services',
      image: '/TepTac Services.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://teptac.com/'
    },
    {
      title: 'Ebdaa',
      description: 'Ebdaa for Interior Designs',
      image: '/ebdaa.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://ebdaa.io/'
    },
    {
      title: 'Walmart Dashbord',
      description: 'Walmart Dashbord Using Angular.js',
      image: '/walmart-dashbord-using-angular-js-vercel.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://walmart-dashbord-using-angular-js.vercel.app/login'
    },
    {
      title: 'Walmart Clone',
      description: 'A full-featured online store built with React and Node.js',
      image: '/MearnStackWalmart.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://graduation-project-walmart-clone.vercel.app/'
    },
    {
      title: 'Movix',
      description: 'ReactJs Movies Website Front end Development',
      image: '/FrontEndReactJS.png',
      tags: ['Wordpress ', 'Elementor Pro'],
      link:'https://movix-clone-three.vercel.app/'
    },
    {
      title: 'landing Page',
      description: 'HTML5 & TailwendCSS Landing Page',
      image: '/landingPage_HTML5 &TailwendCSS.png',
      tags: ['HTML5','TailwendCSS'],
      link:''
    },    {
      title: 'Uber Store',
      description: 'WordPress Elementor - Flatsome Theme Builder',
      image: '/uberStore.png',
      tags: ['WordPress', 'Elementor', 'Flatsome Theme Builder'],
      link:''
    },
    {
      title: 'Social Media Campaign',
      description: 'Successful marketing campaign for a retail brand',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      tags: ['Marketing', 'Social Media', 'Strategy'],
      link:''
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
