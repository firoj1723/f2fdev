import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../Firebase"; // Import your firebase config
import { doc, getDoc, updateDoc } from "firebase/firestore"; // Import Firestore functions

export default function EditUser() {
  let navigate = useNavigate();
  const { id } = useParams(); // Get the user ID from the URL params

  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  const { name, mobile, email, city } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Update user in Firestore
    const userRef = doc(db, "users", id); // Adjust "users" to your collection name
    await updateDoc(userRef, user);
    
    navigate("/"); // Navigate to the home page after updating
  };

  const loadUser = async () => {
    const userRef = doc(db, "users", id); // Get a reference to the user document
    const userSnap = await getDoc(userRef); // Fetch the user document

    if (userSnap.exists()) {
      setUser(userSnap.data()); // Set the user data if it exists
    } else {
      console.log("No such user!");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
                required // Optional: Mark field as required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your mobile number"
                name="mobile"
                value={mobile}
                onChange={(e) => onInputChange(e)}
                required // Optional: Mark field as required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your e-mail address"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
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
                value={city}
                onChange={(e) => onInputChange(e)}
                required // Optional: Mark field as required
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
