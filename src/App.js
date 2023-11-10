/*App.js*/

//Import(s)
import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import LandingPage from "./pages/homepage"; //homepage.jsx
import BioPage from "./pages/bio"; //bio.jsx
import ArtPage from "./pages/art"; //art.jsx
import BlogPage from "./pages/blog"; //blog.jsx
import ContactPage from "./pages/contact_form"; //contact_form.jsx



class App extends Component {
  // Initialize Firebase and analytics in the constructor
  constructor(props) {
    super(props);

    // Initialize Firebase
    const firebaseConfig = {
      apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
      authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
      storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.REACT_APP_FIREBASE_APP_ID,
      measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
    };

    // Initialize Firebase app and analytics
    this.app = initializeApp(firebaseConfig);
    this.analytics = getAnalytics(this.app);
  }

  render() {
    return (
      <div>
        <Router>
          <Routes>
            {/* Pass the analytics prop to each route component */}
            <Route path="/" element={<LandingPage analytics={this.analytics} />} />
            <Route path="/bio" element={<BioPage analytics={this.analytics} />} />
            <Route path="/art" element={<ArtPage analytics={this.analytics} />} />
            <Route path="/blog" element={<BlogPage analytics={this.analytics} />} />
            <Route path="/contact_form" element={<ContactPage analytics={this.analytics} />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;