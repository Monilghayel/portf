import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Phishing Simulation Tool',
    description: 'Build a phishing simulation tool for employees featuring a training lab, report dashboard, phishing tool, and mail templates. [ASP.NET Core, React.js, TailwindCSS, SQL Server, AWS, SMTP]',
    image: '/Certificates/csu.png'
  },
  {
    title: 'Make Your Trip Travel Management System',
    description: 'Built user and admin modules for managing travel bookings featuring trip booking, admin dashboard, and clean interface. [ASP.NET Core, React.js, TailwindCSS, SQL Server]',
    image: '/Certificates/makemytrip.png'
    
  },
  {
    title: 'City Broker Platform for Brokers to Customer',
    description: 'Built common platform where broker can showcase their properties and customer can book those featuring property booking, appointment system, admin dashboard, and dynamic design. [JSF, CSS, JAVA EE(REST), MySQL]',
    image: '/Certificates/citybroker.png'
  },
  {
    title: 'Muscle & Mind Fitness Hub',
    description: 'Built Ecommerce site for gym product and gym manual for workout and diet featuring add to cart, diet calculator, workout manual, and admin reports. [Bootstrap, JavaScript, HTML, CSS, PHP, MySQL]',
    image: '/Certificates/muscle.png'
  }
];

const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif animate-slide-in-left">Featured Projects</h2>
        <div className="mt-12 grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-light-grey h-48 w-full hover-lift transition-all duration-300 rounded-lg overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-contain object-center"/>
              </div>
              <h3 className="mt-4 font-bold transition-all duration-300 hover:text-accent">{project.title}</h3>
              <p className="mt-2 text-sm text-grey">{project.description}</p>
              {project.title === 'Phishing Simulation Tool' && (
                <div className="mt-4">
                <Link 
                   
                  className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400"
                >
                  CONFIDENTIAL
                </Link>
              </div>
              )}
              {project.title === 'Make Your Trip Travel Management System' && (
                <div className="mt-4">
                  <Link 
                    to="/make-your-trip" 
                    className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400"
                  >
                    View Details →
                  </Link>
                </div>
              )}
              {project.title === 'Muscle & Mind Fitness Hub' && (
                <div className="mt-4">
                  <Link 
                    to="/muscle-mind-fitness" 
                    className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400"
                  >
                    View Details →
                  </Link>
                </div>
              )}
              {project.title === 'City Broker Platform for Brokers to Customer' && (
                <div className="mt-4">
                  <Link 
                    to="/city-broker" 
                    className="inline-block bg-accent text-red-600 text-xs font-semibold px-2 py-1 rounded-full border border-red-400"
                  >
                    View Details →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-12 animate-fade-in-up-delayed">
          <a 
            href="#" 
            className="text-sm font-bold tracking-widest text-accent hover:underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
          >
            SEE ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects; 