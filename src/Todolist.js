import React from "react";

  const myStyle = 
  {
    backgroundColor: 'black', color: 'pink'
  }

  const TodoList = () => {
      return(
        <ul style={myStyle}>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      );
    }
    
  export default TodoList;