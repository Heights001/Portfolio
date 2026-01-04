import Navbar from "./components/Navbar";
import PersonalInfo from "./pages/PersonalInfo";
import Experiences from "./pages/Experiences";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <PersonalInfo />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />      
    </>
  );
}

export default App;
