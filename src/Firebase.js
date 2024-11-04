// src/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth'; // Added setPersistence and browserSessionPersistence
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoCLYNkcLRvi40BRYWjM8hxs4zcWODsR4",
  authDomain: "f2fdev-d4c17.firebaseapp.com",
  projectId: "f2fdev-d4c17",
  storageBucket: "f2fdev-d4c17.appspot.com",
  messagingSenderId: "514820791061",
  appId: "1:514820791061:web:675b1d585804a2bbc8271c",
  measurementId: "G-CJM0PJKCFE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Set persistence for authentication to session-based (consider calling this during login)
setPersistence(auth, browserSessionPersistence)
  .then(() => {
    // Persistence set successfully
    console.log("Authentication persistence set to session.");
  })
  .catch((error) => {
    console.error("Error setting persistence: ", error);
  });

// Export auth and db for use in your components
export { auth, db };
