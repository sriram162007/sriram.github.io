import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Work from './sections/Work';
import Skills from './sections/Skills';
import TerminalSection from './sections/Terminal';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Work />
        <Skills />
        <TerminalSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
