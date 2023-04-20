import React from "react";

//Props
function Car(props){
    return ( 
        <>
            <span>{props.name}.
            <br></br>
            <br></br>
            How many props does the car have?   
                  {' '+carProps.length}</span>
        </>
    )
}

let carProps = ["car name: Venza, ", "color: yellow, ", 
    "Model: Cardillac, ", "Manufactured on: 2022"];

export default function PassArrayProps(){
    return (
        <>
            <div style={{marginLeft: '100px', fontSize: '40px'}}> 
              - I have a car with props like: <Car name={carProps}/>.
            </div>
        </>
    );
}



