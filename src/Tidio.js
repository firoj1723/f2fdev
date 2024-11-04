// src/Tidio.js
import React, { useEffect } from 'react';

const Tidio = () => {
  const setTidioUserData = () => {
    if (window.tidioChatApi && typeof window.tidioChatApi.setUserData === 'function') {
      window.tidioChatApi.setUserData({
        email: '', // Clear the email
        name: '', // Clear the name
      });
    } else {
      // If tidioChatApi or setUserData is not yet available, retry after a short delay
      setTimeout(setTidioUserData, 500); // Check every 500ms
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/67ntvicnriui7imhbm94hm3kqxm8tqre.js"; // Your actual Tidio script
    script.async = true;
    document.body.appendChild(script);

    // Clear previous user data
    setTidioUserData();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything
};

export default Tidio;
