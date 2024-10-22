import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './layout/Navbar'; // Adjust if Navbar is also in the pages folder
import Home from './pages/Home'; // Adjust path for Home
import AboutUs from './pages/AboutUs'; // Adjust path for AboutUs
import OurServices from './pages/OurServices'; // Adjust path for OurServices
import AddUser from './users/AddUser'; // Adjust path for AddUser
import EditUser from './users/EditUser'; // Adjust path for EditUser
import ViewUser from './users/ViewUser'; // Adjust path for ViewUser
import ContactUs from './pages/ContactUs'; // Adjust path for ContactUs
import Feedback from './pages/Feedback'; // Adjust path for Feedback
import LearnMore from './pages/LearnMore'; // Adjust path for LearnMore
import FetchData from './pages/FetchData';
import './App.css'; // Keep your custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/* Render your Navbar component */}

        <Routes>
  <Route path="/f2fdev/" element={<Home />} />
  <Route path="/f2fdev/home" element={<Home />} />
  <Route path="/f2fdev/addusers" element={<AddUser />} />
  <Route path="/f2fdev/edituser/:id" element={<EditUser />} />
  <Route path="/f2fdev/viewuser/:id" element={<ViewUser />} />
  <Route path="/f2fdev/aboutus" element={<AboutUs />} />
  <Route path="/f2fdev/contactus" element={<ContactUs />} />
  <Route path="/f2fdev/feedback" element={<Feedback />} />
  <Route path="/f2fdev/services" element={<OurServices />} />
  <Route path="/f2fdev/learn" element={<LearnMore />} />
  <Route path="/f2fdev/fetch" element={<FetchData />} />
</Routes>


        
      </div>
    </Router>
  );
}

export default App;
