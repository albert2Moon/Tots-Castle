import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  LandingPage  from './pages/LandingPage'
import  AboutPage  from './pages/AboutPage'
import  EventsPage  from './pages/EventsPage'
import  ServicesPage  from './pages/ServicesPage'
import  ProgramsPage  from './pages/ProgramsPage'
import  TeamPage  from './pages/TeamPage'
import  ContactPage  from './pages/ContactPage'
import Footer from './partials/Footer';
import Navbar from './partials/Navbar';

function App() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    

    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage/> } />
        <Route path='/about' element={ <AboutPage/> } />
        <Route path='/services' element={ <ServicesPage/> } />
        <Route path='/programs' element={ <ProgramsPage/> } />
        <Route path='/team' element={ <TeamPage/> } />
        <Route path='/events' element={ <EventsPage/> } />
        <Route path='/contact' element={ <ContactPage/> } />
      </Routes>
    </Router>

    {showButton && (
        <a href="#" className="btn btn-primary border-3 border-primary rounded-circle back-to-top">
          <i className="fa fa-arrow-up"></i>
        </a>
      )} 
      
      <Footer />
    </>
  )
}

export default App
