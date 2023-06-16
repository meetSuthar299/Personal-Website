import Header from './components/Header.js';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import './styles/About.css';
import './styles/services.css';
import './styles/portfolio.css';
import './styles/contact.css';
import './styles/nav.css';
import './styles/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </header>


    </div>
  );
}

export default App;
