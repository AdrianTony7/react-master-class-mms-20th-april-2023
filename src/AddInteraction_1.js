import React from "react";
import "./classNaming.css"

export default function AddInteraction_1() {
    return (
      <Toolbar
        onPlayMovie={() => alert('Playing!')}
        onUploadImage={() => alert('Uploading!')}
      />
    );
  }
  
  function Toolbar({ onPlayMovie, onUploadImage }) {
    return (
      <div>
         <Button onClick={onPlayMovie}>
          Play Movie
        </Button>
        <Button onClick={onUploadImage}>
          Upload Image
        </Button>
      </div>
    );
  }
  
  function Button({ onClick, children }) {
    return (
      <button className="classNamer" onClick={onClick}>
        {children}
      </button>
    ); 
  }