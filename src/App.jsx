import { Analytics } from "@vercel/analytics/next"
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/PersonalInfo";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
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
      <Analytics />
    </>
  );
}

export default App;
