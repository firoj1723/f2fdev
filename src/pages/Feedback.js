import React, { useState, useEffect } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore'; // Import Firestore
import { useLocation } from 'react-router-dom';
import { initializeApp } from 'firebase/app'; // Firebase initialization
import { Helmet } from 'react-helmet-async'; 

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
const db = getFirestore(app);

const Feedback = () => {
  const location = useLocation();

  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    rating: '',
    comments: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const { name, email, rating, comments } = feedback;

  // Reset form when the component mounts or the location changes
  useEffect(() => {
    setFeedback({ name: '', email: '', rating: '', comments: '' });
    setSuccessMessage(''); // Clear success message if you want to reset it on each mount
  }, [location.pathname]);

  const onInputChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add feedback to Firebase Firestore
      await addDoc(collection(db, "feedback"), feedback);
      setSuccessMessage('Feedback submitted successfully!');

      // Clear the form after submission
      setFeedback({ name: '', email: '', rating: '', comments: '' });
    } catch (error) {
      console.error('Error submitting feedback to Firebase:', error);
      alert('Failed to submit feedback.');
    }
  };

  const onCancel = () => {
    // Clear the form fields
    setFeedback({ name: '', email: '', rating: '', comments: '' });
    setSuccessMessage(''); // Optionally clear success message on cancel
  };

  return (
    <>
      <Helmet>
        <title>F2F Developers - Welcome to Our Company</title>
        <meta name="description" content="F2F Developers provides top-notch services that empower businesses and individuals. Let's build something amazing together." />
        <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
        <meta property="og:title" content="F2F Developers - Welcome to Our Company" />
        <meta property="og:description" content="Explore top-notch IT services with F2F Developers. Let us help you bring your ideas to life." />
        <meta property="og:url" content="https://f2fdev.in" />
        <meta property="og:image" content="https://f2fdev.in/assets/hi.png" />
      </Helmet>

      <div className="container py-5">
        <div className="row">
          <div className="col-md-8 col-lg-6 mx-auto border rounded p-4 shadow-sm bg-light">
            <h2 className="text-center mb-4">Feedback</h2>

            {/* Success Message */}
            {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}

            <form onSubmit={onSubmit}>
              {/* Name Input */}
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  name="name"
                  id="name"
                  value={name}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Email Input */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email address"
                  name="email"
                  id="email"
                  value={email}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Rating Input */}
              <div className="mb-3">
                <label htmlFor="rating" className="form-label">Rating</label>
                <select
                  className="form-control"
                  name="rating"
                  id="rating"
                  value={rating}
                  onChange={onInputChange}
                  required
                >
                  <option value="">Choose a rating</option>
                  <option value="1">1 - Very Bad</option>
                  <option value="2">2 - Bad</option>
                  <option value="3">3 - Okay</option>
                  <option value="4">4 - Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
              </div>

              {/* Comments Input */}
              <div className="mb-3">
                <label htmlFor="comments" className="form-label">Comments</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your comments"
                  name="comments"
                  id="comments"
                  rows="4"
                  value={comments}
                  onChange={onInputChange}
                  required
                />
              </div>

              {/* Submit and Cancel Buttons */}
              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-danger ms-2" onClick={onCancel}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
