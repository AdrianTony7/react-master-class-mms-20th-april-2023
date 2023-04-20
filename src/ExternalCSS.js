import React from "react";
import "./ExternalCSS.css"



function Heading(){
    return(
        <p>
            <h1>REACT MASTER CLASS</h1>
        </p>
    )
}
function WriteUp1(){
    return(
        <p>
            <span>lsnlkv llkv v lksnlknkr lknsvk lksnlns</span>
        </p>
    )
}

function FirstSection(){
    return(
        <div className='joel'>
            <Heading/>
            <WriteUp1/>
        </div>
    )
}

function SecondSection(){
    return(
        <div className='azez'>
            
        </div>
    )
}

export default function ExternalCSS(){
    return(
        <>
            <FirstSection/>
            <SecondSection/>
        </>
    )
}