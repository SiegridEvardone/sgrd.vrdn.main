import { useState } from 'react';
import './App.css';
import './index.css';
import { LoadingScreen } from './assets/components/LoadingScreen';
import { Navbar } from './assets/components/Navbar';
import { MobileMenu } from './assets/components/mobileMenu';
import { Home } from './assets/components/sections/Home';
import { About } from './assets/components/sections/About';
import { Skills } from './assets/components/sections/Skills';
import { Projects } from './assets/components/sections/Projects';
import { Contact } from './assets/components/sections/Contact';
import { Footer } from './assets/components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded ? (
        <LoadingScreen onComplete={() => setIsLoaded(true)} />
      ) : (
        <div className="min-h-screen text-color">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
