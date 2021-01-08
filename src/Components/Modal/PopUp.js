import React from 'react';
import './PopUp.css';


export default function PopUp(open, close) {
    if (!open) return null
    
    return (
    <div className="overlay">
    <div className="Modal">
        <h1 className="exit" onClick={close}>x</h1>
    </div>
    </div>
    )
}