import About from './Pages/About.jsx';
import Services from './Pages/Services.jsx';
import Contact from './Pages/Contact.jsx'
import React, { useEffect } from 'react';
import ResumeDataProvider from './Providers/ResumeDataProvider.js';
import Home from './Pages/Home.jsx'
import Footer from './components/Footer.jsx';
import NavBar from './components/NavBar.jsx';

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
  }, []);

  return (
    <div id="main" className="overflow-hidden">
      <div className="overflow-hidden shiny min-h-screen min-w-screen">
        <ResumeDataProvider>
          <div id="top"></div>
          <NavBar />
          <Home />
          <About />
          <Services />
          <Contact />
          <Footer />
        </ResumeDataProvider>
      </div>
    </div>
  );
}
export default App;
