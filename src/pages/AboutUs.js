import React from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <>
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

      <section className="about-us-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="img-fluid" width={400} />
            </div>

            {/* Text Section */}
            <div className="col-12 col-md-6 d-flex align-items-center">
              <div>
                <h2 className="mb-4">About Us</h2>
                <p className="lead">
                  Welcome to F2F Developers! We are committed to delivering the best products and services to empower your business.
                </p>
                <p>
                  Our team is dedicated to creating innovative solutions that enhance the lives of our customers. We believe in the power of collaboration and innovation, and we're constantly pushing boundaries to ensure that our clients receive the best possible service.
                </p>
                <Link to="/learn" className="btn btn-warning btn-lg shadow rounded-pill">Know More about Us</Link>
              </div>
            </div>
          </div>
        </div>   
      </section>
    </>
  );
};

export default AboutUs;
