import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

