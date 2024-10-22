import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyBoCLYNkcLRvi40BRYWjM8hxs4zcWODsR4",
  authDomain: "f2fdev-d4c17.firebaseapp.com",
  projectId: "f2fdev-d4c17",
  storageBucket: "f2fdev-d4c17.appspot.com",
  messagingSenderId: "514820791061",
  appId: "1:514820791061:web:675b1d585804a2bbc8271c",
  measurementId: "G-CJM0PJKCFE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const FetchData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'your-collection-name')); // Replace 'your-collection-name' with your actual collection name
        const allData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(allData);
      } catch (error) {
        console.error('Error fetching documents:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>All Data</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
