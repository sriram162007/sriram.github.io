import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import WhatsAppDock from './components/WhatsAppDock';
import Hero from './sections/Hero';
import About from './sections/About';
import Journey from './sections/Journey';
import Services from './sections/Services';
import Work from './sections/Work';
import ArchitecturePlayground from './sections/ArchitecturePlayground';
import Skills from './sections/Skills';
import TerminalSection from './sections/Terminal';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Journey />
        <Services />
        <Work />
        <ArchitecturePlayground />
        <Skills />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppDock />
    </>
  );
}
