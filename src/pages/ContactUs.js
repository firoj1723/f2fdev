import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async'; // Import Helmet for SEO
import { useNavigate, useLocation } from 'react-router-dom';
import { getFirestore, addDoc, collection } from 'firebase/firestore'; // Firebase Firestore imports
import { initializeApp } from 'firebase/app'; // Firebase initialization

// Firebase configuration (make sure to replace this with your actual config)
const firebaseConfig = {
  apiKey: "AIzaSyBoCLYNkcLRvi40BRYWjM8hxs4zcWODsR4",
  authDomain: "f2fdev-d4c17.firebaseapp.com",
  projectId: "f2fdev-d4c17",
  storageBucket: "f2fdev-d4c17.appspot.com",
  messagingSenderId: "514820791061",
  appId: "1:514820791061:web:675b1d585804a2bbc8271c",
  measurementId: "G-CJM0PJKCFE"
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Check for a message in the location state
  useEffect(() => {
    if (location.state?.message) {
      setSuccessMessage(location.state.message);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);

    // Add form data to Firebase Firestore
    try {
      await addDoc(collection(db, 'contacts'), formData);
      navigate('/f2f/contactus', { state: { message: 'Form submitted successfully!' } });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form.');
    }
  };

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

      <section className="contact-us-section py-5 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 mx-auto">
              <h2 className="text-center mb-4">Contact Us</h2>
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              <form onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                {/* Subject Input */}
                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                {/* Message Input */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
