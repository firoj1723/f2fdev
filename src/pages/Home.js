import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import AboutUs from './AboutUs';
import OurServices from './OurServices';
import Footer from './footer';
import hi from '../assets/hi.png';

const HomePage = () => {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    // Check if there is a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Scroll to the element with the id specified in the hash
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]); // Rerun effect when location changes

  return (
    <div>
      {/* Add Helmet for SEO */}
      <Helmet>
        <title>F2F Developers - Welcome to Our Company</title>
        <meta name="description" content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together." />
        <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
        <meta property="og:title" content="F2F Developers - Welcome to Our Company" />
        <meta property="og:description" content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life." />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-left">
              <h1 className="display-4 font-weight-bold">Welcome to Our Company</h1>
              <p className="lead mb-4">
                We provide top-notch services that empower businesses and individuals. Let's build something amazing together.
              </p>
              <a href="#services" className="btn btn-light btn-lg">Explore Our Services</a>
            </div>
            <div className="col-12 col-md-6 mt-4 mt-md-0">
              <img src={hi} alt="Greeting" className="img-fluid rounded-circle shadow" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us-section py-5">
        <div className="container text-center">
          <AboutUs />
        </div>
      </section>

      {/* Our Services Preview */}
      <section id="services" className="services-preview-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4 font-weight-bold">What We Offer</h2>
          <OurServices />
        </div>
      </section>

      {/* Call to Action (Contact Us Preview) */}
      <section className="cta-section bg-dark text-white py-5">
        <div className="container text-center">
          <h3 className="font-weight-bold">Have a Project in Mind?</h3>
          <p className="lead mb-4">Get in touch with us and let's discuss how we can help you bring your ideas to life.</p>
          <Link to="/addusers" className="btn btn-warning btn-lg shadow rounded-pill">Contact Us</Link>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default HomePage;
