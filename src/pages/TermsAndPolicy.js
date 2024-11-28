import React from 'react';
import logo from '../assets/logo.png';
import { Helmet } from 'react-helmet-async';  // Helmet for SEO

const TermsAndPolicy = () => {
  return (
    <>
      <Helmet>
        <title>F2F Developers - Learn More About Us</title>
        <meta name="description" content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together." />
        <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
        <meta property="og:title" content="F2F Developers - Learn More About Us" />
        <meta property="og:description" content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life." />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>

      <section className="terms-policy-section py-5 bg-light">
        <div className="container">
          <div className="row">
            {/* Image Section */}
            <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
              <img src={logo} alt="Logo" className="img-fluid" width={400} />
            </div>

            {/* Terms and Policy Section */}
            <div className="col-12 col-md-6">
              <div>
                <h2 className="mb-4">Terms and Policy</h2>

                <div className="terms-item mb-3">
                  <h5 className="fw-bold">Terms of Service</h5>
                  <p>
                    By using our services, you agree to comply with our terms, including usage restrictions, privacy, and content policies.
                  </p>
                </div>

                <div className="terms-item mb-3">
                  <h5 className="fw-bold">Privacy Policy</h5>
                  <p>
                    We value your privacy and are committed to protecting your personal information. Read how we handle your data securely.
                  </p>
                </div>

                <div className="terms-item mb-3">
                  <h5 className="fw-bold">Data Collection</h5>
                  <p>
                    We collect only necessary data to provide our services effectively. Your data will not be shared without your consent.
                  </p>
                </div>

                <div className="terms-item mb-3">
                  <h5 className="fw-bold">Cookies Policy</h5>
                  <p>
                    We use cookies to improve your experience. By continuing to use our site, you agree to our cookie policy.
                  </p>
                </div>

                <div className="terms-item">
                  <h5 className="fw-bold">User Responsibilities</h5>
                  <p>
                    Users are responsible for maintaining the confidentiality of their account and ensuring the accuracy of their information.
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

export default TermsAndPolicy;
