import React from 'react';
import { Link } from 'react-router-dom';

const MakeYourTrip = () => {
  const images = [
    '/make my trip/image1mk.jpg',
    '/make my trip/image2mk.jpg',
    '/make my trip/image3mk.jpg',
    '/make my trip/image4mk.jpg',
    '/make my trip/image5mk.jpg',
    '/make my trip/image6mk.jpg',
    '/make my trip/image7mk.jpg'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Make Your Trip</h1>
            <p className="text-2xl md:text-3xl opacity-90 mb-4 animate-slide-in-right">Travel Management System</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg opacity-75 animate-fade-in-up-delayed">
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">ASP.NET Core</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">React.js</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">TailwindCSS</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">SQL Server</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview with Image */}
        <section className="mb-24 animate-fade-in-up">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-in-left">Project Overview</h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 animate-slide-in-right">
                Make Your Trip is a comprehensive travel management system designed to streamline the booking process for travelers and travel agencies. Built with modern web technologies, it provides a seamless experience for managing travel bookings, itineraries, and customer data.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 animate-fade-in-up-delayed">
                The application features both user and admin modules, ensuring efficient management of travel services while maintaining a clean and intuitive interface that adapts to the needs of modern travelers.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">📋 Project Documentation</h3>
                <a 
                  href="https://drive.google.com/file/d/1ggZRmWsv8pb2GcvMCj8NQEa6oQE2oBIt/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium hover:underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Project Documentation
                </a>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300">
                <img 
                  src={images[0]} 
                  alt="Make Your Trip Overview" 
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-slide-in-right">
              Discover the powerful features that make this travel management system stand out
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "User Management",
                description: "Secure authentication and user registration system with role-based access control for travelers and administrators.",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Trip Booking",
                description: "Comprehensive booking system allowing users to search, compare, and book flights, hotels, and travel packages.",
                bgColor: "bg-green-100",
                textColor: "text-green-600"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Admin Dashboard",
                description: "Powerful admin panel for managing bookings, user accounts, travel packages, and generating detailed reports.",
                bgColor: "bg-purple-100",
                textColor: "text-purple-600"
              },
              {
                icon: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                title: "Payment Integration",
                description: "Secure payment processing with multiple payment gateway options for seamless transactions.",
                bgColor: "bg-yellow-100",
                textColor: "text-yellow-600"
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Itinerary Management",
                description: "Detailed itinerary creation and management with real-time updates and notifications.",
                bgColor: "bg-red-100",
                textColor: "text-red-600"
              },
              {
                icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                title: "Responsive Design",
                description: "Mobile-first responsive design ensuring optimal user experience across all devices and screen sizes.",
                bgColor: "bg-indigo-100",
                textColor: "text-indigo-600"
              }
            ].map((feature, index) => (
              <div 
                key={feature.title} 
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center mb-6 transition-all duration-300 hover:scale-110`}>
                  <svg className={`w-6 h-6 ${feature.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-all duration-300 hover:text-blue-600">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Screenshots Gallery */}
        <section className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Project Screenshots</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Explore the user interface and key features through these screenshots</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.slice(2, 7).map((image, index) => {
              const interfaceNames = [
                'Login Page',
                'Traveling Packages',
                'Package Form',
                'Places Provided',
                'Admin Dashboard'
              ];
              return (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <img 
                      src={image} 
                      alt={`Make Your Trip - ${interfaceNames[index]}`} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 mb-2">{interfaceNames[index]}</h3>
                      <p className="text-sm text-gray-600">Key feature showcase</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Stack with Image */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative animate-slide-in-left">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300">
                <img 
                  src={images[1]} 
                  alt="Landing Page" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Landing Page</h3>
                  <p className="text-sm text-gray-600">Main entry point of the application</p>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Technical Stack</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-lg hover-lift transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Frontend</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      React.js for dynamic user interface
                    </li>
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      TailwindCSS for modern styling
                    </li>
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      Responsive design principles
                    </li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover-lift transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Backend</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      ASP.NET Core for robust API development
                    </li>
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      SQL Server for data management
                    </li>
                    <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Entity Framework for ORM
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-12 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Make Your Trip demonstrates the power of modern web technologies in creating comprehensive travel management solutions. The application showcases efficient booking processes, secure user management, and responsive design principles, making it a valuable tool for both travelers and travel agencies.
            </p>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="text-center animate-fade-in-up-delayed">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Projects
          </Link>
        </section>
      </main>
    </div>
  );
};

export default MakeYourTrip; 