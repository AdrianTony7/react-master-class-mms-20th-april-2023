import React from 'react';

const myElement = (
  <>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </>
);

function TopLevelTag(){
    return myElement;
}

export default TopLevelTag;