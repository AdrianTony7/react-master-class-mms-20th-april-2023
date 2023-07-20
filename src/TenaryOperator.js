import React from 'react';

let m = "man";
const x = 15;

if(m === "female") 
{
    m = "Nnenna"
} 
else
{
    m = "Sam"
}

const jsxTenaryOperator = 
<h1>
    {(x) < 10 ? "X is less than 10" : "X is NOT less than 10"}
    <br></br>
    <br></br>
    {(m=="female") ? "Nnenna" : "Sam"};
</h1>;





function TenaryOperator(){
    return jsxTenaryOperator;
} 

export default TenaryOperator;