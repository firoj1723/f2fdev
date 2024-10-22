import React from 'react';
import logo from '../assets/logo.png';

const AboutUs = () => {
  return (
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
              <a href="/aboutus/learn" className="btn btn-primary btn-lg mt-3">Learn More</a> {/* Changed the link here */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
