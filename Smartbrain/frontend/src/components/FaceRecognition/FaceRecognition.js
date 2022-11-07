import React from "react";
import "./FaceRecognition.css";

const FaceRecognition = ({ imgURL, box }) => {
  console.log("boxiiii: ", box.topRow)
  return (
    <div className="center">
      <div className="absolute mt2">
        <img
          src={imgURL}
          alt="Uploaded img for face recognition"
          id="inputIMG"
          style={{
            maxWidth: "500px",
            maxHeight: "500px"
          }}
        />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol
          }}
        ></div>
      </div>
      
    </div>
  );
};

export default FaceRecognition;
