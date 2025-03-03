import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import AboutSection from "./components/about/AboutSection";
import Projects from "./components/projects/Projects";
import ContactPage from "./components/contact/ContactPage";
import Footer from "./components/footer/Footer";
import Approach from "./components/approach/Approach";

const App = () => {
  const [titleZInd, setTitleZInd] = useState("z-50");

  return (
    <main className='max-w-7xl mx-auto xl:overflow-visible'>
      <Navbar setTitleZInd={setTitleZInd} />
      <Hero titleZInd={titleZInd} />
      <AboutSection />
      <Projects />
      <Approach />
      <ContactPage />
      <Footer />
    </main>
  );
};

export default App;
