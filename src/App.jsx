import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/AboutSection";
import Projects from "./components/projects/Projects";
import ContactPage from "./components/contact/ContactPage";
import Footer from "./components/footer/Footer";
import Approach from "./components/approach/Approach";

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <AboutSection />
      <Projects />
      <Approach />
      <ContactPage />
      <Footer />
    </main>
  );
};

export default App;
