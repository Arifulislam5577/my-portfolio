import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Index from "./components/Index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" index element={<Index />} />
          <Route path="skill" element={<Skill />} />
          <Route path="Project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
