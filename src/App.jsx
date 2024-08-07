import React from "react";
import Home from "./pages/Home-page/homepage";
import About from "./pages/About-page/aboutpage";
import Contact from "./pages/Contact-page/contactpage";
import Resume from "./pages/Resume-page/resume";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = ( ) =>{
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/resume" element={<Resume />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App