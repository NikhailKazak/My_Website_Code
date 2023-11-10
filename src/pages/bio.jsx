/*bio.jsx*/

//Import(s)
import React, { useEffect } from 'react';
import "../pages/bio.css";
import Sidebar from './Sidebar'
import PFP from "../images/pic1_1.png"
import { logEvent } from 'firebase/analytics';
  
//View to return 
const BioPage = ({ analytics }) => {

  useEffect(() => {
    // Log a custom event to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: './bio' });
  }, [analytics]);

  return (
    
    <div className="Main">
        <title>Nikhail's Site</title>
        <div className="grid-container">
            <div className="grid-item-sidebar"><Sidebar/></div>
            <div className="grid-item-non-sidebar"><b>About Me</b>
                <div className='Note1'>
                You can checkout my work at any of the links below
                </div>
                <div className="icon"><img className="PFP" src={PFP} alt=""/></div>
                <div className="Buttons-General">
                    <div className="Note2">Professional Networks & Websites:</div>
                    <div className="BUTTONS">

                        <a href="https://github.com/NikhailKazak" target="_blank" rel="noopener noreferrer">
                            <span>GitHub</span>
                        </a>

                        <a href="https://ca.linkedin.com/in/nikhail-kazak" target="_blank" rel="noopener noreferrer">
                            <span>LinkedIn</span>
                        </a>
                    </div>

                    <div className="Note3">A little bit about me...</div>
                    <div className="Note3">
                        I am a 4th year Computer Science student at Carleton University in 
                        Ottawa, Ontario. 
                        Currently, I am attending summer courses and will be returning to 
                        Warner Bros. Discovery in the fall, as an intern. 
                        As far as hobbies go, I enjoy programming in addition to
                        video gaming, drawing, photography and more. 
                        Anyways, I hope you like the site, and feel free to 
                        contact me at any of the given links!
                        
                        <p> <br></br>  <br></br> </p>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
  );
};
export default BioPage;