import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/AboutSection";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
      <AboutSection />
      <Projects />
    </main>
  );
};

export default App;
