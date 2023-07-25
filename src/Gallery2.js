import React from "react";

// import { getImageUrl } from './utils.js';

// Utility
function getImageUrl(imageId, size = "s") {
  return "https://i.imgur.com/" + imageId + size + ".jpg";
}


const style1 =
{
    display: "flex",
    justifyContent: "center",
} 

const style2 =
{
    borderRadius:"50px"
}

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize = 70,
}) {
  return (
    <section style={{border: "1px solid #fff", marginBottom:"10px"}}>
        <div style={style1}>
            <h2 style={{color:"#fff", listStyle:"none"}}>{name}</h2>
        </div>
        <div style={style1}>
            <img style={style2}
                className="avatar"
                src={getImageUrl(imageId)}
                alt={name}
                width={imageSize}
                height={imageSize}
            />
        </div>
      <ul style={{textAlign:"center"}}>
        <li style={{color:"#fff", listStyle:"none"}}>
          <b>Profession:</b> {profession}
        </li>
        <li style={{color:"#fff", listStyle:"none"}}>
          <b>Awards: {awards.length} </b>({awards.join(", ")})
        </li>
        <li style={{color:"#fff", listStyle:"none"}}>
          <b>Discovered: </b>
          {discovery}
        </li>
      </ul>
    </section>
  );
}

export default function Gallery2() {
  return (
    <div style={{backgroundColor:"#000", justifyContent:"center"}}>
      <h1 style={{color:"#fff", textAlign:"center", border: "1px solid #fff", marginBottom:"10px"}}>Notable Scientists</h1>
      <Profile
        imageId="YfeOqp2"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          "Nobel Prize in Physics",
          "Nobel Prize in Chemistry",
          "Davy Medal",
          "Matteucci Medal",
        ]}
      />
      
      
      <Profile
        imageId="YfeOqp2"
        name="Katsuko Saruhashi"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
      
      
      <Profile
        imageId="YfeOqp2"
        name="Maven Becamp"
        profession="Software Developer"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for Java Coding", "Tanaka Prize"]}
      />
      
      
      <Profile
        imageId="YfeOqp2"
        name="Sam Nornu"
        profession="geochemist"
        discovery="a method for measuring carbon dioxide in seawater"
        awards={["Miyake Prize for geochemistry", "Tanaka Prize"]}
      />
    </div>
  );
}
