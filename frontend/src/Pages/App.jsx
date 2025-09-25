import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Nav";
import Footer from "../Components/Footer";

// Pages
import Home from "../Pages/Home";
import About from "../Pages/About";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Project";
// import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
           <Route path="/projects" element={<Projects />} />
          {/* // <Route path="/contact" element={<Contact />} />   */}
        </Routes> 
      </main>
      <Footer />
    </>
  );
}

export default App;
