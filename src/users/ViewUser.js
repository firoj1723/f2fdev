import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { db } from "../Firebase"; // Import your firebase config
import { doc, getDoc } from "firebase/firestore"; // Import Firestore functions

export default function ViewUser() {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
  });

  const { id } = useParams(); // Get the user ID from the URL params

  useEffect(() => {
    loadUser();
  }, []);

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
          <h2 className="text-center m-4">User Details</h2>

          <div className="card">
            <div className="card-header">
              Details of user id: {id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>Name:</b> {user.name}
                </li>
                <li className="list-group-item">
                  <b>Mobile:</b> {user.mobile}
                </li>
                <li className="list-group-item">
                  <b>Email:</b> {user.email}
                </li>
                <li className="list-group-item">
                  <b>City:</b> {user.city}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
