import React from 'react';
import { Helmet } from 'react-helmet-async';  // Importing Helmet
import logo from '../assets/logo.png';

const FAQ = () => {
  return (
    <>
      {/* Adding Helmet for SEO */}
      <Helmet>
        <title>F2F Developers - Welcome to Our Company</title>
        <meta name="description" content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together." />
        <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
        <meta property="og:title" content="F2F Developers - Welcome to Our Company" />
        <meta property="og:description" content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life." />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>

      <section className="faq-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="img-fluid" width={400} />
            </div>

            {/* FAQ Section */}
            <div className="col-12 col-md-6">
              <div>
                <h2 className="mb-4">Frequently Asked Questions</h2>

                <div className="faq-item mb-3">
                  <h5 className="fw-bold">What services do you offer?</h5>
                  <p>
                    We provide website development, software solutions, and IT consulting tailored to meet your business needs.
                  </p>
                </div>

                <div className="faq-item mb-3">
                  <h5 className="fw-bold">How can I get a quote?</h5>
                  <p>
                    You can get a quote by contacting us through our website or emailing our support team. We’ll respond promptly.
                  </p>
                </div>

                <div className="faq-item mb-3">
                  <h5 className="fw-bold">What is your development process?</h5>
                  <p>
                    Our process includes initial consultation, design, development, testing, and ongoing support to ensure your success.
                  </p>
                </div>

                <div className="faq-item mb-3">
                  <h5 className="fw-bold">Do you offer support after project completion?</h5>
                  <p>
                    Yes, we provide ongoing maintenance and support services to make sure everything runs smoothly.
                  </p>
                </div>

                <div className="faq-item">
                  <h5 className="fw-bold">How do I contact customer support?</h5>
                  <p>
                    You can reach our support team through our contact page, or call our helpline for immediate assistance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
