import React from 'react';
import { Helmet } from 'react-helmet-async';

const Footer = () => {
  return (
    <>
      <Helmet>
        <title>F2F Developers - Welcome to Our Company</title>
        <meta
          name="description"
          content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together."
        />
        <meta
          name="keywords"
          content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers"
        />
        <meta property="og:title" content="F2F Developers - Welcome to Our Company" />
        <meta
          property="og:description"
          content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life."
        />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>
      <footer className="footer bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            {/* Contact Section */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5>Contact Us</h5>
              <p>
                2nd Floor Shokhiya Mansion,<br />
                Dausa, Raj., ZIP Code 303303<br />
                <i className="fas fa-phone"></i> Phone:{' '}
                <a href="tel:+918209682462" className="text-white">
                  +918209682462
                </a>{' '}
                &{' '}
                <a href="tel:+919785211210" className="text-white">
                  +919785211210
                </a>{' '}
                <br />
                <i className="fas fa-envelope"></i> Email:{' '}
                <a href="mailto:faraz.dausa0007@gmail.com" className="text-white">
                  faraz.dausa0007@gmail.com
                </a>{' '}
                &{' '}
                <a href="mailto:fk8209682@gmail.com" className="text-white">
                  fk8209682@gmail.com
                </a>
              </p>
            </div>

            {/* Map Section */}
            <div className="col-12 col-md-4 mb-4 mb-md-0">
              <h5>Our Location</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.38142774651473!2d76.33621914740809!3d26.900244994848908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396d8d2d493f435b%3A0x97f22edb4271da0e!2sBG.Mart!5e0!3m2!1sen!2sin!4v1729319378073!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>

            {/* Developed By Section */}
            <div className="col-12 col-md-4">
              <h5>Developed By</h5>
              <p>
                Developed with <span style={{ color: 'red' }}>♥</span> by{' '}
                <a href="#" className="text-white">
                  Firoj & Faraj
                </a>.
              </p>
            </div>
          </div>

          {/* Social Media Links Section */}
          <div className="text-center mt-4">
            <h5>Connect With Us</h5>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/faraz.dausa?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              {/* <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-white mx-2">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a
                href="https://www.instagram.com/skkikhanfk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com/in/firoj-khan-740703247"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/firoj1723"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center py-3 border-top border-light mt-3">
          <p className="mb-0">© 2024 F2F Developers. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
