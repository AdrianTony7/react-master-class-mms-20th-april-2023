import React from "react";

const Profile1 = () => {
  return (
    <img
      src="html.png"
      alt="Katherine Johnson"
    />
  );
}

const Profile2 = () => {
  return (
    <img 
    src="logo192.png" 
    alt="Katherine Johnson"/>
  );
}

const Profile3 = () => {
  return (
    <img
      src="css3.png"
      alt="Katherine Johnson"
    />
  );
}

const Gallery = () => {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile1 />
      <Profile2 />
      <Profile3 />
    </section>
  );
}

export default Gallery;