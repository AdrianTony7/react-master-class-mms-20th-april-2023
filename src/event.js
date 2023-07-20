import React from "react"

// function doSomething(){
//     return alert('Doing Something!!!');
// }

// const doSomething = () =>{
//     return alert('Doing SomeX!!!');
// }

const doSomething = () => alert('Doing SomeZ!!!');

const doAnotherThing = () =>{
    alert("An image can be displayed!!!");
}



const Event1 = () =>{
    return (
    <>
        <button onClick={() => alert('Doing SomeZ!!!')}>Click this</button><hr/>
    </>
    );
}

const Event2 = () =>{
    return (
    <>
        <button onClick={doAnotherThing}>Click this</button><hr/>
    </>
    );
}

const Event3 = () =>{
    return (
    <>
        <button onClick={doSomething}>Click this</button><hr/>
    </>
    );
}

const Event4 = () =>{
    return (
    <>
        <button onClick={doSomething}>Click this</button><hr/>
    </>
    );
}

const Event5 = () =>{
    return (
    <>
        <button onClick={doSomething}>Click this</button><hr/>
    </>
    );
}



const Event = () =>{
    return(
        <div>
            <Event1/>
            <Event2/>
            <Event3/>
            <Event4/>
            <Event5/>
        </div>
    )
}

export default Event;


