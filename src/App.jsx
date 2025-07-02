import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import Experience from './components/Experience';
import MakeYourTrip from './components/MakeYourTrip';
import MuscleMindFitness from './components/MuscleMindFitness';
import CityBroker from './components/CityBroker';
import GalaxyBackground from './components/GalaxyBackground';
import Certificates from './components/Certificates';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/make-your-trip" element={<MakeYourTrip />} />
          <Route path="/muscle-mind-fitness" element={<MuscleMindFitness />} />
          <Route path="/city-broker" element={<CityBroker />} />
          <Route path="/" element={
            <>
              <GalaxyBackground />
              <div className="font-sans text-almost-black min-h-screen">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="glass-bg-compact mb-4 mt-4">
                    <Header />
                  </div>
                  {/* <div className="glass-bg mb-8"> */}
                  <div className="glass-text">
                    <Hero />
                    </div>
                  {/* </div> */}
                </div>
                  <div className="glass-text">
                    <FeaturedProjects />
                  </div>
                  <div className="glass-text">
                    <Experience />
                  </div>
                  <div className="glass-text">
                    <Certificates />
                  </div>
                  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                  <div className="glass-bg mb-8">
                    <Footer />
                  </div>
                </div>
              </div>
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
