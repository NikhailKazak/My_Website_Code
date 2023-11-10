/*homepage.jsx*/

//Import(s)
import React, { useEffect } from 'react';
import "../pages/homepage.css";
import Logo from "../images/Logo2.png"
import { logEvent } from 'firebase/analytics';

//View to return 
const LandingPage = ({ analytics }) => {

  useEffect(() => {
    // Log a custom event to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: './homepage' });
  }, [analytics]);

  return (
    
    <div className="Main">
        <title>Nikhail's Site</title>

        <div className="BODY">
          <div className="HEADER">Welcome to my Website!</div>
          
          <div className="VERSION">
              <p>Version 1.4</p>
              <div className="icon"><img className="Logo" src={Logo} alt="My Logo"/></div>
          </div>

          <div className="BUTTONS">
            
            <div className="PROFNET">
              <p>Networks & Websites:</p>
              <a href="https://github.com/NikhailKazak" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
              </a>
              <a href="https://ca.linkedin.com/in/nikhail-kazak" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
              </a>
            </div>

            
            <div className="CONTENT">  
              <p>Content:</p>    
              <a href="./bio">
                  <span>Bio</span>
              </a>

              <a href="./Blog">
                  <span>Blog</span>
              </a>

              <a href="./art">
                  <span>Art</span>
              </a>
              
            </div>

            <div className="CONTENT">
              <p>Contact Me:</p>
              <a href="./contact_form">
                  <span>Contact Me</span>
              </a>
            </div>
            

          </div>

        </div>
        
    </div>
    
  );
};

export default LandingPage;