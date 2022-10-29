import React from "react";
import Tilt from "react-parallax-tilt";
// import "./Logo.css";
import brain from "./brain.png";

const Logo = () => {
    return (
        <div className="ma4 mt0">
            <Tilt className="Tilt br2 shadow-2" style={{
                height: '200px',
                width: "200px",
                borderRadius: "25px",
                background: "linear-gradient(to left, rgb(68, 148, 177), rgb(130, 67, 67))",
            }}>
                <img src={brain} alt="Logo" style={{scale: "0.8"}}/>
            </Tilt>
        </div>
    );
}

export default Logo;