import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onInputSubmit }) => {    
    return (
        <div>
            <h1 className="center">
                {"Detect faces! Go foward."}
            </h1>
            <div className="center">
                <div className="form pa4 br3 shadow-5">
                    <input onChange={ onInputChange } type="text" placeholder="Image-URL" className="f4 pa2 w-70 mb2 center"/>
                    <input onClick={ onInputSubmit } type="button" value="Scan"  className="w-30 grow f4 link ph3 pv2 white bg-green center"/>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;