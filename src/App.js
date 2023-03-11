/*App.js*/

//Import(s)
import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import LandingPage from "./pages/homepage"; //homepage.jsx
import BioPage from "./pages/bio"; //bio.jsx
import ArtPage from "./pages/art"; //art.jsx
import BlogPage from "./pages/blog"; //blog.jsx


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/bio" element={<BioPage/>} />
            <Route path="/art" element={<ArtPage/>} />
            <Route path="/blog" element={<BlogPage/>} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;