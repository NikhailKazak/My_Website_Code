/*bio.jsx*/

//Import(s)
import React from "react";
import "../pages/bio.css";
import Sidebar from './Sidebar'
import PFP from "../images/pic1_1.png"

  
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
                        I am a 4th year Computer Science student at Carleton University in 
                        Ottawa, Ontario. 
                        Currently, I am attending summer courses and will be returning to 
                        Warner Bros. Discovery in the fall, as an intern. 
                        As far as hobbies go, I enjoy programming in addition to
                        video gaming, drawing, photography and more. Recently, I've picked
                        up (after several attempts to get back into it XD) Unreal Engine 5.
                        Game and Cinematic development can be a very time consuming process,
                        especially when it's a hobby and not just something you have time to 
                        do everyday... Anyways, I hope you like the site, and feel free to 
                        contact me at any of the given links :)
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};
export default BioPage;