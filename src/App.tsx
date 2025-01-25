import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import InkSpace from './components/InkSpace/InkSpace';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <WhatWeDo />
        <InkSpace />
        <Gallery />
        <Footer />
      </div>
    </Router>
  );
}

export default App;