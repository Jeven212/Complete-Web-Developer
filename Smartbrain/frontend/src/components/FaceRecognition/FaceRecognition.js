import React from "react";

const FaceRecognition = ({ imgURL }) => {
    return (
        <div className="center">
            <img src={ imgURL } alt="Uploaded img for face recognition" style={{
                maxWidth: "300px",
                maxHeight: "300px"
            }} />
        </div>
    );
}

export default FaceRecognition;