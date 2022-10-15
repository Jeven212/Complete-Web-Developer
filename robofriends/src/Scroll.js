import React from "react";

const Scroll = ({ children }) => {
    return (
        <div 
        className="bg-light-green"
        style={{ 
            position:"fixed", 
            zIndex:1000, 
            left: "50%", 
            transform: "translateX(-50%)",
            borderRadius: "10px",
            padding: "0 2em 2em 2em",
            marginTop: "2em"
            }}>
            { children }
        </div>
    );
};

export default Scroll;