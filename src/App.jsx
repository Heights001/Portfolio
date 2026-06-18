import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import Projects from "./pages/Projects";
import TechStack from "./pages/TechStack";
import Approach from "./pages/Approach";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <TechStack />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
