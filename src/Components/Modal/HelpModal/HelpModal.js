import React from 'react';
import './HelpModal.css';
import CloseIcon from "./closeicon.png";
import {useHistory} from 'react-router-dom';
import funfacticon from './funfacticon.png';
import floatingtexticon from './floatingtexticon.png';
import roommap from './roommap.png';

export default function HelpModal() {
    const history = useHistory();
    return(
        <div className="helpModalView">
        <div className="helpModal">
            <img onClick={() => history.push("/")} src={CloseIcon} alt="img" className="closeIcons"/>
            <div className="helpcontent">
                <div className="helptext">
                    <p><b>Navigate the 3D environment with your finger/cursor. <br/><br/>Click on the floating <img src={floatingtexticon} alt="img" style={{ width:"12vh", height:"auto"}}/> to reveal more information.</b>  
                    <br/><br/>
                  <b>Click on <img src={funfacticon} alt="img" style={{ width:"4vh", height:"auto"}}/> for a fun fact about me.</b></p>
                </div>
                <div className="helpicons">
                   <img src={roommap} alt="img" style={{display:"flex", width:"100%", height:"auto", margin:"2rem", maxWidth:"40rem"}}/>
                </div>
            </div>
        </div>
        </div>
    )

}