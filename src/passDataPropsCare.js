
import React from "react";

//Props
const PassDataPropsCar = (props) =>{
    return ( 
        <>
            <span>{props.name}</span>
            <span>{props.color}</span>
            <span>{props.model}</span>
            <span>{props.year_production}</span>
        </>
    )
}

export default PassDataPropsCar;
