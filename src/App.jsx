import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import "./App.css";

import { About, Contact, Projects } from "./pages";

import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <main className="bg-slate-300/20 h-full">
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}

export default App;
