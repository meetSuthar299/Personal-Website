import Header from './components/Header';
import About from './Pages/About.js';
import Services from './Pages/Services';
import Portfolio from './Pages/Portfolio';
import Contact from './Pages/Contact.js'
import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ResumeDataProvider from './Providers/ResumeDataProvider.js';
import Home from './Pages/Home.js'
import Footer from './components/Footer';

// import './styles/About.css';
// import './styles/services.css';
// import './styles/portfolio.css';
import './styles/contact.css';
// import './styles/navBar Style.css';
import './styles/style.css';

function App() {
  return (
    <div className="App" class=" overflow-hidden">
      <ResumeDataProvider>
        <Header />
        <Home />
        <BrowserRouter>
          <About />
        </BrowserRouter>
        <Services />
        {/* <Portfolio /> */}
        <Contact />
        {/* <Footer /> */}
      </ResumeDataProvider>
    </div>
  );
}

export default App;
