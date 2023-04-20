import React from "react";

function Profile1() {
  return (
    <img
      src="html.png"
      alt="Katherine Johnson"
    />
  );
}

function Profile2() {
  return (
    <img 
    src="logo192.png" 
    alt="Katherine Johnson"/>
  );
}

function Profile3() {
  return (
    <img
      src="css3.png"
      alt="Katherine Johnson"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile1 />
      <Profile2 />
      <Profile3 />
    </section>
  );
}
