import React from "react";
import { Link } from "react-router-dom";

const CityBroker = () => {
  const images = [
    "/citybroker/image1cb.png",
    "/citybroker/image2cb.png",
    "/citybroker/image3cb.png",
    "/citybroker/image4cb.png",
    "/citybroker/image5cb.png",
    "/citybroker/image6cb.png",
    "/citybroker/image7cb.png"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">City Broker</h1>
            <p className="text-2xl md:text-3xl opacity-90 mb-4 animate-slide-in-right">Real Estate Platform</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg opacity-75 animate-fade-in-up-delayed">
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">Java</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">JSF</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">RESTful API</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">MySQL</span>
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
                City Broker is a full-stack web application designed to streamline real estate transactions by providing a seamless platform for users, agents, and admins. The application is built using Java (RESTful services) for the backend and JSF (JavaServer Faces) for the frontend, ensuring a robust and user-friendly experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 animate-fade-in-up-delayed">
                The application aims to modernize real estate transactions by digitizing the entire process, providing efficiency, security, and convenience for all users.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">📋 Project Documentation</h3>
                <a 
                  href="https://drive.google.com/file/d/1V9yFDQbNxnvD8TRzW6sAEkkQESZTMRlK/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-700 hover:text-orange-800 font-medium hover:underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
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
                  alt="City Broker Overview" 
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
              Discover the powerful features that make this real estate platform comprehensive and user-friendly
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "User Management",
                description: "Secure authentication and authorization for users, agents, and admins using JWT for data security.",
                bgColor: "bg-orange-100",
                textColor: "text-orange-600"
              },
              {
                icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
                title: "Property Listings",
                description: "Agents can list properties with detailed descriptions, images, prices, and availability for sale or rent.",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Search & Filters",
                description: "Advanced search functionality with filters based on location, price, type, features, and availability.",
                bgColor: "bg-purple-100",
                textColor: "text-purple-600"
              },
              {
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                title: "Wishlist",
                description: "Users can add properties to a wishlist for future reference and easy access to favorite listings.",
                bgColor: "bg-yellow-100",
                textColor: "text-yellow-600"
              },
              {
                icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
                title: "Appointment System",
                description: "Users can request appointments to view properties, with agents managing and approving these requests.",
                bgColor: "bg-red-100",
                textColor: "text-red-600"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Agent Dashboard",
                description: "Comprehensive dashboard for agents to manage listings, view appointments, and track performance metrics.",
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-all duration-300 hover:text-orange-600">{feature.title}</h3>
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
            {images.slice(1, 7).map((image, index) => {
              const interfaceNames = [
                "Landing Page",
                "Property Search",
                "Property Details",
                "Appointment Booking",
                "Agent Dashboard",
                "Admin Panel"
              ];
              return (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <img 
                      src={image} 
                      alt={`City Broker - ${interfaceNames[index]}`} 
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

        {/* Detailed Explanation with Image */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Detailed Explanation</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  City Broker aims to modernize real estate transactions by digitizing the entire process. The application includes a user-friendly interface where agents can list properties for sale or rent, and users can search, view, and request appointments to view these properties. The system ensures efficiency, security, and convenience for all users.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  The application is designed with scalability in mind, capable of handling a growing number of users, property listings, and transactions. It includes advanced search criteria and filtering options to help users find the perfect property. The appointment system allows users to request specific dates and times to view properties, with agents having the ability to approve or reject these requests.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  For agents, the application provides a dedicated dashboard where they can manage their listings, view appointment requests, and track key statistics such as the number of approved appointments and outstanding payments. The admin panel offers comprehensive oversight, allowing administrators to manage users, property listings, and transactions efficiently.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300">
                <img 
                  src={images[6]} 
                  alt="Admin Dashboard" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Admin Dashboard</h3>
                  <p className="text-sm text-gray-600">Comprehensive oversight and management</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Technical Stack</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Built with modern Java technologies for optimal performance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frontend</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">JSF (JavaServer Faces)</span>
                    <p className="text-sm text-gray-500">Component-based UI framework</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">CSS</span>
                    <p className="text-sm text-gray-500">Responsive design and styling</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-orange-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">JavaScript</span>
                    <p className="text-sm text-gray-500">Interactive functionality</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Backend</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">Java</span>
                    <p className="text-sm text-gray-500">Server-side logic and processing</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">RESTful API</span>
                    <p className="text-sm text-gray-500">Web services architecture</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">MySQL</span>
                    <p className="text-sm text-gray-500">Database management and storage</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              City Broker offers a comprehensive solution for managing real estate interactions online. The application is designed to be user-friendly and scalable, ensuring a seamless experience for both users and agents. It provides a solid foundation for future enhancements, including subscription-based memberships, chat functionality, and advanced analytics, making it a valuable tool in the real estate industry.
            </p>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="text-center animate-fade-in-up-delayed">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

export default CityBroker;
