import { useState } from "react";
import "./App.css";
import NeoMorphContainer from "./NeoMorphContainer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import { languages, skills, stacks, tools, projects } from "./data";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <NeoMorphContainer setIsLoaded={setIsLoaded}>
        <Hero isLoaded={isLoaded} />
        <About />
        <Skills
          languages={languages}
          skills={skills}
          stacks={stacks}
          tools={tools}
        />
        <Projects projects={projects} />
        <Contact />
        <Footer />
      </NeoMorphContainer>
    </>
  );
}

export default App;
