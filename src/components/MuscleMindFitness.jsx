import React from 'react';
import { Link } from 'react-router-dom';

const MuscleMindFitness = () => {
  const images = [
    '/mucle/image1mm.png',
    '/mucle/image2mm.png',
    '/mucle/image3mm.png',
    '/mucle/image4mm.png',
    '/mucle/image5mm.png',
    '/mucle/image6mm.png',
    '/mucle/image7mm.png',
    '/mucle/image8mm.png'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Header */}
      <header className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white py-20 animate-fade-in-down">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-slide-in-left">Muscle & Mind Fitness</h1>
            <p className="text-2xl md:text-3xl opacity-90 mb-4 animate-slide-in-right">Fitness & Nutrition Hub</p>
            <div className="flex flex-wrap justify-center gap-4 text-lg opacity-75 animate-fade-in-up-delayed">
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">PHP</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">HTML</span>
              <span className="bg-white/20 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105">CSS</span>
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
                Muscle & Mind Fitness and Nutrition is a web application designed to provide an integrated platform for fitness enthusiasts to purchase gym essentials, access training modules, and create personalized diet plans. The application is built using PHP, HTML, JavaScript, and MySQL, ensuring a robust and user-friendly experience.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6 animate-fade-in-up-delayed">
                The application includes an admin module for managing products, orders, and user data, while providing clients with a comprehensive platform for their fitness journey.
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <h3 className="text-lg font-semibold text-green-900 mb-2">📋 Project Documentation</h3>
                <a 
                  href="https://drive.google.com/file/d/1TohLNUo4K9MLw1BVKKi-r0WI3hK6Y_fc/view?usp=drive_link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-700 hover:text-green-800 font-medium hover:underline transition-all duration-300 hover:scale-105 hover:translate-y-[-1px]"
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
                  alt="Muscle & Mind Fitness Overview" 
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
              Discover the powerful features that make this fitness platform comprehensive and user-friendly
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                title: "User Management",
                description: "Secure authentication system for admins and clients with role-based access control and profile management.",
                bgColor: "bg-green-100",
                textColor: "text-green-600"
              },
              {
                icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                title: "Product Listings",
                description: "Comprehensive product management system where admins can add, update, and manage gym essentials and fitness products.",
                bgColor: "bg-blue-100",
                textColor: "text-blue-600"
              },
              {
                icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
                title: "Training Modules",
                description: "Access to pre-made training schedules and workout plans designed for different fitness levels and goals.",
                bgColor: "bg-purple-100",
                textColor: "text-purple-600"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "Nutrition Calculator",
                description: "Advanced nutrition calculator that helps clients determine their nutritional needs and create personalized diet plans.",
                bgColor: "bg-yellow-100",
                textColor: "text-yellow-600"
              },
              {
                icon: "M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01",
                title: "Shopping Cart",
                description: "Full-featured shopping cart system allowing clients to add products, manage quantities, and place orders seamlessly.",
                bgColor: "bg-red-100",
                textColor: "text-red-600"
              },
              {
                icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                title: "Order Management",
                description: "Comprehensive order management system for admins to view, track, and manage all client orders efficiently.",
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
                <h3 className="text-xl font-semibold text-gray-900 mb-4 transition-all duration-300 hover:text-green-600">{feature.title}</h3>
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
                'Landing Page',
                'Product Catalog',
                'Shopping Cart',
                'Nutrition Calculator',
                'Training Modules',
                'Admin Dashboard'
              ];
              return (
                <div key={index} className="group animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <img 
                      src={image} 
                      alt={`Muscle & Mind Fitness - ${interfaceNames[index]}`} 
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
                  Muscle & Mind Fitness and Nutrition aims to provide a comprehensive solution for fitness enthusiasts. The application includes an admin module for managing products, orders, and user data. Admins can add new products, update existing ones, and delete products as needed. They can also view detailed reports on orders and sold items.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                  For clients, the application offers a user-friendly interface where they can browse and purchase gym essentials. Clients can register or log in to their accounts, view detailed product information, add items to their cart, and place orders. The application also includes a training module where clients can access pre-made training schedules and a nutrition calculator to help them create personalized diet plans.
                </p>
                <p className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                  The application is built using PHP for the backend, HTML and JavaScript for the frontend, and MySQL for the database. The frontend is designed to be intuitive and user-friendly, ensuring a seamless experience for clients. The backend is robust and secure, ensuring data integrity and security.
                </p>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover-lift transition-all duration-300">
                <img 
                  src={images[7]} 
                  alt="Client Dashboard" 
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-2">Client Dashboard</h3>
                  <p className="text-sm text-gray-600">Profile management and order tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-24">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-slide-in-left">Technical Stack</h2>
            <p className="text-xl text-gray-600 animate-slide-in-right">Built with modern web technologies for optimal performance</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg hover-lift transition-all duration-300 animate-fade-in-up">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Frontend</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">HTML5</span>
                    <p className="text-sm text-gray-500">Semantic markup and structure</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">JavaScript</span>
                    <p className="text-sm text-gray-500">Interactive functionality and user experience</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">CSS</span>
                    <p className="text-sm text-gray-500">Styling and responsive design</p>
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
                    <span className="font-semibold">PHP</span>
                    <p className="text-sm text-gray-500">Server-side logic and processing</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">MySQL</span>
                    <p className="text-sm text-gray-500">Database management and storage</p>
                  </div>
                </li>
                <li className="flex items-center transition-all duration-300 hover:translate-x-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-4"></span>
                  <div>
                    <span className="font-semibold">Bootstrap</span>
                    <p className="text-sm text-gray-500">UI framework and components</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-12 text-center animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Project Impact</h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Muscle & Mind Fitness and Nutrition provides a comprehensive solution for fitness enthusiasts, combining e-commerce functionality with fitness and nutrition tools. The application demonstrates effective user management, secure payment processing, and intuitive design, making it a valuable platform for both fitness businesses and consumers.
            </p>
          </div>
        </section>

        {/* Back to Projects */}
        <section className="text-center animate-fade-in-up-delayed">
          <Link 
            to="/" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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

export default MuscleMindFitness;
