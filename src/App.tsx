import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhatWeDo from './components/WhatWeDo';
import InkSpace from './components/InkSpace/InkSpace';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Visioncraft from './components/Events/VisionCraft';

function App() {
  return (
            <div className="min-h-screen">
              <Navbar />
              <Hero />
              <About />
              <WhatWeDo />
              <Visioncraft />
              <InkSpace />
              <Gallery />
              <Footer />
            </div>
  );
}

export default App;