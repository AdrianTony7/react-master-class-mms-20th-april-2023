import React from "react"

// function doSomething(anyName){
//     return alert(anyName);
// }

const doSomething = (anyName) => alert(anyName);



export default function EventArgument(){
    
    return (
        <button onClick={()=>doSomething(54)}>
            Click this
        </button>
    );
 
}

