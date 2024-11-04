import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar'; 
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs'; 
import OurServices from './pages/OurServices'; 
import AddUser from './users/AddUser'; 
import EditUser from './users/EditUser'; 
import ViewUser from './users/ViewUser'; 
import ContactUs from './pages/ContactUs'; 
import Feedback from './pages/Feedback'; 
import LearnMore from './pages/LearnMore'; 
import FetchData from './pages/FetchData';
import Tidio from './Tidio';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Tidio />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addusers" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/learn" element={<LearnMore />} />
          <Route path="/aboutus/learn/addusers" element={<AddUser />} /> {/* Add this line */}
          <Route path="/fetch" element={<FetchData />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;