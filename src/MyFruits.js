//
import React from 'react';

const myArray = ['apple', 'banana', 'orange'];

const myFruits = myArray.map((item) => <p>{item}</p>);

function MyFruits(){
    return myFruits;
}

export default MyFruits;        


