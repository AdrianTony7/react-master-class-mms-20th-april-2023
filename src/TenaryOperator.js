import React from 'react';


const x = 15;
const jsxTenaryOperator = 
<h1>
    {(x) < 10 ? "X is less than 10" : "X is NOT less than 10"}
    <br></br>
    <br></br>
    <br></br>
    {5+5*20}
</h1>;


function TenaryOperator(){
    return jsxTenaryOperator;
} 

export default TenaryOperator;