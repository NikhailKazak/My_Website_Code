/*art.jsx*/

//Import(s)
import React, { useState, useEffect } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import "../pages/art.css";
import Sidebar from './Sidebar'
import DRW1 from "../images/Drawing_Ahsoka.png"
import DRW2 from "../images/Drawing_Gwenom.png"
import DRW3 from "../images/Drawing_MegaLucario.png"
import DRW4 from "../images/Drawing_Raven.png"
import DRW5 from "../images/Drawing_Vader.png"
import { logEvent } from 'firebase/analytics';

//View to return 
const ArtPage = ({ analytics }) => {

  useEffect(() => {
    // Log a custom event to Firebase Analytics
    logEvent(analytics, 'page_view', { page_path: './art' });
  }, [analytics]);

  var images = [
    DRW1,
    DRW2,
    DRW3,
    DRW4,
    DRW5
  ];

  var [i, incrementIndex] = useState(0)
  //var curImage = useState(images[i]);

  function handleClickInc() {
    if(i+1<=images.length-1){
      incrementIndex(i+=1)
    }
    else{
      incrementIndex(i=0)
    }
    //console.log("Image to display"+images[i])
  }
  function handleClickDec() {
    if(i-1>=0){
      incrementIndex(i-=1)
    }
    else{
      incrementIndex(i=images.length-1)
    }
    //console.log("Image to display"+images[i])
  }

  return (
    
    <div className="Main">
        <title>Nikhail's Site</title>
        <div className="grid-container">
        <div className="grid-item-sidebar"><Sidebar/></div>
            <div className="grid-item-non-sidebar"><b>Art Gallery</b>
              <div className="Note1">
                Welcome to my art wall, the place where I post my 
                art in a fancy, little slideshow! 
                Click the arrows to view the next or last image (more to
                come at a later date)
              </div>
              <div className="intro-bottom">
                <div className="intro-section">
                  <img className="Art-Gallery" alt="Gallery" src={images[i]} />
                  <div className="Buttons-Art">          
                    <button className="Buttons-Art-Lbtn" onClick={handleClickDec}><AiOutlineArrowLeft/></button>

                    <button className="Buttons-Art-Rbtn" onClick={handleClickInc}><AiOutlineArrowRight/></button>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </div>
  );
};
export default ArtPage;