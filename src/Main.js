import About from './Pages/About.js';
import Services from './Pages/Services.js';
import Contact from './Pages/Contact.js'
import React, { useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import ResumeDataProvider from './Providers/ResumeDataProvider.js';
import Home from './Pages/Home.js'
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';

import './styles/style.css';

function App() {

  useEffect(() => {
    const shine = document.querySelector(".shiny");
    if (shine != null) {
      shine.addEventListener("mousemove", (e) => {
        const { x, y } = shine.getBoundingClientRect();
        shine.style.setProperty("--x", e.clientX - x);
        shine.style.setProperty("--y", e.clientY - y);
      });
    }
  });

  return (
    <div id="main" className="overflow-hidden">
      <div className="overflow-hidden shiny min-h-screen min-w-screen">
        <ResumeDataProvider>
          <div id="top"></div>
          <NavBar />
          <Home />
          <BrowserRouter>
            <About />
          </BrowserRouter>
          <Services />
          <Contact />
          <Footer />
        </ResumeDataProvider>
      </div>
    </div>
  );

}

export default App;
