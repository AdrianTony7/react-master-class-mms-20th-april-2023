import React from "react";

// function Button({ onClick, children }) {
//     return (
//       <button onClick={onClick}>
//         {children}
//       </button>
//     );
//   }
  
  function PlayButton({ movieName }) {
    function handlePlayClick() {
      alert(`Playing ${movieName}!`);
    }
  
    return (
      <button onClick={handlePlayClick}>
        Play "{movieName}"
      </button>
    );
  }
  
  function UploadButton() {
    return (
      <button onClick={() => alert('Uploading!')}>
        Upload Image
      </button>
    );
  }
  
  export default function EventHandler2() {
    return (
      <div>
        <PlayButton movieName="Kiki's Delivery Service" />
        <UploadButton />
      </div>
    );
  }