import React from "react";

const utilities = {
    alerter : {
        alert1: 'Christian',
        alert2: 'Samuel',
        alert3: 'Life'
    },
    styleButton: {
        backgroundColor:'#2fdb2c',
        color: 'red',
        border: '0px',
        marginBottom: '3px',
        width: '100%'
    }
}


const doSomething = (anyName) => alert(anyName);

export default function EventVariableArgument(){
    return (
        <div>
            <button style={utilities.styleButton} 
            onClick={()=>doSomething(utilities.alerter.alert1)}>
                Click this
            </button>
            <button style={utilities.styleButton} 
            onClick={()=>doSomething(utilities.alerter.alert2)}>
                Click this
            </button>
            <button style={utilities.styleButton} 
            onClick={()=>doSomething(utilities.alerter.alert3)}>
                Click this
            </button>
        </div>
    )
}
