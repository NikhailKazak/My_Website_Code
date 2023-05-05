/*homepage.jsx*/

//Import(s)
import React from "react";
import "../pages/homepage.css";
import Logo from "../images/Logo2.png"

//View to return 
const LandingPage = () => {
  return (
    
    <div class="Main">
        <title>Nikhail's Site</title>

        <div class="BODY">
          <div class="HEADER">Welcome to my Website!</div>
          
          <div class="VERSION">
              <p>Version 1.3.1</p>
              <div class="icon"><img class="Logo" src={Logo} alt="My Logo"/></div>
          </div>

          <div class="BUTTONS">
            
            <div class="PROFNET">
              <p>Networks & Websites:</p>
              <a href="https://github.com/NikhailKazak" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
              </a>
              <a href="https://ca.linkedin.com/in/nikhail-kazak-53509b196" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
              </a>
            </div>

            
            <div class="CONTENT">  
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
            

          </div>

        </div>
        
    </div>
    
  );
};

export default LandingPage;