import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Model from './Pages/Model';



function App() {
  return (
    <Router>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/model" element={<Model />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div>
      <Footer />
      </div>
    </Router>
    
  );
}


export default App;
