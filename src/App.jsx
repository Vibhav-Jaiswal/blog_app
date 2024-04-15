import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog:id" element={<Blog />} />
      <Route path="/about" element={<About />} />
     </Routes>
    </BrowserRouter>
  )
};

export default App;
