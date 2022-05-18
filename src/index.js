import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import AboutMe from './components/Section/AboutMe';
import Hero from './components/Section/Hero';
import Portfolio from './components/Section/Portfolio';
import Contact from './components/Section/ContactMe';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <AboutMe />  
    <Portfolio />
    <Contact />
  </React.StrictMode>
);
