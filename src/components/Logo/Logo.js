import React from 'react'
import Tilt from "react-parallax-tilt";
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
    return (
      <div className="ma4 mt0 br2 shadow-2 dib ">
        <Tilt>
          <div
            className="Tilt"
            style={{
              height: "125px",
              width: "125px", 
            }}
          >
            <div className="dib">
              <img className='pa0' alt="logo" src={brain}></img>
            </div>
          </div>
        </Tilt>
      </div>
    );
}

export default Logo