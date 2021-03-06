import React from "react";
import './ImageLinkForm.css'

const ImageLinkForm = () => {
  return (
    <div>
      <p className="f3 tc b">
        {"Detect faces in your pictures. Give it a try."}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-3">
          <input className="f4 pa2 w-70 center" type="text" onChange/>
          <button className="w-30 grow f4 link ph3 mt1 pv2 dib white bg-purple b">
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
