import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import PortfolioBanner from './components/PortfolioBanner';
import FeaturedProjects from './components/FeaturedProjects';
import Divider from './components/Divider';
import Footer from './components/Footer';
import Experience from './components/Experience';
import MakeYourTrip from './components/MakeYourTrip';
import MuscleMindFitness from './components/MuscleMindFitness';
import CityBroker from './components/CityBroker';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/make-your-trip" element={<MakeYourTrip />} />
        <Route path="/muscle-mind-fitness" element={<MuscleMindFitness />} />
        <Route path="/city-broker" element={<CityBroker />} />
        <Route path="/" element={
          <div className="font-sans text-almost-black min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <Header />
              <Hero />
            </div>
            <PortfolioBanner />
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <FeaturedProjects />
              <Experience />
              <Divider />
              <Footer />
            </div>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
