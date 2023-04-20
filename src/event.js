import React from "react"

// function doSomething(){
//     return alert('Doing Something!!!');
// }

// const doSomething = () =>{
//     return alert('Doing SomeX!!!');
// }

const doSomething = () => alert('Doing SomeZ!!!');



function Event(){
    
    return (
    <button onClick={doSomething}>Click this</button>
    );
 
}


export default Event;


