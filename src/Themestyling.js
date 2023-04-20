import React from "react";

const person = {
    name: 'Gregorio Y. Zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    },
    theme1: {
        height:'100px', 
        width: '100px'
    }
  };
  
  export default function Themestyling() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img style={person.theme1}
          className="avatar"
          src="me.jpg"
          alt="Gregorio Y. Zara"
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    );
  }
  