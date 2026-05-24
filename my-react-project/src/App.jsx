import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"

import Navbar from "./navbar.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
