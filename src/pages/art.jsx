/*art.jsx*/

//Import(s)
import React, { useState } from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai'
import "../pages/art.css";
import Sidebar from './Sidebar'
import DRW1 from "../images/Drawing_Ahsoka.png"
import DRW2 from "../images/Drawing_Gwenom.png"
import DRW3 from "../images/Drawing_MegaLucario.png"
import DRW4 from "../images/Drawing_Raven.png"
import DRW5 from "../images/Drawing_Vader.png"

  
//View to return 
const ArtPage = () => {
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
    
    <div class="Main">
        <title>Nikhail's Site</title>
        <div class="grid-container">
        <div class="grid-item-sidebar"><Sidebar/></div>
            <div class="grid-item-non-sidebar"><b>Art Gallery</b>
              <div class="Note1">
                Welcome to my art wall! Click the arrows to view the next or last image
              </div>
              <div class="intro-bottom">
                <div class="intro-section">
                  <img class="Art-Gallery" alt="Gallery" src={images[i]} />
                  <div class="Buttons-Art">          
                    <button class="Buttons-Art-Lbtn" onClick={handleClickDec}><AiOutlineArrowLeft/></button>

                    <button class="Buttons-Art-Rbtn" onClick={handleClickInc}><AiOutlineArrowRight/></button>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </div>
  );
};
export default ArtPage;