import React from "react"
import memelogo from '../meme-logo.png';

export default function Header() {
    return (
        <header className="header">
        <div>

        <img src={memelogo} className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>

        </div>
           
           
        </header>
    )
}