import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Skill from "./components/Skill";
import Home from "./components/Pages/Home";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
