import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider
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
import Faq from './pages/Faq';
import TermsAndPolicy from './pages/TermsAndPolicy';


function App() {
  return (
    <HelmetProvider> {/* Wrap the app with HelmetProvider */}
      <Router>
        <div className="App">
          <Helmet>
            <meta name="description" content="F2F Developers provides web and mobile development services to help businesses grow." />
            <meta name="keywords" content="F2F Developers, IT services, Dausa software company, software development, website development, Dausa IT company, best IT company in Dausa, Dausa IT services, Dausa web designing company, F2F Developers" />
          </Helmet>

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
            <Route path="/aboutus/learn/addusers" element={<AddUser />} />
            <Route path="/fetch" element={<FetchData />} />
            <Route path="/terms" element={<TermsAndPolicy />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
