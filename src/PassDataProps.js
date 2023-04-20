
import React from "react";

//Props
export default function Car(props){
    return ( 
        <>
            <span>{props.name}</span>
            <span>{props.color}</span>
            <span>{props.model}</span>
            <span>{props.year_production}</span>
        </>
    )
}



