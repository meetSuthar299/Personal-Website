import About from './Pages/About.js';
import Services from './Pages/Services.js';
import Contact from './Pages/Contact.js'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ResumeDataProvider from './Providers/ResumeDataProvider.js';
import Home from './Pages/Home.js'
import Footer from './components/Footer.js';
import NavBar from './components/NavBar.js';

// import './styles/About.css';
// import './styles/services.css';
// import './styles/portfolio.css';
import './styles/contact.css';
// import './styles/navBar Style.css';
import './styles/style.css';

function App() {
  return (
    <div id ="main" class=" overflow-hidden">
      <ResumeDataProvider>
      <div id ="top"></div>
        <NavBar/>
        <Home />
        <BrowserRouter>
          <About />
        </BrowserRouter>
        <Services />
        <Contact />
        <Footer />
      </ResumeDataProvider>
    </div>
  );
}

export default App;
