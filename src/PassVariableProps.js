import React from "react";

//Props
function Car(props){
    return ( 
        <>
            <span>{props.name}</span>
            <span>{props.color}</span>
            <span>{props.model}</span>
            <span>{props.year_production}</span>
        </>
    )
}

export default function PassVariableProps(){
    let carName = "Venza";
    let colorful = "yellow";
    let modeller = "Cardillac";
    let manufactured = "Vanza";
    
    return (
        <>
            <div style={{marginLeft: '100px', fontSize: '40px'}}> 
                - I have a car called <Car name={carName}/>; 
                It is <Car color={colorful}/> in color; 
                produced in <Car year_production={manufactured}/>; 
                made by <Car model= {modeller}/>.
            </div>
        </>
    );
}



