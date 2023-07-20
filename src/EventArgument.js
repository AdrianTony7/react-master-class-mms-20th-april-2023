import React from "react";

const doSomething = (anyName) => alert(anyName);

const doArithmetic = (var1, var2, var3) => {
  const sum = var1 + var2 + var3;
  alert(sum);
};

const EventArgument = () => {  
    return (
    <>
      <EventArgument1 />
      <hr />
      <EventArgument2 />
      <hr />
    </>
  );
};

const EventArgument1 = () => {
  return <button onClick={() => doSomething(54)}>Click this</button>;
};

const EventArgument2 = () => {
  return <button onClick={() => doArithmetic(1, 2, 3)}>Click this</button>;
};
export default EventArgument;
