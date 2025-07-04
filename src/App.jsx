import styles from "./App.module.css";
import { Education } from "./components/Education/Education";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { HonorsAwards } from "./components/HonorsAwards/HonorsAwards";
import { Publications } from "./components/Publication/Publications";
import { Extracurricular } from "./components/Extracurricular/Extracurricular";
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Education/>
      <Experience />
      <Publications />
      <HonorsAwards />
      <Extracurricular />
      <Projects />
      
      <Contact />
    </div>
  );
}

export default App;
