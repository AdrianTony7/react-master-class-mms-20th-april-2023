import React from "react";

const doSomething = (anyName) => alert(anyName);

const doArithmetic = (var1, var2, var3) => {
  const sum = var1 +" "+ var2 +" "+ var3;
  alert(sum);
};

const EventArgument = () => (
    <>
      <EventArgument1 daffodil="A Lady" />
      <hr />
      <EventArgument2 daffodil="Prophetess" sophia="Pastor" amaka="Evangelist" />
      <hr />
    </>
  );


const EventArgument1 = ({daffodil}) => {

  return <button onClick={() => doSomething(daffodil)}>Click this</button>;
};

const EventArgument2 = ({daffodil, sophia, amaka}) => {
  return <button onClick={() => doArithmetic(daffodil, sophia, amaka)}>Click this</button>;
};

export default EventArgument;
