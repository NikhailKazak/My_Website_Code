/*bio.jsx*/

//Import(s)
import React from "react";
import "../pages/bio.css";
import Sidebar from './Sidebar'
import PFP from "../images/pic0.png"

  
//View to return 
const BioPage = () => {
  return (
    
    <div class="Main">
        <title>Nikhail's Site</title>
        <div class="grid-container">
            <div class="grid-item-sidebar"><Sidebar/></div>
            <div class="grid-item-non-sidebar"><b>About Me</b>
                <div class='Note1'>
                You can checkout my work at any of the links below
                </div>
                <div class="icon"><img class="PFP" src={PFP} alt=""/></div>
                <div class="Buttons-General">
                    <div class="Note2">Professional Networks & Websites:</div>
                    <div class="BUTTONS">

                        <a href="https://github.com/NikhailKazak" target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                        </a>

                        <a href="https://ca.linkedin.com/in/nikhail-kazak-53509b196" target="_blank" rel="noopener noreferrer">
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div class="Note3">A little bit about me...</div>
                    <div class="Note3">
                        I am a 4th year student at Carleton University in Ottawa, Ontario. 
                        Currently, I am interning at Warner Bros. Discovery, as a Software
                        Tester. As the name implies, I get to test software to ensure that 
                        any action performed on a given application results in a 
                        predicatable outcome. In addition to this, I also get to automate 
                        these tests. As for my hobbies, I enjoy programming in addition to
                        video gaming, drawing, photography and reading.
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default BioPage;