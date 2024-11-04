import React, { useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { db } from "../Firebase"; // Import your firebase config
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

export default function AddUser() {
  const location = useLocation(); // Get the current location

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const { name, mobile, email, city } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      // Add user to Firestore
      await addDoc(collection(db, "users"), user); // Adjust "users" to your collection name
      console.log('User created successfully');

      // Set success message
      setSuccessMessage("your message has been sent!");
      setErrorMessage(""); // Clear any previous error message

      // Clear form after submission
      setUser({
        name: "",
        mobile: "",
        email: "",
        city: "",
      });
    } catch (error) {
      // Log the error for debugging
      console.error('Error creating user:', error);

      // Show an error message to the user
      setErrorMessage("There was an error submitting your data. Please try again.");
    }
  };

  const onCancel = () => {
    // Clear form fields and optionally reset success/error messages
    setUser({
      name: "",
      mobile: "",
      email: "",
      city: "",
    });
    setSuccessMessage(''); // Clear success message when Cancel is clicked
    setErrorMessage(''); // Clear error message when Cancel is clicked
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8 mx-auto border rounded p-4 shadow-lg">
          <h2 className="text-center mb-4">Contact Us</h2>

          {successMessage && <div className="alert alert-success">{successMessage}</div>} {/* Show success message */}
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>} {/* Show error message */}

          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                id="name"  // Added id for accessibility
                value={name}
                onChange={onInputChange}
                required // Optional: Mark field as required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="tel" // Changed to tel for mobile number
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobile"
                id="mobile" // Added id for accessibility
                value={mobile}
                onChange={onInputChange}
                required // Optional: Mark field as required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email" // Changed to email for validation
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                id="email" // Added id for accessibility
                value={email}
                onChange={onInputChange}
                required // Optional: Mark field as required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your city name"
                name="city"
                id="city" // Added id for accessibility
                value={city}
                onChange={onInputChange}
                required // Optional: Mark field as required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mb-2">
              Submit
            </button>
            <button type="button" className="btn btn-secondary w-100" onClick={onCancel}>
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}